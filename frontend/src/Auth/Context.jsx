import { createContext } from "react"


const ContextHook=()=>{
    let appContext=createContext()
    let bagContainer={
        token:"",
        isloading:false,
        isErroe:false
    }
    return (
        <appContext.Provider value={bagContainer}></appContext.Provider>
    )
}

export default ContextHook;