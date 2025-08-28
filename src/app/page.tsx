"use client";

import { useState } from "react";
import AdvocateTable from "@/components/advocate-table";
import SearchComponent from "@/components/SearchComponent";
import Hero from "@/components/Hero";
import { useAdvocates } from "@/hooks";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { advocates, isLoading, error } = useAdvocates(searchTerm);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Hero />
      <div className="container mx-auto px-6 py-8 space-y-6">
        <SearchComponent onSearch={handleSearch} searchTerm={searchTerm} />
        <AdvocateTable
          advocates={advocates}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </main>
  );
}
