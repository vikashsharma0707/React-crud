import axios from "axios";
import { useState } from "react";



const Search=()=>{

    const [rollno,setrollno] =useState("")
    const [val,setval] =useState([])

    const handleSearch=()=>{
        let api=`http://localhost:3000/students/?rollno=${rollno}`;
        axios.get(api).then((res)=>{
           setval(res.data)
           setrollno("")
        })
    }

    const ans=val.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.subject}</td>
            </tr>
            
            </>
        )
    })
    
    return(
        <>
        <h1>This is search page</h1>
        <input type="text"   value={rollno}  onChange={(e)=>{setrollno(e.target.value)}}/><br/><br/>

        <button onClick={handleSearch}>Search</button>
        <div>
            {ans}
        </div>
        </>
    )
}
export default Search;