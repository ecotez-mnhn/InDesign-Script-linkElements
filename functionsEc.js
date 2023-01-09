// ##################################################################################################
// functionsEC regroupe toutes les fonctions utilisées dans les scripts développés par EC
// Date de dernière modification : 05/12/2022
// ##################################################################################################

// #########################################################################################
// Fonction de création d'une fenêtre permettant la sélection d'un ou plusieurs éléments ;
// prend en paramètre un tableau d'occurrences
// renvoie un tableau contenant les réponses sélectionnées

function myInput(type, msg, title, tabChoix) {

/*
var box = new Window('dialog', 'Some title');
var panel = box.add(panel, undefined, 'Panel title');
panel.add('edittext', undefined, 'Default value');
panel.add('slider', undefined, 50,0,100);
var group = box.add(group, undefined, 'Group title');
group = area_len_box.add('group', undefined, 'Title (not displayed)');
group.orientation='row';

group.closeBtn = group.add('button',undefined, 'Close', {name:'close'});

group.closeBtn.onClick = function(){

  box.hide();

  return false;

}
*/	

         var myWindow = new Window ("dialog", msg);
         
         var myInputGroup = myWindow.add ("group");

         // myInputGroup.add('slider', undefined, 50,0,100);

         if (type=="checkbox") {
         id=0;
         var check = new Array() ;
         myWindow.alignChildren = "left";
			
			for (j=0 ; j<tabChoix.length ; j++) {
			check[j] = myWindow.add ("checkbox", undefined, tabChoix[j]);
			// var check2 = myWindow.add ("checkbox", undefined, "Prefer black and white");
			}
			
			// check1.value = true;
		}

		if (type=="text") {
         
         myInputGroup.add ("statictext", undefined, title);
                  var myText = myInputGroup.add ("edittext", undefined, "John");
                  myText.characters = 20;
                  myText.active = true;
        }
            
     

 		var myButtonGroup = myWindow.add ("group");
                  myButtonGroup.alignment = "right";
                  myButtonGroup.add ("button", undefined, "OK");
                  myButtonGroup.add ("button", undefined, "Cancel");              

		if (myWindow.show () == 1) {
				
				if (type=="checkbox") {
					var tab = new Array() ;
					// alert (check[0].value) ;
					for (i=0 ; i<check.length ; i++) {
					if (check[i].value==true) {tab[i]="1";} else {tab[i]="0";}
					}
				return tab ; 
				}

				if (type=="text") { return myText.text ; }
              }
         		else {
                  exit ();
         		}

  } // fin de function selectWindow()
// #########################################################################################

// #########################################################################################
// cleanArray removes all duplicated elements
// pris sur : https://www.unicoda.com/?p=579
function cleanArray(array) {
  var i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  }
  for (j in obj) {
    out.push(j);
  }
  return out;
}
// #########################################################################################

// #########################################################################################
// +++++++++++++++++++++++++
// Extrait une liste triée et dédoublonnée des intitulés de paragraphes dont le style est passé en paramètre "Matériel Diagnose"
// Fonction utilisée dans les scripts : test-paragraphs.js
// +++++++++++++++++++++++++

function getParagraphList() { 
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedParagraphStyle="Matériel-diagnose";
	// requête v1 : (?<=\r)[\w\(\) ~S~<-]+(?=\.\s—)
	// requête v2 (actuelle) : ^[\w\(\) ~S~<-]+(?=\.\s—)
    app.findGrepPreferences.findWhat="^[\\w\\(\\)\\[\\] ~S~<-]+(?=\\.\\s—)" ;
    
    res = app.activeDocument.findGrep();
        
    var tabResults = new Array();

    if (res.length!=0) {
	    for (i=0 ; i<res.length ; i++) {
	    	tabResults[i] = res[i].contents ;
	        }    
	    } else { return false ; }


	 // Suppression des doublons
	 tabResults = cleanArray(tabResults);

	// Tri du tableau
	 tabResults.sort();

	 return tabResults;
}
// #########################################################################################

// ###################################################################################################
// affiche le contenu d'un tableau passé en paramètre dans une boîte d'alerte
function alertTab(tab) {
	var msg="";
	for (i=0 ; i<tab.length ; i++) {
	msg += tab[i]+"\n";
	}
	alert(msg);
	}
// ###################################################################################################

