import http from "./httpService";

const apiUrl = "/genres";

export function getGenres() {
  return http.get(apiUrl);
}
