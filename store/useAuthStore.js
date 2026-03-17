import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { fetchApi } from '../utils/api';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      loading: true,

      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),

      login: async (email, password) => {
        try {
          const response = await fetchApi("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.msg || "Login failed");
          }

          localStorage.setItem("token", data.token);
          set({ user: data.user, loading: false });
          return { success: true };
        } catch (error) {
          console.error(error);
          return { success: false, message: error.message };
        }
      },

      register: async (name, email, password) => {
        try {
          const response = await fetchApi("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.msg || "Registration failed");
          }

          localStorage.setItem("token", data.token);
          set({ user: data.user, loading: false });
          return { success: true };
        } catch (error) {
          console.error(error);
          return { success: false, message: error.message };
        }
      },

      googleLogin: async (userInfo) => {
        try {
          const response = await fetchApi("/api/auth/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.msg || "Google Login failed");
          }

          localStorage.setItem("token", data.token);
          set({ user: data.user, loading: false });
          return { success: true };
        } catch (error) {
          console.error(error);
          return { success: false, message: error.message };
        }
      },

      updateProfile: async (formData) => {
        try {
          const token = localStorage.getItem("token");
          const response = await fetchApi("/api/auth/profile", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
            body: JSON.stringify(formData),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.msg || "Profile update failed");
          }

          const updatedUser = { ...get().user, ...data };
          set({ user: updatedUser });

          return { success: true, user: updatedUser };
        } catch (error) {
          console.error(error);
          return { success: false, message: error.message };
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
      },

      initialize: () => {
        const storedUser = localStorage.getItem("auth-storage");
        if (storedUser) {
            // Zustand persist handles hydration automatically, 
            // but we can add extra logic here if needed.
        }
        set({ loading: false });
      }
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);
