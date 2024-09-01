import React from 'react';
import { motion } from 'framer-motion';

const FadeInLeft = ({ children }) => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.5 } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
        >
            {children}
        </motion.div>
    );
};

export default FadeInLeft;
