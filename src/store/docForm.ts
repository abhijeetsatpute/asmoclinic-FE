import { create } from "zustand";

const useDocFormStore = create((set) => ({
  docData: {
    fullname: "",
    occupation: "",
    image: null,
    info: {
      "Personal Information": [{ Birthday: null }],
      Education: [],
      Degree: [],
      Training: [],
      "Science articles": [],
      Publications: [],
      Category: [],
      "Language skills": [],
    },
  },
  setFullname: (name: string) =>
    set((state: any) => ({ docData: { ...state.docData, fullname: name } })),
  setOccupation: (occupation: string) =>
    set((state: any) => ({ docData: { ...state.docData, occupation } })),
  setImage: (image: any) => {
    set((state: any) => ({ docData: { ...state.docData, image } }));
  },
  setBirthday: (date: string) =>
    set((state: any) => ({
      docData: {
        ...state.docData,
        info: {
          ...state.docData.info,
          "Personal Information": [{ Birthday: date }],
        },
      },
    })),
  setScienceArticles: (aricle: string) =>
    set((state: any) => ({
      docData: {
        ...state.docData,
        info: {
          ...state.docData.info,
          "Science articles": [aricle],
        },
      },
    })),
  setPublications: (publication: string) =>
    set((state: any) => ({
      docData: {
        ...state.docData,
        info: {
          ...state.docData.info,
          Publications: [publication],
        },
      },
    })),
  setCategory: (cat: string) =>
    set((state: any) => ({
      docData: {
        ...state.docData,
        info: {
          ...state.docData.info,
          Category: [cat],
        },
      },
    })),
  setLanguage: (lang: any) => {
    const arrLang: any = [];
    lang.forEach((x: any) => {
      arrLang.push(`${x.label} ${x.value}`);
    });
    set((state: any) => ({
      docData: {
        ...state.docData,
        info: {
          ...state.docData.info,
          "Language skills": arrLang,
        },
      },
    }));
  },
  setEducation: (lang: any[]) => {
    const convertedArray: { [key: string]: string }[] = lang.map((item) => ({
      [item.year]: item.value,
    }));

    set((state: any) => ({
      docData: {
        ...state.docData,
        info: {
          ...state.docData.info,
          Education: convertedArray,
        },
      },
    }));
  },
  setDegree: (lang: any[]) => {
    const convertedArray: { [key: string]: string }[] = lang.map((item) => ({
      [item.year]: item.value,
    }));

    set((state: any) => ({
      docData: {
        ...state.docData,
        info: {
          ...state.docData.info,
          Degree: convertedArray,
        },
      },
    }));
  },
  setTraining: (lang: any[]) => {
    const convertedArray: { [key: string]: string }[] = lang.map((item) => ({
      [item.year]: item.value,
    }));

    set((state: any) => ({
      docData: {
        ...state.docData,
        info: {
          ...state.docData.info,
          Training: convertedArray,
        },
      },
    }));
  },
}));

export default useDocFormStore;
