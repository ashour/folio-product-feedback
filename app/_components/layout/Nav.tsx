import IconCross from "../icons/IconCross";

export default function Nav() {
  return (
    <nav className="max-md:fixed max-md:w-full md:flex md:gap-3 md:px-[5.21%] lg:flex-col  lg:gap-6 lg:px-0">
      <div className="flex h-44 flex-1 basis-1/3 items-center justify-center bg-purple-400 text-white max-md:h-[72px] max-md:justify-between lg:min-h-32">
        <div className="max-md:py-[6px] max-md:ps-2">Brand</div>
        <div className="max-md:py-5 max-md:pe-5 md:hidden">
          <IconCross />
        </div>
      </div>
      <div className="max-md:bg-black/50 basis-2/3 max-md:h-screen">
        <div className="flex h-44 flex-1 max-md:ms-[27%] max-md:flex max-md:h-screen max-md:flex-col max-md:gap-6 max-md:bg-slate-50 max-md:px-6 max-md:pt-6 md:gap-3 lg:flex-col lg:gap-6">
          <div className="flex h-44 items-center justify-center bg-white text-slate-600 md:flex md:flex-1 lg:min-h-40">
            Categories
          </div>
          <div className="flex h-44 items-center justify-center bg-white text-slate-600 md:flex md:flex-1 lg:min-h-40">
            Roadmap summary
          </div>
        </div>
      </div>
    </nav>
  );
}
