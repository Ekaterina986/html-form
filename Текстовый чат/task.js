const widget = document.getElementsByClassName('chat-widget')[0];
const chatInput = document.getElementById('chat-widget__input');

function selectWidget(e){
    e.preventDefault();
    widget.classList.add('chat-widget_active');
}

function addMessages(e) {
    const clientValue = e.target.value
    if (clientValue.length === 0 || e.code !== 'Enter' ){
        return;
    }
    console.log(222, clientValue)
    const messageValue = ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 'Добрый день!', 'Vы ещё не проснулись.', 'Позвоните через 10 лет']
    function getRandomNumber(min, max) {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1))
    }
    const item = getRandomNumber(0, messageValue.length);
    const now = new Date().getHours() + ':' + new Date().getMinutes();
    const messages = document.querySelector( '.chat-widget__messages' );
    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${now}</div>
        <div class="message__text">${clientValue}</div>
    </div>
    <div class="message">
        <div class="message__time">${now}</div>
        <div class="message__text">
        ${messageValue[item]}
        </div>
    </div>`;
}

widget.addEventListener('click', selectWidget);
chatInput.addEventListener('keyup', addMessages);