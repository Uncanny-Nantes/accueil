// Ajout du menu
jQuery('#jaune').mouseenter(function() {jQuery('#danse_menu').css('display','initial'), jQuery('#logo').css('background','url("../imgs/Jaune-Danse.png") no-repeat 0 0')});
jQuery('#jaune').mouseleave(function() {jQuery('#danse_menu').css('display','none'), jQuery('#logo').css('background','url("../imgs/Deux-Couleurs.png") no-repeat 0 0')});

jQuery('#bleu').mouseenter(function() {jQuery('#massage_menu').css('display','initial'), jQuery('#logo').css('background','url("../imgs/Bleu-Massage.png") no-repeat 0 0')});
jQuery('#bleu').mouseleave(function() {jQuery('#massage_menu').css('display','none'), jQuery('#logo').css('background','url("../imgs/Deux-Couleurs.png") no-repeat 0 0')});

// Animation
jQuery('#prenom').animate({opacity: 1},{duration: 300}).animate({top: "-=15px"},{duration: 800});
jQuery('#nom').animate({opacity: 1},{duration: 300}).animate({top: "+=15px"},{duration: 800});

jQuery('figure').delay(1300).animate({opacity: 1},{duration: 800});
jQuery('nav').delay(1300).animate({opacity: 1},{duration: 800});
