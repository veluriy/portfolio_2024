"use client";
import { theme } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
