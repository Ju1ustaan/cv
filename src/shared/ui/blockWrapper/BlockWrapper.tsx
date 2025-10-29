import type { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/shared/lib/hooks/useMediaQuery';
import './blockWrapper.css'

interface PageTransitionProps {
    children: ReactNode;
    position?: 'left' | 'right';
}

export const BlockWrapper: FC<PageTransitionProps> = ({ children, position }) => {
    const isMobile = useMediaQuery("(max-width: 768px)")
 
  const transitionValue = isMobile ? 10 : 100;
  const durationValue = isMobile ? 0.3 : 0.9;
    
    return (
        <motion.div
            initial={{ opacity: 0, x: position === 'left'? -transitionValue: transitionValue }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: durationValue, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="wrapper">
            {children}
        </motion.div>
    )
}
