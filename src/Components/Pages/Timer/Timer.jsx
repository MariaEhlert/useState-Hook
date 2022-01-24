import { useState, useEffect } from "react"
export const Timer = () =>{
    const [ conut, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 1000)
    //dependency array []   den render kun en gang 
    }) //[],)
    return (
        <div>Timer: {conut}</div>
    )
}