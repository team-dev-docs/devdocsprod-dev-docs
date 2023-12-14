import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';


const styles = {
    warning: {
        color: '#FFCC19',
        class: 'fa-solid fa-triangle-exclamation',
    },
    note: {
        color: '#14A38B',
        class: 'fa-solid fa-circle-exclamation',
    },
    info: {
        color: '#232429',
        class: 'fa-solid fa-circle-info',
    },
    check: {
        color: '#14A38B',
        class: 'fa-solid fa-square-check',
    },
};

const InfoBox = ({ type, children }) => {
    const [styleObject, setStyleObject] = useState({});
    const [classString, setClassString] = useState('');

    useEffect(() => {
        const color = styles[type]?.color;
        if (!color) return;

        const darkerColor = chroma(color).darken().hex();
        setStyleObject({
            border: `1px solid ${darkerColor}`,
            background: `linear-gradient(30.17deg, rgba(255, 204, 25, 0) -4.93%, ${color} -4.91%, rgba(255, 204, 25, 0) 105.13%)`,
            padding: '0em',
        });
        setClassString(styles[type].class);
    }, [type]);

    return (
        <Alert>
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    );
};

export default InfoBox;


