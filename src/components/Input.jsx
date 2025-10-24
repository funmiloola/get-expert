export default function Input({ placeholder, input, onChange }) {
  return (
    <section className="flex gap-3">
      <div className="border border-[#D0D5DD] rounded-md w-full flex items-center gap-2 px-2 py-3">
        <img src="/Icons/Icon-left.svg" alt="" />
        <input
          type="text"
          name=""
          id=""
          placeholder={placeholder}
          className="w-full outline-none text-xs sm:text-sm"
          value={input}
          onChange={onChange}
        />
      </div>
      <div className="border border-[#D0D5DD] px-4 py-2.5 rounded-md cursor-pointer">
        <img src="/Icons/Container.svg" alt="" />
      </div>
    </section>
  );
}
