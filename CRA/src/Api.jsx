import { useEffect, useState } from "react";


export default function Api(){
    const URL = "https://official-joke-api.appspot.com/random_joke";
    
    let [joke,setJoke] = useState({});
    
     const getNewJoke = async () => {
        const response = await fetch(URL);
        const jsonResponse = await response.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    };

    useEffect(() => {
        getNewJoke();
    }, []);
    
    // useEffect(()=>{async function getNewJoke() {
    //         let response = await fetch(URL);
    //         let jsonResponse = await response.json();
    //         console.log(jsonResponse);
    //         setJokes({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
    //     }getNewJoke();
    // },[]);
    
    
    
    
    
    return(
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
            
        </div>
    )

}