import "./bootstrap";
import { createInertiaApp, Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

const baseStyle = {
  fontFamily: "Arial, sans-serif",
  margin: 0,
  background: "#f4f4f5",
  color: "#18181b",
  minHeight: "100vh",
};

const containerStyle = {
  maxWidth: 1024,
  margin: "0 auto",
  padding: 24,
};

const cardStyle = {
  background: "#fff",
  border: "1px solid #e4e4e7",
  borderRadius: 12,
  padding: 20,
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid #d4d4d8",
  borderRadius: 8,
  padding: 10,
  marginTop: 6,
};

const btnStyle = {
  display: "inline-block",
  textDecoration: "none",
  border: "1px solid #d4d4d8",
  background: "#fff",
  color: "#18181b",
  borderRadius: 8,
  padding: "8px 12px",
  cursor: "pointer",
};

const primaryBtnStyle = {
  ...btnStyle,
  background: "#18181b",
  borderColor: "#18181b",
  color: "#fff",
};

function Layout({ children }) {
  return (
    <div style={baseStyle}>
      <div style={containerStyle}>{children}</div>
    </div>
  );
}

function AdminNav() {
  return (
    <div style={{ ...cardStyle, marginBottom: 16, display: "flex", justifyContent: "space-between", gap: 10 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Link href="/admin/dashboard" style={btnStyle}>Dashboard</Link>
        <Link href="/admin/users" style={btnStyle}>Users</Link>
        <Link href="/admin/logs" style={btnStyle}>Logs</Link>
        <Link href="/admin/settings" style={btnStyle}>Settings</Link>
      </div>
      <button
        type="button"
        style={btnStyle}
        onClick={() => router.post("/logout")}
      >
        Logout
      </button>
    </div>
  );
}

function Home() {
  const page = usePage();
  const user = page.props.auth?.user;
  return (
    <Layout>
      <div style={cardStyle}>
        <h1>PHP Inertia React Demo</h1>
        <p style={{ color: "#52525b" }}>Login, register and admin pages are ready.</p>
        <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
          {user ? (
            <>
              <Link href="/admin/dashboard" style={primaryBtnStyle}>Go to Admin</Link>
              <button type="button" style={btnStyle} onClick={() => router.post("/logout")}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" style={primaryBtnStyle}>Login</Link>
              <Link href="/register" style={btnStyle}>Register</Link>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

function Login() {
  const page = usePage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = page.props.errors?.email;

  return (
    <Layout>
      <div style={{ ...cardStyle, maxWidth: 520, margin: "24px auto" }}>
        <h1>Login</h1>
        <p style={{ color: "#52525b" }}>Use test accounts for quick login.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.post("/login", { email, password });
          }}
        >
          <label style={{ display: "block", marginTop: 12, fontSize: 14 }}>
            <span>Email</span>
            <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label style={{ display: "block", marginTop: 12, fontSize: 14 }}>
            <span>Password</span>
            <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          {error ? <p style={{ color: "#b91c1c", fontSize: 13, marginTop: 8 }}>{error}</p> : null}
          <button style={{ ...primaryBtnStyle, marginTop: 14 }} type="submit">Login</button>
        </form>

        <div style={{ marginTop: 16, background: "#fafafa", border: "1px solid #e4e4e7", borderRadius: 8, padding: 10 }}>
          <strong>Test accounts</strong>
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            <button type="button" style={btnStyle} onClick={() => { setEmail("admin@example.com"); setPassword("Admin123456"); }}>Fill Admin</button>
            <button type="button" style={btnStyle} onClick={() => { setEmail("user@example.com"); setPassword("User123456"); }}>Fill User</button>
          </div>
          <p style={{ color: "#52525b", margin: "6px 0 0" }}>admin@example.com / Admin123456</p>
          <p style={{ color: "#52525b", margin: "4px 0 0" }}>user@example.com / User123456</p>
        </div>

        <p style={{ color: "#52525b", marginTop: 14 }}>No account? <Link href="/register">Register</Link></p>
      </div>
    </Layout>
  );
}

function Register() {
  const page = usePage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const firstError = Object.values(page.props.errors ?? {})[0];

  return (
    <Layout>
      <div style={{ ...cardStyle, maxWidth: 520, margin: "24px auto" }}>
        <h1>Register</h1>
        <p style={{ color: "#52525b" }}>Create an account and access admin pages.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.post("/register", {
              name,
              email,
              password,
              password_confirmation: passwordConfirmation,
            });
          }}
        >
          <label style={{ display: "block", marginTop: 12, fontSize: 14 }}>
            <span>Name</span>
            <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label style={{ display: "block", marginTop: 12, fontSize: 14 }}>
            <span>Email</span>
            <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label style={{ display: "block", marginTop: 12, fontSize: 14 }}>
            <span>Password</span>
            <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <label style={{ display: "block", marginTop: 12, fontSize: 14 }}>
            <span>Confirm password</span>
            <input style={inputStyle} type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
          </label>
          {firstError ? <p style={{ color: "#b91c1c", fontSize: 13, marginTop: 8 }}>{firstError}</p> : null}
          <button style={{ ...primaryBtnStyle, marginTop: 14 }} type="submit">Register</button>
        </form>
        <p style={{ color: "#52525b", marginTop: 14 }}>Have an account? <Link href="/login">Login</Link></p>
      </div>
    </Layout>
  );
}

function Dashboard({ activeUsers, adminUsers, todayRegistrations }) {
  return (
    <Layout>
      <AdminNav />
      <div style={cardStyle}>
        <h1>Dashboard</h1>
        <p style={{ color: "#52525b" }}>Admin overview metrics.</p>
        <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <div style={{ ...cardStyle, flex: 1, minWidth: 180 }}>
            <div style={{ color: "#52525b" }}>Active users</div>
            <div style={{ fontSize: 24, fontWeight: 600 }}>{activeUsers}</div>
          </div>
          <div style={{ ...cardStyle, flex: 1, minWidth: 180 }}>
            <div style={{ color: "#52525b" }}>Admin users</div>
            <div style={{ fontSize: 24, fontWeight: 600 }}>{adminUsers}</div>
          </div>
          <div style={{ ...cardStyle, flex: 1, minWidth: 180 }}>
            <div style={{ color: "#52525b" }}>Today's registrations</div>
            <div style={{ fontSize: 24, fontWeight: 600 }}>{todayRegistrations}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Users({ users }) {
  return (
    <Layout>
      <AdminNav />
      <div style={cardStyle}>
        <h1>Users</h1>
        <p style={{ color: "#52525b" }}>Registered users from database.</p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 10 }}>Name</th>
              <th style={{ textAlign: "left", padding: 10 }}>Email</th>
              <th style={{ textAlign: "left", padding: 10 }}>Role</th>
              <th style={{ textAlign: "left", padding: 10 }}>Created</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: 10, borderTop: "1px solid #e4e4e7" }}>{user.name}</td>
                <td style={{ padding: 10, borderTop: "1px solid #e4e4e7" }}>{user.email}</td>
                <td style={{ padding: 10, borderTop: "1px solid #e4e4e7" }}>{user.role}</td>
                <td style={{ padding: 10, borderTop: "1px solid #e4e4e7" }}>{new Date(user.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

function Logs({ logs }) {
  return (
    <Layout>
      <AdminNav />
      <div style={cardStyle}>
        <h1>Audit Logs</h1>
        <p style={{ color: "#52525b" }}>Simple mock logs for management UI.</p>
        <div style={{ marginTop: 10 }}>
          {logs.map((log) => (
            <div key={`${log.event}-${log.time}`} style={{ ...cardStyle, marginBottom: 8 }}>
              <div><strong>{log.event}</strong></div>
              <div style={{ color: "#52525b" }}>{log.actor} at {log.time}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function Settings() {
  return (
    <Layout>
      <AdminNav />
      <div style={{ ...cardStyle, maxWidth: 640 }}>
        <h1>Settings</h1>
        <p style={{ color: "#52525b" }}>Placeholder settings form.</p>
        <label style={{ display: "block", marginTop: 12, fontSize: 14 }}>
          <span>App name</span>
          <input style={inputStyle} defaultValue="PHP Inertia React Demo" />
        </label>
        <label style={{ display: "block", marginTop: 12, fontSize: 14 }}>
          <span>Default model</span>
          <input style={inputStyle} defaultValue="gpt-4.1-mini" />
        </label>
        <button style={{ ...primaryBtnStyle, marginTop: 14 }} type="button">Save</button>
      </div>
    </Layout>
  );
}

const pageMap = {
  Home,
  "Auth/Login": Login,
  "Auth/Register": Register,
  "Admin/Dashboard": Dashboard,
  "Admin/Users": Users,
  "Admin/Logs": Logs,
  "Admin/Settings": Settings,
};

createInertiaApp({
  resolve: (name) => {
    const component = pageMap[name];
    if (!component) {
      throw new Error(`Unknown Inertia page: ${name}`);
    }
    return component;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
