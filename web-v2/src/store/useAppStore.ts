"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MOCK_REVIEW_CHECKS } from "@/data/fixtures";

type OnboardingData = {
  role: string;
  experience: string;
  useCase: string;
  consent: boolean;
};

type NewProjectData = {
  name: string;
  company: string;
  type: string;
  status: string;
  confidentiality: string;
  goal: string;
  audience: string;
  duration: string;
};

type AppState = {
  isLoggedIn: boolean;
  hasOnboarded: boolean;
  onboarding: OnboardingData;
  newProject: NewProjectData;
  selectedDirectionId: string | null;
  resolvedCheckIds: string[];

  login: () => void;
  logout: () => void;
  completeOnboarding: (data: OnboardingData) => void;
  setNewProject: (data: Partial<NewProjectData>) => void;
  selectDirection: (id: string) => void;
  resolveCheck: (id: string) => void;
  resetMockData: () => void;
};

const defaultOnboarding: OnboardingData = {
  role: "",
  experience: "",
  useCase: "",
  consent: false,
};

const defaultNewProject: NewProjectData = {
  name: "",
  company: "",
  type: "",
  status: "",
  confidentiality: "",
  goal: "",
  audience: "",
  duration: "",
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      hasOnboarded: false,
      onboarding: defaultOnboarding,
      newProject: defaultNewProject,
      selectedDirectionId: null,
      resolvedCheckIds: [],

      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
      completeOnboarding: (data) =>
        set({ hasOnboarded: true, onboarding: data }),
      setNewProject: (data) =>
        set((s) => ({ newProject: { ...s.newProject, ...data } })),
      selectDirection: (id) => set({ selectedDirectionId: id }),
      resolveCheck: (id) =>
        set((s) => ({ resolvedCheckIds: [...s.resolvedCheckIds, id] })),
      resetMockData: () =>
        set({
          isLoggedIn: false,
          hasOnboarded: false,
          onboarding: defaultOnboarding,
          newProject: defaultNewProject,
          selectedDirectionId: null,
          resolvedCheckIds: [],
        }),
    }),
    { name: "storyframe-mock-state" }
  )
);

export function useUnresolvedChecks() {
  const resolved = useAppStore((s) => s.resolvedCheckIds);
  return MOCK_REVIEW_CHECKS.filter((c) => !resolved.includes(c.id));
}
