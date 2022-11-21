import { FC } from "react";
import { createStyles, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.cyan[3]
        : theme.colors.indigo[4],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    // display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
}));

/** @package */
export const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <p className="text-center">&copy;2022 kino's bbs</p>
      </Container>
    </div>
  );
};