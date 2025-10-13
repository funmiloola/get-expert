import Input from "./Input";
import { useState } from "react";
import { clients, clientCards } from "../data.jsx";
import CardGrid from "./Cardgrid";
import Table from "./Table";
import Filter from "./filter";


export default function Client() {
const [input, setInput] = useState("");
  const filteredTable = clients.filter(
    ({ name, email }) =>
      name.toLowerCase().includes(input.toLowerCase()) ||
      email.toLowerCase().includes(input.toLowerCase())
  );
 
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
          <Filter/>
        </div>
        <Table filteredTable={filteredTable} />
      </section>
      <footer className="pb-3">
        <div className="flex items-center justify-between pt-8">
          <h5 className="text-xs md:text-sm font-medium text-[#414651]">Page 1 of 10</h5>
          <div className="flex items-center gap-3">
            <button className="px-2 py-1 md:px-4 md:py-2 border border-[#D5D7DA] text-sm font-semibold text-[#414651] rounded-md cursor-pointer">
              Previous
            </button>
            <button className="px-2 py-1 md:px-4 md:py-2 border border-[#D5D7DA] text-sm font-semibold text-[#414651] rounded-md cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
