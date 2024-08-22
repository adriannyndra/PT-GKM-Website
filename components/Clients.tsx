"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const clients = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    imageUrl: "/assets/clients/bca.png", // Add image URL
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    imageUrl: "/path-to-image/william-shakespeare.jpg", // Add image URL
  },
];

const Clients = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1>Our Clients</h1>
      <InfiniteMovingCards items={clients} direction="right" speed="fast" />
    </div>
  );
};

export default Clients;
