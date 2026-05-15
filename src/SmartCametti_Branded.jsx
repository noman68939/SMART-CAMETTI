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
    
    /* Animations */
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
    home:"Home", about:"About", contact:"Contact",
    login:"Sign In", register:"Sign Up", logout:"Logout",
    dashboard:"Dashboard", explore:"Explore", create:"Create", wallet:"Wallet", admin:"Admin",
    profile:"Profile", notifications:"Notifications",
    tagline:"Pakistan Ka #1 Digital Committee Platform",
    heroSubtitle:"Smart. Secure. Simple.",
    heroDesc:"Apni committee digitally manage karein — secure payments, real-time tracking aur live member interaction ke saath.",
    startCommittee:"Start a Committee", exploreCommittees:"Explore Committees",
    freeReg:"Free Registration", bankSecurity:"Bank-Grade Security", realtime:"Real-time Updates",
    activeUsers:"Active Users", committeesCreated:"Committees", paymentsProcessed:"Payments", totalSaved:"Total Saved",
    whyTitle:"Why Smart Cametti?", whySubtitle:"Features designed for Pakistan",
    howTitle:"How It Works",
    step1Title:"Create Account", step1Desc:"Free registration with phone number",
    step2Title:"Join Committee", step2Desc:"Start new or join existing committee",
    step3Title:"Pay Installment", step3Desc:"Pay via JazzCash, Easypaisa or bank",
    step4Title:"Receive Amount", step4Desc:"Get full amount on your turn",
    testiTitle:"Trusted by Thousands",
    faqTitle:"Frequently Asked Questions",
    ctaTitle:"Start Your Committee Today",
    ctaDesc:"50,000+ Pakistanis are managing their committees on Smart Cametti",
    freeAccount:"Create Free Account",
    platform:"Platform", support:"Support", legal:"Legal",
    footerLinks1:["Dashboard","Create Committee","Explore","Wallet"],
    footerLinks2:["FAQ","Contact Us","Help Center","Security"],
    footerLinks3:["Privacy Policy","Terms & Conditions","Cookie Policy","About Us"],
    footerCopy:"© 2025 Smart Cametti. All rights reserved. Made with ❤️ in Pakistan",
    loginTitle:"Welcome Back", registerTitle:"Create Account",
    loginSubtitle:"Sign in to your Smart Cametti account", registerSubtitle:"Join Pakistan's trusted committee platform",
    fullName:"Full Name", phoneNumber:"Phone Number", password:"Password",
    forgotPass:"Forgot password?",
    loginBtn:"Sign In", sendOtp:"Send OTP",
    or:"or", googleLogin:"Continue with Google",
    noAccount:"Don't have an account? ", haveAccount:"Already have an account? ",
    registerLink:"Sign Up", loginLink:"Sign In",
    otpTitle:"Verify OTP", otpDesc:"6-digit code sent to",
    verifyBtn:"Verify & Continue", resendOtp:"Resend OTP",
    waiting:"Please wait...", verifying:"Verifying...",
    greeting:"Welcome back,",
    walletBalance:"Total Wallet Balance", activeCommittees:"active committees",
    walletBtn:"Wallet", sendBtn:"Send", receiveBtn:"Receive",
    quickActions:"Quick Actions",
    myCommittees:"My Committees", seeAll:"View all",
    recentActivity:"Recent Activity",
    exploreTitle:"Explore Committees", exploreSubtitle:"Join public committees or create a new one",
    searchPlaceholder:"Search committees...",
    createBtn:"+ Create", all:"All", open:"Open", private:"Private",
    monthly:"Monthly", members:"Members", totalPool:"Total Pool",
    details:"Details", joinBtn:"Join Now",
    createTitle:"Create New Committee", stepOf:"Step", of:"of",
    basicDetails:"Basic Details", committeeName:"Committee Name *",
    committeeNamePlaceholder:"e.g. Family Gold Committee",
    monthlyAmount:"Monthly Amount (Rs) *", membersCount:"Number of Members *",
    totalPoolCalc:"Total Pool:", totalPoolDesc:"Total committee amount",
    settingsTitle:"Settings", committeeType:"Committee Type",
    public:"Public", publicDesc:"Anyone can join",
    privateTitle:"Private", privateDesc:"Join by invite only",
    startDate:"Start Date", turnSystem:"Turn Draw System",
    autoDraw:"Auto Draw", manual:"Manual",
    rulesTitle:"Rules & Invitation", rulesLabel:"Committee Rules (Optional)",
    rulesPlaceholder:"Write committee rules here...",
    inviteTitle:"Share Invite Link",
    copy:"Copy", whatsapp:"WhatsApp", shareQr:"Share QR",
    back:"Back", next:"Next Step", createCommittee:"Create Committee",
    created:"Committee Created!", createdDesc:"Redirecting to dashboard...",
    backBtn:"Back",
    myTurn:"My Turn", overview:"Overview", membersTab:"Members",
    paymentsTab:"Payments", chatTab:"Chat", adminTab:"Admin",
    turnProgress:"Turn Progress", currentTurn:"Current Turn:", totalMonths:"Total:", months:"months",
    completed:"Completed", myTurnLabel:"My Turn", upcoming:"Upcoming",
    nextDueDate:"Next Due Date", due:"due",
    payNow:"Pay Now", paid:"Paid",
    committeeAdmin:"Committee Admin", adminDesc:"has full authority over all decisions",
    transferAdminBtn:"Transfer Admin Rights",
    removeMemberTitle:"Remove Member?", removeMemberDesc:"will be removed from this committee.",
    cancel:"Cancel", remove:"Remove",
    transferAdminTitle:"Transfer Admin Rights",
    transferAdminDesc:"Choose new admin. You will become a regular member.",
    transfer:"Transfer",
    paymentVerification:"Payment Verification",
    verify:"Verify", reject:"Reject",
    announcement:"Committee Announcement",
    announcementPlaceholder:"Send a message to all members...",
    sendBtn2:"Send Announcement",
    memberManagement:"Member Management",
    dangerZone:"Danger Zone",
    lockCommittee:"Lock Committee (Stop New Joinings)",
    dissolveCommittee:"Dissolve Committee",
    messagePlaceholder:"Type a message...", sendMessage:"Send",
    myWallet:"My Wallet", availableBalance:"Available Balance",
    addMoney:"Add Money", withdraw:"Withdraw", history:"History", transactions:"Transactions",
    notificationsTitle:"Notifications", markAllRead:"Mark all as read",
    myProfile:"My Profile", editProfile:"Edit Profile",
    changePassword:"Change Password", verifyPhone:"Verify Phone",
    notifSettings:"Notification Settings", darkMode:"Dark Mode", language:"Language",
    adminDashboard:"Admin Dashboard", adminSubtitle:"Complete platform overview",
    totalUsers:"Total Users", activeCommitteesLabel:"Active Committees",
    todayRevenue:"Today's Revenue", pendingVerifications:"Pending Verifications",
    dailyRevenue:"Daily Revenue (PKR)", paymentMethods:"Payment Methods",
    recentUsers:"Recent Users", searchDots:"Search...",
    userCol:"User", phoneCol:"Phone", committeesCol:"Committees",
    statusCol:"Status", actionsCol:"Actions",
    viewBtn:"View", suspendBtn:"Suspend",
    userDashboard:"User Dashboard", allOperational:"All Systems Operational",
    act1:"Kamran Ali paid installment", act2:"New member joined Office Circle",
    act3:"Your turn #3 is next month", act4:"Payment verified by admin", act5:"Zara uploaded payment proof",
    notif1Title:"Payment Due Tomorrow", notif1Body:"Office Savings Circle - Rs 5,000 due May 25",
    notif2Title:"Turn Confirmed!", notif2Body:"Your turn #3 in Office Circle is confirmed",
    notif3Title:"New Member Joined", notif3Body:"Ali Hassan joined Family Gold Committee",
    notif4Title:"Payment Received", notif4Body:"Rs 10,000 credited to your wallet",
    active:"Active", pending:"Pending", suspended:"Suspended",
    online:"online", offline:"offline", turnLabel:"Turn",
  },
  ur: {
    home:"ہوم", about:"تعارف", contact:"رابطہ",
    login:"سائن ان", register:"سائن اپ", logout:"لاگ آؤٹ",
    dashboard:"ڈیش بورڈ", explore:"دیکھیں", create:"بنائیں", wallet:"والیٹ", admin:"ایڈمن",
    profile:"پروفائل", notifications:"اطلاعات",
    tagline:"پاکستان کا نمبر 1 ڈیجیٹل کمیٹی پلیٹ فارم",
    heroSubtitle:"سمارٹ۔ محفوظ۔ آسان۔",
    heroDesc:"اپنی کمیٹی کو ڈیجیٹلی مینیج کریں — محفوظ ادائیگی، ریئل ٹائم ٹریکنگ اور لائیو ممبر تعامل کے ساتھ۔",
    startCommittee:"کمیٹی شروع کریں", exploreCommittees:"کمیٹیاں دیکھیں",
    freeReg:"مفت رجسٹریشن", bankSecurity:"بینک سیکیورٹی", realtime:"ریئل ٹائم اپڈیٹ",
    activeUsers:"فعال صارفین", committeesCreated:"کمیٹیاں", paymentsProcessed:"ادائیگیاں", totalSaved:"کل بچت",
    whyTitle:"سمارٹ کمیٹی کیوں؟", whySubtitle:"پاکستان کے لیے بنائی گئی خصوصیات",
    howTitle:"یہ کیسے کام کرتا ہے؟",
    step1Title:"اکاؤنٹ بنائیں", step1Desc:"فون نمبر سے مفت رجسٹریشن",
    step2Title:"کمیٹی جوائن کریں", step2Desc:"نئی کمیٹی شروع کریں یا موجودہ میں شامل ہوں",
    step3Title:"قسط جمع کریں", step3Desc:"جاز کیش، ایزی پیسہ یا بینک سے ادائیگی",
    step4Title:"رقم وصول کریں", step4Desc:"اپنی باری پر پوری کمیٹی رقم پائیں",
    testiTitle:"ہزاروں کا اعتماد",
    faqTitle:"اکثر پوچھے جانے والے سوالات",
    ctaTitle:"آج اپنی کمیٹی شروع کریں",
    ctaDesc:"50,000+ پاکستانی Smart Cametti پر اپنی کمیٹیاں مینیج کر رہے ہیں",
    freeAccount:"مفت اکاؤنٹ بنائیں",
    platform:"پلیٹ فارم", support:"سپورٹ", legal:"قانونی",
    footerLinks1:["ڈیش بورڈ","کمیٹی بنائیں","دیکھیں","والیٹ"],
    footerLinks2:["FAQ","ہم سے رابطہ","ہیلپ سینٹر","سیکیورٹی"],
    footerLinks3:["رازداری کی پالیسی","شرائط و ضوابط","کوکی پالیسی","ہمارے بارے میں"],
    footerCopy:"© 2025 Smart Cametti. تمام حقوق محفوظ۔ ❤️ پاکستان میں بنایا گیا",
    loginTitle:"خوش آمدید", registerTitle:"اکاؤنٹ بنائیں",
    loginSubtitle:"اپنے Smart Cametti اکاؤنٹ میں سائن ان کریں", registerSubtitle:"پاکستان کے قابل اعتماد کمیٹی پلیٹ فارم میں شامل ہوں",
    fullName:"پورا نام", phoneNumber:"فون نمبر", password:"پاس ورڈ",
    forgotPass:"پاس ورڈ بھول گئے؟",
    loginBtn:"سائن ان", sendOtp:"OTP بھیجیں",
    or:"یا", googleLogin:"گوگل سے جاری رکھیں",
    noAccount:"اکاؤنٹ نہیں؟ ", haveAccount:"پہلے سے اکاؤنٹ ہے؟ ",
    registerLink:"سائن اپ", loginLink:"سائن ان",
    otpTitle:"OTP تصدیق", otpDesc:"6 ہندسہ کوڈ بھیجا گیا",
    verifyBtn:"تصدیق کریں", resendOtp:"OTP دوبارہ بھیجیں",
    waiting:"انتظار کریں...", verifying:"تصدیق ہو رہی ہے...",
    greeting:"خوش آمدید،",
    walletBalance:"کل والیٹ بیلنس", activeCommittees:"فعال کمیٹیاں",
    walletBtn:"والیٹ", sendBtn:"بھیجیں", receiveBtn:"وصول",
    quickActions:"فوری اعمال",
    myCommittees:"میری کمیٹیاں", seeAll:"سب دیکھیں",
    recentActivity:"حالیہ سرگرمی",
    exploreTitle:"کمیٹیاں دیکھیں", exploreSubtitle:"عوامی کمیٹیاں جوائن کریں یا نئی بنائیں",
    searchPlaceholder:"کمیٹیاں تلاش کریں...",
    createBtn:"+ بنائیں", all:"سب", open:"کھلی", private:"نجی",
    monthly:"ماہانہ", members:"ممبران", totalPool:"کل پول",
    details:"تفصیل", joinBtn:"ابھی جوائن کریں",
    createTitle:"نئی کمیٹی بنائیں", stepOf:"مرحلہ", of:"کا",
    basicDetails:"بنیادی تفصیلات", committeeName:"کمیٹی کا نام *",
    committeeNamePlaceholder:"مثال: فیملی گولڈ کمیٹی",
    monthlyAmount:"ماہانہ رقم (Rs) *", membersCount:"ممبران کی تعداد *",
    totalPoolCalc:"کل پول:", totalPoolDesc:"کمیٹی کی کل رقم",
    settingsTitle:"ترتیبات", committeeType:"کمیٹی کی قسم",
    public:"عوامی", publicDesc:"کوئی بھی جوائن کر سکتا ہے",
    privateTitle:"نجی", privateDesc:"صرف دعوت سے",
    startDate:"شروع کی تاریخ", turnSystem:"باری کا نظام",
    autoDraw:"خودکار قرعہ اندازی", manual:"دستی",
    rulesTitle:"قوانین اور دعوت", rulesLabel:"کمیٹی کے قوانین (اختیاری)",
    rulesPlaceholder:"یہاں کمیٹی کے قوانین لکھیں...",
    inviteTitle:"دعوتی لنک شیئر کریں",
    copy:"کاپی", whatsapp:"واٹس ایپ", shareQr:"QR شیئر",
    back:"واپس", next:"اگلا مرحلہ", createCommittee:"کمیٹی بنائیں",
    created:"کمیٹی بن گئی!", createdDesc:"ڈیش بورڈ پر جا رہے ہیں...",
    backBtn:"واپس",
    myTurn:"میری باری", overview:"جائزہ", membersTab:"ممبران",
    paymentsTab:"ادائیگیاں", chatTab:"چیٹ", adminTab:"ایڈمن",
    turnProgress:"باری کی پیشرفت", currentTurn:"موجودہ باری:", totalMonths:"کل:", months:"مہینے",
    completed:"مکمل", myTurnLabel:"میری باری", upcoming:"آنے والی",
    nextDueDate:"اگلی واجب الادا تاریخ", due:"واجب الادا",
    payNow:"ابھی ادا کریں", paid:"ادا کر دیا",
    committeeAdmin:"کمیٹی ایڈمن", adminDesc:"تمام فیصلوں پر مکمل اختیار رکھتا ہے",
    transferAdminBtn:"ایڈمن حقوق منتقل کریں",
    removeMemberTitle:"ممبر ہٹائیں؟", removeMemberDesc:"کو اس کمیٹی سے ہٹا دیا جائے گا۔",
    cancel:"منسوخ", remove:"ہٹائیں",
    transferAdminTitle:"ایڈمن حقوق منتقل کریں",
    transferAdminDesc:"نیا ایڈمن چنیں۔ آپ عام ممبر بن جائیں گے۔",
    transfer:"منتقل کریں",
    paymentVerification:"ادائیگی کی تصدیق",
    verify:"تصدیق کریں", reject:"رد کریں",
    announcement:"کمیٹی اعلان",
    announcementPlaceholder:"تمام ممبران کو پیغام بھیجیں...",
    sendBtn2:"اعلان بھیجیں",
    memberManagement:"ممبران کا انتظام",
    dangerZone:"خطرناک علاقہ",
    lockCommittee:"کمیٹی لاک کریں (نئی شمولیت بند)",
    dissolveCommittee:"کمیٹی ختم کریں",
    messagePlaceholder:"پیغام لکھیں...", sendMessage:"بھیجیں",
    myWallet:"میرا والیٹ", availableBalance:"دستیاب بیلنس",
    addMoney:"پیسے ڈالیں", withdraw:"نکالیں", history:"تاریخ", transactions:"لین دین",
    notificationsTitle:"اطلاعات", markAllRead:"سب پڑھا ہوا نشان لگائیں",
    myProfile:"میرا پروفائل", editProfile:"پروفائل ترمیم",
    changePassword:"پاس ورڈ تبدیل کریں", verifyPhone:"فون تصدیق",
    notifSettings:"اطلاع کی ترتیبات", darkMode:"ڈارک موڈ", language:"زبان",
    adminDashboard:"ایڈمن ڈیش بورڈ", adminSubtitle:"پلیٹ فارم کا مکمل جائزہ",
    totalUsers:"کل صارفین", activeCommitteesLabel:"فعال کمیٹیاں",
    todayRevenue:"آج کی آمدن", pendingVerifications:"زیر التواء تصدیق",
    dailyRevenue:"روزانہ آمدن (PKR)", paymentMethods:"ادائیگی کے طریقے",
    recentUsers:"حالیہ صارفین", searchDots:"تلاش...",
    userCol:"صارف", phoneCol:"فون", committeesCol:"کمیٹیاں",
    statusCol:"حیثیت", actionsCol:"اعمال",
    viewBtn:"دیکھیں", suspendBtn:"معطل کریں",
    userDashboard:"صارف ڈیش بورڈ", allOperational:"تمام سسٹم فعال",
    act1:"کامران علی نے قسط جمع کی", act2:"آفس سرکل میں نیا ممبر شامل ہوا",
    act3:"آپ کی باری #3 اگلے مہینے ہے", act4:"ایڈمن نے ادائیگی تصدیق کی", act5:"زارا نے ادائیگی ثبوت اپلوڈ کیا",
    notif1Title:"کل ادائیگی واجب", notif1Body:"آفس سیونگز سرکل - Rs 5,000 واجب 25 مئی",
    notif2Title:"باری کنفرم!", notif2Body:"آفس سرکل میں آپ کی باری #3 کنفرم ہوئی",
    notif3Title:"نیا ممبر شامل ہوا", notif3Body:"علی حسن فیملی گولڈ کمیٹی میں شامل ہوا",
    notif4Title:"ادائیگی موصول", notif4Body:"Rs 10,000 آپ کے والیٹ میں جمع ہوئے",
    active:"فعال", pending:"زیر التواء", suspended:"معطل",
    online:"آن لائن", offline:"آف لائن", turnLabel:"باری",
  }
};

