import React, { useState } from "react";

const quoteData = [
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
    quote: "Älska livet du lever. Lever livet du älskar.",
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
];

export default quoteData;
