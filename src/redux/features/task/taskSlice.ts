import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
    {
      id: "1",
      title: "Initialize Frontend",
      description: "Create Home Page, and routing",
      dueDate: "2025-01-01",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Initialize Backend",
      description: "Create Home Page, and routing",
      dueDate: "2025-01-01",
      isCompleted: false,
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => state.todo.task;

export default taskSlice.reducer;
