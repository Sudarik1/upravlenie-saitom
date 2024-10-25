
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

import PagesLayout from "./layouts/PagesLayout"

import Main from "./pages/Main"
import Pages from "./pages/Pages"
import Notes from "./pages/Notes"
import Comments from "./pages/Comments"
import Motto from "./pages/Motto"
import Applications from "./pages/Applications"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = { <PagesLayout /> }>
      <Route path="/" element = { <Main /> } />
      <Route path="/pages" element = { <Pages /> } />
      <Route path="/notes" element = { <Notes /> } />
      <Route path="/comments" element = { <Comments /> } />
      <Route path="/motto" element = { <Motto /> } />
      <Route path="/applications" element = { <Applications /> } />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App