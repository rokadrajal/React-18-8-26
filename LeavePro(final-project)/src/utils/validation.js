export function ProtectedRoute({ children }) {
    if (!localStorage.getItem("token")) {
        location.href = "/login"
        return
    }
    return children
}

export function Logout() {
    localStorage.removeItem("token");
    location.href = "/login"
    return
}