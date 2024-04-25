import { Box, List, ListItem, propNames, Text } from "@chakra-ui/react";
import { FC } from "react";
import { theme } from "../../../theme/theme";

type Props = {
    title: string;
    body: string;
};

export const Item: FC<Props> = (props) => {
    return (
        <>
            <Text
                color={theme.colors.custom["font_default_color"]}
                fontSize="xl"
                borderBottom={`1px solid ` + theme.colors.custom["primary"]}
            >
                {props.title}
            </Text>
            <Box
                mx="16px"
                my="8px"
                color={theme.colors.custom["font_default_color"]}
            >
                <Text>{props.body}</Text>
            </Box>
        </>
    );
};
