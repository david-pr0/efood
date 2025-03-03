import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./screens/Home"
import Profile from "./screens/Profile";

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/profile',
      element: <Profile />
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
