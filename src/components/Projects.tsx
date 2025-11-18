import { icons } from "../assets/icons"

export default function Projects(){
    return (
        <div className="projects">
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
              <button className="booking-system">
                Jakiś projekt
              </button>
            </div>
          
          </div>
        </div>
    )
}