!function(){"use strict";var e=window.wp.escapeHtml,t=window.wp.i18n,o=window.wp.element;const r=o.createElement;var s=s=>{let{attributes:{shortcode:c},shortCodeList:a,shortcodeUpdate:l}=s;return(0,o.createElement)(o.Fragment,null,r("div",{className:"spwcs-gutenberg-shortcode editor-styles-wrapper"},r("select",{className:"spwcs-shortcode-selector",onChange:e=>l(e),value:(0,e.escapeAttribute)(c)},r("option",{value:(0,e.escapeAttribute)("0")},(0,e.escapeHTML)((0,t.__)("-- Select a shortcode --","woo-category-slider-grid"))),a.map((t=>{var o=t.title.length>35?t.title.substring(0,30)+".... #("+t.id+")":t.title+" #("+t.id+")";return r("option",{value:(0,e.escapeAttribute)(t.id.toString()),key:(0,e.escapeAttribute)(t.id.toString())},(0,e.escapeHTML)(o))})))))},c=window.wp.blocks,a=window.wp.components,l=window.wp.blockEditor;const{serverSideRender:i}=wp,n=o.createElement;(0,c.registerBlockType)("woo-category-slider/shortcode",{title:(0,e.escapeHTML)((0,t.__)("WooCategory","woo-category-slider-grid")),description:(0,e.escapeHTML)((0,t.__)("Use WooCategory to insert a shortcode in your page.","woo-category-slider-grid")),icon:(0,e.escapeAttribute)(" wcsp-icon-wcs-icon"),category:"common",supports:{html:!0},edit:r=>{const{attributes:c,setAttributes:d}=r;var p=sp_woo_category_slider_load_script.shortCodeList;let w=e=>{let t=!1,o=setInterval((function(){let r=jQuery("#sp-wcsp-wrapper-"+e).parents().parents().attr("id");document.getElementById(r)&&(jQuery("#wcsp-preloader-"+e).css({opacity:0,display:"none"}),jQuery("#sp-wcsp-slider-section-"+e).animate({opacity:1},600),jQuery.getScript(sp_woo_category_slider_load_script.loadScript),jQuery.getScript(sp_woo_category_slider_load_script.path+"public/js/preloader.min.js"),t=!0,r=""),t&&clearInterval(o),0==e&&clearInterval(o)}),10)},u=t=>{var o;o=t,d({shortcode:(0,e.escapeAttribute)(o.target.value)});let r=(0,e.escapeAttribute)(t.target.value);w(r)};if(jQuery(".sp-wcsp-slider-section:not(.sp-wcsp-loaded)").length>0){let t=(0,e.escapeAttribute)(c.shortcode);w(t)}return c.preview?n("div",{className:"spwcsp_shortcode_block_preview_image"},n("img",{src:(0,e.escapeAttribute)(sp_woo_category_slider_load_script.path+"admin/GutenbergBlock/assets/wcs-block-preview.svg")})):0===p.length?(0,o.createElement)(o.Fragment,null,n("div",{className:"components-placeholder components-placeholder is-large"},n("div",{className:"components-placeholder__label"},n("span",{className:"block-editor-block-icon wcsp-icon-wcs-icon"}),(0,e.escapeHTML)((0,t.__)("WooCategory","woo-category-slider-grid"))),n("div",{className:"components-placeholder__instructions"},(0,e.escapeHTML)((0,t.__)("No shortcode found. ","woo-category-slider-grid")),n("a",{href:(0,e.escapeAttribute)(sp_woo_category_slider_load_script.url)},(0,e.escapeHTML)((0,t.__)("Create a shortcode now!","woo-category-slider-grid")))))):c.shortcode&&0!=c.shortcode?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(a.PanelBody,{title:"Select a shortcode"},(0,o.createElement)(a.PanelRow,null,(0,o.createElement)(s,{attributes:c,shortCodeList:p,shortcodeUpdate:u})))),(0,o.createElement)(i,{block:"woo-category-slider/shortcode",attributes:c})):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(a.PanelBody,{title:"Select a shortcode"},(0,o.createElement)(a.PanelRow,null,(0,o.createElement)(s,{attributes:c,shortCodeList:p,shortcodeUpdate:u})))),n("div",{className:"components-placeholder components-placeholder is-large"},n("div",{className:"components-placeholder__label"},n("span",{className:"block-editor-block-icon wcsp-icon-wcs-icon"}),(0,e.escapeHTML)((0,t.__)("WooCategory","woo-category-slider-grid"))),n("div",{className:"components-placeholder__instructions"},(0,e.escapeHTML)((0,t.__)("Select a shortcode","woo-category-slider-grid"))),(0,o.createElement)(s,{attributes:c,shortCodeList:p,shortcodeUpdate:u})))},save(){return null}})}();