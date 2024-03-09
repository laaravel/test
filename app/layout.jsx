import '@styles/globals.css'

import Nav from '@components/Nav'

export const metadata = {
  title: 'Test',
  description: 'Test for Next'
}

const RootLayout = ({ children }) => {
  return (
    <html Lang='eng'>
      <body>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
      </body>
    </html>
  )
}

export default RootLayout