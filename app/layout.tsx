import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Monity - Rastreador de Finanças Pessoais com IA",
  icons: {
    icon: "/monity-logo.png",
    apple: "/monity-logo.png",
  },
  description:
    "Controle total das suas finanças com IA que aprende seus hábitos. Rastreie gastos, divida contas em grupo e economize mais. Comece grátis hoje.",
  generator: "v0.app",
  verification: {
    google: "wvkQ65r7sHdnMxDIfL-yR2kV5b-HYo9K9X4ttWB7A_U",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
