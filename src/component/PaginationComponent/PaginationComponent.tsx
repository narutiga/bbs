import { Pagination } from "@mantine/core";

/** @package */
export const PaginationComponent = () => {
  return (
    <div className="mt-16 inline-block">
      <Pagination total={5} color="lime" withEdges />
    </div>
  );
};
