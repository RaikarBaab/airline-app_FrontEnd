import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function ModalComponentEdit({
  isOpen,
  onClose,
  onSignIn,
  editData,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="auto"
      size="lg"
      scrollBehavior="inside"
      className="modal"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 align-center">
          Edit Airline Details
        </ModalHeader>
        <ModalBody>
          {editData.map((data) => {
            return (
              <Input
                label={data.label}
                defaultValue={data.defaultValue}
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
