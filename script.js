function addItem(e) {
  e.preventDefault();

  let text = document.getElementById("todo-input");

  db.collection("todo-items").add({
    text: text.value,
    status: "active",
  });

  text.value = "";
}

function getItems() {
  db.collection("todo-items").onSnapshot((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push(doc.data());
    });
  });
}

getItems();
