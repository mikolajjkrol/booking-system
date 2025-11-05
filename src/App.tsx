import { icons } from "./assets/icons"

function App() {
  return (
    <div className="app dark">
      <nav className="navbar">
        
      </nav>
      <div className="container">
        <div className="sidebar">

        </div>
        <div className="content">
            
            <div className="header">
              <div className="title">
                Your booking systems
              </div>
              <div className="buttons">
                <button className="view">{icons.viewCozy}</button>
                <button className="view">{icons.viewAgenda}</button>
                <button>{icons.add} Add new</button>
              </div>
            </div>
            <div className="projects-list">

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
