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

export const ShoppingCart = (props) => (
  <LazyMotion features={domAnimation}>
    <div className="icon-conatiner">
      <m.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <m.path
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
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
