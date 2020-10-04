/// <reference types="react" />
declare type RewritableTextProps = {
    defaultValue: string;
    onChange: (value: string) => void;
    onFinalized: (value: string) => void;
};
export declare function RewritableText(props: RewritableTextProps): JSX.Element;
export {};
