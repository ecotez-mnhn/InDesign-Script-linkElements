// ———————————————————————————————————————————————————————————————————————————————————————————————
//
// Script de liaison entre les appels aux figures, tableaux et annexes et la légende des éléments correspondants
// Script that links calls to corresponding elements (Figures, Tables and Appendices)
//
// Développé par/Developped by Emmanuel Côtez (emmanuel.cotez@mnhn.fr)
//
// Script version 1.02 (3/1/2023)
// Script version 1.03 (4/1/2023) – compatibilité mac ajoutée pour accès au fichier d'aide et au script text_anchor ;
// Script version 1.04 (4/1/2023) – corrections de bugs ;
// Script version 1.05 (3/1/2023) – modification de la gestion des ancres (suppression de 'Ancrage 1' s'il est créé par le script) ;
// Script version 1.06 (8/1/2023) – vérification de la présence des 3 styles de paragraphes nécessaires au fonctionnement du script ; s'ils n'existent pas, ils sont créés ; ajout d'explications sur le fonctionnement du script au début du programme, remerciements
// Correctif version 1.061, réponse à https://github.com/ecotez-mnhn/InDesign-Script-linkElements/issues/1 (mais pas sûr que ça change quoi que ce soit)
//
// version actuelle : 1.061
// UI version 0.13maj
// 
// Compatibilité approximative : le script fonctionne d'une manière générale avec Adobe CC ; pour la CS6, il y a un problème avec la création automatique des couleurs, mais si les couleurs existent dans le document, le script devrait fonctionner ; avant la CS6, ça m'étonnerait qu'il fonctionne !
//
// -----------------------------------------------------------------------------------------------
// IMPORTANT :
// À mettre à jour en fonction de la version d'InDesign et du dossier de l'utilisateur :
var scriptPathPC = "~\\AppData\\Roaming\\Adobe\\InDesign\\Version 18.0\\fr_FR\\Scripts\\Scripts Panel" ;
var scriptPathMAC = "~/Library/Preferences/Adobe Indesign/Version 18.0/fr_FR/Scripts/Scripts Panel" ;
// + Bouton help sous MAC uniquement :
// ligne 1797 : "var scriptPath = "file:///Users/ejt/Library/Preferences/Adobe Indesign/Version 18.0/fr_FR/Scripts/Scripts Panel/linkElements" ;"
// il faut clairement que j'améliore cette partie...
// -----------------------------------------------------------------------------------------------
//
// ################################################################################################
// ################################################################################################
// ################################################################################################
//
// [FRENCH]
//
// Ce script a pour but de vous permettre d'établir une liaison entre des appels à certains types d'éléments (Figures, Tableaux et Annexes) et la légende correspondante ;
//
// Les légendes des Figures, Tableaux et Annexes doivent être stylés avec le style de paragraphe "Légende figure", "Légende tableau" ou "Légende annexe" (la légende ne doit être constituée que d'un seul paragraphe) ;
//
// Les appels aux éléments correspondants dans le texte doivent ressembler à :
// Figures : "Fig. " ou "Figs " (notez l'espace), suivi d'un nombre ou plusieurs nombres séparés par des ";" et suivis éventuellement d'une ou plusieurs lettres séparées par des ", " ou des "-" ;
//   ex. : "Fig. 1" ou "Figs 3; 5" ou "Figs 1-5" ou "Figs 1A; 3C; 7D-G; 10"
// Tableaux : "Tableau " ou "Tableaux " (en français) ou "Table " ou "Tables " (en anglais), mêmes règles que précédemment pour la numérotation/lettrage ; 
// Annexes : "Annexe " ou "Annexes " (en français) ou "Appendix " ou "Appendices " (en anglais), mêmes règles que précédemment pour la numérotation/lettrage.
//
// Pour effectuer ces liaisons, le script :
// – crée une série d'ancres en cherchant les paragraphes correspondant au type d'élément sélectionné (la création des ancres est validée à chaque étape, pour être sûr de la bonne numérotation de celles-ci) ;
// – recherche les appels correspondants dans le texte et ajoute un hyperlien vers l'ancre correspondante.
//
// Le script permet également :
// – de supprimer les liens créés ;
// – de vérifier la présence des appels avant de lancer la liaison ;
// – de supprimer ou d'ajouter des appels ;
// – d'étendre ou de regrouper les plages d'appels (attention, cette fonctionnalité ne marche pas quand des lettrages sont inclus dans l'appel, par ex. : Figs 3A,D-7 ou Figs 5A-7E)
// – d'"allumer" ou d'"éteindre" les appels dans le texte ;
// – de revenir en arrière ou d'avancer dans l'historique d'INDD ; un point et enregistré avant et après chaque grande étape (en gros, avant/après chaque clic sur un bouton).
// 
// Attention :
// Le script ne touche qu'aux appels non stylés ; une fois les appels liés, ils sont stylés en style de caractère "Appel de figure" (rose) de manière à les exclure des prochaines opérations
//
// Conclusion sous forme d'avertissement du développeur :
// Je n'avais pas forcément prévu de mettre en ligne ce programme (c'est le tout premier que je partage), je vous demande donc de l'indulgence quant à la qualité du code (je ne suis pas développeur de formation)
// et surtout, vous vous apercevrez peut-être (sûrement) que ce programme inclus de nombreux extraits piochés ici ou là (peut-être certains des vôtres) sur internet 
// et dont je n'ai pas suivi – ni cité – précisémment la paternité. Je m'excuse donc platement auprès de toutes les personnes que j'aurais du citer nominativement ici.
//
// Je remercie néanmoins, d'une manière générale :
// – Marc Autret et son site web (https://www.indiscripts.com/) dans laquel je pioche depuis des années des scripts, des idées et des solutions (quand j'arrive à comprendre le contenu des scripts) ;
// – Peter Kahrel (https://creativepro.com/files/kahrel/indesignscripts.html) pour ses programmes et ses réponses sur les forums, qui m'ont souvent éclairé ;
// – Laurent Tournier (https://indigrep.com/), qui m'a fait découvrir la puissance des GREP lors d'une formation "Médici" ;
// – †Teus de Jong (http://www.teusdejong.nl/) qui, même des années après son décès, nous est toujours aussi utile ; bravo et merci à lui !
// 
// ################################################################################################
// ################################################################################################
// ################################################################################################
//
// [ENGLISH]
//
// The purpose of this script is to allow you to establish a link between calls to certain types of elements (Figures, Tables and Appendices) and the corresponding legend;
//
// Figure, Table and Appendix captions must be styled with the paragraph style "Figure Caption", "Table Caption" or "Appendix Caption" (the caption must be a single paragraph);
//
// Calls to corresponding elements in the text should look like :
// Figures: "Fig." or "Figs" (note the space), followed by a number or numbers separated by ";" and possibly followed by one or more letters separated by "," or "-" ;
// e.g.: "Fig. 1" or "Figs 3; 5" or "Figs 1-5" or "Figs 1A; 3C; 7D-G; 10
// Tables: "Tableau" or "Tableaux" (in French) or "Table" or "Tables" (in English), same rules as above for numbering/lettering; 
// Annexes: "Annexe" or "Annexes " (in French) or "Appendix " or "Appendices " (in English), same rules as above for numbering/lettering.
//
// To make these links, the script :
// - creates a series of anchors by searching for the paragraphs corresponding to the type of element selected (the creation of anchors is validated at each stage, to be sure of their correct numbering);
// - searches for corresponding calls in the text and adds a hyperlink to the corresponding anchor.
//
// The script also allows you to :
// – delete the links created;
// - check the presence of calls before launching the link;
// - delete or add calls;
// - Extend or group call ranges (note that this functionality does not work when lettering is included in the call, e.g. Figs 3A,D-7 or Figs 5A-7E)
// - "turn on" or "turn off" calls in the text;
// - go backwards or forwards through INDD's history; a point is recorded before and after each major step (basically, before/after each button click).
// 
// Warning:
// The script only touches unstyled calls; once calls are linked, they are styled in the "Figure call" (pink) character style so that they are excluded from future operations
//
// Conclusion in the form of a developer's warning:
// I didn't necessarily plan to put this program online (it's the very first one I'm sharing), so I ask for your indulgence regarding the quality of the code (I'm not a trained developer)
// and above all, you will perhaps (surely) notice that this program includes many extracts taken here and there (perhaps some of yours) on the internet 
// and for which I did not follow - nor quote - precisely the authorship. I therefore apologise to all the people I should have quoted by name here.
//
// I nevertheless thank, in a general way :
// - Marc Autret and his website (https://www.indiscripts.com/) from which I have been picking up scripts, ideas and solutions for years (when I can understand the content of the scripts);
// - Peter Kahrel (https://creativepro.com/files/kahrel/indesignscripts.html) for his programs and his answers on the forums, which often enlightened me ;
// - Laurent Tournier (https://indigrep.com/), who made me discover the power of GREP during a "Médici" training;
// - †Teus de Jong (http://www.teusdejong.nl/) who, even years after his death, is still as useful as ever; well done and thanks to him!

// Translated with www.DeepL.com/Translator (free version)

// ################################################################################################
// ################################################################################################
// ################################################################################################
	
// INCLUSIONS #####################################
#include 'functionsEC.js';
// FIN DES INCLUSIONS #############################

// ++++++++++++++++
// Ces deux lignes sont essentielles pour que le Panel reste affiché à l'écran !
#target indesign;
#targetengine "session"; 
// #targetengine "main"; 
// ++++++++++++++++



// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// FONCTIONS 
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

function getAnchors () {
		var anchors = [];
		var knownAnchors = {} ;
		
		function stripString (str) {
			// return unaccent (str.toUpperCase()).replace(/(\d+)/, function () {return (arguments[1].length===1 ? '00' : '0')+arguments[1]})
			return str ;
		}

		function bmarkIDs () {
			var bmarks = app.documents[0].bookmarks.everyItem().getElements();
			for (var i = bmarks.length-1; i >= 0; i--) {
				if (bmarks[i].destination instanceof HyperlinkTextDestination) {
					knownAnchors[bmarks[i].destination.id] = true;
					anchors.push ({
						sortKey: stripString (bmarks[i].destination.name),
						name: bmarks[i].destination.name,
						destinationName: bmarks[i].name,
						type: 'Bookmark'
						});
				}
			}
		} 

		function hlinkIDs () {
			var hlinks = app.documents[0].hyperlinks.everyItem().getElements();
			var o = {};
			for (var i = hlinks.length-1; i > -1; i--) {
				
				try {
					hlinks[i].destination;
					if (hlinks[i].destination instanceof HyperlinkTextDestination) {
						knownAnchors[hlinks[i].destination.id] = true;
						o = {
							sortKey: stripString (hlinks[i].destination.name),
							name: hlinks[i].destination.name,
							destinationName: hlinks[i].name,
						}
						switch (hlinks[i].source.constructor.name) {
							case 'CrossReferenceSource' : o.type = 'Xref'; break;
							case 'HyperlinkTextSource': o.type = 'Hyperlink';
						}
						anchors.push (o)
					}
				} catch (_) {

				}
			}
		}

		function independentIDs () {
			var tDest = app.documents[0].hyperlinkTextDestinations.everyItem().getElements();
			for (var i = tDest.length-1; i >= 0; i--) {
				if (!knownAnchors[tDest[i].id]) {
					anchors.push ({
						sortKey: stripString (tDest[i].name),
						name: tDest[i].name,
						destinationName: '',
						type: ''
						});
				}
			}
		}

		bmarkIDs();
		hlinkIDs();
		independentIDs();
		// for(var i = 0; i < anchors.length; i++) $.writeln(anchors[i].sortKey); exit()
		return anchors.sort (function (a,b) {return a.sortKey > b.sortKey});
	} // getAnchors

