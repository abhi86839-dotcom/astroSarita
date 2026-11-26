
// Dictums text. Source: "Dictum by Deepanshu Giri ji, compiled by Abhinandan Jain ".
// Wording is kept exactly as in the original document. To add a dictum, add a line to a section.
const DICTUMS = [
 {title:"In Venus Dasha", items:[
  "If Saturn is in the 2nd house then he will get trouble from the family.",
  "If Saturn is in Taurus on the 9th then due to father or father will face resources scarcity.",
  "If saturn is in bharani he will do some business of hoarding things.",
  "In Venus ketu dasha venus in the second house he got separated from family.",
  "Venus exalted in 5th house is beneficial in Jupiter dasha not in Venus dasha",
  "In venus dasha if venus in leo than sun will tell what will be the final result of venus dasha",
  "If a person running Pratyantar dasha of Venus and venus transit in the 10th house, the person will ask an astrologer about their career.",
  "If venus dasha starting 2001 and venus in Vishaka pada 2 in 2005-2010 Jupiter give its result",
  "If saturn  in kritika sun in 6 th house in this dasha he face court cases  ",
  "If venus(3 degree) sitting with sun (14degree) it gave result of sun in last 10 year of dasha"]},
 {title:"Dasha progression", items:[
  "Gives the result of what is promised in the chart .",
  "During progression agenda and tools always.remain same as in D1 mahadasha lord have",
  "When venus progressing over rahu it give multiple affair",
  "Any dasha lord when progressing over rahu it get illusion and increase desire",
  "If saturn in the 4rth house so in saturn dasha you got the emotional pain and suppose saturn is progressing over the 7 th house either due to wife or status you get emotional pain",
  "Any planet goes in the 8th house of the natal chart while progressing its significance transform eg saturn dasha when transit carrier will transform or any major shift happens",
  "During sun dasha when sun transit in the 7th house he may get chance of the extramarital affair while in libra get insulted due to that house libra iss in",
  "If any planet progress in 9th from the natal Position you get major you get the proper result of the dasha",
  "Suppose planet in 4rth house if he did good in the 11 th house than when planet progress in the 12 th house it will get the grace but bad karma it get all the bad result"]},
 {title:"Rashi And house Dasha Result", items:[
  "Jupiter in 4th in Capricorn — in Dasa of Moon-Jupiter-Jupiter, Jupiter will give the result of Jupiter exalted and 9th house. Bad result is expected as that is Mool Trikona of Jupiter s similarly, Dasa of Moon-Jupiter-Saturn — Jupiter will give good results related to 4th house, as now it is giving result of sign-based",
  "If sun in aries in 7 th house person married to spouse due to which he got defame in society and he happy he is getting with full he do that marriage",
  "If in the 4rth house sitting planet dasha run and so the when antar dasha came of the 9 th house lord or planet sitting in 9 th house if it is malefic planet or the 6th lord in chart or enemy of the 4rth house sitting planet it will create fight with father or boss"]},
 {title:"Blank Chart Dasha", items:[
  "Aquarius ascendant saturn dasha go in isolation and a lot of experiences but personality development occurs.",
  "Sun in lagna Saturn dasha will problematic for this person",
  "In rahu mahadasha: if Saturn is in the 3rd house the person becomes a lot peaceful but if mercury is in the 3rd house he becomes curious and childish",
  "For cancer ascendant saturn or rahu dasha he must not go for joining any post in society",
  "Leo ascenedants ke liya Shukra ki dasha mai either profession rise or he will focus on hobbies."]},
 {title:"Dasha Karma", items:[
  "If venus in leo in 2nd house agenda of venus maha dasha lord is 2nd house that is finance food family is focus >> tools are in the 11th and 4th house.",
  "Eg: jupiter in 12 th house of 6 th 9 lord so in jupiter dasha he has to go in isolation spend money but on health issue or learning something big",
  "Nakshatra is main karma or theme of the dasha which person has to run like planet in vishkaha nakshtra dasha has problem related to drinking and womens",
  "In dasha pending karmal of planet house. (sun in 4th do sewa of maa) It is in nakshtra (sun in magha pada 3 stay away from bad people for Power) in it rashi (sun in libra don't touch married women) in all 3 has to be fulfilled in sun dasha.",
  "Saturn in kritika if sun in 6th house he will face fight court cases and debts of other people in saturn dasha",
  "If sun in vishksha pada 2 then in sun dasha sun give result of jupiter in 1.5 to 3 years of dasha",
  "For cancer ascendant If mars in sharvan nakshtra then moon become jeev for the 5 and 10 th house so moon dasha you get result of the 5 and 10 th house acc to it position"]},
 {title:"Dasha lagana", items:[
  "If jupiter in the 6th house capricorn rahu in 9 th house then person suffer from carrier issue in dasha of rahu",
  "If mars is 4rth to mercury in dasha of mercury person has to suffer from mental pain in mercury dasha"]},
 {title:"Navansh Dictum", items:[
  "If 6th lord in 10th house navmansh it will effect career but in Aries then due to physical body.",
  "If Planet in jeev rashi (3,6,9,12) in navansh than physical person mool . (2,5,8,11) then basic things food and all if in Dhatu (1,4,7,10) then the money will affect the planet affect",
  "If the sun is 4rth house and goes to the 11th house navmansh. So person got the gain of the property",
  "If in sun dasha sun is 4rth house and ketu in 6th house in 11 th navansh with ketu so in sun dasha he got gain in property but get disconnected from home and family Get gain in property but emotionally break in this dasha",
  "For cancer ascendant venus in libra in d1 than in d9 if venus in sagittarius fight or sickness to wife if aquarius person transformed due to wife if in gemini possible separation from wife"]},
 {title:"D10", items:[
  "Gemini Ascendant ke liye Agar 9th house ke d10 ka raja hai, to Teaching work uska main karma hoga, career ye banaye ye zaruri nahi.",
  "[6,8,12] Rashi ka D10 ka lagan career me issue deta hai.",
  "Agar D10 ki 8th house ki ya usme planet ki dasha chal sahi ho, to career khatam hoke ya naya banega.",
  "Agar D10 ka 12 house related hoga toh aise insan Job nahi kar payega, usse free lance kam karna hoga."]},
 {title:"Dasha result", items:[
  "If suppose sun in ketu nakshatra so in sun ketu: sun will give its nakshatra result",
  "Sun in Libra so sun mahadasha Venus antar dasha we get sun Libra prominent",
  "Sun in 4 rth house so in sun moon we get prominent sun in 4 rth house result",
  "Saturn in sun dasha prominent hardwork to get fame in sun sun and sun saturn",
  "Sun in first house give result of first house whole life while sun in Aries give effect in sun dasha or antar dasha",
  "If moon in ketu Nakshatra venus or moon ki dasha me emotional turmoil hota hai.",
  "In sun dasha where kritika nakshtra {any planet in kritika or house cusp or any aspect on kritika get activated }"]},
 {title:"Marriage", items:[
  "Saturn Mercury ketu , capricorn gemini virgo exception link with venus or rahu or libra tauraus link to navansh lagan problem in marriage or no marriage",
  "{Planet in the seventh house is first karm after the marriage } >>Jupiter in 7 houses and its depositors in 2 nd house after marriage bhagya will rise and gain money",
  "If the 7th lord is retrograde due to the past life the guilt wife will serve that thing to native",
  "If mars is in 7 th house then the person will get a partner young and energetic while Saturn mature and old age",
  "If saturn in cusp of 7 th house navansh marriage will after lot of patience and delay but if ketu very hard event take place lot of effort but rahu then very strong desire to get that event ",
  "In dasha progression if any how maha dasha lotd progress the navansh lagan or make connections at that date marriage happen but mahadasha natardasha also has to support it ",
  "If Venus in Vishakaha's wife travels a lot and gathers the knowledge adra on cusp of 7th house than married on rainy day 7th lord If seventh lord in ashlesha than emotion trouble in marriage"]}
];
