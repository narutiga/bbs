import { FC } from "react";
import Link from "next/link";
import { createStyles, Header, Container, Text } from "@mantine/core";
import { ToggleColorScheme } from "src/component/ToggleColorScheme";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
}));

/** @package */
export const HeaderMenu: FC = () => {
  const { classes } = useStyles();

  return (
    <Header height={80} className="px-0 w-full sticky top-0 z-50">
      <Container size={3000} px={20} className={classes.header}>
        <div className="flex">
          <h1 className="my-auto ml-0 md:ml-4 font-semibold text-2xl md:text-3xl">
            <Text
              variant="gradient"
              gradient={{ from: "indigo.3", to: "cyan.3", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
              ta="center"
              fw={700}
            >
              掲示板のようなもの
            </Text>
          </h1>
        </div>
        <ToggleColorScheme />
      </Container>
    </Header>
  );
};
