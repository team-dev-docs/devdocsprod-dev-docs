import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

// import { Button } from "@/components/ui/button"

// need a place to put
const JsonToTable = ({ data, title, columns }) => {
  const [decodedData, setDecodedData] = useState({});
  const [tableHeaderdata, setTableHeaderData] = useState([
    {
      id: 1,
      name: 'Parameter',
    },
    {
      id: 2,
      name: 'Description',
    },
    {
      id: 3,
      name: 'Data type',
    },
    {
      id: 4,
      name: 'Required?',
    }
  ]);

  useEffect(() => {
    if (data) {
      try {
        const decoded64JSON = atob(data);
        const decodedJSON = JSON.parse(decoded64JSON);
        setDecodedData(decodedJSON);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [data]);

  const renderTable = (json, tableName = "Root") => {
    if (!json) return null;

    const nestedTables = [];

    const iteratedTableRows = Object.entries(json).map(([key, value], index) => {
      if (value.type || value.description) {
        return (
          <TableRow key={key} className={index % 2 === 0 ? 'table-row-even': 'table-row-odd'}>
            <TableCell><span className="font-bold text-md">{key}</span></TableCell>
            <TableCell className="w-[300px]">{value.description}</TableCell>
            <TableCell>string</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
        );
      }
      return null;
    });

    let tableRows = [...iteratedTableRows];

    return (
      <>
        <Table>
          {
            tableHeaderdata.length > 0 && <TableHeader>
              <TableRow>
                {
                  tableHeaderdata.map((item) => {
                    return (
                      <TableHead>{item.name}</TableHead>
                    )
                  })
                }
              </TableRow>
            </TableHeader>
          }
          <TableBody>{tableRows}</TableBody>
        </Table>
        {nestedTables}
      </>
    );
  };

  return (
    <>
      {decodedData && Object.keys(decodedData).length > 0 && (
        <AccordionItem value="query-table">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                {decodedData && Object.keys(decodedData).length > 0 ? (
                  renderTable(decodedData)
                ) : (
                  <p></p>
                )}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      )}
    </>
  );
};

export default JsonToTable;
