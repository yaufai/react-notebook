import { ReactElement } from "react";
declare type RewritableTextProps = {
    defaultValue: string;
    displayWhenEmpty: string | ReactElement;
    onChange: (value: string) => void;
    onFinalized: (value: string) => void;
};
export default function RewritableText(props: RewritableTextProps): JSX.Element;
export {};
//# sourceMappingURL=04-display-empty.d.ts.map