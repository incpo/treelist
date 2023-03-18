import React from 'react';
import {motion, useCycle} from "framer-motion";
import {MenuToggle} from "@/components/TreeList/MenuToggle";
import List from "@/components/TreeList/List";

const Index = ({items, title}) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className='my-1 max-w-md'
        >
           <div className='flex '>
               <MenuToggle toggle={() => toggleOpen()}/>
               <p className='text-black ml-2'>{title}</p>
           </div>
            <List isOpen={isOpen} items={items}/>

        </motion.div>
    );
};

export default Index;