export default function Card() {
     const cards = [
      {
        icon: "/Icons/user.svg",
        title: "Total Registered Users",
        figure: "6,124",
        img:"/Icons/arrow-up-right.svg",
        per: "100%",
      },
      {
        icon: "/Icons/Bag.svg",
        title: "Total Workshops Hosted",
        figure: "812",
        img: "/Icons/arrow-up-right.svg",
        per: "100%",
      },
      {
        icon: "/Icons/Document pdf.svg",
        title: "Total Products Published",
        figure: "2,139",
        img: "/Icons/arrow-up-right.svg",
        per: "100%",
      },
      {
        icon: "/Icons/Graduated.svg",
        title: "Total Workshops Hosted",
        figure: "318",
        img: "/Icons/arrow-up-right.svg",
        per: "100%",
      },
      {
        icon: "/Icons/Bank Card.svg",
        title: "Pending Payout Requests",
        figure: "21",
        img: "/Icons/arrow-up-right.svg",
        per: "100%",
      },
      {
        icon: "/Icons/Danger 3.svg",
        title: "Active Reports",
        figure: "6",
        img: "/Icons/arrow-up-right.svg",
        per: "100%",
      },
    ];
    return (
         <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 sm:pt-12">
                {cards.map(({ icon, title, figure, img, per }) => (
                  <div className="flex w-full gap-4 items-start p-2.5 mid:p-5 border border-[#E9EAEB] rounded-xl ">
                    <div className="border border-[#D5D7DA] p-0.5 mid:p-2 rounded mid:rounded-lg">
                      <img src={icon} alt="" className="w-3 h-3 mid:w-5 mid:h-5" />
                    </div>
                    <div className="w-[80%]">
                      <h3 className="text-xs mid:text-sm text-[#535862] font-semibold">
                        {title}
                      </h3>
                      <div className=" flex pt-2 items-center justify-between">
                        <p className="text-lg mid:text-3xl text-[#181D27] font-semibold">
                          {figure}
                        </p>
                        <div className="flex gap-1 items-center border border-[#D5D7DA] rounded-md py-0.5 px-1 mid:px-2 ">
                          <img src={img} alt="" />
                          <span className="text-xs mid:text-sm text-[#414651] font-medium">
                            {per}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    )
}