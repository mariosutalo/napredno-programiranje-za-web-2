import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import Layout from './components/layout/Layout'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<Layout />}>
            <Route path={"products"} element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
