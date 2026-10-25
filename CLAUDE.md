# CLAUDE.md

## Размер сессии и экономия токенов

- Следи за размером сессии. Когда она станет большой (примерно 150–200 тыс. токенов контекста, или работа идёт уже несколько дней, или одна задача закончена и начинается другая), сам предложи: обновить этот CLAUDE.md (что за проект, что готово, где что лежит, что осталось сделать), закоммитить, запушить и перейти в новую сессию.
- Правило: одна задача — одна сессия.
- Пользовательница не программист — объясняй просто, по-русски.

## О проекте

Публичный сайт Halina Lukashenko (GitHub Pages, ветка `main`). Репозиторий ПУБЛИЧНЫЙ: любой может прочитать этот файл, историю и PR. Личные заметки, планы поиска работы, кому что отправлено, ключи и их части, имена людей — сюда не класть (ни в файлы, ни в описания PR), только в приватные репозитории.

### Правила Halina
- Ничего не делать без её «да». PR мержит она сама; не говорить «уже на сайте», пока не смержила и не проверено.
- Проверять каждую ссылку перед тем, как дать её.
- Сайт, CV, PDF — на английском (кроме датских страниц). Контакты: Halina Lukashenko, HL22111770@GMAIL.COM (заглавными: маленькую l путают с I), Tlf. +45 22 11 17 70.
- Не писать опыт, которого нет. Фото только бесплатные (CC0) или её собственные.
- Не пушить в репозитории ботов, пока Halina тестирует бота: пуш перезапускает бота на Railway.

### Что где лежит
- `/` — визитка (фото, имя, кнопка LinkedIn), без бота. `/dk/` — датская страница job-бота, `/en/` — английская (скриншоты бота @demo_job_search_english_bot).
- `/fitness/` (NordPuls) и `/helsekost/` (Sundt Liv) — демо чатботов на заготовленных ответах, без ИИ; датские PDF рядом.
- `/work/` (старый адрес `/projects/` перенаправляет сюда) — полное английское портфолио (его давать работодателям, в CV и LinkedIn): SQL & data experience (факты из CV), AI products (job-бот с Verify, AI Daily Planner, Family Receipt Tracker, real estate бот — большие карточки с лентой скриншотов), Prototypes & concepts (NordPuls, Sundt Liv), фото, CV, рекомендации.
- `/portfolio/` — та же страница БЕЗ job-бота, порядок: SQL → AI products (Planner, Receipt Tracker) → Prototypes & concepts (NordPuls, Sundt Liv, Real Estate). `/portfolio/` не удалять и не переименовывать: эта ссылка уже разослана. Кому и почему — только в приватных заметках Halina, сюда не писать. При правках портфолио менять обе страницы. CV на обеих страницах одно и то же: `CV-Halina-Lukashenko-EN.pdf` (ссылки на /work/).
- `portfolio/assets/` — PDF real estate, трекера чеков, CV, переводов рекомендаций, картинки карточек.
- `work/assets/` — копии тех же файлов для `/work/` (и фото визитки): всё, на что ссылается `/work/`, лежит здесь, чтобы ссылки с /work/, из LinkedIn и CV никогда не вели в `/portfolio/`. В LinkedIn давать только ссылки `/work/...`. При замене файла (PDF, картинки) менять обе копии; CV-EN и References-EN `build.js` копирует в `work/assets/` сам.
- `pdf-src/` — исходники английских PDF; `pdf-src/cv/` — CV (английское `cv-en.html`; датское `cv-da.html` → `portfolio/assets/CV-Halina-Lukashenko-DA.pdf`, с сайта не ссылается, для заявок) и переводы рекомендаций. Сборка: `node pdf-src/build.js`.
- Рекомендации на сайте — только должность и компания, без имён, телефонов, почт и адресов («referee contact details available on request»).

