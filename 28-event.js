function demo(){

    console.log('Hey you clicked me...');   

}

 

const techSkill = document.querySelector("#techSkill");

techSkill.addEventListener('click', ()=>{

    console.log("Hello..  My buddy ");

});


const confirmPara = document.querySelector("#confirm");

confirmPara.addEventListener('click', ()=>{

    const confirmResult = confirm("Are you sure, you want to submit information ?");

    alert(confirmResult);

    console.log(confirmResult);

    

});