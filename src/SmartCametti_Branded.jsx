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
      --primary-mid: #8B5CF6;
      --accent: #F59E0B;
      --accent-light: #FEF3C7;
      --success: #10B981;
      --success-light: #ECFDF5;
      --danger: #EF4444;
      --danger-light: #FEF2F2;
      --gray-50: #F9FAFB;
      --gray-100: #F3F4F6;
      --gray-200: #E5E7EB;
      --gray-300: #D1D5DB;
      --gray-400: #9CA3AF;
      --gray-500: #6B7280;
      --gray-600: #4B5563;
      --gray-700: #374151;
      --gray-800: #1F2937;
      --gray-900: #111827;
      --white: #FFFFFF;
      --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
      --shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
      --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
      --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
      --radius: 12px;
      --radius-lg: 16px;
      --radius-xl: 20px;
    }
    body { font-family: 'Poppins', sans-serif; background: var(--gray-50); color: var(--gray-800); }
    * { transition: color 0.15s, background-color 0.15s, border-color 0.15s, opacity 0.15s, transform 0.15s; }
    input, button, select, textarea { font-family: inherit; }
    input:focus, textarea:focus { outline: none; }
    button { cursor: pointer; border: none; background: none; }
    a { text-decoration: none; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--gray-100); }
    ::-webkit-scrollbar-thumb { background: var(--gray-300); border-radius: 3px; }
    
    @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .fade-in { animation: fadeIn 0.4s ease forwards; }
    .slide-up { animation: slideUp 0.5s ease forwards; }
  `}</style>
);

/* ─── Language Context ───────────────────────────────────────────────────── */
const LangContext = createContext();
const useLang = () => useContext(LangContext);

const T = {
  en: {
    home:"Home", login:"Sign In", register:"Sign Up", dashboard:"Dashboard",
    tagline:"Pakistan Ka #1 Digital Committee Platform",
    heroSubtitle:"Smart. Secure. Simple.",
    heroDesc:"Apni committee digitally manage karein — secure payments aur real-time tracking ke saath.",
    switch: "اردو میں دیکھیں"
  },
  ur: {
    home:"ہوم", login:"سائن ان", register:"سائن اپ", dashboard:"ڈیش بورڈ",
    tagline:"پاکستان کا نمبر 1 ڈیجیٹل کمیٹی پلیٹ فارم",
    heroSubtitle:"سمارٹ۔ محفوظ۔ آسان۔",
    heroDesc:"اپنی کمیٹی کو ڈیجیٹلی مینیج کریں — محفوظ ادائیگی اور ریئل ٹائم ٹریکنگ کے ساتھ۔",
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
            marginBottom: "30px"
          }}
        >
          {t("switch")}
        </button>

        {/* Hero Section */}
        <h1 style={{ 
          fontSize: "clamp(28px, 5vw, 48px)", 
          fontWeight: "900", 
          color: "#111827",
          lineHeight: "1.2",
          marginBottom: "20px"
        }}>
          {t("tagline")}
        </h1>
        
        <p style={{ 
          fontSize: "clamp(16px, 3vw, 22px)", 
          color: "#6B7280"
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
