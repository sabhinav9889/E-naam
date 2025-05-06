// components/ProfileCard.tsx
import React from 'react';
interface ProfileCardProps {
  name: string;
  title: string;
  level: string;
  imageUrl: string;
}

export default function ProfileCard({ name, title, level, imageUrl }: ProfileCardProps) {
  return (
    <div className="rounded-2xl p-2 flex flex-col items-center w-42 transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
      <div className="relative w-20 h-16 mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-full border-4 border-blue-400"
          style={{ objectFit: 'cover' }}
        ></img>
      </div>
      <h2 className="text-lg font-semibold text-center">{name}</h2>
      <p className="text-gray-600 text-sm text-center">{title}</p>
      <div className="mt-3 px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-md">{level}</div>
    </div>
  );
}
