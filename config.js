const config = {
	serverLink: 'http://localhost:3000/',
	ndsPercent: 20
};

/*
	КОД НИЖЕ НЕ ЯВЛЯЕТСЯ ЗОНОЙ НАСТРОЙКИ!
	НЕ РЕДАКТИРОВАТЬ.
*/

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const additionalUrl = urlParams.get('url');