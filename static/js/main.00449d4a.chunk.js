(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={login:"admin",password:"123"}},16:function(e,t,a){e.exports=a(65)},21:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(9),o=a.n(i),l=(a(21),a(2)),c=a(3),r=a(5),d=a(4),m=a(6),u=(a(23),a(7)),h=a(15),p=(a(27),a(29),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onImageDrop,a=e.image;return s.a.createElement("div",{className:"dropzone-field"},s.a.createElement(h.a,{className:"dropzone",onDrop:t,multiple:!1},a?s.a.createElement("img",{className:"preview-image",src:a.preview,alt:"todo-image"}):s.a.createElement("span",null,"Upload image here")))}}]),t}(n.Component)),g=(a(31),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.id,n=e.target.value;a.setState(Object(u.a)({},t,n),function(){a.validateField(t,n)},a.validateForm)},a.handleImageDrop=function(e){console.log(e[0].preview);var t=new Image;t.src=window.URL.createObjectURL(e[0]),t.onload=function(){var e=t.naturalWidth,a=t.naturalHeight;window.URL.revokeObjectURL(t.src),console.log(e,a)},a.setState({image:e[0]},a.validateForm)},a.handleSubmit=function(e){e.preventDefault();var t=new FormData,n=a.state,s=n.name,i=n.email,o=n.text,l=n.image;t.append("username",s),t.append("email",i),t.append("text",o),t.append("image",l),fetch("https://uxcandy.com/~shapoval/test-task-backend/create?developer=kostya",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),a.setState({name:"",email:"",text:"",image:null})},a.state={name:"",email:"",text:"",image:null,isValidName:!1,isValidEmail:!1,isValidText:!1,isValidForm:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"validateField",value:function(e,t){var a=this.state,n=a.isValidName,s=a.isValidEmail,i=a.isValidText;switch(e){case"name":n=t.length>2;break;case"email":s=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);break;case"text":i=t.length>2}this.setState({isValidName:n,isValidEmail:s,isValidText:i},this.validateForm)}},{key:"validateForm",value:function(){this.setState({isValidForm:this.state.isValidName&&this.state.isValidEmail&&this.state.isValidText&&!!this.state.image})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.text,i=e.image,o=e.isValidForm;return s.a.createElement("form",{className:"task-form",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("input",{className:"input",type:"text",id:"name",value:t,onChange:this.handleInputChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{className:"input",type:"email",id:"email",value:a,onChange:this.handleInputChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"text"},"Type your text here"),s.a.createElement("textarea",{className:"textarea",type:"text",id:"text",value:n,onChange:this.handleInputChange})),s.a.createElement(p,{onImageDrop:this.handleImageDrop,image:i}),s.a.createElement("button",{className:o?"btn":"btn btn-inactive",disabled:!o},"Add task"))}}]),t}(n.Component)),f=(a(33),a(13)),k=a.n(f),v=a(14),b=a.n(v),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleTaskUpdate=function(e,t,n){a.setState({isLoading:!0});var s=new FormData;s.append("text",t),s.append("status",n),s.append("token","beejee");var i="".concat(encodeURIComponent("status"),"=").concat(encodeURIComponent(n),"&").concat(encodeURIComponent("text"),"=").concat(encodeURIComponent(t),"&").concat(encodeURIComponent("token"),"=").concat(encodeURIComponent("beejee")),o=k()(i);s.append("signature",o),fetch("https://uxcandy.com/~shapoval/test-task-backend/edit/".concat(e,"?developer=kostya"),{method:"POST",body:s}).then(function(e){return e.json()}).then(function(e){"ok"===e.status?a.setState({isLoading:!1,taskText:t,status:n}):(a.setState({isLoading:!1,isError:!0,taskText:a.props.task.text,status:a.props.task.status}),setTimeout(function(){return a.setState({isError:!1})},2500))}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState({taskText:e.target.value})},a.handleEdit=function(){a.setState({isEditMode:!a.state.isEditMode})},a.handleCheck=function(e){var t=a.state,n=t.taskText,s=t.id;e.target.checked?a.handleTaskUpdate(s,n,10):a.handleTaskUpdate(s,n,0)},a.handleSave=function(){console.log("save");var e=a.state,t=e.taskText,n=e.status,s=e.id;a.handleTaskUpdate(s,t,n),a.setState({isEditMode:!a.state.isEditMode})},a.state={taskText:"",isEditMode:!1,isLoading:!1,isError:!1,status:null,id:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({taskText:this.props.task.text,status:this.props.task.status,id:this.props.task.id})}},{key:"render",value:function(){var e=this.props,t=e.isAdmin,a=e.task,n=a.username,i=a.email,o=a.image_path,l=this.state,c=l.isEditMode,r=l.taskText,d=l.status,m=l.isError,u=l.isLoading;return s.a.createElement("div",{className:10===d?"task-item task-item-avtive":"task-item"},t&&(u?s.a.createElement("div",{className:"loader-container"},s.a.createElement(b.a,{type:"Puff",color:"#00BFFF",height:"32",width:"32"})):s.a.createElement("div",{className:"task-edit-block"},c?s.a.createElement("button",{className:"btn-edit",onClick:this.handleSave},s.a.createElement("i",{className:"far fa-save fa-2x"})):s.a.createElement("button",{className:"btn-edit",onClick:this.handleEdit},s.a.createElement("i",{className:"far fa-edit fa-2x"})),s.a.createElement("div",{className:"checkbox"},s.a.createElement("input",{type:"checkbox",checked:!!d,onChange:this.handleCheck}),!!d&&s.a.createElement("i",{className:"fas fa-check fa-2x check-icon"})))),m&&s.a.createElement("span",{className:"err-msg"},"Error on update"),s.a.createElement("div",{className:"task-user-info"},s.a.createElement("div",{className:"task-name"},n),s.a.createElement("div",{className:"task-email"},i)),c?s.a.createElement("textarea",{className:"task-text-edit",value:r,onChange:this.handleChange}):s.a.createElement("div",{className:"task-text"},r),s.a.createElement("img",{className:"task-image",src:o,alt:"task image"}))}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.taskList,a=e.isAdmin,n=e.handleTaskUpdate;return s.a.createElement("div",null,t.map(function(e){return s.a.createElement(E,{task:e,key:e.id,isAdmin:a,handleTaskUpdate:n})}))}}]),t}(n.Component),j=(a(61),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).handlePageChange=function(e){a.props.handlePageChange(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props,a=t.pagesCount,n=t.currentpage,i=[],o=1;o<=a;o++)i.push(o);return s.a.createElement("div",{className:"page-nav-container"},"Pages:",i.map(function(t){return s.a.createElement("span",{className:n===t?"page-num page-num-active":"page-num",key:t,onClick:function(){return e.handlePageChange(t)}},t)}))}}]),t}(n.Component)),N=(a(63),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){a.setState(Object(u.a)({},e.target.id,e.target.value))},a.handleLogin=function(e){e.preventDefault();var t=a.state,n=t.login,s=t.password;a.props.handleLogin(n,s),a.setState({login:"",password:""})},a.state={login:"",password:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAdmin,a=e.handleLogout,n=this.state,i=n.login,o=n.password;return s.a.createElement("div",{className:"login-container"},t?s.a.createElement("div",{className:"loged-in-block"},s.a.createElement("span",null,"Admin"),s.a.createElement("button",{className:"btn btn-login",onClick:a},"Logout")):s.a.createElement("form",{className:"loged-out-block"},s.a.createElement("div",{className:"input-field input-field-login"},s.a.createElement("label",{htmlFor:"login"},"Login"),s.a.createElement("input",{className:"input",type:"text",id:"login",value:i,onChange:this.handleInputChange})),s.a.createElement("div",{className:"input-field input-field-login"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{className:"input",type:"password",id:"password",value:o,onChange:this.handleInputChange})),s.a.createElement("button",{className:"btn btn-login",onClick:this.handleLogin},"Login")))}}]),t}(n.Component)),x=a(10),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handlePageChange=function(e){a.setState({currentpage:e},a.getTasks(e))},a.handleLogout=function(){a.setState({isAdmin:!1})},a.handleLogin=function(e,t){e===x.login&&t===x.password&&a.setState({isAdmin:!0})},a.getTasks=function(e){fetch("https://uxcandy.com/~shapoval/test-task-backend/?developer=kostya&page=".concat(e)).then(function(e){return e.json()}).then(function(e){a.setState({taskList:e.message.tasks,totalCount:e.message.total_task_count})}).catch(function(e){return console.log(e)})},a.state={taskList:[],totalCount:null,currentpage:1,isAdmin:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTasks(this.state.currentpage)}},{key:"render",value:function(){var e=this.state,t=e.taskList,a=e.totalCount,n=e.isAdmin,i=e.currentpage;return s.a.createElement("div",{className:"App"},s.a.createElement(N,{isAdmin:n,handleLogout:this.handleLogout,handleLogin:this.handleLogin}),s.a.createElement(g,null),s.a.createElement(j,{pagesCount:Math.ceil(a/3),handlePageChange:this.handlePageChange,currentpage:i}),s.a.createElement(C,{taskList:t,isAdmin:n,handleTaskUpdate:this.handleTaskUpdate}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.00449d4a.chunk.js.map