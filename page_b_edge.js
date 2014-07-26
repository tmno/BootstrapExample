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
            transform:[[-1,-1]],
            c:[
            {
               id:'Text',
               type:'text',
               rect:[261,205,0,0],
               text:"B",
               font:['Arial, Helvetica, sans-serif',86,"rgba(0,0,0,1)","normal","none",""],
               transform:[[-188,-176]]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_RoundRect}": [
            ["style", "-webkit-transform-origin", [4.9,4.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.9,4.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.9,4.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.9,4.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.9,4.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-169px'],
            ["transform", "scaleX", '0.17527'],
            ["transform", "translateY", '-117px'],
            ["transform", "scaleY", '0.18007']
         ],
         "${_Text}": [
            ["transform", "translateX", '-188px'],
            ["transform", "rotateZ", '0deg'],
            ["color", "color", 'rgba(178,246,54,1.00)'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-176px'],
            ["style", "font-size", '86px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2125,
         autoPlay: true,
         timeline: [
            { id: "eid8", tween: [ "transform", "${_RoundRect}", "scaleX", '1', { fromValue: '0.17527'}], position: 250, duration: 1000 },
            { id: "eid13", tween: [ "transform", "${_Text}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1445, duration: 415 },
            { id: "eid2", tween: [ "transform", "${_RoundRect}", "translateX", '-1px', { fromValue: '-169px'}], position: 250, duration: 1000 },
            { id: "eid10", tween: [ "transform", "${_RoundRect}", "scaleY", '1', { fromValue: '0.18007'}], position: 250, duration: 1000 },
            { id: "eid14", tween: [ "style", "${_Text}", "opacity", '0.47945205479452', { fromValue: '1'}], position: 1710, duration: 415 },
            { id: "eid4", tween: [ "transform", "${_RoundRect}", "translateY", '-1px', { fromValue: '-117px'}], position: 250, duration: 1000 },
            { id: "eid12", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(178,246,54,1.00)'}], position: 500, duration: 750 }         ]
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
})(jQuery, AdobeEdge, "PAGE_B");
