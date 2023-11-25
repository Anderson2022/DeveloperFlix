import { reactive, readonly } from "vue";

interface State {
  isModalActive: boolean;
  scrollTop: number;
  modalData: any; // Altere "any" para o tipo apropriado do seu modalData
}

const initialState: State = reactive({
  isModalActive: false,
  scrollTop: 0,
  modalData: null,
});

export const setModalActive = (isActive: boolean): void => {
  // Keep scrollTop
  if (isActive) {
    const scrollTop = document.documentElement.scrollTop;
    initialState.scrollTop = scrollTop;
  }

  initialState.isModalActive = isActive;
};

export const setModalData = (data: any): void => {
  initialState.modalData = data;
};

export const state: Readonly<State> = readonly(initialState);
