import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
  Button,
} from "@/components/ui";

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

export default function SearchComponent({
  onSearch,
  searchTerm,
}: SearchComponentProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    onSearch(value);
  };

  const handleReset = () => {
    setLocalSearchTerm("");
    onSearch("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Advocates</CardTitle>
        <CardDescription>
          Search by name, city, degree, specialties, or years of experience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input
            type="search"
            onChange={handleSearchChange}
            value={localSearchTerm}
            placeholder="Search advocates..."
            className="flex-1"
          />
          <Button onClick={handleReset} variant="outline">
            Reset Search
          </Button>
        </div>
        {localSearchTerm && (
          <p className="text-sm text-muted-foreground">
            Searching for:{" "}
            <span className="font-medium">{localSearchTerm}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
