import {CSSProperties, ReactNode} from 'react';


interface SectionContainerProps {
    children: ReactNode;
    width?: 'full' | 'medium';
    style?: CSSProperties;
}

function SectionContainer(props: SectionContainerProps) {
    return (
        <div
            className={
                'section-container' +
                (props.width === 'full' ? '' : '') +
                (props.width === 'medium' ? ' container container-medium' : '') +
                (!props.width ? ' container' : '')
            }
            style={{
                ...props.style,
            }}
        >
            {props.children}

        </div>
    );
}

function SectionPadding({children, padding}: {
    children: ReactNode,
    padding?: 'none' | 'default' | 'large' | 'top-zero',
}) {
    return (
        <div style={
            padding === 'none' ? {
                paddingTop: '0px',
                paddingBottom: '0px',
            } : padding === 'large' ? {
                paddingTop: '90px',
                paddingBottom: '100px',
            } : padding === 'top-zero' ? {
                paddingTop: '0px',
                paddingBottom: '70px',
            } : {
                paddingTop: '60px',
                paddingBottom: '70px',
            }
        }>
            {children}
        </div>
    );
}

interface SectionProps {
    children: ReactNode, name: string, className?: string, width?: 'full' | 'medium',
    padding?: 'none' | 'default' | 'large' | 'top-zero',
    sectionBackgroundColor?: string
}

export function DefaultSection(props: SectionProps) {
    return (
        <div
            className={props.name + (props.className ? ' ' + props.className : '')}
            style={{
                backgroundColor: props.sectionBackgroundColor ? props.sectionBackgroundColor.includes('linear-gradient') ? 'transparent' : props.sectionBackgroundColor : 'none',
                backgroundImage: props.sectionBackgroundColor ? props.sectionBackgroundColor.includes('linear-gradient') ? props.sectionBackgroundColor : 'none' : 'none',
            }}

        >
            <SectionContainer
                width={props.width}
            >
                <SectionPadding padding={props.padding}>
                    {props.children}
                </SectionPadding>
            </SectionContainer>
        </div>
    );
}
