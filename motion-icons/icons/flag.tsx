import { m, LazyMotion, domAnimation } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "none",
    stroke: "none",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "none",
    stroke: "currentColor",
  },
};

export const Flag = (props) => (
  <LazyMotion features={domAnimation}>
    <div className="icon-conatiner">
      <m.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <m.path
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 5, ease: "easeInOut" },
            fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          }}
        />
      </m.svg>
    </div>
  </LazyMotion>
);
