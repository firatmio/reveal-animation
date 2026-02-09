import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

declare const Reveal: React.FC<RevealProps>;

export default Reveal;
