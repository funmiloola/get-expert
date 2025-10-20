export default function InputField({ label,placeholder}) {
    return (
        <>
            <label className="text-gray-700 text-sm font-semibold">{label}</label>
            <input type="text" name="" id="" placeholder={placeholder}  className="py-2.5 outline-none border border-gray-300 rounded-lg px-2 text-sm"/>
        </>
    )
}