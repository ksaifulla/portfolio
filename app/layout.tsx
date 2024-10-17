import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khalid Saifulla ',
  description: 'Portfolio of Khalid Saifulla, a FullStack Developer building things for fun.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100 antialiased`}>{children}</body>
    </html>
  )
}
