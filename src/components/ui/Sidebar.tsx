import { icons } from '../../assets/icons'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className='item'>{icons.home} <p className="label">Dashboard</p></div>
      <div className='item'>{icons.rocket} <p className="label">Your organization</p></div>
      <div className='item'>{icons.settings} <p className="label">Settings</p></div>
    </div>
  )
}