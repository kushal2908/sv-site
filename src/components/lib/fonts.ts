import localFont from "next/font/local";

const font = localFont({
  src: [
    {
      path: "../../app/assets/font/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../app/assets/font/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../app/assets/font/Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../app/assets/font/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../app/assets/font/Satoshi-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi", // Optional: CSS variable for use in your styles
  display: "swap", // Font display strategy (optional, improves loading)
});

export default font;
