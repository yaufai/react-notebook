/// <reference types="react" />
declare type SearchBoxProps<T> = {
    options: T[];
    filterFunction: (word: string, option: T) => boolean;
    onChange: (word: string, options: T[]) => void;
};
export default function SearchBox<T>(props: SearchBoxProps<T>): JSX.Element;
export {};
//# sourceMappingURL=SearchBox.d.ts.map