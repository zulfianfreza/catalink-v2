"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { LuX } from "react-icons/lu";
import { SiX, SiYoutube } from "react-icons/si";
import { ArrowRight2 } from "iconsax-react";

export default function CardAddLink() {
  const [displayCard, setDisplayCard] = useState<boolean>(true);

  const toggleDisplayCard = () => {
    setDisplayCard(!displayCard);
  };
  return (
    <>
      {displayCard ? (
        <div className=" relative w-full overflow-hidden rounded-3xl bg-white">
          <button
            onClick={toggleDisplayCard}
            className=" absolute right-2 top-2 rounded-full p-2.5 hover:bg-neutral-100"
          >
            <LuX size={20} />
          </button>
          <div className=" border-b p-6 pt-10">
            <h1 className=" text-xl font-semibold text-neutral-800">
              Enter URL
            </h1>
            <div className="mt-4 flex gap-4">
              <div className=" relative w-full">
                <input
                  type="text"
                  className=" peer h-12 w-full rounded-lg bg-neutral-100 p-2 pl-4 pt-5 hover:ring-2 hover:ring-neutral-200 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <label
                  htmlFor=""
                  className=" pointer-events-none absolute left-4 top-[13px] origin-[0] transform truncate text-sm text-neutral-500 duration-150 peer-focus:-translate-y-2.5 peer-focus:scale-75"
                >
                  URL
                </label>
              </div>

              <Button className=" h-12 rounded-full px-8">ADD</Button>
            </div>
          </div>

          <div className=" p-6">
            <p className=" text-sm font-semibold text-neutral-500">
              Inspired by your interests
            </p>

            <div className="mt-4 overflow-x-scroll [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className=" flex gap-4">
                <button
                  className=" flex cursor-pointer flex-col items-center gap-y-2"
                  // onClick={handleCreateHeader}
                >
                  <div className=" flex h-[88px] w-[88px] items-center justify-center rounded-[24px] bg-neutral-100">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
                        fill="#C2C9D1"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 12.75H27.5C28.25 12.75 28.9167 13.4166 28.9167 14.1666C28.9167 14.9166 28.25 15.5833 27.5 15.5833H12.5C11.75 15.5833 11.0833 14.9166 11.0833 14.1666C11.0833 13.4166 11.75 12.75 12.5 12.75ZM10 14.1666C10 12.75 11.0833 11.6666 12.5 11.6666H27.5C28.9167 11.6666 30 12.75 30 14.1666C30 15.5833 28.9167 16.6666 27.5 16.6666H12.5C11.0833 16.6666 10 15.5833 10 14.1666ZM12.5 24.4166H27.5C28.25 24.4166 28.9167 25.0833 28.9167 25.8333C28.9167 26.5833 28.25 27.25 27.5 27.25H12.5C11.75 27.25 11.0833 26.5833 11.0833 25.8333C11.0833 25.0833 11.75 24.4166 12.5 24.4166ZM10 25.8333C10 24.4166 11.0833 23.3333 12.5 23.3333H27.5C28.9167 23.3333 30 24.4166 30 25.8333C30 27.25 28.9167 28.3333 27.5 28.3333H12.5C11.0833 28.3333 10 27.25 10 25.8333ZM15.25 20.0833C15.25 20.5833 14.8333 21.0833 14.25 21.0833C13.6667 21.0833 13.3333 20.6666 13.3333 20.0833C13.3333 19.5833 13.75 19.1666 14.3333 19.1666C14.9167 19.1666 15.25 19.5833 15.25 20.0833ZM17.9167 21.0833C18.4167 21.0833 18.9167 20.6666 18.9167 20.0833C18.9167 19.5833 18.5 19.1666 17.9167 19.1666C17.4167 19.1666 17 19.5833 17 20.0833C16.9167 20.6666 17.3333 21.0833 17.9167 21.0833ZM22.4167 20.0833C22.4167 20.5833 22 21.0833 21.5 21.0833C21 21.0833 20.5 20.6666 20.5 20.0833C20.5 19.5833 20.9167 19.1666 21.5 19.1666C22 19.1666 22.4167 19.5833 22.4167 20.0833ZM25.0833 21.0833C25.5833 21.0833 26 20.6666 26 20.0833C26 19.5833 25.5833 19.1666 25.0833 19.1666C24.5833 19.1666 24.1667 19.5833 24.1667 20.0833C24.0833 20.6666 24.5 21.0833 25.0833 21.0833Z"
                        fill="#111821"
                      />
                    </svg>
                  </div>
                  <p className=" text-xs font-medium text-neutral-800">
                    Header
                  </p>
                </button>
                <button
                  // onClick={handleCreateLinkYoutube}
                  className=" flex flex-col items-center gap-y-2"
                >
                  <div className=" flex h-[88px] w-[88px] items-center justify-center rounded-[24px] bg-neutral-100">
                    <div className=" flex h-10  w-10 items-center justify-center rounded-lg border bg-white">
                      <SiYoutube className=" fill-red-500" size={24} />
                    </div>
                  </div>
                  <p className=" text-xs font-medium text-neutral-800">
                    YouTube
                  </p>
                </button>
                <button
                  // onClick={handleCreateLinkYoutube}
                  className=" flex flex-col items-center gap-y-2"
                >
                  <div className=" flex h-[88px] w-[88px] items-center justify-center rounded-[24px] bg-neutral-100">
                    <div className=" flex h-10  w-10 items-center justify-center rounded-lg bg-black">
                      <SiX className=" fill-white" size={20} />
                    </div>
                  </div>
                  <p className=" text-xs font-medium text-neutral-800">X</p>
                </button>
                <button
                  // onClick={handleCreateTextLink}
                  className=" flex flex-col items-center gap-y-2"
                >
                  <div className=" flex h-[88px] w-[88px] items-center justify-center rounded-[24px] bg-neutral-100">
                    <div className=" flex h-10  w-10 items-center justify-center rounded-lg border bg-white">
                      <p className=" text-xs underline">abc</p>
                    </div>
                  </div>
                  <p className=" text-xs font-medium text-neutral-800">
                    Text Link
                  </p>
                </button>
              </div>
            </div>

            <div className=" mt-4">
              <button className=" flex h-12 items-center gap-1 rounded-full px-4 text-sm font-semibold text-violet-700 hover:bg-neutral-100">
                View all
                <ArrowRight2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          className=" h-12 w-full rounded-full"
          onClick={toggleDisplayCard}
        >
          Add Link
        </Button>
      )}
    </>
  );
}
