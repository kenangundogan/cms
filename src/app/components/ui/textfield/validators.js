// src/app/components/ui/textfield/validators.js

export const email = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return "Invalid email address.";
    }
    return "";
};

export const phone = (value) => {
    const phoneRegex = /^[+]?[0-9\s\-()]{10,15}$/;
    if (!phoneRegex.test(value)) {
        return "Invalid phone number.";
    }
    return "";
};

export const required = (value) => {
    if (!value || value.trim() === "") {
        return "This field is required.";
    }
    return "";
};

export const minLength = (value, min) => {
    if (value.length < min) {
        return `Minimum ${min} characters required.`;
    }
    return "";
};

export const maxLength = (value, max) => {
    if (value.length > max) {
        return `Maximum ${max} characters allowed.`;
    }
    return "";
};

export const lettersOnly = (value) => {
    const lettersRegex = /^[a-zA-Z\s]*$/;
    if (!lettersRegex.test(value)) {
        return "Only letters are allowed.";
    }
    return "";
};

export const numbersOnly = (value) => {
    const numbersRegex = /^[0-9]*$/;
    if (!numbersRegex.test(value)) {
        return "Only numbers are allowed.";
    }
    return "";
};
