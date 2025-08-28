"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";
import AdvocateTable from "@/components/advocate-table";
import SearchComponent from "@/components/SearchComponent";
import { useAdvocates } from "@/hooks";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { advocates, isLoading, error } = useAdvocates(searchTerm);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <main className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Solace Advocates</CardTitle>
          <CardDescription>
            Find and search through our network of advocates
          </CardDescription>
        </CardHeader>
      </Card>

      <SearchComponent onSearch={handleSearch} searchTerm={searchTerm} />

      <AdvocateTable
        advocates={advocates}
        isLoading={isLoading}
        error={error}
      />
    </main>
  );
}
