import React, { useState } from "react";

const quoteData = [
  {
    category: "Inspirerande citat",
    quote:
      "Det finns bara två sätt att leva sitt liv. Det ena är att leva som att mirakel inte existerar. Det andra är att leva som om allt är ett mirakel.",
    author: "– Albert Einstein",
  },
  {
    category: "Inspirerande citat",
    quote: "Du är inte en droppe i havet. Du är hela havet i en droppe.",
    author: "– Rumi",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det vackra med rädsla är att när du springer emot den så springer den bort.",
    author: "– Robin Sharma",
  },
  {
    category: "Inspirerande citat",
    quote: "Vi behöver jorden, men jorden behöver inte oss.",
    author: "– Chief Red Crow",
  },
  {
    category: "Inspirerande citat",
    quote: "För ett öppet hjärta är allting möjligt.",
    author: "– Thomas Di Leva",
  },
  {
    category: "Inspirerande citat",
    quote:
      "När jag trodde på mina tankar så led jag. När jag inte trodde på dem led jag inte. Och jag förstod det var sant för var och en av oss.",
    author: "– Byron Katie",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Livet är lite som att gå på en lina, det gäller att hålla balansen.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Du kan inte ha ett positivt liv och ett negativt sinne.",
    author: "– Joyce Meyer",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Din positiva handling kombinerat med positivt tänkande mynnar ut i framgång.",
    author: "– Shiv Khera",
  },
  {
    category: "Inspirerande citat",
    quote:
      "En ledare är en person som känner till vägen, går vägen och visar vägen.",
    author: "– John C. Maxwell",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Du kan säga att jag är en drömmare, men jag är inte den ende. Jag hoppas att du en dag går med oss. Och världen kommer bli som en.",
    author: "– John Lennon",
  },
  {
    category: "Inspirerande citat",
    quote: "Innovation skiljer mellan en ledare och en följare.",
    author: "– Steve Jobs",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Jag är en viss typ av drömmare. Mina drömmar är inte luftiga saker. Jag vill omvandla mina drömmar till verkligheter så mycket jag kan.",
    author: "– Mahatma Gandhi",
  },
  {
    category: "Inspirerande citat",
    quote: "Finn inte fel, finn en kur.",
    author: "– Henry Ford",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Sörj inte gårdagen, den är borta. Oroa dig inte för morgondagen, den är inte här än. Lev här och nu och njut av dagen.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Om livet känns rörigt och upp och ner, så tänk att det är för att du möblerar om för något bättre.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "En dag ska vi dö, alla andra dagar ska vi leva.",
    author: "– PO Enquist",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Den bästa förberedelsen för morgondagen är att göra ditt bästa idag.",
    author: "– H. Jackson Brown, Jr.",
  },
  {
    category: "Inspirerande citat",
    quote:
      "De bästa och mest vackra ting i världen kan inte se eller kännas vid – de måste kännas med hjärtat.",
    author: "– Helen Keller",
  },
  {
    category: "Inspirerande citat",
    quote: "Det vi tänker, vi blir.",
    author: "– Buddha",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Jag kan inte ändra vindens riktning, men jag kan justera mina segel så att de alltid når min destination.",
    author: "– Jimmy Dean",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Att vara intellektuell skapar många frågor och inga svar. Du kan fylla ditt liv med idéer och ändå gå hem själv. Allt du egentligen har som spelar roll är känslor. Det är vad musik är för mig.",
    author: "– Janis Joplin",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Kärlek är föregående till livet, senare än döden, initialt till skapelsen och exponenten till jorden.",
    author: "– Emily Dickinson",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Om du tittar på vad du har i ditt liv kommer du alltid ha mer. Om du tittar på vad du inte har, kommer du aldrig ha tillräckligt.",
    author: "– Oprah Winfrey",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Gör det mesta av dig själv genom att vattna de små, och genom att göra inre gnistorna till lågor av prestation.",
    author: "– Golda Meir",
  },
  {
    category: "Inspirerande citat",
    quote: "Om du inte riskerar någonting, riskerar du ännu mera.",
    author: "– Erica Jong",
  },
  {
    category: "Inspirerande citat",
    quote: "Om du inte gillar vägen du går på, börja gå på en annan.",
    author: "– Dolly Parton",
  },
  {
    category: "Inspirerande citat",
    quote: "Fall sju gånger, ställ dig upp åtta.",
    author: "– Japanskt ordspråk",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Allt vatten i världen kan inte sänka ett skepp såvida det inte kommer in i skeppet. Negativitet kan inte sänka en person såvida det inte kommer in i huvudet.",
    author: "– Kinesiskt ordspråk",
  },
  {
    category: "Inspirerande citat",
    quote: "En ros kan leva bland taggar och ändå aldrig bli skadad av dem.",
    author: "– Kinesiskt ordspråk",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Jorden kan du inte göra om. Stilla din häftiga själ. Endast en sak kan du göra: en annan människa väl.",
    author: "– Stig Dagerman",
  },
  {
    category: "Inspirerande citat",
    quote: "En hungrig människa mindre betyder en broder mer.",
    author: "– Stig Dagerman",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Att misslyckas är bara ett annat sätt att lära sig hur man gör något rätt.",
    author: "– Marian Wright Edelman",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Hemligheten till förändring är inte att bekämpa det gamla, utan att bygga det nya.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "För att få kunskap måste man studera, men för att få visdom måste man observera.",
    author: "– Marilyn vos Savant",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Sluta mäta dagar utifrån din produktivitet och börja uppleva dem av din närvaro.",
    author: "– Alan Watts",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ålder är inte en barriär. Det är en begränsning du sätter på ditt sinne.",
    author: "– Jackie Joyner-Kersee",
  },
  {
    category: "Inspirerande citat",
    quote: "Jag går långsamt, men jag går aldrig baklänges.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Varje ögonblick som du lever i det förflutna är ett ögonblick du kastar bort i nuet.",
    author: "– Tony Robbins",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Leta efter något positivt varje dag, även om du behöver leta lite extra mycket vissa dagar.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Om du kan drömma det så kan du uppnå det.",
    author: "– Zig Ziglar",
  },
  {
    category: "Inspirerande citat",
    quote: "Tro att du kan och du är halvvägs där.",
    author: "– Theodore Roosevelt",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Den enda personen du är ämnad att bli är personen du bestämmer dig för att bli.",
    author: "– Ralph Waldo Emerson",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Rikta alltid ditt ansikte mot solen och skuggorna kommer att falla bakom dig.",
    author: "– Walt Whitman",
  },
  {
    category: "Inspirerande citat",
    quote: "Begränsa inte dina utmaningar, utmana dina begränsningar.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "När du tvivlar på hur långt du kan gå, kom ihåg hur långt du har kommit.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Du behöver inte vara perfekt för att vara fantastisk.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Du kan inte återvända och ändra början, men du kan börja där du är nu och ändra slutet.",
    author: "– C.S Lewis",
  },
  {
    category: "Inspirerande citat",
    quote: "Gör ditt bästa. Ingen kan göra mer än så.",
    author: "– John Wooden",
  },
  {
    category: "Inspirerande citat",
    quote: "Om du ser något vackert i någon, säg det.",
    author: "– Ruthie Lindsay",
  },
  {
    category: "Inspirerande citat",
    quote: "Kom ihåg var du finner dörren till harmoni: den finns inom dig.",
    author: "– Rumi",
  },
  {
    category: "Inspirerande citat",
    quote: "Änglar har ingen filosofi utöver kärlek.",
    author: "– Terri Guillemets",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Varför försöka öppna en dörr mellan oss när hela väggen är en illusion?",
    author: "– Rumi",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Inget i världen är fullständigt fel. Till och med en klocka som står stilla går rätt två gånger om dagen.",
    author: "– Paulo Coelho",
  },
  {
    category: "Inspirerande citat",
    quote: "Lycka finns inom oss själva, inte bredvid någon annan.",
    author: "– Marilyn Monroe",
  },
  {
    category: "Inspirerande citat",
    quote: "Att förstå allt är att förlåta allt.",
    author: "– Buddha",
  },
  {
    category: "Inspirerande citat",
    quote: "Mod kan inte se runt hörn, men går runt dem ändå.",
    author: "– Mignon McLaughlin",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det är klokare att gå sin egen väg än att gå vilse i andras fotspår.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Antigen så hittar jag en väg, eller så skapar jag en.",
    author: "– Philip Sidney",
  },
  {
    category: "Inspirerande citat",
    quote: "Ett negativt sinne kommer aldrig att ge dig ett positivt liv.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Gå vidare på din väg, då den endast existerar genom dina steg.",
    author: "– Augustine of Hippo",
  },
  {
    category: "Inspirerande citat",
    quote: "Du behöver inte bli någon du inte är för att bli bättre än du var.",
    author: "– Sidney Poitier",
  },
  {
    category: "Inspirerande citat",
    quote: "De minsta handlingarna är alltid bättre än de ädlaste avsikterna.",
    author: "– Robin Sharma",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ge inte upp all din glädje för en idé som du brukade ha om dig själv som inte är sann längre.",
    author: "– Cheryl Strayed",
  },
  {
    category: "Inspirerande citat",
    quote: "Ingen ångrar att de har gjort sitt bästa.",
    author: "– George Halas",
  },
  {
    category: "Inspirerande citat",
    quote: "Följ det som fångar ditt hjärta, inte det som fångar dina ögon.",
    author: "– Roy T. Bennett",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Vi glädjer oss över fjärilens skönhet, men erkänner sällan de förändringar den har genomgått för att uppnå den skönheten.",
    author: "– Maya Angelou",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Förändring är svårast i början, rörigast i mitten och bäst i slutet.",
    author: "– Robin Sharma",
  },
  {
    category: "Inspirerande citat",
    quote: "Du är tillräcklig som du är. Du har inget att bevisa för någon.",
    author: "– Maya Angelou",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Jag har inte slutat vara rädd, men jag har slutat låta rädsla styra mig.",
    author: "– Erica Jong",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det är bättre att korsa startlinjen och drabbas av konsekvenserna än att bara stirra på linjen resten av ditt liv.",
    author: "– Paulo Coelho",
  },
  {
    category: "Inspirerande citat",
    quote: "Sänd ut vad du helst vill få tillbaka.",
    author: "– Robin Sharma",
  },
  {
    category: "Inspirerande citat",
    quote: "Ju mindre du försöker imponera, desto fridfullare kan du vara.",
    author: "– Maxime Lagacé",
  },
  {
    category: "Inspirerande citat",
    quote: "Den tid du tycker om att slösa bort är inte bortslösad tid.",
    author: "– Marthe Troly-Curtin",
  },
  {
    category: "Inspirerande citat",
    quote: "De små sakerna? De små stunderna? De är inte små.",
    author: "– John Zabat-Zinn",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Stunden du börjar bry dig om vad andra tycker, är stunden du slutar vara dig själv.",
    author: "– Meryl Streep",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Kom ihåg: om någon säger att det är omöjligt så är det omöjligt för dem, inte för dig.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det första steget mot att få det du vill ha ut av livet är att bestämma vad du vill ha.",
    author: "- Ben Stein",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Du lever bara en gång, men om du lever det på rätt sätt så är det tillräckligt.",
    author: "- Mae West",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det är viktigare att leva ett liv som känns bra på insidan, än ett som ser bra ut på utsidan.",
    author: "- Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Långsamt leder också framåt.",
    author: "- Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Prata inte med hat i munnen.",
    author: "- Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "En vanlig dag är en skatt.",
    author: "- Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Allt stort som skedde i världen skedde först i någon människas fantasi.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ge barnen kärlek, mera kärlek och ännu mera kärlek, så kommer folkvettet av sig själv.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote: "Och så ska man ju ha några stunder att bara sitta och glo också!",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Jag bara lever på och tycker att man ska behandla var dag som om den var den enda man har.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ibland måste man göra saker man inte vågar, annars är man ingen människa utan bara en liten lort.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Jag är en vacker och genomklok och lagom tjock man i mina bästa år.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Smälla ska det göra och roligt vill jag ha, annars är jag inte me’!",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote: "Man bör leva sitt liv så man blir vän med döden.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Man kan inte piska in något i barn, men man kan smeka fram mycket ur dem.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote: "Denna dagen ett liv.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Låt därför livet bära med sig vad det vill, och låt mig vara stark nog att ta emot vad det bjuder.",
    author: "- Astrid Lindgren",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Säg ”ja” till livet, och se hur livet plötsligt börjar arbeta för dig istället för emot dig.",
    author: "- Eckhart Tolle",
  },
  {
    category: "Inspirerande citat",
    quote: "Det finns ingen bättre utbildning än motgångar.",
    author: "- Benjamin Disraeli",
  },
  {
    category: "Inspirerande citat",
    quote: "Sjömannen ber inte om medvind, han lär sig segla.",
    author: "- Gustaf Lindborg",
  },
  {
    category: "Inspirerande citat",
    quote: "De med starkast hjärta är även de med flest ärr.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Du kan inte skydda dig själv från sorg utan att skydda dig själv från lycka.",
    author: "– Jonathan Saffran Foer",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Den som slutar lära sig är gammal, oavsett tjugo eller åttio. Den som fortsätter lära sig stannar som ung. Det största i livet är att behålla din hjärna ung.",
    author: "– Henry Ford",
  },
  {
    category: "Inspirerande citat",
    quote: "Livet är generellt något som händer någon annanstans.",
    author: "– Alan Bennett",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Du måste fråga dig, huruvida du vandrar på den rätta stigen till den rätta porten eller inte.",
    author: "– Frankfurtaren",
  },
  {
    category: "Inspirerande citat",
    quote: "Vi lever på vad vi får, men vi skapar ett liv på det vi ger.",
    author: "– Winston Churchill",
  },
  {
    category: "Inspirerande citat",
    quote: "Bättre att leva ett år som tiger än hundra som ett får.",
    author: "– Madonna",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ge inte upp all din glädje för en idé som du brukade ha om dig själv som inte är sann längre.",
    author: "– Cheryl Strayed",
  },
  {
    category: "Inspirerande citat",
    quote: "Du behöver inte bli någon du inte är för att bli bättre än du var.",
    author: "– Sidney Poitier",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Förändring är lagen om livet. Och de som endast letar upp det förflutna eller nuet kommer garanterat att missa framtiden.",
    author: "– John F. Kennedy",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Le åt döden! Hur kan detta vara möjligt om icke livet vore komiskt i sig självt? Så mycket bråk för så litet.",
    author: "– August Strindberg",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Livet är verkligen lätt, men vi insisterar på att göra det komplicerat.",
    author: "– Confucius",
  },
  {
    category: "Inspirerande citat",
    quote: "Gå vidare på din väg, då den endast existerar genom dina steg.",
    author: "– Augustine of Hippo",
  },
  {
    category: "Inspirerande citat",
    quote: "Det finns tre konstanter i livet… förändring, val och principer.",
    author: "– Stephen Covey",
  },
  {
    category: "Inspirerande citat",
    quote: "Antingen så hittar jag en väg, eller så skapar jag en.",
    author: "– Philip Sidney",
  },
  {
    category: "Inspirerande citat",
    quote: "Avbilden är en dröm. Skönheten är verklig.",
    author: "– Richard Bach",
  },
  {
    category: "Inspirerande citat",
    quote: "Det finns mer till livet än att öka dess hastighet.",
    author: "– Mahatma Gandhi",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Den högsta nöjet i livet är att göra det som folk säger att du inte får.",
    author: "– Walter Bagehot",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Påstå inte att världen är skyldig dig någonting. Det är den inte. Världen var här först.",
    author: "- Mark Twain",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Livet är som en stor målarduk – du måste kasta alla färger du kan på den.",
    author: "- Danny Kaye",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Jag tycker att alla människor borde få bli rika och berömda och kunna göra allt de drömmer om, så att de kan inse att det inte är lösningen.",
    author: "- Jim Carrey",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det finns ingen passion i att spela smått, i att nöja sig med ett liv som är mindre än det du har kapacitet för att leva.",
    author: "– Nelson Mandela",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Vad gagnade mig en gåva, om än aldrig så god, då jag ej begagnade den rätt?",
    author: "– Augustinus",
  },
  {
    category: "Inspirerande citat",
    quote: "Sänd ut vad du helst vill få tillbaka.",
    author: "– Robin Sharma",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Om inte vårens vind kan människohjärtat förstå, varför blåser den hit de fallande kronbladen då?",
    author: "– Wang Wei",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Vad du än gör i livet, omringa dig själv med smarta människor som kommer att argumentera med dig.",
    author: "– John Wooden",
  },
  {
    category: "Inspirerande citat",
    quote: "Ingen ångrar att de har gjort sitt bästa.",
    author: "– George Halas",
  },
  {
    category: "Inspirerande citat",
    quote: "Följ det som fångar ditt hjärta, inte det som fångar dina ögon.",
    author: "– Roy T. Bennett",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det finns ej något lidande för den som avslutat sin resa, som är utan sorg, som i varje avseende är befriad och som skakat av alla bojor.",
    author: "– Buddha",
  },
  {
    category: "Inspirerande citat",
    quote: "Det största äventyret du kan göra är att leva dina drömmars liv.",
    author: "– Oprah Winfrey",
  },
  {
    category: "Inspirerande citat",
    quote: "Den som förstår det rimliga kan också åstadkomma det storslagna.",
    author: "– Stefan Stenudd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Vi glädjer oss över fjärilens skönhet, men erkänner sällan de förändringar den har genomgått för att uppnå den skönheten.",
    author: "– Maya Angelou",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Jag kan summera allting jag lärt mig om livet på tre ord: det går vidare.",
    author: "– Robert Frost",
  },
  {
    category: "Inspirerande citat",
    quote: "Livet är det som händer medan du gör upp andra planer.",
    author: "– John Lennon",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Förändring är svårast i början, rörigast i mitten och bäst i slutet.",
    author: "– Robin Sharma",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Den som blott ett ögonblick fullkomligt lämnar allt, den kommer att få allt.",
    author: "– Mäster Eckhart",
  },
  {
    category: "Inspirerande citat",
    quote: "Livet är ett vågat äventyr eller ingenting alls.",
    author: "– Helen Keller",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ett begär efter stillhet är strävandets förbannelse och medför en oändlighet av konflikter och smärta.",
    author: "– Jiddu Krishnamurti",
  },
  {
    category: "Inspirerande citat",
    quote: "Alla dör, men långt ifrån alla lever.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "När du tvivlar på hur långt du kan gå, kom ihåg hur långt du har kommit.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Livet är som att åka berg-och-dalbana. Du kan antingen skrika högt varje gång det går utför eller så kan du sträcka händerna i vädret och njuta av åkturen.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Vi skola äga, som om vi inte ägde, och dock vore i besittning av alla ting.",
    author: "– Paulus",
  },
  {
    category: "Inspirerande citat",
    quote: "Livet är en tragedi fylld av glädje.",
    author: "– Bernard Malamud",
  },
  {
    category: "Inspirerande citat",
    quote:
      "För vackra ögon, leta efter det goda i andra; för vackra läppar, tala endast med ord av värme; och för balans, gå med vetskapen om att du aldrig är ensam.",
    author: "– Audrey Hepburn",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Huru otaligt många de äro som lida av den vidriga och vitt spridda sjukan, att de ej blott måste framföra för den ena ilskna människan vad den andra i sin ilska sagt utan även därtill göra sina egna tillägg.",
    author: "– Augustinus",
  },
  {
    category: "Inspirerande citat",
    quote: "Den tid du tycker om att slösa bort är inte bortslösad tid.",
    author: "– Marthe Troly-Curtin",
  },
  {
    category: "Inspirerande citat",
    quote:
      "De flesta av oss slösar bort våra liv som om vi hade ytterligare ett på banken.",
    author: "– Ben Irwin",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Människor växer med erfarenhet om de bemöter livet med ärlighet och mod. Det är så karaktär skapas.",
    author: "– Eleanor Roosevelt",
  },
  {
    category: "Inspirerande citat",
    quote: "Den som är trogen i det minsta, han är ock trogen i mycket.",
    author: "– Augustinus",
  },
  {
    category: "Inspirerande citat",
    quote: "De små sakerna? De små stunderna? De är inte små.",
    author: "– John Zabat-Zinn",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ju mer sand som har runnit genom livets timglas, desto klarare ser vi genom det.",
    author: "– Niccolò Machiavelli",
  },
  {
    category: "Inspirerande citat",
    quote: "Varje person måste leva sitt liv som en modell för andra.",
    author: "– Rosa Parks",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Livet är intressant… i slutet blir dina största smärtor dina största styrkor.",
    author: "– Drew Barrymore",
  },
  {
    category: "Inspirerande citat",
    quote: "Endast ett liv levt för andra är ett liv med värde.",
    author: "– Albert Einstein",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Se på universums föreställning, men bli inte uppslukad av den. Jag ser livet och döden som vågor på havet. Jag är medvetandets hav.",
    author: "– Paramahansa Yogananda",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det är bättre att korsa startlinjen och drabbas av konsekvenserna än att bara stirra på linjen resten av ditt liv.",
    author: "– Paulo Coelho",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Anpassningsförmåga i stället för ståndaktighet, följsamhet i stället för orubblighet. Det är den tillmötesgående som i längden får sin vilja igenom, och som härdar ut.",
    author: "– Stefan Stenudd",
  },
  {
    category: "Inspirerande citat",
    quote: "Om man reser sig en gång mer än man faller, så har man lyckats",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Alla dessa dagar som kom och gick, inte visste jag att det var livet.",
    author: "– Stig Johansson",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Att vara nonchalant är inte mycket till skam, som att vara ovillig att lära sig.",
    author: "– Benjamin Franklin",
  },
  {
    category: "Inspirerande citat",
    quote: "Beundran är okunnighetens dotter.",
    author: "– Benjamin Franklin",
  },
  {
    category: "Inspirerande citat",
    quote: "Alla kan göra historia. Endast en stor man kan skriva den.",
    author: "– Oscar Wilde",
  },
  {
    category: "Inspirerande citat",
    quote: "De ting vi begär är det större fröjd att jaga än att äga.",
    author: "– William Shakespeare",
  },
  {
    category: "Inspirerande citat",
    quote: "Den som inte har något att dö för har inget att leva för.",
    author: "– Marockanskt ordspråk",
  },
  {
    category: "Inspirerande citat",
    quote: "Den som vill leva om sitt liv har inte levat.",
    author: "– Karen Blixen",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Den som inte griper sin chans kommer att grubbla över den hela livet.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Den som fruktar döden gläder sig inte åt livet.",
    author: "– Spanskt ordspråk",
  },
  {
    category: "Inspirerande citat",
    quote: "Den person som behärskar ögonblicket, behärskar livet.",
    author: "– Wolfram von Eschenbach",
  },
  {
    category: "Inspirerande citat",
    quote:
      "De människor som fått ut mest av livet är inte de som har levt ett sekel utan de som har levt varje minut.",
    author: "– Sidonie Gabrielle Colette",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Livet handlar inte om att hitta sig själv, utan om att skapa sig själv",
    author: "– John Wooden",
  },
  {
    category: "Inspirerande citat",
    quote: "Gör ditt bästa. Ingen kan göra mer än så.",
    author: "– John Wooden",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Livet är inte ett problem som måste lösas, utan en verklighet som ska upplevas",
    author: "– Rumi",
  },
  {
    category: "Inspirerande citat",
    quote: "Kom ihåg var du finner dörren till harmoni: den finns inom dig.",
    author: "– Rumi",
  },
  {
    category: "Inspirerande citat",
    quote: "Begränsa inte dina utmaningar, utmana dina begränsningar.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Lyssna inte på kritik från människor som du aldrig skulle be om ett gott råd.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Framgång är att gå från misslyckande till misslyckande utan att förlora entusiasmen.",
    author: "– Winston Churchill",
  },
  {
    category: "Inspirerande citat",
    quote: "Var den förändring du vill se i världen.",
    author: "– Mahatma Gandhi",
  },
  {
    category: "Inspirerande citat",
    quote: "Dröm stort och våga misslyckas.",
    author: "– Norman Vaughan",
  },
  {
    category: "Inspirerande citat",
    quote: "Det bästa sättet att förutsäga framtiden är att skapa den.",
    author: "– Peter Drucker",
  },
  {
    category: "Inspirerande citat",
    quote: "Målet i livet är inte att överleva, utan att trivas.",
    author: "– Maya Angelou",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Lita på dig själv. Tänk för dig själv. Handla för dig själv. Tala för dig själv. Var dig själv. Älska dig själv.",
    author: "– Rollo May",
  },
  {
    category: "Inspirerande citat",
    quote:
      "För att uppnå storhet bör man inte bara handla, utan också drömma, inte bara planera, utan också tro.",
    author: "– Anatole France",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Sätt ditt hjärta, sinne och själ i även dina minsta handlingar. Det är hemligheten till framgång.",
    author: "– Swami Sivananda",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ditt liv blir inte bättre genom att förändra omständigheterna, utan genom att förändra din inställning till dem.",
    author: "– Martha Beck",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det är inte vad som händer med dig, utan hur du reagerar på det som betyder något.",
    author: "– Epiktetos",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Följ din passion, var beredd att arbeta hårt och förlora mycket sömn.",
    author: "– Dedikerad till Steve Jobs",
  },
  {
    category: "Inspirerande citat",
    quote: "Om du vill vara lycklig, var.",
    author: "– Leo Tolstoy",
  },
  {
    category: "Inspirerande citat",
    quote: "Varje dag kan inte vara bra, men det finns något bra i varje dag.",
    author: "– Alice Morse Earle",
  },
  {
    category: "Inspirerande citat",
    quote: "Uthållighet är inte att stå fast, utan att hålla fast vid det.",
    author: "– Josh Billings",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ingenting i världen kan ersätta uthållighet. Inte talang. Inte begåvning. Ingenting.",
    author: "– Calvin Coolidge",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Var vänlig, för varje person du möter kämpar en kamp du inte vet något om.",
    author: "– Platon",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Människor kommer att glömma vad du sa och vad du gjorde, men människor kommer aldrig att glömma hur du fick dem att känna.",
    author: "– Maya Angelou",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Om du vill uppnå storhet, sluta fråga om du är kapabel till det och börja agera som om du är det.",
    author: "– Johann Wolfgang von Goethe",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Må bra i ditt nuvarande ögonblick, och din rikedom kommer att manifestera sig.",
    author: "– Rhonda Byrne",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Om du är förändringen du vill se, kommer du aldrig att känna dig övergiven.",
    author: "– Deepak Chopra",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Varje ögonblick är en ny möjlighet att vara vad vi aldrig har varit.",
    author: "– P.D. James",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Ditt liv är ditt budskap till världen. Se till att det är meningsfullt.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Du är aldrig för gammal för att sätta ett nytt mål eller drömma en ny dröm.",
    author: "– C.S. Lewis",
  },
  {
    category: "Inspirerande citat",
    quote: "Om du inte kan göra något bra, så gör åtminstone inget ont.",
    author: "– Franklin D. Roosevelt",
  },
  {
    category: "Inspirerande citat",
    quote:
      "För att bli stor, börja där du är, använd vad du har, gör vad du kan.",
    author: "– Arthur Ashe",
  },
  {
    category: "Inspirerande citat",
    quote: "Att ge är att få.",
    author: "– Okänd",
  },
  {
    category: "Inspirerande citat",
    quote: "Älska livet du lever. Lev livet du älskar.",
    author: "– Bob Marley",
  },
  {
    category: "Inspirerande citat",
    quote: "För att vinna stora priser, är du tvungen att gå förbi det säkra.",
    author: "– Peter Drucker",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Det är inte hur mycket vi gör, utan hur mycket kärlek vi lägger i det vi gör som räknas.",
    author: "– Moder Teresa",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Lyckan är inte något klargjort. Den kommer från dina egna handlingar.",
    author: "– Dalai Lama",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Förmågan att hålla två tankar i huvudet samtidigt och ändå kunna fungera är ett tecken på en intelligent människa.",
    author: "– F. Scott Fitzgerald",
  },
  {
    category: "Inspirerande citat",
    quote: "Vad vi tror om oss själva blir sanning för oss.",
    author: "– Louise Hay",
  },
  {
    category: "Inspirerande citat",
    quote: "I det ögonblick du ger upp är kampen över.",
    author: "– Louis L'Amour",
  },
  {
    category: "Inspirerande citat",
    quote:
      "En människa som aldrig har begått ett misstag har aldrig försökt något nytt.",
    author: "– Albert Einstein",
  },
  {
    category: "Inspirerande citat",
    quote: "Förändra ditt tankesätt och du förändrar din värld.",
    author: "– Norman Vincent Peale",
  },
  {
    category: "Inspirerande citat",
    quote: "Ju större svårighet, desto större ära att övervinna den.",
    author: "– Molière",
  },
  {
    category: "Inspirerande citat",
    quote:
      "Vägen till framgång och vägen till misslyckande är nästan exakt densamma.",
    author: "– Colin R. Davis",
  },
  {
    category: "Inspirerande citat",
    quote: "Våga, även om du är rädd.",
    author: "– H. Jackson Brown Jr.",
  },
  {
    category: "Motiverande citat",
    quote: "Du missar 100% av de gånger du inte försöker.",
    author: "- Wayne Gretzky",
  },
  {
    category: "Motiverande citat",
    quote: "Självförtroende är framgångens första hemlighet.",
    author: "- Ralph Waldo Emerson",
  },
  {
    category: "Motiverande citat",
    quote: "Misslyckande är framgång om vi lär oss från det.",
    author: "- Malcolm Forbes",
  },
  {
    category: "Motiverande citat",
    quote:
      "Misstag är bara möjligheten att börja igen, och denna gång på ett mer intelligent vis.",
    author: "- Henry Ford",
  },
  {
    category: "Motiverande citat",
    quote:
      "Det finns en drivkraft som är kraftfullare än ånga, elektricitet och atomkraft: viljan.",
    author: "- Albert Einstein",
  },
  {
    category: "Motiverande citat",
    quote:
      "Framgång har en enkel formel: gör ditt bästa och folk kan komma att tycka om det.",
    author: "- Sam Ewing",
  },
  {
    category: "Motiverande citat",
    quote: "Svårigheter är egentligen bara saker att överkomma.",
    author: "- Sir Ernest Henry Shackleton",
  },
  {
    category: "Motiverande citat",
    quote: "Vänlighet och handling får timmarna att verka korta.",
    author: "- William Shakespeare",
  },
  {
    category: "Motiverande citat",
    quote: "Förberedelse är nyckeln till framgång, framför allt annat.",
    author: "- Alexander Graham Bell",
  },
  {
    category: "Motiverande citat",
    quote:
      "Tänk vad underbart det är att ingen behöver vänta en enda minut för att börja förändra världen.",
    author: "- Anne Frank",
  },
  {
    category: "Motiverande citat",
    quote:
      "Låt inte din hjärna att säga åt ditt hjärta vad du ska göra. Hjärnan ger upp för lätt.",
    author: "- Paulo Coelho",
  },
  {
    category: "Motiverande citat",
    quote:
      "Det som definierar oss människor är hur vi reser oss efter ett fall.",
    author: "- Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Om man reser sig en gång mer än man faller, så har man lyckats.",
    author: "- Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Fråga dig själv om det du gör idag tar dig närmare där du vill vara imorgon.",
    author: "- Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Det är när man befinner sig mitt i skiten som man växer som mest.",
    author: "- Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Ge aldrig upp – ge aldrig, aldrig, aldrig, aldrig upp, oavsett om det gäller små eller stora, mer eller mindre betydelsefulla saker.",
    author: "- Winston Churchill",
  },
  {
    category: "Motiverande citat",
    quote: "Att vinna är inte allt, det är det enda.",
    author: "- Vince Lombardi",
  },
  {
    category: "Motiverande citat",
    quote: "Det är alltid början som kräver den största mödan.",
    author: "- James Cash Penny",
  },
  {
    category: "Motiverande citat",
    quote: "Lev livet till fullo och fokusera på det positiva.",
    author: "- Matt Cameron",
  },
  {
    category: "Motiverande citat",
    quote:
      "Jag anser att en person som erövrar sina önskningar är modigare än den som besegrar sina fiender; för den svåraste segern är över en själv.",
    author: "- Aristoteles",
  },
  {
    category: "Motiverande citat",
    quote: "80% av framgången är att vara närvarande.",
    author: "- Woody Allen",
  },
  {
    category: "Motiverande citat",
    quote: "Oavsett om du tror att du kan eller inte så har du rätt.",
    author: "- Henry Ford",
  },
  {
    category: "Motiverande citat",
    quote:
      "Om du har byggt luftslott så behöver ditt arbete inte gå förlorat, det är där det borde vara. Lägg nu grunden under dem.",
    author: "- George Bernard Shaw",
  },
  {
    category: "Motiverande citat",
    quote:
      "Om du inte kämpar för det du vill ha, gråt då inte för det du har förlorat.",
    author: "- Anonym",
  },
  {
    category: "Motiverande citat",
    quote:
      "Människan behöver sina svårigheter, för de är nödvändiga för att njuta av framgången.",
    author: "- A.P.J. Abdul Kalam",
  },
  {
    category: "Motiverande citat",
    quote: "Den som inte gör misstag försöker inte tillräckligt.",
    author: "- Wess Robert",
  },
  {
    category: "Motiverande citat",
    quote: "Det ej undersökta livet är inte värt att leva.",
    author: "- Sokrates",
  },
  {
    category: "Motiverande citat",
    quote:
      "Den som är en riktig sökare vet, lär sig och upptäcker att det bara är han själv som är ansvarig för det som händer.",
    author: "- Jorge Bucay",
  },
  {
    category: "Motiverande citat",
    quote: "Misstag är inte ett alternativ. Alla måste lyckas.",
    author: "- Arnold Schwarzenegger",
  },
  {
    category: "Motiverande citat",
    quote: "Varje strike för mig närmre nästa home run.",
    author: "- Babe Ruth",
  },
  {
    category: "Motiverande citat",
    quote:
      "Sitt inte och vänta på att saker ska komma till dig. Kämpa för det du vill ha, ta ansvar för dig själv.",
    author: "- Michel Tanaus",
  },
  {
    category: "Motiverande citat",
    quote: "Allting har en skönhet, men det är inte alla som ser den.",
    author: "- Konfucius",
  },
  {
    category: "Motiverande citat",
    quote: "En person med en ny idé är en surpuppa tills idén lyckas.",
    author: "- Mark Twain",
  },
  {
    category: "Motiverande citat",
    quote:
      "För att uppnå storhet, sluta fråga om du är kapabel till det och börja agera som om du är det.",
    author: "– Pablo Picasso",
  },
  {
    category: "Motiverande citat",
    quote:
      "Ditt liv blir inte bättre genom att klaga på det. Det blir bättre genom att förändra det.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Varje dag är en ny möjlighet att förändra ditt liv.",
    author: "– Zig Ziglar",
  },
  {
    category: "Motiverande citat",
    quote:
      "Framgång är inte slutmålet, utan resan att bli den bästa versionen av dig själv.",
    author: "– Zig Ziglar",
  },
  {
    category: "Motiverande citat",
    quote:
      "Ditt liv är en manifestation av dina tankar. Förändra dina tankar och du förändrar ditt liv.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Förändring är smärtsam, men inget är så smärtsamt som att fastna på samma ställe år efter år.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Det är inte vem du är som håller dig tillbaka, det är vem du tror att du inte är.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Sätt ditt hjärta, sinne och själ i även dina minsta handlingar. Det är hemligheten till framgång.",
    author: "- Swami Sivananda",
  },
  {
    category: "Motiverande citat",
    quote:
      "Var inte rädd för förändring. Du kanske förlorar något bra, men du kan också få något ännu bättre.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Du är starkare än du tror. Kom igen, saker blir bättre.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Ditt liv är din egen resa och dina egna val att göra.",
    author: "- John C. Maxwell",
  },
  {
    category: "Motiverande citat",
    quote: "Det är aldrig för sent att bli den du ville vara.",
    author: "- George Eliot",
  },
  {
    category: "Motiverande citat",
    quote: "Du kommer aldrig ångra att du satsade på dig själv.",
    author: "- Wayne Dyer",
  },
  {
    category: "Motiverande citat",
    quote: "Starka människor bryter också ihop, men de ger aldrig upp.",
    author: "- Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Du är kapabel till mer än du tror.",
    author: "- Marie Forleo",
  },
  {
    category: "Motiverande citat",
    quote:
      "För att uppnå något du aldrig har haft, måste du göra något du aldrig har gjort.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Det är inte omständigheterna som formar oss, det är våra val.",
    author: "- Tony Robbins",
  },
  {
    category: "Motiverande citat",
    quote:
      "Varje morgon har två handtag. Vi kan ta tag i handtaget med oro eller handtaget med möjlighet.",
    author: "- Henry Ward Beecher",
  },
  {
    category: "Motiverande citat",
    quote: "Att tro att du kan är det första steget mot att uppnå något.",
    author: "- Zig Ziglar",
  },
  {
    category: "Motiverande citat",
    quote: "Varje dag är en ny chans att förändra ditt liv.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Vägen till framgång är alltid under konstruktion.",
    author: "- Lily Tomlin",
  },
  {
    category: "Motiverande citat",
    quote:
      "Lita på processen. En dag kommer allt att meningen med allt att bli uppenbar.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Vägen till framgång är att alltid vara redo att ta nästa steg.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Låt dina drömmar vara större än dina rädslor, och dina handlingar vara starkare än dina tvivel.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Ditt liv blir bättre när du blir bättre.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Ingen kan göra allt, men alla kan göra något.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Möjligheter dyker upp ofta i förklädnad av motgång eller tillfällig nederlag.",
    author: "- Napoleon Hill",
  },
  {
    category: "Motiverande citat",
    quote: "Det är inte viktigt hur långsamt du går så länge du inte stannar.",
    author: "- Confucius",
  },
  {
    category: "Motiverande citat",
    quote: "Vägen till framgång är aldrig rak.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Styrkan hos människor ligger i deras förmåga att förändras.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote: "Det enda sättet att göra ett bra jobb är att älska det du gör.",
    author: "- Steve Jobs",
  },
  {
    category: "Motiverande citat",
    quote: "Tänk inte smått. Tänk stort och våga misslyckas.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Du är inte här för att vara genomsnittlig. Du är här för att vara otrolig.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Framgång är inte nyckeln till lycka. Lycka är nyckeln till framgång. Om du älskar det du gör, kommer du att lyckas.",
    author: "- Albert Schweitzer",
  },
  {
    category: "Motiverande citat",
    quote:
      "Förlora aldrig hoppet. Du vet aldrig vad morgondagen kan föra med sig.",
    author: "– Okänd",
  },
  {
    category: "Motiverande citat",
    quote:
      "Om du inte är beredd att riskera det vanliga får du nöja dig med det vanliga.",
    author: "- Jim Rohn",
  },
  {
    category: "Motiverande citat",
    quote: "Det verkar alltid vara omöjligt tills det är gjort.",
    author: "- Nelson Mandela",
  },
  {
    category: "Motiverande citat",
    quote: "Om du går igenom helvetet, fortsätt.",
    author: "- Winston S. Churchill",
  },
  {
    category: "Motiverande citat",
    quote: "Jag går långsamt, men jag går aldrig tillbaka.",
    author: "- Abraham Lincoln",
  },
  {
    category: "Motiverande citat",
    quote: "Brag är en bra hund, men Holdfast är en bättre.",
    author: "- Charles Dickens",
  },
  {
    category: "Motiverande citat",
    quote:
      "Få saknar talang, men de flesta människor saknar vision och uthållighet för att utveckla sina talanger.",
    author: "- Orrin Woodward",
  },
  {
    category: "Motiverande citat",
    quote:
      "Droppande vatten urholkar sten, inte genom kraft utan genom envishet.",
    author: "- Ovidius",
  },
  {
    category: "Motiverande citat",
    quote: "Svårigheter gör eller knäcker människor.",
    author: "- Margaret Mitchell",
  },
  {
    category: "Motiverande citat",
    quote:
      "Det spelar ingen roll hur långsamt du går så länge du inte stannar.",
    author: "- Konfucius",
  },
  {
    category: "Motiverande citat",
    quote: "Ibland är till och med att leva en handling av mod.",
    author: "- Lucius Annaeus Seneca",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Jag är inte för gammal för att lära mig något nytt, jag är bara för gammal för att bry mig.",
    author: "- Okänd",
  },
  {
    category: "Humoristiska citat",
    quote: "Bevare mig för den unge läkaren och den gamle barberaren.",
    author: "- Benjamin Franklin",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Adam hade en stor fördel. När han sade någonting bra visste han att ingen hade sagt det före honom.",
    author: "- Oscar Wilde",
  },
  {
    category: "Humoristiska citat",
    quote: "Ta inte livet för allvarligt. Du kommer aldrig komma ut levande.",
    author: "- Elbert Hubbard",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Ingen människa har ett tillräckligt bra minne för att bli en framgångsrik lögnare.",
    author: "- Abraham Lincoln",
  },
  {
    category: "Humoristiska citat",
    quote: "Jag är ledsen. Om du hade haft rätt hade jag hållit med dig.",
    author: "- Mitch Hedberg",
  },
  {
    category: "Humoristiska citat",
    quote: "Bakom varje man finns en kvinna som himlar med ögonen.",
    author: "- Jim Carrey",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Jag må vara full, fröken, men imorgon kommer jag att vara nykter och du kommer fortfarande att vara ful.",
    author: "- Winston Churchill",
  },
  {
    category: "Humoristiska citat",
    quote: "Lathet är inget annat än vanan av att vila innan du blir trött.",
    author: "- Jules Renard",
  },
  {
    category: "Humoristiska citat",
    quote: "Om du inte lyckas i början… så mycket för fallskärmshoppning.",
    author: "- Henny Youngman",
  },
  {
    category: "Humoristiska citat",
    quote: "Prata inte om dig själv. Det kommer att ske när du lämnar.",
    author: "- Wilson Mizner",
  },
  {
    category: "Humoristiska citat",
    quote: "Varför kallar de det rusningstid när ingenting rör sig?",
    author: "- Robin Williams",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Jag tror att om livet ger dig citroner bör du göra lemonad… Och försök hitta någon som har vodka, och ha fest.",
    author: "- Ron White",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Du vet att du har alkoholproblem när bartendern kan ditt namn — och du har aldrig varit på den baren förut.",
    author: "- Zach Galifianakis",
  },
  {
    category: "Humoristiska citat",
    quote: "De fyra vackraste orden i vårt språk: Jag sa ju det.",
    author: "- Gore Vidal",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Det närmaste en person någonsin kommer till perfektion är när man fyller ut en jobbansökan.",
    author: "- Stanley Randall",
  },
  {
    category: "Humoristiska citat",
    quote:
      "När man tänker för mycket kan man skapa problem som inte fanns där från början.",
    author: "- Nalle Puh",
  },
  {
    category: "Humoristiska citat",
    quote: "Håll ut, de första fem dagarna efter helgen är jobbigast.",
    author: "- Okänd",
  },
  {
    category: "Humoristiska citat",
    quote: "Om man går fort och ler mycket så märker ingen att man är ful.",
    author: "- Lasse Åberg",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Jag har inga problem med autoritet, bara problem med att följa order.",
    author: "- George Carlin",
  },
  {
    category: "Humoristiska citat",
    quote: "Jag försöker tänka, men ingenting händer!",
    author: "- Curly Howard",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Om du tror att ingen bryr sig om dig, försök att inte betala dina räkningar i tid.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote: "Att vara smart är som att vara snygg. Ibland märker folk det inte.",
    author: " – Okänd",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Jag behöver inte gå till gymmet. Jag får tillräckligt med träning genom att försöka sätta på mig mina jeans.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Varför försöker vi undvika misslyckande med alla medel? Det är som att försöka undvika att bli blöt när du duschar.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote: "Var försiktig med att läsa hälsoböcker. Du kan dö av ett tryckfel.",
    author: "- Mark Twain",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Jag älskar arbete. Jag skulle kunna sitta och titta på det i timmar.",
    author: "- Jerome K. Jerome",
  },
  {
    category: "Humoristiska citat",
    quote: "Jag är inte lat, jag är i energisparläge.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Jag har alltid lämnat saker till sista minuten. Jag tycker om att känna mig som en actionhjälte.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote: "Mitt hus är renare än mitt sinne. Tyvärr bor jag i mitt sinne.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote: "Varför träna när du kan äta en chokladkaka istället?",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote: "Mitt favoritgymsätt är genom tangentbordet.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Att vara vuxen är som att veckla upp en trasa. Du blir bara större och skrynkligare.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Varför ska jag oroa mig för döden? Den kommer att oroa sig för mig tillräckligt snart.",
    author: "– Okänd",
  },

  {
    category: "Humoristiska citat",
    quote:
      "Hjärnceller, hårceller och hudceller dör hela tiden, men fettceller verkar ta mig tusan ha evigt liv!",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Du vet att du börjar bli gammal när du inte kan gå förbi toaletten utan att tänka: Jag kan lika gärna kissa nu när jag ändå är här.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Klaga inte på din partner. Hade hen varit perfekt hade hen nog valt någon annan.",
    author: "– Okänd",
  },
  {
    category: "Humoristiska citat",
    quote:
      "Det är okej att du inte delar min åsikt. Jag kan ju inte tvinga dig att ha rätt.",
    author: "– Okänd",
  },
  {
    category: "Filosofiska citat",
    quote: "Livet måste vara förstått baklänges; men det måste levas framåt.",
    author: "- Søren Kierkegaard'",
  },
  {
    category: "Filosofiska citat",
    quote: "Att vara är att vara uppfattad.",
    author: "- George Berkeley",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Vi är vad vi upprepade gånger gör. Excellence är därför inte en handling, utan en vana.",
    author: "- Aristoteles",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Du kan inte stiga två gånger i samma flod, för andra och ännu andra vatten strömmar alltid emot dig.",
    author: "- Herakleitos",
  },
  {
    category: "Filosofiska citat",
    quote: "Människans öde är att skapa sig själv.",
    author: "- Jean-Paul Sartre",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Den som har en varför att leva kan stå ut med nästan vilket hur som helst.",
    author: "- Friedrich Nietzsche",
  },
  {
    category: "Filosofiska citat",
    quote: "Jag tänker, alltså finns jag. (Cogito, ergo sum.)",
    author: "- René Descartes",
  },
  {
    category: "Filosofiska citat",
    quote: "Det enda vi har att frukta är fruktan själv.",
    author: "- Franklin D. Roosevelt",
  },
  {
    category: "Filosofiska citat",
    quote: "Människan är född fri, men överallt är hon i kedjor.",
    author: "- Jean-Jacques Rousseau",
  },
  {
    category: "Filosofiska citat",
    quote: "Allt ont är bara brist på kunskap.",
    author: "- Sokrates",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Det finns ingen kärlek utan förståelse, och det finns ingen förståelse utan kärlek.",
    author: "- Välgörenhetsorden",
  },
  {
    category: "Filosofiska citat",
    quote: "Det som inte dödar oss gör oss starkare.",
    author: "- Friedrich Nietzsche",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Förändring är lagen om livet. Och de som bara tittar på det förflutna eller nuet kommer säkert att missa framtidens väg.",
    author: "- John F. Kennedy",
  },
  {
    category: "Filosofiska citat",
    quote:
      "För att vara själv i en värld som ständigt försöker göra dig något annat är den största bedriften.",
    author: "- Ralph Waldo Emerson",
  },
  {
    category: "Filosofiska citat",
    quote: "Människan är fördömd att vara fri.",
    author: "- Jean-Paul Sartre",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Det som kan mätas är inte alltid det viktigaste, och det som är viktigast kan inte alltid mätas.",
    author: "- Albert Einstein",
  },
  {
    category: "Filosofiska citat",
    quote: "För att förstå allt är att förlåta allt.",
    author: "- Leo Tolstoy",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Tvivel är en av de namnlösa smärtorna i våra själar, som vi skulle kunna undvika om vi blott kunde gå från vilja till vilja utan att tveka eller vackla.",
    author: "- William James",
  },
  {
    category: "Filosofiska citat",
    quote: "All sann kunskap börjar med känslan att vi inte vet.",
    author: "- Sokrates",
  },
  {
    category: "Filosofiska citat",
    quote: '"Människan är alltings mått." ',
    author: "- Protagoras",
  },
  {
    category: "Filosofiska citat",
    quote: "Att lära många ting lär oss inte att förstå.",
    author: "- Herakleitos",
  },
  {
    category: "Filosofiska citat",
    quote: "Svin njuter av gyttja mer än rent vatten.",
    author: "- Herakleitos",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Den som vill försöka bli lycklig skall inte lägga an på att öka sina tillgångar utan på att begränsa sina krav.",
    author: "- Platon",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Den kloka människan eftersträvar inte njutning, utan frihet från smärta.",
    author: "- Aristoteles",
  },
  {
    category: "Filosofiska citat",
    quote: "Inget kan skapas ur inget.",
    author: "- Lucretius",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Om jag ändå kunde finna sanningen lika lätt som jag kan avslöja osanningen.",
    author: "- Cicero",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Kärlek är ett försök att inleda vänskap med någon vars skönhet lockar oss.",
    author: "- Cicero",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Den är ingen filosof, som inte diktar och målar, därför säger man inte utan skäl att förstå är att skåda fantasigestalter och förståelse är fantasi.",
    author: "- Giordano Bruno",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Det är inte den som av andra tros vara lycklig som är det, utan den som själv tror sig vara det.",
    author: "- Montaigne",
  },
  {
    category: "Filosofiska citat",
    quote: '"Att vara filosof är att lära sig att dö." - Montaigne',
    author: "Okänd",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Döden angår dig varken som död eller levande: som levande därför att du är, som död därför att du inte är.",
    author: "- Montaigne",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Att en handling är nyttig är inget gott skäl för att den är lovvärd och ädel.",
    author: "- Montaigne",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Klokhet är nämligen inget annat än erfarenhet, vilket alla människor som lika länge ägnat sig åt samma sak förvärvar i lika mån.",
    author: "- Hobbes",
  },
  {
    category: "Filosofiska citat",
    quote: "Tvivel är vetandets begynnelse.",
    author: "- Descartes",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Människan är bara ett rö, det svagaste i naturen, men hon är ett rö som tänker. Det behövs inte att hela universum griper till vapen för att krossa henne. Några dunster, en vattendroppe räcker för att tillintetgöra henne. Men även om hela universum vältrade sig över henne skulle människan fortfarande vara ädlare än den makt som dödade henne. Ty människan vet att hon dör och universum är henne övermäktigt. Universum vet intet därom.",
    author: "- Pascal",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Av alla vetenskaper är vetenskapen om människan den som är henne mest värdig. Likväl är denna vetenskap inte den flitigast bedrivna, ej heller den mest utvecklade, bland dem vi äger.",
    author: "- Malebranche",
  },
  {
    category: "Filosofiska citat",
    quote: "Människan är född fri och överallt är hon i bojor.",
    author: "- Rousseau",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Om det är förnuftet som formar människan, så är det känslan som leder henne.",
    author: "- Rousseau",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Den första människa, som inhägnade ett stycke mark, kom på att säga 'Detta är mitt!' och fann människor nog enfaldiga att tro honom, var samhällets verkliga grundare. Hur många brott, krig, och mord; hur mycken olycka och fasa skulle inte den mänskliga rasen ha besparats om något ryckt upp pålarna, fyllt igen diket och ropat till sina medmänniskor: 'Akta er för denne bedragare, ni är förlorare om ni glömmer att jordens frukter tillhör alla och jorden själv tillhör ingen!",
    author: "- Rousseau",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Nya tankesätt är oftast resultat av en självisk inställning och inskränkta åsikter. Människor som aldrig ser tillbaka till sina förfäder kommer heller aldrig att se fram mot sina efterkommande.",
    author: "- Edmund Burke",
  },
  {
    category: "Filosofiska citat",
    quote: "Det är endast i staten människan har en förnuftig existens.",
    author: "- Hegel",
  },
  {
    category: "Filosofiska citat",
    quote: "Envar har så mycket rättigheter som han har makt.",
    author: "- Spinoza",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Filosoferna har bara tolkat världen på olika sätt; vad det gäller är att förändra den.",
    author: "- Karl Marx",
  },
  {
    category: "Filosofiska citat",
    quote: "Tag ifrån mig allt, bara inte mitt tungsinne!",
    author: "- Kierkegaard",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Livet är inte ett problem som skall lösas utan en verklighet som skall upplevas.",
    author: "- Kierkegaard",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Jag känner mig som en pjäs i schackspelet bör göra när motspelaren säger om den: den pjäsen kan inte flyttas.",
    author: "- Kierkegaard",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Jag indelar min tid på följande vis: halva tiden sover jag, halva tiden drömmer jag.",
    author: "- Kierkegaard",
  },
  {
    category: "Filosofiska citat",
    quote: "Gud är död!",
    author: "- Nietzsche",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Sannerligen, en smutsig dröm är människan. Man måste redan nu vara ett hav för att kunna upptaga en smutsig ström utan att bliva oren.",
    author: "- Nietzsche",
  },
  {
    category: "Filosofiska citat",
    quote: "Stat kallar jag det, där alla är giftdrickare.",
    author: "- Nietzsche",
  },
  {
    category: "Filosofiska citat",
    quote: "Övertygelser är värre fiender till sanningen än lögner.",
    author: "- Nietzsche",
  },
  {
    category: "Filosofiska citat",
    quote: "Det som inte dödar mig gör mig starkare.",
    author: "- Nietzsche",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Smärta frågar alltid efter orsaken, medan lusten är benägen att vila i sig själv och inte blicka tillbaka.",
    author: "- Nietzsche",
  },
  {
    category: "Filosofiska citat",
    quote: "Livet är kort. Låt oss säga sanningen.",
    author: "- Schopenhauer",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Ensamhet är alla stora andars öde - ett öde som emellanåt beklagas, men som alltid väljes som det minst onda av två onda ting.",
    author: "- Schopenhauer",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Vetandet är av ett så mycket hårdare ämne än tron, att denna krossas, när de stöta samman.",
    author: "- Schopenhauer",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Den största visheten är att ögonblicket bör njutas och göras till livets ändamål, ty ögonblicket är ensamt det reala och allt annat blott en tankarnas lek.",
    author: "- Schopenhauer",
  },
  {
    category: "Filosofiska citat",
    quote: "Världen är inget fuskverk och djuren inga fabrikat för vårt bruk.",
    author: "- Schopenhauer",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Överflöd på vetande leder i grunden vilse och till att man tar miste på det egentliga problemet.",
    author: "- Heidegger",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Felet med vår värld är att de dumma är så säkra på sin sak och de kloka så fulla av tvivel.",
    author: "- Bertrand Russell",
  },
  {
    category: "Filosofiska citat",
    quote: "Abstraktion är tankens livsluft och tecknet på dess autenticitet.",
    author: "- Herbert Marcuse",
  },
  {
    category: "Filosofiska citat",
    quote: "Skepticism är återvändsgrändens berusning.",
    author: "- E.M Cioran",
  },
  {
    category: "Filosofiska citat",
    quote:
      "I filosofins kapplöpning vinner den som kan löpa långsammast. Eller den som sist når målet.",
    author: "- Wittgenstein",
  },
  {
    category: "Filosofiska citat",
    quote: "Ingenting är så svårt som att inte bedra sig.",
    author: "- Wittgenstein",
  },
  {
    category: "Filosofiska citat",
    quote: "Vad man icke kan tala om, därom måste man tiga.",
    author: "- Wittgenstein",
  },
  {
    category: "Filosofiska citat",
    quote: "Att börja tänka är detsamma som att börja bli underminerad.",
    author: "- Albert Camus",
  },
  {
    category: "Filosofiska citat",
    quote: "Människan är den enda varelse som vägrar vara den hon är.",
    author: "- Albert Camus",
  },
  {
    category: "Filosofiska citat",
    quote:
      "Jag anser att det måste vara ett mål att kunna karakterisera sina handlingar som vackra snarare än som plikter.",
    author: "- Arne Næss",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek är att se någon för den de önskar att de var, utan att någonsin förneka dem personen de faktiskt är.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek handlar inte om att hitta någon att leva med. Det handlar om att hitta någon du inte kan leva utan.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "Det finns bara en lycka i livet, att älska och att bli älskad.",
    author: "- George Sand",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är när den andra personens lycka är viktigare än din egen.",
    author: "- H. Jackson Brown, Jr.",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Älska som om du aldrig har blivit sårade, dansa som om ingen ser på dig, och sjung som om ingen lyssnar.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är inte något du finner. Kärlek är något som finner dig.",
    author: "- Loretta Young",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Du vet att du är förälskad när du inte kan somna eftersom verkligheten är äntligen bättre än dina drömmar.",
    author: "- Dr. Seuss",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är det som gör två människor sätter upp med varandra.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Den bästa kärleken är den som väcker själen och får oss att sträcka oss efter mer, som planterar en eld i våra hjärtan och bringar fred till våra sinnen.",
    author: "- Nicholas Sparks",
  },
  {
    category: "Kärlekscitat",
    quote: "Att älska och bli älskad är att känna solen från båda sidor.",
    author: "- David Viscott",
  },
  {
    category: "Kärlekscitat",
    quote: "Älska någon för den de är, inte för vad du vill att de ska vara.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek handlar om att ge och ta. Du ger först och tar senare.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Att älska är inte bara att se varandra, det är att se i samma riktning.",
    author: "- Antoine de Saint-Exupéry",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek är den enda skatten vi tar med oss från den här världen när vi går till nästa.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "För att älska och bli älskad är att känna solen från båda sidor.",
    author: "- David Viscott",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är när själen bor i en annans kropp.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek handlar om att upptäcka vårt eget öde i ödet för någon annan.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är det enda som växer när vi delar det.",
    author: "- Antoine de Saint-Exupéry",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är inte något du hittar. Kärlek är något som hittar dig.",
    author: "- Loretta Young",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Av alla mänskliga passioner är kärleken den starkaste, ty den angriper tillfälligt huvudet, hjärtat och sinnena.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är framför allt att man ger sig själv som gåva.",
    author: "– Jean Anouilh",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Desto flera sätt vi kan hitta att uttrycka kärleken, desto mer kärlek upplever vi att vi får ta emot.",
    author: "– Nicklas Amran",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlekens dörr är svår att öppna och svår att stänga.",
    author: "– Kinesiskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote: "Man kan ge utan att älska men man kan inte älska utan att ge.",
    author: "– Carmichael",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Så bliva de då beståndande, tron, hoppet, kärleken, dessa tre; men störst bland dem är kärleken.",
    author: "– Paulus",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är en resa utan kompass i ett väglöst land. Ett äventyr.",
    author: "– Anne Swärd",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Det måste finnas en jämvikt mellan materiellt och andligt framåtskridande, en jämvikt som uppnås genom kärlek och medkänsla.",
    author: "– Dalai lama",
  },
  {
    category: "Kärlekscitat",
    quote:
      "En man vill alltid vara en kvinnas första kärlek – en kvinna vill alltid vara en mans sista äventyr.",
    author: "– Oscar Wilde",
  },
  {
    category: "Kärlekscitat",
    quote: "Du kan ge utan att älska, men du kan inte älska utan att ge.",
    author: "– Ami Carmichael",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Man kan utveckla ett korrekt förhållningssätt gentemot sina medmänniskor med hjälp av godhet, kärlek och respekt och genom att inse att alla människor hör ihop. Detta är viktigt eftersom våra medmänniskor gynnas av detta förhållningssätt lika mycket som av det vi gör.",
    author: "– Dalai lama",
  },
  {
    category: "Kärlekscitat",
    quote: "Fattigdom och kärlek låter sig svårligen dölja.",
    author: "– Francois de la Rochefoucauld",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Ett lyckligt äktenskap kräver att man förälskar sig många gånger och varje gång i samma person.",
    author: "– Mignon McLaughlin",
  },
  {
    category: "Kärlekscitat",
    quote:
      "I kärlek börjar man med att bedra sig själv och slutar med att bedra andra.",
    author: "– Oscar Wilde",
  },
  {
    category: "Kärlekscitat",
    quote: "Guld förblindar många; kärleken förblindar alla.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote:
      "En av de viktigaste egenskaperna är godhet. Med godhet, kärlek, medkänsla, med denna känsla som är essensen i broderskap och systerskap, når man inre frid. Denna känsla av omtanke är grunden till inre frid.",
    author: "– Dalai lama",
  },
  {
    category: "Kärlekscitat",
    quote: "Ge mig tusen kyssar, sedan hundra, sedan tusen till!",
    author: "– Catullus",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Gifta par som älskar varandra berättar tusentals saker för varandra utan att öppna munnen.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Att vara medveten om och uppleva enheten mellan dig själv och den andra är sann kärlek, sann omsorg, sann medkänsla.",
    author: "– Eckhart Tolle",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Det är med den äkta kärleken som med spökena: alla talar om den, men få har sett den.",
    author: "– Francois de la Rochefoucauld",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Om man hyser kärlek och medkänsla gentemot alla levande varelser, och särskilt gentemot sina fiender, så är det sann kärlek och medkänsla.",
    author: "– Dalai lama",
  },
  {
    category: "Kärlekscitat",
    quote:
      "En man är som regel en kvinnas säkra byte långt innan han själv har en aning om det.",
    author: "– Walter Winchell",
  },
  {
    category: "Kärlekscitat",
    quote: "Ett hjärta som älskat är alltid ungt.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Vilka dygder jag än beflitar mig om: har jag icke kärleken, så är jag intet.",
    author: "– Paulus",
  },
  {
    category: "Kärlekscitat",
    quote: "Förälskade sjunger av samma anledning som barn visslar i mörkret.",
    author: "– August Strindberg",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Ett ord befriar oss från all livets börda och smärta: det ordet är kärlek.",
    author: "– Sofokles",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Utan kärlek befinner sig mänskligheten i en mycket svår situation. Utan kärlek kommer vi att möta överväldigande svårigheter i framtiden. Kärlek är det viktigaste i allt mänskligt liv.",
    author: "– Dalai lama",
  },
  {
    category: "Kärlekscitat",
    quote:
      "När du är närvarande i detta ögonblick, då bryter du kontinuiteten i din berättelse om det förflutna och framtiden. Då uppstår sann intelligens, och även kärlek.",
    author: "– Eckhart Tolle",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärleken är blind.",
    author: "– Svenskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärleken är som en duva, håller man den för hårt kvävs den, håller man den för löst flyger den bort.",
    author: "– Danskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Om jag fick en blomma varje gång jag tänkte på dig, då kunde jag vandra i min trädgård för evigt.",
    author: "– Alfred Tennyson",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Det sägs att kärleken inte känner några gränser. Men gränserna är just det intressanta.",
    author: "– Jean-Luc Godard",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärleken övervinner allt.",
    author: "– Vergilius 19 f. Kr.",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlekens blommor skall vattnas med vin.",
    author: "– CM Bellman op 13",
  },
  {
    category: "Kärlekscitat",
    quote: "Du är kärleken själv – när du inte är rädd.",
    author: "– Nisargadatta Maharaj",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Men älska mig för kärleks skull, så att för alltid du kan älska, genom kärlekens hela evighet.",
    author: "– Elizabeth Barrett Browning",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Men att se henne var att älska henne, älska bara henne och älska för evigt.",
    author: "– Robert Burns",
  },
  {
    category: "Kärlekscitat",
    quote: "Den vet föga om kärleken som alltid talar om den.",
    author: "– Italienskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Att vara frikostig med handen är en sak, men att vara frikostig av hjärtat är något annat.",
    author: "– Jiddu Krishnamurti",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Egentligen finns vi till genom kärleken. Det är kärleken som bestämmer vad vi är.",
    author: "– William Sloane Coffin",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Det är omöjligt att vara att vara förälskad och klok på samma gång.",
    author: "– Francis Bacon",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek innebär att känna och acceptera varandra för vad man verkligen är, som att ge, som att försaka, som att förbli trofast när man möter svårigheter och besvikelser.",
    author: "– Cyprian Smith",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek föds ur glädjen att se på varandra, får näring ur behovet av att vara tillsammans och fulländas av det omöjliga i att vara åtskilda.",
    author: "– José Marti",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärleken skapar ett “vi” utan att förstöra ett “jag”.",
    author: "– Leo Buscaglia",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Innerst inne måste vi hysa kärlek till varandra, vi måste klart inse och förstå att vi har en gemensam mänsklig natur.",
    author: "– Dalai lama",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Själen är skapad av kärlek och strävar alltid efter att återvända till kärlek. Därför kan den aldrig finna frid eller lycka i andra saker. Det måste vara försjunken i kärlek.",
    author: "– Mechthild av Magdeburg",
  },
  {
    category: "Kärlekscitat",
    quote: "Det finns inget bättre skönhetsmedel än lycka.",
    author: "– Blessington",
  },
  {
    category: "Kärlekscitat",
    quote: "Inget ont om män. De är ju det bästa vi har, i den vägen.",
    author: "– Maj Fant",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Jag lärde mig för länge sedan att de enda människor som räknas i varje äktenskap är de båda som finns i det.",
    author: "– Hillary Rodham Clinton",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Vänskapen människor emellan är ljuvlig genom det kärlekens band varmed själarna förenas.",
    author: "– Augustinus",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Den högsta lyckan i livet är förvissningen om att vara älskad för sin egen skull, eller rättare sagt: att vara älskad trots en själv.",
    author: "– Victor Hugo",
  },
  {
    category: "Kärlekscitat",
    quote: "Den sanna kärleken liknar cirkeln, och cirkeln har inget slut.",
    author: "– Ryskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote: "Med vår kärlek kan vi förändra världen.",
    author: "– George Harrison",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Du kan lära dig att tala genom att tala, att studera genom att studera, att springa genom att springa, att arbeta genom att arbeta; på samma sätt kan du lära dig att älska genom att älska.",
    author: "– Frans av Sales",
  },
  {
    category: "Kärlekscitat",
    quote: "Det finns ingen bot för kärleken, annat än att älska mer.",
    author: "– Thoreau",
  },
  {
    category: "Kärlekscitat",
    quote: "Den som inte kan hata kan inte heller älska.",
    author: "– Voltaire",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärleken söker ingen anledning utöver sig själv och ingen frukt; den är sin egen frukt, sin egen glädje. Jag älskar för att jag älskar; jag älskar för att jag kan älska.",
    author: "– Bernhard av Clairvaux",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Älskar du dig själv, så älskar du alla andra människor lika mycket som dig själv. Så länge du älskar någon enda människa mindre än dig själv, så har du aldrig vunnit den rätta kärleken till dig själv.",
    author: "– Mäster Eckhart",
  },
  {
    category: "Kärlekscitat",
    quote: "Hjärtat har inga rynkor.",
    author: "– Engelskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Den kärlek som du söker efter överallt finns redan inom dig. Den kan framkallas av olika personer eller händelser, men till slut måste du inse att du är denna kärlek. Källan till all kärlek är inom dig.",
    author: "– Gangaji",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek bör vara ett träd med djupa rötter, men som harskott, som växer in i himlen.",
    author: "– Bertrand Russel",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Att se ett ungt par som älskar varandra är inget under; men att se ett gammalt par som älskar varandra är det bästa men kan få se.",
    author: "– William Makepeace Thackeray",
  },
  {
    category: "Kärlekscitat",
    quote: "Om du vill bli älskad, älska själv.",
    author: "– Hekaton",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Män vill alltid vara en kvinnas första kärlek – kvinnor vill vara en mans sista äventyr.",
    author: "– Oscar Wilde",
  },
  {
    category: "Kärlekscitat",
    quote: "Och jag tänker alltid på dig i april.",
    author: "– Håkan Hellström",
  },
  {
    category: "Kärlekscitat",
    quote: "Jag blir hellre ensam än lycklig med någon annan.",
    author: "– Håkan Hellström",
  },
  {
    category: "Kärlekscitat",
    quote: "Ge mig en kyss innan du går att bygga en dröm på.",
    author: "– Håkan Hellström",
  },
  {
    category: "Kärlekscitat",
    quote: "Jag vet inte vem jag är men jag vet att jag är din.",
    author: "– Håkan Hellström",
  },
  {
    category: "Kärlekscitat",
    quote: "Du kan ge utan att älska, men du kan inte älska utan att ge.",
    author: "– Ami Carmichael",
  },
  {
    category: "Kärlekscitat",
    quote: "Ett hjärta som älskat är alltid ungt.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärleken skapar ett 'vi' utan att förstöra ett 'jag'.",
    author: "– Leo Buscaglia",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är framför allt att man ger sig själv som gåva.",
    author: "– Jean Anouilh",
  },
  {
    category: "Kärlekscitat",
    quote: "Vi upphör att älska oss själva om ingen älskar oss.",
    author: "– Mme de Stael",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Egentligen finns vi till genom kärleken. Det är kärleken som bestämmer vad vi är.",
    author: "– William Sloane Coffin",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Ett lyckligt äktenskap kräver att man förälskar sig många gånger och varje gång i samma person.",
    author: "– Mignon McLaughlin",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek bör vara ett träd med djupa rötter, men som harskott, som växer in i himlen.",
    author: "– Bertrand Russel",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Människor är som pusselbitar, det finns alltid två som passar ihop.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "Det finns ingen bot för kärleken, annat än att älska mer.",
    author: "– Thoreau",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Ett ord befriar oss från all livets börda och smärta: det ordet är kärlek.",
    author: "– Sofokles",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Sådan enighet skall råda emellan er att när den ene gråter skall den andre känna smaken av salt.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Tills du är hundra, tills jag är nittionio, tillsammans, tills håret blir vitt.",
    author: "– Japansk sång",
  },
  {
    category: "Kärlekscitat",
    quote: "Varje gång du möter min blick blir min värld lite större.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "Kyssen är vad som har blivit kvar av paradisets språk.",
    author: "– Joseph Conrad",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärleken är som en duva, håller man den för hårt kvävs den, håller man den för löst flyger den bort.",
    author: "– Danskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är en resa utan kompass i ett väglöst land. Ett äventyr.",
    author: "– Anne Swärd",
  },
  {
    category: "Kärlekscitat",
    quote: "Förälskade sjunger av samma anledning som barn visslar i mörkret.",
    author: "– August Strindberg",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Ingenting kan jag lova dig ingenting försäkra bara detta att just nu är vi alltid tillsammans.",
    author: "– Lars Björklund",
  },
  {
    category: "Kärlekscitat",
    quote: "Två själar med bara en tanke – två hjärtan som slår som ett.",
    author: "– E.F.J Von Munch-Bellinghausen",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Den största lyckan i livet är förvissningen om att vara älskad för sin egen skull, eller rättare sagt: att vara älskad trots en själv.",
    author: "– Victor Hugo",
  },
  {
    category: "Kärlekscitat",
    quote: "Det är omöjligt att vara förälskad och klok på samma gång.",
    author: "– Francis Bacon",
  },
  {
    category: "Kärlekscitat",
    quote:
      "I kärlek börjar man med att bedra sig själv och slutar med att bedra andra.",
    author: "– Oscar Wilde",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärleken skapar ett 'vi' utan att förstöra ett 'jag'.",
    author: "– Leo Buscaglia",
  },
  {
    category: "Kärlekscitat",
    quote: "Man kan ge utan att älska men man kan inte älska utan att ge.",
    author: "– Carmichael",
  },
  {
    category: "Kärlekscitat",
    quote: "Omnia vincit amor – Kärleken övervinner allt.",
    author: "– Vergilius",
  },
  {
    category: "Kärlekscitat",
    quote: "Vi upphör att älska oss själva om ingen älskar oss.",
    author: "– Mme de Stael",
  },
  {
    category: "Kärlekscitat",
    quote: "Allt du behöver är kärlek. Kärlek är allt du behöver.",
    author: "– John Lennon",
  },
  {
    category: "Kärlekscitat",
    quote: "Den sanna kärleken liknar cirkeln, och cirkeln har inget slut.",
    author: "– Ryskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote: "Du kan ge utan att älska, men du kan inte älska utan att ge.",
    author: "– Ami Carmichael",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Ett ord befriar oss från all livets börda och smärta: det ordet är kärlek.",
    author: "– Sofokles",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärleken är som en duva, håller man den för hårt kvävs den, håller man den för löst flyger den bort.",
    author: "– Danskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är framför allt att man ger sig själv som gåva.",
    author: "– Jean Anouilh",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek kan förflytta berg.",
    author: "– Nordiskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Sådan enighet skall råda emellan er att när den ene gråter skall den andre känna smaken av salt.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är ingenting du hittar. Det är något som hittar dig.",
    author: "– Loretta Young",
  },
  {
    category: "Kärlekscitat",
    quote: "Vid närvaro i kärlek blir alla en poet.",
    author: "– Plato",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Allting, allt som jag förstår, förstår jag endast för att jag älskar.",
    author: "– Leon Tolstoy",
  },
  {
    category: "Kärlekscitat",
    quote: "Ibland ser ditt hjärta det som är osynligt för dina ögon.",
    author: "– H. Jackson Brown, Jr.",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Att älska är ingenting. Att vara älskad är något. Men att älska och att vara älskad, det är allting.",
    author: "– T. Tolis",
  },
  {
    category: "Kärlekscitat",
    quote: "Vin och kvinnor gör mannen galen.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Tills du är hundra, tills jag är nittionio, tillsammans, tills håret blir vitt.",
    author: "– Japansk sång",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Män vill alltid vara en kvinnas första kärlek – kvinnor vill vara en mans sista äventyr.",
    author: "– Oscar Wilde",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Man kan inte ge en kyss utan att ta och man kan inte ta en utan att ge.",
    author: "– Okänd",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek och snuva kan inte döljas.",
    author: "– Ryskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote: "Kyssen är vad som har blivit kvar av paradisets språk.",
    author: "– Joseph Conrad",
  },
  {
    category: "Kärlekscitat",
    quote: "Fattigdom och kärlek låter sig svårligen dölja.",
    author: "– Francois de la Rochefoucauld",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Det är med den äkta kärleken som med spökena: alla talar om den, men få har sett den.",
    author: "– Francois de la Rochefoucauld",
  },
  {
    category: "Kärlekscitat",
    quote: "Den som inte kan hata kan inte heller älska.",
    author: "– Voltaire",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Om du hatar en människa, gör henne en tjänst och du skall lära dig älska henne.",
    author: "– Konfucius",
  },
  {
    category: "Kärlekscitat",
    quote:
      "När jag misströstar tänker jag på att i alla tider har sanningen och kärleken alltid segrat.",
    author: "– Mahatma Gandhi",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är hjärtats offergåva.",
    author: "– Radhanath Swami",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Sök kärleken och du möter den aldrig, fly från kärleken och den kommer att förfölja dig.",
    author: "– Engelskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Människor är som pusselbitar, det finns alltid två som passar ihop.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote: "Om du vill bli älskad, älska själv.",
    author: "– Hekaton",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlekens dörr är svår att öppna och svår att stänga.",
    author: "– Kinesiskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärleken är blind.",
    author: "– Svenskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Gifta par som älskar varandra berättar tusentals saker för varandra utan att öppna munnen.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Utan kärlek befinner sig mänskligheten i en mycket svår situation. Utan kärlek kommer vi att möta överväldigande svårigheter i framtiden.",
    author: "– Dalai lama",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Det måste finnas en jämvikt mellan materiellt och andligt framåtskridande, en jämvikt som uppnås genom kärlek och medkänsla.",
    author: "– Dalai lama",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Du kan lära dig att tala genom att tala, att studera genom att studera, att springa genom att springa, att arbeta genom att arbeta; på samma sätt kan du lära dig att älska genom att älska.",
    author: "– Frans av Sales",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Vänskapen människor emellan är ljuvlig genom det kärlekens band varmed själarna förenas.",
    author: "– Augustinus",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Om jag fick en blomma varje gång jag tänkte på dig, då kunde jag vandra i min trädgård för evigt.",
    author: "– Alfred Tennyson",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Dagen då kärlekens makt upphäver kärleken efter makt, då kommer världen att veta vad fred innebär.",
    author: "– Mahatma Gandhi",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Lyckan slinker in genom en dörr som man inte visste att man lämnat på glänt.",
    author: "– John Barrymore",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Vishet är att veta att jag är ingenting, kärlek är att veta att jag är allt, och mellan dessa två rör mitt liv sig.",
    author: "– Nisargadatta Maharaj",
  },
  {
    category: "Kärlekscitat",
    quote:
      "När den älskande själv befriats från beroende av den älskade genom kärlekens mognad till en strålning vars väsen är det egnas upplösning i ljus, då skall den älskade fulländas också genom att bli frigjord från den älskande.",
    author: "– Dag Hammarskjöld",
  },
  {
    category: "Kärlekscitat",
    quote: "Vad som görs av kärlek sker alltid bortom gott och ont.",
    author: "– Friedrich Nietzsche",
  },
  {
    category: "Kärlekscitat",
    quote: "Vi delade på kärlek. Jag tog kär, du tog lek.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote:
      "De människor som fått mest ut av livet är inte de som levt ett sekel, utan de som levt varje minut.",
    author: "– Colette",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Att se ett ungt par som älskar varandra är inget under; men att se ett gammalt par som älskar varandra är det bästa men kan få se.",
    author: "– William Makepeace Thackeray",
  },
  {
    category: "Kärlekscitat",
    quote: "Den vet föga om kärleken som alltid talar om den.",
    author: "– Italienskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Det sägs att kärleken inte känner några gränser. Men gränserna är just det intressanta.",
    author: "– Jean-Luc Godard",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Egentligen finns vi till genom kärleken. Det är kärleken som bestämmer vad vi är.",
    author: "– William Sloane Coffin",
  },
  {
    category: "Kärlekscitat",
    quote: "Ett hjärta som älskat är alltid ungt.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote: "Förälskade sjunger av samma anledning som barn visslar i mörkret.",
    author: "– August Strindberg",
  },
  {
    category: "Kärlekscitat",
    quote: "Inget ont om män. De är ju det bästa vi har, i den vägen.",
    author: "– Maj Fant",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek bör vara ett träd med djupa rötter, men som harskott, som växer in i himlen.",
    author: "– Bertrand Russel",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Det är inte en brist på kärlek, utan brist på vänskap som skapar olyckliga äktenskap.",
    author: "– Friederich Nietzche",
  },
  {
    category: "Kärlekscitat",
    quote: "Låt aldrig någon komma till dig utan att gå där ifrån gladare.",
    author: "– Moder Teresa",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är när den andra personens lycka är viktigare än din egen.",
    author: "– H. Jackson Brown, Jr.",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Om du lever för att bli hundra år gammal vill jag leva hundra minus en dag så att jag aldrig behöver leva utan dig.",
    author: "– A.A. Milne",
  },
  {
    category: "Kärlekscitat",
    quote: "Det bästa att hålla fast i i livet är varandra.",
    author: "– Audrey Hepburn",
  },
  {
    category: "Kärlekscitat",
    quote: "Viss kärlek är som vinteräpplen, mognar sent och håller länge.",
    author: "– Okänt ursprung",
  },
  {
    category: "Kärlekscitat",
    quote: "Vi kan inte uträtta stora saker – bara små saker med stor kärlek.",
    author: "– Moder Teresa",
  },
  {
    category: "Kärlekscitat",
    quote: "Två själar med bara en tanke – två hjärtan som slår som ett.",
    author: "– E.F.J Von Munch-Bellinghausen",
  },
  {
    category: "Kärlekscitat",
    quote: "Vill ni förstå männen? Studera kvinnorna.",
    author: "– Jean-Jacques Rousseau",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Men att se henne var att älska henne, älska bara henne och älska för evigt.",
    author: "– Robert Burns",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Men älska mig för kärleks skull, så att för alltid du kan älska, genom kärlekens hela evighet.",
    author: "– Elizabeth Barrett Browning",
  },
  {
    category: "Kärlekscitat",
    quote: "Kärlek är en resa utan kompass i ett väglöst land. Ett äventyr.",
    author: "– Anne Swärd",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek föds ur glädjen att se på varandra, får näring ur behovet av att vara tillsammans och fulländas av det omöjliga i att vara åtskilda.",
    author: "– José Marti",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Jag lärde mig för länge sedan att de enda människor som räknas i varje äktenskap är de båda som finns i det.",
    author: "– Hillary Rodham Clinton",
  },
  {
    category: "Kärlekscitat",
    quote: "Det finns inget bättre skönhetsmedel än lycka.",
    author: "– Blessington",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Den högsta lyckan i livet är förvissningen om att vara älskad för sin egen skull, eller rättare sagt: att vara älskad trots en själv.",
    author: "– Victor Hugo",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Lycka kommer inte från materiella ting, utan från kärleken med vilken de skänks.",
    author: "– Radhanath Swami",
  },
  {
    category: "Kärlekscitat",
    quote: "Rynkor är smilgropar i älskarens ögon.",
    author: "– Kinesiskt ordspråk",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Så bliva de då beståndande, tron, hoppet, kärleken, dessa tre; men störst bland dem är kärleken.",
    author: "– Paulus",
  },
  {
    category: "Kärlekscitat",
    quote:
      "När du är närvarande i detta ögonblick, då bryter du kontinuiteten i din berättelse om det förflutna och framtiden. Då uppstår sann intelligens, och även kärlek.",
    author: "– Eckhart Tolle",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Älskar du dig själv, så älskar du alla andra människor lika mycket som dig själv. Så länge du älskar någon enda människa mindre än dig själv, så har du aldrig vunnit den rätta kärleken till dig själv.",
    author: "– Mäster Eckhart",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Att vara medveten om och uppleva enheten mellan dig själv och den andra är sann kärlek, sann omsorg, sann medkänsla.",
    author: "– Eckhart Tolle",
  },
  {
    category: "Kärlekscitat",
    quote: "Ge mig tusen kyssar, sedan hundra, sedan tusen till!",
    author: "– Catullus",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Vilka dygder jag än beflitar mig om: har jag icke kärleken, så är jag intet.",
    author: "– Paulus",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Ett lyckligt äktenskap kräver att man förälskar sig många gånger och varje gång i samma person.",
    author: "– Mignon McLaughlin",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Kärlek är vänskap som har fattat eld. Den är tyst förstående, ömsesidigt förtroende, öppen och förlåtande. Den är lojal genom goda och dåliga tider. Den nöjer sig för mindre än perfektion och förbiser mänskliga svagheter.",
    author: "– Ann Landers",
  },
  {
    category: "Kärlekscitat",
    quote:
      "För att bli själv bli glad är det nödvändigt att göra åtminstone en annan person glad.",
    author: "– Theodor Reik",
  },
  {
    category: "Kärlekscitat",
    quote: "Om jag vet vad kärlek är, är det tack vare dig.",
    author: "– Herman Hesse",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Jag såg att du var perfekt, så jag älskade dig. Sen såg jag att du inte var perfekt, och jag älskade dig ännu mera.",
    author: "– Angelita Lim",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Hjärtat vill ha vad det vill ha. Det finns ingen logik i de sakerna. Du träffar någon och du blir kär och det är det.",
    author: "– Woody Allen",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Omogen kärlek säger: ‘Jag älskar dig för jag behöver dig’. Mogen kärlek säger ‘Jag behöver dig för att jag älskar dig.’",
    author: "– Erich Fromm",
  },
  {
    category: "Kärlekscitat",
    quote:
      "Den största kärleken av alla, är lätt att uppnå. Att lära sig älska sig själv, det är den största kärleken av alla.’",
    author: "– Linda Creed",
  },
];

export default quoteData;
