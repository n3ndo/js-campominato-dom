ESERCIZIO: Campo Minato

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git). (Non dovete ricominciare l'esercizio da capo quindi, prendete quello che avete fatto ieri, copiatelo nella repo di oggi e partite da li a lavorare)
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

1-Creare in Html l'header che conterrà il Titolo della pagina e il pulsante "Gioca";
1.2-Stilizzare l'header nel css;
1.3-Creare il collegamento del pulsante nel file script;
2-Creare in Html la griglia;
3-Nello script dichiarare due funzioni:
3.1-la prima per generare delle celle in cui si deve andare a dichiarare la costante "square";
3.1.1-Dare delle misure a square nel CSS;
3.2-la seconda per generare la griglia in sé, dove in un ciclo for si richiama la funzione per la creazione delle celle e si itera fino ad arrivare ad un numero pari a 100 cella per la griglia;
3.2.1-Dare delle misure alla griglia in CSS;
4-Rendere le celle cliccabili (al click cambiano colore);
5-Creare le bombe:
5.1-Fare una prima funzione in cui vengono generati numeri casuali ma non ripetuti;
5.2-Fare una seconda funzione in cui si dichiarare un array vuoto "bombs" dove con un for si va ad iterare all'interno dell'array per 16 volte la funzione per generare numeri casuali;
5.3-Se si clicca su una casella in cui è presente una bomba allora il colore della casella diventa rosso;
5.4-se si clicca su una casella in cui non è presente una bomba allora il colore della casella diventa azzurro;
6-Aggiunto in javascript il contatore per i punti (collegato con l'html);