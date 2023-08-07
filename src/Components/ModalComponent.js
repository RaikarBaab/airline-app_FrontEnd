import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from "@nextui-org/react";

export default function ModalComponent({
  isOpen,
  onClose,
  onSignIn,
  addData,
  title,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="auto"
      scrollBehavior="inside"
      size="lg"
      className="modal"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 align-center">
          Add {title} Details
        </ModalHeader>
        <ModalBody>
          {/* <Input autoFocus label="Code" placeholder="Enter Code" type="number" variant="bordered" /> */}
          {addData.map((data) => {
            return (
              <Input
                label={data.label}
                placeholder={data.placeholder}
                type={data.type}
                variant="bordered"
              />
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onClick={onClose}>
            Close
          </Button>
          <Button color="primary" onClick={onSignIn}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
