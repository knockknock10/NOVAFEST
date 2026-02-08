import "./ProductTab.css"
import Product from "./Product";
function Producttab() {
   let feature = ["hi-tech","durable","fast"];
   //let objec = {a:"hiii",b:"Gone"};
   
  return (
  <>
    <Product title="Laptop" price={23432} features={feature}/>
    <Product title="Phone" price={345778} />
    <Product title="Tab" price={320000} features={feature.map((feat,index)=>(<li key={index}>{feat}</li>))}/>
    
  </>
  );
}
export default Producttab;