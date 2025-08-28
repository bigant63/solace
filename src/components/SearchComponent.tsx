import { useState, useCallback } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
} from "@/components/ui";
import { debounce } from "lodash";

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

export default function SearchComponent({
  onSearch,
  searchTerm,
}: SearchComponentProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // Create a stable debounced function
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, 500),
    [onSearch]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchTerm(value);

    if (value.length > 2) {
      debouncedSearch(value);
    } else if (value.length === 0) {
      onSearch("");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Advocates</CardTitle>
        <CardDescription>
          Search by first name, last name, city, or specialties
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 w-1/2">
          <Input
            name="search"
            type="search"
            onChange={handleSearchChange}
            value={localSearchTerm}
            placeholder="Search advocates..."
            className="flex-1"
          />
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
