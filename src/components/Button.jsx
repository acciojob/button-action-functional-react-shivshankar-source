import {useState} from React;

export const Button = ()=>{
    const[ispara, setIspara] = useState(false);
    const handleClick = ()=>{
        setIspara(!ispara);
    }
    return(
        <>
        {ispara && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>}
          <button onClick={handleClick}>Click Me!</button>
        </>
    )
}