export function isImage(src: string): boolean {
    return /\.(gif|jpg|jpeg|tiff|png)$/i.test(src);
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function preloadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}


export const throttle = (fn: () => void, delay: number) => {
    console.log('throttle');
    let time = Date.now();

    return () => {
        if((time + delay - Date.now()) <= 0) {
            fn();
            time = Date.now();
        }
    }
}
