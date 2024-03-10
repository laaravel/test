import Header from "@components/Header"
import Footer from "@components/Footer"
import '@styles/style.css'

export const metadata = {
  title: 'Test',
  description: 'Test for Next'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='eng'>
      <body>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
      </body>
    </html>
  )
}

export default RootLayout