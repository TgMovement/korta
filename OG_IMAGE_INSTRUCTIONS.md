# 🖼️ Создание изображения для Open Graph

## Что нужно сделать

Для корректного отображения при шаринге ссылок в социальных сетях нужно создать изображение `og-image.jpg` размером 1200x630 пикселей.

## 🚀 Самый простой способ

### Используйте встроенный конвертер:
1. **Откройте файл `convert-svg-to-image.html` в браузере**
2. **Нажмите "Скачать как JPG"**
3. **Сохраните файл как `og-image.jpg` в корень проекта**

## 🛠️ Альтернативные способы

### Вариант 1: Онлайн конвертеры (рекомендуется)
- **Convertio**: https://convertio.co/svg-jpg/
- **CloudConvert**: https://cloudconvert.com/svg-to-jpg
- **SVG to JPG**: https://svgtojpg.com/

Просто загрузите файл `og-image.svg` и скачайте результат.

### Вариант 2: Командная строка (для разработчиков)
```bash
# Установите ImageMagick
brew install imagemagick

# Конвертируйте SVG в JPG
convert og-image.svg -background white -flatten og-image.jpg
```

### Вариант 3: Графические редакторы
- **Figma**: Импорт SVG → Экспорт в JPG (1200×630px)
- **Photoshop**: Открыть SVG → Сохранить как JPG
- **GIMP**: Импорт SVG → Экспорт в JPG

## Требования к изображению

- **Размер**: 1200x630 пикселей (соотношение 1.91:1)
- **Формат**: JPG или PNG
- **Размер файла**: до 5MB
- **Текст**: должен быть читаемым даже в маленьком размере

## После создания

1. Поместите файл `og-image.jpg` в корень проекта
2. Проверьте, что пути в HTML файлах указывают на правильное изображение
3. Протестируйте в Facebook Debugger: https://developers.facebook.com/tools/debug/
4. Протестируйте в Twitter Card Validator: https://cards-dev.twitter.com/validator
