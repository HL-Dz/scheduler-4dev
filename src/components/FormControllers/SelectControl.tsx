import React from "react";
import { Select } from "antd";
import { IAuthor } from "../../mockData/authors";
import { IPriority, IStatus } from "../../mockData/tasks";

type IProps = {
  options: any[];
  selectType: "state" | "priority" | "authors";
  placeholder: string;
  setField: (value: string) => void;
};

const SelectControl = ({
  options,
  selectType,
  placeholder,
  setField,
}: IProps) => {
  return (
    <Select
      // showSearch
      style={{ width: "100%" }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={(value) => setField(value)}
      // onChange={() => }
      // filterOption={(input, option) => (option?.label ?? "").includes(input)}
      // filterSort={(optionA, optionB) =>
      //   (optionA?.label ?? "")
      //     .toLowerCase()
      //     .localeCompare((optionB?.label ?? "").toLowerCase())
      // }
      options={options}
    />
  );
};

export default SelectControl;
