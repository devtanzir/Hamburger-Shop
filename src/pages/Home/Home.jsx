import React from 'react';
import Layout from '../../components/Layouts/Layout';
import Section1 from './section1';
import '../../styles/Home.css'
import Section2 from './section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
    return (
        <div>
            <Layout>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section7/>
            </Layout>
        </div>
    );
}

export default Home;