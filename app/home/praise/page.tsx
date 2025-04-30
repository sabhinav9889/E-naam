import React from 'react';
import { Button } from '@/components/ui/button';
import { employees } from '@/app/constants/constant';
import { Input } from '@/components/ui/input';

import { ComboboxDemo } from '@/components/combobox';
import { ProfileAvatar } from '@/app/components/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Award } from 'lucide-react';

export default function Praise() {
  return (
    <div className="w-full sm:p-16 p-10 pt-14">
      <form action="">
        <div className="">
          <div className="w-full items-center p-2">
            <Input placeholder="Add Employee"></Input>{' '}
          </div>
          <div className="flex p-2 gap-4 flex-wrap min-h-[1dvh] max-h-[10dvh] overflow-y-auto">
            {employees.map((employee, index) => (
              <div className="truncate" key={index}>
                <ProfileAvatar
                  name={employee.name}
                  url={employee.imageUrl}
                  key={index}
                  tooltipcontent={employee.name}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap overflow-y-auto p-1 min-h-[1dvh] max-h-[30dvh]">
            <textarea
              name="discription"
              id="desc"
              placeholder="Description"
              className="w-full border rounded-md p-4 h-40"
            ></textarea>
          </div>
          <div className="flex gap-4 flex-wrap overflow-y-auto p-1">
            <Dialog>
              <DialogTrigger className="p-2 flex border rounded-lg cursor-pointer">
                <span className="text-xl">
                  <Award />
                </span>
                Select Bandges
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Bandeges : </DialogTitle>
                  <DialogDescription>Hello World lorem</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="p-1">
            <Input placeholder="Add Projects"></Input>
          </div>
          <div className="flex gap-4  p-1 w-52">
            <Input id="picture" type="file" className="bg-gray-300 rounded-md" />
          </div>
          <div className="p-1 sm:flex justify-between">
            <ComboboxDemo />
            <div className="flex gap-4 mt-2 sm:mt-0">
              <Button>Cancle</Button>
              <Button type="submit">Post</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
