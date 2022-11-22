import { Pagination } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { commentsPerPage } from "src/pages_component/index/page";

/** @package */
export const PaginationComponent = (props: {
  commentsCount: number;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-16 inline-block">
      <Pagination
        page={props.activePage}
        onChange={props.setActivePage}
        total={
          props.commentsCount % commentsPerPage === 0
            ? props.commentsCount / commentsPerPage
            : Math.floor(props.commentsCount / commentsPerPage) + 1
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
