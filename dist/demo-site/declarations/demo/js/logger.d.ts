export type GoogleAnalyticsEvent = {
    category: string;
    action: string;
    label?: string;
    value?: number;
};
export declare function log({ category, action, label, value }: GoogleAnalyticsEvent): void;
