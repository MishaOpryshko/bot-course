const TelegramBot = require('node-telegram-bot-api');
const token = '6351824670:AAGGecnp50Eq8186NmU2_vaU8LIrE2KnfaI';
const bot = new TelegramBot(token, { polling: true });
const photos = [
    { type: 'photo', media: 'img/1.jpg' },
    { type: 'photo', media: 'img/2.jpg' },
    { type: 'photo', media: 'img/3.jpg' },
    { type: 'photo', media: 'img/4.jpg' },
    { type: 'photo', media: 'img/5.jpg' },
    // Добавьте другие фотографии по аналогии
];



bot.onText(/\/start/, (msg) => {
    // Здесь вы можете добавить код для получения актуальных курсов валют
    // и отправки их пользователю.
    const chatId = msg.chat.id;
  
    // Пример: отправка сообщения с курсом
    setTimeout(() => {
    bot.sendMessage(chatId, `ДОБРО ПОЖАЛОВАТЬ 🤗 

    Мы недавно начали работать с сайтом Poizon и активно набираем клиентскую базу. Кто не в курсе, Poizon это Китайская платформа по перепродаже оригинальных вещей по низкой цене.
Для того чтобы оформить заказ надо иметь Китайскую банковскую карту и проживать на территории данной страны, так как они осуществляют доставку только по своим регионам. 
    
"Но как заказать человеку из России?" - спросите вы. Тут на помощь появляется наша команда, и мы выступаем в роли посредника между вами и Poizon, тем самым вы можете приобрести желанную вещь по низкой цене заказав ее через нас.  

💳КАК ПРОИСХОДИТ ПРОЦЕСС ПОКУПКИ?💳

✅Для этого вам надо скачать приложение Poizon.
✅Зарегистрироваться (❗️заранее предупреждаем: это не очень просто, вам придется пользоваться переводчиком с китайского языка❗️).
✅Выбрать интересующий вас товар.
✅Узнать цену у нас в боте (слева в углу)*. 
✅Сделать заказ через бота (слева в углу).
✅Далее мы закупаем Юани (Китайская валюта в которой совершаются покупки на Poizon) оплачиваем ваш товар и ждем его прибытия в нужный город. 
✅После чего осуществляется доставка до вашего города или мы отправляем вам курьером на дом. 
*Цена за доставку из Китая в Россию входит отдельно и составляет 1 кг ~ 500 RUB, потому что она всегда колеблется и нет стабильной цены, поэтому когда товар поступает в наши руки, вам отдельно надо заплатить за доставку.
❗️МЫ РАБОТАЕМ СТРОГО ПО ПРЕДОПЛАТЕ❗️

❓Как скачать POIZON❓
https://www.dewu.com/ — для IOS
https://m.pc6.com/s/286696 — для Android

🧳ДОСТАВКА🧳

Мы работаем с такими компаниями как
-СДЭК
-ПОЧТА РОССИИ
    
p.s.  (Период доставки всегда колеблется от 3 до 4 недель, поэтому вопросы по доставки уточнять у нашего менеджера)`);
    }, 1000)
  });




