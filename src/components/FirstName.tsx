"use client";
import { use } from "react";
import { fetchUser } from "@/lib/fetchUser";
import { useUserId } from "@/lib/UserIdContext";

function FirstName() {
  const id = useUserId();
  if (!id) {
    return null;
  }
  const data = use(fetchUser(id));
  return <div>First: {data.first}</div>;
}

export default FirstName;
