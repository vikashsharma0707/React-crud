import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Update=()=>{

    const [val,setval] =useState([]);

    const navigate =useNavigate()

    const loaddata=()=>{
        let api="http://localhost:3000/students";
        axios.get(api).then((res)=>{
            setval(res.data);
        })
    }

    useEffect(()=>{
        loaddata()
    })

    const recdel=(myid)=>{
        let api = `http://localhost:3000/students/${myid}`;
        axios.delete(api).then(()=>{
            alert("data delete sucessfully")
            loaddata();
        })
    }

    const recedt=(myid)=>{
        navigate(`/edit/${myid}`)
    }

    const ans=val.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.subject}</td>
                <td>
                    <button  onClick={()=>{recdel(key.id)}}>Delete</button>
                </td>

                <td>
                    <button  onClick={()=>{recedt(key.id)}}>Edit</button>
                </td>
            </tr>
            
            </>
        )
    })


    return(
        <>
        <h1>This is update page</h1>

        <div>
            {ans}
        </div>
        
        </>
    )
}

export default Update;