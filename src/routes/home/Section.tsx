import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StarWhite from "@icon/star_white.svg?react";
import StarYellow from "@icon/star_yellow.svg?react";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

export default function Section({ title, content }: SectionProps) {
  const { ref, inView } = useInView({
    rootMargin: "-20% 0px -60% 0px",
    triggerOnce: false,
  });
  return (
    <SectionWrapper
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.25, delay: 0.25 }}
    >
      <AnimatePresence mode="wait">
        {inView ? (
          <StarIcon
            key="yellow"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <StarYellow />
          </StarIcon>
        ) : (
          <StarIcon
            key="white"
            animate={{ scale: 0.9 }}
            exit={{ scale: 0.9 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <StarWhite />
          </StarIcon>
        )}
      </AnimatePresence>

      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{content}</SectionContent>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StarIcon = styled(motion.div)`
  width: 26px;
  height: 26px;
`;

export const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-top: 8px;
  margin-bottom: 28px;
`;
export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 120px;
`;
