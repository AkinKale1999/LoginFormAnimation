# Login-Formular mit animierten Labels

Dieses Projekt zeigt ein einfaches Login-Formular mit einer besonderen Animation für die Labels. Die Labels für die Eingabefelder "Email" und "Passwort" werden beim Laden und beim Fokussieren des Eingabefeldes animiert.

## Projektstruktur

- **HTML**: Die Struktur des Login-Formulars mit zwei Eingabefeldern (Email und Passwort) und einem Login-Button.
- **CSS**: Wird hier nicht angezeigt, aber es wird angenommen, dass es Stile gibt, um das Formular zu gestalten, sowie für die Animation der Labels.
- **JavaScript**: Steuert die Animation der Buchstaben in den Labels und deren verzögertes Erscheinen.

## Funktionsweise

1. **HTML-Struktur**:
   - Es gibt zwei Eingabefelder (für Email und Passwort) innerhalb von `div.form-control`-Elementen.
   - Jedes `input`-Element hat ein `label`, das beim Fokussieren des Eingabefeldes animiert wird.
   - Ein Login-Button und ein Hinweistext für die Registrierung sind ebenfalls enthalten.

2. **JavaScript**:
   - Beim Laden der Seite wird jedes Label in seine einzelnen Buchstaben unterteilt.
   - Jeder Buchstabe erhält eine Übergangsverzögerung, sodass die Buchstaben nacheinander erscheinen, wenn das Label angezeigt wird.
   - Das Label wird durch ein `span`-Element für jeden Buchstaben ersetzt, das mit einer Verzögerung animiert wird.

3. **CSS** (Annahme):
   - Die Übergangs- und Animationsstile für die `span`-Elemente müssen im CSS definiert werden, insbesondere für die Zustände, wenn das Eingabefeld fokussiert oder gültig ist.

## Installation

git clone https://github.com/AkinKale1999/LoginFormAnimation.git
