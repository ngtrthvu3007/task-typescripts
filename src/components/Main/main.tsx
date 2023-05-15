import InputBox from "../InputBox/index";
import ListTask from "../ListTask";
import { useState } from "react";
import { Task } from "../../@types/task.type";
const Main = () => {
  // state function area
  const [task, setTask] = useState<Task[]>([]);
  const [nameTask, setNameTask] = useState<string>("");
  const DoneTasks = task.filter((item) => item.done == true);
  const PendingTasks = task.filter((item) => item.done == false);
  const [editTask, setEditTask] = useState<boolean>(false);
  const [editNameTask, setEditNameTask] = useState<string>("");
  // handle function area
  const addTask = (event: React.FormEvent<HTMLFormElement>, name: string) => {
    event.preventDefault();
    const task: Task = {
      name,
      done: false,
      id: new Date().toISOString(),
    };
    setTask((prev) => [...prev, task]);
    setNameTask("");
  };
  const handleChangeCheckBox = (id: string, done: boolean) => {
    setTask((prev) => {
      return prev.map((data) => {
        if (data.id === id) {
          return { ...data, done };
        }
        return data;
      });
    });
  };

  const submitEditTask = (id: string) => {
    setTask((prev) => {
      return prev.map((data) => {
        if (data.id === id) {
          data.name = editNameTask;
        }
        return data;
      });
    });
    setEditTask(false);
  };
  const deleteTask = (id: string) => {
    setTask((prev) => {
      return prev.filter((data) => data.id !== id);
    });
  };
  return (
    <div className="container">
      <div className="row mt-5 mx-auto p-2 text-center">
        <h4 className="mb-4">Task Manager</h4>
        <div className="todo-app">
          <div className="col-4">
            <InputBox addTask={addTask} setNameTask={setNameTask} nameTask={nameTask} />
          </div>
          <div className="col-7">
            <div>
              <ListTask
                doneTask={false}
                ListTask={PendingTasks}
                handleChangeCheckBox={handleChangeCheckBox}
                //handleEditTask={handleEditTask}
                setEditTask={setEditTask}
                editTask={editTask}
                setEditNameTask={setEditNameTask}
                submitEditTask={submitEditTask}
                deleteTask={deleteTask}
              />
            </div>
            <div className="mb-2">
              <ListTask
                doneTask={true}
                ListTask={DoneTasks}
                handleChangeCheckBox={handleChangeCheckBox}
                //handleEditTask={handleEditTask}
                setEditTask={setEditTask}
                editTask={editTask}
                setEditNameTask={setEditNameTask}
                submitEditTask={submitEditTask}
                deleteTask={deleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
