### СОЗДАНИЕ СВОЕЙ ВЕТКИ

Смотрим на каком бранче мы сидим

`$ git branch - a`

Должен быть master. Создаем свою ветку (sergey-branch)

`$ git checkout -b sergey-branch`

Заливаем на удаланный репозиторий свою ветку.

`$ git push origin sergey-branch`

Работаем на своем бранче.

---
### КОММИТ СВОИХ ИЗМЕНЕНИЙ
 
Смотрим на каком бранче мы сидим

`$ git branch - a`

Добавляем все свои изменения

`$ git add .`

Коммитим измменения с информативным сообщением коммита

`$ git commit -m "COMMIT MESAGE"`

Переходим на Мастер

`$ git checkout master`

Вытягиваем с Мастера изменения с удаленного репозитория

`$ git pull`

Переходим на свою ветку (sergey-branch)

`$ git checkout sergey-branch`

Объединяем свою ветку с веткой Мастер (вливаем/мержим Мастер в свою ветку)

`$ git merge master`

---
### RESOLVING CONFLICT
Если есть конфликты, то в консоли будут указаны навания файлов где есть конфликты. Переходим в этим файлы с помощью нашей IDE, убираем то что добавил ГИТ. Сохраняем файл.

Проверяем какие файлы были изменены

`$ git status`

Добавляем их

`$ git add .`

Проверяем

`$ git status`

Добавляем комит

`$ git commit -m "merge master into branch"`

Заливаем на удаленный репозиторий

`$ git push origin sergey-branch`

---
### СОЗДАНИЕ MERGE-REQUEST

Создаем мердж-реквест на github