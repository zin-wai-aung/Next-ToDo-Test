import React from 'react'
import "../styles/globals.css";


const Layout = ({children}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className=' flex flex-col justify-center items-center'>{children}</main>
      </body>
    </html>
  );
}

export default Layout