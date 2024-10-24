import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signup } from "../../firebase";

function Login() {

    const [signIn, setSignIn] = useState<string>("sign In");
    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const user_auth = async (event:React.FormEvent)=> {
        
        event.preventDefault()
        
        if(signIn === 'sign In'){
        await login(email,password)
        }
        else{
        await signup(name,email,password)
        }

    }

    return (
        <div className="login">
            <img src={logo} className="loging-logo" alt="" />
            <div className="login-form">
                <h1>{signIn}</h1>
                <form>
                    {signIn === "sign Up" ? (
                        <input value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} type="text" placeholder="Your Name" />
                    ) : (
                        <></>
                    )}
                    <input value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} type="email" placeholder="Email" />
                    <input value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)} type="password " placeholder="Password    " />
                    <button onClick={user_auth} type="submit">{signIn}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember me</label>
                        </div>
                        <p>Need Help ?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signIn === "sign In" ? (
                        <p>
                            New to Netflix ?{" "}
                            <span onClick={() => setSignIn("sign Up")}>Sign Up Now</span>
                        </p>
                    ) : (
                        <p>
                            Already Have account ?{" "}
                            <span onClick={() => setSignIn("sign In")}>Sign In Now</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
