import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
  const {loading, blogs} = useBlogs();
  // add sceletons here rather than loading...
  if (loading){
    return <div>
      Loading...
    </div>
  }
  return (
    <div>
        <div>
            <AppBar/>
        </div>
    <div className="flex justify-center">
        <div>
            {blogs.map(blog=>{
              return <BlogCard authorName={blog.author.name || "Anonyimous"} 
              title={blog.title}  
              content={blog.content}
              id={blog.id}
              publishedDate='09-03-2024'/>
            })}
            
            
        </div>
    </div>
    </div>
  )
}
