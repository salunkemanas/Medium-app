import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
  const {loading, blogs} = useBlogs();
  if (loading){
    return <div>
      <AppBar/>
      <div className="flex justify-center">
        <div>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
        </div>
    </div>
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
