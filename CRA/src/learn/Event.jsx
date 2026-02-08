function doSomething(){
    console.log("Button clikced !!");
}

function Styles(){
    console.log("Hovered");
}

export default function Button(){
    let handle = {
        backgroundColor:"Green",
    }
    return(
        <div>
            <button style={handle} onClick={doSomething}>Click me! </button>
            <button onMouseOver={Styles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, possimus! Sunt placeat reprehenderit in delectus adipisci iste aliquam, perspiciatis quo exercitationem aliquid quod alias dicta deserunt porro eos. Itaque, qui.</button>
        </div>
    )
}