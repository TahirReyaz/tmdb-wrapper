import express from "express";

import tmdbClient from "../utils/api";

const router = express.Router();

export default (): express.Router => {
  router.all("*", async (req: express.Request, res: express.Response) => {
    try {
      const path = req.path;

      console.log({ path, query: req.query, params: req.params });

      const response = await tmdbClient.request({
        url: path,
        method: req.method,
        params: req.query,
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
