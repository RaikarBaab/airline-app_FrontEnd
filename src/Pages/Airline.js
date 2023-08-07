import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import TableList from "../Components/TableList";
import { useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../Components/ModalComponent";
import ModalComponentEdit from "../Components/ModalComponentEdit";

import Nav from "../Components/Nav";

export default function Airline() {
  const [selectedRow, setSelectedRow] = useState(null);
  const handleRowSelection = (rowKey) => {
    setSelectedRow(rowKey);
  };

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "state",
      label: "State",
    },
    {
      key: "total flights",
      label: "Total No. of Flights",
    },
    {
      key: "flights to depart",
      label: "No. of Flights to Depart Today",
    },
  ];

  let isAdd = true;
  const title = "Airline";
  const btn = "View Airports";

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
  // const titleBtn = {
  //   title: "Airline",
  //   btn: "View Airports",
  // };

  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/details?title=${title}&btn=${btn}`);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen1, setIsOpen] = useState(false);

  const addData = [
    {
      label: "Name",
      placeholder: "Enter Name ",
      type: "text",
    },
    {
      label: "Address Line 1",
      placeholder: "Enter Address",
      type: "text",
    },
    {
      label: "City",
      placeholder: "Enter City",
      type: "text",
    },
    {
      label: "Zip Code",
      placeholder: "Enter Zip Code",
      type: "text",
    },
    {
      label: "Licence Effective Date",
      placeholder: "Enter Licence Effective Date",
      type: "datetime-local",
    },
    {
      label: "Licence Expiry Date",
      placeholder: "Enter Licence Expiry Date",
      type: "text",
    },
    {
      label: "State",
      placeholder: "Enter State",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "Enter Email",
      type: "text",
    },
    {
      label: "Duration",
      placeholder: "Enter Duration",
      type: "text",
    },
  ];

  const editData = [
    // {
    //   label: "Name",
    //   placeholder: "Enter Name ",
    //   type: "text",
    //   defaultValue: "Neshwin",
    // },
    // {
    //   label: "Email",
    //   placeholder: "Enter Email",
    //   type: "email",
    //   defaultValue: "nesh@gmail.com",
    // },
    {
      label: "Name",
      placeholder: "Enter Name ",
      type: "text",
      defaultValue: "Airline",
    },
    {
      label: "Address Line 1",
      placeholder: "Enter Address",
      type: "text",
      defaultValue: "Airline",
    },
    {
      label: "City",
      placeholder: "Enter City",
      type: "text",
      defaultValue: "Airline",
    },
    {
      label: "Zip Code",
      placeholder: "Enter Zip Code",
      type: "text",
      defaultValue: "Airline",
    },
    {
      label: "Licence Effective Date",
      placeholder: "Enter Licence Effective Date",
      type: "date",
      defaultValue: "Airline",
    },
    {
      label: "Licence Expiry Date",
      placeholder: "Enter Licence Expiry Date",
      type: "text",
      defaultValue: "Airline",
    },
    {
      label: "State",
      placeholder: "Enter State",
      type: "text",
      defaultValue: "Airline",
    },
    {
      label: "Email",
      placeholder: "Enter Email",
      type: "text",
      defaultValue: "Airline",
    },
    {
      label: "Duration",
      placeholder: "Enter Duration",
      type: "text",
      defaultValue: "Airline",
    },
  ];

  return (
    <>
      <TableList
        columns={columns}
        selectedRow={selectedRow}
        onRowSelect={handleRowSelection}
      />
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
        <Button
          className="button"
          color="primary"
          onClick={handleDetails}
          isDisabled={!selectedRow}
        >
          More Details
          {/* <a href="/details">More Details</a> */}
        </Button>
      </div>
      {/* </div> */}
      <ModalComponent
        title={title}
        addData={addData}
        isOpen={isOpen}
        onClose={onClose}
        onSignIn={handleSignIn}
      />
      <ModalComponentEdit
        title={title}
        editData={editData}
        isOpen={isOpen1}
        onClose={() => setIsOpen(false)}
        onSignIn={handleSignIn}
      />
    </>
  );
}
