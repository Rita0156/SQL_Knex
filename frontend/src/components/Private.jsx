import { useContext,useNavigate } from "react"
import ContextHook from "../Auth/Context"
const PrivateRoute=()=>{
    let navigate=useNavigate()
     let bag=useContext(ContextHook)
     if(bag.token.length>0){
        return children
     }
     else{
        navigate('/login')
     }
}

export default PrivateRoute