import { create } from "zustand";

const useStore = create((set) => {

  return {
    reservations: [],
    addReservation: (hotel, dates) => {
      set(state => {

        return {
          reservations: [ ...state.reservations, { hotel, dates }]
        }
      })
    }
  }
});

export default useStore;