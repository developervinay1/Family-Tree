import React from "react";
import HeroImage from "../../assets/images/Hero.png";
import "./hero.css";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div id="heroSection" className="max-w-7xl m-auto">
      <div id="heroRow1" className="space-y-6">
        <h1 className="text-4xl font-bold">
          Discover Your Roots: Unveiling the Tapestry of Generations
        </h1>
        <p>
          "Embark on a journey through time and heritage with our Family Tree
          platform. Uncover the stories, connections, and legacies that shape
          your family's history. Seamlessly navigate through generations,
          preserving cherished memories and forging new connections. Delve into
          the past, connect with the present, and leave a legacy for the future
          – all within the branches of your digital family tree.
        </p>
        <div className="space-x-6">
          <Button>Share Your's</Button>
          <Button variant="outline">About us</Button>
        </div>
      </div>
      <div id="heroRow2">
        <img src={HeroImage} alt="Hero Section Image" />
      </div>
    </div>
  );
}
