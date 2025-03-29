import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./screens/Home"
import Profile from "./screens/Profile";
import { Provider } from "react-redux";
import { store } from "./assets/redux/store";
import DataFetcher from "./modules/FetchData";

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/profile/:id',
      element: <Profile />
    }
  ])

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
        <DataFetcher />
      </Provider>
    </>
  )
}

export default App
