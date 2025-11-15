const surname = document.getElementById('surname')
const dateOfBirth = document.getElementById('date-of-birth')
const output = document.getElementById('output')
const btn = document.getElementById('btn')
const date = new Date()
const data = [surname, dateOfBirth];
const textRe = /^[a-z]+$/i;
const dateRe = /^\d+$/;
let namePrompt = prompt('Enter your name!');

if (textRe.test(namePrompt)) {
  btn.addEventListener('click', () => {
  if (textRe.test(surname.value) && dateRe.test(dateOfBirth.value)) {
    let age = date.getFullYear() - dateOfBirth.value;
    output.innerText = `${namePrompt} ${surname.value}'s current age is: ${age}`;
    data.forEach(input => input.value = null)
    }
})
} else  {alert('Invalid data!');
 output.innerText = `~ Reload page ~`;}


