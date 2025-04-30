import React from 'react';
import { Profile } from '@/app/components/profile';
import { PointsBadges } from '@/app/components/pointsbadges';
import { History } from '@/app/components/history';
import {
  historyData,
  dateData,
  userName,
  post,
  company,
  email,
  location,
  dob,
  mobile,
} from '@/app/constants/constant';
export default function Home() {
  return (
    // gap-x or gap-y dvh dvw
    <div className="w-full  h-[70dvh] p-4 pt-12">
      <p className="text-2xl font-semibold">My Profile</p>
      <div className="flex sm:gap-4 gap-2">
        <Profile
          userName={userName}
          post={post}
          company={company}
          email={email}
          location={location}
          dob={dob}
          mobile={mobile}
        />
        <div className="w-full">
          <div className="w-full">
            <PointsBadges />
          </div>
          <div className="sm:block hidden mt-4">
            <History history={historyData} date={dateData} />
          </div>
        </div>
      </div>
    </div>
  );
}
