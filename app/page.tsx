import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/themetoggle';
export default function Home() {
  return (
    <div className="">
      <ModeToggle />
      <Button>Click me</Button>
    </div>
  );
}
