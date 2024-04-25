import Image from "next/image";
import styles from "./page.module.css";
import type { FC } from "react";
import { TopPagePresenter } from "@/components/pages/HomePresenter";

export default function Top() {
    const contents = {
        features: [
            "20yo (2024/04)",
            "studying mathematics and ML",
            "programmer",
            "そろそろ日本語で書きますね",
        ],
        about: [
            {
                title: "最近は...",
                content: "最近は研究の為に論文を探しています。",
            },
            {
                title: "趣味について",
                content: "息抜きに筋トレをすることが増えました。",
            },
        ],
    };
    return <TopPagePresenter contents={contents} />;
};
