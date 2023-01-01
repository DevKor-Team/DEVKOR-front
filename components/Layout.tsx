import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-black w-full">
            <Header />
            <main className="px-[9.375rem]">{children}</main>
            <Footer />
        </div>
    );
};
