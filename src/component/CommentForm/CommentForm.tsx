import { FC } from "react";
import axios from "axios";
import requests from "src/lib/Requests";
import { Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

type Message = {
  guestName: string;
  title: string;
};

/** @package */
export const CommentForm: FC = () => {
  const form = useForm<Message>({
    initialValues: {
      guestName: "",
      title: "",
    },

    validate: {
      guestName: (value) =>
        value.length < 2
          ? "名前は２文字以上で入力してください"
          : value.length > 16
          ? "名前は15文字以内で入力してください"
          : null,
      title: (value) =>
        value.length < 1
          ? "コメントを入力してください"
          : value.length > 141
          ? "コメントは140文字以内で入力してください"
          : null,
    },
  });

  const handleSubmitMessage = (value: Message) => {
    axios.post(requests.InsertCommentData, {
      guestName: value.guestName,
      title: value.title,
    });
    form.reset();
  };

  return (
    <Box sx={{ maxWidth: 300, margin: 100 }} mx="auto" mt="0">
      <form onSubmit={form.onSubmit(handleSubmitMessage)}>
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
          autosize
          minRows={2}
          {...form.getInputProps("title")}
        />
        <Group position="right" mt="md">
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: "indigo.3", to: "cyan.3" }}
          >
            投稿
          </Button>
        </Group>
      </form>
    </Box>
  );
};