function addAnchors (styleName, lang, mode, log_text, progressbar1) {
	
	// fonction addAnchors à revoir, car les ancres ne se mettent pas forcément dans l'ordre des légendes dans le document ;
	
	var myDocument = app.documents.item(0);
	
	var count=0 ;
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedParagraphStyle = styleName;
	app.findGrepPreferences.findWhat=".+";

	if (styleName=="Légende figure") { anchorName = "Fig. " ; }
	if (styleName=="Légende tableau" && lang == "en") { anchorName = "Table " ; }
	if (styleName=="Légende tableau" && lang == "fr") { anchorName = "Table " ; }
	if (styleName=="Légende annexe" && lang == "fr") { anchorName = "Appendix " ; }
	if (styleName=="Légende annexe" && lang == "en") { anchorName = "Appendix " ; }
	
	var listElementsCaps = app.activeDocument.findGrep() ;	
	var nb_anchors = listElementsCaps.length;
	var listElementsCapsStr = new Array() ;	
	
	for (i=0;i<listElementsCaps.length;i++) {
	listElementsCapsStr[i] = listElementsCaps[i].contents.toString() ;
	}
	
    for (i = 0 ; i < listElementsCaps.length ; i++ ) {

		progressbar1.value = Math.round(i/nb_anchors*100);
		
        var target = listElementsCaps[i];
		listElementsCaps[i].select();
		numElement = i+1 ;
        
		if (mode==false) { // si le mode test n'est pas actif
			try {  
			
			// alert (myDocument.hyperlinkTextSources.itemByName(target.contents).isValid) ;
			
				if (!myDocument.hyperlinkTextDestinations.itemByName(target.contents).isValid) {  
					// alert (myDocument.hyperlinkTextDestinations.destination.name) ;
					target.select();
					target.showText();
					
					// alert (myDocument.hyperlinkTextDestinations.add(target).isValid);
					
					// alert (hyperlinkTextDestinations.itemByName(target.contents)) ;
					
					
					// alert (myDocument.hyperlinkTextDestinations(target).isValid) ;
					
					var hypTextDest = myDocument.hyperlinkTextDestinations.add(target);  
					
					// alert (hypTextDest.name);
					
					
					var test = prompt("Anchor \""+anchorName + numElement + "\" will be created; select \"OK\" or load the right number",numElement) ;
					
					while (test==null) {
						test = prompt("Anchor \""+anchorName + numElement + "\" will be created; select \"OK\" or load the right number",numElement) ;
					}
					
					// alert(anchorName+test);
					
					hypTextDest.name = anchorName + test ;
					
					// alert (hypTextDest.name.contents);
					
					
					count++;  
				}  else {
					logUpdate(log_text,"Anchor " + anchorName + numElement + " already exists, not created");  
					
				}
			}  
			catch(e) {  
				// alert("Error: in CreateDestinations - " + e);  
				// logUpdate(log_text,"Error: in CreateDestinations - " + e);
				logUpdate(log_text,"Error: the anchor " + anchorName + numElement + " already exists");  
				myDocument.hyperlinkTextDestinations.itemByName("Ancrage 1").remove();  
				// myDocument.hyperlinkTextDestinations(target).remove();
				// myDocument.hyperlinkTextDestinations.remove(target);
			}
			
		}
    } // fin du for (i = 0 ; j < listElementsCaps.length ; i++ )	
		
	return count ;
	
} // fin de la fonction addAnchors()

// function deleteLinks("Figures",langArt,parseInt(nb_figures.text),log_text,progressbar1,progression_bar_txt) {
function deleteLinks(typeCalls,langArt,nbElements,log_text,progressbar1,progression_bar_txt) {
	
	// alert (eval(app.extractLabel('follow')).toString()) ;
	
	// alert (nbElements) ;
	progression_bar_txt.text = "Deleting links on calls to " + nbElements + " " + typeCalls ;	
	logUpdate (log_text,"Deleting links on " + nbElements + " " + typeCalls) ;
	logUpdate (log_text,"Article language: " + langArt) ;
	
	var  hyperlinkTextSources = app.activeDocument.hyperlinks;
	nbElements=hyperlinkTextSources.length;
	
	var test=true ;
	var countOK=0;
	
	while (test==true) {
		progressbar1.value = Math.round(countOK/nbElements*100);
		test = false ;
		// logUpdate (log_text,"---") ;
		for (id=0;id<hyperlinkTextSources.length;id++) {
			countOK++;
			progressbar1.value = Math.round(countOK/nbElements*100);
			// logUpdate (log_text,hyperlinkTextSources[id].destination.name) ;
			if ((typeCalls=="Figures"&&hyperlinkTextSources[id].destination.name.match(/Fig\..+/g))||(typeCalls=="Tables"&&hyperlinkTextSources[id].destination.name.match(/Table.+/g))||(typeCalls=="Appendices"&&hyperlinkTextSources[id].destination.name.match(/Appendix.+/g))) {
				test = true ;
				// logUpdate (log_text,hyperlinkTextSources[id].source.sourceText.contents); // fonctionne ok
				
				// mode "follow" actif ou non
				follow = eval(app.extractLabel('follow')).toString() ;
				if (follow=="true") {
					
					hyperlinkTextSources[id].source.sourceText.select();
					hyperlinkTextSources[id].source.sourceText.showText();
					wait(100);
					// wait(250);
					}				
				
				hyperlinkTextSources[id].source.sourceText.appliedCharacterStyle = app.activeDocument.characterStyles.itemByName("[Sans]");
				hyperlinkTextSources[id].source.sourceText.clearOverrides(OverrideType.CHARACTER_ONLY);
				
				// Les deux formes suivantes fonctionnent :
				// hyperlinkTextSources[id].remove();
				logUpdate (log_text,hyperlinkTextSources[id].destination.name + ": link deleted and style removed") ;
				mySource = hyperlinkTextSources.item(id).source;				
				hyperlinkTextSources.item(id).remove();
				mySource.remove();
				// if (hyperlinkTextSources[id].destination.name.match(/Fig\..+/g)) { alert(hyperlinkTextSources[id].destination.name); }
				
				}
			
			}
	}
	
	logUpdate (log_text,"Links on " + typeCalls + " deleted, end of the script") ;
	logUpdate (log_text,"-------------------------") ;
	progressbar1.value = 0;
	progression_bar_txt.text = "Ready to run..." ;	
	
}

