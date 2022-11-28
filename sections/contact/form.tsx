import {Input, InputBaseProps, Select, SelectProps, TextArea} from './fields';
import {FormEvent} from 'react';


export function Field(props: (InputBaseProps | SelectProps) & {label: string}) {

    const RawField = () => {
        switch (props.fieldType) {
            case 'text':
                return <Input {...props}/>;
            case 'textarea':
                return <TextArea {...props}/>;
            case 'select':
                if ('options' in props && props.options) {
                    return <Select {...props}/>;
                }
                return <Input {...props}/>;
            default:
                return <Input {...props}/>;
        }
    };

    return (
        <div className="field row mb-4">
            <label className="label col-12 col-md-auto" style={{
                width: 240,
            }}>{props.label}</label>
            <div className="control col-12 col-md">
                <RawField/>
            </div>
        </div>
    );
}

interface IFieldGroupProps {
    groupTitle?: string,
    fields: ((InputBaseProps | SelectProps) & {label: string})[]
}

export function FieldGroup(props: IFieldGroupProps) {
    return (
        <>
            {
                props.groupTitle &&
                <h4 className={'mb-8'}>{props.groupTitle}</h4>
            }
            {
                props.fields.map((field, index) => (
                    <Field key={index} {...field}/>
                ))
            }
        </>
    );
}

export interface IFormProps {
    fieldGroups: IFieldGroupProps[];
    submitText?: string;
    onSubmit?: (
        data: {
            [key: string]: string;
        } | null,
    ) => void;
}

export function Form(props: IFormProps) {
    return (
        <form onSubmit={(e: FormEvent) => {
            e.preventDefault();
            // @ts-ignore
            const formData = new FormData(e.currentTarget);
            const data: {
                [key: string]: string;
            } = {};
            formData.forEach((value, key) => {
                    if (typeof value === 'string') {
                        data[key] = value;
                    }
                },
            );
            if (props.onSubmit) {
                props.onSubmit(data);
            }
        }}>
            {
                props.fieldGroups.map((group, index) => (
                    <FieldGroup key={index} {...group}/>
                ))
            }
            <button type="submit" className={'mt-8'}>
                <span>
                    {props.submitText || 'Submit'}
                </span>
            </button>
            <style jsx>{`
              button {
                line-height: 71px;
                height: 71px;
                width: 100%;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                border: 0;
                font-size: .9375rem;
                font-weight: 700;
                cursor: pointer;
                display: flex;
                font-family: Lato, Noto Sans, Yu Gothic, YuGothic, Meiryo, sans-serif;
                color: #fff;
                background-color: #111;
                align-items: center;
                padding-left: 20px;
                letter-spacing: .05em;
                transition: all .5s ease-in-out;
                border-radius: 2px;

                span {
                  min-width: 100px;
                  text-align: left;
                }


                span::after {
                  content: "";
                  display: block;
                  position: absolute;
                  top: 50%;
                  margin-top: -3px;
                  right: -34px;
                  width: 26px;
                  height: 6px;
                  background-image: url(/icons/icon-arrow-white@2x.png);
                  background-position: 50%;
                  background-size: contain;
                  background-repeat: no-repeat;
                  transition: transform .5s ease-in-out;
                }

                &:hover {
                  opacity: .5;
                  box-shadow: 0 1px 8px rgb(94 99 97 / 50%);

                  span::after {
                    transform: translateX(20px);
                  }
                }
              }
            `}</style>
        </form>
    );
}
