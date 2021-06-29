const express = require("express");
const app = express();

app.listen(1345);

app.get("/", (req, res) =>
	res.json({
		ok: true,
	})
);
