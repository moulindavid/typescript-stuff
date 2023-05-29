import express from "express";
import { useTurso } from "./turso";
import { randomUUID } from "crypto";

const app = express()

const client = useTurso();

app.get("/users", async (_req, res) => {
    const rs = await client.execute("select * from users");
    res.json(rs);
})

app.post("/users", async (req, res) => {
    const email = req.body.email;

    if (typeof email !== "string") {
        res.send(400);
        return;
    }

    const rs = await client.execute({
        sql: "insert into users values (?, ?, ?)",
        args: [randomUUID(), email, 0]
    });
    res.json(rs);
})

app.listen(8080, () => {
      console.log("Port 8080 bip bop");
})

