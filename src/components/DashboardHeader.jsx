export default function DashboardHeader({ children, title, className, extra }) {
  return (
    <div>
      <div className={`flex justify-between items-center ${className}`}>
        <h1 className="text-xl mid:text-2xl text-[#181D27] font-bold pl-2 mid:pl-0">
          {title}
        </h1>
        <div>{extra}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
