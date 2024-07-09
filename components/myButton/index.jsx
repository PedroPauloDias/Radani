// MyButton.tsx
import React from 'react';
import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      radani: "text-[#fff] bg-[#85adb5] dark:text-[#000] dark:bg-[#ff9100ce]",
      orange: "bg-[#885414] text-[#fff] dark:bg-[#d83e0a] dark:text-[#000]",
      violet: "bg-[#8b5cf6] text-[#fff] dark:bg-[#4a4e69] dark:text-[#ffcc00]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed dark:bg-[#555555] dark:text-[#aaa]",
    },
    size: {
      xs: "px-2 min-w-12 h-4 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-6 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-10 text-large font-semi gap-4 mt-4 rounded-xl",
    },
  },
  defaultVariants: {
    color: "orange",
    size: "xl",
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: "olive",
      class: "bg-[#84cc16]/80 opacity-100 dark:bg-[#4a4e69]/80",
    },
  ],
});

export default MyButton;
