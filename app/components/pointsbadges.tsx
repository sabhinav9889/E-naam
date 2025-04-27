import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function PointsBadges() {
    const points = 1250
    return (
        <div className="items-center flex gap-4 w-full block h-[28dvh]">
            {/* points */}
            <div className="p-3 col-span-4 h-full border rounded-lg shadow-md w-full">
                <p className="font-semibold">My Points :</p>
                <div className="flex justify-center items-center mt-[2dvh]">
                    <img src="/points.jpeg" alt="points" className="lg:w-20 w-10" />
                    <p className="font-semibold p-2 lg:text-2xl text-lg">{points} pts</p>
                </div>
            </div>
            {/* badges */}
            <div className="col-span-4 h-full border rounded-lg shadow-md w-full">
                <p className="font-semibold p-3">My Badges :</p>
                <Carousel className="mt-2 ml-20 mr-20">
                    <CarouselPrevious className="cursor-pointer" />
                    <CarouselContent className="flex justify-centre">
                        <CarouselItem className="flex justify-center">
                            <img src="/bestaward.png" alt="" width={40}/>
                        </CarouselItem> 
                        <CarouselItem className="flex justify-center">
                            <img src="/designaward.jpg" alt="" width={40}/>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <img src="/images2.jpeg" alt="" width={40} />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <img src="/images1.jpeg" alt="" width={40} />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext className="cursor-pointer" />
                </Carousel>
            </div>
        </div>
    )
}
