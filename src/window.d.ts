declare interface Window {
  // gtag and dataLayer are injected via vite-plugin-radar
  gtag?: (...any: any[]) => void
  dataLayer?: []
}
