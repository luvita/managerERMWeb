export interface PerfectScrollbarConfigInterface {
    wheelSpeed?: number;
    wheelPropagation?: boolean;
    swipePropagation?: boolean;
    minScrollbarLength?: number;
    maxScrollbarLength?: number;
    useBothWheelAxes?: boolean;
    suppressScrollX?: boolean;
    suppressScrollY?: boolean;
    scrollXMarginOffset?: number;
    scrollYMarginOffset?: number;
    stopPropagationOnClick?: boolean;
}
export declare class PerfectScrollbarConfig implements PerfectScrollbarConfigInterface {
    wheelSpeed: number;
    wheelPropagation: boolean;
    swipePropagation: boolean;
    minScrollbarLength: number;
    maxScrollbarLength: number;
    useBothWheelAxes: boolean;
    suppressScrollX: boolean;
    suppressScrollY: boolean;
    scrollXMarginOffset: number;
    scrollYMarginOffset: number;
    stopPropagationOnClick: boolean;
    constructor(config?: PerfectScrollbarConfigInterface);
    assign(config?: PerfectScrollbarConfigInterface): void;
}
