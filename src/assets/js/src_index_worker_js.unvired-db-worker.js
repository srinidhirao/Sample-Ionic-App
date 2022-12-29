/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.worker.js":
/*!*****************************!*\
  !*** ./src/index.worker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n\n\nasync function saveWebDb(appName, arraybuff) {\n\n  // let start = performance.now();\n\n  var db;\n  var request = indexedDB.open(appName);\n  request.onupgradeneeded = function (event) {\n    db = event.target.result;\n    var objectStore = db.createObjectStore(\"appData\", { keyPath: \"id\" });\n  };\n  request.onerror = function (event) {\n    console.log(\"The database failed to open: \" + event);\n  };\n  request.onsuccess = function (event) {\n    db = request.result;\n    db.transaction([\"appData\"], \"readwrite\").objectStore(\"appData\").delete(1);\n    if (!db.objectStoreNames.contains(\"appData\")) {\n      objectStore = db.createObjectStore(\"appData\", { keyPath: \"id\" });\n    }\n    var transRequest = db\n      .transaction([\"appData\"], \"readwrite\")\n      .objectStore(\"appData\")\n      .add({ id: 1, data: arraybuff });\n\n    transRequest.onsuccess = function (event) {\n      console.log(\"The data has been written successfully\");\n      // let timeTaken = performance.now() - start;\n      // console.log(\"Worker - Total time taken : \" + timeTaken + \" milliseconds\");\n    };\n    transRequest.onerror = function (event) {\n      console.log(\"Failed to write data: \" + event);\n    };\n  };\n};\n\nconst api = { saveWebDb };\n(0,comlink__WEBPACK_IMPORTED_MODULE_0__.expose)(api)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import initSqlJs from '@jlongster/sql.js';\n// import { SQLiteFS } from 'absurd-sql';\n// import IndexedDBBackend from 'absurd-sql/dist/indexeddb-backend';\n// import { expose } from \"comlink\";\n\n// self.db = null;\n\n// //Initialize db\n// async function init() {\n//   let SQL = await initSqlJs({ locateFile: file => file });\n//   let sqlFS = new SQLiteFS(SQL.FS, new IndexedDBBackend());\n//   SQL.register_for_idb(sqlFS);\n\n//   SQL.FS.mkdir('/sql');\n//   SQL.FS.mount(sqlFS, {}, '/sql');\n\n//   self.db = new SQL.Database('/sql/db.sqlite', { filename: true });\n//   self.db.exec(`\n//     PRAGMA page_size=8192;\n//     PRAGMA journal_mode=MEMORY;\n//   `);\n// }\n\n// // Execute query without return result\n// async function execute(query) {\n//   try {\n//     self.db.run(query);\n//     // self.db.exec(query);\n//   } catch (e) {\n//     console.log('SQL Error - execute- :' + e)\n//   }\n// }\n\n// //Execute query and return results\n// async function executeQuery(query) {\n//   let rows = []\n//   try {\n//     if (!self.db) {\n//       console.log('App DB not initialized yet. Call this api after sometime.')\n//       return rows\n//     }\n\n//     var stmt = self.db.prepare(query);\n//     while (stmt.step()) {\n//       var row = stmt.getAsObject();\n//       rows.push(row);\n//     }\n//     stmt.free();\n//   } catch (e) {\n//     console.log('SQL Error: - executeQuery -: ' + e)\n//   }\n//   return rows;\n// }\n\n// //Execute bind query without return result\n// async function executeBindQuery(query, value) {\n//   try {\n//     self.db.run(query, value);\n//   } catch (e) {\n//     console.log('SQL Error - executeBindQuery- :' + e)\n//   }\n// }\n\n// async function exportDb() {\n//   return self.db.export();\n// }\n\n// const api = { init, execute, executeQuery, executeBindQuery, exportDb };\n\n// expose(api)\n\n\n\n\n\n// import initSqlJs from '@jlongster/sql.js';\n// import { SQLiteFS } from 'absurd-sql';\n// import IndexedDBBackend from 'absurd-sql/dist/indexeddb-backend';\n\n// async function init() {\n//   let SQL = await initSqlJs({ locateFile: file => file });\n//   let sqlFS = new SQLiteFS(SQL.FS, new IndexedDBBackend());\n//   SQL.register_for_idb(sqlFS);\n\n//   SQL.FS.mkdir('/sql');\n//   SQL.FS.mount(sqlFS, {}, '/sql');\n\n//   let db = new SQL.Database('/sql/db.sqlite', { filename: true });\n//   db.exec(`\n//     PRAGMA page_size=8192;\n//     PRAGMA journal_mode=MEMORY;\n//   `);\n//   return db;\n// }\n\n// async function runQueries() {\n//   let db = await init();\n\n//   try {\n//     db.exec('CREATE TABLE kv (key TEXT PRIMARY KEY, value TEXT)');\n//   } catch (e) {}\n\n//   db.exec('BEGIN TRANSACTION');\n//   let stmt = db.prepare('INSERT OR REPLACE INTO kv (key, value) VALUES (?, ?)');\n//   for (let i = 0; i < 5; i++) {\n//     stmt.run([i, ((Math.random() * 100) | 0).toString()]);\n//   }\n//   stmt.free();\n//   db.exec('COMMIT');\n\n//   stmt = db.prepare(`SELECT SUM(value) FROM kv`);\n//   stmt.step();\n//   console.log('Result:', stmt.getAsObject());\n//   stmt.free();\n// }\n\n// runQueries();\n\n\n\n//# sourceURL=webpack://unvired-db-worker/./src/index.worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_comlink_dist_esm_comlink_mjs"], () => (__webpack_require__("./src/index.worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".unvired-db-worker.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_index_worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkunvired_db_worker"] = self["webpackChunkunvired_db_worker"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_comlink_dist_esm_comlink_mjs").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;