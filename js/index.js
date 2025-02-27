console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

const handleRegisterClick = () => {
  const commentTag = document.querySelector("#comment-input");
  const comment = commentTag.value;

  const newCommentContainer = document.createElement("li");
  newCommentContainer.innerHTML = `<li>
      <div class="comment-item">
        <div class="comment-author">
          <img
            src="./images/comment-author-icon.png"
            alt="사용자 프로필 이미지"
          />
          <span>방문자</span>
        </div>
        <div class="comment-content">
          ${comment}
        </div>
      </div>
    </li>`;

  const commentsContainer = document.querySelector(".comment-list");
  commentsContainer.append(newCommentContainer);

  alert("댓글이 등록되었습니다");

  commentTag.value = "";
};
