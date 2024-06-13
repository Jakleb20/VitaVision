import express, {Request, Response} from "express"
import {Agent} from "../src/db/Agent.model.db";

const router = express.Router()

router.get("/", (req:Request, res:Response) => {
    res.send("resource");
})

router.get("/all", async (req:Request, res:Response) => {
    res.status(200).send(await Agent.find())
})

router.get("/random", async (req:Request, res:Response) => {
    const agentArray = (await Agent.aggregate([{ "$sample": { "size": 1 } }])) as any[];
    res.status(200).send(agentArray[0]);
});


module.exports = router
