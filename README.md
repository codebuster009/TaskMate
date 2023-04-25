# Getting Started with Create React App
TaskMate

TaskMate is a simple web app created using React.js that allows users to add, complete and count tasks.
Installation

To run TaskMate on your local machine, follow these steps:

    Clone the repository to your local machine.
    In the project directory, run npm install to install the required dependencies.
    Run npm start to start the development server.
    Open http://localhost:3000 to view TaskMate in your browser.

Features

TaskMate provides the following features:

    Add tasks: Users can add tasks by entering task details in the input field and clicking the "Add Task" button.
    Complete tasks: Users can mark tasks as complete by clicking on the task. Completed tasks are displayed with a line-through effect.
    Count tasks: TaskMate displays the number of completed and uncompleted tasks in the header of the app.
    Congratulate message: TaskMate displays a congratulatory message when all tasks have been completed.

Folder Structure

The TaskMate project has the following folder structure:

css

TaskMate
│   README.md
│   package.json
│   ...
│
└───src
│   │   index.js
        App.js
│   │   ...
│   └───components
│       │   Header.js
│       │   Input.js
│       │   ...
│   
└───public
    │   index.html
    │   ...

The src folder contains the main application code and the public folder contains the HTML file for the application.
Usage

To use TaskMate, follow these steps:

    Enter task details in the input field and click the "Add Task" button to add a new task.
    Click on a task to mark it as complete. Completed tasks are displayed with a line-through effect.
    View the number of completed and uncompleted tasks in the header of the app.
    If all tasks have been completed, a congratulatory message will be displayed below the task list.

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
License

MIT

