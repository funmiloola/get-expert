export default function CardGrid({ data }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 sm:pt-8">
      {data.map(({ icon, title, menu, figure, img, per }, index) => (
        <div
          key={index}
          className="border border-[#E9EAEB] p-2.5 mid:p-5 rounded-md"
        >
          <div className="flex items-start gap-3">
            <div className="border border-[#D5D7DA] p-0.5 mid:p-2 rounded mid:rounded-lg">
              <img src={icon} alt="icon" className="w-3 h-3 mid:w-5 mid:h-5" />
            </div>
            <div className=" flex items-center justify-between flex-1">
              <h3 className="text-xs mid:text-sm text-[#535862] font-semibold">
                {title}
              </h3>
              {menu && <img src={menu} alt="menu" />}
            </div>
          </div>
          <div className="flex pt-4 mid:pt-0 justify-between pl-12">
            <p className="text-lg mid:text-3xl text-[#181D27] font-semibold">
              {figure}
            </p>
            {per && (
              <div className="flex gap-1 items-center border border-[#D5D7DA] rounded-md py-1 px-1 mid:px-2">
                <img src={img} alt="trend" />
                <span className="text-xs mid:text-sm text-[#414651] font-medium">
                  {per}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
