import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import starWhite from "@icon/star_white.svg";
import starYellow from "@icon/star_yellow.svg";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StarIcon = styled(motion.div)<{ isVisible: boolean }>`
  width: 26px;
  height: 26px;
  background-image: url(${(props) => (props.isVisible ? starYellow : starWhite)});
  background-size: cover;
  transition: background-image 0.4s ease;
`;

export const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: white;
  margin-top: 8px;
  margin-bottom: 30px;
`;
export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 100px;
`;

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

export default function Section({ title, content }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <SectionWrapper>
      <StarIcon isVisible={isInView} />
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{content}</SectionContent>
    </SectionWrapper>
  );
}
