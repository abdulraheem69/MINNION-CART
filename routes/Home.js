import express from "express";
import Users from "../modals/user.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("Home");
})




export default router;