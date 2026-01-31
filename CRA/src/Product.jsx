import "./product.css"
function Product({title,price,features,features2}){
    let isDiscount = price>30000;
   let abc = {backgroundColor:isDiscount ? "pink" :null};
    return(
        <div className="product" style={abc}>
            <h3>{title}</h3>
            <h5>Product Cost is :{price}</h5>
            {/* {price>30000 ? <p>"Discount of 5%"</p>:null} */}
            {isDiscount && <p>Discount : 5%</p>}
            <p>{features}</p>
            <p>{features2}</p>  
        </div>
    )
}

export default Product;