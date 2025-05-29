import type WebampLazy from "../../js/webampLazy";
interface Props {
    webamp: WebampLazy;
    preset: {
        url: string;
        name: string;
    };
}
declare const MilkIcon: ({ webamp, preset }: Props) => import("react/jsx-runtime").JSX.Element;
export default MilkIcon;
