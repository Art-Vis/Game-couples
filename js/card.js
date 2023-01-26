export default class Card {
  _open = false
  _success = false

  constructor(container, number, action) {
    this.card = document.createElement('div'); // карточка является свойством экземпляра класса
    this.card.classList.add('card');
    this.card.textContent = number;
    this.number = number;

    this.card.addEventListener('click', () => { // создаем событие на клик , открытие карточки
      if (this.open == false && this.success == false) { // если open и success == false , то мы не можем повторно кликать на карточку
        this.open = true;
        action(this) // передаем весь экземпляр класса в функцию actio(this) 'call back'
      }
    });
    container.append(this.card); // добавляем в элемент container нашу карточку card
  }

  set open(value) {
    this._open = value;
    value ? this.card.classList.add('open') : this.card.classList.remove('open'); // используем тернарный оператор , аналогичный код ниже.
    // this._open = value;
    // if (value == true) {
    //   this.card.classList.add('open');
    // } else {
    //   this.card.classList.remove('open');
    // }
  }

  get open() { // возвращает значение
    return this._open;
  }

  set success(value) {
    this._success = value;
    value ? this.card.classList.add('success') : this.card.classList.remove('success');
  }

  get success() { // возвращает значение
    return this._success;
  }
} // создаем обертку











// function name(name) {
// console.log(name)
// };

// function age(age) {
//   console.log(age);
// }

// function hello (fn) {  // call back функция , можем передавать значение одной функции внутрь другой
//   console.log('hello');
//   fn('18') // даем значение аргументу
// };
// hello(age) // если тут используется аргумент функции name(name) , а если age(age)
// // в консоли мы получим hello Artem . то в консоли получим hello 18


// class Card {
//   x = 2; // свойство. свойство не должно называться так же как сеттеры и геттеры
//   _y = 0; // свойство. свойство не должно называться так же как сеттеры и геттеры
//   qub() { // метод Класса
//     console.log(this.x*this.x); // this объект экземпляра класса
//   }

//   set y(value) { // сеттер при установке
//     this._y = value;
//   }
//   get y() { // геттер при получении
//     return 'Игрик: ' + this._y;
//   }
// } // создаем обертку
