import { Track } from "../../js/types";
export type SoundCloudPlaylist = {
    permalink_url: string;
    title: string;
    uri: string;
    tracks_uri: string;
    user: {
        avatar_url: string;
        id: number;
        permalink_url: string;
        uri: string;
        username: string;
    };
    tracks: {
        artwork_url: string;
        description: string;
        user: {
            username: string;
        };
        title: string;
        stream_url: string;
        duration: number;
    }[];
};
export declare function getPlaylist(playlistId: string): Promise<SoundCloudPlaylist>;
export declare function tracksFromPlaylist(playlist: SoundCloudPlaylist): Track[];
