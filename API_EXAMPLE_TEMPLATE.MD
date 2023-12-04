import ApiTabs from "@theme/ApiTabs";
import DiscriminatorTabs from "@theme/DiscriminatorTabs";
import MethodEndpoint from "@theme/ApiExplorer/MethodEndpoint";
import SecuritySchemes from "@theme/ApiExplorer/SecuritySchemes";
import MimeTabs from "@theme/MimeTabs";
import ParamsItem from "@theme/ParamsItem";
import ResponseSamples from "@theme/ResponseSamples";
import SchemaItem from "@theme/SchemaItem";
import SchemaTabs from "@theme/SchemaTabs";

import JsonToTable from '@site/src/components/JsonToTable';
          
# API Documentation
          
This page is generated from JSON data.
          
<JsonToTable data={${JSON.stringify(apiJSONData)}} />