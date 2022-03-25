console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('the form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const pic = document.querySelector('img')

pic.addEventListener('mouseover', (e)=>{
	alert('give the user a compliment')
})