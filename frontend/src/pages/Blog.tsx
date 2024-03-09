import { useParams } from "react-router-dom"
export const Blog = () => {
  const params = useParams();
  return (
    <div>{params.id}</div>
  )
}
