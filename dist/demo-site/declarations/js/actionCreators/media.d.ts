import { Thunk, Action } from "../types";
export declare function playTrack(id: number): Thunk;
export declare function playTrackNow(id: number): Action;
export declare function play(): Thunk;
export declare function pause(): Thunk;
export declare function stop(): Action;
export declare function nextN(n: number): Thunk;
export declare function next(): Thunk;
export declare function previous(): Thunk;
export declare function seekToTime(seconds: number): Thunk;
export declare function seekForward(seconds: number): Thunk;
export declare function seekBackward(seconds: number): Thunk;
export declare function setVolume(volume: number): Action;
export declare function adjustVolume(volumeDiff: number): Thunk;
export declare function scrollVolume(e: React.WheelEvent<HTMLDivElement>): Thunk;
export declare function setBalance(balance: number): Action;
export declare function toggleRepeat(): Action;
export declare function toggleShuffle(): Action;
export declare function toggleTimeMode(): Action;
