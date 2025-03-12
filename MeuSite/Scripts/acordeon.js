document.addEventListener('DOMContentLoaded', function () {
    const accordionOne = document.getElementById('panelsStayOpen-collapseOne');
    const accordionTwo = document.getElementById('panelsStayOpen-collapseTwo');
  
    function toggleCards(accordion, cardGroup) {
      accordion.addEventListener('hidden.bs.collapse', function () {
        cardGroup.style.display = 'none';
      });
  
      accordion.addEventListener('shown.bs.collapse', function () {
        cardGroup.style.display = 'block';
      });
    }
  
    const cardGroupOne = document.querySelector('#panelsStayOpen-collapseOne .card-group');
    const cardGroupTwo = document.querySelector('#panelsStayOpen-collapseTwo .card-group');
  
    toggleCards(accordionOne, cardGroupOne);
    toggleCards(accordionTwo, cardGroupTwo);
  });