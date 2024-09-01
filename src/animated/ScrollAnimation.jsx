import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ children, animationVariants, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3, // Animasi dimulai saat 30% elemen terlihat
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, []);

    const updatedVariants = {
        ...animationVariants,
        visible: {
            ...animationVariants.visible,
            transition: {
                ...animationVariants.visible.transition,
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            ref={elementRef}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={updatedVariants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
