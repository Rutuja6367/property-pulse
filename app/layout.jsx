//import React from 'react'
import '@/assets/styles/global.css'

export const metadata = {
  title: 'Prperty Pulse | Find The Perfect Rental',
  description:'ind your dream rental property',
  keywords: 'rental, property, house, apartment, find properties'
}

const lmainLayout = ({children}) => {
  return (
    <html>
      <body>
        <div>
     {children}
    </div>
      </body>  
    </html>
  )
}

export default lmainLayout
