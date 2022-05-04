const btn = document.getElementById('js-btn');
const list = document.getElementById('js-shopping-list');

const createEl = (element) => document.createElement(element);

const addNew = () => {
  const inputValue = document.getElementById('js-list-input').value;
  if (inputValue) {
    if (inputValue.length >= 5) {
      const listItemContainer = createEl('div');
      listItemContainer.classList.add('shopping-list__item-container');
      const listItem = createEl('li');
      listItem.classList.add('shopping-list__item');
      listItem.innerText = inputValue;
      listItem.addEventListener('click', () => {
        listItem.classList.toggle('clicked');
      });

      const removeLi = createEl('a');
      removeLi.classList.add('shopping-list__remove');
      removeLi.innerText = 'Remove';
      removeLi.addEventListener('click', () => {
        listItem.remove();
        removeLi.remove();
      });

      list.append(listItemContainer);
      listItemContainer.append(listItem);
      listItemContainer.append(removeLi);
      document.getElementById('js-list-input').value = '';
    } else {
      alert('Type at least 5 characters!');
    }
  } else {
    alert('Type something into the line!');
  }
};

btn?.addEventListener('click', addNew);

document.getElementById('js-list-input').addEventListener('keyup', (event) => {
  if (event.keyCode === 13) addNew();
});
