"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/app/Swap",{

/***/ "./pages/app/Swap.jsx":
/*!****************************!*\
  !*** ./pages/app/Swap.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/popover */ \"./node_modules/antd/lib/popover/index.js\");\n/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/radio */ \"./node_modules/antd/lib/radio/index.js\");\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal */ \"./node_modules/antd/lib/modal/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_ArrowDownOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/ArrowDownOutlined */ \"./node_modules/@ant-design/icons/lib/icons/ArrowDownOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/lib/icons/DownOutlined */ \"./node_modules/@ant-design/icons/lib/icons/DownOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SettingOutlined */ \"./node_modules/@ant-design/icons/lib/icons/SettingOutlined.js\");\n/* harmony import */ var _tokenList_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokenList.json */ \"./pages/tokenList.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Swap() {\n    var _tokenList;\n    _s();\n    const [slippage, setSlippage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2.5);\n    const [tokenOneAmount, setTokenOneAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tokenTwoAmount, setTokenTwoAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tokenOne, setTokenOne] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_tokenList_json__WEBPACK_IMPORTED_MODULE_2__[0]);\n    const [tokenTwo, setTokenTwo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_tokenList_json__WEBPACK_IMPORTED_MODULE_2__[1]);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [changeToken, setChangeToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function handleSlippageChange(e) {\n        setSlippage(e.target.value);\n    }\n    const settings = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Slippage Tolerance\"\n            }, void 0, false, {\n                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Group, {\n                    value: slippage,\n                    onChange: handleSlippageChange,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Button, {\n                            value: 0.5,\n                            children: \"0.5%\"\n                        }, void 0, false, {\n                            fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Button, {\n                            value: 2.5,\n                            children: \"2.5%\"\n                        }, void 0, false, {\n                            fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Button, {\n                            value: 5,\n                            children: \"5.0%\"\n                        }, void 0, false, {\n                            fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    function changeAmount(e) {\n        setTokenOneAmount(e.target.value);\n        if (e.target.value && prices) {\n            setTokenTwoAmount((e.target.value * prices.ratio).toFixed(2));\n        } else {\n            setTokenTwoAmount(null);\n        }\n    }\n    function switchTokens() {\n        setPrices(null);\n        setTokenOneAmount(null);\n        setTokenTwoAmount(null);\n        const one = tokenOne;\n        const two = tokenTwo;\n        setTokenOne(two);\n        setTokenTwo(one);\n        fetchPrices(two.address, one.address);\n    }\n    function openModal(asset) {\n        setChangeToken(asset);\n        setIsOpen(true);\n    }\n    function modifyToken(i) {\n        setPrices(null);\n        setTokenOneAmount(null);\n        setTokenTwoAmount(null);\n        if (changeToken === 1) {\n            setTokenOne(_tokenList_json__WEBPACK_IMPORTED_MODULE_2__[i]);\n            fetchPrices(_tokenList_json__WEBPACK_IMPORTED_MODULE_2__[i].address, tokenTwo.address);\n        } else {\n            setTokenTwo(_tokenList_json__WEBPACK_IMPORTED_MODULE_2__[i]);\n            fetchPrices(tokenOne.address, _tokenList_json__WEBPACK_IMPORTED_MODULE_2__[i].address);\n        }\n        setIsOpen(false);\n    }\n    async function fetchPrices(one, two) {\n    // const res = await axios.get(`http://localhost:3000/tokenPrice`, {\n    //   params: { addressOne: one, addressTwo: two },\n    // });\n    // setPrices(res.data);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPrices(_tokenList_json__WEBPACK_IMPORTED_MODULE_2__[0].address, _tokenList_json__WEBPACK_IMPORTED_MODULE_2__[1].address);\n    }, []);\n    //   function fetchDexSwap() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: isOpen,\n                footer: null,\n                onCancel: ()=>setIsOpen(false),\n                title: \"Select a token\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modalContent\",\n                    children: (_tokenList = _tokenList_json__WEBPACK_IMPORTED_MODULE_2__) === null || _tokenList === void 0 ? void 0 : _tokenList.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tokenChoice\",\n                            onClick: ()=>modifyToken(i),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: e.img,\n                                    alt: e.ticker,\n                                    className: \"tokenLogo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tokenChoiceNames\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tokenName\",\n                                            children: e.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tokenTicker\",\n                                            children: e.ticker\n                                        }, void 0, false, {\n                                            fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tradeBox text-gray-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"tradeBoxHeader\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_popover__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                content: settings,\n                                title: \"Settings\",\n                                trigger: \"click\",\n                                placement: \"bottomRight\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"cog\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inputs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                placeholder: \"0\",\n                                value: tokenOneAmount,\n                                onChange: changeAmount,\n                                disabled: !prices\n                            }, void 0, false, {\n                                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                placeholder: \"0\",\n                                value: tokenTwoAmount,\n                                disabled: true\n                            }, void 0, false, {\n                                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"switchButton\",\n                                onClick: switchTokens,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_ArrowDownOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    className: \"switchArrow\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"assetOne\",\n                                onClick: ()=>openModal(1),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: tokenOne.img,\n                                        alt: \"assetOneLogo\",\n                                        className: \"assetLogo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 13\n                                    }, this),\n                                    tokenOne.ticker,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"assetTwo\",\n                                onClick: ()=>openModal(2),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: tokenTwo.img,\n                                        alt: \"assetOneLogo\",\n                                        className: \"assetLogo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 13\n                                    }, this),\n                                    tokenTwo.ticker,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                        lineNumber: 145,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"swapButton\",\n                        disabled: !tokenOneAmount || !isConnected,\n                        children: \"Swap\"\n                    }, void 0, false, {\n                        fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/skalez/Desktop/NewArbitrak/ArbiDappSample/pages/app/Swap.jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true);\n}\n_s(Swap, \"kxdVAA/FN7URxl9xdnx3S+dXcsk=\");\n_c = Swap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Swap);\nSwap.getLayout = function PageLayout(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: page\n    }, void 0, false);\n};\nvar _c;\n$RefreshReg$(_c, \"Swap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDakM7Z0NBQUlvQixXQUFVO2dDQUFlRSxTQUFTZjswQ0FDckMsNEVBQUNsQyxxRkFBaUJBO29DQUFDK0MsV0FBVTs7Ozs7Ozs7Ozs7MENBRS9CLDhEQUFDcEI7Z0NBQUlvQixXQUFVO2dDQUFXRSxTQUFTLElBQU1WLFVBQVU7O2tEQUNqRCw4REFBQ1c7d0NBQUlDLEtBQUt2QyxTQUFTc0MsR0FBRzt3Q0FBRUUsS0FBSTt3Q0FBZUwsV0FBVTs7Ozs7O29DQUNwRG5DLFNBQVN5QyxNQUFNO2tEQUNoQiw4REFBQ3BELGdGQUFZQTs7Ozs7Ozs7Ozs7MENBRWYsOERBQUMwQjtnQ0FBSW9CLFdBQVU7Z0NBQVdFLFNBQVMsSUFBTVYsVUFBVTs7a0RBQ2pELDhEQUFDVzt3Q0FBSUMsS0FBS3JDLFNBQVNvQyxHQUFHO3dDQUFFRSxLQUFJO3dDQUFlTCxXQUFVOzs7Ozs7b0NBQ3BEakMsU0FBU3VDLE1BQU07a0RBQ2hCLDhEQUFDcEQsZ0ZBQVlBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHakIsOERBQUMwQjt3QkFDQ29CLFdBQVU7d0JBQ1ZhLFVBQVUsQ0FBQ3BELGtCQUFrQixDQUFDcUQ7a0NBRS9COzs7Ozs7Ozs7Ozs7WUFHRzs7O0FBSVo7R0FwSlN4RDtLQUFBQTtBQXNKVCwrREFBZUEsSUFBSUEsRUFBQztBQUVwQkEsS0FBS3lELFNBQVMsR0FBRyxTQUFTQyxXQUFXQyxJQUFJO0lBQ3ZDLHFCQUFPO2tCQUFHQTs7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcHAvU3dhcC5qc3g/NjRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQsIFBvcG92ZXIsIFJhZGlvLCBNb2RhbCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge1xuICBBcnJvd0Rvd25PdXRsaW5lZCxcbiAgRG93bk91dGxpbmVkLFxuICBTZXR0aW5nT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHRva2VuTGlzdCBmcm9tIFwiLi4vdG9rZW5MaXN0Lmpzb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gU3dhcCgpIHtcbiAgY29uc3QgW3NsaXBwYWdlLCBzZXRTbGlwcGFnZV0gPSB1c2VTdGF0ZSgyLjUpO1xuICBjb25zdCBbdG9rZW5PbmVBbW91bnQsIHNldFRva2VuT25lQW1vdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdG9rZW5Ud29BbW91bnQsIHNldFRva2VuVHdvQW1vdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdG9rZW5PbmUsIHNldFRva2VuT25lXSA9IHVzZVN0YXRlKHRva2VuTGlzdFswXSk7XG4gIGNvbnN0IFt0b2tlblR3bywgc2V0VG9rZW5Ud29dID0gdXNlU3RhdGUodG9rZW5MaXN0WzFdKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoYW5nZVRva2VuLCBzZXRDaGFuZ2VUb2tlbl0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNsaXBwYWdlQ2hhbmdlKGUpIHtcbiAgICBzZXRTbGlwcGFnZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBzZXR0aW5ncyA9IChcbiAgICA8PlxuICAgICAgPGRpdj5TbGlwcGFnZSBUb2xlcmFuY2U8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxSYWRpby5Hcm91cCB2YWx1ZT17c2xpcHBhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVTbGlwcGFnZUNoYW5nZX0+XG4gICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MC41fT4wLjUlPC9SYWRpby5CdXR0b24+XG4gICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mi41fT4yLjUlPC9SYWRpby5CdXR0b24+XG4gICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17NX0+NS4wJTwvUmFkaW8uQnV0dG9uPlxuICAgICAgICA8L1JhZGlvLkdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG4gIGZ1bmN0aW9uIGNoYW5nZUFtb3VudChlKSB7XG4gICAgc2V0VG9rZW5PbmVBbW91bnQoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSAmJiBwcmljZXMpIHtcbiAgICAgIHNldFRva2VuVHdvQW1vdW50KChlLnRhcmdldC52YWx1ZSAqIHByaWNlcy5yYXRpbykudG9GaXhlZCgyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRva2VuVHdvQW1vdW50KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRva2VucygpIHtcbiAgICBzZXRQcmljZXMobnVsbCk7XG4gICAgc2V0VG9rZW5PbmVBbW91bnQobnVsbCk7XG4gICAgc2V0VG9rZW5Ud29BbW91bnQobnVsbCk7XG4gICAgY29uc3Qgb25lID0gdG9rZW5PbmU7XG4gICAgY29uc3QgdHdvID0gdG9rZW5Ud287XG4gICAgc2V0VG9rZW5PbmUodHdvKTtcbiAgICBzZXRUb2tlblR3byhvbmUpO1xuICAgIGZldGNoUHJpY2VzKHR3by5hZGRyZXNzLCBvbmUuYWRkcmVzcyk7XG4gIH1cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKGFzc2V0KSB7XG4gICAgc2V0Q2hhbmdlVG9rZW4oYXNzZXQpO1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGlmeVRva2VuKGkpIHtcbiAgICBzZXRQcmljZXMobnVsbCk7XG4gICAgc2V0VG9rZW5PbmVBbW91bnQobnVsbCk7XG4gICAgc2V0VG9rZW5Ud29BbW91bnQobnVsbCk7XG4gICAgaWYgKGNoYW5nZVRva2VuID09PSAxKSB7XG4gICAgICBzZXRUb2tlbk9uZSh0b2tlbkxpc3RbaV0pO1xuICAgICAgZmV0Y2hQcmljZXModG9rZW5MaXN0W2ldLmFkZHJlc3MsIHRva2VuVHdvLmFkZHJlc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUb2tlblR3byh0b2tlbkxpc3RbaV0pO1xuICAgICAgZmV0Y2hQcmljZXModG9rZW5PbmUuYWRkcmVzcywgdG9rZW5MaXN0W2ldLmFkZHJlc3MpO1xuICAgIH1cbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJpY2VzKG9uZSwgdHdvKSB7XG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9rZW5QcmljZWAsIHtcbiAgICAvLyAgIHBhcmFtczogeyBhZGRyZXNzT25lOiBvbmUsIGFkZHJlc3NUd286IHR3byB9LFxuICAgIC8vIH0pO1xuICAgIC8vIHNldFByaWNlcyhyZXMuZGF0YSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUHJpY2VzKHRva2VuTGlzdFswXS5hZGRyZXNzLCB0b2tlbkxpc3RbMV0uYWRkcmVzcyk7XG4gIH0sIFtdKTtcblxuICAvLyAgIGZ1bmN0aW9uIGZldGNoRGV4U3dhcCgpIHt9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIHtjb250ZXh0SG9sZGVyfSAqL31cbiAgICAgIDxNb2RhbFxuICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgIHRpdGxlPVwiU2VsZWN0IGEgdG9rZW5cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsQ29udGVudFwiPlxuICAgICAgICAgIHt0b2tlbkxpc3Q/Lm1hcCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRva2VuQ2hvaWNlXCJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW9kaWZ5VG9rZW4oaSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZS5pbWd9IGFsdD17ZS50aWNrZXJ9IGNsYXNzTmFtZT1cInRva2VuTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbkNob2ljZU5hbWVzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuTmFtZVwiPntlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuVGlja2VyXCI+e2UudGlja2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhZGVCb3ggdGV4dC1ncmF5LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWRlQm94SGVhZGVyXCI+XG4gICAgICAgICAgPGg0PlN3YXA8L2g0PlxuICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICBjb250ZW50PXtzZXR0aW5nc31cbiAgICAgICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxuICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cImNvZ1wiIC8+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dHNcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXG4gICAgICAgICAgICB2YWx1ZT17dG9rZW5PbmVBbW91bnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQW1vdW50fVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcmljZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCIwXCIgdmFsdWU9e3Rva2VuVHdvQW1vdW50fSBkaXNhYmxlZD17dHJ1ZX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaEJ1dHRvblwiIG9uQ2xpY2s9e3N3aXRjaFRva2Vuc30+XG4gICAgICAgICAgICA8QXJyb3dEb3duT3V0bGluZWQgY2xhc3NOYW1lPVwic3dpdGNoQXJyb3dcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXRPbmVcIiBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoMSl9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Rva2VuT25lLmltZ30gYWx0PVwiYXNzZXRPbmVMb2dvXCIgY2xhc3NOYW1lPVwiYXNzZXRMb2dvXCIgLz5cbiAgICAgICAgICAgIHt0b2tlbk9uZS50aWNrZXJ9XG4gICAgICAgICAgICA8RG93bk91dGxpbmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldFR3b1wiIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbCgyKX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17dG9rZW5Ud28uaW1nfSBhbHQ9XCJhc3NldE9uZUxvZ29cIiBjbGFzc05hbWU9XCJhc3NldExvZ29cIiAvPlxuICAgICAgICAgICAge3Rva2VuVHdvLnRpY2tlcn1cbiAgICAgICAgICAgIDxEb3duT3V0bGluZWQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzd2FwQnV0dG9uXCJcbiAgICAgICAgICBkaXNhYmxlZD17IXRva2VuT25lQW1vdW50IHx8ICFpc0Nvbm5lY3RlZH1cbiAgICAgICAgICAvLyAgIG9uQ2xpY2s9e2ZldGNoRGV4U3dhcH1cbiAgICAgICAgPlxuICAgICAgICAgIFN3YXBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDtcbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dhcDtcblxuU3dhcC5nZXRMYXlvdXQgPSBmdW5jdGlvbiBQYWdlTGF5b3V0KHBhZ2UpIHtcbiAgcmV0dXJuIDw+e3BhZ2V9PC8+O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXQiLCJQb3BvdmVyIiwiUmFkaW8iLCJNb2RhbCIsIm1lc3NhZ2UiLCJBcnJvd0Rvd25PdXRsaW5lZCIsIkRvd25PdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsInRva2VuTGlzdCIsImF4aW9zIiwiU3dhcCIsInNsaXBwYWdlIiwic2V0U2xpcHBhZ2UiLCJ0b2tlbk9uZUFtb3VudCIsInNldFRva2VuT25lQW1vdW50IiwidG9rZW5Ud29BbW91bnQiLCJzZXRUb2tlblR3b0Ftb3VudCIsInRva2VuT25lIiwic2V0VG9rZW5PbmUiLCJ0b2tlblR3byIsInNldFRva2VuVHdvIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2hhbmdlVG9rZW4iLCJzZXRDaGFuZ2VUb2tlbiIsInByaWNlcyIsInNldFByaWNlcyIsImhhbmRsZVNsaXBwYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0dGluZ3MiLCJkaXYiLCJHcm91cCIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwiY2hhbmdlQW1vdW50IiwicmF0aW8iLCJ0b0ZpeGVkIiwic3dpdGNoVG9rZW5zIiwib25lIiwidHdvIiwiZmV0Y2hQcmljZXMiLCJhZGRyZXNzIiwib3Blbk1vZGFsIiwiYXNzZXQiLCJtb2RpZnlUb2tlbiIsImkiLCJvcGVuIiwiZm9vdGVyIiwib25DYW5jZWwiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIm1hcCIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJ0aWNrZXIiLCJuYW1lIiwiaDQiLCJjb250ZW50IiwidHJpZ2dlciIsInBsYWNlbWVudCIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJpc0Nvbm5lY3RlZCIsImdldExheW91dCIsIlBhZ2VMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/app/Swap.jsx\n"));

/***/ })

});