document.addEventListener("DOMContentLoaded", function() {
  
  const header = document.createElement("header");
  header.innerHTML = '<h1>Mobile Navigation</h1>';
  document.body.prepend(header);

  const footer = document.createElement("footer");
  footer.innerHTML = '<h2>Created By Mohammad Shan</h2>';
  document.body.appendChild(footer);

  const contents = document.querySelectorAll(".content");
  const listItems = document.querySelectorAll("nav ul li");

  const hideAllContents = () => {
    contents.forEach((content) => content.classList.remove("show"));
  };

  const hideAllItems = () => {
    listItems.forEach((item) => item.classList.remove("active"));
  };
  listItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      hideAllContents();
      hideAllItems();
      item.classList.add("active");
      contents[index].classList.add("show");
    });
  });
});


