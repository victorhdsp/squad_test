import { create } from 'zustand'

export type TopicFilters = {
  search: string,
  orderBy: string,
  tags: string
}

interface BearState {
    menu_mobile: boolean
    toogle_menu_mobile: (status: boolean) => void
}

const useSystemStore = create<BearState>()((set) => ({
  menu_mobile: false,
  toogle_menu_mobile: (status) => set((_) => ({ menu_mobile: status }))
}))


export default useSystemStore;
