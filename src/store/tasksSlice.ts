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
  modalType: "new_task" | "update_task" | null;
};

const initialState: TasksState = {
  list: [],
  error: null,
  loading: false,
  selectedTask: null,
  modalType: null,
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
export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTaks",
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        return rejectWithValue("Can't delete task. Server error.");
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateTaskAsync = createAsyncThunk(
  "tasks/updateTaskAsync",
  async function (task, { rejectWithValue }) {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        return rejectWithValue("Can't delete task. Server error.");
      }

      const data = await response.json();
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
    resetSelectedTask(state) {
      state.selectedTask = null;
    },
    setModalType(state, action) {
      state.modalType = action.payload;
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
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task.id !== action.payload.id);
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        // @ts-ignore
        state.list = state.list.map((el) => {
          if (el.id === action.payload.id) {
            el = action.payload;
          } else {
            return el;
          }
        });
      });
  },
});

export const { addSelectedTask, resetSelectedTask, addNewTask, setModalType } =
  taskSlice.actions;

export default taskSlice.reducer;
