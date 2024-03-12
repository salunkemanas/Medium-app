import { AppBar } from "./AppBar"
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({blog}:{blog:Blog}) => {
  return (
    <div>
        <AppBar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 w-full px-10 pt-12 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">{blog.title}</div>
                    <div className="text-slate-500 pt-2">Posted on 2nd dec 2023</div>
                    <div className="pt-4">{blog.content}</div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">Author</div>
                    <div className="flex">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Anonymous"} size="big"/>
                        </div>
                        <div>
                            <div className="text-xl font-bold">{blog.author.name || "Anonymous"}</div>
                            <div className="text-slate-500 pt-2">Jester of Joviality, Purveyor of Puns, and the Realm's Supreme Sire of Snickers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
