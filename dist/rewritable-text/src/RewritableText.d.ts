import { ReactElement } from "react";
declare type RewritableTextProps = {
    defaultValue: string;
    displayWhenEmpty: string | ReactElement;
    onChange: (value: string) => void;
    onFinalized: (value: string) => void;
    validation: (value: string) => boolean;
    validationErrMsg: (value: string) => string;
};
export default function RewritableText(props: RewritableTextProps): JSX.Element;
export {};
//# sourceMappingURL=RewritableText.d.ts.map