import { Pagination } from "@mantine/core";

export const PaginationComponent = () => {
  return (
    <div className="mt-16">
      <Pagination total={5} color="indigo" withEdges />
    </div>
  );
};
