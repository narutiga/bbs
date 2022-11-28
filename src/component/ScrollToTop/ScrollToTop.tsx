import { useWindowScroll } from "@mantine/hooks";
import { Button, Text, Group, Affix, Transition } from "@mantine/core";
import { FC } from "react";
import { IconChevronsUp } from "@tabler/icons";

/** @package */
export const ScrollToTop: FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            onClick={() => scrollTo({ y: 0 })}
            variant="gradient"
            gradient={{ from: "indigo.3", to: "cyan.3" }}
            className="px-0 h-12 w-12"
            radius="xl"
            style={transitionStyles}
          >
            <IconChevronsUp />
          </Button>
        )}
      </Transition>
    </Affix>
  );
};
