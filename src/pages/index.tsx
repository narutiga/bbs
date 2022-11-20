import axios from "axios";
import requests from "src/lib/Requests";
import { CommentCard } from "src/component/CommentCard";
import { CommentForm } from "src/component/CommentForm";
import { useEffect, useState } from "react";
import { CommentProps } from "src/component/CommentCard/CommentCard";
import { PaginationComponent } from "src/component/PaginationComponent";

type CommentData = {
  id: string;
  title: string;
  guestName: string;
  posted_at: string;
};

const Home = () => {
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
      <PaginationComponent />
    </div>
  );
};

export default Home;
