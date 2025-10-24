export default function Password() {
    return (
        <section className="font-sans pt-4 mid:pt-12">
            <h3 className="text-[#181D27] text-[18px] font-semibold">Password</h3>
            <h4 className="text-sm text-[#535862] border-b border-[#E9EAEB] pb-5">Please enter your current password to change your password.</h4>
            <form className="pt-3 mid:pt-6">
                <label className="flex flex-col md:flex-row gap-2 md:gap-60   md:border-b border-b-[#E9EAEB] md:pb-5">
                    <span className="text-sm text-[#414651] font-semibold">Current password*</span>
                    <input type="password"  placeholder="••••••••" className="outline-none w-full mid:w-[40%] border border-[#D5D7DA] rounded-lg p-3"/>
                </label>
                <label className="flex flex-col md:flex-row gap-2 md:gap-31 pt-5  md:border-b border-b-[#E9EAEB] md:pb-5">
                    <span className="text-sm text-[#414651] font-semibold w-full md:w-1/4">New password*</span>
                    <div className="flex flex-col gap-1 items-start w-full md:w-3/4">
                        <input type="password" placeholder="••••••••" className="outline-none w-full mid:w-[60%] border border-[#D5D7DA] rounded-lg p-3" />
                        <span className="text-sm text-[#535862]">Your new password must be more than 8 characters.</span>
                    </div>
                </label>
                <label  className="flex flex-col md:flex-row gap-2 md:gap-48  pt-5 md:border-b border-b-[#E9EAEB] md:pb-5">
                    <span>Confirm new password*</span>
                    <input type="password" placeholder="••••••••" className="outline-none w-full mid:w-[40%] border border-[#D5D7DA] rounded-lg p-3" />
             </label>
            </form>
             <div className="flex items-center justify-end gap-3 pt-5 pb-5">
                  <button className="px-4 py-2 text-[#344054] text-sm font-semibold rounded-lg border border-[#D0D5DD]">Cancel</button>
                  <button className="px-4 py-2 text-white text-sm font-semibold rounded-lg border border-[#3B82F6] bg-[#3B82F6]">Update password</button>
              </div>
        </section>
    )
}