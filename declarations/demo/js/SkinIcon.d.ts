import WebampLazy from "../../js/webampLazy";
interface Props {
    webamp: WebampLazy;
    skin: {
        url: string;
        name: string;
    };
}
declare const SkinIcon: ({ webamp, skin }: Props) => import("react/jsx-runtime").JSX.Element;
export default SkinIcon;
