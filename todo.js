const prompt = require('prompt-sync')();
let tasks = [];
let isRunning = true;

while (isRunning) {
  let d = prompt("Выбери действие: 1-Новая 2-Список 3-Выход: ")
  if (d === "1") {
    let vvod = prompt("Введи задачу: ")
    tasks.push(vvod)
  } else if (d === "2") {
    console.log(tasks)
  } else if (d === "3") {
    isRunning = false;
    console.log("Выход из программы");
  } else {
    console.log("Неверная команда!");
  }
}
