//4 Проверить что введенный пароль удовлетворяет следующим условиям сложности:
//	- длинна от 9 символов;
//	- содержит обязательно английские буквы верхнего и нижнего регистра;
//	- содержит более двух цифр;
//	- содержит обязательно один из неалфавитных символов (например, !, $, #, %).

(?=^.{9,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$
