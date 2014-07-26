/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.11.0.723",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'RoundRect',
            type:'rect',
            rect:[174,122,204,157],
            borderRadius:[10,10,10,10],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[-1,-1]]
         },
         {
            id:'Text',
            type:'text',
            rect:[261,205,0,0],
            text:"A",
            font:['Arial, Helvetica, sans-serif',86,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-15,-55]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px']
         ],
         "${_RoundRect}": [
            ["transform", "scaleX", '0.16'],
            ["transform", "translateY", '-1px'],
            ["transform", "translateX", '-1px'],
            ["transform", "scaleY", '0.16']
         ],
         "${_Text}": [
            ["transform", "translateX", '-15px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-55px'],
            ["style", "font-size", '86px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "transform", "${_RoundRect}", "scaleY", '1', { fromValue: '0.16'}], position: 0, duration: 700 },
            { id: "eid2", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750 },
            { id: "eid4", tween: [ "transform", "${_RoundRect}", "scaleX", '1', { fromValue: '0.16'}], position: 0, duration: 700 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "PAGE_A");
