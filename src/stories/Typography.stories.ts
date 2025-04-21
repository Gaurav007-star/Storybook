import { Meta, StoryObj } from "@storybook/react";
import Typography from "../components/Typography/Typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  tags:['autodocs'],
  argTypes: {
    typoTag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      description: "The HTML tag to render"
    },
    label: {
      control: "text",
      description: "The text content for the Typography component"
    },
    fontSize: { control: "text" },
    fontWeight: { control: "text" },
    lineHeight: { control: "text" },
    letterSpacing: { control: "text" },
    mode: {
      control: "select" ,
      options: ["light", "dark"]
    }
  }
};

export default meta;

type storyType = StoryObj<typeof Typography>;

export const Heading: storyType = {
  args: {
    typoTag: "h1",
    label: "Thank you for this Project",
    mode:"dark"
  }
};

export const paragraph: storyType = {
  args: {
    typoTag: "p",
    label:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, at. Culpa sit quis commodi quod, sequi facilis inventore nihil deserunt rem quidem minus labore corporis quibusdam in? Unde rerum hic perferendis minus, asperiores pariatur modi enim ipsa natus eum aut fugit in, vitae placeat rem odio temporibus soluta. Amet esse ut quidem dolores similique. Quos, laboriosam.',
    mode:"dark",
    fontSize:"20px"
  }
};
