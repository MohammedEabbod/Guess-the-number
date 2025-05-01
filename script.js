let result = document.querySelector('h1');
let input_guess = document.querySelector('.guess');
let btn = document.querySelector('.check');
let color = document.querySelector('body');
let again = document.querySelector('.again');
let score_lable = document.querySelector('.score');
let rondon =Math.floor( Math.random() * 20 + 1);
let audio = document.querySelector('audio');
let score = 20;
let audio2 = document.querySelector('.audio2');
let audio3 = document.querySelector('.audio3');
score_lable.textContent = score;

function play(){
    let get_input = Number(input_guess.value);
    audio.play();
    console.log('random number:', rondon);
    console.log(get_input);
    if(get_input === rondon){
        audio.pause();
        audio3.play();
        result.textContent = 'You guessed it right!';
        color.style.backgroundColor = 'green';
        color.style.transition = 'background-color 0.5s ease';    
    } else if(get_input > rondon){
        audio2.play();
        result.textContent = 'Too high! Try again.';
        color.style.backgroundColor = 'red';
        --score;
        score_lable.textContent = score;
        color.style.transition = 'background-color 0.5s ease';
    } else if(get_input < rondon){
        audio2.play();
        result.textContent = 'Too low! Try again.';
        color.style.backgroundColor = 'red';
        --score;
        score_lable.textContent = score;
        color.style.transition = 'background-color 0.5s ease';
    } else {
        result.textContent = 'Please enter a valid number between 1 and 20.';
    }
    input_guess.value = '';
    input_guess.focus();   
}

again.addEventListener('click', function(){
    rondon = Math.floor(Math.random() * 20 + 1);
    score = 20;
    score_lable.textContent = score;
    result.textContent = 'Guess My Number!';
    color.style.backgroundColor = '#222';
    color.style.transition = 'background-color 0.5s ease';
    input_guess.value = '';
    input_guess.focus();
}
)
 
btn.addEventListener('click', play)

