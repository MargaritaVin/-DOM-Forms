const form = document.querySelector('form')
const button = document.querySelector('button')
const text = document.querySelector('input')
const list = document.getElementById('list')


form.onsubmit = (event) => {
    event.preventDefault();
    if (text.value.trim().length !== 0) {
        let li = document.createElement('li');
        let liButton = document.createElement('button');
        liButton.innerHTML = "Delete";
        liButton.className = "btnDelete"
        li.append(text.value, liButton);
        list.append(li);
        text.value = '';
        return
    } else {
        text.classList.add("error");
        list.innerHTML = "Please, enter text";
        return
    }
};

text.oninput = () => {
    const isErrorField = text.classList.contains("error");
    if (isErrorField) {
        text.classList.remove("error")
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

