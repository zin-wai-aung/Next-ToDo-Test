"use server";

import { revalidateTag } from "next/cache";

const createTask = async (currentState, formData) => {
  const title = formData.get("title");

  const res = await fetch("http://localhost:3003/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      completed: false,
    }),
  });

  console.log(res);

  if (res.ok) {
    const json = await res.json();
    revalidateTag("tasks")
    console.log(json);
  } else {
    console.log(res);
  }
};
export default createTask;
