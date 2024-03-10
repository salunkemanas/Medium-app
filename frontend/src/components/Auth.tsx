import { SignupInput } from '@cactusjuice/medium-common'
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

export const Auth = ({type}: {type: "Signup" | "Signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        email:'',
        password:"",
        name:""
    })
    const navigate = useNavigate()
    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="Signin"?"signin":"signup"}`, postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch (error) {
            alert(`Error while ${type==="Signin"? "Signing in": "Signing up"}`)
        }
        
    }
  return (
    <div className="h-screen flex justify-center flex-col">
        <div className='flex justify-center'>
            <div>
                <div className='px-10'>
                <div className='text-3xl font-extrabold'>
                    {type === "Signin" ? "Log in to your Account": "Create an Account"}
                </div>
                <div className='text-slate-400 text-center'>
                    {type === "Signin" ? "Don't have an Account?": "Already have an Account?"}
                    <Link to={type === "Signin" ?"/":"/signin"} className='pl-2 underline'>
                        {type === "Signin" ? "Sign up": "Sign in"}
                    </Link>
                </div>
                </div>
                <div>
                {type === "Signup" && <LabelledInput label="Name" placeholder='John' onChange={(e)=>{
                    setPostInputs(c =>({
                        ...c,
                        name: e.target.value
                    }))
                }} />}    
                
                <LabelledInput label="Email" placeholder='john@gmail.com' onChange={(e)=>{
                    setPostInputs(c =>({
                        ...c,
                        email: e.target.value
                    }))
                }} />

                <LabelledInput label="Password" placeholder='123456' onChange={(e)=>{
                    setPostInputs(c =>({
                        ...c,
                        password: e.target.value
                    }))
                }} />
                <button onClick={sendRequest} type="button" className="mt-8 text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "Signup"? "Sign up" : "Sign in"}</button>

            </div>
            </div>
        </div>
       
        </div>

  )
}

interface LabelledInputType{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelledInput({label, placeholder, onChange}: LabelledInputType){
    return <div>
            <label className=" block mb-2 text-sm font-medium text-black pt-4">{label}</label>
            <input type="text" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    
}
