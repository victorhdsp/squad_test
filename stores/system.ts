import { create } from 'zustand'

type TopicFilters = {
  search: string,
  orderBy: string,
  tags: string
}

interface BearState {
    menu_mobile: boolean
    toogle_menu_mobile: (status: boolean) => void
    topic_filters: TopicFilters
    change_topic_filters: (state: Partial<TopicFilters>) => void
}

const useSystemStore = create<BearState>()((set) => ({
  menu_mobile: false,
  toogle_menu_mobile: (status) => set((_) => ({ menu_mobile: status })),
  topic_filters: {
    search: "",
    orderBy: "",
    tags: ""
  },
  change_topic_filters: ({search, orderBy, tags}) => set((state) => ({
    topic_filters: {
      orderBy: orderBy || state.topic_filters.orderBy,
      search: search || state.topic_filters.search,
      tags: tags || state.topic_filters.tags
    }
  }))
}))

export default useSystemStore;
