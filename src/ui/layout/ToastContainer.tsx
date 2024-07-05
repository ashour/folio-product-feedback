"use client";

import IconCross from "@/ui/icons/IconCross";
import clsx from "clsx";
import { ToastContainer as RTToastContainer, Slide } from "react-toastify";

export default function ToastContainer() {
  return (
    <RTToastContainer
      stacked
      closeOnClick
      icon={false}
      hideProgressBar
      autoClose={3000}
      transition={Slide}
      position="bottom-center"
      toastClassName={(ctx) =>
        clsx(
          "py-4 px-8 md:p-4 rounded-10px shadow-md text-white cursor-pointer flex justify-between items-center",
          {
            "bg-sky": !ctx || !ctx.type || ctx.type === "default",
            "bg-danger": ctx?.type === "error",
          },
        )
      }
      bodyClassName={() =>
        "text-white stroke-white flex-1 flex justify-between"
      }
      closeButton={() => (
        <div className="flex h-6 w-6 items-center justify-center">
          <IconCross />
        </div>
      )}
    />
  );
}
