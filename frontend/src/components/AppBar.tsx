import { Avatar } from "./BlogCard"

export const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-5">
        <div className="flex flex-col justify-center font-bold text-lg">
            Medium
        </div>
        <div>
            <Avatar size={'big'} name="Cactus"/>
        </div>
    </div>
  )
}
