import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt Output Differ — Compare AI Outputs Across Prompt Versions',
  description: 'Side-by-side diff tool for comparing AI model outputs when testing prompt variations. Built for AI engineers and prompt engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="40688d39-8dc2-4fee-842a-228bbf04658b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
