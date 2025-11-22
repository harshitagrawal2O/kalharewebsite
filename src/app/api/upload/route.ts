import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Readable } from "stream";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    console.log("Session:", session ? "exists" : "missing");
    console.log("Access token:", session?.accessToken ? "exists" : "missing");

    if (!session || !session.accessToken) {
      return NextResponse.json(
        { error: "Unauthorized. Please sign in with Google." },
        { status: 401 }
      );
    }

    // Check for session error (token refresh failed)
    if (session.error === "RefreshAccessTokenError") {
      return NextResponse.json(
        { error: "Token expired. Please sign in again." },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    console.log("Uploading file:", file.name, "Size:", file.size);

    // Initialize Google Drive API
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      access_token: session.accessToken,
    });

    const drive = google.drive({ version: "v3", auth: oauth2Client });

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a readable stream from buffer
    const stream = Readable.from(buffer);

    // Upload file to Google Drive
    const driveResponse = await drive.files.create({
      requestBody: {
        name: file.name,
        mimeType: file.type,
        parents: ["root"], // You can create a specific folder and use its ID here
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
      fields: "id, name, mimeType, size, webViewLink, webContentLink",
    });

    const fileId = driveResponse.data.id!;

    // Make the file publicly accessible with anyoneWithLink
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
      fields: "id",
    });

    // Get the file with updated permissions
    const fileData = await drive.files.get({
      fileId: fileId,
      fields: "id, name, mimeType, size, webViewLink, webContentLink",
    });

    // Generate multiple download link formats
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`;
    const alternateUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;

    return NextResponse.json({
      success: true,
      file: {
        id: fileData.data.id,
        name: fileData.data.name,
        size: parseInt(fileData.data.size || "0"),
        mimeType: fileData.data.mimeType,
        url: downloadUrl,
        viewUrl: alternateUrl,
        directUrl: fileData.data.webContentLink || downloadUrl,
      },
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}
