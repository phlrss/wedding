(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(74)},30:function(e,t,a){},32:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(20),c=a.n(r),o=(a(30),a(6)),i=a(7),l=a(10),m=a(8),u=a(11),p=a(76),d=a(77),h=(a(32),a(15)),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).updateTimer=function(){var e=h(),t=h(a.props.target,"YYYY-MM-DD HH:mm"),n=Math.floor(t.diff(e,"seconds",!0)),s=Math.floor(n/60),r=Math.floor(s/60),c=Math.floor(r/24);r%=24,s%=60,n%=60,a.setState({days:c,hours:r,minutes:s,seconds:n})},a.state={months:0,days:0,hours:0,minutes:0,seconds:0},setInterval(a.updateTimer,1e3),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"timer"},s.a.createElement("div",{className:"timer-element-wrapper days"},s.a.createElement("span",{className:"timer-element-amount days-left"},this.state.days),s.a.createElement("span",{className:"timer-element-text days-text"},"days")),s.a.createElement("div",{className:"timer-element-wrapper hours"},s.a.createElement("span",{className:"timer-element-amount hours-left"},this.state.hours),s.a.createElement("span",{className:"timer-element-text hours-text"},"hours")),s.a.createElement("div",{className:"timer-element-wrapper minutes"},s.a.createElement("span",{className:"timer-element-amount minutes-left"},this.state.minutes),s.a.createElement("span",{className:"timer-element-text minutes-text"},"minutes")),s.a.createElement("div",{className:"timer-element-wrapper seconds"},s.a.createElement("span",{className:"timer-element-amount seconds-left"},this.state.seconds),s.a.createElement("span",{className:"timer-element-text seconds-text"},"seconds")))}}]),t}(n.Component),f=(a(35),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).sup=function(){a.props.goToPhotos()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"home-wrapper"},s.a.createElement("div",{className:"center-wrapper fade-in"},s.a.createElement("div",{className:"countdown-wrapper"},s.a.createElement("div",{className:"wedding"},"WEDDING"),s.a.createElement(g,{target:"2019-10-12 00:00"})),s.a.createElement("div",{className:"bride-groom-container "},s.a.createElement("div",{className:"bride-groom-names-wrapper"},s.a.createElement("div",{className:"bride"},this.props.bride),s.a.createElement("div",{className:"and"},"&"),s.a.createElement("div",{className:"groom"},this.props.groom))),s.a.createElement("div",{onClick:this.sup,className:"countdown-wrapper engagement-photos"},s.a.createElement("div",{className:"wedding"},"ENGAGEMENT"),s.a.createElement("div",{className:"wedding"},"PHOTOS"))))}}]),t}(n.Component)),v=(a(37),a(39),a(41),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).goToPhotos=function(){a.props.history.push("/photos")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(f,{goToPhotos:this.goToPhotos,bride:"Alicia",groom:"Philip"}))}}]),t}(n.Component)),E=a(21),b=(a(71),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).goBack=function(){a.props.history.push("/")},a.getPhotos=function(){a.setState({loading:!0});var e=new XMLHttpRequest;e.open("GET","http://fragaming.com/php-images.php?"),e.send(),e.onreadystatechange=function(t){try{e.responseText&&a.setState({pics:JSON.parse(e.responseText),loading:!1})}catch(n){console.log(":)")}}},a.componentDidMount=function(e,t,n){a.getPhotos()},a.fullMode=function(e){a.setState({fullScreen:!0,imgStyle:{backgroundImage:"url("+e.currentTarget.src+")"},currentImage:e.currentTarget})},a.closeFullMode=function(){a.setState({fullScreen:!1})},a.navigateImage=function(e){if(37==e.keyCode||39==e.keyCode){var t=39==e.keyCode?a.state.currentImage.nextSibling:a.state.currentImage.previousSibling;a.navigateToImage(t)}else 27==e.keyCode&&a.closeFullMode()},a.navigateToImage=function(e){e&&a.setState({imgStyle:{backgroundImage:"url("+e.src+")"},currentImage:e})},a.nextImage=function(){var e=a.state.currentImage.nextSibling;a.navigateToImage(e)},a.previousImage=function(){var e=a.state.currentImage.previousSibling;a.navigateToImage(e)},a.state={pics:[""],loading:!1,fullScreen:!1,imgStyle:{backgroundImage:""},currentImage:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"photos-page"},this.state.fullScreen?s.a.createElement("div",{tabIndex:"0",onKeyDown:this.navigateImage,style:this.state.imgStyle,className:"full-pic"},s.a.createElement("span",{onClick:this.closeFullMode,className:"close-full-mode fa fa-times"}),s.a.createElement("div",{onClick:this.previousImage,className:"previous-pic nav-button"},s.a.createElement("span",{className:"nav-icon fa fa-chevron-left"})),s.a.createElement("div",{onClick:this.nextImage,className:"next-pic nav-button"},s.a.createElement("span",{className:"nav-icon fa fa-chevron-right"}))):null,s.a.createElement("div",{className:"sweet-loading ".concat(this.state.loading?"":"hidden")},s.a.createElement(E.PacmanLoader,{sizeUnit:"px",size:30,color:"yellow",loading:this.state.loading})),s.a.createElement("div",{className:"photos-header"},s.a.createElement("button",{className:"home-nav",onClick:this.goBack},"home"),s.a.createElement("span",null,"photos")),s.a.createElement("div",{className:"photos-content"},this.state.pics.map(function(t){return s.a.createElement("img",{onClick:e.fullMode,className:"my-pic ".concat(t.indexOf("image/png")>=0?"vertical":""),src:t})})))}}]),t}(n.Component)),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(d.a,{exact:!0,path:"/",component:v}),s.a.createElement(d.a,{exact:!0,path:"/photos",component:b}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(75),w=a(14),O=Object(w.a)();c.a.render(s.a.createElement(y.a,{history:O},s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.e4123d43.chunk.js.map