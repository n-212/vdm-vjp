import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex
} from "@chakra-ui/react";

import SelectCarousel from "./SelectCarousel";

export default function OpenSelect({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(255,255,255,0.4)" backdropFilter="blur(3px)" />
      <ModalContent w="400px" h="600px" bg="kuplassa.background">
        <ModalHeader color="black">Astu hahmon saappaisiin</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="0px">
          <SelectCarousel />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}