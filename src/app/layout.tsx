import Provider from "./Provider";
import _metadata from "../../data/metadata/introduce.json";

export const metadata = _metadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
