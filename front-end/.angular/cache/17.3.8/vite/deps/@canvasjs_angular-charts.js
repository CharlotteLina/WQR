import {
  CommonModule,
  NgIf,
  NgStyle
} from "./chunk-GK6TM4WN.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtemplate
} from "./chunk-AWEGFRZR.js";
import "./chunk-WSA2QMXP.js";
import {
  __commonJS
} from "./chunk-IEMOZLTW.js";

// node_modules/@canvasjs/charts/canvasjs.min.js
var require_canvasjs_min = __commonJS({
  "node_modules/@canvasjs/charts/canvasjs.min.js"(exports, module) {
    (function() {
      function qa(d, l) {
        d.prototype = eb(l.prototype);
        d.prototype.constructor = d;
        d.base = l.prototype;
      }
      function eb(d) {
        function l() {
        }
        l.prototype = d;
        return new l();
      }
      function Za(d, l, S) {
        "millisecond" === S ? d.setMilliseconds(d.getMilliseconds() + 1 * l) : "second" === S ? d.setSeconds(d.getSeconds() + 1 * l) : "minute" === S ? d.setMinutes(d.getMinutes() + 1 * l) : "hour" === S ? d.setHours(d.getHours() + 1 * l) : "day" === S ? d.setDate(d.getDate() + 1 * l) : "week" === S ? d.setDate(d.getDate() + 7 * l) : "month" === S ? d.setMonth(d.getMonth() + 1 * l) : "year" === S && d.setFullYear(d.getFullYear() + 1 * l);
        return d;
      }
      function da(d, l) {
        var S = false;
        0 > d && (S = true, d *= -1);
        d = "" + d;
        for (l = l ? l : 1; d.length < l; )
          d = "0" + d;
        return S ? "-" + d : d;
      }
      function Ha(d) {
        if (!d)
          return d;
        d = d.replace(/^\s\s*/, "");
        for (var l = /\s/, S = d.length; l.test(d.charAt(--S)); )
          ;
        return d.slice(0, S + 1);
      }
      function Aa(d) {
        d.roundRect = function(d2, S, n2, v2, sa, D, t2, A2) {
          t2 && (this.fillStyle = t2);
          A2 && (this.strokeStyle = A2);
          "undefined" === typeof sa && (sa = 5);
          this.lineWidth = D;
          this.beginPath();
          this.moveTo(d2 + sa, S);
          this.lineTo(d2 + n2 - sa, S);
          this.quadraticCurveTo(d2 + n2, S, d2 + n2, S + sa);
          this.lineTo(d2 + n2, S + v2 - sa);
          this.quadraticCurveTo(d2 + n2, S + v2, d2 + n2 - sa, S + v2);
          this.lineTo(d2 + sa, S + v2);
          this.quadraticCurveTo(d2, S + v2, d2, S + v2 - sa);
          this.lineTo(d2, S + sa);
          this.quadraticCurveTo(d2, S, d2 + sa, S);
          this.closePath();
          t2 && this.fill();
          A2 && 0 < D && this.stroke();
        };
      }
      function Ta(d, l) {
        return d - l;
      }
      function O(d) {
        var l = ((d & 16711680) >> 16).toString(16), S = ((d & 65280) >> 8).toString(16);
        d = ((d & 255) >> 0).toString(16);
        l = 2 > l.length ? "0" + l : l;
        S = 2 > S.length ? "0" + S : S;
        d = 2 > d.length ? "0" + d : d;
        return "#" + l + S + d;
      }
      function fb(d, l) {
        var S = this.length >>> 0, n2 = Number(l) || 0, n2 = 0 > n2 ? Math.ceil(n2) : Math.floor(n2);
        for (0 > n2 && (n2 += S); n2 < S; n2++)
          if (n2 in this && this[n2] === d)
            return n2;
        return -1;
      }
      function n(d) {
        return null === d || "undefined" === typeof d;
      }
      function Ea(d) {
        d.indexOf || (d.indexOf = fb);
        return d;
      }
      function gb(d) {
        if (wa.fSDec)
          d[ja("`eeDwdouMhrudods")](ja("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
            wa._fTWm && wa._fTWm(d);
          });
      }
      function $a(d, l, n2) {
        n2 = n2 || "normal";
        var v2 = d + "_" + l + "_" + n2, $ = ab[v2];
        if (isNaN($)) {
          try {
            if (!ya) {
              var sa = document.body;
              ya = document.createElement("span");
              ya.innerHTML = "";
              var D = document.createTextNode("Mpgyi");
              ya.appendChild(D);
              sa.appendChild(ya);
            }
            ya.style.display = "";
            L(ya, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: d, fontSize: l + "px", fontWeight: n2 });
            $ = Math.round(ya.offsetHeight);
            ya.style.display = "none";
          } catch (t2) {
            $ = Math.ceil(1.1 * l);
          }
          $ = Math.max($, l);
          ab[v2] = $;
        }
        return $;
      }
      function H(d, l) {
        var n2 = [];
        if (n2 = { solid: [], shortDash: [3, 1], shortDot: [1, 1], shortDashDot: [3, 1, 1, 1], shortDashDotDot: [3, 1, 1, 1, 1, 1], dot: [1, 2], dash: [4, 2], dashDot: [
          4,
          2,
          1,
          2
        ], longDash: [8, 2], longDashDot: [8, 2, 1, 2], longDashDotDot: [8, 2, 1, 2, 1, 2] }[d || "solid"])
          for (var v2 = 0; v2 < n2.length; v2++)
            n2[v2] *= l;
        else
          n2 = [];
        return n2;
      }
      function J(d, l, S, v2, $) {
        v2 = v2 || [];
        $ = n($) ? hb ? { passive: false, capture: false } : false : $;
        v2.push([d, l, S, $]);
        return d.addEventListener ? (d.addEventListener(l, S, $), S) : d.attachEvent ? (v2 = function(l2) {
          l2 = l2 || window.event;
          l2.preventDefault = l2.preventDefault || function() {
            l2.returnValue = false;
          };
          l2.stopPropagation = l2.stopPropagation || function() {
            l2.cancelBubble = true;
          };
          S.call(d, l2);
        }, d.attachEvent("on" + l, v2), v2) : false;
      }
      function ib(d) {
        if (d._menuButton)
          d.exportEnabled ? (L(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), Ma(d._menuButton), ta(d, d._menuButton, "menu"), 0 >= navigator.userAgent.search("MSIE") && d._menuButton.childNodes[0] && L(d._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" })) : xa(d._menuButton);
        else if (d.exportEnabled && v) {
          var l = false;
          d._menuButton = document.createElement("button");
          ta(d, d._menuButton, "menu");
          d._toolBar.appendChild(d._menuButton);
          J(d._menuButton, "touchstart", function(d2) {
            l = true;
          }, d.allDOMEventHandlers);
          J(d._menuButton, "click", function() {
            "none" !== d._dropdownMenu.style.display || d._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - d._dropDownCloseTime.getTime() || (d._dropdownMenu.style.display = "block", d._menuButton.blur(), d._dropdownMenu.focus());
          }, d.allDOMEventHandlers, true);
          J(d._menuButton, "mousemove", function() {
            l || (L(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColorOnHover, color: d.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && L(d._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
          }, d.allDOMEventHandlers, true);
          J(d._menuButton, "mouseout", function() {
            l || (L(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && L(d._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
          }, d.allDOMEventHandlers, true);
        }
        if (d.exportEnabled && d._dropdownMenu) {
          var n2 = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888";
          L(
            d._dropdownMenu,
            { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor, boxShadow: "2px 2px 10px " + n2 }
          );
          for (var n2 = d._dropdownMenu.childNodes, V = [d._cultureInfo.printText, d._cultureInfo.saveJPGText, d._cultureInfo.savePNGText], $ = 0; $ < V.length; $++)
            L(n2[$], { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), n2[$].innerHTML = V[$];
        } else
          !d._dropdownMenu && (d.exportEnabled && v) && (l = false, d._dropdownMenu = document.createElement("div"), d._dropdownMenu.setAttribute("tabindex", -1), n2 = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888", L(d._dropdownMenu, { position: "absolute", zIndex: 1, userSelect: "none", MozUserSeelct: "none", WebkitUserSelect: "none", msUserSelect: "none", cursor: "pointer", right: "0px", top: "25px", minWidth: "120px", outline: 0, fontSize: "14px", fontFamily: "Arial, Helvetica, sans-serif", padding: "5px 0px 5px 0px", textAlign: "left", lineHeight: "10px", backgroundColor: d.toolbar.itemBackgroundColor, boxShadow: "2px 2px 10px " + n2 }), d._dropdownMenu.style.display = "none", d._toolBar.appendChild(d._dropdownMenu), J(
            d._dropdownMenu,
            "blur",
            function() {
              xa(d._dropdownMenu);
              d._dropDownCloseTime = /* @__PURE__ */ new Date();
            },
            d.allDOMEventHandlers,
            true
          ), n2 = document.createElement("div"), L(n2, { padding: "12px 8px 12px 8px" }), n2.innerHTML = d._cultureInfo.printText, n2.style.backgroundColor = d.toolbar.itemBackgroundColor, n2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(n2), J(n2, "touchstart", function(d2) {
            l = true;
          }, d.allDOMEventHandlers), J(
            n2,
            "mousemove",
            function() {
              l || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
            },
            d.allDOMEventHandlers,
            true
          ), J(n2, "mouseout", function() {
            l || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), J(n2, "click", function() {
            d.print();
            xa(d._dropdownMenu);
          }, d.allDOMEventHandlers, true), n2 = document.createElement("div"), L(n2, { padding: "12px 8px 12px 8px" }), n2.innerHTML = d._cultureInfo.saveJPGText, n2.style.backgroundColor = d.toolbar.itemBackgroundColor, n2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(n2), J(n2, "touchstart", function(d2) {
            l = true;
          }, d.allDOMEventHandlers), J(n2, "mousemove", function() {
            l || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
          }, d.allDOMEventHandlers, true), J(n2, "mouseout", function() {
            l || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), J(n2, "click", function() {
            d.exportChart({ format: "jpeg", fileName: d.exportFileName });
            xa(d._dropdownMenu);
          }, d.allDOMEventHandlers, true), n2 = document.createElement("div"), L(n2, { padding: "12px 8px 12px 8px" }), n2.innerHTML = d._cultureInfo.savePNGText, n2.style.backgroundColor = d.toolbar.itemBackgroundColor, n2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(n2), J(n2, "touchstart", function(d2) {
            l = true;
          }, d.allDOMEventHandlers), J(n2, "mousemove", function() {
            l || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
          }, d.allDOMEventHandlers, true), J(n2, "mouseout", function() {
            l || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), J(n2, "click", function() {
            d.exportChart({ format: "png", fileName: d.exportFileName });
            xa(d._dropdownMenu);
          }, d.allDOMEventHandlers, true));
      }
      function bb(d, l, n2) {
        d *= ma;
        l *= ma;
        d = n2.getImageData(d, l, 2, 2).data;
        l = true;
        for (n2 = 0; 4 > n2; n2++)
          if (d[n2] !== d[n2 + 4] | d[n2] !== d[n2 + 8] | d[n2] !== d[n2 + 12]) {
            l = false;
            break;
          }
        return l ? d[0] << 16 | d[1] << 8 | d[2] : 0;
      }
      function na(d, l, n2) {
        return d in l ? l[d] : n2[d];
      }
      function Na(d, l, S, V) {
        v && cb ? (V = !n(V) && V ? d.getContext("2d", { willReadFrequently: true }) : d.getContext("2d"), Oa = V.webkitBackingStorePixelRatio || V.mozBackingStorePixelRatio || V.msBackingStorePixelRatio || V.oBackingStorePixelRatio || V.backingStorePixelRatio || 1, ma = Ua / Oa, d.width = l * ma, d.height = S * ma, Ua !== Oa && (d.style.width = l + "px", d.style.height = S + "px", V.scale(ma, ma))) : (d.width = l, d.height = S);
      }
      function jb(d) {
        if (!kb) {
          var l = false, n2 = false;
          "undefined" === typeof ra.Chart.creditHref ? (d.creditHref = ja("iuuqr;..b`ow`rkr/bnl."), d.creditText = ja("B`ow`rKR/bnl")) : (l = d.updateOption("creditText"), n2 = d.updateOption("creditHref"));
          if (d.creditHref && d.creditText) {
            d._creditLink || (d._creditLink = document.createElement("a"), d._creditLink.setAttribute("class", "canvasjs-chart-credit"), d._creditLink.setAttribute("title", "JavaScript Charts"), L(d._creditLink, { outline: "none", margin: "0px", position: "absolute", right: "2px", top: d.height - 14 + "px", color: "dimgrey", textDecoration: "none", fontSize: "11px", fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" }), d._creditLink.setAttribute("tabIndex", -1), d._creditLink.setAttribute("target", "_blank"));
            if (0 === d.renderCount || l || n2)
              d._creditLink.setAttribute("href", d.creditHref), d._creditLink.innerHTML = d.creditText;
            d._creditLink && d.creditHref && d.creditText ? (d._creditLink.parentElement || d._canvasJSContainer.appendChild(d._creditLink), d._creditLink.style.top = d.height - 14 + "px") : d._creditLink.parentElement && d._canvasJSContainer.removeChild(d._creditLink);
          }
        }
      }
      function va(d, l, n2) {
        Ia && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var V = document.createElement("canvas");
        V.setAttribute("class", "canvasjs-chart-canvas");
        Na(V, d, l, n2);
        v || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(V);
        return V;
      }
      function L(d, l) {
        for (var n2 in l)
          d.style[n2] = l[n2];
      }
      function ta(d, l, n2) {
        l.getAttribute("state") || (l.style.backgroundColor = d.toolbar.itemBackgroundColor, l.style.color = d.toolbar.fontColor, l.style.border = "none", L(l, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        l.getAttribute("state") !== n2 && (l.setAttribute("state", n2), l.setAttribute("type", "button"), L(l, {
          padding: "5px 12px",
          cursor: "pointer",
          "float": "left",
          width: "40px",
          height: "25px",
          outline: "0px",
          verticalAlign: "baseline",
          lineHeight: "0"
        }), l.innerHTML = "<img src='" + lb[n2].image + "' alt='" + d._cultureInfo[n2 + "Text"] + "' />", L(l.childNodes[0], { height: "95%", pointerEvents: "none" }));
        l.setAttribute("title", d._cultureInfo[n2 + "Text"]);
      }
      function Ma() {
        for (var d = null, l = 0; l < arguments.length; l++)
          d = arguments[l], d.style && (d.style.display = "inline");
      }
      function xa() {
        for (var d = null, l = 0; l < arguments.length; l++)
          (d = arguments[l]) && d.style && (d.style.display = "none");
      }
      function Va(d, l, n2, v2, $) {
        if (null === d || "undefined" === typeof d)
          return "undefined" === typeof n2 ? l : n2;
        d = parseFloat(d.toString()) * (0 <= d.toString().indexOf("%") ? l / 100 : 1);
        "undefined" !== typeof v2 && (d = Math.min(v2, d), "undefined" !== typeof $ && (d = Math.max($, d)));
        return !isNaN(d) && d <= l && 0 <= d ? d : "undefined" === typeof n2 ? l : n2;
      }
      function Z(d, l, v2, V, $) {
        this._defaultsKey = d;
        this._themeOptionsKey = l;
        this._index = V;
        this.parent = $;
        this._eventListeners = [];
        d = {};
        this.theme && n(this.parent) && n(l) && n(V) ? d = n(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[l]) && (null === V ? d = this.parent.themeOptions[l] : 0 < this.parent.themeOptions[l].length && (V = Math.min(this.parent.themeOptions[l].length - 1, V), d = this.parent.themeOptions[l][V]));
        this.themeOptions = d;
        this.options = v2 ? v2 : { _isPlaceholder: true };
        this.setOptions(this.options, d);
      }
      function Fa(d, l, n2, v2, $) {
        "undefined" === typeof $ && ($ = 0);
        this._padding = $;
        this._x1 = d;
        this._y1 = l;
        this._x2 = n2;
        this._y2 = v2;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      }
      function ka(d, l) {
        ka.base.constructor.call(this, "TextBlock", null, l, null, null);
        this.ctx = d;
        this._isDirty = true;
        this._wrappedText = null;
        this._initialize();
      }
      function Wa(d, l) {
        Wa.base.constructor.call(this, "Toolbar", "toolbar", l, null, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
      }
      function Ba(d, l) {
        Ba.base.constructor.call(this, "Title", "title", l, null, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (n(this.options.margin) && d.options.subtitles) {
          for (var v2 = d.options.subtitles, V = 0; V < v2.length; V++)
            if ((n(v2[V].horizontalAlign) && "center" === this.horizontalAlign || v2[V].horizontalAlign === this.horizontalAlign) && (n(v2[V].verticalAlign) && "top" === this.verticalAlign || v2[V].verticalAlign === this.verticalAlign) && !v2[V].dockInsidePlotArea === !this.dockInsidePlotArea) {
              this.margin = 0;
              break;
            }
        }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Ja(d, l, n2) {
        Ja.base.constructor.call(this, "Subtitle", "subtitles", l, n2, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = true;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Xa() {
        this.pool = [];
      }
      function Ka(d) {
        var l;
        d && La[d] && (l = La[d]);
        Ka.base.constructor.call(
          this,
          "CultureInfo",
          null,
          l,
          null,
          null
        );
      }
      var Ia = false, wa = {}, v = !!document.createElement("canvas").getContext, ra = {
        Chart: { width: 500, height: 400, zoomEnabled: false, zoomType: "x", backgroundColor: "white", theme: "light1", animationEnabled: false, animationDuration: 1200, dataPointWidth: null, dataPointMinWidth: null, dataPointMaxWidth: null, colorSet: "colorSet1", culture: "en", creditText: "CanvasJS", interactivityEnabled: true, exportEnabled: false, exportFileName: "Chart", rangeChanging: null, rangeChanged: null, publicProperties: {
          title: "readWrite",
          subtitles: "readWrite",
          toolbar: "readWrite",
          toolTip: "readWrite",
          legend: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          axisX2: "readWrite",
          axisY2: "readWrite",
          data: "readWrite",
          options: "readWrite",
          bounds: "readOnly",
          container: "readOnly",
          selectedColorSet: "readOnly"
        } },
        Title: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 20,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: v ? "transparent" : null,
          margin: 5,
          wrap: true,
          maxWidth: null,
          dockInsidePlotArea: false,
          publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        Subtitle: { padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 14, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, margin: 2, wrap: true, maxWidth: null, dockInsidePlotArea: false, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
        Toolbar: {
          itemBackgroundColor: "white",
          itemBackgroundColorOnHover: "#2196f3",
          buttonBorderColor: "#2196f3",
          buttonBorderThickness: 1,
          fontColor: "black",
          fontColorOnHover: "white",
          publicProperties: { options: "readWrite", chart: "readOnly" }
        },
        Legend: { name: null, verticalAlign: "center", horizontalAlign: "right", fontSize: 14, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", cursor: null, itemmouseover: null, itemmouseout: null, itemmousemove: null, itemclick: null, dockInsidePlotArea: false, reversed: false, backgroundColor: v ? "transparent" : null, borderColor: v ? "transparent" : null, borderThickness: 0, cornerRadius: 0, maxWidth: null, maxHeight: null, markerMargin: null, itemMaxWidth: null, itemWidth: null, itemWrap: true, itemTextFormatter: null, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
        ToolTip: {
          enabled: true,
          shared: false,
          animationEnabled: true,
          content: null,
          contentFormatter: null,
          reversed: false,
          backgroundColor: v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
          borderColor: null,
          borderThickness: 2,
          cornerRadius: 5,
          fontSize: 14,
          fontColor: "black",
          fontFamily: "Calibri, Arial, Georgia, serif;",
          fontWeight: "normal",
          fontStyle: "italic",
          updated: null,
          hidden: null,
          publicProperties: { options: "readWrite", chart: "readOnly" }
        },
        Axis: {
          minimum: null,
          maximum: null,
          viewportMinimum: null,
          viewportMaximum: null,
          interval: null,
          intervalType: null,
          reversed: false,
          logarithmic: false,
          logarithmBase: 10,
          title: null,
          titleFontColor: "black",
          titleFontSize: 20,
          titleFontFamily: "arial",
          titleFontWeight: "normal",
          titleFontStyle: "normal",
          titleWrap: true,
          titleMaxWidth: null,
          titleBackgroundColor: v ? "transparent" : null,
          titleBorderColor: v ? "transparent" : null,
          titleBorderThickness: 0,
          titleCornerRadius: 0,
          labelAngle: 0,
          labelFontFamily: "arial",
          labelFontColor: "black",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelAutoFit: true,
          labelWrap: true,
          labelMaxWidth: null,
          labelFormatter: null,
          labelBackgroundColor: v ? "transparent" : null,
          labelBorderColor: v ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelPlacement: "outside",
          labelTextAlign: "left",
          prefix: "",
          suffix: "",
          includeZero: false,
          tickLength: 5,
          tickColor: "black",
          tickThickness: 1,
          tickPlacement: "outside",
          lineColor: "black",
          lineThickness: 1,
          lineDashType: "solid",
          gridColor: "#A0A0A0",
          gridThickness: 0,
          gridDashType: "solid",
          interlacedColor: v ? "transparent" : null,
          valueFormatString: null,
          margin: 2,
          publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        StripLine: {
          value: null,
          startValue: null,
          endValue: null,
          color: "orange",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelPlacement: "inside",
          labelAlign: "far",
          labelWrap: true,
          labelMaxWidth: null,
          labelBackgroundColor: null,
          labelBorderColor: v ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: "arial",
          labelFontColor: "orange",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          showOnTop: false,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        ScaleBreaks: {
          autoCalculate: false,
          collapsibleThreshold: "25%",
          maxNumberOfAutoBreaks: 2,
          spacing: 8,
          type: "straight",
          color: "#FFFFFF",
          fillOpacity: 0.9,
          lineThickness: 2,
          lineColor: "#E16E6E",
          lineDashType: "solid",
          publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        Break: { startValue: null, endValue: null, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: { options: "readWrite", scaleBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" } },
        Crosshair: {
          enabled: false,
          snapToDataPoint: false,
          color: "grey",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelWrap: true,
          labelMaxWidth: null,
          labelBackgroundColor: v ? "grey" : null,
          labelBorderColor: v ? "grey" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: v ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
          labelFontSize: 12,
          labelFontColor: "#fff",
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          valueFormatString: null,
          updated: null,
          hidden: null,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        DataSeries: {
          name: null,
          dataPoints: null,
          label: "",
          bevelEnabled: false,
          highlightEnabled: true,
          cursor: "default",
          indexLabel: "",
          indexLabelPlacement: "auto",
          indexLabelOrientation: "horizontal",
          indexLabelTextAlign: "left",
          indexLabelFontColor: "black",
          indexLabelFontSize: 12,
          indexLabelFontStyle: "normal",
          indexLabelFontFamily: "Arial",
          indexLabelFontWeight: "normal",
          indexLabelBackgroundColor: null,
          indexLabelLineColor: "gray",
          indexLabelLineThickness: 1,
          indexLabelLineDashType: "solid",
          indexLabelMaxWidth: null,
          indexLabelWrap: true,
          indexLabelFormatter: null,
          lineThickness: 2,
          lineDashType: "solid",
          connectNullData: false,
          nullDataLineDashType: "dash",
          color: null,
          lineColor: null,
          risingColor: "white",
          fallingColor: "red",
          fillOpacity: null,
          startAngle: 0,
          radius: null,
          innerRadius: null,
          explodeOnClick: true,
          neckHeight: null,
          neckWidth: null,
          reversed: false,
          valueRepresents: null,
          linkedDataSeriesIndex: null,
          whiskerThickness: 2,
          whiskerDashType: "solid",
          whiskerColor: null,
          whiskerLength: null,
          stemThickness: 2,
          stemColor: null,
          stemDashType: "solid",
          upperBoxColor: "white",
          lowerBoxColor: "white",
          type: "column",
          xValueType: "number",
          axisXType: "primary",
          axisYType: "primary",
          axisXIndex: 0,
          axisYIndex: 0,
          xValueFormatString: null,
          yValueFormatString: null,
          zValueFormatString: null,
          percentFormatString: null,
          showInLegend: false,
          legendMarkerType: null,
          legendMarkerColor: null,
          legendText: null,
          legendMarkerBorderColor: v ? "transparent" : null,
          legendMarkerBorderThickness: 0,
          markerType: "circle",
          markerColor: null,
          markerSize: null,
          markerBorderColor: v ? "transparent" : null,
          markerBorderThickness: 0,
          mouseover: null,
          mouseout: null,
          mousemove: null,
          click: null,
          toolTipContent: null,
          visible: true,
          publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" }
        },
        TextBlock: { x: 0, y: 0, width: null, height: null, maxWidth: null, maxHeight: null, padding: 0, angle: 0, text: "", horizontalAlign: "center", textAlign: "left", fontSize: 12, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, textBaseline: "top" },
        CultureInfo: {
          decimalSeparator: ".",
          digitGroupSeparator: ",",
          zoomText: "Zoom",
          panText: "Pan",
          resetText: "Reset",
          menuText: "More Options",
          saveJPGText: "Save as JPEG",
          savePNGText: "Save as PNG",
          printText: "Print",
          days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          months: "January February March April May June July August September October November December".split(" "),
          shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        }
      }, La = { en: {} }, t = v ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Ga = v ? "Impact, Charcoal, sans-serif" : "Arial", Ca = { colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "), colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "), colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ") }, R, ca, W, ia, X;
      ca = "#333333";
      W = "#000000";
      R = "#666666";
      X = ia = "#000000";
      var ea = 20, A = 14, Ya = { colorSet: "colorSet1", backgroundColor: "#FFFFFF", title: { fontFamily: Ga, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Ga, fontSize: A, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: t, indexLabelFontSize: A, indexLabelFontColor: ca, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: ca,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: W,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: R,
        tickThickness: 1,
        tickColor: R,
        gridThickness: 0,
        gridColor: R,
        stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: X, color: ia, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisX2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: ca, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: W, labelFontWeight: "normal", lineThickness: 1, lineColor: R, tickThickness: 1, tickColor: R, gridThickness: 0, gridColor: R, stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: X,
        color: ia,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: ca, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: W, labelFontWeight: "normal", lineThickness: 1, lineColor: R, tickThickness: 1, tickColor: R, gridThickness: 1, gridColor: R, stripLines: [{
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: X, color: ia, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY2: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: ca,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: W,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: R,
        tickThickness: 1,
        tickColor: R,
        gridThickness: 1,
        gridColor: R,
        stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: X, color: ia, thickness: 1, lineDashType: "dash" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], legend: {
        fontFamily: t,
        fontSize: 14,
        fontColor: ca,
        fontWeight: "bold",
        verticalAlign: "bottom",
        horizontalAlign: "center"
      }, toolTip: { fontFamily: t, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
      W = ca = "#F5F5F5";
      R = "#FFFFFF";
      ia = "#40BAF1";
      X = "#F5F5F5";
      var ea = 20, A = 14, db = { colorSet: "colorSet2", title: {
        fontFamily: t,
        fontSize: 33,
        fontColor: "#3A3A3A",
        fontWeight: "bold",
        verticalAlign: "top",
        margin: 5
      }, subtitles: [{ fontFamily: t, fontSize: A, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: t, indexLabelFontSize: A, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: "#BBBBBB",
        tickThickness: 1,
        tickColor: "#BBBBBB",
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisX2: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: {
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: "#EEEEEE",
          labelFontWeight: "normal",
          labelBackgroundColor: "black",
          color: "black",
          thickness: 1,
          lineDashType: "dot"
        },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisY: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 0, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#FFA500",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FFA500",
        thickness: 1
      }], crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY2: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], legend: { fontFamily: t, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: t, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
      W = ca = "#F5F5F5";
      R = "#FFFFFF";
      ia = "#40BAF1";
      X = "#F5F5F5";
      ea = 20;
      A = 14;
      Ga = { colorSet: "colorSet12", backgroundColor: "#2A2A2A", title: { fontFamily: Ga, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Ga, fontSize: A, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{
        indexLabelFontFamily: t,
        indexLabelFontSize: A,
        indexLabelFontColor: W,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: W, labelFontWeight: "normal", lineThickness: 1, lineColor: R, tickThickness: 1, tickColor: R, gridThickness: 0, gridColor: R, stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: X,
        color: ia,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisX2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: W, labelFontWeight: "normal", lineThickness: 1, lineColor: R, tickThickness: 1, tickColor: R, gridThickness: 0, gridColor: R, stripLines: [{
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: X, color: ia, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: W,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: W,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: R,
        tickThickness: 1,
        tickColor: R,
        gridThickness: 1,
        gridColor: R,
        stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: X, color: ia, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }], axisY2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: W, labelFontWeight: "normal", lineThickness: 1, lineColor: R, tickThickness: 1, tickColor: R, gridThickness: 1, gridColor: R, stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: X,
        color: ia,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], legend: { fontFamily: t, fontSize: 14, fontColor: ca, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: t, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: W, backgroundColor: "rgba(0, 0, 0, .7)" } };
      R = "#FFFFFF";
      W = ca = "#FAFAFA";
      ia = "#40BAF1";
      X = "#F5F5F5";
      var ea = 20, A = 14, Pa = { light1: Ya, light2: db, dark1: Ga, dark2: { colorSet: "colorSet2", backgroundColor: "#32373A", title: { fontFamily: t, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: t, fontSize: A, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{
        indexLabelFontFamily: t,
        indexLabelFontSize: A,
        indexLabelFontColor: W,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: W, labelFontWeight: "normal", lineThickness: 1, lineColor: R, tickThickness: 1, tickColor: R, gridThickness: 0, gridColor: R, stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: X,
        color: ia,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisX2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: W, labelFontWeight: "normal", lineThickness: 1, lineColor: R, tickThickness: 1, tickColor: R, gridThickness: 0, gridColor: R, stripLines: [{
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: X, color: ia, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: W,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: W,
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: R,
        tickThickness: 1,
        tickColor: R,
        gridThickness: 1,
        gridColor: R,
        stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: X, color: ia, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }], axisY2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: A, labelFontColor: W, labelFontWeight: "normal", lineThickness: 0, lineColor: R, tickThickness: 1, tickColor: R, gridThickness: 1, gridColor: R, stripLines: [{ labelFontFamily: t, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: A,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: X,
        color: ia,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], legend: { fontFamily: t, fontSize: 14, fontColor: ca, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: t, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: W, backgroundColor: "rgba(0, 0, 0, .7)" } }, theme1: Ya, theme2: db, theme3: Ya }, T = {
        numberDuration: 1,
        yearDuration: 314496e5,
        monthDuration: 2592e6,
        weekDuration: 6048e5,
        dayDuration: 864e5,
        hourDuration: 36e5,
        minuteDuration: 6e4,
        secondDuration: 1e3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      };
      (function() {
        wa.fSDec = function(d) {
          for (var l = "", n2 = 0; n2 < d.length; n2++)
            l += String.fromCharCode(Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(n2));
          return l;
        };
        delete ra[wa.fSDec("Bi`su")][wa.fSDec("bsdehuIsdg")];
        wa.pro = { sCH: ra[wa.fSDec("Bi`su")][wa.fSDec("bsdehuIsdg")] };
      })();
      var hb = function() {
        var d = false;
        try {
          var l = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() {
            d = true;
            return false;
          } });
          window.addEventListener && (window.addEventListener("test", null, l), window.removeEventListener("test", null, l));
        } catch (n2) {
          d = false;
        }
        return d;
      }(), ab = {}, ya = null, mb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height));
      }, za = function(d) {
        d.width = 1;
        d.height = 1;
        d.getContext("2d") && d.getContext("2d").clearRect(0, 0, 1, 1);
      }, nb = function(d, l, n2) {
        l = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= l ? 12 : 11, Math.round(l * (d / 400)));
      }, Da = function() {
        var d = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, l = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), n2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), v2 = "January February March April May June July August September October November December".split(" "), $ = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), t2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, D = /[^-+\dA-Z]/g;
        return function(A2, H2, P) {
          var R2 = P ? P.days : l, O2 = P ? P.months : v2, J2 = P ? P.shortDays : n2, T2 = P ? P.shortMonths : $;
          P = "";
          var L2 = false;
          A2 = A2 && A2.getTime ? A2 : A2 ? new Date(A2) : /* @__PURE__ */ new Date();
          if (isNaN(A2))
            throw SyntaxError("invalid date");
          "UTC:" === H2.slice(0, 4) && (H2 = H2.slice(4), L2 = true);
          P = L2 ? "getUTC" : "get";
          var Z2 = A2[P + "Date"](), N = A2[P + "Day"](), Y = A2[P + "Month"](), a = A2[P + "FullYear"](), g = A2[P + "Hours"](), c = A2[P + "Minutes"](), b = A2[P + "Seconds"](), e = A2[P + "Milliseconds"](), h = L2 ? 0 : A2.getTimezoneOffset();
          return P = H2.replace(d, function(r) {
            switch (r) {
              case "D":
                return Z2;
              case "DD":
                return da(Z2, 2);
              case "DDD":
                return J2[N];
              case "DDDD":
                return R2[N];
              case "M":
                return Y + 1;
              case "MM":
                return da(Y + 1, 2);
              case "MMM":
                return T2[Y];
              case "MMMM":
                return O2[Y];
              case "Y":
                return parseInt(String(a).slice(-2));
              case "YY":
                return da(String(a).slice(-2), 2);
              case "YYY":
                return da(
                  String(a).slice(-3),
                  3
                );
              case "YYYY":
                return da(a, 4);
              case "h":
                return g % 12 || 12;
              case "hh":
                return da(g % 12 || 12, 2);
              case "H":
                return g;
              case "HH":
                return da(g, 2);
              case "m":
                return c;
              case "mm":
                return da(c, 2);
              case "s":
                return b;
              case "ss":
                return da(b, 2);
              case "f":
                return da(String(e), 3).slice(0, 1);
              case "ff":
                return da(String(e), 3).slice(0, 2);
              case "fff":
                return da(String(e), 3).slice(0, 3);
              case "t":
                return 12 > g ? "a" : "p";
              case "tt":
                return 12 > g ? "am" : "pm";
              case "T":
                return 12 > g ? "A" : "P";
              case "TT":
                return 12 > g ? "AM" : "PM";
              case "K":
                return L2 ? "UTC" : (String(A2).match(t2) || [""]).pop().replace(D, "");
              case "z":
                return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
              case "zz":
                return (0 < h ? "-" : "+") + da(Math.floor(Math.abs(h) / 60), 2);
              case "zzz":
                return (0 < h ? "-" : "+") + da(Math.floor(Math.abs(h) / 60), 2) + da(Math.abs(h) % 60, 2);
              default:
                return r.slice(1, r.length - 1);
            }
          });
        };
      }(), ob = function(d) {
        var l = 0 > d;
        if (1 > Math.abs(d)) {
          var n2 = parseInt(d.toString().split("e-")[1]);
          n2 && (d = (l ? -1 * d : d) * Math.pow(10, n2 - 1), d = "0." + Array(n2).join("0") + d.toString().substring(2), d = l ? "-" + d : d);
        } else
          n2 = parseInt(d.toString().split("+")[1]), 20 < n2 && (n2 -= 20, d /= Math.pow(10, n2), d = d.toString() + Array(n2 + 1).join("0"));
        return String(d);
      }, ga = function(d, l, n2) {
        if (null === d)
          return "";
        if (!isFinite(d))
          return d;
        d = Number(d);
        var v2 = 0 > d ? true : false;
        v2 && (d *= -1);
        var $ = n2 ? n2.decimalSeparator : ".", t2 = n2 ? n2.digitGroupSeparator : ",", D = "";
        l = String(l);
        var D = 1, A2 = n2 = "", H2 = -1, P = [], R2 = [], O2 = 0, L2 = 0, J2 = 0, T2 = false, Z2 = 0, A2 = l.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        l = null;
        for (var N = 0; A2 && N < A2.length; N++)
          if (l = A2[N], "." === l && 0 > H2)
            H2 = N;
          else {
            if ("%" === l)
              D *= 100;
            else if ("‰" === l) {
              D *= 1e3;
              continue;
            } else if ("," === l[0] && "." === l[l.length - 1]) {
              D /= Math.pow(1e3, l.length - 1);
              H2 = N + l.length - 1;
              continue;
            } else
              "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || (T2 = true);
            0 > H2 ? (P.push(l), "#" === l || "0" === l ? O2++ : "," === l && J2++) : (R2.push(l), "#" !== l && "0" !== l || L2++);
          }
        T2 && (l = Math.floor(d), A2 = -Math.floor(Math.log(d) / Math.LN10 + 1), Z2 = 0 === d ? 0 : 0 === l ? -(O2 + A2) : ob(l).length - O2, D /= Math.pow(10, Z2));
        0 > H2 && (H2 = N);
        D = (d * D).toFixed(L2);
        l = D.split(".");
        D = (l[0] + "").split("");
        d = (l[1] + "").split("");
        D && "0" === D[0] && D.shift();
        for (T2 = A2 = N = L2 = H2 = 0; 0 < P.length; )
          if (l = P.pop(), "#" === l || "0" === l)
            if (H2++, H2 === O2) {
              var Y = D, D = [];
              if ("0" === l)
                for (l = O2 - L2 - (Y ? Y.length : 0); 0 < l; )
                  Y.unshift("0"), l--;
              for (; 0 < Y.length; )
                n2 = Y.pop() + n2, T2++, 0 === T2 % A2 && (N === J2 && 0 < Y.length) && (n2 = t2 + n2);
            } else
              0 < D.length ? (n2 = D.pop() + n2, L2++, T2++) : "0" === l && (n2 = "0" + n2, L2++, T2++), 0 === T2 % A2 && (N === J2 && 0 < D.length) && (n2 = t2 + n2);
          else
            "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l) ? "," === l ? (N++, A2 = T2, T2 = 0, 0 < D.length && (n2 = t2 + n2)) : n2 = 1 < l.length && ('"' === l[0] && '"' === l[l.length - 1] || "'" === l[0] && "'" === l[l.length - 1]) ? l.slice(1, l.length - 1) + n2 : l + n2 : (l = 0 > Z2 ? l.replace(
              "+",
              ""
            ).replace("-", "") : l.replace("-", ""), n2 += l.replace(/[0]+/, function(a) {
              return da(Z2, a.length);
            }));
        t2 = "";
        for (P = false; 0 < R2.length; )
          l = R2.shift(), "#" === l || "0" === l ? 0 < d.length && 0 !== Number(d.join("")) ? (t2 += d.shift(), P = true) : "0" === l && (t2 += "0", P = true) : 1 < l.length && ('"' === l[0] && '"' === l[l.length - 1] || "'" === l[0] && "'" === l[l.length - 1]) ? t2 += l.slice(1, l.length - 1) : "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l) ? t2 += l : (l = 0 > Z2 ? l.replace("+", "").replace("-", "") : l.replace("-", ""), t2 += l.replace(/[0]+/, function(a) {
            return da(
              Z2,
              a.length
            );
          }));
        n2 += (P ? $ : "") + t2;
        return v2 ? "-" + n2 : n2;
      }, Qa = function(d) {
        var l = 0, n2 = 0;
        d = d || window.event;
        d.offsetX || 0 === d.offsetX ? (l = d.offsetX, n2 = d.offsetY) : d.layerX || 0 == d.layerX ? (l = d.layerX, n2 = d.layerY) : (l = d.pageX - d.target.offsetLeft, n2 = d.pageY - d.target.offsetTop);
        return { x: l, y: n2 };
      }, cb = true, Ua = window.devicePixelRatio || 1, Oa = 1, ma = cb ? Ua / Oa : 1, ba = function(d, l, n2, v2, t2, A2, D, H2, T2, P, O2, R2, L2) {
        "undefined" === typeof L2 && (L2 = 1);
        D = D || 0;
        H2 = H2 || "black";
        var J2 = 15 < v2 - l && 15 < t2 - n2 ? 8 : 0.35 * Math.min(v2 - l, t2 - n2);
        d.beginPath();
        d.moveTo(l, n2);
        d.save();
        d.fillStyle = A2;
        d.globalAlpha = L2;
        d.fillRect(l, n2, v2 - l, t2 - n2);
        d.globalAlpha = 1;
        0 < D && (L2 = 0 === D % 2 ? 0 : 0.5, d.beginPath(), d.lineWidth = D, d.strokeStyle = H2, d.moveTo(l, n2), d.rect(l - L2, n2 - L2, v2 - l + 2 * L2, t2 - n2 + 2 * L2), d.stroke());
        d.restore();
        true === T2 && (d.save(), d.beginPath(), d.moveTo(l, n2), d.lineTo(l + J2, n2 + J2), d.lineTo(v2 - J2, n2 + J2), d.lineTo(v2, n2), d.closePath(), D = d.createLinearGradient((v2 + l) / 2, n2 + J2, (v2 + l) / 2, n2), D.addColorStop(0, A2), D.addColorStop(1, "rgba(255, 255, 255, .4)"), d.fillStyle = D, d.fill(), d.restore());
        true === P && (d.save(), d.beginPath(), d.moveTo(l, t2), d.lineTo(l + J2, t2 - J2), d.lineTo(v2 - J2, t2 - J2), d.lineTo(v2, t2), d.closePath(), D = d.createLinearGradient((v2 + l) / 2, t2 - J2, (v2 + l) / 2, t2), D.addColorStop(0, A2), D.addColorStop(1, "rgba(255, 255, 255, .4)"), d.fillStyle = D, d.fill(), d.restore());
        true === O2 && (d.save(), d.beginPath(), d.moveTo(l, n2), d.lineTo(l + J2, n2 + J2), d.lineTo(l + J2, t2 - J2), d.lineTo(l, t2), d.closePath(), D = d.createLinearGradient(l + J2, (t2 + n2) / 2, l, (t2 + n2) / 2), D.addColorStop(0, A2), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = D, d.fill(), d.restore());
        true === R2 && (d.save(), d.beginPath(), d.moveTo(
          v2,
          n2
        ), d.lineTo(v2 - J2, n2 + J2), d.lineTo(v2 - J2, t2 - J2), d.lineTo(v2, t2), D = d.createLinearGradient(v2 - J2, (t2 + n2) / 2, v2, (t2 + n2) / 2), D.addColorStop(0, A2), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = D, D.addColorStop(0, A2), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = D, d.fill(), d.closePath(), d.restore());
      }, ja = function(d) {
        for (var n2 = "", v2 = 0; v2 < d.length; v2++)
          n2 += String.fromCharCode(Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(v2));
        return n2;
      }, kb = window && (window[ja("mnb`uhno")] && window[ja("mnb`uhno")].href && window[ja("mnb`uhno")].href.indexOf && (-1 !== window[ja("mnb`uhno")].href.indexOf(ja("b`ow`rkr/bnl")) || -1 !== window[ja("mnb`uhno")].href.indexOf(ja("gdonqhy/bnl")) || -1 !== window[ja("mnb`uhno")].href.indexOf(ja("gheemd")))) && -1 === window[ja("mnb`uhno")].href.indexOf(ja("gheemd")), lb = {
        reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
        pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
        zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
        menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
      };
      Z.prototype.setOptions = function(d, n2) {
        if (ra[this._defaultsKey]) {
          var v2 = ra[this._defaultsKey], t2;
          for (t2 in v2)
            "publicProperties" !== t2 && v2.hasOwnProperty(t2) && (this[t2] = d && t2 in d ? d[t2] : n2 && t2 in n2 ? n2[t2] : v2[t2]);
        } else
          Ia && window.console && console.log("defaults not set");
      };
      Z.prototype.get = function(d) {
        var n2 = ra[this._defaultsKey];
        if ("options" === d)
          return this.options && this.options._isPlaceholder ? null : this.options;
        if (n2.hasOwnProperty(d) || n2.publicProperties && n2.publicProperties.hasOwnProperty(d))
          return this[d];
        window.console && window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`);
      };
      Z.prototype.set = function(d, n2, v2) {
        v2 = "undefined" === typeof v2 ? true : v2;
        var t2 = ra[this._defaultsKey];
        if ("options" === d)
          this.createUserOptions(n2);
        else if (t2.hasOwnProperty(d) || t2.publicProperties && t2.publicProperties.hasOwnProperty(d) && "readWrite" === t2.publicProperties[d])
          this.options._isPlaceholder && this.createUserOptions(), this.options[d] = n2;
        else {
          window.console && (t2.publicProperties && t2.publicProperties.hasOwnProperty(d) && "readOnly" === t2.publicProperties[d] ? window.console.log('Property "' + d + '" is read-only.') : window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`));
          return;
        }
        v2 && (this.stockChart || this.chart || this).render();
      };
      Z.prototype.addTo = function(d, n2, v2, t2) {
        t2 = "undefined" === typeof t2 ? true : t2;
        var A2 = ra[this._defaultsKey];
        A2.hasOwnProperty(d) || A2.publicProperties && A2.publicProperties.hasOwnProperty(d) && "readWrite" === A2.publicProperties[d] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[d] && (this.options[d] = []), d = this.options[d], v2 = "undefined" === typeof v2 || null === v2 ? d.length : v2, d.splice(v2, 0, n2), t2 && (this.stockChart || this.chart || this).render()) : window.console && (A2.publicProperties && A2.publicProperties.hasOwnProperty(d) && "readOnly" === A2.publicProperties[d] ? window.console.log('Property "' + d + '" is read-only.') : window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`));
      };
      Z.prototype.createUserOptions = function(d) {
        if ("undefined" !== typeof d || this.options._isPlaceholder)
          if (this.parent && this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
            this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
            var n2 = this.parent.options[this.optionsName], v2 = n2.length;
            this.options._isPlaceholder || (Ea(n2), v2 = n2.indexOf(this.options));
            this.options = "undefined" === typeof d ? {} : d;
            n2[v2] = this.options;
          } else
            this.options = "undefined" === typeof d ? {} : d, this.parent && (d = this.parent.options, this.optionsName ? n2 = this.optionsName : (n2 = this._defaultsKey) && 0 !== n2.length ? (v2 = n2.charAt(0).toLowerCase(), 1 < n2.length && (v2 = v2.concat(n2.slice(1))), n2 = v2) : n2 = void 0, d[n2] = this.options);
      };
      Z.prototype.remove = function(d) {
        d = "undefined" === typeof d ? true : d;
        if (this.isOptionsInArray) {
          var n2 = this.parent.options[this.optionsName];
          Ea(n2);
          var v2 = n2.indexOf(this.options);
          0 <= v2 && n2.splice(v2, 1);
        } else
          delete this.parent.options[this.optionsName];
        d && (this.stockChart || this.chart || this).render();
      };
      Z.prototype.updateOption = function(d) {
        !ra[this._defaultsKey] && (Ia && window.console) && console.log("defaults not set");
        var l = ra[this._defaultsKey], v2 = {}, t2 = this[d], A2 = this._themeOptionsKey, H2 = this._index;
        this.theme && n(this.parent) && n(A2) && n(H2) ? v2 = n(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && (this.options.theme && Pa[this.options.theme] ? v2 = Pa[this.options.theme] : this.parent.themeOptions[A2] && (null === H2 ? v2 = this.parent.themeOptions[A2] : 0 < this.parent.themeOptions[A2].length && (v2 = Math.min(this.parent.themeOptions[A2].length - 1, H2), v2 = this.parent.themeOptions[A2][v2])));
        this.themeOptions = v2;
        d in l && (t2 = d in this.options ? this.options[d] : v2 && d in v2 ? v2[d] : l[d]);
        if (t2 === this[d])
          return false;
        this[d] = t2;
        return true;
      };
      Z.prototype.trackChanges = function(d) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        this.sessionVariables[d] = this.options[d];
      };
      Z.prototype.isBeingTracked = function(d) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[d] ? true : false;
      };
      Z.prototype.hasOptionChanged = function(d) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        return this.sessionVariables[d] !== this.options[d];
      };
      Z.prototype.addEventListener = function(d, n2, v2) {
        d && n2 && (this._eventListeners[d] = this._eventListeners[d] || [], this._eventListeners[d].push({ context: v2 || this, eventHandler: n2 }));
      };
      Z.prototype.removeEventListener = function(d, n2) {
        if (d && n2 && this._eventListeners[d]) {
          for (var v2 = this._eventListeners[d], t2 = 0; t2 < v2.length; t2++)
            if (v2[t2].eventHandler === n2) {
              v2[t2].splice(t2, 1);
              break;
            }
        }
      };
      Z.prototype.removeAllEventListeners = function() {
        this._eventListeners = [];
      };
      Z.prototype.dispatchEvent = function(d, n2, v2) {
        if (d && this._eventListeners[d]) {
          n2 = n2 || {};
          for (var t2 = this._eventListeners[d], A2 = 0; A2 < t2.length; A2++)
            t2[A2].eventHandler.call(t2[A2].context, n2);
        }
        "function" === typeof this[d] && this[d].call(v2 || this.chart, n2);
      };
      Fa.prototype.registerSpace = function(d, n2) {
        "top" === d ? this._topOccupied += n2.height : "bottom" === d ? this._bottomOccupied += n2.height : "left" === d ? this._leftOccupied += n2.width : "right" === d && (this._rightOccupied += n2.width);
      };
      Fa.prototype.unRegisterSpace = function(d, n2) {
        "top" === d ? this._topOccupied -= n2.height : "bottom" === d ? this._bottomOccupied -= n2.height : "left" === d ? this._leftOccupied -= n2.width : "right" === d && (this._rightOccupied -= n2.width);
      };
      Fa.prototype.getFreeSpace = function() {
        return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied };
      };
      Fa.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      };
      qa(
        ka,
        Z
      );
      ka.prototype._initialize = function() {
        n(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = n(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = n(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = n(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = n(this.padding.left) ? 0 : Number(this.padding.left) | 0);
      };
      ka.prototype.render = function(d) {
        if (0 !== this.fontSize) {
          d && this.ctx.save();
          var n2 = this.ctx.font;
          this.ctx.textBaseline = this.textBaseline;
          var v2 = 0;
          this._isDirty && this.measureText(this.ctx);
          this.ctx.translate(this.x, this.y + v2);
          "middle" === this.textBaseline && (v2 = -this._lineHeight / 2);
          this.ctx.font = this._getFontString();
          this.ctx.rotate(Math.PI / 180 * this.angle);
          var t2 = 0, A2 = this.topPadding, H2 = null;
          this.ctx.roundRect || Aa(this.ctx);
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(
            0,
            v2,
            this.width,
            this.height,
            this.cornerRadius,
            this.borderThickness,
            this.backgroundColor,
            this.borderColor
          );
          this.ctx.fillStyle = this.fontColor;
          for (v2 = 0; v2 < this._wrappedText.lines.length; v2++) {
            H2 = this._wrappedText.lines[v2];
            if ("right" === this.horizontalAlign || "right" === this.textAlign)
              t2 = this.width - H2.width - this.rightPadding;
            else if ("left" === this.horizontalAlign || "left" === this.textAlign)
              t2 = this.leftPadding;
            else if ("center" === this.horizontalAlign || "center" === this.textAlign)
              t2 = (this.width - (this.leftPadding + this.rightPadding)) / 2 - H2.width / 2 + this.leftPadding;
            this.ctx.fillText(
              H2.text,
              t2,
              A2
            );
            A2 += H2.height;
          }
          this.ctx.font = n2;
          d && this.ctx.restore();
        }
      };
      ka.prototype.setText = function(d) {
        this.text = d;
        this._isDirty = true;
        this._wrappedText = null;
      };
      ka.prototype.measureText = function() {
        this._lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth)
          throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = false;
        return { width: this.width, height: this.height };
      };
      ka.prototype._getLineWithWidth = function(d, n2, v2) {
        d = String(d);
        if (!d)
          return { text: "", width: 0 };
        var t2 = v2 = 0, A2 = d.length - 1, H2 = Infinity;
        for (this.ctx.font = this._getFontString(); t2 <= A2; ) {
          var H2 = Math.floor((t2 + A2) / 2), D = d.substr(0, H2 + 1);
          v2 = this.ctx.measureText(D).width;
          if (v2 < n2)
            t2 = H2 + 1;
          else if (v2 > n2)
            A2 = H2 - 1;
          else
            break;
        }
        v2 > n2 && 1 < D.length && (D = D.substr(0, D.length - 1), v2 = this.ctx.measureText(D).width);
        n2 = true;
        if (D.length === d.length || " " === d[D.length])
          n2 = false;
        n2 && (d = D.split(" "), 1 < d.length && d.pop(), D = d.join(" "), v2 = this.ctx.measureText(D).width);
        return { text: D, width: v2 };
      };
      ka.prototype._wrapText = function() {
        var d = new String(Ha(String(this.text))), n2 = [], v2 = this.ctx.font, t2 = 0, A2 = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize)
          A2 = t2 = 0;
        else
          for (; 0 < d.length; ) {
            var H2 = this.maxHeight - (this.topPadding + this.bottomPadding), D = this._getLineWithWidth(d, this.maxWidth - (this.leftPadding + this.rightPadding), false);
            D.height = this._lineHeight;
            n2.push(D);
            var J2 = A2, A2 = Math.max(A2, D.width), t2 = t2 + D.height, d = Ha(d.slice(D.text.length, d.length));
            H2 && t2 > H2 && (D = n2.pop(), t2 -= D.height, A2 = J2);
          }
        this._wrappedText = { lines: n2, width: A2, height: t2 };
        this.width = A2 + (this.leftPadding + this.rightPadding);
        this.height = t2 + (this.topPadding + this.bottomPadding);
        this.ctx.font = v2;
      };
      ka.prototype._getFontString = function() {
        var d;
        d = this.fontStyle ? this.fontStyle + " " : "";
        d += this.fontWeight ? this.fontWeight + " " : "";
        d += this.fontSize ? this.fontSize + "px " : "";
        var n2 = this.fontFamily ? this.fontFamily + "" : "";
        !v && n2 && (n2 = n2.split(",")[0], "'" !== n2[0] && '"' !== n2[0] && (n2 = "'" + n2 + "'"));
        return d += n2;
      };
      qa(Wa, Z);
      qa(Ba, Z);
      Ba.prototype.setLayout = function() {
        if (this.text) {
          var d = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, l = d.layoutManager.getFreeSpace(), v2 = l.x1, t2 = l.y1, A2 = 0, H2 = 0, D = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, J2, L2;
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = l.width - 4 - D * ("center" === this.horizontalAlign ? 2 : 1)), H2 = 0.5 * l.height - this.margin - 2, A2 = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = l.height - 4), H2 = 0.5 * l.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = l.width - 4), H2 = 0.5 * l.height - 4));
          var P;
          n(this.padding) || "number" !== typeof this.padding ? n(this.padding) || "object" !== typeof this.padding || (P = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, P += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : P = 2 * this.padding;
          this.wrap || (H2 = Math.min(H2, 1.5 * this.fontSize + P));
          H2 = new ka(this.ctx, {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontColor: this.fontColor,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            horizontalAlign: this.horizontalAlign,
            textAlign: this.horizontalAlign,
            verticalAlign: this.verticalAlign,
            borderColor: this.borderColor,
            borderThickness: this.borderThickness,
            backgroundColor: this.backgroundColor,
            maxWidth: this.maxWidth,
            maxHeight: H2,
            cornerRadius: this.cornerRadius,
            text: this.text,
            padding: this.padding,
            textBaseline: "middle"
          });
          P = H2.measureText();
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (t2 = l.y1 + 2 + this.fontSize / 2 + 4, L2 = "top") : "bottom" === this.verticalAlign && (t2 = l.y2 - 2 - P.height + this.fontSize / 2 + 4, L2 = "bottom"), "left" === this.horizontalAlign ? v2 = l.x1 + 2 : "center" === this.horizontalAlign ? v2 = l.x1 + l.width / 2 - P.width / 2 : "right" === this.horizontalAlign && (v2 = l.x2 - 2 - P.width - D), J2 = this.horizontalAlign, this.width = P.width, this.height = P.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (v2 = l.x1 + 2 + (this.fontSize / 2 + 4), t2 = l.y2 - 2 - (this.maxWidth / 2 - P.width / 2), A2 = -90, L2 = "left", this.width = P.height, this.height = P.width) : "right" === this.horizontalAlign ? (v2 = l.x2 - 2 - (this.fontSize / 2 + 4), t2 = l.y1 + 2 + (this.maxWidth / 2 - P.width / 2), A2 = 90, L2 = "right", this.width = P.height, this.height = P.width) : "center" === this.horizontalAlign && (t2 = d.y1 + (d.height / 2 - P.height / 2) + this.fontSize / 2 + 4, v2 = d.x1 + (d.width / 2 - P.width / 2), L2 = "center", this.width = P.width, this.height = P.height), J2 = "center");
          H2.x = v2;
          H2.y = t2;
          H2.angle = A2;
          H2.horizontalAlign = J2;
          this._textBlock = H2;
          d.layoutManager.registerSpace(L2, { width: this.width + ("left" === L2 || "right" === L2 ? this.margin + 2 : 0), height: this.height + ("top" === L2 || "bottom" === L2 ? this.margin + 2 : 0) });
          this.bounds = { x1: v2, y1: t2, x2: v2 + this.width, y2: t2 + this.height };
          this.ctx.textBaseline = "top";
        }
      };
      Ba.prototype.render = function() {
        this._textBlock && this._textBlock.render(true);
      };
      qa(Ja, Z);
      Ja.prototype.setLayout = Ba.prototype.setLayout;
      Ja.prototype.render = Ba.prototype.render;
      Xa.prototype.get = function(d, n2) {
        var v2 = null;
        0 < this.pool.length ? (v2 = this.pool.pop(), Na(v2, d, n2)) : v2 = va(d, n2);
        return v2;
      };
      Xa.prototype.release = function(d) {
        this.pool.push(d);
      };
      qa(Ka, Z);
      var Ra = { addTheme: function(d, n2) {
        Pa[d] = n2;
      }, addColorSet: function(d, n2) {
        Ca[d] = n2;
      }, addCultureInfo: function(d, n2) {
        La[d] = n2;
      }, formatNumber: function(d, n2, v2) {
        v2 = v2 || "en";
        if (La[v2])
          return ga(d, n2 || "#,##0.##", new Ka(v2));
        throw "Unknown Culture Name";
      }, formatDate: function(d, n2, v2) {
        v2 = v2 || "en";
        if (La[v2])
          return Da(d, n2 || "DD MMM YYYY", new Ka(v2));
        throw "Unknown Culture Name";
      } };
      "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Ra : "function" === typeof define && define.amd ? define([], function() {
        return Ra;
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Ra);
      t = Ra.Chart = function() {
        function d(a, g) {
          return a.x - g.x;
        }
        function l(a, g, c) {
          g = g || {};
          n(c) ? (this.predefinedThemes = Pa, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
          this.theme = n(g.theme) || n(this.predefinedThemes[g.theme]) ? "light1" : g.theme;
          l.base.constructor.call(
            this,
            "Chart",
            this.optionsName,
            g,
            this.index,
            this.parent
          );
          var b = this;
          this._containerId = a;
          this._objectsInitialized = false;
          this.overlaidCanvasCtx = this.ctx = null;
          this._indexLabels = [];
          this._panTimerId = 0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = false;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = false;
          this.canvasPool = new Xa();
          this.allDOMEventHandlers = [];
          this.panEnabled = false;
          this._defaultCursor = "default";
          this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", g = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, g = c && c.height ? c.height : this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = g, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof Ca[this.colorSet] ? Ca[this.colorSet] : Ca.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", v || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = va(a, g), this._preRenderCanvas = va(a, g), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Aa(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Aa(this._preRenderCtx), v ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = va(a, g), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = va(a, g), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Aa(this.overlaidCanvasCtx)), this._eventManager = new ia2(this), this.windowResizeHandler = J(window, "resize", function() {
            b._updateSize() && b.render();
          }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), L(this._toolBar, {
            position: "absolute",
            right: "1px",
            top: "1px"
          }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, J(this.overlaidCanvas, "click", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), J(this.overlaidCanvas, "mousemove", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), J(this.overlaidCanvas, "mouseup", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), J(
            this.overlaidCanvas,
            "mousedown",
            function(a2) {
              b._mouseEventHandler(a2);
              xa(b._dropdownMenu);
            },
            this.allDOMEventHandlers
          ), J(this.overlaidCanvas, "mouseout", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), J(
            this.overlaidCanvas,
            window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend",
            function(a2) {
              b._touchEventHandler(a2);
            },
            this.allDOMEventHandlers
          ), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), this.toolTip = new oa(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function t2(a, g) {
          for (var c = [], b, e = 0; e < a.length; e++)
            if (0 == e)
              c.push(a[0]);
            else {
              var h, r, x;
              x = e - 1;
              h = 0 === x ? 0 : x - 1;
              r = x === a.length - 1 ? x : x + 1;
              b = Math.abs((a[r].x - a[h].x) / (0 === a[r].x - a[x].x ? 0.01 : a[r].x - a[x].x)) * (g - 1) / 2 + 1;
              var I = (a[r].x - a[h].x) / b;
              b = (a[r].y - a[h].y) / b;
              c[c.length] = a[x].x > a[h].x && 0 < I || a[x].x < a[h].x && 0 > I ? { x: a[x].x + I / 3, y: a[x].y + b / 3 } : { x: a[x].x, y: a[x].y + (1 === c.length ? 0 : b / 9) };
              x = e;
              h = 0 === x ? 0 : x - 1;
              r = x === a.length - 1 ? x : x + 1;
              b = Math.abs((a[r].x - a[h].x) / (0 === a[x].x - a[h].x ? 0.01 : a[x].x - a[h].x)) * (g - 1) / 2 + 1;
              I = (a[r].x - a[h].x) / b;
              b = (a[r].y - a[h].y) / b;
              c[c.length] = a[x].x > a[h].x && 0 < I || a[x].x < a[h].x && 0 > I ? { x: a[x].x - I / 3, y: a[x].y - b / 3 } : { x: a[x].x, y: a[x].y - b / 9 };
              c[c.length] = a[e];
            }
          return c;
        }
        function A2(a, g, c, b, e, h, r, x, I, k) {
          var m = 0;
          k ? (r.color = h, x.color = h) : k = 1;
          m = I ? Math.abs(e - c) : Math.abs(b - g);
          m = 0 < r.trimLength ? Math.abs(m * r.trimLength / 100) : Math.abs(m - r.length);
          I ? (c += m / 2, e -= m / 2) : (g += m / 2, b -= m / 2);
          var m = 1 === Math.round(r.thickness) % 2 ? 0.5 : 0, p = 1 === Math.round(x.thickness) % 2 ? 0.5 : 0;
          a.save();
          a.globalAlpha = k;
          a.strokeStyle = x.color || h;
          a.lineWidth = x.thickness || 2;
          a.setLineDash && a.setLineDash(H(x.dashType, x.thickness));
          a.beginPath();
          I && 0 < x.thickness ? (a.moveTo(b - r.thickness / 2, Math.round((c + e) / 2) - p), a.lineTo(g + r.thickness / 2, Math.round((c + e) / 2) - p)) : 0 < x.thickness && (a.moveTo(Math.round((g + b) / 2) - p, c + r.thickness / 2), a.lineTo(Math.round((g + b) / 2) - p, e - r.thickness / 2));
          a.stroke();
          a.strokeStyle = r.color || h;
          a.lineWidth = r.thickness || 2;
          a.setLineDash && a.setLineDash(H(r.dashType, r.thickness));
          a.beginPath();
          I && 0 < r.thickness ? (a.moveTo(b - m, c), a.lineTo(b - m, e), a.moveTo(g + m, c), a.lineTo(g + m, e)) : 0 < r.thickness && (a.moveTo(g, c + m), a.lineTo(b, c + m), a.moveTo(g, e - m), a.lineTo(b, e - m));
          a.stroke();
          a.restore();
        }
        function R2(a, g) {
          R2.base.constructor.call(this, "Legend", "legend", g, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = { x1: null, y1: null, x2: null, y2: null };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize;
        }
        function W2(a, g, c, b) {
          W2.base.constructor.call(this, "DataSeries", "data", g, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = c;
          this.noDataPointsInPlotArea = 0;
          this.id = b;
          this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
          a = g.dataPoints ? g.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (g = 0; g < a; g++)
            this.dataPointEOs[g] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = true;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function D(a, g, c, b, e, h) {
          D.base.constructor.call(this, "Axis", g, c, b, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
          this.isOptionsInArray = true;
          "axisX" === e ? ("left" === h || "bottom" === h ? (this.optionsName = "axisX", n(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", n(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === h || "bottom" === h ? (this.optionsName = "axisY", n(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", n(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = e;
          "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
          this._position = h;
          this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new ea2(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length)
            for (a = 0; a < this.options.stripLines.length; a++)
              this.stripLines.push(new P(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
          this.options.crosshair && (this.crosshair = new da2(
            this.chart,
            this.options.crosshair,
            this
          ));
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum");
        }
        function ea2(a, g, c, b) {
          ea2.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", g, null, b);
          this.id = c;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = b;
          this.optionsName = "scaleBreaks";
          this.isOptionsInArray = false;
          this._appliedBreaks = [];
          this.customBreaks = [];
          this.autoBreaks = [];
          "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
          this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
          if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
            for (a = 0; a < this.options.customBreaks.length; a++)
              this.customBreaks.push(new ca2(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
            this._appliedBreaks.sort(function(a2, b2) {
              return a2.startValue - b2.startValue;
            });
            for (a = 0; a < this._appliedBreaks.length - 1; a++)
              this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--);
          }
        }
        function ca2(a, g, c, b, e, h) {
          ca2.base.constructor.call(this, "Break", g, c, b, h);
          this.id = e;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.scaleBreaks = h;
          this.optionsName = g;
          this.isOptionsInArray = true;
          this.type = c.type ? this.type : h.type;
          this.fillOpacity = n(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
          this.lineThickness = n(c.lineThickness) ? h.lineThickness : this.lineThickness;
          this.color = c.color ? this.color : h.color;
          this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
          this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
          !n(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
          !n(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
          "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
          this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
          "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = h.spacing);
          this.size = h.parent.logarithmic ? 1 : 0;
        }
        function P(a, g, c, b, e) {
          P.base.constructor.call(this, "StripLine", "stripLines", g, c, e);
          this.id = b;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.label = this.label;
          this.axis = e;
          this.optionsName = "stripLines";
          this.isOptionsInArray = true;
          this._thicknessType = "pixel";
          null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
        }
        function da2(a, g, c) {
          da2.base.constructor.call(this, "Crosshair", "crosshair", g, null, c);
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = c;
          this.optionsName = "crosshair";
          this._thicknessType = "pixel";
        }
        function oa(a, g) {
          oa.base.constructor.call(this, "ToolTip", "toolTip", g, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX = NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize();
        }
        function ia2(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = va(this.chart.width, this.chart.height, true);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = [];
        }
        function X2(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null;
        }
        qa(l, Z);
        l.prototype.destroy = function() {
          var a = this.allDOMEventHandlers;
          this._animator && this._animator.cancelAllAnimations();
          this._panTimerId && clearTimeout(this._panTimerId);
          for (var g = 0; g < a.length; g++) {
            var c = a[g][0], b = a[g][1], e = a[g][2], h = a[g][3], h = h || false;
            c.removeEventListener ? c.removeEventListener(b, e, h) : c.detachEvent && c.detachEvent("on" + b, e);
          }
          this.allDOMEventHandlers = [];
          for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); )
            this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container && this.container.hasChildNodes(); )
            this.container.removeChild(this.container.lastChild);
          for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
            this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
          this.container = this._canvasJSContainer = null;
          this.toolTip.container = null;
          this.canvas && za(this.canvas);
          this.overlaidCanvas && za(this.overlaidCanvas);
          this._preRenderCanvas && za(this._preRenderCanvas);
          this._breaksCanvas && za(this._breaksCanvas);
          this._eventManager && this._eventManager.ghostCanvas && za(this._eventManager.ghostCanvas);
          this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
        };
        l.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.theme && n(this.options.theme)) && (this.theme = this.stockChart.theme);
          this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ca[this.colorSet] ? Ca[this.colorSet] : Ca.colorSet1);
          this.updateOption("backgroundColor");
          this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.backgroundColor && n(this.options.backgroundColor)) && (this.backgroundColor = this.stockChart.backgroundColor);
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this.stockChart && n(this.options.culture) && (this.culture = this.stockChart.culture);
          this._cultureInfo = new Ka(this.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && v;
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          this.toolbar = new Wa(this, this.options.toolbar);
          if (this.options.zoomEnabled || this.panEnabled) {
            if (this._zoomButton)
              L(this._zoomButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), ta(this, this._zoomButton, "zoom"), 0 >= navigator.userAgent.search("MSIE") && this._zoomButton.childNodes[0] && L(this._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
            else {
              var g = false;
              xa(this._zoomButton = document.createElement("button"));
              ta(this, this._zoomButton, "pan");
              this._toolBar.appendChild(this._zoomButton);
              this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
              J(this._zoomButton, "touchstart", function(a2) {
                g = true;
              }, this.allDOMEventHandlers);
              J(
                this._zoomButton,
                "click",
                function() {
                  a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, ta(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, ta(a, a._zoomButton, "pan"));
                  a.render();
                },
                this.allDOMEventHandlers
              );
              J(
                this._zoomButton,
                "mousemove",
                function() {
                  g ? g = false : (L(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && L(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                },
                this.allDOMEventHandlers
              );
              J(this._zoomButton, "mouseout", function() {
                g || (L(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && L(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
              }, this.allDOMEventHandlers);
            }
            this._resetButton ? (L(this._resetButton, {
              borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
              backgroundColor: a.toolbar.itemBackgroundColor,
              color: a.toolbar.fontColor
            }), 0 >= navigator.userAgent.search("MSIE") && this._resetButton.childNodes[0] && L(this._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }), this._resetButton.title = this._cultureInfo.resetText) : (g = false, xa(this._resetButton = document.createElement("button")), ta(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton), J(this._resetButton, "touchstart", function(a2) {
              g = true;
            }, this.allDOMEventHandlers), J(this._resetButton, "click", function() {
              a.toolTip.hide();
              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", { chart: a, toolTip: a.toolTip }, a.toolTip);
              a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, ta(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
              if (a.sessionVariables.axisX)
                for (var b = 0; b < a.sessionVariables.axisX.length; b++)
                  a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
              if (a.sessionVariables.axisX2)
                for (b = 0; b < a.sessionVariables.axisX2.length; b++)
                  a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY)
                for (b = 0; b < a.sessionVariables.axisY.length; b++)
                  a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY2)
                for (b = 0; b < a.sessionVariables.axisY2.length; b++)
                  a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
              a.resetOverlayedCanvas();
              0 >= navigator.userAgent.search("MSIE") && L(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
              xa(a._zoomButton, a._resetButton);
              a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
              a._dispatchRangeEvent("rangeChanging", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
              a.render();
              a.syncCharts && a.syncCharts(null, null);
              a._dispatchRangeEvent("rangeChanged", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
            }, this.allDOMEventHandlers), J(this._resetButton, "mousemove", function() {
              g || (L(a._resetButton, {
                backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                color: a.toolbar.fontColorOnHover,
                transition: "0.4s",
                WebkitTransition: "0.4s"
              }), 0 >= navigator.userAgent.search("MSIE") && L(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
            }, this.allDOMEventHandlers), J(this._resetButton, "mouseout", function() {
              g || (L(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && L(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
            }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
            this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), Ma(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
          } else
            this.panEnabled = this.zoomEnabled = false;
          ib(this);
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ta(a, a._zoomButton, "zoom") : ta(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ta(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (var c in this.toolTip.options)
            this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c);
        };
        l.prototype._updateSize = function() {
          var a;
          a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
          var g = 0, c = 0;
          this.options.width ? g = this.width : this.width = g = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
          n(this.stockChart) || n(this.index) ? this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height : c = this.height = this.stockChart._chartsHeight[this.index];
          if (this.canvas.width !== g * ma || this.canvas.height !== c * ma) {
            for (var b = 0; b < a.length; b++)
              Na(a[b], g, c);
            this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
            a = true;
          } else
            a = false;
          return a;
        };
        l.prototype._initialize = function() {
          this.isNavigator = n(this.parent) || n(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new X2(this);
          this.removeAllEventListeners();
          this.disableToolTip = false;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
          this._updateOptions();
          this.animatedRender = v && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager && this._eventManager.reset();
          this.plotInfo = { axisPlacement: null, plotTypes: [] };
          this.layoutManager = new Fa(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          this.title = null;
          this.subtitles = [];
          var a = 0, g = null;
          if (this.options.data) {
            for (var c = 0; c < this.options.data.length; c++)
              if (a++, !this.options.data[c].type || 0 <= l._supportedChartTypes.indexOf(this.options.data[c].type)) {
                var b = new W2(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                if (!n(b) && b.dataPoints) {
                  for (var e = 0; e < b.dataPoints.length; e++)
                    if (b.dataPoints[e].x && b.dataPoints[e].x.getTime) {
                      b.xValueType = "dateTime";
                      break;
                    }
                }
                "error" === b.type && (b.linkedDataSeriesIndex = n(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
                null === b.name && (b.name = "DataSeries " + a);
                null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
                null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a2) {
                  return a2.x;
                }) && b.dataPoints.sort(d) : b.dataPoints.sort(d));
                this.data.push(b);
                var e = b.axisPlacement, g = g || e, h;
                "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (h = 'You cannot combine "' + b.type + '" with pie chart');
                if (h && window.console) {
                  window.console.log(h);
                  return;
                }
              }
            for (c = 0; c < this.data.length; c++) {
              if ("none" == g && "error" === this.data[c].type && window.console) {
                window.console.log('You cannot combine "' + b.type + '" with error chart');
                return;
              }
              "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = g || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
            }
          }
          this._objectsInitialized = true;
          this._plotAreaElements = [];
        };
        l._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        l.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, g = 0; g < this.data.length; g++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
              if (!this.data[g].axisYType || "primary" === this.data[g].axisYType)
                if (this.options.axisY && 0 < this.options.axisY.length) {
                  if (!this.axisY.length)
                    for (var c = 0; c < this.options.axisY.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                  this.data[g].axisY = this.axisY[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY.length ? this.data[g].axisYIndex : 0];
                  this.axisY[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY.length ? this.data[g].axisYIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new D(
                    this,
                    "axisY",
                    this.options.axisY,
                    0,
                    "axisY",
                    "left"
                  )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new D(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[g].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[g]);
              if ("secondary" === this.data[g].axisYType)
                if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                  if (!this.axisY2.length)
                    for (c = 0; c < this.options.axisY2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new D(
                        this,
                        "axisY2",
                        this.options.axisY2[c],
                        c,
                        "axisY",
                        "right"
                      )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new D(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                  this.data[g].axisY = this.axisY2[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY2.length ? this.data[g].axisYIndex : 0];
                  this.axisY2[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY2.length ? this.data[g].axisYIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new D(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new D(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[g].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[g]);
              if (!this.data[g].axisXType || "primary" === this.data[g].axisXType)
                if (this.options.axisX && 0 < this.options.axisX.length) {
                  if (!this.axisX.length)
                    for (c = 0; c < this.options.axisX.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new D(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new D(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                  this.data[g].axisX = this.axisX[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX.length ? this.data[g].axisXIndex : 0];
                  this.axisX[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX.length ? this.data[g].axisXIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[g].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[g]);
              if ("secondary" === this.data[g].axisXType)
                if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                  if (!this.axisX2.length)
                    for (c = 0; c < this.options.axisX2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                  this.data[g].axisX = this.axisX2[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX2.length ? this.data[g].axisXIndex : 0];
                  this.axisX2[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX2.length ? this.data[g].axisXIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[g].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[g]);
            }
          if (this.axisY) {
            for (c = 1; c < this.axisY.length; c++)
              "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
            for (c = 0; c < this.axisY.length - 1; c++)
              "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
          }
          if (this.axisY2) {
            for (c = 1; c < this.axisY2.length; c++)
              "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
            for (c = 0; c < this.axisY2.length - 1; c++)
              "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
          }
          this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
          if (this.axisX)
            for (c = 0; c < this.axisX.length; c++)
              "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
          if (this.axisX2)
            for (c = 0; c < this.axisX2.length; c++)
              "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          c = false;
          if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
            for (g = 0; g < this._axes.length; g++)
              if (!n(this._axes[g].viewportMinimum) || !n(this._axes[g].viewportMaximum)) {
                c = true;
                break;
              }
          }
          c ? (Ma(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (xa(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true, this.panEnabled = false));
          gb(this);
          this._processData();
          this.options.title && (this.title = new Ba(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
          if (this.options.subtitles)
            for (g = 0; g < this.options.subtitles.length; g++)
              c = new Ja(this, this.options.subtitles[g], g), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
          this.legend = new R2(this, this.options.legend);
          for (g = 0; g < this.data.length; g++)
            (this.data[g].showInLegend || "pie" === this.data[g].type || "doughnut" === this.data[g].type || "funnel" === this.data[g].type || "pyramid" === this.data[g].type) && this.legend.dataSeries.push(this.data[g]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (g = 0; g < this._axes.length; g++)
            if (this._axes[g].scaleBreaks && this._axes[g].scaleBreaks._appliedBreaks.length) {
              v ? (this._breaksCanvas = va(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
              break;
            }
          this._preRenderCanvas = va(this.width, this.height);
          this._preRenderCtx = this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || D.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        l.prototype.renderElements = function() {
          if (this.height) {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var g = 0; g < this.subtitles.length; g++)
              this.subtitles[g].dockInsidePlotArea || this.subtitles[g].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
              D.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement)
              this.preparePlotArea();
            else
              return;
            for (g = 0; g < a.length; g++)
              a[g].setLayout(), a[g].render();
            var c = [];
            if (this.animatedRender) {
              var b = va(this.width, this.height);
              b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            jb(this);
            var a = this.ctx.miterLimit, e;
            this.ctx.miterLimit = 3;
            v && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (g = 0; g < this.plotInfo.plotTypes.length; g++)
              for (var h = this.plotInfo.plotTypes[g], r = 0; r < h.plotUnits.length; r++) {
                var x = h.plotUnits[r], I = null;
                x.targetCanvas && za(x.targetCanvas);
                x.targetCanvas = null;
                this.animatedRender && (x.targetCanvas = va(this.width, this.height), x.targetCanvasCtx = x.targetCanvas.getContext("2d"), e = x.targetCanvasCtx.miterLimit, x.targetCanvasCtx.miterLimit = 3);
                "line" === x.type ? I = this.renderLine(x) : "stepLine" === x.type ? I = this.renderStepLine(x) : "spline" === x.type ? I = this.renderSpline(x) : "column" === x.type ? I = this.renderColumn(x) : "bar" === x.type ? I = this.renderBar(x) : "area" === x.type ? I = this.renderArea(x) : "stepArea" === x.type ? I = this.renderStepArea(x) : "splineArea" === x.type ? I = this.renderSplineArea(x) : "stackedColumn" === x.type ? I = this.renderStackedColumn(x) : "stackedColumn100" === x.type ? I = this.renderStackedColumn100(x) : "stackedBar" === x.type ? I = this.renderStackedBar(x) : "stackedBar100" === x.type ? I = this.renderStackedBar100(x) : "stackedArea" === x.type ? I = this.renderStackedArea(x) : "stackedArea100" === x.type ? I = this.renderStackedArea100(x) : "bubble" === x.type ? I = I = this.renderBubble(x) : "scatter" === x.type ? I = this.renderScatter(x) : "pie" === x.type ? this.renderPie(x) : "doughnut" === x.type ? this.renderPie(x) : "funnel" === x.type ? I = this.renderFunnel(x) : "pyramid" === x.type ? I = this.renderFunnel(x) : "candlestick" === x.type ? I = this.renderCandlestick(x) : "ohlc" === x.type ? I = this.renderCandlestick(x) : "rangeColumn" === x.type ? I = this.renderRangeColumn(x) : "error" === x.type ? I = this.renderError(x) : "rangeBar" === x.type ? I = this.renderRangeBar(x) : "rangeArea" === x.type ? I = this.renderRangeArea(x) : "rangeSplineArea" === x.type ? I = this.renderRangeSplineArea(x) : "waterfall" === x.type ? I = this.renderWaterfall(x) : "boxAndWhisker" === x.type && (I = this.renderBoxAndWhisker(x));
                for (var k = 0; k < x.dataSeriesIndexes.length; k++)
                  this._dataInRenderedOrder.push(this.data[x.dataSeriesIndexes[k]]);
                this.animatedRender && (x.targetCanvasCtx.miterLimit = e, I && c.push(I));
              }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: N.fadeInAnimation, easingFunction: N.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length && (e = va(this.width, this.height).getContext("2d"), Aa(e), c.push(this.renderIndexLabels(e)));
            var m = this;
            if (0 < c.length)
              m.disableToolTip = true, m._animator.animate(200, m.animationDuration, function(a2) {
                m.ctx.clearRect(0, 0, m.width, m.height);
                m.ctx.drawImage(b, 0, 0, Math.floor(m.width * ma), Math.floor(m.height * ma), 0, 0, m.width, m.height);
                for (var e2 = 0; e2 < c.length; e2++)
                  I = c[e2], 1 > a2 && "undefined" !== typeof I.startTimePercent ? a2 >= I.startTimePercent && I.animationCallback(
                    I.easingFunction(a2 - I.startTimePercent, 0, 1, 1 - I.startTimePercent),
                    I
                  ) : I.animationCallback(I.easingFunction(a2, 0, 1, 1), I);
                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              }, function() {
                c = [];
                for (var a2 = 0; a2 < m.plotInfo.plotTypes.length; a2++)
                  for (var e2 = m.plotInfo.plotTypes[a2], f = 0; f < e2.plotUnits.length; f++) {
                    var g2 = e2.plotUnits[f];
                    g2.targetCanvas && za(g2.targetCanvas);
                    g2.targetCanvas = null;
                  }
                b = null;
                m.disableToolTip = false;
                m.dispatchEvent("dataAnimationEnd", { chart: m });
              });
            else {
              if (m._breaksCanvas)
                if (v)
                  m.plotArea.ctx.drawImage(m._breaksCanvas, 0, 0, this.width, this.height);
                else
                  for (k = 0; k < m._axes.length; k++)
                    m._axes[k].createMask();
              0 < m._indexLabels.length && m.renderIndexLabels();
              m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              m.dispatchEvent("dataAnimationEnd", { chart: m });
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || xa(this._zoomButton, this._resetButton);
            n(this.toolTip._xValue) || n(this.toolTip._dataSeriesIndex) || this.toolTip.showAtX(this.toolTip._xValue, this.toolTip._dataSeriesIndex);
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ia && (m = this, setTimeout(function() {
              var a2 = document.getElementById("ghostCanvasCopy");
              a2 && (Na(a2, m.width, m.height), a2.getContext("2d").drawImage(m._eventManager.ghostCanvas, 0, 0));
            }, 2e3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++)
              this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
          }
        };
        l.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas && za(this._preRenderCanvas);
        };
        l.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({ context: this, chart: this, mousedown: this._plotAreaMouseDown, mouseup: this._plotAreaMouseUp, mousemove: this._plotAreaMouseMove, cursor: this.panEnabled ? "move" : "default", capture: true, bounds: this.plotArea });
        };
        l.prototype.categoriseDataSeries = function() {
          for (var a = "", g = 0; g < this.data.length; g++)
            if (a = this.data[g], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= l._supportedChartTypes.indexOf(a.type)) {
              for (var c = null, b = false, e = null, h = false, r = 0; r < this.plotInfo.plotTypes.length; r++)
                if (this.plotInfo.plotTypes[r].type === a.type) {
                  b = true;
                  c = this.plotInfo.plotTypes[r];
                  break;
                }
              b || (c = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(c));
              for (r = 0; r < c.plotUnits.length; r++)
                if (c.plotUnits[r].axisYType === a.axisYType && c.plotUnits[r].axisXType === a.axisXType && c.plotUnits[r].axisYIndex === a.axisYIndex && c.plotUnits[r].axisXIndex === a.axisXIndex) {
                  h = true;
                  e = c.plotUnits[r];
                  break;
                }
              h || (e = {
                type: a.type,
                previousDataSeriesCount: 0,
                index: c.plotUnits.length,
                plotType: c,
                axisXType: a.axisXType,
                axisYType: a.axisYType,
                axisYIndex: a.axisYIndex,
                axisXIndex: a.axisXIndex,
                axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                dataSeriesIndexes: [],
                yTotals: [],
                yAbsTotals: []
              }, c.plotUnits.push(e));
              c.totalDataSeries++;
              e.dataSeriesIndexes.push(g);
              a.plotUnit = e;
            }
          for (g = 0; g < this.plotInfo.plotTypes.length; g++)
            for (c = this.plotInfo.plotTypes[g], r = a = 0; r < c.plotUnits.length; r++)
              c.plotUnits[r].previousDataSeriesCount = a, a += c.plotUnits[r].dataSeriesIndexes.length;
        };
        l.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
            var g = this.data[a];
            if (g.dataPoints)
              for (var c = g.dataPoints.length, b = 0; b < c; b++)
                g.dataPointIds[b] = ++this._eventManager.lastObjectId;
          }
        };
        l.prototype._processData = function() {
          this.assignIdToDataPoints();
          this.categoriseDataSeries();
          for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var g = this.plotInfo.plotTypes[a], c = 0; c < g.plotUnits.length; c++) {
              var b = g.plotUnits[c];
              "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
            }
          this.calculateAutoBreaks();
        };
        l.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, r = 0; r < a.dataSeriesIndexes.length; r++) {
              var x = this.data[a.dataSeriesIndexes[r]], I = 0, k = false, m = false, p;
              if ("normal" === x.axisPlacement || "xySwapped" === x.axisPlacement)
                var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (x.dataPoints[I].x && x.dataPoints[I].x.getTime || "dateTime" === x.xValueType)
                h = true;
              for (I = 0; I < x.dataPoints.length; I++) {
                "undefined" === typeof x.dataPoints[I].x && (x.dataPoints[I].x = I + (a.axisX.logarithmic ? 1 : 0));
                x.dataPoints[I].x.getTime ? (h = true, b = x.dataPoints[I].x.getTime()) : b = x.dataPoints[I].x;
                e = x.dataPoints[I].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                e < g.min && "number" === typeof e && (g.min = e);
                e > g.max && "number" === typeof e && (g.max = e);
                if (0 < I) {
                  if (a.axisX.logarithmic) {
                    var d2 = b / x.dataPoints[I - 1].x;
                    1 > d2 && (d2 = 1 / d2);
                    c.minDiff > d2 && 1 !== d2 && (c.minDiff = d2);
                  } else
                    d2 = b - x.dataPoints[I - 1].x, 0 > d2 && (d2 *= -1), c.minDiff > d2 && 0 !== d2 && (c.minDiff = d2);
                  null !== e && null !== x.dataPoints[I - 1].y && (a.axisY.logarithmic ? (d2 = e / x.dataPoints[I - 1].y, 1 > d2 && (d2 = 1 / d2), g.minDiff > d2 && 1 !== d2 && (g.minDiff = d2)) : (d2 = e - x.dataPoints[I - 1].y, 0 > d2 && (d2 *= -1), g.minDiff > d2 && 0 !== d2 && (g.minDiff = d2)));
                }
                if (b < q && !k)
                  null !== e && (p = b);
                else {
                  if (!k && (k = true, 0 < I)) {
                    I -= 2;
                    continue;
                  }
                  if (b > f && !m)
                    m = true;
                  else if (b > f && m)
                    continue;
                  x.dataPoints[I].label && (a.axisX.labels[b] = x.dataPoints[I].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && p < b && (c.viewPortMin = p) : (e < g.viewPortMin && "number" === typeof e && (g.viewPortMin = e), e > g.viewPortMax && "number" === typeof e && (g.viewPortMax = e));
                }
              }
              x.axisX.valueType = x.xValueType = h ? "dateTime" : "number";
            }
        };
        l.prototype._processStackedPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, r = [], x = [], I = Infinity, k = -Infinity, m = {}, p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = this.data[a.dataSeriesIndexes[p]], f = 0, d2 = false, w = false, y;
              if ("normal" === q.axisPlacement || "xySwapped" === q.axisPlacement)
                var s = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, z = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (q.dataPoints[f].x && q.dataPoints[f].x.getTime || "dateTime" === q.xValueType)
                h = true;
              for (f = 0; f < q.dataPoints.length; f++) {
                "undefined" === typeof q.dataPoints[f].x && (q.dataPoints[f].x = f + (a.axisX.logarithmic ? 1 : 0));
                q.dataPoints[f].x.getTime ? (h = true, b = q.dataPoints[f].x.getTime()) : b = q.dataPoints[f].x;
                e = n(q.dataPoints[f].y) ? 0 : q.dataPoints[f].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < f) {
                  if (a.axisX.logarithmic) {
                    var u = b / q.dataPoints[f - 1].x;
                    1 > u && (u = 1 / u);
                    c.minDiff > u && 1 !== u && (c.minDiff = u);
                  } else
                    u = b - q.dataPoints[f - 1].x, 0 > u && (u *= -1), c.minDiff > u && 0 !== u && (c.minDiff = u);
                  null !== e && null !== q.dataPoints[f - 1].y && (a.axisY.logarithmic ? 0 < e && (u = e / q.dataPoints[f - 1].y, 1 > u && (u = 1 / u), g.minDiff > u && 1 !== u && (g.minDiff = u)) : (u = e - q.dataPoints[f - 1].y, 0 > u && (u *= -1), g.minDiff > u && 0 !== u && (g.minDiff = u)));
                }
                if (b < s && !d2)
                  null !== q.dataPoints[f].y && (y = b);
                else {
                  if (!d2 && (d2 = true, 0 < f)) {
                    f -= 2;
                    continue;
                  }
                  if (b > z && !w)
                    w = true;
                  else if (b > z && w)
                    continue;
                  q.dataPoints[f].label && (a.axisX.labels[b] = q.dataPoints[f].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === q.dataPoints[f].y ? c.viewPortMin === b && y < b && (c.viewPortMin = y) : (m[b] = (m[b] || 0) + q.dataPoints[f].y, q.dataPointEOs[f].cumulativeY = m[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? r[b] ? r[b] += e : (r[b] = e, I = Math.min(e, I)) : x[b] ? x[b] += e : (x[b] = e, k = Math.max(e, k)));
                }
              }
              a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (g.dataPointYPositiveSums ? (g.dataPointYPositiveSums.push.apply(g.dataPointYPositiveSums, r), g.dataPointYNegativeSums.push.apply(g.dataPointYPositiveSums, x)) : (g.dataPointYPositiveSums = r, g.dataPointYNegativeSums = x));
              q.axisX.valueType = q.xValueType = h ? "dateTime" : "number";
            }
            for (f in r)
              r.hasOwnProperty(f) && !isNaN(f) && (a = r[f], a < g.min && (g.min = Math.min(a, I)), a > g.max && (g.max = a), f < c.viewPortMin || f > c.viewPortMax || (a < g.viewPortMin && (g.viewPortMin = Math.min(a, I)), a > g.viewPortMax && (g.viewPortMax = a)));
            for (f in x)
              x.hasOwnProperty(f) && !isNaN(f) && (a = x[f], a < g.min && (g.min = a), a > g.max && (g.max = Math.max(a, k)), f < c.viewPortMin || f > c.viewPortMax || (a < g.viewPortMin && (g.viewPortMin = a), a > g.viewPortMax && (g.viewPortMax = Math.max(a, k))));
          }
        };
        l.prototype._processStacked100PlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, r = false, x = false, I = {}, k = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
              var p = this.data[a.dataSeriesIndexes[m]], q = 0, f = false, d2 = false, w;
              if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement)
                var y = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (p.dataPoints[q].x && p.dataPoints[q].x.getTime || "dateTime" === p.xValueType)
                h = true;
              for (q = 0; q < p.dataPoints.length; q++) {
                "undefined" === typeof p.dataPoints[q].x && (p.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                p.dataPoints[q].x.getTime ? (h = true, b = p.dataPoints[q].x.getTime()) : b = p.dataPoints[q].x;
                e = n(p.dataPoints[q].y) ? null : p.dataPoints[q].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < q) {
                  if (a.axisX.logarithmic) {
                    var z = b / p.dataPoints[q - 1].x;
                    1 > z && (z = 1 / z);
                    c.minDiff > z && 1 !== z && (c.minDiff = z);
                  } else
                    z = b - p.dataPoints[q - 1].x, 0 > z && (z *= -1), c.minDiff > z && 0 !== z && (c.minDiff = z);
                  n(e) || null === p.dataPoints[q - 1].y || (a.axisY.logarithmic ? 0 < e && (z = e / p.dataPoints[q - 1].y, 1 > z && (z = 1 / z), g.minDiff > z && 1 !== z && (g.minDiff = z)) : (z = e - p.dataPoints[q - 1].y, 0 > z && (z *= -1), g.minDiff > z && 0 !== z && (g.minDiff = z)));
                }
                if (b < y && !f)
                  null !== e && (w = b);
                else {
                  if (!f && (f = true, 0 < q)) {
                    q -= 2;
                    continue;
                  }
                  if (b > s && !d2)
                    d2 = true;
                  else if (b > s && d2)
                    continue;
                  p.dataPoints[q].label && (a.axisX.labels[b] = p.dataPoints[q].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && w < b && (c.viewPortMin = w) : (I[b] = (I[b] || 0) + p.dataPoints[q].y, p.dataPointEOs[q].cumulativeY = I[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? r = true : 0 > e && (x = true), k[b] = k[b] ? k[b] + Math.abs(e) : Math.abs(e));
                }
              }
              p.axisX.valueType = p.xValueType = h ? "dateTime" : "number";
            }
            a.axisY.logarithmic ? (g.max = n(g.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(g.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), g.min = n(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)) : r && !x ? (g.max = n(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99), g.min = n(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)) : r && x ? (g.max = n(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99), g.min = n(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99)) : !r && x && (g.max = n(g.viewPortMax) ? -1 : Math.max(
              g.viewPortMax,
              -1
            ), g.min = n(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99));
            g.viewPortMin = g.min;
            g.viewPortMax = g.max;
            a.dataPointYSums = k;
          }
        };
        l.prototype._processMultiYPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h, r, x = false, I = 0; I < a.dataSeriesIndexes.length; I++) {
              var k = this.data[a.dataSeriesIndexes[I]], m = 0, p = false, q = false, f, d2, n2;
              if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                var y = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (k.dataPoints[m].x && k.dataPoints[m].x.getTime || "dateTime" === k.xValueType)
                x = true;
              for (m = 0; m < k.dataPoints.length; m++) {
                "undefined" === typeof k.dataPoints[m].x && (k.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
                k.dataPoints[m].x.getTime ? (x = true, b = k.dataPoints[m].x.getTime()) : b = k.dataPoints[m].x;
                if ((e = k.dataPoints[m].y) && e.length) {
                  h = Math.min.apply(null, e);
                  r = Math.max.apply(null, e);
                  d2 = true;
                  for (var z = 0; z < e.length; z++)
                    null === e.k && (d2 = false);
                  d2 && (p || (n2 = f), f = b);
                }
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                h < g.min && (g.min = h);
                r > g.max && (g.max = r);
                0 < m && (a.axisX.logarithmic ? (d2 = b / k.dataPoints[m - 1].x, 1 > d2 && (d2 = 1 / d2), c.minDiff > d2 && 1 !== d2 && (c.minDiff = d2)) : (d2 = b - k.dataPoints[m - 1].x, 0 > d2 && (d2 *= -1), c.minDiff > d2 && 0 !== d2 && (c.minDiff = d2)), e && (null !== e[0] && k.dataPoints[m - 1].y && null !== k.dataPoints[m - 1].y[0]) && (a.axisY.logarithmic ? (d2 = e[0] / k.dataPoints[m - 1].y[0], 1 > d2 && (d2 = 1 / d2), g.minDiff > d2 && 1 !== d2 && (g.minDiff = d2)) : (d2 = e[0] - k.dataPoints[m - 1].y[0], 0 > d2 && (d2 *= -1), g.minDiff > d2 && 0 !== d2 && (g.minDiff = d2))));
                if (!(b < y) || p) {
                  if (!p && (p = true, 0 < m)) {
                    m -= 2;
                    f = n2;
                    continue;
                  }
                  if (b > s && !q)
                    q = true;
                  else if (b > s && q)
                    continue;
                  k.dataPoints[m].label && (a.axisX.labels[b] = k.dataPoints[m].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  if (c.viewPortMin === b && e) {
                    for (z = 0; z < e.length; z++)
                      if (null === e[z] && f < b) {
                        c.viewPortMin = f;
                        break;
                      }
                  }
                  null === e ? c.viewPortMin === b && f < b && (c.viewPortMin = f) : (h < g.viewPortMin && (g.viewPortMin = h), r > g.viewPortMax && (g.viewPortMax = r));
                }
              }
              k.axisX.valueType = k.xValueType = x ? "dateTime" : "number";
            }
        };
        l.prototype._processSpecificPlotUnit = function(a) {
          if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, r = 0; r < a.dataSeriesIndexes.length; r++) {
              var x = this.data[a.dataSeriesIndexes[r]], d2 = 0, k = false, m = false, p = b = 0;
              if ("normal" === x.axisPlacement || "xySwapped" === x.axisPlacement)
                var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (x.dataPoints[d2].x && x.dataPoints[d2].x.getTime || "dateTime" === x.xValueType)
                h = true;
              for (d2 = 0; d2 < x.dataPoints.length; d2++)
                "undefined" !== typeof x.dataPoints[d2].isCumulativeSum && true === x.dataPoints[d2].isCumulativeSum ? (x.dataPointEOs[d2].cumulativeSumYStartValue = 0, x.dataPointEOs[d2].cumulativeSum = 0 === d2 ? 0 : x.dataPointEOs[d2 - 1].cumulativeSum, x.dataPoints[d2].y = 0 === d2 ? 0 : x.dataPointEOs[d2 - 1].cumulativeSum) : "undefined" !== typeof x.dataPoints[d2].isIntermediateSum && true === x.dataPoints[d2].isIntermediateSum ? (x.dataPointEOs[d2].cumulativeSumYStartValue = p, x.dataPointEOs[d2].cumulativeSum = 0 === d2 ? 0 : x.dataPointEOs[d2 - 1].cumulativeSum, x.dataPoints[d2].y = 0 === d2 ? 0 : b, p = 0 === d2 ? 0 : x.dataPointEOs[d2 - 1].cumulativeSum, b = 0) : (e = "number" !== typeof x.dataPoints[d2].y ? 0 : x.dataPoints[d2].y, x.dataPointEOs[d2].cumulativeSumYStartValue = 0 === d2 ? 0 : x.dataPointEOs[d2 - 1].cumulativeSum, x.dataPointEOs[d2].cumulativeSum = 0 === d2 ? e : x.dataPointEOs[d2 - 1].cumulativeSum + e, b += e);
              for (d2 = 0; d2 < x.dataPoints.length; d2++)
                if ("undefined" === typeof x.dataPoints[d2].x && (x.dataPoints[d2].x = d2 + (a.axisX.logarithmic ? 1 : 0)), x.dataPoints[d2].x.getTime ? (h = true, b = x.dataPoints[d2].x.getTime()) : b = x.dataPoints[d2].x, e = x.dataPoints[d2].y, b < c.min && (c.min = b), b > c.max && (c.max = b), x.dataPointEOs[d2].cumulativeSum < g.min && (g.min = x.dataPointEOs[d2].cumulativeSum), x.dataPointEOs[d2].cumulativeSum > g.max && (g.max = x.dataPointEOs[d2].cumulativeSum), 0 < d2 && (a.axisX.logarithmic ? (p = b / x.dataPoints[d2 - 1].x, 1 > p && (p = 1 / p), c.minDiff > p && 1 !== p && (c.minDiff = p)) : (p = b - x.dataPoints[d2 - 1].x, 0 > p && (p *= -1), c.minDiff > p && 0 !== p && (c.minDiff = p)), null !== e && null !== x.dataPoints[d2 - 1].y && (a.axisY.logarithmic ? (e = x.dataPointEOs[d2].cumulativeSum / x.dataPointEOs[d2 - 1].cumulativeSum, 1 > e && (e = 1 / e), g.minDiff > e && 1 !== e && (g.minDiff = e)) : (e = x.dataPointEOs[d2].cumulativeSum - x.dataPointEOs[d2 - 1].cumulativeSum, 0 > e && (e *= -1), g.minDiff > e && 0 !== e && (g.minDiff = e)))), !(b < q) || k) {
                  if (!k && (k = true, 0 < d2)) {
                    d2 -= 2;
                    continue;
                  }
                  if (b > f && !m)
                    m = true;
                  else if (b > f && m)
                    continue;
                  x.dataPoints[d2].label && (a.axisX.labels[b] = x.dataPoints[d2].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  0 < d2 && (x.dataPointEOs[d2 - 1].cumulativeSum < g.viewPortMin && (g.viewPortMin = x.dataPointEOs[d2 - 1].cumulativeSum), x.dataPointEOs[d2 - 1].cumulativeSum > g.viewPortMax && (g.viewPortMax = x.dataPointEOs[d2 - 1].cumulativeSum));
                  x.dataPointEOs[d2].cumulativeSum < g.viewPortMin && (g.viewPortMin = x.dataPointEOs[d2].cumulativeSum);
                  x.dataPointEOs[d2].cumulativeSum > g.viewPortMax && (g.viewPortMax = x.dataPointEOs[d2].cumulativeSum);
                }
              x.axisX.valueType = x.xValueType = h ? "dateTime" : "number";
            }
        };
        l.prototype.calculateAutoBreaks = function() {
          function a(a2, b2, c2, e2) {
            if (e2)
              return c2 = Math.pow(Math.min(c2 * a2 / b2, b2 / a2), 0.2), 1 >= c2 && (c2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(b2 / a2, a2), 0.25)), { startValue: a2 * c2, endValue: b2 / c2 };
            c2 = 0.2 * Math.min(c2 - b2 + a2, b2 - a2);
            0 >= c2 && (c2 = 0.25 * Math.min(b2 - a2, Math.abs(a2)));
            return { startValue: a2 + c2, endValue: b2 - c2 };
          }
          function g(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
              var b2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, c2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
              if (b2 || c2)
                for (var f2 = a2.axisY.dataInfo, g2 = a2.axisX.dataInfo, h2, r2 = g2.min, k2 = g2.max, m2 = f2.min, p2 = f2.max, g2 = g2._dataRanges, f2 = f2._dataRanges, q2, x2 = 0, d3 = 0; d3 < a2.dataSeriesIndexes.length; d3++) {
                  var I = e.data[a2.dataSeriesIndexes[d3]];
                  if (!(4 > I.dataPoints.length)) {
                    for (x2 = 0; x2 < I.dataPoints.length; x2++)
                      if (b2 && (q2 = (k2 + 1 - r2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, h2 = I.dataPoints[x2].x.getTime ? I.dataPoints[x2].x.getTime() : I.dataPoints[x2].x, q2 = Math.floor((h2 - r2) / q2), h2 < g2[q2].min && (g2[q2].min = h2), h2 > g2[q2].max && (g2[q2].max = h2)), c2) {
                        var v2 = (p2 + 1 - m2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        if ((h2 = "waterfall" === a2.type ? I.dataPointEOs[x2].cumulativeSum : I.dataPoints[x2].y) && h2.length)
                          for (var l2 = 0; l2 < h2.length; l2++)
                            q2 = Math.floor((h2[l2] - m2) / v2), h2[l2] < f2[q2].min && (f2[q2].min = h2[l2]), h2[l2] > f2[q2].max && (f2[q2].max = h2[l2]);
                        else
                          n(h2) || (q2 = Math.floor((h2 - m2) / v2), h2 < f2[q2].min && (f2[q2].min = h2), h2 > f2[q2].max && (f2[q2].max = h2));
                      }
                  }
                }
            }
          }
          function c(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks)
              for (var b2 = a2.axisX.dataInfo, c2 = b2.min, f2 = b2.max, g2 = b2._dataRanges, h2, r2 = 0, k2 = 0; k2 < a2.dataSeriesIndexes.length; k2++) {
                var m2 = e.data[a2.dataSeriesIndexes[k2]];
                if (!(4 > m2.dataPoints.length))
                  for (r2 = 0; r2 < m2.dataPoints.length; r2++)
                    h2 = (f2 + 1 - c2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b2 = m2.dataPoints[r2].x.getTime ? m2.dataPoints[r2].x.getTime() : m2.dataPoints[r2].x, h2 = Math.floor((b2 - c2) / h2), b2 < g2[h2].min && (g2[h2].min = b2), b2 > g2[h2].max && (g2[h2].max = b2);
              }
          }
          for (var b, e = this, h = false, r = 0; r < this._axes.length; r++)
            if (this._axes[r].scaleBreaks && this._axes[r].scaleBreaks.autoCalculate && 1 <= this._axes[r].scaleBreaks.maxNumberOfAutoBreaks) {
              h = true;
              this._axes[r].dataInfo._dataRanges = [];
              for (var x = 0; x < 100 / Math.max(parseFloat(this._axes[r].scaleBreaks.collapsibleThreshold) || 10, 10); x++)
                this._axes[r].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity });
            }
          if (h) {
            for (r = 0; r < this.plotInfo.plotTypes.length; r++)
              for (h = this.plotInfo.plotTypes[r], x = 0; x < h.plotUnits.length; x++)
                b = h.plotUnits[x], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? g(b) : 0 <= b.type.indexOf("stacked") && c(b);
            for (r = 0; r < this._axes.length; r++)
              if (this._axes[r].dataInfo._dataRanges) {
                var d2 = this._axes[r].dataInfo.min;
                b = (this._axes[r].dataInfo.max + 1 - d2) * Math.max(parseFloat(this._axes[r].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                var k = this._axes[r].dataInfo._dataRanges, m, p, h = [];
                if (this._axes[r].dataInfo.dataPointYPositiveSums) {
                  var q = this._axes[r].dataInfo.dataPointYPositiveSums;
                  m = k;
                  for (x in q)
                    if (q.hasOwnProperty(x) && !isNaN(x) && (p = q[x], !n(p))) {
                      var f = Math.floor((p - d2) / b);
                      p < m[f].min && (m[f].min = p);
                      p > m[f].max && (m[f].max = p);
                    }
                  delete this._axes[r].dataInfo.dataPointYPositiveSums;
                }
                if (this._axes[r].dataInfo.dataPointYNegativeSums) {
                  q = this._axes[r].dataInfo.dataPointYNegativeSums;
                  m = k;
                  for (x in q)
                    q.hasOwnProperty(x) && !isNaN(x) && (p = -1 * q[x], n(p) || (f = Math.floor((p - d2) / b), p < m[f].min && (m[f].min = p), p > m[f].max && (m[f].max = p)));
                  delete this._axes[r].dataInfo.dataPointYNegativeSums;
                }
                for (x = 0; x < k.length - 1; x++)
                  if (m = k[x].max, isFinite(m))
                    for (; x < k.length - 1; )
                      if (d2 = k[x + 1].min, isFinite(d2)) {
                        p = d2 - m;
                        p > b && h.push({ diff: p, start: m, end: d2 });
                        break;
                      } else
                        x++;
                if (this._axes[r].scaleBreaks.customBreaks) {
                  for (x = 0; x < this._axes[r].scaleBreaks.customBreaks.length; x++)
                    for (b = 0; b < h.length; b++)
                      if (this._axes[r].scaleBreaks.customBreaks[x].startValue <= h[b].start && h[b].start <= this._axes[r].scaleBreaks.customBreaks[x].endValue || this._axes[r].scaleBreaks.customBreaks[x].startValue <= h[b].start && h[b].start <= this._axes[r].scaleBreaks.customBreaks[x].endValue || h[b].start <= this._axes[r].scaleBreaks.customBreaks[x].startValue && this._axes[r].scaleBreaks.customBreaks[x].startValue <= h[b].end || h[b].start <= this._axes[r].scaleBreaks.customBreaks[x].endValue && this._axes[r].scaleBreaks.customBreaks[x].endValue <= h[b].end)
                        h.splice(b, 1), b--;
                }
                h.sort(function(a2, b2) {
                  return b2.diff - a2.diff;
                });
                for (x = 0; x < Math.min(h.length, this._axes[r].scaleBreaks.maxNumberOfAutoBreaks); x++)
                  b = a(h[x].start, h[x].end, this._axes[r].logarithmic ? this._axes[r].dataInfo.max / this._axes[r].dataInfo.min : this._axes[r].dataInfo.max - this._axes[r].dataInfo.min, this._axes[r].logarithmic), this._axes[r].scaleBreaks.autoBreaks.push(new ca2(this, "autoBreaks", b, x, ++this._eventManager.lastObjectId, this._axes[r].scaleBreaks)), this._axes[r].scaleBreaks._appliedBreaks.push(this._axes[r].scaleBreaks.autoBreaks[this._axes[r].scaleBreaks.autoBreaks.length - 1]);
                this._axes[r].scaleBreaks._appliedBreaks.sort(function(a2, b2) {
                  return a2.startValue - b2.startValue;
                });
              }
          }
        };
        l.prototype.renderCrosshairs = function(a) {
          for (var g = 0; g < this.axisX.length; g++)
            this.axisX[g] != a && (this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && !this.axisX[g].crosshair._hidden) && this.axisX[g].showCrosshair(this.axisX[g].crosshair._updatedValue);
          for (g = 0; g < this.axisX2.length; g++)
            this.axisX2[g] != a && (this.axisX2[g].crosshair && this.axisX2[g].crosshair.enabled && !this.axisX2[g].crosshair._hidden) && this.axisX2[g].showCrosshair(this.axisX2[g].crosshair._updatedValue);
          for (g = 0; g < this.axisY.length; g++)
            this.axisY[g] != a && (this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && !this.axisY[g].crosshair._hidden) && this.axisY[g].showCrosshair(this.axisY[g].crosshair._updatedValue);
          for (g = 0; g < this.axisY2.length; g++)
            this.axisY2[g] != a && (this.axisY2[g].crosshair && this.axisY2[g].crosshair.enabled && !this.axisY2[g].crosshair._hidden) && this.axisY2[g].showCrosshair(this.axisY2[g].crosshair._updatedValue);
        };
        l.prototype.getDataPointAtXY = function(a, g, c) {
          c = c || false;
          for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var h = null;
            (h = this._dataInRenderedOrder[e].getDataPointAtXY(a, g, c)) && b.push(h);
          }
          a = null;
          g = false;
          for (c = 0; c < b.length; c++)
            if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) {
              if (e = na("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) {
                g = true;
                break;
              }
            }
          for (c = 0; c < b.length; c++)
            g && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
          return a;
        };
        l.prototype.getObjectAtXY = function(a, g, c) {
          var b = null;
          if (c = this.getDataPointAtXY(a, g, c || false))
            b = c.dataSeries.dataPointIds[c.dataPointIndex];
          else if (v)
            b = bb(a, g, this._eventManager.ghostCtx);
          else
            for (c = 0; c < this.legend.items.length; c++) {
              var e = this.legend.items[c];
              a >= e.x1 && (a <= e.x2 && g >= e.y1 && g <= e.y2) && (b = e.id);
            }
          return b;
        };
        l.prototype.getAutoFontSize = nb;
        l.prototype.resetOverlayedCanvas = function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        l.prototype.clearCanvas = mb;
        l.prototype.attachEvent = function(a) {
          this._events.push(a);
        };
        l.prototype._touchEventHandler = function(a) {
          if (a.changedTouches && this.interactivityEnabled) {
            var g = [], c = a.changedTouches, b = c ? c[0] : a, e = null;
            switch (a.type) {
              case "touchstart":
              case "MSPointerDown":
                g = ["mousemove", "mousedown"];
                this._lastTouchData = Qa(b);
                this._lastTouchData.time = /* @__PURE__ */ new Date();
                break;
              case "touchmove":
              case "MSPointerMove":
                g = ["mousemove"];
                break;
              case "touchend":
              case "MSPointerUp":
                var h = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, g = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > h ? ["mouseup", "click"] : ["mouseup"];
                break;
              default:
                return;
            }
            if (!(c && 1 < c.length)) {
              e = Qa(b);
              e.time = /* @__PURE__ */ new Date();
              try {
                var r = e.y - this._lastTouchData.y, h = e.time - this._lastTouchData.time;
                if (1 < Math.abs(r) && this._lastTouchData.scroll || 5 < Math.abs(r) && 250 > h)
                  this._lastTouchData.scroll = true;
              } catch (x) {
              }
              this._lastTouchEventType = a.type;
              if (this._lastTouchData.scroll && this.zoomEnabled)
                this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
              else
                for (c = 0; c < g.length; c++)
                  if (e = g[c], r = document.createEvent("MouseEvent"), r.initMouseEvent(
                    e,
                    true,
                    true,
                    window,
                    1,
                    b.screenX,
                    b.screenY,
                    b.clientX,
                    b.clientY,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null
                  ), b.target.dispatchEvent(r), !n(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < h || "click" === e)
                    a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault();
            }
          }
        };
        l.prototype._dispatchRangeEvent = function(a, g) {
          var c = { chart: this };
          c.type = a;
          c.trigger = g;
          var b = [];
          this.axisX && 0 < this.axisX.length && b.push("axisX");
          this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
          this.axisY && 0 < this.axisY.length && b.push("axisY");
          this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
          for (var e = 0; e < b.length; e++)
            if (n(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
              for (var h = 0; h < this.axisY.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisY2" === b[e])
              for (h = 0; h < this.axisY2.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisX" === b[e])
              for (h = 0; h < this.axisX.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisX2" === b[e])
              for (h = 0; h < this.axisX2.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
          this.dispatchEvent(a, c, this);
        };
        l.prototype._mouseEventHandler = function(a) {
          function g() {
            l.capturedEventParam && (e = l.capturedEventParam, r = e.bounds, "mouseup" === b && (l.capturedEventParam = null, e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", e.chart._mouseEventHandler, false)), e.hasOwnProperty(b) && ("mouseup" !== b || e.chart.overlaidCanvas.releaseCapture ? a.target !== e.chart.overlaidCanvas && v || e[b].call(e.context, c.x, c.y) : a.target !== e.chart.overlaidCanvas && (e.chart.isDrag = false)));
          }
          "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
          var c = Qa(a), b = a.type, e, h;
          a.which ? h = 3 == a.which : a.button && (h = 2 == a.button);
          if (this._ignoreNextEvent)
            g(), this._ignoreNextEvent = false;
          else if (g(), this.interactivityEnabled) {
            a.preventManipulation && a.preventManipulation();
            a.preventDefault && a.preventDefault();
            var r;
            Ia && window.console && (window.console.log(b + " --> x: " + c.x + "; y:" + c.y), h && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup"));
            if (!h) {
              if (!l.capturedEventParam && this._events) {
                for (h = 0; h < this._events.length; h++)
                  if (this._events[h].hasOwnProperty(b))
                    if (e = this._events[h], r = e.bounds, c.x >= r.x1 && c.x <= r.x2 && c.y >= r.y1 && c.y <= r.y2) {
                      e[b].call(e.context, c.x, c.y);
                      "mousedown" === b && true === e.capture ? (l.capturedEventParam = e, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === b && (e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
                      break;
                    } else
                      e = null;
                a.target.style.cursor = e && e.cursor ? e.cursor : this._defaultCursor;
              }
              h = this.plotArea;
              if (c.x < h.x1 || c.x > h.x2 || c.y < h.y1 || c.y > h.y2) {
                this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
                for (h = 0; h < this.axisX.length; h++)
                  this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && (this.axisX[h].crosshair.hide(), this.axisX[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[h].options }, this.axisX[h].crosshair));
                for (h = 0; h < this.axisX2.length; h++)
                  this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && (this.axisX2[h].crosshair.hide(), this.axisX2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[h].options }, this.axisX2[h].crosshair));
                for (h = 0; h < this.axisY.length; h++)
                  this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && (this.axisY[h].crosshair.hide(), this.axisY[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[h].options }, this.axisY[h].crosshair));
                for (h = 0; h < this.axisY2.length; h++)
                  this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && (this.axisY2[h].crosshair.hide(), this.axisY2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[h].options }, this.axisY2[h].crosshair));
              }
              this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
            }
          }
        };
        l.prototype._plotAreaMouseDown = function(a, g) {
          this.isDrag = true;
          this.dragStartPoint = { x: a, y: g };
        };
        l.prototype._plotAreaMouseUp = function(a, g) {
          if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var c = g - this.dragStartPoint.y, b = a - this.dragStartPoint.x, e = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), r = false;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement)
              var x = h, h = e, e = x;
            if (this.panEnabled || this.zoomEnabled) {
              if (this.panEnabled)
                for (e = h = 0; e < this._axes.length; e++)
                  c = this._axes[e], c.logarithmic ? c.viewportMinimum < c.minimum ? (h = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * h, c.sessionVariables.newViewportMaximum = c.viewportMaximum * h, r = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / h, c.sessionVariables.newViewportMaximum = c.viewportMaximum / h, r = true) : c.viewportMinimum < c.minimum ? (h = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + h, c.sessionVariables.newViewportMaximum = c.viewportMaximum + h, r = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - h, c.sessionVariables.newViewportMaximum = c.viewportMaximum - h, r = true);
              else if ((!e || 2 < Math.abs(b)) && (!h || 2 < Math.abs(c)) && this.zoomEnabled) {
                if (!this.dragStartPoint)
                  return;
                c = e ? this.dragStartPoint.x : this.plotArea.x1;
                b = h ? this.dragStartPoint.y : this.plotArea.y1;
                e = e ? a : this.plotArea.x2;
                h = h ? g : this.plotArea.y2;
                2 < Math.abs(c - e) && 2 < Math.abs(b - h) && this._zoomPanToSelectedRegion(c, b, e, h) && (r = true);
              }
              r && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: this.stockChart.sessionVariables._axisXMin, maximum: this.stockChart.sessionVariables._axisXMax }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.rangeUpdatedBy = "chart", this.stockChart.navigator && this.stockChart.navigator.enabled && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart))), r && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ma(this._zoomButton, this._resetButton), ta(this, this._zoomButton, "pan"), ta(this, this._resetButton, "reset")));
            }
          }
          this.isDrag = false;
          if ("none" !== this.plotInfo.axisPlacement) {
            this.resetOverlayedCanvas();
            if (this.axisX && 0 < this.axisX.length)
              for (r = 0; r < this.axisX.length; r++)
                this.axisX[r].crosshair && this.axisX[r].crosshair.enabled && this.axisX[r].renderCrosshair(a, g);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (r = 0; r < this.axisX2.length; r++)
                this.axisX2[r].crosshair && this.axisX2[r].crosshair.enabled && this.axisX2[r].renderCrosshair(a, g);
            if (this.axisY && 0 < this.axisY.length)
              for (r = 0; r < this.axisY.length; r++)
                this.axisY[r].crosshair && this.axisY[r].crosshair.enabled && this.axisY[r].renderCrosshair(a, g);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (r = 0; r < this.axisY2.length; r++)
                this.axisY2[r].crosshair && this.axisY2[r].crosshair.enabled && this.axisY2[r].renderCrosshair(a, g);
            if (this.axisX && 0 < this.axisX.length)
              for (r = 0; r < this.axisX.length; r++)
                this.axisX[r].crosshair && this.axisX[r].crosshair.enabled && this.axisX[r].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (r = 0; r < this.axisX2.length; r++)
                this.axisX2[r].crosshair && this.axisX2[r].crosshair.enabled && this.axisX2[r].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (r = 0; r < this.axisY.length; r++)
                this.axisY[r].crosshair && this.axisY[r].crosshair.enabled && this.axisY[r].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (r = 0; r < this.axisY2.length; r++)
                this.axisY2[r].crosshair && this.axisY2[r].crosshair.enabled && this.axisY2[r].crosshair.renderLabel();
          }
        };
        l.prototype._plotAreaMouseMove = function(a, g) {
          if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0, b = 0, e = c = null, e = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), r = this;
            "xySwapped" === this.plotInfo.axisPlacement && (c = h, h = e, e = c);
            c = this.dragStartPoint.x - a;
            b = this.dragStartPoint.y - g;
            if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
              this.toolTip.hide();
              this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
              for (var x = 0; x < this.axisX.length; x++)
                this.axisX[x].crosshair && this.axisX[x].crosshair.enabled && (this.axisX[x].crosshair.hide(), this.axisX[x].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[x].options }, this.axisX[x].crosshair));
              for (x = 0; x < this.axisX2.length; x++)
                this.axisX2[x].crosshair && this.axisX2[x].crosshair.enabled && (this.axisX2[x].crosshair.hide(), this.axisX2[x].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[x].options }, this.axisX2[x].crosshair));
              for (x = 0; x < this.axisY.length; x++)
                this.axisY[x].crosshair && this.axisY[x].crosshair.enabled && (this.axisY[x].crosshair.hide(), this.axisY[x].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[x].options }, this.axisY[x].crosshair));
              for (x = 0; x < this.axisY2.length; x++)
                this.axisY2[x].crosshair && this.axisY2[x].crosshair.enabled && (this.axisY2[x].crosshair.hide(), this.axisY2[x].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[x].options }, this.axisY2[x].crosshair));
            } else
              this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, g);
            if ((!e || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) {
              if (this.panEnabled)
                e = { x1: e ? this.plotArea.x1 + c : this.plotArea.x1, y1: h ? this.plotArea.y1 + b : this.plotArea.y1, x2: e ? this.plotArea.x2 + c : this.plotArea.x2, y2: h ? this.plotArea.y2 + b : this.plotArea.y2 }, clearTimeout(r._panTimerId), r._panTimerId = setTimeout(/* @__PURE__ */ function(b2, c2, e2, f) {
                  return function() {
                    r._zoomPanToSelectedRegion(b2, c2, e2, f, true) && (r._dispatchRangeEvent("rangeChanging", "pan"), r.stockChart && (r.stockChart.navigator && r.stockChart.navigator.enabled) && (r.stockChart._rangeEventParameter.type = "rangeChanging", r.stockChart.dispatchEvent("rangeChanging", r.stockChart._rangeEventParameter, r.stockChart)), r.render(), r._dispatchRangeEvent("rangeChanged", "pan"), r.stockChart && (r.stockChart.navigator && r.stockChart.navigator.enabled) && (r.stockChart._rangeEventParameter.type = "rangeChanged", r.stockChart.dispatchEvent("rangeChanged", r.stockChart._rangeEventParameter, r.stockChart)), r.dragStartPoint.x = a, r.dragStartPoint.y = g);
                  };
                }(e.x1, e.y1, e.x2, e.y2), 0);
              else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                c = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var b = e ? this.dragStartPoint.x : this.plotArea.x1, x = h ? this.dragStartPoint.y : this.plotArea.y1, d2 = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = h ? g - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(b, x, e ? a : this.plotArea.x2 - this.plotArea.x1, h ? g : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(b, x, d2, k);
                this.overlaidCanvasCtx.globalAlpha = c;
              }
            }
          } else if (this.toolTip.mouseMoveHandler(a, g), "none" !== this.plotInfo.axisPlacement) {
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, g);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, g);
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, g);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, g);
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].crosshair.renderLabel();
          }
        };
        l.prototype._zoomPanToSelectedRegion = function(a, g, c, b, e) {
          a = this.validateRegion(a, g, c, b, e);
          g = a.axesWithValidRange;
          c = a.axesRanges;
          if (a.isValid)
            for (b = 0; b < g.length; b++)
              e = c[b], g[b].setViewPortRange(e.val1, e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: e.val1, maximum: e.val2 });
          return a.isValid;
        };
        l.prototype.validateRegion = function(a, g, c, b, e) {
          e = e || false;
          for (var h = 0 <= this.zoomType.indexOf("x"), r = 0 <= this.zoomType.indexOf("y"), x = false, d2 = [], k = [], m = [], p = 0; p < this._axes.length; p++)
            ("axisX" === this._axes[p].type && h || "axisY" === this._axes[p].type && r) && k.push(this._axes[p]);
          for (r = 0; r < k.length; r++) {
            var p = k[r], h = false, q = p.convertPixelToValue({ x: a, y: g }), f = p.convertPixelToValue({
              x: c,
              y: b
            });
            if (q > f)
              var n2 = f, f = q, q = n2;
            if (p.scaleBreaks)
              for (n2 = 0; !h && n2 < p.scaleBreaks._appliedBreaks.length; n2++)
                h = p.scaleBreaks._appliedBreaks[n2].startValue <= q && p.scaleBreaks._appliedBreaks[n2].endValue >= f;
            if (isFinite(p.dataInfo.minDiff)) {
              if (n2 = p.getApparentDifference(q, f, null, true), !(h || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) && (p.logarithmic && n2 < Math.pow(p.dataInfo.minDiff, 3) || !p.logarithmic && n2 < 3 * Math.abs(p.dataInfo.minDiff)) || q < p.minimum || f > p.maximum))
                d2.push(p), m.push({ val1: q, val2: f }), x = true;
              else if (!e) {
                x = false;
                break;
              }
            }
          }
          return { isValid: x, axesWithValidRange: d2, axesRanges: m };
        };
        l.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !v && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var g = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
              var c = this.axisY[0];
              a.x1 = g.x1 < g.x2 ? g.x1 : c.lineCoordinates.x1;
              a.y1 = g.y1 < c.lineCoordinates.y1 ? g.y1 : c.lineCoordinates.y1;
              a.x2 = g.x2 > c.lineCoordinates.x2 ? g.x2 : c.lineCoordinates.x2;
              a.y2 = g.y1 > c.lineCoordinates.y2 ? g.y1 : c.lineCoordinates.y2;
              a.width = a.x2 - a.x1;
              a.height = a.y2 - a.y1;
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = g.x1 < g.x2 ? g.x1 : c.lineCoordinates.x1, a.y1 = g.y1 < c.lineCoordinates.y1 ? g.y1 : c.lineCoordinates.y1, a.x2 = g.x2 > c.lineCoordinates.x2 ? g.x2 : c.lineCoordinates.x2, a.y2 = g.y2 > c.lineCoordinates.y2 ? g.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
          } else
            g = this.layoutManager.getFreeSpace(), a.x1 = g.x1, a.x2 = g.x2, a.y1 = g.y1, a.y2 = g.y2, a.width = g.width, a.height = g.height;
          v || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager = new Fa(a.x1, a.y1, a.x2, a.y2, 2);
        };
        l.prototype.renderIndexLabels = function(a) {
          var g = a || this.plotArea.ctx, c = this.plotArea, b = 0, e = 0, h = 0, r = e = h = 0, x = 0, d2 = b = 0, k = 0;
          for (a = 0; a < this._indexLabels.length; a++) {
            var m = this._indexLabels[a], p = m.chartType.toLowerCase(), q, f, x = na(
              "indexLabelFontColor",
              m.dataPoint,
              m.dataSeries
            ), Sa = na("indexLabelFontSize", m.dataPoint, m.dataSeries), d2 = na("indexLabelFontFamily", m.dataPoint, m.dataSeries), k = na("indexLabelFontStyle", m.dataPoint, m.dataSeries);
            q = na("indexLabelFontWeight", m.dataPoint, m.dataSeries);
            var w = na("indexLabelBackgroundColor", m.dataPoint, m.dataSeries);
            f = na("indexLabelMaxWidth", m.dataPoint, m.dataSeries);
            var h = na("indexLabelWrap", m.dataPoint, m.dataSeries), y = na("indexLabelLineDashType", m.dataPoint, m.dataSeries), s = na(
              "indexLabelLineColor",
              m.dataPoint,
              m.dataSeries
            ), z = n(m.dataPoint.indexLabelLineThickness) ? n(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness : m.dataPoint.indexLabelLineThickness, b = 0 < z ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, u = { percent: null, total: null }, l2 = null;
            if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type)
              u = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
            if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter)
              l2 = { chart: this, dataSeries: m.dataSeries, dataPoint: m.dataPoint, index: m.indexKeyword, total: u.total, percent: u.percent };
            var B = m.dataPoint.indexLabelFormatter ? m.dataPoint.indexLabelFormatter(l2) : m.dataPoint.indexLabel ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : m.dataSeries.indexLabelFormatter ? m.dataSeries.indexLabelFormatter(l2) : m.dataSeries.indexLabel ? this.replaceKeywordsWithValue(
              m.dataSeries.indexLabel,
              m.dataPoint,
              m.dataSeries,
              null,
              m.indexKeyword
            ) : null;
            if (null !== B && "" !== B) {
              var u = na("indexLabelPlacement", m.dataPoint, m.dataSeries), l2 = na("indexLabelOrientation", m.dataPoint, m.dataSeries), C = na("indexLabelTextAlign", m.dataPoint, m.dataSeries), t3 = m.direction, e = m.dataSeries.axisX, r = m.dataSeries.axisY, A3 = false, w = new ka(g, { x: 0, y: 0, maxWidth: f ? f : 0.5 * this.width, maxHeight: h ? 5 * Sa : 1.5 * Sa, angle: "horizontal" === l2 ? 0 : -90, text: B, padding: 0, backgroundColor: w, textAlign: C, fontSize: Sa, fontFamily: d2, fontWeight: q, fontColor: x, fontStyle: k, textBaseline: "middle" });
              w.measureText();
              m.dataSeries.indexLabelMaxWidth = w.maxWidth;
              if ("stackedarea100" === p) {
                if (m.point.x < c.x1 || m.point.x > c.x2 || m.point.y < c.y1 - 1 || m.point.y > c.y2 + 1)
                  continue;
              } else if ("rangearea" === p || "rangesplinearea" === p) {
                if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < r.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > r.viewportMaximum)
                  continue;
              } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.dataPoint.y < r.viewportMinimum || m.dataPoint.y > r.viewportMaximum)
                  continue;
              } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !m.axisSwapped) {
                if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.bounds.y1 > c.y2 || m.bounds.y2 < c.y1)
                  continue;
              } else if (0 <= p.indexOf("bar") || "error" === p) {
                if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.bounds.x1 > c.x2 || m.bounds.x2 < c.x1)
                  continue;
              } else if ("candlestick" === p || "ohlc" === p) {
                if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < r.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > r.viewportMaximum)
                  continue;
              } else if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum)
                continue;
              r = x = 2;
              "horizontal" === l2 ? (d2 = w.width, k = w.height) : (k = w.width, d2 = w.height);
              if ("normal" === this.plotInfo.axisPlacement) {
                if (0 <= p.indexOf("line") || 0 <= p.indexOf("area"))
                  u = "auto", x = 4;
                else if (0 <= p.indexOf("stacked"))
                  "auto" === u && (u = "inside");
                else if ("bubble" === p || "scatter" === p)
                  u = "inside";
                q = m.point.x - d2 / 2 + ("horizontal" === l2 ? 0 : w._lineHeight / 2);
                if ("inside" !== u)
                  e = c.y1, h = c.y2, 0 < t3 ? (f = m.point.y + w._lineHeight / 2 - k - x - b, f < e && (f = "auto" === u ? Math.max(m.point.y, e) + w._lineHeight / 2 + x + b : e + w._lineHeight / 2 + x + b, A3 = f + ("horizontal" === l2 ? k - w._lineHeight / 2 : 0) > m.point.y, !A3 || (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) || (f -= b))) : (f = m.point.y + w._lineHeight / 2 + x + b, f > h - k + w._lineHeight / 2 - x && (f = "auto" === u ? Math.min(m.point.y, h) + w._lineHeight / 2 - k - x - b : h + w._lineHeight / 2 - k - x - b, A3 = f - ("horizontal" === l2 ? w._lineHeight / 2 : k) < m.point.y, !A3 || (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) || (f += b)));
                else {
                  Math.max(m.bounds.y1, c.y1);
                  h = Math.min(m.bounds.y2, c.y2) - k + w._lineHeight / 2;
                  b = 0 <= p.indexOf("range") || "error" === p ? 0 < t3 ? Math.max(m.bounds.y1, c.y1) + w._lineHeight / 2 + x : Math.min(m.bounds.y2, c.y2) + w._lineHeight / 2 - k - x : (Math.max(m.bounds.y1, c.y1) + Math.min(m.bounds.y2, c.y2)) / 2 - k / 2 + w._lineHeight / 2;
                  if (0 < t3) {
                    if (f = b, "bubble" === p || "scatter" === p)
                      f = m.point.y - k / 2 + w._lineHeight / 2, k > m.bounds.y2 - m.bounds.y1 && (f -= k / 2 + x), 0 > f - w._lineHeight / 2 && (f += Math.abs(f - w._lineHeight / 2) <= (m.bounds.y2 - m.bounds.y1) / 2 + x ? Math.abs(f - w._lineHeight / 2) : (m.bounds.y2 - m.bounds.y1) / 2 + x);
                  } else
                    f = Math.min(m.point.y, b), f > h - k - x && ("bubble" === p || "scatter" === p) && (f = Math.min(m.point.y + x, c.y2 - k - x));
                  f = Math.min(f, h);
                }
              } else
                0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (u = "auto", r = 4) : 0 <= p.indexOf("stacked") ? "auto" === u && (u = "inside") : "bubble" === p && (u = "inside"), f = m.point.y + w._lineHeight / 2 - k / 2, "inside" !== u ? (h = c.x1, e = c.x2, 0 > t3 ? (q = m.point.x - d2 + ("horizontal" === l2 ? 0 : w._lineHeight / 2) - r - b, ("horizontal" === l2 ? q : q - w._lineHeight / 2) < h && (q = "auto" === u ? Math.max(m.point.x, h) + ("horizontal" === l2 ? 0 : w._lineHeight / 2) + x + b : h + ("horizontal" === l2 ? 0 : w._lineHeight / 2) + r, (A3 = q + d2 - ("horizontal" === l2 ? 0 : w._lineHeight / 2) > m.point.x) && (q -= b))) : (q = m.point.x + ("horizontal" === l2 ? 0 : w._lineHeight / 2) + r + b, ("horizontal" === l2 ? q : q - w._lineHeight / 2) > e - d2 - r - b && (q = "auto" === u ? Math.min(m.point.x, e) - ("horizontal" === l2 ? d2 : d2 - w._lineHeight / 2) - r - b : e - d2 - r + ("horizontal" === l2 ? 0 : w._lineHeight / 2), (A3 = q - ("horizontal" === l2 ? 0 : w._lineHeight / 2) < m.point.x) && (q += b)))) : (h = Math.max(m.bounds.x1, c.x1), Math.min(m.bounds.x2, c.x2), b = 0 <= p.indexOf("range") || "error" === p ? 0 > t3 ? Math.max(m.bounds.x1, c.x1) : Math.min(m.bounds.x2, c.x2) - d2 - r + ("horizontal" === l2 ? 0 : w._lineHeight / 2) : (Math.max(m.bounds.x1, c.x1) + Math.min(m.bounds.x2, c.x2)) / 2 - d2 / 2 + ("horizontal" === l2 ? 0 : w._lineHeight / 2), q = 0 > t3 ? b : Math.min(m.point.x, b), q = Math.max(q, h + ("horizontal" === l2 ? 0 : w._lineHeight / 2 + x)));
              "vertical" === l2 && (f += k - w._lineHeight / 2, 0 <= "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(p) && (A3 = 0 < t3 ? f + ("horizontal" === l2 ? k - w._lineHeight / 2 : 0) > m.point.y : f - ("horizontal" === l2 ? w._lineHeight / 2 : k) < m.point.y), "bubble" === p || "scatter" === p) && (q += w._lineHeight / 2 - Sa / 2);
              w.x = q;
              w.y = f;
              w.render(true);
              z && ("inside" !== u && (0 > p.indexOf("bar") && ("error" !== p || !m.axisSwapped) && m.point.x > c.x1 && m.point.x < c.x2 || !A3) && (-1 === "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(p) && ("error" !== p || m.axisSwapped) && m.point.y > c.y1 && m.point.y < c.y2 || !A3)) && (g.lineWidth = z, g.strokeStyle = s ? s : "gray", g.setLineDash && g.setLineDash(H(y, z)), g.beginPath(), g.moveTo(m.point.x, m.point.y), 0 <= p.indexOf("bar") || "error" === p && m.axisSwapped ? g.lineTo(q + (0 < m.direction ? 0 : d2) + ("vertical" === l2 ? -w._lineHeight / 2 : 0), f + ("vertical" === l2 ? -k / 2 : k / 2 - w._lineHeight / 2)) : 0 <= p.indexOf("column") || "error" === p && !m.axisSwapped ? g.lineTo(q + d2 / 2 - ("horizontal" === l2 ? 0 : w._lineHeight / 2), f + ("vertical" === l2 ? f - k < m.point.y ? 0 : -k : (f - w._lineHeight / 2 < m.point.y ? k : 0) - w._lineHeight / 2)) : 0 <= p.indexOf("waterfall") ? g.lineTo(q + d2 / 2 - ("horizontal" === l2 ? 0 : w._lineHeight / 2), "vertical" === l2 ? 0 < t3 && f < m.point.y ? f : 0 > t3 && f - k > m.point.y ? f - k : m.point.y : 0 < t3 && f + k - w._lineHeight / 2 < m.point.y ? f + k - w._lineHeight / 2 : 0 > t3 && f - w._lineHeight / 2 > m.point.y ? f - w._lineHeight / 2 : m.point.y) : g.lineTo(q + d2 / 2 - ("horizontal" === l2 ? 0 : w._lineHeight / 2), f + ("vertical" === l2 ? f - k < m.point.y ? 0 : -k : (f + k - w._lineHeight / 2 < m.point.y ? k : 0) - w._lineHeight / 2)), g.stroke());
            }
          }
          g = { source: g, dest: this.plotArea.ctx, animationCallback: N.fadeInAnimation, easingFunction: N.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
          for (a = 0; a < this._indexLabels.length; a++)
            m = this._indexLabels[a], w = na("indexLabelBackgroundColor", m.dataPoint, m.dataSeries), m.dataSeries.indexLabelBackgroundColor = n(w) ? v ? "transparent" : null : w;
          return g;
        };
        l.prototype.renderLine = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var h = [], r, x = 0; x < a.dataSeriesIndexes.length; x++) {
              var d2 = a.dataSeriesIndexes[x], k = this.data[d2];
              c.lineWidth = k.lineThickness;
              var m = k.dataPoints, p = "solid";
              if (c.setLineDash) {
                var q = H(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, f = H(p, k.lineThickness);
                c.setLineDash(f);
              }
              var n2 = k.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: d2 };
              n2 = O(n2);
              b.strokeStyle = n2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var n2 = k._colorSet, w = n2 = k.lineColor = k.options.lineColor ? k.options.lineColor : n2[0];
              c.strokeStyle = n2;
              var y = true, s = 0, l2, u;
              c.beginPath();
              if (0 < m.length) {
                for (var E = false, s = 0; s < m.length; s++)
                  if (l2 = m[s].x.getTime ? m[s].x.getTime() : m[s].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !E)))
                    if ("number" !== typeof m[s].y)
                      0 < s && !(k.connectNullData || E || y) && (c.stroke(), v && b.stroke()), E = true;
                    else {
                      l2 = a.axisX.convertValueToPixel(l2);
                      u = a.axisY.convertValueToPixel(m[s].y);
                      var B = k.dataPointIds[s];
                      this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: d2, dataPointIndex: s, x1: l2, y1: u };
                      y || E ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(r.x, r.y), p = k.nullDataLineDashType, c.setLineDash(q)), c.lineTo(l2, u), v && b.lineTo(l2, u)) : (c.beginPath(), c.moveTo(l2, u), v && (b.beginPath(), b.moveTo(l2, u))), E = y = false) : (c.lineTo(l2, u), v && b.lineTo(l2, u), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(l2, u), v && (b.stroke(), b.beginPath(), b.moveTo(l2, u))));
                      r = { x: l2, y: u };
                      s < m.length - 1 && (w !== (m[s].lineColor || n2) || p !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(l2, u), w = m[s].lineColor || n2, c.strokeStyle = w, c.setLineDash && (m[s].lineDashType ? (p = m[s].lineDashType, c.setLineDash(H(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(f))));
                      if (0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize)) {
                        var C = k.getMarkerProperties(s, l2, u, c);
                        h.push(C);
                        B = O(B);
                        v && h.push({ x: l2, y: u, ctx: b, type: C.type, size: C.size, color: B, borderColor: B, borderThickness: C.borderThickness });
                      }
                      (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: m[s], dataSeries: k, point: { x: l2, y: u }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: n2 });
                    }
                c.stroke();
                v && b.stroke();
              }
            }
            Y.drawMarkers(h);
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderStepLine = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var h = [], r, x = 0; x < a.dataSeriesIndexes.length; x++) {
              var d2 = a.dataSeriesIndexes[x], k = this.data[d2];
              c.lineWidth = k.lineThickness;
              var m = k.dataPoints, p = "solid";
              if (c.setLineDash) {
                var q = H(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, f = H(p, k.lineThickness);
                c.setLineDash(f);
              }
              var n2 = k.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: d2 };
              n2 = O(n2);
              b.strokeStyle = n2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var n2 = k._colorSet, w = n2 = k.lineColor = k.options.lineColor ? k.options.lineColor : n2[0];
              c.strokeStyle = n2;
              var l2 = true, s = 0, z, u;
              c.beginPath();
              if (0 < m.length) {
                for (var E = false, s = 0; s < m.length; s++)
                  if (z = m[s].getTime ? m[s].x.getTime() : m[s].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !E)))
                    if ("number" !== typeof m[s].y)
                      0 < s && !(k.connectNullData || E || l2) && (c.stroke(), v && b.stroke()), E = true;
                    else {
                      var B = u;
                      z = a.axisX.convertValueToPixel(z);
                      u = a.axisY.convertValueToPixel(m[s].y);
                      var C = k.dataPointIds[s];
                      this._eventManager.objectMap[C] = {
                        id: C,
                        objectType: "dataPoint",
                        dataSeriesIndex: d2,
                        dataPointIndex: s,
                        x1: z,
                        y1: u
                      };
                      l2 || E ? (!l2 && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(r.x, r.y), p = k.nullDataLineDashType, c.setLineDash(q)), c.lineTo(z, B), c.lineTo(z, u), v && (b.lineTo(z, B), b.lineTo(z, u))) : (c.beginPath(), c.moveTo(z, u), v && (b.beginPath(), b.moveTo(z, u))), E = l2 = false) : (c.lineTo(z, B), v && b.lineTo(z, B), c.lineTo(z, u), v && b.lineTo(z, u), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(z, u), v && (b.stroke(), b.beginPath(), b.moveTo(z, u))));
                      r = { x: z, y: u };
                      s < m.length - 1 && (w !== (m[s].lineColor || n2) || p !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(z, u), w = m[s].lineColor || n2, c.strokeStyle = w, c.setLineDash && (m[s].lineDashType ? (p = m[s].lineDashType, c.setLineDash(H(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(f))));
                      0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize) && (B = k.getMarkerProperties(s, z, u, c), h.push(B), C = O(C), v && h.push({
                        x: z,
                        y: u,
                        ctx: b,
                        type: B.type,
                        size: B.size,
                        color: C,
                        borderColor: C,
                        borderThickness: B.borderThickness
                      }));
                      (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: m[s], dataSeries: k, point: { x: z, y: u }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: n2 });
                    }
                c.stroke();
                v && b.stroke();
              }
            }
            Y.drawMarkers(h);
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderSpline = function(a) {
          function g(a2) {
            a2 = t2(a2, 2);
            if (0 < a2.length) {
              b.beginPath();
              v && e.beginPath();
              b.moveTo(
                a2[0].x,
                a2[0].y
              );
              a2[0].newStrokeStyle && (b.strokeStyle = a2[0].newStrokeStyle);
              a2[0].newLineDashArray && b.setLineDash(a2[0].newLineDashArray);
              v && e.moveTo(a2[0].x, a2[0].y);
              for (var c2 = 0; c2 < a2.length - 3; c2 += 3)
                if (b.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), v && e.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), 0 < c2 && 0 === c2 % 3e3 || a2[c2 + 3].newStrokeStyle || a2[c2 + 3].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(a2[c2 + 3].x, a2[c2 + 3].y), a2[c2 + 3].newStrokeStyle && (b.strokeStyle = a2[c2 + 3].newStrokeStyle), a2[c2 + 3].newLineDashArray && b.setLineDash(a2[c2 + 3].newLineDashArray), v && (e.stroke(), e.beginPath(), e.moveTo(a2[c2 + 3].x, a2[c2 + 3].y));
              b.stroke();
              v && e.stroke();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx;
            b.save();
            var h = this.plotArea;
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            for (var r = [], x = 0; x < a.dataSeriesIndexes.length; x++) {
              var d2 = a.dataSeriesIndexes[x], k = this.data[d2];
              b.lineWidth = k.lineThickness;
              var m = k.dataPoints, p = "solid";
              if (b.setLineDash) {
                var q = H(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, f = H(p, k.lineThickness);
                b.setLineDash(f);
              }
              var n2 = k.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: d2 };
              n2 = O(n2);
              e.strokeStyle = n2;
              e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var n2 = k._colorSet, w = n2 = k.lineColor = k.options.lineColor ? k.options.lineColor : n2[0];
              b.strokeStyle = n2;
              var l2 = 0, s, z, u = [];
              b.beginPath();
              if (0 < m.length) {
                for (z = false, l2 = 0; l2 < m.length; l2++)
                  if (s = m[l2].getTime ? m[l2].x.getTime() : m[l2].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !z)))
                    if ("number" !== typeof m[l2].y)
                      0 < l2 && !z && (k.connectNullData ? b.setLineDash && (0 < u.length && (k.options.nullDataLineDashType || !m[l2 - 1].lineDashType)) && (u[u.length - 1].newLineDashArray = q, p = k.nullDataLineDashType) : (g(u), u = [])), z = true;
                    else {
                      s = a.axisX.convertValueToPixel(s);
                      z = a.axisY.convertValueToPixel(m[l2].y);
                      var E = k.dataPointIds[l2];
                      this._eventManager.objectMap[E] = {
                        id: E,
                        objectType: "dataPoint",
                        dataSeriesIndex: d2,
                        dataPointIndex: l2,
                        x1: s,
                        y1: z
                      };
                      u[u.length] = { x: s, y: z };
                      l2 < m.length - 1 && (w !== (m[l2].lineColor || n2) || p !== (m[l2].lineDashType || k.lineDashType)) && (w = m[l2].lineColor || n2, u[u.length - 1].newStrokeStyle = w, b.setLineDash && (m[l2].lineDashType ? (p = m[l2].lineDashType, u[u.length - 1].newLineDashArray = H(p, k.lineThickness)) : (p = k.lineDashType, u[u.length - 1].newLineDashArray = f)));
                      if (0 !== m[l2].markerSize && (0 < m[l2].markerSize || 0 < k.markerSize)) {
                        var B = k.getMarkerProperties(l2, s, z, b);
                        r.push(B);
                        E = O(E);
                        v && r.push({
                          x: s,
                          y: z,
                          ctx: e,
                          type: B.type,
                          size: B.size,
                          color: E,
                          borderColor: E,
                          borderThickness: B.borderThickness
                        });
                      }
                      (m[l2].indexLabel || k.indexLabel || m[l2].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: m[l2], dataSeries: k, point: { x: s, y: z }, direction: 0 > m[l2].y === a.axisY.reversed ? 1 : -1, color: n2 });
                      z = false;
                    }
              }
              g(u);
            }
            Y.drawMarkers(r);
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), e.beginPath());
            b.restore();
            b.beginPath();
            return { source: c, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, r, x, d2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < h) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            p < h && (p = h);
            p > m && (p = m);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
              var q = a.dataSeriesIndexes[m], f = this.data[q], n2 = f.dataPoints;
              if (0 < n2.length) {
                for (var l2 = 5 < p && f.bevelEnabled ? true : false, h = 0; h < n2.length; h++)
                  if (n2[h].getTime ? d2 = n2[h].x.getTime() : d2 = n2[h].x, !(d2 < a.axisX.dataInfo.viewPortMin || d2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof n2[h].y) {
                    r = a.axisX.convertValueToPixel(d2);
                    x = a.axisY.convertValueToPixel(n2[h].y);
                    r = a.axisX.reversed ? r + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + m) * p << 0 : r - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + m) * p << 0;
                    var y = a.axisX.reversed ? r - p << 0 : r + p << 0, s;
                    0 <= n2[h].y ? s = k : (s = x, x = k);
                    x > s && (b = x, x = s, s = b);
                    b = n2[h].color ? n2[h].color : f._colorSet[h % f._colorSet.length];
                    ba(c, a.axisX.reversed ? y : r, x, a.axisX.reversed ? r : y, s, b, 0, null, l2 && (a.axisY.reversed ? 0 > n2[h].y : 0 <= n2[h].y), (a.axisY.reversed ? 0 <= n2[h].y : 0 > n2[h].y) && l2, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: r, y1: x, x2: y, y2: s };
                    b = O(b);
                    v && ba(this._eventManager.ghostCtx, a.axisX.reversed ? y : r, x, a.axisX.reversed ? r : y, s, b, 0, null, false, false, false, false);
                    (n2[h].indexLabel || f.indexLabel || n2[h].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "column", dataPoint: n2[h], dataSeries: f, point: { x: r + (y - r) / 2, y: 0 > n2[h].y === a.axisY.reversed ? x : s }, direction: 0 > n2[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: r, y1: Math.min(x, s), x2: y, y2: Math.max(x, s) }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: N.yScaleAnimation,
              easingFunction: N.easing.easeOutQuart,
              animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k
            };
          }
        };
        l.prototype.renderStackedColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], r = [], x = [], d2 = [], k = 0, m, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, n2 = a.axisX.dataInfo.minDiff;
            isFinite(n2) || (n2 = 0.3 * Math.abs(a.axisX.range));
            n2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(n2) / Math.log(a.axisX.range) : Math.abs(n2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            n2 < k && (n2 = k);
            n2 > f && (n2 = f);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var l2 = a.dataSeriesIndexes[f], y = this.data[l2], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < n2 && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    m = a.axisX.convertValueToPixel(b);
                    m = m - a.plotType.plotUnits.length * n2 / 2 + a.index * n2 << 0;
                    var u = m + n2 << 0, E;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      x[b] = s[k].y + (x[b] ? x[b] : 0), 0 < x[b] && (p = a.axisY.convertValueToPixel(x[b]), E = "undefined" !== typeof h[b] ? h[b] : q, h[b] = p);
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      d2[b] = s[k].y + (d2[b] ? d2[b] : 0), E = a.axisY.convertValueToPixel(d2[b]), p = "undefined" !== typeof r[b] ? r[b] : q, r[b] = E;
                    else if (p = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var B = "undefined" !== typeof h[b] ? h[b] : 0;
                      p -= B;
                      E = q - B;
                      h[b] = B + (E - p);
                    } else
                      B = r[b] ? r[b] : 0, E = p + B, p = q + B, r[b] = B + (E - p);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    ba(c, m, a.axisY.reversed ? E : p, u, a.axisY.reversed ? p : E, b, 0, null, z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: k, x1: m, y1: p, x2: u, y2: E };
                    b = O(b);
                    v && ba(this._eventManager.ghostCtx, m, p, u, E, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: s[k], dataSeries: y, point: { x: m + (u - m) / 2, y: 0 <= s[k].y ? p : E }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: m, y1: Math.min(p, E), x2: u, y2: Math.max(p, E) }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.yScaleAnimation, easingFunction: N.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q };
          }
        };
        l.prototype.renderStackedColumn100 = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], r = [], x = [], d2 = [], k = 0, m, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, n2 = a.axisX.dataInfo.minDiff;
            isFinite(n2) || (n2 = 0.3 * Math.abs(a.axisX.range));
            n2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(n2) / Math.log(a.axisX.range) : Math.abs(n2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            n2 < k && (n2 = k);
            n2 > f && (n2 = f);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var l2 = a.dataSeriesIndexes[f], y = this.data[l2], s = y.dataPoints;
              if (0 < s.length) {
                for (var z = 5 < n2 && y.bevelEnabled ? true : false, k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    m = a.axisX.convertValueToPixel(b);
                    p = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    m = m - a.plotType.plotUnits.length * n2 / 2 + a.index * n2 << 0;
                    var u = m + n2 << 0, E;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      x[b] = p + ("undefined" !== typeof x[b] ? x[b] : 0);
                      if (0 >= x[b])
                        continue;
                      p = a.axisY.convertValueToPixel(x[b]);
                      E = h[b] ? h[b] : q;
                      h[b] = p;
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      d2[b] = p + ("undefined" !== typeof d2[b] ? d2[b] : 0), E = a.axisY.convertValueToPixel(d2[b]), p = r[b] ? r[b] : q, r[b] = E;
                    else if (p = a.axisY.convertValueToPixel(p), 0 <= s[k].y) {
                      var B = "undefined" !== typeof h[b] ? h[b] : 0;
                      p -= B;
                      E = q - B;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y1 - p) && (p = e.y1);
                      h[b] = B + (E - p);
                    } else
                      B = "undefined" !== typeof r[b] ? r[b] : 0, E = p + B, p = q + B, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y2 - E) && (E = e.y2), r[b] = B + (E - p);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    ba(c, m, a.axisY.reversed ? E : p, u, a.axisY.reversed ? p : E, b, 0, null, z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: k, x1: m, y1: p, x2: u, y2: E };
                    b = O(b);
                    v && ba(
                      this._eventManager.ghostCtx,
                      m,
                      p,
                      u,
                      E,
                      b,
                      0,
                      null,
                      false,
                      false,
                      false,
                      false
                    );
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn100", dataPoint: s[k], dataSeries: y, point: { x: m + (u - m) / 2, y: 0 <= s[k].y ? p : E }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: m, y1: Math.min(p, E), x2: u, y2: Math.max(p, E) }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.yScaleAnimation, easingFunction: N.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q };
          }
        };
        l.prototype.renderBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, r, d2, n2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < h) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            p < h && (p = h);
            p > m && (p = m);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
              var q = a.dataSeriesIndexes[m], f = this.data[q], l2 = f.dataPoints;
              if (0 < l2.length) {
                var w = 5 < p && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < l2.length; h++)
                  if (l2[h].getTime ? n2 = l2[h].x.getTime() : n2 = l2[h].x, !(n2 < a.axisX.dataInfo.viewPortMin || n2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof l2[h].y) {
                    d2 = a.axisX.convertValueToPixel(n2);
                    r = a.axisY.convertValueToPixel(l2[h].y);
                    d2 = a.axisX.reversed ? d2 + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + m) * p << 0 : d2 - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + m) * p << 0;
                    var y = a.axisX.reversed ? d2 - p << 0 : d2 + p << 0, s;
                    0 <= l2[h].y ? s = k : (s = r, r = k);
                    b = l2[h].color ? l2[h].color : f._colorSet[h % f._colorSet.length];
                    ba(c, a.axisY.reversed ? r : s, a.axisX.reversed ? y : d2, a.axisY.reversed ? s : r, a.axisX.reversed ? d2 : y, b, 0, null, w, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: s, y1: d2, x2: r, y2: y };
                    b = O(b);
                    v && ba(this._eventManager.ghostCtx, s, a.axisX.reversed ? y : d2, r, a.axisX.reversed ? d2 : y, b, 0, null, false, false, false, false);
                    (l2[h].indexLabel || f.indexLabel || l2[h].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: l2[h], dataSeries: f, point: { x: 0 <= l2[h].y ? r : s, y: d2 + (y - d2) / 2 }, direction: 0 > l2[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(s, r), y1: d2, x2: Math.max(s, r), y2: y }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.xScaleAnimation, easingFunction: N.easing.easeOutQuart, animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k };
          }
        };
        l.prototype.renderStackedBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], r = [], d2 = [], n2 = [], k = 0, m, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, l2 = a.axisX.dataInfo.minDiff;
            isFinite(l2) || (l2 = 0.3 * Math.abs(a.axisX.range));
            l2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(l2) / Math.log(a.axisX.range) : Math.abs(l2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            l2 < k && (l2 = k);
            l2 > f && (l2 = f);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < l2 && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    p = a.axisX.convertValueToPixel(b);
                    p = p - a.plotType.plotUnits.length * l2 / 2 + a.index * l2 << 0;
                    var u = p + l2 << 0, E;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      d2[b] = s[k].y + (d2[b] ? d2[b] : 0), 0 < d2[b] && (E = h[b] ? h[b] : q, h[b] = m = a.axisY.convertValueToPixel(d2[b]));
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      n2[b] = s[k].y + (n2[b] ? n2[b] : 0), m = r[b] ? r[b] : q, r[b] = E = a.axisY.convertValueToPixel(n2[b]);
                    else if (m = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var B = h[b] ? h[b] : 0;
                      E = q + B;
                      m += B;
                      h[b] = B + (m - E);
                    } else
                      B = r[b] ? r[b] : 0, E = m - B, m = q - B, r[b] = B + (m - E);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    ba(c, a.axisY.reversed ? m : E, p, a.axisY.reversed ? E : m, u, b, 0, null, z, false, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: E, y1: p, x2: m, y2: u };
                    b = O(b);
                    v && ba(this._eventManager.ghostCtx, E, p, m, u, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar", dataPoint: s[k], dataSeries: y, point: { x: 0 <= s[k].y ? m : E, y: p + (u - p) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(
                      E,
                      m
                    ), y1: p, x2: Math.max(E, m), y2: u }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.xScaleAnimation, easingFunction: N.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q };
          }
        };
        l.prototype.renderStackedBar100 = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], r = [], d2 = [], n2 = [], k = 0, m, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, l2 = a.axisX.dataInfo.minDiff;
            isFinite(l2) || (l2 = 0.3 * Math.abs(a.axisX.range));
            l2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(l2) / Math.log(a.axisX.range) : Math.abs(l2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            l2 < k && (l2 = k);
            l2 > f && (l2 = f);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < l2 && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    p = a.axisX.convertValueToPixel(b);
                    var u;
                    u = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    p = p - a.plotType.plotUnits.length * l2 / 2 + a.index * l2 << 0;
                    var E = p + l2 << 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      d2[b] = u + (d2[b] ? d2[b] : 0);
                      if (0 >= d2[b])
                        continue;
                      u = h[b] ? h[b] : q;
                      h[b] = m = a.axisY.convertValueToPixel(d2[b]);
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      n2[b] = u + (n2[b] ? n2[b] : 0), m = r[b] ? r[b] : q, r[b] = u = a.axisY.convertValueToPixel(n2[b]);
                    else if (m = a.axisY.convertValueToPixel(u), 0 <= s[k].y) {
                      var B = h[b] ? h[b] : 0;
                      u = q + B;
                      m += B;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x2 - m) && (m = e.x2);
                      h[b] = B + (m - u);
                    } else
                      B = r[b] ? r[b] : 0, u = m - B, m = q - B, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x1 - u) && (u = e.x1), r[b] = B + (m - u);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    ba(c, a.axisY.reversed ? m : u, p, a.axisY.reversed ? u : m, E, b, 0, null, z, false, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: u, y1: p, x2: m, y2: E };
                    b = O(b);
                    v && ba(this._eventManager.ghostCtx, u, p, m, E, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedBar100",
                      dataPoint: s[k],
                      dataSeries: y,
                      point: { x: 0 <= s[k].y ? m : u, y: p + (E - p) / 2 },
                      direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                      bounds: { x1: Math.min(u, m), y1: p, x2: Math.max(u, m), y2: E },
                      color: b
                    });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.xScaleAnimation, easingFunction: N.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q };
          }
        };
        l.prototype.renderArea = function(a) {
          var g, c;
          function b() {
            B && (0 < f.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? E = u : 0 > a.axisY.viewportMaximum ? E = d2.y1 : 0 < a.axisY.viewportMinimum && (E = u), h.lineTo(y, E), h.lineTo(B.x, E), h.closePath(), h.globalAlpha = f.fillOpacity, h.fill(), h.globalAlpha = 1, v && (r.lineTo(y, E), r.lineTo(B.x, E), r.closePath(), r.fill()), h.beginPath(), h.moveTo(y, s), r.beginPath(), r.moveTo(y, s), B = { x: y, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, h = v ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var r = this._eventManager.ghostCtx, d2 = a.axisY.lineCoordinates, n2 = [], k = this.plotArea, m;
            h.save();
            v && r.save();
            h.beginPath();
            h.rect(
              k.x1,
              k.y1,
              k.width,
              k.height
            );
            h.clip();
            v && (r.beginPath(), r.rect(k.x1, k.y1, k.width, k.height), r.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = a.dataSeriesIndexes[p], f = this.data[q], l2 = f.dataPoints, n2 = f.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: q };
              n2 = O(n2);
              r.fillStyle = n2;
              n2 = [];
              g = true;
              var w = 0, y, s, z, u = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), E, B = null;
              if (0 < l2.length) {
                var C = f._colorSet[w % f._colorSet.length], t3 = f.lineColor = f.options.lineColor || C, A3 = t3;
                h.fillStyle = C;
                h.strokeStyle = t3;
                h.lineWidth = f.lineThickness;
                c = "solid";
                if (h.setLineDash) {
                  var K = H(f.nullDataLineDashType, f.lineThickness);
                  c = f.lineDashType;
                  var U = H(c, f.lineThickness);
                  h.setLineDash(U);
                }
                for (var fa = true; w < l2.length; w++)
                  if (z = l2[w].x.getTime ? l2[w].x.getTime() : l2[w].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !fa)))
                    if ("number" !== typeof l2[w].y)
                      f.connectNullData || (fa || g) || b(), fa = true;
                    else {
                      y = a.axisX.convertValueToPixel(z);
                      s = a.axisY.convertValueToPixel(l2[w].y);
                      g || fa ? (!g && f.connectNullData ? (h.setLineDash && (f.options.nullDataLineDashType || c === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (g = y, c = s, y = m.x, s = m.y, b(), h.moveTo(m.x, m.y), y = g, s = c, B = m, c = f.nullDataLineDashType, h.setLineDash(K)), h.lineTo(y, s), v && r.lineTo(y, s)) : (h.beginPath(), h.moveTo(y, s), v && (r.beginPath(), r.moveTo(y, s)), B = { x: y, y: s }), fa = g = false) : (h.lineTo(y, s), v && r.lineTo(y, s), 0 == w % 250 && b());
                      m = { x: y, y: s };
                      w < l2.length - 1 && (A3 !== (l2[w].lineColor || t3) || c !== (l2[w].lineDashType || f.lineDashType)) && (b(), A3 = l2[w].lineColor || t3, h.strokeStyle = A3, h.setLineDash && (l2[w].lineDashType ? (c = l2[w].lineDashType, h.setLineDash(H(c, f.lineThickness))) : (c = f.lineDashType, h.setLineDash(U))));
                      var aa = f.dataPointIds[w];
                      this._eventManager.objectMap[aa] = { id: aa, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: w, x1: y, y1: s };
                      0 !== l2[w].markerSize && (0 < l2[w].markerSize || 0 < f.markerSize) && (z = f.getMarkerProperties(w, y, s, h), n2.push(z), aa = O(aa), v && n2.push({ x: y, y: s, ctx: r, type: z.type, size: z.size, color: aa, borderColor: aa, borderThickness: z.borderThickness }));
                      (l2[w].indexLabel || f.indexLabel || l2[w].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: l2[w], dataSeries: f, point: { x: y, y: s }, direction: 0 > l2[w].y === a.axisY.reversed ? 1 : -1, color: C });
                    }
                b();
                Y.drawMarkers(n2);
              }
            }
            v && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderSplineArea = function(a) {
          function g() {
            var c2 = t2(z, 2);
            if (0 < c2.length) {
              if (0 < m.lineThickness) {
                b.beginPath();
                b.moveTo(c2[0].x, c2[0].y);
                c2[0].newStrokeStyle && (b.strokeStyle = c2[0].newStrokeStyle);
                c2[0].newLineDashArray && b.setLineDash(c2[0].newLineDashArray);
                for (var f2 = 0; f2 < c2.length - 3; f2 += 3)
                  if (b.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), v && e.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), c2[f2 + 3].newStrokeStyle || c2[f2 + 3].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(c2[f2 + 3].x, c2[f2 + 3].y), c2[f2 + 3].newStrokeStyle && (b.strokeStyle = c2[f2 + 3].newStrokeStyle), c2[f2 + 3].newLineDashArray && b.setLineDash(c2[f2 + 3].newLineDashArray);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(
                c2[0].x,
                c2[0].y
              );
              v && (e.beginPath(), e.moveTo(c2[0].x, c2[0].y));
              for (f2 = 0; f2 < c2.length - 3; f2 += 3)
                b.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), v && e.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y);
              a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? y = w : 0 > a.axisY.viewportMaximum ? y = h.y1 : 0 < a.axisY.viewportMinimum && (y = w);
              s = { x: c2[0].x, y: c2[0].y };
              b.lineTo(c2[c2.length - 1].x, y);
              b.lineTo(s.x, y);
              b.closePath();
              b.globalAlpha = m.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              v && (e.lineTo(c2[c2.length - 1].x, y), e.lineTo(s.x, y), e.closePath(), e.fill());
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = a.axisY.lineCoordinates, r = [], d2 = this.plotArea;
            b.save();
            v && e.save();
            b.beginPath();
            b.rect(d2.x1, d2.y1, d2.width, d2.height);
            b.clip();
            v && (e.beginPath(), e.rect(d2.x1, d2.y1, d2.width, d2.height), e.clip());
            for (var n2 = 0; n2 < a.dataSeriesIndexes.length; n2++) {
              var k = a.dataSeriesIndexes[n2], m = this.data[k], p = m.dataPoints, r = m.id;
              this._eventManager.objectMap[r] = { objectType: "dataSeries", dataSeriesIndex: k };
              r = O(r);
              e.fillStyle = r;
              var r = [], q = 0, f, l2, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), y, s = null, z = [];
              if (0 < p.length) {
                var u = m._colorSet[q % m._colorSet.length], E = m.lineColor = m.options.lineColor || u, B = E;
                b.fillStyle = u;
                b.strokeStyle = E;
                b.lineWidth = m.lineThickness;
                var C = "solid";
                if (b.setLineDash) {
                  var A3 = H(m.nullDataLineDashType, m.lineThickness), C = m.lineDashType, D2 = H(C, m.lineThickness);
                  b.setLineDash(D2);
                }
                for (l2 = false; q < p.length; q++)
                  if (f = p[q].x.getTime ? p[q].x.getTime() : p[q].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !l2)))
                    if ("number" !== typeof p[q].y)
                      0 < q && !l2 && (m.connectNullData ? b.setLineDash && (0 < z.length && (m.options.nullDataLineDashType || !p[q - 1].lineDashType)) && (z[z.length - 1].newLineDashArray = A3, C = m.nullDataLineDashType) : (g(), z = [])), l2 = true;
                    else {
                      f = a.axisX.convertValueToPixel(f);
                      l2 = a.axisY.convertValueToPixel(p[q].y);
                      var K = m.dataPointIds[q];
                      this._eventManager.objectMap[K] = { id: K, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: q, x1: f, y1: l2 };
                      z[z.length] = { x: f, y: l2 };
                      q < p.length - 1 && (B !== (p[q].lineColor || E) || C !== (p[q].lineDashType || m.lineDashType)) && (B = p[q].lineColor || E, z[z.length - 1].newStrokeStyle = B, b.setLineDash && (p[q].lineDashType ? (C = p[q].lineDashType, z[z.length - 1].newLineDashArray = H(C, m.lineThickness)) : (C = m.lineDashType, z[z.length - 1].newLineDashArray = D2)));
                      if (0 !== p[q].markerSize && (0 < p[q].markerSize || 0 < m.markerSize)) {
                        var U = m.getMarkerProperties(q, f, l2, b);
                        r.push(U);
                        K = O(K);
                        v && r.push({ x: f, y: l2, ctx: e, type: U.type, size: U.size, color: K, borderColor: K, borderThickness: U.borderThickness });
                      }
                      (p[q].indexLabel || m.indexLabel || p[q].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "splineArea", dataPoint: p[q], dataSeries: m, point: { x: f, y: l2 }, direction: 0 > p[q].y === a.axisY.reversed ? 1 : -1, color: u });
                      l2 = false;
                    }
                g();
                Y.drawMarkers(r);
              }
            }
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d2.x1, d2.y1, d2.width, d2.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderStepArea = function(a) {
          var g, c;
          function b() {
            B && (0 < f.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? E = u : 0 > a.axisY.viewportMaximum ? E = d2.y1 : 0 < a.axisY.viewportMinimum && (E = u), h.lineTo(y, E), h.lineTo(B.x, E), h.closePath(), h.globalAlpha = f.fillOpacity, h.fill(), h.globalAlpha = 1, v && (r.lineTo(y, E), r.lineTo(B.x, E), r.closePath(), r.fill()), h.beginPath(), h.moveTo(y, s), r.beginPath(), r.moveTo(y, s), B = { x: y, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, h = v ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var r = this._eventManager.ghostCtx, d2 = a.axisY.lineCoordinates, n2 = [], k = this.plotArea, m;
            h.save();
            v && r.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            v && (r.beginPath(), r.rect(k.x1, k.y1, k.width, k.height), r.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = a.dataSeriesIndexes[p], f = this.data[q], l2 = f.dataPoints, n2 = f.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: q };
              n2 = O(n2);
              r.fillStyle = n2;
              n2 = [];
              g = true;
              var w = 0, y, s, z, u = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), E, B = null;
              c = false;
              if (0 < l2.length) {
                var C = f._colorSet[w % f._colorSet.length], t3 = f.lineColor = f.options.lineColor || C, A3 = t3;
                h.fillStyle = C;
                h.strokeStyle = t3;
                h.lineWidth = f.lineThickness;
                var K = "solid";
                if (h.setLineDash) {
                  var U = H(f.nullDataLineDashType, f.lineThickness), K = f.lineDashType, D2 = H(K, f.lineThickness);
                  h.setLineDash(D2);
                }
                for (; w < l2.length; w++)
                  if (z = l2[w].x.getTime ? l2[w].x.getTime() : l2[w].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !c))) {
                    var aa = s;
                    "number" !== typeof l2[w].y ? (f.connectNullData || (c || g) || b(), c = true) : (y = a.axisX.convertValueToPixel(z), s = a.axisY.convertValueToPixel(l2[w].y), g || c ? (!g && f.connectNullData ? (h.setLineDash && (f.options.nullDataLineDashType || K === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (g = y, c = s, y = m.x, s = m.y, b(), h.moveTo(m.x, m.y), y = g, s = c, B = m, K = f.nullDataLineDashType, h.setLineDash(U)), h.lineTo(y, aa), h.lineTo(y, s), v && (r.lineTo(y, aa), r.lineTo(y, s))) : (h.beginPath(), h.moveTo(y, s), v && (r.beginPath(), r.moveTo(y, s)), B = { x: y, y: s }), c = g = false) : (h.lineTo(y, aa), v && r.lineTo(
                      y,
                      aa
                    ), h.lineTo(y, s), v && r.lineTo(y, s), 0 == w % 250 && b()), m = { x: y, y: s }, w < l2.length - 1 && (A3 !== (l2[w].lineColor || t3) || K !== (l2[w].lineDashType || f.lineDashType)) && (b(), A3 = l2[w].lineColor || t3, h.strokeStyle = A3, h.setLineDash && (l2[w].lineDashType ? (K = l2[w].lineDashType, h.setLineDash(H(K, f.lineThickness))) : (K = f.lineDashType, h.setLineDash(D2)))), z = f.dataPointIds[w], this._eventManager.objectMap[z] = { id: z, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: w, x1: y, y1: s }, 0 !== l2[w].markerSize && (0 < l2[w].markerSize || 0 < f.markerSize) && (aa = f.getMarkerProperties(w, y, s, h), n2.push(aa), z = O(z), v && n2.push({ x: y, y: s, ctx: r, type: aa.type, size: aa.size, color: z, borderColor: z, borderThickness: aa.borderThickness })), (l2[w].indexLabel || f.indexLabel || l2[w].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: l2[w], dataSeries: f, point: { x: y, y: s }, direction: 0 > l2[w].y === a.axisY.reversed ? 1 : -1, color: C }));
                  }
                b();
                Y.drawMarkers(n2);
              }
            }
            v && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderStackedArea = function(a) {
          function g() {
            if (!(1 > k.length)) {
              for (0 < C.lineThickness && b.stroke(); 0 < k.length; ) {
                var a2 = k.pop();
                b.lineTo(a2.x, a2.y);
                v && y.lineTo(a2.x, a2.y);
              }
              b.closePath();
              b.globalAlpha = C.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              b.beginPath();
              v && (y.closePath(), y.fill(), y.beginPath());
              k = [];
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, r = [], d2 = this.plotArea, n2 = [], k = [], m = [], p = [], q = 0, f, l2, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), y = this._eventManager.ghostCtx, s, z, u;
            v && y.beginPath();
            b.save();
            v && y.save();
            b.beginPath();
            b.rect(d2.x1, d2.y1, d2.width, d2.height);
            b.clip();
            v && (y.beginPath(), y.rect(d2.x1, d2.y1, d2.width, d2.height), y.clip());
            for (var e = [], E = 0; E < a.dataSeriesIndexes.length; E++) {
              var B = a.dataSeriesIndexes[E], C = this.data[B], t3 = C.dataPoints;
              C.dataPointIndexes = [];
              for (q = 0; q < t3.length; q++)
                B = t3[q].x.getTime ? t3[q].x.getTime() : t3[q].x, C.dataPointIndexes[B] = q, e[B] || (m.push(B), e[B] = true);
              m.sort(Ta);
            }
            for (E = 0; E < a.dataSeriesIndexes.length; E++) {
              B = a.dataSeriesIndexes[E];
              C = this.data[B];
              t3 = C.dataPoints;
              z = true;
              k = [];
              q = C.id;
              this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: B };
              q = O(q);
              y.fillStyle = q;
              if (0 < m.length) {
                var e = C._colorSet[0], A3 = C.lineColor = C.options.lineColor || e, K = A3;
                b.fillStyle = e;
                b.strokeStyle = A3;
                b.lineWidth = C.lineThickness;
                u = "solid";
                if (b.setLineDash) {
                  var U = H(C.nullDataLineDashType, C.lineThickness);
                  u = C.lineDashType;
                  var D2 = H(u, C.lineThickness);
                  b.setLineDash(D2);
                }
                for (var aa = true, q = 0; q < m.length; q++) {
                  var h = m[q], ha = null, ha = 0 <= C.dataPointIndexes[h] ? t3[C.dataPointIndexes[h]] : { x: h, y: null };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !aa)))
                    if ("number" !== typeof ha.y)
                      C.connectNullData || (aa || z) || g(), aa = true;
                    else {
                      f = a.axisX.convertValueToPixel(h);
                      var pa = n2[h] ? n2[h] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        p[h] = ha.y + (p[h] ? p[h] : 0);
                        if (0 >= p[h] && a.axisY.logarithmic)
                          continue;
                        l2 = a.axisY.convertValueToPixel(p[h]);
                      } else
                        l2 = a.axisY.convertValueToPixel(ha.y), l2 -= pa;
                      k.push({ x: f, y: w - pa });
                      n2[h] = w - l2;
                      z || aa ? (!z && C.connectNullData ? (b.setLineDash && (C.options.nullDataLineDashType || u === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (z = k.pop(), u = k[k.length - 1], g(), b.moveTo(s.x, s.y), k.push(u), k.push(z), u = C.nullDataLineDashType, b.setLineDash(U)), b.lineTo(f, l2), v && y.lineTo(f, l2)) : (b.beginPath(), b.moveTo(f, l2), v && (y.beginPath(), y.moveTo(f, l2))), aa = z = false) : (b.lineTo(f, l2), v && y.lineTo(f, l2), 0 == q % 250 && (g(), b.moveTo(f, l2), v && y.moveTo(f, l2), k.push({ x: f, y: w - pa })));
                      s = { x: f, y: l2 };
                      q < t3.length - 1 && (K !== (t3[q].lineColor || A3) || u !== (t3[q].lineDashType || C.lineDashType)) && (g(), b.beginPath(), b.moveTo(f, l2), k.push({ x: f, y: w - pa }), K = t3[q].lineColor || A3, b.strokeStyle = K, b.setLineDash && (t3[q].lineDashType ? (u = t3[q].lineDashType, b.setLineDash(H(u, C.lineThickness))) : (u = C.lineDashType, b.setLineDash(D2))));
                      if (0 <= C.dataPointIndexes[h]) {
                        var la = C.dataPointIds[C.dataPointIndexes[h]];
                        this._eventManager.objectMap[la] = { id: la, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: C.dataPointIndexes[h], x1: f, y1: l2 };
                      }
                      0 <= C.dataPointIndexes[h] && 0 !== ha.markerSize && (0 < ha.markerSize || 0 < C.markerSize) && (pa = C.getMarkerProperties(C.dataPointIndexes[h], f, l2, b), r.push(pa), h = O(la), v && r.push({ x: f, y: l2, ctx: y, type: pa.type, size: pa.size, color: h, borderColor: h, borderThickness: pa.borderThickness }));
                      (ha.indexLabel || C.indexLabel || ha.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: ha, dataSeries: C, point: { x: f, y: l2 }, direction: 0 > ha.y === a.axisY.reversed ? 1 : -1, color: e });
                    }
                }
                g();
                b.moveTo(f, l2);
                v && y.moveTo(f, l2);
              }
              delete C.dataPointIndexes;
            }
            Y.drawMarkers(r);
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d2.x1, d2.y1, d2.width, d2.height), y.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: N.xClipAnimation,
              easingFunction: N.easing.linear,
              animationBase: 0
            };
          }
        };
        l.prototype.renderStackedArea100 = function(a) {
          function g() {
            for (0 < C.lineThickness && b.stroke(); 0 < k.length; ) {
              var a2 = k.pop();
              b.lineTo(a2.x, a2.y);
              v && u.lineTo(a2.x, a2.y);
            }
            b.closePath();
            b.globalAlpha = C.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            v && (u.closePath(), u.fill(), u.beginPath());
            k = [];
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, r = this.plotArea, d2 = [], n2 = [], k = [], m = [], p = [], q = 0, f, l2, w, y, s, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), u = this._eventManager.ghostCtx;
            b.save();
            v && u.save();
            b.beginPath();
            b.rect(r.x1, r.y1, r.width, r.height);
            b.clip();
            v && (u.beginPath(), u.rect(r.x1, r.y1, r.width, r.height), u.clip());
            for (var e = [], t3 = 0; t3 < a.dataSeriesIndexes.length; t3++) {
              var B = a.dataSeriesIndexes[t3], C = this.data[B], A3 = C.dataPoints;
              C.dataPointIndexes = [];
              for (q = 0; q < A3.length; q++)
                B = A3[q].x.getTime ? A3[q].x.getTime() : A3[q].x, C.dataPointIndexes[B] = q, e[B] || (m.push(B), e[B] = true);
              m.sort(Ta);
            }
            for (t3 = 0; t3 < a.dataSeriesIndexes.length; t3++) {
              B = a.dataSeriesIndexes[t3];
              C = this.data[B];
              A3 = C.dataPoints;
              y = true;
              e = C.id;
              this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: B };
              e = O(e);
              u.fillStyle = e;
              k = [];
              if (0 < m.length) {
                var e = C._colorSet[q % C._colorSet.length], D2 = C.lineColor = C.options.lineColor || e, K = D2;
                b.fillStyle = e;
                b.strokeStyle = D2;
                b.lineWidth = C.lineThickness;
                s = "solid";
                if (b.setLineDash) {
                  var U = H(C.nullDataLineDashType, C.lineThickness);
                  s = C.lineDashType;
                  var fa = H(s, C.lineThickness);
                  b.setLineDash(fa);
                }
                for (var aa = true, q = 0; q < m.length; q++) {
                  var h = m[q], ha = null, ha = 0 <= C.dataPointIndexes[h] ? A3[C.dataPointIndexes[h]] : { x: h, y: null };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !aa)))
                    if ("number" !== typeof ha.y)
                      C.connectNullData || (aa || y) || g(), aa = true;
                    else {
                      var pa;
                      pa = 0 !== a.dataPointYSums[h] ? 100 * (ha.y / a.dataPointYSums[h]) : 0;
                      f = a.axisX.convertValueToPixel(h);
                      var la = n2[h] ? n2[h] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        p[h] = pa + (p[h] ? p[h] : 0);
                        if (0 >= p[h] && a.axisY.logarithmic)
                          continue;
                        l2 = a.axisY.convertValueToPixel(p[h]);
                      } else
                        l2 = a.axisY.convertValueToPixel(pa), l2 -= la;
                      k.push({ x: f, y: z - la });
                      n2[h] = z - l2;
                      y || aa ? (!y && C.connectNullData ? (b.setLineDash && (C.options.nullDataLineDashType || s === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (y = k.pop(), s = k[k.length - 1], g(), b.moveTo(w.x, w.y), k.push(s), k.push(y), s = C.nullDataLineDashType, b.setLineDash(U)), b.lineTo(f, l2), v && u.lineTo(f, l2)) : (b.beginPath(), b.moveTo(f, l2), v && (u.beginPath(), u.moveTo(
                        f,
                        l2
                      ))), aa = y = false) : (b.lineTo(f, l2), v && u.lineTo(f, l2), 0 == q % 250 && (g(), b.moveTo(f, l2), v && u.moveTo(f, l2), k.push({ x: f, y: z - la })));
                      w = { x: f, y: l2 };
                      q < A3.length - 1 && (K !== (A3[q].lineColor || D2) || s !== (A3[q].lineDashType || C.lineDashType)) && (g(), b.beginPath(), b.moveTo(f, l2), k.push({ x: f, y: z - la }), K = A3[q].lineColor || D2, b.strokeStyle = K, b.setLineDash && (A3[q].lineDashType ? (s = A3[q].lineDashType, b.setLineDash(H(s, C.lineThickness))) : (s = C.lineDashType, b.setLineDash(fa))));
                      if (0 <= C.dataPointIndexes[h]) {
                        var F = C.dataPointIds[C.dataPointIndexes[h]];
                        this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: C.dataPointIndexes[h], x1: f, y1: l2 };
                      }
                      0 <= C.dataPointIndexes[h] && 0 !== ha.markerSize && (0 < ha.markerSize || 0 < C.markerSize) && (la = C.getMarkerProperties(C.dataPointIndexes[h], f, l2, b), d2.push(la), h = O(F), v && d2.push({ x: f, y: l2, ctx: u, type: la.type, size: la.size, color: h, borderColor: h, borderThickness: la.borderThickness }));
                      (ha.indexLabel || C.indexLabel || ha.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "stackedArea100",
                        dataPoint: ha,
                        dataSeries: C,
                        point: { x: f, y: l2 },
                        direction: 0 > ha.y === a.axisY.reversed ? 1 : -1,
                        color: e
                      });
                    }
                }
                g();
                b.moveTo(f, l2);
                v && u.moveTo(f, l2);
              }
              delete C.dataPointIndexes;
            }
            Y.drawMarkers(d2);
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), b.clearRect(r.x1, r.y1, r.width, r.height), u.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderBubble = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, h, r;
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var d2 = -Infinity, n2 = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
              for (var m = a.dataSeriesIndexes[k], p = this.data[m], q = p.dataPoints, f = 0, e = 0; e < q.length; e++)
                h = q[e].getTime ? h = q[e].x.getTime() : h = q[e].x, h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || (f = q[e].z, f > d2 && (d2 = f), f < n2 && (n2 = f));
            for (var l2 = 25 * Math.PI, w = Math.max(
              Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI,
              l2
            ), k = 0; k < a.dataSeriesIndexes.length; k++)
              if (m = a.dataSeriesIndexes[k], p = this.data[m], q = p.dataPoints, 0 < q.length) {
                for (c.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                  if (h = q[e].getTime ? h = q[e].x.getTime() : h = q[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                    h = a.axisX.convertValueToPixel(h);
                    r = a.axisY.convertValueToPixel(q[e].y);
                    var f = q[e].z, y = 2 * Math.max(Math.sqrt((d2 === n2 ? w / 2 : l2 + (w - l2) / (d2 - n2) * (f - n2)) / Math.PI) << 0, 1), f = p.getMarkerProperties(e, c);
                    f.size = y;
                    c.globalAlpha = p.fillOpacity;
                    Y.drawMarker(h, r, c, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    var s = p.dataPointIds[e];
                    this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: e, x1: h, y1: r, size: y };
                    y = O(s);
                    v && Y.drawMarker(h, r, this._eventManager.ghostCtx, f.type, f.size, y, y, f.borderThickness);
                    (q[e].indexLabel || p.indexLabel || q[e].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "bubble",
                      dataPoint: q[e],
                      dataSeries: p,
                      point: { x: h, y: r },
                      direction: 1,
                      bounds: { x1: h - f.size / 2, y1: r - f.size / 2, x2: h + f.size / 2, y2: r + f.size / 2 },
                      color: null
                    });
                  }
              }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.fadeInAnimation, easingFunction: N.easing.easeInQuad, animationBase: 0 };
          }
        };
        l.prototype.renderScatter = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, h, r;
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
              b.x1,
              b.y1,
              b.width,
              b.height
            ), this._eventManager.ghostCtx.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var n2 = a.dataSeriesIndexes[d2], k = this.data[n2], m = k.dataPoints;
              if (0 < m.length) {
                c.strokeStyle = "#4572A7 ";
                Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                for (var p = 0, q = 0, e = 0; e < m.length; e++)
                  if (h = m[e].getTime ? h = m[e].x.getTime() : h = m[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                    h = a.axisX.convertValueToPixel(h);
                    r = a.axisY.convertValueToPixel(m[e].y);
                    var f = k.getMarkerProperties(
                      e,
                      h,
                      r,
                      c
                    );
                    c.globalAlpha = k.fillOpacity;
                    Y.drawMarker(f.x, f.y, f.ctx, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    Math.sqrt((p - h) * (p - h) + (q - r) * (q - r)) < Math.min(f.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = k.dataPointIds[e], this._eventManager.objectMap[p] = { id: p, objectType: "dataPoint", dataSeriesIndex: n2, dataPointIndex: e, x1: h, y1: r }, p = O(p), v && Y.drawMarker(f.x, f.y, this._eventManager.ghostCtx, f.type, f.size, p, p, f.borderThickness), (m[e].indexLabel || k.indexLabel || m[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "scatter", dataPoint: m[e], dataSeries: k, point: { x: h, y: r }, direction: 1, bounds: { x1: h - f.size / 2, y1: r - f.size / 2, x2: h + f.size / 2, y2: r + f.size / 2 }, color: null }), p = h, q = r);
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.fadeInAnimation, easingFunction: N.easing.easeInQuad, animationBase: 0 };
          }
        };
        l.prototype.renderCandlestick = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, r = this.plotArea, d2 = 0, l2, k, m, p, q, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, t3 = a.axisX.dataInfo.minDiff;
            isFinite(t3) || (t3 = 0.3 * Math.abs(a.axisX.range));
            t3 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * r.width * (a.axisX.logarithmic ? Math.log(t3) / Math.log(a.axisX.range) : Math.abs(t3) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > h && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            t3 < e && (t3 = e);
            t3 > h && (t3 = h);
            c.save();
            v && b.save();
            c.beginPath();
            c.rect(r.x1, r.y1, r.width, r.height);
            c.clip();
            v && (b.beginPath(), b.rect(r.x1, r.y1, r.width, r.height), b.clip());
            for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
              var y = a.dataSeriesIndexes[w], s = this.data[y], z = s.dataPoints;
              if (0 < z.length) {
                for (var u = 5 < t3 && s.bevelEnabled ? true : false, d2 = 0; d2 < z.length; d2++)
                  if (z[d2].getTime ? f = z[d2].x.getTime() : f = z[d2].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !n(z[d2].y) && z[d2].y.length && "number" === typeof z[d2].y[0] && "number" === typeof z[d2].y[1] && "number" === typeof z[d2].y[2] && "number" === typeof z[d2].y[3]) {
                    l2 = a.axisX.convertValueToPixel(f);
                    k = a.axisY.convertValueToPixel(z[d2].y[0]);
                    m = a.axisY.convertValueToPixel(z[d2].y[1]);
                    p = a.axisY.convertValueToPixel(z[d2].y[2]);
                    q = a.axisY.convertValueToPixel(z[d2].y[3]);
                    var E = l2 - t3 / 2 << 0, B = E + t3 << 0, h = s.options.fallingColor ? s.fallingColor : s._colorSet[0], e = z[d2].color ? z[d2].color : s._colorSet[0], C = Math.round(Math.max(1, 0.15 * t3)), A3 = 0 === C % 2 ? 0 : 0.5, D2 = s.dataPointIds[d2];
                    this._eventManager.objectMap[D2] = { id: D2, objectType: "dataPoint", dataSeriesIndex: y, dataPointIndex: d2, x1: E, y1: k, x2: B, y2: m, x3: l2, y3: p, x4: l2, y4: q, borderThickness: C, color: e };
                    c.strokeStyle = e;
                    c.beginPath();
                    c.lineWidth = C;
                    b.lineWidth = Math.max(C, 4);
                    "candlestick" === s.type ? (c.moveTo(l2 - A3, m), c.lineTo(l2 - A3, Math.min(k, q)), c.stroke(), c.moveTo(l2 - A3, Math.max(k, q)), c.lineTo(l2 - A3, p), c.stroke(), ba(c, E, Math.min(k, q), B, Math.max(k, q), z[d2].y[0] <= z[d2].y[3] ? s.risingColor : h, C, e, u, u, false, false, s.fillOpacity), v && (e = O(D2), b.strokeStyle = e, b.moveTo(l2 - A3, m), b.lineTo(l2 - A3, Math.min(k, q)), b.stroke(), b.moveTo(l2 - A3, Math.max(k, q)), b.lineTo(l2 - A3, p), b.stroke(), ba(b, E, Math.min(k, q), B, Math.max(k, q), e, 0, null, false, false, false, false))) : "ohlc" === s.type && (c.moveTo(l2 - A3, m), c.lineTo(l2 - A3, p), c.stroke(), c.beginPath(), c.moveTo(l2, k), c.lineTo(E, k), c.stroke(), c.beginPath(), c.moveTo(l2, q), c.lineTo(B, q), c.stroke(), v && (e = O(D2), b.strokeStyle = e, b.moveTo(l2 - A3, m), b.lineTo(l2 - A3, p), b.stroke(), b.beginPath(), b.moveTo(l2, k), b.lineTo(E, k), b.stroke(), b.beginPath(), b.moveTo(l2, q), b.lineTo(B, q), b.stroke()));
                    (z[d2].indexLabel || s.indexLabel || z[d2].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({ chartType: s.type, dataPoint: z[d2], dataSeries: s, point: { x: E + (B - E) / 2, y: a.axisY.reversed ? p : m }, direction: 1, bounds: { x1: E, y1: Math.min(m, p), x2: B, y2: Math.max(m, p) }, color: e });
                  }
              }
            }
            v && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(r.x1, r.y1, r.width, r.height), b.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: N.fadeInAnimation,
              easingFunction: N.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        l.prototype.renderBoxAndWhisker = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = this.plotArea, r = 0, d2, l2, k, m, p, q, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, t3 = a.axisX.dataInfo.minDiff;
            isFinite(t3) || (t3 = 0.3 * Math.abs(a.axisX.range));
            t3 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * h.width * (a.axisX.logarithmic ? Math.log(t3) / Math.log(a.axisX.range) : Math.abs(t3) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > r && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && r < e) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            t3 < e && (t3 = e);
            t3 > r && (t3 = r);
            c.save();
            v && b.save();
            c.beginPath();
            c.rect(
              h.x1,
              h.y1,
              h.width,
              h.height
            );
            c.clip();
            v && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
            for (var w = false, w = !!a.axisY.reversed, y = 0; y < a.dataSeriesIndexes.length; y++) {
              var s = a.dataSeriesIndexes[y], z = this.data[s], u = z.dataPoints;
              if (0 < u.length) {
                for (var E = 5 < t3 && z.bevelEnabled ? true : false, r = 0; r < u.length; r++)
                  if (u[r].getTime ? f = u[r].x.getTime() : f = u[r].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !n(u[r].y) && u[r].y.length && "number" === typeof u[r].y[0] && "number" === typeof u[r].y[1] && "number" === typeof u[r].y[2] && "number" === typeof u[r].y[3] && "number" === typeof u[r].y[4] && 5 === u[r].y.length) {
                    d2 = a.axisX.convertValueToPixel(f);
                    l2 = a.axisY.convertValueToPixel(u[r].y[0]);
                    k = a.axisY.convertValueToPixel(u[r].y[1]);
                    m = a.axisY.convertValueToPixel(u[r].y[2]);
                    p = a.axisY.convertValueToPixel(u[r].y[3]);
                    q = a.axisY.convertValueToPixel(u[r].y[4]);
                    var B = d2 - t3 / 2 << 0, C = d2 + t3 / 2 << 0, e = u[r].color ? u[r].color : z._colorSet[0], A3 = Math.round(Math.max(1, 0.15 * t3)), D2 = 0 === A3 % 2 ? 0 : 0.5, K = u[r].whiskerColor ? u[r].whiskerColor : u[r].color ? z.whiskerColor ? z.whiskerColor : u[r].color : z.whiskerColor ? z.whiskerColor : e, U = "number" === typeof u[r].whiskerThickness ? u[r].whiskerThickness : "number" === typeof z.options.whiskerThickness ? z.whiskerThickness : A3, fa = u[r].whiskerDashType ? u[r].whiskerDashType : z.whiskerDashType, aa = n(u[r].whiskerLength) ? n(z.options.whiskerLength) ? t3 : z.whiskerLength : u[r].whiskerLength, aa = "number" === typeof aa ? 0 >= aa ? 0 : aa >= t3 ? t3 : aa : "string" === typeof aa ? parseInt(aa) * t3 / 100 > t3 ? t3 : parseInt(aa) * t3 / 100 : t3, ha = 1 === Math.round(U) % 2 ? 0.5 : 0, pa = u[r].stemColor ? u[r].stemColor : u[r].color ? z.stemColor ? z.stemColor : u[r].color : z.stemColor ? z.stemColor : e, la = "number" === typeof u[r].stemThickness ? u[r].stemThickness : "number" === typeof z.options.stemThickness ? z.stemThickness : A3, F = 1 === Math.round(la) % 2 ? 0.5 : 0, J2 = u[r].stemDashType ? u[r].stemDashType : z.stemDashType, L2 = u[r].lineColor ? u[r].lineColor : u[r].color ? z.lineColor ? z.lineColor : u[r].color : z.lineColor ? z.lineColor : e, P2 = "number" === typeof u[r].lineThickness ? u[r].lineThickness : "number" === typeof z.options.lineThickness ? z.lineThickness : A3, R3 = u[r].lineDashType ? u[r].lineDashType : z.lineDashType, M = 1 === Math.round(P2) % 2 ? 0.5 : 0, T2 = z.upperBoxColor, S = z.lowerBoxColor, ua = n(z.options.fillOpacity) ? 1 : z.fillOpacity, Q = z.dataPointIds[r];
                    this._eventManager.objectMap[Q] = { id: Q, objectType: "dataPoint", dataSeriesIndex: s, dataPointIndex: r, x1: B, y1: l2, x2: C, y2: k, x3: d2, y3: m, x4: d2, y4: p, y5: q, borderThickness: A3, color: e, stemThickness: la, stemColor: pa, whiskerThickness: U, whiskerLength: aa, whiskerColor: K, lineThickness: P2, lineColor: L2 };
                    c.save();
                    0 < la && (c.beginPath(), c.strokeStyle = pa, c.lineWidth = la, c.setLineDash && c.setLineDash(H(J2, la)), c.moveTo(d2 - F, k), c.lineTo(d2 - F, l2), c.stroke(), c.moveTo(d2 - F, p), c.lineTo(d2 - F, m), c.stroke());
                    c.restore();
                    b.lineWidth = Math.max(A3, 4);
                    c.beginPath();
                    ba(c, B, Math.min(q, k), C, Math.max(k, q), S, 0, e, w ? E : false, w ? false : E, false, false, ua);
                    c.beginPath();
                    ba(c, B, Math.min(m, q), C, Math.max(q, m), T2, 0, e, w ? false : E, w ? E : false, false, false, ua);
                    c.beginPath();
                    c.lineWidth = A3;
                    c.strokeStyle = e;
                    c.rect(B - D2, Math.min(k, m) - D2, C - B + 2 * D2, Math.max(k, m) - Math.min(k, m) + 2 * D2);
                    c.stroke();
                    c.save();
                    0 < P2 && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(H(
                      R3,
                      P2
                    )), c.strokeStyle = L2, c.lineWidth = P2, c.moveTo(B, q - M), c.lineTo(C, q - M), c.stroke());
                    c.restore();
                    c.save();
                    0 < U && (c.beginPath(), c.setLineDash && c.setLineDash(H(fa, U)), c.strokeStyle = K, c.lineWidth = U, c.moveTo(d2 - aa / 2 << 0, p - ha), c.lineTo(d2 + aa / 2 << 0, p - ha), c.stroke(), c.moveTo(d2 - aa / 2 << 0, l2 + ha), c.lineTo(d2 + aa / 2 << 0, l2 + ha), c.stroke());
                    c.restore();
                    v && (e = O(Q), b.strokeStyle = e, b.lineWidth = la, 0 < la && (b.moveTo(d2 - D2 - F, k), b.lineTo(d2 - D2 - F, Math.max(l2, p)), b.stroke(), b.moveTo(d2 - D2 - F, Math.min(l2, p)), b.lineTo(d2 - D2 - F, m), b.stroke()), ba(b, B, Math.max(
                      k,
                      m
                    ), C, Math.min(k, m), e, 0, null, false, false, false, false), 0 < U && (b.beginPath(), b.lineWidth = U, b.moveTo(d2 + aa / 2, p - ha), b.lineTo(d2 - aa / 2, p - ha), b.stroke(), b.moveTo(d2 + aa / 2, l2 + ha), b.lineTo(d2 - aa / 2, l2 + ha), b.stroke()));
                    (u[r].indexLabel || z.indexLabel || u[r].indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({ chartType: z.type, dataPoint: u[r], dataSeries: z, point: { x: B + (C - B) / 2, y: a.axisY.reversed ? l2 : p }, direction: 1, bounds: { x1: B, y1: Math.min(l2, p), x2: C, y2: Math.max(l2, p) }, color: e });
                  }
              }
            }
            v && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), b.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.fadeInAnimation, easingFunction: N.easing.easeInQuad, animationBase: 0 };
          }
        };
        l.prototype.renderRangeColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, r, d2, l2, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
            k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > r && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && r < h) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            k < h && (k = h);
            k > r && (k = r);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
              var p = a.dataSeriesIndexes[m], q = this.data[p], f = q.dataPoints;
              if (0 < f.length) {
                for (var t3 = 5 < k && q.bevelEnabled ? true : false, h = 0; h < f.length; h++)
                  if (f[h].getTime ? l2 = f[h].x.getTime() : l2 = f[h].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax) && !n(f[h].y) && f[h].y.length && "number" === typeof f[h].y[0] && "number" === typeof f[h].y[1]) {
                    b = a.axisX.convertValueToPixel(l2);
                    r = a.axisY.convertValueToPixel(f[h].y[0]);
                    d2 = a.axisY.convertValueToPixel(f[h].y[1]);
                    var w = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + m) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + m) * k << 0, y = a.axisX.reversed ? w - k << 0 : w + k << 0, b = f[h].color ? f[h].color : q._colorSet[h % q._colorSet.length];
                    if (r > d2) {
                      var s = r;
                      r = d2;
                      d2 = s;
                    }
                    s = q.dataPointIds[h];
                    this._eventManager.objectMap[s] = {
                      id: s,
                      objectType: "dataPoint",
                      dataSeriesIndex: p,
                      dataPointIndex: h,
                      x1: w,
                      y1: r,
                      x2: y,
                      y2: d2
                    };
                    ba(c, a.axisX.reversed ? y : w, r, a.axisX.reversed ? w : y, d2, b, 0, b, t3, t3, false, false, q.fillOpacity);
                    b = O(s);
                    v && ba(this._eventManager.ghostCtx, a.axisX.reversed ? y : w, r, a.axisX.reversed ? w : y, d2, b, 0, null, false, false, false, false);
                    if (f[h].indexLabel || q.indexLabel || f[h].indexLabelFormatter || q.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[h], dataSeries: q, indexKeyword: 0, point: { x: w + (y - w) / 2, y: f[h].y[1] >= f[h].y[0] ? d2 : r }, direction: f[h].y[1] >= f[h].y[0] ? -1 : 1, bounds: { x1: w, y1: Math.min(
                        r,
                        d2
                      ), x2: y, y2: Math.max(r, d2) }, color: b }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[h], dataSeries: q, indexKeyword: 1, point: { x: w + (y - w) / 2, y: f[h].y[1] >= f[h].y[0] ? r : d2 }, direction: f[h].y[1] >= f[h].y[0] ? 1 : -1, bounds: { x1: w, y1: Math.min(r, d2), x2: y, y2: Math.max(r, d2) }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(
              a.axisY.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.fadeInAnimation, easingFunction: N.easing.easeInQuad, animationBase: 0 };
          }
        };
        l.prototype.renderError = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g, b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = false, r = this.plotArea, d2 = 0, l2, k, m, p, q, f, t3, w = a.axisX.dataInfo.minDiff;
            isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(r.x1, r.y1, r.width, r.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.clip());
            for (var y = 0, s = 0; s < this.data.length; s++)
              !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && y || y++;
            for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
              var u = a.dataSeriesIndexes[z], E = this.data[u], B = E.dataPoints, C = n(E._linkedSeries) ? false : E._linkedSeries.type.match(/(bar|column)/ig) && E._linkedSeries.visible ? true : false, D2 = 0;
              if (C)
                for (e = E._linkedSeries.id, s = 0; s < e; s++)
                  !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && D2 || (this.data[s].type.match(/(range)/ig) && (h = true), D2++);
              e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? y : 1))) << 0 : 0.3 * this.width;
              h && (d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? y : 1))) << 0 : 0.03 * this.width);
              s = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? r.height : r.width) * (a.axisX.logarithmic ? Math.log(w) / Math.log(a.axisX.range) : Math.abs(w) / Math.abs(a.axisX.range)) / (C ? y : 1)) << 0;
              this.dataPointMaxWidth && e > d2 && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d2));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && d2 < e) && (d2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
              s < e && (s = e);
              s > d2 && (s = d2);
              if (0 < B.length)
                for (var H2 = E._colorSet, d2 = 0; d2 < B.length; d2++) {
                  var e = E.lineColor = E.options.color ? E.options.color : H2[0], K = { color: B[d2].whiskerColor ? B[d2].whiskerColor : B[d2].color ? E.whiskerColor ? E.whiskerColor : B[d2].color : E.whiskerColor ? E.whiskerColor : e, thickness: n(B[d2].whiskerThickness) ? E.whiskerThickness : B[d2].whiskerThickness, dashType: B[d2].whiskerDashType ? B[d2].whiskerDashType : E.whiskerDashType, length: n(B[d2].whiskerLength) ? n(E.options.whiskerLength) ? s : E.options.whiskerLength : B[d2].whiskerLength, trimLength: n(B[d2].whiskerLength) ? n(E.options.whiskerLength) ? 50 : 0 : 0 };
                  K.length = "number" === typeof K.length ? 0 >= K.length ? 0 : K.length >= s ? s : K.length : "string" === typeof K.length ? parseInt(K.length) * s / 100 > s ? s : parseInt(K.length) * s / 100 > s : s;
                  K.thickness = "number" === typeof K.thickness ? 0 > K.thickness ? 0 : Math.round(K.thickness) : 2;
                  var U = { color: B[d2].stemColor ? B[d2].stemColor : B[d2].color ? E.stemColor ? E.stemColor : B[d2].color : E.stemColor ? E.stemColor : e, thickness: B[d2].stemThickness ? B[d2].stemThickness : E.stemThickness, dashType: B[d2].stemDashType ? B[d2].stemDashType : E.stemDashType };
                  U.thickness = "number" === typeof U.thickness ? 0 > U.thickness ? 0 : Math.round(U.thickness) : 2;
                  B[d2].getTime ? t3 = B[d2].x.getTime() : t3 = B[d2].x;
                  if (!(t3 < a.axisX.dataInfo.viewPortMin || t3 > a.axisX.dataInfo.viewPortMax) && !n(B[d2].y) && B[d2].y.length && "number" === typeof B[d2].y[0] && "number" === typeof B[d2].y[1]) {
                    var fa = a.axisX.convertValueToPixel(t3);
                    b ? k = fa : l2 = fa;
                    fa = a.axisY.convertValueToPixel(B[d2].y[0]);
                    b ? m = fa : q = fa;
                    fa = a.axisY.convertValueToPixel(B[d2].y[1]);
                    b ? p = fa : f = fa;
                    b ? (q = a.axisX.reversed ? k + (C ? y : 1) * s / 2 - (C ? D2 - 1 : 0) * s << 0 : k - (C ? y : 1) * s / 2 + (C ? D2 - 1 : 0) * s << 0, f = a.axisX.reversed ? q - s << 0 : q + s << 0) : (m = a.axisX.reversed ? l2 + (C ? y : 1) * s / 2 - (C ? D2 - 1 : 0) * s << 0 : l2 - (C ? y : 1) * s / 2 + (C ? D2 - 1 : 0) * s << 0, p = a.axisX.reversed ? m - s << 0 : m + s << 0);
                    !b && q > f && (fa = q, q = f, f = fa);
                    b && m > p && (fa = m, m = p, p = fa);
                    fa = E.dataPointIds[d2];
                    this._eventManager.objectMap[fa] = { id: fa, objectType: "dataPoint", dataSeriesIndex: u, dataPointIndex: d2, x1: Math.min(m, p), y1: Math.min(q, f), x2: Math.max(p, m), y2: Math.max(f, q), isXYSwapped: b, stemProperties: U, whiskerProperties: K };
                    A2(c, Math.min(m, p), Math.min(q, f), Math.max(p, m), Math.max(f, q), e, K, U, b);
                    v && A2(this._eventManager.ghostCtx, m, q, p, f, e, K, U, b);
                    if (B[d2].indexLabel || E.indexLabel || B[d2].indexLabelFormatter || E.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "error", dataPoint: B[d2], dataSeries: E, indexKeyword: 0, point: { x: b ? B[d2].y[1] >= B[d2].y[0] ? m : p : m + (p - m) / 2, y: b ? q + (f - q) / 2 : B[d2].y[1] >= B[d2].y[0] ? f : q }, direction: B[d2].y[1] >= B[d2].y[0] ? -1 : 1, bounds: { x1: b ? Math.min(m, p) : m, y1: b ? q : Math.min(q, f), x2: b ? Math.max(m, p) : p, y2: b ? f : Math.max(q, f) }, color: e, axisSwapped: b }), this._indexLabels.push({ chartType: "error", dataPoint: B[d2], dataSeries: E, indexKeyword: 1, point: { x: b ? B[d2].y[1] >= B[d2].y[0] ? p : m : m + (p - m) / 2, y: b ? q + (f - q) / 2 : B[d2].y[1] >= B[d2].y[0] ? q : f }, direction: B[d2].y[1] >= B[d2].y[0] ? 1 : -1, bounds: { x1: b ? Math.min(m, p) : m, y1: b ? q : Math.min(q, f), x2: b ? Math.max(m, p) : p, y2: b ? f : Math.max(q, f) }, color: e, axisSwapped: b });
                  }
                }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.fadeInAnimation, easingFunction: N.easing.easeInQuad, animationBase: 0 };
          }
        };
        l.prototype.renderRangeBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, r, d2, l2, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
            m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > r && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && r < h) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            m < h && (m = h);
            m > r && (m = r);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = a.dataSeriesIndexes[p], f = this.data[q], t3 = f.dataPoints;
              if (0 < t3.length) {
                var w = 5 < m && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < t3.length; h++)
                  if (t3[h].getTime ? k = t3[h].x.getTime() : k = t3[h].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !n(t3[h].y) && t3[h].y.length && "number" === typeof t3[h].y[0] && "number" === typeof t3[h].y[1]) {
                    r = a.axisY.convertValueToPixel(t3[h].y[0]);
                    d2 = a.axisY.convertValueToPixel(t3[h].y[1]);
                    l2 = a.axisX.convertValueToPixel(k);
                    l2 = a.axisX.reversed ? l2 + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + p) * m << 0 : l2 - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + p) * m << 0;
                    var y = a.axisX.reversed ? l2 - m << 0 : l2 + m << 0;
                    r > d2 && (b = r, r = d2, d2 = b);
                    b = t3[h].color ? t3[h].color : f._colorSet[h % f._colorSet.length];
                    ba(c, r, a.axisX.reversed ? y : l2, d2, a.axisX.reversed ? l2 : y, b, 0, null, w, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: r, y1: l2, x2: d2, y2: y };
                    b = O(b);
                    v && ba(this._eventManager.ghostCtx, r, a.axisX.reversed ? y : l2, d2, a.axisX.reversed ? l2 : y, b, 0, null, false, false, false, false);
                    if (t3[h].indexLabel || f.indexLabel || t3[h].indexLabelFormatter || f.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeBar", dataPoint: t3[h], dataSeries: f, indexKeyword: 0, point: { x: t3[h].y[1] >= t3[h].y[0] ? r : d2, y: l2 + (y - l2) / 2 }, direction: t3[h].y[1] >= t3[h].y[0] ? -1 : 1, bounds: { x1: Math.min(r, d2), y1: l2, x2: Math.max(r, d2), y2: y }, color: b }), this._indexLabels.push({ chartType: "rangeBar", dataPoint: t3[h], dataSeries: f, indexKeyword: 1, point: { x: t3[h].y[1] >= t3[h].y[0] ? d2 : r, y: l2 + (y - l2) / 2 }, direction: t3[h].y[1] >= t3[h].y[0] ? 1 : -1, bounds: { x1: Math.min(r, d2), y1: l2, x2: Math.max(r, d2), y2: y }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: N.fadeInAnimation, easingFunction: N.easing.easeInQuad, animationBase: 0 };
          }
        };
        l.prototype.renderRangeArea = function(a) {
          function g() {
            if (z) {
              for (var a2 = null, c2 = n2.length - 1; 0 <= c2; c2--)
                a2 = n2[c2], b.lineTo(a2.x, a2.y2), e.lineTo(a2.x, a2.y2);
              b.closePath();
              b.globalAlpha = m.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              e.fill();
              if (0 < m.lineThickness) {
                b.beginPath();
                b.moveTo(a2.x, a2.y2);
                for (c2 = 0; c2 < n2.length; c2++)
                  a2 = n2[c2], b.lineTo(a2.x, a2.y2);
                b.moveTo(n2[0].x, n2[0].y1);
                for (c2 = 0; c2 < n2.length; c2++)
                  a2 = n2[c2], b.lineTo(a2.x, a2.y1);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(l2, w);
              e.beginPath();
              e.moveTo(l2, w);
              z = { x: l2, y: w };
              n2 = [];
              n2.push({ x: l2, y1: w, y2: y });
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = [], r = this.plotArea;
            b.save();
            v && e.save();
            b.beginPath();
            b.rect(r.x1, r.y1, r.width, r.height);
            b.clip();
            v && (e.beginPath(), e.rect(r.x1, r.y1, r.width, r.height), e.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var n2 = [], k = a.dataSeriesIndexes[d2], m = this.data[k], p = m.dataPoints, h = m.id;
              this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: k };
              h = O(h);
              e.fillStyle = h;
              var h = [], q = true, f = 0, l2, w, y, s, z = null;
              if (0 < p.length) {
                var u = m._colorSet[f % m._colorSet.length], t3 = m.lineColor = m.options.lineColor || u, B = t3;
                b.fillStyle = u;
                b.strokeStyle = t3;
                b.lineWidth = m.lineThickness;
                var C = "solid";
                if (b.setLineDash) {
                  var A3 = H(m.nullDataLineDashType, m.lineThickness), C = m.lineDashType, D2 = H(C, m.lineThickness);
                  b.setLineDash(D2);
                }
                for (var K = true; f < p.length; f++)
                  if (s = p[f].x.getTime ? p[f].x.getTime() : p[f].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !K)))
                    if (null !== p[f].y && p[f].y.length && "number" === typeof p[f].y[0] && "number" === typeof p[f].y[1]) {
                      l2 = a.axisX.convertValueToPixel(s);
                      w = a.axisY.convertValueToPixel(p[f].y[0]);
                      y = a.axisY.convertValueToPixel(p[f].y[1]);
                      q || K ? (m.connectNullData && !q ? (b.setLineDash && (m.options.nullDataLineDashType || C === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (n2[n2.length - 1].newLineDashArray = D2, C = m.nullDataLineDashType, b.setLineDash(A3)), b.lineTo(l2, w), v && e.lineTo(l2, w), n2.push({ x: l2, y1: w, y2: y })) : (b.beginPath(), b.moveTo(l2, w), z = { x: l2, y: w }, n2 = [], n2.push({ x: l2, y1: w, y2: y }), v && (e.beginPath(), e.moveTo(l2, w))), K = q = false) : (b.lineTo(l2, w), n2.push({ x: l2, y1: w, y2: y }), v && e.lineTo(l2, w), 0 == f % 250 && g());
                      s = m.dataPointIds[f];
                      this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: f, x1: l2, y1: w, y2: y };
                      f < p.length - 1 && (B !== (p[f].lineColor || t3) || C !== (p[f].lineDashType || m.lineDashType)) && (g(), B = p[f].lineColor || t3, n2[n2.length - 1].newStrokeStyle = B, b.strokeStyle = B, b.setLineDash && (p[f].lineDashType ? (C = p[f].lineDashType, n2[n2.length - 1].newLineDashArray = H(C, m.lineThickness), b.setLineDash(n2[n2.length - 1].newLineDashArray)) : (C = m.lineDashType, n2[n2.length - 1].newLineDashArray = D2, b.setLineDash(D2))));
                      if (0 !== p[f].markerSize && (0 < p[f].markerSize || 0 < m.markerSize)) {
                        var U = m.getMarkerProperties(f, l2, y, b);
                        h.push(U);
                        var fa = O(s);
                        v && h.push({ x: l2, y, ctx: e, type: U.type, size: U.size, color: fa, borderColor: fa, borderThickness: U.borderThickness });
                        U = m.getMarkerProperties(
                          f,
                          l2,
                          w,
                          b
                        );
                        h.push(U);
                        fa = O(s);
                        v && h.push({ x: l2, y: w, ctx: e, type: U.type, size: U.size, color: fa, borderColor: fa, borderThickness: U.borderThickness });
                      }
                      if (p[f].indexLabel || m.indexLabel || p[f].indexLabelFormatter || m.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeArea", dataPoint: p[f], dataSeries: m, indexKeyword: 0, point: { x: l2, y: w }, direction: p[f].y[0] > p[f].y[1] === a.axisY.reversed ? -1 : 1, color: u }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: p[f], dataSeries: m, indexKeyword: 1, point: { x: l2, y }, direction: p[f].y[0] > p[f].y[1] === a.axisY.reversed ? 1 : -1, color: u });
                    } else
                      K || q || g(), K = true;
                g();
                Y.drawMarkers(h);
              }
            }
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderRangeSplineArea = function(a) {
          function g(a2, c2) {
            var f2 = t2(w, 2);
            if (0 < f2.length) {
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(f2[0].x, f2[0].y);
                for (var g2 = 0; g2 < f2.length - 3; g2 += 3) {
                  if (f2[g2].newStrokeStyle || f2[g2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), f2[g2].newStrokeStyle && (b.strokeStyle = f2[g2].newStrokeStyle), f2[g2].newLineDashArray && b.setLineDash(f2[g2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
              }
              b.beginPath();
              b.moveTo(f2[0].x, f2[0].y);
              v && (e.beginPath(), e.moveTo(f2[0].x, f2[0].y));
              for (g2 = 0; g2 < f2.length - 3; g2 += 3)
                b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y), v && e.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
              f2 = t2(y, 2);
              b.lineTo(y[y.length - 1].x, y[y.length - 1].y);
              for (g2 = f2.length - 1; 2 < g2; g2 -= 3)
                b.bezierCurveTo(
                  f2[g2 - 1].x,
                  f2[g2 - 1].y,
                  f2[g2 - 2].x,
                  f2[g2 - 2].y,
                  f2[g2 - 3].x,
                  f2[g2 - 3].y
                ), v && e.bezierCurveTo(f2[g2 - 1].x, f2[g2 - 1].y, f2[g2 - 2].x, f2[g2 - 2].y, f2[g2 - 3].x, f2[g2 - 3].y);
              b.closePath();
              b.globalAlpha = k.fillOpacity;
              b.fill();
              v && (e.closePath(), e.fill());
              b.globalAlpha = 1;
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(f2[0].x, f2[0].y);
                for (var h2 = g2 = 0; g2 < f2.length - 3; g2 += 3, h2++) {
                  if (w[h2].newStrokeStyle || w[h2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), w[h2].newStrokeStyle && (b.strokeStyle = w[h2].newStrokeStyle), w[h2].newLineDashArray && b.setLineDash(w[h2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
                f2 = t2(w, 2);
                b.moveTo(f2[0].x, f2[0].y);
                for (h2 = g2 = 0; g2 < f2.length - 3; g2 += 3, h2++) {
                  if (w[h2].newStrokeStyle || w[h2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), w[h2].newStrokeStyle && (b.strokeStyle = w[h2].newStrokeStyle), w[h2].newLineDashArray && b.setLineDash(w[h2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
                b.stroke();
              }
              b.beginPath();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = [], r = this.plotArea;
            b.save();
            v && e.save();
            b.beginPath();
            b.rect(r.x1, r.y1, r.width, r.height);
            b.clip();
            v && (e.beginPath(), e.rect(r.x1, r.y1, r.width, r.height), e.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var n2 = a.dataSeriesIndexes[d2], k = this.data[n2], m = k.dataPoints, h = k.id;
              this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: n2 };
              h = O(h);
              e.fillStyle = h;
              var h = [], p = 0, q, f, l2, w = [], y = [];
              if (0 < m.length) {
                var s = k._colorSet[p % k._colorSet.length], z = k.lineColor = k.options.lineColor || s, u = z;
                b.fillStyle = s;
                b.lineWidth = k.lineThickness;
                var E = "solid", B;
                if (b.setLineDash) {
                  var C = H(k.nullDataLineDashType, k.lineThickness), E = k.lineDashType;
                  B = H(E, k.lineThickness);
                }
                for (f = false; p < m.length; p++)
                  if (q = m[p].x.getTime ? m[p].x.getTime() : m[p].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !f)))
                    if (null !== m[p].y && m[p].y.length && "number" === typeof m[p].y[0] && "number" === typeof m[p].y[1]) {
                      q = a.axisX.convertValueToPixel(q);
                      f = a.axisY.convertValueToPixel(m[p].y[0]);
                      l2 = a.axisY.convertValueToPixel(m[p].y[1]);
                      var A3 = k.dataPointIds[p];
                      this._eventManager.objectMap[A3] = { id: A3, objectType: "dataPoint", dataSeriesIndex: n2, dataPointIndex: p, x1: q, y1: f, y2: l2 };
                      w[w.length] = { x: q, y: f };
                      y[y.length] = { x: q, y: l2 };
                      p < m.length - 1 && (u !== (m[p].lineColor || z) || E !== (m[p].lineDashType || k.lineDashType)) && (u = m[p].lineColor || z, w[w.length - 1].newStrokeStyle = u, b.setLineDash && (m[p].lineDashType ? (E = m[p].lineDashType, w[w.length - 1].newLineDashArray = H(E, k.lineThickness)) : (E = k.lineDashType, w[w.length - 1].newLineDashArray = B)));
                      if (0 !== m[p].markerSize && (0 < m[p].markerSize || 0 < k.markerSize)) {
                        var D2 = k.getMarkerProperties(p, q, f, b);
                        h.push(D2);
                        var K = O(A3);
                        v && h.push({ x: q, y: f, ctx: e, type: D2.type, size: D2.size, color: K, borderColor: K, borderThickness: D2.borderThickness });
                        D2 = k.getMarkerProperties(p, q, l2, b);
                        h.push(D2);
                        K = O(A3);
                        v && h.push({ x: q, y: l2, ctx: e, type: D2.type, size: D2.size, color: K, borderColor: K, borderThickness: D2.borderThickness });
                      }
                      if (m[p].indexLabel || k.indexLabel || m[p].indexLabelFormatter || k.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[p], dataSeries: k, indexKeyword: 0, point: { x: q, y: f }, direction: m[p].y[0] <= m[p].y[1] ? -1 : 1, color: s }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[p], dataSeries: k, indexKeyword: 1, point: { x: q, y: l2 }, direction: m[p].y[0] <= m[p].y[1] ? 1 : -1, color: s });
                      f = false;
                    } else
                      0 < p && !f && (k.connectNullData ? b.setLineDash && (0 < w.length && (k.options.nullDataLineDashType || !m[p - 1].lineDashType)) && (w[w.length - 1].newLineDashArray = C, E = k.nullDataLineDashType) : (g(B, z), w = [], y = [])), f = true;
                g(B, z);
                Y.drawMarkers(h);
              }
            }
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: N.xClipAnimation, easingFunction: N.easing.linear, animationBase: 0 };
          }
        };
        l.prototype.renderWaterfall = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx, e = null, h = this.plotArea, r = 0, d2, n2, k, m, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), r = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            n2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
            var q = a.axisX.dataInfo.minDiff;
            isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
            q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (h.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && r > n2 && (r = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n2));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n2 < r) && (n2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, r));
            q < r && (q = r);
            q > n2 && (q = n2);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(h.x1, h.y1, h.width, h.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
            for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
              var l2 = a.dataSeriesIndexes[f], w = this.data[l2], y = w.dataPoints, e = w._colorSet[0];
              w.risingColor = w.options.risingColor ? w.options.risingColor : e;
              w.fallingColor = w.options.fallingColor ? w.options.fallingColor : "#e40a0a";
              var s = "number" === typeof w.options.lineThickness ? Math.round(w.lineThickness) : 1, z = 1 === Math.round(s) % 2 ? -0.5 : 0;
              if (0 < y.length)
                for (var u = 5 < q && w.bevelEnabled ? true : false, t3 = false, B = null, C = null, r = 0; r < y.length; r++)
                  if (y[r].getTime ? m = y[r].x.getTime() : m = y[r].x, "number" !== typeof y[r].y) {
                    if (0 < r && !t3 && w.connectNullData)
                      var A3 = w.options.nullDataLineDashType || !y[r - 1].lineDashType ? w.nullDataLineDashType : y[r - 1].lineDashType;
                    t3 = true;
                  } else {
                    d2 = a.axisX.convertValueToPixel(m);
                    n2 = 0 === w.dataPointEOs[r].cumulativeSum ? p : a.axisY.convertValueToPixel(w.dataPointEOs[r].cumulativeSum);
                    k = 0 === w.dataPointEOs[r].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(w.dataPointEOs[r].cumulativeSumYStartValue);
                    d2 = a.axisX.reversed ? d2 + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + f) * q << 0 : d2 - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + f) * q << 0;
                    var D2 = a.axisX.reversed ? d2 - q << 0 : d2 + q << 0;
                    n2 > k && (e = n2, n2 = k, k = e);
                    a.axisY.reversed && (e = n2, n2 = k, k = e);
                    e = w.dataPointIds[r];
                    this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: r, x1: d2, y1: n2, x2: D2, y2: k };
                    var K = y[r].color ? y[r].color : 0 < y[r].y ? w.risingColor : w.fallingColor;
                    ba(c, a.axisX.reversed ? D2 : d2, a.axisY.reversed ? k : n2, a.axisX.reversed ? d2 : D2, a.axisY.reversed ? n2 : k, K, 0, K, u, u, false, false, w.fillOpacity);
                    e = O(e);
                    v && ba(this._eventManager.ghostCtx, a.axisX.reversed ? D2 : d2, n2, a.axisX.reversed ? d2 : D2, k, e, 0, null, false, false, false, false);
                    var U, K = d2;
                    U = "undefined" !== typeof y[r].isIntermediateSum && true === y[r].isIntermediateSum || "undefined" !== typeof y[r].isCumulativeSum && true === y[r].isCumulativeSum ? 0 < y[r].y ? n2 : k : 0 < y[r].y ? k : n2;
                    0 < r && B && (!t3 || w.connectNullData) && (t3 && c.setLineDash && c.setLineDash(H(A3, s)), c.beginPath(), c.moveTo(B, C - z), c.lineTo(K, U - z), 0 < s && c.stroke(), v && (b.beginPath(), b.moveTo(B, C - z), b.lineTo(K, U - z), 0 < s && b.stroke()));
                    t3 = false;
                    B = D2;
                    C = 0 < y[r].y ? n2 : k;
                    K = y[r].lineDashType ? y[r].lineDashType : w.options.lineDashType ? w.options.lineDashType : "shortDash";
                    c.strokeStyle = y[r].lineColor ? y[r].lineColor : w.options.lineColor ? w.options.lineColor : "#9e9e9e";
                    c.lineWidth = s;
                    c.setLineDash && (K = H(K, s), c.setLineDash(K));
                    (y[r].indexLabel || w.indexLabel || y[r].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({ chartType: "waterfall", dataPoint: y[r], dataSeries: w, point: { x: d2 + (D2 - d2) / 2, y: 0 <= y[r].y ? n2 : k }, direction: 0 > y[r].y === a.axisY.reversed ? 1 : -1, bounds: { x1: d2, y1: Math.min(n2, k), x2: D2, y2: Math.max(n2, k) }, color: e });
                  }
            }
            v && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: N.fadeInAnimation,
              easingFunction: N.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        var ja2 = function(a, g, c, b, e, h, r, d2, n2) {
          if (!(0 > c)) {
            "undefined" === typeof d2 && (d2 = 1);
            if (!v) {
              var k = Number((r % (2 * Math.PI)).toFixed(8));
              Number((h % (2 * Math.PI)).toFixed(8)) === k && (r -= 1e-4);
            }
            a.save();
            a.globalAlpha = d2;
            "pie" === e ? (a.beginPath(), a.moveTo(g.x, g.y), a.arc(g.x, g.y, c, h, r, false), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(g.x, g.y, c, h, r, false), 0 <= n2 && a.arc(g.x, g.y, n2 * c, r, h, true), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore();
          }
        };
        l.prototype.renderPie = function(a) {
          function g() {
            if (k && m) {
              var a2 = 0, b2 = 0, c2 = 0, e2 = 0;
              n(k.options.indexLabelMaxWidth) && (k.indexLabelMaxWidth = 0.33 * q.width);
              for (var g2 = 0; g2 < m.length; g2++) {
                var h2 = m[g2], r2 = k.dataPointIds[g2];
                f[g2].id = r2;
                f[g2].objectType = "dataPoint";
                f[g2].dataPointIndex = g2;
                f[g2].dataSeriesIndex = 0;
                var d3 = f[g2], p2 = { percent: null, total: null }, x = null, p2 = l2.getPercentAndTotal(k, h2);
                if (k.indexLabelFormatter || h2.indexLabelFormatter)
                  x = {
                    chart: l2.options,
                    dataSeries: k,
                    dataPoint: h2,
                    total: p2.total,
                    percent: p2.percent
                  };
                p2 = h2.indexLabelFormatter ? h2.indexLabelFormatter(x) : h2.indexLabel ? l2.replaceKeywordsWithValue(h2.indexLabel, h2, k, g2) : k.indexLabelFormatter ? k.indexLabelFormatter(x) : k.indexLabel ? l2.replaceKeywordsWithValue(k.indexLabel, h2, k, g2) : h2.label ? h2.label : "";
                l2._eventManager.objectMap[r2] = d3;
                d3.center = { x: u.x, y: u.y };
                d3.y = h2.y;
                d3.radius = C;
                d3.percentInnerRadius = D2;
                d3.indexLabelText = p2;
                d3.indexLabelPlacement = k.indexLabelPlacement;
                d3.indexLabelLineColor = h2.indexLabelLineColor ? h2.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : h2.color ? h2.color : k._colorSet[g2 % k._colorSet.length];
                d3.indexLabelLineThickness = n(h2.indexLabelLineThickness) ? k.indexLabelLineThickness : h2.indexLabelLineThickness;
                d3.indexLabelLineDashType = h2.indexLabelLineDashType ? h2.indexLabelLineDashType : k.indexLabelLineDashType;
                d3.indexLabelFontColor = h2.indexLabelFontColor ? h2.indexLabelFontColor : k.indexLabelFontColor;
                d3.indexLabelFontStyle = h2.indexLabelFontStyle ? h2.indexLabelFontStyle : k.indexLabelFontStyle;
                d3.indexLabelFontWeight = h2.indexLabelFontWeight ? h2.indexLabelFontWeight : k.indexLabelFontWeight;
                d3.indexLabelFontSize = n(h2.indexLabelFontSize) ? k.indexLabelFontSize : h2.indexLabelFontSize;
                d3.indexLabelFontFamily = h2.indexLabelFontFamily ? h2.indexLabelFontFamily : k.indexLabelFontFamily;
                d3.indexLabelBackgroundColor = h2.indexLabelBackgroundColor ? h2.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                d3.indexLabelMaxWidth = h2.indexLabelMaxWidth ? h2.indexLabelMaxWidth : k.indexLabelMaxWidth;
                d3.indexLabelWrap = "undefined" !== typeof h2.indexLabelWrap ? h2.indexLabelWrap : k.indexLabelWrap;
                d3.indexLabelTextAlign = h2.indexLabelTextAlign ? h2.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                d3.startAngle = 0 === g2 ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : f[g2 - 1].endAngle;
                d3.startAngle = (d3.startAngle + 2 * Math.PI) % (2 * Math.PI);
                d3.endAngle = d3.startAngle + 2 * Math.PI / t3 * Math.abs(h2.y);
                h2 = (d3.endAngle + d3.startAngle) / 2;
                h2 = (h2 + 2 * Math.PI) % (2 * Math.PI);
                d3.midAngle = h2;
                if (d3.midAngle > Math.PI / 2 - s && d3.midAngle < Math.PI / 2 + s) {
                  if (0 === a2 || f[c2].midAngle > d3.midAngle)
                    c2 = g2;
                  a2++;
                } else if (d3.midAngle > 3 * Math.PI / 2 - s && d3.midAngle < 3 * Math.PI / 2 + s) {
                  if (0 === b2 || f[e2].midAngle > d3.midAngle)
                    e2 = g2;
                  b2++;
                }
                d3.hemisphere = h2 > Math.PI / 2 && h2 <= 3 * Math.PI / 2 ? "left" : "right";
                d3.indexLabelTextBlock = new ka(l2.plotArea.ctx, { fontSize: d3.indexLabelFontSize, fontFamily: d3.indexLabelFontFamily, fontColor: d3.indexLabelFontColor, fontStyle: d3.indexLabelFontStyle, fontWeight: d3.indexLabelFontWeight, textAlign: d3.indexLabelTextAlign, backgroundColor: d3.indexLabelBackgroundColor, maxWidth: d3.indexLabelMaxWidth, maxHeight: d3.indexLabelWrap ? 5 * d3.indexLabelFontSize : 1.5 * d3.indexLabelFontSize, text: d3.indexLabelText, padding: 0, textBaseline: "middle" });
                d3.indexLabelTextBlock.measureText();
              }
              r2 = h2 = 0;
              p2 = false;
              for (g2 = 0; g2 < m.length; g2++)
                d3 = f[(c2 + g2) % m.length], 1 < a2 && (d3.midAngle > Math.PI / 2 - s && d3.midAngle < Math.PI / 2 + s) && (h2 <= a2 / 2 && !p2 ? (d3.hemisphere = "right", h2++) : (d3.hemisphere = "left", p2 = true));
              p2 = false;
              for (g2 = 0; g2 < m.length; g2++)
                d3 = f[(e2 + g2) % m.length], 1 < b2 && (d3.midAngle > 3 * Math.PI / 2 - s && d3.midAngle < 3 * Math.PI / 2 + s) && (r2 <= b2 / 2 && !p2 ? (d3.hemisphere = "left", r2++) : (d3.hemisphere = "right", p2 = true));
            }
          }
          function c(a2, b2) {
            var c2 = l2.plotArea.ctx;
            c2.clearRect(q.x1, q.y1, q.width, q.height);
            c2.fillStyle = l2.backgroundColor;
            c2.fillRect(q.x1, q.y1, q.width, q.height);
            for (c2 = 0; c2 < m.length; c2++) {
              var g2 = f[c2].startAngle, e2 = f[c2].endAngle;
              if (e2 > g2) {
                var h2 = 0.07 * C * Math.cos(f[c2].midAngle), d3 = 0.07 * C * Math.sin(f[c2].midAngle), r2 = false;
                if (m[c2].exploded) {
                  if (1e-9 < Math.abs(f[c2].center.x - (u.x + h2)) || 1e-9 < Math.abs(f[c2].center.y - (u.y + d3)))
                    f[c2].center.x = u.x + h2 * a2, f[c2].center.y = u.y + d3 * a2, r2 = true;
                } else if (0 < Math.abs(f[c2].center.x - u.x) || 0 < Math.abs(f[c2].center.y - u.y))
                  f[c2].center.x = u.x + h2 * (1 - a2), f[c2].center.y = u.y + d3 * (1 - a2), r2 = true;
                r2 && b2 && (h2 = {}, h2.dataSeries = k, h2.dataPoint = k.dataPoints[c2], h2.index = c2, l2.toolTip.highlightObjects([h2]));
                ja2(l2.plotArea.ctx, f[c2].center, f[c2].radius, m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length], k.type, g2, e2, k.fillOpacity, f[c2].percentInnerRadius);
              }
            }
            c2 = l2.plotArea.ctx;
            c2.save();
            c2.fillStyle = "black";
            c2.strokeStyle = "grey";
            c2.textBaseline = "middle";
            c2.lineJoin = "round";
            for (g2 = g2 = 0; g2 < m.length; g2++)
              e2 = f[g2], e2.indexLabelText && (e2.indexLabelTextBlock.y -= e2.indexLabelTextBlock.height / 2 - e2.indexLabelTextBlock.fontSize / 2, h2 = 0, h2 = "left" === e2.hemisphere ? "inside" !== k.indexLabelPlacement ? -(e2.indexLabelTextBlock.width + p) : -e2.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? p : -e2.indexLabelTextBlock.width / 2, e2.indexLabelTextBlock.x += h2, e2.indexLabelTextBlock.render(true), e2.indexLabelTextBlock.x -= h2, e2.indexLabelTextBlock.y += e2.indexLabelTextBlock.height / 2 - e2.indexLabelTextBlock.fontSize / 2, "inside" !== e2.indexLabelPlacement && 0 < e2.indexLabelLineThickness && (h2 = e2.center.x + C * Math.cos(e2.midAngle), d3 = e2.center.y + C * Math.sin(e2.midAngle), c2.strokeStyle = e2.indexLabelLineColor, c2.lineWidth = e2.indexLabelLineThickness, c2.setLineDash && c2.setLineDash(H(e2.indexLabelLineDashType, e2.indexLabelLineThickness)), c2.beginPath(), c2.moveTo(h2, d3), c2.lineTo(e2.indexLabelTextBlock.x, e2.indexLabelTextBlock.y), c2.lineTo(e2.indexLabelTextBlock.x + ("left" === e2.hemisphere ? -p : p), e2.indexLabelTextBlock.y), c2.stroke()), c2.lineJoin = "miter");
            c2.save();
          }
          function b(a2, b2) {
            var c2 = 0, c2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, e2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, f2 = b2.indexLabelTextBlock.y - b2.indexLabelTextBlock.height / 2, g2 = b2.indexLabelTextBlock.y + b2.indexLabelTextBlock.height / 2;
            return c2 = b2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? f2 - e2 : c2 - g2;
          }
          function e(a2) {
            for (var c2 = null, e2 = 1; e2 < m.length; e2++)
              if (c2 = (a2 + e2 + f.length) % f.length, f[c2].hemisphere !== f[a2].hemisphere) {
                c2 = null;
                break;
              } else if (f[c2].indexLabelText && c2 !== a2 && (0 > b(f[c2], f[a2]) || ("right" === f[a2].hemisphere ? f[c2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y : f[c2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y)))
                break;
              else
                c2 = null;
            return c2;
          }
          function h(a2, c2, g2) {
            g2 = (g2 || 0) + 1;
            if (1e3 < g2)
              return 0;
            c2 = c2 || 0;
            var d3 = 0, r2 = u.y - 1 * w, k2 = u.y + 1 * w;
            if (0 <= a2 && a2 < m.length) {
              var p2 = f[a2];
              if (0 > c2 && p2.indexLabelTextBlock.y < r2 || 0 < c2 && p2.indexLabelTextBlock.y > k2)
                return 0;
              var q2 = 0, n2 = 0, n2 = q2 = q2 = 0;
              0 > c2 ? p2.indexLabelTextBlock.y - p2.indexLabelTextBlock.height / 2 > r2 && p2.indexLabelTextBlock.y - p2.indexLabelTextBlock.height / 2 + c2 < r2 && (c2 = -(r2 - (p2.indexLabelTextBlock.y - p2.indexLabelTextBlock.height / 2 + c2))) : p2.indexLabelTextBlock.y + p2.indexLabelTextBlock.height / 2 < r2 && p2.indexLabelTextBlock.y + p2.indexLabelTextBlock.height / 2 + c2 > k2 && (c2 = p2.indexLabelTextBlock.y + p2.indexLabelTextBlock.height / 2 + c2 - k2);
              c2 = p2.indexLabelTextBlock.y + c2;
              r2 = 0;
              r2 = "right" === p2.hemisphere ? u.x + Math.sqrt(Math.pow(w, 2) - Math.pow(c2 - u.y, 2)) : u.x - Math.sqrt(Math.pow(w, 2) - Math.pow(c2 - u.y, 2));
              n2 = u.x + C * Math.cos(p2.midAngle);
              q2 = u.y + C * Math.sin(p2.midAngle);
              q2 = Math.sqrt(Math.pow(r2 - n2, 2) + Math.pow(c2 - q2, 2));
              n2 = Math.acos(C / w);
              q2 = Math.acos((w * w + C * C - q2 * q2) / (2 * C * w));
              c2 = q2 < n2 ? c2 - p2.indexLabelTextBlock.y : 0;
              r2 = null;
              for (k2 = 1; k2 < m.length; k2++)
                if (r2 = (a2 - k2 + f.length) % f.length, f[r2].hemisphere !== f[a2].hemisphere) {
                  r2 = null;
                  break;
                } else if (f[r2].indexLabelText && f[r2].hemisphere === f[a2].hemisphere && r2 !== a2 && (0 > b(f[r2], f[a2]) || ("right" === f[a2].hemisphere ? f[r2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y : f[r2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y)))
                  break;
                else
                  r2 = null;
              n2 = r2;
              q2 = e(a2);
              k2 = r2 = 0;
              0 > c2 ? (k2 = "right" === p2.hemisphere ? n2 : q2, d3 = c2, null !== k2 && (n2 = -c2, c2 = p2.indexLabelTextBlock.y - p2.indexLabelTextBlock.height / 2 - (f[k2].indexLabelTextBlock.y + f[k2].indexLabelTextBlock.height / 2), c2 - n2 < v2 && (r2 = -n2, k2 = h(k2, r2, g2 + 1), +k2.toFixed(z) > +r2.toFixed(z) && (d3 = c2 > v2 ? -(c2 - v2) : -(n2 - (k2 - r2)))))) : 0 < c2 && (k2 = "right" === p2.hemisphere ? q2 : n2, d3 = c2, null !== k2 && (n2 = c2, c2 = f[k2].indexLabelTextBlock.y - f[k2].indexLabelTextBlock.height / 2 - (p2.indexLabelTextBlock.y + p2.indexLabelTextBlock.height / 2), c2 - n2 < v2 && (r2 = n2, k2 = h(k2, r2, g2 + 1), +k2.toFixed(z) < +r2.toFixed(z) && (d3 = c2 > v2 ? c2 - v2 : n2 - (r2 - k2)))));
              d3 && (g2 = p2.indexLabelTextBlock.y + d3, c2 = 0, c2 = "right" === p2.hemisphere ? u.x + Math.sqrt(Math.pow(w, 2) - Math.pow(g2 - u.y, 2)) : u.x - Math.sqrt(Math.pow(w, 2) - Math.pow(g2 - u.y, 2)), p2.midAngle > Math.PI / 2 - s && p2.midAngle < Math.PI / 2 + s ? (r2 = (a2 - 1 + f.length) % f.length, r2 = f[r2], a2 = f[(a2 + 1 + f.length) % f.length], "left" === p2.hemisphere && "right" === r2.hemisphere && c2 > r2.indexLabelTextBlock.x ? c2 = r2.indexLabelTextBlock.x - 15 : "right" === p2.hemisphere && ("left" === a2.hemisphere && c2 < a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x + 15)) : p2.midAngle > 3 * Math.PI / 2 - s && p2.midAngle < 3 * Math.PI / 2 + s && (r2 = (a2 - 1 + f.length) % f.length, r2 = f[r2], a2 = f[(a2 + 1 + f.length) % f.length], "right" === p2.hemisphere && "left" === r2.hemisphere && c2 < r2.indexLabelTextBlock.x ? c2 = r2.indexLabelTextBlock.x + 15 : "left" === p2.hemisphere && ("right" === a2.hemisphere && c2 > a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x - 15)), p2.indexLabelTextBlock.y = g2, p2.indexLabelTextBlock.x = c2, p2.indexLabelAngle = Math.atan2(p2.indexLabelTextBlock.y - u.y, p2.indexLabelTextBlock.x - u.x));
            }
            return d3;
          }
          function r() {
            var a2 = l2.plotArea.ctx;
            a2.fillStyle = "grey";
            a2.strokeStyle = "grey";
            a2.font = "16px Arial";
            a2.textBaseline = "middle";
            for (var c2 = a2 = 0, g2 = 0, d3 = true, c2 = 0; 10 > c2 && (1 > c2 || 0 < g2); c2++) {
              if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && C - g2 <= A3)
                d3 = false;
              d3 && (C -= g2);
              g2 = 0;
              if ("inside" !== k.indexLabelPlacement) {
                w = C * y;
                for (a2 = 0; a2 < m.length; a2++) {
                  var r2 = f[a2];
                  r2.indexLabelTextBlock.x = u.x + w * Math.cos(r2.midAngle);
                  r2.indexLabelTextBlock.y = u.y + w * Math.sin(r2.midAngle);
                  r2.indexLabelAngle = r2.midAngle;
                  r2.radius = C;
                  r2.percentInnerRadius = D2;
                }
                for (var n2, s2, a2 = 0; a2 < m.length; a2++) {
                  var r2 = f[a2], x = e(a2);
                  if (null !== x) {
                    n2 = f[a2];
                    s2 = f[x];
                    var t4 = 0, t4 = b(n2, s2) - v2;
                    if (0 > t4) {
                      for (var B2 = s2 = 0, E = 0; E < m.length; E++)
                        E !== a2 && f[E].hemisphere === r2.hemisphere && (f[E].indexLabelTextBlock.y < r2.indexLabelTextBlock.y ? s2++ : B2++);
                      s2 = t4 / (s2 + B2 || 1) * B2;
                      var B2 = -1 * (t4 - s2), H2 = E = 0;
                      "right" === r2.hemisphere ? (E = h(a2, s2), B2 = -1 * (t4 - E), H2 = h(x, B2), +H2.toFixed(z) < +B2.toFixed(z) && +E.toFixed(z) <= +s2.toFixed(z) && h(a2, -(B2 - H2))) : (E = h(x, s2), B2 = -1 * (t4 - E), H2 = h(a2, B2), +H2.toFixed(z) < +B2.toFixed(z) && +E.toFixed(z) <= +s2.toFixed(z) && h(x, -(B2 - H2)));
                    }
                  }
                }
              } else
                for (a2 = 0; a2 < m.length; a2++)
                  r2 = f[a2], w = "pie" === k.type ? 0.7 * C : 0.85 * C, x = u.x + w * Math.cos(r2.midAngle), s2 = u.y + w * Math.sin(r2.midAngle), r2.indexLabelTextBlock.x = x, r2.indexLabelTextBlock.y = s2;
              for (a2 = 0; a2 < m.length; a2++)
                if (r2 = f[a2], x = r2.indexLabelTextBlock.measureText(), 0 !== x.height && 0 !== x.width)
                  x = x = 0, "right" === r2.hemisphere ? (x = q.x2 - (r2.indexLabelTextBlock.x + r2.indexLabelTextBlock.width + p), x *= -1) : x = q.x1 - (r2.indexLabelTextBlock.x - r2.indexLabelTextBlock.width - p), 0 < x && (!d3 && r2.indexLabelText && (s2 = "right" === r2.hemisphere ? q.x2 - r2.indexLabelTextBlock.x : r2.indexLabelTextBlock.x - q.x1, 0.3 * r2.indexLabelTextBlock.maxWidth > s2 ? r2.indexLabelText = "" : r2.indexLabelTextBlock.maxWidth = 0.85 * s2, 0.3 * r2.indexLabelTextBlock.maxWidth < s2 && (r2.indexLabelTextBlock.x -= "right" === r2.hemisphere ? 2 : -2)), Math.abs(r2.indexLabelTextBlock.y - r2.indexLabelTextBlock.height / 2 - u.y) < C || Math.abs(r2.indexLabelTextBlock.y + r2.indexLabelTextBlock.height / 2 - u.y) < C) && (x /= Math.abs(Math.cos(r2.indexLabelAngle)), 9 < x && (x *= 0.3), x > g2 && (g2 = x)), x = x = 0, 0 < r2.indexLabelAngle && r2.indexLabelAngle < Math.PI ? (x = q.y2 - (r2.indexLabelTextBlock.y + r2.indexLabelTextBlock.height / 2 + 5), x *= -1) : x = q.y1 - (r2.indexLabelTextBlock.y - r2.indexLabelTextBlock.height / 2 - 5), 0 < x && (!d3 && r2.indexLabelText && (s2 = 0 < r2.indexLabelAngle && r2.indexLabelAngle < Math.PI ? -1 : 1, 0 === h(a2, x * s2) && h(a2, 2 * s2)), Math.abs(r2.indexLabelTextBlock.x - u.x) < C && (x /= Math.abs(Math.sin(r2.indexLabelAngle)), 9 < x && (x *= 0.3), x > g2 && (g2 = x)));
              var M = function(a3, b2, c3) {
                for (var e2 = [], g3 = 0; e2.push(f[b2]), b2 !== c3; b2 = (b2 + 1 + m.length) % m.length)
                  ;
                e2.sort(function(a4, b3) {
                  return a4.y - b3.y;
                });
                for (b2 = 0; b2 < e2.length; b2++)
                  if (c3 = e2[b2], g3 < 0.7 * a3)
                    g3 += c3.indexLabelTextBlock.height, c3.indexLabelTextBlock.text = "", c3.indexLabelText = "", c3.indexLabelTextBlock.measureText();
                  else
                    break;
              };
              (function() {
                for (var a3 = -1, c3 = -1, g3 = 0, h2 = false, r3 = 0; r3 < m.length; r3++)
                  if (h2 = false, n2 = f[r3], n2.indexLabelText) {
                    var d4 = e(r3);
                    if (null !== d4) {
                      var k2 = f[d4];
                      t4 = 0;
                      t4 = b(n2, k2);
                      var q2;
                      if (q2 = 0 > t4) {
                        q2 = n2.indexLabelTextBlock.x;
                        var l3 = n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2, s3 = n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2, x2 = k2.indexLabelTextBlock.y - k2.indexLabelTextBlock.height / 2, u2 = k2.indexLabelTextBlock.x + k2.indexLabelTextBlock.width, w2 = k2.indexLabelTextBlock.y + k2.indexLabelTextBlock.height / 2;
                        q2 = n2.indexLabelTextBlock.x + n2.indexLabelTextBlock.width < k2.indexLabelTextBlock.x - p || q2 > u2 + p || l3 > w2 + p || s3 < x2 - p ? false : true;
                      }
                      q2 ? (0 > a3 && (a3 = r3), d4 !== a3 && (c3 = d4, g3 += -t4), 0 === r3 % Math.max(m.length / 10, 3) && (h2 = true)) : h2 = true;
                      h2 && (0 < g3 && 0 <= a3 && 0 <= c3) && (M(g3, a3, c3), c3 = a3 = -1, g3 = 0);
                    }
                  }
                0 < g3 && M(g3, a3, c3);
              })();
            }
          }
          function d2() {
            l2.plotArea.layoutManager.reset();
            l2.title && (l2.title.dockInsidePlotArea || "center" === l2.title.horizontalAlign && "center" === l2.title.verticalAlign) && l2.title.render();
            if (l2.subtitles)
              for (var a2 = 0; a2 < l2.subtitles.length; a2++) {
                var b2 = l2.subtitles[a2];
                (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
              }
            l2.legend && (l2.legend.dockInsidePlotArea || "center" === l2.legend.horizontalAlign && "center" === l2.legend.verticalAlign) && (l2.legend.setLayout(), l2.legend.render());
          }
          var l2 = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]], m = k.dataPoints, p = 10, q = this.plotArea, f = k.dataPointEOs, v2 = 2, w, y = 1.3, s = 20 / 180 * Math.PI, z = 6, u = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 }, t3 = 0;
            a = false;
            for (var B = 0; B < m.length; B++)
              t3 += Math.abs(m[B].y), !a && ("undefined" !== typeof m[B].indexLabel && null !== m[B].indexLabel && 0 < m[B].indexLabel.toString().length) && (a = true), !a && ("undefined" !== typeof m[B].label && null !== m[B].label && 0 < m[B].label.toString().length) && (a = true);
            if (0 !== t3) {
              a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
              var C = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
              k.radius && (C = Va(k.radius, C));
              var A3 = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Va(k.innerRadius, C) : 0.7 * C;
              k.radius = C;
              "doughnut" === k.type && (k.innerRadius = A3);
              var D2 = Math.min(A3 / C, (C - 1) / C);
              this.pieDoughnutClickHandler = function(a2) {
                l2.isAnimating || !n(this.explodeOnClick) && !this.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && l2._animator.animate(0, 500, function(a3) {
                  c(a3, true);
                  d2();
                  l2.dispatchEvent("dataAnimationIterationEnd", { chart: l2 });
                  l2.dispatchEvent("dataAnimationEnd", { chart: l2 });
                }));
              };
              g();
              r();
              r();
              r();
              r();
              this.disableToolTip = true;
              this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
                var b2 = l2.plotArea.ctx;
                b2.clearRect(q.x1, q.y1, q.width, q.height);
                b2.fillStyle = l2.backgroundColor;
                b2.fillRect(
                  q.x1,
                  q.y1,
                  q.width,
                  q.height
                );
                for (var b2 = f[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < m.length; c2++) {
                  var g2 = 0 === c2 ? f[c2].startAngle : e2, e2 = g2 + (f[c2].endAngle - f[c2].startAngle), h2 = false;
                  e2 > b2 && (e2 = b2, h2 = true);
                  var r2 = m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length];
                  e2 > g2 && ja2(l2.plotArea.ctx, f[c2].center, f[c2].radius, r2, k.type, g2, e2, k.fillOpacity, f[c2].percentInnerRadius);
                  if (h2)
                    break;
                }
                d2();
                l2.dispatchEvent("dataAnimationIterationEnd", { chart: l2 });
                1 <= a2 && l2.dispatchEvent("dataAnimationEnd", { chart: l2 });
              }, function() {
                l2.disableToolTip = false;
                l2._animator.animate(
                  0,
                  l2.animatedRender ? 500 : 0,
                  function(a2) {
                    c(a2, false);
                    d2();
                    l2.dispatchEvent("dataAnimationIterationEnd", { chart: l2 });
                  }
                );
                l2.dispatchEvent("dataAnimationEnd", { chart: l2 });
              });
            }
          }
        };
        var ra2 = function(a, g, c, b) {
          "undefined" === typeof c && (c = 1);
          0 >= Math.round(g.y4 - g.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(g.x1), Math.round(g.y1)), a.lineTo(Math.round(g.x2), Math.round(g.y2)), a.lineTo(Math.round(g.x3), Math.round(g.y3)), a.lineTo(Math.round(g.x4), Math.round(g.y4)), "undefined" !== g.x5 && (a.lineTo(Math.round(g.x5), Math.round(g.y5)), a.lineTo(Math.round(g.x6), Math.round(g.y6))), a.closePath(), a.fillStyle = b ? b : g.color, a.fill(), a.globalAplha = 1, a.restore());
        };
        l.prototype.renderFunnel = function(a) {
          function g() {
            for (var a2 = 0, b2 = [], c2 = 0; c2 < z.length; c2++) {
              if ("undefined" === typeof z[c2].y)
                return -1;
              z[c2].y = "number" === typeof z[c2].y ? z[c2].y : 0;
              a2 += Math.abs(z[c2].y);
            }
            if (0 === a2)
              return -1;
            for (c2 = b2[0] = 0; c2 < z.length; c2++)
              b2.push(Math.abs(z[c2].y) * D2 / a2);
            return b2;
          }
          function c() {
            var a2 = W3, b2 = Z2, c2 = M, g2 = $, e2, f2;
            e2 = P2;
            f2 = R3 - O2;
            g2 = Math.abs((f2 - e2) * (b2 - a2 + (g2 - c2)) / 2);
            c2 = $ - M;
            e2 = f2 - e2;
            f2 = c2 * (f2 - R3);
            f2 = Math.abs(f2);
            f2 = g2 + f2;
            for (var g2 = [], h2 = 0, r2 = 0; r2 < z.length; r2++) {
              if ("undefined" === typeof z[r2].y)
                return -1;
              z[r2].y = "number" === typeof z[r2].y ? z[r2].y : 0;
              h2 += Math.abs(z[r2].y);
            }
            if (0 === h2)
              return -1;
            for (var d3 = g2[0] = 0, k2 = 0, m2, p2, b2 = b2 - a2, d3 = false, r2 = 0; r2 < z.length; r2++)
              a2 = Math.abs(z[r2].y) * f2 / h2, d3 ? m2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (p2 = ca3 * ca3 * b2 * b2 - 4 * Math.abs(ca3) * a2, 0 > p2 ? (p2 = c2, d3 = (b2 + p2) * (e2 - k2) / 2, a2 -= d3, m2 = e2 - k2, k2 += e2 - k2, m2 += 0 == p2 ? 0 : a2 / p2, k2 += a2 / p2, d3 = true) : (m2 = (Math.abs(ca3) * b2 - Math.sqrt(p2)) / 2, p2 = b2 - 2 * m2 / Math.abs(ca3), k2 += m2, k2 > e2 && (k2 -= m2, p2 = c2, d3 = (b2 + p2) * (e2 - k2) / 2, a2 -= d3, m2 = e2 - k2, k2 += e2 - k2, m2 += a2 / p2, k2 += a2 / p2, d3 = true), b2 = p2)), g2.push(m2);
            return g2;
          }
          function b() {
            if (s && z) {
              for (var a2, b2, c2, e2, g2, h2, r2, d3, k2, m2, p2, q2, l3, x, u2, w2 = [], t4 = [], I = { percent: null, total: null }, B2 = null, A4 = 0; A4 < z.length; A4++)
                u2 = Q[A4], u2 = "undefined" !== typeof u2.x5 ? (u2.y2 + u2.y4) / 2 : (u2.y2 + u2.y3) / 2, u2 = f(u2).x2 + 1, w2[A4] = L2 - u2 - S;
              u2 = 0.5 * S;
              for (var A4 = 0, C2 = z.length - 1; A4 < z.length || 0 <= C2; A4++, C2--) {
                b2 = s.reversed ? z[C2] : z[A4];
                a2 = b2.color ? b2.color : s.reversed ? s._colorSet[(z.length - 1 - A4) % s._colorSet.length] : s._colorSet[A4 % s._colorSet.length];
                c2 = b2.indexLabelPlacement || s.indexLabelPlacement || "outside";
                x = b2.indexLabelTextAlign || s.indexLabelTextAlign || "left";
                e2 = b2.indexLabelBackgroundColor || s.indexLabelBackgroundColor || (v ? "transparent" : null);
                g2 = b2.indexLabelFontColor || s.indexLabelFontColor || "#979797";
                h2 = n(b2.indexLabelFontSize) ? s.indexLabelFontSize : b2.indexLabelFontSize;
                r2 = b2.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
                d3 = b2.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
                k2 = b2.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
                a2 = b2.indexLabelLineColor || s.options.indexLabelLineColor || a2;
                m2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof s.indexLabelLineThickness ? s.indexLabelLineThickness : 2;
                p2 = b2.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
                q2 = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof s.indexLabelWrap ? s.indexLabelWrap : true;
                l3 = s.dataPointIds[A4];
                y._eventManager.objectMap[l3] = { id: l3, objectType: "dataPoint", dataPointIndex: A4, dataSeriesIndex: 0, funnelSection: Q[s.reversed ? z.length - 1 - A4 : A4] };
                "inside" === s.indexLabelPlacement && (w2[A4] = A4 !== da3 ? s.reversed ? Q[A4].x2 - Q[A4].x1 : Q[A4].x3 - Q[A4].x4 : Q[A4].x3 - Q[A4].x6, 20 > w2[A4] && (w2[A4] = A4 !== da3 ? s.reversed ? Q[A4].x3 - Q[A4].x4 : Q[A4].x2 - Q[A4].x1 : Q[A4].x2 - Q[A4].x1, w2[A4] /= 2));
                l3 = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth : w2[A4];
                if (l3 > w2[A4] || 0 > l3)
                  l3 = w2[A4];
                t4[A4] = "inside" === s.indexLabelPlacement ? q2 ? Math.max(Q[A4].height, h2) : 1.5 * h2 : false;
                I = y.getPercentAndTotal(s, b2);
                if (s.indexLabelFormatter || b2.indexLabelFormatter)
                  B2 = { chart: y.options, dataSeries: s, dataPoint: b2, total: I.total, percent: I.percent };
                b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(B2) : b2.indexLabel ? y.replaceKeywordsWithValue(b2.indexLabel, b2, s, A4) : s.indexLabelFormatter ? s.indexLabelFormatter(B2) : s.indexLabel ? y.replaceKeywordsWithValue(s.indexLabel, b2, s, A4) : b2.label ? b2.label : "";
                0 >= m2 && (m2 = 0);
                1e3 > l3 && 1e3 - l3 < u2 && (l3 += 1e3 - l3);
                n(s.options.indexLabelMaxWidth) && (s.indexLabelMaxWidth = n(s.indexLabelMaxWidth) ? l3 : Math.max(l3, s.indexLabelMaxWidth));
                T2.roundRect || Aa(T2);
                c2 = new ka(T2, { fontSize: h2, fontFamily: d3, fontColor: g2, fontStyle: r2, fontWeight: k2, horizontalAlign: c2, textAlign: x, backgroundColor: e2, maxWidth: l3, maxHeight: false === t4[A4] ? q2 ? 4.28571429 * h2 : 1.5 * h2 : t4[A4], text: b2, padding: ea3, textBaseline: "middle" });
                c2.measureText();
                c2.height = c2.height === 2 * c2.padding ? 0 : c2.height;
                c2.width = c2.width === 2 * c2.padding ? 0 : c2.width;
                G.push({ textBlock: c2, id: s.reversed ? C2 : A4, isDirty: false, lineColor: a2, lineThickness: m2, lineDashType: p2, height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight, width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth });
              }
            }
          }
          function e() {
            var a2, b2, c2, e2, g2, f2 = [];
            g2 = false;
            c2 = 0;
            for (var h2, r2 = L2 - Z2 - S / 2, r2 = s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth > r2 ? r2 : s.indexLabelMaxWidth : r2, d3 = G.length - 1; 0 <= d3; d3--) {
              h2 = z[G[d3].id];
              c2 = G[d3];
              e2 = c2.textBlock;
              b2 = (a2 = q(d3) < Q.length ? G[q(d3)] : null) ? a2.textBlock : null;
              c2 = c2.height;
              a2 && e2.y + c2 + ea3 > b2.y && (g2 = true);
              c2 = h2.indexLabelMaxWidth || r2;
              if (c2 > r2 || 0 > c2)
                c2 = r2;
              f2.push(c2);
            }
            if (g2)
              for (d3 = G.length - 1; 0 <= d3; d3--)
                a2 = Q[d3], G[d3].textBlock.maxWidth = f2[f2.length - (d3 + 1)], G[d3].textBlock.measureText(), G[d3].textBlock.height = G[d3].textBlock.height === 2 * G[d3].textBlock.padding ? 0 : G[d3].textBlock.height, G[d3].textBlock.width = G[d3].textBlock.width === 2 * G[d3].textBlock.padding ? 0 : G[d3].textBlock.width, G[d3].textBlock.x = L2 - r2, c2 = G[d3].textBlock.height < G[d3].textBlock.maxHeight ? G[d3].textBlock.height : G[d3].textBlock.maxHeight, g2 = G[d3].textBlock.width < G[d3].textBlock.maxWidth ? G[d3].textBlock.width : G[d3].textBlock.maxWidth, G[d3].height = c2, G[d3].width = g2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, G[d3].textBlock.y = c2 - G[d3].height / 2, s.reversed ? (G[d3].textBlock.y + G[d3].height > V + A3 && (G[d3].textBlock.y = V + A3 - G[d3].height), G[d3].textBlock.y < ua - A3 && (G[d3].textBlock.y = ua - A3)) : (G[d3].textBlock.y < V - A3 && (G[d3].textBlock.y = V - A3), G[d3].textBlock.y + G[d3].height > ua + A3 && (G[d3].textBlock.y = ua + A3 - G[d3].height));
          }
          function h() {
            var a2, b2, c2, g2;
            if ("inside" !== s.indexLabelPlacement)
              for (var e2 = 0; e2 < Q.length; e2++)
                0 == G[e2].textBlock.text.length ? G[e2].isDirty = true : (a2 = Q[e2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = s.reversed ? "undefined" !== typeof a2.x5 ? c2 > Y2 ? f(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < Y2 ? f(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, G[e2].textBlock.x = b2 + S, G[e2].textBlock.y = c2 - G[e2].height / 2, s.reversed ? (G[e2].textBlock.y + G[e2].height > V + A3 && (G[e2].textBlock.y = V + A3 - G[e2].height), G[e2].textBlock.y < ua - A3 && (G[e2].textBlock.y = ua - A3)) : (G[e2].textBlock.y < V - A3 && (G[e2].textBlock.y = V - A3), G[e2].textBlock.y + G[e2].height > ua + A3 && (G[e2].textBlock.y = ua + A3 - G[e2].height)));
            else
              for (e2 = 0; e2 < Q.length; e2++)
                0 == G[e2].textBlock.text.length ? G[e2].isDirty = true : (a2 = Q[e2], b2 = a2.height, c2 = G[e2].height, g2 = G[e2].width, b2 >= c2 ? (b2 = e2 != da3 ? (a2.x4 + a2.x3) / 2 - g2 / 2 : (a2.x5 + a2.x4) / 2 - g2 / 2, c2 = e2 != da3 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, G[e2].textBlock.x = b2, G[e2].textBlock.y = c2) : G[e2].isDirty = true);
          }
          function r() {
            function a2(b3, c3) {
              var e3;
              if (0 > b3 || b3 >= G.length)
                return 0;
              var g3, f3 = G[b3].textBlock;
              if (0 > c3) {
                c3 *= -1;
                g3 = p(b3);
                e3 = d2(g3, b3);
                if (e3 >= c3)
                  return f3.y -= c3, c3;
                if (0 == b3)
                  return 0 < e3 && (f3.y -= e3), e3;
                e3 += a2(g3, -(c3 - e3));
                0 < e3 && (f3.y -= e3);
                return e3;
              }
              g3 = q(b3);
              e3 = d2(b3, g3);
              if (e3 >= c3)
                return f3.y += c3, c3;
              if (b3 == Q.length - 1)
                return 0 < e3 && (f3.y += e3), e3;
              e3 += a2(g3, c3 - e3);
              0 < e3 && (f3.y += e3);
              return e3;
            }
            function b2() {
              var a3, e3, g3, f3, h3 = 0, r3;
              f3 = (R3 - P2 + 2 * A3) / m2;
              r3 = m2;
              for (var d3, k3 = 1; k3 < r3; k3++) {
                g3 = k3 * f3;
                for (var n3 = G.length - 1; 0 <= n3; n3--)
                  !G[n3].isDirty && (G[n3].textBlock.y < g3 && G[n3].textBlock.y + G[n3].height > g3) && (d3 = q(n3), !(d3 >= G.length - 1) && G[n3].textBlock.y + G[n3].height + ea3 > G[d3].textBlock.y && (G[n3].textBlock.y = G[n3].textBlock.y + G[n3].height - g3 > g3 - G[n3].textBlock.y ? g3 + 1 : g3 - G[n3].height - 1));
              }
              for (d3 = Q.length - 1; 0 < d3; d3--)
                if (!G[d3].isDirty) {
                  g3 = p(d3);
                  if (0 > g3 && (g3 = 0, G[g3].isDirty))
                    break;
                  if (G[d3].textBlock.y < G[g3].textBlock.y + G[g3].height) {
                    e3 = e3 || d3;
                    f3 = d3;
                    for (r3 = 0; G[f3].textBlock.y < G[g3].textBlock.y + G[g3].height + ea3; ) {
                      a3 = a3 || G[f3].textBlock.y + G[f3].height;
                      r3 += G[f3].height;
                      r3 += ea3;
                      f3 = g3;
                      if (0 >= f3) {
                        f3 = 0;
                        r3 += G[f3].height;
                        break;
                      }
                      g3 = p(f3);
                      if (0 > g3) {
                        f3 = 0;
                        r3 += G[f3].height;
                        break;
                      }
                    }
                    if (f3 != d3) {
                      h3 = G[f3].textBlock.y;
                      a3 -= h3;
                      a3 = r3 - a3;
                      h3 = c2(a3, e3, f3);
                      break;
                    }
                  }
                }
              return h3;
            }
            function c2(a3, b3, e3) {
              var g3 = [], f3 = 0, h3 = 0;
              for (a3 = Math.abs(a3); e3 <= b3; e3++)
                g3.push(Q[e3]);
              g3.sort(function(a4, b4) {
                return a4.height - b4.height;
              });
              for (e3 = 0; e3 < g3.length; e3++)
                if (b3 = g3[e3], f3 < a3)
                  h3++, f3 += G[b3.id].height + ea3, G[b3.id].textBlock.text = "", G[b3.id].indexLabelText = "", G[b3.id].isDirty = true, G[b3.id].textBlock.measureText();
                else
                  break;
              return h3;
            }
            for (var e2, g2, f2, h2, r2, k2, m2 = 1, n2 = 0; n2 < 2 * m2; n2++) {
              for (var l3 = G.length - 1; 0 <= l3 && !(0 <= p(l3) && p(l3), f2 = G[l3], h2 = f2.textBlock, k2 = (r2 = q(l3) < Q.length ? G[q(l3)] : null) ? r2.textBlock : null, e2 = +f2.height.toFixed(6), g2 = +h2.y.toFixed(6), !f2.isDirty && (r2 && g2 + e2 + ea3 > +k2.y.toFixed(6)) && (e2 = h2.y + e2 + ea3 - k2.y, g2 = a2(l3, -e2), g2 < e2 && (0 < g2 && (e2 -= g2), g2 = a2(q(l3), e2), g2 != e2))); l3--)
                ;
              b2();
            }
          }
          function d2(a2, b2) {
            return (b2 < Q.length ? G[b2].textBlock.y : s.reversed ? V + A3 : ua + A3) - (0 > a2 ? s.reversed ? ua - A3 : V - A3 : G[a2].textBlock.y + G[a2].height + ea3);
          }
          function l2(a2, b2, c2) {
            var e2, g2, f2, r2 = [], d3 = A3, p2 = [];
            -1 !== b2 && (0 <= X3.indexOf(b2) ? (g2 = X3.indexOf(b2), X3.splice(g2, 1)) : (X3.push(b2), X3 = X3.sort(function(a3, b3) {
              return a3 - b3;
            })));
            if (0 === X3.length)
              r2 = ja3;
            else {
              g2 = A3 * (1 != X3.length || 0 != X3[0] && X3[0] != Q.length - 1 ? 2 : 1) / k();
              for (var q2 = 0; q2 < Q.length; q2++) {
                if (1 == X3.length && 0 == X3[0]) {
                  if (0 === q2) {
                    r2.push(ja3[q2]);
                    e2 = d3;
                    continue;
                  }
                } else
                  0 === q2 && (e2 = -1 * d3);
                r2.push(ja3[q2] + e2);
                if (0 <= X3.indexOf(q2) || q2 < Q.length && 0 <= X3.indexOf(q2 + 1))
                  e2 += g2;
              }
            }
            f2 = function() {
              for (var a3 = [], b3 = 0; b3 < Q.length; b3++)
                a3.push(r2[b3] - Q[b3].y1);
              return a3;
            }();
            var n2 = { startTime: (/* @__PURE__ */ new Date()).getTime(), duration: c2 || 500, easingFunction: function(a3, b3, c3, e3) {
              return N.easing.easeOutQuart(a3, b3, c3, e3);
            }, changeSection: function(a3) {
              for (var b3, c3, e3 = 0; e3 < Q.length; e3++)
                b3 = f2[e3], c3 = Q[e3], b3 *= a3, "undefined" === typeof p2[e3] && (p2[e3] = 0), 0 > p2 && (p2 *= -1), c3.y1 += b3 - p2[e3], c3.y2 += b3 - p2[e3], c3.y3 += b3 - p2[e3], c3.y4 += b3 - p2[e3], c3.y5 && (c3.y5 += b3 - p2[e3], c3.y6 += b3 - p2[e3]), p2[e3] = b3;
            } };
            a2._animator.animate(0, c2, function(c3) {
              var e3 = a2.plotArea.ctx || a2.ctx;
              ia3 = true;
              e3.clearRect(u.x1, u.y1, u.x2 - u.x1, u.y2 - u.y1);
              e3.fillStyle = a2.backgroundColor;
              e3.fillRect(u.x1, u.y1, u.width, u.height);
              n2.changeSection(c3, b2);
              var g3 = {};
              g3.dataSeries = s;
              g3.dataPoint = s.reversed ? s.dataPoints[z.length - 1 - b2] : s.dataPoints[b2];
              g3.index = s.reversed ? z.length - 1 - b2 : b2;
              a2.toolTip.highlightObjects([g3]);
              for (g3 = 0; g3 < Q.length; g3++)
                ra2(e3, Q[g3], s.fillOpacity);
              w(e3);
              K && ("inside" !== s.indexLabelPlacement ? m(e3) : h(), t3(e3));
              1 <= c3 && (ia3 = false);
            }, null, N.easing.easeOutQuart);
          }
          function k() {
            for (var a2 = 0, b2 = 0; b2 < Q.length - 1; b2++)
              (0 <= X3.indexOf(b2) || 0 <= X3.indexOf(b2 + 1)) && a2++;
            return a2;
          }
          function m(a2) {
            for (var b2, c2, e2, g2, h2 = 0; h2 < Q.length; h2++)
              g2 = 1 === G[h2].lineThickness % 2 ? 0.5 : 0, c2 = ((Q[h2].y2 + Q[h2].y4) / 2 << 0) + g2, b2 = f(c2).x2 - 1, e2 = G[h2].textBlock.x, g2 = (G[h2].textBlock.y + G[h2].height / 2 << 0) + g2, G[h2].isDirty || 0 == G[h2].lineThickness || (a2.strokeStyle = G[h2].lineColor, a2.lineWidth = G[h2].lineThickness, a2.setLineDash && a2.setLineDash(H(G[h2].lineDashType, G[h2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(e2, g2), a2.stroke());
          }
          function p(a2) {
            for (a2 -= 1; -1 <= a2 && -1 != a2 && G[a2].isDirty; a2--)
              ;
            return a2;
          }
          function q(a2) {
            for (a2 += 1; a2 <= Q.length && a2 != Q.length && G[a2].isDirty; a2++)
              ;
            return a2;
          }
          function f(a2) {
            for (var b2, c2 = 0; c2 < z.length; c2++)
              if (Q[c2].y1 < a2 && Q[c2].y4 > a2) {
                b2 = Q[c2];
                break;
              }
            return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), { x1: a2, x2: a2 }) : -1;
          }
          function t3(a2) {
            for (var b2 = 0; b2 < Q.length; b2++)
              G[b2].isDirty || (a2 && (G[b2].textBlock.ctx = a2), G[b2].textBlock.y += G[b2].textBlock._lineHeight / 2, G[b2].textBlock.render(true), G[b2].textBlock.y -= G[b2].textBlock._lineHeight / 2);
          }
          function w(a2) {
            y.plotArea.layoutManager.reset();
            a2.roundRect || Aa(a2);
            y.title && (y.title.dockInsidePlotArea || "center" === y.title.horizontalAlign && "center" === y.title.verticalAlign) && (y.title.ctx = a2, y.title.render());
            if (y.subtitles)
              for (var b2 = 0; b2 < y.subtitles.length; b2++) {
                var c2 = y.subtitles[b2];
                if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign)
                  y.subtitles.ctx = a2, c2.render();
              }
            y.legend && (y.legend.dockInsidePlotArea || "center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign) && (y.legend.ctx = a2, y.legend.setLayout(), y.legend.render());
            wa.fNg && wa.fNg(y);
          }
          var y = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            for (var s = this.data[a.dataSeriesIndexes[0]], z = s.dataPoints, u = this.plotArea, A3 = 0.025 * u.width, B = 0.01 * u.width, C = 0, D2 = u.height - 2 * A3, J2 = Math.min(u.width - 2 * B, 2.8 * u.height), K = false, U = 0; U < z.length; U++)
              if (!K && ("undefined" !== typeof z[U].indexLabel && null !== z[U].indexLabel && 0 < z[U].indexLabel.toString().length) && (K = true), !K && ("undefined" !== typeof z[U].label && null !== z[U].label && 0 < z[U].label.toString().length) && (K = true), !K && "function" === typeof s.indexLabelFormatter || "function" === typeof z[U].indexLabelFormatter)
                K = true;
            K = K || "undefined" !== typeof s.indexLabel && null !== s.indexLabel && 0 < s.indexLabel.toString().length;
            "inside" !== s.indexLabelPlacement && K || (B = (u.width - 0.75 * J2) / 2);
            var U = u.x1 + B, L2 = u.x2 - B, P2 = u.y1 + A3, R3 = u.y2 - A3, T2 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
            if (0 != s.length && (s.dataPoints && s.visible) && 0 !== z.length) {
              var O2, F;
              a = 75 * J2 / 100;
              var S = 30 * (L2 - a) / 100;
              "funnel" === s.type ? (O2 = n(s.options.neckHeight) ? 0.35 * D2 : s.neckHeight, F = n(s.options.neckWidth) ? 0.25 * a : s.neckWidth, "string" === typeof O2 && O2.match(/%$/) ? (O2 = parseInt(O2), O2 = O2 * D2 / 100) : O2 = parseInt(O2), "string" === typeof F && F.match(/%$/) ? (F = parseInt(F), F = F * a / 100) : F = parseInt(F), O2 > D2 ? O2 = D2 : 0 >= O2 && (O2 = 0), F > a ? F = a - 0.5 : 0 >= F && (F = 0)) : "pyramid" === s.type && (F = O2 = 0, s.reversed = s.reversed ? false : true);
              var B = U + a / 2, W3 = U, Z2 = U + a, V = s.reversed ? R3 : P2, M = B - F / 2, $ = B + F / 2, Y2 = s.reversed ? P2 + O2 : R3 - O2, ua = s.reversed ? P2 : R3;
              F = s.valueRepresents = s.valueRepresents ? s.valueRepresents : "height";
              U = [];
              a = [];
              var Q = [], B = [], ba2 = P2, da3, ca3 = (Y2 - V) / (M - W3), ga2 = -ca3, J2 = "area" === F ? c() : g();
              if (-1 !== J2) {
                if (s.reversed)
                  for (B.push(ba2), F = J2.length - 1; 0 < F; F--)
                    ba2 += J2[F], B.push(ba2);
                else
                  for (F = 0; F < J2.length; F++)
                    ba2 += J2[F], B.push(ba2);
                if (s.reversed)
                  for (F = 0; F < J2.length; F++)
                    B[F] < Y2 ? (U.push(M), a.push($), da3 = F) : (U.push((B[F] - V + ca3 * W3) / ca3), a.push((B[F] - V + ga2 * Z2) / ga2));
                else
                  for (F = 0; F < J2.length; F++)
                    B[F] < Y2 ? (U.push((B[F] - V + ca3 * W3) / ca3), a.push((B[F] - V + ga2 * Z2) / ga2), da3 = F) : (U.push(M), a.push($));
                for (F = 0; F < J2.length - 1; F++)
                  ba2 = s.reversed ? z[z.length - 1 - F].color ? z[z.length - 1 - F].color : s._colorSet[(z.length - 1 - F) % s._colorSet.length] : z[F].color ? z[F].color : s._colorSet[F % s._colorSet.length], F === da3 ? Q.push({ x1: U[F], y1: B[F], x2: a[F], y2: B[F], x3: $, y3: Y2, x4: a[F + 1], y4: B[F + 1], x5: U[F + 1], y5: B[F + 1], x6: M, y6: Y2, id: F, height: B[F + 1] - B[F], color: ba2 }) : Q.push({ x1: U[F], y1: B[F], x2: a[F], y2: B[F], x3: a[F + 1], y3: B[F + 1], x4: U[F + 1], y4: B[F + 1], id: F, height: B[F + 1] - B[F], color: ba2 });
                var ea3 = 2, G = [], ia3 = false, X3 = [], ja3 = [], U = false;
                a = a = 0;
                Ea(X3);
                for (F = 0; F < z.length; F++)
                  z[F].exploded && (U = true, s.reversed ? X3.push(z.length - 1 - F) : X3.push(F));
                T2.clearRect(u.x1, u.y1, u.width, u.height);
                T2.fillStyle = y.backgroundColor;
                T2.fillRect(u.x1, u.y1, u.width, u.height);
                if (K && s.visible && (b(), h(), "inside" !== s.indexLabelPlacement)) {
                  e();
                  r();
                  for (F = 0; F < z.length; F++)
                    G[F].isDirty || (a = G[F].textBlock.x + G[F].width, a = (L2 - a) / 2, 0 == F && (C = a), C > a && (C = a));
                  for (F = 0; F < Q.length; F++)
                    Q[F].x1 += C, Q[F].x2 += C, Q[F].x3 += C, Q[F].x4 += C, Q[F].x5 && (Q[F].x5 += C, Q[F].x6 += C), G[F].textBlock.x += C;
                }
                for (F = 0; F < Q.length; F++)
                  C = Q[F], ra2(T2, C, s.fillOpacity), ja3.push(C.y1);
                w(T2);
                K && s.visible && ("inside" === s.indexLabelPlacement || y.animationEnabled || m(T2), y.animationEnabled || t3());
                if (!K)
                  for (F = 0; F < z.length; F++)
                    C = s.dataPointIds[F], a = { id: C, objectType: "dataPoint", dataPointIndex: F, dataSeriesIndex: 0, funnelSection: Q[s.reversed ? z.length - 1 - F : F] }, y._eventManager.objectMap[C] = a;
                !y.animationEnabled && U ? l2(y, -1, 0) : y.animationEnabled && !y.animatedRender && l2(y, -1, 0);
                this.funnelPyramidClickHandler = function(a2) {
                  var b2 = -1;
                  if (!ia3 && !y.isAnimating && (n(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = s.reversed ? z.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                    a2 = b2;
                    if ("funnel" === s.type || "pyramid" === s.type)
                      s.reversed ? z[z.length - 1 - a2].exploded = z[z.length - 1 - a2].exploded ? false : true : z[a2].exploded = z[a2].exploded ? false : true;
                    l2(y, b2, 500);
                  }
                };
                return { source: T2, dest: this.plotArea.ctx, animationCallback: function(a2, b2) {
                  N.fadeInAnimation(a2, b2);
                  1 <= a2 && (l2(y, -1, 500), w(y.plotArea.ctx || y.ctx));
                }, easingFunction: N.easing.easeInQuad, animationBase: 0 };
              }
            }
          }
        };
        l.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }();
        l.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        l.prototype.set = function(a, g, c) {
          c = "undefined" === typeof c ? true : c;
          "options" === a ? (this.options = g, c && this.render()) : l.base.set.call(this, a, g, c);
        };
        l.prototype.exportChart = function(a) {
          a = "undefined" === typeof a ? {} : a;
          var g = a.format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
          if (a.toDataURL)
            return this.canvas.toDataURL("image/" + g);
          var b = this.canvas;
          if (b && g && c) {
            c = c + "." + g;
            a = "image/" + g;
            var b = b.toDataURL(a), e = false, h = document.createElement("a");
            h.download = c;
            h.href = b;
            if ("undefined" !== typeof Blob && new Blob()) {
              for (var r = b.replace(/^data:[a-z\/]*;base64,/, ""), r = atob(r), d2 = new ArrayBuffer(r.length), d2 = new Uint8Array(d2), n2 = 0; n2 < r.length; n2++)
                d2[n2] = r.charCodeAt(n2);
              g = new Blob([d2.buffer], { type: "image/" + g });
              try {
                window.navigator.msSaveBlob(g, c), e = true;
              } catch (k) {
                h.dataset.downloadurl = [a, h.download, h.href].join(":"), h.href = window.URL.createObjectURL(g);
              }
            }
            if (!e)
              try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), h.dispatchEvent ? h.dispatchEvent(event) : h.fireEvent && h.fireEvent("onclick");
              } catch (m) {
                g = window.open(), g.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), g.document.close();
              }
          }
        };
        l.prototype.print = function() {
          var a = this.exportChart({ toDataURL: true }), g = document.createElement("iframe");
          g.setAttribute("class", "canvasjs-chart-print-frame");
          L(g, { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" });
          g.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(g);
          var c = this, b = g.contentWindow || g.contentDocument.document || g.contentDocument;
          b.document.open();
          b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
          b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
          b.document.close();
          setTimeout(function() {
            b.focus();
            b.print();
            setTimeout(function() {
              c._canvasJSContainer.removeChild(g);
            }, 1e3);
          }, 500);
        };
        l.prototype.getPercentAndTotal = function(a, g) {
          var c = null, b = null, e = c = null;
          if (0 <= a.type.indexOf("stacked"))
            b = 0, c = g.x.getTime ? g.x.getTime() : g.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], e = isNaN(g.y) ? 0 : 0 === c ? 0 : 100 * (g.y / c));
          else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
            for (c = b = 0; c < a.dataPoints.length; c++)
              isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
            e = isNaN(g.y) ? 0 : 100 * (g.y / b);
          }
          return { percent: e, total: b };
        };
        l.prototype.replaceKeywordsWithValue = function(a, g, c, b, e) {
          var h = this;
          e = "undefined" === typeof e ? 0 : e;
          if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var r = "#percent", d2 = "#total", n2 = this.getPercentAndTotal(c, g), d2 = isNaN(n2.total) ? d2 : n2.total, r = isNaN(n2.percent) ? r : n2.percent;
            do {
              n2 = "";
              if (c.percentFormatString)
                n2 = c.percentFormatString;
              else {
                var n2 = "#,##0.", k = Math.max(Math.ceil(Math.log(1 / Math.abs(r)) / Math.LN10), 2);
                if (isNaN(k) || !isFinite(k))
                  k = 2;
                for (var m = 0; m < k; m++)
                  n2 += "#";
                c.percentFormatString = n2;
              }
              a = a.replace("#percent", ga(r, n2, h._cultureInfo));
              a = a.replace("#total", ga(d2, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", h._cultureInfo));
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
          }
          return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a2) {
            if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1])
              return a2.slice(1, a2.length - 1);
            a2 = Ha(a2.slice(1, a2.length - 1));
            a2 = a2.replace("#index", e);
            var r2 = null;
            try {
              var f = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
              f && 0 < f.length && (r2 = Ha(f[2]), a2 = Ha(f[1]));
            } catch (d3) {
            }
            f = null;
            if ("color" === a2)
              return "waterfall" === c.type ? g.color ? g.color : 0 < g.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[r2 % c._colorSet.length] : g.color ? g.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
            if (g.hasOwnProperty(a2))
              f = g;
            else if (c.hasOwnProperty(a2))
              f = c;
            else
              return "";
            f = f[a2];
            null !== r2 && (f = f[r2]);
            return "x" === a2 ? (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || g.x && g.x.getTime) && !c.axisX.logarithmic ? Da(f, g.xValueFormatString ? g.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = h.axisX && h.axisX.autoValueFormatString ? h.axisX.autoValueFormatString : "DD MMM YY", h._cultureInfo) : ga(f, g.xValueFormatString ? g.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", h._cultureInfo) : "y" === a2 ? ga(f, g.yValueFormatString ? g.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", h._cultureInfo) : "z" === a2 ? ga(f, g.zValueFormatString ? g.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", h._cultureInfo) : f;
          });
        };
        qa(R2, Z);
        R2.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, g = a.layoutManager.getFreeSpace(), c = null, b = 0, e = 0, h = 0, r = 0, d2 = this.markerMargin = this.chart.options.legend && !n(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var l2 = [], k = [];
          if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
            this.orientation = "horizontal", c = this.verticalAlign, h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : g.width, r = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * g.height;
          else if ("center" === this.verticalAlign) {
            this.orientation = "vertical";
            if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign)
              c = this.horizontalAlign;
            h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * g.width;
            r = this.maxHeight = null !== this.maxHeight ? this.maxHeight : g.height;
          }
          this.errorMarkerColor = [];
          for (var m = 0; m < this.dataSeries.length; m++) {
            var p = this.dataSeries[m];
            if (p.dataPoints && p.dataPoints.length) {
              if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
                var q = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType : W2.getDefaultLegendMarker(p._linkedSeries.type) : W2.getDefaultLegendMarker(p.type) : p.markerType, f = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: null }) : p.name, v2 = p.legendMarkerColor = p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? n(p.whiskerColor) ? p._colorSet[0] : p.whiskerColor : p._colorSet[0], w = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight : 0, y = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor, s = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0;
                "error" === p.type && this.errorMarkerColor.push(v2);
                f = p.legendText = this.chart.replaceKeywordsWithValue(
                  f,
                  p.dataPoints[0],
                  p,
                  m
                );
                q = { markerType: q, markerColor: v2, text: f, textBlock: null, chartType: p.type, markerSize: w, lineColor: p._colorSet[0], dataSeriesIndex: p.index, dataPointIndex: null, markerBorderColor: y, markerBorderThickness: s };
                l2.push(q);
              } else
                for (var z = 0; z < p.dataPoints.length; z++) {
                  var u = p.dataPoints[z], q = u.legendMarkerType ? u.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : W2.getDefaultLegendMarker(p.type), f = u.legendText ? u.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                    chart: this.chart,
                    legend: this.options,
                    dataSeries: p,
                    dataPoint: u
                  }) : u.name ? u.name : "DataPoint: " + (z + 1), v2 = u.legendMarkerColor ? u.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : u.color ? u.color : p.color ? p.color : p._colorSet[z % p._colorSet.length], w = 0.75 * this.lineHeight, y = u.legendMarkerBorderColor ? u.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : u.markerBorderColor ? u.markerBorderColor : p.markerBorderColor, s = u.legendMarkerBorderThickness ? u.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : u.markerBorderThickness || p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0, f = this.chart.replaceKeywordsWithValue(f, u, p, z), q = { markerType: q, markerColor: v2, text: f, textBlock: null, chartType: p.type, markerSize: w, dataSeriesIndex: m, dataPointIndex: z, markerBorderColor: y, markerBorderThickness: s };
                  (u.showInLegend || p.showInLegend && false !== u.showInLegend) && l2.push(q);
                }
              n(p.legendText) && (p.legendText = p.name);
            }
          }
          true === this.reversed && l2.reverse();
          if (0 < l2.length) {
            p = null;
            f = u = z = 0;
            u = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, h) : this.itemMaxWidth = Math.min(this.itemWidth, h) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, h) : this.itemMaxWidth = h;
            w = 0 === w ? 0.75 * this.lineHeight : w;
            u = (this.itemMaxWidth ? this.itemMaxWidth : u) - (w + d2);
            for (m = 0; m < l2.length; m++) {
              q = l2[m];
              v2 = u;
              if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType)
                v2 -= 2 * 0.1 * this.lineHeight;
              if (!(0 >= r || "undefined" === typeof r || 0 >= v2 || "undefined" === typeof v2))
                if ("horizontal" === this.orientation) {
                  q.textBlock = new ka(this.ctx, { x: 0, y: 0, maxWidth: v2, maxHeight: this.itemWrap ? r : this.lineHeight, angle: 0, text: q.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" });
                  q.textBlock.measureText();
                  null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + d2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                  if (!p || p.width + Math.round(q.textBlock.width + w + d2 + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > h)
                    p = { items: [], width: 0 }, k.push(p), this.height += f, f = 0;
                  f = Math.max(f, q.textBlock.height ? q.textBlock.height : this.lineHeight);
                  q.textBlock.x = p.width;
                  q.textBlock.y = 0;
                  p.width += Math.round(q.textBlock.width + w + d2 + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                  p.items.push(q);
                  this.width = Math.max(p.width, this.width);
                } else
                  q.textBlock = new ka(this.ctx, { x: 0, y: 0, maxWidth: u, maxHeight: true === this.itemWrap ? r : 1.5 * this.fontSize, angle: 0, text: q.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + d2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < r - this.lineHeight ? (p = { items: [], width: 0 }, k.push(p)) : (p = k[z], z = (z + 1) % k.length), p && (this.height += q.textBlock.height ? q.textBlock.height : this.lineHeight, q.textBlock.x = p.width, q.textBlock.y = 0, p.width += Math.round(q.textBlock.width + w + d2 + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)), p.items.push(q), this.width = Math.max(p.width, this.width));
            }
            this.height = false === this.itemWrap ? k.length * this.lineHeight : this.height + f;
            this.height = Math.min(r, this.height);
            this.width = Math.min(h, this.width);
          }
          "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y1 + g.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y2 - this.height);
          this.items = l2;
          for (m = 0; m < this.items.length; m++)
            q = l2[m], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = { id: q.id, objectType: "legendItem", legendItemIndex: m, dataSeriesIndex: q.dataSeriesIndex, dataPointIndex: q.dataPointIndex };
          this.markerSize = w;
          this.rows = k;
          0 < l2.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
          this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height };
        };
        R2.prototype.render = function() {
          var a = this.bounds.x1, g = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, e = this.maxHeight, h = this.markerSize, r = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, g, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var d2 = 0, n2 = 0; n2 < r.length; n2++) {
            for (var k = r[n2], m = 0, p = 0; p < k.items.length; p++) {
              var q = k.items[p], f = q.textBlock.x + a + (0 === p ? 0.2 * h : this.horizontalSpacing), l2 = g + d2, w = f;
              this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(a, g, b, Math.max(e - e % this.lineHeight, 0));
              this.ctx.clip();
              if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
                this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(f - 0.1 * this.lineHeight, l2 + this.lineHeight / 2), this.ctx.lineTo(f + 0.85 * this.lineHeight, l2 + this.lineHeight / 2), this.ctx.stroke(), w -= 0.1 * this.lineHeight;
              if ("error" === q.chartType) {
                this.ctx.strokeStyle = this.errorMarkerColor[0];
                this.ctx.lineWidth = h / 8;
                this.ctx.beginPath();
                var v2 = f - 0.08 * this.lineHeight + 0.1 * this.lineHeight, s = l2 + 0.15 * this.lineHeight, z = 0.7 * this.lineHeight, u = z + 0.02 * this.lineHeight;
                this.ctx.moveTo(v2, s);
                this.ctx.lineTo(v2 + z, s);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(v2 + z / 2, s);
                this.ctx.lineTo(v2 + z / 2, s + u);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(v2, s + u);
                this.ctx.lineTo(v2 + z, s + u);
                this.ctx.stroke();
                this.errorMarkerColor.shift();
              }
              Y.drawMarker(
                f + h / 2,
                l2 + this.lineHeight / 2,
                this.ctx,
                q.markerType,
                "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize,
                q.markerColor,
                q.markerBorderColor,
                q.markerBorderThickness
              );
              q.textBlock.x = f + c + h;
              if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
                q.textBlock.x += 0.1 * this.lineHeight;
              q.textBlock.y = Math.round(l2 + this.lineHeight / 2);
              q.textBlock.render(true);
              this.ctx.restore();
              m = 0 < p ? Math.max(m, q.textBlock.height ? q.textBlock.height : this.lineHeight) : q.textBlock.height ? q.textBlock.height : this.lineHeight;
              this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
              f = O(q.id);
              this.ghostCtx.fillStyle = f;
              this.ghostCtx.beginPath();
              this.ghostCtx.fillRect(w, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - w, q.textBlock.height ? q.textBlock.height : this.lineHeight);
              q.x1 = this.chart._eventManager.objectMap[q.id].x1 = w;
              q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
              q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
              q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + (q.textBlock.height ? q.textBlock.height : this.lineHeight) - this.lineHeight / 2;
            }
            d2 += m;
          }
        };
        qa(W2, Z);
        W2.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a)
            return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
            return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        W2.getDefaultLegendMarker = function(a) {
          if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "square";
          if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a)
            return "circle";
          if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a)
            return "triangle";
          if ("error" === a)
            return "none";
          window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        W2.prototype.getDataPointAtX = function(a, g) {
          if (!this.dataPoints || 0 === this.dataPoints.length)
            return null;
          var c = { dataPoint: null, distance: Infinity, index: NaN }, b = null, e = 0, h = 0, d2 = 1, n2 = Infinity, l2 = 0, k = 0, m = 0;
          "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (m = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), m = 1 < m ? Math.min(Math.max((this.dataPoints.length - 1) / m * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (m = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, m = 0 < m ? Math.min(Math.max((this.dataPoints.length - 1) / m * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
          for (; ; ) {
            h = 0 < d2 ? m + e : m - e;
            if (0 <= h && h < this.dataPoints.length) {
              var b = this.dataPoints[h], p = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
              p < c.distance && (c.dataPoint = b, c.distance = p, c.index = h);
              b = p;
              b <= n2 ? n2 = b : 0 < d2 ? l2++ : k++;
              if (1e3 < l2 && 1e3 < k)
                break;
            } else if (0 > m - e && m + e >= this.dataPoints.length)
              break;
            -1 === d2 ? (e++, d2 = 1) : d2 = -1;
          }
          return g || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? g && null !== c.dataPoint ? c : null : c;
        };
        W2.prototype.getDataPointAtXY = function(a, g, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || g < this.chart.plotArea.y1 || g > this.chart.plotArea.y2)
            return null;
          c = c || false;
          var b = [], e = 0, h = 0, d2 = 1, l2 = false, v2 = Infinity, k = 0, m = 0, p = 0;
          if ("none" !== this.chart.plotInfo.axisPlacement)
            if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: g }), this.axisX.logarithmic)
              var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), p = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(p / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            else
              q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          for (; ; ) {
            h = 0 < d2 ? p + e : p - e;
            if (0 <= h && h < this.dataPoints.length) {
              var q = this.chart._eventManager.objectMap[this.dataPointIds[h]], f = this.dataPoints[h], t3 = null;
              if (q) {
                switch (this.type) {
                  case "column":
                  case "stackedColumn":
                  case "stackedColumn100":
                  case "bar":
                  case "stackedBar":
                  case "stackedBar100":
                  case "rangeColumn":
                  case "rangeBar":
                  case "waterfall":
                  case "error":
                    a >= q.x1 && (a <= q.x2 && g >= q.y1 && g <= q.y2) && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - g), Math.abs(q.y2 - g)) }), l2 = true);
                    break;
                  case "line":
                  case "stepLine":
                  case "spline":
                  case "area":
                  case "stepArea":
                  case "stackedArea":
                  case "stackedArea100":
                  case "splineArea":
                  case "scatter":
                    var w = na("markerSize", f, this) || 4, y = c ? 20 : w, t3 = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - g, 2));
                    t3 <= y && b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: t3 });
                    q = Math.abs(q.x1 - a);
                    q <= v2 ? v2 = q : 0 < d2 ? k++ : m++;
                    t3 <= w / 2 && (l2 = true);
                    break;
                  case "rangeArea":
                  case "rangeSplineArea":
                    w = na("markerSize", f, this) || 4;
                    y = c ? 20 : w;
                    t3 = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - g, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - g, 2)));
                    t3 <= y && b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: t3 });
                    q = Math.abs(q.x1 - a);
                    q <= v2 ? v2 = q : 0 < d2 ? k++ : m++;
                    t3 <= w / 2 && (l2 = true);
                    break;
                  case "bubble":
                    w = q.size;
                    t3 = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - g, 2));
                    t3 <= w / 2 && (b.push({
                      dataPoint: f,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: t3
                    }), l2 = true);
                    break;
                  case "pie":
                  case "doughnut":
                    w = q.center;
                    y = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                    t3 = Math.sqrt(Math.pow(w.x - a, 2) + Math.pow(w.y - g, 2));
                    t3 < q.radius && t3 > y && (t3 = Math.atan2(g - w.y, a - w.x), 0 > t3 && (t3 += 2 * Math.PI), t3 = Number(((180 * (t3 / Math.PI) % 360 + 360) % 360).toFixed(12)), w = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), y = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === y && 1 < q.endAngle && (y = 360), w >= y && (0 !== f.y && !n(f.y)) && (y += 360, t3 < w && (t3 += 360)), t3 > w && t3 < y && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: 0 }), l2 = true));
                    break;
                  case "funnel":
                  case "pyramid":
                    t3 = q.funnelSection;
                    g > t3.y1 && g < t3.y4 && (t3.y6 ? g > t3.y6 ? (h = t3.x6 + (t3.x5 - t3.x6) / (t3.y5 - t3.y6) * (g - t3.y6), t3 = t3.x3 + (t3.x4 - t3.x3) / (t3.y4 - t3.y3) * (g - t3.y3)) : (h = t3.x1 + (t3.x6 - t3.x1) / (t3.y6 - t3.y1) * (g - t3.y1), t3 = t3.x2 + (t3.x3 - t3.x2) / (t3.y3 - t3.y2) * (g - t3.y2)) : (h = t3.x1 + (t3.x4 - t3.x1) / (t3.y4 - t3.y1) * (g - t3.y1), t3 = t3.x2 + (t3.x3 - t3.x2) / (t3.y3 - t3.y2) * (g - t3.y2)), a > h && a < t3 && (b.push({ dataPoint: f, dataPointIndex: q.dataPointIndex, dataSeries: this, distance: 0 }), l2 = true));
                    break;
                  case "boxAndWhisker":
                    if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && g >= q.y4 - q.borderThickness / 2 && g <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && g >= q.y1 && g <= q.y4)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - g), Math.abs(q.y3 - g)) }), l2 = true;
                    break;
                  case "candlestick":
                    if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && g >= q.y2 - q.borderThickness / 2 && g <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && g >= q.y1 && g <= q.y4)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - g), Math.abs(q.y3 - g)) }), l2 = true;
                    break;
                  case "ohlc":
                    if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && g >= q.y2 && g <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && g >= q.y1 - q.borderThickness / 2 && g <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && g >= q.y4 - q.borderThickness / 2 && g <= q.y4 + q.borderThickness / 2)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - g), Math.abs(q.y3 - g)) }), l2 = true;
                }
                if (l2 || 1e3 < k && 1e3 < m)
                  break;
              }
            } else if (0 > p - e && p + e >= this.dataPoints.length)
              break;
            -1 === d2 ? (e++, d2 = 1) : d2 = -1;
          }
          a = null;
          for (g = 0; g < b.length; g++)
            a ? b[g].distance <= a.distance && (a = b[g]) : a = b[g];
          return a;
        };
        W2.prototype.getMarkerProperties = function(a, g, c, b) {
          var e = this.dataPoints, h = e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], d2 = e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, l2 = n(e[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : e[a].markerBorderThickness, t3 = e[a].markerType ? e[a].markerType : this.markerType;
          a = n(e[a].markerSize) ? this.markerSize : e[a].markerSize;
          return { x: g, y: c, ctx: b, type: t3, size: a, color: h, borderColor: d2, borderThickness: l2 };
        };
        qa(D, Z);
        D.prototype.createExtraLabelsForLog = function(a) {
          a = (a || 0) + 1;
          if (!(5 < a)) {
            var g = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(g / this.viewportMinimum) < this.noTicks - 1) {
              for (var c = D.getNiceNumber((g - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), true), b = Math.ceil(this.viewportMinimum / c) * c; b < g; b += c)
                b < this.viewportMinimum || this.logLabelValues.push(b);
              this.logLabelValues.sort(Ta);
              this.createExtraLabelsForLog(a);
            }
          }
        };
        D.prototype.createLabels = function() {
          var a, g, c = 0, b = 0, e, h = 0, d2 = 0, b = 0, b = this.interval, l2 = 0, t3, k = 0.6 * this.chart.height, m;
          a = false;
          var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], q = p.length ? n(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
            e = this.viewportMaximum;
            if (this.labels) {
              a = Math.ceil(b);
              for (var b = Math.ceil(this.intervalStartPosition), f = false, c = b; c < this.viewportMaximum; c += a)
                if (this.labels[c])
                  f = true;
                else {
                  f = false;
                  break;
                }
              f && (this.interval = a, this.intervalStartPosition = b);
            }
            if (this.logarithmic && !this.equidistantInterval)
              for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, f = q; b < this.logLabelValues.length; b++)
                if (c = this.logLabelValues[b], c < this.viewportMinimum)
                  b++;
                else {
                  for (; f < p.length && c > p[f].endValue; f++)
                    ;
                  a = f < p.length && c >= p[f].startValue && c <= p[f].endValue;
                  m = c;
                  a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ga(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: h,
                    maxHeight: d2,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    backgroundColor: this.labelBackgroundColor,
                    borderColor: this.labelBorderColor,
                    cornerRadius: this.labelCornerRadius,
                    textAlign: this.labelTextAlign,
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                  }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
                }
            f = q;
            for (c = this.intervalStartPosition; c <= e; c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
              for (; f < p.length && c > p[f].endValue; f++)
                ;
              a = f < p.length && c >= p[f].startValue && c <= p[f].endValue;
              m = c;
              a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ga(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, { x: 0, y: 0, maxWidth: h, maxHeight: d2, angle: this.labelAngle, text: this.prefix + a + this.suffix, textAlign: this.labelTextAlign, backgroundColor: this.labelBackgroundColor, borderColor: this.labelBorderColor, borderThickness: this.labelBorderThickness, cornerRadius: this.labelCornerRadius, fontSize: this.labelFontSize, fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight, fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle" }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
            }
          } else
            for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), e = Za(new Date(this.viewportMaximum), this.interval, this.intervalType), f = q, c = this.intervalStartPosition; c < e; Za(c, b, this.intervalType)) {
              for (a = c.getTime(); f < p.length && a > p[f].endValue; f++)
                ;
              m = a;
              a = f < p.length && a >= p[f].startValue && a <= p[f].endValue;
              a || (a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: new Date(m),
                label: this.labels[m] ? this.labels[m] : null
              }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : Da(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxHeight: d2,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
              }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null, breaksLabelType: void 0 }));
            }
          if ("bottom" === this._position || "top" === this._position)
            l2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * T[this.intervalType + "Duration"] * this.interval, h = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
          else if ("left" === this._position || "right" === this._position)
            l2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * T[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          for (b = 0; b < this._labels.length; b++) {
            a = this._labels[b].textBlock;
            a.maxWidth = h;
            a.maxHeight = d2;
            var A3 = a.measureText();
            t3 = A3.height;
          }
          e = [];
          q = p = 0;
          if (this.labelAutoFit || this.options.labelAutoFit) {
            if (n(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
              if (h = 0.9 * l2 >> 0, q = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = d2;
                this.sessionVariables.labelAngle = this.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    for (var w, f = a.text.split(" "), b = 0; b < f.length; b++)
                      m = f[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, m = this.ctx.measureText(m), m.width > q && (w = c, q = m.width);
                  }
                c = 0;
                for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    A3 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        g = this._labels[f].textBlock;
                        g = g.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d2 - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    if (n(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                      if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = (k - (t3 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !n(this.options.labelWrap))
                        this.labelWrap ? n(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), m), this.sessionVariables.labelWrap = this.labelWrap, g && A3.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle) : n(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = h, g && A3.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelWrap = this.labelWrap);
                      else {
                        if (n(this.options.labelWrap)) {
                          if (!n(this.options.labelMaxWidth))
                            this.options.labelMaxWidth < h ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d2);
                          else if (!n(g)) {
                            if (b = A3.width + g.width >> 0, f = this.labelFontSize, q < h)
                              b - 2 * h > p && (p = b - 2 * h, b >= 2 * h && b < 2.2 * h ? (this.sessionVariables.labelMaxWidth = h, n(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * h && b < 2.8 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = f) : b >= 2.8 * h && b < 3.2 * h ? (this.sessionVariables.labelMaxWidth = Math.max(h, q), this.sessionVariables.labelWrap = true, n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * h && b < 3.6 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * h && b < 5 * h ? (n(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m) : b > 5 * h && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelFontSize = f, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelAngle = this.labelAngle));
                            else if (w === c && (0 === w && q + this._labels[w + 1].textBlock.measureText().width - 2 * h > p || w === this._labels.length - 1 && q + this._labels[w - 1].textBlock.measureText().width - 2 * h > p || 0 < w && w < this._labels.length - 1 && q + this._labels[w + 1].textBlock.measureText().width - 2 * h > p && q + this._labels[w - 1].textBlock.measureText().width - 2 * h > p))
                              p = 0 === w ? q + this._labels[w + 1].textBlock.measureText().width - 2 * h : q + this._labels[w - 1].textBlock.measureText().width - 2 * h, this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m;
                            else if (0 === p)
                              for (this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, b = 0; b < this._labels.length; b++)
                                a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), m), A3 = a.measureText(), b < this._labels.length - 1 && (f = b + 1, g = this._labels[f].textBlock, g.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), m), g = g.measureText(), A3.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25));
                          }
                        }
                      }
                    else
                      (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = 0 != this.labelAngle ? (k - (t3 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : h, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - m * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, n(this.options.labelWrap)) ? n(this.options.labelWrap) && (this.labelWrap && !n(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelMaxHeight = d2) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelMaxHeight = b < 0.9 * l2 ? 0.9 * l2 : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m) : (n(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = d2);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = n(this.options.labelMaxWidth) ? n(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = n(this.options.labelFontSize) ? n(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = n(this.options.labelAngle) ? n(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = n(this.options.labelWrap) ? n(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = n(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d2 : this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position)
              if (h = n(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = d2;
                this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    A3 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        g = this._labels[f].textBlock;
                        g = g.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d2 - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    n(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? n(this.options.labelWrap) ? n(this.options.labelWrap) && (n(this.options.labelMaxWidth) ? n(g) || (l2 = A3.height + g.height >> 0, l2 - 2 * d2 > q && (q = l2 - 2 * d2, l2 >= 2 * d2 && l2 < 2.4 * d2 ? (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : l2 >= 2.4 * d2 && l2 < 2.8 * d2 ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : l2 >= 2.8 * d2 && l2 < 3.2 * d2 ? (this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelWrap = true, n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : l2 >= 3.2 * d2 && l2 < 3.6 * d2 ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : l2 > 3.6 * d2 && l2 < 10 * d2 ? (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : l2 > 10 * d2 && l2 < 50 * d2 && (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = d2) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? h : Math.min(
                      (b - d2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)),
                      d2
                    ), n(this.options.labelWrap)) ? n(this.options.labelWrap) && (this.labelWrap && !n(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : b, n(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = h) : (this.sessionVariables.labelMaxHeight = d2, n(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (n(this.chart.stockChart) || this.chart.isNavigator || (this.sessionVariables.labelMaxHeight = d2), c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = n(this.options.labelMaxWidth) ? n(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = n(this.options.labelFontSize) ? n(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = n(this.options.labelAngle) ? n(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = n(this.options.labelWrap) ? n(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = n(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d2 : this.sessionVariables.labelMaxHeight, a.measureText();
          }
          for (c = 0; c < this.stripLines.length; c++) {
            var h = this.stripLines[c], y;
            if ("outside" === h.labelPlacement) {
              d2 = this.sessionVariables.labelMaxWidth;
              if ("bottom" === this._position || "top" === this._position)
                n(h.options.labelWrap) && !n(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
              if ("left" === this._position || "right" === this._position)
                n(h.options.labelWrap) && !n(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
              n(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
            } else
              d2 = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, y = n(h.options.labelWrap) || h.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, n(h.labelBackgroundColor) && (n(h.startValue) && 0 !== h.startValue ? h.labelBackgroundColor = v ? "transparent" : null : h.labelBackgroundColor = "#EEEEEE");
            a = new ka(this.ctx, {
              x: 0,
              y: 0,
              backgroundColor: h.labelBackgroundColor,
              borderColor: h.labelBorderColor,
              borderThickness: h.labelBorderThickness,
              cornerRadius: h.labelCornerRadius,
              maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : d2,
              maxHeight: y,
              angle: this.labelAngle,
              text: h.labelFormatter ? h.labelFormatter({ chart: this.chart, axis: this, stripLine: h }) : h.label,
              textAlign: this.labelTextAlign,
              fontSize: "outside" === h.labelPlacement ? h.options.labelFontSize ? h.labelFontSize : this.labelFontSize : h.labelFontSize,
              fontFamily: "outside" === h.labelPlacement ? h.options.labelFontFamily ? h.labelFontFamily : this.labelFontFamily : h.labelFontFamily,
              fontWeight: "outside" === h.labelPlacement ? h.options.labelFontWeight ? h.labelFontWeight : this.labelFontWeight : h.labelFontWeight,
              fontColor: h.labelFontColor || h.color,
              fontStyle: "outside" === h.labelPlacement ? h.options.labelFontStyle ? h.labelFontStyle : this.fontWeight : h.labelFontStyle,
              textBaseline: "middle"
            });
            this._stripLineLabels.push({ position: h.value, textBlock: a, effectiveHeight: null, stripLine: h });
          }
        };
        D.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0, g = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var c = this.chart.isNavigator ? 0 : 5;
          if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (g = 0; g < this._labels.length; g++) {
                var b = this._labels[g].textBlock, e = b.measureText(), h = 0, h = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < h && (this.labelEffectiveWidth = a = h);
                this._labels[g].effectiveWidth = h;
              }
            for (g = 0; g < this._stripLineLabels.length; g++)
              "outside" === this._stripLineLabels[g].stripLine.labelPlacement && (this._stripLineLabels[g].stripLine.value >= this.viewportMinimum && this._stripLineLabels[g].stripLine.value <= this.viewportMaximum) && (b = this._stripLineLabels[g].textBlock, e = b.measureText(), h = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (h += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? h : 0), a < h && (a = h), this.stripLineLabelEffectiveWidth = this._stripLineLabels[g].effectiveWidth = h);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + c;
        };
        D.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var g, c = 0, b = this.chart.isNavigator ? 0 : 5;
          if ("bottom" === this._position || "top" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (c = 0; c < this._labels.length; c++) {
                g = this._labels[c].textBlock;
                var e = g.measureText(), h = 0, h = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - g.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < h && (this.labelEffectiveHeight = a = h);
                this._labels[c].effectiveHeight = h;
              }
            for (c = 0; c < this._stripLineLabels.length; c++)
              "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (g = this._stripLineLabels[c].textBlock, e = g.measureText(), h = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - g.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (h += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? h : 0), a < h && (a = h), this.stripLineLabelEffectiveHeight = this._stripLineLabels[c].effectiveHeight = h);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + b;
        };
        D.setLayout = function(a, g, c, b, e, h) {
          var d2, l2, t3, k, m = a[0] ? a[0].chart : g[0].chart, p = m.isNavigator ? 0 : 10, q = m._axes;
          if (a && 0 < a.length)
            for (var f = 0; f < a.length; f++)
              a[f] && a[f].calculateAxisParameters();
          if (g && 0 < g.length)
            for (f = 0; f < g.length; f++)
              g[f].calculateAxisParameters();
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              c[f].calculateAxisParameters();
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f].calculateAxisParameters();
          for (f = 0; f < q.length; f++)
            if (q[f] && q[f].scaleBreaks && q[f].scaleBreaks._appliedBreaks.length)
              for (var v2 = q[f].scaleBreaks._appliedBreaks, w = 0; w < v2.length && !(v2[w].startValue > q[f].viewportMaximum); w++)
                v2[w].endValue < q[f].viewportMinimum || (n(q[f].scaleBreaks.firstBreakIndex) && (q[f].scaleBreaks.firstBreakIndex = w), v2[w].startValue >= q[f].viewPortMinimum && (q[f].scaleBreaks.lastBreakIndex = w));
          for (var y = w = 0, s = 0, z = 0, u = 0, A3 = 0, B = 0, C, D2, H2 = l2 = 0, K, J2, L2, v2 = K = J2 = L2 = false, f = 0; f < q.length; f++)
            q[f] && q[f].title && (q[f]._titleTextBlock = new ka(q[f].ctx, {
              text: q[f].title,
              horizontalAlign: "center",
              fontSize: q[f].titleFontSize,
              fontFamily: q[f].titleFontFamily,
              fontWeight: q[f].titleFontWeight,
              fontColor: q[f].titleFontColor,
              fontStyle: q[f].titleFontStyle,
              borderColor: q[f].titleBorderColor,
              borderThickness: q[f].titleBorderThickness,
              backgroundColor: q[f].titleBackgroundColor,
              cornerRadius: q[f].titleCornerRadius,
              textBaseline: "middle"
            }));
          for (f = 0; f < q.length; f++)
            if (q[f].title)
              switch (q[f]._position) {
                case "left":
                  q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || h.height;
                  q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * h.width : 1.5 * q[f].titleFontSize;
                  q[f]._titleTextBlock.angle = -90;
                  break;
                case "right":
                  q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || h.height;
                  q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * h.width : 1.5 * q[f].titleFontSize;
                  q[f]._titleTextBlock.angle = 90;
                  break;
                default:
                  q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || h.width, q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * h.height : 1.5 * q[f].titleFontSize, q[f]._titleTextBlock.angle = 0;
              }
          if ("normal" === e) {
            for (var z = [], u = [], A3 = [], B = [], N2 = [], P2 = [], O2 = [], R3 = []; 4 > w; ) {
              var F = 0, T2 = 0, S = 0, V = 0, W3 = e = 0, M = 0, Z2 = 0, X3 = 0, Y2 = 0, Q = 0, $ = 0;
              if (c && 0 < c.length)
                for (A3 = [], f = Q = 0; f < c.length; f++)
                  A3.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateWidth() : 0)), Q += A3[f], M += c[f] && !m.isNavigator ? c[f].margin : 0;
              else
                A3.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
              O2.push(A3);
              if (b && 0 < b.length)
                for (B = [], f = $ = 0; f < b.length; f++)
                  B.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateWidth() : 0)), $ += B[f], Z2 += b[f] ? b[f].margin : 0;
              else
                B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
              R3.push(B);
              d2 = Math.round(h.x1 + Q + M);
              t3 = Math.round(h.x2 - $ - Z2 > m.width - p ? m.width - p : h.x2 - $ - Z2);
              if (a && 0 < a.length)
                for (z = [], f = X3 = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates = {}), a[f].lineCoordinates.width = Math.abs(t3 - d2), a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.width ? a[f].titleMaxWidth : a[f].lineCoordinates.width), z.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateHeight() : 0)), X3 += z[f], e += a[f] && !m.isNavigator ? a[f].margin : 0;
              else
                z.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
              N2.push(z);
              if (g && 0 < g.length)
                for (u = [], f = Y2 = 0; f < g.length; f++)
                  g[f] && (g[f].lineCoordinates = {}), g[f].lineCoordinates.width = Math.abs(t3 - d2), g[f].title && (g[f]._titleTextBlock.maxWidth = 0 < g[f].titleMaxWidth && g[f].titleMaxWidth < g[f].lineCoordinates.width ? g[f].titleMaxWidth : g[f].lineCoordinates.width), u.push(Math.ceil(g[f] ? g[f].createLabelsAndCalculateHeight() : 0)), Y2 += u[f], W3 += g[f] && !m.isNavigator ? g[f].margin : 0;
              else
                u.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateHeight() : 0));
              P2.push(u);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates.x1 = d2, t3 = Math.round(h.x2 - $ - Z2 > m.width - p ? m.width - p : h.x2 - $ - Z2), a[f]._labels && 1 < a[f]._labels.length && (l2 = k = 0, k = a[f]._labels[1], l2 = "dateTime" === a[f].valueType ? a[f]._labels[a[f]._labels.length - 2] : a[f]._labels[a[f]._labels.length - 1], y = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - l2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = l2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l2.textBlock.angle)) + (l2.textBlock.height - l2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l2.textBlock.angle))), !a[f] || (!a[f].labelAutoFit || n(C) || n(D2) || m.isNavigator || m.stockChart) || (l2 = 0, 0 < a[f].labelAngle ? D2 + s > t3 && (l2 += 0 < a[f].labelAngle ? D2 + s - t3 - $ : 0) : 0 > a[f].labelAngle ? C - y < d2 && C - y < a[f].viewportMinimum && (H2 = d2 - (M + a[f].tickLength + A3 + C - y + a[f].labelFontSize / 2)) : 0 === a[f].labelAngle && (D2 + s > t3 && (l2 = D2 + s / 2 - t3 - $), C - y < d2 && C - y < a[f].viewportMinimum && (H2 = d2 - M - a[f].tickLength - A3 - C + y / 2)), a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 < a[f].labelAngle && 0 < l2 ? t3 -= l2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 > a[f].labelAngle && 0 < H2 ? d2 += H2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 === a[f].labelAngle && (0 < H2 && (d2 += H2), 0 < l2 && (t3 -= l2))), m.panEnabled ? X3 = n(m.sessionVariables.axisX.height) || m.stockChart ? m.sessionVariables.axisX.height = X3 : m.sessionVariables.axisX.height : m.sessionVariables.axisX.height = X3, l2 = Math.round(h.y2 - X3 - e + F), k = Math.round(h.y2), a[f].lineCoordinates.x2 = t3, a[f].lineCoordinates.width = t3 - d2, a[f].lineCoordinates.y1 = l2, a[f].lineCoordinates.y2 = l2, "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.y1 = a[f - 1].lineCoordinates.y2 + F + (a[f].labelEffectiveHeight || 0), a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.y1 += a[f].tickLength, a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), a[f].bounds = { x1: d2, y1: l2, x2: t3, y2: k - (X3 + e - z[f] - F), width: t3 - d2 }, a[f].bounds.height = a[f].bounds.y2 - a[f].bounds.y1), F += z[f] + a[f].margin;
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++)
                  g[f].lineCoordinates.x1 = Math.round(h.x1 + Q + M), g[f].lineCoordinates.x2 = Math.round(h.x2 - $ - Z2 > m.width - p ? m.width - p : h.x2 - $ - Z2), g[f].lineCoordinates.width = Math.abs(t3 - d2), g[f]._labels && 1 < g[f]._labels.length && (k = g[f]._labels[1], l2 = "dateTime" === g[f].valueType ? g[f]._labels[g[f]._labels.length - 2] : g[f]._labels[g[f]._labels.length - 1], y = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - l2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = l2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l2.textBlock.angle)) + (l2.textBlock.height - l2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l2.textBlock.angle))), m.panEnabled ? Y2 = n(m.sessionVariables.axisX2.height) || m.stockChart ? m.sessionVariables.axisX2.height = Y2 : m.sessionVariables.axisX2.height : m.sessionVariables.axisX2.height = Y2, l2 = Math.round(h.y1), k = g[f].lineCoordinates.y1 = l2 + Y2 + W3 - T2, g[f].lineCoordinates.y2 = l2, "inside" === g[f].labelPlacement && 0 < f && (g[f].lineCoordinates.y1 = g[f - 1].lineCoordinates.y1 - T2 - (g[f].labelEffectiveHeight || 0)), "inside" === g[f].tickPlacement && 0 < f && (g[f].lineCoordinates.y1 -= g[f].tickLength), g[f].bounds = { x1: d2, y1: l2 + (Y2 + W3 - u[f] - T2), x2: t3, y2: k, width: t3 - d2 }, g[f].bounds.height = g[f].bounds.y2 - g[f].bounds.y1, T2 += u[f] + g[f].margin;
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  M = m.isNavigator ? 0 : 10, c[f] && (d2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1), M = c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[c[f]._labels.length - 1].textBlock.height / 2 : p, l2 = Math.round(h.y1 + Y2 + W3 < Math.max(M, p) ? Math.max(M, p) : h.y1 + Y2 + W3), t3 = Math.round(a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1), M = 0 < a.length ? 0 : c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[0].textBlock.height / 2 : p, k = Math.round(h.y2 - X3 - e - M), c[f].lineCoordinates = { x1: d2 - S, y1: l2, x2: t3 - S, y2: k, height: Math.abs(k - l2) }, "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.x1 = c[f - 1].lineCoordinates.x1 - S - (c[f].labelEffectiveWidth || 0), c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.x1 -= c[f].tickLength, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), c[f].bounds = { x1: d2 - (A3[f] + S), y1: l2, x2: t3 - S, y2: k, height: k - l2 }, c[f].bounds.width = c[f].bounds.x2 - c[f].bounds.x1, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.height ? c[f].titleMaxWidth : c[f].lineCoordinates.height), S += A3[f] + c[f].margin);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && (d2 = Math.round(a[0] ? a[0].lineCoordinates.x2 : g[0].lineCoordinates.x2), t3 = Math.round(d2), M = b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[b[f]._labels.length - 1].textBlock.height / 2 : 0, l2 = Math.round(h.y1 + Y2 + W3 < Math.max(M, p) ? Math.max(M, p) : h.y1 + Y2 + W3), M = 0 < a.length ? 0 : b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[0].textBlock.height / 2 : 0, k = Math.round(h.y2 - (X3 + e + M)), b[f].lineCoordinates = {
                    x1: d2 + V,
                    y1: l2,
                    x2: d2 + V,
                    y2: k,
                    height: Math.abs(k - l2)
                  }, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.x1 = b[f - 1].lineCoordinates.x2 + V + (b[f].labelEffectiveWidth || 0), b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.x1 += b[f].tickLength, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), b[f].bounds = { x1: d2 + V, y1: l2, x2: t3 + (B[f] + V), y2: k, height: k - l2 }, b[f].bounds.width = b[f].bounds.x2 - b[f].bounds.x1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.height ? b[f].titleMaxWidth : b[f].lineCoordinates.height), V += B[f] + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].calculateValueToPixelConversionParameters(), a[f].calculateBreaksSizeInValues(), a[f]._labels && 1 < a[f]._labels.length && (C = (a[f].logarithmic ? Math.log(a[f]._labels[1].position / a[f].viewportMinimum) / a[f].conversionParameters.lnLogarithmBase : a[f]._labels[1].position - a[f].viewportMinimum) * Math.abs(a[f].conversionParameters.pixelPerUnit) + a[f].lineCoordinates.x1, d2 = a[f]._labels[a[f]._labels.length - ("dateTime" === a[f].valueType ? 2 : 1)].position, d2 = a[f].getApparentDifference(a[f].viewportMinimum, d2), D2 = a[f].logarithmic ? (1 < d2 ? Math.log(d2) / a[f].conversionParameters.lnLogarithmBase * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1 : (0 < d2 ? d2 * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1));
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++)
                  g[f].calculateValueToPixelConversionParameters(), g[f].calculateBreaksSizeInValues(), g[f]._labels && 1 < g[f]._labels.length && (C = (g[f].logarithmic ? Math.log(g[f]._labels[1].position / g[f].viewportMinimum) / g[f].conversionParameters.lnLogarithmBase : g[f]._labels[1].position - g[f].viewportMinimum) * Math.abs(g[f].conversionParameters.pixelPerUnit) + g[f].lineCoordinates.x1, d2 = g[f]._labels[g[f]._labels.length - ("dateTime" === g[f].valueType ? 2 : 1)].position, d2 = g[f].getApparentDifference(g[f].viewportMinimum, d2), D2 = g[f].logarithmic ? (1 < d2 ? Math.log(d2) / g[f].conversionParameters.lnLogarithmBase * Math.abs(g[f].conversionParameters.pixelPerUnit) : 0) + g[f].lineCoordinates.x1 : (0 < d2 ? d2 * Math.abs(g[f].conversionParameters.pixelPerUnit) : 0) + g[f].lineCoordinates.x1);
              for (f = 0; f < q.length; f++)
                "axisY" === q[f].type && (q[f].calculateValueToPixelConversionParameters(), q[f].calculateBreaksSizeInValues());
              if (0 < w) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    v2 = N2[w - 1][f] === N2[w][f] ? true : false;
                else
                  v2 = true;
                if (g && 0 < g.length)
                  for (f = 0; f < g.length; f++)
                    K = P2[w - 1][f] === P2[w][f] ? true : false;
                else
                  K = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    J2 = O2[w - 1][f] === O2[w][f] ? true : false;
                else
                  J2 = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    L2 = R3[w - 1][f] === R3[w][f] ? true : false;
                else
                  L2 = true;
              }
              if (v2 && K && J2 && L2)
                break;
              w++;
            }
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (g && 0 < g.length)
              for (f = 0; f < g.length; f++)
                g[f].calculateStripLinesThicknessInValues(), g[f].calculateBreaksInPixels();
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
          } else {
            p = [];
            C = [];
            H2 = [];
            y = [];
            D2 = [];
            s = [];
            N2 = [];
            for (P2 = []; 4 > w; ) {
              X3 = V = S = Z2 = M = W3 = e = R3 = O2 = F = Y2 = 0;
              if (a && 0 < a.length)
                for (H2 = [], f = V = 0; f < a.length; f++)
                  H2.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateWidth() : 0)), V += H2[f], e += a[f] && !m.isNavigator ? a[f].margin : 0;
              else
                H2.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
              N2.push(H2);
              if (g && 0 < g.length)
                for (y = [], f = X3 = 0; f < g.length; f++)
                  y.push(Math.ceil(g[f] ? g[f].createLabelsAndCalculateWidth() : 0)), X3 += y[f], W3 += g[f] ? g[f].margin : 0;
              else
                y.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateWidth() : 0));
              P2.push(y);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  c[f].lineCoordinates = {}, d2 = Math.round(h.x1 + V + e), t3 = Math.round(h.x2 - X3 - W3 > m.width - 10 ? m.width - 10 : h.x2 - X3 - W3), c[f].labelAutoFit && !n(z) && (0 < !a.length && (d2 = 0 > c[f].labelAngle ? Math.max(d2, z) : 0 === c[f].labelAngle ? Math.max(d2, z / 2) : d2), 0 < !g.length && (t3 = 0 < c[f].labelAngle ? t3 - u / 2 : 0 === c[f].labelAngle ? t3 - u / 2 : t3)), c[f].lineCoordinates.x1 = d2, c[f].lineCoordinates.x2 = t3, c[f].lineCoordinates.width = Math.abs(t3 - d2), c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f].lineCoordinates = {}, d2 = Math.round(h.x1 + V + e), t3 = Math.round(h.x2 - X3 - W3 > b[f].chart.width - 10 ? b[f].chart.width - 10 : h.x2 - X3 - W3), b[f] && b[f].labelAutoFit && !n(A3) && (0 < !a.length && (d2 = 0 < b[f].labelAngle ? Math.max(d2, A3) : 0 === b[f].labelAngle ? Math.max(d2, A3 / 2) : d2), 0 < !g.length && (t3 -= B / 2)), b[f].lineCoordinates.x1 = d2, b[f].lineCoordinates.x2 = t3, b[f].lineCoordinates.width = Math.abs(t3 - d2), b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width);
              if (c && 0 < c.length)
                for (p = [], f = S = 0; f < c.length; f++)
                  p.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateHeight() : 0)), S += p[f] + c[f].margin, M += c[f].margin;
              else
                p.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
              D2.push(p);
              if (b && 0 < b.length)
                for (C = [], f = 0; f < b.length; f++)
                  C.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateHeight() : 0)), Z2 += b[f].margin;
              else
                C.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
              s.push(C);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  0 < c[f]._labels.length && (k = c[f]._labels[0], l2 = c[f]._labels[c[f]._labels.length - 1], z = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - l2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), u = l2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l2.textBlock.angle)) + (l2.textBlock.height - l2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l2.textBlock.angle)));
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && 0 < b[f]._labels.length && (k = b[f]._labels[0], l2 = b[f]._labels[b[f]._labels.length - 1], A3 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - l2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), B = l2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l2.textBlock.angle)) + (l2.textBlock.height - l2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l2.textBlock.angle)));
              if (m.panEnabled)
                for (f = 0; f < c.length; f++)
                  p[f] = n(m.sessionVariables.axisY[f].height) ? m.sessionVariables.axisY[f].height = p[f] : m.sessionVariables.axisY[f].height;
              else
                for (f = 0; f < c.length; f++)
                  m.sessionVariables.axisY[f].height = p[f];
              if (c && 0 < c.length)
                for (f = c.length - 1; 0 <= f; f--)
                  l2 = Math.round(h.y2), k = Math.round(h.y2 > c[f].chart.height ? c[f].chart.height : h.y2), c[f].lineCoordinates.y1 = l2 - (p[f] + c[f].margin + Y2), c[f].lineCoordinates.y2 = l2 - (p[f] + c[f].margin + Y2), "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.y1 = c[f].lineCoordinates.y1 + p[f] - (c[f]._titleTextBlock ? c[f]._titleTextBlock.height : 0) - c[f].tickLength - (c[f].stripLineLabelEffectiveHeight || 0) - 5, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.y1 += c[f].tickLength, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), c[f].bounds = { x1: d2, y1: l2 - (p[f] + Y2 + c[f].margin), x2: t3, y2: k - (Y2 + c[f].margin), width: t3 - d2, height: p[f] }, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width), Y2 += p[f] + c[f].margin;
              if (b && 0 < b.length)
                for (f = b.length - 1; 0 <= f; f--)
                  b[f] && (l2 = Math.round(h.y1), k = Math.round(h.y1 + (C[f] + b[f].margin + F)), b[f].lineCoordinates.y1 = k, b[f].lineCoordinates.y2 = k, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.y1 = k - C[f] + (b[f]._titleTextBlock ? b[f]._titleTextBlock.height : 0) + b[f].tickLength + (b[f].stripLineLabelEffectiveHeight || 0), b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.y1 -= b[f].tickLength, b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), b[f].bounds = { x1: d2, y1: l2 + (b[f].margin + F), x2: t3, y2: k, width: t3 - d2 }, b[f].bounds.height = b[f].bounds.y2 - b[f].bounds.y1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width), F += C[f] + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++) {
                  M = a[f]._labels && 0 < a[f]._labels.length ? a[f]._labels[0].textBlock.fontSize / 2 : 0;
                  d2 = Math.round(h.x1 + e);
                  l2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(M, 10) ? Math.max(M, 10) : h.y1) : h.y1 < Math.max(M, 10) ? Math.max(M, 10) : h.y1;
                  t3 = Math.round(h.x1 + V + e);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - S > m.height - Math.max(M, 10) ? m.height - Math.max(M, 10) : h.y2 - S) : h.y2 > m.height - Math.max(M, 10) ? m.height - Math.max(M, 10) : h.y2;
                  if (c && 0 < c.length)
                    for (M = 0; M < c.length; M++)
                      c[M] && c[M].labelAutoFit && (t3 = c[M].lineCoordinates.x1, d2 = 0 > c[M].labelAngle || 0 === c[M].labelAngle ? t3 - V : d2);
                  if (b && 0 < b.length)
                    for (M = 0; M < b.length; M++)
                      b[M] && b[M].labelAutoFit && (t3 = b[M].lineCoordinates.x1, d2 = t3 - V);
                  a[f].lineCoordinates = { x1: t3 - O2, y1: l2, x2: t3 - O2, y2: k, height: Math.abs(k - l2) };
                  "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.x1 = a[f].lineCoordinates.x1 - (H2[f] - (a[f]._titleTextBlock ? a[f]._titleTextBlock.height : 0)) + a[f].tickLength + (a[f].stripLineLabelEffectiveWidth || 0), a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.x1 -= a[f].tickLength, a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  a[f].bounds = { x1: t3 - (H2[f] + O2), y1: l2, x2: t3 - O2, y2: k, height: k - l2 };
                  a[f].bounds.width = a[f].bounds.x2 - a[f].bounds.x1;
                  a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.height ? a[f].titleMaxWidth : a[f].lineCoordinates.height);
                  a[f].calculateValueToPixelConversionParameters();
                  a[f].calculateBreaksSizeInValues();
                  O2 += H2[f] + a[f].margin;
                }
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++) {
                  M = g[f]._labels && 0 < g[f]._labels.length ? g[f]._labels[0].textBlock.fontSize / 2 : 0;
                  d2 = Math.round(h.x1 - e);
                  l2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(M, 10) ? Math.max(M, 10) : h.y1) : h.y1 < Math.max(M, 10) ? Math.max(M, 10) : h.y1;
                  t3 = Math.round(h.x2 - X3 - W3);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - S > m.height - Math.max(M, 10) ? m.height - Math.max(M, 10) : h.y2 - S) : h.y2 > m.height - Math.max(M, 10) ? m.height - Math.max(M, 10) : h.y2;
                  if (c && 0 < c.length)
                    for (M = 0; M < c.length; M++)
                      c[M] && c[M].labelAutoFit && (t3 = 0 > c[M].labelAngle ? Math.max(t3, z) : 0 === c[M].labelAngle ? Math.max(t3, z / 2) : t3, d2 = 0 > c[M].labelAngle || 0 === c[M].labelAngle ? t3 - X3 : d2);
                  if (b && 0 < b.length)
                    for (M = 0; M < b.length; M++)
                      b[M] && b[M].labelAutoFit && (t3 = b[M].lineCoordinates.x2, d2 = t3 - X3);
                  g[f].lineCoordinates = { x1: t3 + R3, y1: l2, x2: t3 + R3, y2: k, height: Math.abs(k - l2) };
                  "inside" === g[f].labelPlacement && 0 < f && (g[f].lineCoordinates.x1 = g[f].lineCoordinates.x1 + (y[f] - (g[f]._titleTextBlock ? g[f]._titleTextBlock.height : 0) - 2) - g[f].tickLength - (g[f].stripLineLabelEffectiveWidth || 0), g[f].lineCoordinates.x2 = g[f].lineCoordinates.x1 + g[f].lineThickness / 2);
                  "inside" === g[f].tickPlacement && 0 < f && (g[f].lineCoordinates.x1 += g[f].tickLength, g[f].lineCoordinates.x2 = g[f].lineCoordinates.x1 + g[f].lineThickness / 2);
                  g[f].bounds = { x1: g[f].lineCoordinates.x1, y1: l2, x2: t3 + y[f] + R3, y2: k, width: t3 - d2, height: k - l2 };
                  g[f].bounds.width = g[f].bounds.x2 - g[f].bounds.x1;
                  g[f].title && (g[f]._titleTextBlock.maxWidth = 0 < g[f].titleMaxWidth && g[f].titleMaxWidth < g[f].lineCoordinates.height ? g[f].titleMaxWidth : g[f].lineCoordinates.height);
                  g[f].calculateValueToPixelConversionParameters();
                  g[f].calculateBreaksSizeInValues();
                  R3 += y[f] + g[f].margin;
                }
              for (f = 0; f < q.length; f++)
                "axisY" === q[f].type && (q[f].calculateValueToPixelConversionParameters(), q[f].calculateBreaksSizeInValues());
              if (0 < w) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    v2 = N2[w - 1][f] === N2[w][f] ? true : false;
                else
                  v2 = true;
                if (g && 0 < g.length)
                  for (f = 0; f < g.length; f++)
                    K = P2[w - 1][f] === P2[w][f] ? true : false;
                else
                  K = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    J2 = D2[w - 1][f] === D2[w][f] ? true : false;
                else
                  J2 = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    L2 = s[w - 1][f] === s[w][f] ? true : false;
                else
                  L2 = true;
              }
              if (v2 && K && J2 && L2)
                break;
              w++;
            }
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (g && 0 < g.length)
              for (f = 0; f < g.length; f++)
                g[f].calculateStripLinesThicknessInValues(), g[f].calculateBreaksInPixels();
          }
        };
        D.render = function(a, g, c, b, e) {
          var h = a[0] ? a[0].chart : g[0].chart;
          e = h.ctx;
          h.alignVerticalAxes && h.alignVerticalAxes();
          e.save();
          e.beginPath();
          a && a.length && e.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[a.length - 1].bounds.y2);
          g && g.length && e.rect(5, g[g.length - 1].bounds.y1, g[0].chart.width - 10, g[0].bounds.y2);
          e.clip();
          if (a && 0 < a.length)
            for (var d2 = 0; d2 < a.length; d2++)
              a[d2].renderLabelsTicksAndTitle();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderLabelsTicksAndTitle();
          e.restore();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderLabelsTicksAndTitle();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderLabelsTicksAndTitle();
          h.preparePlotArea();
          h = h.plotArea;
          e.save();
          e.beginPath();
          e.rect(h.x1, h.y1, Math.abs(h.x2 - h.x1), Math.abs(h.y2 - h.y1));
          e.clip();
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderStripLinesOfThicknessType("value");
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderStripLinesOfThicknessType("value");
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderStripLinesOfThicknessType("value");
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderStripLinesOfThicknessType("value");
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderInterlacedColors();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderInterlacedColors();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderInterlacedColors();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderInterlacedColors();
          e.restore();
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderGrid(), v && (a[d2].createMask(), a[d2].renderBreaksBackground());
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderGrid(), v && (g[d2].createMask(), g[d2].renderBreaksBackground());
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderGrid(), v && (c[d2].createMask(), c[d2].renderBreaksBackground());
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderGrid(), v && (b[d2].createMask(), b[d2].renderBreaksBackground());
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderAxisLine();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderAxisLine();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderAxisLine();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderAxisLine();
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderStripLinesOfThicknessType("pixel");
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderStripLinesOfThicknessType("pixel");
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderStripLinesOfThicknessType("pixel");
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderStripLinesOfThicknessType("pixel");
        };
        D.prototype.calculateStripLinesThicknessInValues = function() {
          for (var a = 0; a < this.stripLines.length; a++)
            if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
              var g = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), b = this.getApparentDifference(g, c);
              this.stripLines[a].value = this.convertPixelToValue(Math.abs(this.convertValueToPixel(g) + this.convertValueToPixel(c)) / 2);
              this.stripLines[a].thickness = b;
              this.stripLines[a]._thicknessType = "value";
            }
        };
        D.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !n(this.scaleBreaks.options.spacing), e, h = 0; h < g.length; h++)
            e = b || !n(g[h].options.spacing), g[h].spacing = Va(g[h].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, g[h].size = 0 > g[h].spacing ? 0 : Math.abs(g[h].spacing / c), this.logarithmic && (g[h].size = Math.pow(
              this.logarithmBase,
              g[h].size
            ));
        };
        D.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
            var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
            for (var g = 0; g < a.length && !(a[g].startValue > this.conversionParameters.maximum); g++)
              a[g].endValue < this.conversionParameters.minimum || (n(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = g), a[g].startValue >= this.conversionParameters.minimum && (a[g].startPixel = this.convertValueToPixel(a[g].startValue), this.scaleBreaks.lastBreakIndex = g), a[g].endValue <= this.conversionParameters.maximum && (a[g].endPixel = this.convertValueToPixel(a[g].endValue)));
          }
        };
        D.prototype.renderLabelsTicksAndTitle = function() {
          var a = this, g = false, c = 0, b = 0, e = 1, h = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
          if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, d2, l2 = this.viewportMaximum, n2 = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  p = this._labels[k];
                  if (p.position < this.viewportMinimum)
                    break;
                  p.position > this.viewportMaximum || !(k === this._labels.length - 1 || d2 < Math.log(l2 / p.position) * n2 / e) || (c.push(p), l2 = p.position, d2 = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  p = this._labels[k], p.position < this.viewportMinimum || (d2 = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += d2);
                c > this.lineCoordinates.width * e && this.labelAutoFit && (g = true);
              }
            if ("left" === this._position || "right" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], m, l2 = this.viewportMaximum, n2 = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  p = this._labels[k];
                  if (p.position < this.viewportMinimum)
                    break;
                  p.position > this.viewportMaximum || !(k === this._labels.length - 1 || m < Math.log(l2 / p.position) * n2) || (c.push(p), l2 = p.position, m = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  p = this._labels[k], p.position < this.viewportMinimum || (m = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += m);
                b > this.lineCoordinates.height * e && this.labelAutoFit && (g = true);
              }
          }
          this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a2, b2) {
            return a2.position - b2.position;
          });
          var k = 0, p, q;
          if ("bottom" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y + this.tickLength << 0), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), p.textBlock.x = q.x, p.textBlock.y = q.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, q.y << 0);
                  a.ctx.lineTo(b2, q.y - a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock.fontSize / 2 - 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("top" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (p.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), p.textBlock.x = q.x, p.textBlock.y = q.y));
            "inside" === this.tickPlacement && this.chart.addEventListener(
              "dataAnimationIterationEnd",
              function() {
                for (k = 0; k < a._labels.length; k++)
                  if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                    a.ctx.lineWidth = a.tickThickness;
                    a.ctx.strokeStyle = a.tickColor;
                    var b2 = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                    a.ctx.save();
                    a.ctx.beginPath();
                    a.ctx.moveTo(b2, q.y << 0);
                    a.ctx.lineTo(b2, q.y + a.tickLength << 0);
                    a.ctx.stroke();
                    a.ctx.restore();
                  }
              },
              this
            );
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock.fontSize / 2 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("left" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(q.x << 0, b2);
                  a.ctx.lineTo(q.x + a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock.fontSize / 2 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("right" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(q.x << 0, b2);
                  a.ctx.lineTo(q.x - a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock.fontSize / 2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          }
          h = 0;
          if ("inside" === this.labelPlacement)
            this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                p = a._labels[k], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || g && 0 !== h++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(true), a.ctx.restore());
            }, this);
          else
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || g && 0 !== h++ % 2 && this.labelAutoFit) || p.textBlock.render(true);
        };
        D.prototype.renderInterlacedColors = function() {
          var a = this.chart.plotArea.ctx, g, c, b = this.chart.plotArea, e = 0;
          g = true;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              g ? (g = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, g.x), b.y1, Math.abs(c.x - g.x), Math.abs(b.y1 - b.y2)), g = false) : g = true;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              g ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), g = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, g.y), Math.abs(b.x1 - b.x2), Math.abs(g.y - c.y)), g = false) : g = true;
          a.beginPath();
        };
        D.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines && 0 < this.stripLines.length && a) {
            var g = this, c, b, e = 0, h = 0, d2 = false;
            b = false;
            for (var l2 = [], t3 = [], k = false, e = 0; e < this.stripLines.length; e++) {
              var m = this.stripLines[e];
              m._thicknessType === a && ("pixel" === a && (m.value < this.viewportMinimum || m.value > this.viewportMaximum || n(m.value) || isNaN(this.range)) || "value" === a && (m.startValue <= this.viewportMinimum && m.endValue <= this.viewportMinimum || m.startValue >= this.viewportMaximum && m.endValue >= this.viewportMaximum || n(m.startValue) || n(m.endValue) || isNaN(this.range)) || l2.push(m));
            }
            for (e = 0; e < this._stripLineLabels.length; e++)
              if (m = this.stripLines[e], c = this._stripLineLabels[e], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range)))
                if (b = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) {
                  m && (this.ctx.strokeStyle = m.color, this.ctx.lineWidth = "pixel" === m._thicknessType ? m.thickness : this.tickThickness);
                  if ("bottom" === this._position) {
                    var p = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p, b.y << 0);
                    this.ctx.lineTo(p, b.y + this.tickLength << 0);
                    this.ctx.stroke();
                    0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (b.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5));
                  } else
                    "top" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(p, b.y << 0), this.ctx.lineTo(p, b.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (b.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), b.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, p), this.ctx.lineTo(b.x - this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (b.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), b.x = 0 < this.labelAngle ? b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (p = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, p), this.ctx.lineTo(b.x + this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x + this.tickLength + 5 : (b.y = 0 > this.labelAngle ? b.y : b.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), b.x = 0 < this.labelAngle ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : b.x + this.tickLength + 5));
                  c.textBlock.x = b.x;
                  c.textBlock.y = b.y;
                  t3.push(c);
                } else
                  m._thicknessType === a && (c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - m.thickness / 2 > this.chart.plotArea.x1 ? n(m.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, n(m.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - m.thickness / 2 > this.chart.plotArea.x1 ? n(m.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, n(m.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - m.thickness / 2 > this.chart.plotArea.y1 ? n(m.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : n(m.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - m.thickness / 2 > this.chart.plotArea.y1 ? n(m.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : n(m.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3), c.textBlock.x = b.x, c.textBlock.y = b.y, t3.push(c));
            if (!k) {
              b = false;
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(
                this.chart.plotArea.x1,
                this.chart.plotArea.y1,
                this.chart.plotArea.width,
                this.chart.plotArea.height
              );
              this.ctx.clip();
              for (e = 0; e < l2.length; e++)
                m = l2[e], m.showOnTop ? d2 || (d2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                  this.ctx.clip();
                  for (h = 0; h < l2.length; h++)
                    m = l2[h], m.showOnTop && m.render();
                  this.ctx.restore();
                }, m)) : m.render();
              for (e = 0; e < t3.length; e++)
                c = t3[e], c.stripLine.showOnTop ? b || (b = true, this.chart.addEventListener(
                  "dataAnimationIterationEnd",
                  function() {
                    for (h = 0; h < t3.length; h++)
                      c = t3[h], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (g.ctx.save(), g.ctx.beginPath(), g.ctx.rect(g.chart.plotArea.x1, g.chart.plotArea.y1, g.chart.plotArea.width, g.chart.plotArea.height), g.ctx.clip(), c.textBlock.render(true), g.ctx.restore());
                  },
                  c.textBlock
                )) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(true);
              this.ctx.restore();
              k = true;
            }
            if (k)
              for (b = false, e = 0; e < t3.length; e++)
                c = t3[e], "outside" === c.stripLine.labelPlacement && c.textBlock.render(true);
          }
        };
        D.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
        };
        D.prototype.createMask = function() {
          if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
            var a = this.scaleBreaks._appliedBreaks;
            v ? (this.maskCanvas = va(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
            this.maskCtx.save();
            this.maskCtx.beginPath();
            this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.maskCtx.clip();
            for (var g = 0; g < a.length; g++)
              a[g].endValue < this.viewportMinimum || (a[g].startValue > this.viewportMaximum || isNaN(this.range)) || a[g].render(this.maskCtx);
            this.maskCtx.restore();
          }
        };
        D.prototype.renderCrosshair = function(a, g) {
          isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, g);
        };
        D.prototype.showCrosshair = function(a) {
          n(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(
            null,
            this.convertValueToPixel(a),
            a
          ));
        };
        D.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var g, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(H(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
              for (b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), g = this.getPixelCoordinatesOnAxis(this._labels[b].position), g = 1 === a.lineWidth % 2 ? (g.x << 0) + 0.5 : g.x << 0, a.moveTo(g, c.y1 << 0), a.lineTo(g, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
              for (var b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), g = this.getPixelCoordinatesOnAxis(this._labels[b].position), g = 1 === a.lineWidth % 2 ? (g.y << 0) + 0.5 : g.y << 0, a.moveTo(c.x1 << 0, g), a.lineTo(c.x2 << 0, g), a.stroke());
            a.restore();
          }
        };
        D.prototype.renderAxisLine = function() {
          var a = this.chart.ctx, g = v ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), e, h;
          g.save();
          if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
              this.reversed ? (e = this.lineCoordinates.x2, h = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, h = this.lineCoordinates.x2);
              g.lineWidth = this.lineThickness;
              g.strokeStyle = this.lineColor ? this.lineColor : "black";
              g.setLineDash && g.setLineDash(H(this.lineDashType, this.lineThickness));
              var d2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
              g.beginPath();
              if (this.scaleBreaks && !n(this.scaleBreaks.firstBreakIndex))
                if (n(this.scaleBreaks.lastBreakIndex))
                  e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                else
                  for (var l2 = this.scaleBreaks.firstBreakIndex; l2 <= this.scaleBreaks.lastBreakIndex; l2++)
                    g.moveTo(e, d2), g.lineTo(this.scaleBreaks._appliedBreaks[l2].startPixel + c, d2), e = this.scaleBreaks._appliedBreaks[l2].endPixel + b;
              e && (g.moveTo(e, d2), g.lineTo(h, d2));
              g.stroke();
            }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
            this.reversed ? (e = this.lineCoordinates.y1, h = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, h = this.lineCoordinates.y1);
            g.lineWidth = this.lineThickness;
            g.strokeStyle = this.lineColor;
            g.setLineDash && g.setLineDash(H(this.lineDashType, this.lineThickness));
            d2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
            g.beginPath();
            if (this.scaleBreaks && !n(this.scaleBreaks.firstBreakIndex))
              if (n(this.scaleBreaks.lastBreakIndex))
                e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
              else
                for (l2 = this.scaleBreaks.firstBreakIndex; l2 <= this.scaleBreaks.lastBreakIndex; l2++)
                  g.moveTo(d2, e), g.lineTo(d2, this.scaleBreaks._appliedBreaks[l2].startPixel + b), e = this.scaleBreaks._appliedBreaks[l2].endPixel + c;
            e && (g.moveTo(d2, e), g.lineTo(d2, h));
            g.stroke();
          }
          v && (a.drawImage(
            this.chart._preRenderCanvas,
            0,
            0,
            this.chart.width,
            this.chart.height
          ), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), g.clearRect(0, 0, this.chart.width, this.chart.height));
          g.restore();
        };
        D.prototype.getPixelCoordinatesOnAxis = function(a) {
          var g = {};
          if ("bottom" === this._position || "top" === this._position)
            g.x = this.convertValueToPixel(a), g.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position)
            g.y = this.convertValueToPixel(a), g.x = this.lineCoordinates.x2;
          return g;
        };
        D.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a)
            return null;
          var g = 0, c = 0, b, g = true, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
            a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (g)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                      g = false;
                    } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                      b /= e[c].startValue / this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                        break;
                      } else
                        a *= e[c].endValue / e[c].startValue / e[c].size;
                      b /= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b > e[c].startValue / e[c - 1].endValue) {
                    b /= e[c].startValue / e[c - 1].endValue;
                    if (b < e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                      break;
                    } else
                      a *= e[c].endValue / e[c].startValue / e[c].size;
                    b /= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (g)
                    if (e[c].endValue > this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) {
                        a = Math.pow(
                          e[c].endValue / e[c].startValue,
                          Math.log(b) / Math.log(e[c].size)
                        );
                        break;
                      } else
                        a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                      g = false;
                    } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                      b /= e[c].endValue / this.conversionParameters.minimum;
                      if (b > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break;
                      } else
                        a /= e[c].endValue / e[c].startValue / e[c].size;
                      b *= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b < e[c].endValue / e[c + 1].startValue) {
                    b /= e[c].endValue / e[c + 1].startValue;
                    if (b > 1 / e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                      break;
                    } else
                      a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                  } else
                    break;
            g = a * this.viewportMinimum;
          } else {
            a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (g)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].endValue - this.conversionParameters.minimum - e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                      g = false;
                    } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                      b -= e[c].startValue - this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                        break;
                      } else
                        a += e[c].endValue - e[c].startValue - e[c].size;
                      b -= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b > e[c].startValue - e[c - 1].endValue) {
                    b -= e[c].startValue - e[c - 1].endValue;
                    if (b < e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                      break;
                    } else
                      a += e[c].endValue - e[c].startValue - e[c].size;
                    b -= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (g)
                    if (e[c].endValue > this.conversionParameters.minimum)
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), g = false;
                    else if (b < e[c].endValue - this.conversionParameters.minimum) {
                      b -= e[c].endValue - this.conversionParameters.minimum;
                      if (b > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break;
                      } else
                        a -= e[c].endValue - e[c].startValue - e[c].size;
                      b += e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b < e[c].endValue - e[c + 1].startValue) {
                    b -= e[c].endValue - e[c + 1].startValue;
                    if (b > -1 * e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                      break;
                    } else
                      a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size;
                  } else
                    break;
            g = this.conversionParameters.minimum + a;
          }
          return g;
        };
        D.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        D.prototype.getApparentDifference = function(a, g, c, b) {
          var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
            c = n(c) ? g / a : c;
            for (var h = 0; h < e.length && !(g < e[h].startValue); h++)
              a > e[h].endValue || (a <= e[h].startValue && g >= e[h].endValue ? c = c / e[h].endValue * e[h].startValue * e[h].size : a >= e[h].startValue && g >= e[h].endValue ? c = c / e[h].endValue * a * Math.pow(e[h].size, Math.log(e[h].endValue / a) / Math.log(e[h].endValue / e[h].startValue)) : a <= e[h].startValue && g <= e[h].endValue ? c = c / g * e[h].startValue * Math.pow(e[h].size, Math.log(g / e[h].startValue) / Math.log(e[h].endValue / e[h].startValue)) : !b && (a > e[h].startValue && g < e[h].endValue) && (c = a * Math.pow(e[h].size, Math.log(g / a) / Math.log(e[h].endValue / e[h].startValue))));
          } else
            for (c = n(c) ? Math.abs(g - a) : c, h = 0; h < e.length && !(g < e[h].startValue); h++)
              a > e[h].endValue || (a <= e[h].startValue && g >= e[h].endValue ? c = c - e[h].endValue + e[h].startValue + e[h].size : a > e[h].startValue && g >= e[h].endValue ? c = c - e[h].endValue + a + e[h].size * (e[h].endValue - a) / (e[h].endValue - e[h].startValue) : a <= e[h].startValue && g < e[h].endValue ? c = c - g + e[h].startValue + e[h].size * (g - e[h].startValue) / (e[h].endValue - e[h].startValue) : !b && (a > e[h].startValue && g < e[h].endValue) && (c = a + e[h].size * (g - a) / (e[h].endValue - e[h].startValue)));
          return c;
        };
        D.prototype.setViewPortRange = function(a, g) {
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, g);
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, g);
        };
        D.prototype.getXValueAt = function(a) {
          if (!a)
            return null;
          var g = null;
          "left" === this._position ? g = this.convertPixelToValue(a.y) : "bottom" === this._position && (g = this.convertPixelToValue(a.x));
          return g;
        };
        D.prototype.calculateValueToPixelConversionParameters = function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var g = { pixelPerUnit: null, minimum: null, reference: null }, c = this.lineCoordinates.width, b = this.lineCoordinates.height, c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
          if (this.logarithmic)
            for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
          else
            for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
          g.minimum = this.viewportMinimum;
          g.maximum = this.viewportMaximum;
          g.range = b;
          if ("bottom" === this._position || "top" === this._position)
            this.logarithmic ? (g.lnLogarithmBase = Math.log(this.logarithmBase), g.pixelPerUnit = (this.reversed ? -1 : 1) * c * g.lnLogarithmBase / Math.log(Math.abs(b))) : g.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), g.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position)
            this.logarithmic ? (g.lnLogarithmBase = Math.log(this.logarithmBase), g.pixelPerUnit = (this.reversed ? 1 : -1) * c * g.lnLogarithmBase / Math.log(Math.abs(b))) : g.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), g.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = g;
        };
        D.prototype.calculateAxisParameters = function() {
          if (this.logarithmic)
            this.calculateLogarithmicAxisParameters();
          else {
            var a = this.chart.layoutManager.getFreeSpace(), g = false, c = false;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, b = 4;
            "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(b, Math.floor(this.maxWidth / a)), e, h, d2, b = 0;
            !n(this.options.viewportMinimum) && (!n(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
            if (n(this.options.viewportMinimum) && !n(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum))
              this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
              this.viewportMinimum = this.minimum;
            if (n(this.options.viewportMaximum) && !n(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum))
              this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
              this.viewportMaximum = this.maximum;
            if (this.scaleBreaks) {
              for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                if ((!n(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !n(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !n(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!n(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !n(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !n(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                  this.scaleBreaks._appliedBreaks.splice(b, 1);
                  break;
                }
            }
            if ("axisX" === this.type) {
              if (this.dataSeries && 0 < this.dataSeries.length)
                for (e = 0; e < this.dataSeries.length; e++)
                  "dateTime" === this.dataSeries[e].xValueType && (c = true);
              e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
              h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
              0 === h - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, e -= b);
              Infinity !== this.dataInfo.minDiff ? d2 = this.dataInfo.minDiff : 1 < h - e ? d2 = 0.5 * Math.abs(h - e) : (d2 = 1, c && (g = true));
            } else
              "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(h) ? isFinite(e) ? isFinite(h) || (h = e) : e = h : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === h ? (h += 9, e = 0) : 0 === h - e ? (b = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += b, e -= b) : e > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, e, null, true)), 5), 0 <= h ? e = h - b : h = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, h, null, true)), 0.05), 0 !== h && (h += b), 0 !== e && (e -= b)), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > h && (h = 0));
            b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? h : this.viewportMaximum, null, true);
            if ("axisX" === this.type && c) {
              this.valueType = "dateTime";
              this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * T.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * T.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * T.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * T.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * T.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * T.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * T.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * T.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * T.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * T.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * T.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * T.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * T.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * T.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * T.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * T.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * T.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * T.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * T.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * T.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * T.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * T.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * T.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * T.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * T.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * T.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * T.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * T.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * T.yearDuration) <= a ? 1 : b / (2 * T.yearDuration) <= a ? 2 : b / (4 * T.yearDuration) <= a ? 4 : Math.floor(D.getNiceNumber(b / (a - 1), true) / T.yearDuration), this.intervalType = "year"));
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = e - d2 / 2;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = h + d2 / 2;
              g ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
              this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
            } else {
              this.intervalType = "number";
              b = D.getNiceNumber(b, false);
              this.interval = this.options && 0 < this.options.interval ? this.options.interval : D.getNiceNumber(b / (a - 1), true);
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = "axisX" === this.type ? e - d2 / 2 : Math.floor(e / this.interval) * this.interval;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = "axisX" === this.type ? h + d2 / 2 : Math.ceil(h / this.interval) * this.interval;
              0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
            }
            if (null === this.minimum || null === this.maximum)
              if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === h - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, e -= b), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(h) ? 0 === e && 0 === h ? (h += 9, e = 0) : 0 === h - e ? (b = Math.min(
                Math.abs(0.01 * Math.abs(h)),
                5
              ), h += b, e -= b) : e > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, e, null, true)), 5), 0 <= h ? e = h - b : h = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, h, null, true)), 0.05), 0 !== h && (h += b), 0 !== e && (e -= b)) : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > h && (h = 0)), Math.abs(this.getApparentDifference(e, h, null, true)), "axisX" === this.type && c) {
                this.valueType = "dateTime";
                if (null === this.minimum || isNaN(this.minimum))
                  this.minimum = e - d2 / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
                if (null === this.maximum || isNaN(this.maximum))
                  this.maximum = h + d2 / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
              } else
                this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - d2 / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? h + d2 / 2 : Math.ceil(h / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
            n(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            n(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.range = this.viewportMaximum - this.viewportMinimum;
            this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            this.valueFormatString || (this.valueFormatString = D.generateValueFormatString(this.range, 2));
          }
        };
        D.prototype.calculateLogarithmicAxisParameters = function() {
          var a = this.chart.layoutManager.getFreeSpace(), g = Math.log(this.logarithmBase), c;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), b, e, h, d2;
          d2 = 1;
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = this.maximum;
          if (this.scaleBreaks) {
            for (d2 = 0; d2 < this.scaleBreaks._appliedBreaks.length; d2++)
              if ((!n(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[d2].startValue || !n(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[d2].startValue || !n(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[d2].startValue) && (!n(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[d2].endValue || !n(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[d2].endValue || !n(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[d2].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(d2, 1);
                break;
              }
          }
          "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / b && (d2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= d2, b /= d2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === e / b ? (d2 = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= d2, b /= d2) : b > e ? (d2 = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / d2 : e = b * d2) : (d2 = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= d2), 1 !== b && (b /= d2)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
          d2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          var l2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          this.intervalType = "number";
          d2 = Math.pow(this.logarithmBase, D.getNiceNumber(Math.abs(Math.log(d2) / g), false));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = D.getNiceExponent(Math.log(d2) / g / (a - 1), true), c = D.getNiceNumber(l2 / (a - 1), true));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / g / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / g / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = D.getNiceExponent(Math.ceil(Math.log(d2) / g) / (a - 1)), c = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
          if (null === this.minimum || null === this.maximum)
            "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (d2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= d2, b /= d2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (d2 = Math.pow(this.logarithmBase, this.interval), e *= d2, b /= d2) : b > e ? (d2 = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / d2 : e = b * d2) : (d2 = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= d2), 1 !== b && (b /= d2)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / g / this.interval)), n(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / g / this.interval)), n(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(
            this.viewportMaximum,
            this.maximum
          );
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) * this.interval);
          this.range = this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (g = Math.floor(this.viewportMinimum / c + 0.5) * c; g < this.viewportMinimum; )
              g += c;
            this.equidistantInterval = false;
            this.intervalStartPosition = g;
            this.interval = c;
          } else
            this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = b;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            g = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(g) || !isFinite(g))
              g = 2;
            if (2 < g)
              for (d2 = 0; d2 < g - 2; d2++)
                this.valueFormatString += "#";
          }
        };
        D.generateValueFormatString = function(a, g) {
          var c = "#,##0.", b = g;
          1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = g);
          for (var e = 0; e < b; e++)
            c += "#";
          return c;
        };
        D.getNiceExponent = function(a, g) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        D.getNiceNumber = function(a, g) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = g ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        D.prototype.getLabelStartPoint = function() {
          var a = T[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType)
              0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
              if (0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("hour" === this.intervalType) {
              if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("day" === this.intervalType) {
              if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("week" === this.intervalType) {
              if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("month" === this.intervalType) {
              if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else
              "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
          return a;
        };
        qa(ea2, Z);
        qa(ca2, Z);
        ca2.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var g = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ea(this.parent[this.optionsName]), g = this.parent.options[this.optionsName].indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options[this.optionsName][g] = this.options;
          }
        };
        ca2.prototype.render = function(a) {
          if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
            var g = this.ctx, c = this.ctx.globalAlpha;
            this.ctx = a || this.ctx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
            this.ctx.strokeStyle = this.lineColor;
            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.globalAlpha = 1;
            O(this.id);
            var d2, l2, n2, t3, k, m;
            a = Math.max(this.spacing, 3);
            var p = Math.max(0, this.lineThickness);
            this.ctx.lineWidth = p;
            this.ctx.setLineDash && this.ctx.setLineDash(H(this.lineDashType, p));
            if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
              if (b = 1 === p % 2 ? (b.x << 0) + 0.5 : b.x << 0, l2 = 1 === p % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, n2 = this.chart.plotArea.y2 + p / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, n2 = this.chart.plotArea.y1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - p / 2, y1: e, x2: l2 + p / 2, y2: n2 }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(b, n2), this.ctx.lineTo(l2, n2), this.ctx.lineTo(l2, e);
              else if ("wavy" === this.type) {
                t3 = b;
                k = e;
                d2 = 0.5;
                m = (n2 - k) / a / 3;
                for (var q = 0; q < m; q++)
                  this.ctx.bezierCurveTo(t3 + d2 * a, k + a, t3 + d2 * a, k + 2 * a, t3, k + 3 * a), k += 3 * a, d2 *= -1;
                this.ctx.bezierCurveTo(
                  t3 + d2 * a,
                  k + a,
                  t3 + d2 * a,
                  k + 2 * a,
                  t3,
                  k + 3 * a
                );
                t3 = l2;
                d2 *= -1;
                this.ctx.lineTo(t3, k);
                for (q = 0; q < m; q++)
                  this.ctx.bezierCurveTo(t3 + d2 * a, k - a, t3 + d2 * a, k - 2 * a, t3, k - 3 * a), k -= 3 * a, d2 *= -1;
              } else {
                if ("zigzag" === this.type) {
                  d2 = -1;
                  k = e + a;
                  t3 = b + a;
                  m = (n2 - k) / a / 2;
                  for (q = 0; q < m; q++)
                    this.ctx.lineTo(t3, k), t3 += 2 * d2 * a, k += 2 * a, d2 *= -1;
                  this.ctx.lineTo(t3, k);
                  t3 += l2 - b;
                  for (q = 0; q < m + 1; q++)
                    this.ctx.lineTo(t3, k), t3 += 2 * d2 * a, k -= 2 * a, d2 *= -1;
                  this.ctx.lineTo(t3 + d2 * a, k + a);
                }
              }
            else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
              if (e = 1 === p % 2 ? (e.y << 0) + 0.5 : e.y << 0, n2 = 1 === p % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, l2 = this.chart.plotArea.x2 + p / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, l2 = this.chart.plotArea.x1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: e - p / 2, x2: l2, y2: n2 + p / 2 }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(l2, e), this.ctx.lineTo(l2, n2), this.ctx.lineTo(b, n2);
              else if ("wavy" === this.type) {
                t3 = b;
                k = e;
                d2 = 0.5;
                m = (l2 - t3) / a / 3;
                for (q = 0; q < m; q++)
                  this.ctx.bezierCurveTo(t3 + a, k + d2 * a, t3 + 2 * a, k + d2 * a, t3 + 3 * a, k), t3 += 3 * a, d2 *= -1;
                this.ctx.bezierCurveTo(t3 + a, k + d2 * a, t3 + 2 * a, k + d2 * a, t3 + 3 * a, k);
                k = n2;
                d2 *= -1;
                this.ctx.lineTo(t3, k);
                for (q = 0; q < m; q++)
                  this.ctx.bezierCurveTo(t3 - a, k + d2 * a, t3 - 2 * a, k + d2 * a, t3 - 3 * a, k), t3 -= 3 * a, d2 *= -1;
              } else if ("zigzag" === this.type) {
                d2 = 1;
                k = e - a;
                t3 = b + a;
                m = (l2 - t3) / a / 2;
                for (q = 0; q < m; q++)
                  this.ctx.lineTo(t3, k), k += 2 * d2 * a, t3 += 2 * a, d2 *= -1;
                this.ctx.lineTo(t3, k);
                k += n2 - e;
                for (q = 0; q < m + 1; q++)
                  this.ctx.lineTo(t3, k), k += 2 * d2 * a, t3 -= 2 * a, d2 *= -1;
                this.ctx.lineTo(t3 + a, k + d2 * a);
              }
            }
            0 < p && this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.globalAlpha = this.fillOpacity;
            this.ctx.globalCompositeOperation = "destination-over";
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.globalAlpha = c;
            this.ctx = g;
          }
        };
        qa(P, Z);
        P.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var g = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ea(this.parent.stripLines), g = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[g] = this.options;
          }
        };
        P.prototype.render = function() {
          this.ctx.save();
          var a = this.parent.getPixelCoordinatesOnAxis(this.value), g = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
          if (0 < g) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var b = this.ctx.globalAlpha;
            this.ctx.globalAlpha = c;
            O(this.id);
            var e, d2, l2, n2;
            this.ctx.lineWidth = g;
            this.ctx.setLineDash && this.ctx.setLineDash(H(this.lineDashType, g));
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              e = d2 = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, l2 = this.chart.plotArea.y1, n2 = this.chart.plotArea.y2, this.bounds = { x1: e - g / 2, y1: l2, x2: d2 + g / 2, y2: n2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              l2 = n2 = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, d2 = this.chart.plotArea.x2, this.bounds = {
                x1: e,
                y1: l2 - g / 2,
                x2: d2,
                y2: n2 + g / 2
              };
            this.ctx.moveTo(e, l2);
            this.ctx.lineTo(d2, n2);
            this.ctx.stroke();
            this.ctx.globalAlpha = b;
          }
          this.ctx.restore();
        };
        qa(da2, Z);
        da2.prototype.showAt = function(a) {
          if (!this.enabled)
            return false;
          var g = this.chart, c = false;
          g.resetOverlayedCanvas();
          g.clearedOverlayedCanvas = this.parent.type;
          this.chart.renderCrosshairs(this.parent);
          if ("xySwapped" === g.plotInfo.axisPlacement)
            if ("bottom" === this.parent._position)
              for (var b = 0; b < g.axisY.length; b++)
                this.parent === g.axisY[b] && (g.axisY[b]._crosshairValue = a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position)
              for (b = 0; b < g.axisY2.length; b++)
                this.parent === g.axisY2[b] && (g.axisY2[b]._crosshairValue = a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
              for (b = 0; b < g.axisX.length; b++)
                this.parent === g.axisX[b] && (g.axisX[b]._crosshairValue = a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum ? a : null);
            else {
              if ("right" === this.parent._position)
                for (b = 0; b < g.axisX2.length; b++)
                  this.parent === g.axisX2[b] && (g.axisX2[b]._crosshairValue = a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum ? a : null);
            }
          else if ("bottom" === this.parent._position)
            for (b = 0; b < g.axisX.length; b++)
              this.parent === g.axisX[b] && (g.axisX[b]._crosshairValue = a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum ? a : null);
          else if ("top" === this.parent._position)
            for (b = 0; b < g.axisX2.length; b++)
              this.parent === g.axisX2[b] && (g.axisX2[b]._crosshairValue = a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum ? a : null);
          else if ("left" === this.parent._position)
            for (b = 0; b < g.axisY.length; b++)
              this.parent === g.axisY[b] && (g.axisY[b]._crosshairValue = a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum ? a : null);
          else if ("right" === this.parent._position)
            for (b = 0; b < g.axisY2.length; b++)
              this.parent === g.axisY2[b] && (g.axisY2[b]._crosshairValue = a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum ? a : null);
          for (b = 0; b < g.axisX.length; b++)
            a = g.axisX[b]._crosshairValue, g.axisX[b].crosshair && (g.axisX[b].crosshair.enabled && !n(a) && a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum) && (g.axisX[b].showCrosshair(a), g.axisX[b].crosshair._updatedValue = a, this === g.axisX[b].crosshair && (c = true));
          for (b = 0; b < g.axisX2.length; b++)
            a = g.axisX2[b]._crosshairValue, g.axisX2[b].crosshair && (g.axisX2[b].crosshair.enabled && !n(a) && a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum) && (g.axisX2[b].showCrosshair(a), g.axisX2[b].crosshair._updatedValue = a, this === g.axisX2[b].crosshair && (c = true));
          for (b = 0; b < g.axisY.length; b++)
            a = g.axisY[b]._crosshairValue, g.axisY[b].crosshair && (g.axisY[b].crosshair.enabled && !n(a) && a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum) && (g.axisY[b].showCrosshair(a), g.axisY[b].crosshair._updatedValue = a, this === g.axisY[b].crosshair && (c = true));
          for (b = 0; b < g.axisY2.length; b++)
            a = g.axisY2[b]._crosshairValue, g.axisY2[b].crosshair && (g.axisY2[b].crosshair.enabled && !n(a) && a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum) && (g.axisY2[b].showCrosshair(a), g.axisY2[b].crosshair._updatedValue = a, this === g.axisY2[b].crosshair && (c = true));
          this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          return c;
        };
        da2.prototype.hide = function() {
          this.chart.resetOverlayedCanvas();
          this.chart.renderCrosshairs(this.parent);
          this._hidden = true;
        };
        da2.prototype.render = function(a, g, c) {
          var b, e, d2, l2, t3 = null, v2 = null, k = null, m = "";
          this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0, k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0), this.valueFormatString = D.generateValueFormatString(this.parent.range, k)));
          var p = null === this.opacity ? 1 : this.opacity, q = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), f = this.chart.overlaidCanvasCtx, A3 = f.globalAlpha;
          f.beginPath();
          f.strokeStyle = this.color;
          f.lineWidth = q;
          f.save();
          this.labelFontSize = Math.abs(n(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
          this.labelMaxWidth = n(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
          this.labelMaxHeight = n(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
          0 < q && f.setLineDash && f.setLineDash(H(this.lineDashType, q));
          k = new ka(f, {
            x: 0,
            y: 0,
            padding: { top: 2, right: 3, bottom: 2, left: 4 },
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            borderThickness: this.labelBorderThickness,
            cornerRadius: this.labelCornerRadius,
            maxWidth: this.labelMaxWidth,
            maxHeight: this.labelMaxHeight,
            angle: this.labelAngle,
            text: m,
            horizontalAlign: "left",
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle"
          });
          if (this.snapToDataPoint) {
            var w = 0, m = [];
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
              var y = null;
              if ("bottom" === this.parent._position || "top" === this.parent._position)
                w = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: g });
              else if ("left" === this.parent._position || "right" === this.parent._position)
                w = this.parent.convertPixelToValue({ y: g });
              for (var s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              y = null;
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              var z = y = 0;
              yPercent = cumulativeY = 0;
              for (var w = Infinity, u, s = 0; s < m.length; s++) {
                if ("rangeBar" === m[s].dataSeries.type || "error" === m[s].dataSeries.type) {
                  if (m[s].dataPoint.y)
                    for (var E = 0; E < m[s].dataPoint.y.length; E++)
                      z = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y[E])), z <= w && (w = z, y = s);
                } else
                  "stackedBar" === m[s].dataSeries.type ? (cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(a - this.parent.convertValueToPixel(cumulativeY)), z <= w && (w = z, y = s)) : "stackedBar100" === m[s].dataSeries.type ? (z = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x, n(u) && (u = Math.abs(a - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z])))), cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, yPercent = 100 * (cumulativeY / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(a - this.parent.convertValueToPixel(yPercent)), z <= u && (u = z, y = s)) : (z = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y)), z <= w && (w = z, y = s));
                n(u) || (w = Math.min(w, u));
              }
              u = m[y];
              s = 0;
              if ("bottom" === this.parent._position || "top" === this.parent._position) {
                if ("rangeBar" === u.dataSeries.type || "error" === u.dataSeries.type) {
                  w = Math.abs(a - this.parent.convertValueToPixel(u.dataPoint.y[0]));
                  for (m = 0; m < u.dataPoint.y.length; m++)
                    z = Math.abs(a - this.parent.convertValueToPixel(u.dataPoint.y[m])), z < w && (w = z, s = m);
                  t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0;
                  this.value = u.dataPoint.y[s];
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y[s] }) : n(this.options.label) ? ga(n(c) ? u.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                } else
                  "stackedBar" === u.dataSeries.type ? (w = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), cumulativeY = u.dataSeries.dataPointEOs[u.index].cumulativeY, t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0, this.value = cumulativeY, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: cumulativeY }) : n(this.options.label) ? ga(n(c) ? cumulativeY : c, this.valueFormatString, this.chart._cultureInfo) : this.label) : "stackedBar100" === u.dataSeries.type ? (w = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), cumulativeY = u.dataSeries.dataPointEOs[u.index].cumulativeY, z = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, yPercent = 100 * (cumulativeY / u.dataSeries.plotUnit.dataPointYSums[z]), t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0, this.value = yPercent, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: yPercent }) : n(this.options.label) ? ga(
                    n(c) ? yPercent : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  ) : this.label) : (t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y) << 0, this.value = u.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y }) : n(this.options.label) ? ga(n(c) ? u.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label);
                b = e = t3;
                d2 = this.chart.plotArea.y1;
                l2 = this.chart.plotArea.y2;
                this.bounds = { x1: b - q / 2, y1: d2, x2: e + q / 2, y2: l2 };
                k.x = b - k.measureText().width / 2;
                k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
              } else if ("left" === this.parent._position || "right" === this.parent._position) {
                d2 = l2 = v2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.x) << 0;
                b = this.chart.plotArea.x1;
                e = this.chart.plotArea.x2;
                this.bounds = { x1: b, y1: d2 - q / 2, x2: e, y2: l2 + q / 2 };
                s = false;
                if (this.parent.labels)
                  for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w)
                    if (this.parent.labels[m])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (w = this.parent.convertPixelToValue({ y: g }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (y = this.parent.dataSeries[s].getDataPointAtX(
                        w,
                        true
                      )) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? y.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? ga(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? Da(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = u.dataPoint.x;
                k.y = l2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              }
            } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              w = this.parent.convertPixelToValue({ x: a });
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              u = m[0];
              b = e = t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.x) << 0;
              d2 = this.chart.plotArea.y1;
              l2 = this.chart.plotArea.y2;
              this.bounds = { x1: b - q / 2, y1: d2, x2: e + q / 2, y2: l2 };
              s = false;
              if (this.parent.labels)
                for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w)
                  if (this.parent.labels[m])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (w = this.parent.convertPixelToValue({ x: a }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? y.dataPoint.label : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? ga(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? Da(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = u.dataPoint.x;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              !n(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (w = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              z = y = 0;
              w = Infinity;
              for (s = 0; s < m.length; s++) {
                if ("rangeColumn" === m[s].dataSeries.type || "rangeArea" === m[s].dataSeries.type || "error" === m[s].dataSeries.type || "rangeSplineArea" === m[s].dataSeries.type || "candlestick" === m[s].dataSeries.type || "ohlc" === m[s].dataSeries.type || "boxAndWhisker" === m[s].dataSeries.type) {
                  if (m[s].dataPoint.y)
                    for (E = 0; E < m[s].dataPoint.y.length; E++)
                      z = Math.abs(g - this.parent.convertValueToPixel(m[s].dataPoint.y[E])), z <= w && (w = z, y = s);
                } else
                  "stackedColumn" === m[s].dataSeries.type ? (b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= w && (w = z, y = s)) : "stackedArea" === m[s].dataSeries.type ? (b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= w && (w = z, y = s)) : "stackedColumn100" === m[s].dataSeries.type || "stackedArea100" === m[s].dataSeries.type ? (z = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x, n(u) && (u = Math.abs(g - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z])))), "stackedColumn100" === m[s].dataSeries.type ? (v2 = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, b = 100 * (v2 / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= u && (u = z, y = s)) : "stackedArea100" === m[s].dataSeries.type && (v2 = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, b = 100 * (v2 / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= u && (u = z, y = s))) : "waterfall" === m[s].dataSeries.type ? (z = Math.abs(g - this.parent.convertValueToPixel(m[s].dataSeries.dataPointEOs[m[s].index].cumulativeSum)), z <= w && (u = w = z, y = s)) : (z = Math.abs(g - this.parent.convertValueToPixel(m[s].dataPoint.y)), z <= w && (w = z, y = s));
                n(u) || (w = Math.min(w, u));
              }
              u = m[y];
              s = 0;
              if ("rangeColumn" === u.dataSeries.type || "rangeArea" === u.dataSeries.type || "error" === u.dataSeries.type || "rangeSplineArea" === u.dataSeries.type || "candlestick" === u.dataSeries.type || "ohlc" === u.dataSeries.type || "boxAndWhisker" === u.dataSeries.type) {
                w = Math.abs(g - this.parent.convertValueToPixel(u.dataPoint.y[0]));
                for (m = 0; m < u.dataPoint.y.length; m++)
                  z = Math.abs(g - this.parent.convertValueToPixel(u.dataPoint.y[m])), z < w && (w = z, s = m);
                v2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0;
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y[s] }) : n(this.options.label) ? ga(n(c) ? u.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = u.dataPoint.y[s];
              } else
                "stackedColumn" === u.dataSeries.type ? (b = u.dataSeries.dataPointEOs[u.index].cumulativeY, v2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : n(this.options.label) ? ga(n(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea" === u.dataSeries.type ? (b = u.dataSeries.dataPointEOs[u.index].cumulativeY, v2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b }) : n(this.options.label) ? ga(n(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedColumn100" === u.dataSeries.type ? (v2 = u.dataSeries.dataPointEOs[u.index].cumulativeY, z = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, b = 100 * (v2 / u.dataSeries.plotUnit.dataPointYSums[z]), v2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b }) : n(this.options.label) ? ga(n(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea100" === u.dataSeries.type ? (v2 = u.dataSeries.dataPointEOs[u.index].cumulativeY, z = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, b = 100 * (v2 / u.dataSeries.plotUnit.dataPointYSums[z]), v2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : n(this.options.label) ? ga(n(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "waterfall" === u.dataSeries.type ? (v2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataSeries.dataPointEOs[u.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataSeries.dataPointEOs[u.index].cumulativeSum) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataSeries.dataPointEOs[u.index].cumulativeSum }) : n(this.options.label) ? ga(n(c) ? u.dataSeries.dataPointEOs[u.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = u.dataSeries.dataPointEOs[u.index].cumulativeSum) : (v2 = 1 === f.lineWidth % 2 ? (n(a) ? g : this.parent.convertValueToPixel(u.dataPoint.y) << 0) + 0.5 : n(a) ? g : this.parent.convertValueToPixel(u.dataPoint.y) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? u.dataPoint.y : c }) : n(this.options.label) ? ga(n(c) ? u.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = u.dataPoint.y);
              d2 = l2 = v2;
              b = this.chart.plotArea.x1;
              e = this.chart.plotArea.x2;
              this.bounds = { x1: b, y1: d2 - q / 2, x2: e, y2: l2 + q / 2 };
              k.y = l2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            }
            m = null;
            f.globalAlpha = p;
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), this.value >= Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < q && (f.moveTo(b, d2), f.lineTo(e, l2), f.stroke(), this._hidden = false);
            if ("left" === this.parent._position || "right" === this.parent._position)
              "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), this.value >= Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < q && (f.moveTo(b, d2), f.lineTo(e, l2), f.stroke(), this._hidden = false);
          } else {
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              b = e = t3 = 1 === f.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, d2 = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2, this.bounds = { x1: b - q / 2, y1: d2, x2: e + q / 2, y2: l2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              d2 = l2 = v2 = 1 === f.lineWidth % 2 ? (g << 0) + 0.5 : g << 0, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = { x1: b, y1: d2 - q / 2, x2: e, y2: l2 + q / 2 };
            if ("xySwapped" === this.chart.plotInfo.axisPlacement)
              if ("left" === this.parent._position || "right" === this.parent._position) {
                s = false;
                if (this.parent.labels)
                  for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w)
                    if (this.parent.labels[m])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (w = this.parent.convertPixelToValue({ y: g }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (y = this.parent.dataSeries[s].getDataPointAtX(
                        w,
                        true
                      )) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(a) : c }) : n(this.options.label) ? y.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(g) : c }) : n(this.options.label) ? ga(n(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(g) : c }) : n(this.options.label) ? Da(n(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(a) : c }) : n(this.options.label) ? ga(n(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
              }
            else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              s = false;
              m = "";
              if (this.parent.labels)
                for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w)
                  if (this.parent.labels[m])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (w = this.parent.convertPixelToValue({ x: a }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(a) : c }) : n(this.options.label) ? n(c) ? y.dataPoint.label : c : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c }) : n(this.options.label) ? ga(n(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: n(c) ? this.parent.convertPixelToValue(a) : c
                }) : n(this.options.label) ? Da(n(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position)
              k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(g) : c }) : n(this.options.label) ? ga(n(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
            f.globalAlpha = p;
            0 < q && (f.moveTo(b, d2), f.lineTo(e, l2), f.stroke(), this._hidden = false);
            this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(g);
          }
          if ("bottom" === this.parent._position || "top" === this.parent._position)
            this._updatedValue = this.parent.convertPixelToValue(t3);
          if ("left" === this.parent._position || "right" === this.parent._position)
            this._updatedValue = this.parent.convertPixelToValue(v2);
          this._textBlock = k;
          this._label = c;
          n(c) || this.renderLabel();
          f.restore();
          f.globalAlpha = A3;
        };
        da2.prototype.renderLabel = function() {
          this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && (n(this._textBlock) || (n(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(true), n(this._label) && this.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this.parent, value: this.value }, this.parent));
        };
        qa(oa, Z);
        oa.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("shared");
          this.updateOption("animationEnabled");
          this.updateOption("content");
          this.updateOption("contentFormatter");
          this.updateOption("reversed");
          this.updateOption("backgroundColor");
          this.updateOption("borderColor");
          this.updateOption("borderThickness");
          this.updateOption("cornerRadius");
          this.updateOption("fontSize");
          this.updateOption("fontColor");
          this.updateOption("fontFamily");
          this.updateOption("fontWeight");
          this.updateOption("fontStyle");
        };
        oa.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute(
              "class",
              "canvasjs-chart-tooltip"
            );
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.pointerEvents = "none";
            this.container.style.display = "none";
            var a = document.createElement("div");
            a.style.width = "auto";
            a.style.height = "auto";
            a.style.minWidth = "50px";
            a.style.lineHeight = "normal";
            a.style.margin = "0px 0px 0px 0px";
            a.style.padding = "5px";
            a.style.fontFamily = "Calibri, Arial, Georgia, serif";
            a.style.fontWeight = "normal";
            a.style.fontStyle = v ? "italic" : "normal";
            a.style.fontSize = "14px";
            a.style.color = "#000000";
            a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
            a.style.textAlign = "left";
            a.style.border = "2px solid gray";
            a.style.background = v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
            a.style.textIndent = "0px";
            a.style.whiteSpace = "nowrap";
            a.style.borderRadius = "5px";
            a.style.MozUserSelect = "none";
            a.style.WebkitUserSelect = "none";
            a.style.msUserSelect = "none";
            a.style.userSelect = "none";
            v || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
            a.innerText = "Sample Tooltip";
            this.container.appendChild(a);
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container);
          }
        };
        oa.prototype.mouseMoveHandler = function(a, g) {
          this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, g), this.enabled && (this._updatedEventParameters && !isNaN(this._prevX) && !isNaN(this._prevY)) && this.dispatchEvent("updated", this._updatedEventParameters, this));
        };
        oa.prototype._updateToolTip = function(a, g, c) {
          c = "undefined" === typeof c ? true : c;
          this._updateOptions();
          this.container || this._initialize();
          this.enabled || this.hide();
          if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof g) {
              if (isNaN(this._prevX) || isNaN(this._prevY))
                return;
              a = this._prevX;
              g = this._prevY;
            } else
              this._prevX = a, this._prevY = g;
            var b = null, e = null, d2 = [], l2 = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
              var t3 = [];
              if (this.chart.axisX)
                for (var A3 = 0; A3 < this.chart.axisX.length; A3++) {
                  for (var l2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[A3].convertPixelToValue({ y: g }) : this.chart.axisX[A3].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX[A3].dataSeries.length; b++)
                    (k = this.chart.axisX[A3].dataSeries[b].getDataPointAtX(l2, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[A3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && t3.push(k));
                  k = null;
                }
              if (this.chart.axisX2)
                for (A3 = 0; A3 < this.chart.axisX2.length; A3++) {
                  l2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[A3].convertPixelToValue({ y: g }) : this.chart.axisX2[A3].convertPixelToValue({ x: a });
                  k = null;
                  for (b = 0; b < this.chart.axisX2[A3].dataSeries.length; b++)
                    (k = this.chart.axisX2[A3].dataSeries[b].getDataPointAtX(l2, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[A3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && t3.push(k));
                  k = null;
                }
              if (0 === t3.length)
                return;
              t3.sort(function(a2, b2) {
                return a2.dataSeries.axisX.logarithmic || b2.dataSeries.axisX.logarithmic ? a2.distance - b2.distance : a2.distance / a2.dataSeries.axisX.range - b2.distance / b2.dataSeries.axisX.range;
              });
              c = t3[0];
              for (b = 0; b < t3.length; b++)
                t3[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && d2.push(t3[b]);
              t3 = null;
            } else {
              if (b = this.chart.getDataPointAtXY(a, g, c))
                this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
              else if (v)
                if (b = bb(a, g, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                  b = this.chart._eventManager.objectMap[b];
                  if ("legendItem" === b.objectType)
                    return;
                  this.currentSeriesIndex = b.dataSeriesIndex;
                  this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1;
                } else
                  this.currentDataPointIndex = -1;
              else
                this.currentDataPointIndex = -1;
              if (0 <= this.currentSeriesIndex) {
                e = this.chart.data[this.currentSeriesIndex];
                k = {};
                if (0 <= this.currentDataPointIndex)
                  b = e.dataPoints[this.currentDataPointIndex], k.dataSeries = e, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - l2), "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                else if (this.enabled && e && ("line" === e.type || "stepLine" === e.type || "spline" === e.type || "area" === e.type || "stepArea" === e.type || "splineArea" === e.type || "stackedArea" === e.type || "stackedArea100" === e.type || "rangeArea" === e.type || "rangeSplineArea" === e.type || "candlestick" === e.type || "ohlc" === e.type || "boxAndWhisker" === e.type))
                  l2 = e.axisX.convertPixelToValue({ x: a }), k = e.getDataPointAtX(l2, c), n(k) || (k.dataSeries = e, this.currentDataPointIndex = k.index, b = k.dataPoint);
                else {
                  "toolTip" === this.chart.clearedOverlayedCanvas && (this.chart.resetOverlayedCanvas(), this.chart.clearedOverlayedCanvas = null);
                  return;
                }
                if (!n(k) && !n(k.dataPoint) && !n(k.dataPoint.y))
                  if (k.dataSeries.axisY)
                    if (0 < k.dataPoint.y.length) {
                      for (b = c = 0; b < k.dataPoint.y.length; b++)
                        k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                      c < k.dataPoint.y.length && c > -k.dataPoint.y.length && d2.push(k);
                    } else
                      "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && d2.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && d2.push(k) : "bubble" === e.type ? (c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && d2.push(k)) : "waterfall" === e.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && d2.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && d2.push(k);
                  else
                    d2.push(k);
              }
            }
            if (0 < d2.length) {
              if (this.highlightObjects(d2), this.enabled) {
                c = "";
                c = this.getToolTipInnerHTML({ entries: d2 });
                if (null !== c) {
                  this.contentDiv.innerHTML = c;
                  if (this.isToolTipDefinedInData && n(this.options.content) && n(this.options.contentFormatter))
                    for (l2 = this.contentDiv.getElementsByTagName("span"), b = 0; b < l2.length; b++)
                      l2[b] && (l2[b].style.color = l2[b].getAttribute("data-color"));
                  l2 = false;
                  "none" === this.container.style.display && (l2 = true, this.container.style.display = "block");
                  try {
                    this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === d2[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : d2[0].dataPoint.color ? d2[0].dataPoint.color : 0 < d2[0].dataPoint.y ? d2[0].dataSeries.risingColor : d2[0].dataSeries.fallingColor : "error" === d2[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : d2[0].dataSeries.color ? d2[0].dataSeries.color : d2[0].dataSeries._colorSet[e.index % d2[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : d2[0].dataPoint.color ? d2[0].dataPoint.color : d2[0].dataSeries.color ? d2[0].dataSeries.color : d2[0].dataSeries._colorSet[d2[0].index % d2[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : v ? "italic" : "normal";
                  } catch (m) {
                  }
                  "pie" === d2[0].dataSeries.type || "doughnut" === d2[0].dataSeries.type || "funnel" === d2[0].dataSeries.type || "pyramid" === d2[0].dataSeries.type || "bar" === d2[0].dataSeries.type || "rangeBar" === d2[0].dataSeries.type || "stackedBar" === d2[0].dataSeries.type || "stackedBar100" === d2[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = d2[0].dataSeries.axisX.convertValueToPixel(d2[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                  0 > a && (a += this.container.clientWidth + 20);
                  a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  g = 1 !== d2.length || this.shared || "line" !== d2[0].dataSeries.type && "stepLine" !== d2[0].dataSeries.type && "spline" !== d2[0].dataSeries.type && "area" !== d2[0].dataSeries.type && "stepArea" !== d2[0].dataSeries.type && "splineArea" !== d2[0].dataSeries.type ? "bar" === d2[0].dataSeries.type || "rangeBar" === d2[0].dataSeries.type || "stackedBar" === d2[0].dataSeries.type || "stackedBar100" === d2[0].dataSeries.type ? d2[0].dataSeries.axisX.convertValueToPixel(d2[0].dataPoint.x) : g : d2[0].dataSeries.axisY.convertValueToPixel(d2[0].dataPoint.y);
                  g = -g + 10;
                  0 < g + this.container.clientHeight + 5 && (g -= g + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(a, g);
                  !this.animationEnabled || l2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.positionLeft = a;
                  this.positionBottom = g;
                  this.container.style.left = a + "px";
                  this.container.style.bottom = g + "px";
                } else
                  this.hide(false), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                g = [];
                for (b = 0; b < d2.length; b++)
                  g.push({ xValue: d2[b].dataPoint.x, dataPoint: d2[b].dataPoint, dataSeries: d2[b].dataSeries, dataPointIndex: d2[b].index, dataSeriesIndex: d2[b].dataSeries._index });
                this._updatedEventParameters = { chart: this.chart, toolTip: this.options, content: c, entries: g };
                this._entries = d2;
              }
            } else
              this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
            this._dataSeriesIndex = this._xValue = null;
          }
        };
        oa.prototype.highlightObjects = function(a) {
          var g = this.chart.overlaidCanvasCtx;
          n(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas ? (this.chart.resetOverlayedCanvas(), g.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip") : this.chart.clearedOverlayedCanvas = null;
          g.save();
          var c = this.chart.plotArea, b = 0;
          g.beginPath();
          g.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
          g.clip();
          for (c = 0; c < a.length; c++) {
            var e = a[c];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
              var b = this.chart.data[e.dataSeriesIndex], d2 = b.dataPoints[e.dataPointIndex], l2 = e.dataPointIndex;
              false === d2.highlightEnabled || true !== b.highlightEnabled && true !== d2.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (d2 = b.getMarkerProperties(l2, e.x1, e.y1, this.chart.overlaidCanvasCtx), d2.size = Math.max(1.5 * d2.size << 0, 10), d2.borderColor = d2.borderColor || "#FFFFFF", d2.borderThickness = d2.borderThickness || Math.ceil(0.1 * d2.size), Y.drawMarkers([d2]), "undefined" !== typeof e.y2 && (d2 = b.getMarkerProperties(l2, e.x1, e.y2, this.chart.overlaidCanvasCtx), d2.size = Math.max(1.5 * d2.size << 0, 10), d2.borderColor = d2.borderColor || "#FFFFFF", d2.borderThickness = d2.borderThickness || Math.ceil(0.1 * d2.size), Y.drawMarkers([d2]))) : "bubble" === b.type ? (d2 = b.getMarkerProperties(l2, e.x1, e.y1, this.chart.overlaidCanvasCtx), d2.size = e.size, d2.color = "white", d2.borderColor = "white", g.globalAlpha = 0.3, Y.drawMarkers([d2]), g.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? ba(g, e.x1, e.y1, e.x2, e.y2, "white", 0, null, false, false, false, false, 0.3) : "pie" === b.type || "doughnut" === b.type ? ja2(g, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? ra2(g, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (g.globalAlpha = 1, g.strokeStyle = e.color, g.lineWidth = 2 * e.borderThickness, b = 0 === g.lineWidth % 2 ? 0 : 0.5, g.beginPath(), g.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), g.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), g.stroke(), g.beginPath(), g.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), g.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), g.stroke(), ba(g, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), g.globalAlpha = 1) : "ohlc" === b.type ? (g.globalAlpha = 1, g.strokeStyle = e.color, g.lineWidth = 2 * e.borderThickness, b = 0 === g.lineWidth % 2 ? 0 : 0.5, g.beginPath(), g.moveTo(e.x3 - b, e.y2), g.lineTo(e.x3 - b, e.y3), g.stroke(), g.beginPath(), g.moveTo(e.x3, e.y1), g.lineTo(e.x1, e.y1), g.stroke(), g.beginPath(), g.moveTo(
                e.x3,
                e.y4
              ), g.lineTo(e.x2, e.y4), g.stroke(), g.globalAlpha = 1) : "boxAndWhisker" === b.type ? (g.save(), g.globalAlpha = 1, g.strokeStyle = e.stemColor, g.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (g.beginPath(), g.moveTo(e.x3, e.y2 + e.borderThickness / 2), g.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), g.stroke(), g.beginPath(), g.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), g.lineTo(e.x3, e.y3 - e.borderThickness / 2), g.stroke()), g.beginPath(), ba(
                g,
                e.x1,
                Math.max(e.y2, e.y3),
                e.x2,
                Math.min(e.y2, e.y3),
                "transparent",
                2 * e.borderThickness,
                e.color,
                false,
                false,
                false,
                false
              ), g.globalAlpha = 1, g.strokeStyle = e.whiskerColor, g.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (g.beginPath(), g.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), g.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), g.stroke(), g.beginPath(), g.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), g.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), g.stroke()), g.globalAlpha = 1, g.strokeStyle = e.lineColor, g.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (g.beginPath(), g.moveTo(e.x1, e.y5), g.lineTo(
                e.x2,
                e.y5
              ), g.stroke()), g.restore(), g.globalAlpha = 1) : "error" === b.type && A2(g, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3));
            }
          }
          g.restore();
          g.globalAlpha = 1;
          g.beginPath();
        };
        oa.prototype.getToolTipInnerHTML = function(a) {
          a = a.entries;
          var d2 = null, c = null, b = null, e = 0, h = "";
          this.isToolTipDefinedInData = true;
          for (var l2 = 0; l2 < a.length; l2++)
            if (a[l2].dataSeries.toolTipContent || a[l2].dataPoint.toolTipContent) {
              this.isToolTipDefinedInData = false;
              break;
            }
          if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter))
            a = { chart: this.chart, toolTip: this.options, entries: a }, d2 = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var n2 = null, t3 = "", l2 = 0; l2 < a.length; l2++) {
              c = a[l2].dataSeries;
              b = a[l2].dataPoint;
              e = a[l2].index;
              h = "";
              if (0 === l2 && this.isToolTipDefinedInData && !this.content) {
                this.chart.axisX && 0 < this.chart.axisX.length ? t3 += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (t3 += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
                t3 += "</br>";
                if (!c.visible)
                  continue;
                t3 = this.chart.replaceKeywordsWithValue(t3, b, c, e);
              }
              null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, n2 = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === d2 && (d2 = ""), c.visible && (true === this.reversed ? (d2 = this.chart.replaceKeywordsWithValue(h, b, c, e) + d2, l2 < a.length - 1 && (d2 = "</br>" + d2)) : (d2 += this.chart.replaceKeywordsWithValue(h, b, c, e), l2 < a.length - 1 && (d2 += "</br>"))));
            }
            null !== d2 && (d2 = t3 + d2);
          } else {
            c = a[0].dataSeries;
            b = a[0].dataPoint;
            e = a[0].index;
            if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent)
              return null;
            "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === c.type || "ohlc" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
            null === d2 && (d2 = "");
            d2 += this.chart.replaceKeywordsWithValue(
              h,
              b,
              c,
              e
            );
          }
          return d2;
        };
        oa.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
            var a = this.getContainerTransition(this.containerTransitionDuration);
            this.container.style.WebkitTransition = a;
            this.container.style.MsTransition = a;
            this.container.style.transition = a;
            this.container.style.MozTransition = this.mozContainerTransition;
          }
        };
        oa.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
        };
        oa.prototype.hide = function(a) {
          this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._entries = this._dataSeriesIndex = this._xValue = null, this._prevY = this._prevX = NaN, this._updatedEventParameters = null, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
        };
        oa.prototype.show = function(a, d2, c) {
          this._updateToolTip(a, d2, "undefined" === typeof c ? false : c);
        };
        oa.prototype.showAtIndex = function(a, d2) {
        };
        oa.prototype.showAtX = function(a, d2) {
          if (!this.enabled)
            return false;
          this.chart.clearedOverlayedCanvas = null;
          this._updateOptions();
          var c, b, e, h = [];
          e = false;
          d2 = !n(d2) && 0 <= d2 && d2 < this.chart.data.length ? d2 : 0;
          if (this.shared)
            for (var l2 = 0; l2 < this.chart.data.length; l2++)
              c = this.chart.data[l2], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !n(b.dataPoint.y) && c.visible) && (b.dataSeries = c, this.chart.data[d2].axisX.convertValueToPixel(a) === c.axisX.convertValueToPixel(b.dataPoint.x) && h.push(b));
          else
            c = this.chart.data[d2], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !n(b.dataPoint.y) && c.visible) && (b.dataSeries = c, h.push(b));
          if (0 < h.length) {
            for (l2 = 0; l2 < h.length; l2++)
              if (b = h[l2], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
                e = false;
                break;
              } else if (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum)
                e = true;
              else {
                e = false;
                break;
              }
            if (e)
              return this.hide(), false;
            this.highlightObjects(h);
            this._entries = h;
            l2 = "";
            l2 = this.getToolTipInnerHTML({ entries: h });
            if (null !== l2) {
              this.contentDiv.innerHTML = l2;
              if (this.isToolTipDefinedInData && n(this.options.content) && n(this.options.contentFormatter))
                for (b = this.contentDiv.getElementsByTagName("span"), l2 = 0; l2 < b.length; l2++)
                  b[l2] && (b[l2].style.color = b[l2].getAttribute("data-color"));
              l2 = false;
              "none" === this.container.style.display && (l2 = true, this.container.style.display = "block");
              try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[c.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : v ? "italic" : "normal";
              } catch (t3) {
              }
              "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y) - this.container.clientWidth << 0 : h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
              0 > c && (c += this.container.clientWidth + 20);
              c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
              h = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
              h = -h + 10;
              0 < h + this.container.clientHeight + 5 && (h -= h + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(
                c,
                h
              );
              !this.animationEnabled || l2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
              this.container.style.left = c + "px";
              this.container.style.bottom = h + "px";
            } else
              return this.hide(false), false;
          } else
            return this.hide(), false;
          this._xValue = a;
          this._dataSeriesIndex = d2;
          this._prevY = this._prevX = NaN;
          return true;
        };
        oa.prototype.fixMozTransitionDelay = function(a, d2) {
          if (20 < this.chart._eventManager.lastObjectId)
            this.mozContainerTransition = this.getContainerTransition(0);
          else {
            var c = parseFloat(this.container.style.left), c = isNaN(c) ? 0 : c, b = parseFloat(this.container.style.bottom), b = isNaN(b) ? 0 : b;
            10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d2, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
          }
        };
        oa.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        ia2.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          v && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        ia2.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId;
        };
        ia2.prototype.mouseEventHandler = function(a) {
          if ("mousemove" === a.type || "click" === a.type) {
            var d2 = [], c = Qa(a), b = null;
            if ((b = this.chart.getObjectAtXY(c.x, c.y, false)) && "undefined" !== typeof this.objectMap[b])
              if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                var e = this.chart.data[b.dataSeriesIndex], h = e.dataPoints[b.dataPointIndex], l2 = b.dataPointIndex;
                b.eventParameter = { x: c.x, y: c.y, dataPoint: h, dataSeries: e.options, dataPointIndex: l2, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = { context: h, userContext: h, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                d2.push(b);
                b = this.objectMap[e.id];
                b.eventParameter = { x: c.x, y: c.y, dataPoint: h, dataSeries: e.options, dataPointIndex: l2, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = {
                  context: e,
                  userContext: e.options,
                  mouseover: "mouseover",
                  mousemove: "mousemove",
                  mouseout: "mouseout",
                  click: "click"
                };
                d2.push(this.objectMap[e.id]);
              } else
                "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], h = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = { x: c.x, y: c.y, dataSeries: e.options, dataPoint: h, dataPointIndex: b.dataPointIndex, dataSeriesIndex: b.dataSeriesIndex, chart: this.chart }, b.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, d2.push(b));
            e = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
              h = true;
              for (b = 0; b < d2.length; b++)
                if (d2[b].id === this.mouseoveredObjectMaps[c].id) {
                  h = false;
                  break;
                }
              h ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]);
            }
            this.mouseoveredObjectMaps = e;
            for (c = 0; c < d2.length; c++) {
              e = false;
              for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                if (d2[c].id === this.mouseoveredObjectMaps[b].id) {
                  e = true;
                  break;
                }
              e || (this.fireEvent(d2[c], "mouseover", a), this.mouseoveredObjectMaps.push(d2[c]));
              "click" === a.type ? this.fireEvent(d2[c], "click", a) : "mousemove" === a.type && this.fireEvent(d2[c], "mousemove", a);
            }
          }
        };
        ia2.prototype.fireEvent = function(a, d2, c) {
          if (a && d2) {
            var b = a.eventParameter, e = a.eventContext, h = a.eventContext.userContext;
            h && (e && h[e[d2]]) && h[e[d2]].call(h, b);
            "mouseout" !== d2 ? h.cursor && h.cursor !== c.target.style.cursor && (c.target.style.cursor = h.cursor) : (c.target.style.cursor = this.chart.panEnabled ? "itemmouseout" !== e.mouseout || h.dockInsidePlotArea ? "move" : this.chart._defaultCursor : this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === d2 && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            "click" === d2 && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
          }
        };
        X2.prototype.animate = function(a, d2, c, b, e) {
          var h = this;
          this.chart.isAnimating = true;
          e = e || N.easing.linear;
          c && this.animations.push({ startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0), duration: d2, animationCallback: c, onComplete: b });
          for (a = []; 0 < this.animations.length; )
            if (d2 = this.animations.shift(), c = (/* @__PURE__ */ new Date()).getTime(), b = 0, d2.startTime <= c && (b = e(Math.min(c - d2.startTime, d2.duration), 0, 1, d2.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d2), d2.animationCallback(b), 1 <= b && d2.onComplete)
              d2.onComplete();
          this.animations = a;
          0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            h.animate.call(h);
          }) : this.chart.isAnimating = false;
        };
        X2.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = false;
        };
        var N = { yScaleAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas, e = d2.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ma, a * c.canvas.height / ma);
          }
        }, xScaleAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas, e = d2.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / ma, c.canvas.height / ma);
          }
        }, xClipAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas;
            c.save();
            0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ma, b.height / ma);
            c.restore();
          }
        }, fadeInAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas;
            c.save();
            c.globalAlpha = a;
            c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ma, c.canvas.height / ma);
            c.restore();
          }
        }, easing: { linear: function(a, d2, c, b) {
          return c * a / b + d2;
        }, easeOutQuad: function(a, d2, c, b) {
          return -c * (a /= b) * (a - 2) + d2;
        }, easeOutQuart: function(a, d2, c, b) {
          return -c * ((a = a / b - 1) * a * a * a - 1) + d2;
        }, easeInQuad: function(a, d2, c, b) {
          return c * (a /= b) * a + d2;
        }, easeInQuart: function(a, d2, c, b) {
          return c * (a /= b) * a * a * a + d2;
        } } }, Y = { drawMarker: function(a, d2, c, b, e, h, l2, n2) {
          if (c) {
            var t3 = 1;
            c.fillStyle = h ? h : "#000000";
            c.strokeStyle = l2 ? l2 : "#000000";
            c.lineWidth = n2 ? n2 : 0;
            c.setLineDash && c.setLineDash(H("solid", n2));
            "circle" === b ? (c.moveTo(a, d2), c.beginPath(), c.arc(a, d2, e / 2, 0, 2 * Math.PI, false), h && c.fill(), n2 && (l2 ? c.stroke() : (t3 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t3))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d2 - e / 2, e, e), h && c.fill(), n2 && (l2 ? c.stroke() : (t3 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t3))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d2 + e / 2), c.lineTo(a + e / 2, d2 + e / 2), c.lineTo(a, d2 - e / 2), c.closePath(), h && c.fill(), n2 && (l2 ? c.stroke() : (t3 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t3)), c.beginPath()) : "cross" === b && (c.strokeStyle = h, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d2 - e / 2), c.lineTo(a + e / 2, d2 + e / 2), c.stroke(), c.moveTo(a + e / 2, d2 - e / 2), c.lineTo(a - e / 2, d2 + e / 2), c.stroke());
          }
        }, drawMarkers: function(a) {
          for (var d2 = 0; d2 < a.length; d2++) {
            var c = a[d2];
            Y.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
          }
        } };
        return l;
      }();
      t.version = "v3.8.8 GA";
      window.CanvasJS && (t && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = t);
    })();
    document.createElement("canvas").getContext || function() {
      function V() {
        return this.context_ || (this.context_ = new C(this));
      }
      function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
          return a.apply(b, g.concat(M.call(arguments)));
        };
      }
      function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      }
      function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
      }
      function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
          case "width":
            b.getContext().clearRect();
            b.style.width = b.attributes.width.nodeValue + "px";
            b.firstChild.style.width = b.clientWidth + "px";
            break;
          case "height":
            b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
        }
      }
      function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
      }
      function D() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      }
      function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
          for (var e = 0; 3 > e; e++) {
            for (var f = 0, d2 = 0; 3 > d2; d2++)
              f += a[g][d2] * b[d2][e];
            c[g][e] = f;
          }
        return c;
      }
      function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX = a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_;
      }
      function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3))
          b[3] = 1;
        return b;
      }
      function E(a, b, c) {
        return Math.min(c, Math.max(b, a));
      }
      function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
      }
      function G(a) {
        if (a in H)
          return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0))
          b = a;
        else if (/^rgb/.test(a)) {
          c = Q(a);
          b = "#";
          for (var g, e = 0; 3 > e; e++)
            g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
          c = +c[3];
        } else if (/^hsl/.test(a)) {
          e = c = Q(a);
          b = parseFloat(e[0]) / 360 % 360;
          0 > b && b++;
          g = E(parseFloat(e[1]) / 100, 0, 1);
          e = E(parseFloat(e[2]) / 100, 0, 1);
          if (0 == g)
            g = e = b = e;
          else {
            var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
            g = F(d2, f, b + 1 / 3);
            e = F(d2, f, b);
            b = F(d2, f, b - 1 / 3);
          }
          b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
          c = c[3];
        } else
          b = Z[a] || a;
        return H[a] = { color: b, alpha: c };
      }
      function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(false);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
      }
      function R(a, b, c, g) {
        a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y;
      }
      function S(a, b) {
        var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push(
          "<g_vml_:stroke",
          ' opacity="',
          c,
          '"',
          ' joinstyle="',
          a.lineJoin,
          '"',
          ' miterlimit="',
          a.miterLimit,
          '"',
          ' endcap="',
          $[a.lineCap] || "square",
          '"',
          ' weight="',
          e,
          'px"',
          ' color="',
          g,
          '" />'
        );
      }
      function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
          var h = 0, l = g = 0, u = 0, m = 1;
          if ("gradient" == e.type_) {
            h = e.x1_ / f;
            c = e.y1_ / d2;
            var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
            0 > h && (h += 360);
            1e-6 > h && (h = 0);
          } else
            p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
          f = e.colors_;
          f.sort(function(a2, b2) {
            return a2.offset - b2.offset;
          });
          d2 = f.length;
          p = f[0].color;
          c = f[d2 - 1].color;
          k2 = f[0].alpha * a.globalAlpha;
          a = f[d2 - 1].alpha * a.globalAlpha;
          for (var n = [], r2 = 0; r2 < d2; r2++) {
            var t2 = f[r2];
            n.push(t2.offset * m + u + " " + t2.color);
          }
          b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
        } else
          e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
      }
      function s(a, b, c) {
        a = a.m_;
        return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
      }
      function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
      }
      function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [];
      }
      function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName)
          throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState)
          throw new A("INVALID_STATE_ERR");
        switch (b) {
          case "repeat":
          case null:
          case "":
            this.repetition_ = "repeat";
            break;
          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
            this.repetition_ = b;
            break;
          default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height;
      }
      function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code;
      }
      var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
      navigator.userAgent.match(/MSIE ([\d.]+)?/);
      var M = Array.prototype.slice;
      O(document);
      var U = { init: function(a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a));
      }, init_: function(a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++)
          this.initElement(a[b]);
      }, initElement: function(a) {
        if (!a.getContext) {
          a.getContext = V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
          b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
        }
        return a;
      } };
      U.init();
      for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++)
          v[16 * d + B] = d.toString(16) + B.toString(16);
      var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
      }, H = {}, L = {}, $ = { butt: "flat", round: "round" }, d = C.prototype;
      d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
        this.element_.innerHTML = "";
      };
      d.beginPath = function() {
        this.currentPath_ = [];
      };
      d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e);
      };
      d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
      };
      d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k2 != g || f || (k2 += 0.125);
        a = s(this, a, b);
        k2 = s(this, k2, n);
        g = s(this, g, e);
        this.currentPath_.push({
          type: d2,
          x: a.x,
          y: a.y,
          radius: c,
          xStart: k2.x,
          yStart: k2.y,
          xEnd: g.x,
          yEnd: g.y
        });
      };
      d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
      };
      d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e;
      };
      d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e;
      };
      d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e;
      };
      d.createRadialGradient = function(a, b, c, g, e, f) {
        var d2 = new w("gradientradial");
        d2.x0_ = a;
        d2.y0_ = b;
        d2.r0_ = c;
        d2.x1_ = g;
        d2.y1_ = e;
        d2.r1_ = f;
        return d2;
      };
      d.drawImage = function(a, b) {
        var c, g, e, d2, r2, y, n, h;
        e = a.runtimeStyle.width;
        d2 = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        a.runtimeStyle.width = e;
        a.runtimeStyle.height = d2;
        if (3 == arguments.length)
          c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
        else if (5 == arguments.length)
          c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
        else if (9 == arguments.length)
          r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
        else
          throw Error("Invalid number of arguments");
        var m = s(this, c, g), p = [];
        p.push(
          " <g_vml_:group",
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' coordorigin="0,0"',
          ' style="width:',
          10,
          "px;height:",
          10,
          "px;position:absolute;"
        );
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
          var t2 = [];
          t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
          var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
          c = s(this, c + e, g + d2);
          m.x = x.max(m.x, v2.x, w2.x, c.x);
          m.y = x.max(m.y, v2.y, w2.y, c.y);
          p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
        } else
          p.push(
            "top:",
            k(m.y / q),
            "px;left:",
            k(m.x / q),
            "px;"
          );
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
      };
      d.stroke = function(a) {
        var b = [];
        b.push(
          "<g_vml_:shape",
          ' filled="',
          !!a,
          '"',
          ' style="position:absolute;width:',
          10,
          "px;height:",
          10,
          'px;"',
          ' coordorigin="0,0"',
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' stroked="',
          !a,
          '"',
          ' path="'
        );
        for (var c = { x: null, y: null }, d2 = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
          var f = this.currentPath_[e];
          switch (f.type) {
            case "moveTo":
              b.push(" m ", k(f.x), ",", k(f.y));
              break;
            case "lineTo":
              b.push(" l ", k(f.x), ",", k(f.y));
              break;
            case "close":
              b.push(" x ");
              f = null;
              break;
            case "bezierCurveTo":
              b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
              break;
            case "at":
            case "wa":
              b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
          }
          if (f) {
            if (null == c.x || f.x < c.x)
              c.x = f.x;
            if (null == d2.x || f.x > d2.x)
              d2.x = f.x;
            if (null == c.y || f.y < c.y)
              c.y = f.y;
            if (null == d2.y || f.y > d2.y)
              d2.y = f.y;
          }
        }
        b.push(' ">');
        a ? T(this, b, c, d2) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
      };
      d.fill = function() {
        this.stroke(true);
      };
      d.closePath = function() {
        this.currentPath_.push({ type: "close" });
      };
      d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_);
      };
      d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
      };
      d.translate = function(a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
      };
      d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
      };
      d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
      };
      d.transform = function(a, b, c, d2, e, f) {
        z(this, t([[
          a,
          b,
          0
        ], [c, d2, 0], [e, f, 1]], this.m_), true);
      };
      d.setTransform = function(a, b, c, d2, e, f) {
        z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
      };
      d.drawText_ = function(a, b, c, d2, e) {
        var f = this.m_;
        d2 = 0;
        var r2 = 1e3, t2 = 0, n = [], h;
        h = this.font;
        if (L[h])
          h = L[h];
        else {
          var l = document.createElement("div").style;
          try {
            l.font = h;
          } catch (u) {
          }
          h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
        }
        var l = h, m = this.element_;
        h = {};
        for (var p in l)
          h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
          case "left":
          case "center":
          case "right":
            break;
          case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;
          case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;
          default:
            l = "left";
        }
        switch (this.textBaseline) {
          case "hanging":
          case "top":
            t2 = h.size / 1.75;
            break;
          case "middle":
            break;
          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
            t2 = -h.size / 2.25;
        }
        switch (l) {
          case "right":
            d2 = 1e3;
            r2 = 0.05;
            break;
          case "center":
            d2 = r2 = 500;
        }
        b = s(this, b + 0, c + t2);
        n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(
          this,
          n,
          { x: -d2, y: 0 },
          { x: r2, y: h.size }
        );
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
      };
      d.fillText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, false);
      };
      d.strokeText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, true);
      };
      d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return { width: this.textMeasureEl_.offsetWidth };
      };
      d.clip = function() {
      };
      d.arcTo = function() {
      };
      d.createPattern = function(a, b) {
        return new I(a, b);
      };
      w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
      };
      d = A.prototype = Error();
      d.INDEX_SIZE_ERR = 1;
      d.DOMSTRING_SIZE_ERR = 2;
      d.HIERARCHY_REQUEST_ERR = 3;
      d.WRONG_DOCUMENT_ERR = 4;
      d.INVALID_CHARACTER_ERR = 5;
      d.NO_DATA_ALLOWED_ERR = 6;
      d.NO_MODIFICATION_ALLOWED_ERR = 7;
      d.NOT_FOUND_ERR = 8;
      d.NOT_SUPPORTED_ERR = 9;
      d.INUSE_ATTRIBUTE_ERR = 10;
      d.INVALID_STATE_ERR = 11;
      d.SYNTAX_ERR = 12;
      d.INVALID_MODIFICATION_ERR = 13;
      d.NAMESPACE_ERR = 14;
      d.INVALID_ACCESS_ERR = 15;
      d.VALIDATION_ERR = 16;
      d.TYPE_MISMATCH_ERR = 17;
      G_vmlCanvasManager = U;
      CanvasRenderingContext2D = C;
      CanvasGradient = w;
      CanvasPattern = I;
      DOMException = A;
    }();
  }
});

// node_modules/@canvasjs/angular-charts/fesm2015/canvasjs-angular-charts.js
function CanvasJSChart_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.chartContainerId);
    ɵɵproperty("ngStyle", ctx_r0.styles);
  }
}
if (typeof document === "object" && !!document) {
  CanvasJS = require_canvasjs_min();
}
var CanvasJS;
var CanvasJSChart = class _CanvasJSChart {
  constructor() {
    this.shouldUpdateChart = false;
    this.isDOMPresent = typeof document === "object" && !!document;
    this.chartInstance = new EventEmitter();
    this.options = this.options ? this.options : {};
    this.styles = this.styles ? this.styles : {
      width: "100%",
      position: "relative"
    };
    this.styles.height = this.options.height ? this.options.height + "px" : "400px";
    this.chartContainerId = "canvasjs-angular-chart-container-" + _CanvasJSChart._cjsChartContainerId++;
  }
  ngDoCheck() {
    if (this.prevChartOptions != this.options) {
      this.shouldUpdateChart = true;
    }
  }
  ngOnChanges() {
    if (this.shouldUpdateChart && this.chart) {
      this.chart.options = this.options;
      this.chart.render();
      this.shouldUpdateChart = false;
      this.prevChartOptions = this.options;
    }
  }
  ngAfterViewInit() {
    if (this.isDOMPresent) {
      this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
      this.chart.render();
      this.prevChartOptions = this.options;
      this.chartInstance.emit(this.chart);
    }
  }
  ngOnDestroy() {
    if (this.chart)
      this.chart.destroy();
  }
};
CanvasJSChart._cjsChartContainerId = 0;
CanvasJSChart.ɵfac = function CanvasJSChart_Factory(t) {
  return new (t || CanvasJSChart)();
};
CanvasJSChart.ɵcmp = ɵɵdefineComponent({
  type: CanvasJSChart,
  selectors: [["canvasjs-chart"]],
  inputs: {
    options: "options",
    styles: "styles"
  },
  outputs: {
    chartInstance: "chartInstance"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"]],
  template: function CanvasJSChart_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CanvasJSChart_div_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isDOMPresent);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSChart, [{
    type: Component,
    args: [{
      selector: "canvasjs-chart",
      template: '<div *ngIf="isDOMPresent" id="{{chartContainerId}}" [ngStyle]="styles"></div>'
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    chartInstance: [{
      type: Output
    }]
  });
})();
var CanvasJSAngularChartsModule = class {
};
CanvasJSAngularChartsModule.ɵfac = function CanvasJSAngularChartsModule_Factory(t) {
  return new (t || CanvasJSAngularChartsModule)();
};
CanvasJSAngularChartsModule.ɵmod = ɵɵdefineNgModule({
  type: CanvasJSAngularChartsModule,
  declarations: [CanvasJSChart],
  imports: [CommonModule],
  exports: [CanvasJSChart]
});
CanvasJSAngularChartsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSAngularChartsModule, [{
    type: NgModule,
    args: [{
      declarations: [CanvasJSChart],
      imports: [CommonModule],
      exports: [CanvasJSChart]
    }]
  }], null, null);
})();
export {
  CanvasJS,
  CanvasJSAngularChartsModule,
  CanvasJSChart
};
//# sourceMappingURL=@canvasjs_angular-charts.js.map
