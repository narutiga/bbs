import { CustomLayout } from "next";
import { HeaderMenu } from "src/component/HeaderMenu";
import { Footer } from "src/component/Footer";

/** @package */
export const Layout: CustomLayout = (page) => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderMenu />
      <main className="flex flex-1 flex-col pt-10 items-center">{page}</main>
      <Footer />
    </div>
  );
};
