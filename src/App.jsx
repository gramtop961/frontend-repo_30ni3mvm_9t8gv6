import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Loesungen from './pages/Loesungen'
import Preise from './pages/Preise'
import ROIRechner from './pages/ROIRechner'
import FAQ from './pages/FAQ'
import Demo from './pages/Demo'
import UeberUns from './pages/UeberUns'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import AGB from './pages/AGB'
import Checkout from './pages/Checkout'
import ThanksDemo from './pages/ThanksDemo'
import ThanksBuy from './pages/ThanksBuy'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/loesungen" element={<Loesungen/>} />
        <Route path="/preise" element={<Preise/>} />
        <Route path="/roi-rechner" element={<ROIRechner/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/demo" element={<Demo/>} />
        <Route path="/ueber-uns" element={<UeberUns/>} />
        <Route path="/impressum" element={<Impressum/>} />
        <Route path="/datenschutz" element={<Datenschutz/>} />
        <Route path="/agb" element={<AGB/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/danke-demo" element={<ThanksDemo/>} />
        <Route path="/danke-kauf" element={<ThanksBuy/>} />
      </Routes>
    </Layout>
  )
}
