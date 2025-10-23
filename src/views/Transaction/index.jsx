import downArrow from "../../assets/Icons/arrow-down.svg";
import upArrow from "../../assets/Icons/arrow-up.svg";
import ClientCardGrid from "../../components/ClientCardgrid";
import TransactionTable from "./transactionTable";
import PayoutTable from "./PayoutTable";

export default function Transactions() {
    const summary = [
        {
          title: "Total in escrow",
          value: "₦1,254,000",
          icon: downArrow,
          change: "100%",
        },
        {
          title: "Funds released",
          value: "₦394,000",
          icon: upArrow,
          change: "100%",
        },
        { title: "Payouts requested", value: 7, icon: upArrow, change: "+65%" },
        { title: "Flagged transactions", value: 3, icon: downArrow, change: "50%" },
    ];
    return (
        <>
         <h2 className="text-[#181D27] text-xl mid:text-2xl font-bold pl-2 mid:pl-0">Transactions</h2>
              <ClientCardGrid
                data={summary}
                className="grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-4 gap-6"
            />
            <TransactionTable />
            <PayoutTable/>
        </>
    )
}