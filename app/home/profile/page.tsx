"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Profile } from '@/app/components/profile';
import { PointsBadges } from '@/app/components/pointsbadges';
import { History } from '@/app/components/history';
import { useSearchParams } from 'next/navigation';
import {
  historyData,
  dateData,
  User
} from '@/app/constants/constant';
export default function Home() {
  const [emp, setEmp] = useState<User>();
  const params = useSearchParams();
  const user_id = params.get('user_id') || '';
  useEffect(() => {
    axios.get(`http://localhost:8000/emp/profile?user_id=${user_id}`).then((response) => {
        setEmp(response.data.data);
        console.log(response.data.data, user_id);   
    }).catch((error) => {
        console.log(error);
    })
}, [])
  return (
    <div className="w-full  h-[70dvh] p-4 pt-12">
      <p className="text-2xl font-semibold">My Profile</p>
      <div className="flex sm:gap-4 gap-2">
        <Profile
          userName={emp?.first_name + " " + emp?.last_name}
          post={emp?.post || ''}
          company={'FiftyFive Technologies'}
          email={emp?.email||''}
          location={emp?.location||''}
          dob={emp?.dob||''}
          mobile={emp?.contact_no||''}
        />
        <div className="w-full">
          <div className="w-full">
            <PointsBadges points={emp?.points||''}/>
          </div>
          <div className="sm:block hidden mt-4">
            <History history={historyData} date={dateData} />
          </div>
        </div>
      </div>
    </div>
  );
}
