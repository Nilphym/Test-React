# Test React
Wszystkie problemy dotyczą pliku `src/components/Timer.js` lub `src/App.js`.  
W pliku `src/App.js`, na samej górze, można zmieniać ustawienia czasu początkowego.  
Poza tymi dwoma plikami, nie wprowadzać zmian w innych miejscach.

By uruchomić projekt należy wpisać `npm install`, a po instalacji `npm start`.

## 1. Stoper nie odejmuje czasu
Przy włączeniu strony, stoper odejmuje tylko jedną sekundę i zatrzymuje się.
Naprawić stoper tak, by poprawnie odejmował czas.

## 1.5. Stoper źle reaguje na zmianę szybkości
Przy każdej zmianie szybkości, czas zaczyna lecieć coraz szybciej, np. przy zmianie z `normal` na `slow` i z powrotem `normal`.  
Naprawić stoper tak, by czas leciał normalnie po zmianach szybkości.

## 2. Stylowanie warunkowe
Zaprogramuj stoper tak, by przy ponad godzinie czasu wyświetlał czas na zielono, przy mniej niż 10 sekundach do końca na czerwono, a przy braku czasu wyświetlał napis "Time's up!".

## 3. Definiowanie typów
Dla `Timer.js` zdefiniuj jak najszczegółowiej `propTypes` i, jeżeli potrzebne, `defaultProps`.

## 3.5. Definiowanie typów cd..
Czym różnią się `propTypes` od `defaultProps` i w jakich przypadkach używać `defaultProps`? Napisz odpowiedź poniżej.

## 4. Separacja stylów
Przenieś style dla `<div>` w `App.js` i `<p>` w `Timer.js` do osobnych plików o rozszerzeniu `.css`.

## 5. Formatowanie czasu
Sformatować stoper tak, żeby zawsze pokazywał 6 cyfr, np. zamiast `0:35:2` ma pokazywać `00:35:02`.
