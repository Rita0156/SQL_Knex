import Btton from "./Button"
const Card=({children,avt})=>{
    return (
        <div>
            <img src={avt}/>
            <Button>{children}</Button>
        </div>
    )
}
export default Card