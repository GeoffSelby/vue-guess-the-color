(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b20d265"],{"18f3":function(t,e,n){"use strict";var s=n("3c66"),o=n.n(s);o.a},"3c66":function(t,e,n){},8363:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play"},[t.winner||t.loser?t._e():n("div",[n("h1",{staticClass:"font-light mb-10 text-3xl md:text-5xl text-black text-center tracking-wide"},[t._v("What is "+t._s(t.targetColor)+"?")]),n("div",{staticClass:"container mx-auto flex flex-wrap justify-between"},t._l(t.colors,function(e){return n("div",{key:e.id,staticClass:"box rounded shadow mb-6 cursor-pointer hover:shadow-lg",class:e.active?"":"disabled",style:{backgroundColor:e.color},on:{click:function(n){t.checkGuess(e)}}})}),0),n("p",{staticClass:"text-center"},[n("button",{staticClass:"bg-blue text-white font-light no-underline px-16 py-3 rounded text-2xl text-center tracking-wide",on:{click:t.startGame}},[t._v("\n        Start Over\n      ")])])]),t.winner?n("div",[n("h1",{staticClass:"font-light mb-10 text-5xl text-center tracking-wide",class:t.isDarkContrast?"text-white":"text-black"},[t._v("That's Right!")]),n("p",{staticClass:"text-center"},[n("button",{staticClass:"font-light no-underline px-16 py-3 rounded text-2xl text-center tracking-wide",class:t.isDarkContrast?"bg-white text-black":"bg-black text-white",on:{click:t.startGame}},[t._v("\n        Play Again\n      ")])])]):t._e(),t.loser?n("div",[n("h1",{staticClass:"text-black font-light mb-10 text-5xl text-center tracking-wide"},[t._v("You Lose!")]),n("p",{staticClass:"text-center"},[n("button",{staticClass:"bg-black text-white font-light no-underline px-16 py-3 rounded text-2xl text-center tracking-wide",on:{click:t.startGame}},[t._v("\n        Play Again\n      ")])])]):t._e()])},o=[],r=(n("cadf"),n("551c"),n("097d"),{name:"play",props:["isDarkContrast"],data:function(){return{winner:!1,loser:!1,guessesLeft:5,numBoxes:6,colors:[]}},computed:{targetColor:function(){var t=Math.floor(Math.random()*this.colors.length);return this.colors[t].color}},methods:{makeColors:function(){for(var t=0;t<this.numBoxes;t++)this.colors.push({id:t,active:!0,color:this.randomColor()})},randomColor:function(){var t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"rgb(".concat(t,", ").concat(e,", ").concat(n,")")},checkGuess:function(t){var e=this.colors.indexOf(t);this.guessesLeft--,t.color!==this.targetColor?(this.colors[e].active=!1,0===this.guessesLeft&&(this.loser=!0)):(this.winner=!0,this.$emit("winnerWinnerChickenDinner",t.color))},startGame:function(){this.winner=!1,this.loser=!1,this.guessesLeft=5,this.colors=[],this.$emit("restartGame"),this.makeColors()}},beforeMount:function(){this.startGame()}}),a=r,i=(n("18f3"),n("2877")),c=Object(i["a"])(a,s,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1b20d265.4a83c4f6.js.map