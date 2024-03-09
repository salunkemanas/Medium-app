import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content:string,
    publishedDate:string,
    id:string
}

export const BlogCard = ({authorName, title, content, publishedDate, id}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-300 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <Avatar  name={authorName}/>
            <div className="font-light pl-2 flex justify-center flex-col">{authorName}</div> 
            <div className="pl-2 flex justify-center flex-col"><Circle/></div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">{publishedDate}</div> 
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.substring(1,100) + "..."}
        </div>
        <div className="w-full text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
        {/* <div className="w-full h-1 bg-slate-200"></div> */}
    </div>
    </Link>
  )
}
function Circle(){
    return <div className="rounded-full w-1 h-1 bg-slate-600">
    </div>
}

export function Avatar({name, size="small"}: {name: string, size?: "small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center ${size ==="big"? "w-10 h-10": "w-6 h-6"} overflow-hidden bg-gray-400 rounded-full  dark:bg-gray-600`}>
        <span className={`${size==="big"? "text-md": "text-xs"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>
    
}