bot.onText(/\/command2/, (msg) => {
    // Здесь вы можете добавить код для получения актуальных курсов валют
    // и отправки их пользователю.
    getCurrencies ()

    async function getCurrencies () {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        const result = await data;
        const res = result.Valute.CNY.Value;
        const prom = Math.round(res * 10) / 10;
        const end = prom + 1;
    
        const chatId = msg.chat.id;

        // Пример: отправка сообщения с курсом
        setTimeout(() => {
            bot.sendMessage(chatId, `Лан, курс валюты: 1 CHY = ${end} RUB`);
        }, 3000)

        setTimeout(() => {
            bot.sendMessage(chatId, 'Сам иди гугли!');
        }, 1000)
    }
  });
  




  bot.onText(/\/command3/, (msg) => {
    const chatId = msg.chat.id;

    setTimeout(() => {
        bot.sendMessage(chatId, 'Пожалуйста, введите цену в юанях 1-го товара (строго только числом).');
    }, 1000)

  });


  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

  
    if (!isNaN(messageText)) {

    getCurrencies ()

    async function getCurrencies () {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        const result = await data;
        const res = result.Valute.CNY.Value;
        const prom = Math.round(res * 10) / 10;
        const end = prom + 1;


        const resultes = parseFloat(messageText) * end;

        const roundedNumber = Math.floor(resultes)




        if (messageText >= 500) {

            const results = roundedNumber + 1500;

            setTimeout(() => {
                bot.sendMessage(chatId, 'Чел да ты БРОУК! Ты уверен что тебе это по карману?');
            }, 2000)
    
            setTimeout(() => {
                bot.sendMessage(chatId, 'Короче...');
            }, 6000)
    
            setTimeout(() => {
                bot.sendMessage(chatId, `Вот такая сумма выходит = ${results} RUB`);
            }, 8000)

        } else if (messageText >= 200 && messageText < 500 ) {

            const results = roundedNumber + 1000;

            setTimeout(() => {
                bot.sendMessage(chatId, 'Хм, наверное биток закупаешь...');
            }, 2000)
    
            setTimeout(() => {
                bot.sendMessage(chatId, 'Сейчас посчитаем');
            }, 6000)
    
            setTimeout(() => {
                bot.sendMessage(chatId, `Вот такая сумма выходит = ${results} RUB`);
            }, 8000)

        } else if (messageText >= 10 && messageText <= 50) {

            const results = roundedNumber + 300

            setTimeout(() => {
                bot.sendMessage(chatId, 'ДА ужжж, ну ладно');
            }, 2000)
    
            setTimeout(() => {
                bot.sendMessage(chatId, 'Ща кофе допью');
            }, 6000)
    
            setTimeout(() => {
                bot.sendMessage(chatId, `Вот такая сумма выходит = ${results} RUB`);
            }, 8000)

        } else if (messageText < 10) {

            setTimeout(() => {
                bot.sendMessage(chatId, 'ХО-ХО, нет там таких цен');
            }, 2000)

        } else {

            const results = roundedNumber + 700

            setTimeout(() => {
                bot.sendMessage(chatId, 'Если нет денег, то давай я займу (шутка)');
            }, 2000)
    
            setTimeout(() => {
                bot.sendMessage(chatId, 'Так...секунду');
            }, 6000)
    
            setTimeout(() => {
                bot.sendMessage(chatId, `Вот такая сумма выходит = ${results} RUB`);
            }, 8000)
        }


        

    }

    } 
});




bot.onText(/\/command1/, (msg) => {
    const chatId = msg.chat.id;

    // Создаем массив объектов с фотографиями

    // Отправляем сообщение с фотографиями
    bot.sendMediaGroup(chatId, photos).then(() => {
            bot.sendMessage(chatId, `❔КАК ЗАРЕГИСТРИРОВАТЬСЯ❔
            
После того как вы скачаете приложение и зайдете в него: 
🟨Скрин №1 - У вас либо сразу всплывет окно или вам придется нажать на кнопку
🟨Скрин №2 - В появившемся окне меняем телефонный код
🟨Скрин №3 - Находим +7 и нажимаем на него
🟨Скрин №4 - Вводим свой номер телефона и нажимаем на кнопку
🟨Скрин №5 - После чего ждем SMS-код, подтверждаем и ВСЕ!`);
    });
});





bot.onText(/\/command4/, (msg) => {
    const chatId = msg.chat.id;

    setTimeout(() => {
        bot.sendMessage(chatId, `Если вы готовы сделать заказ:

➡️Переходите к нашему менеджеру - https://t.me/Yakyama
➡️Предоставьте скрин товара, который выбрали
➡️Размер стельки (если это обувь)
➡️И ждите ответа🤗`);
    }, 1000)
});