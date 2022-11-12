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

export function DefaultSection({children, name, width, padding, sectionBackgroundColor, className}:
                                   {
                                       children: ReactNode, name: string, className?: string, width?: 'full' | 'medium',
                                       padding?: 'none' | 'default' | 'large' | 'top-zero',
                                       sectionBackgroundColor?: string
                                   },
) {
    return (
        <div
            className={name + (className ? ' ' + className : '')}
            style={{
                backgroundColor: sectionBackgroundColor ? sectionBackgroundColor.includes('linear-gradient') ? 'transparent' : sectionBackgroundColor : 'none',
                backgroundImage: sectionBackgroundColor ? sectionBackgroundColor.includes('linear-gradient') ? sectionBackgroundColor : 'none' : 'none',
            }}

        >
            <SectionContainer
                width={width}
            >
                <SectionPadding padding={padding}>
                    {children}
                </SectionPadding>
            </SectionContainer>
        </div>
    );
}