// #########################################################################################
// Fonction de temporisation
function wait(ms)
{
	var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
// ###################################################################################################

// #########################################################################################
// fonction de conversion des coordonnées géographiques angulaires vers décimales
// prend en paramètres une coordonnée N/S (séparés par virgule-espace) en degrés et la convertit en coordonnées décimales (latitude virgule-espace longitude)
// ex. : " 20°38’17”S, 164°52’1”E " sera transformé en " –20.638056, 164.866944 "
function coordAng2Dec (coordonnees) {
		// Traitement des coordonnées géographiques pour les transformer en liens vers openstreetmap :

	    // modèle d'URL : https://www.openstreetmap.org/#map=8/37.361/43.792 (le "8" correspond au niveau de zoom appliqué)
	    // modèle de contenu à découper : 21°51’27.324”S, 166°26’17.052”E
	    // modèle de contenu à découper : 21°51’S, 166°26’E

	    // alert (myFound1[k].contents) ;

	    var etape1 = coordonnees.split(", ");

		lati = etape1[0] ; // 21°51’27.324”S
		longi = etape1[1] ; // 166°26’17.052”E

		// extraction de la latitude ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		latDeg = lati.split("°") ; 
		latDegValue = latDeg[0] ; // 21

		latMin = latDeg[1].split("’") ;
		latMinValue = latMin[0].replace("°","") ; // 51

		latSec = latMin[1].split("”") ;

		if (latSec[0]=="S" || latSec[0]=="N" ) { 
			latSecValue=0;
			latNS = latSec[0] // N ou S ;
			} else {
			latSecValue = latSec[0].replace("'","") ; // 27.324		
			latNS = latSec[1] // N ou S ;
			}		

		// fin latitude ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

		// extraction de la longitude ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		var longDeg = longi.split("°") ; 
		longDegValue = longDeg[0] ; // 21

		longMin = longDeg[1].split("’") ;
		var longMinValue = longMin[0].replace("°","") ; // 51

		longSec = longMin[1].split("”") ;

		if (longSec[0]=="E" || longSec[0]=="O" || longSec[0]=="W") { 
			longSecValue=0;
			longEO = longSec[0] // E ou O ou W ;
			} else {
				longSecValue = longSec[0].replace("'","") ; // 27.324
				longEO = longSec[1] // E ou O ou W ;
				}

		// fin longitude ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++		

		// Calcul des coordonnées décimales ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++		

		latDecValue = parseInt(latDegValue) + ((parseInt(latMinValue)/60) + (parseInt(latSecValue)/3600)) ;
		if (latNS=="S") { latDecValue = latDecValue*-1 ; }
		latDecValue = Math.round((latDecValue*1000000))/1000000;

		longDecValue = parseInt(longDegValue) + ((parseInt(longMinValue)/60) + (parseInt(longSecValue)/3600)) ;
		if (longEO=="E") {} else { longDecValue = longDecValue*-1 ; }
		longDecValue = Math.round((longDecValue*1000000))/1000000;

		var longDecValueTxt = longDecValue.toString().replace("-","–");
		var latDecValueTxt = latDecValue.toString().replace("-","–");


		/* if (lang == "fr") {
			latDecValueTxt = latDecValueTxt.replace(".",",");
			longDecValueTxt = longDecValueTxt.replace(".",",");
			} */

		// Fin du calcul des coordonnées décimales ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		
		return (latDecValueTxt + ", " + longDecValueTxt) ;

} // fin de la fonction coordAng2Dec()
// ###################################################################################################

// #########################################################################################
function get_date_string(para_date) {
	var date = para_date || new Date();
	var day = (date.getDate() > 10 ) ? date.getDate() : ("0" + date.getDate() ),
		month = ((date.getMonth()+1) > 10 ) ? (date.getMonth()+1) : ("0" + (date.getMonth()+1) ),
		year = (date.getFullYear() > 10 ) ? date.getFullYear() : ("0" + date.getFullYear() ),
		hours = (date.getHours() > 10 ) ? date.getHours() : ("0" + date.getHours() ),
		minutes = (date.getMinutes() > 10 ) ? date.getMinutes() : ("0" + date.getMinutes() );
		return year + month + day + "_" + hours + minutes;
		}; // fin de la fonction get_date_string	
// ###################################################################################################

// #########################################################################################		
function barcode2URL (barcode) {
	
	// herbier avec appel API --------------------------------------------------------------
	if (barcode.substr(0,2)=="BM") {
			// adresse de l'API à appeler
			var yourUrl = "https://data.nhm.ac.uk/api/3/action/datastore_search?resource_id=05ff2255-c38a-40c9-b657-4ccb55ab2feb&q=" + myFound1[k].contents;
			var request = {
			  url:yourUrl,
			  }
			var response = restix.fetch(request);
			var json_obj = JSON.parse(response.body);
			var id = json_obj["result"]["records"][0]["occurrenceID"] ;
			url = "https://data.nhm.ac.uk/object/" + id ;
			wait(50); // pour temporiser l'appel à l'API, en millisecondes
		} // ————————————————————
	
	// herbier dont le barcode est présent dans l'URL de la page ---------------------------
	if (barcode.substr(0,2)=="BR") {	// herbier BR		
		return "https://www.botanicalcollections.be/specimen/" + barcode ;
		}
	if (barcode.substr(0,1)=="B") {	// herbier B (Berlin)
		return "http://herbarium.bgbm.org/object/" + barcode ;
		}
	if (barcode.substr(0,3)=="CAY") { // herbier CAY (Cayenne, IRD)
		return "http://publish.plantnet-project.org/project/caypub/collection/cay/specimens/result?form[name_field_10]=62b043691d02786aa94f9ec8&form%5Bfield_10%5D=" + barcode ;
		}
	if (barcode.substr(0,3)=="COI") { // herbier COI
		return "http://coicatalogue.uc.pt/index.php?t=specimen&COINumber=" + barcode ;
		}
	if (barcode.substr(0,1)=="E") { // Herbier E (Royal Botanic Garden of Edinburgh)
		return "http://data.rbge.org.uk/herb/"+barcode ; 
		}	
	if (barcode.substr(0,1)=="G") {	// Herbier G (Genève)
		return "http://www.ville-ge.ch/musinfo/bd/cjb/chg/result.php?type_search=advanced&barcode=" + barcode ;
		}	
	if (barcode.substr(0,3)=="HBG") {	// Herbier G (Genève)
		return "http://www.herbariumhamburgense.de/Data_Spermatophyta/herbar_spezial.php?hbgid=" + barcode ;
		}	
	if (barcode.substr(0,4)=="KRAM") {		
		return "https://kiki.huh.harvard.edu/databases/specimen_search.php?barcode=" + barcode ;
		}
	if (barcode.substr(0,1)=="K") {	 // Herbier K (Kew)	
		return "http://specimens.kew.org/herbarium/" + barcode ;
		}
	if (barcode.substr(0,1)=="L") {	 // Herbier L, format de spécimen : L.2970625	
		return "https://data.biodiversitydata.nl/naturalis/specimen/" + barcode ;
		}		
	if (barcode.substr(0,4)=="LISC") {	 // Herbier LISC (Jardim Botânico Tropical)	
		return "http://maerua.iict.pt/colecoes/herb_detailspecimen.php?catalogNumber=" + barcode ;
		}	
	if (barcode.substr(0,3)=="MPU") { // Herbier Montpellier		
		// return "https://herbier.umontpellier.fr/hv/wakka.php?wiki=PagePrincipale/iframe&action=detail&ordre=p&codebarre=" + barcode ;
		return "https://science.mnhn.fr/institution/um/collection/mpu/item/" + barcode ;
		}	
	if (barcode.substr(0,2)=="NY") { // Herbier NY (New York)	
		return "http://sweetgum.nybg.org/science/vh/specimen_list.php?ColBarcode=" + barcode.replace("NY","") ;
		}
	if (barcode.substr(0,3)=="NOU") { // Herbier NOU (Nouméa)	
		return "http://publish.plantnet-project.org/project/nou/collection/nou/specimens/details/" + barcode ;
		}		
	if (barcode.substr(0,2)=="PC") { // herbier PC (Paris, Cryptogames)
		return "http://coldb.mnhn.fr/catalognumber/mnhn/pc/"+barcode ; 
		}
	if (barcode.substr(0,1)=="P") { // herbier P (Paris)
		return "http://coldb.mnhn.fr/catalognumber/mnhn/p/"+barcode ; 
		}
	if (barcode.substr(0,1)=="S") { // herbier S (Swedish Museum of Natural History)
		return "http://herbarium.nrm.se/specimens/"+barcode ; 
		}		
	if (barcode.substr(0,2)=="RB") { // herbier RB (Rio de Janeiro Botanical Garden Herbarium Collection)
		return "http://jabot.jbrj.gov.br/v2/ficha.php?chtestemunho="+barcode ; 
		}
	if (barcode.substr(0,2)=="UC") { // herbier UC (The University and Jepson Herbaria)
		return "https://webapps.cspace.berkeley.edu/ucjeps/publicsearch/publicsearch/?maxresults=1&displayType=full&accession="+barcode ; 
		}	
	if (barcode.substr(0,3)=="WAG") { // herbier WAG (Herbier Naturalis)
		return "http://data.biodiversitydata.nl/naturalis/specimen/"+barcode ; 
		}	
	if (barcode.substr(0,2)=="WU") { // herbier WU
		return "https://herbarium.univie.ac.at/database/image.php?filename=" + barcode + "&method=show" ; 
		}
	if (barcode.substr(0,1)=="Z") { // herbier Z (Zurich ?)
		return "http://www.herbarien.uzh.ch/static/database/details_de.php?&spBarCod="+barcode ; 
		}	

	// herbiers JACQ :
	// JE, W
	if (barcode.substr(0,1)=="W" || barcode.substr(0,2)=="JE") {
		return "https://je.jacq.org/" + barcode ; 
		}
	// herbiers JACQ à ajouter :
	/* JACQ is the jointly administered herbarium management system and specimen database of the following herbaria: ADMONT, B, BAK, BATU, BEOU, BP, BRNU, CBH, CHER, DR, ERE, FT, GAT, GJO, GZU, HAL, HERZ, JE, KIEL, KFTA, KUFS, LAGU, LECB, LW, LWKS, LWS, LZ, MJG, NBSI, OLD, PAV, PI, PIAGR, PRC, TBI, TGU, TMRC, TO, TUB, UBT, WU and WUP. */
		
	// herbiers JSTOR
	// A, BISH, BAA, C, F, FI, FR, GH, GOET, GZU, H, HAL, IAN, IFAN, L, LD, LE, LIL, LISU, M, MEL, MO, MSB, NDG, PH, R, RSA, SI, TCD, TEF, UC, US, WIS, YU
	// herbiers supprimés de JSTOR pour passer à JACQ : JE, W
	
	if (barcode.substr(0,1)=="A" || barcode.substr(0,4)=="BISH" || barcode.substr(0,3)=="BAA" || barcode.substr(0,1)=="C" || barcode.substr(0,1)=="F" || barcode.substr(0,2)=="FI" || barcode.substr(0,2)=="FR" || barcode.substr(0,2)=="GH" || barcode.substr(0,4)=="GOET" || barcode.substr(0,3)=="GZU" || barcode.substr(0,3)=="HAL" || barcode.substr(0,1)=="H" || barcode.substr(0,3)=="IAN" || barcode.substr(0,4)=="IFAN" || barcode.substr(0,2)=="LD" || barcode.substr(0,2)=="LE" || barcode.substr(0,3)=="LIL" || barcode.substr(0,4)=="LISU" || barcode.substr(0,1)=="L" || barcode.substr(0,3)=="MSB" || barcode.substr(0,3)=="MEL" || barcode.substr(0,2)=="MO" || barcode.substr(0,1)=="M" || barcode.substr(0,3)=="NDG" || barcode.substr(0,2)=="PH" || barcode.substr(0,3)=="RSA" || barcode.substr(0,1)=="R" || barcode.substr(0,2)=="SI" || barcode.substr(0,3)=="TCD" || barcode.substr(0,3)=="TEF" || barcode.substr(0,2)=="UC" || barcode.substr(0,2)=="US" || barcode.substr(0,3)=="WIS" || barcode.substr(0,2)=="YU	") {
		return "https://je.jacq.org/" + barcode ; 
		}
	
	else { 	return false ; }

	} // fin de la fonction barcode2URL
// ###################################################################################################	

// #########################################################################################
 function myColorAdd(myDocument, myColorName, myColorModel, myColorValue){
	 
/* 
// add CMYK color
			myColorAdd(app.activeDocument, "My Custom Color", ColorModel.PROCESS, [80,50,30,10]);
			 
			// add RGB color
			myColorAdd(app.activeDocument, "My Custom Color", ColorModel.PROCESS, [33,66,99]);
			 
			// add HEX color
			myColorAdd(app.activeDocument, "My Custom Color", ColorModel.PROCESS, "ABCDEF");

// add CMYK color to document
// and asign it to selected object
app.selection[0].fillColor = myColorAdd(app.activeDocument, "My Custom Color", ColorModel.PROCESS, [80,50,30,10]);			
*/	 
	 
    if(myColorValue instanceof Array == false){
        myColorValue = [(parseInt(myColorValue, 16) >> 16 ) & 0xff, (parseInt(myColorValue, 16) >> 8 ) & 0xff, parseInt(myColorValue, 16 ) & 0xff ];
        myColorSpace = ColorSpace.RGB;
    }else{
        if(myColorValue.length == 3)
          myColorSpace = ColorSpace.RGB;
        else
          myColorSpace = ColorSpace.CMYK;
    }
    try{
        myColor = myDocument.colors.item(myColorName);
        myName = myColor.name;
    }
    catch (myError){
        myColor = myDocument.colors.add();
        myColor.properties = {name:myColorName, model:myColorModel, space:myColorSpace ,colorValue:myColorValue};
    }
    return myColor;
}
// ###################################################################################################	

function getJournalName() {
	requete =  ".+(?=\\sest une revue en flux continu publiée par les Publications scientifiques du Muséum, Paris)" ;
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.findWhat = requete ;
	var res = app.activeDocument.findGrep() ;
	if (res[0]==undefined) {
		return prompt ("Journal's name not found, please correct") ;
	} else { return res[0].contents ; }
}

function getJournalVolume() {
	requete =  "\\d+\\s\\(\\d+\\)(?=:\\s)" ;
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedParagraphStyle = "Citation" ;
	app.findGrepPreferences.findWhat = requete ;
	var res = app.activeDocument.findGrep() ;
	return res[0].contents ;
}

function getCitation() { // récupère la citation (sans les DOI et permalien)
	requete =  ".+(?=\\shttps://)" ;
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedParagraphStyle = "Citation" ;
	app.findGrepPreferences.findWhat = requete ;
	var res = app.activeDocument.findGrep() ;
	return res[0].contents ;
}

function getDoi() { // récupère le DOI de l'article
	requete =  "(?<=https://doi\\.org/).+\\d{4}v\\d{2}a\\d+" ;
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedParagraphStyle = "Citation" ;
	app.findGrepPreferences.findWhat = requete ;
	var res = app.activeDocument.findGrep() ;
	return res[0].contents ;
}

function getPermalink() { // récupère le permalien de l'article
	requete =  "http://.+/\\d+/\\d+" ;
	app.findGrepPreferences=app.changeGrepPreferences=null;
	app.findGrepPreferences.appliedParagraphStyle = "Citation" ;
	app.findGrepPreferences.findWhat = requete ;
	var res = app.activeDocument.findGrep() ;
	return res[0].contents ;
}

function returnColor(coul) { // prend en paramètre un indice et renvoie la couleur correspondante
	var tabColors 		= 	["#EE0000","#0000FF","#008000","#FF00FF","#008080","#808000","#000080","#FFFF00","#00FFFF","#800080","#800000","#ff5733","#82e0aa","#ff6565","#f6bebf","#7f408a","#6e82eb","#162979","#c5ff6a","#ffd556","#ffed2a","#d093ff","#ff20bd","#5134ff","#ffee8e","#f88bff","#0a8c22","#2a3657","#570000","#465700","#C0C0C0"] ;
	var tabColorNames	=	["Red","Blue","Green","Fuchsia","Teal","Olive","Navy","Yellow","Aqua","Purple","Maroon","Orange","Water green","medium red","old pink","dark purple","blue grey","dark blue","light green","light orange","gold","purple grey","hot pink","pink blue","Pale orange","Cool pink","Forest","Dark night","red wine","kaki","Silver"] ;
	
	if (coul==tabColors.length) { 
		alert ("Too many colors needed! You will have to configure layer colors manually on uMap") ;
	}
	if (coul>tabColors.length-1) {
		return tabColors[tabColors.length-1] ;
		} else { return tabColors[coul] ; }
	}
	
function remove_link(mySelectedText) {
		var myDoc = app.activeDocument;
		var mySel = app.selection[0];
		var  hyperlinkTextSources = mySelectedText.findHyperlinks(RangeSortOrder.ASCENDING_SORT);
		for (var ih = 0; ih < hyperlinkTextSources.length; ih++) {
			hyperlinkTextSources[ih].sourceText.appliedCharacterStyle = myDoc.characterStyles.itemByName("[Sans]"); 
			hyperlinkTextSources[ih].sourceText.clearOverrides(OverrideType.CHARACTER_ONLY);
			hyperlinkTextSources[ih].remove();
		}
	}	



// 
