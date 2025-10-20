
document.addEventListener('DOMContentLoaded', function() {
    var verify = document.querySelector('#verifyBtn');
    verify.addEventListener('click', clicked);

    function clicked() {
        var yearValue = document.querySelector('#yeartxt').value;
        let calcAge = new Date().getFullYear() - Number(yearValue);

        var divIMG = document.querySelector('#img');
        var textAge = document.querySelector('#textCalcAge');

        var selectedRadio = document.querySelector('input[name="sexo"]:checked');
        var sex = '';
        if(selectedRadio){
            sex = selectedRadio.value;
            console.log(sex);  
        }
        
        if (sex == 'M'){
            sex = 'Man';
        }else if (sex == 'F'){
            sex = 'Woman';
        }
        
        if (calcAge < 0){
            alert('Please, enter a valid year');
            return;
        }else if (sex == '' || yearValue == ''){
            alert('please, fill all fields');
            return;
        }

        if (calcAge > 110){
            textAge.innerHTML = `You are a alien with <strong>${calcAge}</strong> years.`        
        }else{
            textAge.innerHTML = `You are a ${sex} with <strong>${calcAge}</strong> years.`
        }
    
        let image = document.querySelector('#img'); 
        let img = document.createElement('img');
        img.width = 250;
        img.height = 250;
        img.style.borderRadius = '50%';
        image.appendChild(img);
        
        if (calcAge > 110){
            img.src = '../images/alien.jpg';
        }else if (calcAge >= 60 && sex == 'Man'){ //start mans
            img.src = '../images/60+yearsmang.jpg';  
        }else if (calcAge < 60 && calcAge >= 30 && sex == 'Man'){
            img.src = '../images/30man.jpg';
        }else if (calcAge < 30 && calcAge >= 18 && sex == 'Man'){
            img.src = '../images/18man.jpg';
        }else if (calcAge < 18 && calcAge >= 13 && sex == 'Man'){
            img.src = '../images/-18Man.jpg';
        }else if(calcAge < 13 && sex == 'Man' ){ //final mans
            img.src = '../images/-18Man.jpg'; 
        }else if (calcAge >= 60 && sex == 'Woman'){ // start womans
            img.src = '../images/60+yearswoman.jpg';  
        }else if (calcAge < 60 && calcAge >= 30 && sex == 'Woman'){
            img.src = '../images/30woman.jpg';
        }else if (calcAge < 30 && calcAge >= 18 && sex == 'Woman'){
            img.src = '../images/18woman.jpg';
        }else if (calcAge < 18 && calcAge >= 13 && sex == 'Woman'){
            img.src = '../images/-18woman.jpg';
        }else if(calcAge < 13 && calcAge > 0 && sex == 'Woman' ){
            img.src = '../images/-18woman.jpg';
        }
        
        image.removeChild(image.firstChild);
        

    }
    
    
});