/* ─── Mock Data ──────────────────────────────────────────────────────────── */
const MOCK_USER = { name:"Ahmed Raza", avatar:"AR", balance:47500, phone:"+92 301 1234567" };
const MOCK_COMMITTEES = [
  { id:1, name:"Family Gold Committee", amount:10000, members:8, maxMembers:12, currentTurn:3, myTurn:7, paid:true, nextDue:"Jun 1", color:"#6C2BD9", emoji:"👨‍👩‍👧‍👦", totalPool:120000, status:"open", type:"public" },
  { id:2, name:"Office Savings Circle", amount:5000, members:10, maxMembers:10, currentTurn:5, myTurn:3, paid:false, nextDue:"May 25", color:"#F59E0B", emoji:"🏢", totalPool:50000, status:"full", type:"private" },
  { id:3, name:"Friends Society Fund", amount:2500, members:6, maxMembers:8, currentTurn:2, myTurn:6, paid:true, nextDue:"Jun 5", color:"#10B981", emoji:"👥", totalPool:20000, status:"open", type:"public" },
];
const FEATURES = [
  { icon:"🔒", title:"Bank-Grade Security", desc:"Your money is protected with 256-bit encryption and 2FA authentication" },
  { icon:"📱", title:"JazzCash & Easypaisa", desc:"Pay installments directly via your preferred mobile wallet" },
  { icon:"⚡", title:"Instant Notifications", desc:"Get real-time alerts for payments, turns, and committee updates" },
  { icon:"📊", title:"Full Transparency", desc:"Track every payment, turn, and transaction with complete audit trail" },
  { icon:"🤝", title:"Dispute Resolution", desc:"Our team resolves payment disputes quickly and fairly" },
  { icon:"🌟", title:"CNIC Verification", desc:"All members are verified — no frauds, only trusted people" },
];
const TESTIMONIALS = [
  { name:"Fatima Malik", city:"Karachi", avatar:"FM", text:"Smart Cametti ne meri family committee ko completely transform kar diya. Ab koi argument nahi hoti!" },
  { name:"Usman Tariq", city:"Lahore", avatar:"UT", text:"Office mein sab log is app se committee manage karte hain. Bohot asan aur transparent hai." },
  { name:"Ayesha Siddiqui", city:"Islamabad", avatar:"AS", text:"Easypaisa se payment karo aur usi waqt confirm ho jata hai. Kamaal ki app hai!" },
];
const FAQS = [
  { q:"Smart Cametti kya hai?", a:"Smart Cametti Pakistan ka #1 digital committee management platform hai jahan aap secure aur transparent tarike se committee manage kar sakte hain." },
  { q:"Kya yeh app safe hai?", a:"Bilkul! Hum bank-grade 256-bit encryption aur CNIC verification use karte hain. Har member verified hota hai." },
  { q:"Payment kaise kari jati hai?", a:"Aap JazzCash, Easypaisa, ya direct bank transfer se payment kar sakte hain. Sab kuch app mein tracked hota hai." },
  { q:"Agar koi payment nahi kare toh?", a:"Hum automatic reminders bhejte hain aur committee admin ko alert karte hain. Admin member ko suspend bhi kar sakta hai." },
  { q:"Registration free hai?", a:"Haan! Registration bilkul free hai. Koi hidden charges nahi hain." },
];
const REGISTERED_USERS = [
  { phone:"+92 301 1234567", gmail:null, name:"Ahmed Raza", password:"demo123" },
];

/* ─── Utilities ──────────────────────────────────────────────────────────── */
const cn = (...c) => c.filter(Boolean).join(" ");
function generateOTP() { return Math.floor(100000 + Math.random() * 900000).toString(); }

