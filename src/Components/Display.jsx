import axios from "axios";
import { useEffect, useState } from "react";



const Display=()=>{

    const [val,setval]=useState([])

    const loaddata=()=>{
        let api="http://localhost:3000/students";
        axios.get(api).then((res)=>{
           setval(res.data)
        })
        
    }

    useEffect(()=>{
        loaddata()
    })


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
        <h1>This is display page</h1>

       <div>
        {ans}
       </div>
        </>
    )
}

export default Display;