var naats = [
  {
    img: "https://c.saavncdn.com/291/Aap-Par-Lakhon-Salam-Urdu-2020-20201223135026-150x150.jpg",
    naat: "Aap Par Lakhon",
    name: "Owaiz Raza",
    audio: "./audios/Ho-Karam-Sarkar.mp3",
  },
  {
    img: "https://c.saavncdn.com/793/Pukaro-Ya-Rasool-Allah-Urdu-2020-20201222135042-150x150.jpg",
    naat: "Pukaro Ya Rasool",
    name: "Owaiz Raza",
    audio: "./audios/Main-Banda-e-Aasi-Hoon.mp3",
  },
  {
    img: "https://c.saavncdn.com/480/Sarkar-Ka-Madina-Urdu-2021-20220220210459-150x150.jpg",
    naat: "Sarkar Ka Madina",
    name: "Owaiz Raza",
    audio: "./audios/Ho-Karam-Sarkar.mp3",
  },
  {
    img: "https://c.saavncdn.com/291/Tajdar-E-Haram-Urdu-2020-20200212055344-150x150.jpg",
    naat: "Tajdar E Haram",
    name: "Owaiz Raza",
    audio: "./audios/Ho-Karam-Sarkar.mp3",
  },
  {
    img: "https://c.saavncdn.com/787/Hum-Ko-Bulana-Ya-Rasool-Allah-Urdu-2021-20220220200729-150x150.jpg",
    naat: "Hum Ko Bulana",
    name: "Owaiz Raza",
    audio: "./audios/Ho-Karam-Sarkar.mp3",
  },
  {
    img: "https://c.saavncdn.com/111/Ab-Meri-Nigaho-Mei-Jagta-Nahi-Koi-Urdu-2021-20220220195119-150x150.jpg",
    naat: "Ab Meri Nigaho",
    name: "Owaiz Raza",
    audio: "./audios/Ho-Karam-Sarkar.mp3",
  },
  {
    img: "https://c.saavncdn.com/617/Taiba-Ke-Jaaney-Waley-Urdu-2010-150x150.jpg",
    naat: "Taiba Ke Jaaney",
    name: "Owaiz Raza",
    audio: "./audios/Ho-Karam-Sarkar.mp3",
  },
];

var naatReaders = [
  {
    img: "https://pbs.twimg.com/profile_images/859009654319394816/O4kslq_c_400x400.jpg",
    name: "Asad Raza",
    naatRead: "100 naat",
  },
  {
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfN13q33CinfWNlU5H4mXPlYEv5idSDqJ_bKc1qpUZjfkz1btB",
    name: "Fasihuddin",
    naatRead: "147 naat",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEIcStS60_o0PL8AYFm-k3bCFYKT9t-3IHgClyzIeD-3O1wVu-_rVHm0B&s=0",
    name: "Ghulam Qadri",
    naatRead: "412 naat",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgZmzFr88TOCRZWljeK5PTE5O_2D3ZV0IOCxMCzmnc46Fk325Hr6XEK9F&s=0",
    name: "Tahir Qadri",
    naatRead: "200 naat",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJq3kr9yTrNiF6h_IRxDp6SnQhmJgyd4pkKZQC3jfz1L0MqitK5Qn6RO3&s=0",
    name: "Owais Raza",
    naatRead: "780 naat",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqOSenAdkTgxJ-a8alhHsc8y4SX2YqD6a_2mSF9P47smxomZhnzRqqFhnnVRQAQfNgA0&usqp=CAU",
    name: "Farhan Qadri",
    naatRead: "100 naat",
  },
];

function naatCard() {
  var card = "";
  naats.forEach(function (obj, index) {
    card += `<div data-value="${index}"
              class="card cursor-pointer w-fit rounded-[14px] p-3 ring-white ring-[0.3px] ring-inset mr-4"
            >
              <div data-value="${index}"
                class="card-img cursor-pointer rounded-[10px] overflow-hidden object-cover object-center w-[120px] h-[120px] mb-2"
              >
                <img data-value="${index}" class="h-full cursor-pointer rounded-[10px]" src="${obj.img}" alt="" />
              </div>
              <h2 data-value="${index}" class="text-sm">${obj.naat}</h2>
              <h3 data-value="${index}" class="text-xs">${obj.name}</h3>
            </div>`;
  });
  document.querySelector(".m-card-carousel").innerHTML = card;
}

function naatReaderCard() {
  var readerCard = "";
  naatReaders.forEach(function (obj) {
    readerCard += `<div class="artist-card text-center w-fit mr-5">
                  <div
                    class="artist-img rounded-full overflow-hidden w-20 h-20"
                  >
                    <img class="w-full h-full"
                      src="${obj.img}"
                      alt=""
                    />
                  </div>
                  <h4 class="text-[14px] mt-[6px]">${obj.name}</h4>
                  <div class="naat text-[10px] mt-1 text-[#ddd]">
                    <i class="ri-headphone-fill"></i> ${obj.naatRead}
                  </div>
                </div>`;
  });
  document.querySelector(".artist-card-wrap").innerHTML = readerCard;
}

var audio = new Audio();

function playNaat() {
  document
    .querySelector(".m-card-carousel")
    .addEventListener("click", function (event) {
      var naat = naats[event.target.dataset.value];
      document.querySelector(
        ".music-playing"
      ).innerHTML = `<div class="mp-img mr-2 w-7 h-7 rounded-full overflow-hidden">
            <img src="${naat.img}" alt="" />
          </div>
          <div class="mp-content">
            <h4 class="text-[12px] font-normal">${naat.naat}</h4>
            <h4 class="text-[10px] text-[#ddd]">${naat.name}</h4>
          </div>
          <i class="ri-speaker-fill ml-14 mr-2"></i>
          <i class="ri-more-fill ml-3 mr-3"></i>
          `;
      audio.src = naat.audio;
      audio.play();
    });
}

naatCard();
naatReaderCard();
playNaat();
