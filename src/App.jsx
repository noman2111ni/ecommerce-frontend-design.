import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <>

      <div  style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        {/* ...other components... */}
        <Footer />
      </div>

    </>
  )
}

export default App