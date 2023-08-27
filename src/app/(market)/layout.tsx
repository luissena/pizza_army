// app/layout.tsx
import { MyHeader } from "@/components/MyHeader"
import { Metadata } from "next"
import { Suspense } from "react"
import { Providers } from "../providers"

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
        <Providers>
          <MyHeader />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  )
}
