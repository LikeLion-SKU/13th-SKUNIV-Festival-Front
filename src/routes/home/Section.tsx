import styled from "@emotion/styled";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import starWhite from "@icon/star_white.svg";
import starYellow from "@icon/star_yellow.svg";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

export default function Section({ title, content }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <SectionWrapper ref={ref}>
      <StarIcon src={isInView ? starYellow : starWhite} alt="star" />
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{content}</SectionContent>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StarIcon = styled(motion.img)`
  width: 26px;
  height: 26px;
  transition: all 0.4s ease;
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
