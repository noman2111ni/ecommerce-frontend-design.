import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./Hero"
import SingleCard5 from "./pages/Section5/SingleCard5"
import OrderCart from "./pages/OrderCard/OrderCart"
import AllOrder from "./pages/Alloder"
import SingleCard4 from "./pages/SingleCard4"
import ProtectedRoute from "./pages/ProtectedRoute"
// import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Hero />} />

          {/* Protected */}
          <Route
            path="/Product2/:id"
            element={
              <ProtectedRoute>
                <SingleCard5 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Product/:id"
            element={
              <ProtectedRoute>
                <SingleCard4 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/OrderCart"
            element={
              <ProtectedRoute>
                <OrderCart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AllOder"
            element={
              <ProtectedRoute>
                <AllOrder />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
