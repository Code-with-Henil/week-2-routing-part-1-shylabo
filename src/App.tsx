import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import NotFound from './components/NotFound'
import Products from './components/pages/Products'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Access from './components/pages/Access'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/access" element={<Access />} />
          <Route path="*" element={<NotFound />} />
        </Route> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/access" element={<Access />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
