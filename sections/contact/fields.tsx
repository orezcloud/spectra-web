import {ReactNode} from 'react';


function FieldBase({children}: {children: ReactNode}) {
    return (
        <>
            <div className={'d-block'}>
                {children}
            </div>
            <style jsx>{`
              div :global(input), div :global(textarea), div :global(select) {
                width: 100%;
                border: 0;
                padding: 12px 16px;
              }
            `}</style>
        </>
    );
}

function DefaultInputStyle({children}: {children: ReactNode}) {
    return (
        <>
            <div className={'d-block'}>
                {children}
            </div>
            <style jsx>{`
              div :global(input, textarea, select) {
                width: 100%;
                padding: 0.5rem;
                margin-bottom: 1rem;
              }
            `}</style>
        </>
    );
}

export interface InputBaseProps {
    placeholder: string,
    name: string,
    onChange?: (value: string) => void
    fieldType: 'text' | 'textarea' | 'select'
    type?: string
}

export interface SelectProps extends InputBaseProps {
    options: {
        value: string,
        label: string
    }[];
}

export function Input({placeholder, fieldType, name, onChange, type}: InputBaseProps) {

    const getType = () => {
        switch (fieldType) {
            case 'text':
                return 'text';
            case 'textarea':
                return 'textarea';
            case 'select':
                return 'select';
            default:
                return 'text';
        }
    };

    return (
        <>
            <DefaultInputStyle>
                <FieldBase>
                    <input
                        type={type || getType()}
                        name={name} placeholder={placeholder} onChange={
                        (e) => {
                            if (onChange) {
                                onChange(e.target.value);
                            }
                        }
                    }/>
                </FieldBase>
            </DefaultInputStyle>
        </>
    );
}

export function TextArea({placeholder, name, onChange}: InputBaseProps) {
    return (
        <>
            <DefaultInputStyle>
                <FieldBase>
                    <textarea name={name} placeholder={placeholder} onChange={
                        (e) => {
                            if (onChange) {
                                onChange(e.target.value);
                            }
                        }
                    }/>
                </FieldBase>
            </DefaultInputStyle>
        </>
    );
}

export function Select({placeholder, name, onChange, options}: SelectProps) {
    return (
        <>
            <DefaultInputStyle>
                <FieldBase>
                    <select name={name} placeholder={placeholder} onChange={
                        (e) => {
                            if (onChange) {
                                onChange(e.target.value);
                            }
                        }
                    }>
                        {
                            options.map((option, index) => (
                                <option key={index} value={option.value}>{option.label}</option>
                            ))
                        }
                    </select>
                </FieldBase>
            </DefaultInputStyle>
            <style jsx>{`
              select {
                width: 100%;
                padding: 0.5rem;
                border: none;
                border-radius: 0;
                margin-bottom: 1rem;
                color: #000;
              }
            `}</style>
        </>
    );
}

