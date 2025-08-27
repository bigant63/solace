"use client";

import { Card, CardContent, Loading } from "@/components/ui";
import { Table, Column, AutoSizer } from "react-virtualized";
import { AdvocateTableProps } from "@/types";
import TableResults from "./TableResults";
import { createColumns } from "./columns";
import { useState, useCallback } from "react";

export default function AdvocateTable({
  advocates,
  isLoading,
  error,
}: AdvocateTableProps) {
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});

  const handleColumnResize = useCallback(
    ({ dataKey, deltaX }: { dataKey: string; deltaX: number }) => {
      setColumnWidths((prev) => ({
        ...prev,
        [dataKey]: Math.max(100, (prev[dataKey] || 0) + deltaX),
      }));
    },
    []
  );

  // Calculate dynamic row heights based on specialties content
  const getRowHeight = useCallback(
    ({ index }: { index: number }) => {
      const advocate = advocates[index];
      if (!advocate) return 120; // fallback height

      const specialties = advocate.specialties;
      const baseHeight = 80; // base height for other content
      const specialtyHeight = Math.max(1, specialties.length) * 20; // 24px per specialty item
      const padding = 10;

      return Math.max(120, baseHeight + specialtyHeight + padding);
    },
    [advocates]
  );

  if (isLoading) {
    return <Loading message="Loading advocates..." size="lg" />;
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-destructive">
            Error loading advocates: {error.message}
          </p>
        </CardContent>
      </Card>
    );
  }

  const rowGetter = ({ index }: { index: number }) => advocates[index];

  return (
    <Card>
      <TableResults advocates={advocates} />
      <CardContent className="p-0">
        <div className="h-[600px]">
          <AutoSizer>
            {({ height, width }) => {
              const columns = createColumns(width);

              return (
                <Table
                  width={width}
                  height={height}
                  rowCount={advocates.length}
                  rowHeight={getRowHeight}
                  rowGetter={rowGetter}
                  headerHeight={60}
                  className="ReactVirtualized__Table"
                  headerClassName="ReactVirtualized__Table__headerRow"
                  rowClassName="ReactVirtualized__Table__row"
                  onColumnResize={handleColumnResize}
                  resizableColumns={true}
                >
                  {columns.map((columnProps, index) => (
                    <Column
                      key={`${columnProps.dataKey}-${index}`}
                      {...columnProps}
                    />
                  ))}
                </Table>
              );
            }}
          </AutoSizer>
        </div>
      </CardContent>
    </Card>
  );
}
