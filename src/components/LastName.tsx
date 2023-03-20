"use client";
import { use } from "react";
import { fetchUser } from "@/lib/fetchUser";
import { useUserId } from "@/lib/UserIdContext";

function LastName() {
  const id = useUserId();
  if (!id) {
    return null;
  }
  const data = use(fetchUser(id));
  return <div>Last: {data.last}</div>;
}

export default LastName;
