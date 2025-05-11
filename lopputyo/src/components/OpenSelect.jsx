import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function OpenSelect({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(255,255,255,0.4)" backdropFilter="blur(8px)" />
      <ModalContent>
        <ModalHeader>Popup Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Moi
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}