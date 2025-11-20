import '../styles/start.css'
import { icons } from "../assets/icons"

export default function Start() {
    return (
        <main>
          <h1>Booking systems</h1>
          <button className="add">{icons.add} Start your project!</button>
        </main>
    )
}