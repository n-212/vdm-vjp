import { HStack, IconButton, Spacer } from "@chakra-ui/react";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";

// Tähän pitää tehdä vähintään tykkäys ominaisuus
// Iconit suuremmiksi

const PostActions = () => (
  <HStack p={1}>
    <IconButton icon={<FiHeart size="24px"/>} variant="ghost" aria-label="Like" />
    <IconButton icon={<FiMessageCircle size="24px"/>} variant="ghost" aria-label="Comment" />
    <IconButton icon={<FiSend size="24px"/>} variant="ghost" aria-label="Share" />
    <Spacer />
    <IconButton icon={<FiBookmark size="24px"/>} variant="ghost" aria-label="Save" />
  </HStack>
);

export default PostActions
