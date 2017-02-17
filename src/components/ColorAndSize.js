import React, { Component } from 'react';

export default function ColorAndSize(props) {

    const styles = {
        color:props.color,
        fontSize: props.size
    };

    return (
        <h1 style={styles}>Colors! Sizes!</h1>
    );
}

export const Test = "Hello World";
