let t = document.getElementById("taille").value;
        t.replace(".",",");
let p = document.getElementById("poids").value;
let txtIMC;


function calcul(){
   
        let result;

        result = document.getElementById("poids").value / (document.getElementById("taille").value * document.getElementById("taille").value);

        if(result<18.5){
                txtIMC="Vous êtes en INSUFFISANCE PONDÉRALE ! (Maigreur).";
        }
        else if(result>=18.5 && result<=25){
                txtIMC="Vous êtes en CORPULENCE NORMALE.";
        }
        else if(result>25 && result<=30){
                txtIMC="Vous êtes en SURPOIDS !";
        }
        else if(result>30 && result<=35){
                txtIMC="Vous êtes en OBÉSITÉ MODÉRÉE !";
        }
        else if(result>35 && result<=40){
                txtIMC="Vous êtes en OBÉSITÉ SÉVÈRE !";
        }
        else if(result>40 && result<=50){
                txtIMC="Vous êtes en OBÉSITÉ MORBIDE !";
        }
        else if(result>50){
                txtIMC="Vous êtes en OBÉSITÉ MASSIVE !";
        }

        if(result = document.getElementById("poids").value / (document.getElementById("taille").value * document.getElementById("taille").value)){
                document.getElementById("resultIMC").innerHTML = " Votre IMC est de : " + result + " / " + txtIMC;
        }
        else {
                alert("Remplissez tous les champs !");
        }
}   

function verifier()
{
const elements = document.querySelectorAll("#taille, #poids");
Array.from(elements).forEach((element, index) => 
{
if (element.value != '')
{ 
element.style.border = "2px solid green"; 
}
else
{
element.style.border = "2px solid red";
}
});
}

        
