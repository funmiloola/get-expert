import Icon from "../assets/Icons/Stroke-1.svg"
import flag from "../assets/Icons/Vector (12).svg"
import profilePicture from "../assets/Images/Avatars (1).svg"
import starIcon from "../assets/Icons/Vector (11).svg"

 
export default function ExpertReview() {
   
    const reviews = [
  {
    profilePicture:profilePicture,
            username: "@toluUX",
      flag:flag,
            location: "Lagos, Nigeria",
    rateIcons:[starIcon,starIcon,starIcon,starIcon,starIcon],
    
    rating: 5,
    date: "June 3, 2025",
    comment: `"This session changed how I pitch my services. Very clear explanations."`,
    sessionReviewed: "1:1 Career Strategy Call",
    duration: "5 weeks"
  },
        {
       profilePicture:profilePicture,
      username: "@toluUX",
      flag:flag,
            location: "Lagos, Nigeria",
    rateIcons:[starIcon,starIcon,starIcon,starIcon,starIcon],
    
    rating: 5,
    date: "June 3, 2025",
    comment: `"This session changed how I pitch my services. Very clear explanations."`,
    sessionReviewed: "1:1 Career Strategy Call",
    duration: "5 weeks"
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
            <div  className="flex flex-col gap-4 py-6">
                {reviews.map(({ profilePicture, username, flag, location,rateIcons, rating, date, comment, sessionReviewed, duration }) => (
                    <div  className="border border-[#C9D0D8] rounded-xl p-6">
                        <div className="flex gap-7.5 items-center">
                            <img src={profilePicture} alt="" />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm font-bold">{username}</h2>
                                <div className="flex gap-2">
                                    <img src={flag} alt="" />
                                    <p className="text-sm">{ location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 pt-5">
                            <div className="flex items-center gap-2">
                                 {rateIcons.map((rateIcon) => (<img src={rateIcon} alt="review-icn" />))}
                            <span className="text-[#030712] text-sm font-bold">{rating}</span>
                            </div>
                            <div>
                                <p className="text-[#030712] text-sm font-medium">{ date}</p>
                            </div>
                        </div>
                        <h4 className="pt-5 text-[#030712] text-sm font-bold">Comment: <span className="font-normal">{comment}</span></h4>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-9 pt-5">
                            <h5 className="flex flex-col gap-1.5 text-[#030712] text-[10px] font-bold md:border-r md:border-r-[#F0F2F5] pr-9">Session/Product Reviewed: <span className="text-base">{sessionReviewed}</span></h5>
                            <p className="flex flex-col gap-1.5 text-[#030712] text-[10px] font-bold">Duration: <span className="text-base">{ duration}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}