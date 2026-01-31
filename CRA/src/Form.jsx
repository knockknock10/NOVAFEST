import { useState } from "react";




export default function Form(){
    // let [fullname,setFUllName] = useState("Sanjeev");
    let [formData,setForm] = useState({
        username:"",
        email:""
        
    })
    
    let handleForm = (event)=>{
        let fieldname = event.target.name;
        let newValue = event.target.value;
        //this is mutating  may become bug in future 
        // setForm((currdata)=>{
        //     currdata[fieldname] = newValue;
        //     return {...currdata};
        // })
        //so better to write this
        setForm((currData)=>({
            ...currData,
            [fieldname]:newValue
        }));
    }
    function handleFormSubmit(event){
        event.preventDefault();
        // console.log("Form Submitted!!")
        setForm({
            username:"",
            email:""
        })
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Full name :</label>
            <input 
            placeholder="Enter Full name" 
            type="text" 
            value={formData.username}
            id="username"
            name="username"
            onChange={handleForm}
            /><br/>
            
            <label htmlFor="email">Email :</label>
            <input
            placeholder="Enter the Email"
            type="text"
            value={formData.email}
            id="email"
            name="email"
            onChange={handleForm}
            />
            
            
            
            <br/><br/>
            <button>Submit</button>
        </form>
    )
}