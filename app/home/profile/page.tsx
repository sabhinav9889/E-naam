// import { Profile } from ".../components/profile";
import { Profile } from "@/app/components/profile";
import { PointsBadges } from "@/app/components/pointsbadges";
import { History } from "@/app/components/history";
export default function Home() {
  return (
    // gap-x or gap-y dvh dvw
    <div className="w-full mr-4 mt-12 h-[70dvh]">
      <p className="text-2xl font-semibold">My Profile</p>
      <div className="flex gap-4">
        <Profile />
        <div className="w-full">
          <div className="">
            <div className="w-full">
              <PointsBadges />
            </div>
            <div className="mt-2">
              <History />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
