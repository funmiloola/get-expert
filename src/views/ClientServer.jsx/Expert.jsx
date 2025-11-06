import { experts, clients } from "../../data.jsx";
import Input from "../../components/Input.jsx";
import { useState } from "react";
import CardGrid from "./Cardgrid.jsx";
import Table from "./Table";
import Filter from "../../components/filter.jsx";
import { filteredByDays } from "../../components/utils/dateFIlter.js";
import PageSection from "../../components/PagesSection";

export default function Expert() {
  const [input, setInput] = useState("");
  const [filterType, setFilterType] = useState("all");
  const filteredDate = filteredByDays(filterType, clients);
  const [currentTable, setCurrentTable] = useState(0);
  const filteredTable = filteredDate?.[currentTable]?.filter(
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
        <CardGrid data={experts} />
        <div>
          <h4 className="pt-8 text-lg text-[#030712] font-semibold pb-4">
            Experts
          </h4>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center pb-4 w-full justify-between">
            <div className="w-full mid:w-1/2">
              <Input
                placeholder="Search by name, email, phone"
                input={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <Filter currentFilter={filterType} onChange={setFilterType} />
          </div>
          <Table filteredTable={filteredTable} />
        </div>
      </section>
      <PageSection
        onPrevClick={handleDisplayTable}
        onNextClick={handlePrevDisplay}
      />
    </>
  );
}
