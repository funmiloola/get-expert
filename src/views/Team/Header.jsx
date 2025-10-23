export default function Header() {
    return (
        <>
              <header className="flex items-center gap-4.5">
        <h2 className="text-xl mid:text-2xl pl-2 mid:pl-0 font-bold text-[#181D27]">Team management</h2>
        <h3 className="border border-[#D5D7DA] text-[#414651] text-xs font-medium px-2 py-0.25 mid:py-0.75 rounded-md ">
          48 members
        </h3>
      </header>
        <p className="pt-2 text-[#535862] text-sm mid:text-base">
          Manage your team members and their account permissions here.
                </p>
                
        </>
    )
}