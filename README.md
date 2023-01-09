# InDesign-Scripts-linkElements
An InDesign CC script that link the calls to the Figures, Tables and Appendices to the corresponding legend

################################################################################################
################################################################################################
################################################################################################

[FRENCH] (English below)

Ce script a pour but de vous permettre d'établir une liaison entre des appels à certains types d'éléments (Figures, Tableaux et Annexes) et la légende correspondante.

Les légendes des Figures, Tableaux et Annexes doivent être stylés avec le style de paragraphe "Légende figure", "Légende tableau" ou "Légende annexe" (la légende ne doit être constituée que d'un seul paragraphe).

Les appels aux éléments correspondants dans le texte doivent ressembler à :
- Figures : "Fig. " ou "Figs " (notez l'espace), suivi d'un nombre ou plusieurs nombres séparés par des ";" et suivis éventuellement d'une ou plusieurs lettres séparées par des ", " ou des "-" ;

    ex. : "Fig. 1" ou "Figs 3; 5" ou "Figs 1-5" ou "Figs 1A; 3C; 7D-G; 10"
    
- Tableaux : "Tableau " ou "Tableaux " (en français) ou "Table " ou "Tables " (en anglais), mêmes règles que précédemment pour la numérotation/lettrage ; 
- Annexes : "Annexe " ou "Annexes " (en français) ou "Appendix " ou "Appendices " (en anglais), mêmes règles que précédemment pour la numérotation/lettrage.

Pour effectuer ces liaisons, le script :
- crée une série d'ancres en cherchant les paragraphes correspondant au type d'élément sélectionné (la création des ancres est validée à chaque étape, pour être sûr de la bonne numérotation de celles-ci) ;
- recherche les appels correspondants dans le texte et ajoute un hyperlien vers l'ancre correspondante.

Le script permet également :
- de supprimer les liens créés ;
- de vérifier la présence des appels avant de lancer la liaison ;
- de supprimer ou d'ajouter des appels ;
- d'étendre ou de regrouper les plages d'appels (attention, cette fonctionnalité ne marche pas quand des lettrages sont inclus dans l'appel, par ex. : Figs 3A,D-7 ou Figs 5A-7E) ;
- d'"allumer" ou d'"éteindre" les appels dans le texte ;
- de revenir en arrière ou d'avancer dans l'historique d'INDD ; un point et enregistré avant et après chaque grande étape (en gros, avant/après chaque clic sur un bouton).

Attention :

Le script ne touche qu'aux appels non stylés ; une fois les appels liés, ils sont stylés en style de caractère "Appel de figure" (rose) de manière à les exclure des prochaines opérations.

Conclusion sous forme d'avertissement du développeur :

Je n'avais pas forcément prévu de mettre en ligne ce programme (c'est le tout premier que je partage), je vous demande donc de l'indulgence quant à la qualité du code (je ne suis pas développeur de formation) et surtout, vous vous apercevrez peut-être (sûrement) que ce programme inclus de nombreux extraits piochés ici ou là (peut-être certains des vôtres) sur internet et dont je n'ai pas suivi – ni cité – précisémment la paternité. Je m'excuse donc platement auprès de toutes les personnes que j'aurais du citer nominativement ici.

Je remercie néanmoins tout de même :
- Marc Autret et son site web (https://www.indiscripts.com/) dans laquel je pioche depuis des années des scripts, des idées et des solutions (quand j'arrive à comprendre le contenu des scripts) ;
- Peter Kahrel (https://creativepro.com/files/kahrel/indesignscripts.html) pour ses programmes et ses réponses sur les forums, qui m'ont souvent éclairé ;
- Laurent Tournier (https://indigrep.com/), qui m'a fait découvrir la puissance des GREP lors d'une formation "Médici" ;
- †Teus de Jong (http://www.teusdejong.nl/) qui, même des années après son décès, nous est toujours aussi utile ; bravo et merci à lui !

################################################################################################
################################################################################################
################################################################################################

[ENGLISH]

The purpose of this script is to allow you to establish a link between calls to certain types of elements (Figures, Tables and Appendices) and the corresponding legend.

Figure, Table and Appendix captions must be styled with the paragraph style "Figure Caption", "Table Caption" or "Appendix Caption" (the caption must be a single paragraph).

Calls to corresponding elements in the text should look like :
- Figures: "Fig." or "Figs" (note the space), followed by a number or numbers separated by ";" and possibly followed by one or more letters separated by "," or "-" ;

    e.g.: "Fig. 1" or "Figs 3; 5" or "Figs 1-5" or "Figs 1A; 3C; 7D-G; 10

- Tables: "Tableau" or "Tableaux" (in French) or "Table" or "Tables" (in English), same rules as above for numbering/lettering; 
- Annexes: "Annexe" or "Annexes " (in French) or "Appendix " or "Appendices " (in English), same rules as above for numbering/lettering.

To make these links, the script :
- creates a series of anchors by searching for the paragraphs corresponding to the type of element selected (the creation of anchors is validated at each stage, to be sure of their correct numbering);
- searches for corresponding calls in the text and adds a hyperlink to the corresponding anchor.

The script also allows you to :
- delete the links created;
- check the presence of calls before launching the link;
- delete or add calls;
- Extend or group call ranges (note that this functionality does not work when lettering is included in the call, e.g. Figs 3A,D-7 or Figs 5A-7E)
- "turn on" or "turn off" calls in the text;
- go backwards or forwards through INDD's history; a point is recorded before and after each major step (basically, before/after each button click).

Warning:

The script only touches unstyled calls; once calls are linked, they are styled in the "Figure call" (pink) character style so that they are excluded from future operations

Conclusion (and developer's warning):

I didn't necessarily plan to put this program online (it's the very first one I'm sharing), so I ask for your indulgence regarding the quality of the code (I'm not a trained developer)
and above all, you will perhaps (surely) notice that this program includes many extracts taken here and there (perhaps some of yours) on the internet 
and for which I did not follow - nor quote - precisely the authorship. I therefore apologise to all the people I should have quoted by name here.

I nevertheless thank, in a general way :

- Marc Autret and his website (https://www.indiscripts.com/) from which I have been picking up scripts, ideas and solutions for years (when I can understand the content of the scripts);
- Peter Kahrel (https://creativepro.com/files/kahrel/indesignscripts.html) for his programs and his answers on the forums, which often enlightened me ;
- Laurent Tournier (https://indigrep.com/), who made me discover the power of GREP during a "Médici" training;
- †Teus de Jong (http://www.teusdejong.nl/) who, even years after his death, is still as useful as ever; well done and thanks to him!

Translated with www.DeepL.com/Translator (free version)

################################################################################################
################################################################################################
################################################################################################
