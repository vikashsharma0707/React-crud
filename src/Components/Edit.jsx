import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Edit=()=>{
    const {id} =useParams()
    const [input,setinput] =useState({})

    const loaddata=()=>{
        let api=`http://localhost:3000/students/${id}`;
        axios.get(api).then((res)=>{
            setinput(res.data)
        })

    }

    useEffect(()=>{
        loaddata()
    },[])


    const handleInput=(e)=>{
        let name = e.target.name;
        let value =e.target.value;
        setinput(values=>({...values,[name]:value}))
    }

    const handleSubmit=()=>{
        let api=`http://localhost:3000/students/${id}`;
        axios.put(api,input).then((res)=>{
          alert("data update sucessfully")
          setinput({
            rollno:"",
            name:"",
            city:"",
            subject:""
          })
        })
    }

    
    return(
        <>
        <h1>This is edit page</h1>
        <input type="text" name="rollno"  value={input.rollno}  onChange={handleInput}/><br/><br/>
        <input type="text" name="name"  value={input.name}  onChange={handleInput}/><br/><br/>
        <input type="text" name="city"  value={input.city}  onChange={handleInput}/><br/><br/>
        <input type="text" name="subject"  value={input.subject}  onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Edit