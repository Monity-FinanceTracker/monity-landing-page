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
  title: "Monity - Finanças Pessoais com IA | 20x Mais Rápido Que Planilhas",
  icons: {
    icon: "/monity-logo.png",
    apple: "/monity-logo.png",
  },
  description:
    "Domine suas finanças em menos de 10 segundos por dia. IA que aprende seus padrões, divisão de contas sem drama, e clareza financeira total. Usado por 5,000+ brasileiros. Comece grátis.",
  keywords: "finanças pessoais, controle financeiro, IA, divisão de contas, orçamento, app financeiro brasil",
  openGraph: {
    title: 'Monity - Pare de Adivinhar Onde Seu Dinheiro Foi',
    description: 'Usado por 5,000+ brasileiros. 20x mais rápido que planilhas. IA que aprende seus padrões financeiros. Avaliação 4.9/5.',
    type: 'website',
    locale: 'pt_BR',
  },
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WSRW5FN82K"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WSRW5FN82K');
          `}
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
