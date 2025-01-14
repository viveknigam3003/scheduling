import { createStyles, Text, Image, Group } from "@mantine/core";
import React from "react";
import ClickityBtn from "./MagicBtn/ClickityBtn";

function Landing() {
  const useStyles = createStyles((theme) => ({
    main: {
      margin: "0 5rem 0 5rem",
      fontFamily: "Greycliff CF, sans-serif",
      align: "center",
      color: theme.colors.primary[9],
      weight: "700",
      fontSize: "3.5rem",
    },
    sub: {
      margin: "0 5rem",
      fontFamily: "Greycliff CF, sans-serif",
      align: "center",
      color: theme.colors.primary[6],
      weight: "400",
      fontSize: "2rem",
    },
  }));
  const { classes } = useStyles();
  return (
    <Group spacing="lg" m="md">
      <div>
        <Image
          src="https://user-images.githubusercontent.com/72456774/192103729-9470f9cd-a4c4-44a9-887c-006fbf5bb6bf.png"
          alt="demo"
          width={350}
          height={350}
        />
        <Text className={classes.main}>Uhh, Can all the mikes stand up?</Text>
        <Text className={classes.sub}>That concludes the mic check.</Text>
        <ClickityBtn />
      </div>
    </Group>
  );
}

export default Landing;
