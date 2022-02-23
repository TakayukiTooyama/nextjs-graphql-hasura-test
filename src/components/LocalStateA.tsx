import { useReactiveVar } from "@apollo/client";
import Link from "next/link";
import type { ChangeEvent, FormEvent, VFC } from "react";
import { useState } from "react";

import { todoVar } from "@/cache";

export const LocalStateA: VFC = () => {
  const [input, setInput] = useState("");
  const todos = useReactiveVar(todoVar);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoVar([...todoVar(), { title: input }]);
    setInput("");
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  return (
    <>
      <p className="mb-3 font-bold">makeVar</p>
      {todos &&
        todos.map((todo, index) => (
          <p className="y-1 mb-3" key={index}>
            {todo.title}
          </p>
        ))}
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <input
          className="mb-3 border border-gray-300 px-3 py-2"
          placeholder="New task ?"
          value={input}
          onChange={handleChangeInput}
        />
        <button
          type="submit"
          disabled={!input}
          className="mb-3 rounded-2xl bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700 focus:outline-none disabled:opacity-40"
        >
          Add New state
        </button>
        <Link href="/local-state-b">
          <a>Next</a>
        </Link>
      </form>
    </>
  );
};
