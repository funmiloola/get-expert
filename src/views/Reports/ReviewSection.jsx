import Input from "../../components/Input";
import { useState, useRef } from "react";
import PageSection from "../../components/PagesSection";
import ReviewMenu from "./ReviewMenu";
import { useOnClickOutside } from "usehooks-ts";

export default function ReviewSection() {
  const reviews = [
    {
      itemType: "Product",
      title: "Client Toolkit",
      reviewer: "@coachlola",
      stars: [
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star.svg",
      ],
      textPreview: "So detailed and clear!",
      dateSubmitted: "Apr 12, 2023",
      status: "Published",
      icon: "/Icons/Dropdown.svg",
    },
    {
      itemType: "Workshop",
      title: "Client Toolkit",
      reviewer: "@coachlola",
      stars: [
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
      ],
      textPreview: "Misleading info",
      dateSubmitted: "Apr 24, 2023",
      status: "Published",
      icon: "/Icons/Dropdown.svg",
    },
    {
      itemType: "Workshop",
      title: "Client Toolkit",
      reviewer: "@coachlola",
      stars: [
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
      ],
      textPreview: "Total waste of time",
      dateSubmitted: "Apr 25, 2023",
      status: "Flagged",
      icon: "/Icons/Dropdown.svg",
    },
    {
      itemType: "Product",
      title: "Growth Strategy...",
      reviewer: "@coachlola",
      stars: [
        "/Icons/Star icon.svg",
        "/Icons/Star icon.svg",
        "/Icons/Star (1).svg",
      ],
      textPreview: "Total waste of time",
      dateSubmitted: "Apr 29, 2023",
      status: "Published",
      icon: "/Icons/Dropdown.svg",
    },
  ];
  const [input, setInput] = useState("");
  const filteredReview = reviews.filter(({ title }) =>
    title.toLowerCase().includes(input.toLowerCase())
  );
  const [openOptions, setOpenOptions] = useState(null);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setOpenOptions(null));
  return (
    <>
      <div className="w-full mid:w-1/2 pt-8">
        <Input
          input={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for products"
        />
      </div>
      <div className="overflow-x-auto pt-4 mid:pt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="border-b border-b-[#E9EAEB]  text-xs text-[#717680] font-semibold">
            <tr className="text-left">
              <th className="px-4 py-6">Item Type</th>
              <th className="px-4 py-6">Title</th>
              <th className="px-4 py-6">Reviewer</th>
              <th className="px-4 py-6">Stars</th>
              <th className="px-4 py-6">Text Preview</th>
              <th className="px-4 py-6">Date Submitted</th>
              <th className="px-4 py-6">Status</th>
              <th className="px-4 py-6">
                <img src="/Icons/Dropdown.svg" alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredReview.length > 0 ? (
              filteredReview.map(
                (
                  {
                    itemType,
                    title,
                    reviewer,
                    stars,
                    textPreview,
                    dateSubmitted,
                    status,
                    icon,
                  },
                  index
                ) => (
                  <tr
                    key={index}
                    className="text-left border-b border-b-[#E9EAEB] font-medium text-sm text-[#030712]"
                  >
                    <td className="px-4 py-6">{itemType}</td>
                    <td className="px-4 py-6">{title}</td>
                    <td className="px-4 py-6">{reviewer}</td>
                    <td className="flex gap-1 px-4 py-6">
                      {stars.map((star, i) => (
                        <img key={i} src={star} alt="star" />
                      ))}
                    </td>
                    <td className="px-4 py-6">{textPreview}</td>
                    <td className="px-4 py-6">{dateSubmitted}</td>
                    <td className="px-4 py-6">
                      <span
                        className={`border px-2 py-0.5 rounded-2xl ${
                          status === "Published"
                            ? "text-[#067647] bg-[#ECFDF3] border-[#ABEFC6]"
                            : "text-[#B42318] bg-[#FEF3F2] border-[#FECDCA]"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-6 min-w-[50px] cursor-pointer relative">
                      <img
                        src={icon}
                        alt=""
                        className="hover:bg-[#E9EAEB] hover:rounded-sm"
                        onClick={() =>
                          setOpenOptions(openOptions === index ? null : index)
                        }
                      />
                      {openOptions === index && (
                        <div ref={dropdownRef}>
                          <ReviewMenu />
                        </div>
                      )}
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan="8" className="text-center pt-4">
                  No reviews found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <PageSection />
    </>
  );
}
