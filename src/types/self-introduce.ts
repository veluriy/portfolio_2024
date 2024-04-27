export type AboutType = {
    title: string;
    content: string;
};

export interface TopPageContentType {
    name: string;
    gh_uname: string;
    gh_uid: number;
    features: string[];
    about: AboutType[];
}
