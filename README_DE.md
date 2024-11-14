# % Calculator

Diese Taschenrechner-App ist größtenteils fertig, aber du wirst dein Wissen über Module und Event-Handler nutzen müssen, um sie zu vervollständigen.

## Aufgaben

Bevor du beginnst, sieh dir die bereitgestellte Datei an;

- [modules/percentage.js](./modules/percentage.js)

Du musst diese Logik verwenden, um die Funktionalität für die Benutzeroberfläche zu vervollständigen.

Das [HTML](./index.html) wurde bereits für dich geschrieben. Du kannst Live Server verwenden, um diese Seite anzuzeigen.

### Aufgabe 1

1. Exportiere die Funktion aus der obigen Datei
2. Importiere sie in [modules/main.js](./modules/main.js)
3. Importiere die JavaScript-Datei [modules/main.js](./modules/main.js) in [index.html](./index.html)

### Aufgabe 2

Wir möchten alle Änderungen am `<form>` mit der id `percentage-change-form` erfassen und verarbeiten.

In [main.js](./modules/main.js);

- Füge einen `change` Event-Listener zur id `percentage-change-form` hinzu
- Jedes Mal, wenn der `change` Handler ausgelöst wird;
  - erfasse die Benutzereingaben aus den `<input>` Elementen mit der id `change_1` und `change_2`
  - verwende die importierte `difference` Funktion, um das Ergebnis zu berechnen
  - setze das Ergebnis als Wert des Elements mit der id `change_result`

### Aufgabe 3

Teste die Benutzeroberfläche!

Wenn alles richtig eingerichtet ist, sollte das Ergebnis automatisch angezeigt werden, nachdem der Benutzer beide Werte eingegeben hat.
