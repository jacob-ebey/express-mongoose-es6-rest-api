webpackJsonp([3],{275:function(t,o,e){e(290);var n=e(1)(e(280),e(295),"data-v-592b5dc0",null);t.exports=n.exports},280:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e(3),i=e(4),a=e(6),s=e(13),r=e.n(s),c=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};o.default={components:{CardModal:i.a,ConfigurationForm:r.a,Tooltip:a.a},computed:e.i(n.mapGetters)({configurations:"configurations",createConfiguration:"createConfiguration",deleteConfiguration:"deleteConfiguration"}),data:function(){return{showDeleteConfiguration:!1,configurationToDelete:null,indexToDelete:null,addConfigurationOpen:!1,configurationToCopy:null}},mounted:function(){switch(this.$route.query.action){case"add":this.showAddConfiguration=!0}this.loadConfigurations(!1)},methods:c({},e.i(n.mapActions)(["doLoad","doPost","doDelete","doPush","doSplice"]),{loadConfigurations:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.doLoad({http:this.$http,whatToLoad:"configurations",forceLoad:t})},handleAddConfiguration:function(t,o){var e=this;console.log(t),this.doPost({http:this.$http,whatToPost:"createConfiguration",body:t,callback:function(t){e.addConfigurationOpen=!1,e.doPush({whereToPush:"configurations",item:t}),o()}})},removeConfiguration:function(t,o){var e=this;t&&this.doDelete({http:this.$http,whatToPost:"deleteConfiguration",params:[t._id],callback:function(){e.doSplice({whereToSplice:"configurations",start:o,deleteCount:1}),e.showDeleteConfiguration=!1}})},openDeleteConfiguration:function(t,o){this.showDeleteConfiguration=!0,this.configurationToDelete=t,this.indexToDelete=o}})}},285:function(t,o,e){o=t.exports=e(273)(!0),o.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},290:function(t,o,e){var n=e(285);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(274)("0fecf398",n,!0)},295:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"table-buttons"},[e("button",{staticClass:"button is-success has-text-centered",on:{click:function(o){t.addConfigurationOpen=!0}}},[t._m(0),t._v(" "),e("span",[t._v("\n        Add Configuration\n      ")])])]),t._v(" "),e("table",{staticClass:"table is-striped"},[e("thead",[e("tr",[e("th",[t.configurations.isLoading?e("button",{staticClass:"button is-white is-loading"}):t._e(),t._v(" "),t.configurations.isLoading?t._e():e("tooltip",{attrs:{label:"Reload configurations",placement:"top-right"}},[e("button",{staticClass:"button is-small has-text-centered",on:{click:t.loadConfigurations}},[e("i",{staticClass:"fa fa-refresh center-icon"})])])],1),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Actions")])])]),t._v(" "),t.configurations.data?e("tbody",t._l(t.configurations.data,function(o,n){return e("tr",{key:o._id},[t._m(1,!0),t._v(" "),e("td",[e("router-link",{attrs:{to:"configurations/view/"+o._id}},[t._v(t._s(o.name))])],1),t._v(" "),e("td",[t._v(t._s(o._id))]),t._v(" "),e("td",[e("button",{staticClass:"button has-text-centered",on:{click:function(e){t.configurationToCopy=o,t.addConfigurationOpen=!0}}},[e("i",{staticClass:"fa fa-copy center-icon"})]),t._v(" "),e("button",{staticClass:"button is-danger has-text-centered",on:{click:function(e){t.openDeleteConfiguration(o,n)}}},[e("i",{staticClass:"fa fa-trash-o center-icon"})])])])})):t._e()]),t._v(" "),e("configuration-form",{attrs:{visible:t.addConfigurationOpen,initialValues:t.configurationToCopy,error:t.createConfiguration.error},on:{submit:t.handleAddConfiguration,cancel:function(o){t.addConfigurationOpen=!1}}}),t._v(" "),e("card-modal",{attrs:{visible:t.showDeleteConfiguration&&!!t.configurationToDelete&&null!==t.indexToDelete,title:"Delete Configuration",okText:"Yes",cancelText:"No"},on:{ok:function(o){t.removeConfiguration(t.configurationToDelete,t.indexToDelete)},close:function(o){t.showDeleteConfiguration=!1},cancel:function(o){t.showDeleteConfiguration=!1}}},[e("p",[t._v("Do you really wish to delete "+t._s(t.configurationToDelete&&t.configurationToDelete.name)+"?")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.deleteConfiguration.error,expression:"deleteConfiguration.error"}],staticStyle:{color:"red","word-wrap":"break-word"}},[t._v(t._s(t.deleteConfiguration.error))])])],1)},staticRenderFns:[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-plus center-icon"})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("td",[e("i",{staticClass:"fa fa-check has-text-success"})])}]}}});
//# sourceMappingURL=3.43aa3408368aaf5b37e6.js.map