import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3QDNTD3');`}
        </Script>
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3QDNTD3"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
