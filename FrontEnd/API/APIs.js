// import axios from "axios";
// //backend api
// const API_URL = "http://localhost:8000";

// //get all todos
// const getTodos = async () => {
//   // try {

//   //   const { data } = await axios.get(API_URL);
//   //   return data;
//   // } catch (error) {
//   //   console.log(error);
//   // }
//   try {
//     const { data } = await axios.get(API_URL);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// //create todo
// const createTodo = async (todo) => {
//   try {
//     const { data } = await axios.post(API_URL, todo);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// //update todo
// const updateTodo = async (todoId, updatedTodo) => {
//   try {
//     const { data } = await axios.put(`${API_URL}/${todoId}`, updatedTodo);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// //delete todo
// const deleteTodo = async (todoId) => {
//   try {
//     const { data } = await axios.delete(`${API_URL}/${todoId}`);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { getTodos, createTodo, updateTodo, deleteTodo };
