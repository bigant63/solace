"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";
import AdvocateTable from "@/components/advocate-table";
import SearchComponent from "@/components/SearchComponent";
import { Advocate } from "@/types";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: advocates = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["advocates"],
    queryFn: async () => {
      const response = await fetch("/api/advocates");
      const jsonResponse = await response.json();
      return jsonResponse.data;
    },
  });

  const filteredAdvocates = advocates.filter((advocate: Advocate) => {
    if (!searchTerm) return true;
    return (
      advocate.firstName.includes(searchTerm) ||
      advocate.lastName.includes(searchTerm) ||
      advocate.city.includes(searchTerm) ||
      advocate.degree.includes(searchTerm) ||
      advocate.specialties.includes(searchTerm) ||
      advocate.yearsOfExperience.includes(searchTerm)
    );
  });

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
        advocates={filteredAdvocates}
        isLoading={isLoading}
        error={error}
      />
    </main>
  );
}
