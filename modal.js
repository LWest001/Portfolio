const modal = document.querySelector(".modal");
const projectContainers = document.getElementsByClassName("projectContainer");
const xButton = modal.querySelector(".xOut");

function createModal(event) {
  modal.style.visibility = "visible";
  let projectTitle =
    event.currentTarget.parentElement.querySelector("h4").innerHTML;
  let projectDescription =
    event.currentTarget.parentElement.querySelector("p").innerHTML;
  let projectImage = event.currentTarget.querySelector("img").src;
  modal.querySelector("img").src = "./img/screen1.jpg";
  modal.querySelector("h3").innerHTML = projectTitle;
  modal.querySelector(".projectDescription").innerHTML = projectDescription;
  modal.querySelector("img").src = projectImage;
}

function closeModal(event) {
  modal.style.visibility = "hidden";
}

for (let i = 0; i < projectContainers.length; i++) {
  projectContainers[i].querySelector("a").onmousedown = createModal;
}

xButton.onmousedown = closeModal;
