const shareToast = document.getElementById("share-toast");
const shareButton = document.getElementById("share-button");
console.log(shareToast.getAttribute("id"));
shareButton.addEventListener("click", () => {
  if (shareToast.classList.contains("hidden")) {
    shareToast.classList.remove("hidden");
    if (!shareButton.classList.contains("share-btn-dark")) {
      shareButton.classList.add("share-btn-dark");
    }
  } else {
    shareToast.classList.add("hidden");
    shareButton.classList.remove("share-btn-dark");
  }
});
