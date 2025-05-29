import WebampLazy from "../../js/webampLazy";
declare global {
    interface Window {
        __webamp: WebampLazy;
    }
}
