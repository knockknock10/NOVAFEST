import "./Amazoncard.css"
import Price from "./Price"
export default  function Amazoncards({title,idx}){
    let oldPrice = ["12,495","11,900","1,599","599"];
    let newPrice = ["8,999","9,199","899","278"];
    let Description = [
        ["8000 DPI","5 Programmable butttons"],
        ["Intuitive Surface","Designed for iPad Pronitutive"],
        ["Designed for iPad","Surface"],
        ["Wireless" ,"optical Orientation"]
    ];
    return(
        <div className="cards">
            <h3>{title}</h3>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}
