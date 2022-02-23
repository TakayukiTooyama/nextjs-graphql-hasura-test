import { useReactiveVar } from "@apollo/client";
import Link from "next/link";
import type { VFC } from "react";

import { todoVar } from "@/cache";

export const LocalStateB: VFC = () => {
  const todos = useReactiveVar(todoVar);
  return (
    <>
      {todos &&
        todos.map((todo, index) => (
          <p className="mb-3" key={index}>
            {todo.title}
          </p>
        ))}
      <Link href="/local-state-a">
        <a>Back</a>
      </Link>
    </>
  );
};
