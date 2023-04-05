/// <reference types="vite/client" />

declare module '*.component.md' {
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
