import {CSSProperties, ReactNode} from 'react';
import {isImage} from '../lib/utils';


interface SectionContainerProps {
    children: ReactNode;
    width?: 'full' | 'medium';
    style?: CSSProperties;
}

function SectionContainer(props: SectionContainerProps) {

    return (
        <div className={
            'section-container ' +
            (props.width === 'full' ? '' : 'pad-container')
        }
        >
            {props.children}
            <style jsx global>
                {`
                  .section-container {
                    width: 100%;
                  }
                `}
            </style>
        </div>
    );
    // return (
    //     <div
    //         className={
    //             'section-container' +
    //             (props.width === 'full' ? '' : '') +
    //             (props.width === 'medium' ? ' container container-medium' : '') +
    //             (!props.width ? ' container' : '')
    //         }
    //         style={{
    //             ...props.style,
    //         }}
    //     >
    //         {props.children}
    //
    //     </div>
    // );
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
    children: ReactNode,
    name: string,
    className?: string,
    width?: 'full' | 'medium',
    padding?: 'none' | 'default' | 'large' | 'top-zero',
    sectionBackground?: string,
    TopElement?: ReactNode
    // style?: CSSProperties,
}

export function DefaultSection(props: SectionProps) {
    return (
        <div
            className={props.name + (props.className ? ' ' + props.className : '')}
            style={{
                backgroundColor: props.sectionBackground ? (props.sectionBackground.includes('linear-gradient') || isImage(props.sectionBackground)) ? 'transparent' : props.sectionBackground : 'none',
                backgroundImage: props.sectionBackground ?
                    props.sectionBackground.includes('linear-gradient') ?
                        props.sectionBackground :
                        isImage(props.sectionBackground) ?
                            `url(${props.sectionBackground})` :
                            'none' : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // ...props.style,
            }}
        >
            {
                props.TopElement &&
                props.TopElement
            }
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
