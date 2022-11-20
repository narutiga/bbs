import axios from "axios";
import requests from "src/lib/Requests";
import { CommentCard } from "src/component/CommentCard";
import { CommentForm } from "src/component/CommentForm";
import { useEffect, useState } from "react";
import { PaginationComponent } from "src/component/PaginationComponent";
import { NextPage } from "next";
import { ToggleColorScheme } from "src/component/ToggleColorScheme";

type CommentData = {
  id: string;
  title: string;
  guestName: string;
  posted_at: string;
};

export const Index: NextPage = () => {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    const getCommentData = () => {
      axios
        .get(requests.fetchCommentData)
        .then((res) => {
          setComments(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCommentData();
  }, []);

  return (
    <div className="max-w-lg mr-auto ml-auto">
      <ToggleColorScheme />
      <CommentForm />
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            guestName={comment.guestName}
            postedAt={comment.posted_at}
            title={comment.title}
          />
        );
      })}
      <div className="text-center">
        <PaginationComponent />
      </div>
    </div>
  );
};
