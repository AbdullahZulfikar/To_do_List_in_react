import LoginImage from "../images/login.jpg"
import { auth,provider } from "../../config/firebase-config"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"


export const Auth = () => {

    const navigate = useNavigate()
    

    const signInWithGoogle = async() => {
        const results = await signInWithPopup(auth,provider)
        const authInfo = {
            userId : results.user.uid,
            name : results.user.displayName,
            Profile : results.user.photoURL,
            isAuth : true
        }
        localStorage.setItem("auth",JSON.stringify(authInfo))
        navigate('/expense-tracker')

        
    }
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">


                {/* this is the form */}
                <div className="sm:w-1/2 px-16">
                    <h1 className="font-bold text-[#002D74]">Login</h1>
                    <p className="text-sm mt-4 text-[#002D74]">If you already a member, easy login</p>
                    <form className="flex flex-col gap-4" action="">
                        <input className="pt-2 mt-8 rounded-xl border" type="text" name="email" placeholder="  Email"/>
                        <div className="relative">
                        <input className="pt-2 rounded-xl border w-full" type="password" name="password" placeholder="  Password"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3
                            -translate-y-1/2" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                            </svg>
                        </div>
                        <button className="bg-[#AC53A6] rounded-xl text-white py-2hover:shadow-lg  hover:shadow-[#F56504] shadow-2xl">Submit</button>
                    </form>

                    <div className="mt-10 grid grid-col-3 items-center text-gray-500">
                        <hr className="border-gray-500"/>
                        <p className="text-center">OR</p>
                        <hr className="border-gray-500"/>
                    </div>
                    <button onClick={signInWithGoogle}  className="bg-white border py-2 w-full
                    rounded-xl mt-5 flex justify-center items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google mr-3" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                        </svg>
                        Login in with Google</button>

                        <p className="mt-5 text-sx border-b py-6">Forgot your password?</p>
                </div>
                
                {/* this is the image */}
                <div className="w-1/2 sm:block hidden">
                <img className="rounded-2xl " src={LoginImage} alt="" />
                </div>
                
            </div>
        </section>
    )
}