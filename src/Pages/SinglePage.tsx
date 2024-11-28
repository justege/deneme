import { Box } from "@chakra-ui/react";
import { Body1 } from "../Components/Body1";

export const SinglePage = () => {
  console.log("Rendered SinglePage");

  // const {id, arabamarkasi, lng} = useParams<{id?: string, arabamarkasi?: string, lng?: string}>();

  return (
    <Box>
      <Body1 />
    </Box>
  );
};
