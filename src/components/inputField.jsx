export default function InputField({ label, placeholder, type,children,...rest}) {
  return (
    <div className="flex flex-col gap-1">
          <label className="text-gray-700 text-sm font-semibold">{label}</label>
          <div className="flex justify-between items-center w-full border border-gray-300 rounded-lg pr-2 ">
      <input
        type={type}
        name=""
        placeholder={placeholder}
        className="py-2.5 w-full outline-none px-2 text-sm"
        {...rest}
              />
              {children}
              </div>
    </div>
  );
}
