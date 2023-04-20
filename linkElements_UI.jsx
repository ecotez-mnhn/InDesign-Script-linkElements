// Interface v13

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":154,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Link calls to corresponding elements","preferredSize":[60,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Group","parentId":26,"style":{"enabled":true,"varName":"choix_langue_et_test","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-2":{"id":2,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"choix_langue","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"StaticText","parentId":1,"style":{"enabled":true,"varName":"Which","creationProps":{},"softWrap":false,"text":"Language of the article\n(click to refresh):","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"Select the language of the article\\nThe linking function will only be applied on the calls corresponding to the selected language."}},"item-4":{"id":4,"type":"Group","parentId":26,"style":{"enabled":true,"varName":"choix_element","preferredSize":[142,80],"margins":[0,20,0,0],"orientation":"column","spacing":6,"alignChildren":["left","top"],"alignment":null}},"item-5":{"id":5,"type":"Checkbox","parentId":4,"style":{"enabled":true,"varName":"ck_appendices","text":"Appendices","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-6":{"id":6,"type":"Checkbox","parentId":4,"style":{"enabled":true,"varName":"ck_tables","text":"Tables","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-12":{"id":12,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":"Which","creationProps":{},"softWrap":false,"text":"Select element(s)\nto test/link/unlink:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"Select at least one item from the list below to unlock other features of the script."}},"item-13":{"id":13,"type":"RadioButton","parentId":2,"style":{"enabled":true,"varName":"rb_language","text":"English","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-14":{"id":14,"type":"RadioButton","parentId":2,"style":{"enabled":true,"varName":"rb_language","text":"French","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-16":{"id":16,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-20":{"id":20,"type":"Checkbox","parentId":4,"style":{"enabled":false,"varName":"ck_references","text":"References","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"Checkbox","parentId":4,"style":{"enabled":true,"varName":"ck_figures","text":"Figures","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-24":{"id":24,"type":"Group","parentId":16,"style":{"enabled":true,"varName":"choix_test","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-25":{"id":25,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-26":{"id":26,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[361,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-27":{"id":27,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[361,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-28":{"id":28,"type":"Progressbar","parentId":113,"style":{"enabled":true,"varName":null,"preferredSize":[263,8],"alignment":null,"helpTip":"The progression bar shows the percentage of finalisation of the running task."}},"item-29":{"id":29,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-30":{"id":30,"type":"StaticText","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{},"softWrap":false,"text":"This script allows you to test, link and unlink calls\nto Figures, Tables and Appendices to their captions.","justify":"left","preferredSize":[360,0],"alignment":null,"helpTip":"Fly over the buttons and titles in this window to show tips on how to use this script\\nUse the \"help\" button to show the help page in your browser."}},"item-31":{"id":31,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"boutons","preferredSize":[361,0],"margins":5,"orientation":"row","spacing":13,"alignChildren":["center","center"],"alignment":null}},"item-32":{"id":32,"type":"Button","parentId":31,"style":{"enabled":false,"varName":"bt_cancel","text":"Exit","justify":"center","preferredSize":[80,0],"alignment":null,"helpTip":"Go out –>[ ]"}},"item-33":{"id":33,"type":"Button","parentId":31,"style":{"enabled":false,"varName":"bt_go","text":"Launch linking","justify":"center","preferredSize":[163,0],"alignment":null,"helpTip":"Link calls to the corresponding selected element(s) (Figures, Tables or Appendices);\\nThe script will only link the calls that correspond to the language of the article."}},"item-35":{"id":35,"type":"StaticText","parentId":113,"style":{"enabled":true,"varName":"progression_bar","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Progression:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-37":{"id":37,"type":"Button","parentId":31,"style":{"enabled":false,"varName":"bt_help","text":"Help","justify":"center","preferredSize":[80,0],"alignment":null,"helpTip":"Fly over text and buttons to show explanations on the corresponding function;\\nClick on this button to show the help page in your browser."}},"item-38":{"id":38,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"informations","preferredSize":[361,0],"margins":0,"orientation":"column","spacing":1,"alignChildren":["left","center"],"alignment":null}},"item-39":{"id":39,"type":"StaticText","parentId":38,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Elements and (unlinked) calls detected:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"In this zone appear only the elements that have not yet been linked;\\nonce linked, the number of calls to the linked elements should be \"0\""}},"item-53":{"id":53,"type":"Group","parentId":38,"style":{"enabled":true,"varName":null,"preferredSize":[358,0],"margins":[0,0,0,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-54":{"id":54,"type":"Group","parentId":53,"style":{"enabled":true,"varName":null,"preferredSize":[150,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-55":{"id":55,"type":"StaticText","parentId":54,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Figures:","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}},"item-56":{"id":56,"type":"EditText","parentId":54,"style":{"enabled":false,"varName":"nb_figures","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Number of Figures detected"}},"item-57":{"id":57,"type":"Divider","parentId":53,"style":{"enabled":true,"varName":null}},"item-58":{"id":58,"type":"Group","parentId":53,"style":{"enabled":true,"varName":null,"preferredSize":[184,0],"margins":[0,0,0,13],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-59":{"id":59,"type":"StaticText","parentId":58,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Calls to Figures:","justify":"left","preferredSize":[100,0],"alignment":null,"helpTip":null}},"item-60":{"id":60,"type":"EditText","parentId":58,"style":{"enabled":false,"varName":"nb_calls_to_figures","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Number of unlinked calls to Figures detected"}},"item-61":{"id":61,"type":"Group","parentId":38,"style":{"enabled":true,"varName":null,"preferredSize":[358,0],"margins":[0,0,0,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-62":{"id":62,"type":"Group","parentId":61,"style":{"enabled":true,"varName":null,"preferredSize":[150,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-63":{"id":63,"type":"StaticText","parentId":62,"style":{"enabled":true,"varName":"","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Tables:","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}},"item-64":{"id":64,"type":"EditText","parentId":62,"style":{"enabled":false,"varName":"nb_tables","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Number of Tables detected"}},"item-65":{"id":65,"type":"Divider","parentId":61,"style":{"enabled":true,"varName":null}},"item-66":{"id":66,"type":"Group","parentId":61,"style":{"enabled":true,"varName":null,"preferredSize":[184,0],"margins":[0,0,0,13],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-67":{"id":67,"type":"StaticText","parentId":66,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Calls to Tables:","justify":"left","preferredSize":[100,0],"alignment":null,"helpTip":null}},"item-68":{"id":68,"type":"EditText","parentId":66,"style":{"enabled":false,"varName":"nb_calls_to_tables","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Number of unlinked calls to Tables detected"}},"item-69":{"id":69,"type":"Group","parentId":38,"style":{"enabled":true,"varName":null,"preferredSize":[358,0],"margins":[0,0,0,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-70":{"id":70,"type":"Group","parentId":69,"style":{"enabled":true,"varName":null,"preferredSize":[150,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-71":{"id":71,"type":"StaticText","parentId":70,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Appendices:","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}},"item-72":{"id":72,"type":"EditText","parentId":70,"style":{"enabled":false,"varName":"nb_appendices","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Number of Appendices detected"}},"item-73":{"id":73,"type":"Divider","parentId":69,"style":{"enabled":true,"varName":null}},"item-74":{"id":74,"type":"Group","parentId":69,"style":{"enabled":true,"varName":null,"preferredSize":[184,0],"margins":[0,0,0,13],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-75":{"id":75,"type":"StaticText","parentId":74,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Calls to Apps:","justify":"left","preferredSize":[100,0],"alignment":null,"helpTip":null}},"item-76":{"id":76,"type":"EditText","parentId":74,"style":{"enabled":false,"varName":"nb_calls_to_appendices","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Number of unlinked calls to Appendices detected"}},"item-85":{"id":85,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-86":{"id":86,"type":"Group","parentId":38,"style":{"enabled":true,"varName":null,"preferredSize":[358,0],"margins":[0,0,0,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-87":{"id":87,"type":"Group","parentId":86,"style":{"enabled":true,"varName":null,"preferredSize":[150,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-88":{"id":88,"type":"StaticText","parentId":87,"style":{"enabled":false,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"References:","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}},"item-89":{"id":89,"type":"EditText","parentId":87,"style":{"enabled":false,"varName":"nb_references","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Number of References detected"}},"item-90":{"id":90,"type":"Divider","parentId":86,"style":{"enabled":true,"varName":null}},"item-91":{"id":91,"type":"Group","parentId":86,"style":{"enabled":true,"varName":null,"preferredSize":[184,0],"margins":[0,0,0,13],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-92":{"id":92,"type":"StaticText","parentId":91,"style":{"enabled":false,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Calls to Refs:","justify":"left","preferredSize":[100,0],"alignment":null,"helpTip":null}},"item-93":{"id":93,"type":"EditText","parentId":91,"style":{"enabled":false,"varName":"nb_calls_to_refs","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"-","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Number of unlinked calls to References detected"}},"item-94":{"id":94,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[361,0],"margins":[0,0,0,0],"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-106":{"id":106,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-107":{"id":107,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-108":{"id":108,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-109":{"id":109,"type":"StaticText","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Correction assistance:","justify":"left","preferredSize":[360,0],"alignment":null,"helpTip":"This section can be used to test the presence of calls to elements (Figures, Tables...) in the text of article\\nElement ranges are also tested.\\nYou can also highlight the calls in the article, to help you to place the corresponding elements."}},"item-110":{"id":110,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[359,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-111":{"id":111,"type":"StaticText","parentId":112,"style":{"enabled":true,"varName":"progression_bar_txt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"[Action in progress...]","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":"This line indicates what the script is actually doing.\\nMore details are written in the log window."}},"item-112":{"id":112,"type":"Group","parentId":27,"style":{"enabled":true,"varName":null,"preferredSize":[360,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-113":{"id":113,"type":"Group","parentId":27,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-114":{"id":114,"type":"StaticText","parentId":123,"style":{"enabled":true,"varName":"","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Logs:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-115":{"id":115,"type":"EditText","parentId":122,"style":{"enabled":true,"varName":"log_text","creationProps":{"noecho":false,"readonly":true,"multiline":true,"scrollable":true,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[361,131],"alignment":null,"helpTip":"The result of the action(s) that you launch appear in this zone:\\nthe \"eport mode\" invert the order of the messages in the box;\\nthe \"follow\" option lets you see the modifications applied by the script progressively ;\\nthe \"clear\" button do what its name suggests."}},"item-116":{"id":116,"type":"Button","parentId":94,"style":{"enabled":false,"varName":"bt_check","text":"Check calls to...","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"Check calls to selected Element (select at least one element)"}},"item-121":{"id":121,"type":"Checkbox","parentId":123,"style":{"enabled":true,"varName":"log_invert","text":"report mode","preferredSize":[0,0],"alignment":null,"helpTip":"Reverse the apparition order of the messages in the log window (If checked, last events appear at the bottom of the frame)"}},"item-122":{"id":122,"type":"Group","parentId":110,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-123":{"id":123,"type":"Group","parentId":110,"style":{"enabled":true,"varName":null,"preferredSize":[361,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-124":{"id":124,"type":"StaticText","parentId":94,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Spotlight  calls:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"Click on this button to detect and highlight the calls to all elements present in the article:\\nFigures appear in red\\nEnglish calls to Tables appear in green, French calls to \"Tableaux\" in light-green;\\nCalls to Appendices appear in light-pink, while calls to \"Annexes\" appear in pink."}},"item-125":{"id":125,"type":"Divider","parentId":94,"style":{"enabled":true,"varName":null}},"item-127":{"id":127,"type":"Button","parentId":94,"style":{"enabled":false,"varName":"bt_spotlight_on","text":"ON","justify":"center","preferredSize":[55,0],"alignment":null,"helpTip":"Highlight calls"}},"item-128":{"id":128,"type":"Button","parentId":94,"style":{"enabled":false,"varName":"bt_spotlight_off","text":"OFF","justify":"center","preferredSize":[55,0],"alignment":null,"helpTip":"Unhighlight calls"}},"item-129":{"id":129,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[361,36],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-131":{"id":131,"type":"StaticText","parentId":136,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"From ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-132":{"id":132,"type":"StaticText","parentId":136,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"to","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-134":{"id":134,"type":"StaticText","parentId":135,"style":{"enabled":true,"varName":"Which","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Delete calls to elements (and renumber following ones):","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"This section can be used after having deleted some new elements (Figures, Tables...) in the article;\\nit updates the calls to these elements;\\nif you try to delete some elements that are present in ranges, the program will inform you and stop."}},"item-135":{"id":135,"type":"Group","parentId":129,"style":{"enabled":true,"varName":null,"preferredSize":[206,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-136":{"id":136,"type":"Group","parentId":129,"style":{"enabled":true,"varName":null,"preferredSize":[358,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-137":{"id":137,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-138":{"id":138,"type":"StaticText","parentId":145,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Shift by","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"This section can be used after having inserted some new elements (Figures, Tables...) in the article;\\ne.g., inserting \"3\" calls from Fig. 5 will do: \"Fig. 5\" -> \"Fig. 8\" \"Fig. 6\" -> \"Fig. 9\", etc. Calls to Figs 1-4 will remain unchanged.\\nif you try to insert some elements that concern ranges (e.g., Figs 3-8), the program will inform you and stop."}},"item-139":{"id":139,"type":"DropDownList","parentId":136,"style":{"enabled":false,"varName":"list_elements_1","text":"DropDownList","listItems":"Select elmt type","preferredSize":[135,0],"alignment":null,"selection":0,"helpTip":"Select the first element to delete"}},"item-140":{"id":140,"type":"DropDownList","parentId":136,"style":{"enabled":false,"varName":"list_elements_1","text":"DropDownList","listItems":"<-- select first","preferredSize":[135,0],"alignment":null,"selection":0,"helpTip":"Select the last element to delete"}},"item-141":{"id":141,"type":"EditText","parentId":145,"style":{"enabled":false,"varName":"step_renumbering","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"center","preferredSize":[35,0],"alignment":null,"helpTip":"Indicate by how many elements (Figures, Tables or Appendices) you wish to shift the calls"}},"item-142":{"id":142,"type":"Button","parentId":145,"style":{"enabled":false,"varName":"bt_renumbering","text":"Go","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-143":{"id":143,"type":"Divider","parentId":1,"style":{"enabled":true,"varName":null}},"item-144":{"id":144,"type":"Button","parentId":24,"style":{"enabled":false,"varName":"bt_delete_links","text":"Delete links","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"Delete previously created links on selected element(s)"}},"item-145":{"id":145,"type":"Group","parentId":129,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-146":{"id":146,"type":"Button","parentId":123,"style":{"enabled":true,"varName":"bt_clear","text":"clear logs","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"Click here to make the log window empty (all its content is permanently lost)."}},"item-147":{"id":147,"type":"Button","parentId":24,"style":{"enabled":false,"varName":"bt_delete_links1","text":"txt_anchor","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"If you launch the linking function more than one time, unused anchors will be created; use the script \"txt_anchor\" to delete them."}},"item-148":{"id":148,"type":"Checkbox","parentId":123,"style":{"enabled":true,"varName":"log_invert","text":"follow mode","preferredSize":[0,0],"alignment":null,"helpTip":"Reverse the apparition order of the messages in the log window (If checked, last events appear at the bottom of the frame)"}},"item-154":{"id":154,"type":"Button","parentId":159,"style":{"enabled":false,"varName":"bt_renumbering","text":"Del./Renum.","justify":"center","preferredSize":[101,0],"alignment":null,"helpTip":"Simulate the deletion of selected calls and the renumbering of following calls"}},"item-156":{"id":156,"type":"StaticText","parentId":145,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"from","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"Indicate the shit (e.g., 2 or -1)"}},"item-157":{"id":157,"type":"DropDownList","parentId":145,"style":{"enabled":false,"varName":"list_elements_1","listItems":"Select elemt type 1st","preferredSize":[129,0],"alignment":null,"selection":0,"helpTip":"Select the item from which you wish to apply the offset."}},"item-158":{"id":158,"type":"Button","parentId":159,"style":{"enabled":false,"varName":"bt_renumbering","text":"OK","justify":"center","preferredSize":[47,0],"alignment":null,"helpTip":"Confirm the deletion of highlighted calls"}},"item-159":{"id":159,"type":"Group","parentId":129,"style":{"enabled":true,"varName":null,"preferredSize":[361,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-160":{"id":160,"type":"Button","parentId":159,"style":{"enabled":false,"varName":"bt_range_exp","text":"Exp","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":"Expand ranges"}},"item-161":{"id":161,"type":"Divider","parentId":129,"style":{"enabled":true,"varName":null}},"item-164":{"id":164,"type":"Button","parentId":159,"style":{"enabled":false,"varName":"bt_range_grp","text":"Grp","justify":"center","preferredSize":[51,0],"alignment":null,"helpTip":"Group ranges"}},"item-165":{"id":165,"type":"Divider","parentId":159,"style":{"enabled":true,"varName":null}},"item-166":{"id":166,"type":"StaticText","parentId":159,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Ranges:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,30,29,26,4,12,21,6,5,20,1,3,2,14,13,143,16,24,144,147,25,31,33,32,37,108,38,39,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,86,87,88,89,90,91,92,93,85,109,94,116,125,124,127,128,137,129,135,134,136,131,139,132,140,159,154,158,165,166,160,164,161,145,138,141,156,157,142,106,27,112,111,113,35,28,107,110,123,114,121,148,146,122,115],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// DIALOG
// ======
var dialog = new Window("palette"); 
    dialog.text = "Link calls to corresponding elements – v1.3"; 
    dialog.preferredSize.width = 60; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 10; 
	// dialog.scrolling=true;

// {multiline: true, scrolling: true}
var statictext1 = dialog.add("group", undefined , {name: "statictext1"}); 
    statictext1.getText = function() { var t=[]; for ( var n=0; n<statictext1.children.length; n++ ) { var text = statictext1.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
    statictext1.preferredSize.width = 360; 
    statictext1.orientation = "column"; 
    statictext1.alignChildren = ["left","center"]; 
    statictext1.spacing = 0; 

    statictext1.add("statictext", undefined, "Link calls to Figs, Tables, Appendices, References and Authorships"); 
	statictext1.helpTip = "Fly over the buttons and titles in this window to show tips on how to use this script\nUse the \u0022help\u0022 button to show the help page in your browser."; 

var divider1 = dialog.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.preferredSize.width = 361; 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","top"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

// CHOIX_ELEMENT
// =============
var choix_element = group1.add("group", undefined, {name: "choix_element"}); 
    choix_element.preferredSize.width = 142; 
    choix_element.preferredSize.height = 80; 
    choix_element.orientation = "column"; 
    choix_element.alignChildren = ["left","top"]; 
    choix_element.spacing = 6; 
    choix_element.margins = [0,0,20,0]; 

var Which = choix_element.add("group", undefined , {name: "Which"}); 
    Which.getText = function() { var t=[]; for ( var n=0; n<Which.children.length; n++ ) { var text = Which.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
    Which.orientation = "column"; 
    Which.alignChildren = ["left","center"]; 
    Which.spacing = 0; 

    Which.add("statictext", undefined, "Select element(s)"); 
    Which.add("statictext", undefined, "to link:"); 
    Which.helpTip = "Select at least one item from the list below to unlock other features of the script."; 

var ck_figures = choix_element.add("checkbox", undefined, undefined, {name: "ck_figures"}); 
    ck_figures.text = "Figures"; 

var ck_tables = choix_element.add("checkbox", undefined, undefined, {name: "ck_tables"}); 
    ck_tables.text = "Tables"; 

var ck_appendices = choix_element.add("checkbox", undefined, undefined, {name: "ck_appendices"}); 
    ck_appendices.text = "Appendices"; 

var ck_references = choix_element.add("checkbox", undefined, undefined, {name: "ck_references"}); 
    ck_references.enabled = true; 
    ck_references.text = "References"; 

// CHOIX_LANGUE_ET_TEST
// ====================
var choix_langue_et_test = group1.add("group", undefined, {name: "choix_langue_et_test"}); 
    choix_langue_et_test.orientation = "column"; 
    choix_langue_et_test.alignChildren = ["left","center"]; 
    choix_langue_et_test.spacing = 10; 
    choix_langue_et_test.margins = 0; 

var Which1 = choix_langue_et_test.add("group", undefined , {name: "Which1"}); 
    Which1.getText = function() { var t=[]; for ( var n=0; n<Which1.children.length; n++ ) { var text = Which1.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
    Which1.orientation = "column"; 
    Which1.alignChildren = ["left","center"]; 
    Which1.spacing = 0; 

    Which1.add("statictext", undefined, "Language of the article"); 
    Which1.add("statictext", undefined, "(click to refresh):"); 
    Which1.helpTip = "Select the language of the article\nThe linking function will only be applied on the calls corresponding to the selected language."; 

// CHOIX_LANGUE
// ============
var choix_langue = choix_langue_et_test.add("group", undefined, {name: "choix_langue"}); 
    choix_langue.orientation = "row"; 
    choix_langue.alignChildren = ["left","top"]; 
    choix_langue.spacing = 10; 
    choix_langue.margins = 0; 
	// choix_langue.visible = false ;

var rb_language = choix_langue.add("radiobutton", undefined, undefined, {name: "rb_language"}); 
    rb_language.text = "French"; 

var rb_language1 = choix_langue.add("radiobutton", undefined, undefined, {name: "rb_language1"}); 
    rb_language1.text = "English"; 
    rb_language1.value = true; 

// CHOIX_LANGUE_ET_TEST
// ====================
var divider2 = choix_langue_et_test.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

// GROUP2
// ======
var group2 = choix_langue_et_test.add("group", undefined, {name: "group2"}); 
    group2.orientation = "column"; 
    group2.alignChildren = ["left","top"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

// CHOIX_TEST
// ==========
var choix_test = group2.add("group", undefined, {name: "choix_test"}); 
    choix_test.orientation = "row"; 
    choix_test.alignChildren = ["left","center"]; 
    choix_test.spacing = 10; 
    choix_test.margins = 0; 

var bt_delete_links = choix_test.add("button", undefined, undefined, {name: "bt_delete_links"}); 
    bt_delete_links.enabled = false; 
    bt_delete_links.helpTip = "Delete previously created links on selected element(s)"; 
    bt_delete_links.text = "Del. links"; 

var bt_delete_links1 = choix_test.add("button", undefined, undefined, {name: "bt_delete_links1"}); 
    bt_delete_links1.enabled = false; 
    bt_delete_links1.helpTip = "Delete created anchors of selected element type(s). Only not linked anchors will be deleted."; 
    bt_delete_links1.text = "Del. anchors"; 

// DIALOG
// ======
var divider3 = dialog.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.alignment = "fill"; 

// BOUTONS
// =======
var boutons = dialog.add("group", undefined, {name: "boutons"}); 
    boutons.preferredSize.width = 361; 
    boutons.orientation = "row"; 
    boutons.alignChildren = ["center","center"]; 
    boutons.spacing = 13; 
    boutons.margins = 5; 

var bt_go = boutons.add("button", undefined, undefined, {name: "bt_go"}); 
    bt_go.enabled = false; 
    bt_go.helpTip = "Link calls to the corresponding selected element(s) (Figures, Tables, Appendices or References).\nFor Tables and Appendices, only the calls that correspond to the language of the article will be linked."; 
    bt_go.text = "Launch linking"; 
    bt_go.preferredSize.width = 163; 

var bt_cancel = boutons.add("button", undefined, undefined, {name: "bt_cancel"}); 
    bt_cancel.enabled = false; 
    bt_cancel.helpTip = "Go out –>[ ]"; 
    bt_cancel.text = "Exit"; 
    bt_cancel.preferredSize.width = 80; 

var bt_help = boutons.add("button", undefined, undefined, {name: "bt_help"}); 
    bt_help.enabled = false; 
    bt_help.helpTip = "Fly over text and buttons to show explanations on the corresponding function;\nClick on this button to show the help page in your browser."; 
    bt_help.text = "Help"; 
    bt_help.preferredSize.width = 80; 

// DIALOG
// ======
var divider4 = dialog.add("panel", undefined, undefined, {name: "divider4"}); 
    divider4.alignment = "fill"; 

// INFORMATIONS
// ============
var informations = dialog.add("group", undefined, {name: "informations"}); 
    informations.preferredSize.width = 361; 
    informations.orientation = "column"; 
    informations.alignChildren = ["left","center"]; 
    informations.spacing = 1; 
    informations.margins = 0; 

var statictext2 = informations.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.helpTip = "In this zone appear only the elements that have not yet been linked;\nonce linked, the number of calls to the linked elements should be \u00220\u0022"; 
    statictext2.text = "Elements and (unlinked) calls detected:"; 

// GROUP3
// ======
var group3 = informations.add("group", undefined, {name: "group3"}); 
    group3.preferredSize.width = 358; 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = [0,0,0,0]; 

// GROUP4
// ======
var group4 = group3.add("group", undefined, {name: "group4"}); 
    group4.preferredSize.width = 150; 
    group4.orientation = "row"; 
    group4.alignChildren = ["left","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var statictext3 = group4.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Figures:"; 
    statictext3.preferredSize.width = 80; 

var nb_figures = group4.add('edittext {justify: "center", properties: {name: "nb_figures"}}'); 
    nb_figures.enabled = false; 
    nb_figures.helpTip = "Number of Figures detected"; 
    nb_figures.text = "-"; 
    nb_figures.preferredSize.width = 50; 

// GROUP3
// ======
var divider5 = group3.add("panel", undefined, undefined, {name: "divider5"}); 
    divider5.alignment = "fill"; 

// GROUP5
// ======
var group5 = group3.add("group", undefined, {name: "group5"}); 
    group5.preferredSize.width = 184; 
    group5.orientation = "row"; 
    group5.alignChildren = ["left","center"]; 
    group5.spacing = 10; 
    group5.margins = [13,0,0,0]; 

var statictext4 = group5.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "Calls to Figures:"; 
    statictext4.preferredSize.width = 100; 

var nb_calls_to_figures = group5.add('edittext {justify: "center", properties: {name: "nb_calls_to_figures"}}'); 
    nb_calls_to_figures.enabled = false; 
    nb_calls_to_figures.helpTip = "Number of unlinked calls to Figures detected"; 
    nb_calls_to_figures.text = "-"; 
    nb_calls_to_figures.preferredSize.width = 50; 

// GROUP6
// ======
var group6 = informations.add("group", undefined, {name: "group6"}); 
    group6.preferredSize.width = 358; 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = [0,0,0,0]; 

// GROUP7
// ======
var group7 = group6.add("group", undefined, {name: "group7"}); 
    group7.preferredSize.width = 150; 
    group7.orientation = "row"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

var statictext5 = group7.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "Tables:"; 
    statictext5.preferredSize.width = 80; 

var nb_tables = group7.add('edittext {justify: "center", properties: {name: "nb_tables"}}'); 
    nb_tables.enabled = false; 
    nb_tables.helpTip = "Number of Tables detected"; 
    nb_tables.text = "-"; 
    nb_tables.preferredSize.width = 50; 

// GROUP6
// ======
var divider6 = group6.add("panel", undefined, undefined, {name: "divider6"}); 
    divider6.alignment = "fill"; 

// GROUP8
// ======
var group8 = group6.add("group", undefined, {name: "group8"}); 
    group8.preferredSize.width = 184; 
    group8.orientation = "row"; 
    group8.alignChildren = ["left","center"]; 
    group8.spacing = 10; 
    group8.margins = [13,0,0,0]; 

var statictext6 = group8.add("statictext", undefined, undefined, {name: "statictext6"}); 
    statictext6.text = "Calls to Tables:"; 
    statictext6.preferredSize.width = 100; 

var nb_calls_to_tables = group8.add('edittext {justify: "center", properties: {name: "nb_calls_to_tables"}}'); 
    nb_calls_to_tables.enabled = false; 
    nb_calls_to_tables.helpTip = "Number of unlinked calls to Tables detected"; 
    nb_calls_to_tables.text = "-"; 
    nb_calls_to_tables.preferredSize.width = 50; 

// GROUP9
// ======
var group9 = informations.add("group", undefined, {name: "group9"}); 
    group9.preferredSize.width = 358; 
    group9.orientation = "row"; 
    group9.alignChildren = ["left","center"]; 
    group9.spacing = 10; 
    group9.margins = [0,0,0,0]; 

// GROUP10
// =======
var group10 = group9.add("group", undefined, {name: "group10"}); 
    group10.preferredSize.width = 150; 
    group10.orientation = "row"; 
    group10.alignChildren = ["left","center"]; 
    group10.spacing = 10; 
    group10.margins = 0; 

var statictext7 = group10.add("statictext", undefined, undefined, {name: "statictext7"}); 
    statictext7.text = "Appendices:"; 
    statictext7.preferredSize.width = 80; 

var nb_appendices = group10.add('edittext {justify: "center", properties: {name: "nb_appendices"}}'); 
    nb_appendices.enabled = false; 
    nb_appendices.helpTip = "Number of Appendices detected"; 
    nb_appendices.text = "-"; 
    nb_appendices.preferredSize.width = 50; 

// GROUP9
// ======
var divider7 = group9.add("panel", undefined, undefined, {name: "divider7"}); 
    divider7.alignment = "fill"; 

// GROUP11
// =======
var group11 = group9.add("group", undefined, {name: "group11"}); 
    group11.preferredSize.width = 184; 
    group11.orientation = "row"; 
    group11.alignChildren = ["left","center"]; 
    group11.spacing = 10; 
    group11.margins = [13,0,0,0]; 

var statictext8 = group11.add("statictext", undefined, undefined, {name: "statictext8"}); 
    statictext8.text = "Calls to Apps:"; 
    statictext8.preferredSize.width = 100; 

var nb_calls_to_appendices = group11.add('edittext {justify: "center", properties: {name: "nb_calls_to_appendices"}}'); 
    nb_calls_to_appendices.enabled = false; 
    nb_calls_to_appendices.helpTip = "Number of unlinked calls to Appendices detected"; 
    nb_calls_to_appendices.text = "-"; 
    nb_calls_to_appendices.preferredSize.width = 50; 

// GROUP12
// =======
var group12 = informations.add("group", undefined, {name: "group12"}); 
    group12.preferredSize.width = 358; 
    group12.orientation = "row"; 
    group12.alignChildren = ["left","center"]; 
    group12.spacing = 10; 
    group12.margins = [0,0,0,0]; 

// GROUP13
// =======
var group13 = group12.add("group", undefined, {name: "group13"}); 
    group13.preferredSize.width = 150; 
    group13.orientation = "row"; 
    group13.alignChildren = ["left","center"]; 
    group13.spacing = 10; 
    group13.margins = 0; 

var statictext9 = group13.add("statictext", undefined, undefined, {name: "statictext9"}); 
    statictext9.enabled = true; 
    statictext9.text = "References:"; 
    statictext9.preferredSize.width = 80; 

var nb_references = group13.add('edittext {justify: "center", properties: {name: "nb_references"}}'); 
    nb_references.enabled = false; 
    nb_references.helpTip = "Number of References detected"; 
    nb_references.text = "-"; 
    nb_references.preferredSize.width = 50; 

// GROUP12
// =======
var divider8 = group12.add("panel", undefined, undefined, {name: "divider8"}); 
    divider8.alignment = "fill"; 

// GROUP14
// =======
var group14 = group12.add("group", undefined, {name: "group14"}); 
    group14.preferredSize.width = 184; 
    group14.orientation = "row"; 
    group14.alignChildren = ["left","center"]; 
    group14.spacing = 10; 
    group14.margins = [13,0,0,0]; 

var statictext10 = group14.add("statictext", undefined, undefined, {name: "statictext10"}); 
    statictext10.enabled = true; 
    statictext10.text = "Calls to Refs:"; 
    statictext10.preferredSize.width = 100; 

var nb_calls_to_refs = group14.add('edittext {justify: "center", properties: {name: "nb_calls_to_refs"}}'); 
    nb_calls_to_refs.enabled = false; 
    nb_calls_to_refs.helpTip = "Number of unlinked calls to References detected"; 
    nb_calls_to_refs.text = "-"; 
    nb_calls_to_refs.preferredSize.width = 50; 

// DIALOG
// ======
var divider9 = dialog.add("panel", undefined, undefined, {name: "divider9"}); 
    divider9.alignment = "fill"; 

var group_correction = dialog.add("group", undefined, {name: "group_correction"}); 
group_correction.orientation = "row"; 
// group_correction.preferredSize.width = 184; 

var statictext11 = group_correction.add("statictext", undefined, undefined, {name: "statictext11"}); 
    statictext11.helpTip = "This section can be used to test the presence of calls to elements (Figures, Tables...) in the text of article\nElement ranges are also tested.\nYou can also highlight the calls in the article, to help you to place the corresponding elements."; 
    statictext11.text = "Call management:"; 
    statictext11.preferredSize.width = 145;

var rb_author = group_correction.add("radiobutton", undefined, undefined, {name: "rb_author"}); 
    rb_author.text = "References"; 
    rb_author.value = true; 
	rb_author.helpTip = "Select for checking references (try to link calls WITHOUT comma to references)"; 
	rb_author.preferredSize.width = 90;
	rb_author.visible=false;
	
var rb_author_2 = group_correction.add("radiobutton", undefined, undefined, {name: "rb_author"}); 
    rb_author_2.text = "Authorships"; 
    rb_author_2.value = false ; 	
	rb_author_2.helpTip = "Select for checking authorships (try to link calls WITH comma to references)"; 
	rb_author_2.preferredSize.width = 100;
	rb_author_2.visible=false;

// GROUP15
// =======
var group15 = dialog.add("group", undefined, {name: "group15"}); 
    group15.preferredSize.width = 361; 
    group15.orientation = "row"; 
    group15.alignChildren = ["left","center"]; 
    group15.spacing = 5; 
    group15.margins = [0,0,0,0]; 

var bt_check = group15.add("button", undefined, undefined, {name: "bt_check"}); 
    bt_check.enabled = false; 
    bt_check.helpTip = "Check calls to selected Element (select at least one element)"; 
    bt_check.text = "Check calls/refs"; 

var divider10 = group15.add("panel", undefined, undefined, {name: "divider10"}); 
    divider10.alignment = "fill"; 

var statictext12 = group15.add("statictext", undefined, undefined, {name: "statictext12"}); 
    statictext12.helpTip = "Click on this button to detect and highlight the calls to all elements present in the article (select the call type(s) first):\nCalls to Figures -> red\nEnglish calls to Tables -> green\nFrench calls to \u0022Tableaux\u0022 -> light-green\nCalls to Appendices -> light-pink\nCalls to \u0022Annexes\u0022 -> pink\nCalls to References -> purple."; 
    statictext12.text = "Spotlight calls:"; 

var bt_spotlight_on = group15.add("button", undefined, undefined, {name: "bt_spotlight_on"}); 
    bt_spotlight_on.enabled = false; 
    bt_spotlight_on.helpTip = "Highlight calls"; 
    bt_spotlight_on.text = "ON"; 
    bt_spotlight_on.preferredSize.width = 40; 

var bt_spotlight_off = group15.add("button", undefined, undefined, {name: "bt_spotlight_off"}); 
    bt_spotlight_off.enabled = false; 
    bt_spotlight_off.helpTip = "Unhighlight calls"; 
    bt_spotlight_off.text = "OFF"; 
    bt_spotlight_off.preferredSize.width = 40; 
	
var bt_add_ref = group15.add("button", undefined, undefined, {name: "bt_add_ref"}); 
    bt_add_ref.enabled = false; 
    bt_add_ref.helpTip = "Highlight a call manually; if it's a complete call (author+year), the whole occurrences in the article will be highlighted; otherwise, only the selection will be highlighted."; 
    bt_add_ref.text = "AddCall"; 
    bt_add_ref.preferredSize.width = 55; 	
	
	

// DIALOG
// ======
var divider11 = dialog.add("panel", undefined, undefined, {name: "divider11"}); 
    divider11.alignment = "fill"; 

// GROUP16
// =======
var group16 = dialog.add("group", undefined, {name: "group16"}); 
    group16.preferredSize.width = 361; 
    group16.preferredSize.height = 36; 
    group16.orientation = "column"; 
    group16.alignChildren = ["left","center"]; 
    group16.spacing = 10; 
    group16.margins = 0; 

// GROUP17
// =======
var group17 = group16.add("group", undefined, {name: "group17"}); 
    group17.preferredSize.width = 206; 
    group17.orientation = "row"; 
    group17.alignChildren = ["left","center"]; 
    group17.spacing = 10; 
    group17.margins = 0; 

var Which2 = group17.add("statictext", undefined, undefined, {name: "Which2"}); 
    Which2.helpTip = "This section can be used after having deleted some new elements (Figures, Tables...) in the article;\nit updates the calls to these elements;\nif you try to delete some elements that are present in ranges, the program will inform you and stop."; 
    Which2.text = "Delete calls to elements (and renumber following ones):"; 

// GROUP18
// =======
var group18 = group16.add("group", undefined, {name: "group18"}); 
    group18.preferredSize.width = 358; 
    group18.orientation = "row"; 
    group18.alignChildren = ["left","center"]; 
    group18.spacing = 10; 
    group18.margins = 0; 

var statictext13 = group18.add("statictext", undefined, undefined, {name: "statictext13"}); 
    statictext13.text = "From "; 

var list_elements_1_array = ["Select elmt type"]; 
var list_elements_1 = group18.add("dropdownlist", undefined, undefined, {name: "list_elements_1", items: list_elements_1_array}); 
    list_elements_1.enabled = false; 
    list_elements_1.helpTip = "Select the first element to delete"; 
    list_elements_1.selection = 0; 
    list_elements_1.preferredSize.width = 135; 

var statictext14 = group18.add("statictext", undefined, undefined, {name: "statictext14"}); 
    statictext14.text = "to"; 

var list_elements_2_array = ["<-- select first"]; 
var list_elements_2 = group18.add("dropdownlist", undefined, undefined, {name: "list_elements_2", items: list_elements_2_array}); 
    list_elements_2.enabled = false; 
    list_elements_2.helpTip = "Select the last element to delete"; 
    list_elements_2.selection = 0; 
    list_elements_2.preferredSize.width = 135; 

// GROUP19
// =======
var group19 = group16.add("group", undefined, {name: "group19"}); 
    group19.preferredSize.width = 361; 
    group19.orientation = "row"; 
    group19.alignChildren = ["left","center"]; 
    group19.spacing = 10; 
    group19.margins = 0; 

var bt_renumbering = group19.add("button", undefined, undefined, {name: "bt_renumbering"}); 
    bt_renumbering.enabled = false; 
    bt_renumbering.helpTip = "Simulate the deletion of selected calls and the renumbering of following calls"; 
    bt_renumbering.text = "Del./Renum."; 
    bt_renumbering.preferredSize.width = 101; 

var bt_renumbering1 = group19.add("button", undefined, undefined, {name: "bt_renumbering1"}); 
    bt_renumbering1.enabled = false; 
    bt_renumbering1.helpTip = "Confirm the deletion of highlighted calls"; 
    bt_renumbering1.text = "✓"; 
    bt_renumbering1.preferredSize.width = 47; 

var divider12 = group19.add("panel", undefined, undefined, {name: "divider12"}); 
    divider12.alignment = "fill"; 

var statictext15 = group19.add("statictext", undefined, undefined, {name: "statictext15"}); 
    statictext15.text = "Ranges:"; 
	statictext15.helpTip = "These both buttons let you expand and group element ranges found in text; the text is not modified (no deletion, no insertion)"; 

var bt_range_exp = group19.add("button", undefined, undefined, {name: "bt_range_exp"}); 
    bt_range_exp.enabled = false; 
    bt_range_exp.helpTip = "Expand ranges"; 
    bt_range_exp.text = "Exp"; 
    bt_range_exp.preferredSize.width = 50; 

var bt_range_grp = group19.add("button", undefined, undefined, {name: "bt_range_grp"}); 
    bt_range_grp.enabled = false; 
    bt_range_grp.helpTip = "Group ranges"; 
    bt_range_grp.text = "Grp"; 
    bt_range_grp.preferredSize.width = 51; 

// GROUP16
// =======
var divider13 = group16.add("panel", undefined, undefined, {name: "divider13"}); 
    divider13.alignment = "fill"; 

// GROUP20
// =======
var group20 = group16.add("group", undefined, {name: "group20"}); 
    group20.orientation = "row"; 
    group20.alignChildren = ["left","center"]; 
    group20.spacing = 10; 
    group20.margins = 0; 

var statictext16 = group20.add("statictext", undefined, undefined, {name: "statictext16"}); 
    statictext16.helpTip = "This section can be used after having inserted some new elements (Figures, Tables...) in the article;\ne.g., inserting \u00223\u0022 calls from Fig. 5 will change \u0022Fig. 5\u0022 into \u0022Fig. 8\u0022 \u0022Fig. 6\u0022 into \u0022Fig. 9\u0022, etc. Calls to Figs 1-4 will remain unchanged.\nThe program takes into account ranges (e.g., Figs 3-8)."; 
    statictext16.text = "Shift calls by"; 

var step_renumbering = group20.add('edittext {justify: "center", properties: {name: "step_renumbering"}}'); 
    step_renumbering.enabled = false; 
    step_renumbering.helpTip = "Indicate by how many elements (Figures, Tables or Appendices) you wish to shift the calls"; 
    step_renumbering.text = "1"; 
    step_renumbering.preferredSize.width = 35; 

var statictext17 = group20.add("statictext", undefined, undefined, {name: "statictext17"}); 
    statictext17.helpTip = "Indicate the shit (e.g., 2 or -1)"; 
    statictext17.text = "from"; 

var list_elements_3_array = ["Select elemt type 1st"]; 
var list_elements_3 = group20.add("dropdownlist", undefined, undefined, {name: "list_elements_3", items: list_elements_3_array}); 
    list_elements_3.enabled = false; 
    list_elements_3.helpTip = "Select the item from which you wish to apply the offset."; 
    list_elements_3.selection = 0; 
    list_elements_3.preferredSize.width = 135; 

var bt_renumbering2 = group20.add("button", undefined, undefined, {name: "bt_renumbering2"}); 
    bt_renumbering2.enabled = false; 
    bt_renumbering2.text = "Go"; 
    bt_renumbering2.justify = "left"; 
	bt_renumbering2.preferredSize.width = 35; 

// DIALOG
// ======
var divider14 = dialog.add("panel", undefined, undefined, {name: "divider14"}); 
    divider14.alignment = "fill"; 

// GROUP21
// =======
var group21 = dialog.add("group", undefined, {name: "group21"}); 
    group21.preferredSize.width = 361; 
    group21.orientation = "column"; 
    group21.alignChildren = ["left","center"]; 
    group21.spacing = 10; 
    group21.margins = 0; 

// GROUP22
// =======
var group22 = group21.add("group", undefined, {name: "group22"}); 
    group22.preferredSize.width = 360; 
    group22.orientation = "row"; 
    group22.alignChildren = ["left","center"]; 
    group22.spacing = 10; 
    group22.margins = 0; 

var progression_bar_txt = group22.add("statictext", undefined, undefined, {name: "progression_bar_txt"}); 
    progression_bar_txt.helpTip = "This line indicates what the script is actually doing.\nMore details are written in the log window."; 
    progression_bar_txt.text = "[Action in progress...]"; 
    progression_bar_txt.preferredSize.width = 250; 

// GROUP23
// =======
var group23 = group21.add("group", undefined, {name: "group23"}); 
    group23.orientation = "row"; 
    group23.alignChildren = ["left","center"]; 
    group23.spacing = 10; 
    group23.margins = 0; 

var progression_bar = group23.add("statictext", undefined, undefined, {name: "progression_bar"}); 
    progression_bar.text = "Progression:"; 

var progressbar1 = group23.add("progressbar", undefined, undefined, {name: "progressbar1"}); 
    progressbar1.helpTip = "The progression bar shows the percentage of finalisation of the running task."; 
    progressbar1.maxvalue = 100; 
    progressbar1.value = 50; 
    progressbar1.preferredSize.width = 263; 
    progressbar1.preferredSize.height = 8; 

// DIALOG
// ======
var divider15 = dialog.add("panel", undefined, undefined, {name: "divider15"}); 
    divider15.alignment = "fill"; 

// GROUP24
// =======
var group24 = dialog.add("group", undefined, {name: "group24"}); 
    group24.preferredSize.width = 359; 
    group24.orientation = "column"; 
    group24.alignChildren = ["left","top"]; 
    group24.spacing = 10; 
    group24.margins = 0; 

// GROUP25
// =======
var group25 = group24.add("group", undefined, {name: "group25"}); 
    group25.preferredSize.width = 361; 
    group25.orientation = "row"; 
    group25.alignChildren = ["left","center"]; 
    group25.spacing = 10; 
    group25.margins = 0; 

var statictext18 = group25.add("statictext", undefined, undefined, {name: "statictext18"}); 
    statictext18.text = "Logs:"; 

var log_invert = group25.add("checkbox", undefined, undefined, {name: "log_invert"}); 
    log_invert.helpTip = "Reverse the apparition order of the messages in the log window (If checked, last events appear at the bottom of the frame)"; 
    log_invert.text = "report mode"; 

var log_invert1 = group25.add("checkbox", undefined, undefined, {name: "log_invert1"}); 
    log_invert1.helpTip = "When launching a script, the program will show you the changes applied as you go along, but it will take more time to run the action."; 
    log_invert1.text = "follow mode"; 

var bt_clear = group25.add("button", undefined, undefined, {name: "bt_clear"}); 
    bt_clear.helpTip = "Click here to make the log window empty (all its content is permanently lost)."; 
    bt_clear.text = "clear"; 
	bt_clear.preferredSize.width = 45; 
	
var bt_undo = group25.add("button", undefined, undefined, {name: "bt_undo"}); 
    bt_undo.helpTip = "Undo last operation"; 
    bt_undo.text = "\u2b6f"; 	
	bt_undo.preferredSize.width = 25; 
	
var bt_redo = group25.add("button", undefined, undefined, {name: "bt_redo"}); 
    bt_redo.helpTip = "Redo next canceled operation"; 
    bt_redo.text = "\u2b6e"; 	
	bt_redo.preferredSize.width = 25; 	
	
// GROUP26
// =======
var group26 = group24.add("group", undefined, {name: "group26"}); 
    group26.orientation = "row"; 
    group26.alignChildren = ["left","center"]; 
    group26.spacing = 10; 
    group26.margins = 0; 

var log_text = group26.add('edittext {properties: {name: "log_text", readonly: true, multiline: true, scrollable: true}}'); 
    log_text.helpTip = "The result of the action(s) that you launch appear in this zone:\nthe \u0022eport mode\u0022 invert the order of the messages in the box;\nthe \u0022follow\u0022 option lets you see the modifications applied by the script progressively ;\nthe \u0022clear\u0022 button do what its name suggests."; 
    log_text.preferredSize.width = 361; 
    log_text.preferredSize.height = 131; 

dialog.show();

