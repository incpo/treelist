import React from 'react';
import {motion} from "framer-motion";
import ListItem from "@/components/TreeList/ListItem";

const List = ({isOpen, items}) => {
    return (
        <motion.ul
            animate={{height: isOpen ? 'auto' : 0}}
            className={!isOpen ? 'relative overflow-hidden -z-10' : ''}
            variants={variants}
        >
            {items.map(i=>
                <ListItem i={i} key={i}/>
            )}
        </motion.ul>
    );
};

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
export default List;