  var ie = 0;
  var op = 0;
  var ff = 0;
  var block; // Основний блок
  var block_r; // Блок для зміни розмірів
  var delta_w = 0; // Зміни по ширині
  var delta_h = 0; // Зміни по висоті
  /* Після завантаження сторінки */
  onload = function () {
    /* Визначаємо браузер */
    var browser = navigator.userAgent;
    if (browser.indexOf("Opera") != -1) op = 1;
    else {
      if (browser.indexOf("MSIE") != -1) ie = 1;
      else {
        if (browser.indexOf("Firefox") != -1) ff = 1;
      }
    }
    block = document.getElementById("block"); // Отримуємо основний блок
    block_r = document.getElementById("block_resize"); // Отримуємо блок для зміни размеров
    document.onmouseup = clearXY; // Ставимо обробник на відпускання кнопки мишки
    block_r.onmousedown = saveWH; // Ставимо обробник на натискання кнопки мишки
  }
  /* Функція для отримання поточних координат курсора мишки */
  function getXY(obj_event) {
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    return new Array(x, y);
  }
  function saveWH(obj_event) {
    var point = getXY(obj_event);
    w_block = block.clientWidth; // Поточна ширина блоку
    h_block = block.clientHeight; // Поточна висота блоку
    delta_w = w_block - point[0]; // Вимірюємо поточну різницю між шириною та x-координатою мишки
    delta_h = h_block - point[1]; // Вимірюємо поточну різницю між шириною та у-координатою мишки
    /* Ставим обработку движения мыши для разных браузеров */
    document.onmousemove = resizeBlock;
    if (op || ff) document.addEventListener("onmousemove", resizeBlock, false);
    return false; // Відключаємо стандартний обробник відключання мишки
  }
  /* Функція для вимірювання ширини вікна */
  function clientWidth() {
    return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
  }
  /* Функція для вимірювання висоти вікна */
  function clientHeight() {
    return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  /* При відпусканні кнопки мишки відключаємо обробник руху курсора мишки */
  function clearXY() {
    document.onmousemove = null;
  }
  function resizeBlock(obj_event) {
    var point = getXY(obj_event);
    new_w = delta_w + point[0]; // Змінюємо новий приріст по ширині
    new_h = delta_h + point[1]; // Змінюємо новий приріст по висоті
    block.style.width = new_w + "px"; // Встановлюємо нову ширину блоку
    block.style.height = new_h + "px"; // Встановлюємо нову висоту блоку
    /* Якщо блок виходить за межі екрану,то встановлюємо максимальні значення для ширини і висоти */
    if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft)  + "px";
    if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop) + "px";
  }
