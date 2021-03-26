const config = {
	serverLink: 'http://localhost:3000/',
	ndsPercent: 20, // НДС составляет 20%
	euroRate: 89.44 // 1 евро = 89.44 рубля
};

/*
	КОД НИЖЕ НЕ ЯВЛЯЕТСЯ ЗОНОЙ НАСТРОЙКИ!
	НЕ РЕДАКТИРОВАТЬ.
*/

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const additionalUrl = urlParams.get('url');