import { Badge } from "./ui/badge"
import React, { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";

const DisplayEndpoint = ({ endpoint, method }) => {
    const [isCopied, setIsCopied] = useState(false);

    let badgeColor;
    switch (method) {
        case "GET":
            badgeColor = "green";
            break;
        case "PUT":
            badgeColor = "blue";
            break;
        case "POST":
            badgeColor = "yellow";
            break;
        case "DELETE":
            badgeColor = "red";
            break;
        default:
            badgeColor = "gray";
            break;
    }

    const handleCopy = async (value) => {
        try {
            await navigator.clipboard.writeText(value);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        } catch (err) {
            console.error('Failed to copy: ', err);
            return;
        }
    }

    return (
        <>
            <Alert className="mt-[2em] mb-[1em] font-bold api" disabled value={ `${method} ${endpoint}`}>
                <div className="flex mb-4 cursor-pointer" onClick={() => handleCopy(endpoint)}>
                    {
                        !isCopied ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className="h-4 w-4 ml-auto -mt-2 active:border focus:bg-gray-300 svg-copy">
                            <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className="h-4 w-4 ml-auto -mt-2 svg-copy">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                    }
                </div>
                <AlertTitle>
                    <div className="flex justify-between">
                        <span>Endpoint <Badge>{method.toUpperCase()}</Badge></span>
                        <span className="font-bold api pl-[1em]">{endpoint}</span>
                    </div>
                </AlertTitle>
            </Alert>
        </>
    )
}

export default DisplayEndpoint;