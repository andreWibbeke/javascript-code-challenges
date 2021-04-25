//  General code structure

// 1. Create a function that filters the list for vegetarian items

// 2. Create a function that takes in an array and returns a list of DOM list items

// 3. Create a function that takes in an array of list items and returns an unordered list

// --> createUnorderedList(createListItems(dishes));

// TO-DO: write test first (fails) and then create code (after which the test passes)

function filterList(list, filterTerm) {
  return list.filter((item) => item[filterTerm]);
}

function createListItems(list) {
  return list.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;

    return listItem;
  });
}

function createUnorderedList(listItemList) {
  const unorderedList = document.createElement("ul");
  unorderedList.append(...listItemList);

  return unorderedList;
}

function appendAsChild(childElement, parentElement) {
  parentElement.append(childElement);
}

export { filterList, createListItems, createUnorderedList, appendAsChild };
