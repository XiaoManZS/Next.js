
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'astro/config';


// https://astro.build/config
const __unconfig_default =  defineConfig({
   devToolbar: {
      enabled: false,
   }
});

if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;