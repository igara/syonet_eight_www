import * as nextImage from "next/image";
import { addDecorator } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";

addDecorator(withPerformance);

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
