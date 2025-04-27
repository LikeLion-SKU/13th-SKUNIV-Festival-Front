import ModalTransition from "../../shared/components/Modal/ModalTransition";
import useHeader from "../../shared/hooks/useHeader";
import Modals from "./modals";

import * as S from "./style";
import WaitingRow from "./WaitingRow";

const dummy = [
  { id: 0, name: "홍길동", phoneNum: "010-1234-5678", headCount: 3 },
  { id: 1, name: "홍길동", phoneNum: "010-1234-5678", headCount: 3 },
];

export default function TablingAdmin() {
  useHeader({
    title: "디자인학부",
    showBack: true,
    showHome: true,
  });

  return (
    <>
      <S.Layout>
        <S.Waiting>현재 대기 팀</S.Waiting>
        <S.WaitingNumber>12팀</S.WaitingNumber>
        <S.WaitingRowContainer>
          {dummy.map((waiting) => (
            <WaitingRow
              key={waiting.id}
              name={waiting.name}
              phoneNum={waiting.phoneNum}
              headCount={waiting.headCount}
            />
          ))}
        </S.WaitingRowContainer>
      </S.Layout>
      <ModalTransition>
        <Modals />
      </ModalTransition>
    </>
  );
}
