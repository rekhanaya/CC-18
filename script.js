const alumniData = [
  {
    nickname: "Collin",
    campus: "Institut Teknologi Bandung",
    ig: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/in/collin-sheima/",
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
     nickname: "epiddd",
        campus: "School of Technopreneur Nusantara",
        ig: "https://www.instagram.com/epidoey/",
        linkedin: "https://www.linkedin.com/in/evid-wijaya/",
        photo: "https://i.ibb.co.com/rHKkLXW/3a0eafea-d078-48ae-9d88-63c56c7522d8.jpg",
  }
];

function createAlumniCard(alumni) {
  const col = document.createElement("div");
  col.className = "col-md-4 col-lg-3";

  const card = document.createElement("div");
  card.className = "alumni-card";

  const img = document.createElement("img");
  // Use the default image if no valid photo URL is provided
  img.src =
    alumni.photo && alumni.photo !== "URL Foto"
      ? alumni.photo
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png";
  img.alt = `${alumni.nickname} photo`;

  const name = document.createElement("h2");
  name.textContent = alumni.nickname;

  const campus = document.createElement("p");
  campus.textContent = alumni.campus;

  const links = document.createElement("div");
  links.className = "links";

  const igLink = document.createElement("a");
  igLink.href = alumni.ig && alumni.ig !== "Link Instagram" ? alumni.ig : "#";
  igLink.textContent = "Instagram";
  igLink.target = alumni.ig && alumni.ig !== "Link Instagram" ? "_blank" : "_self";

  const separator = document.createElement("span");
  separator.textContent = "  ";

  const linkedinLink = document.createElement("a");
  linkedinLink.href =
    alumni.linkedin && alumni.linkedin !== "Link LinkedIn" ? alumni.linkedin : "#";
  linkedinLink.textContent = "LinkedIn";
  linkedinLink.target =
    alumni.linkedin && alumni.linkedin !== "Link LinkedIn" ? "_blank" : "_self";

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

document.addEventListener("DOMContentLoaded", () => {
  const alumniContainer = document.getElementById("alumniContainer");

  // Use the data directly without shuffling
  alumniData.forEach((alumni) => {
    const col = createAlumniCard(alumni);
    alumniContainer.appendChild(col);
  });

  // Initialize Masonry layout
  new Masonry("#alumniContainer", {
    itemSelector: ".col-md-4",
    columnWidth: ".col-md-4",
    percentPosition: true,
  });
});