/* ─── Design Tokens ──────────────────────────────────────────────────────── */
const S = {
  // Buttons
  btn: {
    primary: { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"12px 24px", background:"linear-gradient(135deg, #6C2BD9, #5521B5)", color:"white", borderRadius:"10px", fontWeight:"600", fontSize:"14px", border:"none", cursor:"pointer", boxShadow:"0 4px 15px rgba(108,43,217,0.3)", letterSpacing:"0.01em" },
    secondary: { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"12px 24px", background:"white", color:"#6C2BD9", borderRadius:"10px", fontWeight:"600", fontSize:"14px", border:"1.5px solid #6C2BD9", cursor:"pointer" },
    outline: { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"10px 20px", background:"transparent", color:"#6B7280", borderRadius:"10px", fontWeight:"500", fontSize:"14px", border:"1.5px solid #E5E7EB", cursor:"pointer" },
    ghost: { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"10px 20px", background:"transparent", color:"#6C2BD9", borderRadius:"10px", fontWeight:"500", fontSize:"14px", border:"none", cursor:"pointer" },
    danger: { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"10px 20px", background:"#EF4444", color:"white", borderRadius:"10px", fontWeight:"600", fontSize:"14px", border:"none", cursor:"pointer" },
    sm: { padding:"8px 16px", fontSize:"13px" },
    lg: { padding:"14px 32px", fontSize:"16px" },
  },
  input: { width:"100%", padding:"12px 16px", background:"white", border:"1.5px solid #E5E7EB", borderRadius:"10px", fontSize:"14px", color:"#1F2937", outline:"none" },
  card: { background:"white", borderRadius:"16px", border:"1px solid #F3F4F6", boxShadow:"0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)" },
  cardHover: { background:"white", borderRadius:"16px", border:"1px solid #F3F4F6", boxShadow:"0 1px 3px rgba(0,0,0,0.06)", cursor:"pointer" },
};

/* ─── UI Components ──────────────────────────────────────────────────────── */
function Button({ children, variant="primary", size, onClick, disabled, className, style={} }) {
  const base = S.btn[variant] || S.btn.primary;
  const sz = size ? S.btn[size] : {};
  return (
    <button onClick={onClick} disabled={disabled} style={{ ...base, ...sz, ...style, opacity: disabled ? 0.6 : 1, cursor: disabled ? "not-allowed" : "pointer" }}>
      {children}
    </button>
  );
}

function Card({ children, hover, className, style={}, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{ ...S.card, ...style, ...(hover && hovered ? { boxShadow:"0 8px 24px rgba(108,43,217,0.1)", borderColor:"#DDD6FE", transform:"translateY(-2px)" } : {}) }}>
      {children}
    </div>
  );
}

function Badge({ children, color="gray" }) {
  const colors = {
    purple: { bg:"#EDE9FE", color:"#5B21B6" },
    green: { bg:"#ECFDF5", color:"#065F46" },
    emerald: { bg:"#ECFDF5", color:"#065F46" },
    amber: { bg:"#FEF3C7", color:"#92400E" },
    red: { bg:"#FEF2F2", color:"#991B1B" },
    blue: { bg:"#EFF6FF", color:"#1E40AF" },
    gray: { bg:"#F3F4F6", color:"#374151" },
  };
  const c = colors[color] || colors.gray;
  return (
    <span style={{ display:"inline-flex", alignItems:"center", padding:"3px 10px", borderRadius:"20px", fontSize:"12px", fontWeight:"600", background:c.bg, color:c.color }}>
      {children}
    </span>
  );
}

function Avatar({ initials, size="md", status }) {
  const sizes = { sm:{ w:32,h:32,fs:12 }, md:{ w:40,h:40,fs:14 }, lg:{ w:52,h:52,fs:18 } };
  const s = sizes[size];
  return (
    <div style={{ position:"relative", display:"inline-block" }}>
      <div style={{ width:s.w, height:s.h, borderRadius:"50%", background:"linear-gradient(135deg, #6C2BD9, #8B5CF6)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:s.fs, fontWeight:"700" }}>
        {initials}
      </div>
      {status && <div style={{ position:"absolute", bottom:0, right:0, width:10, height:10, borderRadius:"50%", background: status==="online"?"#10B981":"#9CA3AF", border:"2px solid white" }} />}
    </div>
  );
}

function ProgressBar({ value, max, color="#6C2BD9" }) {
  const pct = max > 0 ? Math.min(100, (value/max)*100) : 0;
  return (
    <div style={{ width:"100%", height:6, background:"#F3F4F6", borderRadius:6, overflow:"hidden" }}>
      <div style={{ width:`${pct}%`, height:"100%", background:color, borderRadius:6, transition:"width 0.4s ease" }} />
    </div>
  );
}

function AnimatedCounter({ value, suffix="" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0; const end = parseInt(value); const dur = 1500;
    const step = Math.ceil(end / (dur / 16));
    const timer = setInterval(() => { start += step; if (start >= end) { setCount(end); clearInterval(timer); } else setCount(start); }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div style={{ display:"flex", gap:4, background:"#F3F4F6", borderRadius:8, padding:3 }}>
      {["en","ur"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding:"4px 10px", borderRadius:6, fontSize:12, fontWeight:600, background: lang===l?"white":"transparent", color: lang===l?"#6C2BD9":"#6B7280", boxShadow: lang===l?"0 1px 3px rgba(0,0,0,0.1)":undefined }}>
          {l==="en"?"EN":"اردو"}
        </button>
      ))}
    </div>
  );
}

function Divider({ text }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:12, margin:"4px 0" }}>
      <div style={{ flex:1, height:1, background:"#E5E7EB" }} />
      {text && <span style={{ fontSize:13, color:"#9CA3AF", fontWeight:500 }}>{text}</span>}
      <div style={{ flex:1, height:1, background:"#E5E7EB" }} />
    </div>
  );
}

