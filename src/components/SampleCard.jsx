import * as React from "react";
import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';

import { 
    Card,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

const SampleCard = ({header, children}) => {
    return (
        <Card className="dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <CardHeader>
                <CardDescription>
                    <h4 className="text-md font-bold">{header}</h4>
                </CardDescription>
            </CardHeader>
            <CardContent>
                {processor.processSync(children).result}
            </CardContent>
        </Card>
    )
}

export default SampleCard;