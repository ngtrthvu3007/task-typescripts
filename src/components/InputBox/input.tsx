import { useState } from "react";
interface inputBoxProps {
  addTask: (event: React.FormEvent<HTMLFormElement>, name: string) => void;
  setNameTask: React.Dispatch<React.SetStateAction<string>>;
  nameTask: string;
}

const InputBox = (props: inputBoxProps) => {
  const { addTask, setNameTask, nameTask } = props;
  return (
    <div className="mt-3">
      <h5>Nhập Task</h5>
      <div className="row d-flex position-relative mt-3 ">
        <form onSubmit={(e) => addTask(e, nameTask)}>
          <input
            className="input-task"
            name="name"
            type="text"
            placeholder="Nhập task vào đêiiii"
            value={nameTask}
            onChange={(e) => setNameTask(e.target.value)}
          />
          <span>
            <button className="icon-add">✔</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default InputBox;
