"use client";
import Header from "@/components/Header/page";
import { ReactNode } from "react";
import { Wrapper } from "./style";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
export default Layout;
