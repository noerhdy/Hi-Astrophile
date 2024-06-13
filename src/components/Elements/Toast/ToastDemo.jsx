import React from "react";
import { toast, Toaster } from "sonner";
const ToastDemo = () => {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast("My first toast")}>Give me a toast</button>
    </div>
  );
};

export default ToastDemo;
