import React from 'react';
import {motion} from "framer-motion";

const ListItem = ({i}) => {
    return (
        <motion.li
            className='ml-3 py-1'
            whileHover={{scale: 1.01}}
            whileTap={{scale: 0.95}}
            variants={variants}
        >
            {i}
        </motion.li>
    );
};
const variants = {
    open: {
        opacity: 1,
        transition: {
            y: { stiffness: 500, velocity: -100 }
        }
    },
    closed: {
        y: 10,
        opacity: 0,
        transition: {
            y: { stiffness: 500 }
        }
    }
};
export default ListItem;