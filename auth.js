function login(username, password) {
    if (username === "admin" && password === "1234") {
        return true;
    }

    if (!username || !password) {
        throw new Error("Username và password không được để trống");
    }

    if (username === "locked") {
        throw new Error("Tài khoản đã bị khóa");
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
        throw new Error("Mật khẩu chứa ký tự đặc biệt");
    }

    throw new Error("Sai username hoặc password");
}

module.exports = { login };
