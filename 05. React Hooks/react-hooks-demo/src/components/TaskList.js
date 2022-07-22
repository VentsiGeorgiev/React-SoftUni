import TaskItem from "./TaskItem";

function TaskList({ tasks, taskDeleteHandler }) {
  return (
    <ul>
      {tasks.map(x =>
        <TaskItem
          key={x._id}
          title={x.title}
          taskId={x._id}
          taskDeleteHandler={taskDeleteHandler}
        />
      )}
    </ul>
  )
}

export default TaskList;