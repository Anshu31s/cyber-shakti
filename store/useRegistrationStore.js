import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRegistrationStore = create(
  persist(
    (set) => ({
      registrationData: {
        amount: 0,
        type: '',
        userDetails: {},
        originPage: '',
      },

      updateRegistration: (data) =>
        set((state) => ({
          registrationData: { ...state.registrationData, ...data },
        })),
        
      resetRegistration: () => set({
        registrationData: {
          amount: 0,
          type: '',
          userDetails: {},
          originPage: '',
        }
      })
    }),
    {
      name: 'registration-storage',
    }
  )
);
