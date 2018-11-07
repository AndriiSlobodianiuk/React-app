export const watchListreducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'add movie to watch list':
      if (Array.isArray(payload)) {
        return [...state, ...payload];
      }

      if (!state.some(el => el.id === payload.id)) {
        localStorage.setItem('watchlist', JSON.stringify([...state, payload]));
      }

      return state.some(el => el.id === payload.id)
        ? state
        : [...state, payload];

    case 'remove movie from watch list':
      const filteredState = state.filter(el => el.id !== payload);
      localStorage.setItem('watchlist', JSON.stringify([...filteredState]));

      return filteredState;

    default:
      return state;
  }
};
