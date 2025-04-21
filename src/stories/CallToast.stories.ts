import type { Meta, StoryObj } from "@storybook/react";
import CallToast from "../components/Feedback/CallToast";
import { CiBellOn } from "react-icons/ci";
import { GoAlert } from "react-icons/go";

const meta: Meta<typeof CallToast> = {
  title: "UI/CallToast",
  component: CallToast,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false, // Controlled in specific stories
    },
    iconSize: {
      control: "text",
      defaultValue: "24px",
    },
    iconColor: {
      control: "color",
      defaultValue: "#1D4ED8", // Tailwind blue-700
    },
    buttonColor:{
      control:"color",
    }
  },
};

export default meta;
type Story = StoryObj<typeof CallToast>;

export const DefaultButtonTrigger: Story = {
  args: {
    icon: undefined,
    buttonColor:"#212121",
    label:'Click to show toast'
  },
};

export const WithBellIcon: Story = {
  args: {
    icon: CiBellOn,
    iconSize: "28px",
    iconColor: "#10B981", // Tailwind green-500
  },
};

export const WithAlertIcon: Story = {
  args: {
    icon: GoAlert,
    iconSize: "32px",
    iconColor: "#F87171", // Tailwind red-400
  },
};
