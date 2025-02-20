import React from "react";
import "./styles.scss";

type Columns<T extends Record<string, any>> = {
  title: string;
  dataIndex: keyof T;
  id: keyof T | string | React.Key;
  // styleConfig?: {
  //   width?: string;
  //   align?: "center" | "right" | "left";
  //   className?: string;
  // };
  render?: React.FC<T>;
}[];

type Props = {
  columns: Columns<any>;
  data: ({ id: React.Key | string } & Record<string, any>)[];
};

const Table = ({ columns, data }: Props) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-header">
          <tr>
            {columns?.map((item) => (
              <th key={item?.id as any} scope="col" className="table-th">
                <span>{item?.title}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => {
            return (
              <tr key={record?.id}>
                {columns?.map((item) => {
                  return (
                    <td className="td-new" key={item?.dataIndex as any}>
                      {item?.render
                        ? item?.render?.(record)
                        : record?.[item?.dataIndex as string]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
