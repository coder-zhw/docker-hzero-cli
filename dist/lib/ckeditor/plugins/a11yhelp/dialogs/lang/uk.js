﻿/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.plugins.setLang('a11yhelp', 'uk', {
  title: 'Спеціальні Інструкції',
  contents: 'Довідка. Натисніть ESC і вона зникне.',
  legend: [
    {
      name: 'Основне',
      items: [
        {
          name: 'Панель Редактора',
          legend:
            'Натисніть ${toolbarFocus} для переходу до панелі інструментів. Для переміщення між групами панелі інструментів використовуйте TAB і SHIFT+TAB. Для переміщення між кнопками панелі іструментів використовуйте кнопки СТРІЛКА ВПРАВО або ВЛІВО. Натисніть ПРОПУСК або ENTER для запуску кнопки панелі інструментів.',
        },
        {
          name: 'Діалог Редактора',
          legend:
            'Усередині діалогу, натисніть TAB щоб перейти до наступного елементу діалогу, натисніть SHIFT+TAB щоб перейти до попереднього елемента діалогу, натисніть ENTER щоб відправити діалог, натисніть ESC щоб скасувати діалог. Коли діалогове вікно має декілька вкладок, отримати доступ до панелі вкладок як частині діалогу можна натисканням або поєднання ALT+F10 або TAB, при цьому активні елементи діалогу будуть перебиратися з урахуванням порядку табуляції. При активній панелі вкладок, перехід до наступної або попередньої вкладці здійснюється натисканням стрілки "ВПРАВО" або стрілки "ВЛЕВО" відповідно.',
        },
        {
          name: 'Контекстне Меню Редактора',
          legend:
            'Press ${contextMenu} or APPLICATION KEY to open context-menu. Потім перейдіть до наступного пункту меню за допомогою TAB або СТРІЛКИ ВНИЗ. Натисніть ПРОПУСК або ENTER для вибору параметру меню. Відкрийте підменю поточного параметру, натиснувши ПРОПУСК або ENTER або СТРІЛКУ ВПРАВО. Перейдіть до батьківського елемента меню, натиснувши ESC або СТРІЛКУ ВЛІВО. Закрийте контекстне меню, натиснувши ESC.',
        },
        {
          name: 'Скринька Списків Редактора',
          legend:
            'Усередині списку, перехід до наступного пункту списку виконується клавішею TAB або СТРІЛКА ВНИЗ. Перехід до попереднього елемента списку клавішею SHIFT+TAB або СТРІЛКА ВГОРУ. Натисніть ПРОПУСК або ENTER, щоб вибрати параметр списку. Натисніть клавішу ESC, щоб закрити список.',
        },
        {
          name: 'Шлях до елемента редактора',
          legend:
            'Натисніть ${elementsPathFocus} для навігації між елементами панелі. Перейдіть до наступного елемента кнопкою TAB або СТРІЛКА ВПРАВО. Перейдіть до попереднього елемента кнопкою SHIFT+TAB або СТРІЛКА ВЛІВО. Натисніть ПРОПУСК або ENTER для вибору елемента в редакторі.',
        },
      ],
    },
    {
      name: 'Команди',
      items: [
        { name: 'Відмінити команду', legend: 'Натисніть ${undo}' },
        { name: 'Повторити', legend: 'Натисніть ${redo}' },
        { name: 'Жирний', legend: 'Натисніть ${bold}' },
        { name: 'Курсив', legend: 'Натисніть ${italic}' },
        { name: 'Підкреслений', legend: 'Натисніть ${underline}' },
        { name: 'Посилання', legend: 'Натисніть ${link}' },
        {
          name: 'Згорнути панель інструментів',
          legend: 'Натисніть ${toolbarCollapse}',
        },
        {
          name: 'Доступ до попереднього місця фокусування',
          legend:
            'Натисніть ${accessNextSpace} для доступу до найближчої недосяжної області фокусування перед кареткою, наприклад: два сусідні елементи HR. Повторіть комбінацію клавіш для досягнення віддалених областей фокусування.',
        },
        {
          name: 'Доступ до наступного місця фокусування',
          legend:
            'Натисніть ${accessNextSpace} для доступу до найближчої недосяжної області фокусування після каретки, наприклад: два сусідні елементи HR. Повторіть комбінацію клавіш для досягнення віддалених областей фокусування.',
        },
        { name: 'Допомога з доступності', legend: 'Натисніть ${a11yHelp}' },
        {
          name: 'Вставити як звичайний текст',
          legend: 'Натисніть ${pastetext}',
          legendEdge: 'Натисніть ${pastetext}, а потім ${paste}',
        },
      ],
    },
  ],
  tab: 'Tab',
  pause: 'Pause',
  capslock: 'Caps Lock',
  escape: 'Esc',
  pageUp: 'Page Up',
  pageDown: 'Page Down',
  leftArrow: 'Ліва стрілка',
  upArrow: 'Стрілка вгору',
  rightArrow: 'Права стрілка',
  downArrow: 'Стрілка вниз',
  insert: 'Вставити',
  leftWindowKey: 'Ліва клавіша Windows',
  rightWindowKey: 'Права клавіша Windows',
  selectKey: 'Виберіть клавішу',
  numpad0: 'Numpad 0',
  numpad1: 'Numpad 1',
  numpad2: 'Numpad 2',
  numpad3: 'Numpad 3',
  numpad4: 'Numpad 4',
  numpad5: 'Numpad 5',
  numpad6: 'Numpad 6',
  numpad7: 'Numpad 7',
  numpad8: 'Numpad 8',
  numpad9: 'Numpad 9',
  multiply: 'Множення',
  add: 'Додати',
  subtract: 'Віднімання',
  decimalPoint: 'Десяткова кома',
  divide: 'Ділення',
  f1: 'F1',
  f2: 'F2',
  f3: 'F3',
  f4: 'F4',
  f5: 'F5',
  f6: 'F6',
  f7: 'F7',
  f8: 'F8',
  f9: 'F9',
  f10: 'F10',
  f11: 'F11',
  f12: 'F12',
  numLock: 'Num Lock',
  scrollLock: 'Scroll Lock',
  semiColon: 'Крапка з комою',
  equalSign: 'Знак рівності',
  comma: 'Кома',
  dash: 'Тире',
  period: 'Період',
  forwardSlash: 'Коса риска',
  graveAccent: 'Гравіс',
  openBracket: 'Відкрити дужку',
  backSlash: 'Зворотна коса риска',
  closeBracket: 'Закрити дужку',
  singleQuote: 'Одинарні лапки',
});
