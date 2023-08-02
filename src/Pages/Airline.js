import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import TableList from "../Components/TableList";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import ModalComponent from "../Components/ModalComponent";


export default function Airline() {
  const [selectedRow, setSelectedRow] = useState(null);
  const handleRowSelection = (rowKey) => {
    setSelectedRow(rowKey);
  };

  let isAdd = true;

  const handleAdd = () => {
    console.log("Add button clicked");
    isAdd = false;
  };
  
  const handleDelete = () => {
    console.log("Delete button clicked");
  };
  
  const handleEdit = () => {
    console.log("Edit button clicked");
  };
  
  const handleSignIn = () => {
    console.log("Sign in button clicked");
    onClose();
  };

  const {isOpen, onOpen, onClose} = useDisclosure();


  return (
    <>
      <div className=" container flex flex-col gap-3">
    <TableList selectedRow={selectedRow} onRowSelect={handleRowSelection}/>
      </div>
<div className="pt-5">

      <Button onPress={onOpen} className='button' color="primary" onClick={handleAdd}>
        Add
      </Button>
      <Button className='button' color="primary" onClick={handleDelete} isDisabled={!selectedRow}>
        Delete
      </Button>
      <Button className='button' color="primary" onClick={handleEdit} isDisabled={!selectedRow}>
        Edit
      </Button>
      <Button className='button' color="primary" onClick={handleEdit} isDisabled={!selectedRow}>
        More Details
      </Button>
</div>
      <ModalComponent isOpen={isOpen} onClose={onClose} onSignIn={handleSignIn} />

      </>
  );
}