const API_URL = "/api/todos/";

export function getTodos() {
  return fetch(API_URL)
    .then(res => {
      if (!res.ok) throw new Error("Network resposne not ok");
      return res.json();
    })
    .catch(err => err);
}

export function createTodo(todo) {
  return fetch(API_URL, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ name: todo })
  })
    .then(res => {
      if (!res.ok) throw new Error("Network resposne not ok");
      return res.json();
    })
    .catch(err => err);
}

export function deleteTodo(id) {
  const deleteUrl = `${API_URL}${id}`;
  return fetch(deleteUrl, {
    method: "DELETE"
  })
    .then(res => {
      if (!res.ok) throw new Error("Network resposne not ok");
      return res.json();
    })
    .catch(err => err);
}

export function toggleTodo(todo) {
  const updateUrl = `${API_URL}${todo._id}`;
  fetch(updateUrl, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ completed: !todo.completed })
  })
    .then(res => {
      if (!res.ok) throw new Error("Network resposne not ok");
      return res.json();
    })
    .catch(err => err);
}
