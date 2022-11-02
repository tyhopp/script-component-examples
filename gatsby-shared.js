import React from "react";
import { Script } from "gatsby";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Script strategy="off-main-thread" src="http://localhost:8000/drift.js" />
    </>
  );
};
