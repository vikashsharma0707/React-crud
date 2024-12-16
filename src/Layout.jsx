import { Link, Outlet } from "react-router-dom";



const Layout=()=>{
    return(
        <>
        <h1>This is layout page</h1>

        <Link to="display">Display</Link>
        <Link to="insert">Insert</Link>
        <Link to="search">Search</Link>
        <Link to="update">Update</Link>
        <Outlet/>
        
        </>
    )
}


export default Layout;