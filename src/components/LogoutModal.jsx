import { useState } from "react"
import { auth } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";

export default function LogoutModal() {
    const navigate = useNavigate()
    const logout = async() => {
    await signOut(auth)
    navigate('/')
    }
    const [closeModal,setCloseModal] = useState(false)
  
    return (
        <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${closeModal ? "hidden":"fixed "}`}>
      <div className="bg-white w-80 md:w-96 rounded-2xl shadow-xl relative">
        <h3 className="text-base md:text-xl text-center text-gray-950 font-semibold border-b border-b-[#E9EAEB] py-4 px-2">
          Are you sure you want to logout?
        </h3>
        <div className="flex items-center justify-end pt-16 pb-3 gap-4 pr-3">
          <button
            className="bg-[#3279F3] border-[#3279F3] px-6 py-0.5 rounded-md text-[#ffffff] font-semibold cursor-pointer"
            onClick={logout}
          >
            Yes
          </button>
          <button
            className="bg-[#E9EAEB] border-[#E9EAEB] px-6 py-0.5 rounded-md text-[#3279F3] font-semibold cursor-pointer"
            onClick={()=>setCloseModal(true)}
          >
            No
          </button>
        </div>
      </div>
    </div>
    )
}