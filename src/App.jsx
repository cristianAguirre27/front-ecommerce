import { BrowserRouter, Routes, Route} from "react-router-dom"

import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"
import AddItemsPage from "./pages/AddItemsPage"
import ShowItems from "./pages/ShowItems"

function App(){
  return(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home page</h1>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/items" element={<ShowItems/>}/>
      <Route path="/add-item" element={<AddItemsPage/>}/>
      <Route path="/items/:id" element={<h1>Update Task</h1>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App