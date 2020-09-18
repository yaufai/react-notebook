import React from "react";
export declare type Context = {
    on: boolean;
    toggle: () => void;
};
export declare const defaultContext: Context;
export declare const MyContext: React.Context<Context>;
