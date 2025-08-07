import express from "express";

import tmdbClient from "../utils/api";
import { TMDB_API_KEY, TMDB_ENDPOINT } from "../constants/misc";
import axios from "axios";

const router = express.Router();

export default (): express.Router => {
  router.all("*", async (req: express.Request, res: express.Response) => {
    try {
      const path = req.path;

      console.log({ path, query: req.query, params: req.params });
      console.log({ url: `${TMDB_ENDPOINT}/${path}` });

      const response = await axios.get(`${TMDB_ENDPOINT}/${path}`, {
        params: { api_key: TMDB_API_KEY },
      });

      return res.status(response.status).json(response.data);
      // res.status(200).json({ path, query: req.query, params: req.params });
    } catch (error) {
      if (error.response) {
        return res.status(error.response.status).json(error.response.data);
      } else {
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return router;
};
