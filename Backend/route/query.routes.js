import express from "express";
import { addQueryMessage } from "../Controller/query.controller.js";

const router = express.Router();

router.post("/", addQueryMessage);

export default router;
