import React from "react";
import { User } from ".";

export default function User({ user }) {
  return (
    <div>
      <li>
        {user["id"]} - {user["name"]}
      </li>
    </div>
  );
}
