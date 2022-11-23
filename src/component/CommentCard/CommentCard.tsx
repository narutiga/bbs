import { Text, Paper, useMantineColorScheme } from "@mantine/core";
import { FC } from "react";

type Props = {
  guestName: string;
  postedAt: string;
  title: string;
};

/** @package */
export const CommentCard: FC<Props> = (props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Paper withBorder radius="md" className="py-4 px-8 mb-4">
      <div className="flex justify-between mb-4">
        <Text size="sm" color={colorScheme === "dark" ? "cyan.2" : "indigo.4"}>
          {props.guestName}
        </Text>
        <Text size="sm" color="dimmed">
          {props.postedAt}
        </Text>
      </div>
      <Text color={colorScheme === "dark" ? "gray.4" : "gray.7"}>
        {props.title}
      </Text>
    </Paper>
  );
};
