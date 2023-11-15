import type { Metadata } from 'next'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { sans, lusitana } from '@/css/fonts'




export const metadata: Metadata = {
  title: 'Azlo App',
  description: 'Azlo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sans.className} antialiased`}>{children}</body>
    </html>
  )
}
