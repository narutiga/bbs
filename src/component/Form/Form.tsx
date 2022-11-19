import { Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { ComponentProps, FC } from "react";

type Chat = {
  guestName: string;
  comment: string;
};

export const Form = () => {
  const form = useForm<Chat>({
    initialValues: {
      guestName: "",
      comment: "",
    },

    validate: {
      guestName: (value) =>
        value.length < 2 ? "名前は２文字以上で入力してください" : null,
      comment: (value) =>
        value.length < 1 ? "コメントを入力してください" : null,
    },
  });

  const handleSubmit = (value: Chat) => {
    console.log(value);
    form.reset();
  };

  return (
    <Box sx={{ maxWidth: 300, margin: 100 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="お名前"
          placeholder="name"
          {...form.getInputProps("guestName")}
        />
        <Textarea
          required
          label="コメント"
          placeholder="comment"
          {...form.getInputProps("comment")}
        />
        <Group position="right" mt="md">
          <Button type="submit">投稿</Button>
        </Group>
      </form>
    </Box>
  );
};
