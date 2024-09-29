import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const MonthsDropdown = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["January"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const months = [
    { key: "january", label: "January" },
    { key: "february", label: "February" },
    { key: "march", label: "March" },
    { key: "april", label: "April" },
    { key: "may", label: "May" },
    { key: "june", label: "June" },
    { key: "july", label: "July" },
    { key: "august", label: "August" },
    { key: "september", label: "September" },
    { key: "october", label: "October" },
    { key: "november", label: "November" },
    { key: "december", label: "December" },
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select a month"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {months.map((month) => (
          <DropdownItem key={month.key}>{month.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MonthsDropdown;
