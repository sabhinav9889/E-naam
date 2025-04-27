import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileAvatar() {
    const name = "abhinav"
    return (
        <div className="flex h-9 w-28 p-1/2 border rounded-md cursor-pointer">
            <span className="pl-2">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </span>
            <span className="pl-1 pt-1">{name}</span>
        </div>
    )
}