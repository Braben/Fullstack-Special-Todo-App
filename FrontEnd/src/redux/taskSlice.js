import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API endpoints
const API_URL = "http://localhost:8000";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch(`${API_URL}/todos`);
  return (await response.json()).data;
});

export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await fetch(`${API_URL}/createtodos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return (await response.json()).data;
});

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    await fetch(`${API_URL}/delete/${taskId}`, { method: "DELETE" });
    return taskId;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task._id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
