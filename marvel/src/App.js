import React from 'react'
import Header from './pages/header/Header'
import AppRoutes from './AppRoutes'
import Footer from './pages/footer/Footer'
import SelectedContextProvider from './components/context/SelectedContextProvider'

export default function App() {

  return (
    <>
      <SelectedContextProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </SelectedContextProvider>
    </>

  )
}
