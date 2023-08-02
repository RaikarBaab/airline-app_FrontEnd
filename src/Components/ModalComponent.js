import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox, Input, Link, Form } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function ModalComponent({ isOpen, onClose, onSignIn }) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="auto" size="md" className="modal">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 align-center">Add Airline Details</ModalHeader>
        <ModalBody>
          {/* <Input autoFocus label="Code" placeholder="Enter Code" type="number" variant="bordered" /> */}
          <Input label="Name" placeholder="Enter Name" type="text" variant="bordered" />
          <Input label="Email" placeholder="Enter Email" type="email" variant="bordered" />

          <Input label="Address Line 1" placeholder="Enter Address" type="text" variant="bordered" />
          <Input label="Zip Code" placeholder="Enter Zip Code" type="number" variant="bordered" />
          <Input label="State" placeholder="Enter State" type="text" variant="bordered" />
          <Input label="Duration" placeholder="Enter Duration" type="text" variant="bordered" />
          <Input label="Licence Effective Date" placeholder="Enter Licence Effective Date" type="text" variant="bordered" />

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
