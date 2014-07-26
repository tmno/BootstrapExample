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
            text:"C",
            font:['Arial, Helvetica, sans-serif',86,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-15,-55]]
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
            ["color", "background-color", 'rgba(192,192,192,1)'],
            ["transform", "translateX", '-1px'],
            ["style", "height", '157px'],
            ["transform", "translateY", '-1px'],
            ["style", "width", '204px']
         ],
         "${_Text}": [
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.5'],
            ["transform", "translateX", '-15px'],
            ["transform", "translateY", '-55px'],
            ["style", "font-size", '86px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2480,
         autoPlay: true,
         timeline: [
            { id: "eid5", tween: [ "transform", "${_RoundRect}", "translateX", '41px', { fromValue: '-1px'}], position: 250, duration: 340 },
            { id: "eid6", tween: [ "transform", "${_RoundRect}", "translateX", '-1px', { fromValue: '41px'}], position: 590, duration: 455 },
            { id: "eid62", tween: [ "transform", "${_RoundRect}", "translateX", '41px', { fromValue: '-1px'}], position: 1315, duration: 455 },
            { id: "eid61", tween: [ "transform", "${_RoundRect}", "translateX", '-1px', { fromValue: '41px'}], position: 1770, duration: 340 },
            { id: "eid27", tween: [ "transform", "${_Text}", "translateY", '-37.17px', { fromValue: '-55px'}], position: 250, duration: 340 },
            { id: "eid31", tween: [ "transform", "${_Text}", "translateY", '-54.99px', { fromValue: '-37.17px'}], position: 590, duration: 340 },
            { id: "eid56", tween: [ "transform", "${_Text}", "translateY", '-37.16px', { fromValue: '-54.99px'}], position: 1430, duration: 340 },
            { id: "eid55", tween: [ "transform", "${_Text}", "translateY", '-54.99px', { fromValue: '-37.17px'}], position: 1770, duration: 340 },
            { id: "eid7", tween: [ "transform", "${_RoundRect}", "translateY", '-35px', { fromValue: '-1px'}], position: 250, duration: 340 },
            { id: "eid8", tween: [ "transform", "${_RoundRect}", "translateY", '-1px', { fromValue: '-35px'}], position: 590, duration: 455 },
            { id: "eid64", tween: [ "transform", "${_RoundRect}", "translateY", '-35px', { fromValue: '-1px'}], position: 1315, duration: 455 },
            { id: "eid63", tween: [ "transform", "${_RoundRect}", "translateY", '-1px', { fromValue: '-35px'}], position: 1770, duration: 340 },
            { id: "eid1", tween: [ "style", "${_RoundRect}", "width", '204px', { fromValue: '204px'}], position: 250, duration: 0 },
            { id: "eid67", tween: [ "style", "${_RoundRect}", "width", '204px', { fromValue: '204px'}], position: 2110, duration: 0 },
            { id: "eid70", tween: [ "transform", "${_Text}", "rotateZ", '-180deg', { fromValue: '0deg'}], position: 75, duration: 175 },
            { id: "eid69", tween: [ "transform", "${_Text}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 250, duration: 340 },
            { id: "eid68", tween: [ "transform", "${_Text}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 1770, duration: 340 },
            { id: "eid71", tween: [ "transform", "${_Text}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 2250, duration: 230 },
            { id: "eid25", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(218,16,16,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 590, duration: 455 },
            { id: "eid65", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(192,192,192,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(218,16,16,1.00)'}], position: 1315, duration: 455 },
            { id: "eid26", tween: [ "transform", "${_Text}", "translateX", '-54px', { fromValue: '-15px'}], position: 250, duration: 340 },
            { id: "eid30", tween: [ "transform", "${_Text}", "translateX", '-15px', { fromValue: '-54px'}], position: 590, duration: 340 },
            { id: "eid54", tween: [ "transform", "${_Text}", "translateX", '-54px', { fromValue: '-15px'}], position: 1430, duration: 340 },
            { id: "eid53", tween: [ "transform", "${_Text}", "translateX", '-15px', { fromValue: '-54px'}], position: 1770, duration: 340 },
            { id: "eid28", tween: [ "transform", "${_Text}", "scaleX", '0.16', { fromValue: '0.5'}], position: 250, duration: 340 },
            { id: "eid12", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0.16'}], position: 590, duration: 455 },
            { id: "eid58", tween: [ "transform", "${_Text}", "scaleX", '0.16', { fromValue: '1'}], position: 1315, duration: 455 },
            { id: "eid57", tween: [ "transform", "${_Text}", "scaleX", '0.5', { fromValue: '0.16'}], position: 1770, duration: 340 },
            { id: "eid2", tween: [ "style", "${_RoundRect}", "height", '157px', { fromValue: '157px'}], position: 250, duration: 0 },
            { id: "eid66", tween: [ "style", "${_RoundRect}", "height", '157px', { fromValue: '157px'}], position: 2110, duration: 0 },
            { id: "eid29", tween: [ "transform", "${_Text}", "scaleY", '0.16', { fromValue: '0.5'}], position: 250, duration: 340 },
            { id: "eid14", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0.16'}], position: 590, duration: 455 },
            { id: "eid60", tween: [ "transform", "${_Text}", "scaleY", '0.16', { fromValue: '1'}], position: 1315, duration: 455 },
            { id: "eid59", tween: [ "transform", "${_Text}", "scaleY", '0.5', { fromValue: '0.16'}], position: 1770, duration: 340 }         ]
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
})(jQuery, AdobeEdge, "PAGE_C");
