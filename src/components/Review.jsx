import Icon from "../assets/Icons/Stroke-1.svg"
import starIcon from "../assets/Icons/Vector (11).svg"
export default function Review() {
     const reviews = [
    {
      icons:[starIcon,starIcon,starIcon,starIcon,starIcon],
      rating: 5,
      date: "June 3, 2025",
     text: `"Loved the templates. Super clear instructions and easy to use."`,
      review:"Review For",
      template: "Client Strategy Template"
    },
    {
      icons:[starIcon,starIcon,starIcon,starIcon,starIcon],
      rating: 5,
      date: "May 12, 2025",
        text: `"Very helpful for planning. Saved me so much time!"`,
      review:"Review For",
      template: "Marketing Plan Template"
    }
  ];
    return (
        <>
            <div className="flex gap-2.5 justify-between pt-8">
                <h2 className="text-sm text-[#030712] font-medium">1-5 out of 34 Reviews</h2>
                <div className="flex items-center gap-2.5">
                    <h3 className="text-sm text-[#030712]">Sort By:</h3>
                    <p className="flex gap-2 items-center"><span className="text-sm text-[#030712] font-bold">Rating</span>
                    <img src={Icon} alt="" />
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 py-6">
                {reviews.map(({ icons, rating, date, text,review, template }) => (
                    <div className="border border-[#C9D0D8] rounded-xl p-6">
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                {icons.map((icon) => ( 
                                    <img src={icon} alt="" />
                            ))}
                                <span className="text-[#030712] text-sm font-bold">{rating}</span>
                            </div>
                            <div>
                                <p className="text-[#030712] text-sm">{ date}</p>
                            </div>
                        </div>
                        <h4 className="pt-5 text-[#030712] text-sm font-bold">Review: <span className="font-normal">{text}</span></h4>
                        <h5 className="pt-5 text-[10px] font-semibold text-[#030712]">{review}</h5>
                        <p className="text-[#030712] font-semibold text-base">{ template}</p>
                    </div>
                ))}
            </div>
            <button className="px-6 py-4 font-semibold text-base text-[#030712] border border-[#D0D5DD] rounded-lg">Show more reviews</button>
        </>
    )
}