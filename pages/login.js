import Head from "next/head"
import { Button } from "@mui/material"
import { auth, provider } from "@/firebase"
import { signInWithPopup } from "firebase/auth"

const Login = () => {

    const signin = () =>{
        signInWithPopup(auth,provider).catch(alert);
    }
    return (
        <div className="grid place-items-center h-screen bg-slate-300">
            <Head>
                <title>Login Page</title>
            </Head>
            {/* Logo */}
            <div className="flex flex-col p-[100px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-[20px]">
                <img className="h-[200px] w-[200px] mb-[50px]" src="https://tse3.mm.bing.net/th?id=OIP.e9Ys7Glv-O2H2CNbMRB6KwHaHa&pid=Api&P=0" alt="logo" />
                <Button onClick={signin} variant="outlined">Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login
