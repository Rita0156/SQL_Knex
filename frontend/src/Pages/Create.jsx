const { useState } = require("react")
import Button from "../components/Button"
const CreateTemplate=()=>{
    const [name,setName]=useState('')
    const [img,setImage]=useState('')
    const handalSubmit=()=>{
        let obj={
            name:name,
            image:img,
            set:name
        }
        fetch('http://localhost:8080/data',{
            method:"POST",
            body:JSON.stringify(obj)
        })
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res,"Post request");
        })
        .catch((err)=>{
            console.log(err,"post request error");
        })
    }
    return (
        <div>
            <form onSubmit={handalSubmit}>
                <div>
                    <label htmlFor="">Name Of template</label>
                    <input value={name} onChange={(e)=>{setName(e.targer.value)}} type="text" placeholder="enter template name"/>
                </div>
                <div>
                    <label htmlFor="">Paste image link</label>
                    <input value={img} onChange={(e)=>{setImage(e.target.value)}} type="text" placeholder="enter image url"/>
                </div>
                <Button>Submit</Button>
            </form>
        </div>
    )
}
export default CreateTemplate