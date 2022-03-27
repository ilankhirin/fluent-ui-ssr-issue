import { PrimaryButton } from "@fluentui/react";
import React from "react";
import { TestSsrIssue } from "./TestSsrIssue";

/**
 * The home page. Nothing fancy here.
 *
 * @returns react component.
 */
export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>The home page.</p>

      <TestSsrIssue />
    </div>
  );
}
