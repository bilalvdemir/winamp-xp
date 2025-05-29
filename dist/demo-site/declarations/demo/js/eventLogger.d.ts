import { Action } from "../../js/types";
export declare const loggerMiddleware: () => (next: (action: Action) => void) => (action: Action) => void;
