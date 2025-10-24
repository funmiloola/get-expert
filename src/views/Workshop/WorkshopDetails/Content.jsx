export default function Content() {
  return (
    <>
      <h5 className="text-[18px] font-semibold text-[#030712] pt-8">
        Host Information
      </h5>
      <div className="flex flex-col  md:flex-row gap-4 md:gap-10.5 pt-4.5">
        <div className="flex gap-4.5">
          <img src="/Images/Image (5).svg" alt="" />
          <div className="flex flex-col gap-1">
            <h6 className="text-lg mid:text-2xl text-[#030712] font-semibold">
              Roxanna Michealson
            </h6>
            <p className="text-[#475367] text-sm">
              Role:{" "}
              <span className="text-sm mid:text-base text-[#101928] font-semibold">
                Startup Strategist & Pitch Coach
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col mid:flex-row gap-4 mid:gap-9 mid:items-center">
          <div className="flex flex-col gap-4">
            <h6 className="text-[#475367] text-sm">Reviews</h6>
            <p className="text-base text-[#101928] font-semibold">
              4.9 (210 reviews)
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-[#475367] text-sm">Sessions Hosted</h6>
            <p className="text-base text-[#101928] font-semibold">25</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h6 className="text-[#475367] text-sm">Status</h6>
            <p className="text-[#067647] text-sm font-medium border border-[#ABEFC6] bg-[#ECFDF3] px-2.5 py-0.5 rounded-2xl">
              Active
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