function check(typeCalls,langArt,nbElements,log_text,progressbar1,progression_bar_txt) {
	
	// ajouter à checkcalls, une fois les appels aux tableaux détectés
	// de faire remonter les appels qui ne correspondent pas à un tableau
	// ex. : Table 18 s'il n'y a que 12 tableaux ;
	
	// alert (nbElements) ;
	logUpdate (log_text,"Checking calls to " + nbElements + " " + typeCalls) ;
	logUpdate (log_text,"Article language: " + langArt) ;
	
	// repérage des séries d'appels
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	if (typeCalls=="Figures") {
		app.findGrepPreferences.findWhat="Fig(\\.|s)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
		app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-red" ;
	}
	
	if (typeCalls=="Tables"&&langArt=="en") {
	app.findGrepPreferences.findWhat="Tables?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
	}
	if (typeCalls=="Tables"&&langArt=="fr") {
	app.findGrepPreferences.findWhat="Tableaux?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
	}
	if (typeCalls=="Appendices"&&langArt=="en") {
	app.findGrepPreferences.findWhat="Appendi(x|ces)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	}
	if (typeCalls=="Appendices"&&langArt=="fr") {
	app.findGrepPreferences.findWhat="Annexes?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	}		
	
	app.changeGrepPreferences.changeTo="$0" ;
	app.activeDocument.changeGrep();
	
	// ajouter la détection des plages (ex. : Figs 17-19 renvoie la Fig. 18 absente de l'article)
	// pour cela, repérer les plages avec un GREP, 
	// et constituer un second tableau de résultat 
	// contenant les plages éclatées for (p=17 ; p<(19+1) ; p++) {}
		
	logUpdate (log_text,"Checking calls to " + typeCalls + "...") ;
	progression_bar_txt.text = "Checking calls to " + typeCalls + "..." ;	
	
	// variable contenant les appels en échec
	var badCalls = new Array ;
	var badCallsIdx=0;

	for (i=1 ; i<nbElements+1 ; i++) {
		 progressbar1.value = Math.round(i/nbElements*100);
		 
		// vérification des appels
		if (typeCalls=="Figures") { 
			progression_bar_txt.text = "Checking calls to Fig. " + i ;
			app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red"; 
			}
		if (typeCalls=="Tables") { 
			progression_bar_txt.text = "Checking calls to Table " + i ;
			app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
			}
		if (typeCalls=="Appendices") { 
			progression_bar_txt.text = "Checking calls to Appendix " + i ;
			app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
			}
		
		// Détection des numéros d'élément
		// app.findGrepPreferences.findWhat = "" + i + "";
		app.findGrepPreferences.findWhat = "(?<!\\d)" + i + "(?!\\d)";
		
		// res = tableau contenant tous les numéros d'éléments, un à un
		var res = app.activeDocument.findGrep();
				
		if (res.length==0) { 
			badCalls[badCallsIdx] = i ; badCallsIdx++ ;
			if (typeCalls=="Figures") { logUpdate (log_text,("Fig. "+i+"->[no explicit call found]")) ; }
			if (typeCalls=="Tables") { logUpdate (log_text,("Table "+i+"->[no explicit call found]")) ; }
			if (typeCalls=="Appendices") { logUpdate (log_text,("Appendix "+i+"->[no explicit call found]")) ; }
		} else {
			if (typeCalls=="Figures") { logUpdate (log_text,("Fig. "+i+"->[ok]")) ; }
			if (typeCalls=="Tables") { logUpdate (log_text,("Table "+i+"->[ok]")) ; }
			if (typeCalls=="Appendices") { logUpdate (log_text,("Appendix "+i+"->[ok]")) ; }
		}
	 }
	 
	// Détection des éléments présents uniquement dans des plages
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	if (typeCalls=="Figures") { 
		progression_bar_txt.text = "Checking Figure ranges..." ;
		// logUpdate (log_text,"Testing if missing calls to Figures are present in a range:");
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red"; 
		}
	if (typeCalls=="Tables") { 
		progression_bar_txt.text = "Checking Table ranges..." ;
		// logUpdate (log_text,"Testing if missing calls to Tables are present in a range:");
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
		}
	if (typeCalls=="Appendices") { 
		progression_bar_txt.text = "Checking Appendix ranges..." ;
		// logUpdate (log_text,"Testing if missing calls to Appendices are present in a range:");	
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
		}
		
	app.findGrepPreferences.findWhat = "\\d+\\u?-\\d+\\u?";
	var range = app.activeDocument.findGrep();
	var tabRange = new Array ; // tableau final contenant la liste complète des éléments présents dans une ou plusieurs plages
	var tabRangeIdx=0;
	var range_split ;
	
	
	if (range.length != 0) { // si une ou plusieurs plages sont détectées
	// alert (range.length) ;
	
		for (k=0;k<range.length;k++) {
			
			range_split = range[k].contents.toString();
			// alert (range_split) ;
			range_split = range_split.replace(/[A-Z]/g,"");			
			tab_range_split = range_split.split("-") ;
			// alert (tab_range_split[0] + " à " + tab_range_split[1]);
			var min = parseInt(tab_range_split[0])+1;
			var max = parseInt(tab_range_split[1]);
			// alert (min+max); fonctionne
			for (l=min;l<max;l++) {
				// alert("Ajout de " + l);
				tabRange[tabRangeIdx]=l;
				tabRangeIdx++;
			}
		}
	}
	// le tableau tabRange contient la liste des éléments présents dans des plages	

	var badCallsStr=""; // contient la future liste des éléments non appelés, plages comprises
	var test ;
	var testRange=false ;
	
	tabRange = cleanArray(tabRange);
	tabRange.sort();
	
	logUpdate (log_text,("------- Result -------")) ;
	
	for (k=0 ; k<badCalls.length ; k++) {
		test=false;
		for (m=0 ; m<tabRange.length ; m++) {
			if (badCalls[k]==tabRange[m]) { 
				test=true ; 
				testRange=true ; // alert(test) ; 
				}
		}
		if (test==true) { 
			if (typeCalls=="Figures") { logUpdate (log_text,("Fig. "+badCalls[k]+"->[call only found in a range]")) ; }
			if (typeCalls=="Tables") { logUpdate (log_text,("Table "+badCalls[k]+"->[call only found in a range]")) ; }
			if (typeCalls=="Appendices") { logUpdate (log_text,("Appendix "+badCalls[k]+"->[call only found in a range]")) ; }
			} else {
			badCallsStr = badCallsStr + badCalls[k] + ", " ;  
			}
	}
	 	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();	
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();
	
	
	if (badCallsStr!="") {
		logUpdate (log_text,"No call to " + typeCalls + " " + badCallsStr + "add calls before linking them!") ;
	} else {
		if (testRange==false) {
			logUpdate (log_text,"All " + typeCalls + " are explicitly called in the text; you can link them!") ;
			} else {
			logUpdate (log_text,"All " + typeCalls + " are called in the text (but some of them only in a range); you can still link them!") ;
			}
		}
	
	/* if (testRange==true) { 
	logUpdate (log_text,"--") ;
	logUpdate (log_text,"Some calls to " + typeCalls + " are only present in ranges; take care if you use the SHIFT function of the script!") ; 
	logUpdate (log_text,"--") ;
	} */ // le programme prend maintenant en compte les plages d'éléments
	
	logUpdate (log_text,"End of checking process for " + typeCalls) ;
	logUpdate (log_text,("-------------------------")) ;
	progression_bar_txt.text = "Ready to run..." ;	
	progressbar1.value = 0;
	 
} // fin de la fonction check()

function tagCalls(names, log_text, progressbar1, nbcalls, typeCalls, langArt) {
	
	nbcalls = parseInt(nbcalls) ;
	
	// 1°/ Repérage des appels aux Figures, Tableaux et Annexes dans le texte
	// et application d'une couleur en fonction du type (Figure [rouge], Tableau [orange] ou Annexe [rose])
	// requête type utilisée pour trouver les appels dans le texte : Fig(\.|s)\s(\d+\u?-?,?\s?(\d+)?\u?;?\s?)+
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	if (typeCalls=="Figures") {
		app.findGrepPreferences.findWhat="Fig(\\.|s)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
		app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-red" ;
	}
	
	if (typeCalls=="Tables"&&langArt=="en") {
		app.findGrepPreferences.findWhat="Tables?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
		app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
	}	
	if (typeCalls=="Tables"&&langArt=="fr") {
		app.findGrepPreferences.findWhat="Tableaux?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
		app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
	}		
	
	if (typeCalls=="Appendices"&&langArt=="en") {
		app.findGrepPreferences.findWhat="Appendi(x|ces)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
		app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	}		
	if (typeCalls=="Appendices"&&langArt=="fr") {
		app.findGrepPreferences.findWhat="Annexes?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
		app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	}			
	
	app.changeGrepPreferences.changeTo="$0" ;
	var nb_appels = app.activeDocument.findGrep().length ;
	app.activeDocument.changeGrep();
	
	// 2°/ Parmi les éléments repérés, lier les nombres aux ancres correspondantes
	var countOK=0 ;
	var countEchec=0 ;
	for (k=0;k<2;k++) { // 2 passages, une première fois sur les Fig. X ou Figs X au long, une seconde fois sur les nombres uniquement
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.changeGrepPreferences.strokeColor="None";
	app.changeGrepPreferences.appliedCharacterStyle="Appel de figure";

	if (typeCalls=="Figures") {
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";		
		if (k==0) {
		app.findGrepPreferences.findWhat="Fig(\\.|s)\\s\\d+"; // Premier passage EN & FR
		} else {
			app.findGrepPreferences.findWhat="\\d+"; // Second passage
			}
	}

	if (typeCalls=="Tables") {
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange";	
		if (k==0) {
			if (langArt=="en") { app.findGrepPreferences.findWhat="Tables?\\s\\d+"; } // Premier passage EN
			if (langArt=="fr") { app.findGrepPreferences.findWhat="Tableaux?\\s\\d+"; } // Premier passage FR
		} else {
			app.findGrepPreferences.findWhat="\\d+"; // Second passage
			}
	}	
	
	if (typeCalls=="Appendices") {
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink";	
		if (k==0) {
			if (langArt=="en") { app.findGrepPreferences.findWhat="Appendi(x|ces)\\s\\d+"; } // Premier passage EN
			if (langArt=="fr") { app.findGrepPreferences.findWhat="Annexes?\\s\\d+"; } // Premier passage FR	
		} else {
			app.findGrepPreferences.findWhat="\\d+"; // Second passage
			}
	}		
		
	var appels = app.activeDocument.findGrep() ;
	app.activeDocument.changeGrep() ;
	var listeAppels = new Array() ;
	for (i=0 ; i<appels.length ; i++) {
		
		if (k==1) { 
			if (typeCalls=="Figures") { listeAppels[i] = "Fig. " + appels[i].contents.toString() ; }
			if (typeCalls=="Tables") { listeAppels[i] = "Table " + appels[i].contents.toString() ; }
			if (typeCalls=="Appendices") { listeAppels[i] = "Appendix " + appels[i].contents.toString() ; }
			}
			else { 
				listeAppels[i] = appels[i].contents.toString() ;
				listeAppels[i] = listeAppels[i].replace(/Figs/g,"Fig.") ;
				listeAppels[i] = listeAppels[i].replace(/Tables/g,"Table") ;
				listeAppels[i] = listeAppels[i].replace(/Tableaux/g,"Table") ;
				listeAppels[i] = listeAppels[i].replace(/Tableau/g,"Table") ;
				listeAppels[i] = listeAppels[i].replace(/Appendices/g,"Appendix") ;
				listeAppels[i] = listeAppels[i].replace(/Annexes/g,"Appendix") ;
				listeAppels[i] = listeAppels[i].replace(/Annexe/g,"Appendix") ;
				}
		listeAppels[i] = listeAppels[i].replace(/\s/g," ") ;
		}

	var myLinkResult, myLinkAnchorDest, myLink, myLinkText;  
    var LinksAddedCnt = 0; 
    var myDoc;     	
	
	for (i=0 ; i<appels.length ; i++) {
		
	// Pour suivre le déroulement du script...
	// mode "follow" actif ou non
	follow = eval(app.extractLabel('follow')).toString() ;
	if (follow=="true") {
		
		appels[i].select();
		appels[i].showText();
		wait(100);
		// wait(250);
		}			
		
		test=1;
		for (j=0 ; j<names.length ; j++) {
			if (listeAppels[i].localeCompare(names[j].name)==0) {
				myLink = appels[i]; 
				// appels[i].appliedCharacterStyle="Appel de figure";
				myDoc =  myLink.parentStory.parent;  
				myLinkAnchorDest = myDoc.hyperlinkTextDestinations.item(listeAppels[i]);
				
				//Define Link Text  
                try {
        		myLinkText = myDoc.hyperlinkTextSources.add(myLink); }
				catch (e) { 
					// alert("Error: in DefineLinkText - " + e); 
					logUpdate(log_text,"Error: in DefineLinkText - " + e); 
					}
          		
          		//Create Hyperlink 
        		try { myDoc.hyperlinks.add(myLinkText, myLinkAnchorDest, {name: listeAppels[i] + " ("+k+"_"+i+")"}); 
				countOK++; 
				appels[i].appliedCharacterStyle="Appel de figure";
				test=0; }
                catch (e) { 
					// alert("Error: in CreateHyperlink - " + e);  
					logUpdate(log_text,"Error: in CreateHyperlink - " + e);
					}
				} else { }
			}
			if (test==1) {
				// appels[i].appliedCharacterStyle="Appel de référence lié échec";
				// appels[i].select();
				appels[i].appliedCharacterStyle=app.activeDocument.characterStyles.itemByName("[Sans]");
				appels[i].clearOverrides(OverrideType.CHARACTER_ONLY);
				appels[i].strokeColor="SCRIPT-COLOR-LinkFigures-blue";
				countEchec++;
				} else {
				progressbar1.value = Math.round(countOK/nbcalls*100);
				// wait(10);
				}
			}
	
	} // fin de for (k)
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();	
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();	
	
	// retourne le nombre de liens créés
	// à faire : ajouter : le nombre d'appels en échec (déjà passés en bleu)
	var result = countOK + " links added on calls to " + typeCalls + " found in the text" ;
	if (countEchec>0) {
		result += "\n" + countEchec + " call(s) in error (not linked, now appear(s) in blue)" ;
		}
	alert (result) ;
	return countOK ;
	
	} // fin de la fonction tagCalls()
	
function countElements(type) {
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.findWhat=".+";
	if (type=="Figures") {
		app.findGrepPreferences.appliedParagraphStyle="Légende figure";
	}
	if (type=="Tables") {
		app.findGrepPreferences.appliedParagraphStyle="Légende tableau";
	}
	if (type=="Appendices") {
		app.findGrepPreferences.appliedParagraphStyle="Légende annexe";
	}
	return app.activeDocument.findGrep().length ;
}

function countCallsToElements(type,langArt) {

	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	if (type=="Figures") {
	app.findGrepPreferences.findWhat="Fig(\\.|s)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	}
	if (type=="Tables"&&langArt=="en") {
	app.findGrepPreferences.findWhat="Tables?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	}
	if (type=="Tables"&&langArt=="fr") {
	app.findGrepPreferences.findWhat="Tableaux?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	}
	if (type=="Appendices"&&langArt=="en") {
	app.findGrepPreferences.findWhat="Appendi(x|ces)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	}
	if (type=="Appendices"&&langArt=="fr") {
	app.findGrepPreferences.findWhat="Annexes?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	}	
	
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-red" ;
	app.changeGrepPreferences.changeTo="$0" ;
	app.activeDocument.changeGrep();
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";	
	app.findGrepPreferences.findWhat="\\d+";
	
	var nb_calls = app.activeDocument.findGrep().length ;
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();
	
	return nb_calls ;
}
	
function logUpdate(log_text,msg) {
	var os = $.os.toLowerCase().indexOf('mac') >= 0 ? "MAC": "WINDOWS";
		if (os=="WINDOWS") {
			// Correction 1.061 : suppression de eval() et ajout de try ()
			// alert(app.extractLabel('invert').toString());
			// reverse = eval(app.extractLabel('invert')).toString() ;
			try { reverse = app.extractLabel('invert').toString() ; }
			catch (e) {
				reverse=false;
				}
		} else {
		reverse=false;
		// à essayer sur mac :
		// reverse = app.extractLabel('invert').toString() ;
		}
	// log_text.text = reverse + "\n" + log_text.text ;
	if (reverse=="false") {
		log_text.text = msg + "\n" + log_text.text ;
		} else {
		if (log_text.text != "") { log_text.text = log_text.text + "\n" + msg ; }
		else { log_text.text = msg ; }
		}
}

function init(progression_bar_txt,progressbar1,log_text,nb_figures,nbCallsToFigures,nb_calls_to_figures,nb_tables,nbCallsToTables,nb_calls_to_tables,nb_appendices,nbCallsToAppendices,nb_calls_to_appendices,bt_go,bt_cancel,rb_language) {
	
	progression_bar_txt.text = "Initialization..." ;	
	progressbar1.value = 0;
	logUpdate(log_text,"Initialization of the script, please wait...") ;
		
	nb_figures.text = "-" ;
	nb_tables.text = "-" ;
	nb_appendices.text = "-" ;
	nb_calls_to_figures.text = "-" ;
	nb_calls_to_tables.text = "-" ;
	nb_calls_to_appendices.text = "-" ;
	// nb_references.text = "-" ;
	// nb_calls_to_refs.text = "-" ;
	
	langArt=rb_language.value;
	if (langArt==true) { langArt="fr" ; }
	if (langArt==false) { langArt="en" ; }	
	
	logUpdate(log_text,"Language of the article: " + langArt.replace("en","English").replace("fr","French")) ;
	
	bt_go.enabled = false;
	bt_cancel.enabled = false;	
	
	// Remplissage des informations sur le document et affichage dans l'interface utilisateur
	// Figures
	progression_bar_txt.text = "Initializing [Counting Figures]" ;	
	nbFigures = countElements("Figures") ;
	nb_figures.text = nbFigures ;
	logUpdate(log_text,nbFigures + " Figures found") ;
	progressbar1.value = 15;
	
	// Calls to Figures
	progression_bar_txt.text = "Initializing [Counting calls to Figures]" ;	
	nbCallsToFigures = countCallsToElements("Figures",langArt) ;
	nb_calls_to_figures.text = nbCallsToFigures ;
	logUpdate(log_text,nbCallsToFigures + " calls to Figures found") ;
	progressbar1.value = 30;

	// Tables
	progression_bar_txt.text = "Initializing [Counting Tables]" ;	
	nbTables = countElements("Tables") ;
	nb_tables.text = nbTables ;
	logUpdate(log_text,nbTables + " Tables found") ;
	progressbar1.value = 45;
	
	// Calls to Tables
	progression_bar_txt.text = "Initializing [Counting calls to Tables]" ;	
	nbCallsToTables = countCallsToElements("Tables",langArt) ;
	nb_calls_to_tables.text = nbCallsToTables ;
	logUpdate(log_text,nbCallsToTables + " calls to Tables found") ;
	progressbar1.value = 60;

	// Appendices
	progression_bar_txt.text = "Initializing [Counting Appendices]" ;	
	nbAppendices = countElements("Appendices") ;
	nb_appendices.text = nbAppendices ;
	logUpdate(log_text,nbAppendices + " Appendices found") ;
	progressbar1.value = 75;
	
	// Calls to Appendices
	progression_bar_txt.text = "Initializing [Counting calls to Appendices]" ;	
	nbCallsToAppendices = countCallsToElements("Appendices",langArt) ;
	nb_calls_to_appendices.text = nbCallsToAppendices ;
	logUpdate(log_text,nbCallsToAppendices + " calls to Appendices found") ;
	progressbar1.value = 90;

	logUpdate(log_text,"Initialization of the script OK, ready ro run.") ;
	logUpdate(log_text,"----------------------------------------------") ;
	progression_bar_txt.text = "Ready to run..." ;	
	progressbar1.value = 100;
	
	// bt_go.enabled = true;
	// bt_cancel.enabled = true;
	progressbar1.value = 0;	
	
	// Tableaux
	nbReferences = 0 ;
	nbCallsToReferences = 0 ;
	nbAnchoredFigs = 0 ;
	nbAnchoredTables = 0 ;
	nbAnchoredAppendices = 0 ;	
}

function showList(type,list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices) {
	
	// https://community.adobe.com/t5/indesign-discussions/populate-dropdownlist-based-on-another-ddl-selection/m-p/10358037
		
	if (list_elements_1.enabled==false) {
		// Affichage de la première liste
	
		list_elements_1.enabled=true;
		list_elements_1.removeAll(); // permet de retirer tous les éléments de la liste
		list_elements_2.removeAll();
		
		var prefix="" ; var nbElements=0 ;
		
		if (type=="Figures") { prefix = "Fig. " ; nbElements = nbFigures ; }
		if (type=="Tables") { prefix = "Table " ; nbElements = nbTables ; }
		if (type=="Appendices") { prefix = "Appendix " ; nbElements = nbAppendices ; }
		
		// alert (nbElements) ;
		
		for (i=0 ; i<nbElements ; i++) {
			var txt = "" + prefix + "" + (i+1) ;
			list_elements_1.add('item',txt); // ajoute un élément à la liste
			}
		list_elements_1.selection = 0;

		} else if (list_elements_1.enabled==true) {	
			// Affichage de la seconde liste
			list_elements_2.enabled=true;
			list_elements_2.removeAll(); // permet de retirer tous les éléments de la liste
			
			var prefix="" ; var nbElements=0 ;
			
			if (type=="Figures") { prefix = "Fig. " ; nbElements = nbFigures ; }
			if (type=="Tables") { prefix = "Table " ; nbElements = nbTables ; }
			if (type=="Appendices") { prefix = "Appendix " ; nbElements = nbAppendices ; }
			
			// alert (list_elements_1.selection.text) ;
			// alert (list_elements_1.selection.index) ;
			
			for (i=list_elements_1.selection.index ; i<nbElements ; i++) {
				var txt = "" + prefix + "" + (i+1) ;
				list_elements_2.add('item',txt); // ajoute un élément à la liste
				}
			list_elements_2.selection = 0
			step_renumbering.enabled=true;		
			bt_renumbering.enabled=true;		
		}
		
		// Gestion de la troisième liste
		list_elements_3.enabled=true;
		bt_renumbering1.enabled=true;	
		list_elements_3.removeAll();
		for (i=0 ; i<nbElements ; i++) {
			var txt = "" + prefix + "" + (i+1) ;
			list_elements_3.add('item',txt); // ajoute un élément à la liste
			}
		list_elements_3.selection = 0;
	
	// list_elements_1.items = list_elements_1_array ;
	// var list_elements_1 = group18.add("dropdownlist", undefined, undefined, {name: "list_elements_1", items: list_elements_1_array}); 	
	
	// myDialog.ON_CHANGE = function onChange(/*Event*/ev,  src,dst,s,a,i)
	
} // fin de la fonction function showList()

function spotlightCalls(onoff,tabUndo,tabUndoIdx) {
	
	if (onoff=="off") {
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();
	
	// Tables EN
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-green";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();	
	
	// Tableaux FR
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-light-g";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();		
	
	// Annexes FR
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();	
	
	// Appendices EN
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-light-p";
	app.changeGrepPreferences.strokeColor="None";
	app.findGrepPreferences.findWhat=".+";
	app.activeDocument.changeGrep();	

	} else {
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.changeGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";
	app.findGrepPreferences.findWhat="Fig(\\.|s)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.activeDocument.changeGrep();
	
	// Tables EN
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.changeGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-green";
	app.findGrepPreferences.findWhat="Tables?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.activeDocument.changeGrep();	
	
	// Tableaux FR
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.changeGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-light-g";
	app.findGrepPreferences.findWhat="Tableaux?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.activeDocument.changeGrep();		
	
	// Annexes FR
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.changeGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink";
	app.findGrepPreferences.findWhat="Annexes?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.activeDocument.changeGrep();	
	
	// Appendices EN
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.changeGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-light-p";
	app.findGrepPreferences.findWhat="Appendi(x|ces)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.activeDocument.changeGrep();
	}		
	
}

function colorsOff(typeCalls,langArt) {
	app.findGrepPreferences=app.changeGrepPreferences=null;
	if (typeCalls=="Figures") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";
		}
	if (typeCalls=="Tables") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
		}
	if (typeCalls=="Appendices") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
		}
	app.findGrepPreferences.findWhat=".+";
	app.changeGrepPreferences.strokeColor="None";	
	app.activeDocument.changeGrep();
	
}

function detectCalls(typeCalls,langArt) {
	app.findGrepPreferences=app.changeGrepPreferences=null;
	
	if (typeCalls=="Figures") {
		app.findGrepPreferences.findWhat="Fig(\\.|s)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
		app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-red" ;
	}
	
	if (typeCalls=="Tables"&&langArt=="en") {
	app.findGrepPreferences.findWhat="Tables?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
	}
	if (typeCalls=="Tables"&&langArt=="fr") {
	app.findGrepPreferences.findWhat="Tableaux?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
	}
	if (typeCalls=="Appendices"&&langArt=="en") {
	app.findGrepPreferences.findWhat="Appendi(x|ces)\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	}
	if (typeCalls=="Appendices"&&langArt=="fr") {
	app.findGrepPreferences.findWhat="Annexes?\\s((\\d+)?\\u?-?,? ?~S?~<?(\\d+)?\\u?;? ?~S?~<?)+";
	app.changeGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	}		
	
	app.changeGrepPreferences.changeTo="$0" ;
	app.activeDocument.changeGrep();
}

function expandRanges(typeCalls,progression_bar_txt,log_text,langArt) {
	// Éclatement des plages
	progression_bar_txt.text = "Range expansion: " + typeCalls ;
	logUpdate (log_text,"Range expansion: " + typeCalls);
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	if (typeCalls=="Figures") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red"; 
		}
	if (typeCalls=="Tables"&&langArt=="en") {
		app.findGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
	}
	if (typeCalls=="Tables"&&langArt=="fr") {
		app.findGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
	}
	if (typeCalls=="Appendices"&&langArt=="en") {
		app.findGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	}
	if (typeCalls=="Appendices"&&langArt=="fr") {
		app.findGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	}	
	
	app.findGrepPreferences.findWhat = "\\d+-\\d+";
	
	tabPlages = app.activeDocument.findGrep();
	
	if (tabPlages.length!=0) {
		for (tpi = 0 ; tpi < tabPlages.length ; tpi++) {
			follow = eval(app.extractLabel('follow')).toString() ;
			if (follow=="true") {
				
				tabPlages[tpi].select();
				tabPlages[tpi].showText();
				wait(100);
				}			
			tpStr = tabPlages[tpi].contents ;
			tpStr = tpStr.split("-") ;
			var tpa = parseInt(tpStr[0]) ;
			var tpb = parseInt(tpStr[1]) ;	
			var tpReplaceStr = tpa ;
			if (tpa<tpb) {
				for (tpj=tpa+1 ; tpj<(tpb+1) ; tpj++) {
				tpReplaceStr = tpReplaceStr + "; " + tpj ;					
				}
			}
			tabPlages[tpi].contents = tpReplaceStr;
		}
	}
	
	logUpdate (log_text,"Range(s) expanded");
}

function groupRanges(typeCalls,progression_bar_txt,log_text,langArt) {
	// Reconstitution des plages
	progression_bar_txt.text = "Range reconstitution: " + typeCalls ;
	logUpdate (log_text,"Range reconstitution: " + typeCalls);
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	if (typeCalls=="Figures") { 
		progression_bar_txt.text = "Rebuilding Figure ranges..." ;
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red"; 
		}
	if (typeCalls=="Tables") { 
		progression_bar_txt.text = "Rebuilding Table ranges..." ;
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
		}
	if (typeCalls=="Appendices") { 
		progression_bar_txt.text = "Rebuilding Appendix ranges..." ;
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
		}
		
	app.findGrepPreferences.findWhat = "(\\d+\\s?;?\\s?)(\\d+\\s?;?\\s?)(\\d+\\s?;?\\s?)+";
	var range = app.activeDocument.findGrep();
	var tabRangeIdx=0;
	var range_split ;
	
	tabRange = app.activeDocument.findGrep();
	
	if (tabRange!=undefined) {
		for (il=0 ; il<tabRange.length ; il++) {
			follow = eval(app.extractLabel('follow')).toString() ;
			if (follow=="true") {
				
				tabRange[il].select();
				tabRange[il].showText();
				wait(100);
				}
			var str_tmp = tabRange[il].contents ;
			str_tmp = str_tmp.replace(/\s/g,"");
			range_split = str_tmp.split(";") ;
			
			
			var newrange = [] ;
			var nridx=0 ;
			var test_serie = 0;
			var num=0 ;
			var prev_num = 0 ;
			var space = "" ;
			if (langArt=="fr") { space = " " ; } // à adapter pour prendre en compte le français
			
			for (im=0 ; im<range_split.length ; im++) {
				if (im==0) { // 1er tour
					num = parseInt(range_split[0]) ;
					test_serie++ ; 
					newrange[nridx]=num+space+"; " ; nridx++ ;
					}
				if (im==1) { // 2e tour
					prev_num = num ;
					num = parseInt(range_split[1]) ;				
					if (num == prev_num+1) { test_serie++ ; } else { test_serie=1 ; }
					newrange[nridx]=num+space+"; " ; nridx++ ;
					}
				if (im>1) { // tours suivants
					prev_num = num ;
					num = parseInt(range_split[im]) ;
					if (num == prev_num+1) { 
						test_serie++ ; if (test_serie>3) { test_serie = 3 ; } 
						} else { 
							if (test_serie==3) { nridx++ ; }
							test_serie=1 ; 
							// newrange[nridx]=num+space+"; " ; nridx++ ;
							}
					if (test_serie==1||test_serie==2) {
						newrange[nridx]=num+space+"; " ; nridx ++ ;
						}
					if (test_serie==3) {
						newrange[nridx-2] = newrange[nridx-2].replace(/;/g,"") ;
						newrange[nridx-2] = newrange[nridx-2].replace(/\s/g,"") ;
						newrange[nridx-1] = "-";
						newrange[nridx]=num+space+"; " ; 
						}
					}					
				}
			var newrangestring = "" ;
			for (nrs=0 ; nrs<newrange.length ; nrs++) {
				newrangestring += newrange[nrs] + "" ;
				}
			newrangestring = newrangestring.replace(/ NaN/g,"") ;
			
			// remplace le contenu de la recherche par la nouvelle chaîne reconstituée ;
			tabRange[il].contents = newrangestring.substring(0,newrangestring.length-2) ;
			}
	}
	
	logUpdate (log_text,"Range(s) reconstituted");
}

function insertCalls(typeCalls,list_elements_3,step_renumbering,progression_bar_txt,progressbar1,log_text,langArt) {
	var step = step_renumbering ;
	var nbElmt = countElements("Figures") ;
	
	if (step.match(/\d+/g)) {
		progression_bar_txt.text = "Highlighting selected elements that will be shifted..." ;
		// logUpdate (log_text,"Highlighting selected elements that will be shifted...");
		logUpdate (log_text,"---------------------------");
		step = parseInt(step);
		var selectedElmt = list_elements_3 ;
		
		if (typeCalls=="Figures") { selectedElmt = selectedElmt.replace("Fig. ","") ; var nbElmt = countElements("Figures") ; }
		if (typeCalls=="Tables") { selectedElmt = selectedElmt.replace("Table ","") ; var nbElmt = countElements("Tables") ; }
		if (typeCalls=="Appendices") { selectedElmt = selectedElmt.replace("Appendix ","") ; var nbElmt = countElements("Appendices") ; }
		
		nbElmt=parseInt(nbElmt);
		selectedElmt=parseInt(selectedElmt);
		selectedElmt2=selectedElmt+step;
		nbElmt2=nbElmt+step;
		tCall=typeCalls.substring(0,3)+". ";
		
		var str = "Inserting "+step+" call(s) from "+tCall+selectedElmt;
		var str2 = tCall + selectedElmt + " to " + nbElmt + " will become " + tCall + selectedElmt2 + " to " + nbElmt2 ;
		logUpdate (log_text,str);
		logUpdate (log_text,"Number of element found: "+nbElmt);
		logUpdate (log_text,str2);
		
		// repérage des séries d'appels
		detectCalls(typeCalls,langArt);
		// ----------------------------

		// Éclatement des plages
		expandRanges(typeCalls,progression_bar_txt,log_text,langArt) ;
		// ---------------------
		
		// Décalage des appels à partir de l'élément sélectionné de STEP pas
		app.findGrepPreferences=app.changeGrepPreferences=null;
		app.findGrepPreferences.appliedCharacterStyle="[No character style]";		
		if (typeCalls=="Figures") { 
			app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";
			}
		if (typeCalls=="Tables") { 
			app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
			}
		if (typeCalls=="Appendices") { 
			app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
			}		
		
		// alert (nbElmt) ;
		for (ik=nbElmt ; ik>(selectedElmt-1) ; ik--) {
			app.findGrepPreferences.findWhat="(?<!\\d)"+ik+"(?!\\d)";
			var str = "" + (ik+step) ;
			app.changeGrepPreferences.changeTo=str;
			app.changeGrepPreferences.underline=true;
			app.changeGrepPreferences.underlineColor="SCRIPT-COLOR-LinkFigures-green";
			app.changeGrepPreferences.underlineWeight=2;			
			var res = app.activeDocument.changeGrep();
			logUpdate (log_text,tCall+ik+" -> "+tCall+(ik+step)+" ("+res.length+" occ. modified)");
		}
		
		// Reconstitution des plages
		groupRanges(typeCalls,progression_bar_txt,log_text,langArt)
		// -------------------------
		
		// suppression des couleurs
		colorsOff(typeCalls,langArt);
		// ------------------------		
		
		// fin du script	
		logUpdate (log_text,"End of calls insertion");
		logUpdate (log_text,"------------------------");
		progression_bar_txt.text = "Ready to run..." ;		
		
		} else {
			alert ("Please indicate a number in the shift cell") ;
			logUpdate (log_text,"The value "+step+" have been indicated in the shift cell; only numbers are accepted.");
			logUpdate (log_text,"---------------------------");
			} //  fin de if (step.match(/[0-9]/g))
}

function deleteCallsConf(typeCalls,list_elements_1,list_elements_2,progression_bar_txt,progressbar1,log_text,langArt) {
	logUpdate (log_text,"--------------------------");
	logUpdate (log_text,"Deleting stroke red text");
	
	logUpdate (log_text,"Renumbering elements from no. "+(max+1)+" (gap: -"+(max-min+1)+"):");
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="SCRIPT-STYLE-TEXT-DELETED";
	app.findGrepPreferences.findWhat=".+";
	
	app.changeGrepPreferences.changeTo="" ;	
	// app.changeGrepPreferences.appliedCharacterStyle="[No character style]";
	app.activeDocument.changeGrep();
	
	logUpdate (log_text,"Removal of the green underline on the modified text");
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.underline=true;
	app.findGrepPreferences.underlineColor="SCRIPT-COLOR-LinkFigures-green";
	app.findGrepPreferences.underlineWeight=2;
	app.findGrepPreferences.findWhat=".+";
	
	app.changeGrepPreferences.changeTo="$0" ;
	app.changeGrepPreferences.underline=false;
	
	app.activeDocument.changeGrep();	
	
	logUpdate (log_text,"Replacement of several spaces with a non-breaking space");
		
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.findWhat="Appendices[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Appendices~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Appendix[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Appendix~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Annexe[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Annexe~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Annexes[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Annexes~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Fig\\.[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Fig.~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Figs[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Figs~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Table[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Table~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Tables[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Tables~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Tableau[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Tableau~S" ;	
	app.activeDocument.changeGrep();
	app.findGrepPreferences.findWhat="Tableaux[ ~S~<]+";
	app.changeGrepPreferences.changeTo="Tableaux~S" ;	
	app.activeDocument.changeGrep();
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	detectCalls(typeCalls,langArt);
	
	if (typeCalls=="Figures") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red"; 
		}
	if (typeCalls=="Tables") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
		}
	if (typeCalls=="Appendices") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
		}
	
	app.findGrepPreferences.findWhat="[ ~S~<][ ~S~<]+";
	app.changeGrepPreferences.changeTo=" ";
	app.activeDocument.changeGrep();
	
	// Suppression des appels vides
	// requête : \(?Appendi(x|ces)\)?[ ~S~<]?(?!\d)
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	if (typeCalls=="Figures") { 
		app.findGrepPreferences.findWhat="\\(?Fig(\\.|s)\\)?(?![ ~S~<]\\d)";
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red"; 
		}
	if (typeCalls=="Tables") { 
		app.findGrepPreferences.findWhat="\\(?Table\\)?(?!s?[ ~S~<]\\d)";
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
		}
	if (typeCalls=="Appendices") { 
		app.findGrepPreferences.findWhat="\\(?Appendi(x|ces)\\)?(?![ ~S~<]\\d)";
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
		}		
	app.changeGrepPreferences.changeTo="$0";
	app.changeGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-blue"; 
	app.activeDocument.changeGrep();
	
	
	
	// éclatement des plages existantes et regroupement des plages nouvellement constituées
	expandRanges(typeCalls,progression_bar_txt,log_text,langArt);
	groupRanges(typeCalls,progression_bar_txt,log_text,langArt);
	
	// Appendices -> Appendix, possible ?
	// c'est au moment de la suppression qu'il faut vérifier combien il y avait d'occurrences dans le jeu détecté
	// à vérifier ...
	
	colorsOff(typeCalls,langArt);
	
	logUpdate (log_text,"/!\\ Remember to change plural element names to singular and to delete empty entries if necessary (highlighted in blue) /!\\ ");
	logUpdate (log_text,"End of deletion validation");
	logUpdate (log_text,"--------------------------");
	
	}
	
function deleteCalls(typeCalls,list_elements_1,list_elements_2,progression_bar_txt,progressbar1,log_text,langArt) {
	
	progression_bar_txt.text = "Highlighting selected elements that will be deleted..." ;
	logUpdate (log_text,"---------------------------");
	logUpdate (log_text,"Deleting element type \""+typeCalls+"\", from "+list_elements_1+" to "+list_elements_2);
	
	if (typeCalls=="Figures") { list_elements_1 = list_elements_1.replace("Fig. ","") ; list_elements_2 = list_elements_2.replace("Fig. ","") ; }
	if (typeCalls=="Tables") { list_elements_1 = list_elements_1.replace("Table ","") ; list_elements_2 = list_elements_2.replace("Table ","") ; }
	if (typeCalls=="Appendices") { list_elements_1 = list_elements_1.replace("Appendix ","") ; list_elements_2 = list_elements_2.replace("Appendix ","") ; }	
	
	list_elements_1 = parseInt(list_elements_1) ;
	list_elements_2 = parseInt(list_elements_2) ;
	
	// repérage des séries d'appels
	detectCalls(typeCalls,langArt);
	// ----------------------------
	
	// Détection des éléments présents uniquement dans des plages
	progression_bar_txt.text = "Range(s) detection..." ;
	logUpdate (log_text,"Range(s) detection...");
	
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	if (typeCalls=="Figures") { 
		progression_bar_txt.text = "Checking Figure ranges..." ;
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red"; 
		}
	if (typeCalls=="Tables") { 
		progression_bar_txt.text = "Checking Table ranges..." ;
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
		}
	if (typeCalls=="Appendices") { 
		progression_bar_txt.text = "Checking Appendix ranges..." ;
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
		}
		
	app.findGrepPreferences.findWhat = "\\d+\\u?-\\d+\\u?";
	var range = app.activeDocument.findGrep();
	var tabRange = new Array ; // tableau final contenant la liste complète des éléments présents dans une ou plusieurs plages
	var tabRangeIdx=0;
	var range_split ;
	
	// suppression des couleurs
	colorsOff(typeCalls,langArt);
	// ------------------------
	
	if (range.length != 0) { // si une ou plusieurs plages sont détectées
	
	logUpdate (log_text,"One or more range(s) have been detected");
		for (k=0;k<range.length;k++) {
			range_split = range[k].contents.toString();
			range_split = range_split.replace(/[A-Z]/g,"");			
			tabRange[tabRangeIdx]=range_split;
			tabRangeIdx++;	
		}
	
	}
	// le tableau tabRange contient la liste des éléments présents dans des plages
		
	// Si des plages ont été détectées dans l'article
	var tabRangePb = new Array ; // contient la liste des plages problématiques
	var tabRangePbIdx=0 ;
	
	min = list_elements_1 ;
	max = list_elements_2 ;
		
	// repérage des séries d'appels
	detectCalls(typeCalls,langArt);
	// ----------------------------
	
	// Éclatement des plages
	expandRanges(typeCalls,progression_bar_txt,log_text,langArt) ;
	// ---------------------
	
	// Suppression des appels sélectionnés
	progression_bar_txt.text = "Highlighting deleted elements..." ;
	logUpdate (log_text,"Highlighting deleted elements...");
	// On parcourt tous les appels du dernier au premier
	for (ij=max ; ij>(min-1) ; ij--) {

	// Détection et suppression (ou remplacement dans les plages) des éléments sélectionnés
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.changeGrepPreferences.appliedCharacterStyle="SCRIPT-STYLE-TEXT-DELETED";
	app.changeGrepPreferences.changeTo="$0" ;
	
	if (typeCalls=="Figures") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red"; 
		app.findGrepPreferences.findWhat = "Fig\\.\\s"+ij+"(([A-Z,~S~<\\s -])+)?(?!\\d)";
		app.activeDocument.changeGrep();		
		}
	if (typeCalls=="Tables"&&langArt=="en") {
		app.findGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
		app.findGrepPreferences.findWhat = "Table\\s"+ij+"(([A-Z,~S~<\\s -])+)?(?!\\d)";
		app.activeDocument.changeGrep();
	}
	if (typeCalls=="Tables"&&langArt=="fr") {
		app.findGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-orange" ;
		app.findGrepPreferences.findWhat = "Tableau\\s"+ij+"(([A-Z,~S~<\\s -])+)?(?!\\d)";
		app.activeDocument.changeGrep();
	}
	if (typeCalls=="Appendices"&&langArt=="en") {
		app.findGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
		app.findGrepPreferences.findWhat = "Appendix\\s"+ij+"(([A-Z,~S~<\\s -])+)?(?!\\d)";
		app.activeDocument.changeGrep();
	}
	if (typeCalls=="Appendices"&&langArt=="fr") {
		app.findGrepPreferences.strokeColor = "SCRIPT-COLOR-LinkFigures-pink" ;
		app.findGrepPreferences.findWhat = "Annexe\\s"+ij+"(([A-Z,~S~<\\s -])+)?(?!\\d)";
		app.activeDocument.changeGrep();
	}
	
	app.findGrepPreferences.findWhat = "(?<!\\d)"+ij+"(([A-Z,~S~<\\s -])+)?\\s?;?\\s?(?!\\d)";
	app.activeDocument.changeGrep();
	
	wait(10);
	
	}
	
	// renumérotation des appels suivants la sélection supprimée
	// min et max contiennent les valeurs de la sélection
	
	progression_bar_txt.text = "Renumbering following elements..." ;
	logUpdate (log_text,"Renumbering elements from no. "+(max+1)+" (gap: -"+(max-min+1)+"):");
		
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedCharacterStyle="[No character style]";
	
	if (typeCalls=="Figures") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-red";var elmtmax = parseInt(nb_figures.text)+1 ; 
		}
	if (typeCalls=="Tables") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-orange"; 
		var elmtmax = parseInt(nb_tables.text)+1 ;
		}
	if (typeCalls=="Appendices") { 
		app.findGrepPreferences.strokeColor="SCRIPT-COLOR-LinkFigures-pink"; 
		var elmtmax = parseInt(nb_appendices.text)+1 ;
		}
		
	var elmtidx = max+1 ;
	var gap = max-min+1 ;

	while (elmtidx<elmtmax) {
		app.findGrepPreferences.findWhat = "(?<!\\d)"+elmtidx+"(?!\\d)";
		app.changeGrepPreferences.underline = true ;
		app.changeGrepPreferences.underlineColor = "SCRIPT-COLOR-LinkFigures-green";
		app.changeGrepPreferences.underlineWeight=2;
		app.changeGrepPreferences.changeTo=""+(elmtidx-gap) ;
		tabRes = app.activeDocument.changeGrep() ;

		logUpdate (log_text,(typeCalls.substring(0,3) + ". " + elmtidx + " in " + typeCalls.substring(0,3) + ". " + (elmtidx-gap) + " (" + (tabRes.length + " occ. modified)")));
			
		elmtidx++;
		if (elmtidx==elmtmax) {
			var rep = confirm("Element "+(elmtmax-1)+" reached; continue?") ; if (rep==true) { elmtmax++ ; }
			}
		}
	
	logUpdate (log_text,"Elements renumbered until element no. " + elmtidx);
	// fin de la renumérotation des appels suivants la sélection supprimée
	
	// Reconstitution des plages
	groupRanges(typeCalls,progression_bar_txt,log_text,langArt)
	// -------------------------
	
	// suppression des couleurs
	colorsOff(typeCalls,langArt);
	// ------------------------
		
	// suppression des espaces vides soulignés
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.findWhat="\\s";
	app.findGrepPreferences.underlineColor="SCRIPT-COLOR-LinkFigures-yellow";
	app.changeGrepPreferences.underline=false;
	app.activeDocument.changeGrep();	
	
	// fin du script	
	logUpdate (log_text,"End of calls deletion");
	logUpdate (log_text,"------------------------");
	progression_bar_txt.text = "Ready to run..." ;
	
	}
	
