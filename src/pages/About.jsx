import { motion } from "framer-motion";
import React from 'react';
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
const About = () => {
    return (
        <div id="about" className="bg-[#050816] container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <motion.div variants={textVariant()}>
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-lg mb-8'
            >
                Hi, I'm M.Hitesh, a highly motivated Web Developer with a passion for delivering beautiful solutions. With [Number] years of experience in the industry, I possess a deep understanding of [Industry/Field] and a proven track record of success.
            </motion.p>

            <div className="0 flex flex-wrap justify-center mb-12">
                <Tilt
                    options={{ max: 25, scale: 1.1 }}
                    className=" w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0"
                >
                    <motion.div
                        variants={fadeIn("right", "spring", 0.5, 0.75)}
                        className="green-pink-gradient bg-[#151030] rounded-lg shadow-md p-4"
                    >
                        <h2 className="text-lg font-bold mb-2">Work Experience 1</h2>
                        <p className="text-md mb-4">
                            [ Briefly describe your work experience 1 ]
                        </p>
                        <p className="text-md mb-4">
                            [ Briefly describe your work experience 1 ]
                        </p>
                    </motion.div>
                </Tilt>

                <Tilt
                    options={{ max: 25, scale: 1.1 }}
                    className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0"
                >
                    <motion.div
                        variants={fadeIn("right", "spring", 0.5, 0.75)}
                        className="bg-[#151030] border-[white] rounded-lg shadow-md p-4"
                    >
                        <h2 className="text-lg font-bold mb-2">Work Experience 2</h2>
                        <p className="text-md mb-4">
                            [ Briefly describe your work experience 2 ]
                        </p>
                        <p className="text-md mb-4">
                            [ Briefly describe your work experience 2 ]
                        </p>
                    </motion.div>
                </Tilt>

                <Tilt
                    options={{ max: 25, scale: 1.1 }}
                    className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0"
                >
                    <motion.div
                        variants={fadeIn("right", "spring", 0.5, 0.75)}
                        className="bg-[#151030] rounded-lg shadow-md p-4"
                    >
                        <h2 className="text-lg font-bold mb-2">Work Experience 3</h2>
                        <p className="text-md mb-4">
                            [ Briefly describe your work experience 3 ]
                        </p>
                        <p className="text-md mb-4">
                            [ Briefly describe your work experience 3 ]
                        </p>
                    </motion.div>
                </Tilt>

                <Tilt
                    options={{ max: 25, scale: 1.1 }}
                    className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0"
                >
                    <motion.div
                        variants={fadeIn("right", "spring", 0.5, 0.75)}
                        className="bg-[#151030] rounded-lg shadow-md p-4"
                    >
                        <h2 className="text-lg font-bold mb-2">Work Experience 4</h2>
                        <p className="text-md mb-4">
                            [ Briefly describe your work experience 4 ]
                        </p>
                        <p className="text-md mb-4">
                            [ Briefly describe your work experience 4 ]
                        </p>
                    </motion.div>
                </Tilt>
            </div>
        </div>
    );
};

export default About;