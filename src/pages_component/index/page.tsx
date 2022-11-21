import axios from "axios";
import requests from "src/lib/Requests";
import { CommentCard } from "src/component/CommentCard";
import { CommentForm } from "src/component/CommentForm";
import { useEffect, useState } from "react";
import { PaginationComponent } from "src/component/PaginationComponent";
import { NextPage } from "next";

type CommentData = {
  id: string;
  title: string;
  guestName: string;
  createdAt: string;
};

export const commentsPerPage = 10;

export const Index: NextPage = () => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() => {
    const getCommentData = () => {
      axios
        .get(requests.fetchCommentData)
        .then((res) => {
          setComments(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCommentData();
  }, []);

  const commentsPage = comments.slice(
    activePage * commentsPerPage - commentsPerPage,
    activePage * commentsPerPage
  );

  return (
    <div className="max-w-xs sm:max-w-lg mr-auto ml-auto">
      <CommentForm />
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
          commentCount={comments.length}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
};
