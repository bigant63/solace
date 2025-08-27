import { advocates } from "@/db/schema";
import { CardHeader, CardTitle, CardDescription } from "../ui";

const TableResults = ({ advocates }: { advocates: Advocate[] }) => {
  const advocateCount = advocates.length;
  const description = `${advocateCount} advocate${
    !!advocates.length ? "s" : ""
  } found`;
  return (
    <CardHeader>
      <CardTitle>Advocates Directory</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
};

export default TableResults;
