export const actions = {
    chargeState: (context, payload) => {
        context.commit('CHARGE_STATE', payload);
        console.log(payload);
    },
    addLine: (context, payload) => {
        context.commit('ADD_LINE', payload);
    },
    deleteLine: (context, payload) => {
        context.commit('DELETE_LINE', payload);
    },
    editLine: (context, payload) => {
        context.commit('EDIT_LINE', payload);
    },
    updateLine: (context, payload) => {
        context.commit('UPDATE_LINE', payload)
    },
    searchLine: (context, payload) => {
        context.commit('SEARCH_LINE', payload);
    }
}