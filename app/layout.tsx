import './globals.css'

export const metadata = {
  title: 'In Loving Memory of Mrs. Comfort Akua Serwaa',
  description: 'Memorial service for Mrs. Comfort Akua Serwaa Amoah (1965-2026)',
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
