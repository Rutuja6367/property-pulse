//import React from 'react'
import '@/assets/styles/global.css'
import Navbar from '@/components/navbar'

export const metadata = {
  title: 'Prperty Pulse | Find The Perfect Rental',
  description:'ind your dream rental property',
  keywords: 'rental, property, house, apartment, find properties'
}

const lmainLayout = ({children}) => {
  return (
    <html>
      <body>
        <main>
          <Navbar/>
     {children}
    </main>
      </body>  
    </html>
  )
}

export default lmainLayout
