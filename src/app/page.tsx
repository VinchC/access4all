"use client";

import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import { Task } from "./types";
import { useState } from "react";
import { tasksToDisplay } from "../data/tasks";
import Button from "@/components/Button";
import CarouselHome from "@/components/CarouselHome";

export default function Home() {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  const displayTasks = () => {
    return tasks === null ? setTasks(tasksToDisplay) : setTasks(null);
  };
  return (
    <>
      <Header />
      <main id="maincontent">
        <h1 id="parent">To do list</h1>
        <Button onClick={displayTasks} title={"Display tasks"}></Button>
        <CarouselHome tasks={tasks} />
        {tasks
          ? tasks.map((task, index) => (
              <TaskCard key={index} title={task.title} />
            ))
          : ""}
      </main>
    </>
  );
}
