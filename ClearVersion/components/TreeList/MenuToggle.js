import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="#000"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} className='z-10'>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 8.00,12.00 C 8.00,12.00 16.00,12.00 16.00,12.00M 12.00,8.00 C 12.00,8.00 12.00,16.00 12.00,16.00M 19.00,3.00 C 20.10,3.00 21.00,3.90 21.00,5.00 21.00,5.00 21.00,19.00 21.00,19.00 21.00,20.10 20.10,21.00 19.00,21.00 19.00,21.00 5.00,21.00 5.00,21.00 3.90,21.00 3.00,20.10 3.00,19.00 3.00,19.00 3.00,5.00 3.00,5.00 3.00,3.90 3.90,3.00 5.00,3.00 5.00,3.00 19.00,3.00 19.00,3.00 Z" },
                    open: { d: "M 8.00,12.00 C 8.00,12.00 16.00,12.00 16.00,12.00M 19.00,3.00 C 20.10,3.00 21.00,3.90 21.00,5.00 21.00,5.00 21.00,19.00 21.00,19.00 21.00,20.10 20.10,21.00 19.00,21.00 19.00,21.00 5.00,21.00 5.00,21.00 3.90,21.00 3.00,20.10 3.00,19.00 3.00,19.00 3.00,5.00 3.00,5.00 3.00,3.90 3.90,3.00 5.00,3.00 5.00,3.00 19.00,3.00 19.00,3.00 Z" }
                }}
            />
        </svg>
    </button>
);
