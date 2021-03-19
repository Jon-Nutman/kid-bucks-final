import React from "react";

export default function handleLogout() {
  logout().then(() => {
    history.push("/login");
  });
  return (
    <Link className={styles.navLink} onClick={handleLogout}>
      Logout
    </Link>
  );
}
