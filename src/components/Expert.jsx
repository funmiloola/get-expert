import CardGrid from "./Cardgrid";
import { experts, clients } from "../data";
import { useState } from "react";
import Input from "./Input";
import Table from "./Table";
import PageSection from "./PagesSection";
import Filter from "./filter";

export default function Expert() {
  const [input, setInput] = useState("");
  const filteredTable = clients.filter(
    ({ name, email }) =>
      name.toLowerCase().includes(input.toLowerCase()) ||
      email.toLowerCase().includes(input.toLowerCase())
  );

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
            <Filter />
          </div>
          <Table filteredTable={filteredTable} />
        </div>
      </section>
      <PageSection />
    </>
  );
}
