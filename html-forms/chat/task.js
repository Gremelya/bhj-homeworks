let chat = document.querySelector('.chat-widget');
let messages = document.querySelector('.chat-widget__messages');
let inputChat = document.getElementById('chat-widget__input');
let openChat = document.querySelector('.chat-widget__side');
let date,
    time, 
    hours,
    minutes,
    seconds,
    questionFromBot,
    count;

openChat.addEventListener('click', function() {
    chat.classList.add('chat-widget_active');
});

function getTime() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    time = `${hours}:${minutes}:${seconds}`;

    return time;
}

inputChat.addEventListener('keypress', function(event) {
    if (event.key.toLowerCase() === 'enter') {

        clearInterval(questionFromBot); 

        if (inputChat.value.length > 0) { 
            messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${getTime()}</div>
                    <div class="message__text">${inputChat.value}</div>
                </div>
            `;
        } else {
            return false;
        }    

        inputChat.value = '';

        count = 0;
            
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${botAnswer()}</div>
            </div>
        `;

        document.querySelector('.chat-widget__messages-container').scrollTop = messages.scrollHeight;

        questionFromBot = setInterval(() => {
            if (chat.classList.contains('chat-widget_active')) count++;
               
            if (count === 30) {
                messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">${getTime()}</div>
                        <div class="message__text">${botQuestion()}</div>
                    </div>
                `;

                count = 0;
                clearInterval(questionFromBot); 
                document.querySelector('.chat-widget__messages-container').scrollTop = messages.scrollHeight;
            }
        }, 1000);

    }
    return false;
});

function botAnswer() {
    const answers = [
        'Нельзя сотворить здесь!',
        'Хватит щёлкать! Мышь оглохнет!',
        'Никто не смеет мне приказывать!',
        'Я жажду служить!',
        'Скланяюсь перед вашей волей',
        'Не могу стоять, пока другие работают... Пойду полежу.'
    ];

    index = Math.floor(Math.random() * answers.length);

    return answers[index];
}

function botQuestion() {
    const questions = [
        'Ну, что еще?',
        'Ты, что ль, король? Я за тебя не голосовал!',
        'Вскрытие показало, что больной спал.',
        'Вы всё ещё не верите в демократию? Тогда мы летим к вам!',
        'Армия тьмы на подходе!',
        'Ну как там в аду? Не похолодало?'
    ];

    index = Math.floor(Math.random() * questions.length);

    return questions[index];
}
