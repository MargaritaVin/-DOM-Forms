const form = document.querySelector('form');
const button = document.querySelector('button');
const text = document.querySelector('input');
const list = document.getElementById('list');
const btn = document.querySelector('.btnDelete');
const checkbox = document.querySelector('.checkbox');
console.log(btn)


form.onsubmit = (event) => {
    event.preventDefault();
    if (text.value.trim().length !== 0) {
        list.append(
            createTodo(text.value),
            );
        text.value = '';
        return
    } else {
        text.classList.add("error");
        list.innerHTML = "Please, enter text";
        return
    }
};

const createTodo = (value) => {
    let li = document.createElement('li');
    let liButton = document.createElement('button');
    let checkbox = document.createElement('INPUT');
    checkbox.setAttribute("type", "checkbox");
    liButton.innerHTML = "Delete";
    liButton.className = "btnDelete";
    li.prepend(checkbox);
    li.append(value, liButton);
    return li;
};

// const createTodo = (domNode) => {
//     let li = document.createElement('li');
//     li.append(domNode);
//     return li;
// };

// const addTodo = () => {
//     let liButton = document.createElement('button');
//     liButton.innerHTML = "Delete";
//     liButton.className = "btnDelete";
//     const a = createTodo(text.value).append(liButton);
//     const a = createTodo(liButton); // ??
//     return a
// }

text.oninput = () => {
    const isErrorField = text.classList.contains("error");
    if (isErrorField) {
        text.classList.remove("error");
        list.innerHTML = "";
    }
};

list.addEventListener("click", (event) => {
    const isDeleteButton = event.target.className === "btnDelete";
    if (isDeleteButton) {
        const liContentBlock = event.target.closest("li");
        liContentBlock.remove();
    }
});


// checkbox.onchange = (event) => {
//     const isAccepted = event.target.checked;
//     btn.disabled = !isAccepted;
//   };
