import React from "react";
import { Select } from "antd";
import { IAuthor } from "../../mockData/authors";
import { IPriority, IStatus, ITask } from "../../mockData/tasks";

type IProps = {
  options: any[];
  selectType: "state" | "priority" | "authors";
  placeholder: string;
  setField: (value: string | number) => void;
  selectedTask?: ITask | null;
};

const SelectControl = ({
  options,
  selectType,
  placeholder,
  setField,
  selectedTask,
}: IProps) => {
  return (
    <Select
      style={{ width: "100%" }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={(value) => setField(value)}
      defaultValue={selectedTask?.description}
      options={options}
    />
  );
};

export default SelectControl;
