(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(17),s=n.n(o),r=n(49),h=n(50),d=n(52),l=n(51),c=n(10),m=n(53),u=n(21),w=function(e){var t={width:e.width-6};return a.a.createElement("textarea",{id:"editor",value:e.markdown,onChange:e.onChange,type:"text",style:t})},g=n(22),f=n.n(g);f.a.setOptions({breaks:!0});var k=new f.a.Renderer;k.link=function(e,t,n){return'<a target="_blank" href="'.concat(e,'">').concat(n,"</a>")};var b=function(e){return a.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:f()(e.markdown,{renderer:k})}})},p=(n(139),"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={markdown:p,width:500,height:500,hidden:!1,isMaximized:!0},n.handeleMinimize=n.handeleMinimize.bind(Object(c.a)(n)),n.toggleMaximize=n.toggleMaximize.bind(Object(c.a)(n)),n.handeleClose=n.handeleClose.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handeleMinimize",value:function(){this.setState({width:499,height:40,isMaximized:this.state.isMaximized})}},{key:"toggleMaximize",value:function(){this.setState({isMaximized:!this.state.isMaximized,height:500===this.state.height?800:500,width:500===this.state.width?1e3:500})}},{key:"handeleClose",value:function(){this.setState({hidden:!0})}},{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(u.Window,{className:"window",color:this.props.color,theme:this.props.theme,chrome:!0,height:this.state.height,width:this.state.width,hidden:this.state.hidden,padding:"2%"},a.a.createElement(u.TitleBar,{title:"Command Prompt",controls:!0,isMaximized:this.state.isMaximized,onCloseClick:this.handeleClose,onMinimizeClick:this.handeleMinimize,onMaximizeClick:this.toggleMaximize,onRestoreDownClick:this.toggleMaximize}),a.a.createElement(u.Text,{color:"dark"===this.props.theme?"white":"#333"},a.a.createElement(w,{markdown:this.state.markdown,onChange:this.handleChange,width:this.state.width}))),a.a.createElement(b,{markdown:this.state.markdown}))}}]),t}(a.a.Component);v.defaultProps={color:"#cc7f29",theme:"dark"};var z=v;s.a.render(a.a.createElement(z,null),document.getElementById("root"))},54:function(e,t,n){e.exports=n(140)}},[[54,1,2]]]);
//# sourceMappingURL=main.46eaf824.chunk.js.map