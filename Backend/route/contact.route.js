import express from "express";
import { addContactMessage } from "../Controller/contact.controller.js";

const router = express.Router();

router.post("/", addContactMessage);

export default router;
