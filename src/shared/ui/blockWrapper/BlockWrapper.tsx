import type { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import './blockWrapper.css'

interface PageTransitionProps {
    children: ReactNode;
    position?: 'left' | 'right';
}

export const BlockWrapper: FC<PageTransitionProps> = ({ children, position }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: position === 'left'? -50: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="wrapper">
            {children}
        </motion.div>
    )
}
