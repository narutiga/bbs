import { useEffect, useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import requests from "src/lib/Requests";
import { MessageForm } from "src/component/MessageForm";
import { MessageCard } from "src/component/MessageCard";
import { PaginationComponent } from "src/component/PaginationComponent";

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
    <div className="w-4/5 max-w-lg mr-auto ml-auto">
      <MessageForm setMessages={setMessages} setActivePage={setActivePage} />
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
