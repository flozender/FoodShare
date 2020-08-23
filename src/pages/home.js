import React from "react";
import Hero from "../components/hero";
import Middle from "../components/middle";
import Bottom from "../components/bottom";
import { Container } from "react-bootstrap";

export const Home = () => (
  <div>
    <Hero />
    <Middle />
    <Bottom />
  </div>
);
