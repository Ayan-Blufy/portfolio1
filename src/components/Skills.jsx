import React, { useState, useEffect } from 'react';
import Box1 from './bucket/Box1';
import Box2 from './bucket/Box2';
import img1 from '../images/project-1.jpg'
import img2 from '../images/project-2.jpg'
import Box3 from './bucket/Box3';
import './bucket/Box.css'
import { port } from './main';
import { db } from '../firbase';
import Aos from 'aos';
import "aos/dist/aos.css"

const Skills = () => {

    const [val, setVal] = useState(false);
    const [val1, setVal1] = useState(false);


    const [hash, setHash] = useState([]);
    const [show, setshow] = useState(false);
    const [main, setmain] = useState(port);

  

    useEffect(() => {
        db.collection('mern').onSnapshot(snapshot => {
            setHash(snapshot.docs.map(doc => doc.data()));
        })



    }, [])

    useEffect(() => {

        Aos.init({ duration: 2000 });
    }, [])
    //  console.log(hash[0].stack);


    let data;
    const [skills, setSkill] = useState([]);


    const solve = () => {
        setVal1(!val1)
        setshow(true);

    }


    useEffect(() => {
        if (val1) {
            data = hash.map((ele, i) => {
                return ele;
            })
        }
        else {
            data = hash.map((ele, i) => {
                return (i < 6 ? ele : null);
            })
        }
        setSkill(data);

    }, [val1])





    return (
        <>
            <div name="skills" className='w-full min-h-max bg-[#0a192f] text-gray-300 my-[10rem] md:my-10 '>

                <div class="max-w-5xl mx-auto px-6 lg:px-0">
                    <header class="mb-16">
                        <h3 class="text-4xl font-poppins text-blue-200 font-extrabold"><span class="text-green-300 text-xl mr-3">03.</span><span class="font-bold"></span>Some Things I've Built</h3>
                    </header>

                    <div data-aos="fade-up" className="">
                    
                    <Box1 img={main[0].img} data={main[0].data} stack={main[0].stack} gitrepo={main[0].gitrepo} weblink={main[0].weblink} name={main[0].name} />
                    </div>
                    <div data-aos="fade-up" className="">
                    <Box2 img={main[1].img} data={main[1].data} stack={main[1].stack} gitrepo={main[1].gitrepo} weblink={main[1].weblink} name={main[1].name} />
                    </div>
                </div>


                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-4 lg:px-0">
                        <header className="mb-16 text-center">
                            <h3 className="text-3xl hover:test font-poppins text-white font-extrabold">Other Noteworthy Projects</h3>

                        </header>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mb-20 w-full gap-3 mx-auto">


                            {
                                (!show ? hash.map((ele, i) => {
                                    if (i < 6) {
                                        return <Box3  title={ele.name} key={i} l1={ele.getrepo} l2={ele.weblink} skill={ele.stack} info={ele.info} />
                                    }
                                }) :
                                    skills.map((ele, i) => {
                                        if (ele != null)
                                            return <Box3 title={ele.name} key={i} l1={ele.getrepo} l2={ele.weblink} skill={ele.stack} info={ele.info} />
                                    })
                                )
                            }

                        </div>
                    </div>
                    <div class="text-center" onClick={solve}>
                        <button className="inline-block text-blue-200 hover:text-green-300 e px-6 py-2 border border-blue-200 hover:border-green-300 rounded">{val1 ? `Less projects` : `More projects`}</button>
                    </div>
                </section>

            </div>

        </>
    );
};

export default Skills;
