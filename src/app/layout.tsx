import Link from 'next/link'
import './globals.css'
import Nav from './nav'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
          <header className="flex flex-row max-w-2xl w-4/6 justify-between">
            <h1 className="text-6xl">
              <Link href={'/'}>
                Piano
              </Link>
            </h1>
            <Nav></Nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
