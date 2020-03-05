const BreadTypeArr = [
   {
    name: "Chałka",
    rate: 10.10,
    description: "Najlepsza na świcie, smaczna, puszysta i słodziutka. W kuchni polskiej słodkie, w kuchni żydowskiej tylko lekko słone, puszyste, drożdżowe pieczywo pszenne w postaci zaplecionego warkocza. Można także spotkać wypieki w kształcie bułek lub wałka zamkniętego w okrąg. Chałka zwana jest też czasem plecionką albo kukiełką. (Źródło: wikipedia)",
    mapUrl: "https://goo.gl/maps/nRMgYFNZQssBbEQD7",
    picturesUrl: [ "https://image.ouichef.pl/articles/218428f_1ouichef_1_jpg_chalka.jpg", "http://kulinarne.info/wp-content/uploads/2013/12/chalka-1.jpg", 
         ],
    startPicture: "https://image.ouichef.pl/articles/218428f_1ouichef_1_jpg_chalka.jpg", 
  },
  {
    name: "Kajzerka",
    rate: "7.2",
    description: "Okrągła pyszna bułka, fajnie jesli ma ziarna. Mała, okrągła bułka z charakterystycznymi pięcioma promienistymi bruzdami na wierzchu. Masa kajzerki wynosi około 50 gramów, wypiekana jest zazwyczaj z mąki pszennej, słodu, zakwasu lub drożdży, soli i wody. (Wikipedia)",
    mapUrl: "https://g.page/Starowislna1Lajkonik?share",
    picturesUrl: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kaisersemmel-.jpg/1200px-Kaisersemmel-.jpg",
      "https://img.e-piotripawel.pl/photos/600x600/h9e/28490.jpg",
      "https://secure.ce-tescoassets.com/assets/PL/346/5907651673346/ShotType1_540x540.jpg"
    ],
    startPicture:  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kaisersemmel-.jpg/1200px-Kaisersemmel-.jpg"
  },
  {
    name: "Chleb wieloziarnisty",
    rate: "9.2",
    description: "Chlebuś pełen pysznych ziarenek. Najczęściej nazwa ta oznacza nie tyle rodzaj mąki, z jakiej powstało pieczywo, a ziarna do niego dodane. Warto więc spożywać taki chleb (pestki czy nasiona są bardzo zdrowe), jednak uprzednio sprawdzając jego skład. (Źródło: www.putka.pl)",
    mapUrl: "https://goo.gl/maps/hU6Byu5k3EVQNrrd9",
    picturesUrl: [
      "https://cdn.katalogsmakow.pl/2016/08/01/0x600/chleb-wieloziarnisty-na-krupczatce.486116.jpg",
      "https://rodzinkawkuchni.pl/wp-content/uploads/Latwy_chleb_wieloziarnisty_I.jpg",
      "https://1.bp.blogspot.com/-X4hJxKACe2A/Vd9Rs4BmgkI/AAAAAAAAIx8/tD4FQ_f4wyI/s1600/IMG_0876.JPG"
    ],
    startPicture: "https://cdn.katalogsmakow.pl/2016/08/01/0x600/chleb-wieloziarnisty-na-krupczatce.486116.jpg"
  },
  {
    name: "Chleb pszenny",
    rate: 5.0,
    description: "Popularna biała mąka pszenna służy do wypieku np. klasycznych bułek śniadaniowych, takich jak kajzerki. Pieczywo takie jest miękkie i smaczne, ale zawiera mniej błonnika i syci na krócej. Z pszenicy może również powstać chleb razowy – wówczas ma on większą wartość odżywczą od białego pieczywa. Nie będzie jednak tak miękki i puszysty. Warto zawsze sprawdzać skład, niektórzy producenci bowiem barwią białe pieczywo, aby udawało razowe. (Źródło: www.putka.pl)",
    mapUrl: "https://goo.gl/maps/g37YHY8tPSGbWT9K6",
    picturesUrl: [ "https://www.mojewypieki.com/img/images/original/prosty_chleb_pszenny_8_1086.jpg", "https://to-co-lubie-gotuje.pl/wp-content/uploads/2017/11/chleb-pszenny-na-drozdzach-to-co-lubie-gotuje-i-polecam.jpg", "https://www.dorotakaminska.pl/wp-content/uploads/2015/09/chleb-pszenny-na-zakwasie-500x500.jpg"
     
    ],
    startPicture: "https://www.mojewypieki.com/img/images/original/prosty_chleb_pszenny_8_1086.jpg" 
  },
   {
    name: "Chleb żytni",
    rate: 1.0,
    description: "Jest niedobry. Jest bogatszy w błonnik od chleba pszennego, z reguły ma też niższy indeks glikemiczny. Ogólnie zatem pieczywo żytnie często jest bardziej wartościowe od pszennego, chociaż warto mieć tu na względzie również sposób jego wypiekania i rodzaj mąki. W piekarniach dostępne są też chleby mieszane – pieczone z mieszanki mąk pszennej i żytniej. (Źródło: www.putka.pl)" ,
    mapUrl: "https://goo.gl/maps/QrEvNf7KD9VcpThL9",
    picturesUrl: [ "https://kotlet.tv/wp-content/uploads/2009/10/chleb-zytni-razowy-900x675.jpg","https://static.smaker.pl/photos/2/c/4/2c486a5b68a41650f989f759ff1c1e54_368603_586a08725088f_wm.jpg"
     
    ],
    startPicture: "https://kotlet.tv/wp-content/uploads/2009/10/chleb-zytni-razowy-900x675.jpg"
  }
];



export function getAllBreadTypes() {
  const promise = new Promise((resolve, rejected)=>{
    resolve(BreadTypeArr);
  });
  return promise;
}
