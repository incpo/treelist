import React from 'react';
import {motion, useCycle} from "framer-motion";
import {MenuToggle} from "@/components/TreeList/MenuToggle";
import List from "@/components/TreeList/List";

const Index = ({items}) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className='my-1'
        >
            <MenuToggle toggle={() => toggleOpen()}/>
            <List isOpen={isOpen} items={items}/>

        </motion.div>
    );
};

export default Index;