"use client";
import React from "react";
import "./styles.scss";
import Spinner from "../Spinner";

export type Columns<T extends Record<string, any>> = {
  title: string;
  dataIndex: keyof T;
  id: keyof T | string | React.Key;
  render?: React.FC<T>;
  styleConfig?: {
    width: number;
  };
}[];

type Props = {
  columns: Columns<any>;
  data: ({ id: React.Key | string } & Record<string, any>)[];
  loading?: boolean;
  onRowSelect?: (record: Record<string, any>, rowId: number) => any;
};
const TableV2 = ({
  columns,
  data,
  loading = false,
  onRowSelect = () => {},
}: Props) => {
  return (
    <div className="table-wrapper">
      {loading ? (
        <div
          style={{
            height: 250,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <table className="table">
          <thead className="gray-50">
            <tr>
              {columns?.map((item, i) => {
                return (
                  <th
                    key={i}
                    className="th"
                    style={{
                      minWidth: item?.styleConfig?.width || "fit-content",
                    }}
                  >
                    <span>{item?.title}</span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="tbody">
            {!data?.length && <p>No Data</p>}
            {!!data?.length &&
              data?.map((record, i) => {
                return (
                  <tr
                    onClick={() => {
                      onRowSelect?.(record, i);
                    }}
                    key={i}
                  >
                    {columns?.map((column, j) => {
                      return (
                        <td
                          key={j}
                          className="row-td"
                          style={{
                            minWidth:
                              column?.styleConfig?.width || "fit-content",
                          }}
                        >
                          {column?.render
                            ? column?.render(record)
                            : record?.[column?.dataIndex as string] || "-"}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableV2;
