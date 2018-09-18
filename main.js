const articleHeader = (document.querySelector(".article__header").textContent =
  "Welcome to A-ARON's blog");

// reference to all article__header elements
const allArticleHeaders = document.querySelectorAll(".article_header");

// change classList property value to "article__header important"
for (let i = 0; i < allArticleHeaders.length; i++) {
  allArticleHeaders[i].setAttribute.classList.add("important");

  console.log(allArticleHeaders[i].classList);
}
