import $ from 'jquery';
import Matter, { Body } from 'matter-js'
if ((<any>window).gravity_dlc_already_active) {
  console.log("can't activate gravity dlc twice!")
} else {
  (<any>window).gravity_dlc_already_active = true;
  console.log("inserting gravity dlc...");
  var Engine = Matter.Engine,
    // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;


  var engine = Engine.create();

  type NewType = {
    $: JQuery<HTMLElement>;
    ax?: number;
    ay?: number;
    w?: number;
    h?: number;
    box?: Matter.Body;
    md?: boolean;
    ma?: number;
    mb?: number;
  };

  let pelements: NewType[] = [];

  function hasDirectText(el: HTMLElement) {
    return Array.from(el.childNodes).some(node =>
      node.nodeType === Node.TEXT_NODE &&
      node.textContent?.trim()
    );
  }

  function visible(e: JQuery<HTMLElement>): number {
    if (((e.css("background-color") != "rgba(0, 0, 0, 0)" && e.css("background-color") != "") || (e.css("background-image") != "" && e.css("background-image") != "none") || hasDirectText(e[0]) || e[0] instanceof HTMLImageElement || e[0] instanceof SVGElement) && e[0].checkVisibility() && e.css("visibility") != "hidden") {
      return 1;
    }
    for (let i = 0; i < e.children().length; i++) {
      const e2 = e.children()[i];
      if (visible($(e2))) {
        return 2;
      }
    }
    return 0;
  }

  function walk($e: JQuery<HTMLElement>) {
    let v = visible($e)
    if (v == 0) {
      return;
    }
    let e: NewType = { $: $e };
    e.w = e.$.outerWidth(false)!;
    e.h = e.$.outerHeight(false)!;
    e.ax = pos(e.$).left;
    e.ay = pos(e.$).top;
    if ((hasDirectText($e[0]) || ($e.css("border-radius") != "0px" && $e.css("border-radius") != "" && v == 1) || $e[0] instanceof SVGElement || $e[0] instanceof HTMLImageElement || ($e.css("background-image") != "" && $e.css("background-image") != "none" && $e.css("width") != "")) && e.w < window.innerWidth * 0.6 && e.h < window.innerHeight * 0.8 && e.ax < window.innerWidth && e.ay < innerHeight && e.ax + e.w > 0 && e.ay + e.h > 0) {
      e.md = false;
      e.ma = 0;
      e.mb = 0;
      pelements.push(e)
    } else {
      let children = $e.children();
      for (let i = 0; i < children.length; i++) {
        const e = children[i];
        walk($(e))
      }
    }
  }
  walk($(document.body));
  console.log(pelements)
  function pos(e: JQuery<HTMLElement>, inner: boolean = false): { left: number, top: number } {
    let h = e.offsetParent();
    let h3 = e.position();
    let h4;
    // if (inner) {
      h4 = { left: parseFloat(e.css("margin-left")), top: parseFloat(e.css("margin-top")) };
    // } else {
    //   h4 = { left: 0, top: 0 };
    // }
    if (h3 == undefined) {
      return { left: 0, top: 0 };
    }
    if ((!(h.get(0) instanceof HTMLHtmlElement)) && h.length !== 0) {
      let h2 = pos(h, true);
      return { left: h2.left + h3.left + h4.left, top: h2.top + h3.top + h4.top };
    } else {
      return { left: h3.left + h4.left, top: h3.top + h4.top };
    }
  }
  let mm = false;
  for (let i = 0; i < pelements.length; i++) {
    let e = pelements[i];
    // e.$.css("margin", "0");
    moveElementWithStyles(<HTMLElement>e.$.get(0), document.body);
    e.$.css("position", "absolute");
    e.$.css("object-position", "0% 0%");
    e.$.css("perceptive-origin", "0px 0px");
    e.$.css("transform", "translate(" + e.ax + "px, " + e.ay + "px)");
    e.$.css("transform-origin", "center");
    e.$.css("margin", "0px");
    e.$.css("left", "0px");
    e.$.css("top", "0px");
    e.$.css("z-index", "1000");
    e.$.css("right", "unset");
    e.$.css("bottom", "unset");
    e.$.css("transition", "transform 0s");
    if (e.ax == undefined || e.ay == undefined || e.w == undefined || e.h == undefined) continue;
    e.box = Bodies.rectangle(e.ax + e.w / 2, e.ay + e.h / 2, e.w, e.h);
    Body.applyForce(e.box, e.box.position, { x: (Math.random() * 2 - 1) * e.box.mass / 20, y: (Math.random() * 2 - 1) * e.box.mass / 20 })
    Composite.add(engine.world, [e.box]);
    e.$.on("mousedown", () => {
      e.md = true;
      if (e.box == undefined || e.w == undefined || e.h == undefined) return;
      let h = lcomb(Math.cos(e.box.angle), Math.sin(e.box.angle), -Math.sin(e.box.angle), Math.cos(e.box.angle), mx - e.box.position.x, my - e.box.position.y);
      e.ma = h.a;
      e.mb = h.b;
      // e.box.frictionAir=0.1;
      // event.preventDefault();
    })
    // e.$.on("mouseup", (event) => {
    //   event.preventDefault();
    // })
    e.$.on("click", (event) => {
      if (mm) {
        event.preventDefault();
      }
    })
    $(document).on("mouseup", () => {
      // if (e.md && !mm) {
      //   e.$.get(0)?.click();
      // }
      e.md = false;
      if (e.box == undefined) return;
      // e.box.frictionAir=0;
    })
  }

  $(document.body).css("width",window.innerWidth+"px");
  $(document.body).css("height",window.innerHeight+"px");
  $(document.body).css("margin","0px");
  $(document.body).css("left","0px");
  $(document.body).css("top","0px");

  let mx = 0;
  let my = 0;
  $(document).on("click", () => {
    mm = false;
  })
  $(document).on("mousedown", () => {
    mm = false;
  })
  $(document).on("mousemove", (event) => {
    mx = event.clientX;
    my = event.clientY;
    mm = true;
  });

  Composite.add(engine.world, [
    Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 30, window.innerWidth, 60, { isStatic: true }),
    Bodies.rectangle(window.innerWidth / 2, -30, window.innerWidth, 60, { isStatic: true }),
    Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true }),
    Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true }),
  ]);

  var runner = Runner.create();

  let frame = (t: number) => {
    Runner.tick(runner, engine, t);
    for (let i = 0; i < pelements.length; i++) {
      const e = pelements[i];
      if (e.md) {
        if (e.box == undefined || e.ma == undefined || e.mb == undefined) return;
        let v = { x: e.box.position.x + e.ma * Math.cos(e.box.angle) + e.mb * -Math.sin(e.box.angle), y: e.box.position.y + e.ma * Math.sin(e.box.angle) + e.mb * Math.cos(e.box.angle) };
        // let d=Math.sqrt(Math.pow(e.box.position.x-v.x,2)+Math.pow(e.box.position.y-v.y,2));
        let dx = mx - v.x;
        let dy = my - v.y;
        let vm = { x: (-e.box.velocity.x - e.box.angularVelocity * (e.box.position.x - v.x)) / 5000 * e.box.mass, y: (-e.box.velocity.y + e.box.angularVelocity * (e.box.position.y - v.y)) / 5000 * e.box.mass }
        Body.applyForce(e.box, v, { x: dx * e.box.mass / 10000, y: dy * e.box.mass / 10000 });
        Body.applyForce(e.box, v, vm);
      }
    }
    for (let i = 0; i < pelements.length; i++) {
      const e = pelements[i];
      if (e.w == undefined || e.h == undefined || e.box == undefined) continue;
      // e.$.css("left", (e.box.position.x - e.w / 2) + "px");
      // e.$.css("top", (e.box.position.y - e.h / 2) + "px");
      e.$.css("transform", "translate(" + (e.box.position.x - e.w / 2) + "px, " + (e.box.position.y - e.h / 2) + "px) rotate(" + (e.box.angle / Math.PI * 180) + "deg)");
    }
    requestAnimationFrame(frame);
  }
  let b = true;
  $(document).on("mousemove", () => {
    if (b) {
      b = false;
      frame(0);
    }
  })

  function getComputedStyles(element: HTMLElement): { [key: string]: string } {
    const computedStyles = window.getComputedStyle(element);
    const inlineStyles: { [key: string]: string } = {};

    for (let i = 0; i < computedStyles.length; i++) {
      const key = computedStyles[i];
      inlineStyles[key] = computedStyles.getPropertyValue(key);
    }

    return inlineStyles;
  }

  function applyInlineStyles(element: HTMLElement, styles: { [key: string]: string }): void {
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        element.style[key as any] = styles[key];
      }
    }
  }

  function moveElementWithStyles(element: HTMLElement, newParentSelector: HTMLElement): void {
    if (!element) {
      return;
    }
    const computedStyles = getComputedStyles(element);
    const width=element.getBoundingClientRect().width;
    const height=element.getBoundingClientRect().height;
    const replacement=$(element.outerHTML);
    clearIndices(replacement)
    replacement.css("visibility","hidden")
    replacement.insertAfter($(element))
    const $element = $(element).detach();
    applyInlineStyles(element, computedStyles);
    $(element).css("width",width)
    $(element).css("height",height)
    $(newParentSelector).append($element);
    $element.on("click",(e)=>{
      e.stopPropagation();
      console.log(replacement[0])
      replacement[0].click();
    })
    $element.on("change",(e)=>{
      e.stopPropagation();
      replacement[0].dispatchEvent(e.originalEvent!)
    })
  }
  
  function clearIndices(element:JQuery<HTMLElement>){
    if(element[0].id){
      const computedStyles = getComputedStyles(element[0]);
      applyInlineStyles(element[0], computedStyles);
    }
    element[0].id="";
    for (let i = 0; i < element.children().length; i++) {
      const e = element.children()[i];
      clearIndices($(e))
    }
  }

  function lcomb(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    return { a: (x3 * y2 - x2 * y3) / (x1 * y2 - x2 * y1), b: (x3 * y1 - x1 * y3) / (x2 * y1 - x1 * y2) };
  }

  $(document.head).append(`<style>*{
    -webkit-user-drag: none !important; /* For WebKit browsers */
    user-drag: none; /* For other browsers that support this */
    overflow: hidden !important;
    user-select: none;
  }</style>`)
}

