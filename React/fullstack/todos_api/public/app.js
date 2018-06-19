// ready get data

$(document).ready(function() {
  $.getJSON("/api/todos").done(addTodos);

  $("#todoInput").keypress(function(e) {
    if (e.which === 13) {
      createTodo();
    }
  });

  $(".list").on("click", "span", function(e) {
    // stop the click bubbling - clicking on span won't run the li click as well
    e.stopPropagation();
    deleteTodo($(this).parent());
  });

  $(".list").on("click", "li", function() {
    updateTodo($(this));
  });
});

function updateTodo(todo) {
  let isDone = !todo.data("completed");
  $.ajax({
    url: `/api/todos/${todo.data("id")}`,
    method: "PUT",
    data: { completed: isDone }
  })
    .then(function(updatedTodo) {
      todo.toggleClass("done");
      todo.data("completed", isDone);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function deleteTodo(todo) {
  const todoId = todo.data("id");
  $.ajax({
    url: `/api/todos/${todoId}`,
    method: "DELETE"
  })
    .done(function() {
      todo.remove();
    })
    .fail(function(err) {
      console.log(err);
    });
}

function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  let newTodo = $(`<li class='task'>${todo.name} <span>X</span></li>`);
  newTodo.data("id", todo._id);
  newTodo.data("completed", todo.completed);
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}

function createTodo() {
  const usrInput = $("#todoInput").val();
  $.post("/api/todos", { name: usrInput })
    .done(function(data) {
      $("#todoInput").val("");
      addTodo(data);
    })
    .fail(function(err) {
      console.log(err);
    });
}

//  update class to done on click
