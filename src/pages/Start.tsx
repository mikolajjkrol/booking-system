import '../styles/start.css'
import { icons } from "../assets/icons"
import { Link } from 'react-router-dom'

export default function Start() {
    return (
        <main className="col up">
          <h1>Your booking systems</h1>
          <Link to={'/create'}><button className="add">{icons.add} Start your project!</button></Link>
        </main>
    )
}