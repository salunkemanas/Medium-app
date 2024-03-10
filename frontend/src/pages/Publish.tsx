import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
  return (
    <div>
        <AppBar/>
        <div className="flex justify-center w-full pt-8">
        <div className=" max-w-screen-lg w-full">
            <input onChange={(e)=>{
                setTitle(e.target.value)
            }} type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Title"/>
            <div className="pt-2">
                <TextEditor onChange={(e)=>{
                    setDescription(e.target.value)
                }}/>
            </div>
            <div>
                <button onClick={async ()=>{
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content: description
                    },{
                        headers:{
                            Authorization: localStorage.getItem('token')
                        }
                    })
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="pt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
    </div>
    
    </div>
    </div>
  )
}

function TextEditor({onChange}:{onChange: (e: ChangeEvent<HTMLTextAreaElement>)=> void}){
    return(
        <form>
           <div className="w-full mb-4 border">
               <div className="flex items-center justify-between border-b">
                   <textarea onChange={onChange} id="editor" rows={8} className="pl-2 block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0" placeholder="Write an article..." required ></textarea>
               </div>
           </div>
        </form>
    )
}