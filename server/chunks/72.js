exports.id = 72;
exports.ids = [72];
exports.modules = {

/***/ 8178:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1322));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2454));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9492));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1812))

/***/ }),

/***/ 7865:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 1322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(2196);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(2050);
// EXTERNAL MODULE: ./components/Header/NavMenu/NavMenu.module.css
var NavMenu_module = __webpack_require__(896);
var NavMenu_module_default = /*#__PURE__*/__webpack_require__.n(NavMenu_module);
;// CONCATENATED MODULE: ./public/icons/cart.svg
/* harmony default export */ const cart = ({"src":"/_next/static/media/cart.dc6dfbbf.svg","height":19,"width":18,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/profile.svg
/* harmony default export */ const profile = ({"src":"/_next/static/media/profile.7f427fb1.svg","height":18,"width":16,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/cart-white.svg
/* harmony default export */ const cart_white = ({"src":"/_next/static/media/cart-white.8de08507.svg","height":19,"width":18,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/profile-white.svg
/* harmony default export */ const profile_white = ({"src":"/_next/static/media/profile-white.3b9969d9.svg","height":19,"width":16,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/Header/NavMenu/NavMenu.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const NavMenu = ({ isMenuOpen })=>{
    const [selectedLink, setSelectedLink] = (0,react_.useState)("Home");
    const handleLinkClick = (link)=>setSelectedLink(link);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (NavMenu_module_default()).navContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: isMenuOpen ? (NavMenu_module_default()).openedMenu : (NavMenu_module_default()).navMenu,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (NavMenu_module_default()).navList,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (NavMenu_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: selectedLink === "Home" ? (NavMenu_module_default()).selected : "",
                                onClick: ()=>handleLinkClick("Home"),
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: `${(NavMenu_module_default()).navItem} ${(NavMenu_module_default()).featuresLink}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/features",
                                    className: selectedLink === "Features" ? (NavMenu_module_default()).selected : "",
                                    onClick: ()=>handleLinkClick("Features"),
                                    children: [
                                        "Features",
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                            icon: free_solid_svg_icons/* faChevronDown */.ptq,
                                            className: (NavMenu_module_default()).chevronDownIcon
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: (NavMenu_module_default()).featuresMenu,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (NavMenu_module_default()).featuresItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/feature1",
                                                children: "Feature 1"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (NavMenu_module_default()).featuresItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/feature2",
                                                children: "Feature 2"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (NavMenu_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog",
                                className: selectedLink === "Blog" ? (NavMenu_module_default()).selected : "",
                                onClick: ()=>handleLinkClick("Blog"),
                                children: "Blog"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (NavMenu_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/shop",
                                className: selectedLink === "Shop" ? (NavMenu_module_default()).selected : "",
                                onClick: ()=>handleLinkClick("Shop"),
                                children: "Shop"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (NavMenu_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                className: selectedLink === "About" ? (NavMenu_module_default()).selected : "",
                                onClick: ()=>handleLinkClick("About"),
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (NavMenu_module_default()).navItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contacts",
                                className: selectedLink === "Contact" ? (NavMenu_module_default()).selected : "",
                                onClick: ()=>handleLinkClick("Contact"),
                                children: "Contact"
                            })
                        })
                    ]
                }),
                isMenuOpen ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NavMenu_module_default()).icons,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: profile_white,
                            alt: "Profile",
                            className: (NavMenu_module_default()).profileIcon
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: cart_white,
                            alt: "Cart",
                            className: (NavMenu_module_default()).cartIcon
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NavMenu_module_default()).icons,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: profile,
                            alt: "Profile",
                            className: (NavMenu_module_default()).profileIcon
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: cart,
                            alt: "Cart",
                            className: (NavMenu_module_default()).cartIcon
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const NavMenu_NavMenu = (NavMenu);

// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(5772);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./public/icons/burger-menu.svg
/* harmony default export */ const burger_menu = ({"src":"/_next/static/media/burger-menu.2415594c.svg","height":12,"width":18,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/cross.svg
/* harmony default export */ const cross = ({"src":"/_next/static/media/cross.92b1bff7.svg","height":18,"width":18,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/Header/Header.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0,react_.useState)(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `${(Header_module_default()).header} ${isMenuOpen && (Header_module_default()).headerOpen}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Logo Here"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: (Header_module_default()).navbarToggler,
                onClick: toggleMenu,
                children: isMenuOpen ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: cross,
                    alt: "Cross",
                    className: (Header_module_default()).crossIcon
                }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: burger_menu,
                    alt: "Burger Menu",
                    className: (Header_module_default()).burgerIcon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavMenu_NavMenu, {
                isMenuOpen: isMenuOpen
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 8074:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__o4_Ec",
	"logo": "Footer_logo__ZNv_V",
	"footerContent": "Footer_footerContent__8pw5x"
};


/***/ }),

/***/ 5762:
/***/ ((module) => {

// Exports
module.exports = {
	"footerLinks": "FooterLinks_footerLinks__97gxv",
	"footerSection": "FooterLinks_footerSection__R9le3",
	"footerTitle": "FooterLinks_footerTitle__s0hA9",
	"detailsItem": "FooterLinks_detailsItem__znCJb",
	"iconWrapper": "FooterLinks_iconWrapper___Khud",
	"detailsIcon": "FooterLinks_detailsIcon___D1wf",
	"br": "FooterLinks_br__YVpnE",
	"detailsLabel": "FooterLinks_detailsLabel__DszsE"
};


/***/ }),

/***/ 5576:
/***/ ((module) => {

// Exports
module.exports = {
	"subscrForm": "SubscriptionForm_subscrForm__xGxVT",
	"subscrTitle": "SubscriptionForm_subscrTitle__wlAjg",
	"credentials": "SubscriptionForm_credentials__ImjDx",
	"subscrInput": "SubscriptionForm_subscrInput__wslsU",
	"subscrButton": "SubscriptionForm_subscrButton__iBkhJ",
	"comment": "SubscriptionForm_comment__Z3vMR"
};


/***/ }),

/***/ 5772:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__pXml_",
	"headerOpen": "Header_headerOpen__y4ABK",
	"logo": "Header_logo__sUWiP",
	"navbarToggler": "Header_navbarToggler__LyqMI"
};


/***/ }),

/***/ 896:
/***/ ((module) => {

// Exports
module.exports = {
	"navContainer": "NavMenu_navContainer__weweG",
	"navMenu": "NavMenu_navMenu__FfD9Y",
	"openedMenu": "NavMenu_openedMenu__m53_b",
	"profileIcon": "NavMenu_profileIcon__X8MeB",
	"cartIcon": "NavMenu_cartIcon__39PzY",
	"navItem": "NavMenu_navItem__fj_XW",
	"featuresItem": "NavMenu_featuresItem__376h8",
	"selected": "NavMenu_selected__sC_mi",
	"featuresMenu": "NavMenu_featuresMenu__kaSxM",
	"featuresLink": "NavMenu_featuresLink__q1vyY",
	"chevronDownIcon": "NavMenu_chevronDownIcon__rEYV3",
	"icons": "NavMenu_icons__Ton7n",
	"navList": "NavMenu_navList__b_41z"
};


/***/ }),

/***/ 1380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(9175);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs
var fontawesome_svg_core = __webpack_require__(5906);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/Header/Header.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Documents\GitHub\nextjs-test-assignment\components\Header\Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(8074);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/icons/phone.svg
var phone = __webpack_require__(3946);
// EXTERNAL MODULE: ./public/icons/letter.svg
var letter = __webpack_require__(5122);
// EXTERNAL MODULE: ./public/icons/location.svg
var icons_location = __webpack_require__(3647);
// EXTERNAL MODULE: ./components/Footer/FooterLinks/FooterLinks.module.css
var FooterLinks_module = __webpack_require__(5762);
var FooterLinks_module_default = /*#__PURE__*/__webpack_require__.n(FooterLinks_module);
;// CONCATENATED MODULE: ./components/Footer/FooterLinks/FooterLinks.jsx







const FooterLinks = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (FooterLinks_module_default()).footerLinks,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (FooterLinks_module_default()).footerSection,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (FooterLinks_module_default()).footerTitle,
                        children: "Reach Us"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (FooterLinks_module_default()).detailsItem,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (FooterLinks_module_default()).iconWrapper,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: phone/* default */.Z,
                                    alt: "phone",
                                    className: (FooterLinks_module_default()).detailsIcon
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (FooterLinks_module_default()).detailsLabel,
                                children: "+1012 3456 789"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (FooterLinks_module_default()).detailsItem,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (FooterLinks_module_default()).iconWrapper,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: letter/* default */.Z,
                                    alt: "email",
                                    className: (FooterLinks_module_default()).detailsIcon
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (FooterLinks_module_default()).detailsLabel,
                                children: "demo@gmail.com"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (FooterLinks_module_default()).detailsItem,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (FooterLinks_module_default()).iconWrapper,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: icons_location/* default */.Z,
                                    alt: "location",
                                    className: (FooterLinks_module_default()).detailsIcon
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (FooterLinks_module_default()).detailsLabel,
                                children: [
                                    "132 Dartmouth Street Boston, ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        className: (FooterLinks_module_default()).br
                                    }),
                                    "Massachusetts 02156 United States"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (FooterLinks_module_default()).footerSection,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (FooterLinks_module_default()).footerTitle,
                        children: "Company"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (FooterLinks_module_default()).footerList,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog",
                                    children: "Blogs"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (FooterLinks_module_default()).footerSection,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (FooterLinks_module_default()).footerTitle,
                        children: "Legal"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (FooterLinks_module_default()).footerList,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Privacy Policy"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Terms & Services"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Terms of Use"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Refund Policy"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (FooterLinks_module_default()).footerSection,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (FooterLinks_module_default()).footerTitle,
                        children: "Quick Links"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (FooterLinks_module_default()).footerList,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Techlabz Keybox"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Downloads"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Forum"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const FooterLinks_FooterLinks = (FooterLinks);

// EXTERNAL MODULE: ./components/Footer/SubscriptionForm/SubscriptionForm.module.css
var SubscriptionForm_module = __webpack_require__(5576);
var SubscriptionForm_module_default = /*#__PURE__*/__webpack_require__.n(SubscriptionForm_module);
;// CONCATENATED MODULE: ./components/Footer/SubscriptionForm/SubscriptionForm.jsx


const SubscriptionForm = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (SubscriptionForm_module_default()).subscrForm,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (SubscriptionForm_module_default()).subscrTitle,
                children: "Join Our Newsletter"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SubscriptionForm_module_default()).credentials,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Your email address",
                        className: (SubscriptionForm_module_default()).subscrInput
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (SubscriptionForm_module_default()).subscrButton,
                        children: "Subscribe"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (SubscriptionForm_module_default()).comment,
                children: "*\xa0\xa0Will send you weekly updates for your better tool management."
            })
        ]
    });
};
/* harmony default export */ const SubscriptionForm_SubscriptionForm = (SubscriptionForm);

;// CONCATENATED MODULE: ./components/Footer/Footer.jsx





const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Logo Here"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).footerContent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FooterLinks_FooterLinks, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SubscriptionForm_SubscriptionForm, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
;// CONCATENATED MODULE: ./app/layout.js






fontawesome_svg_core.config.autoAddCss = false;
const metadata = {
    title: "NextJS Assignment Pokras",
    description: "Test assignment for Mbunity company"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "container",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 5122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/letter.d667a5b4.svg","height":16,"width":20,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 9492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/letter.d667a5b4.svg","height":16,"width":20,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/location.5f662417.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/location.5f662417.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/phone.dd9c0fe2.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 2454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/phone.dd9c0fe2.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;