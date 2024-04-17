import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "@/styles/styles.css";

export const metadata = {
  title: "Share Prompt",
  description: "Discover & share gpt or other prompts",
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
