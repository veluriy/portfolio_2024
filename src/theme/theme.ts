import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "white",
                color: "black",
            },
            html: {
                height: "100%",
            },
        },
    },
    fonts: {
        heading: `"Zen Kaku Gothic New", "Avenir", "Corbel", "BIZ UDGothic", sans-serif`,
        body: `"Zen Kaku Gothic New", "Avenir", "Corbel", "BIZ UDGothic", sans-serif`,
    },
    colors: {
        custom: {
            primary: "#F6AD55",
            primary_light: "#FEEBC8",
            font_default_color: "#000000f1",
        },
    },
});
