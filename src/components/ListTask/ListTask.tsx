import { Task } from "../../@types/task.type";
interface ListTaskProps {
  doneTask: boolean;
  ListTask: Task[];
  handleChangeCheckBox: (id: string, done: boolean) => void;
  setEditTask: React.Dispatch<React.SetStateAction<boolean>>;
  editTask: boolean;
  setEditNameTask: React.Dispatch<React.SetStateAction<string>>;
  submitEditTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const ListTask = (props: ListTaskProps) => {
  const {
    doneTask,
    ListTask,
    handleChangeCheckBox,
    setEditTask,
    editTask,
    setEditNameTask,
    submitEditTask,
    deleteTask,
  } = props;
  return (
    <div className="mt-3">
      <h5>{!doneTask ? "Đang làm nè" : "Làm xong rồi"}</h5>
      <div className="mt-3">
        {ListTask.map((task) => {
          return (
            <div key={task.id} className="d-flex justify-content-center">
              <span>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={(e) => handleChangeCheckBox(task.id, e.target.checked)}
                  className="me-1"
                />
              </span>
              {editTask ? (
                <span className="d-flex">
                  <input type="text" defaultValue={task.name} onChange={(e) => setEditNameTask(e.target.value)} />
                  <span className="icon-edit" onClick={() => submitEditTask(task.id)}>
                    ✔
                  </span>
                </span>
              ) : (
                <>
                  <span className={`me-3 ms-2 fw-bold fst-italic ${task.done ? " text-success" : "text-warning"} `}>
                    {task.name}
                  </span>
                  <span className="ms-2 icon-edit" onClick={() => setEditTask(true)}>
                    ✏
                  </span>
                </>
              )}
              <span className="ms-2 icon-delete" onClick={() => deleteTask(task.id)}>
                ❌
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListTask;
