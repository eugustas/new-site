
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyan: {
					DEFAULT: '#00FFFF',
					dark: '#00CCCC',
					light: '#80FFFF',
				},
				dark: {
					DEFAULT: '#121212',
					lighter: '#1e1e1e',
					darker: '#0a0a0a',
					card: '#2d2d2d',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'typing': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: '#00FFFF' }
				},
				'draw-line': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'pulse-cyan': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 255, 255, 0.4)' },
					'50%': { boxShadow: '0 0 0 10px rgba(0, 255, 255, 0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(200%)' }
				},
				'border-pulse': {
					'0%, 100%': { borderColor: 'rgba(0, 255, 255, 0.3)' },
					'50%': { borderColor: 'rgba(0, 255, 255, 1)' }
				},
				'text-reflection': {
					'0%': { textShadow: '0 0 5px rgba(0, 255, 255, 0)' },
					'50%': { textShadow: '0 0 20px rgba(0, 255, 255, 0.7)' },
					'100%': { textShadow: '0 0 5px rgba(0, 255, 255, 0)' }
				},
				'border-flow': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'slide-left': 'slide-left 15s linear infinite',
				'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
				'draw-line': 'draw-line 1s ease-out forwards',
				'pulse-cyan': 'pulse-cyan 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-right': 'slide-right 1.5s ease-in-out infinite',
				'border-pulse': 'border-pulse 2s ease-in-out infinite',
				'text-reflection': 'text-reflection 2s ease-in-out infinite',
				'border-flow': 'border-flow 2s linear infinite',
				'border-rotate': 'border-rotate 4s linear infinite'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

