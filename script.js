// Variable
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: 'A fool thinks himself to be wise, but a wise man knows himself to be a fool',
        person: `William Shakespeare`
    },{
        quote: `Early to bed and early to rise makes a man healthy, wealthy and wise`,
        person : `Benjamin Franklin`
    },{
        quote: `Wisdom is the right use of knowledge. To know is not to be wise. Many men know a great deal, and are all the greater fools for it. There is no fool so great a fool as a knowing fool. But to know how to use knowledge is to have wisdom.`,
        person: `Charles Spurgeon`
    },{
        quote: `A smart man makes a mistake, learns from it, and never makes that mistake again. But a wise man finds a smart man and learns from him how to avoid the mistake altogether.`,
        person: `Roy H. Williams`
    },
    {
        quote: `True love is not a strong, fiery, impetuous passion. It is, on the contrary, an element calm and deep. It looks beyond mere externals, and is attracted by qualities alone. It is wise and discriminating, and its devotion is real and abiding.`,
        person: `Ellen G. White`        
    },{
        quote: `Women desire six things: They want their husbands to be brave, wise, rich, generous, obedient to wife, and lively in bed.`,
        person: `Geoffrey Chaucer`
    },{
        quote: `A wise man can learn more from a foolish question than a fool can learn from a wise answer.`,
        person: `Bruce Lee`
    },{
        quote: `A beautiful woman delights the eye; a wise woman, the understanding; a pure one, the soul.`,
        person: `Minna Antrim`
    },{
        quote: `Nine-tenths of wisdom is being wise in time.`,
        person: `Theodore Roosevelt`
    },{
        quote: `Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.`,
        person: `Sholom Aleichem`
    }
];

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
});