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

export const Pencil = (props) => (
  <LazyMotion features={domAnimation}>
    <div className="icon-container">
      <m.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <m.path
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
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
