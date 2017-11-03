export const mutations = {
    CHARGE_STATE: (state, payload) => {
        payload.map(l => {
            state.lines.push(
                {id: l.id, name: l.name, edited: false}
            );
        });
    },
    ADD_LINE: (state, payload) => {
        state.lines.push(
            {id: Date.now(), name: payload, edited: false}
        )
    },
    DELETE_LINE: (state, payload) => {
        state.lines = state.lines.filter(p => p.id !== payload);
    },
    EDIT_LINE: (state, payload) => {
        let index = state.lines.findIndex(p => p.id === payload);
        for (var i = 0; i < state.lines.length; i++) {
            if (i != index) {
                state.lines[i].edited = false;
            }
        }
        state.lines[index].edited = !state.lines[index].edited;
    },
    UPDATE_LINE: (state, payload) => {
        let index = state.lines.findIndex(p => p.id === payload.id);
        state.lines[index].name = payload.name;
    },
    SEARCH_LINE: (state, payload) => {
        state.search = payload;
    }
}