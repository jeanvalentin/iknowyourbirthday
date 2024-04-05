
function main() {
  const now = dayjs();
  document.querySelector('#date').innerHTML = now.format('D MMMM YYYY');
  fetch('birthdays.json')
    .then(res => res.json())
    .then(data => {
      const birthdaysToday = data.filter(v => now.format('D') == v.day && now.format('M') == v.month);
      const birthdaysHtml = birthdaysToday.map(v => {
        return `<div>
          ${v.name}${v.year ? `: ${now.get('y') - v.year} (${v.year})` : ``}
          </div>`
      });
      document.querySelector('#data').innerHTML = birthdaysHtml;
    });
}
