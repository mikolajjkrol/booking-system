import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Start from './pages/Start'
import Create from './pages/Create'
import RootLayout from './components/ui/RootLayout'
import ErrorPage from './pages/ErrorPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Start />},
        {path: 'create', element: <Create />},
        {path: 'dashboard', element: <Dashboard />}
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
