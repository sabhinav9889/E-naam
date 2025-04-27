import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ProfileAvatar() {
    const name = "abhinav"
    return (
        <div className="flex h-9 w-28 p-1/2 border rounded-md cursor-pointer">
                <TooltipProvider>
                    <Tooltip>       
                        <TooltipTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            <span className="pl-1 pt-1">{name}</span>
        </div>
    )
}