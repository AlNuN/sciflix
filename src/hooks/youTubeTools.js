function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function getYouTubeThumb(youTubeId) {
  return `https://img.youtube.com/vi/${youTubeId}/hqdefault.jpg`;
}

function hasYouTube(string) {
  return /youtube/i.test(string);
}

export {
  getYouTubeId,
  getYouTubeThumb,
  hasYouTube,
};
