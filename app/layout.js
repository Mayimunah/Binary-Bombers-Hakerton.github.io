import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Art Store',
  description: 'Works of Art',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className='min-h-screen flex flex-col relative'>
        <header className='sticky top-0 bg-white border-b  border-solid border-blue-900 shadow-md z-50
        text-2xl sm:text-4xl sm:p-8 flex items-center justify-between'>
          <Link href='/'>
          <h1 className='uppercase cursor-pointer hover:scale-110'>Art Work</h1>
          </Link>
          <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500 "></i>
        </header>

        <div className='flex-1'>
        {children}

        </div>
        <footer></footer>
      </body>
    </html>
  )
}
