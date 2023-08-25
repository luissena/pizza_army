// app/layout.tsx
import { MyHeader } from "@/components/MyHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pizza Army",
  description: "Teste técnico para a Caffeine Army",
}

export default function MarketLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MyHeader />
        {children}
      </body>
    </html>
  )
}
