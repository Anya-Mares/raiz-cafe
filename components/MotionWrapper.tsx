import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

export default function MotionWrapper({
  children,
  delay = 0,
  y = 40,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
