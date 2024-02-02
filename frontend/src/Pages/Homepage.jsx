const { Link } = require("react-router-dom")
const { default: Card } = require("../components/Card")
import { useEffect, useState } from "react"
import Button from "../components/Button"

const Homepage=()=>{
    const [data,setData]=useState([])
    const getData=()=>{
        fetch('http://localhost:8080/data')
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res,"json server");
            setData(res)
        })
        .catch((err)=>{
            console.log(err,"error getting in fetch request");
        })
    }
    const handaleTemplates=()=>{

    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            {data.lentgh>0 && data!=undefined && data.map((item)=>{
                <Link key={item.id} to={item.name}>
                  <Card  avt={item.image} children={item.site}/>
                </Link>
                
            })}
            <Button onClick={handaleTemplates}>Explore All The Templates</Button>
        </div>
    )
}
export default Homepage