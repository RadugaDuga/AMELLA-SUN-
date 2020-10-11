let out = document.querySelector('#out'),
    kids = document.querySelector('#kids'),
    one = document.querySelector('#one'),
    family = document.querySelector('#family'),
    love = document.querySelector('#love'),
    studio = document.querySelector('#studio'),
    howMuchWrapper = document.querySelector('.form-group_howmuch-input'),
    howmuchInput = document.querySelector('#howmuch-input'),
    extraPhotos = document.querySelector('#extra-photos'),
    time = document.querySelector('#time');
 

    function lofi(){

        let a = 0;
        

        if(kids.checked){
            a = 1600;
        }else if (one.checked){
            a = 1500;
        }else if (family.checked){
            a = 2000;
            
        }
        else if (love.checked){
            a = 2000;
        }else {
            a = 0;
        }
        
        
        
        if (studio.checked){
            studio.value = 1200;
        }else {
            studio.value = 0;
        }
        

        if (family.checked){
            howMuchWrapper.classList.add('form-group_howmuch-input_activated') ;
            document.querySelector('.howmuch').innerHTML = howmuchInput.value;
            a = 2000 + 1000  * ( howmuchInput.value - 3 );
        }else {
            howMuchWrapper.classList.remove('form-group_howmuch-input_activated') ;
        };


        
        
        let sum = Number(studio.value) + Number(time.value *a) + (extraPhotos.value * 150);
        out.innerHTML = sum;
    };
    
    

    time.onchange = function(){
        document.querySelector('.distanse').innerHTML = time.value;
        lofi();
    };

    extraPhotos.onchange = function(){
        document.querySelector('.extras').innerHTML = extraPhotos.value;
        lofi();
    };

    howmuchInput.onchange = function(){
        lofi();
    };
    
    kids.onchange = lofi;
    one.onchange = lofi;
    family.onchange = lofi;
    love.onchange = lofi;
    studio.onchange = lofi;
    