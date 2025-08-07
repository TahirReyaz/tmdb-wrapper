import dotenv from "dotenv";

dotenv.config();

export const TMDB_ENDPOINT = "https://api.themoviedb.org/3";
export const TMDB_API_KEY = process.env.TMDB_API_KEY;
export const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN;
