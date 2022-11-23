import { Dispatch, FC, SetStateAction } from "react";
import axios from "axios";
import requests from "src/lib/Requests";
import { MessageData } from "src/pages_component/index/page";
import { Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLocalStorage } from "@mantine/hooks";

type Message = {
  guestName: string;
  title: string;
};

type Props = {
  setMessages: Dispatch<SetStateAction<MessageData[]>>;
  setActivePage: Dispatch<SetStateAction<number>>;
};

/** @package */
export const MessageForm: FC<Props> = (props) => {
  const [storagedName, setStoragedName] = useLocalStorage<string>({
    key: "guest-name",
    defaultValue: "",
  });

  const form = useForm<Message>({
    initialValues: {
      guestName: storagedName,
      title: "",
    },

    validate: {
      guestName: (value) =>
        value.length > 11 ? "名前は10文字以内で入力してください" : null,
      title: (value) =>
        value.length < 1
          ? "コメントを入力してください"
          : value.length > 141
          ? "コメントは140文字以内で入力してください"
          : null,
    },
  });

  const handleSubmitMessage = (value: Message) => {
    setStoragedName(value.guestName);
    axios
      .post(requests.InsertCommentData, {
        guestName: value.guestName,
        title: value.title,
      })
      .then((res) => {
        props.setMessages(res.data);
        props.setActivePage(1);
      })
      .catch((error) => {
        console.log(error);
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
          size="md"
          {...form.getInputProps("guestName")}
        />
        <Textarea
          required
          label="コメント"
          placeholder="comment"
          autosize
          minRows={2}
          size="md"
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
