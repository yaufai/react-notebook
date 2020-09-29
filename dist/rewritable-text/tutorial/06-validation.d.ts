import { ReactElement } from "react";
declare type RewritableTextProps = {
    defaultValue: string;
    displayWhenEmpty: string | ReactElement;
    onChange: (value: string) => void;
    onFinalized: (value: string) => void;
    validation: (value: string) => boolean;
    validationErrMsg: (value: string) => string;
};
export declare function RewritableText(props: RewritableTextProps): JSX.Element;
export {};
