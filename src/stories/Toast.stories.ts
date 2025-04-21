import { Meta, StoryObj } from "@storybook/react";
import Toast from "../components/Feedback/Toast";

const meta: Meta<typeof Toast> = {
  title: "UI/toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
      defaultValue: "This is a toast message!"
    },
    status: {
      control: {
        type: "select",
        options: ["info", "error", "success", "warning"]
      },
      defaultValue: "info"
    },
    position: {
      control: {
        type: "select",
        options: ["left", "center", "bottom", "right"]
      },
      defaultValue: "right"
    },
    time: {
      control: "number",
      defaultValue: 1000
    }
  }
};

export default meta;


type toastType = StoryObj<typeof Toast>


export const defaultToast:toastType ={
    args:{
        status:"error",
        message:'This is Default message'
    }
} 

export const ErrorToast:toastType ={
    args:{
        status:'error',
        position:'bottom',
        message:'This is error message'
    }
} 