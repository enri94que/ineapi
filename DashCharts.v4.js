google.charts.load ('current', { 'packages': ['line', 'controls', 'table','corechart'] });
google.charts.load ('current', { 'packages': ['line', 'controls', 'table','corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

//PARSINgoogle.charts.setOnLoadCallback(drawVisualization);
      
      var pibcall = [];
      var pibdatecall = [];
      var pibreacall = [];
      var pibrealdatecall = [];
      var pibagrcall = [];
      var pibagridatecall = [];       
      var pibincall = [];
      var pibinddatecall = [];;      
      var pibsercall = [];     
      var pibserdatecall = [];        
      var laboralcall = [];     
      var laboraldatecall = []; 
      var cnncall = [];           
      var cnndatecall = [];           
      var IPCdatecall = [];
      var IPCcall = [];
                 

function drawVisualization() 
{
  aping("IPC", "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/22344?tip=AM&", IPCcall, IPCdatecall, 0)  
  aping("Cifra Neta de Negocios", "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/27142?tip=AM&", cnncall, cnndatecall, 0)
  aping("Mercado laboral", "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/3996?tip=AM&", laboralcall, laboraldatecall, 159)
  aping("PIB", "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/30678?tip=AM&", pibcall, pibdatecall, 0)   
  aping("PIB Real", "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/30678?tip=AM&", pibreacall, pibrealdatecall, 48)    
  aping("PIB Sector 1º", "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/30678?tip=AM&", pibagrcall, pibagridatecall, 3)    
  aping("PIB Sector 2º", "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/30678?tip=AM&", pibincall, pibinddatecall, 6)    
  aping("PIB Sector 3º", "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/30678?tip=AM&", pibsercall, pibserdatecall, 15)             


  function aping (tag, link, indicador, fecha, idx){

           $.ajax({
              url: link,
              dataType: "json",
              type: "GET",
              contentType: "application/json; charset=utf-8",
              title: tag,
              chartType: "Linechart",  
              async: false,
              success: function (data)
                  {  
                    // Loop through each data and populate the array.                  
                  if (data.length > 0) 
                        {
                      $.each(data[idx].Data, function (index, value, array) 
                              {
                           indicador.push([value.Valor])
                          })
                         };

                  if (data.length > 0) 
                        {
                      $.each(data[idx].Data, function (index, value, array) 
                              {
                           fecha.push([value.Fecha])
                          })
                         }
                  },
            error: function (XMLHttpRequest, textStatus, errorThrown)   
                {
                    alert('Got an Error');
                },
            });
  }

      var repeated = ['blank'];

      var totpib;
      var totpibdate;
      var totpibrea;
      var totpibreadate;
      var totpibagr;
      var totpibagrdate;
      var totpibin;
      var totpibindate;
      var totpibser;
      var totpibserdate
      var totlaboral;
      var totlaboraldate      
      var totcnn;
      var totcnndate
      var totipc;
      var totipcdate

      var pib = new Array();
      var pibdate = new Array();
      var pibrea = new Array();
      var pibrealdate = new Array(); 
      var pibagr = new Array();
      var pibagridate = new Array();            
      var pibin = new Array();
      var pibinddate = new Array();          
      var pibser = new Array();
      var pibserdate = new Array();
      var laboral = new Array();
      var laboraldate = new Array();             
      var cnn = new Array();
      var cnndate = new Array();      
      var IPC = new Array();
      var IPCdate = new Array();      

function repeating(len,ind,tag,tot){

    repeatArray(repeated, 500-ind.length);      
    function repeatArray(arr, count) {
        var ln = arr.length;        
        for(i=0; i<count; i++) {
         len.push(arr[i%ln]);
        }
     }  
    tot = ind.concat(len)
    document.getElementById(tag).innerHTML = tot.length    
}    

    repeating(pib, pibcall,'rowsa1', totpib); 
    repeating(pibdate, pibdatecall,'rowsa1', totpibdate); 

    repeating(pibrea, pibreacall, 'rowsa2', totpibrea )    
    repeating(pibrealdate, pibrealdatecall, 'rowsa2', totpibreadate )   

    repeating(pibagr, pibagrcall, 'rowsa2', totpibagr )    
    repeating(pibagridate, pibagridatecall, 'rowsa2', totpibagrdate )          

    repeating(pibin, pibincall, 'rowsa3', totpibin )
    repeating(pibinddate, pibinddatecall, 'rowsa3', totpibindate )

    repeating(pibser, pibsercall, 'rowsa4', totpibser)
    repeating(pibserdate, pibserdatecall, 'rowsa4', totpibserdate)

    repeating(laboral, laboralcall, 'rowsa5', totlaboral)
    repeating(laboraldate, laboraldatecall, 'rowsa5', totlaboraldate )       
    
    repeating(cnn, cnncall, 'rowsa5', totcnn )
    repeating(cnndate, cnndatecall, 'rowsa5', totcnndate )       

    repeating(IPC, IPCcall, 'rowsa6', totipc )   
    repeating(IPCdate, IPCdatecall, 'rowsa6', totipcdate )                


  var tabledata = new google.visualization.DataTable();
      tabledata.addColumn('date','PIBdater');    
      tabledata.addColumn('number','PIB');      
      tabledata.addColumn('date','PIBrealdated');      
      tabledata.addColumn('number','PIB Real');
      tabledata.addColumn('date','PIBagridated');      
      tabledata.addColumn('number','PIB Sº 1');  
      tabledata.addColumn('date','Date');      
      tabledata.addColumn('number','PIB Sº 2'); 
      tabledata.addColumn('date','Date');      
      tabledata.addColumn('number','PIB Sº 3');   
      tabledata.addColumn('date','lab Date');           
      tabledata.addColumn('number','Paro');               
      tabledata.addColumn('date','cnn Date');       
      tabledata.addColumn('number','Cifra Neta de Negocios');                 
      tabledata.addColumn('date', 'date');  
      tabledata.addColumn('number','number');
      tabledata.addColumn('number','rows');

    for (i in pib){
      var date_pib_parsed     = pibdate.flatMap(x => [x, x, x]);
      var nume_pib_parsed     = pib.flatMap(x => [x, x, x]);
      var date_pibreal_parsed = pibrealdate.flatMap(x => [x, x, x]);
      var nume_pibreal_parsed = pibrea.flatMap(x => [x, x, x]);
      var date_pibagri_parsed = pibagridate.flatMap(x => [x, x, x]);
      var nume_pibagri_parsed = pibagr.flatMap(x => [x, x, x]);
      var date_pibind_parsed  = pibinddate.flatMap(x => [x, x, x]);
      var nume_pibind_parsed  = pibin.flatMap(x => [x, x, x]);                  
      var date_pibser_parsed  = pibserdate.flatMap(x => [x, x, x]);
      var nume_pibser_parsed  = pibser.flatMap(x => [x, x, x]);
      var date_labor_parsed   = laboraldate.flatMap(x => [x, x, x]);      
      var nume_labor_parsed   = laboral.flatMap(x => [x, x, x]); 
      var date_icne_parsed   = cnndate.flatMap(x => [x]);      
      var nume_icne_parsed   = cnn.flatMap(x => [x]);    
          
      var date_pib_format = new Date(date_pib_parsed[i]);
      var date_pibR_format = new Date(date_pibreal_parsed[i]);
      var date_PIBS1_format = new Date(date_pibagri_parsed[i]);     
      var date_PIBS2_format = new Date(date_pibind_parsed[i]);
      var date_PIBS3_format = new Date(date_pibser_parsed[i]);  
      var date_lab_format = new Date(date_labor_parsed[i]);          
      var date_icne_format = new Date(date_icne_parsed[i]);


      var PIBdater_01 = new Date(date_pib_format.getFullYear(i), date_pib_format.getMonth(i)+3, 0) 
      var PIBRdate_03 = new Date(date_pibR_format.getFullYear(i), date_pibR_format.getMonth(i)+3, 0)  
      var PIBS1date_05 = new Date(date_PIBS1_format.getFullYear(i), date_PIBS1_format.getMonth(i)+3, 0) 
      var PIBS2date_07 = new Date(date_PIBS2_format.getFullYear(i), date_PIBS2_format.getMonth(i)+3, 0)       
      var PIBS3date_09 = new Date(date_PIBS3_format.getFullYear(i), date_PIBS3_format.getMonth(i)+3, 0)
      var labdate_11 = new Date(date_lab_format.getFullYear(i), date_lab_format.getMonth(i)+3, 0)   
      var icnedate_13 = new Date(date_icne_format.getFullYear(i), date_icne_format.getMonth(i)+3, 0)
  
                               
      
      var PIB_02  = parseFloat(nume_pib_parsed[i]);         
      var PIBR_04  = parseFloat(nume_pibreal_parsed[i]);
      var PIBS1_06  = parseFloat(nume_pibagri_parsed[i]);        
      var PIBS2_08  = parseFloat(nume_pibind_parsed[i]);        
      var PIBS3_10  = parseFloat(nume_pibser_parsed[i]);
      var paro_12 = parseFloat(nume_labor_parsed[i]);   
      var icne_14  = parseFloat(nume_icne_parsed[i]);    
           
      var j = i++;

      var date_ipc_parsed   = IPCdate.flatMap(x => [x]); 
      var nume_IPCparsed     = IPC.flatMap(x => [x]);  
      var date_ipc_format = new Date(date_ipc_parsed[i]);  
      var ipcdate_15 = new Date(date_ipc_format.getFullYear(i), date_ipc_format.getMonth(i)+3, 0)    
      var IPCnum_16 = parseFloat(nume_IPCparsed[i]);


      tabledata.addRow([PIBdater_01, PIB_02, PIBRdate_03, PIBR_04, PIBS1date_05, PIBS1_06, PIBS2date_07, PIBS2_08, PIBS3date_09, PIBS3_10, labdate_11, paro_12, icnedate_13, icne_14, ipcdate_15, IPCnum_16, j]);
      };

     var val_format = new google.visualization.NumberFormat(
           {suffix:'€', negativeColor: 'red', decimalSymbol: ',', groupingSymbol:'.', fractionDigits:'0',         
           });
     var var_format = new google.visualization.NumberFormat(
           {suffix:'%', negativeColor: 'red', decimalSymbol: ',', fractionDigits:'2',         
           });
     var arrow_formatter = new google.visualization.ArrowFormat();

     val_format.format(tabledata, 1);
     val_format.format(tabledata, 3);
     val_format.format(tabledata, 5);
     val_format.format(tabledata, 7);
     val_format.format(tabledata, 9);                    
     var_format.format(tabledata, 11);
     var_format.format(tabledata, 13);     
     var_format.format(tabledata, 1);     
     arrow_formatter.format(tabledata, 1);      


// 0: IPCdate
// 1: IPCnum
// 2: PIBdater
// 3: PIBnum
// 4: PIBrealdated
// 5: PIBrealnum
// 6: PIBagridated
// 7: PIBagrinum
// 8: PIBinddated
// 9: PIBindnum
// 10: PIBservdated
// 11: PIBservnum
// 12: j

       var controlA = new google.visualization.ControlWrapper({
                  'controlType': 'ChartRangeFilter',
                    'containerId': 'controlA',
                    'state': {'range': {'start': new Date(2020, 1, 1), 'end': new Date()}},
                    'options': 
                          {
                          // Filter by the date axis.
                          'filterColumnIndex': 1,
                          'ui': 
                              { 'height': '50%',
                                'chartType': 'LineChart',
                                'enableInteractivity': false, 
                                'chartOptions': 
                                      {
                                      'colors': ['black'],
                                      'chartArea': {'width': '90%', 'height':'70%'},
                                      'hAxis': {
                                          'baselineColor': 'red', 
                                          'format': "",
                                          'gridlines': {
                                              'color': 'white', 
                                              'minSpacing': 130, 
                                              'count': -1}
                                            },
                                       'vAxis': {
                                                    'baselineColor': 'white', 
                                                    'format': "",
                                                    'gridlines': {
                                                        'color': 'white', 
                                                        'minSpacing': 130, 
                                                        'count': -1}
                                                      },                                            
                                        },
                                  'chartView': 
                                      {
                                      'type': 'date',
                                      'columns': [1, 2],
                                      },
                                  'minRangeSize': 7889400000,
                                }
                          },
      });

//DRAWING CHARTS

      var gencolor = 'black';
      var genfont = 'Palatino Linotype';
      var gensize = 16;
      var genbold = false;


      var pibcolor = '#1a237e';
      var ipccolor = '#d43785';
      var parocolor = '#a52714';
      var cnncolor = '#097138';  

//PIB
  
      var chart1 = new google.visualization.ChartWrapper({
              'chartType': 'AreaChart',
              'containerId': 'Chart1',
              'dataTable': tabledata,       
              'options': {
                        // Use the same chart area width as the control for axis alignment.
                        'filterColumnLabel': "PIB",                        
                        'chartArea': {'height':'auto', 'width':'auto', backgroundColor: ''},
                        'hAxis': {'slantedText': false,
                                  'title': '',
                                  'textStyle': {
                                          'color': gencolor,
                                          'fontSize': gensize,
                                          'fontName': genfont,
                                          'bold': genbold,
                                          'italic': false,
                                            },
                                  'gridlines': {color: gencolor, minSpacing: 130, count: -1},
                                  'minorGridlines': {color: 'white', count:80}                             
                                },
                        'legend': {'position': 'none'},
                        'pointSize': 0,
                        'lineWidth': 3,
                        'backgroundColor': {
                                            fill:'transparent' },
                         
                        'vAxis': {

                                'textStyle': {
                                              'color': gencolor,
                                              'fontSize': gensize,
                                              'bold': genbold
                                              },
                                'titleTextStyle': {
                                                  'color': gencolor,
                                                  'fontSize': gensize,
                                                  'bold': genbold,
                                                  },
                                'gridlines': {color: gencolor, minSpacing: 40, count: 1},                   
                                },                  
                        'colors': [pibcolor, '#097138'],
                        'baseline': 3,
                        'crosshair': {trigger: 'selection', opacity: 0.5},                                        
                        'trendlines': {0: {visibleInLegend: true, 
                                            color: pibcolor,
                                            type: 'exponential', 
                                            degree: 3, 
                                            lineWidth: 2, 
                                            opacity: 0.3,
                                            enableInteractivity : false}
                                      },
                        'areaOpacity':0.1 , 
                        'backgroundColor.stroke': 'black', 
                        'allowHtml': true,             
                        },

               // Convert the first column from 'date' to 'string'.
              'view': {
                  'columns':  [1, 2]
                   }
               });

//TASA DE PARO
      var chart2 = new google.visualization.ChartWrapper({
              'chartType': 'AreaChart',
              'containerId': 'chart2',
              'dataTable': tabledata,
              'options': {
                        // Use the same chart area width as the control for axis alignment.
                        'filterColumnLabel': "Tasa de paro",                        
                        'chartArea': {'height':'auto', 'width':'auto', backgroundColor: ''},
                        'hAxis': {'slantedText': false,
                                  'title': '',
                                  'textStyle': {
                                          'color': gencolor,
                                          'fontSize': gensize,
                                          'fontName': genfont,
                                          'bold': genbold,
                                          'italic': false,
                                            },
                                  'gridlines': {color: gencolor, minSpacing: 130, count: -1},
                                  'minorGridlines': {color: 'white', count:80}                                                          
                                },
                        'legend': {'position': 'none'},
                        'pointSize': 0,
                        'lineWidth': 3,
                        'backgroundColor': {
                                            fill:'transparent' },
                         
                        'vAxis': {

                                'textStyle': {
                                              'color': gencolor,
                                              'fontSize': gensize,
                                              'bold': genbold
                                              },
                                'titleTextStyle': {
                                                  'color': gencolor,
                                                  'fontSize': gensize,
                                                  'bold': genbold,
                                                  },
                                'gridlines': {color: gencolor, minSpacing: 40, count: 1},
                                'minorgridlines': {color: 'white', minSpacing: 40, count: 0},                                                  
                                },                    
                        'colors': [parocolor, '#097138'],
                        'baseline': 3,
                        'crosshair': {trigger: 'selection', opacity: 0.5},
                        'trendlines': {0: {visibleInLegend: true, 
                                            color: parocolor,
                                            type: 'exponential', 
                                            degree: 3, 
                                            lineWidth: 2, 
                                            opacity: 0.3,
                                            enableInteractivity : false}
                                      },                                                                
                        'areaOpacity':0.1 , 
                        'backgroundColor.stroke': 'black',
                        'allowHtml': true,                                      
                        },
              'view': {
                      'columns':  [9, 10]
                      },
              });
//CNN           
      var chart3 = new google.visualization.ChartWrapper({
              'chartType': 'AreaChart',
              'containerId': 'chart3',
              'dataTable': tabledata,
              'options': {
                        // Use the same chart area width as the control for axis alignment.
                        'filterColumnLabel': "PIB Agro",                        
                        'chartArea': {'height': 'auto', 'width': 'auto'},
                        'hAxis': {'slantedText': false,
                                'title': '',
                                'textStyle': {
                                          'color': gencolor,
                                          'fontSize': gensize,
                                          'fontName': genfont,
                                          'bold': genbold,
                                          'italic': false,
                                            },
                                'gridlines': {color: gencolor, minSpacing: 130, count: 1},
                                'minorGridlines': {color: 'white', count:140}                      
                                },
                        'vAxis': {
                                'textStyle': {
                                              'color': gencolor,
                                              'fontSize': gensize,
                                              'bold': genbold
                                              },
                                'titleTextStyle': {
                                                  'color': gencolor,
                                                  'fontSize': gensize,
                                                  'bold': genbold,
                                                  },
                                'gridlines': {color: gencolor, minSpacing: 40, count: 1},    
                                },
                        'colors': [cnncolor, '#097138'],
                        'legend': {'position': 'none'},
                        'lineWidth': 3,
                        'backgroundColor': { 
                                            fill:'transparent' },
                        'crosshair': {trigger: 'selection', opacity: 0.5}, 
                        'trendlines': { 0: {visibleInLegend: true, 
                                            color: cnncolor,
                                            type: 'exponential', 
                                            degree: 3, 
                                            lineWidth: 2, 
                                            opacity: 0.3,
                                            enableInteractivity : false}
                                      },
                        'allowHtml': true,                                       
                        },                       
                
                'view': {
                    'columns':  [11,12]
                     }
               })


// IPC
      var chart4 = new google.visualization.ChartWrapper({      
              'chartType': 'AreaChart',
              'containerId': 'chart4',
              'dataTable': tabledata,              
              'options': {
                        // Use the same chart area width as the control for axis alignment.
                        'filterColumnLabel': "cnn Date",                        
                        'chartArea': {'height':'auto', 'width':'auto', backgroundColor: ''},
                        'hAxis': {'slantedText': false,
                                  'title': '',
                                  'textStyle': {
                                          'color': gencolor,
                                          'fontSize': gensize,
                                          'fontName': genfont,
                                          'bold': genbold,
                                          'italic': false,
                                            },
                                  'gridlines': {color: gencolor, minSpacing: 130, count: -1},
                                  'minorGridlines': {color: 'white', count:80}                             
                                },
                        'legend': {'position': 'none'},
                        'pointSize': 0,
                        'lineWidth': 3,
                        'backgroundColor': {
                                            fill:'transparent' },                         
                        'vAxis': {

                                'textStyle': {
                                              'color': gencolor,
                                              'fontSize': gensize,
                                              'bold': genbold
                                              },
                                'titleTextStyle': {
                                                  'color': gencolor,
                                                  'fontSize': gensize,
                                                  'bold': genbold,
                                                  },
                                'gridlines': {color: gencolor, minSpacing: 40, count: 1},               
                                },                    
                        'colors': [ipccolor, '#097138'],
                        'baseline': 3,
                        'crosshair': {trigger: 'selection', opacity: 0.5},                                        
                        'trendlines': {0: {visibleInLegend: true, 
                                            color: ipccolor,
                                            type: 'exponential', 
                                            degree: 3, 
                                            lineWidth: 2, 
                                            opacity: 0.3,
                                            enableInteractivity : false}
                                      },
                        'areaOpacity':0.1 , 
                        'backgroundColor.stroke': 'black',  
                        'allowHtml': true,                                    
                        },
               // Convert the first column from 'date' to 'string'.
              'view': {
                  'columns':  [13, 14]
                   }
               });


      var chart5 = new google.visualization.ChartWrapper({
              'chartType': 'AreaChart',
              'containerId': 'chart5',
              'dataTable': tabledata,
              'options': {
                        // Use the same chart area width as the control for axis alignment.
                        'filterColumnLabel': "PIB",                        
                        'chartArea': {'height':'auto', 'width':'auto', backgroundColor: ''},
                        'hAxis': {'slantedText': false,
                                  'title': '',
                                  'textStyle': {
                                          'color': gencolor,
                                          'fontSize': gensize,
                                          'fontName': genfont,
                                          'bold': genbold,
                                          'italic': false,
                                            },
                                  'gridlines': {color: gencolor, minSpacing: 130, count: -1},
                                  'minorGridlines': {color: 'white', count:80},

                                },
                        'legend': {'position': 'none'},
                        'pointSize': 0,
                        'lineWidth': 3,
                        'backgroundColor': {
                                            fill:'transparent' },
                        'vAxis': {

                                'textStyle': {
                                              'color': gencolor,
                                              'fontSize': gensize,
                                              'bold': genbold
                                              },
                                'titleTextStyle': {
                                                  'color': gencolor,
                                                  'fontSize': gensize,
                                                  'bold': genbold,
                                                  },
                                'gridlines': {color: gencolor, minSpacing: 40, count: 1}, 
                              },                                      
                        'colors': ['#a52714', '#097138'],
                        'baseline': 3,
                        'backgroundColor': { 
                                            fill:'transparent'},
                        'crosshair': {trigger: 'selection', opacity: 0.5},                                        
                        'trendlines': {0: {visibleInLegend: true, 
                                            color: 'green',
                                            type: 'exponential', 
                                            degree: 3, 
                                            lineWidth: 2, 
                                            opacity: 0.5,
                                            enableInteractivity : false}
                                      },
                        'areaOpacity':0.1 , 
                        'backgroundColor.stroke': 'black',  
                        'allowHtml': true,                                                            
                      },
              'view': {
                      'columns':  [3, 4]
                      },
              });


      var chart6 = new google.visualization.ChartWrapper({
              'chartType': 'AreaChart',
              'containerId': 'chart6',
              'dataTable': tabledata,
              'options': {
                        // Use the same chart area width as the control for axis alignment.
                        'filterColumnLabel': "PIB Agro",                        
                        'chartArea': {'height': 'auto', 'width': 'auto'},
                        'hAxis': {'slantedText': false,
                                'title': '',
                                'textStyle': {
                                          'color': gencolor,
                                          'fontSize': gensize,
                                          'fontName': genfont,
                                          'bold': genbold,
                                          'italic': false,
                                            },
                                'gridlines': {color: gencolor, minSpacing: 144, count: 1},
                                'minorGridlines': {color: 'white', count:140}                      
                                },
                        'vAxis': {
                                'textStyle': {
                                              'color': gencolor,
                                              'fontSize': gensize,
                                              'bold': genbold
                                              },
                                'titleTextStyle': {
                                                  'color': gencolor,
                                                  'fontSize': gensize,
                                                  'bold': genbold,
                                                  },
                                'gridlines': {color: gencolor, minSpacing: 40, count: 1},     
                                },
                        'colors': ['#a52714', '#097138'],
                        'legend': {'position': 'none'},
                        'lineWidth': 3,
                        'backgroundColor': { 
                                            fill:'transparent' },
                        'crosshair': {trigger: 'selection', opacity: 0.5}, 
                        'trendlines': { 0: {visibleInLegend: true, 
                                            color: 'green',
                                            type: 'exponential', 
                                            degree: 3, 
                                            lineWidth: 2, 
                                            opacity: 0.5,
                                            enableInteractivity : false}
                                      },
                        'allowHtml': true,                                       
                        },                       
                
                'view': {
                    'columns':  [13,14]
                     }
               })


      var table1 = new google.visualization.ChartWrapper({
              'chartType': 'Table',
              'containerId': 'table1',
              'dataTable': tabledata,
                "options": {
                          "alternatingRowStyle": true,
                          "showRowNumber" : true,
                          }
              });

//DASHBOARDS
      var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard'));
      dashboard.bind(controlA, chart1);
      dashboard.bind(controlA, chart2);
      dashboard.bind(controlA, chart3);
      dashboard.bind(controlA, chart4);
      dashboard.bind(controlA, chart5);
      dashboard.bind(controlA, chart6);
      dashboard.bind(controlA, table1);
      dashboard.draw(tabledata);
      tabledata.addRows(100)



     var pib_last_val = tabledata.getFormattedValue(0,1)
     var paro_last_val = tabledata.getFormattedValue(0,11)
     var icne_last_val = tabledata.getFormattedValue(0,13)
     var ipc_last_val = tabledata.getFormattedValue(0,1)
     var rowss = tabledata.getNumberOfRows()     


     //Get last value     
     var last_val = tabledata.getValue(tabledata.getNumberOfRows()-1,1)

     document.getElementById('PIB').innerHTML = "PIB trimestral: ";
     document.getElementById('Paro').innerHTML = "Tasa de Paro";
     document.getElementById('ICNE').innerHTML = "Índice de Cifra de Negocios Empresarial (base: 2015): ";
     document.getElementById('IPC').innerHTML = "IPC mensual (base: 2015):    ";

     document.getElementById('pib_number').innerHTML = pib_last_val;
     document.getElementById('paro_number').innerHTML = paro_last_val;
     document.getElementById('icne_number').innerHTML = icne_last_val;
     document.getElementById('ipc_number').innerHTML = ipc_last_val;  

     document.getElementById('rowss').innerHTML = rowss;     
                 
     };