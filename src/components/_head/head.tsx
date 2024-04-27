import Head from "next/head";
import { FC } from "react";

type Props = {
    title: string;
};

export const MyHead: FC<Props> = (props) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="description" content="veluriyaのサイト" />
            <meta property="og:title" content={props.title} />
            <meta
                property="og:description"
                content="veluriyaの自己紹介などを掲載しているサイト"
            />
            <meta property="og:site_name" content="pteのサイト" />
            <meta property="og:locale" content="ja_JP" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>{props.title}</title>
        </Head>
    );
};
