import {useEffect, useState} from 'react';

/*
* Mobile: 0 - 767px
* Tablet: 768px - 1024px
* Laptop: 1024px - 1377px
* Desktop: 1377px - 1919px
* */

export const Breakpoints = {
    mobile: 0,
    tablet: 768,
    laptop: 1024,
    desktop: 1377,
};

let lastBreakpoint: keyof typeof Breakpoints  | undefined = undefined;

function useBreakpoint(lastBreakpoint1: keyof typeof Breakpoints = 'mobile') {
    const [breakpoint, setBreakpoint] = useState<keyof typeof Breakpoints>(lastBreakpoint || lastBreakpoint1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < Breakpoints.tablet) {
                setBreakpoint('mobile');
            } else if (window.innerWidth < Breakpoints.laptop) {
                setBreakpoint('tablet');
            } else if (window.innerWidth < Breakpoints.desktop) {
                setBreakpoint('laptop');
            } else {
                setBreakpoint('desktop');
            }


            if (lastBreakpoint !== breakpoint) {
                lastBreakpoint = breakpoint;
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (lastBreakpoint !== breakpoint) {
            lastBreakpoint = breakpoint;
        }
    }, [breakpoint]);

    return breakpoint;
}

function useIsMobile() {
    const breakpoint = useBreakpoint();
    return breakpoint === 'mobile';
}

function useIsTablet() {
    const breakpoint = useBreakpoint();
    return breakpoint === 'tablet';
}

function useIsLaptop() {
    const breakpoint = useBreakpoint();
    return breakpoint === 'laptop';
}

function useIsDesktop() {
    const breakpoint = useBreakpoint();
    return breakpoint === 'desktop';
}

function useIsMobileOrTablet(lastBreakpoint: keyof typeof Breakpoints = 'mobile') {
    const breakpoint = useBreakpoint( lastBreakpoint );
    return breakpoint === 'mobile' || breakpoint === 'tablet';
}

function useIsLaptopOrDesktop() {
    const breakpoint = useBreakpoint();
    return breakpoint === 'laptop' || breakpoint === 'desktop';
}

export function getMobileOrTabletOnlyMediaQuery() {
    return `max-width: ${Breakpoints.laptop - 1}px`;
}

export function getMobileOnlyMediaQuery() {
    return `max-width: ${Breakpoints.tablet - 1}px`;
}

export function getTabletOnlyMediaQuery() {
    return `min-width: ${Breakpoints.tablet}px) and (max-width: ${Breakpoints.laptop - 1}px`;
}

export function getLaptopOnlyMediaQuery() {
    return `min-width: ${Breakpoints.laptop}px) and (max-width: ${Breakpoints.desktop - 1}px`;
}

export function getDesktopMediaQuery() {
    return `min-width: ${Breakpoints.desktop}px`;
}

export function getMobileMediaQuery() {
    return `min-width: ${Breakpoints.mobile}px`;
}

export function getTabletMediaQuery() {
    return `min-width: ${Breakpoints.tablet}px`;
}

export function getLaptopMediaQuery() {
    return `min-width: ${Breakpoints.laptop}px`;
}

export function getLaptopOrDesktopMediaQuery() {
    return `min-width: ${Breakpoints.laptop}px`;
}

export function getLaptopOrTabletOrMobileMediaQuery() {
    return `max-width: ${Breakpoints.desktop}px`;
}

export {
    useBreakpoint,
    useIsMobile,
    useIsTablet,
    useIsLaptop,
    useIsDesktop,
    useIsMobileOrTablet,
    useIsLaptopOrDesktop,
};
