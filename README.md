# SimilarWebApp

Обертка для https://documenter.getpostman.com/view/5388671/RzfcNs8W на Google Apps Script

Продублированы все методы. Просто скопируйте файл в свой проект и пользуйтесь.

## Пример использования

```js
function myFunction() {
  var apikey = '1234567890qwertyuiop';
  var sAPI = new SimilarWebApp(apikey);
  var api_hits = sAPI.Utilities().CheckCapabilities().remaining_hits;
  // Выведем оставшиеся баллы API
  Logger.log(api_hits);
}
```
