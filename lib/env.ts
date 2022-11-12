
export function isSubdomain(url: string) {
    const regex = new RegExp(/^([a-z]+:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);
    return !!url.match(regex);
}

function getEnv() {
    let isDev: boolean;
    let isStage: boolean;

    // initialilze the environment
    if (typeof window === 'undefined') {
        if (process.env.ENV === 'dev') {
            isDev = true;
            isStage = false;
        } else if (process.env.ENV === 'stage') {
            isDev = false;
            isStage = true;
        } else {
            isDev = false;
            isStage = false;
        }

    } else {
        let url = window.location.href;
        if (url.includes('localhost')) {
            isDev = true;
            isStage = false;
        } else if (url.includes('192')) {
            isDev = true;
            isStage = false;
        } else if (url.includes('stage') || url.includes('anclanka')) {
            isDev = false;
            isStage = true;
        } else if (isSubdomain(url)) {
            isStage = true;
            isDev = false;
        } else {
            isStage = false;
            isDev = false;
        }
    }

    return {
        isDev: isDev,
        isStaging: isStage
    }
}

export const IS_DEVELOPMENT = getEnv().isDev;
export const IS_STAGING = getEnv().isStaging;
export const IS_PRODUCTION = !IS_DEVELOPMENT && !IS_STAGING;
