import React, {useEffect, useRef, useState} from "react";
import { checkLikes } from "../shared/util";

type Props = {
    initialCount : number;
}

const Counter : React.FC<Props> = ({initialCount})  => {
    const [count, setCount]= useState<number>(initialCount);
    const[message,setMessage]= useState<string>('');
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const initialLoad= useRef(false);

    // useEffect(()=>{
    //         console.log('Counter Changed!', count)
    // }, [count]) //срабатывать только при изменение каунта!
    useEffect(()=>{
        if(!initialLoad.current){
            initialLoad.current=true;
            return;
        }
        clearMessages();
        setLoading(true);
        
        checkLikes(count)
        .then(res=> setMessage(res))
        .catch(err=> setError(err))
        .finally(()=>setLoading(false))
}, [count]) //срабатывать только при изменение каунта!


const clearMessages = () =>{
    setMessage('');
    setError('');

}

    return(
<div>
    <div>{count}</div>
    <button
    disabled ={loading} 
    onClick={() => setCount(count=> count-1)}>-</button>
    <button 
disabled ={loading} 
    onClick={() => setCount(count=> count+1)}>+</button>
    <button onClick={() => setCount(initialCount)}>Reset</button>
   

 {message && <div>{message}</div>}
 {error && <div>{error}</div>}
 {loading && <div>Loading...</div>}
 </div>


    )


}
export default Counter;
