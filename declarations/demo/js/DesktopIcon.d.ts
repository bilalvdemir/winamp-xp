/// <reference types="react" />
interface Props {
    iconUrl: string;
    name: string;
    onOpen: () => void;
    onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
}
declare const DesktopIcon: ({ iconUrl, onOpen, name, onDragStart }: Props) => import("react/jsx-runtime").JSX.Element;
export default DesktopIcon;
