import { Pagination } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

/** @package */
export const PaginationComponent = (props: {
  commentCount: number;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-16 inline-block">
      <Pagination
        page={props.activePage}
        onChange={props.setActivePage}
        total={props.commentCount / 5 + 1}
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
