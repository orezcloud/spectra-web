import DefaultPostLayout from '../../layouts/default-post-layout';


export default function GasGenerators() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h1>Gas Generators</h1>
                    </div>
                ),
            ]}
            name={'hybrid-generator'}
        />
    )
}
