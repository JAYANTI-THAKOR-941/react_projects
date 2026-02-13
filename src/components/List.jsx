
const List = ()=>{
    const services = ["Web Development","App Development","Clodu Solution","AI Product Management","Game Development"];
    return(
        <>
            {
                services.map((service,index)=>(
                    <ul key={index}>
                        <h2>{service}</h2>
                    </ul>
                ))
            }
        </>
    )
}
export default List;