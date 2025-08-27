import TableColumn from "./TableColumn";
import { ColumnProps } from "react-virtualized";

export const createColumns = (tableWidth: number): ColumnProps[] => [
  TableColumn({
    label: "First Name",
    dataKey: "firstName",
    width: Math.max(120, tableWidth * 0.12),
    className: "font-medium",
  }),

  TableColumn({
    label: "Last Name",
    dataKey: "lastName",
    width: Math.max(120, tableWidth * 0.12),
    className: "font-medium",
  }),

  TableColumn({
    label: "City",
    dataKey: "city",
    width: Math.max(120, tableWidth * 0.12),
    className: "font-medium",
  }),

  TableColumn({
    label: "Degree",
    dataKey: "degree",
    width: Math.max(100, tableWidth * 0.12),
    className: "font-medium",
  }),

  TableColumn({
    label: "Specialties",
    dataKey: "specialties",
    width: Math.max(300, tableWidth * 0.35),
    cellRenderer: ({ cellData }) => (
      <div className="ReactVirtualized__Table__rowColumn">
        <ul className="list-outside list-disc px-4 py-2 space-y-1">
          {(cellData as string[]).map((specialty: string, sIndex: number) => (
            <li key={sIndex} className="text-sm leading-relaxed">
              {specialty}
            </li>
          ))}
        </ul>
      </div>
    ),
  }),

  TableColumn({
    label: "YOE",
    dataKey: "yearsOfExperience",
    width: Math.max(80, tableWidth * 0.06),
    className: "font-medium",
  }),

  TableColumn({
    label: "Phone Number",
    dataKey: "phoneNumber",
    width: Math.max(140, tableWidth * 0.16),
  }),
];
