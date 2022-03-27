import { DetailsList, IColumn } from "@fluentui/react";
import React from "react";

export const TestSsrIssue = () => {
  const columns: IColumn[] = [
    {
      key: "column1",
      name: "File Type",
      ariaLabel: "Column operations for File type, Press to sort on File type",
      iconName: "Page",
      fieldName: "field1",
      minWidth: 100,
      maxWidth: 200,
      onRender: () => <div>Column1 random data</div>,
    },
    {
      key: "column2",
      name: "Name",
      fieldName: "field2",
      minWidth: 210,
      maxWidth: 350,
      data: "string",
      isPadded: true,
    },
  ];

  const items = [
    {
      field1: "asdf",
      field2: "zvcx",
    },
    {
      field1: "asdf",
      field2: "zvcx",
    },
    {
      field1: "asdf",
      field2: "zvcx",
    },
  ];

  return <DetailsList items={items} columns={columns} />;
};
