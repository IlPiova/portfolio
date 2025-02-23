const username = document.querySelector("#username");
const avatar = document.querySelector("#avatar");
const userBio = document.querySelector("#bio");
const userRepos = document.querySelector("#repos");
const place = document.querySelector("#place");

const githubLink = "https://api.github.com/users/IlPiova";

function cardConstructor(obj) {
  avatar.src = obj.avatar_url;
  username.innerHTML = obj.login;
  userBio.innerHTML = obj.bio;
  place.innerHTML = obj.location;
  userRepos.innerHTML = `Repos: ${obj.public_repos}`;
}
function fetchUser() {
  try {
    fetch(githubLink)
      .then((response) => response.json())
      .then((data) => {
        cardConstructor(data);
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
}

fetchUser();
