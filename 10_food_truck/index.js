import data from "./data/data.js";

function totalMenu(vendorMenus) {
  let array = [];
  for (const vendors in vendorMenus) {
    array = [...array, ...vendorMenus[vendors]];
  }

  return array;
}

function flattenMenuList(menuList) {
  return [...new Set(menuList)];
}

function createListItems(uniqueListOfMenus) {
  return uniqueListOfMenus.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
}

function appendChildren(children, parentElement) {
  parentElement.append(...children);
}

appendChildren(
  createListItems(flattenMenuList(totalMenu(data))),
  document.querySelector("#combined-menu")
);

export { totalMenu, flattenMenuList, createListItems, appendChildren };
