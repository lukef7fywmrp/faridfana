"use client";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import CustomCursor from "@/components/ui/custom-cursor";
import DarkModeToggle from "@/components/ui/dark-mode-toggle";
import InteractiveBackground from "@/components/ui/interactive-background";
import WordFadeIn from "@/components/ui/word-fade-in";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGlobe, FaTelegram, FaYoutube } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

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
  const [selectedQR, setSelectedQR] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");

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

              <motion.div
                variants={itemVariants}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 dark:text-white inline-block border-b-2 border-indigo-500 pb-1">
                  Live Classes Payment Methods
                </h3>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
                  <QRCodeCard
                    src="/bitcoin-transfer-qr.jpg"
                    alt="Bitcoin Transfer QR Code"
                    title="Bitcoin Transfer"
                    onClick={() => setSelectedQR("/bitcoin-transfer-qr.jpg")}
                  />
                  <QRCodeCard
                    src="/hesabpay-transfer-qr.jpg"
                    alt="HesabPay Transfer QR Code"
                    title="HesabPay Transfer"
                    onClick={() => setSelectedQR("/hesabpay-transfer-qr.jpg")}
                  />
                </div>
                <div className="mt-6 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-left">
                  <h4 className="font-semibold mb-2">
                    Important Instructions:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">1.</span>
                      <span>
                        Before enrolling, email{" "}
                        <a
                          href="mailto:faridfana223@gmail.com"
                          className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          faridfana223@gmail.com
                        </a>{" "}
                        to confirm your class and time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">2.</span>
                      <span>
                        After payment, send the confirmation screenshots to the
                        same email address:{" "}
                        <a
                          href="mailto:faridfana223@gmail.com"
                          className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          faridfana223@gmail.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {isMobile ? (
        <QRCodeDrawer
          isOpen={!!selectedQR}
          onClose={() => setSelectedQR(null)}
          src={selectedQR}
        />
      ) : (
        <QRCodeModal
          isOpen={!!selectedQR}
          onClose={() => setSelectedQR(null)}
          src={selectedQR}
        />
      )}
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

function QRCodeCard({
  src,
  alt,
  title,
  onClick,
}: {
  src: string;
  alt: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-40 h-40 mx-auto mb-3">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {title}
      </p>
    </motion.div>
  );
}

function QRCodeModal({
  isOpen,
  onClose,
  src,
}: {
  isOpen: boolean;
  onClose: () => void;
  src: string | null;
}) {
  if (!src) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
          <DialogDescription>
            Scan the QR Code to Proceed with Your Payment
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full aspect-square mt-4">
          <Image
            src={src}
            alt="QR Code"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <DialogFooter>
          <Button onClick={onClose} variant="secondary">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function QRCodeDrawer({
  isOpen,
  onClose,
  src,
}: {
  isOpen: boolean;
  onClose: () => void;
  src: string | null;
}) {
  if (!src) return null;

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>QR Code</DrawerTitle>
          <DrawerDescription>
            Scan the QR Code to Proceed with Your Payment
          </DrawerDescription>
        </DrawerHeader>
        <div className="relative w-full aspect-square mt-4 px-4">
          <Image
            src={src}
            alt="QR Code"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <DrawerFooter>
          <Button onClick={onClose} variant="secondary">
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
