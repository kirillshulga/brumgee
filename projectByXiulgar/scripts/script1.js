//1. Вывести используя (document.write) таблицу 
//умножения чисел до 10.

function createMultipTable() {
    var tableStart = "<p>Таблица умножения</p><table style='border-collapse: collapse; text-align: center;'>",
        tableEnd = "</table>",
        i = 1,
        j = 2,
        strForRow = "",
        strForTab = "",
        strForShow;
    
    while (i < 10) {
        while (j < 10) {
            strForRow += "<td style='border: 1px solid black; width: 2em; height: 2em;'>" + j*i + "</td>"
            j++;
        }
        strForTab += "<tr><td style='border: 1px solid black; width: 2em; height: 2em;'>" + i + "</td>" + strForRow + "</tr>";
        strForRow = "";
        j = 2;
        i++;
    }
    
    strForShow = tableStart + strForTab + tableEnd;
    document.write(strForShow);
}

createMultipTable();






































































