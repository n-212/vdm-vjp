import { HStack, IconButton, Spacer } from "@chakra-ui/react";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";

// Tähän pitää tehdä vähintään tykkäys ominaisuus
// Iconit suuremmiksi

const PostActions = () => (
  <HStack p={4}>
    <IconButton icon={<FiHeart />} variant="ghost" aria-label="Like" />
    <IconButton icon={<FiMessageCircle />} variant="ghost" aria-label="Comment" />
    <IconButton icon={<FiSend />} variant="ghost" aria-label="Share" />
    <Spacer />
    <IconButton icon={<FiBookmark />} variant="ghost" aria-label="Save" />
  </HStack>
);

export default PostActions
