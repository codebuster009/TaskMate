import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import React from "react";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [task, setTask] = React.useState([]);
  const toogle = (e) => {
    setInputText(e.target.value);
  };
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTask((prevTask) => [...prevTask, newTask]);
    setInputText("");
  };
  const handleCompleted = (id) => {
    setTask((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const allTasksCompleted =
    task.length > 0 && task.every((tas) => tas.completed);


  return (
    <div className="parent-div">
      <Header task = {task}/>
      <Input toogle={toogle} inputText={inputText} addTask={addTask} />
      <ul className="parent-ul">
        {task.map((task) => {
          return (
            <li
              key={task.id}
              style={{
                color: task.completed && "red",
                textDecoration: task.completed && "line-through",
              }}
              onClick={() => handleCompleted(task.id)}
            >
              {" "}
              {task.text}
            </li>
          );
        })}
      </ul>
      {allTasksCompleted && (
        <p className="congratulations-message">
          Congratulations🚀, You have accomplished all of today's tasks with
          success.
        </p>
      )}
    </div>
  );
}

export default App;
