import React, { useState } from "react";

import { Button } from "@nextui-org/react";

import TableList from "../Components/TableList";

import { useDisclosure } from "@nextui-org/react";

import ModalComponent from "../Components/ModalComponent";

import ModalComponentEdit from "../Components/ModalComponentEdit";

export default function Airport() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowSelection = (rowKey) => {
    setSelectedRow(rowKey);
  };

  const columns = [
    {
      key: "code",
      label: "Code",
    },

    {
      key: "name",
      label: "Name",
    },

    {
      key: "city",
      label: "City",
    },

    {
      key: "state",
      label: "State",
    },
  ];

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
    console.log();

    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isOpen1, setIsOpen] = useState(false);

  const addData = [
    {
      label: "Code",

      placeholder: "Enter Code",

      type: "text",
    },

    {
      label: "Name",

      placeholder: "Enter Name",

      type: "text",
    },

    {
      label: "City",

      placeholder: "Enter City",

      type: "text",
    },

    {
      label: "State",

      placeholder: "Enter State",

      type: "text",
    },
  ];

  const editData = [
    {
      label: "Code",

      placeholder: "Enter Code",

      type: "text",

      defaultValue: "Airline",
    },

    {
      label: "Name",

      placeholder: "Enter Name",

      type: "text",
    },

    {
      label: "City",

      placeholder: "Enter City",

      type: "text",

      defaultValue: "Airline",
    },

    {
      label: "State",

      placeholder: "Enter State",

      type: "text",

      defaultValue: "Airline",
    },
  ];

  return (
    <>
      <TableList selectedRow={selectedRow} onRowSelect={handleRowSelection} />

      <div className="button-div">
        <Button
          onPress={onOpen}
          className="button"
          color="primary"
          onClick={handleAdd}
        >
          Add
        </Button>

        <Button
          className="button"
          color="primary"
          onClick={handleDelete}
          isDisabled={!selectedRow}
        >
          Delete
        </Button>

        <Button
          className="button"
          color="primary"
          onClick={() => setIsOpen(true)}
          isDisabled={!selectedRow}
        >
          Edit
        </Button>

        <a href="/details">
          <Button
            className="button"
            color="primary"
            onClick={handleEdit}
            isDisabled={!selectedRow}
          >
            More Details
          </Button>
        </a>
      </div>

      {/* </div> */}

      <ModalComponent
        addData={addData}
        isOpen={isOpen}
        onClose={onClose}
        onSignIn={handleSignIn}
      />

      <ModalComponentEdit
        editData={editData}
        isOpen={isOpen1}
        onClose={() => setIsOpen(false)}
        onSignIn={handleSignIn}
      />
    </>
  );
}
