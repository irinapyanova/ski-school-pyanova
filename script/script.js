const scrollBtn = document.querySelector('.scroll-btn');

function scrollToTop() {
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
}

scrollToTop();

const leadBtn = document.querySelector('.btn-lead');
const dateInfo = document.querySelector('.date-info');

function getDayInfo(date) {
  const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const daysNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const dateArr = date.split('.');
  const now = new Date (dateArr[1] + '.' + dateArr[0] + '.' + dateArr[2]);
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];
  const dateNow = now.getDate();
  const day = now.getDay();
  const dayName = daysNames[now.getDay()];

  const weekOfMonth = Math.ceil((dateNow + 6 - day)/7);

  let newDate = dayName + ', ' + weekOfMonth + ' ' + 'неделя ' + month + ' ' + year + ' года';
  dateInfo.textContent = newDate;
  console.log(newDate);
}

leadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getDayInfo('08.03.2022');
  dateInfo.style.display = 'block';
});

getDayInfo('08.03.2022');
getDayInfo('28.02.2022');
