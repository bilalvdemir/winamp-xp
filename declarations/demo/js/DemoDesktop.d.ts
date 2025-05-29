import WebampLazy from "../../js/webampLazy";
import { SoundCloudPlaylist } from "./SoundCloud";
interface Props {
    webamp: WebampLazy;
    soundCloudPlaylist: SoundCloudPlaylist | null;
}
declare const DemoDesktop: ({ webamp, soundCloudPlaylist }: Props) => import("react/jsx-runtime").JSX.Element;
export default DemoDesktop;
