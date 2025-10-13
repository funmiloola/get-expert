import DashboardHeader from "./DashboardHeader";
import settingIcon from "../assets/Icons/Setting.svg";
import filterLines from "../assets/Icons/filter-lines.svg";
import arrow from "../assets/Icons/arrow-up-right.svg";
import { cards, users, purchases } from "../data";
import totalIcon from "../assets/Icons/Icon (1).svg";
import { Bar } from "react-chartjs-2";
import Filter from "./filter.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const getConfigValues = () => {
  const width = window.innerWidth;
  if (width <= 640) {
    return { borderRadius: 4, barThickness: 16, barPercentage: 0.5 };
  } else if (width <= 1024) {
    return { borderRadius: 4, barThickness: 24, barPercentage: 0.35 };
  } else {
    return { borderRadius: 4, barThickness: 32, barPercentage: 0.2 };
  }
};
const { borderRadius, barPercentage, barThickness } = getConfigValues();
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [320, 450, 300, 420, 280, 460, 400, 410, 390, 420, 450, 470],
      backgroundColor: "#1E55AF",
      borderRadius,
      barThickness,
      barPercentage,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};



export default function DashboardSection() {
  return (
    <div className="font-sans  ">
      <DashboardHeader
        title="My dashboard"
        className="flex-col gap-3 pl-2 sm:pl-0 sm:flex-row sm:items-center font-sans"
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
        }
      />
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
              <div className=" flex pt-2 justify-between">
                <p className="text-lg mid:text-3xl text-[#181D27] font-semibold">
                  {figure}
                </p>
                <div className="flex gap-1 items-center border border-[#D5D7DA] rounded-md py-1 px-1 mid:px-2 ">
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
      <section>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center pt-12">
          <div className="flex gap-1 items-center">
            <h2 className="text-sm text-[#535862] font-semibold">
              Total revenue
            </h2>
            <img src={totalIcon} alt="" className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Filter/>
            <div className="flex gap-1 border border-[#D5D7DA] py-1 px-1.5 sm:py-2 sm:px-3 rounded-lg cursor-pointer">
              <img src={filterLines} alt="" className="w-4 h-4 sm:w-6 sm:h-6" />
              <h4 className="text-xs sm:text-sm text-[#414651] font-semibold ">
                Filters
              </h4>
            </div>
          </div>
        </div>
        <div className="flex pt-4 sm:pt-0 gap-3 items-center">
          <p className="text-[#181D27]text-lg mid:text-3xl font-semibold">
            ₦24.6M
          </p>
          <div className="flex gap-1 items-center border border-[#D5D7DA] rounded-md px-1.5 mid:py-1">
            <img src={arrow} alt="" />
            <span className="text-xs mid:text-sm font-medium text-[#414651]">
              2.4%
            </span>
          </div>
        </div>
        <div className="w-full h-[300px]">
          <Bar data={data} options={options} />
        </div>
      </section>
      <div className="flex flex-col gap-4 justify-center items-center xl:flex-row xl:justify-between pt-4 sm:pt-12 ">
        <div className="w-full xl:w-1/2">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="text-left mid:py-3 text-sm sm:text-lg font-semibold">
                  Latest Users
                </th>
              </tr>

              <tr className="text-left border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
                <th className=" py-3 px-4 ">Name</th>
                <th className=" py-3  sm:px-2  ">Email Address</th>
                <th className=" py-3  sm:px-2 ">Joined Date</th>
                <th className=" py-3  sm:px-2">Client Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ name, email, joinedDate, status, index }) => (
                <tr key={index} className="border-b border-b-[#E9EAEB]">
                  <td className=" py-3 px-2 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {name}
                  </td>
                  <td className=" py-3 px-2 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {email}
                  </td>
                  <td className=" py-3 px-2 sm:font-medium  text-[9px] sm:text-sm text-[#030712]">
                    {joinedDate}
                  </td>
                  <td className=" py-3 px-2  sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="xl:border-l xl:border-l-[#E9EAEB]  xl:pl-2 w-full xl:w-1/2">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="text-left mid:py-3  text-sm sm:text-lg font-semibold">
                  Recent Purchases
                </th>
              </tr>

              <tr className="text-left border-b border-b-[#E9EAEB] text-xs text-[#717680] font-semibold">
                <th className=" py-3 px-4">Name</th>
                <th className=" py-3 px-2 sm:px-4">Email Address</th>
                <th className=" py-3 px-4">Type</th>
                <th className=" py-3 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map(({ name, product, type, amount, index }) => (
                <tr key={index} className="border-b border-b-[#E9EAEB]">
                  <td className=" py-3 px-2 xs:px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {name}
                  </td>
                  <td className=" py-3 px-2 xs:px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {product}
                  </td>
                  <td className=" py-3 px-2 xs:px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {type}
                  </td>
                  <td className=" py-3 px-2 xs:px-4 sm:font-medium text-[9px] sm:text-sm text-[#030712]">
                    {amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
