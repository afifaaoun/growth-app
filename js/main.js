// faq accordian
document.addEventListener("DOMContentLoaded",()=>{
    const faqContainer = document.querySelector('.faq-content');
    faqContainer.addEventListener('click',(e)=>{
const groupHeader= e.target.closest('.faq-group-header');
// console.log(groupHeader);
if(!groupHeader) return;
const group= groupHeader.parentElement;
const groupBody= group.querySelector('.faq-group-body');
const icon= groupHeader.querySelector('i');
// toggle icon bch tetbadel ml + ll - est visversa
icon.classList.toggle('fa-plus');
icon.classList.toggle('fa-minus');
// toggle visibility of body
groupBody.classList.toggle('open');


// close other opened faq bodies
const otherGroups= faqContainer.querySelectorAll('.faq-group');
// console.log(otherGroups);
otherGroups.forEach((otherGroups)=>{
if(otherGroups !==group){
    const otherGroupBody= otherGroups.querySelector('.faq-group-body');
    const otherIcon= otherGroups.querySelector('.faq-group-header i');
    otherGroupBody.classList.remove('open');
    otherIcon.classList.remove('fas-minus');
    otherIcon.classList.add('fas-plus');

}
});
    });
})
// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });

