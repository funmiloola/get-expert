import Input from "../../components/Input.jsx";
import { useState } from "react";
import { clients, clientCards } from "../../data.jsx";
import CardGrid from "./Cardgrid.jsx";
import Table from "./Table";
import Filter from "../../components/filter.jsx";
import { filteredByDays } from "../../components/utils/dateFIlter.js";

export default function Client() {
  const [input, setInput] = useState("");
  const [filterType, setFilterType] = useState("all");
  const filteredData = filteredByDays(filterType, clients);
  const [count, setCount] = useState(1);
  const [currentTable, setCurrentTable] = useState(0);
  const filteredTable = filteredData?.[currentTable]?.filter(
    ({ name, email }) =>
      name.toLowerCase().includes(input.toLowerCase()) ||
      email.toLowerCase().includes(input.toLowerCase())
  );
  function handleDisplayTable() {
    setCurrentTable((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  function handlePrevDisplay() {
    setCurrentTable((prev) => prev - 1);
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <section>
        <CardGrid data={clientCards} />
        <h4 className="pt-8 text-base md:text-lg text-[#030712] font-semibold pb-4">
          Clients
        </h4>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center pb-4 w-full md:justify-between">
          <div className=" w-full md:w-1/2">
            <Input
              placeholder="Search by name, email, phone"
              input={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <Filter currentFilter={filterType} onChange={setFilterType} />
        </div>
        <Table filteredTable={filteredTable} />
      </section>
      <footer className="pb-3">
        <div className="flex items-center justify-between pt-8">
          <h5 className="text-xs md:text-sm font-medium text-[#414651]">
            Page {count} of {filteredTable?.length}
          </h5>
          <div className="flex items-center gap-3">
            <button
              className="px-2 py-1 md:px-4 md:py-2 border border-[#D5D7DA] text-sm font-semibold text-[#414651] rounded-md cursor-pointer"
              onClick={handlePrevDisplay}
              disabled={currentTable === 0}
            >
              Previous
            </button>
            <button
              className="px-2 py-1 md:px-4 md:py-2 border border-[#D5D7DA] text-sm font-semibold text-[#414651] rounded-md cursor-pointer"
              onClick={handleDisplayTable}
              disabled={currentTable === filteredTable?.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
