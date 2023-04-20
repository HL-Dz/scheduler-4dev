import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { tasks } from "../mockData/tasks";

export type ITask = {
  id: string;
  status: number;
  priority: number;
  title: string;
  description: string;
  schedule: {
    creation_time: string;
  };
  author_name: string;
};

export type TasksState = {
  list: ITask[];
  error: string | null;
  loading: boolean;
  selectedTask: ITask | null;
};

const initialState: TasksState = {
  list: [],
  error: null,
  loading: false,
  selectedTask: null,
};

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:5000/api/tasks");
      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export const createTask = createAsyncThunk(
  "tasks/createTask",
  async function (task, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      dispatch(addNewTask(data));
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask(state, action) {
      state.list.push(action.payload);
    },
    addSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
    resetSelectedField(state, action) {
      state.selectedTask = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export const { addSelectedTask, resetSelectedField, addNewTask } =
  taskSlice.actions;

export default taskSlice.reducer;
