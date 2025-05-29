import WebampLazy from "../../js/webampLazy";
import { URLTrack } from "../../js/types";
interface Props {
    webamp: WebampLazy;
    track: URLTrack;
}
declare const Mp3Icon: ({ webamp, track }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default Mp3Icon;
