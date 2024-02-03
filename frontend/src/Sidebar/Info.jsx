


const Information=({props})=>{

    return (
        <div>
            <div>
                <Link style={{color:"black", textDecoration:"none", fontWeight:"bold"}}> Back</Link>
            </div>
            <div>
                <h2>The {props.set}</h2>
            </div>
        </div>
    )
}