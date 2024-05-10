import { Navbar } from './components/Navbar.tsx';

function App() {
  return (
    <>
      <h1> Hello</h1>
      <div className="App">
        <Navbar
          logoSrc="https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-dark.png"
          logoAlt="Tamal Sen"
          navItems={[
            { link: '/#hero-section', label: '// home' },
            { link: '/#expertise', label: '// expertise' },
            { link: '/#work', label: '// work' },
            { link: '/#experience', label: '// experience' },
            { link: '/#contact', label: '// contact' },
          ]}
        />
        <h1> Hello</h1>
        {/* rest of your app goes here */}
      </div>
    </>
  );
}

export default App;
