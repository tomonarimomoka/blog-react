// src/types/global.d.ts
export {}; // モジュールとして扱うために必要

declare global {
  interface Window {
    dataLayer: any[];
  }
}
