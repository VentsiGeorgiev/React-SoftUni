import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {

  const { tasks } = useContext(TaskContext)

  return (
    <ul>
      {tasks.map(x =>
        <TaskItem
          key={x._id}
          task={x}
          taskId={x._id}
        />
      )}
    </ul>
  )
}

export default TaskList;