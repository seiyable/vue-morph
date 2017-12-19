/* =================================================
 state
================================================== */
const state = {
  modalWindow: {
    isVisible: false,
    bgColor: '',
    originElementId: ''
  },
  appButtons: [
    {id: 0, isVisible: true},
    {id: 1, isVisible: true},
    {id: 2, isVisible: true},
    {id: 3, isVisible: true},
    {id: 4, isVisible: true},
    {id: 5, isVisible: true},
    {id: 6, isVisible: true},
    {id: 7, isVisible: true},
    {id: 8, isVisible: true},
    {id: 9, isVisible: true},
    {id: 10, isVisible: true},
    {id: 11, isVisible: true},
    {id: 12, isVisible: true},
    {id: 13, isVisible: true},
    {id: 14, isVisible: true}
  ]
}

/* =================================================
 mutations
================================================== */
const mutations = {
  showModal (state, {bgColor, originElementId}) {
    console.log('[store.mutations] showModal: ', {bgColor, originElementId})
    state.modalWindow.isVisible = true
    state.modalWindow.bgColor = bgColor
    state.modalWindow.originElementId = originElementId
  },
  closeModal (state) {
    console.log('[store.mutations] closeModal')
    state.modalWindow.isVisible = false
  },
  showAppButton (state, {appButtonId}) {
    console.log('[store.mutations] showAppButton: ', {appButtonId})
    getAppButton(appButtonId).isVisible = true
  },
  hideAppButton (state, {appButtonId}) {
    console.log('[store.mutations] hideAppButton: ', {appButtonId})
    getAppButton(appButtonId).isVisible = false
  }
}

/* =================================================
 actions
================================================== */
const actions = {
}

/* =================================================
 getters
================================================== */
const getters = {
  getAppButton: (state) => (appButtonId) => {
    return state.appButtons.find(appButton => appButton.id === appButtonId)
  }
}

/* =================================================
 utility functions
================================================== */
function getAppButton (appButtonId) {
  return state.appButtons.find(appButton => appButton.id === appButtonId)
}

/* =================================================
 export
================================================== */
export default {
  state,
  mutations,
  actions,
  getters
}
