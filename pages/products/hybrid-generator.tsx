import DefaultPostLayout from '../../layouts/default-post-layout';


export default function HybridGenerator() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h1>Hybrid Generator</h1>
                    </div>
                ),
            ]}
            name={'hybrid-generator'}
        />
    )
}
