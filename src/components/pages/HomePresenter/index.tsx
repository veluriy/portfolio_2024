import type { FC } from "react";
import { Box, Card, Link, List, ListItem, Text } from "@chakra-ui/react";
import { AboutMe } from "./about";
import { Item } from "./item";
import { FiGithub } from "react-icons/fi";
import { TopPageContentType } from "../../../types/self-introduce";
import { theme } from "@/theme/theme";

type Props = {
    content: TopPageContentType;
};

export const TopPagePresenter: FC<Props> = (props: Props) => {
    const About = props.content.about.map((about) => (
        <Box mt="16px" mx="32px" key={about.title}>
            <Item title={about.title} body={about.content} />
        </Box>
    ));
    return (
        <>
            {/*<Header />*/}
            <Card m="16px 16px 0" boxShadow="none">
                <Text
                    fontSize="3xl"
                    color={theme.colors.custom["font_default_color"]}
                    opacity="80%"
                    borderBottom={`solid 1px ${theme.colors.custom["primary"]}77`}
                    pb="1"
                >
                    About Me
                </Text>
                <AboutMe content={props.content} />
                {About}
                <Box m="16px">
                    <Text
                        color={theme.colors.custom.font_default_color}
                        opacity="80%"
                        fontSize="3xl"
                        borderBottom={`solid 1px ${theme.colors.custom.font_default_color}77`}
                    >
                        Links
                    </Text>
                    <List mx="16px" my="8px">
                        <ListItem display="flex" alignItems="center">
                            <FiGithub color={theme.colors.custom.primary} />
                            <Link
                                href={`https://github.com/${props.content.gh_uname}`}
                                color={theme.colors.custom.primary}
                                ml="4px"
                            >
                                Github
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Card>
        </>
    );
};
