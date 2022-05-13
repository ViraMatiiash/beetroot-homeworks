// ! 1. Створити HTML-сторінку для відображення/редагування тексту.
// При відкритті сторінки текст відображається за допомогою тега div. При натисканні на кнопку з'являється textarea, зе при одному кліку знову div, а після цього інпут.

const MODE = {
  // Створюємо колекцію із двома варіантами розвитку подій.
  STATIC: 'static', // Статичний стан - коли відкриваємо сторіку.
  STATIC_TWO: 'static-two',
  INPUT: 'input',
  TEXTAREA: 'textarea', // Стан, на який ми будемо міняти статичний.
};

let activeMode = MODE.STATIC; // Активний стан

const changeMode = () => {
  switch (activeMode) {
    case MODE.STATIC: {
      activeMode = MODE.TEXTAREA;
      const block = document.getElementById('js-change');
      const blockText = block.innerText;
      block.innerText = '';
      const textarea = document.createElement('textarea');
      textarea.id = 'js-textarea';
      textarea.value = blockText; // Якщо зробити textarea.innerText, то запише текст між тегами textarea, але працювати буде
      block.appendChild(textarea);
      break;
    }
    case MODE.TEXTAREA: {
      activeMode = MODE.STATIC_TWO;
      const text = document.getElementById('js-textarea').value;
      document.getElementById('js-textarea').remove();
      document.getElementById('js-change').innerText = text;
      break;
    }
    case MODE.STATIC_TWO: {
      activeMode = MODE.INPUT;
      const block = document.getElementById('js-change');
      const blockText = block.innerText;
      block.innerText = '';
      const input = document.createElement('input');
      input.id = 'js-input';
      input.value = blockText; // Якщо зробити textarea.innerText, то запише текст між тегами textarea, але працювати буде
      block.appendChild(input);
      break;
    }
    case MODE.INPUT: {
      activeMode = MODE.STATIC;
      const text = document.getElementById('js-input').value;
      document.getElementById('js-input').remove();
      document.getElementById('js-change').innerText = text;
      break;
    }
  }
};

document.getElementById('js-toggle').addEventListener('click', changeMode);
