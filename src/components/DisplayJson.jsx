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


// import { Button } from "@/components/ui/button"

// need a place to put
const JsonToTable = ({ data, title, columns }) => {
  const [decodedData, setDecodedData] = useState({});

  useEffect(() => {
    if (data) {
      try {
        const decoded64JSON = atob(data);
        const decodedJSON = JSON.parse(decoded64JSON);
        //console.log(decodedJSON.content["application/json"].schema)
        let propertiesSchemaKeys = Object.keys(decodedJSON.content["application/json"].schema)
        
        let propertiesItem;
        for (let i = 0; i < propertiesSchemaKeys.length; i++) {
            let key = propertiesSchemaKeys[i]
            let value = decodedJSON.content["application/json"].schema[key].find((item) => item.properties != undefined)
            if(value) propertiesItem = value
        }
        let {properties} = propertiesItem
        let descriptions = [];
        for (let [key, value] of Object.entries(properties)) {
          console.log("what is the key", key);
          console.log("what is the value", value);
          let newItem = {};
          newItem[key] = value;
          descriptions.push(newItem);
        }

        console.log("this is the descriptions", descriptions)
        setDecodedData(descriptions);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [data]);

  const renderTable = (json, tableName = "Root") => {
    if (!json) return null;

    const nestedTables = [];

    const iteratedTableRows = Object.entries(json).map(([key, value]) => {
        return (
          <TableRow key={key}>
            <TableCell>
              <h4><span className="font-medium">{key}</span> {value.value}</h4>
              <p>{value.description}</p>
            </TableCell>
          </TableRow>
        );
      
    });

    let tableRows = [...iteratedTableRows];

    return (
      <AccordionItem value="display-json">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <div key={tableName}>
            <pre>
              <code>{JSON.stringify(decodedData, null, 2)}</code>
            </pre>
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <div>
        {decodedData && Object.keys(decodedData).length > 0 ? (
            renderTable(decodedData)
        ) : (
            <p></p>
        )}
    </div>
);
};

export default JsonToTable;
