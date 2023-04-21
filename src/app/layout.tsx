import './globals.css'

export const metadata = {
  title: 'YS Quiz',
  description: 'Test your campus knowledge',
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
