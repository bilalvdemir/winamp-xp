import * as SoundCloud from "./SoundCloud";
import { Options } from "../../js/types";
import { InjectableDependencies, PrivateOptions } from "../../js/webampLazy";
export declare function getWebampConfig(screenshot: boolean, skinUrl: string | null, soundCloudPlaylist: SoundCloud.SoundCloudPlaylist | null): Promise<Options & PrivateOptions & InjectableDependencies>;
