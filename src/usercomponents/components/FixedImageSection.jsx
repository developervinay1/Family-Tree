import React from "react";
import "./hero.css";
import { Button } from "@/components/ui/button";

export default function FixedImageSection() {
  return (
    <div id="fixedImage">
      <div id="fixedOverlay"></div>
      <div id="fixedContent" className="space-y-6">
        <h1 className="text-3xl font-bold text-white">
          Rooted in History, Connected for Eternity
        </h1>
        <p className="max-w-2xl">
          Preserve Ancestral Memories Connect Generations Understand Cultural
          Heritage Uncover Hidden Stories Preserve Photographs and Artifacts
          Strengthen Family Bonds Pass Down Values Genealogical Research
          Educational Tool Leave a Lasting Legacy
        </p>
        <Button>Check Now</Button>
      </div>
    </div>
  );
}
