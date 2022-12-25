const player = document.getElementById("player");

function playSong(id) {
  const url = `https://www.youtube.com/embed/${id}?autoplay=1`;
  player.src = url;
}
