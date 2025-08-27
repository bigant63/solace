import { ColumnProps } from "react-virtualized";

interface TableColumnProps {
  label: string;
  dataKey: string;
  width: number;
  cellRenderer?: ColumnProps["cellRenderer"];
  className?: string;
}

const TableColumn = ({
  label,
  dataKey,
  width,
  cellRenderer,
  className,
}: TableColumnProps) => {
  const defaultCellRenderer: ColumnProps["cellRenderer"] = ({ cellData }) => (
    <div className={`ReactVirtualized__Table__rowColumn ${className || ""}`}>
      {cellData}
    </div>
  );

  return {
    label,
    dataKey,
    width,
    cellRenderer: cellRenderer || defaultCellRenderer,
  } as ColumnProps;
};

export default TableColumn;
