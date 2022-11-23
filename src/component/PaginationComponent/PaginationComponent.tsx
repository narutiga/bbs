import { Pagination } from "@mantine/core";
import { Dispatch, FC, SetStateAction } from "react";
import { commentsPerPage } from "src/pages_component/index/page";

type Props = {
  messagesCount: number;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
};

/** @package */
export const PaginationComponent: FC<Props> = (props) => {
  return (
    <div className="mt-16 inline-block">
      <Pagination
        page={props.activePage}
        onChange={props.setActivePage}
        total={
          props.messagesCount % commentsPerPage === 0
            ? props.messagesCount / commentsPerPage
            : Math.floor(props.messagesCount / commentsPerPage) + 1
        }
        styles={(theme) => ({
          item: {
            "&[data-active]": {
              backgroundImage: theme.fn.gradient({
                from: "cyan.3",
                to: "indigo.3",
              }),
            },
          },
        })}
        withEdges
      />
    </div>
  );
};
