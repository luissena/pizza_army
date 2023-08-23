import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pizza Army",
  description: "Teste técnico para a Caffeine Army",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
