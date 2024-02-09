let ville='Tokyo';
function recevoirTemperature(ville){

    const url='http://api.openweathermap.org/data/2.5/weather?q='+ville+',&APPID=1f3331506ef59c768674943da9f2d15b&units=metric';

    let requete=new XMLHttpRequest();

    requete.open('GET',url);
    requete.responseType='json';
    requete.send();

    requete.onload=function(){
        if(requete.readyState===XMLHttpRequest.DONE){
            if(requete.status===200){
                let reponse=requete.response;
                document.querySelector('#temperature_label').textContent=reponse.main.temp;
                document.querySelector('#ville').textContent=ville;
            }
            else{
                alert('Un problème est survenu, bien vouloir revenir plus tard.')
            }
        }
    }
}

recevoirTemperature(ville);

document.querySelector('#changer').addEventListener('click',()=>{
   let villechoisie=prompt("Quelle ville souhaitez-vous voir ?");
    recevoirTemperature(villechoisie);
})

