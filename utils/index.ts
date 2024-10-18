export const isAppleDevice = () => {
  const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : "";
  return /Macintosh|MacIntel|MacPPC|Mac68K|iPhone|iPad|iPod/.test(userAgent);
};
