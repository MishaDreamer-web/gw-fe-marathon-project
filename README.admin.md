# 📋 Правила користування адмін-панеллю

## Доступ до адмін-панелі

Панель адміністратора сайту відкривається при переході за посиланням: /admin/.

Доступ можна отримати лише за запрошенням на електронну пошту. Потрібно відкрити
лист та перейти за посиланням у ньому. У вікні, що відкриється, користувач
побачить форму з можливістю авторизуватися. Для цього потрібно обрати Sign Up і
ввести у формі email та пароль. // ??

Після цього адміністратор отримає лист на введену пошту із проханням підтвердити
реєстрацію. Для цього потрібно перейти за посиланням у листі.

## Структура адмін-панелі

Адмін-панель має наступну структуру:

![Структура адмін-панелі](./src/assets/images/readme/admin-1.jpg)

- List of Chapters - це перелік розділів (у нашому випадку - днів).

  ![Перелік розділів адмін-панелі](./src/assets/images/readme/admin-3.jpg)

  Він представлений як один елемент колекції, який не можна видалити. Також не
  можна створити новий елемент. Передбачена лише можливість редагування розділів
  всередині даної колекції.

  При переході на перелік днів адміністратор побачить його структуру, яка
  складається із списку. Елементами списку є назви папок для збереження розділів
  (CHAPTER NAME: start, day-1 та ін.)

  ![Перелік розділів адмін-панелі](./src/assets/images/readme/admin-2.jpg)

  ⚠️ Цей перелік потрібно редагувати лише у конкретних випадках. (див. нижче
  "Правила додавання нових записів").

  ***

- List of Subheads - це перелік підрозділів (у нашому випадку - Загальні питання
  та VSCode).

  ![Перелік підрозділів адмін-панелі](./src/assets/images/readme/admin-4.jpg)

  Він також представлений як один елемент колекції, який не можна видалити, так
  само як і не можна створити новий елемент. Передбачена лише можливість
  редагування підрозділів всередині даної колекції.

  При переході на перелік підрозділів адміністратор побачить його структуру, яка
  складається із списку. Елементами списку є два підрозділи - Загальні питання
  та VSCode.

  ![Перелік підрозділів адмін-панелі](./src/assets/images/readme/admin-5.jpg)

  ⚠️ Цей перелік потрібно редагувати лише у конкретних випадках. (див. нижче
  "Правила додавання нових записів").

  ***

  Далі слідують колекції, упорядковані за мовою інтерфейсу:

- Chapters_UA
- Chapters_RU
- Chapters_EN

  У кожній із них контент вводиться відповідною мовою.

  Елементами цих колекцій є розділи із переліку List of Chapters (у нашому
  випадку - дні).

  ![Перелік підрозділів адмін-панелі](./src/assets/images/readme/admin-7.jpg)

  ***

## Правила додавання нових записів

В основному адміністратор працюватиме з колекціями Chapters_UA, Chapters_RU та
Chapters_EN, додаючи нові запитання.

Однак проєктом також передбачена можливість динамічного додавання нових розділів
(днів) та підрозділів, які після створення через адмін-панель автоматично будуть
додаватися на сайті.

- Додавання розділів (у нашому випадку - днів).

Для створення нового розділу потрібно в адмін-панелі зайти у колекцію List of
Chapters -> Перелік розділів. Далі потрібно натиснути на кнопку "Add chapter
item" та ввести дані для нового розділу.

![Перелік розділів адмін-панелі](./src/assets/images/readme/admin-2.jpg)

Значення, введене у поле CHAPTER NAME, обов'язково повинно містити лише малі
латинські літери, цифри та тире, наприклад, "day-7".

Після додавання нового елемента списку потрібно натиснути кнопку Publish ->
Publish now. Нові дані автоматично відправляються у репозиторій проєкту, а після
успішного збереження адміністратор побачить повідомлення "Entry saved". Після
цього потрібно повернутися до загального вигляду адмін-панелі.

![Публікація змін](./src/assets/images/readme/admin-8.jpg)

Після того, як розділ додано, адміністратор може перейти в колекції Chapters_UA,
Chapters_RU та Chapters_EN та почергово додати запитання для нового розділу
відповідними мовами. Для цього потрібно натиснути на темну кнопку New Chapters
вгорі.

![Додавання питань до нового розділу](./src/assets/images/readme/admin-9.jpg)

Далі потрібно заповнити поля, слідуючи вказівками біля кожного поля. У полі
CHAPTER із випадаючого списку необхідно вибрати новостворений розділ, наприклад,
"day-7".

![Додавання питань до нового розділу](./src/assets/images/readme/admin-10.jpg)

Далі потрібно натиснути на кнопку "Add subhead" та обрати у полі SUBHEAD TITLE
із випадаючого меню потрібний підрозділ (Основні питання чи VSCode).

![Вибір підрозділу](./src/assets/images/readme/admin-12.jpg)

Після цього можна додавати запитання, натискаючи на кнопку "Add questions" та
заповнюючи необхідні поля QUESTION TITLE і DESCRIPTION.

![Додавання запитання](./src/assets/images/readme/admin-13.jpg)

У полі DESCRIPTION за необхідності можна додати зображення, натиснувши на +,
code, посилання, а також виділити частину відповіді жирним шрифтом.

Поле QUESTION RANGE необов'язкове, але воно позначає черговість розміщення
питання на сторінці, а тому використовується для сортування запитань на сайті.

Цей перелік потрібно редагувати лише у випадку створення нового підрозділу
(наприклад, "Дизайн").

![Створення нового підрозділу у адмін-панелі](./src/assets/images/readme/admin-6.jpg)