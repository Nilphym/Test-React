# Test React
Wszystkie problemy dotyczą pliku `src/components/Timer.js`.  
Problem 4 dotyczy również pliku `src/App.js`.  
W pliku `src/App.js` na samej górze można zmieniać ustawienia czasu początkowego.  
Poza tymi dwoma plikami nie wprowadzać zmian w innych miejscach.

By uruchomić projekt należy wpisać `npm install` i po instalacji `npm start`.

## 1. Timer nie odejmuje czasu
Przy włączeniu strony, timer odejmuje tylko jedną sekundę i zatrzymuje się.
Naprawić timer tak, by poprawnie odejmował czas.

## 1.5. Timer źle reaguje na zmianę szybkości
Przy każdej zmianie szybkości, czas zaczyna lecieć coraz szybciej, np. przy zmianie z `normal` na `slow` i z powrotem `normal`.  
Naprawić timer tak, by czas leciał normalnie po zmianach szybkości.

## 2. Stylowanie warunkowe
Zaprogramuj timer tak, by przy ponad godzinie czasu wyświetlał czas na zielono, przy mniej niż 10 sekundach do końca na czerwono, a przy braku czasu wyświetlał napis "Time's up!".

## 3. Definiowanie typów
Dla `Timer.js` zdefiniuj jak najszczegółowiej `propTypes` i, jeżeli potrzebne, `defaultProps`.

## 3.5. Definiowanie typów cd..
Czym różnią się `propTypes` od `defaultProps` i w jakich przypadkach używać `defaultProps`? Napisz odpowiedź poniżej.

## 4. Separacja stylów
Przenieś style dla `<div>` w `App.js` i `<p>` w `Timer.js` do osobnych plików o rozszerzeniu `.css`.

## 5. Formatowanie czasu
Sformatować licznik tak, żeby zawsze pokazywał 6 cyfr, np. zamiast `0:35:2` ma pokazywać `00:35:02`.
