import arrow from "../../assets/Icons/arrow-up-right.svg";
import totalIcon from "../../assets/Icons/Icon (1).svg";
import DashboardFilter from "./DashboardFilter";
import { Bar } from "react-chartjs-2";
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
import { useState } from "react";

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
export default function Revenue() {
  const [selected,setSelected] = useState("all")
    return (
        <section>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center pt-12">
                 <div className="flex gap-1 items-center">
                   <h2 className="text-sm text-[#535862] font-semibold">
                     Total revenue
                   </h2>
                   <img src={totalIcon} alt="" className="cursor-pointer" />
                 </div>
                 <div>
                   <DashboardFilter selected={ selected} onChange={setSelected} />
                   
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
    )
}