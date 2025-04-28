import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface GreetingProps {
    name: string;
    url: string;
}

export function ProfileAvatar({ name, url }: GreetingProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className="flex h-9 w-28 p-1/2 border rounded-md cursor-pointer">
                        <Avatar>
                            <AvatarImage src={url} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="pl-1 pt-1">{name}</span>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Profile</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}