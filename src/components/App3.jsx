import {useState} from "react";
export default function App3(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = () => {
        if (email==='john@gmail.com' && password==='123'){
            setMsg('Login successful')
        }
        else{
            setMsg('Login failed')
        }
    };
    return (
        <div>
            <h1>This is app3</h1>
            <p><input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} /></p>
            <p><input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} /></p>
            <button onClick={handleSubmit}>Submit</button>
            {msg && <p>{msg}</p>}
        </div>

    );
}