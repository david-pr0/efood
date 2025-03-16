import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./screens/Home"
import Profile from "./screens/Profile";
import { Provider } from "react-redux";
import { store } from "./assets/redux/store";

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
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  )
}

export default App
