document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const moreBtn = document.getElementById('moreBtn');
  const hideBtn = document.getElementById('hideBtn');

 // Функция для загрузки дополнительных изображений
function loadMoreImages() {
  const additionalImages = [
      './images/image7.jpg',
      './images/image8.jpg',
      './images/image9.jpg',
      './images/image10.jpg',
      './images/image11.jpg'
      // Добавьте пути к дополнительным изображениям здесь
  ];

  additionalImages.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = 'Дополнительное изображение';
      img.classList.add('additional'); // Добавляем класс для дополнительных изображений
      gallery.appendChild(img);

      // Задаем таймаут для задержки и плавного появления
      setTimeout(() => {
          img.classList.add('visible');
      }, 10);
  });

  moreBtn.style.display = 'none'; // Скрыть кнопку "Еще"
  hideBtn.style.display = 'inline-block'; // Показать кнопку "Скрыть"
  hideBtn.style.margin = '10px auto'; // Установить автоматические отступы по верхнему и нижнему краям
}

  // Функция для скрытия дополнительных изображений
  function hideImages() {
    const additionalImages = document.querySelectorAll('.additional');
    additionalImages.forEach(image => {
      image.classList.remove('visible');
      setTimeout(() => {
        gallery.removeChild(image);
      }, 500); // Удаление изображения после завершения анимации
    });

    moreBtn.style.display = 'inline-block'; // Показать кнопку "Еще"
    hideBtn.style.display = 'none'; // Скрыть кнопку "Скрыть"
  }

  // Обработчики событий для кнопок
  moreBtn.addEventListener('click', loadMoreImages);
  hideBtn.addEventListener('click', hideImages);
});

function openModal(city) {
  const modal = document.getElementById("myModal");
  const cityName = document.getElementById("cityName");
  const cityInfo = document.getElementById("cityInfo");
  const cityMap = document.getElementById("cityMap");
  
  cityName.textContent = city; // Устанавливаем название города в модальном окне

  // Добавляем информацию о городе
  switch(city) {
    case 'Белгород':
      cityInfo.innerHTML = `
      <p><strong>Адрес:</strong><br>Улица 50-летия Белгородской области, 12а</p>
      <p><strong>Телефон:</strong><br>+7 (904) 088-88-88</p>
      <p><strong>График работы:</strong><br>ВТ-ПТ: с 10 до 18 ч.<br>СБ: с 10 до 14 ч.<br>ВС-ПН: выходной</p>`;
      cityInfo.style.maxWidth = "700px"; // Установка максимальной ширины текста
      cityMap.innerHTML = '<embed src="https://yandex.ru/map-widget/v1/?um=constructor%3A9452beb4756ad676ebfc3efdea140aae5f08500aac1c0ecce585c0334eb18286&amp;source=constructor" style="width:100%;height:300px"></embed>';
      break;
    case 'Санкт-Петербург':
      cityInfo.innerHTML = `
      <p><strong>Адрес:</strong><br>4-я линия Васильевского острова, 45</p>
      <p><strong>Телефон:</strong><br>+7 (904) 044-44-44</p>
      <p><strong>График работы:</strong><br>ВТ-ПТ: с 10 до 18 ч.<br>СБ: с 11 до 18 ч.<br>ВС-ПН: выходной</p>`;
      cityInfo.style.maxWidth = "700px"; // Установка максимальной ширины текста
      cityMap.innerHTML = '<embed src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b4088f179339201531fe55390abb5da6d8aba7918121a963666d59af28c45c0&amp;source=constructor" style="width:100%;height:300px"></embed>';
      break;
    case 'Воронеж':
      cityInfo.innerHTML = `
      <p><strong>Адрес:</strong><br>Московский проспект, 6</p>
      <p><strong>Телефон:</strong><br>+7 (996) 436-36-36</p>
      <p><strong>График работы:</strong><br>Ежедневно с 10 до 19 ч.</p>`;
      cityInfo.style.maxWidth = "700px"; // Установка максимальной ширины текста
      cityMap.innerHTML = '<embed src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b4088f179339201531fe55390abb5da6d8aba7918121a963666d59af28c45c0&amp;source=constructor" style="width:100%;height:300px"></embed>';
      break;
    case 'Калининград':
      cityInfo.innerHTML = `
      <p><strong>Адрес:</strong><br>Улица 9 Апреля, 5</p>
      <p><strong>Телефон:</strong><br>+7 (966) 039-39-39</p>
      <p><strong>График работы:</strong><br>Ежедневно с 10 до 19 ч.</p>`;
      cityInfo.style.maxWidth = "700px"; // Установка максимальной ширины текста
      cityMap.innerHTML = '<embed src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b4088f179339201531fe55390abb5da6d8aba7918121a963666d59af28c45c0&amp;source=constructor" style="width:100%;height:300px"></embed>';
      break;
    // Для других городов аналогично добавьте нужные информацию и embed
    default:
      cityInfo.textContent = "Информация о городе временно недоступна.";
      cityInfo.style.maxWidth = "700px"; // Установка максимальной ширины текста
      cityMap.innerHTML = "Карта временно недоступна.";
  }

  modal.style.display = "block"; // Отображаем модальное окно
}

// Функция для закрытия модального окна
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none"; // Скрываем модальное окно
}

// Закрытие модального окна при щелчке вне его области
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}