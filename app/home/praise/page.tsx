'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { awardAlt, awardSrclis, User } from '@/app/constants/constant';
import { Input } from '@/components/ui/input';
import { getPraise } from '@/lib/apis/praise';

import { ComboboxDemo } from '@/components/combobox';
import { ProfileAvatar } from '@/app/components/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Award, Users } from 'lucide-react';

export default function Praise() {
  const [award, setAward] = React.useState<string[]>([]);
  const [project, setProject] = React.useState<string[]>([]);
  const [projectvalue, setProjectValue] = React.useState<string>('');
  const [employee, setEmployee] = React.useState<User[]>([]);
  const [emp, setEmp] = useState<User[]>([]);
  const [praisePts, setPraisePts] = React.useState<number>(0);

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      description: formData.get('discription'),
      projects: project,
      praise_points: praisePts,
      awards: award,
      employees: employee,
    };
    getPraise(employee, praisePts)
      .then((response) => {
        console.log(response);
        // Handle success response
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error response
      });
    console.log('Form data:', data);
  };
  return (
    <div className="w-full flex flex-col mt-16  sm:ml-16 sm:mr-16 ml-6 mr-6">
      <form className="p-4 border rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="">
          <div className="overflow-y-auto p-1">
            <Dialog>
              <DialogTrigger className="p-2 flex border rounded-lg cursor-pointer text-sm">
                <span className="">
                  <Users />
                </span>
                <span className="p-1">Add Employees</span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Employees : </DialogTitle>
                  <DialogDescription className="flex flex-col gap-2 min-h-auto max-h-80 overflow-y-auto">
                    {emp.map((src, index) => {
                      const isSelected = employee.includes(src);
                      const name = src.first_name + ' ' + src.last_name;
                      return (
                        <span
                          key={index}
                          className={`flex gap-4 p-2 border rounded-lg cursor-pointer hover:bg-gray-200 ${isSelected ? 'bg-gray-300' : ''}`}
                          onClick={() => {
                            if (!isSelected) {
                              setEmployee([...employee, src]);
                            } else {
                              setEmployee(employee.filter((item) => item !== src));
                            }
                          }}
                        >
                          <img
                            src={
                              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dD4uBABfvtxIdgJz3ZupQ1_rAdTo606MhA&s'
                            }
                            alt={name}
                            width={40}
                          />
                          <span className="text-sm p-4">{name}</span>
                          <span className="text-sm p-4">{src.post}</span>
                        </span>
                      );
                    })}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" className="w-full">
                      Done
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <div className="flex gap-4 flex-wrap overflow-y-auto p-1 max-h-[8dvh]">
              {employee.map((src, index) => (
                <div className="truncate" key={index}>
                  <ProfileAvatar
                    name={src.first_name + ' ' + src.last_name}
                    url={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dD4uBABfvtxIdgJz3ZupQ1_rAdTo606MhA&s'
                    }
                    key={index}
                    tooltipcontent={src.first_name + ' ' + src.last_name}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 flex-wrap overflow-y-auto">
            <textarea
              name="discription"
              id="desc"
              placeholder="Description"
              className="w-full border rounded-md sm:p-4 p-2 min-h-[1dvh] sm:max-h-[14dvh] max-h-[10dvh]"
            ></textarea>
          </div>
          <div className="overflow-y-auto sm:p-1 w-full">
            <Dialog>
              <DialogTrigger className="p-1 flex border rounded-lg cursor-pointer">
                <span className="text-xl">
                  <Award />
                </span>
                Select Badges
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Badges : </DialogTitle>
                  <DialogDescription className="flex flex-col gap-2 min-h-auto max-h-120">
                    {awardSrclis.map((src, index) => {
                      const isSelected = award.includes(src);
                      return (
                        <span
                          key={index}
                          className={`flex gap-4 p-2 border rounded-lg cursor-pointer hover:bg-gray-200 ${isSelected ? 'bg-gray-300' : ''}`}
                          onClick={() => {
                            if (!isSelected) {
                              setAward([...award, src]);
                            } else {
                              setAward(award.filter((item) => item !== src));
                            }
                          }}
                        >
                          <img src={src} alt={awardAlt[index]} width={40} />
                          <span className="text-sm p-4">{awardAlt[index]}</span>
                        </span>
                      );
                    })}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" className="w-full">
                      Done
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <div className="mt-1">
              <p className="p-2">Praise Point</p>
              <input
                type="number"
                className="p-2 w-20 border rounded-lg"
                value={praisePts}
                placeholder="points"
                onChange={(e) => setPraisePts(Number(e.target.value))}
                min={0}
                max={1000}
                width={10}
              />
            </div>
            <div className="flex gap-4 flex-wrap overflow-y-auto p-1 max-h-[8dvh]">
              {award.map((src, index) => (
                <div className="truncate" key={index}>
                  <ProfileAvatar
                    name={awardAlt[index]}
                    url={src}
                    key={index}
                    tooltipcontent={awardAlt[index]}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="p-1">
            <div className="overflow-y-auto">
              <Input
                placeholder="Add Projects"
                value={projectvalue}
                onChange={(e) => setProjectValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && projectvalue.trim() !== '') {
                    console.log('key pressed', e.key);
                    e.preventDefault();
                    setProject((prev) => [...prev, projectvalue.trim()]);
                    setProjectValue('');
                  }
                }}
              />
            </div>
            <div className="flex flex-wrap overflow-y-auto p-1 max-h-[7dvh] gap-1">
              {project.map((proj, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 p-1 border rounded-md bg-gray-200"
                >
                  {proj}
                  <button
                    type="button"
                    className="text-red-500 cursor-pointer"
                    onClick={() => setProject((prev) => prev.filter((item, i) => i !== index))}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="flex p-1">
            <Input id="picture" type="file" className="bg-gray-300 rounded-md" />
          </div>
        </div>
        <div className="sm:flex justify-between flex-col">
          <div className="flex justify-between gap-2 flex-wrap">
            <ComboboxDemo />
            <div className="flex gap-4">
              <Button type="button">Cancel</Button>
              <Button type="submit">Post</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
