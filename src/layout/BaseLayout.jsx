import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./BaseLayout.module.css";

const BaseLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Navbar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
