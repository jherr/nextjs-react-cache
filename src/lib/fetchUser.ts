import { cache } from "react";

export const fetchUser = cache((id: number) =>
  fetch(`http://localhost:3000/${id}.json?q=1`).then((res) => res.json())
);
