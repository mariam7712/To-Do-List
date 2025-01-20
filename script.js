$(".btn").click(function () {
  var inputValue = $(".input").val();
  if (inputValue) {
    var paragraph = $("<p></p>").addClass("p").text(inputValue);
    var checkbox = $("<input type='checkbox'>");
    var todoDiv = $("<div></div>").addClass("do");

    todoDiv.append(checkbox).append(paragraph);

    $(".todo").append(todoDiv);

    $(".input").val("");
  }
});

$(".todo").on("change", "input[type='checkbox']", function () {
  var todoDiv = $(this).closest(".do");
  if ($(this).prop("checked")) {
    var trashIcon = $("<i></i>").addClass("fa-solid fa-trash fa-bounce fa-xs");
    todoDiv.append(trashIcon);
  } else {
    todoDiv.find("i").remove();
  }
});

$(".todo").on("click", "i", function () {
  var confirmDelete = confirm(
    "Are you sure you want to delete this to-do item?"
  );

  if (confirmDelete) {
    var todoDiv = $(this).closest(".do");
    todoDiv.remove();
  }
});
