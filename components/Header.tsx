"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { HiHome, HiSearch } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Handle logout in the future
  };
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition cursor-pointer">
            <RxCaretLeft
              onClick={() => router.back()}
              size={35}
              className="text-white"
            />
          </button>
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition cursor-pointer">
            <RxCaretRight
              onClick={() => router.forward()}
              size={35}
              className="text-white"
            />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition cursor-pointer">
            <HiHome
              onClick={() => router.push("/")}
              size={20}
              className="text-black"
            />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition cursor-pointer">
            <HiSearch
              onClick={() => router.push("/")}
              size={20}
              className="text-black"
            />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div className="">
              <Button onClick={() => {}} className="bg-transparent text-neutral-300 font-medium">
                Sign up
              </Button>
            </div>
            <div className="">
              <Button onClick={() => {}} className="bg-white px-6 py-2">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
