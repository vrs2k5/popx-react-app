import { useLocation } from "react-router-dom";
import "./AccountSettings.css";

function AccountSettings() {
  const location = useLocation();
  const name = location.state?.name || "Marry Doe";
  const email = location.state?.email || "Marry@Gmail.Com";

  return (
    <div className="account-screen">
      <div className="account-header">
        <h1 className="account-title">Account Settings</h1>
      </div>

      <div className="account-card">
        <div className="profile-row">
          <div className="avatar-wrap">
            <img
              className="avatar"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=MarryDoe&backgroundColor=ffd5dc"
              alt={name}
            />
            <span className="avatar-edit-badge" aria-label="Edit photo">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 9a3 3 0 100 6 3 3 0 000-6z"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <path
                  d="M3 16.5V19a2 2 0 002 2h2.5L18.5 10A2.121 2.121 0 1015.5 7L4.5 18H3v-1.5z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="profile-info">
            <p className="profile-name">{name}</p>
            <p className="profile-email">{email}</p>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default AccountSettings;
