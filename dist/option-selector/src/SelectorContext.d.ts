import React from "react";
import { Selectable } from "./Selector";
export declare const SelectorContext: React.Context<{
    selected: string[];
    select: (id: string) => void;
    unselect: (id: string) => void;
    change: (id: string) => void;
    options: Selectable[];
    isSelected: (id: string) => boolean;
    getOptionById: (id: string) => Selectable | undefined;
}>;
//# sourceMappingURL=SelectorContext.d.ts.map