function style_exist(style_name) {
	// test l'existence d'un style et le créé s'il n'existe pas
	if(app.activeDocument.characterStyles.item (style_name) == null) { 
		app.activeDocument.characterStyles.add({name:style_name});
	}	
	return app.activeDocument.characterStyles.item(style_name);
}
	
function undo(tabUndo,tabUndoIdx) {
	// alert(tabUndo[tabUndoIdx]);
	for (i=parseInt(app.activeDocument.undoHistory.length) ; i>(parseInt(tabUndo[tabUndoIdx])) ; i--) {
		app.activeDocument.undo();
		}
	var str = app.activeDocument.undoHistory.length ; 
	logUpdate (log_text,"Undo to point: no. " + tabUndoIdx + " ("+str+")"); 
}

function redo(tabUndo,tabUndoIdx) {
	// alert(tabUndo[tabUndoIdx]);
	for (i=parseInt(app.activeDocument.undoHistory.length) ; i<(parseInt(tabUndo[tabUndoIdx])) ; i++) {
		// alert();
		app.activeDocument.redo();
		}
	var str = app.activeDocument.undoHistory.length ;
	logUpdate (log_text,"Redo to point: no. " + tabUndoIdx + " ("+str+")"); 
}

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// FIN DES FONCTIONS 
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
	
