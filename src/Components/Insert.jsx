import axios from "axios";
import { useState } from "react";



const Insert=()=>{
    const [input,setinput] =useState({})

    const handleInput=(e)=>{
        let name= e.target.name;
        let value=e.target.value;
        setinput(values=>({...values,[name]:value}))
        console.log(input)

    }



    const handleSubmit=()=>{
        let api="http://localhost:3000/students";
        axios.post(api,input).then((res)=>{
            alert("data added sucessfully")
        })
    }
    


    return(
        <>
        <input type="text" name="rollno"  value={input.rollno}  onChange={handleInput}/><br/><br/>
        <input type="text" name="name"  value={input.name}  onChange={handleInput}/><br/><br/>
        <input type="text" name="city"  value={input.city}  onChange={handleInput}/><br/><br/>
        <input type="text" name="subject"  value={input.subject}  onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Insert;