export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="layout-container">
    {/* <Header /> */}
    <main className="layout-content">{children}</main>
    {/* <Footer /> */}
  </div>
);