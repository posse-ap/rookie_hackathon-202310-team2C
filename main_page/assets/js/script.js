const questionForm = document.getElementById('questionForm');

questionForm.addEventListener('submit', function(e){
    e.preventDefault() ;
    console.log(document.querySelector("input[name=name]").value);
    console.log(document.querySelector("select[name=age]").value);
    console.log(document.querySelector("textarea[name=content]").value);
})
