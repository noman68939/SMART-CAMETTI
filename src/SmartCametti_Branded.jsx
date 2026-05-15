import { useState, useEffect, useRef, createContext, useContext } from "react";

/* ─── Google Font Import ─────────────────────────────────────────────────── */
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Poppins:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --primary: #6C2BD9;
      --primary-dark: #5521B5;
      --primary-light: #EDE9FE;
      --gray-50: #F9FAFB;
      --gray-100: #F3F4F6;
      --gray-800: #1F2937;
      --white: #FFFFFF;
    }
    body { font-family: 'Poppins', sans-serif; background: var(--gray-50); color: var(--gray-800); }
    button { cursor: pointer; border: none; background: none; transition: 0.2s; }
  `}</style>
);

/* ─── Language Context ───────────────────────────────────────────────────── */
const LangContext = createContext();
const useLang = () => useContext(LangContext);

const T = {
  en: {
    tagline: "Pakistan's #1 Digital Committee Platform",
    heroSubtitle: "Smart. Secure. Simple.",
    switch: "اردو میں دیکھیں"
  },
  ur: {
    tagline: "پاکستان کا نمبر 1 ڈیجیٹل کمیٹی پلیٹ فارم",
    heroSubtitle: "سمارٹ۔ محفوظ۔ آسان۔",
    switch: "English"
  }
};

/* ─── Main App Component ─────────────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState("en");
  const t = (key) => T[lang][key];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <FontStyle />
      <div style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "20px",
        textAlign: "center"
      }}>
        {/* Language Switcher */}
        <button 
          onClick={() => setLang(lang === "en" ? "ur" : "en")}
          style={{ 
            padding: "10px 20px", 
            background: "#6C2BD9", 
            color: "white", 
            borderRadius: "30px",
            fontWeight: "600",
            marginBottom: "30px",
            fontFamily: lang === 'ur' ? 'Poppins' : 'Noto Nastaliq Urdu'
          }}
        >
          {t("switch")}
        </button>

        {/* Hero Section */}
        <h1 style={{ 
          fontSize: "clamp(28px, 5vw, 48px)", 
          fontWeight: "900", 
          color: "#111827",
          fontFamily: lang === 'ur' ? 'Noto Nastaliq Urdu' : 'Poppins',
          lineHeight: lang === 'ur' ? "2" : "1.2",
          marginBottom: "20px"
        }}>
          {t("tagline")}
        </h1>
        
        <p style={{ 
          fontSize: "clamp(16px, 3vw, 22px)", 
          color: "#6B7280",
          fontFamily: lang === 'ur' ? 'Noto Nastaliq Urdu' : 'Poppins'
        }}>
          {t("heroSubtitle")}
        </p>

        {/* Status Badge */}
        <div style={{
          marginTop: "40px",
          padding: "10px 20px",
          background: "#ECFDF5",
          color: "#065F46",
          borderRadius: "10px",
          fontWeight: "700",
          fontSize: "14px",
          border: "1px solid #10B981"
        }}>
          ● All Systems Operational
        </div>
      </div>
    </LangContext.Provider>
  );
}
