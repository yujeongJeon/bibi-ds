(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"../../packages/ui/src/json/color.json":function(module){module.exports=JSON.parse('{"GRAYSCALE":{"GRAY_10":"#121d2e","GRAY_9":"#232e40","GRAY_8":"#354153","GRAY_7":"#515c6d","GRAY_6":"#687486","GRAY_5":"#7f8a9b","GRAY_4":"#9ea6b4","GRAY_3":"#c0c7d2","GRAY_2":"#d7dbe2","GRAY_1":"#e6e9ee","GRAY_0.5":"#f2f4f6","GRAY_0.1":"#f9fafc"},"BACKGROUND":{"POSITIVE":"#ebfbee","SECONDARY":"#f2f4f6","PRIMARY":"#f9fafc"},"BORDER":{"INVERSE":"#7f8a9b","PRIMARY":"#e6e9ee","SECONDARY":"#d7dbe2"},"BRAND":{"MAINGREEN_DEFAULT":"#3da451","MAINGREEN_DARK":"#2b8a3e","MAINGREEN_LIGHT":"#ebfbee","MAINYELLOW_LIGHT":"#fff9db","MAINYELLOW_DEFAULT":"#f9bb00","MAINYELLOW_DARK":"#f08c00"},"SUB":{"RED_LIGHT":"#fff5f5","RED_DEFAULT":"#f03e3e","RED_DARK":"#c92a2a","TEAL_LIGHT":"#e6fcf5","TEAL_DEFAULT":"#12b886","TEAL_DARK":"#087f5b"}}')},"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Foundations/Color.stories.tsx":"./stories/Foundations/Color.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Foundations/Color.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Color",(function(){return Color_stories_Color}));__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/react/index.js");var Foundation_color=__webpack_require__("../../packages/ui/src/json/color.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Color_stories_Rectangle=function Rectangle(_ref){var color=_ref.color;return Object(jsx_runtime.jsx)("div",{style:{backgroundColor:color,width:237,height:80,margin:"0 0 7px 0",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"13px"},children:Object(jsx_runtime.jsx)("span",{style:{backgroundColor:"#fff",padding:"2.5px 6px",borderRadius:"2px"},children:color})})};Color_stories_Rectangle.displayName="Rectangle";var Color_stories_List=function List(_ref2){var value=_ref2.value;return Object(jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginBottom:30},children:Object.entries(value).map((function(_ref3){var _ref4=_slicedToArray(_ref3,2),key=_ref4[0],value=_ref4[1];return Object(jsx_runtime.jsxs)("div",{style:{display:"inline-flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(jsx_runtime.jsx)(Color_stories_Rectangle,{color:value}),Object(jsx_runtime.jsx)("div",{style:{padding:"12px 0"},children:Object(jsx_runtime.jsx)("span",{style:{padding:"4px 7px",backgroundColor:"#f2f4f6",borderRadius:"2px",fontSize:"14px"},children:key})})]},key)}))})};Color_stories_List.displayName="List";var Color_stories_Color=function Color(){return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object.entries(Foundation_color).sort((function(_ref5,_ref6){var key1=_slicedToArray(_ref5,1)[0],key2=_slicedToArray(_ref6,1)[0];return key1.split("_")[0].localeCompare(key2.split("_")[0])})).map((function(_ref9){var _ref10=_slicedToArray(_ref9,2),key=_ref10[0],value=_ref10[1];return Object(jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},children:[Object(jsx_runtime.jsx)("h3",{children:key}),Object(jsx_runtime.jsx)(Color_stories_List,{value:value})]},key)}))})};__webpack_exports__.default={title:"Bibi's Design System/Foundation/Color",component:Color_stories_Color};Color_stories_Color.parameters=Object.assign({storySource:{source:"() => (\n    <>\n        {Object.entries(colorSet)\n            .sort(([key1], [key2]) => key1.split('_')[0].localeCompare(key2.split('_')[0]))\n            .map(([key, value]) => (\n                <div\n                    key={key}\n                    style={{\n                        display: 'flex',\n                        flexDirection: 'column',\n                        justifyContent: 'flex-start',\n                        alignItems: 'flex-start',\n                    }}\n                >\n                    <h3>{key}</h3>\n                    <List value={value} />\n                </div>\n            ))}\n    </>\n)"}},Color_stories_Color.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);