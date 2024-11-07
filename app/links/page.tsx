"use client";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/ui/custom-cursor";
import DarkModeToggle from "@/components/ui/dark-mode-toggle";
import InteractiveBackground from "@/components/ui/interactive-background";
import WordFadeIn from "@/components/ui/word-fade-in";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaBitcoin,
  FaEnvelope,
  FaGlobe,
  FaPalette,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

interface CourseFeature {
  title: string;
  items: string[];
}

const cryptoCourseFeatures: CourseFeature[] = [
  {
    title: "Course Topics",
    items: [
      "Crypto Trading",
      "Crypto Analysis",
      "Digital Asset Management",
      "Market Analysis",
      "Trading Strategies",
      "Risk Management",
    ],
  },
];

const designCourseFeatures: CourseFeature[] = [
  {
    title: "Adobe Creative Suite",
    items: [
      "Adobe After Effects 2025",
      "Adobe Premiere Pro 2025",
      "Adobe Illustrator 2025",
      "Adobe Photoshop 2025",
    ],
  },
  {
    title: "Technical Skills",
    items: [
      "Branding & Color Theory",
      "Video & Audio Editing",
      "Motion Graphics",
      "2D & 3D Animations",
      "Visual Effects",
      "Social Media Graphics",
      "Advertisement Designs",
      "Presentation Designs",
      "Infographics",
      "Composition",
      "Typography",
    ],
  },
];

function LiveClassesSection() {
  return (
    <motion.div
      variants={itemVariants}
      className="space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Live Classes
      </h2>

      {/* Crypto Course Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-xl">
              <FaBitcoin className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Cryptocurrency Live Course
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Join our comprehensive cryptocurrency course to gain hands-on
            knowledge and master the digital asset market. Perfect for beginners
            and intermediate traders, with interactive Q&A sessions and live
            demos.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {cryptoCourseFeatures.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  {feature.title}
                </h4>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Course Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
              <FaPalette className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Graphic Design Live Course
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Master the latest in Graphic Design and learn how to create stunning
            graphics and dive into Motion Graphics and Video Editing. This
            course will open doors to earning opportunities on-site, remotely,
            or as a freelancer.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {designCourseFeatures.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  {feature.title}
                </h4>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
          onClick={() =>
            (window.location.href = "mailto:faridfana223@gmail.com")
          }
        >
          Enroll Now
        </Button>
      </div>
    </motion.div>
  );
}

const links = [
  {
    name: "Farid Fana",
    description: "Official Website",
    url: "https://faridfana.com",
    icon: FaGlobe,
    disabled: true,
    launchingSoon: true,
  },
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

export default function Links() {
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
                    Digital Coach
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
                    href={link.disabled ? "#" : link.url}
                    target={link.disabled ? "_self" : "_blank"}
                    rel={link.disabled ? "" : "noopener noreferrer"}
                    className={`flex items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 transform ${
                      link.disabled
                        ? "cursor-not-allowed opacity-70"
                        : "hover:shadow-xl hover:-translate-y-1"
                    }`}
                    whileHover={link.disabled ? {} : { scale: 1.03 }}
                    whileTap={link.disabled ? {} : { scale: 0.98 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <link.icon className="text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400 mr-3 sm:mr-4 flex-shrink-0" />
                    <div className="flex-grow">
                      <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                        {link.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                        {link.description}
                      </p>
                    </div>
                    {link.launchingSoon && (
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:text-indigo-200 dark:bg-indigo-800 rounded-full">
                        Launching Soon
                      </span>
                    )}
                  </motion.a>
                ))}
              </motion.div>

              <LiveClassesSection />
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
