function authReducer(state, action) {
  if (action.type === "fetching") {
    return { ...state, loading: true, error: null };
  }

  if (action.type === "error") {
    return { ...state, loading: false, error: action.payload };
  }

  if (action.type === "signin") {
    return { ...state, loading: false, error: null, user: action.payload };
  }

  if (action.type === "signout") {
    return { ...state, loading: false, error: null, user: null };
  }
}

export default authReducer;
