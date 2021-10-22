//Configura troca de divs por jquery
$(document).ready(function(){
    //Esconde div secundária
    $('#divList').hide();
    
    //Efetua trocas com links
    $('#linkList').click(function(){ 
        $('#divMain').hide();
        $('#divList').show();
    });
  
    $('#linkMain').click(function(){ 
        $('#divList').hide();
        $('#divMain').show();
    }); 
  });

//Configura criação da lista