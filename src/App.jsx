import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Components/Display";
import Insert from "./Components/Insert";
import Search from "./Components/Search";
import Update from "./Components/Update";
import Edit from "./Components/Edit";
import Layout from "./Layout";



const App=()=>{
  return(
    <>
    <h1>This is app page</h1>
   
    

    <BrowserRouter>

    <Routes>
    <Route  path="/"  element={<Layout/>}>
      <Route  path="display"  element={<Display/>}/>
      <Route  path="insert"  element={<Insert/>}/>
      <Route  path="search"  element={<Search/>}/>
      <Route  path="update"  element={<Update/>}/>
      <Route  path="edit/:id"  element={<Edit/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;