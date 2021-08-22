/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])


    Моё решение: 

const CityInfo = {
  name: "Saint-Petersburg",
  country: "Russia",
  population: 5384342,
};

var YesStadium = 2;
var NoStadium = 4;
if (YesStadium == NoStadium) {
  console.log("There are few Football Stadiums in Saint-Petersburg");
} else {
  console.log(CityInfo);
  console.log(
    "There are few Football Stadiums in Saint-Petersburg, but only one is treated as main"
  );
}

*/
