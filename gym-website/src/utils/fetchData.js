export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bd72d811d5msh4b02b4b1ddc670bp145096jsnb5133bbefc8e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youTubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bd72d811d5msh4b02b4b1ddc670bp145096jsnb5133bbefc8e",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
