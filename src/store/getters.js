export const getters = {
    lines: state => {
        return state.lines.filter(l => l.name.toLowerCase().includes(state.search.toLowerCase()));
    }
}