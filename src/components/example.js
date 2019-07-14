import * as React from "react";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const Example = () => {

    const constraintsRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
    clamp: false
    });
    const rotateX = useTransform(y, [-200, 0, 200], [-45, 0, 45], {
        clamp: false
    });
    return (
        <motion.div
        
            className="container"
            ref={constraintsRef}
            style={{
        rotateY, rotateX
        }}
        >
        <motion.div
            className="item"
            drag="x"
            
            dragConstraints={constraintsRef}
        style={{
            x
        }}
        />
        
        </motion.div>
    );
};
