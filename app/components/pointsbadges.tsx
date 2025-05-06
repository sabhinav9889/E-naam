import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { History } from './history';
import { historyData, dateData, awardSrclis, awardAlt } from '../constants/constant';

type PointsBadgesProps = {
  points: string;
};

export function PointsBadges({ points }: PointsBadgesProps) {
  return (
    <>
      <div className="items-center block sm:flex sm:gap-4 block sm:h-[28dvh] h-[24dvh] sm:w-full w-full">
        {/* points */}
        <div className="p-3 col-span-4 h-full border rounded-lg shadow-md w-full">
          <p className="font-semibold text-sm lg:text-lg">My Points :</p>
          <div className="flex justify-center items-center sm:mt-[2dvh] mt-[4dvh]">
            <img src="/points.jpeg" alt="points" className="lg:w-20 w-5 sm:w-10" />
            <p className="font-semibold lg:p-2 md:p-0 p-2 lg:text-2xl text-lg">{points} pts</p>
          </div>
        </div>
        {/* badges */}
        <div className="h-full border rounded-lg shadow-md w-full sm:mt-0 mt-2   ">
          <p className="font-semibold p-3 text-sm lg:text-lg">My Badges :</p>
          <Carousel className="mt-2 sm:ml-20 sm:mr-20 ml-12 mr-12">
            <CarouselPrevious className="cursor-pointer" />
            <CarouselContent className="flex justify-centre">
              {awardSrclis.map((src, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <img src={src} alt={awardAlt[index]} width={40} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="cursor-pointer" />
          </Carousel>
        </div>
        <div className="sm:hidden mt-2">
          <History history={historyData} date={dateData} />
        </div>
      </div>
    </>
  );
}
