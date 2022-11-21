import { CustomLayout } from "next";
import { Footer } from "src/component/Footer";
import { HeaderMenu } from "src/component/HeaderMenu";
import { PaginationComponent } from "src/component/PaginationComponent";

/** @package */
export const Layout: CustomLayout = (page: any) => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderMenu />
      <main className="flex flex-1 flex-col pt-10 items-center">{page}</main>
      <Footer />
    </div>
  );
};
