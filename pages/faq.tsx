import DefaultPostLayout from '../layouts/default-post-layout';
import {H2, H3, H4, P} from '../widgets/comps/text';
import {OlList} from '../widgets/list/ul-list';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <title>
                            Frequently Asked Questions - Spectra Power Solutions
                        </title>
                        <H2>Guide to Diesel Generator Air Filters, Fuel Filters, and Oil Filters</H2>
                        <H3>Why are new Parts Important to a Diesel Generator?</H3>
                        <P>Air filters, fuel filters (including water separators), and oil filters, are essential
                            components that play a big role in the operation of any Diesel Generator.<br/><br/>
                            Your diesel generator should be operating at maximum generator efficiency. This means it is
                            important that the right supporting parts are installed correctly and maintained properly
                            within your generator.<br/><br/>
                            You need the right air filters, fuel filters and oil filters for the right generator –
                            ensuring that only genuine parts are used in your diesel generator.<br/><br/>
                            If maintained correctly, the life expectancy of your diesel generator can be prolonged for
                            20+ years. This could save you a lot of headaches, and thousands of dollars over the long
                            term.<br/><br/>
                            In this article, we will cover the basics of fuel filter, air filter, and oil filter. You
                            will understand their features, and what you need to know to ensure your ownership of a
                            diesel generator is hassle-free.<br/><br/>
                            We also cover what you need to look out for so that your ownership as easy as possible.
                        </P>
                        <H4>Air Filters</H4>
                        <P>Air Filters are integral in maintaining the well-being of your diesel generator.
                            Diesel generators require outside air for its combustion process. This outside air however
                            contains a range of pollen, sand, dust, and other additives that need to be filtered out to
                            ensure clean air enters the combustion process.<br/><br/>
                            When an air filter becomes used, it starts to allow these particles and additives into the
                            combustion process. In other words, When air filter reaches its maximum dirt absorption rate
                            it won’t be able to block all the contaminated particles that affects the diesel
                            generator.<br/><br/>
                            This means that if it is not replaced as per the maintenance log, your diesel generator can
                            become less efficient, leading to an increase in the consumption of fuel.<br/><br/>
                            Thus, air filters play an important role in the life expectancy of your diesel generator by
                            extracting these particles from entering the diesel engine and only allows clear air to pass
                            through.<br/><br/>
                            Air filters have limited life and after specific hours of running, it is very important to
                            replace the diesel generator set with the genuine air filter.<br/><br/>
                            Similar to a fuel filter, the air filter will last around 500 hours of use and can be
                            changed by most people provided that safety precautions are heeded.<br/><br/>
                            We recommend you use genuine air filters, which can be sourced by our Parts team. While
                            non-genuine air filters may be marginally less expensive, they are poor in quality. This
                            poses potential danger to your diesel generators, as they may allow for an incorrect mix of
                            air and fuel into your diesel generator.<br/><br/>
                            This ultimately results in poor engine performance and high fuel consumption – which may
                            actually cost you more as a result.
                        </P>
                        <H4>Fuel Filters</H4>
                        <P>Fuel filters blocks dust and other harmful particles from entering the engine. Without fuel
                            filters, some of the impurities can enter the engine and cause potential damages to fuel
                            pumps and injectors. This ultimately affects the performance of the
                            engine.<br/><br/>
                            Each diesel generator only functions with the specific type of fuel filter that it was
                            designed for. Using other fuel filters will most likely damage your diesel generator. You
                            can find the information of which type of fuel filter your diesel generator needs through
                            the part number on the fuel filter.<br/><br/>
                            A fuel filter is designed to last on average of about 500 hours of the diesel generator
                            being operational. That is roughly 20 days of continuous use before your fuel filters need
                            to be changed and replaced from your diesel generator.<br/><br/>
                            Changing the fuel filter is a relatively simple process and can be performed by most people
                            – provided that the requisite safety precautions are taken.<br/><br/>
                            When a diesel generator is purchased from Spectra, it comes with a service kit which include
                            the maintenance log. This maintenance log includes all the details and parts information
                            that are required to be serviced after specific hours of running.<br/><br/>
                            We strongly recommends following the maintenance log as it will ensure smooth running for
                            the diesel generator.
                        </P>
                        <H4>Oil Filters</H4>
                        <P>Oil filter plays a central role in providing clean supply of oil to different parts of the
                            engine for smooth running and reducing the effects of wear and tear. It reduces friction so
                            that metal components may press against each other without damaging the components.<br/><br/>
                            With the oil continuously being pumped throughout the engine, it collects residue and other
                            particles that may contaminate the oil over time. The oil filter cleans the oil every time
                            it passes through the filter by collecting these residue and particles, to ensure that the
                            oil is “clean” for its next cycle across the engine.<br/><br/>
                            If the oil is dirty, it will become thick and abrasive and will eventually clog the filter
                            and will automatically bypass the filter through a relief valve. This increases the friction
                            between the parts inside the diesel engine and thus increase wear and
                            tear.<br/><br/>
                            Like fuel and air filters, it is also important to replace oil filters after the diesel
                            generator has passed specific hours of operation. Fake oil filters should be avoided because
                            this leads to oil leaking and corrosion and quickly deteriorates the engine
                            life.<br/><br/>
                            Only genuine oil filters are required to be used that prolongs the generator life and as
                            well lubricate the engine correctly.
                        </P>
                        <H3>General Precautions</H3>
                        <P>When replacing your filters, please remember the following:</P>
                        <OlList list={[
                            'Always make sure that the engine is off.',
                            'Please check that the diesel generator is turned off through the control panel of the diesel generator and as well the emergency button and battery isolator.',
                            'Diesel engines produce great suction and almost anything near such as nuts and bolts can fly into the engine.'
                        ]} />


                        <H3>Summary</H3>
                        <P>In summary, the key advantages of maintaining the fuel filter, air filter and oil filter
                            are:</P>
                       <OlList list={[
                           'Improved Performance',
                           'Long Diesel Generator Life',
                           'Lower Emission'
                       ]}/>

                        <P>For more information on diesel generators, please contact us at <a href="mailto:spectra@powermart.lk"/></P>

                        <P>Spectra strongly recommends the use of genuine parts for your diesel
                            generator.<br/><br/>
                            Using genuine parts not only reduce the safety risks but also prolong the life of the diesel
                            generator. Spectra supply genuine parts that is being provided and tested by the
                            manufacturer itself.
                        </P>

                    </div>
                ),
            ]}
            name={'about'}
            heroProps={{
                title: 'FAQs',
                subtitle: 'Frequently Asked Questions',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
