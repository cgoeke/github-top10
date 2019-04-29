const API_URL = "https://api.github.com/search/repositories?q=language:";
const SORT_PARAMS = "&sort=stars&per_page=10";

export const fetchRepos = (KEYWORD = "") => {
  return fetch(API_URL + KEYWORD + SORT_PARAMS)
    .then(response => response.json())
    .then(data => {
      return data.items.map(item => ({
        id: item.id,
        name: item.full_name,
        description: item.description,
        starCount: item.stargazers_count.toLocaleString(),
        link: item.html_url
      }));
    });
};
