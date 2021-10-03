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

export const Mobile = (props) => (
  <LazyMotion features={domAnimation}>
    <div className="icon-conatiner">
      <m.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <m.path
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
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
