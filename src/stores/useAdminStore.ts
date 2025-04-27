import { create } from 'zustand';

interface AdminState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',  // 로컬스토리지에서 로그인 상태 불러오기
  login: () => {
    localStorage.setItem('isLoggedIn', 'true');  // 로그인 시 로컬스토리지에 상태 저장
    set({ isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');  // 로그아웃 시 로컬스토리지에서 상태 제거
    set({ isLoggedIn: false });
  },
}));
