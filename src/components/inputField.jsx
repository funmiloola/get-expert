

export default function InputField({ label,placeholder,type,...rest}) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-gray-700 text-sm font-semibold">{label}</label>
            <input type={type} name="" placeholder={placeholder} className="py-2.5 outline-none border border-gray-300 rounded-lg px-2 text-sm" {...rest} />
        </div>
    )
}