import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ButtonProps {
    text: string;
    onTap: () => void;
    variant?: 'primary' | 'secondary';
}

export function Button({ text, onTap, variant = 'primary' }: ButtonProps) {
    return (
        <button
            style={[styles.button, variant === 'primary' ? styles.primary : styles.secondary]}
            onTap={onTap}
        >
            {text}
        </button>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 18,
        padding: 10,
        margin: 5,
        borderRadius: 4,
    },
    primary: {
        color: "#ffffff",
        backgroundColor: "#2e6ddf",
    },
    secondary: {
        color: "#2e6ddf",
        backgroundColor: "transparent",
    },
});