import { Text, TypographyStylesProvider, Paper } from "@mantine/core";
import { FC } from "react";

type CommentProps = {
  guestName: string;
  postedAt: string;
  title: string;
};

/** @package */
export const CommentCard: FC<CommentProps> = (props) => {
  return (
    <Paper withBorder radius="md" className="py-4 px-8 mb-4">
      <div className="flex justify-between mb-4">
        <Text size="sm" color="teal.2">
          {props.guestName}
        </Text>
        <Text size="xs" color="dimmed">
          {props.postedAt}
        </Text>
      </div>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: props.title }} />
      </TypographyStylesProvider>
    </Paper>
  );
};
