
export function isImage(src: string): boolean {
  return /\.(gif|jpg|jpeg|tiff|png)$/i.test(src);
}
