import { Meta, StoryObj } from "@storybook/react";
import TextInput from "../components/TextInput/TextInput";

const meta: Meta<typeof TextInput> = {
  title: "UI/textinput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    disable: {
      control: "boolean",
      description: "It is help to disable Input field."
    },
    fontSize: {
      control: "text"
    },
    height: {
      control: "text"
    },
    label: {
      control: "text",
      escription: "The text content for the TextInput component."
    },
    placeholder: {
      control: "text",
      escription:
        "Show basic info of the input field so user can easily understand what to write."
    },
    required: {
      control: "boolean"
    },
    rounded: {
      control: "text"
    },
    state: {
      control: {
        type: "select",
        options: ["default", "hover", "focus", "error"]
      },
      defaultValue: "default"
    },
    type: {
      control: "text",
      description: "What is the type of input field"
    },
    width: {
      control: "text"
    }
  }
};

export default meta;

export const nameField: StoryObj<typeof TextInput> = {
  args: {
    label: "name",
    placeholder: "Enter the name",
    fontSize: "16px",
    state: "focus"
  }
};
