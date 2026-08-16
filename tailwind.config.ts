import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        // Outfit — secondary typeface, carries body copy and UI.
        sans: [
          'var(--font-outfit)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        // Lufga — primary typeface, carries headings and the wordmark.
        // Falls through to Outfit until the licensed files are installed.
        heading: [
          'var(--font-lufga)',
          'var(--font-outfit)',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Arial',
          'sans-serif',
        ],
        logo: [
          'var(--font-lufga)',
          'var(--font-outfit)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
  		colors: {
        // Raw brand palette — reach for these only when a semantic token
        // genuinely does not fit (logo marks, illustrations, charts).
        brand: {
          teal: 'hsl(var(--brand-teal))',
          orange: 'hsl(var(--brand-orange))',
          steel: 'hsl(var(--brand-steel))',
          slate: 'hsl(var(--brand-slate))',
          offwhite: 'hsl(var(--brand-offwhite))',
        },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
        cta: {
          DEFAULT: 'hsl(var(--cta))',
          foreground: 'hsl(var(--cta-foreground))',
          strong: 'hsl(var(--cta-strong))',
        },
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      boxShadow: {
        // Shadows tinted with Teal Blue rather than neutral black, so depth
        // reads as part of the palette instead of sitting on top of it.
        brand: '0 10px 30px -12px hsl(var(--brand-teal) / 0.28)',
        'brand-lg': '0 24px 60px -20px hsl(var(--brand-teal) / 0.35)',
        cta: '0 10px 28px -10px hsl(var(--brand-orange) / 0.55)',
      },
      letterSpacing: {
        // Lufga is a large-x-height geometric — display sizes want it tighter.
        display: '-0.03em',
      },
      transitionTimingFunction: {
        // The overshoot curve used by the colour swatches. Named here because
        // `ease-[cubic-bezier(...)]` as an arbitrary value is ambiguous to
        // Tailwind and warns on every build.
        overshoot: 'cubic-bezier(0.175, 0.885, 0.32, 1.1)',
      },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'cell-ripple': {
  				'0%': {
  					transform: 'scale(1)',
  					backgroundColor: 'var(--cell-fill-color)',
  				},
  				'50%': {
  					transform: 'scale(1.1)',
  					backgroundColor: 'hsl(var(--brand-orange) / 0.4)',
  				},
  				'100%': {
  					transform: 'scale(1)',
  					backgroundColor: 'var(--cell-fill-color)',
  				},
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'cell-ripple': 'cell-ripple var(--duration, 500ms) ease-out var(--delay, 0ms)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
