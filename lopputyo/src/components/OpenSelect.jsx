import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import SelectCarousel from "./SelectCarousel";

export default function OpenSelect({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(255,255,255,0.4)" backdropFilter="blur(3px)" />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <SelectCarousel></SelectCarousel>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}