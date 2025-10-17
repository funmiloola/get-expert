import Input from "./Input";
import Filter from "./filter";
import ClientTableDetail from "./ClientTableDetails";
import PageSection from "./PagesSection";
import { clientPurchases } from "../data";
import { useState } from "react";

export default function PurchaseSection() {
  const [input, setInput] = useState("");
  const filteredTable = clientPurchases.filter(({ title }) =>
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
        <Filter />
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
