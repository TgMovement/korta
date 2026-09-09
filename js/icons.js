/* Локальные иконки Lucide (ISC) — только те 17, что реально используются на сайте.
   Заменяет CDN unpkg.com/lucide: 5 КБ вместо 358 КБ и без внешней зависимости. */
(function () {
  var P = {
  "arrow-right": "<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />",
  "calendar": "<path d=\"M8 2v4\" /> <path d=\"M16 2v4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /> <path d=\"M3 10h18\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <polyline points=\"12 6 12 12 16 14\" />",
  "compass": "<path d=\"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z\" /> <circle cx=\"12\" cy=\"12\" r=\"10\" />",
  "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /> <polyline points=\"7 10 12 15 17 10\" /> <line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />",
  "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /> <path d=\"M2 12h20\" />",
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /> <circle cx=\"12\" cy=\"10\" r=\"3\" />",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" />",
  "shopping-cart": "<circle cx=\"8\" cy=\"21\" r=\"1\" /> <circle cx=\"19\" cy=\"21\" r=\"1\" /> <path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\" />",
  "target": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <circle cx=\"12\" cy=\"12\" r=\"6\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" />",
  "trending-up": "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\" /> <polyline points=\"16 7 22 7 22 13\" />",
  "trophy": "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\" /> <path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\" /> <path d=\"M4 22h16\" /> <path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\" /> <path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\" /> <path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /> <path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />"
};
  function render(root) {
    (root || document).querySelectorAll('[data-lucide]').forEach(function (el) {
      var d = P[el.getAttribute('data-lucide')];
      if (!d) return;
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('class', el.className);
      svg.innerHTML = d;
      el.replaceWith(svg);
    });
  }
  window.kortaIcons = render;
  /* Совместимость: страницы вызывают lucide.createIcons() из инлайн-скрипта,
     поэтому оставляем тот же интерфейс — разметку менять не нужно. */
  window.lucide = window.lucide || { createIcons: function () { render(); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { render(); });
  else render();
})();
