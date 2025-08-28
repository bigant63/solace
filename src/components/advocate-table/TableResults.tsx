import { CardHeader, CardTitle, CardDescription } from "../ui";
import { Advocate } from "@/types";

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
