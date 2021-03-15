const express = require('express');
const cors = require('cors');
const xlsxj = require('xlsx-to-json');
const config = require('./config.json');

const app = express();
app.use(cors());

const port = config.port;
const path = config.linkPath;
const cachedPath = config.cachedPath;

const cacheData = (res, url) => {
	const link = path + url + '.xlsx';
	try {
		xlsxj({
			input: link, 
			output: cachedPath
		}, function(err, result) {
			if(err) {
				console.error(err);
			}else {
				res.send(result);
			}
		});
	} catch (e) {
		res.send(`[{"Цена":"","":"0","Артикул":"","Номенкулатура":"Ошибка 404! Страница с кодом '${url}' не найдена."}]`);
	}
};

app.get('*', (req, res) => {
	cacheData(res, req.originalUrl);
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});