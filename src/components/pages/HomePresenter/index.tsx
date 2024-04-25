import type { FC } from "react";
import { Header } from "../../header/header";
import {
    Box,
    Card,
    Link,
    List,
    ListIcon,
    ListItem,
    Text,
} from "@chakra-ui/react";
import { AboutMe } from "./about";
import { Item } from "./item";
import { FiGithub } from "react-icons/fi";
import { MyHead } from "../../head/head";
import { TopPageContentType } from "../../../types/top";
import { theme } from "@/theme/theme";

type Props = {
    contents: TopPageContentType;
};

export const TopPagePresenter: FC<Props> = (props: Props) => {
    const About = props.contents.about.map((about) => (
        <Box mt="16px" mx="32px" key={about.title}>
            <Item title={about.title} body={about.content} />
        </Box>
    ));
    return (
        <>
            <MyHead title="OKのサイト" />
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
                <AboutMe features={props.contents.features} />
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
                                href="https://github.com/veluriya"
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
