/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const checked_URL = '/Users/anastasiasabina/Desktop/mhw2/mhw2_starting_code/images/checked.png';
const unchecked_URL= '/Users/anastasiasabina/Desktop/mhw2/mhw2_starting_code/images/unchecked.png'

function getwinner(){
const one =mappa['one'];
const two= mappa['two'];
const three= mappa['three'];
let title;
let content;
    if ( one === two || one === three || one !== two && two !== three){
    title = RESULTS_MAP[one] ['title'];
    content= RESULTS_MAP[one] ['contents'];
    }
    else {
        title= RESULTS_MAP[two] ['title'];
        content= RESULTS_MAP[two] ['contents'];
    }
    result(title,content);
}

function restart(){
const risultato =document.querySelector('#result');
risultato.innerHTML=''; 
mappa={};
for (const box of boxes){

    box.addEventListener('click', checking);
    box.classList.remove('selezionato');
    box.classList.remove('nonselezionato');
    const deselezione = box.querySelector('img.checkbox');
    deselezione.src=unchecked_URL;

}
}

function result(title,content){
    const titolo=document.createElement('h1');
    titolo.textContent=title;
    const paragrafo =document.createElement('p');
    paragrafo.textContent= content;
    const rebutton= document.createElement('button');
   rebutton.textContent='Ricomincia il quiz';
   rebutton.addEventListener('click', restart);
   const risultato= document.querySelector('#result');

    risultato.appendChild(titolo);
    risultato.appendChild(paragrafo);
    risultato.appendChild(rebutton); 
} 

let mappa= {}; 

function addtoMap(questionId,answerId)
{
    mappa[questionId]= answerId;
    if(Object.keys(mappa).length === 3)
    {
        for (const box of boxes)
        {
            box.removeEventListener('click', checking);
        }
      getwinner();
    }  
}

function checking(event)
{
  const container = event.currentTarget;
  const checkbox = container.querySelector('img.checkbox');
  const answerId= container.dataset.choiceId;
  const questionId= container.dataset.questionId;

for (const box of boxes) 
 {
if ( questionId === box.dataset.questionId && answerId !== box.dataset.choiceId  )
{
    box.classList.remove('selezionato');
    box.classList.add('nonselezionato');
    const deselezione = box.querySelector('img.checkbox');
    deselezione.src=unchecked_URL; 
} 
else
{
    checkbox.src= checked_URL;
    container.classList.add('selezionato');
    container.classList.remove('nonselezionato');
} 
}
 addtoMap(questionId,answerId);
}

const boxes = document.querySelectorAll('.choice-grid div');

for (const box of boxes)
{
  box.addEventListener('click', checking);
} 



 