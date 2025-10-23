import DashboardHeader from "../../components/DashboardHeader"
import settingIcon from "../../assets/Icons/Setting.svg";
import Card from "./Card";
import Revenue from "./Revenue";
import Table from "./Table";

export default function DashboardSection() {
    return ( 
        <section className="font-sans">
        <DashboardHeader
         title="My dashboard"
                className="flex-col gap-3  sm:flex-row sm:items-center font-sans"
                extra={
                  <div className="flex gap-3">
                    <div className="px-2 py-1 mid:px-4 mid:py-2.5 border border-[#D5D7DA] rounded-lg font-semibold text-xs mid:text-sm text-[#414651] cursor-pointer">
                      What's new?
                    </div>
                    <div className="flex gap-1 px-2 py-1 mid:px-4 mid:py-2.5 border border-[#D5D7DA] rounded-lg cursor-pointer">
                      <img
                        src={settingIcon}
                        alt=""
                        className="w-4 h-4 mid:w-6 mid:h-6"
                      />
                      <p className="font-semibold text-xs mid:text-sm text-[#414651]">
                        Manage
                      </p>
                    </div>
                  </div>
                } />
            <Card />
            <Revenue />
            <Table/>
                    </section>
    )
}