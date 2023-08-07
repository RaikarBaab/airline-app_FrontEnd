import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function InputDropdown({ label, values, selectedValueRef, setSelectedValueRef }) {
  // let options = options;
  // const [selectedKeys, setSelectedKeys] = React.useState(new Set([label]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedValueRef),
    [selectedValueRef]
  );

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection actions"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedValueRef}
            onSelectionChange={setSelectedValueRef}
          >
            {values.map(({ label }) => (
              <DropdownItem key={label}>{label}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
