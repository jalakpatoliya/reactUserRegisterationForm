(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(65)},31:function(e,a,t){},33:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){},60:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(22),s=t.n(i),o=(t(31),t(6)),r=t(7),c=t(9),u=t(8),m=t(10),d=t(68),p=t(70),v=t(69),h=t(67),b=(t(33),t(35),t(11)),f=t(12),g=(t(37),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={value:""},t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=null;switch(this.props.elementType){case"input":a=l.a.createElement("input",{type:this.props.type,onBlur:function(a){return e.props.onChange(a,e.props.id)},defaultValue:this.state.value,className:"form-control",id:this.props.id,placeholder:this.props.placeholder});break;case"date":a=l.a.createElement("input",{type:this.props.type,className:"form-control-range",id:this.props.id})}return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:this.props.id},this.props.label),a,!this.props.isValid&&this.props.touched&&l.a.createElement("span",{className:"invalid-feedback",style:{display:"inline"}},"!!! "+this.props.message))}}]),a}(n.Component)),y=(t(39),function(e){return l.a.createElement("button",{onSubmit:e.onSubmit,type:e.type,className:[["btn",e.className].join("-"),"btn"].join(" ")},e.children)}),E=function(e){return null===e||void 0===e||"string"===typeof e&&0===e.trim().length},j=function(e,a){var t="",n=!0;if(e.required&&E(a))return{message:"Feild cannot be empty",isValid:!1};if("email"===e.type)return(n=/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(a)&&n)||(t="Invalid Email"),{isValid:n,message:t};if("dob"===e.type){console.log(a);var l=new Date(a),i=(new Date).getFullYear()-l.getFullYear();if(console.log(i),i<=18)return t="Age should be equl to or more than 18 years",n=!1,i<0?{isValid:!1,message:" Invalid date"}:{isValid:n,message:"Age should be equal to or more than 18 years"}}return{message:t,isValid:n}},O=t(23),N={BASE_URL:"http://localhost:8080/"},S=t.n(O).a.create({baseURL:N.BASE_URL,headers:{"Content-Type":"application/json"},timeout:5e4}),V=(t(60),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).formChangeHandler=function(e,a){var n,l=Object(f.a)({},t.state.form),i=l[a];i.value=e.target.value;var s=j(i.validations,i.value),o=s.isValid,r=s.message;i.validations.isValid=o,i.validations.validationFailMessage=r,i.touched=!0,t.setState((n={},Object(b.a)(n,l,i),Object(b.a)(n,"message",""),n))},t.formSumbitHandler=function(e){e.preventDefault();var a=Object(f.a)({},t.state.form),n={},l=!0;for(var i in a){var s=Object(f.a)({},a[i]);n[i]=s.value;var o=Object(f.a)({},s.validations);o.isValid||(l=o.isValid)}console.log(l),l?(e.target.reset(),console.log(n),S.post("/user-form",n).then(function(e){var a=e.data;200===e.status&&"OK"===e.statusText?t.setState({message:a.message,sentStatus:!0}):t.setState({message:a.message})}).catch(function(e){console.log(e)})):t.setState({message:"Invalid Details"})},t.state={form:{name:{elementType:"input",type:"text",placeholder:"Enter Name",label:"Name",value:"",validations:{validationFailMessage:"",isValid:!1,required:!0,type:"name"}},email:{elementType:"input",type:"email",placeholder:"e.g. : abc@mail.com",value:"",label:"Email",validations:{validationFailMessage:"",isValid:!1,required:!0,type:"email"}},dob:{elementType:"input",type:"date",placeholder:"yyyy-mm-dd",value:"",label:"D.O.B.",validations:{validationFailMessage:"",isValid:!1,required:!0,type:"dob"}},phoneNumber:{elementType:"input",type:"text",placeholder:"e.g. : 9876543210",value:"",label:"Phone Number",touched:!1,validations:{validationFailMessage:"",isValid:!1,required:!0,type:"phoneNumber"}}},message:"",sentStatus:!1},t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state.form,t=this.state.message,n="";n="alert-success alert message",0===t.length&&(n="hide");var i=[];for(var s in a)i.push({id:s,value:a[s]});return l.a.createElement("div",{className:"container col-md-6 cover"},l.a.createElement("div",{className:n,role:"alert"},t),l.a.createElement("form",{className:"form",onSubmit:function(a){e.formSumbitHandler(a)}},i.map(function(a){return l.a.createElement(g,{key:a.value.label,label:a.value.label,id:a.value.validations.type,elementType:a.value.elementType,type:a.value.type,onChange:e.formChangeHandler,isValid:a.value.validations.isValid,touched:a.value.touched,message:a.value.validations.validationFailMessage,placeholder:a.value.placeholder})}),l.a.createElement(y,{className:"primary",type:"Submit"},"SUBMIT")))}}]),a}(n.Component)),w=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement(v.a,{exact:!0,path:"/",render:function(){return l.a.createElement("div",{style:{margin:"200px"}},l.a.createElement("h1",null,"Welcome to Sample"),l.a.createElement(h.a,{style:{fontSize:"30px"},to:"/user-form"},"Go to Form"))}}),l.a.createElement(v.a,{exact:!0,path:"/user-form",component:V}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.85a1bc63.chunk.js.map