import React from "react";

export const Footer = () => {
  let footerStyle = {
    position : "relative",
    top : "17vh",
    width: "100%" 
  }
  return (
    <div>
      <footer className="bg-dark text-light py-3" style ={footerStyle}>
        <p className=" text-center">Copyright &copy; MytodoList.com</p>
      </footer>
    </div>
  );
};
