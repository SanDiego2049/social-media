const ul = document.querySelector(".list-group");
const btn = document.querySelector(".btn");

const media = [
  {
    medium: "Twitter",
    username: "sandiego2049",
    url: "https://twitter.com/0xDiego2049",
  },
  {
    medium: "Github",
    username: "Sandiego2049",
    url: "https://github.com/Sandiego2049",
  },
  {
    medium: "Telegram",
    username: "san.diego2049",
    url: "https://telegram.com/san.diego2049",
  },
  {
    medium: "WhatsApp",
    username: "Oreoluwa",
    url: "https://whatsapp.com/Oreoluwa",
  },
  {
    medium: "Instagram",
    username: "san_diego.2049",
    url: "https://instagram.com/san_diego.2049",
  },
];

function generateAccount() {
  media.forEach((account) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const medium = document.createTextNode(account.medium);
    li.appendChild(medium);

    const span = document.createElement("span");
    span.classList.add("flex-end");
    const username = document.createTextNode("@" + account.username);
    span.appendChild(username);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

function showLink() {
  ul.innerHTML = "";
  media.forEach((account) => {
    const link = document.createElement("a");
    link.href = account.url;

    const anchor = document.createTextNode("@" + account.username);
    link.appendChild(anchor);

    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const medium = document.createTextNode(account.medium);
    li.appendChild(medium);
    li.appendChild(link);
    ul.appendChild(li);
  });
}

btn.addEventListener("click", showLink);

window.addEventListener("load", generateAccount);
