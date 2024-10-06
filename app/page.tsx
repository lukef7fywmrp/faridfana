"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaYoutube, FaTelegram, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import WordFadeIn from "@/components/ui/word-fade-in";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import DarkModeToggle from "@/components/ui/dark-mode-toggle";
import CustomCursor from "@/components/ui/custom-cursor";
import InteractiveBackground from "@/components/ui/interactive-background";

const links = [
  {
    name: "Learn With Fana",
    description: "Graphic Design Tutorials",
    url: "https://www.youtube.com/@learnwithfana",
    icon: FaYoutube,
  },
  {
    name: "Farid Fana - فرید فنا",
    description: "Financial Freedom Tutorials",
    url: "https://www.youtube.com/@FaridFana1",
    icon: FaYoutube,
  },
  {
    name: "Fanacryptonians",
    description: "Telegram Channel",
    url: "https://t.me/Fanacryptonians",
    icon: FaTelegram,
  },
  {
    name: "Contact",
    description: "Email",
    url: "mailto:faridfana223@gmail.com",
    icon: FaEnvelope,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const profileVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <CustomCursor />
      <InteractiveBackground />
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-300 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 p-4 sm:p-8 transition-colors duration-500">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 dark:bg-indigo-400 origin-left z-50"
          style={{ scaleX }}
        />
        <main className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            <DarkModeToggle />
          </div>
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8 sm:space-y-12"
            >
              <motion.div variants={profileVariants} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-block"
                >
                  <Image
                    src="/images/profile-picture.jpg"
                    alt="Farid Fana"
                    width={180}
                    height={180}
                    className="rounded-full mx-auto mb-4 sm:mb-6 shadow-lg"
                  />
                </motion.div>
                <WordFadeIn
                  words="Farid Fana"
                  className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-300 mb-2"
                />
                <AnimatedGradientText>
                  <span
                    className={cn(
                      "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
                      "text-xl sm:text-2xl font-light"
                    )}
                  >
                    Graphic Designer & Financial Freedom Coach
                  </span>
                </AnimatedGradientText>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid gap-4 sm:gap-6"
              >
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <link.icon className="text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400 mr-3 sm:mr-4 flex-shrink-0" />
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                        {link.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                        {link.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <WordFadeIn
                  words="Payment QR Code"
                  className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-block"
                >
                  <Image
                    src="https://via.placeholder.com/200x200.png?text=QR+Code"
                    alt="Payment QR Code"
                    width={180}
                    height={180}
                    className="mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  />
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Scan to support my work
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-300 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="w-16 h-16 bg-indigo-600 dark:bg-indigo-400"
      />
    </div>
  );
}
