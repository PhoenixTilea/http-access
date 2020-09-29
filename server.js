const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'client', 'build')))

// Decode incoming url query parameter
app.use((req, res, next) => {
	try {
		req.query.url = decodeURI(req.query.url);
		return next();
	} catch (err) {
		res.status(500);
		return next(err);
	}
});
app.use("/api", require("./routes/reqRouter"));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

// Handle errors
app.use((err, req, res, next) => {
	console.error(err.message);
	return res.send({error: err.message});
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));