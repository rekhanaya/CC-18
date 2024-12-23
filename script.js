const alumniData = [
  {
    nickname: "Collin",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Akiraka",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Azhar",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Abid",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Gustia",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Fauzi",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Alifia",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Nadia",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Ridhwan",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Nouval",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Ikhwan",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Teguh",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Fatih",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Afif",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Faiz",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Dian",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Rekha",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Afrian",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Syifa",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Rizki",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Wiranto",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Raffausta",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Sela",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "John",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Evid",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
];

const randomImages = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
  "https://picsum.photos/200/300?random=6",
  "https://picsum.photos/200/300?random=7",
  "https://picsum.photos/200/300?random=8",
  "https://picsum.photos/200/300?random=9",
  "https://picsum.photos/200/300?random=10",
  "https://picsum.photos/200/300?random=11",
  "https://picsum.photos/200/300?random=12",
  "https://picsum.photos/200/300?random=13",
  "https://picsum.photos/200/300?random=14",
  "https://picsum.photos/200/300?random=15",
  "https://picsum.photos/200/300?random=16",
  "https://picsum.photos/200/300?random=17",
  "https://picsum.photos/200/300?random=18",
  "https://picsum.photos/200/300?random=19",
  "https://picsum.photos/200/300?random=20",
  "https://picsum.photos/200/300?random=21",
  "https://picsum.photos/200/300?random=22",
  "https://picsum.photos/200/300?random=23",
  "https://picsum.photos/200/300?random=24",
  "https://picsum.photos/200/300?random=25",
];

function createAlumniCard(alumni) {
  const col = document.createElement("div");
  col.className = "col-md-4 col-lg-3";

  const card = document.createElement("div");
  card.className = "alumni-card";

  const img = document.createElement("img");
  if (alumni.photo === null) {
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png";
  } else {
    img.src = alumni.photo;
  }
  img.alt = `${alumni.nickname} photo`;

  const name = document.createElement("h2");
  name.textContent = alumni.nickname;

  const campus = document.createElement("p");
  campus.textContent = alumni.campus;

  const links = document.createElement("div");
  links.className = "links";

  const igLink = document.createElement("a");
  igLink.href = alumni.ig;
  igLink.textContent = "Instagram";
  igLink.target = "_blank";

  const separator = document.createElement("span");
  separator.textContent = "  ";

  const linkedinLink = document.createElement("a");
  linkedinLink.href = alumni.linkedin;
  linkedinLink.textContent = "LinkedIn";
  linkedinLink.target = "_blank";

  links.appendChild(igLink);
  links.appendChild(separator);
  links.appendChild(linkedinLink);

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(campus);
  card.appendChild(links);

  col.appendChild(card);
  return col;
}

function assignRandomImages(alumniData, images) {
  return alumniData.map((alumni) => {
    return {
      ...alumni,
      photo: images[Math.floor(Math.random() * images.length)],
    };
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const alumniContainer = document.getElementById("alumniContainer");

  const alumniWithRandomImages = assignRandomImages(alumniData, randomImages);
  const shuffledAlumniData = alumniWithRandomImages.sort(
    () => Math.random() - 0.5
  );

  shuffledAlumniData.forEach((alumni) => {
    const col = createAlumniCard(alumni);
    alumniContainer.appendChild(col);
  });

  new Masonry("#alumniContainer", {
    itemSelector: ".col-md-4",
    columnWidth: ".col-md-4",
    percentPosition: true,
  });
});
