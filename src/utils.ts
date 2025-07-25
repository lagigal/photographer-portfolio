export const optimizeUrl = (url: string) => {
  return url.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_auto/');
}