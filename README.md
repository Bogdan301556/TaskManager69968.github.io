[readme.txt](https://github.com/user-attachments/files/25172289/readme.txt)TaskManager


+_+_+_+_+_+_+_+_
  1 cd backend

  2 npm install

  3 node server.js
_+_+_+_+_+_+_+_+
Spis treści:

1. Opis projektu
2. Technologie
3. Funkcjonalności
4. Wymagania systemowe
5. Instalacja i uruchomienie
6. Backend API
7. Struktura projektu
8. User Stories

---

Opis projektu

Prosty system zarządzania zadaniami z rejestracją i logowaniem użytkowników.

---

Technologie

Frontend: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6)
Backend: Node.js, Express.js
Baza danych: MongoDB (Atlas)
Autentykacja: JWT, bcrypt

---

Funkcjonalności

* Rejestracja i logowanie użytkowników
* Dodawanie i usuwanie zadań
* Wyświetlanie zadań tylko zalogowanego użytkownika
* Wylogowanie i sprawdzanie statusu użytkownika
* Interaktywny blok informacji na stronie głównej

---

Wymagania systemowe

* Node.js >= 18.x
* npm
* Przeglądarka (Chrome, Edge, Firefox)
* Konto MongoDB Atlas lub lokalna instancja

---

Instalacja i uruchomienie

Backend:

1. Przejdź do folderu backend:
   cd backend
2. Zainstaluj zależności:
   npm install
3. Utwórz plik .env i wprowadź:
   MONGO_URI=<Twój MongoDB Atlas URI>
   PORT=5000
   SECRET=<Twój sekret JWT>
4. Uruchom backend:
   node server.js

Frontend:

* Otwórz index.html w przeglądarce lub przez Live Server w VSCode

---

Backend API

1. /api/auth/register
   Metoda: POST
   Body JSON:
   {
   "email": "[user@example.com](mailto:user@example.com)",
   "password": "hasło"
   }
   Odpowiedź:
   { "message": "User registered" }

2. /api/auth/login
   Metoda: POST
   Body JSON:
   {
   "email": "[user@example.com](mailto:user@example.com)",
   "password": "hasło"
   }
   Odpowiedź:
   { "token": "<JWT Token>" }

3. /api/tasks
   Wymaga JWT w nagłówku Authorization
   GET - zwraca wszystkie zadania użytkownika
   POST - dodaje nowe zadanie:
   { "text": "Nowe zadanie" }
   DELETE /:id - usuwa zadanie po ID

---

Struktura projektu


project/ 

├─ backend/ 

│ ├─ models/ 

│ │ ├─ User.js 

│ │ └─ Task.js 

│ ├─ routes/ 

│ │ ├─ auth.js 

│ │ └─ tasks.js 

│ ├─ middleware/ 

│ │ └─ authMiddleware.js 

│ └─ server.js 

├─ frontend/ 

│ ├─ index.html 

│ ├─ login.html 

│ ├─ register.html 

│ ├─ tasks.html 

│ ├─ css/ 

│ │ ├─ reset.css 

│ │ └─ style.css 

│ └─ js/ 

│ ├─ auth.js 

│ ├─ tasks.js 

│ └─ api.js 

---

User Stories

1. Rejestracja nowego użytkownika - POST /api/auth/register, komunikat o sukcesie
2. Logowanie - POST /api/auth/login, zapis tokena w localStorage
3. Dodawanie zadania - POST /api/tasks, zadanie pojawia się na liście
4. Usuwanie zadania - DELETE /api/tasks/:id, zadanie znika z listy
5. Wylogowanie - usunięcie tokena, przekierowanie do strony logowania


