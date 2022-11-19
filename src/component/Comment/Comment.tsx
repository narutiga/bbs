import { Text, TypographyStylesProvider, Paper } from "@mantine/core";

interface CommentProps {
  gestName: string;
  postedAt: string;
  title: string;
}

export function Comment({ gestName, postedAt, title }: CommentProps) {
  return (
    <Paper withBorder radius="md" className="py-4 px-8">
      <div className="flex justify-between mb-4">
        <Text size="sm">{gestName}</Text>
        <Text size="xs" color="dimmed">
          {postedAt}
        </Text>
      </div>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </TypographyStylesProvider>
    </Paper>
  );
}
