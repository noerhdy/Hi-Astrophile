import React from "react";
import { Toaster } from "sonner";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