// Lancement de l'interface utilisateur ++++++++++++++
#include 'linkElements_UI.jsx' ; // version 5
// +++++++++++++++++++++++++++++++++++++++++++++++++++

dialog.show();
dialog.text = "LinkElements – v1.061";
// -----------------------------------

// Ajouter une étape de vérification :
// – script chargé dans le bon dossier ;
// – présence du fichier d'aide et du dossier correspondant ;
// – présence du script "text_anchor" ;

	// Création des styles de paragraphes "Légende XXX" s'ils n'existent pas
	// (les ancres sont créées par le script en suivant les blocs portant ce style de paragraphe
	// une confirmation est demandée à chaque création d'ancre, 
	// histoire d'être sûr de la bonne attribution de l'ancre à la légende)
	var teststyle=true;
	if(app.activeDocument.paragraphStyles.item ("Légende figure") == null) { 
		app.activeDocument.paragraphStyles.add({name:"Légende figure"});
		var teststyle=false;
		}	
	if(app.activeDocument.paragraphStyles.item ("Légende tableau") == null) { 
		app.activeDocument.paragraphStyles.add({name:"Légende tableau"});
		var teststyle=false;
		}			
	if(app.activeDocument.paragraphStyles.item ("Légende annexe") == null) { 
		app.activeDocument.paragraphStyles.add({name:"Légende annexe"});
		var teststyle=false;
		}			
		
	if (teststyle==false) {
		alert ("The script works with 'Légende figure', 'Légende tableau' and Légende annexe' paragraph styles; if they did not exist before, they have now been created");
	}

	var tabUndo = new Array ;
	var tabUndoIdx = 0;

	tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ;
	logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;

	// Ajout de couleurs à la palette
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-red", ColorModel.PROCESS, [255,0,0]); // rouge
	
	// Couleur des appels
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-green", ColorModel.PROCESS, [25,125,25]); // vert foncé
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-light-g", ColorModel.PROCESS, [75,210,75]); // vert clair	
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-pink", ColorModel.PROCESS, [255,0,255]); // rose foncé
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-light-p", ColorModel.PROCESS, [255,175,255]); // rose clair
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-orange", ColorModel.PROCESS, [255,100,0]); // orange foncé
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-light-orange", ColorModel.PROCESS, [255,175,0]); // orange clair
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-yellow", ColorModel.PROCESS, [0,255,0]); // vert
	myColorAdd(app.activeDocument, "SCRIPT-COLOR-LinkFigures-blue", ColorModel.PROCESS, [0,0,255]); // bleu

	// Vérification des styles
	
	// Style barré
	myStyleStrikeThru=style_exist("SCRIPT-STYLE-TEXT-DELETED");
	myStyleStrikeThru.strikeThru = true ;
	myStyleStrikeThru.strikeThroughColor = "SCRIPT-COLOR-LinkFigures-red";
	myStyleStrikeThru.strikeThroughWeight = 2 ;
	myStyleStrikeThru.underline = false;
	
	// Style "Appel de figure"
	myStyleAppel2Figure=style_exist("Appel de figure");
	myStyleAppel2Figure.fillColor = "SCRIPT-COLOR-LinkFigures-pink" ;
	
	// Variables
	nbReferences = 0 ;
	nbCallsToReferences = 0 ;
	nbFigures = 0 ;
	nbCallsToFigures = 0 ;
	nbTables = 0 ;
	nbCallsToTables = 0 ;
	nbAppendices = 0 ;
	nbCallsToAppendices = 0 ;
	nbAnchoredFigs = 0 ;
	nbAnchoredTables = 0 ;
	nbAnchoredAppendices = 0 ;	
	
	tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ;
	logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
	
	// à adapter si fonctionnement sur un MAC
	// var scriptPath = "C:\\Users\\Emmanuel CÔTEZ\\AppData\\Roaming\\Adobe\\InDesign\\Version 18.0\\fr_FR\\Scripts\\Scripts Panel\\" ;
	// var scriptPath = "C:/Users/Emmanuel CÔTEZ/AppData/Roaming/Adobe/InDesign/Version 18.0/fr_FR/Scripts/Scripts Panel/" ;
	// var scriptPath = "%homepath%\\AppData\\Roaming\\Adobe\\InDesign\\Version 18.0\\fr_FR\\Scripts\\Scripts Panel\\" ; 
	
	init(progression_bar_txt,progressbar1,log_text,nb_figures,nbCallsToFigures,nb_calls_to_figures,nb_tables,nbCallsToTables,nb_calls_to_tables,nb_appendices,nbCallsToAppendices,nb_calls_to_appendices,bt_go,bt_cancel,rb_language);
	
	tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ;
	logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
	
	nbFigures = parseInt(nb_figures.text) ;
	nbTables = parseInt(nb_tables.text) ;
	nbAppendices = parseInt(nb_appendices.text) ;
	
	nbCallsToFigures = parseInt(nb_calls_to_figures.text) ;
	nbCallsToTables = parseInt(nb_calls_to_tables.text) ;
	nbCallsToAppendices = parseInt(nb_calls_to_appendices.text) ;
	
	// Activation des  boutons
	// bt_go.enabled = false;
	bt_cancel.enabled = true;
	bt_help.enabled = true;
	bt_delete_links1.enabled = true;
	bt_spotlight_on.enabled = true;
	// bt_undo.enabled = false;
	// bt_redo.enabled = false;
	// bt_check.enabled = true;
	// bt_delete_links.enabled = false;
	
	log_invert.value=false;
	var invert=log_invert.value.toString() ;
	app.insertLabel('invert',invert);
	
	log_invert1.value=false;
	var follow=log_invert.value.toString() ;
	app.insertLabel('follow',follow);
	
	// Bouton "CHECK"
	bt_check.onClick = function() {
		
		if (ck_figures.value==false && ck_tables.value==false && ck_appendices.value==false) {
			alert ("Select at least one type of call (Figures, Tables and/or Appendices)") ;
		} else {
		// Langue de l'article
		langArt=rb_language.value;
		if (langArt==true) { langArt="fr" ; }
		if (langArt==false) { langArt="en" ; }
		
		bt_go.enabled = false;
		bt_cancel.enabled = false;	
		
		if (ck_figures.value == true) { check("Figures",langArt,parseInt(nb_figures.text),log_text,progressbar1,progression_bar_txt) ; }
		if (ck_tables.value == true) { check("Tables",langArt,parseInt(nb_tables.text),log_text,progressbar1,progression_bar_txt) ; }
		if (ck_appendices.value == true) { check("Appendices",langArt,parseInt(nb_appendices.text),log_text,progressbar1,progression_bar_txt) ; }
		
		bt_go.enabled = true;
		bt_cancel.enabled = true;

		}		
		
	}		
				// logUpdate (log_text,nbLinksFigs + " calls to Figures linked") ;

	// Bouton "HELP"
	bt_help.onClick = function() {
		// Dossier de l'utilisateur
		var os = $.os.toLowerCase().indexOf('mac') >= 0 ? "MAC": "WINDOWS";
		if (os=="WINDOWS") { // version PC
			var scriptPath = scriptPathPC ;
			// var scriptPath = "~\\AppData\\Roaming\\Adobe\\InDesign\\Version 18.0\\fr_FR\\Scripts\\Scripts Panel" ;
			var url = scriptPath+"\\linkElements\\linkElements-help.html" ;
			var linkJumper = File(url);  
			linkJumper.open("r");  
			linkJumper.execute();	
			linkJumper.close();  
			} else { // version MAC
			var scriptPath = "file:///Users/ejt/Library/Preferences/Adobe Indesign/Version 18.0/fr_FR/Scripts/Scripts Panel/linkElements" ;
			var url = scriptPath+"/linkElements-help.html" ;
			// prompt (url);
			

				var aDoc = app.documents.add ();
				var myDest = aDoc.hyperlinkURLDestinations.add (url);
				myDest.showDestination ();
				aDoc.close (SaveOptions.no);
				
				}
	}
	
	// Bouton "CANCEL"
	bt_cancel.onClick = function() {
		dialog.close();
	}	
	
	// Bouton Spotlight calls "ON"
	bt_spotlight_on.onClick = function() {
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ; 
		
		progression_bar_txt.text = "Highlighting calls..." ;
		bt_spotlight_on.enabled = false;
		spotlightCalls("on",tabUndo,tabUndoIdx);
		// tabUndo[tabUndoIdx]=app.activeDocument.undoHistory.length;
		bt_spotlight_off.enabled = true;
		progression_bar_txt.text = "Ready to run..." ;
		logUpdate (log_text,"Calls highlighted") ;
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ; 

	}		

	// Bouton Spotlight calls "OFF"
	bt_spotlight_off.onClick = function() {
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ; 
		
		progression_bar_txt.text = "Unhighlighting calls..." ;
		bt_spotlight_off.enabled = false;
		spotlightCalls("off",tabUndo,tabUndoIdx);
		bt_spotlight_on.enabled = true;
		progression_bar_txt.text = "Ready to run..." ;
		logUpdate (log_text,"Calls unhighlighted") ;
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ; 
	}		
		
	// Bouton "Launch linking"
	bt_go.onClick = function() { 
		
		// Définition des variables
		var myDocument = app.documents.item(0);
		var names ;
		var nbLinksFigs ;
		var nbLinksTables ;
		var nbLinksAppendices ;
			
		// ########################################################
		// Lecture des variables de configuration de l'interface utilisateur
		// Mode test (true ou false)?
		// testMode=rb_test_mode.value;	
		testMode=false;
		// Langue de l'article
		langArt=rb_language.value;
		if (langArt==true) { langArt="fr" ; }
		if (langArt==false) { langArt="en" ; }
		// ########################################################
		
		// ########################################################
		// ajout des ancres aux légendes des Figures, Tableaux et Annexes
		// adding anchors to Figure, Table and Appendix captions
		// ########################################################
		
		if (ck_figures.value == true) {
			progression_bar_txt.text = "Creating Figure anchors" ;
			nbAnchoredFigs = addAnchors("Légende figure",langArt,testMode,log_text,progressbar1) ;
			if (testMode==false) {
				logUpdate(log_text,"Linking calls to Figures...") ;
				progression_bar_txt.text = "Listing anchors..." ;
				names = getAnchors (app.activeDocument,log_text) ;
				logUpdate (log_text,nbAnchoredFigs + " Figure anchors created") ;
				// Repérage et liaison des appels de Figures
				progression_bar_txt.text = "Linking calls to Figures" ;
				nbLinksFigs = tagCalls(names,log_text,progressbar1,nbCallsToFigures,"Figures",langArt);
				logUpdate (log_text,nbLinksFigs + " calls to Figures linked") ;
				logUpdate(log_text,"----------------------------------------------") ;
				}
			progressbar1.value=0;
			}
			
		if (ck_tables.value == true) {		
			progression_bar_txt.text = "Creating Table anchors" ;
			nbAnchoredTables = addAnchors("Légende tableau",langArt,testMode,log_text,progressbar1) ;
			if (testMode==false) {
				logUpdate(log_text,"Linking calls to Tables...") ;
				progression_bar_txt.text = "Listing anchors..." ;
				names = getAnchors (app.activeDocument,log_text) ;
				logUpdate (log_text,nbAnchoredTables + " Table anchors created") ;
				// Repérage et liaison des appels de Tableaux
				progression_bar_txt.text = "Linking calls to Tables" ;
				nbLinksTables = tagCalls(names,log_text,progressbar1,nbCallsToTables,"Tables",langArt);
				logUpdate (log_text,nbLinksTables + " calls to Tables linked") ;
				logUpdate(log_text,"----------------------------------------------") ;
				}
			progressbar1.value=0;
			}
		
		if (ck_appendices.value == true) {
			progression_bar_txt.text = "Creating Appendix anchors" ;
			nbAnchoredAppendices = addAnchors("Légende annexe",langArt,testMode,log_text,progressbar1) ;
			if (testMode==false) {
				logUpdate(log_text,"Linking calls to Appendices...") ;
				progression_bar_txt.text = "Listing anchors..." ;			
				names = getAnchors (app.activeDocument,log_text) ;
				logUpdate (log_text,nbAnchoredAppendices + " Appendix anchors created") ;
				// Repérage et liaison des appels de Tableaux
				progression_bar_txt.text = "Linking calls to Appendices" ;
				nbLinksAppendices = tagCalls(names,log_text,progressbar1,nbCallsToAppendices,"Appendices",langArt);
				logUpdate (log_text,nbLinksAppendices + " calls to Appendices linked") ;
				logUpdate(log_text,"----------------------------------------------") ;
				}
			progressbar1.value=0;
			}
			
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		
		progression_bar_txt.text = "Ready to run..." ;
		
		
		
		// Fin ajout des ancres ++++++++++++++++++++++++++++++++++++++++++++++++
		
		// à la fin, repérer les éléments de type "Figs., Tabl.", etc. pour les faire apparaître en surbrillance

	} // fin de bt_go.onClick = function()	
	// ————————————————————————————————————————	
	
	// Bouton "rb_language"
	rb_language.onClick = function() {
		init(progression_bar_txt,progressbar1,log_text,nb_figures,nbCallsToFigures,nb_calls_to_figures,nb_tables,nbCallsToTables,nb_calls_to_tables,nb_appendices,nbCallsToAppendices,nb_calls_to_appendices,bt_go,bt_cancel,rb_language);
	}
	
	// Bouton "rb_language1"
	rb_language1.onClick = function() {
		init(progression_bar_txt,progressbar1,log_text,nb_figures,nbCallsToFigures,nb_calls_to_figures,nb_tables,nbCallsToTables,nb_calls_to_tables,nb_appendices,nbCallsToAppendices,nb_calls_to_appendices,bt_go,bt_cancel,rb_language);
	}
	
	// Bouton txt_anchor
	bt_delete_links1.onClick = function() {
	// Dossier de l'utilisateur (sur PC, à sur MAC à vérifier)
	var os = $.os.toLowerCase().indexOf('mac') >= 0 ? "MAC": "WINDOWS";
	if (os=="WINDOWS") { // version PC
		// var scriptPath = "~\\AppData\\Roaming\\Adobe\\InDesign\\Version 18.0\\fr_FR\\Scripts\\Scripts Panel" ;
		var scriptPath = scriptPathPC ;
		var url = scriptPath+"\\text_anchor.jsx" ;
		} else { // version MAC
			// var scriptPath = "~/Library/Preferences/Adobe Indesign/Version 18.0/fr_FR/Scripts/Scripts Panel" ;
			var scriptPath = scriptPathMAC ;
			var url = scriptPath+"/text_anchors.jsx" ;
		}
		
	// ajout d'une entrée au tableau "undo"
	tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		
	// exécution du fichier sélectionné
	$.evalFile (url);
	
	logUpdate (log_text,"Launching text_anchor.jsx to delete unused remaining anchors");
	}
	
	bt_delete_links.onClick = function() {
		if (ck_figures.value == true) { deleteLinks("Figures",langArt,parseInt(nb_figures.text),log_text,progressbar1,progression_bar_txt) ; }
		if (ck_tables.value == true) { deleteLinks("Tables",langArt,parseInt(nb_tables.text),log_text,progressbar1,progression_bar_txt) ; }
		if (ck_appendices.value == true) { deleteLinks("Appendices",langArt,parseInt(nb_appendices.text),log_text,progressbar1,progression_bar_txt) ; }
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
	}
	
	bt_range_exp.onClick = function() {
		// Langue de l'article
		langArt=rb_language.value;
		if (langArt==true) { langArt="fr" ; }
		if (langArt==false) { langArt="en" ; }
		// fin langue

		// détection du type d'appel sélectionné
		if (ck_figures.value == true) { typeCalls = "Figures" ; }
		if (ck_tables.value == true) { typeCalls = "Tables" ; }
		if (ck_appendices.value == true) { typeCalls = "Appendices" ; }
		
		detectCalls(typeCalls,langArt);
		expandRanges(typeCalls,progression_bar_txt,log_text,langArt);
		colorsOff(typeCalls,langArt);
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		}
		
	bt_range_grp.onClick = function() {
		// Langue de l'article
		langArt=rb_language.value;
		if (langArt==true) { langArt="fr" ; }
		if (langArt==false) { langArt="en" ; }
		// fin langue

		// détection du type d'appel sélectionné
		if (ck_figures.value == true) { typeCalls = "Figures" ; }
		if (ck_tables.value == true) { typeCalls = "Tables" ; }
		if (ck_appendices.value == true) { typeCalls = "Appendices" ; }
		
		detectCalls(typeCalls,langArt);
		groupRanges(typeCalls,progression_bar_txt,log_text,langArt);
		colorsOff(typeCalls,langArt);
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		}		
	
	// Bouton clear
	bt_clear.onClick = function() {
	log_text.text="";	
	}
	
	// Si clic sur le bouton "reverse"
	log_invert.onClick = function() {
	log_text.text="";	
	invert=this.value.toString() ;
	app.insertLabel('invert',invert);
	}	
	
	// Si clic sur le bouton "follow"
	log_invert1.onClick = function() {
	follow=this.value.toString() ;
	app.insertLabel('follow',follow);
	}
	
	// Si clic sur le bouton "Delete calls"
	bt_renumbering.onClick = function() {		
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		
		if (ck_figures.value == true) { deleteCalls("Figures",list_elements_1.selection.text,list_elements_2.selection.text,progression_bar_txt,progressbar1,log_text,langArt); }
		if (ck_tables.value == true) { deleteCalls("Tables",list_elements_1.selection.text,list_elements_2.selection.text,progression_bar_txt,progressbar1,log_text,langArt); }
		if (ck_appendices.value == true) { deleteCalls("Appendices",list_elements_1.selection.text,list_elements_2.selection.text,progression_bar_txt,progressbar1,log_text,langArt); }
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;		
		}

	bt_renumbering1.onClick = function() {
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		
		if (ck_figures.value == true) { deleteCallsConf("Figures",list_elements_1.selection.text,list_elements_2.selection.text,progression_bar_txt,progressbar1,log_text,langArt); }
		if (ck_tables.value == true) { deleteCallsConf("Tables",list_elements_1.selection.text,list_elements_2.selection.text,progression_bar_txt,progressbar1,log_text,langArt); }
		if (ck_appendices.value == true) { deleteCallsConf("Appendices",list_elements_1.selection.text,list_elements_2.selection.text,progression_bar_txt,progressbar1,log_text,langArt); }			
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		
		}
		
	bt_renumbering2.onClick = function() {
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		
		if (ck_figures.value == true) { insertCalls("Figures",list_elements_3.selection.text,step_renumbering.text,progression_bar_txt,progressbar1,log_text,langArt); }
		if (ck_tables.value == true) { insertCalls("Tables",list_elements_3.selection.text,step_renumbering.text,progression_bar_txt,progressbar1,log_text,langArt); }
		if (ck_appendices.value == true) { insertCalls("Appendices",list_elements_3.selection.text,step_renumbering.text,progression_bar_txt,progressbar1,log_text,langArt); }
		
		// ajout d'une entrée au tableau "undo"
		tabUndo[tabUndoIdx] = app.activeDocument.undoHistory.length ; logUpdate (log_text,"Undo/redo point saved: no. " + tabUndoIdx + " ("+tabUndo[tabUndoIdx]+")"); tabUndoIdx++ ;
		
		
		}	

	// Bouton "Annuler"
	bt_undo.onClick = function() {		
	if (tabUndoIdx>0) { 
		tabUndoIdx--;
		undo(tabUndo,tabUndoIdx); 
		} else {
			logUpdate (log_text,"No more action to cancel") ;
		}
		}
		
	// Bouton "Refaire"
	bt_redo.onClick = function() {		
		if (tabUndoIdx<tabUndo.length-1) { 
		tabUndoIdx++;
		redo(tabUndo,tabUndoIdx);	
		
		} else {
			logUpdate (log_text,"No more action to redo") ;
		}
	}
	
	// Si clic sur le champ "ck_figures"
	ck_figures.onClick = function() {
		if (ck_figures.value == true) {
		bt_check.enabled=true;
		bt_go.enabled=true;
		bt_delete_links.enabled=true;
		}
		if (ck_figures.value == false && ck_tables.value == false && ck_appendices.value == false) {
		bt_check.enabled=false;
		bt_go.enabled=false;
		bt_delete_links.enabled=false;
		list_elements_1.removeAll();
		list_elements_2.removeAll();
		list_elements_3.removeAll();
		list_elements_1.enabled=false;
		list_elements_2.enabled=false;
		list_elements_3.enabled=false;
		step_renumbering.enabled=false;
		bt_renumbering.enabled=false;
		bt_renumbering1.enabled=false;
		bt_renumbering2.enabled=false;
		bt_range_exp.enabled=false;
		bt_range_grp.enabled=false;
		}
		if (ck_figures.value == true && ck_tables.value == false && ck_appendices.value == false) {
			// alert("only figures");
			showList("Figures",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}
		if (ck_figures.value == false && ck_tables.value == true && ck_appendices.value == false) {
			// alert("only tables");
			showList("Tables",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}		
		if (ck_figures.value == false && ck_tables.value == false && ck_appendices.value == true) {
			// alert("only appendices");
			showList("Appendices",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}
		if ((ck_figures.value == true && ck_tables.value == true && ck_appendices.value == false)||(ck_figures.value == true && ck_tables.value == false && ck_appendices.value == true)||(ck_figures.value == false && ck_tables.value == true && ck_appendices.value == true)||(ck_figures.value == true && ck_tables.value == true && ck_appendices.value == true)) {
			list_elements_1.removeAll();
			list_elements_2.removeAll();
			list_elements_3.removeAll();
			list_elements_1.enabled=false;
			list_elements_2.enabled=false;
			step_renumbering.enabled=false;
			bt_renumbering1.enabled=false;
			bt_renumbering2.enabled=false;
			bt_renumbering.enabled=false;
			bt_range_exp.enabled=false;
			bt_range_grp.enabled=false;
		}
	}		
	// Si clic sur le champ "ck_tables"
	ck_tables.onClick = function() {
		if (ck_tables.value == true) {
		bt_check.enabled=true;
		bt_go.enabled=true;
		bt_delete_links.enabled=true;
		}
		if (ck_figures.value == false && ck_tables.value == false && ck_appendices.value == false) {
		bt_check.enabled=false;
		bt_go.enabled=false;
		bt_delete_links.enabled=false;
		list_elements_1.removeAll();
		list_elements_2.removeAll();
		list_elements_3.removeAll();
		list_elements_1.enabled=false;
		list_elements_2.enabled=false;
		list_elements_3.enabled=false;
		step_renumbering.enabled=false;
		bt_renumbering.enabled=false;
		bt_renumbering1.enabled=false;
		bt_renumbering2.enabled=false;
		bt_range_exp.enabled=false;
		bt_range_grp.enabled=false;
		}
		if (ck_figures.value == true && ck_tables.value == false && ck_appendices.value == false) {
			// alert("only figures");
			showList("Figures",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}
		if (ck_figures.value == false && ck_tables.value == true && ck_appendices.value == false) {
			// alert("only tables");
			showList("Tables",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}
		if (ck_figures.value == false && ck_tables.value == false && ck_appendices.value == true) {
			// alert("only appendices");
			showList("Appendices",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}	
		if ((ck_figures.value == true && ck_tables.value == true && ck_appendices.value == false)||(ck_figures.value == true && ck_tables.value == false && ck_appendices.value == true)||(ck_figures.value == false && ck_tables.value == true && ck_appendices.value == true)||(ck_figures.value == true && ck_tables.value == true && ck_appendices.value == true)) {
			list_elements_1.removeAll();
			list_elements_2.removeAll();
			list_elements_3.removeAll();
			list_elements_1.enabled=false;
			list_elements_2.enabled=false;
			list_elements_3.enabled=false;
			step_renumbering.enabled=false;
			bt_renumbering.enabled=false;
			bt_renumbering1.enabled=false;
			bt_renumbering2.enabled=false;
			bt_range_exp.enabled=false;
			bt_range_grp.enabled=false;
		}
	}
	// Si clic sur le champ "ck_appendices"
	ck_appendices.onClick = function() {
		if (ck_appendices.value == true) {
		bt_check.enabled=true;
		bt_go.enabled=true;
		bt_delete_links.enabled=true;
		}
		if (ck_figures.value == false && ck_tables.value == false && ck_appendices.value == false) {
		bt_check.enabled=false;
		bt_go.enabled=false;
		bt_delete_links.enabled=false;
		list_elements_1.removeAll();
		list_elements_2.removeAll();
		list_elements_3.removeAll();
		list_elements_1.enabled=false;
		list_elements_2.enabled=false;
		list_elements_3.enabled=false;
		step_renumbering.enabled=false;
		bt_renumbering.enabled=false;
		bt_renumbering1.enabled=false;
		bt_renumbering2.enabled=false;
		bt_range_exp.enabled=false;
		bt_range_grp.enabled=false;

		}		
		if (ck_figures.value == true && ck_tables.value == false && ck_appendices.value == false) {
			// alert("only figures");
			showList("Figures",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}		
		if (ck_figures.value == false && ck_tables.value == true && ck_appendices.value == false) {
			// alert("only tables");
			showList("Tables",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}
		if (ck_figures.value == false && ck_tables.value == false && ck_appendices.value == true) {
			// alert("only appendices");
			showList("Appendices",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
			bt_range_exp.enabled=true;
			bt_range_grp.enabled=true;
			bt_renumbering2.enabled=true;
		}		
		
		if ((ck_figures.value == true && ck_tables.value == true && ck_appendices.value == false)||(ck_figures.value == true && ck_tables.value == false && ck_appendices.value == true)||(ck_figures.value == false && ck_tables.value == true && ck_appendices.value == true)||(ck_figures.value == true && ck_tables.value == true && ck_appendices.value == true)) {
			list_elements_1.removeAll();
			list_elements_2.removeAll();
			list_elements_3.removeAll();
			list_elements_1.enabled=false;
			list_elements_2.enabled=false;
			list_elements_3.enabled=false;
			step_renumbering.enabled=false;
			bt_renumbering.enabled=false;
			bt_renumbering1.enabled=false;
			bt_renumbering2.enabled=false;
			bt_range_exp.enabled=false;
			bt_range_grp.enabled=false;
		}
		
	} // fin de ck_figures, tables and appendices.onClick = function()
	
	list_elements_1.onChange = function() {
		if (ck_figures.value == true && ck_tables.value == false && ck_appendices.value == false) {
			// alert("only figures");
			showList("Figures",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
		}		
		if (ck_figures.value == false && ck_tables.value == true && ck_appendices.value == false) {
			// alert("only tables");
			showList("Tables",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
		}
		if (ck_figures.value == false && ck_tables.value == false && ck_appendices.value == true) {
			// alert("only appendices");
			showList("Appendices",list_elements_1,list_elements_2,list_elements_3,step_renumbering,bt_renumbering,nbFigures,nbTables,nbAppendices);
		}	
	}

// fin du programme

// Notes :

// ———————————————————————————————————————————————————————————————————————————————————————————————
// Pour rechercher un style à l'intérieur d'un sous-dossier du panneau "styles" :
// app.findGrepPreferences.appliedParagraphStyle = app.activeDocument.paragraphStyleGroups.itemByName("Styles EJT").paragraphStyleGroups.itemByName("First page").paragraphStyles.itemByName ("Citation");
// ———————————————————————————————————————————————————————————————————————————————————————————————