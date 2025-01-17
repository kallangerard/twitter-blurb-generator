import { Stack, TextField, Typography, Button } from "@mui/material";
import { useRef } from "react";

export default function Home() {
  const blurbRef = useRef("");
  function generateBlurb() {
    throw new Error("Not implemented");
  }
  return (
    <Stack
      component="main"
      direction="column"
      maxWidth="50em"
      mx="auto"
      alignItems="center"
      justifyContent="center"
      py="1em"
      spacing="1em"
    >
      <Typography
        variant="h1"
        className="bg-gradient-to-br from-black to-stone-400 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Generate your next Twitter post with ChatGPT
      </Typography>

      <TextField
        multiline
        fullWidth
        minRows={4}
        onChange={(e) => {
          blurbRef.current = e.target.value;
        }}
        sx={{ "& textarea": { boxShadow: "none !important" } }}
        placeholder="Key words on what you would like your blurb to be about"
      ></TextField>
      <Button onClick={generateBlurb}>Generate Blurb</Button>
    </Stack>
  );
}
