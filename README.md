# SE2_16_171752_L4

Struttura del programma
- index.js  //file javascript che contiene l'istanza di express che farà da web-server
- db.js     //file javascript con tutte le primitive necessarie a memorizzare employee
- node_modules/  //cartella contenente le librerie utilizzate e tutte le loro dipendenze
- package.json   //file json contente tutte le informazioni di sviluppo e autore del progetto
- README.md      //file con le istruzioni su come utilizzare il progetto
- tpl/           //cartella contente i file della parte di visualizzazione e controllo da parte dell'utente
- - home.html    //file che sarà visualizzato dall'utente per interagire con l'applicazione
- - script.js    //file di script per eseguire azioni chiamate dalla home.html
- - stye.css     //semplice file di stile per la grafica della home.html

PATTERN MVC
Questo progetto, seppur molto semplice, cerca di integrare un semplice esempio di pattern MVC. La parte di Model può essere vista come l'insieme del file index.js, dove gira il web-server, e del file db.js, che viene utilizzato per "separare" la memorizzazione dei dati dal web-server. 
La parte di View è rappresentata invece dal file home.html e dal suo file di stile, style.css. Insieme questi due file permettono di ottenere una semplice interfaccia grafica via browser attraverso cui l'utente potrà semplicemente iteragire.
Infine la parte di Controller potrebbe essere assegnata al file script.js che trasforma le richieste fatte dall'utente in risposte tangibili sull'interfaccia grafica. Si preoccupa inoltre di controllare la correttezza dei dati inseriti e di notificare eventuali errori.

COME AVVIARE IL SERVER

- INSTALLARE NODE
Per controllare se node è già installato è sufficiente digitare:
$ node --version
Se la risposta sarà qualcosa del tipo v6.9.1 avrete node installato, aggiornato alla versione descritta, altrimenti dovrete seguire la procedura di installazione.
Se il programma node non è installato, è sufficiente scaricarlo presso il sito web originale:
https://nodejs.org/ (disponibile per Linux, MacOS o Windows).

- ACCEDERE ALLA CARTELLA DEL PROGETTO
La procedura è molto semplice: è sufficiente accedere alla cartella principale del progetto tramite una qualsiasi shell, utilizzando i comandi:
$ cd
$ pwd

- LANCIARE IL WEB SERVER
Una volta giunti nella cartella principale del progetto sarà sufficiente lanciare il web-server con il comando
$ node index.js

- UTILIZZARE L'APPLICAZIONE
Come verrà stampato nel terminale, per utilizzare l'applicazione sarà sufficiente accedere, tramite un qualsiasi browser, all'indirizzo http://127.0.0.1:1337/ oppure http://localhost:1337/
