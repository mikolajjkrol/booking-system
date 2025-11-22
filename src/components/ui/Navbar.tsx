import '../../styles/navbar.css'
import { useLocation } from 'react-router-dom'

const PATH_LABELS: Record<string, string> = {
  '/': '',
  '/dashboard': 'DASHBOARD',
  '/create': 'CREATE A SYSTEM',
}

export default function Navbar() {
  const location = useLocation()
  const exactLabel = PATH_LABELS[location.pathname]

  let title = exactLabel || ''

  return (
    <nav className="navbar">
      {title ? (
          <strong>YOUR SYSTEMS &raquo; {title}</strong>
        ) : (
          <strong>YOUR SYSTEMS</strong>
        )}
    </nav>
  )
}