import axios from "axios";
import requests from "src/lib/Requests";
import { CommentCard } from "src/component/CommentCard";
import { CommentForm } from "src/component/CommentForm";
import { useEffect, useMemo, useState } from "react";
import { PaginationComponent } from "src/component/PaginationComponent";
import { NextPage } from "next";

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

  const commentsPage = messages.slice(
    activePage * messagesPerPage - messagesPerPage,
    activePage * messagesPerPage
  );

  return (
    <div className="w-4/5 max-w-lg mr-auto ml-auto">
      <CommentForm setMessages={setMessages} />
      {commentsPage.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            guestName={comment.guestName}
            postedAt={comment.createdAt}
            title={comment.title}
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
