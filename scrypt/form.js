document.getElementById("telegramForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const optionElement = document.getElementById("option");
    const selectedOption = optionElement.options[optionElement.selectedIndex].text;
    const cityElement = document.getElementById("city");
    const selectedCity = cityElement.options[cityElement.selectedIndex].text;
    let message = "";
  
    if (selectedOption === "Ремонт ПК/Ноутбука" || selectedOption === "Задать вопрос") {
      message = "Имя: " + name + "\nНомер телефона: " + phone + "\nОпция: " + selectedOption + "\nГород: " + selectedCity + "\nСообщение: " + document.getElementById("message").value;
    } else if (selectedOption === "Сборка ПК") {
      message = "Имя: " + name + "\nНомер телефона: " + phone + "\nОпция: " + selectedOption + "\nГород: " + selectedCity + "\nСумма: " + document.getElementById("amount").value + "\nСообщение: " + document.getElementById("message").value;
    }
    
    const botToken = '6733590608:AAGS5Jsl3v3kEKwIizTr30e_T9fpXwyV7W8';
    const chatId = '1089531314';
    const url = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(message);
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("modalMessage").textContent = 'Форма обратной связи отправлена, ответим в кратчайшие сроки!';
        document.getElementById("myModal").style.display = "block";
        document.getElementById("telegramForm").reset(); // Сброс данных формы
      })
      .catch(error => {
        console.error('Ошибка при отправке сообщения:', error);
        document.getElementById("modalMessage").textContent = 'Произошла ошибка, попробуйте позже';
        document.getElementById("myModal").style.display = "block";
      });
  });
  
  // Отображаем/скрываем соответствующие поля в зависимости от выбора пользователя
  document.getElementById("option").addEventListener("change", function() {
    const option = document.getElementById("option").value;
    if (option === "1" || option === "3") {
      document.getElementById("cityContainer").style.display = "block";
      document.getElementById("messageContainer").style.display = "block";
      document.getElementById("amountContainer").style.display = "none";
    } else if (option === "2") {
      document.getElementById("cityContainer").style.display = "block";
      document.getElementById("messageContainer").style.display = "block";
      document.getElementById("amountContainer").style.display = "block";
    } else {
      document.getElementById("cityContainer").style.display = "none";
      document.getElementById("messageContainer").style.display = "none";
      document.getElementById("amountContainer").style.display = "none";
    }
  });
  // Закрываем модальное окно при клике на кнопку закрытия
  document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
  });
  
  // Закрываем модальное окно при клике вне его области
  window.addEventListener("click", function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });