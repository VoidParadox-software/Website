# Ghid de Configurare Servicii Externe

Acest document descrie pașii necesari pentru a configura serviciile externe (Firebase și Google Cloud) pentru funcționalitățile website-ului.

## 1. Configurare Proiect Firebase

Firebase va fi folosit pentru autentificarea utilizatorilor și pentru stocarea datelor din formulare (newsletter și contact) în baza de date Firestore.

### Pași de urmat:

1.  **Creează un Proiect Firebase:**

    - Accesează [Consola Firebase](https://console.firebase.google.com/).
    - Apasă pe **"Add project"**.
    - Introdu un nume pentru proiect (ex: `cierra-website`) și urmează pașii de pe ecran. Poți dezactiva Google Analytics dacă nu ai nevoie de el momentan.

2.  **Adaugă o Aplicație Web la Proiect:**

    - În panoul de control al proiectului, apasă pe pictograma de **Web** (`</>`).
    - Introdu un nume pentru aplicație (ex: `Cierra Web App`).
    - Apasă pe **"Register app"**.

3.  **Obține Cheile de Configurare:**

    - După înregistrare, Firebase îți va afișa un obiect de configurare (`firebaseConfig`). Copiază acest obiect. Îl vom adăuga într-un fișier de mediu (`.env.local`) în proiect.
    - Arată cam așa:
      ```javascript
      const firebaseConfig = {
        apiKey: "AIza...",
        authDomain: "your-project-id.firebaseapp.com",
        projectId: "your-project-id",
        storageBucket: "your-project-id.appspot.com",
        messagingSenderId: "...",
        appId: "1:...",
      };
      ```

4.  **Activează Authentication:**

    - În meniul din stânga, mergi la **Build > Authentication**.
    - Apasă pe **"Get started"**.
    - În tab-ul **"Sign-in method"**, selectează **"Email/Password"** și activează-l.

5.  **Configurează Firestore Database:**

    - În meniul din stânga, mergi la **Build > Firestore Database**.
    - Apasă pe **"Create database"**.
    - Pornește în **modul de producție (production mode)**.
    - Alege o locație pentru serverele tale (ex: `europe-west`).

6.  **Actualizează Regulile de Securitate Firestore:**

    - În meniul din stânga, mergi la **Build > Firestore Database**.
    - Selectează tab-ul **"Rules"**.
    - Înlocuiește conținutul existent cu următoarele reguli:

      ```
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          // Permite oricui să scrie în aceste două colecții.
          // ATENȚIE: Aceasta este o regulă permisivă pentru dezvoltare.
          // Pentru producție, ar trebui să restricționezi accesul mai mult.
          match /contact_messages/{docId} {
            allow write: if true;
            allow read: if false; // Nimeni nu poate citi mesajele din client
          }
          match /newsletter_subscriptions/{docId} {
            allow write: if true;
            allow read: if false; // Nimeni nu poate citi email-urile din client
          }

          // Adaugă aici alte reguli pentru colecțiile viitoare (ex: users, products)
        }
      }
      ```

    - Apasă pe **"Publish"** pentru a salva noile reguli. Acestea pot dura câteva minute pentru a se propaga.

---

## 2. Configurare Google Sheets API

Această integrare ne va permite să salvăm automat înscrierile la newsletter și mesajele de contact în fișiere Google Sheets.

### Pași de urmat:

1.  **Creează un Proiect pe Google Cloud Platform (GCP):**

    - Accesează [Consola Google Cloud](https://console.cloud.google.com/).
    - Dacă nu ai deja un proiect, creează unul nou. Poți folosi același proiect pe care l-a creat Firebase.

2.  **Activează API-ul Google Sheets:**

    - În meniul de navigare, mergi la **APIs & Services > Library**.
    - Caută **"Google Sheets API"** și activează-l (`Enable`).

3.  **Creează un Service Account:**

    - Mergi la **APIs & Services > Credentials**.
    - Apasă pe **"Create Credentials"** și selectează **"Service account"**.
    - Introdu un nume pentru service account (ex: `sheets-writer`).
    - Apasă **"Create and Continue"**.
    - Acordă-i rolul de **"Editor"** pentru a putea modifica fișiere.
    - Apasă **"Done"**.

4.  **Generează o Cheie JSON:**

    - În lista de credențiale, găsește service account-ul creat.
    - Apasă pe el, apoi mergi la tab-ul **"Keys"**.
    - Apasă pe **"Add Key" > "Create new key"**.
    - Selectează formatul **JSON** și apasă **"Create"**.
    - Un fișier `.json` va fi descărcat. **Păstrează acest fișier în siguranță!** Conținutul lui va fi folosit pentru a autoriza aplicația noastră.

5.  **Pregătește Fișierele Google Sheets:**
    - Creează două fișiere Google Sheets separate în contul tău de Google Drive:
      - Unul pentru **Newsletter Subscriptions** (cu coloane precum `Email`, `Timestamp`).
      - Unul pentru **Contact Messages** (cu coloane precum `Name`, `Email`, `Message`, `Timestamp`).
    - Obține adresa de email a service account-ului (o găsești în detaliile acestuia în GCP, arată ca `...@...gserviceaccount.com`).
    - Deschide fiecare fișier Google Sheet, apasă pe **"Share"** și partajează-l cu adresa de email a service account-ului, acordându-i rolul de **"Editor"**.

---

După ce ai parcurs acești pași, va trebui să adaugi credențialele obținute (obiectul `firebaseConfig` și conținutul fișierului JSON de la Google) în proiectul nostru, într-un fișier de mediu `.env.local`, pentru a le putea folosi în cod.

---

## 3. Configurare Stripe (Pentru Plăți)

Stripe va fi folosit pentru a procesa plățile online în siguranță.

### Pași de urmat:

1.  **Creează un Cont Stripe:**

    - Accesează [Stripe](https://dashboard.stripe.com/register) și creează-ți un cont.
    - Urmează pașii pentru a-ți activa contul, furnizând detaliile necesare despre afacerea ta.

2.  **Obține Cheile API:**

    - După ce contul este activat, mergi la secțiunea **"Developers"** din panoul de control.
    - În sub-meniul **"API keys"**, vei găsi două chei importante:
      - **Publishable key:** Aceasta este sigură pentru a fi folosită în codul de pe client (în browser). O vom adăuga în `.env.local` cu numele `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.
      - **Secret key:** Aceasta este confidențială și trebuie folosită doar pe server. **Nu o expune niciodată pe client!** O vom adăuga în `.env.local` cu numele `STRIPE_SECRET_KEY`.
    - Pentru a testa, poți folosi cheile din modul **"Test mode"**.

3.  **Configurează un Webhook (Opțional, dar Recomandat):**
    - În secțiunea **"Developers" > "Webhooks"**, apasă pe **"Add an endpoint"**.
    - Aici vei adăuga un URL de pe site-ul tău (ex: `https://your-site.com/api/stripe-webhook`) la care Stripe va trimite evenimente (ex: `checkout.session.completed`).
    - Vom folosi acest mecanism pentru a confirma plățile și a actualiza comenzile în baza de date. Pentru dezvoltare locală, poți folosi Stripe CLI pentru a testa webhook-urile.
    - După crearea endpoint-ului, Stripe îți va oferi un **"Signing secret"** pentru webhook. Acesta trebuie adăugat în `.env.local` cu numele `STRIPE_WEBHOOK_SECRET`.
