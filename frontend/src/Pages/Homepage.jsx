const { Link } = require("react-router-dom")
const { default: Card } = require("../components/Card")

let data=[
    {
        "name":"portfolio",
        "image":"https://www.w3schools.com/spaces/portfolio_template.png",
        "site":"Portfolio"
    },
    {
        "name":"blog",
        "image":"https://www.w3schools.com/spaces/blog_template.png",
        "site":"Blog"
    },
    {
        "name":"webshop",
        "image":"https://www.w3schools.com/spaces/blog_template.png",
        "site":"WebShop"
    },
    {
        "name":"tutor",
        "image":"https://www.w3schools.com/spaces/blog_template.png",
        "site":"Tutor"
    }
]
const Homepage=()=>{
    return (
        <div>
            {data.lentgh>0 && data!=undefined && data.map((item)=>{
                <Link to={item.name}>
                  <Card avt={item.image} children={item.site}/>
                </Link>
            })}
        </div>
    )
}
export default Homepage