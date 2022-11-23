import { Dispatch, FC, SetStateAction } from "react";
import { messagesPerPage } from "src/pages_component/index/page";
import { Pagination } from "@mantine/core";

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
          props.messagesCount % messagesPerPage === 0
            ? props.messagesCount / messagesPerPage
            : Math.floor(props.messagesCount / messagesPerPage) + 1
        }
        position="center"
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
