import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

type IProps = {
  placeholder: string;
  setField: (value: string) => void;
};
const TextAreaControl = ({ placeholder = "", setField }: IProps) => {
  return (
    <TextArea
      showCount
      maxLength={300}
      style={{ height: 120, resize: "none" }}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setField(e.target.value)
      }
      placeholder={placeholder}
    />
  );
};

export default TextAreaControl;
