import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Products from './Pages/Products/Products'
import Layout from './components/layout/Layout'
import Categories from './pages/categories/Categories'
import Users from './pages/users/Users'
import Orders from './pages/Orders/Orders'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Products />} />
            <Route path={"products"} element={<Products />} />
            <Route path={"categories"} element={<Categories />} />
            <Route path={"orders"} element={<Orders />} />
            <Route path={"users"} element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
