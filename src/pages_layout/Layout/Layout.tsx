import { CustomLayout } from "next";

/** @package */
export const Layout: CustomLayout = (page: any) => {
  return (
    <div>
      <main>{page}</main>
    </div>
  );
};
