let articleHeader = document(".aricle_header");
articleHeader.textContent = "=Welcome to A-ARON's Blog"

let allArticleHeaders = document.querySelectorAll(".article_header");
for (let i = 0; i < allArticleHeaders.length; i++) {
    allArticleHeaders[i].setAttribute("classList","aricle_header important");
}



