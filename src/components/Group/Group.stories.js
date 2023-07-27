import { Group } from ".";

export default {
  title: "Components/Group",
  component: Group,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    aboutLibrathermClassName: {},
    line: "https://generation-sessions.s3.amazonaws.com/a4e23a43996cd449304c35a5eae49bc3/img/line-196-2.svg",
  },
};
