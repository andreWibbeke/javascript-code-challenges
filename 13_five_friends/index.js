import users from "./modules/getUsers.js";

function extractThumbnails() {
  return users.results.map((user) => user.picture.thumbnail);
}

function createThumbnails(thumbnails) {
  return thumbnails.map((thumbnail) => {
    const img = document.createElement("img");
    img.src = thumbnail;

    return img;
  });
}

function appendChildren(children, parentElement) {
  parentElement.append(...children);
}

appendChildren(
  createThumbnails(extractThumbnails()),
  document.querySelector("#friends")
);
