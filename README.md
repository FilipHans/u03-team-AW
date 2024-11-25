# Quizzy 

#### **Creators:**
**{**
 * **Andréa Stålstierna**,
 * **Erik Andersson**,
 * **Emil Rönnqvist**,
 * **Filip Hansén**,
 * **Hanna Österberg**

**}**

Vi har gjort en quiz-applikation med namn Quizzy, där vi hämtat data från ett API. Direkt när man kommer till sidan så får man skriva in sitt namn, som kommer sparas i localstorage. När man skrivit in sitt namn så kommer man att få välja kategori och svårighetsgrad. Vi har valt att visa 3 kategorier och en random kategori från API:et som användaren får välja mellan. Efter man valt kategori, väljer man svårighetsgrad, “easy, “medium” eller “hard”. Sen startar quizet!

När quizet väl startar är det 10 frågor man ska besvara genom 4 olika svarsalternativ, varje fråga har en timer på 10 sekunder. Rätt svar kommer bli grönt och fel svar kommer bli rött. 
Vi har även skapat en leaderboard som baseras på spelarna i localstorage där den som har högst poäng ligger etta och ner till den 7:e spelaren som har lägst poäng. Vårt poängsystem ger poäng för varje rätt svar och baserat på hur snabbt du svarar. 

När du svarat på alla frågor kommer du direkt komma till leaderboarden som visar dina poäng och där har du alternativet att kunna spela igen. Om du vill spela igen trycker du bara på knappen för att köra om Quizzy. 

När vi startade projektet började vi med att arbeta utifrån olika branscher och fortsatte med det då vi ville undvika merge-conflicts. Vi delade upp strukturen av koden i HTML där alla skrev en egen del och sedan arbetade vi gemensamt från en bransch med att skriva javascript kod. Vi gjorde på detta sätt för att alla skulle förstå alla delar av koden och även lära sig nya saker. Vi hade även en backlog där alla fick ta en egen ticket att arbeta med för att sedan göra en pull request. 
Största styrkan på vår app är att det är en helt fungerande app utan några error meddelanden. Under projektets gång stötte vi på många problem som vi löste under projektets gång och fokuserade på de största problemen först och de mindre efter. Timern och localstorage med leaderboard var de största problemen som vi tillslut löste tillsammans. 
Det vi märkte under arbetets gång var att Api:et repeterar frågor under alla svårighetsgrader så det blir inte så stor variation när man kör om quizet. Även svaren på frågorna hade många special characters som javascript ej förstod, vi löste det genom att göra dessa till html strängar istället. 

För att sammanfatta tycker vi att projektet har gått bra och vi är nöjda över vår app. 

**Länk till API:et** - <https://opentdb.com/api_config.php>

**Länk till Quizappen** - <https://filiphans.github.io/u03-team-AW/>
