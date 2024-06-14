"use client";

import IconCross from "@/app/_components/icons/IconCross";
import IconHamburger from "@/app/_components/icons/IconHamburger";
import IconLogo from "@/app/_components/icons/IconLogo";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);

  return (
    <nav className="z-10 max-md:fixed max-md:w-full md:flex md:gap-3 md:px-[5.21%] lg:flex-col lg:gap-6 lg:px-0">
      <div className="brand-box flex h-44 flex-1 basis-1/3 items-center justify-center text-white max-md:h-[72px] max-md:justify-between md:rounded-10px lg:min-h-32">
        <div className="z-10 flex h-full w-full items-end px-5 pb-6 max-md:items-center max-md:py-5 max-md:ps-4 lg:min-h-32 lg:px-6 lg:pb-7">
          <div className="flex items-center gap-[6px]">
            <IconLogo />
            <div className="pt-2">
              <h2 className="text-h2/4 font-bold">Habitaur</h2>
              <h3 className="text-body-2 text-slate-100">Feedback board</h3>
            </div>
          </div>
        </div>
        <button
          className="z-10 max-md:py-5 max-md:pe-5 md:hidden"
          onClick={(e) => setIsOpenOnMobile((prev) => !prev)}
        >
          {isOpenOnMobile ? <IconCross /> : <IconHamburger />}
        </button>
      </div>
      <motion.div
        className={clsx({
          "basis-2/3 max-md:h-screen md:!bg-transparent": true,
          "max-md:hidden": !isOpenOnMobile,
        })}
        animate={{
          backgroundColor: isOpenOnMobile
            ? "rgba(0,0,0,0.5)"
            : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-44 flex-1 max-md:ms-[27%] max-md:flex max-md:h-screen max-md:flex-col max-md:gap-6 max-md:bg-slate-50 max-md:px-6 max-md:pt-6 md:gap-3 lg:flex-col lg:gap-6">
          <div className="flex h-44 items-center justify-center bg-white text-slate-600 md:flex md:flex-1 lg:min-h-40">
            Categories
          </div>
          <div className="flex h-44 items-center justify-center bg-white text-slate-600 md:flex md:flex-1 lg:min-h-40">
            Roadmap summary
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