### Все ссылки (проверены 25.10.2026)
Сайт (https://halyna-projects.github.io):
- `/` — визитка; `/work/` — полное портфолио (работодателям, CV, LinkedIn); `/portfolio/` — урезанная версия без job-бота; `/projects/` → перенаправляет на `/work/`.
- `/dk/` — датская страница job-бота; `/en/` — английская.
- `/fitness/` (NordPuls) и `/helsekost/` (Sundt Liv) — демо; флаеры: `/fitness/chatbot-til-fitnesscentre.pdf`, `/helsekost/chatbot-til-helsekostbutikker.pdf`.

CV и документы:
- CV EN: `/work/assets/CV-Halina-Lukashenko-EN.pdf` (копия в `/portfolio/assets/`); CV DA: `/portfolio/assets/CV-Halina-Lukashenko-DA.pdf` (с сайта не ссылается).
- Рекомендации EN: `/work/assets/References-Halina-Lukashenko-EN.pdf`.
- PDF продуктов: `/work/assets/ai-daily-planner-EN.pdf`, `/work/assets/family-receipt-tracker-EN.pdf`, `/work/assets/ai-real-estate-bot-EN.pdf`.
- Job-бот: `/assets/job-search-bot-presentation-EN.pdf`, `/assets/job-search-bot-presentation.pdf` (DA), `/assets/verify-documentation-EN.pdf`, `/assets/verify-dokumentation-DA.pdf`.

Боты в Telegram (https://t.me/имя):
- Job-бот английский: @demo_job_search_english_bot; датский: @Demo_job_search_dansk_bot.
- AI Daily Planner (английский): @ai_daily_planner_english_bot.
- Family Receipt Tracker: @family_receipt_HL1907_bot; английская версия: @family_receipt_en_HL1907_bot.
- Real estate бот: @REAL_ESTATE_HL1967_BOT.
- Кнопки «Try the bot» (25.10.2026, после замены ключей): job-бот английский (/work/), AI Daily Planner и Family Receipt Tracker (английский) — на /work/ и /portfolio/. Real estate — без кнопки (не на Railway).

LinkedIn: https://www.linkedin.com/in/halina-lukashenko

### Что осталось
1. AI Planner: 25.10.2026 карточка «Live» + «Try the bot» на /work/ и /portfolio/, кабинет переснят с настоящего адреса (задачи Buy bread / Go for a walk), PDF пересобран из скриншотов (заменены стр. «wizard», «Recurring», «Web cabinet», «Editing», добавлена «All tasks in the chat»), `pl-cabinet.jpg` и `pl-recurring.jpg` заменены. Осталось: в PDF стр. «A real reminder», «Snooze», «Snooze confirmed» и картинка `pl-snooze.jpg` ещё со старой задачей «to go walk»; страница «Confirm before changing state» не вернулась (окно подтверждения рисует браузер на его языке — снимать в англоязычном браузере). Бот присылает подтверждение задачи дважды (передано в сессию планера).
2. Railway: 25.10.2026 ключ Gemini и токены Telegram у всех ботов на Railway заменены, все отвечают. Боты, которые запускаются только с компьютера, и `.env` на компьютере — разобрать позже. Подробности — в приватных заметках.
3. Verify во всех ботах: не считать ошибкой длительность, посчитанную из дат (пример: «22 years at Prominvestbank» при Jan 2000 – Feb 2022), и честные признания пробелов.
4. Шапка CV: бот при генерации CV под вакансию не вставляет фото — возможная доработка бота (не пушить, пока Halina тестирует).
5. Английский скриншот «Add a job manually» на `/en/` вместо датского.
6. Датские PDF job-бота: абзац «исправлять после Verify необязательно» (см. `pdf-src/README.md`).
7. Видео про датского бота с подписями на украинском, потом про английского бота с английскими подписями (скрины пришлёт Halina).
8. Real estate бот: когда будет на Railway — кнопка «Try the bot».
9. Job-бот (датский): ошибки, найденные 22.10.2026 (переданы в сессию бота): в CV-PDF пропадают символы «+», «@», «–», «(», «:», дефис в T-SQL; строки рвутся посреди предложения; лишний заголовок «Ansøgning til stilling» и английский Profil в датском CV; в боте старое CV (data loads в Aarhus Kommune); ansøgning для датской вакансии по-английски, без «Att.:»; выдумки «Data Engineer», «agile», «certificeringer», искажённая цитата OVERLEVELSE, «data pipelines»; Verify ругает честные признания пробелов и пропускает настоящие ошибки.
10. Возможно, вернуть job-бота в `/portfolio/` (сделать как `/work/`, ссылку не менять) — решает Halina, без её «да» не делать. Довод «за»: поиску работы с ИИ уже открыто учат (пример: бесплатный онлайн-воркшоп AID Learning 13.10.2026 — настроить ИИ для поиска вакансий, оценки соответствия, CV и писем; человек сам проверяет и отправляет каждую заявку).

### Важно о фактах
- Aarhus Kommune: должность — «IT Intern (developer)» / «IT-praktikant (udvikler)», НЕ «data consultant» (консультантом с отделами она не работала; в переводе рекомендации слово осталось как в оригинале письма). Halina только переводила скрипты PowerShell → Python для Eloomi и писала T-SQL; data loads в Eloomi при ней не делались — не писать.
- Prominvestbank (по трудовой книжке): заместитель начальника управления отчётности НБУ и Промінвестбанку, позже руководитель направления (керівник напрямку) в управлении аналитической отчётности и хранилища данных. Это не повышение. Годы внутри периода не писать; период в CV — 2000 – Feb 2022 (Halina так решила, раньше не указывать). Не писать «advanced from deputy head to head».
- Prominvestbank: Sybase и MS SQL Server — это Transact-SQL, так что T-SQL в банке — правда (в CV: «Sybase (Transact-SQL)»), не только в Aarhus Kommune.
- BI-инструментами не пользовалась (есть только курс Oracle BI 2015) — не писать BI в навыках.
- Курсы Oracle 2015 — это курсы, не сертификаты.
- Ошибка в 20% строк (Landbrug & Fødevarer): JOIN двух историй без условия на периоды размножал строки; 1 238 ложных из 5 894 (Halina хочет «около 20%»). Нашла через проверку уникальности строк. Своё первое условие на даты разрасталось из-за редких случаев — короткое общее правило пересечения периодов подсказал ИИ (это есть в посте LinkedIn; на сайте карточка «20%» без этих объяснений — Halina так решила). Теперь обязательно в каждом JOIN с этой таблицей; около 70 объектов (все views и процедуры) Halina переделала под это условие, ещё около 30 создала новых — вместе это «ca. 100 databaseobjekter» в CV ("developed and adapted approx. 100"). Ещё: ROWNUM < 2 → ORDER BY … FETCH FIRST 1 ROW ONLY. Chief scientist (OVERLEVELSE): «brilliant», «excellent tables», «extensive work» — имя не указывать.
- Уровень датского в CV: «Godt (øvet niveau)»; в LinkedIn стоит «Professional working proficiency» — Halina решит, какой оставить.
