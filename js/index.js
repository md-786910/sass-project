// code start
const btnFeed = document.getElementById("btnFeed");

const moveToFeedPage = () => {
  window.location.href = "../page/news.html";
};

btnFeed.addEventListener("click", moveToFeedPage, false);
