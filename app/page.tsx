"use client";
import TributePage from "@/components/tribute-page";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <TributePage />
    </ParallaxProvider>
  );
}
