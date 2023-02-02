import Remove from "./remove.png";
import Edit from "./edit.png";

export default class Notes {
  static list = [];

  constructor(title, text) {
    this.title = title;
    this.text = text;

    Notes.list.push({ title, text });
    Notes.storeData();

    this.generateNoteDom();
  }

  static storeData() {
    localStorage.setItem("notes", JSON.stringify(Notes.list));
  }

  static getStorageData() {
    Notes.list = [];

    const notesList = JSON.parse(localStorage.getItem("notes"));
    if (notesList !== null) {
      notesList.forEach((key) => new Notes(key.title, key.text));
    }
  }

  generateNoteDom() {
    const noteContainer = document.createElement("div");
    noteContainer.className = "note-item";
    document.querySelector(".notes-page").appendChild(noteContainer);

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = this.title;
    noteContainer.appendChild(title);

    const text = document.createElement("div");
    text.className = "text";
    text.innerText = this.text;
    noteContainer.appendChild(text);

    const edit = document.createElement("img");
    edit.className = "edit";
    edit.src = Edit;
    noteContainer.appendChild(edit);

    const remove = document.createElement("img");
    remove.className = "remove";
    remove.src = Remove;
    noteContainer.appendChild(remove);

    title.addEventListener("click", () => {
      // pop up window shows details
    });

    edit.addEventListener("click", () => {
      this.editForm(title, text);
      Notes.storeData();
    });

    remove.addEventListener("click", () => {
      this.deleteDom(noteContainer);
      Notes.storeData();
    });
  }

  editForm(titleDom, textDom) {
    document.querySelector(".edit-note-window").style.display = "block";
    document.querySelector(".add-window").style.display = "none";

    Notes.generateForm();

    const saveBtn = document.querySelector(".save");
    const closeBtn = document.querySelector(".close-edit");
    const titleForm = document.getElementById("edit-title");
    const textForm = document.getElementById("edit-text");
    const editedTitle = this.title;

    titleForm.value = this.title;
    textForm.value = this.text;

    saveBtn.addEventListener("click", () => {
      const index = Notes.list.findIndex((key) => key.title === editedTitle);

      console.log(Notes.list[index]);
      Notes.list[index].title = titleForm.value;
      Notes.list[index].text = textForm.value;

      titleDom.innerText = titleForm.value;
      textDom.innerText = textForm.value;

      Notes.storeData();
      Notes.removeForm();
    });

    closeBtn.addEventListener("click", () => {
      Notes.removeForm();
    });
  }

  static generateForm() {
    const form = document.createElement("form");
    form.className = "edit-note-form";
    document.querySelector(".edit-note-window").appendChild(form);

    const closeBtn = document.createElement("div");
    closeBtn.className = "close-edit";
    closeBtn.innerText = "X";
    form.appendChild(closeBtn);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "edit-title";
    input.name = "title";
    input.placeholder = "Title";
    input.required = true;
    form.appendChild(input);

    const text = document.createElement("textarea");
    text.name = "text";
    text.id = "edit-text";
    text.cols = "30";
    text.rows = "6";
    text.placeholder = "Description";
    form.appendChild(text);

    const saveBtn = document.createElement("div");
    saveBtn.className = "save";
    saveBtn.innerText = "Save Changes";
    form.appendChild(saveBtn);
  }

  static removeForm() {
    document.querySelector(".edit-note-form").remove();
  }

  deleteDom(item) {
    delete this.title;
    delete this.text;

    const index = Notes.list.findIndex((key) => key.title === undefined);
    Notes.list.splice(index, 1);

    item.remove();
  }
}
