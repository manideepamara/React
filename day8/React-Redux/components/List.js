const {default:React} =  require('react')


function List(props) {
    const { items } = props
    if (!items.length) {
        return <span className = "Empty-message" > NO Items in list </span>;
    }

    return(
        <ul className="list-item">
            {items.map(item=><li key={item} className="item">{item}</li>)}
        </ul>
    )
}





module.exports=List;