"use client";

import { createContext, useContext } from "react";

const FormSectionContext = createContext("body");

const Form = ({ children, onSubmit, ...props }) => (
    <form
        data-type="Form"
        className="w-full"
        onSubmit={onSubmit}
        {...props}
    >
        {children}
    </form>
);

const Header = ({ children }) => (
    <FormSectionContext.Provider value="header">
        <header className="text-lg font-bold text-gray-700">{children}</header>
    </FormSectionContext.Provider>
);

const Body = ({ children }) => (
    <FormSectionContext.Provider value="body">
        <div className="space-y-4">{children}</div>
    </FormSectionContext.Provider>
);

const Footer = ({ children }) => (
    <FormSectionContext.Provider value="footer">
        <footer className="flex justify-end space-x-2">{children}</footer>
    </FormSectionContext.Provider>
);

Form.Header = Header;
Form.Body = Body;
Form.Footer = Footer;

export default Form;
