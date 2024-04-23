import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card';

const DocsCardContent = ({header, children}) => {
    return (
        <Card className="mt-4">
            <CardHeader>
                <CardDescription>
                    <h3>{header}</h3>
                </CardDescription>
            </CardHeader>
            <CardContent>
                {children}
                {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
            </CardContent>
        </Card>
    )
}

export default DocsCardContent;