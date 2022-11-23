import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

/** @package */
export const ToggleColorScheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.cyan[2]
              : theme.colors.indigo[4],
        })}
      >
        {colorScheme === "dark" ? (
          <IconSun size={20} />
        ) : (
          <IconMoonStars size={20} />
        )}
      </ActionIcon>
    </Group>
  );
};
