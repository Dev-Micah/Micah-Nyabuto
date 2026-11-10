const portrait = document.querySelector(".portrait-image");
const portraitPlaceholder = document.querySelector(".portrait-placeholder");

if (portrait && portraitPlaceholder) {
  const showPortrait = () => {
    portrait.hidden = false;
    portraitPlaceholder.hidden = true;
  };

  portrait.addEventListener("load", showPortrait, { once: true });

  if (portrait.complete && portrait.naturalWidth > 0) {
    showPortrait();
  }
}
