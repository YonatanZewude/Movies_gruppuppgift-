declare global {
  interface Window {
    dataLayer: any[];
    google: any;
    initMap?: () => void;
  }
}

export {};
