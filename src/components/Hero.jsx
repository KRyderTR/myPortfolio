import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 mt-20 pb-4 lg:mb-35 lg:mt-5">
      <div className="flex flex-wrap ">
        <div className="w-full">
          <div className="flex flex-col items-center lg:items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-7xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Rom Charit
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-5 lg:mb-32 lg:text-4xl"
            >
              Junior Frontend Developer
            </motion.span>
            {/* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mb-2 text-s max-w-xl pt-2 pb-16 font-light tracking-tighter lg:text-xl"
            >
              {HERO_CONTENT}
            </motion.p> */}
          </div>
        </div>
        {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Rom Charit"
              className="rounded-2xl"
              width={400}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
