---
layout: post
title:  "Reflektion"
date:   2016-11-17 12:35:40
categories: examination
---
<li><h1>Vad är dina tankar om static site generators?</h1> 
<ul><li><p>Jämfört med vanlig CSS</p></li>
<li><p>Vilka tekniker använde du?</p></li>
<li><p>Fördelar och nackdelar?</p></li></ul></li>
Jämfört med vanligt CSS så är det här helt klart roligare att jobba med för att det blir så mycket smidigare när man
väl kommer in i det. Att jobba med en gigantisk CSS fil har jag gjort för sista ggn nu, den blir bara längre och längre
till slut vet man inte vad man gjort och det slutar med att man skriver dubbelt m.m för att få det att funka. Nu med
med nestad CSS är det så mycket enklare att jobba med mindre filer och att använda variabler. Så i slut ändan blir det
mindre och begripligare kod, roligare att jobba med och en utmaning att nästa ihop det på ett snyggr sätt.
Nackdelen med att nesta o kompilera CSS på detta sättet är väll att användaren kan ha svårare att läsa källkoden om dom
nu vill göra det. Det är däremot bra fördelar som att du som utvecklare kan dela upp CSS biten i precis hur många filer 
du vill utan att behöva tänka på att det blir för många förfrågningar till servern eftersom det kompileras ihop till en
stor fil.
Jag använde mig av nesting och variablar främst till att sätta färger.


<li><h1>Vad är dina tankar kring static site generators</h1>
<ul><li><p>Vilken typ av projekt är det passande för?</p></li></ul></li>
Det var den första hemsidan och det är framtiden, vi är tillbaka där hemsidorna började en gång i tiden att vara statisk
och jag tror det kommer explodera fördelarna är enorma. Bara säkerhetsaspekten är enorma summor pengar företag får lägga 
på sina dynamiska sidor när man på en statisk sida knappt går att angripa. Det blir minimalt med anrop till servern och
det är smidigare för en utvecklare att hantera förändringar eftersom man använder sig av layouts för html strukturen. 
Det som det inte passar är sidor som kanske behöver uppdateras frekvent vilket det istället blir en nackdel att ha
statisk websida.


<li><h1>Vad är robots.txt och hur har du konfigurerat den för din webplats?</h1></li>
Det är en liten fil som man kan inkludera i sin sida för att berätta framförallt för indexeringsrobotar vilka
filer/mappar även vilka robotar som man vill och inte vill ska indexera sidan. Men det är ingen garanti
att dom följer vad som står i den filen utan det är dom som har lite vett o ettiket som hedrar och följer den.
På min sida undaber jag alla robotar att inte besöka min webplats eftersom jag inte ser något syfte med att dom
ska vara o rota hoss mig.


<li><h1>Vad är humans.txt och hur har du konfiguerat den för din webbplats?</h1></li>
Humans.txt är en minnes tavla för hemsidan som man kan lägga till sin webplats för hedra och tacka personer
som varit med och hjälpt till för att få fram hemsidan. Man kan även ha med kontaktuppgifter och programvara man använt
sig av. I min fil finns information om mig som utvecklare, tack till mina mentorer och vilka utvecklings verktyg jag 
använt mig utav.


<li><h1>Hur implementerade du kommentarer till dina blogginlägg?</h1></li>
Det var ett tufft val men det landade på att använda disqus för att det va det enda jag kände till och var rekomenderat. 
Det var även smidigt att implementera och fungerade på första försöket. Jag implementerade det i layouten för post, så
att det på ett smidigt sätt används till varje blogginlägg utan att man behöver göra någon tanke verksamhet.


<li><h1>Vad är Open Graph och hur får du ut något från det?</h1></li>
Det är ett verktyg för att medela sidor vad det är för typ av länkar man länkar till så att dom kan presentera på ett
snyggt sätt. Destu snyggare länken är destu fler klick blir det och det är även en nackdel för man kan lura webplatsen
genom att det blir orelevanta tilläg.



