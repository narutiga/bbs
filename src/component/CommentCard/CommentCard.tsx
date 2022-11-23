import { Text, Paper, useMantineColorScheme } from "@mantine/core";
import { FC } from "react";

type Props = {
  guestName: string;
  postedAt: Date;
  title: string;
};

const formatDate = (date: Date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  const hour = (`0` + newDate.getHours()).slice(-2);
  const minute = (`0` + newDate.getMinutes()).slice(-2);
  return `${year}-${month}-${day} ${hour}:${minute}`;
};

/** @package */
export const CommentCard: FC<Props> = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const formattedDate = formatDate(props.postedAt);

  return (
    <Paper withBorder radius="md" className="py-4 px-8 mb-4">
      <div className="flex justify-between mb-4">
        <Text size="sm" color={colorScheme === "dark" ? "cyan.2" : "indigo.4"}>
          {props.guestName}
        </Text>
        <Text size="sm" color="dimmed">
          {formattedDate}
        </Text>
      </div>
      <Text color={colorScheme === "dark" ? "gray.4" : "gray.7"}>
        {props.title}
      </Text>
    </Paper>
  );
};
