import { Box, List, ListItem, Stack, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { theme } from "../../../theme/theme";
import classes from "./style.module.css";
import { MdCheckCircle } from "react-icons/md";
import { TopPageContentType } from "@/types/self-introduce";

type Props = {
    content: TopPageContentType;
};

export const AboutMe: FC<Props> = (props) => {
    const featuresChildren = props.content.features.map((feature) => {
        return (
            <ListItem key={feature} display="flex" pt="4px">
                <Box display="flex">
                    <Box mt="auto" mb="auto" height="fit-content">
                        <MdCheckCircle color={theme.colors.custom["primary"]} />
                    </Box>
                </Box>

                <Text
                    fontSize="md"
                    color={theme.colors.custom["font_default_color"]}
                    ml="4px"
                    mt="4px"
                    mb="4px"
                >
                    {feature}
                </Text>
            </ListItem>
        );
    });
    return (
        <Stack
            direction="column"
            p={4}
            backgroundColor={theme.colors.custom["primary_light"]}
            borderRadius={"16px"}
            mt="4"
        >
            <Text
                fontSize="xl"
                color={theme.colors.custom["font_default_color"]}
                fontWeight="bold"
                ml="8px"
            >
                {props.content.name}
            </Text>
            <Box display="flex">
                <Box ml="8px">
                    <img
                        src={`https://avatars.githubusercontent.com/u/${props.content.gh_uid}`} // GitHubのアイコンを使用
                        alt="アイコン"
                        width="100"
                        height="100"
                        className={classes.icon}
                    />
                </Box>

                <List pl="24px">{featuresChildren}</List>
            </Box>
        </Stack>
    );
};
