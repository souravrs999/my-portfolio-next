import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

import Container from "@/components/Container";
import LeftPane from "@/components/LeftPane";
import RightPane from "@/components/RightPane";

const Home = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Container>
        <AnimatePresence>
          {/* Animated Left Pane */}
          <m.div
            key="left-pane"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            className="hidden justify-center w-1/4 h-full bg-gray-800 rounded-3xl max-h-100 lg:flex"
          >
            <LeftPane />
          </m.div>

          <div className="flex flex-col px-2 space-y-3 w-full h-full lg:w-3/4 lg:mx-0">
            <m.div
              key="nav-bar"
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              exit={{ y: -500 }}
            >
              <div className="p-3 w-full bg-gray-800 rounded-full">
                <div className="flex justify-between px-1 text-white">
                  <a
                    href=""
                    className="px-4 py-1 rounded-full hover:bg-blue-500"
                  >
                    Home
                  </a>
                  <a
                    href=""
                    className="px-4 py-1 rounded-full hover:bg-blue-500"
                  >
                    Dashboard
                  </a>
                  <a
                    href=""
                    className="px-4 py-1 rounded-full hover:bg-blue-500"
                  >
                    Projects
                  </a>
                  <a
                    href=""
                    className="px-4 py-1 rounded-full hover:bg-blue-500"
                  >
                    Blogs
                  </a>
                </div>
              </div>
            </m.div>
            {/* Animated Right Pane */}
            <m.div
              key="right-pane"
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              exit={{ x: 1000 }}
              className="overflow-y-scroll h-full bg-gray-800 rounded-3xl max-h-98"
            >
              <RightPane />
            </m.div>
          </div>
        </AnimatePresence>
      </Container>
    </LazyMotion>
  );
};

export default Home;
