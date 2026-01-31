import "./Amazoncard.css"
export default function Price({ oldPrice, newPrice }) {
    let newStyles = {
        fontWeight:"bold",
    }
    let styling = {
        backgroundColor:"yellow",
        height:"50px",
        justifyContent:"center",
        alignItems:"center",
        gap:"16px",
        borderBottomLeftRadius:"13px",
        borderBottomRightRadius:"13px",
    }
  return (
    <div style={styling}>
        <p>
            <span className="old">{oldPrice}</span> 
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </p>
    </div>
  );
}
