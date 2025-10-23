import Input from "../../../components/Input";
import Filter from "../../../components/filter";
import ClientTableDetail from "../../../components/ClientTableDetails";
import PageSection from "../../../components/PagesSection";
import { clientPurchases } from "../../../data";
import { useState } from "react";
import { filteredByDays } from "../../../components/utils/dateFIlter";

export default function PurchaseSection() {
  const [input, setInput] = useState("");
  const [filterType, setFilterType] = useState("all")
  const filteredDate = filteredByDays(filterType,clientPurchases)
  const filteredTable = filteredDate.filter(({ title }) =>
    title.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-8">
        <div className="w-full mid:w-1/2">
          <Input
            placeholder="Search for registered Clients"
            input={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <Filter currentFilter={filterType} onChange={setFilterType} />
      </div>
      <ClientTableDetail
        data={filteredTable}
        title="Product Title"
        type="Type"
        consultant="Consultant"
        date="Date"
        amount="Amount Paid"
        stats="Status"
      />
      <PageSection />
    </>
  );
}
