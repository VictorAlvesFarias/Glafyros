import { forwardRef } from "react";

function componentSelector<T, K>(components: any) {
    type Selector = K & {
        variation?: T;
        ref: any,
        locked?: boolean
    };
    const Data = forwardRef<any, Selector>((e, ref) => {

        return (
            components[e.variation ?? "default"](e, ref)
        )
    })

    Data.displayName = 'ComponentSelector';

    return Data
}

export {
    componentSelector
}