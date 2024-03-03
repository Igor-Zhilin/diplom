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
      img.style.width = '500px'; /* Измененная ширина */
      img.style.height = '300px'; /* Измененная высота */
      img.style.margin = '10px';
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
  
  cityName.textContent = city; // Устанавливаем название города в модальном окне

  // Добавляем информацию о городе
  switch(city) {
    case 'Белгород':
      cityInfo.textContent = "Белгород — административный центр Белгородской области Российской Федерации, один из крупнейших городов на Центральном Черноземье.";
      break;
    case 'Санкт-Петербург':
      cityInfo.textContent = "Санкт-Петербург — второй по численности населения город России, крупнейший на северо-западе страны, административный центр Северо-Западного федерального округа.";
      break;
    case 'Воронеж':
      cityInfo.textContent = "Воронеж — город в России, административный центр Воронежской области и Воронежского района.";
      break;
    case 'Калининград':
      cityInfo.textContent = "Калининград — город в России, административный центр Калининградской области и Калининградского района.";
      break;
    default:
      cityInfo.textContent = "Информация о городе временно недоступна.";
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