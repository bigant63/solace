"use client";

import { Card, CardContent, Loading } from "@/components/ui";
import { Table, Column, AutoSizer } from "react-virtualized";
import { AdvocateTableProps } from "@/types";
import TableResults from "./TableResults";
import { createColumns } from "./columns";
import { useCallback } from "react";
// should choose a smaller dependency than react-virtualized
// this works best with the specialties column
// on initial load
// after search the row heights get weird

export default function AdvocateTable({
  advocates,
  isLoading,
  error,
}: AdvocateTableProps) {
  const getRowHeight = useCallback(
    ({ index }: { index: number }) => {
      const advocate = advocates[index];
      if (!advocate) return 120; // fallback height

      // dynamic row height hack to account for specialties
      const specialties = advocate.specialties;
      const baseHeight = 80;
      const specialtyHeight = Math.max(1, specialties.length) * 24;
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
        {advocates.length ? (
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
        ) : (
          <h2 className="p-6 text-3xl font-bold flex justify-center">
            No advocates found
          </h2>
        )}
      </CardContent>
    </Card>
  );
}
