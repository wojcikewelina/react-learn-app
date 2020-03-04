const BreadTypeArr = [
  {
    name: "Kajzerka",
    rate: "7.2",
    description: "Okrągła pyszna bułka",
    mapUrl: "https://g.page/Starowislna1Lajkonik?share",
    picturesUrl: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kaisersemmel-.jpg/1200px-Kaisersemmel-.jpg",
      "https://img.e-piotripawel.pl/photos/600x600/h9e/28490.jpg",
      "https://secure.ce-tescoassets.com/assets/PL/346/5907651673346/ShotType1_540x540.jpg"
    ]
  },
  {
    name: "Chleb wieloziarnisty",
    rate: "9.2",
    description: "Chlebuś pełen pysznych ziarenek",
    mapUrl: "https://goo.gl/maps/hU6Byu5k3EVQNrrd9",
    picturesUrl: [
      "https://cdn.katalogsmakow.pl/2016/08/01/0x600/chleb-wieloziarnisty-na-krupczatce.486116.jpg",
      "https://rodzinkawkuchni.pl/wp-content/uploads/Latwy_chleb_wieloziarnisty_I.jpg",
      "https://1.bp.blogspot.com/-X4hJxKACe2A/Vd9Rs4BmgkI/AAAAAAAAIx8/tD4FQ_f4wyI/s1600/IMG_0876.JPG"
    ]
  }
];

export function getAllBreadTypes() {
  const promise = new Promise((resolve, rejected)=>{
    resolve(BreadTypeArr);
  });
  return promise;
}
