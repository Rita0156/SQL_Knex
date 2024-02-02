const { Routes,Route } = require("react-router-dom")
const { default: Homepage } = require("./Homepage")

const AllRoutes=()=>{
    return (
        <Routes>
             <Route path="/" element ={<Homepage/>} />
        </Routes>
    )
}