import React, { useState } from 'react';

const quoteData = [
  {
    category: 'Inspirerande citat',
    quote: '"Framgång är att gå från misslyckande till misslyckande utan att förlora entusiasmen." - Winston Churchill',
  },
  {
    category: 'Inspirerande citat',
    quote: '"Var den förändring du vill se i världen." - Mahatma Gandhi',
  },
  {
    category: 'Inspirerande citat',
    quote: '"Det är aldrig för sent att vara det du kanske hade blivit." - George Eliot',
  },
  {
    category: 'Inspirerande citat',
    quote: '"Dröm stort och våga misslyckas." - Norman Vaughan',
  },
  {
    category: 'Inspirerande citat',
    quote: '"Det bästa sättet att förutsäga framtiden är att skapa den." - Peter Drucker',
  }, 
  {
    category: 'Inspirerande citat',
    quote: '"Målet i livet är inte att överleva, utan att trivas." - Maya Angelou',
  },  
  {
    category: 'Inspirerande citat',
    quote: '"Lita på dig själv. Tänk för dig själv. Handla för dig själv. Tala för dig själv. Var dig själv. Älska dig själv." - Rollo May',
  },  
  {
    category: 'Inspirerande citat',
    quote: '"För att uppnå storhet bör man inte bara handla, utan också drömma, inte bara planera, utan också tro." - Anatole France',
  }, 
  {
    category: 'Inspirerande citat',
    quote: '"Sätt ditt hjärta, sinne och själ i även dina minsta handlingar. Det är hemligheten till framgång." - Swami Sivananda',
  }, 
  {
    category: 'Inspirerande citat',
    quote: '"Ditt liv blir inte bättre genom att förändra omständigheterna, utan genom att förändra din inställning till dem." - Martha Beck',
  },
  {
    category: 'Inspirerande citat',
    quote: '"Det är inte vad som händer med dig, utan hur du reagerar på det som betyder något." - Epiktetos',
  },  
  {
    category: 'Inspirerande citat',
    quote: '"Följ din passion, var beredd att arbeta hårt och förlora mycket sömn." - Dedikerad till Steve Jobs',
  },
  {
    category: 'Inspirerande citat',
    quote: '"Om du vill vara lycklig, var." - Leo Tolstoy',
  }, 
  {
    category: 'Inspirerande citat',
    quote: '"Varje dag kan inte vara bra, men det finns något bra i varje dag." - Alice Morse Earle',
  },   
  {
    category: 'Inspirerande citat',
    quote: '"Uthållighet är inte att stå fast, utan att hålla fast vid det." - Josh Billings',
  },  
  {
    category: 'Inspirerande citat',
    quote: '"Ingenting i världen kan ersätta uthållighet. Inte talang. Inte begåvning. Ingenting." - Calvin Coolidge',
  },   
  {
    category: 'Inspirerande citat',
    quote: '"Var vänlig, för varje person du möter kämpar en kamp du inte vet något om." - Plato',
  },     
  {
    category: 'Inspirerande citat',
    quote: '"Människor glömmer vad du sa, människor kommer att glömma vad du gjorde, men människor kommer aldrig att glömma hur du fick dem att känna." - Maya Angelou',
  },      
  {
    category: 'Inspirerande citat',
    quote: '"Om du vill uppnå storhet, sluta fråga om du är kapabel till det och börja agera som om du är det." - Johann Wolfgang von Goethe',
  },   
  {
    category: 'Inspirerande citat',
    quote:  '"Må bra i ditt nuvarande ögonblick, och din rikedom kommer att manifestera sig." - Rhonda Byrne',
  },  
  {
    category: 'Inspirerande citat',
    quote:  '"Om du är förändringen du vill se, kommer du aldrig att känna dig övergiven." - Deepak Chopra',
  },   
  {
    category: 'Inspirerande citat',
    quote:  '"Varje ögonblick är en ny möjlighet att vara vad vi aldrig har varit." - P.D. James',
  },   
  {
    category: 'Inspirerande citat',
    quote:  '"Ditt liv är ditt budskap till världen. Se till att det är meningsfullt." - Unknown',
  },    
  {
    category: 'Inspirerande citat',
    quote:  '"Du är aldrig för gammal för att sätta ett nytt mål eller drömma en ny dröm." - C.S. Lewis',
  },   
  {
    category: 'Inspirerande citat',
    quote:  '"Framgång är att hoppa från misslyckande till misslyckande utan att förlora entusiasmen." - Abraham Lincoln',
  },
  {
    category: 'Inspirerande citat',
    quote:  '"Om du inte kan göra något bra, så gör åtminstone inget ont." - Franklin D. Roosevelt',
  },  
  {
    category: 'Inspirerande citat',
    quote:  '"För att bli stor, börja där du är, använd vad du har, gör vad du kan." - Arthur Ashe',
  },   
  {
    category: 'Inspirerande citat',
    quote:  '"Att ge är att få." - Unknown',
  },   
  {
    category: 'Inspirerande citat',
    quote:  '"Älska livet du lever. Lever livet du älskar." - Bob Marley',
  },   
  {
    category: 'Inspirerande citat',
    quote:  '"För att vinna stora priser, är du tvungen att gå förbi det säkra." - Peter Drucker',
  },   
  {
    category: 'Inspirerande citat',
    quote:  '"Det är inte hur mycket vi gör, utan hur mycket kärlek vi lägger i det vi gör som räknas." - Mother Teresa',
  },  
  {
    category: 'Inspirerande citat',
    quote:   '"Lyckan är inte något klart gjort. Det kommer från dina egna handlingar." - Dalai Lama',
  },    
  {
    category: 'Inspirerande citat',
    quote:   '"Förmågan att hålla två tankar i huvudet samtidigt och ändå kunna fungera är en tecken på en intelligent människa." - F. Scott Fitzgerald',
  },   
  {
    category: 'Inspirerande citat',
    quote:   '"Vad vi tror om oss själva blir sanning för oss." - Louise Hay',
  },    
  {
    category: 'Inspirerande citat',
    quote:   '"I det ögonblick du ger upp är kampen över." - Louis L\'Amour',
  },   
  {
    category: 'Inspirerande citat',
    quote:   '"En människa som aldrig har gjort ett misstag har aldrig försökt något nytt." - Albert Einstein',
  },
  {
    category: 'Inspirerande citat',
    quote:   '"Förändra ditt tankesätt och du förändrar din värld." - Norman Vincent Peale',
  },     
  {
    category: 'Inspirerande citat',
    quote:   '"För att uppleva en förändring måste du vara den förändring du vill se." - Mahatma Gandhi',
  },    
  {
    category: 'Inspirerande citat',
    quote:   '"Ju större svårighet, desto större ära att övervinna den." - Molière',
  }, 
  {
    category: 'Inspirerande citat',
    quote:   '"Vägen till framgång och vägen till misslyckande är nästan exakt densamma." - Colin R. Davis',
  }, 
  {
    category: 'Inspirerande citat',
    quote:   '"Våga, även om du är rädd." - H. Jackson Brown Jr.',
  },  
  {
    category: 'Inspirerande citat',
    quote:   '"Det är aldrig för sent att vara det du kanske hade blivit." - George Eliot',
  },   
  {
    category: 'Inspirerande citat',
    quote:   '"Det är aldrig för sent att vara det du kanske hade blivit." - George Eliot',
  },   
  {
    category: "Motiverande citat",
    quote: "För att uppnå storhet, sluta fråga om du är kapabel till det och börja agera som om du är det. - Pablo Picasso"
  },
  {
    category: "Motiverande citat",
    quote: "Ditt liv blir inte bättre genom att klaga på det. Det blir bättre genom att förändra det. - Unknown"
  },
  {
    category: "Motiverande citat",
    quote: "Varje dag är en ny möjlighet att förändra ditt liv. - Zig Ziglar"
  },
  {
    category: "Motiverande citat",
    quote: "Framgång är inte slutmålet, utan resan att bli den bästa versionen av dig själv. - Zig Ziglar"
  },
  {
    category: "Motiverande citat",
    quote: "Ditt liv är en manifestation av dina tankar. Förändra dina tankar och du förändrar ditt liv. - Unknown"
  },
  {
    category: "Motiverande citat",
    quote: "Förändring är smärtsam, men inget är så smärtsamt som att fastna på samma ställe år efter år. - Unknown"
  },
  {
    category: "Motiverande citat",
    quote: "Det är inte vilka du är som håller dig tillbaka, det är vem du tror att du inte är. - Unknown"
  },
  {
    category: "Motiverande citat",
    quote: "Sätt ditt hjärta, sinne och själ i även dina minsta handlingar. Det är hemligheten till framgång. - Swami Sivananda"
  },
  {
    category: "Motiverande citat",
    quote: "Var inte rädd för förändring. Du kan kanske förlora något bra, men du kan också få något ännu bättre. - Unknown"
  },
  {
    category: "Motiverande citat",
    quote: "Du är starkare än du tror. Kom igen, saker blir bättre. - Unknown"
  },
  {
    category: "Motiverande citat",
    quote: "Ditt liv är din egen resa och dina egna val att göra. - John C. Maxwell"
  },
  {
    category: "Motiverande citat",
    quote: "Det är aldrig för sent att bli den du ville vara. - George Eliot"
  },
  {
    category: "Motiverande citat",
    quote: "Framgång är att hoppa från ett misslyckande till ett annat utan att tappa entusiasmen. - Winston Churchill"
  },
  {
    category: "Motiverande citat",
    quote: "Du kommer aldrig ångra att satsa på dig själv. - Wayne Dyer"
  },
  {
    category: "Motiverande citat",
    quote: "Starka människor bryts också, men de ger aldrig upp. - Unknown"
  },
  {
    category: "Motiverande citat",
    quote: "Du är kapabel till mer än du tror. - Marie Forleo"
  },
  {
    category: "Motiverande citat",
    quote: "För att uppnå något du aldrig har haft, måste du göra något du aldrig har gjort. - Unknown"
  },
  {
    category: "Motiverande citat",
    quote: "Lycka är inte något klart gjort. Det kommer från dina egna handlingar. - Dalai Lama"
  },
  {
    category: "Motiverande citat",
    quote: "Det är inte omständigheterna som formar oss, det är våra val. - Tony Robbins"
  },
  {
    category: "Motiverande citat",
    quote: "Varje morgon har två handtag. Vi kan ta tag i handtaget med oro eller handtaget med möjlighet. - Henry Ward Beecher"
  },
  {
    category: "Motiverande citat",
    quote: "Att tro att du kan är det första steget mot att uppnå något. - Zig Ziglar"
  }                             
  ];
  
  export default quoteData;