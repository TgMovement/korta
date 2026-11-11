'use strict';

const brief = document.getElementById('business-brief');
const format = document.getElementById('business-format');
const size = document.getElementById('business-size');
const date = document.getElementById('business-date');

if (brief && format && size && date) {
  document.getElementById('business-prepare').disabled = false;
  document.querySelectorAll('[data-format]').forEach((link) => {
    link.addEventListener('click', () => {
      format.value = link.dataset.format;
    });
  });

  brief.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!brief.reportValidity()) return;

    const chosenFormat = format.options[format.selectedIndex].text;
    const chosenDate = date.value ? date.value.split('-').reverse().join('.') : 'Пока не определились';
    const subject = 'Падел для компании — запрос в Korta';
    const body = [
      'Здравствуйте! Хотим обсудить программу для нашей компании.',
      '',
      `Формат: ${chosenFormat}`,
      `Участников: ${size.value}`,
      `Желаемая дата: ${chosenDate}`,
      'Город: Санкт-Петербург',
      '',
      'Название компании:',
      'Опыт участников:',
      'Удобный район и время:',
      'Ориентир по бюджету:',
      'Как со мной связаться:'
    ].join('\n');

    window.location.href = `mailto:hello@korta.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
