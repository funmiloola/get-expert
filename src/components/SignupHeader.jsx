import logo from "../assets/Icons/Frame.svg";

export default function SignupHeader() {
    return (
        <header>
            <div className="font-sans hidden md:flex justify-between items-center px-4 md:px-20 pt-6 ">
                <img src={logo} alt="" />
                <div className="flex gap-2 items-center">
            <button className=" border border-[#1E55AF] px-4 py-2 rounded-lg text-[#1E55AF] font-semibold cursor-pointer">Log in</button>
                    <button className="border border-[#1E55AF] bg-[#1E55AF] px-4 py-2 rounded-lg text-[#ffffff] font-semibold cursor-pointer">Sign up</button>
                    </div>
                </div>
        </header>
    )
}