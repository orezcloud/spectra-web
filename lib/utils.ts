export function isImage(src: string): boolean {
    return /\.(gif|jpg|jpeg|tiff|png)$/i.test(src);
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
