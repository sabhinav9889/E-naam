'use client';
import React from 'react';
import ProfileCard from '@/app/components/profilecard';
import { User } from '@/app/constants/constant';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Employees() {
  const [emp, setEmp] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/emp/allemp')
      .then((response) => {
        setEmp(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-12 w-full">
      <h1 className="bold text-xl p-2">Employees</h1>
      <div className="overflow-y-auto h-[68dvh] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {emp.map((emp, idx) => {
          return (
            <span className="border rounded-md inline-block m-1 cursor-pointer" key={idx}>
              <ProfileCard
                key={idx}
                name={emp.first_name + ' ' + emp.last_name}
                title={emp.post}
                imageUrl={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dD4uBABfvtxIdgJz3ZupQ1_rAdTo606MhA&s'
                }
                level={emp.location}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
