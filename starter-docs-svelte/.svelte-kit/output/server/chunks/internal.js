import { H as HYDRATION_ERROR, g as get_next_sibling, d as define_property, s as set_active_reaction, a as set_active_effect, i as is_array, b as active_effect, c as active_reaction, e as init_operations, f as get_first_child, C as COMMENT_NODE, h as HYDRATION_START, j as HYDRATION_END, k as hydration_failed, l as clear_text_content, m as array_from, n as component_root, o as is_passive_event, p as create_text, q as branch, r as push, t as component_context, u as pop, v as set, L as LEGACY_PROPS, w as get, x as flushSync, y as mutable_source, z as render, A as push$1, D as setContext, E as pop$1 } from "./index.js";
import "clsx";
let base = "";
let assets = base;
const app_dir = "_app";
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
let hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
let hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
const all_registered_events = /* @__PURE__ */ new Set();
const root_event_handles = /* @__PURE__ */ new Set();
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  var path_idx = 0;
  var handled_at = event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event, ...data]);
          } else {
            delegated.call(current_target, event);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function assign_nodes(start, end) {
  var effect = (
    /** @type {Effect} */
    active_effect
  );
  if (effect.nodes_start === null) {
    effect.nodes_start = start;
    effect.nodes_end = end;
  }
}
function mount(component, options2) {
  return _mount(component, options2);
}
function hydrate(component, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component, { ...options2, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error === HYDRATION_ERROR) {
      if (options2.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component, options2);
    }
    throw error;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
const document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      component = Component(anchor_node, props) || {};
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component, unmount2);
  return component;
}
let mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component, options2) {
  const fn = mounted_components.get(component);
  if (fn) {
    mounted_components.delete(component);
    return fn(options2);
  }
  return Promise.resolve();
}
function asClassComponent$1(component) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component,
        ...options2
      });
    }
  };
}
class Svelte4Component {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key, s);
      return s;
    };
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          if (prop === LEGACY_PROPS) return true;
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      anchor: options2.anchor,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    });
    if (!options2?.props?.$$host || options2.sync === false) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key of Object.keys(this.#instance)) {
      if (key === "$set" || key === "$destroy" || key === "$on") continue;
      define_property(this, key, {
        get() {
          return this.#instance[key];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    this.#events[event] = this.#events[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event].push(cb);
    return () => {
      this.#events[event] = this.#events[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
function asClassComponent(component) {
  const component_constructor = asClassComponent$1(component);
  const _render = (props, { context } = {}) => {
    const result = render(component, { props, context });
    return {
      css: { code: "", map: null },
      head: result.head,
      html: result.body
    };
  };
  component_constructor.render = _render;
  return component_constructor;
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
function Root($$payload, $$props) {
  push$1();
  let {
    stores,
    page,
    constructors,
    components = [],
    form,
    data_0 = null,
    data_1 = null
  } = $$props;
  {
    setContext("__svelte__", stores);
  }
  {
    stores.page.set(page);
  }
  const Pyramid_1 = constructors[1];
  if (constructors[1]) {
    $$payload.out += "<!--[-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, {
      data: data_0,
      form,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Pyramid_1($$payload2, { data: data_1, form });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, { data: data_0, form });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop$1();
}
const root = asClassComponent(Root);
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>QwkSearch</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    ' + head + `
    <style>
      /* Artistic loader styles */
      #artistic-loader {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle at 50% 30%, #222 60%, #111 100%);
        z-index: 9999;
        transition: opacity 0.5s;
      }
      .loader-shape {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 8px solid #fff;
        border-top: 8px solid #ff6f61;
        border-bottom: 8px solid #6ec6ff;
        animation: spin 1.2s linear infinite;
        box-shadow: 0 0 30px #ff6f61, 0 0 60px #6ec6ff;
      }
      @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
      }
      .loader-text {
        margin-top: 20px;
        color: #fff;
        font-family: 'Fira Mono', monospace;
        font-size: 1.3rem;
        letter-spacing: 0.1em;
        text-shadow: 0 2px 8px #222;
        animation: fadeIn 1.5s infinite alternate;
      }
      @keyframes fadeIn {
        from { opacity: 0.7; }
        to   { opacity: 1; }
      }
    </style>
  </head>
  <body>
    <!-- Artistic Loader -->
    <div id="artistic-loader">
      <div>
        <div class="loader-shape"></div>
        <div class="loader-text">Loading QwkSearch...</div>
      </div>
    </div>
    <div id="svelte">` + body + "</div>\n    <script>\n      // Remove loader once Svelte mounts\n      document.addEventListener('DOMContentLoaded', () => {\n        const loader = document.getElementById('artistic-loader');\n        if (loader) {\n          loader.style.opacity = '0';\n          setTimeout(() => loader.remove(), 500);\n        }\n      });\n    <\/script>\n  </body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8" />\n  <title>' + message + `</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    body {
      background: radial-gradient(ellipse at top, #f0f4f8 0%, #e6eaf3 100%);
      perspective: 1000px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      font-family: 'Arial', sans-serif;
    }

    .error-container {
      width: 100%;
      max-width: 28rem;
      background: white;
      border-radius: 1rem;
      box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.25),
        0 10px 20px -5px rgba(0, 0, 0, 0.1);
      padding: 2.5rem;
      transform-style: preserve-3d;
      transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .error-icon {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      transform: translateZ(50px);
    }

    .error-icon svg {
      width: 100px;
      height: 100px;
      color: #ef4444;
      stroke-width: 1.5;
      transform: translateZ(30px);
    }

    .error-message {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      color: #ef4444;
      margin-bottom: 1.5rem;
      transform: translateZ(20px);
    }

    .error-text {
      text-align: center;
      color: #4b5563;
      margin-bottom: 2rem;
      line-height: 1.6;
      transform: translateZ(10px);
    }

    .error-text a {
      color: #3b82f6;
      text-decoration: underline;
      transition: color 0.3s ease;
    }

    .error-text a:hover {
      color: #2563eb;
    }

    .error-actions {
      display: flex;
      justify-content: center;
      transform: translateZ(40px);
    }

    .error-button {
      background-color: #fbbf24;
      color: white;
      font-weight: bold;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .error-button:hover {
      background-color: #d97706;
      transform: scale(1.05);
    }

    @media (max-width: 640px) {
      .error-container {
        margin: 1rem;
        padding: 1.5rem;
      }
      
      .error-icon svg {
        width: 80px;
        height: 80px;
      }
    }
  </style>
</head>
<body>
  <main class="error-container">
    <div class="error-icon">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    </div>

    <h1 class="error-message">` + message + `</h1>
    
    <p class="error-text">
      Please try again later. 
      You may report the issue using 
      the support link on the homepage.
    </p>
    
    <div class="error-actions">
      <button 
        type="button" 
        class="error-button" 
        onclick="window.location.href = '/'">
        Go Home
      </button>
    </div>
  </main>

</body>
</html>`
  },
  version_hash: "tzjxz3"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let init;
  ({ handle, handleFetch, handleError, init } = await import("./hooks.server.js"));
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    init,
    reroute,
    transport
  };
}
export {
  assets as a,
  base as b,
  app_dir as c,
  read_implementation as d,
  options as e,
  set_private_env as f,
  get_hooks as g,
  prerendering as h,
  set_public_env as i,
  set_safe_public_env as j,
  set_read_implementation as k,
  set_assets as l,
  set_building as m,
  set_manifest as n,
  override as o,
  public_env as p,
  set_prerendering as q,
  reset as r,
  safe_public_env as s
};
