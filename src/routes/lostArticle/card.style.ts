import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: linear-gradient(to bottom, #666, #333);
  border-radius: 12px;
  color: white;
  padding: 20px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Location = styled.div`
  font-size: 12px;
  opacity: 0.8;
`;

export const DateText = styled.p`
  font-size: 13px;
  margin: 4px 0;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: bold;
`;