/* ─── Top Announcement Bar ───────────────────────────────────────────────── */
function AnnouncementBar() {
  return (
    <div style={{ background:"linear-gradient(135deg, #6C2BD9, #5521B5)", padding:"8px 16px", textAlign:"center" }}>
      <span style={{ color:"rgba(255,255,255,0.9)", fontSize:12, fontWeight:500 }}>
        🎉 Free registration — No hidden charges! Sign up and get started today.
      </span>
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
function Navbar({ page, setPage, isLoggedIn, navigate, logout }) {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const showNav = isLoggedIn && !["home","login","register"].includes(page);

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:"white", borderBottom:"1px solid #F3F4F6", boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        {/* Logo */}
        <button onClick={() => setPage("home")} style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:"linear-gradient(135deg, #6C2BD9, #8B5CF6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, fontWeight:900, color:"white" }}>SC</div>
          <span style={{ fontWeight:800, fontSize:18, color:"#1F2937" }}>Smart <span style={{ color:"#6C2BD9" }}>Cametti</span></span>
        </button>

        {/* Desktop Nav */}
        <div style={{ display:"flex", alignItems:"center", gap:4, display:window.innerWidth < 768 ? "none" : "flex" }}>
          {showNav ? (
            [{ key:"dashboard",label:t("dashboard")}, {key:"explore",label:t("explore")}, {key:"create",label:t("create")}, {key:"wallet",label:t("wallet")}, {key:"admin",label:t("admin")}].map(item => (
              <button key={item.key} onClick={() => navigate(item.key)}
                style={{ padding:"8px 14px", borderRadius:8, fontSize:13, fontWeight:600, color: page===item.key?"#6C2BD9":"#6B7280", background: page===item.key?"#EDE9FE":"transparent" }}>
                {item.label}
              </button>
            ))
          ) : (
            <>
              <button onClick={() => setPage("home")} style={{ padding:"8px 14px", borderRadius:8, fontSize:13, fontWeight:500, color:"#6B7280" }}>{t("home")}</button>
              <button style={{ padding:"8px 14px", borderRadius:8, fontSize:13, fontWeight:500, color:"#6B7280" }}>{t("about")}</button>
              <button style={{ padding:"8px 14px", borderRadius:8, fontSize:13, fontWeight:500, color:"#6B7280" }}>{t("contact")}</button>
            </>
          )}
        </div>

        {/* Right Actions */}
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <LangSwitcher />
          {showNav ? (
            <>
              <button onClick={() => navigate("notifications")} style={{ position:"relative", width:38, height:38, borderRadius:10, background:"#F9FAFB", border:"1px solid #E5E7EB", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>
                🔔
                <span style={{ position:"absolute", top:-4, right:-4, width:18, height:18, background:"#EF4444", borderRadius:"50%", fontSize:10, fontWeight:700, color:"white", display:"flex", alignItems:"center", justifyContent:"center", border:"2px solid white" }}>2</span>
              </button>
              <div onClick={() => navigate("profile")} style={{ cursor:"pointer" }}>
                <Avatar initials={MOCK_USER.avatar} size="sm" status="online" />
              </div>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => setPage("login")} style={{ padding:"8px 16px", fontSize:13 }}>{t("login")}</Button>
              <Button size="sm" onClick={() => setPage("register")} style={{ padding:"8px 20px", fontSize:13 }}>{t("register")}</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

/* ─── HOME PAGE ──────────────────────────────────────────────────────────── */
function HomePage({ onNavigate }) {
  const { t } = useLang();
  const [testIdx, setTestIdx] = useState(0);
  const [faqOpen, setFaqOpen] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setTestIdx(i => (i + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background:"#FAFAFA" }}>

      {/* HERO */}
      <section style={{ background:"linear-gradient(135deg, #F8F5FF 0%, #EDE9FE 40%, #FAFAFA 100%)", padding:"80px 20px 60px", borderBottom:"1px solid #E5E7EB" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr", gap:40, textAlign:"center" }}>
          {/* Trust Pills */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center" }}>
            {["🔒 Bank-Grade Security","✅ CNIC Verified Members","📱 JazzCash & Easypaisa","⚡ Real-time Tracking"].map((p,i) => (
              <span key={i} style={{ padding:"5px 14px", background:"white", border:"1px solid #DDD6FE", borderRadius:20, fontSize:12, fontWeight:500, color:"#5B21B6" }}>{p}</span>
            ))}
          </div>
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"6px 14px", background:"#EDE9FE", borderRadius:20, fontSize:12, fontWeight:600, color:"#6C2BD9", marginBottom:20 }}>
              🇵🇰 Pakistan Ka #1 Committee Platform
            </div>
            <h1 style={{ fontSize:"clamp(32px, 5vw, 54px)", fontWeight:900, color:"#111827", lineHeight:1.15, marginBottom:16 }}>
              {t("tagline")}
            </h1>
            <p style={{ fontSize:"clamp(15px, 2vw, 18px)", color:"#6B7280", maxWidth:580, margin:"0 auto 32px", lineHeight:1.6 }}>
              {t("heroDesc")}
            </p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <Button onClick={() => onNavigate("register")} style={{ padding:"14px 32px", fontSize:15 }}>
                🚀 {t("startCommittee")}
              </Button>
              <Button variant="secondary" onClick={() => onNavigate("explore")} style={{ padding:"14px 32px", fontSize:15 }}>
                🔍 {t("exploreCommittees")}
              </Button>
            </div>
          </div>
          {/* Stats Strip */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))", gap:16, maxWidth:700, margin:"0 auto", width:"100%" }}>
            {[
              { value:50000, suffix:"+" , labelKey:"activeUsers" },
              { value:12000, suffix:"+", labelKey:"committeesCreated" },
              { value:2500000, suffix:"+", labelKey:"paymentsProcessed" },
              { value:500, suffix:"M+", labelKey:"totalSaved" },
            ].map((s,i) => (
              <div key={i} style={{ background:"white", borderRadius:14, padding:"18px 16px", border:"1px solid #EDE9FE", textAlign:"center" }}>
                <div style={{ fontSize:22, fontWeight:900, color:"#6C2BD9" }}><AnimatedCounter value={s.value} suffix={s.suffix} /></div>
                <div style={{ fontSize:12, color:"#9CA3AF", marginTop:4, fontWeight:500 }}>{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT PARTNERS */}
      <section style={{ padding:"24px 20px", background:"white", borderBottom:"1px solid #F3F4F6" }}>
        <div style={{ maxWidth:900, margin:"0 auto", display:"flex", alignItems:"center", gap:20, flexWrap:"wrap", justifyContent:"center" }}>
          <span style={{ fontSize:12, color:"#9CA3AF", fontWeight:500, textTransform:"uppercase", letterSpacing:"0.05em" }}>Trusted Payment Partners</span>
          {["🔵 JazzCash","🟢 EasyPaisa","🏦 Bank Transfer","📱 1-Link"].map((p,i) => (
            <span key={i} style={{ padding:"6px 16px", border:"1px solid #E5E7EB", borderRadius:8, fontSize:13, fontWeight:600, color:"#374151", background:"#FAFAFA" }}>{p}</span>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding:"60px 20px", background:"#FAFAFA" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ display:"inline-flex", padding:"5px 14px", background:"#EDE9FE", borderRadius:20, fontSize:12, fontWeight:600, color:"#6C2BD9", marginBottom:14 }}>Why Smart Cametti?</div>
            <h2 style={{ fontSize:32, fontWeight:900, color:"#111827", marginBottom:12 }}>{t("whyTitle")}</h2>
            <p style={{ color:"#6B7280", fontSize:15 }}>{t("whySubtitle")}</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:20 }}>
            {FEATURES.map((f,i) => (
              <Card key={i} hover style={{ padding:24 }}>
                <div style={{ width:48, height:48, borderRadius:12, background:"#EDE9FE", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, marginBottom:16 }}>{f.icon}</div>
                <h3 style={{ fontWeight:700, color:"#111827", fontSize:15, marginBottom:8 }}>{f.title}</h3>
                <p style={{ color:"#6B7280", fontSize:13, lineHeight:1.6 }}>{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding:"60px 20px", background:"white", borderTop:"1px solid #F3F4F6" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <h2 style={{ fontSize:32, fontWeight:900, color:"#111827", marginBottom:12 }}>{t("howTitle")}</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:24 }}>
            {[
              { step:"01", icon:"👤", titleKey:"step1Title", descKey:"step1Desc" },
              { step:"02", icon:"🏦", titleKey:"step2Title", descKey:"step2Desc" },
              { step:"03", icon:"💳", titleKey:"step3Title", descKey:"step3Desc" },
              { step:"04", icon:"💰", titleKey:"step4Title", descKey:"step4Desc" },
            ].map((s,i) => (
              <div key={i} style={{ textAlign:"center", position:"relative" }}>
                <div style={{ width:64, height:64, borderRadius:16, background:"#EDE9FE", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, margin:"0 auto 12px" }}>{s.icon}</div>
                <div style={{ fontSize:11, fontWeight:700, color:"#6C2BD9", marginBottom:8, textTransform:"uppercase", letterSpacing:"0.05em" }}>{s.step}</div>
                <h3 style={{ fontWeight:700, color:"#111827", fontSize:14, marginBottom:6 }}>{t(s.titleKey)}</h3>
                <p style={{ color:"#6B7280", fontSize:12, lineHeight:1.6 }}>{t(s.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding:"60px 20px", background:"linear-gradient(135deg, #F8F5FF, #EDE9FE)" }}>
        <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontSize:30, fontWeight:900, color:"#111827", marginBottom:40 }}>{t("testiTitle")}</h2>
          <Card style={{ padding:32 }}>
            <div style={{ fontSize:20, marginBottom:12 }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color:"#374151", fontSize:15, lineHeight:1.7, marginBottom:20, fontStyle:"italic" }}>
              "{TESTIMONIALS[testIdx].text}"
            </p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
              <Avatar initials={TESTIMONIALS[testIdx].avatar} size="md" />
              <div style={{ textAlign:"left" }}>
                <div style={{ fontWeight:700, color:"#111827", fontSize:14 }}>{TESTIMONIALS[testIdx].name}</div>
                <div style={{ color:"#9CA3AF", fontSize:12 }}>{TESTIMONIALS[testIdx].city}</div>
              </div>
            </div>
          </Card>
          <div style={{ display:"flex", justifyContent:"center", gap:6, marginTop:20 }}>
            {TESTIMONIALS.map((_,i) => (
              <button key={i} onClick={() => setTestIdx(i)}
                style={{ width: i===testIdx ? 24 : 8, height:8, borderRadius:4, background: i===testIdx ? "#6C2BD9" : "#DDD6FE", transition:"all 0.3s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:"60px 20px", background:"white" }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <h2 style={{ fontSize:30, fontWeight:900, color:"#111827", textAlign:"center", marginBottom:40 }}>{t("faqTitle")}</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {FAQS.map((f,i) => (
              <div key={i} style={{ border:"1px solid #E5E7EB", borderRadius:12, overflow:"hidden", background: faqOpen===i?"#FAFAFA":"white" }}>
                <button onClick={() => setFaqOpen(faqOpen===i?null:i)}
                  style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", background:"none", textAlign:"left" }}>
                  <span style={{ fontWeight:600, color:"#111827", fontSize:14 }}>{f.q}</span>
                  <span style={{ color:"#6C2BD9", fontSize:18, transform: faqOpen===i?"rotate(45deg)":"none", transition:"transform 0.2s" }}>+</span>
                </button>
                {faqOpen===i && <div style={{ padding:"0 20px 16px", color:"#6B7280", fontSize:13, lineHeight:1.7 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding:"60px 20px", background:"linear-gradient(135deg, #6C2BD9, #5521B5)" }}>
        <div style={{ maxWidth:600, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontSize:30, fontWeight:900, color:"white", marginBottom:12 }}>{t("ctaTitle")}</h2>
          <p style={{ color:"rgba(255,255,255,0.8)", fontSize:15, marginBottom:28 }}>{t("ctaDesc")}</p>
          <button onClick={() => onNavigate("register")}
            style={{ padding:"14px 36px", background:"white", color:"#6C2BD9", borderRadius:10, fontWeight:700, fontSize:15, border:"none", cursor:"pointer", boxShadow:"0 4px 20px rgba(0,0,0,0.2)" }}>
            🚀 {t("freeAccount")}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"#111827", padding:"48px 20px 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:32, marginBottom:40 }}>
            <div>
              <div style={{ fontWeight:800, fontSize:18, color:"white", marginBottom:12 }}>Smart <span style={{ color:"#8B5CF6" }}>Cametti</span></div>
              <p style={{ color:"#9CA3AF", fontSize:13, lineHeight:1.6, marginBottom:16 }}>Pakistan's trusted digital committee management platform.</p>
              <div style={{ display:"flex", gap:10 }}>
                {["📘","📸","🐦","💬"].map((icon,i) => (
                  <span key={i} style={{ width:34, height:34, borderRadius:8, background:"rgba(255,255,255,0.08)", display:"inline-flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>{icon}</span>
                ))}
              </div>
            </div>
            {[
              { titleKey:"platform", linksKey:"footerLinks1" },
              { titleKey:"support", linksKey:"footerLinks2" },
              { titleKey:"legal", linksKey:"footerLinks3" },
            ].map((col,i) => {
              const { t } = useLang();
              return (
                <div key={i}>
                  <div style={{ fontWeight:700, color:"white", fontSize:14, marginBottom:14 }}>{t(col.titleKey)}</div>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>
                    {t(col.linksKey).map((l,j) => (
                      <li key={j}><a style={{ color:"#9CA3AF", fontSize:13, cursor:"pointer" }}>{l}</a></li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
            <span style={{ color:"#6B7280", fontSize:12 }}>{t("footerCopy")}</span>
            <div style={{ display:"flex", gap:8 }}>
              {["🔒 Secured","✅ Verified","🇵🇰 Made in Pakistan"].map((b,i) => (
                <span key={i} style={{ padding:"3px 10px", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, fontSize:11, color:"#9CA3AF" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── AUTH PAGE ──────────────────────────────────────────────────────────── */
function AuthPage({ mode, onNavigate, onLogin }) {
  const { t } = useLang();
  const isLogin = mode === "login";
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [otpInputs, setOtpInputs] = useState(["","","","","",""]);
  const [resendTimer, setResendTimer] = useState(0);
  const [loginMethod, setLoginMethod] = useState("phone");
  const [form, setForm] = useState({ name:"", phone:"", gmail:"", password:"" });
  const otpRefs = useRef([]);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const id = setTimeout(() => setResendTimer(t => t-1), 1000);
    return () => clearTimeout(id);
  }, [resendTimer]);

  const identifier = loginMethod === "gmail" ? form.gmail.trim().toLowerCase() : form.phone.trim();
  const findUser = (id,method) => REGISTERED_USERS.find(u => method==="gmail" ? u.gmail&&u.gmail===id : u.phone===id);

  const handleSendOtp = () => {
    setError("");
    if (!identifier) { setError("Phone number ya Gmail darj karein"); return; }
    if (!isLogin && !form.name.trim()) { setError("Apna pura naam darj karein"); return; }
    if (!isLogin && !form.password) { setError("Password darj karein"); return; }
    if (!isLogin) {
      if (findUser(identifier, loginMethod)) { setError("Yeh account pehle se registered hai. Login karein."); return; }
    } else {
      const user = findUser(identifier, loginMethod);
      if (!user) { setError("Account nahi mila. Pehle register karein."); return; }
      if (user.password !== form.password) { setError("Password galat hai."); return; }
    }
    setLoading(true);
    const otp = generateOTP(); setSentOtp(otp); setOtpInputs(["","","","","",""]);
    setTimeout(() => { setLoading(false); setStep("otp"); setResendTimer(60); console.log(`[Demo OTP] ${otp}`); }, 1200);
  };

  const handleOtpChange = (val,idx) => {
    const digits = val.replace(/\D/g,"").slice(0,1);
    const next = [...otpInputs]; next[idx] = digits; setOtpInputs(next);
    if (digits && idx < 5) otpRefs.current[idx+1]?.focus();
  };
  const handleOtpKeyDown = (e,idx) => { if (e.key==="Backspace"&&!otpInputs[idx]&&idx>0) otpRefs.current[idx-1]?.focus(); };
  const handleVerifyOtp = () => {
    const entered = otpInputs.join("");
    if (entered.length < 6) { setError("6-digit OTP darj karein"); return; }
    if (entered !== sentOtp) { setError("OTP galat hai."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!isLogin) REGISTERED_USERS.push({ phone: loginMethod==="phone"?identifier:null, gmail: loginMethod==="gmail"?identifier:null, name:form.name.trim(), password:form.password });
      onLogin(); onNavigate("dashboard");
    }, 1000);
  };
  const handleResend = () => {
    if (resendTimer > 0) return;
    const otp = generateOTP(); setSentOtp(otp); setOtpInputs(["","","","","",""]); setResendTimer(60); console.log(`[Demo OTP Resent] ${otp}`);
  };

  if (step === "otp") {
    return (
      <div style={{ minHeight:"100vh", background:"#F9FAFB", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
        <div style={{ width:"100%", maxWidth:420 }}>
          <div style={{ textAlign:"center", marginBottom:28 }}>
            <div style={{ width:56, height:56, borderRadius:16, background:"linear-gradient(135deg,#6C2BD9,#8B5CF6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, fontWeight:900, color:"white", margin:"0 auto 12px" }}>SC</div>
            <h2 style={{ fontWeight:800, fontSize:22, color:"#111827" }}>{t("otpTitle")}</h2>
            <p style={{ color:"#6B7280", fontSize:13, marginTop:6 }}>{t("otpDesc")}</p>
            <p style={{ color:"#6C2BD9", fontWeight:600, fontSize:13 }}>{identifier}</p>
          </div>
          <Card style={{ padding:28 }}>
            <div style={{ background:"#FEF3C7", border:"1px solid #FDE68A", borderRadius:10, padding:"10px 16px", marginBottom:20, textAlign:"center" }}>
              <span style={{ fontSize:12, color:"#92400E" }}>🔔 Demo mode — OTP is: <strong style={{ color:"#6C2BD9", fontSize:14 }}>{sentOtp}</strong></span>
            </div>
            <div style={{ display:"flex", gap:8, justifyContent:"center", marginBottom:20 }}>
              {otpInputs.map((val,i) => (
                <input key={i} ref={el => otpRefs.current[i]=el} value={val} maxLength={1} inputMode="numeric"
                  onChange={e => handleOtpChange(e.target.value, i)} onKeyDown={e => handleOtpKeyDown(e, i)}
                  style={{ width:46, height:52, borderRadius:10, border:`2px solid ${val?"#6C2BD9":"#E5E7EB"}`, textAlign:"center", fontSize:20, fontWeight:700, color:"#111827", outline:"none", background:"white" }} />
              ))}
            </div>
            {error && <p style={{ color:"#EF4444", fontSize:13, textAlign:"center", marginBottom:12 }}>⚠️ {error}</p>}
            <Button onClick={handleVerifyOtp} disabled={loading} style={{ width:"100%", justifyContent:"center" }}>
              {loading ? t("verifying") : t("verifyBtn")}
            </Button>
            <div style={{ textAlign:"center", marginTop:16 }}>
              {resendTimer > 0
                ? <p style={{ fontSize:13, color:"#9CA3AF" }}>OTP dobara bhejein: <strong style={{ color:"#6C2BD9" }}>{resendTimer}s</strong></p>
                : <button onClick={handleResend} style={{ fontSize:13, color:"#6C2BD9", fontWeight:600, background:"none", border:"none", cursor:"pointer" }}>{t("resendOtp")}</button>
              }
            </div>
            <button onClick={() => { setStep("form"); setError(""); }} style={{ width:"100%", textAlign:"center", color:"#9CA3AF", fontSize:13, marginTop:12, background:"none", border:"none", cursor:"pointer" }}>← {t("back")}</button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:"#F9FAFB", display:"flex", alignItems:"stretch" }}>
      {/* Left Panel */}
      <div style={{ flex:1, background:"linear-gradient(135deg, #6C2BD9, #5521B5)", padding:40, display:"flex", flexDirection:"column", justifyContent:"center", minWidth:0, display:window.innerWidth < 900 ? "none" : "flex" }}>
        <div style={{ maxWidth:360 }}>
          <div style={{ fontWeight:900, fontSize:28, color:"white", marginBottom:8 }}>Smart Cametti</div>
          <p style={{ color:"rgba(255,255,255,0.7)", fontSize:15, marginBottom:40 }}>Pakistan Ka #1 Digital Committee Platform</p>
          {[
            { icon:"🔒", text:"Bank-grade encryption for your money" },
            { icon:"📱", text:"JazzCash & Easypaisa payments" },
            { icon:"⚡", text:"Real-time notifications & tracking" },
            { icon:"✅", text:"CNIC-verified members only" },
          ].map((item,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
              <div style={{ width:40, height:40, borderRadius:10, background:"rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{item.icon}</div>
              <span style={{ color:"rgba(255,255,255,0.85)", fontSize:14 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Form Panel */}
      <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:32, background:"white" }}>
        <div style={{ width:"100%", maxWidth:400 }}>
          <div style={{ marginBottom:28 }}>
            <h2 style={{ fontWeight:800, fontSize:26, color:"#111827", marginBottom:6 }}>{t(isLogin?"loginTitle":"registerTitle")}</h2>
            <p style={{ color:"#6B7280", fontSize:14 }}>{t(isLogin?"loginSubtitle":"registerSubtitle")}</p>
          </div>

          {/* Login Method Toggle */}
          <div style={{ display:"flex", background:"#F3F4F6", borderRadius:10, padding:3, marginBottom:20 }}>
            {["phone","gmail"].map(m => (
              <button key={m} onClick={() => setLoginMethod(m)}
                style={{ flex:1, padding:"9px 0", borderRadius:8, fontSize:13, fontWeight:600, background: loginMethod===m?"white":"transparent", color: loginMethod===m?"#6C2BD9":"#6B7280", border:"none", cursor:"pointer", boxShadow: loginMethod===m?"0 1px 3px rgba(0,0,0,0.1)":undefined }}>
                {m==="phone" ? "📱 Phone" : "📧 Gmail"}
              </button>
            ))}
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {!isLogin && (
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t("fullName")}</label>
                <input value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Ahmed Raza" style={{ ...S.input, border:`1.5px solid ${form.name?"#6C2BD9":"#E5E7EB"}` }} />
              </div>
            )}
            <div>
              <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>
                {loginMethod==="phone" ? t("phoneNumber") : "Gmail Address"}
              </label>
              {loginMethod === "phone" ? (
                <input value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+92 300 1234567" style={{ ...S.input, border:`1.5px solid ${form.phone?"#6C2BD9":"#E5E7EB"}` }} />
              ) : (
                <input value={form.gmail} onChange={e => setForm({...form,gmail:e.target.value})} placeholder="aapka@gmail.com" type="email" style={{ ...S.input, border:`1.5px solid ${form.gmail?"#6C2BD9":"#E5E7EB"}` }} />
              )}
            </div>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                <label style={{ fontSize:13, fontWeight:600, color:"#374151" }}>{t("password")}</label>
                {isLogin && <span style={{ fontSize:12, color:"#6C2BD9", cursor:"pointer", fontWeight:500 }}>{t("forgotPass")}</span>}
              </div>
              <input type="password" value={form.password} onChange={e => setForm({...form,password:e.target.value})} placeholder="••••••••" style={{ ...S.input, border:`1.5px solid ${form.password?"#6C2BD9":"#E5E7EB"}` }} />
            </div>
          </div>

          {error && <p style={{ color:"#EF4444", fontSize:13, marginTop:10 }}>⚠️ {error}</p>}

          <Button onClick={handleSendOtp} disabled={loading} style={{ width:"100%", justifyContent:"center", marginTop:18, padding:"13px 0" }}>
            {loading ? t("waiting") : isLogin ? t("loginBtn") : t("sendOtp")}
          </Button>

          <Divider text={t("or")} />
          <div style={{ marginTop:4 }}>
            <button onClick={() => { onLogin(); onNavigate("dashboard"); }}
              style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:10, padding:"12px 0", border:"1.5px solid #E5E7EB", borderRadius:10, fontSize:14, fontWeight:600, color:"#374151", background:"white", cursor:"pointer" }}>
              <span style={{ fontSize:18 }}>🔵</span> {t("googleLogin")}
            </button>
          </div>

          {isLogin && (
            <div style={{ marginTop:16, background:"#F0FDF4", border:"1px solid #D1FAE5", borderRadius:10, padding:"10px 14px", fontSize:12, color:"#065F46", textAlign:"center" }}>
              Demo: Phone <strong>+92 301 1234567</strong> · Password <strong>demo123</strong>
            </div>
          )}
          <p style={{ textAlign:"center", color:"#6B7280", fontSize:13, marginTop:20 }}>
            {isLogin ? t("noAccount") : t("haveAccount")}
            <button onClick={() => { onNavigate(isLogin?"register":"login"); setError(""); }} style={{ color:"#6C2BD9", fontWeight:700, background:"none", border:"none", cursor:"pointer", fontSize:13 }}>
              {isLogin ? t("registerLink") : t("loginLink")}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── DASHBOARD ──────────────────────────────────────────────────────────── */
function DashboardPage({ onNavigate }) {
  const { t } = useLang();
  const activities = [
    { id:1, textKey:"act1", time:"2 min ago", emoji:"✅", color:"#ECFDF5" },
    { id:2, textKey:"act2", time:"15 min ago", emoji:"👤", color:"#EFF6FF" },
    { id:3, textKey:"act3", time:"1 hr ago", emoji:"🔔", color:"#EDE9FE" },
    { id:4, textKey:"act4", time:"3 hrs ago", emoji:"🛡️", color:"#F0FDF4" },
    { id:5, textKey:"act5", time:"5 hrs ago", emoji:"📎", color:"#FFF7ED" },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"#F9FAFB", padding:"24px 16px 80px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
          <div>
            <p style={{ color:"#9CA3AF", fontSize:13 }}>{t("greeting")}</p>
            <h1 style={{ fontWeight:800, fontSize:22, color:"#111827" }}>{MOCK_USER.name} 👋</h1>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <button onClick={() => onNavigate("notifications")} style={{ position:"relative", width:40, height:40, borderRadius:10, background:"white", border:"1px solid #E5E7EB", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>
              🔔
              <span style={{ position:"absolute", top:-4, right:-4, width:18, height:18, background:"#EF4444", borderRadius:"50%", fontSize:10, fontWeight:700, color:"white", display:"flex", alignItems:"center", justifyContent:"center", border:"2px solid white" }}>2</span>
            </button>
            <div onClick={() => onNavigate("profile")} style={{ cursor:"pointer" }}>
              <Avatar initials={MOCK_USER.avatar} size="md" status="online" />
            </div>
          </div>
        </div>

        {/* Wallet Card */}
        <div style={{ borderRadius:20, padding:24, marginBottom:20, background:"linear-gradient(135deg, #6C2BD9 0%, #5521B5 60%, #4C1D95 100%)", color:"white", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:-30, right:-30, width:150, height:150, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
          <div style={{ position:"absolute", bottom:-20, right:60, width:100, height:100, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
          <p style={{ color:"rgba(255,255,255,0.7)", fontSize:13, marginBottom:4 }}>{t("walletBalance")}</p>
          <div style={{ fontWeight:900, fontSize:32, marginBottom:4 }}>Rs {MOCK_USER.balance.toLocaleString()}</div>
          <p style={{ color:"rgba(255,255,255,0.6)", fontSize:13, marginBottom:20 }}>3 {t("activeCommittees")}</p>
          <div style={{ display:"flex", gap:10 }}>
            {[{ key:"walletBtn", action:"wallet" }, { key:"sendBtn", action:null }, { key:"receiveBtn", action:null }].map(b => (
              <button key={b.key} onClick={() => b.action && onNavigate(b.action)}
                style={{ flex:1, padding:"10px 0", background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:10, color:"white", fontSize:13, fontWeight:600, cursor:"pointer" }}>
                {t(b.key)}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginBottom:20 }}>
          {[
            { icon:"➕", labelKey:"create", action:"create", color:"#EDE9FE" },
            { icon:"🔍", labelKey:"explore", action:"explore", color:"#ECFDF5" },
            { icon:"💬", label:"Chat", action:"committee-detail", color:"#EFF6FF" },
            { icon:"📊", label:"Analytics", action:"admin", color:"#FFF7ED" },
          ].map((a,i) => (
            <button key={i} onClick={() => onNavigate(a.action)}
              style={{ background:a.color, border:"1px solid rgba(0,0,0,0.06)", borderRadius:14, padding:16, display:"flex", flexDirection:"column", alignItems:"center", gap:6, cursor:"pointer" }}>
              <span style={{ fontSize:22 }}>{a.icon}</span>
              <span style={{ fontSize:11, fontWeight:600, color:"#374151" }}>{a.labelKey ? t(a.labelKey) : a.label}</span>
            </button>
          ))}
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:20 }}>
          {/* My Committees */}
          <div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
              <h2 style={{ fontWeight:700, fontSize:16, color:"#111827" }}>{t("myCommittees")}</h2>
              <button onClick={() => onNavigate("explore")} style={{ fontSize:13, color:"#6C2BD9", fontWeight:600, background:"none", border:"none", cursor:"pointer" }}>{t("seeAll")} →</button>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {MOCK_COMMITTEES.map(c => (
                <Card key={c.id} hover style={{ padding:18, cursor:"pointer" }} onClick={() => onNavigate("committee-detail")}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                      <div style={{ width:46, height:46, borderRadius:12, background:`${c.color}15`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, border:`1px solid ${c.color}30` }}>{c.emoji}</div>
                      <div>
                        <div style={{ fontWeight:700, color:"#111827", fontSize:14 }}>{c.name}</div>
                        <div style={{ color:"#9CA3AF", fontSize:12 }}>Rs {c.amount.toLocaleString()} / month</div>
                      </div>
                    </div>
                    <div style={{ textAlign:"right" }}>
                      <Badge color={c.paid?"emerald":"red"}>{c.paid ? t("paid") : t("pending")}</Badge>
                      <div style={{ color:"#9CA3AF", fontSize:11, marginTop:4 }}>{t("turnLabel")} {c.currentTurn}/{c.members}</div>
                    </div>
                  </div>
                  <ProgressBar value={c.currentTurn} max={c.members} color={c.color} />
                  <div style={{ display:"flex", justifyContent:"space-between", marginTop:8, fontSize:11, color:"#9CA3AF" }}>
                    <span>{t("myTurnLabel")}: #{c.myTurn}</span>
                    <span>Due: {c.nextDue}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 style={{ fontWeight:700, fontSize:16, color:"#111827", marginBottom:12 }}>{t("recentActivity")}</h2>
            <Card>
              {activities.map((a,i) => (
                <div key={a.id} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 18px", borderBottom: i < activities.length-1 ? "1px solid #F3F4F6" : undefined }}>
                  <div style={{ width:38, height:38, borderRadius:10, background:a.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>{a.emoji}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ color:"#374151", fontSize:13, fontWeight:500 }}>{t(a.textKey)}</div>
                    <div style={{ color:"#9CA3AF", fontSize:11, marginTop:2 }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── EXPLORE PAGE ───────────────────────────────────────────────────────── */
function ExplorePage({ onNavigate }) {
  const { t } = useLang();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const allCommittees = [
    ...MOCK_COMMITTEES,
    { id:4, name:"Doctors Society Fund", amount:25000, members:5, maxMembers:10, currentTurn:1, status:"open", type:"public", color:"#8B5CF6", emoji:"🏥", totalPool:250000 },
    { id:5, name:"Teachers Community", amount:8000, members:7, maxMembers:12, currentTurn:3, status:"open", type:"public", color:"#F59E0B", emoji:"📚", totalPool:96000 },
  ];
  const filtered = allCommittees.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter==="all" || (filter==="open" && c.members < c.maxMembers) || (filter==="private" && c.type==="private"))
  );

  return (
    <div style={{ minHeight:"100vh", background:"#F9FAFB", padding:"24px 16px 80px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24 }}>
          <button onClick={() => onNavigate("dashboard")} style={{ width:36, height:36, borderRadius:9, background:"white", border:"1px solid #E5E7EB", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, cursor:"pointer" }}>←</button>
          <div>
            <h1 style={{ fontWeight:800, fontSize:20, color:"#111827" }}>{t("exploreTitle")}</h1>
            <p style={{ color:"#9CA3AF", fontSize:13 }}>{t("exploreSubtitle")}</p>
          </div>
        </div>
        <div style={{ display:"flex", gap:10, marginBottom:14 }}>
          <div style={{ flex:1, position:"relative" }}>
            <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#9CA3AF" }}>🔍</span>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t("searchPlaceholder")}
              style={{ ...S.input, paddingLeft:42 }} />
          </div>
          <Button onClick={() => onNavigate("create")} style={{ whiteSpace:"nowrap" }}>{t("createBtn")}</Button>
        </div>
        <div style={{ display:"flex", gap:8, marginBottom:20 }}>
          {["all","open","private"].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding:"8px 18px", borderRadius:8, fontSize:13, fontWeight:600, background: filter===f?"#6C2BD9":"white", color: filter===f?"white":"#6B7280", border:`1.5px solid ${filter===f?"#6C2BD9":"#E5E7EB"}`, cursor:"pointer" }}>
              {f==="all"?t("all"):f==="open"?t("open"):t("private")}
            </button>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:16 }}>
          {filtered.map(c => (
            <Card key={c.id} hover style={{ padding:20 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div style={{ width:52, height:52, borderRadius:14, background:`${c.color}15`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, border:`1px solid ${c.color}30` }}>{c.emoji}</div>
                <div>
                  <div style={{ fontWeight:700, color:"#111827", fontSize:15 }}>{c.name}</div>
                  <Badge color={c.type==="public"?"blue":"gray"}>{c.type==="public"?t("public"):t("private")}</Badge>
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:14 }}>
                {[
                  { val:`Rs ${(c.amount/1000).toFixed(0)}K`, label:t("monthly"), color:"#6C2BD9" },
                  { val:`${c.members}/${c.maxMembers}`, label:t("members"), color:"#374151" },
                  { val:`Rs ${(c.totalPool/1000).toFixed(0)}K`, label:t("totalPool"), color:"#F59E0B" },
                ].map((s,i) => (
                  <div key={i} style={{ background:"#F9FAFB", borderRadius:10, padding:"10px 8px", textAlign:"center", border:"1px solid #F3F4F6" }}>
                    <div style={{ fontWeight:700, fontSize:13, color:s.color }}>{s.val}</div>
                    <div style={{ fontSize:11, color:"#9CA3AF", marginTop:2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <ProgressBar value={c.members} max={c.maxMembers} color={c.color} />
              <div style={{ display:"flex", gap:10, marginTop:14 }}>
                <Button variant="outline" onClick={() => onNavigate("committee-detail")} style={{ flex:1, justifyContent:"center", fontSize:13, padding:"9px 0" }}>{t("details")}</Button>
                {c.members < c.maxMembers && <Button onClick={() => onNavigate("committee-detail")} style={{ flex:1, justifyContent:"center", fontSize:13, padding:"9px 0" }}>{t("joinBtn")}</Button>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── CREATE COMMITTEE ───────────────────────────────────────────────────── */
function CreateCommitteePage({ onNavigate }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name:"", amount:"", members:"", type:"public", startDate:"", rules:"" });
  const [step, setStep] = useState(1);
  const [created, setCreated] = useState(false);

  const handleCreate = () => { setCreated(true); setTimeout(() => onNavigate("dashboard"), 2000); };

  if (created) return (
    <div style={{ minHeight:"100vh", background:"#F9FAFB", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:80, marginBottom:20, animation:"bounce 1s infinite" }}>🎉</div>
        <h2 style={{ fontWeight:900, fontSize:28, color:"#111827", marginBottom:8 }}>{t("created")}</h2>
        <p style={{ color:"#6B7280" }}>{t("createdDesc")}</p>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"#F9FAFB", padding:"24px 16px 80px" }}>
      <div style={{ maxWidth:600, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24 }}>
          <button onClick={() => onNavigate("dashboard")} style={{ width:36, height:36, borderRadius:9, background:"white", border:"1px solid #E5E7EB", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>←</button>
          <div>
            <h1 style={{ fontWeight:800, fontSize:20, color:"#111827" }}>{t("createTitle")}</h1>
            <p style={{ color:"#9CA3AF", fontSize:13 }}>{t("stepOf")} {step} {t("of")} 3</p>
          </div>
        </div>
        {/* Steps */}
        <div style={{ display:"flex", gap:6, marginBottom:24 }}>
          {[1,2,3].map(s => (
            <div key={s} style={{ flex:1, height:4, borderRadius:4, background: s<=step?"#6C2BD9":"#E5E7EB", transition:"background 0.3s" }} />
          ))}
        </div>
        <Card style={{ padding:24 }}>
          {step===1 && (
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <h2 style={{ fontWeight:700, fontSize:17, color:"#111827", marginBottom:4 }}>📋 {t("basicDetails")}</h2>
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t("committeeName")}</label>
                <input value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder={t("committeeNamePlaceholder")} style={S.input} />
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                <div>
                  <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t("monthlyAmount")}</label>
                  <input value={form.amount} onChange={e => setForm({...form,amount:e.target.value})} type="number" placeholder="10000" style={S.input} />
                </div>
                <div>
                  <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t("membersCount")}</label>
                  <input value={form.members} onChange={e => setForm({...form,members:e.target.value})} type="number" placeholder="10" style={S.input} />
                </div>
              </div>
              {form.amount && form.members && (
                <div style={{ background:"#EDE9FE", border:"1px solid #DDD6FE", borderRadius:10, padding:"12px 16px", fontSize:13 }}>
                  <span style={{ color:"#5B21B6", fontWeight:600 }}>{t("totalPoolCalc")} </span>
                  <span style={{ color:"#6C2BD9", fontWeight:700 }}>Rs {(parseInt(form.amount||0)*parseInt(form.members||0)).toLocaleString()}</span>
                </div>
              )}
            </div>
          )}
          {step===2 && (
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <h2 style={{ fontWeight:700, fontSize:17, color:"#111827", marginBottom:4 }}>⚙️ {t("settingsTitle")}</h2>
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:10 }}>{t("committeeType")}</label>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  {["public","private"].map(type => (
                    <button key={type} onClick={() => setForm({...form,type})}
                      style={{ padding:"14px", borderRadius:12, border:`2px solid ${form.type===type?"#6C2BD9":"#E5E7EB"}`, background: form.type===type?"#EDE9FE":"white", cursor:"pointer", textAlign:"left" }}>
                      <div style={{ fontWeight:700, fontSize:13, color:"#111827", marginBottom:2 }}>{t(type==="public"?"public":"privateTitle")}</div>
                      <div style={{ fontSize:11, color:"#6B7280" }}>{t(type==="public"?"publicDesc":"privateDesc")}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t("startDate")}</label>
                <input type="date" value={form.startDate} onChange={e => setForm({...form,startDate:e.target.value})} style={S.input} />
              </div>
            </div>
          )}
          {step===3 && (
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <h2 style={{ fontWeight:700, fontSize:17, color:"#111827", marginBottom:4 }}>📜 {t("rulesTitle")}</h2>
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>{t("rulesLabel")}</label>
                <textarea value={form.rules} onChange={e => setForm({...form,rules:e.target.value})} placeholder={t("rulesPlaceholder")} rows={4}
                  style={{ ...S.input, resize:"vertical", height:"auto" }} />
              </div>
              <div style={{ background:"#F0FDF4", border:"1px solid #D1FAE5", borderRadius:10, padding:16 }}>
                <div style={{ fontWeight:600, fontSize:13, color:"#065F46", marginBottom:10 }}>📤 {t("inviteTitle")}</div>
                <div style={{ display:"flex", gap:8 }}>
                  <input readOnly value="https://smartcametti.pk/join/ABC123" style={{ ...S.input, fontSize:12, background:"white" }} />
                  <button style={{ padding:"0 16px", background:"#10B981", color:"white", borderRadius:9, fontWeight:600, fontSize:13, border:"none", cursor:"pointer", whiteSpace:"nowrap" }}>{t("copy")}</button>
                </div>
                <div style={{ display:"flex", gap:8, marginTop:8 }}>
                  <button style={{ flex:1, padding:"8px", background:"#25D366", color:"white", borderRadius:8, fontWeight:600, fontSize:12, border:"none", cursor:"pointer" }}>📱 {t("whatsapp")}</button>
                </div>
              </div>
            </div>
          )}
          <div style={{ display:"flex", gap:12, marginTop:20 }}>
            {step > 1 && <Button variant="outline" onClick={() => setStep(step-1)} style={{ flex:1, justifyContent:"center" }}>{t("back")}</Button>}
            {step < 3 && <Button onClick={() => setStep(step+1)} style={{ flex:1, justifyContent:"center" }}>{t("next")} →</Button>}
            {step === 3 && <Button onClick={handleCreate} style={{ flex:1, justifyContent:"center" }}>🚀 {t("createCommittee")}</Button>}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ─── COMMITTEE DETAIL ───────────────────────────────────────────────────── */
function CommitteeDetailPage({ onNavigate }) {
  const { t } = useLang();
  const [tab, setTab] = useState("overview");
  const [members, setMembers] = useState([
    { id:1, name:"Ahmed Raza", avatar:"AR", turn:7, paid:true, isAdmin:true, status:"online" },
    { id:2, name:"Sara Khan", avatar:"SK", turn:2, paid:true, isAdmin:false, status:"online" },
    { id:3, name:"Kamran Ali", avatar:"KA", turn:4, paid:false, isAdmin:false, status:"offline" },
    { id:4, name:"Zara Malik", avatar:"ZM", turn:1, paid:true, isAdmin:false, status:"online" },
  ]);
  const [chat, setChat] = useState([
    { id:1, user:"Zara Malik", msg:"Salam! Is mahine ki kisht bhej di meri taraf se ✅", time:"10:30" },
    { id:2, user:"Ahmed Raza", msg:"Shukriya Zara! Sabhi ka wait hai ab", time:"10:32" },
    { id:3, user:"Sara Khan", msg:"Main bhi kal tak transfer kar deti hun", time:"10:45" },
  ]);
  const [newMsg, setNewMsg] = useState("");
  const [showRemoveModal, setShowRemoveModal] = useState(null);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferTarget, setTransferTarget] = useState(null);
  const amIAdmin = true;
  const c = MOCK_COMMITTEES[0];
  const tabs = ["overview","members","payments","chat",...(amIAdmin?["admin-panel"]:[])];

  const sendMsg = () => {
    if (!newMsg.trim()) return;
    setChat([...chat, { id:chat.length+1, user:MOCK_USER.name, msg:newMsg.trim(), time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}) }]);
    setNewMsg("");
  };
  const removeMember = (id) => { setMembers(members.filter(m => m.id!==id)); setShowRemoveModal(null); };
  const transferAdmin = (id) => {
    setMembers(members.map(m => ({ ...m, isAdmin: m.id===id })));
    setShowTransferModal(false); setTransferTarget(null);
  };

  return (
    <div style={{ minHeight:"100vh", background:"#F9FAFB" }}>
      {/* Header */}
      <div style={{ background:"white", borderBottom:"1px solid #F3F4F6", padding:"16px 20px" }}>
        <div style={{ maxWidth:1000, margin:"0 auto", display:"flex", alignItems:"center", gap:14 }}>
          <button onClick={() => onNavigate("dashboard")} style={{ width:36, height:36, borderRadius:9, background:"#F9FAFB", border:"1px solid #E5E7EB", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>←</button>
          <div style={{ flex:1 }}>
            <h1 style={{ fontWeight:800, fontSize:18, color:"#111827" }}>{c.name}</h1>
            <p style={{ color:"#9CA3AF", fontSize:12 }}>Rs {c.amount.toLocaleString()} / month · {c.members} members</p>
          </div>
          <Badge color={c.paid?"emerald":"amber"}>{c.paid ? t("paid") : t("pending")}</Badge>
        </div>
        {/* Tabs */}
        <div style={{ maxWidth:1000, margin:"12px auto 0", display:"flex", gap:4, overflowX:"auto" }}>
          {tabs.map(tb => (
            <button key={tb} onClick={() => setTab(tb)}
              style={{ padding:"8px 16px", borderRadius:8, fontSize:13, fontWeight:600, background: tab===tb?"#EDE9FE":"transparent", color: tab===tb?"#6C2BD9":"#6B7280", border:"none", cursor:"pointer", whiteSpace:"nowrap" }}>
              {tb==="overview"?t("overview"):tb==="members"?t("membersTab"):tb==="payments"?t("paymentsTab"):tb==="admin-panel"?t("adminTab"):t("chatTab")}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:1000, margin:"0 auto", padding:"20px 16px 80px" }}>
        {tab==="overview" && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <Card style={{ padding:20 }}>
              <h3 style={{ fontWeight:700, color:"#111827", fontSize:15, marginBottom:14 }}>{t("turnProgress")}</h3>
              <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"#9CA3AF", marginBottom:8 }}>
                <span>{t("currentTurn")} #{c.currentTurn}</span>
                <span>{t("totalMonths")} {c.members} {t("months")}</span>
              </div>
              <ProgressBar value={c.currentTurn} max={c.members} />
              <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:6, marginTop:14 }}>
                {[...Array(c.members)].map((_,i) => {
                  const turnNum = i+1;
                  const bg = turnNum < c.currentTurn ? "#ECFDF5" : turnNum === c.currentTurn ? "#6C2BD9" : turnNum === c.myTurn ? "#EDE9FE" : "#F9FAFB";
                  const color = turnNum === c.currentTurn ? "white" : turnNum < c.currentTurn ? "#065F46" : turnNum === c.myTurn ? "#6C2BD9" : "#9CA3AF";
                  return (
                    <div key={i} style={{ height:36, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, background:bg, color, border:`1px solid ${bg==="white"||bg==="#F9FAFB"?"#E5E7EB":"transparent"}` }}>
                      {turnNum}
                    </div>
                  );
                })}
              </div>
              <div style={{ display:"flex", gap:16, marginTop:12, fontSize:11, color:"#9CA3AF" }}>
                {[{color:"#6C2BD9",bg:"#EDE9FE",label:t("myTurnLabel")},{color:"#065F46",bg:"#ECFDF5",label:t("completed")},{color:"#9CA3AF",bg:"#F9FAFB",label:t("upcoming")}].map((item,i) => (
                  <span key={i} style={{ display:"flex", alignItems:"center", gap:4 }}>
                    <span style={{ width:10, height:10, borderRadius:3, background:item.bg, border:`1px solid ${item.color}40`, display:"inline-block" }} />
                    {item.label}
                  </span>
                ))}
              </div>
            </Card>
            <Card style={{ padding:20 }}>
              <h3 style={{ fontWeight:700, color:"#111827", fontSize:15, marginBottom:14 }}>{t("nextDueDate")}</h3>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div>
                  <div style={{ fontWeight:900, fontSize:28, color:"#111827" }}>{c.nextDue}</div>
                  <div style={{ color:"#9CA3AF", fontSize:13, marginTop:4 }}>Rs {c.amount.toLocaleString()} {t("due")}</div>
                </div>
                {!c.paid ? <Button>💳 {t("payNow")}</Button> : <Badge color="emerald">✅ {t("paid")}</Badge>}
              </div>
            </Card>
          </div>
        )}

        {tab==="members" && (
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            <div style={{ background:"#EDE9FE", border:"1px solid #DDD6FE", borderRadius:12, padding:16, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:22 }}>👑</span>
              <div>
                <div style={{ fontWeight:700, color:"#6C2BD9", fontSize:13 }}>{t("committeeAdmin")}</div>
                <div style={{ color:"#374151", fontSize:13 }}>{members.find(m=>m.isAdmin)?.name} — {t("adminDesc")}</div>
              </div>
            </div>
            {members.map(m => (
              <Card key={m.id} style={{ padding:16 }}>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ position:"relative" }}>
                    <Avatar initials={m.avatar} size="md" status={m.status} />
                    {m.isAdmin && <span style={{ position:"absolute", top:-4, right:-4, width:18, height:18, background:"#F59E0B", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, border:"2px solid white" }}>👑</span>}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <span style={{ fontWeight:700, color:"#111827", fontSize:14 }}>{m.name}</span>
                      {m.isAdmin && <Badge color="amber">Admin</Badge>}
                    </div>
                    <div style={{ color:"#9CA3AF", fontSize:12 }}>{t("turnLabel")} #{m.turn}</div>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <Badge color={m.paid?"emerald":"red"}>{m.paid ? t("paid") : `⏳ ${t("pending")}`}</Badge>
                    {amIAdmin && !m.isAdmin && (
                      <button onClick={() => setShowRemoveModal(m)} style={{ width:30, height:30, borderRadius:8, background:"#FEF2F2", border:"1px solid #FCA5A5", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, color:"#EF4444", cursor:"pointer" }}>✕</button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
            {amIAdmin && (
              <button onClick={() => setShowTransferModal(true)} style={{ padding:14, border:"2px dashed #DDD6FE", borderRadius:12, color:"#6C2BD9", fontSize:13, fontWeight:600, background:"none", cursor:"pointer" }}>
                {t("transferAdminBtn")}
              </button>
            )}
            {/* Remove Modal */}
            {showRemoveModal && (
              <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9999, padding:20 }}>
                <Card style={{ padding:28, maxWidth:360, width:"100%", textAlign:"center" }}>
                  <div style={{ fontSize:40, marginBottom:12 }}>⚠️</div>
                  <h3 style={{ fontWeight:700, fontSize:17, color:"#111827", marginBottom:8 }}>{t("removeMemberTitle")}</h3>
                  <p style={{ color:"#6B7280", fontSize:13, marginBottom:20 }}><strong>{showRemoveModal.name}</strong> {t("removeMemberDesc")}</p>
                  <div style={{ display:"flex", gap:10 }}>
                    <button onClick={() => setShowRemoveModal(null)} style={{ flex:1, padding:12, borderRadius:10, background:"#F3F4F6", border:"none", fontWeight:600, fontSize:14, cursor:"pointer" }}>{t("cancel")}</button>
                    <button onClick={() => removeMember(showRemoveModal.id)} style={{ flex:1, padding:12, borderRadius:10, background:"#EF4444", color:"white", border:"none", fontWeight:600, fontSize:14, cursor:"pointer" }}>{t("remove")}</button>
                  </div>
                </Card>
              </div>
            )}
            {/* Transfer Modal */}
            {showTransferModal && (
              <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9999, padding:20 }}>
                <Card style={{ padding:28, maxWidth:380, width:"100%" }}>
                  <div style={{ textAlign:"center", marginBottom:16 }}>
                    <div style={{ fontSize:40 }}>👑</div>
                    <h3 style={{ fontWeight:700, fontSize:17, color:"#111827", margin:"8px 0 4px" }}>{t("transferAdminTitle")}</h3>
                    <p style={{ color:"#6B7280", fontSize:13 }}>{t("transferAdminDesc")}</p>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:16 }}>
                    {members.filter(m => !m.isAdmin).map(m => (
                      <button key={m.id} onClick={() => setTransferTarget(m)}
                        style={{ display:"flex", alignItems:"center", gap:12, padding:12, borderRadius:10, border:`2px solid ${transferTarget?.id===m.id?"#6C2BD9":"#E5E7EB"}`, background: transferTarget?.id===m.id?"#EDE9FE":"white", cursor:"pointer" }}>
                        <Avatar initials={m.avatar} size="sm" />
                        <span style={{ fontWeight:600, color:"#111827", fontSize:14 }}>{m.name}</span>
                        {transferTarget?.id===m.id && <span style={{ marginLeft:"auto", color:"#6C2BD9" }}>✓</span>}
                      </button>
                    ))}
                  </div>
                  <div style={{ display:"flex", gap:10 }}>
                    <button onClick={() => { setShowTransferModal(false); setTransferTarget(null); }} style={{ flex:1, padding:12, borderRadius:10, background:"#F3F4F6", border:"none", fontWeight:600, fontSize:14, cursor:"pointer" }}>{t("cancel")}</button>
                    <button onClick={() => transferTarget && transferAdmin(transferTarget.id)} disabled={!transferTarget}
                      style={{ flex:1, padding:12, borderRadius:10, background: transferTarget?"#6C2BD9":"#9CA3AF", color:"white", border:"none", fontWeight:600, fontSize:14, cursor: transferTarget?"pointer":"not-allowed" }}>
                      {t("transfer")}
                    </button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        )}

        {tab==="payments" && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
              {[
                { label:t("paid"), val:4, color:"#10B981", bg:"#ECFDF5" },
                { label:t("pending"), val:2, color:"#F59E0B", bg:"#FEF3C7" },
                { label:t("totalPool"), val:`Rs ${(c.totalPool/1000).toFixed(0)}K`, color:"#6C2BD9", bg:"#EDE9FE" },
              ].map((s,i) => (
                <Card key={i} style={{ padding:14, textAlign:"center" }}>
                  <div style={{ fontWeight:900, fontSize:20, color:s.color }}>{s.val}</div>
                  <div style={{ fontSize:11, color:"#9CA3AF", marginTop:4 }}>{s.label}</div>
                </Card>
              ))}
            </div>
            <Card style={{ padding:20 }}>
              <h3 style={{ fontWeight:700, color:"#111827", fontSize:15, marginBottom:14 }}>Payment Records</h3>
              {members.map(m => (
                <div key={m.id} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0", borderBottom:"1px solid #F3F4F6" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <Avatar initials={m.avatar} size="sm" />
                    <span style={{ fontWeight:600, fontSize:13, color:"#111827" }}>{m.name}</span>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <span style={{ fontSize:12, color:"#9CA3AF" }}>Rs {c.amount.toLocaleString()}</span>
                    <Badge color={m.paid?"emerald":"red"}>{m.paid ? t("paid") : t("pending")}</Badge>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        )}

        {tab==="chat" && (
          <div>
            <Card style={{ padding:0, overflow:"hidden" }}>
              <div style={{ padding:"14px 18px", borderBottom:"1px solid #F3F4F6", background:"#FAFAFA" }}>
                <span style={{ fontWeight:700, color:"#111827", fontSize:14 }}>💬 {c.name} — Group Chat</span>
              </div>
              <div style={{ padding:16, display:"flex", flexDirection:"column", gap:10, minHeight:300 }}>
                {chat.map(m => {
                  const isMe = m.user === MOCK_USER.name;
                  return (
                    <div key={m.id} style={{ display:"flex", flexDirection: isMe?"row-reverse":"row", gap:10 }}>
                      {!isMe && <Avatar initials={m.user.slice(0,2).toUpperCase()} size="sm" />}
                      <div style={{ maxWidth:"70%" }}>
                        {!isMe && <div style={{ fontSize:11, color:"#9CA3AF", marginBottom:3 }}>{m.user}</div>}
                        <div style={{ padding:"10px 14px", borderRadius: isMe?"14px 14px 2px 14px":"14px 14px 14px 2px", background: isMe?"#6C2BD9":"#F3F4F6", color: isMe?"white":"#111827", fontSize:13 }}>
                          {m.msg}
                        </div>
                        <div style={{ fontSize:10, color:"#9CA3AF", marginTop:3, textAlign: isMe?"right":"left" }}>{m.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ padding:14, borderTop:"1px solid #F3F4F6", display:"flex", gap:10 }}>
                <input value={newMsg} onChange={e => setNewMsg(e.target.value)} onKeyDown={e => e.key==="Enter"&&sendMsg()} placeholder={t("messagePlaceholder")} style={{ ...S.input, flex:1 }} />
                <button onClick={sendMsg} style={{ padding:"10px 18px", background:"#6C2BD9", color:"white", borderRadius:10, fontWeight:600, fontSize:13, border:"none", cursor:"pointer" }}>{t("sendMessage")}</button>
              </div>
            </Card>
          </div>
        )}

        {tab==="admin-panel" && amIAdmin && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <Card style={{ padding:20 }}>
              <h3 style={{ fontWeight:700, color:"#111827", fontSize:15, marginBottom:16 }}>💳 {t("paymentVerification")}</h3>
              {members.filter(m => !m.paid).map(m => (
                <div key={m.id} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 0", borderBottom:"1px solid #F3F4F6" }}>
                  <Avatar initials={m.avatar} size="sm" />
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:600, fontSize:13, color:"#111827" }}>{m.name}</div>
                    <div style={{ fontSize:11, color:"#9CA3AF" }}>Rs {c.amount.toLocaleString()} — Screenshot uploaded</div>
                  </div>
                  <div style={{ display:"flex", gap:8 }}>
                    <button style={{ padding:"7px 14px", background:"#ECFDF5", border:"1px solid #D1FAE5", borderRadius:8, fontSize:12, fontWeight:600, color:"#065F46", cursor:"pointer" }}>✅ {t("verify")}</button>
                    <button style={{ padding:"7px 14px", background:"#FEF2F2", border:"1px solid #FCA5A5", borderRadius:8, fontSize:12, fontWeight:600, color:"#EF4444", cursor:"pointer" }}>✕ {t("reject")}</button>
                  </div>
                </div>
              ))}
            </Card>
            <Card style={{ padding:20 }}>
              <h3 style={{ fontWeight:700, color:"#111827", fontSize:15, marginBottom:14 }}>📢 {t("announcement")}</h3>
              <textarea placeholder={t("announcementPlaceholder")} rows={3} style={{ ...S.input, resize:"none" }} />
              <Button style={{ marginTop:10, width:"100%", justifyContent:"center" }}>{t("sendBtn2")}</Button>
            </Card>
            <Card style={{ padding:20 }}>
              <h3 style={{ fontWeight:700, color:"#EF4444", fontSize:15, marginBottom:14 }}>⚠️ {t("dangerZone")}</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <button style={{ padding:"12px 16px", border:"1.5px solid #FCA5A5", borderRadius:10, background:"white", color:"#EF4444", fontWeight:600, fontSize:13, cursor:"pointer", textAlign:"left" }}>🔒 {t("lockCommittee")}</button>
                <button style={{ padding:"12px 16px", border:"1.5px solid #FCA5A5", borderRadius:10, background:"#FEF2F2", color:"#EF4444", fontWeight:600, fontSize:13, cursor:"pointer", textAlign:"left" }}>❌ {t("dissolveCommittee")}</button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── WALLET PAGE ────────────────────────────────────────────────────────── */
function WalletPage({ onNavigate }) {
  const { t } = useLang();
  const txns = [
    { type:"credit", amount:10000, desc:"Family Gold Committee — Turn #3", date:"May 14", icon:"💰" },
    { type:"debit", amount:5000, desc:"Office Savings Circle — Installment", date:"May 12", icon:"💳" },
    { type:"credit", amount:2500, desc:"Friends Society Fund received", date:"May 8", icon:"💰" },
    { type:"debit", amount:10000, desc:"Family Gold Committee payment", date:"May 1", icon:"💳" },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"#F9FAFB", padding:"24px 16px 80px" }}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24 }}>
          <button onClick={() => onNavigate("dashboard")} style={{ width:36, height:36, borderRadius:9, background:"white", border:"1px solid #E5E7EB", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>←</button>
          <h1 style={{ fontWeight:800, fontSize:20, color:"#111827" }}>{t("myWallet")}</h1>
        </div>
        {/* Balance Card */}
        <div style={{ borderRadius:20, padding:28, background:"linear-gradient(135deg, #6C2BD9, #5521B5)", color:"white", textAlign:"center", marginBottom:20 }}>
          <p style={{ color:"rgba(255,255,255,0.7)", fontSize:13, marginBottom:8 }}>{t("availableBalance")}</p>
          <div style={{ fontWeight:900, fontSize:40, marginBottom:24 }}>Rs {MOCK_USER.balance.toLocaleString()}</div>
          <div style={{ display:"flex", gap:10 }}>
            {[{ label:t("addMoney"), icon:"+" }, { label:t("withdraw"), icon:"↑" }, { label:t("history"), icon:"📋" }].map((b,i) => (
              <button key={i} style={{ flex:1, padding:"12px 0", background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:12, color:"white", fontWeight:600, fontSize:13, cursor:"pointer" }}>
                <div style={{ fontSize:18, marginBottom:3 }}>{b.icon}</div>
                {b.label}
              </button>
            ))}
          </div>
        </div>
        {/* Quick Add */}
        <Card style={{ padding:20, marginBottom:20 }}>
          <h3 style={{ fontWeight:700, fontSize:15, color:"#111827", marginBottom:14 }}>Quick Add Money</h3>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginBottom:14 }}>
            {[500,1000,2000,5000].map(amt => (
              <button key={amt} style={{ padding:"10px 0", border:"1.5px solid #E5E7EB", borderRadius:10, fontSize:13, fontWeight:600, color:"#374151", background:"white", cursor:"pointer" }}>
                Rs {amt.toLocaleString()}
              </button>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            <button style={{ padding:"12px", border:"1px solid #E5E7EB", borderRadius:12, background:"white", cursor:"pointer", display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:22 }}>🔵</span>
              <span style={{ fontWeight:600, fontSize:13, color:"#374151" }}>JazzCash</span>
            </button>
            <button style={{ padding:"12px", border:"1px solid #E5E7EB", borderRadius:12, background:"white", cursor:"pointer", display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:22 }}>🟢</span>
              <span style={{ fontWeight:600, fontSize:13, color:"#374151" }}>EasyPaisa</span>
            </button>
          </div>
        </Card>
        {/* Transactions */}
        <Card>
          <div style={{ padding:"16px 20px", borderBottom:"1px solid #F3F4F6" }}>
            <h3 style={{ fontWeight:700, fontSize:15, color:"#111827" }}>{t("transactions")}</h3>
          </div>
          {txns.map((txn,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 20px", borderBottom: i<txns.length-1?"1px solid #F9FAFB":undefined }}>
              <div style={{ width:42, height:42, borderRadius:12, background: txn.type==="credit"?"#ECFDF5":"#FEF2F2", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{txn.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:600, fontSize:13, color:"#111827" }}>{txn.desc}</div>
                <div style={{ fontSize:11, color:"#9CA3AF", marginTop:2 }}>{txn.date}</div>
              </div>
              <div style={{ fontWeight:700, fontSize:14, color: txn.type==="credit"?"#10B981":"#EF4444" }}>
                {txn.type==="credit"?"+":"-"} Rs {txn.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
