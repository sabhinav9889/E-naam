import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Profile() {
    const userName = "abhinav"
    const post = "Software Engineer"
    const company = "FiftyFive Tech"
    const location = "Gurugram"
    const dob = "12/12/2000"
    const mobile = "+91 1234567890"
    const email = "sabhinav9889@gmail.com"
    return (
        <div className="border rounded-md lg:p-1 shadow-md h-[84dvh] w-[20dvw] max-w-lg mx-auto">
            <div className="flex p-1 flex-col items-center flex-row items-start md:gap-4">
                <div className="w-24 h-24 overflow-hidden">
                    <img
                        src="https://github.com/shadcn.png"
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-1 text-center md:text-left md:mt-4">
                    <p className="text-lg font-semibold">{userName}</p>
                    <p className="text-xs text-gray-600">{post}</p>
                </div>
            </div>
            <hr />
            <div className="">
                <div className="">
                    <h1 className="font-semibold text-sm">Main Info</h1>
                    <p className="pl-1 text-xs text-slate-600">Position</p>
                    <TooltipProvider>
                        <Tooltip>
                            <div className="border rounded-lg truncate">
                                <TooltipTrigger>
                                    <p className="p-1 text-xs">{post}</p>
                                </TooltipTrigger>
                            </div>
                            <TooltipContent>
                                <p>{post}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <p className="pl-1 text-xs text-slate-600">Company</p>
                    <TooltipProvider>
                        <Tooltip>
                            <div className="border rounded-lg truncate">
                                <TooltipTrigger>
                                    <p className="p-1 text-xs">{company}</p>
                                </TooltipTrigger>
                            </div>
                            <TooltipContent>
                                <p>{company}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <p className="pl-1 text-xs text-slate-600">Location</p>
                    <div className="border w-full rounded-lg">
                        <p className="p-1 text-xs">{location}</p>
                    </div>
                    <p className="pl-1 text-xs text-slate-600">Birthday Date</p>
                    <div className="border w-full rounded-lg">
                        <p className="p-1 text-xs">{dob}</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold mt-1 text-sm">Contact Info</h1>
                    <p className="pl-1 text-xs text-slate-600">Email</p>
                    <TooltipProvider>
                        <Tooltip>
                            <div className="border rounded-lg p-1 truncate">
                                <TooltipTrigger>
                                    <p className="p-1 text-xs">{email}</p>
                                </TooltipTrigger>
                            </div>
                            <TooltipContent>
                                <p>{email}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <p className="pl-1 text-xs text-slate-600">Mobile Number</p>
                    <div className="border w-full rounded-lg p-1">
                        <p className="p-1 text-xs">{mobile}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}