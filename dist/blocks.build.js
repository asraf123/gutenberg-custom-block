/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customealert_index_js__ = __webpack_require__(/*! ./customealert/index.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9jdXN0b21lYWxlcnQvaW5kZXguanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!***********************************!*\
  !*** ./src/customealert/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(/*! ./helper */ 7);\n/**\n * BLOCK: gutenberg-custom-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar RichText = wp.editor.RichText;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('aks/block-gutenberg-custom-block', {\n    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n    title: __('gutenberg-custom-block - AKS Block'), // Block title.\n    icon: 'yes', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n    category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n    keywords: [__('gutenberg-custom-block — AKS Block'), __('AKS Example'), __('create-guten-block')],\n    styles: __WEBPACK_IMPORTED_MODULE_1__helper__[\"a\" /* STYLES */],\n\n    attributes: {\n        style: {\n            type: 'string'\n        },\n        content: {\n            source: 'html',\n            selector: '.alert'\n        }\n    },\n    /**\n     * The edit function describes the structure of your block in the context of the editor.\n     * This represents what the editor will render when the block is used.\n     *\n     * The \"edit\" property must be a valid function.\n     *\n     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n     */\n    edit: function edit(_ref) {\n        var className = _ref.className,\n            setAttributes = _ref.setAttributes,\n            attributes = _ref.attributes,\n            isSelected = _ref.isSelected;\n\n        // Creates a <p class='wp-block-cgb-block-aks-guten-block'></p>.\n        var style = Object(__WEBPACK_IMPORTED_MODULE_1__helper__[\"b\" /* getStyleNameFromClasses */])(__WEBPACK_IMPORTED_MODULE_1__helper__[\"a\" /* STYLES */], className);\n        setAttributes({ style: style });\n        return wp.element.createElement(RichText, {\n            placeholder: __('Add alert message...'),\n            tagName: 'div',\n            className: className + ' alert alert-' + style,\n            value: attributes.content,\n            multiline: false,\n            onChange: function onChange(content) {\n                return setAttributes({ content: content });\n            }\n        });\n    },\n\n\n    /**\n     * The save function defines the way in which the different attributes should be combined\n     * into the final markup, which is then serialized by Gutenberg into post_content.\n     *\n     * The \"save\" property must be specified and must be a valid function.\n     *\n     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n     */\n    save: function save(_ref2) {\n        var attributes = _ref2.attributes;\n\n        return wp.element.createElement(RichText.Content, { className: 'alert alert-' + attributes.style, tagName: 'div', value: attributes.content });\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b21lYWxlcnQvaW5kZXguanM/OTlhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBndXRlbmJlcmctY3VzdG9tLWJsb2NrXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgU1RZTEVTLCBnZXRTdHlsZU5hbWVGcm9tQ2xhc3NlcyB9IGZyb20gJy4vaGVscGVyJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIFJpY2hUZXh0ID0gd3AuZWRpdG9yLlJpY2hUZXh0O1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYWtzL2Jsb2NrLWd1dGVuYmVyZy1jdXN0b20tYmxvY2snLCB7XG4gICAgLy8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG4gICAgdGl0bGU6IF9fKCdndXRlbmJlcmctY3VzdG9tLWJsb2NrIC0gQUtTIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuICAgIGljb246ICd5ZXMnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG4gICAgY2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cbiAgICBrZXl3b3JkczogW19fKCdndXRlbmJlcmctY3VzdG9tLWJsb2NrIOKAlCBBS1MgQmxvY2snKSwgX18oJ0FLUyBFeGFtcGxlJyksIF9fKCdjcmVhdGUtZ3V0ZW4tYmxvY2snKV0sXG4gICAgc3R5bGVzOiBTVFlMRVMsXG5cbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICBzb3VyY2U6ICdodG1sJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLmFsZXJ0J1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICAgICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAgICAqXG4gICAgICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgICAgKi9cbiAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gX3JlZi5pc1NlbGVjdGVkO1xuXG4gICAgICAgIC8vIENyZWF0ZXMgYSA8cCBjbGFzcz0nd3AtYmxvY2stY2diLWJsb2NrLWFrcy1ndXRlbi1ibG9jayc+PC9wPi5cbiAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3R5bGVOYW1lRnJvbUNsYXNzZXMoU1RZTEVTLCBjbGFzc05hbWUpO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IHN0eWxlIH0pO1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogX18oJ0FkZCBhbGVydCBtZXNzYWdlLi4uJyksXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJyBhbGVydCBhbGVydC0nICsgc3R5bGUsXG4gICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5jb250ZW50LFxuICAgICAgICAgICAgbXVsdGlsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBjb250ZW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAgICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgICAgKlxuICAgICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgICAqL1xuICAgIHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG4gICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwgeyBjbGFzc05hbWU6ICdhbGVydCBhbGVydC0nICsgYXR0cmlidXRlcy5zdHlsZSwgdGFnTmFtZTogJ2RpdicsIHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQgfSk7XG4gICAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3VzdG9tZWFsZXJ0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*************************************!*\
  !*** ./src/customealert/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b21lYWxlcnQvc3R5bGUuc2Nzcz9jMzg5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3VzdG9tZWFsZXJ0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */,
/* 7 */
/*!************************************!*\
  !*** ./src/customealert/helper.js ***!
  \************************************/
/*! exports provided: STYLES, getStyleNameFromClasses */
/*! exports used: STYLES, getStyleNameFromClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return STYLES; });\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = getStyleNameFromClasses;\nvar __ = wp.i18n.__;\n\n\nvar STYLES = [{\n    name: 'primary',\n    label: __('Primary'),\n    isDefault: true\n}, {\n    name: 'secondary',\n    label: __('Secondary')\n}, {\n    name: 'success',\n    label: __('Success')\n}, {\n    name: 'danger',\n    label: __('Danger')\n}, {\n    name: 'warning',\n    label: __('Warning')\n}, {\n    name: 'info',\n    label: __('Info')\n}, {\n    name: 'light',\n    label: __('Light')\n}, {\n    name: 'dark',\n    label: __('Dark')\n}];\n\nfunction getStyleNameFromClasses(styles, classes) {\n    var style = classes && styles.find(function (style) {\n        return classes.includes(style.name);\n    });\n    return style ? style.name : 'primary';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b21lYWxlcnQvaGVscGVyLmpzPzMwZWYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXztcblxuXG5leHBvcnQgdmFyIFNUWUxFUyA9IFt7XG4gICAgbmFtZTogJ3ByaW1hcnknLFxuICAgIGxhYmVsOiBfXygnUHJpbWFyeScpLFxuICAgIGlzRGVmYXVsdDogdHJ1ZVxufSwge1xuICAgIG5hbWU6ICdzZWNvbmRhcnknLFxuICAgIGxhYmVsOiBfXygnU2Vjb25kYXJ5Jylcbn0sIHtcbiAgICBuYW1lOiAnc3VjY2VzcycsXG4gICAgbGFiZWw6IF9fKCdTdWNjZXNzJylcbn0sIHtcbiAgICBuYW1lOiAnZGFuZ2VyJyxcbiAgICBsYWJlbDogX18oJ0RhbmdlcicpXG59LCB7XG4gICAgbmFtZTogJ3dhcm5pbmcnLFxuICAgIGxhYmVsOiBfXygnV2FybmluZycpXG59LCB7XG4gICAgbmFtZTogJ2luZm8nLFxuICAgIGxhYmVsOiBfXygnSW5mbycpXG59LCB7XG4gICAgbmFtZTogJ2xpZ2h0JyxcbiAgICBsYWJlbDogX18oJ0xpZ2h0Jylcbn0sIHtcbiAgICBuYW1lOiAnZGFyaycsXG4gICAgbGFiZWw6IF9fKCdEYXJrJylcbn1dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVOYW1lRnJvbUNsYXNzZXMoc3R5bGVzLCBjbGFzc2VzKSB7XG4gICAgdmFyIHN0eWxlID0gY2xhc3NlcyAmJiBzdHlsZXMuZmluZChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuaW5jbHVkZXMoc3R5bGUubmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlID8gc3R5bGUubmFtZSA6ICdwcmltYXJ5Jztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jdXN0b21lYWxlcnQvaGVscGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);