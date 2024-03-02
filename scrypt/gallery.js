document.addEventListener('DOMContentLoaded', function() {
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
      });

      moreBtn.style.display = 'none'; // Скрыть кнопку "Еще"
      hideBtn.style.display = 'inline-block'; // Показать кнопку "Скрыть"
    }

    // Функция для скрытия дополнительных изображений
    function hideImages() {
      const additionalImages = document.querySelectorAll('.additional');
      additionalImages.forEach(image => {
        gallery.removeChild(image);
      });

      moreBtn.style.display = 'inline-block'; // Показать кнопку "Еще"
      hideBtn.style.display = 'none'; // Скрыть кнопку "Скрыть"
    }

    // Обработчики событий для кнопок
    moreBtn.addEventListener('click', loadMoreImages);
    hideBtn.addEventListener('click', hideImages);
  });