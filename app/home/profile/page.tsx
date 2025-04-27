// import { Profile } from ".../components/profile";
import { Profile } from "@/app/components/profile";
import { PointsBadges } from "@/app/components/pointsbadges";
import { History } from "@/app/components/history";
export default function Home() {
  return (
    // gap-x or gap-y dvh dvw
    <div className="w-full  h-[70dvh] p-4 pt-12">
      <p className="text-2xl font-semibold">My Profile</p>
      <div className="flex sm:gap-4 gap-2">
        <Profile />
        <div className="w-full">
          <div className="w-full">
            <PointsBadges />
          </div>
          <div className="sm:block hidden mt-4">
            <History />
          </div>
        </div>
      </div>
      {/* <div className="mt-1 sm:hidden">
        <History />
      </div> */}
    </div>
  );
}
