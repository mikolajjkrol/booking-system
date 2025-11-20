import Navbar from './components/ui/Navbar'
import Sidebar from './components/ui/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
  <div className="app dark">
      <Navbar />
      <div className="container">
        <Sidebar />
                
      
        <Dashboard />
                

    </div>
  </div>
  )
}

export default App
