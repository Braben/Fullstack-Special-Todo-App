import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API endpoints
const API_URL = "http://localhost:8000";

// Fetch tasks from the API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch(`${API_URL}/todos`);
  const data = await response.json();
  console.log("Fetched Tasks:", data); // Debugging
  return data; // Ensure this matches the expected format
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

export const editTask = createAsyncThunk("tasks/editTask", async (task) => {
  const response = await fetch(`${API_URL}/todos/${task._id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return (await response.json()).data;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    status: "idle",
    isEditModalOpen: false,
    taskToEdit: null,
  },
  reducers: {
    setEditModalOpen: (state, action) => {
      state.isEditModalOpen = true;
      state.taskToEdit = action.payload;
    },
    setEditModalClose: (state) => {
      state.isEditModalOpen = false;
      state.taskToEdit = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        console.log("Fetched Tasks:", action.payload); // Debugging
        state.list = action.payload.data;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (task) => task._id === action.payload._id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
        state.isEditModalOpen = false;
        state.taskToEdit = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task._id !== action.payload);
      });
  },
});
export const { setEditModalOpen, setEditModalClose } = taskSlice.actions;
export default taskSlice.reducer;
