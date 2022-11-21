import { Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import requests from "src/lib/Requests";

type Comment = {
  guestName: string;
  title: string;
};

/** @package */
export const CommentForm = () => {
  const form = useForm<Comment>({
    initialValues: {
      guestName: "",
      title: "",
    },

    validate: {
      guestName: (value) =>
        value.length < 2 ? "名前は２文字以上で入力してください" : null,
      title: (value) =>
        value.length < 1 ? "コメントを入力してください" : null,
    },
  });

  const handleSubmitComment = (value: Comment) => {
    axios.post(requests.InsertCommentData, {
      guestName: value.guestName,
      title: value.title,
    });
    form.reset();
  };

  return (
    <Box sx={{ maxWidth: 300, margin: 100 }} mx="auto" mt="0">
      <form onSubmit={form.onSubmit(handleSubmitComment)}>
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
