const { login } = require("./auth");

test("Mật khẩu sai", () => {
    expect(() => login("admin", "999")).toThrow("Sai username hoặc password");
});

test("Username rỗng", () => {
    expect(() => login("", "123")).toThrow("Username và password không được để trống");
});

test("Mật khẩu rỗng", () => {
    expect(() => login("admin", "")).toThrow("Username và password không được để trống");
});

test("Mật khẩu chứa ký tự đặc biệt", () => {
    expect(() => login("admin", "12@3")).toThrow("Mật khẩu chứa ký tự đặc biệt");
});

test("Tài khoản bị khóa", () => {
    expect(() => login("locked", "123")).toThrow("Tài khoản đã bị khóa");
});

test("Username sai", () => {
    expect(() => login("user", "123")).toThrow("Sai username hoặc password");
});

test("Cả username và mật khẩu đều rỗng", () => {
    expect(() => login("", "")).toThrow("Username và password không được để trống");
});
