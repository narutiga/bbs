import { useEffect, useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import requests from "src/lib/Requests";
import { MessageForm } from "src/component/MessageForm";
import { MessageCard } from "src/component/MessageCard";
import { PaginationComponent } from "src/component/PaginationComponent";
import { Button, Group } from "@mantine/core";
import { IconRefresh } from "@tabler/icons";

/** @package */
export type MessageData = {
  id: string;
  title: string;
  guestName: string;
  createdAt: Date;
};

/** @package */
export const messagesPerPage = 10;

/** @package */
export const Index: NextPage = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() => {
    const getMessageData = () => {
      axios
        .get(requests.fetchCommentData)
        .then((res) => {
          setMessages(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getMessageData();
  }, []);

  const displayMessages = messages.slice(
    activePage * messagesPerPage - messagesPerPage,
    activePage * messagesPerPage
  );

  return (
    <div className="px-4 w-5/6 md:w-4/5 min-w-95 max-w-lg  mr-auto ml-auto">
      <MessageForm setMessages={setMessages} setActivePage={setActivePage} />
      <Group position="left" mt="md">
        <Button
          className="w-16 mb-4"
          onClick={() => setActivePage(1)}
          variant="gradient"
          gradient={{ from: "indigo.3", to: "cyan.3" }}
        >
          <IconRefresh />
        </Button>
      </Group>
      {displayMessages.map((message) => {
        return (
          <MessageCard
            key={message.id}
            guestName={message.guestName}
            postedAt={message.createdAt}
            title={message.title}
          />
        );
      })}
      <div className="text-center">
        <PaginationComponent
          messagesCount={messages.length}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
};
