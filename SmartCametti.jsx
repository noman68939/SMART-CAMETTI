import { useState, useEffect, useRef, createContext, useContext } from "react";

// ── Utility ──────────────────────────────────────────────────────────────────
const cn = (...c) => c.filter(Boolean).join(" ");

// ── Language Context ──────────────────────────────────────────────────────────
const LangContext = createContext();
const useLang = () => useContext(LangContext);

const TRANSLATIONS = {
  en: {
    // Nav
    home: "Home", about: "About", contact: "Contact",
    login: "Login", register: "Register", logout: "Logout",
    dashboard: "Dashboard", explore: "Explore", create: "Create", wallet: "Wallet", admin: "Admin",
    profile: "Profile", notifications: "Notifications",
    // Hero
    tagline: "Pakistan's #1 Digital Committee Platform",
    heroSubtitle: "Pakistan's Smart Digital Committee Platform",
    heroDesc: "Manage your committee digitally — with secure payments, real-time tracking, and live member interaction.",
    startCommittee: "🚀 Start a Committee",
    exploreCommittees: "🔍 Explore Committees",
    freeReg: "✅ Free Registration",
    bankSecurity: "🛡️ Bank-Grade Security",
    realtime: "⚡ Real-time Updates",
    // Stats
    activeUsers: "Active Users", committeesCreated: "Committees Created",
    paymentsProcessed: "Payments Processed", totalSaved: "Total Saved",
    // Features
    whyTitle: "Why Smart Cametti?",
    whySubtitle: "Features you won't find on any other platform",
    // How it works
    howTitle: "How Does It Work?",
    step1Title: "Create Account", step1Desc: "Free registration with your phone number",
    step2Title: "Join Committee", step2Desc: "Start a new committee or join an existing one",
    step3Title: "Pay Installment", step3Desc: "Pay via JazzCash, Easypaisa, or bank transfer",
    step4Title: "Receive Amount", step4Desc: "Receive the full committee amount on your turn",
    // Testimonials
    testiTitle: "What Our Users Say",
    // FAQ
    faqTitle: "Frequently Asked Questions",
    // CTA
    ctaTitle: "Start Today!",
    ctaDesc: "50,000+ Pakistanis are managing their committees on Smart Cametti",
    freeAccount: "🚀 Create Free Account",
    // Footer
    platform: "Platform", support: "Support", legal: "Legal",
    footerLinks1: ["Dashboard", "Create Committee", "Explore", "Wallet"],
    footerLinks2: ["FAQ", "Contact Us", "Help Center", "Security"],
    footerLinks3: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "About Us"],
    footerCopy: "© 2025 Smart Cametti. All rights reserved. Made with ❤️ in Pakistan",
    // Auth
    loginTitle: "Welcome Back! 👋", registerTitle: "Create Account 🚀",
    loginSubtitle: "Login to your account", registerSubtitle: "Create a new account",
    fullName: "Full Name", phoneNumber: "Phone Number", password: "Password",
    forgotPass: "Forgot password?",
    loginBtn: "🔓 Login", sendOtp: "📱 Send OTP",
    or: "or", googleLogin: "🔵 Login with Google",
    noAccount: "Don't have an account? ", haveAccount: "Already have an account? ",
    registerLink: "Register", loginLink: "Login",
    otpTitle: "Verify OTP", otpDesc: "6-digit code sent to",
    verifyBtn: "✅ Verify & Continue", resendOtp: "Resend OTP",
    waiting: "⏳ Please wait...", verifying: "⏳ Verifying...",
    // Dashboard
    greeting: "Assalam o Alaikum 👋",
    walletBalance: "Total Wallet Balance", activeCommittees: "active committees",
    walletBtn: "💰 Wallet", sendBtn: "📤 Send", receiveBtn: "📥 Receive",
    quickActions: "Quick Actions",
    myCommittees: "My Committees", seeAll: "See all →",
    recentActivity: "Recent Activity",
    // Explore
    exploreTitle: "Explore Committees",
    exploreSubtitle: "Join public committees or create a new one",
    searchPlaceholder: "🔍 Search committees...",
    createBtn: "+ Create", all: "All", open: "Open", private: "Private",
    monthly: "Monthly", members: "Members", totalPool: "Total Pool",
    details: "Details", joinBtn: "Join",
    // Create Committee
    createTitle: "Create New Committee",
    stepOf: "Step", of: "of",
    basicDetails: "📋 Basic Details",
    committeeName: "Committee Name *",
    committeeNamePlaceholder: "Family Gold Committee",
    monthlyAmount: "Monthly Amount (Rs) *",
    membersCount: "Number of Members *",
    totalPoolCalc: "Total Pool:", totalPoolDesc: "Total committee amount",
    settingsTitle: "⚙️ Settings",
    committeeType: "Committee Type", public: "Public", publicDesc: "Anyone can join",
    privateTitle: "Private", privateDesc: "Join by invite",
    startDate: "Start Date", turnSystem: "Turn Draw System",
    autoDraw: "Auto Draw", manual: "Manual",
    rulesTitle: "📜 Rules & Invitation",
    rulesLabel: "Committee Rules (Optional)", rulesPlaceholder: "Write committee rules here...",
    inviteTitle: "📤 Share Invite Link",
    copy: "Copy", whatsapp: "📱 WhatsApp", shareQr: "📤 Share QR",
    back: "← Back", next: "Next Step →", createCommittee: "🚀 Create Committee!",
    created: "Committee Created!", createdDesc: "Going to dashboard...",
    // Committee Detail
    backBtn: "← Back",
    myTurn: "My Turn", overview: "📊 Overview", membersTab: "👥 Members",
    paymentsTab: "💳 Payments", chatTab: "💬 Chat", adminTab: "⚙️ Admin",
    turnProgress: "Turn Progress", currentTurn: "Current Turn:", totalMonths: "Total:", months: "months",
    completed: "Completed", myTurnLabel: "My Turn", upcoming: "Upcoming",
    nextDueDate: "Next Due Date", due: "due",
    payNow: "💳 Pay Now", paid: "✅ Paid",
    committeeAdmin: "Committee Admin", adminDesc: "has full authority over all committee decisions",
    transferAdminBtn: "👑 Transfer Admin Rights",
    removeMemberTitle: "Remove Member?", removeMemberDesc: "will be removed from this committee.",
    cancel: "Cancel", remove: "Remove",
    transferAdminTitle: "Transfer Admin Rights",
    transferAdminDesc: "Choose new admin. You will become a regular member.",
    transfer: "Transfer",
    paymentVerification: "💳 Payment Verification",
    verify: "✅ Verify", reject: "✕ Reject",
    announcement: "📢 Committee Announcement",
    announcementPlaceholder: "Send a message to all members...",
    sendBtn2: "📢 Send",
    memberManagement: "👥 Member Management",
    dangerZone: "⚠️ Danger Zone",
    lockCommittee: "🔒 Lock Committee (Stop New Joinings)",
    dissolveCommittee: "❌ Dissolve Committee",
    // Chat
    messagePlaceholder: "Type a message...",
    sendMessage: "Send",
    // Wallet
    myWallet: "My Wallet",
    availableBalance: "Available Balance",
    addMoney: "Add Money", withdraw: "Withdraw", history: "History",
    transactions: "Transactions",
    // Notifications
    notificationsTitle: "Notifications",
    markAllRead: "Mark all as read",
    // Profile
    myProfile: "My Profile",
    editProfile: "✏️ Edit Profile",
    changePassword: "🔒 Change Password",
    verifyPhone: "📱 Verify Phone",
    notifSettings: "🔔 Notification Settings",
    darkMode: "Dark Mode",
    language: "Language",
    // Admin
    adminDashboard: "Admin Dashboard",
    adminSubtitle: "Complete platform overview",
    totalUsers: "Total Users", activeCommitteesLabel: "Active Committees",
    todayRevenue: "Today's Revenue", pendingVerifications: "Pending Verifications",
    dailyRevenue: "Daily Revenue (PKR)",
    paymentMethods: "Payment Methods",
    recentUsers: "Recent Users",
    searchDots: "🔍 Search...",
    userCol: "User", phoneCol: "Phone", committeesCol: "Committees",
    statusCol: "Status", actionsCol: "Actions",
    viewBtn: "View", suspendBtn: "Suspend",
    userDashboard: "← User Dashboard",
    allOperational: "🟢 All Systems Operational",
    // Mock Activities (translated)
    act1: "Kamran Ali paid installment",
    act2: "New member joined Office Circle",
    act3: "Your turn #3 is next month",
    act4: "Payment verified by admin",
    act5: "Zara uploaded payment proof",
    // Mock Notifications
    notif1Title: "Payment Due Tomorrow", notif1Body: "Office Savings Circle - Rs 5,000 due May 25",
    notif2Title: "Turn Confirmed!", notif2Body: "Your turn #3 in Office Circle is confirmed",
    notif3Title: "New Member Joined", notif3Body: "Ali Hassan joined Family Gold Committee",
    notif4Title: "Payment Received", notif4Body: "Rs 10,000 credited to your wallet",
    // Status
    active: "Active", pending: "Pending", suspended: "Suspended",
    online: "online", offline: "offline",
    turnLabel: "Turn",
  },
  hi: {
    home: "होम", about: "परिचय", contact: "संपर्क",
    login: "लॉगिन", register: "रजिस्टर", logout: "लॉगआउट",
    dashboard: "डैशबोर्ड", explore: "एक्सप्लोर", create: "बनाएं", wallet: "वॉलेट", admin: "एडमिन",
    profile: "प्रोफ़ाइल", notifications: "सूचनाएं",
    tagline: "पाकिस्तान का #1 डिजिटल कमेटी प्लेटफॉर्म",
    heroSubtitle: "पाकिस्तान का स्मार्ट डिजिटल कमेटी प्लेटफॉर्म",
    heroDesc: "अपनी कमेटी को डिजिटली मैनेज करें — सुरक्षित भुगतान, रियल-टाइम ट्रैकिंग और लाइव मेंबर इंटरैक्शन के साथ।",
    startCommittee: "🚀 कमेटी शुरू करें",
    exploreCommittees: "🔍 कमेटियां एक्सप्लोर करें",
    freeReg: "✅ मुफ्त रजिस्ट्रेशन",
    bankSecurity: "🛡️ बैंक-ग्रेड सुरक्षा",
    realtime: "⚡ रियल-टाइम अपडेट",
    activeUsers: "सक्रिय उपयोगकर्ता", committeesCreated: "कमेटियां बनाई गईं",
    paymentsProcessed: "भुगतान प्रोसेस हुए", totalSaved: "कुल बचत",
    whyTitle: "स्मार्ट कमेटी क्यों?",
    whySubtitle: "ऐसे फीचर जो किसी और प्लेटफॉर्म पर नहीं मिलेंगे",
    howTitle: "यह कैसे काम करता है?",
    step1Title: "खाता बनाएं", step1Desc: "फोन नंबर से मुफ्त रजिस्ट्रेशन करें",
    step2Title: "कमेटी जॉइन करें", step2Desc: "नई कमेटी शुरू करें या मौजूदा में जॉइन करें",
    step3Title: "किस्त जमा करें", step3Desc: "JazzCash, Easypaisa या बैंक ट्रांसफर से भुगतान करें",
    step4Title: "राशि प्राप्त करें", step4Desc: "अपनी बारी पर पूरी कमेटी राशि पाएं",
    testiTitle: "हमारे उपयोगकर्ता क्या कहते हैं",
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    ctaTitle: "आज ही शुरू करें!",
    ctaDesc: "50,000+ पाकिस्तानी Smart Cametti पर अपनी कमेटियां मैनेज कर रहे हैं",
    freeAccount: "🚀 मुफ्त खाता बनाएं",
    platform: "प्लेटफॉर्म", support: "सहायता", legal: "कानूनी",
    footerLinks1: ["डैशबोर्ड", "कमेटी बनाएं", "एक्सप्लोर", "वॉलेट"],
    footerLinks2: ["FAQ", "हमसे संपर्क करें", "हेल्प सेंटर", "सुरक्षा"],
    footerLinks3: ["गोपनीयता नीति", "नियम और शर्तें", "कुकी नीति", "हमारे बारे में"],
    footerCopy: "© 2025 Smart Cametti. सर्वाधिकार सुरक्षित। ❤️ पाकिस्तान से बनाया गया",
    loginTitle: "वापस स्वागत है! 👋", registerTitle: "खाता बनाएं 🚀",
    loginSubtitle: "अपने खाते में लॉगिन करें", registerSubtitle: "नया खाता बनाएं",
    fullName: "पूरा नाम", phoneNumber: "फोन नंबर", password: "पासवर्ड",
    forgotPass: "पासवर्ड भूल गए?",
    loginBtn: "🔓 लॉगिन करें", sendOtp: "📱 OTP भेजें",
    or: "या", googleLogin: "🔵 Google से लॉगिन",
    noAccount: "खाता नहीं है? ", haveAccount: "पहले से खाता है? ",
    registerLink: "रजिस्टर करें", loginLink: "लॉगिन करें",
    otpTitle: "OTP वेरीफाई करें", otpDesc: "6-अंकीय कोड भेजा गया",
    verifyBtn: "✅ वेरीफाई करें", resendOtp: "OTP दोबारा भेजें",
    waiting: "⏳ कृपया प्रतीक्षा करें...", verifying: "⏳ वेरीफाई हो रहा है...",
    greeting: "नमस्ते 👋",
    walletBalance: "कुल वॉलेट बैलेंस", activeCommittees: "सक्रिय कमेटियां",
    walletBtn: "💰 वॉलेट", sendBtn: "📤 भेजें", receiveBtn: "📥 प्राप्त करें",
    quickActions: "त्वरित क्रियाएं",
    myCommittees: "मेरी कमेटियां", seeAll: "सभी देखें →",
    recentActivity: "हाल की गतिविधि",
    exploreTitle: "कमेटियां एक्सप्लोर करें",
    exploreSubtitle: "पब्लिक कमेटियां जॉइन करें या नई बनाएं",
    searchPlaceholder: "🔍 कमेटियां खोजें...",
    createBtn: "+ बनाएं", all: "सभी", open: "ओपन", private: "प्राइवेट",
    monthly: "मासिक", members: "सदस्य", totalPool: "कुल पूल",
    details: "विवरण", joinBtn: "जॉइन करें",
    createTitle: "नई कमेटी बनाएं",
    stepOf: "चरण", of: "का",
    basicDetails: "📋 बुनियादी विवरण",
    committeeName: "कमेटी का नाम *",
    committeeNamePlaceholder: "Family Gold Committee",
    monthlyAmount: "मासिक राशि (Rs) *",
    membersCount: "सदस्यों की संख्या *",
    totalPoolCalc: "कुल पूल:", totalPoolDesc: "कमेटी की कुल राशि",
    settingsTitle: "⚙️ सेटिंग्स",
    committeeType: "कमेटी प्रकार", public: "पब्लिक", publicDesc: "कोई भी जॉइन कर सकता है",
    privateTitle: "प्राइवेट", privateDesc: "आमंत्रण से जॉइन",
    startDate: "शुरू होने की तारीख", turnSystem: "बारी ड्रा सिस्टम",
    autoDraw: "Auto Draw", manual: "मैनुअल",
    rulesTitle: "📜 नियम और आमंत्रण",
    rulesLabel: "कमेटी नियम (वैकल्पिक)", rulesPlaceholder: "यहां कमेटी के नियम लिखें...",
    inviteTitle: "📤 इनवाइट लिंक शेयर करें",
    copy: "कॉपी", whatsapp: "📱 WhatsApp", shareQr: "📤 QR शेयर करें",
    back: "← वापस", next: "अगला चरण →", createCommittee: "🚀 कमेटी बनाएं!",
    created: "कमेटी बन गई!", createdDesc: "डैशबोर्ड पर जा रहे हैं...",
    backBtn: "← वापस",
    myTurn: "मेरी बारी", overview: "📊 अवलोकन", membersTab: "👥 सदस्य",
    paymentsTab: "💳 भुगतान", chatTab: "💬 चैट", adminTab: "⚙️ एडमिन",
    turnProgress: "बारी प्रगति", currentTurn: "वर्तमान बारी:", totalMonths: "कुल:", months: "महीने",
    completed: "पूर्ण", myTurnLabel: "मेरी बारी", upcoming: "आगामी",
    nextDueDate: "अगली देय तारीख", due: "देय",
    payNow: "💳 अभी भुगतान करें", paid: "✅ भुगतान हुआ",
    committeeAdmin: "कमेटी एडमिन", adminDesc: "सभी कमेटी निर्णयों का पूर्ण अधिकार है",
    transferAdminBtn: "👑 एडमिन अधिकार ट्रांसफर करें",
    removeMemberTitle: "सदस्य हटाएं?", removeMemberDesc: "को इस कमेटी से हटा दिया जाएगा।",
    cancel: "रद्द करें", remove: "हटाएं",
    transferAdminTitle: "एडमिन अधिकार ट्रांसफर करें",
    transferAdminDesc: "नया एडमिन चुनें। आप साधारण सदस्य बन जाएंगे।",
    transfer: "ट्रांसफर करें",
    paymentVerification: "💳 भुगतान सत्यापन",
    verify: "✅ सत्यापित करें", reject: "✕ अस्वीकार करें",
    announcement: "📢 कमेटी घोषणा",
    announcementPlaceholder: "सभी सदस्यों को संदेश भेजें...",
    sendBtn2: "📢 भेजें",
    memberManagement: "👥 सदस्य प्रबंधन",
    dangerZone: "⚠️ खतरनाक क्षेत्र",
    lockCommittee: "🔒 कमेटी लॉक करें (नई जॉइनिंग बंद)",
    dissolveCommittee: "❌ कमेटी भंग करें",
    messagePlaceholder: "संदेश टाइप करें...",
    sendMessage: "भेजें",
    myWallet: "मेरा वॉलेट",
    availableBalance: "उपलब्ध बैलेंस",
    addMoney: "पैसे जोड़ें", withdraw: "निकासी", history: "इतिहास",
    transactions: "लेनदेन",
    notificationsTitle: "सूचनाएं",
    markAllRead: "सभी पढ़ें",
    myProfile: "मेरी प्रोफ़ाइल",
    editProfile: "✏️ प्रोफ़ाइल संपादित करें",
    changePassword: "🔒 पासवर्ड बदलें",
    verifyPhone: "📱 फोन वेरीफाई करें",
    notifSettings: "🔔 सूचना सेटिंग्स",
    darkMode: "डार्क मोड",
    language: "भाषा",
    adminDashboard: "एडमिन डैशबोर्ड",
    adminSubtitle: "प्लेटफॉर्म का पूरा अवलोकन",
    totalUsers: "कुल उपयोगकर्ता", activeCommitteesLabel: "सक्रिय कमेटियां",
    todayRevenue: "आज का राजस्व", pendingVerifications: "लंबित सत्यापन",
    dailyRevenue: "दैनिक राजस्व (PKR)",
    paymentMethods: "भुगतान तरीके",
    recentUsers: "हाल के उपयोगकर्ता",
    searchDots: "🔍 खोजें...",
    userCol: "उपयोगकर्ता", phoneCol: "फोन", committeesCol: "कमेटियां",
    statusCol: "स्थिति", actionsCol: "क्रियाएं",
    viewBtn: "देखें", suspendBtn: "निलंबित करें",
    userDashboard: "← यूजर डैशबोर्ड",
    allOperational: "🟢 सभी सिस्टम सक्रिय",
    act1: "Kamran Ali ने किस्त जमा की",
    act2: "Office Circle में नया सदस्य जुड़ा",
    act3: "आपकी बारी #3 अगले महीने है",
    act4: "एडमिन ने भुगतान सत्यापित किया",
    act5: "Zara ने भुगतान प्रमाण अपलोड किया",
    notif1Title: "कल भुगतान देय", notif1Body: "Office Savings Circle - Rs 5,000 देय 25 मई",
    notif2Title: "बारी कन्फर्म!", notif2Body: "Office Circle में आपकी बारी #3 कन्फर्म हुई",
    notif3Title: "नया सदस्य जुड़ा", notif3Body: "Ali Hassan Family Gold Committee में जुड़े",
    notif4Title: "भुगतान प्राप्त", notif4Body: "Rs 10,000 आपके वॉलेट में जमा हुए",
    active: "सक्रिय", pending: "लंबित", suspended: "निलंबित",
    online: "ऑनलाइन", offline: "ऑफलाइन",
    turnLabel: "बारी",
  },
  ur: {
    home: "ہوم", about: "تعارف", contact: "رابطہ",
    login: "لاگ ان", register: "رجسٹر", logout: "لاگ آؤٹ",
    dashboard: "ڈیش بورڈ", explore: "دریافت کریں", create: "بنائیں", wallet: "والٹ", admin: "ایڈمن",
    profile: "پروفائل", notifications: "اطلاعات",
    tagline: "پاکستان کا #1 ڈیجیٹل کمیٹی پلیٹ فارم",
    heroSubtitle: "پاکستان کا سمارٹ ڈیجیٹل کمیٹی پلیٹ فارم",
    heroDesc: "اپنی کمیٹی کو ڈیجیٹلی مینیج کریں — محفوظ ادائیگی، ریئل ٹائم ٹریکنگ اور لائیو ممبر انٹریکشن کے ساتھ۔",
    startCommittee: "🚀 کمیٹی شروع کریں",
    exploreCommittees: "🔍 کمیٹیاں دریافت کریں",
    freeReg: "✅ مفت رجسٹریشن",
    bankSecurity: "🛡️ بینک گریڈ سیکیورٹی",
    realtime: "⚡ ریئل ٹائم اپڈیٹس",
    activeUsers: "فعال صارفین", committeesCreated: "بنائی گئی کمیٹیاں",
    paymentsProcessed: "ادائیگیاں", totalSaved: "کل بچت",
    whyTitle: "سمارٹ کمیٹی کیوں؟",
    whySubtitle: "ایسے فیچرز جو کسی اور پلیٹ فارم پر نہیں ملیں گے",
    howTitle: "یہ کیسے کام کرتا ہے؟",
    step1Title: "اکاؤنٹ بنائیں", step1Desc: "فون نمبر سے مفت رجسٹریشن کریں",
    step2Title: "کمیٹی جوائن کریں", step2Desc: "نئی کمیٹی شروع کریں یا موجودہ میں شامل ہوں",
    step3Title: "قسط جمع کریں", step3Desc: "JazzCash، Easypaisa یا بینک ٹرانسفر سے ادائیگی کریں",
    step4Title: "رقم حاصل کریں", step4Desc: "اپنی باری پر پوری کمیٹی رقم حاصل کریں",
    testiTitle: "ہمارے صارفین کیا کہتے ہیں",
    faqTitle: "اکثر پوچھے جانے والے سوالات",
    ctaTitle: "آج ہی شروع کریں!",
    ctaDesc: "50,000+ پاکستانی Smart Cametti پر اپنی کمیٹیاں مینیج کر رہے ہیں",
    freeAccount: "🚀 مفت اکاؤنٹ بنائیں",
    platform: "پلیٹ فارم", support: "سپورٹ", legal: "قانونی",
    footerLinks1: ["ڈیش بورڈ", "کمیٹی بنائیں", "دریافت کریں", "والٹ"],
    footerLinks2: ["FAQ", "ہم سے رابطہ کریں", "ہیلپ سینٹر", "سیکیورٹی"],
    footerLinks3: ["رازداری کی پالیسی", "شرائط و ضوابط", "کوکی پالیسی", "ہمارے بارے میں"],
    footerCopy: "© 2025 Smart Cametti۔ تمام حقوق محفوظ ہیں۔ ❤️ پاکستان میں بنایا گیا",
    loginTitle: "خوش آمدید! 👋", registerTitle: "اکاؤنٹ بنائیں 🚀",
    loginSubtitle: "اپنے اکاؤنٹ میں لاگ ان کریں", registerSubtitle: "نیا اکاؤنٹ بنائیں",
    fullName: "پورا نام", phoneNumber: "فون نمبر", password: "پاس ورڈ",
    forgotPass: "پاس ورڈ بھول گئے؟",
    loginBtn: "🔓 لاگ ان کریں", sendOtp: "📱 OTP بھیجیں",
    or: "یا", googleLogin: "🔵 Google سے لاگ ان",
    noAccount: "اکاؤنٹ نہیں ہے؟ ", haveAccount: "پہلے سے اکاؤنٹ ہے؟ ",
    registerLink: "رجسٹر کریں", loginLink: "لاگ ان کریں",
    otpTitle: "OTP تصدیق کریں", otpDesc: "6 ہندسوں کا کوڈ بھیجا گیا",
    verifyBtn: "✅ تصدیق کریں", resendOtp: "OTP دوبارہ بھیجیں",
    waiting: "⏳ انتظار کریں...", verifying: "⏳ تصدیق ہو رہی ہے...",
    greeting: "السلام و علیکم 👋",
    walletBalance: "کل والٹ بیلنس", activeCommittees: "فعال کمیٹیاں",
    walletBtn: "💰 والٹ", sendBtn: "📤 بھیجیں", receiveBtn: "📥 وصول کریں",
    quickActions: "فوری اقدامات",
    myCommittees: "میری کمیٹیاں", seeAll: "سب دیکھیں →",
    recentActivity: "حالیہ سرگرمیاں",
    exploreTitle: "کمیٹیاں دریافت کریں",
    exploreSubtitle: "پبلک کمیٹیاں جوائن کریں یا نئی بنائیں",
    searchPlaceholder: "🔍 کمیٹی تلاش کریں...",
    createBtn: "+ بنائیں", all: "سب", open: "اوپن", private: "پرائیویٹ",
    monthly: "ماہانہ", members: "ممبران", totalPool: "کل پول",
    details: "تفصیل", joinBtn: "جوائن کریں",
    createTitle: "نئی کمیٹی بنائیں",
    stepOf: "مرحلہ", of: "کا",
    basicDetails: "📋 بنیادی تفصیلات",
    committeeName: "کمیٹی کا نام *",
    committeeNamePlaceholder: "Family Gold Committee",
    monthlyAmount: "ماہانہ رقم (Rs) *",
    membersCount: "ممبران کی تعداد *",
    totalPoolCalc: "کل پول:", totalPoolDesc: "کمیٹی کی کل رقم",
    settingsTitle: "⚙️ ترتیبات",
    committeeType: "کمیٹی کی قسم", public: "پبلک", publicDesc: "کوئی بھی شامل ہو سکتا ہے",
    privateTitle: "پرائیویٹ", privateDesc: "دعوت سے شامل ہوں",
    startDate: "شروع ہونے کی تاریخ", turnSystem: "باری ڈرا سسٹم",
    autoDraw: "خودکار ڈرا", manual: "دستی",
    rulesTitle: "📜 اصول اور دعوت",
    rulesLabel: "کمیٹی کے اصول (اختیاری)", rulesPlaceholder: "یہاں کمیٹی کے اصول لکھیں...",
    inviteTitle: "📤 دعوت لنک شیئر کریں",
    copy: "کاپی", whatsapp: "📱 WhatsApp", shareQr: "📤 QR شیئر کریں",
    back: "← واپس", next: "اگلا مرحلہ →", createCommittee: "🚀 کمیٹی بنائیں!",
    created: "کمیٹی بن گئی!", createdDesc: "ڈیش بورڈ پر جا رہے ہیں...",
    backBtn: "← واپس",
    myTurn: "میری باری", overview: "📊 جائزہ", membersTab: "👥 ممبران",
    paymentsTab: "💳 ادائیگیاں", chatTab: "💬 چیٹ", adminTab: "⚙️ ایڈمن",
    turnProgress: "باری کی پیشرفت", currentTurn: "موجودہ باری:", totalMonths: "کل:", months: "مہینے",
    completed: "مکمل", myTurnLabel: "میری باری", upcoming: "آنے والی",
    nextDueDate: "اگلی تاریخ واجب الادا", due: "واجب الادا",
    payNow: "💳 ابھی ادا کریں", paid: "✅ ادا ہو گیا",
    committeeAdmin: "کمیٹی ایڈمن", adminDesc: "تمام کمیٹی فیصلوں کا مکمل اختیار ہے",
    transferAdminBtn: "👑 ایڈمن حقوق منتقل کریں",
    removeMemberTitle: "ممبر ہٹائیں؟", removeMemberDesc: "کو اس کمیٹی سے ہٹا دیا جائے گا۔",
    cancel: "منسوخ", remove: "ہٹائیں",
    transferAdminTitle: "ایڈمن حقوق منتقل کریں",
    transferAdminDesc: "نیا ایڈمن منتخب کریں۔ آپ عام ممبر بن جائیں گے۔",
    transfer: "منتقل کریں",
    paymentVerification: "💳 ادائیگی کی تصدیق",
    verify: "✅ تصدیق کریں", reject: "✕ مسترد کریں",
    announcement: "📢 کمیٹی اعلان",
    announcementPlaceholder: "تمام ممبران کو پیغام بھیجیں...",
    sendBtn2: "📢 بھیجیں",
    memberManagement: "👥 ممبر مینجمنٹ",
    dangerZone: "⚠️ خطرناک زون",
    lockCommittee: "🔒 کمیٹی لاک کریں (نئی شمولیت بند)",
    dissolveCommittee: "❌ کمیٹی تحلیل کریں",
    messagePlaceholder: "پیغام لکھیں...",
    sendMessage: "بھیجیں",
    myWallet: "میرا والٹ",
    availableBalance: "دستیاب بیلنس",
    addMoney: "رقم شامل کریں", withdraw: "نکلوائیں", history: "تاریخ",
    transactions: "لین دین",
    notificationsTitle: "اطلاعات",
    markAllRead: "سب پڑھ لیا",
    myProfile: "میری پروفائل",
    editProfile: "✏️ پروفائل تبدیل کریں",
    changePassword: "🔒 پاس ورڈ تبدیل کریں",
    verifyPhone: "📱 فون تصدیق کریں",
    notifSettings: "🔔 اطلاع کی ترتیبات",
    darkMode: "ڈارک موڈ",
    language: "زبان",
    adminDashboard: "ایڈمن ڈیش بورڈ",
    adminSubtitle: "پلیٹ فارم کا مکمل جائزہ",
    totalUsers: "کل صارفین", activeCommitteesLabel: "فعال کمیٹیاں",
    todayRevenue: "آج کی آمدنی", pendingVerifications: "زیر التوا تصدیقیں",
    dailyRevenue: "روزانہ آمدنی (PKR)",
    paymentMethods: "ادائیگی کے طریقے",
    recentUsers: "حالیہ صارفین",
    searchDots: "🔍 تلاش...",
    userCol: "صارف", phoneCol: "فون", committeesCol: "کمیٹیاں",
    statusCol: "حیثیت", actionsCol: "اقدامات",
    viewBtn: "دیکھیں", suspendBtn: "معطل کریں",
    userDashboard: "← یوزر ڈیش بورڈ",
    allOperational: "🟢 تمام سسٹم فعال",
    act1: "Kamran Ali نے قسط جمع کی",
    act2: "Office Circle میں نیا ممبر شامل ہوا",
    act3: "آپ کی باری #3 اگلے مہینے ہے",
    act4: "ایڈمن نے ادائیگی تصدیق کی",
    act5: "Zara نے ادائیگی کا ثبوت اپلوڈ کیا",
    notif1Title: "کل ادائیگی واجب", notif1Body: "Office Savings Circle - Rs 5,000 واجب 25 مئی",
    notif2Title: "باری تصدیق ہوئی!", notif2Body: "Office Circle میں آپ کی باری #3 تصدیق ہوئی",
    notif3Title: "نیا ممبر شامل ہوا", notif3Body: "Ali Hassan Family Gold Committee میں شامل ہوا",
    notif4Title: "ادائیگی موصول", notif4Body: "Rs 10,000 آپ کے والٹ میں جمع ہوئے",
    active: "فعال", pending: "زیر التوا", suspended: "معطل",
    online: "آن لائن", offline: "آف لائن",
    turnLabel: "باری",
  },
};

// ── Mock Data ─────────────────────────────────────────────────────────────────
const MOCK_USER = {
  name: "Ahmed Raza",
  phone: "+92 301 1234567",
  avatar: "AR",
  balance: 125000,
  joinDate: "Jan 2024",
};

const MOCK_COMMITTEES = [
  { id: 1, name: "Family Gold Committee", amount: 10000, members: 12, maxMembers: 12, myTurn: 7, currentTurn: 4, status: "active", type: "private", paid: true, color: "#10b981", emoji: "👨‍👩‍👧", nextDue: "Jun 1, 2025", totalPool: 120000 },
  { id: 2, name: "Office Savings Circle", amount: 5000, members: 8, maxMembers: 10, myTurn: 3, currentTurn: 2, status: "active", type: "public", paid: false, color: "#3b82f6", emoji: "💼", nextDue: "May 25, 2025", totalPool: 50000 },
  { id: 3, name: "Neighborhood Fund", amount: 15000, members: 6, maxMembers: 8, myTurn: 1, currentTurn: 1, status: "active", type: "private", paid: true, color: "#f59e0b", emoji: "🏘️", nextDue: "Jun 5, 2025", totalPool: 120000 },
];

const MOCK_MEMBERS = [
  { id: 1, name: "Ahmed Raza", turn: 7, paid: true, avatar: "AR", status: "online", isAdmin: true },
  { id: 2, name: "Sara Khan", turn: 1, paid: true, avatar: "SK", status: "online", isAdmin: false },
  { id: 3, name: "Kamran Ali", turn: 2, paid: true, avatar: "KA", status: "offline", isAdmin: false },
  { id: 4, name: "Zara Malik", turn: 3, paid: false, avatar: "ZM", status: "online", isAdmin: false },
  { id: 5, name: "Hassan Raza", turn: 4, paid: false, avatar: "HR", status: "offline", isAdmin: false },
  { id: 6, name: "Fatima Noor", turn: 5, paid: true, avatar: "FN", status: "online", isAdmin: false },
];

const CURRENT_USER_ID = 1;

const MOCK_CHAT = [
  { id: 1, sender: "Sara Khan", avatar: "SK", msg: "Assalam o Alaikum everyone! 👋", time: "10:30 AM", mine: false },
  { id: 2, sender: "Me", avatar: "AR", msg: "Walaikum Assalam! Payment done for today 💚", time: "10:32 AM", mine: true },
  { id: 3, sender: "Kamran Ali", avatar: "KA", msg: "Great! I'll do mine tomorrow 🙏", time: "10:35 AM", mine: false },
  { id: 4, sender: "Zara Malik", avatar: "ZM", msg: "Please share the turn schedule", time: "10:40 AM", mine: false },
];

const FAQS = [
  { q: "What is Smart Cametti?", a: "Smart Cametti is Pakistan's leading digital committee (kameti) management platform. It allows you to create, join, and manage committees online with complete transparency and security." },
  { q: "How does the payment system work?", a: "You can pay via JazzCash, Easypaisa, or bank transfer. Simply upload your payment screenshot and our system verifies it automatically." },
  { q: "Is my money safe?", a: "Absolutely! We use bank-grade encryption, AI fraud detection, and verified member systems to ensure your funds are completely safe." },
  { q: "How is the turn determined?", a: "Turns can be set manually by the committee organizer or through our fair auto-draw system that randomly assigns turns." },
  { q: "Can I join multiple committees?", a: "Yes! You can create or join as many committees as you wish, all managed from your single dashboard." },
];

const FEATURES = [
  { icon: "🛡️", title: "Bank-Grade Security", desc: "AI fraud detection & encrypted transactions" },
  { icon: "⚡", title: "Real-time Tracking", desc: "Live payment & member status updates" },
  { icon: "📱", title: "Mobile First", desc: "Works perfectly on any device, anywhere" },
  { icon: "🤖", title: "Smart Reminders", desc: "Auto notifications so you never miss a due date" },
  { icon: "💬", title: "Group Chat", desc: "Talk to all committee members in real-time" },
  { icon: "📊", title: "Analytics Dashboard", desc: "Beautiful charts for all your committee data" },
];

const STATS = [
  { labelKey: "activeUsers", value: 50000, suffix: "+" },
  { labelKey: "committeesCreated", value: 12000, suffix: "+" },
  { labelKey: "paymentsProcessed", value: 2500000, suffix: "+" },
  { labelKey: "totalSaved", value: 8500000000, suffix: "+" },
];

const TESTIMONIALS = [
  { name: "Nadia Hussain", city: "Karachi", rating: 5, text: "Smart Cametti has changed my life! I can safely manage my committee from home.", avatar: "NH" },
  { name: "Tariq Mehmood", city: "Lahore", rating: 5, text: "A very trustworthy platform. My entire committee group uses it. Highly recommended!", avatar: "TM" },
  { name: "Aisha Siddiqui", city: "Islamabad", rating: 5, text: "The payment tracking feature is amazing. No payment is ever missed now.", avatar: "AS" },
];

// ── Language Switcher Button ──────────────────────────────────────────────────
function LangSwitcher({ position = "nav" }) {
  const { lang, setLang } = useLang();
  const langs = [
    { code: "en", label: "EN" },
    { code: "hi", label: "हि" },
    { code: "ur", label: "اردو" },
  ];
  return (
    <div className={cn("flex items-center gap-1 bg-white/10 rounded-xl p-1", position === "profile" && "bg-transparent p-0")}>
      {langs.map(l => (
        <button key={l.code} onClick={() => setLang(l.code)}
          className={cn("px-2.5 py-1 rounded-lg text-xs font-bold transition", lang === l.code ? "bg-emerald-500 text-white" : "text-gray-400 hover:text-white")}>
          {l.label}
        </button>
      ))}
    </div>
  );
}

// ── Components ────────────────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = value / 80;
        const timer = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 20);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  const fmt = (n) => n >= 1000000000 ? (n / 1000000000).toFixed(1) + "B" : n >= 1000000 ? (n / 1000000).toFixed(1) + "M" : n >= 1000 ? (n / 1000).toFixed(0) + "K" : n.toString();
  return <span ref={ref}>{fmt(count)}{suffix}</span>;
}

function Avatar({ initials, size = "md", color = "#10b981", status }) {
  const sizes = { sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm", lg: "w-14 h-14 text-base", xl: "w-20 h-20 text-xl" };
  return (
    <div className="relative inline-block">
      <div className={cn(sizes[size], "rounded-full flex items-center justify-center font-bold text-white flex-shrink-0")} style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
        {initials}
      </div>
      {status && <div className={cn("absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#030d03]", status === "online" ? "bg-emerald-400" : "bg-gray-500")} />}
    </div>
  );
}

function Badge({ children, color = "emerald" }) {
  const colors = { emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", blue: "bg-blue-500/20 text-blue-400 border-blue-500/30", amber: "bg-amber-500/20 text-amber-400 border-amber-500/30", red: "bg-red-500/20 text-red-400 border-red-500/30", gray: "bg-gray-500/20 text-gray-400 border-gray-500/30" };
  return <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium border", colors[color])}>{children}</span>;
}

function Card({ children, className = "", glass = false, hover = false }) {
  return (
    <div className={cn("rounded-2xl border transition-all duration-300", glass ? "bg-white/5 backdrop-blur-xl border-white/10" : "bg-[#0d1f0d] border-[#153215]", hover && "hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-0.5", className)}>
      {children}
    </div>
  );
}

function Button({ children, variant = "primary", size = "md", onClick, className = "", disabled = false }) {
  const variants = { primary: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-emerald-500/25", secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20", outline: "border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10", ghost: "text-gray-400 hover:text-white hover:bg-white/10", danger: "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30" };
  const sizes = { sm: "px-3 py-1.5 text-xs", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  return (
    <button onClick={onClick} disabled={disabled} className={cn("rounded-xl font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed", variants[variant], sizes[size], className)}>
      {children}
    </button>
  );
}

function ProgressBar({ value, max, color = "#10b981" }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}cc)` }} />
    </div>
  );
}

// ── PAGES ─────────────────────────────────────────────────────────────────────
function HomePage({ onNavigate }) {
  const { t } = useLang();
  const [faqOpen, setFaqOpen] = useState(null);
  const [testIdx, setTestIdx] = useState(0);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050f05] via-[#071407] to-[#020802]" />
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute rounded-full opacity-10 animate-pulse"
              style={{ width: `${200 + i * 80}px`, height: `${200 + i * 80}px`, background: `radial-gradient(circle, #10b981, transparent)`, top: `${10 + i * 12}%`, left: `${5 + i * 15}%`, animationDelay: `${i * 0.7}s`, animationDuration: `${3 + i}s` }} />
          ))}
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> {t("tagline")}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Smart<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300"> Cametti</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">{t("heroSubtitle")}</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">{t("heroDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("register")} className="text-base">{t("startCommittee")}</Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate("explore")} className="text-base">{t("exploreCommittees")}</Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">{t("freeReg")}</span>
            <span className="flex items-center gap-2">{t("bankSecurity")}</span>
            <span className="flex items-center gap-2">{t("realtime")}</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-4 bg-[#071407]/80">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-emerald-400">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-gray-400 text-sm mt-1">{t(s.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#050f05] to-[#071407]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4">{t("whyTitle")}</h2>
            <p className="text-gray-400 text-lg">{t("whySubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <Card key={i} hover className="p-6">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-[#050f05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4">{t("howTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "👤", titleKey: "step1Title", descKey: "step1Desc" },
              { step: "02", icon: "🏦", titleKey: "step2Title", descKey: "step2Desc" },
              { step: "03", icon: "💳", titleKey: "step3Title", descKey: "step3Desc" },
              { step: "04", icon: "💰", titleKey: "step4Title", descKey: "step4Desc" },
            ].map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-4">{s.icon}</div>
                <div className="text-emerald-400 font-black text-xs mb-2">{s.step}</div>
                <h3 className="text-white font-bold mb-2">{t(s.titleKey)}</h3>
                <p className="text-gray-400 text-sm">{t(s.descKey)}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#071407] to-[#050f05]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-14">{t("testiTitle")}</h2>
          <Card glass className="p-8">
            <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-300 text-lg italic mb-6">"{TESTIMONIALS[testIdx].text}"</p>
            <div className="flex items-center justify-center gap-3">
              <Avatar initials={TESTIMONIALS[testIdx].avatar} size="md" />
              <div className="text-left">
                <div className="text-white font-bold">{TESTIMONIALS[testIdx].name}</div>
                <div className="text-gray-400 text-sm">{TESTIMONIALS[testIdx].city}</div>
              </div>
            </div>
          </Card>
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setTestIdx(i)} className={cn("w-2.5 h-2.5 rounded-full transition-all", i === testIdx ? "bg-emerald-400 w-6" : "bg-gray-600")} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#050f05]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">{t("faqTitle")}</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Card key={i} className="overflow-hidden cursor-pointer" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                <div className="p-5 flex items-center justify-between">
                  <span className="text-white font-semibold">{f.q}</span>
                  <span className={cn("text-emerald-400 transition-transform duration-300", faqOpen === i && "rotate-180")}>▼</span>
                </div>
                {faqOpen === i && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">{f.a}</div>}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900/40 to-[#050f05]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">{t("ctaTitle")}</h2>
          <p className="text-gray-400 text-lg mb-8">{t("ctaDesc")}</p>
          <Button size="lg" onClick={() => onNavigate("register")} className="text-base px-10">{t("freeAccount")}</Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020802] py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="text-white font-black text-xl mb-4">Smart Cametti</div>
              <p className="text-gray-500 text-sm">Pakistan's trusted digital committee management platform.</p>
              <div className="flex gap-3 mt-4 text-xl">
                <span className="cursor-pointer hover:scale-110 transition">📘</span>
                <span className="cursor-pointer hover:scale-110 transition">📸</span>
                <span className="cursor-pointer hover:scale-110 transition">🐦</span>
                <span className="cursor-pointer hover:scale-110 transition">💬</span>
              </div>
            </div>
            {[
              { titleKey: "platform", linksKey: "footerLinks1" },
              { titleKey: "support", linksKey: "footerLinks2" },
              { titleKey: "legal", linksKey: "footerLinks3" },
            ].map((col, i) => (
              <div key={i}>
                <div className="text-white font-bold mb-4">{t(col.titleKey)}</div>
                <ul className="space-y-2">
                  {t(col.linksKey).map((l, j) => (
                    <li key={j}><a className="text-gray-500 text-sm hover:text-emerald-400 transition cursor-pointer">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-gray-600 text-sm">{t("footerCopy")}</div>
        </div>
      </footer>
    </div>
  );
}

// ── Registered Users Store (persists in memory for the session) ───────────────
const REGISTERED_USERS = [
  // Pre-seeded demo user so login works out of the box
  { phone: "+92 301 1234567", gmail: null, name: "Ahmed Raza", password: "demo123" },
];

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function AuthPage({ mode, onNavigate, onLogin }) {
  const { t } = useLang();

  // step: "form" → "otp" → "done"
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(0);
  const [loginMethod, setLoginMethod] = useState("phone"); // "phone" | "gmail"
  const [form, setForm] = useState({ name: "", phone: "", gmail: "", password: "" });
  const otpRefs = useRef([]);
  const isLogin = mode === "login";

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer <= 0) return;
    const id = setTimeout(() => setResendTimer(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [resendTimer]);

  const identifier = loginMethod === "gmail" ? form.gmail.trim().toLowerCase() : form.phone.trim();

  const findUser = (id, method) => {
    return REGISTERED_USERS.find(u =>
      method === "gmail"
        ? u.gmail && u.gmail === id
        : u.phone === id
    );
  };

  const handleSendOtp = () => {
    setError("");
    if (!identifier) { setError("Phone number ya Gmail darj karein"); return; }
    if (!isLogin && !form.name.trim()) { setError("Apna pura naam darj karein"); return; }
    if (!isLogin && !form.password) { setError("Password darj karein"); return; }

    if (!isLogin) {
      // Check duplicate registration
      const exists = findUser(identifier, loginMethod);
      if (exists) {
        setError(loginMethod === "gmail"
          ? "Yeh Gmail pehle se registered hai. Login karein."
          : "Yeh phone number pehle se registered hai. Login karein.");
        return;
      }
    } else {
      // Login — check user exists
      const user = findUser(identifier, loginMethod);
      if (!user) {
        setError("Account nahi mila. Pehle register karein.");
        return;
      }
      if (user.password !== form.password) {
        setError("Password galat hai.");
        return;
      }
    }

    setLoading(true);
    const otp = generateOTP();
    setSentOtp(otp);
    setOtpInputs(["", "", "", "", "", ""]);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      setResendTimer(60);
      // Show OTP in console for demo (in real app this goes via SMS/email)
      console.log(`[Smart Cametti Demo OTP] ${otp}`);
    }, 1200);
  };

  const handleGoogleAuth = () => {
    setError("");
    if (!isLogin) {
      // Google Register — check duplicate
      const fakeGmail = "user@gmail.com";
      const exists = REGISTERED_USERS.find(u => u.gmail === fakeGmail);
      if (exists) {
        setError("Yeh Gmail pehle se registered hai. Login karein.");
        return;
      }
      REGISTERED_USERS.push({ phone: null, gmail: fakeGmail, name: "Google User", password: "" });
    }
    onLogin();
    onNavigate("dashboard");
  };

  const handleOtpChange = (val, idx) => {
    const digits = val.replace(/\D/g, "").slice(0, 1);
    const next = [...otpInputs];
    next[idx] = digits;
    setOtpInputs(next);
    if (digits && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otpInputs[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const entered = otpInputs.join("");
    if (entered.length < 6) { setError("6-digit OTP darj karein"); return; }
    if (entered !== sentOtp) { setError("OTP galat hai. Dobara try karein."); return; }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!isLogin) {
        // Save new user
        REGISTERED_USERS.push({
          phone: loginMethod === "phone" ? identifier : null,
          gmail: loginMethod === "gmail" ? identifier : null,
          name: form.name.trim(),
          password: form.password,
        });
      }
      onLogin();
      onNavigate("dashboard");
    }, 1000);
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    const otp = generateOTP();
    setSentOtp(otp);
    setOtpInputs(["", "", "", "", "", ""]);
    setResendTimer(60);
    console.log(`[Smart Cametti Demo OTP - Resent] ${otp}`);
  };

  // OTP Screen
  if (step === "otp") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050f05] via-[#071407] to-[#020802]" />
        <div className="relative w-full max-w-md">
          <div className="text-center mb-8">
            <div className="text-4xl font-black text-white mb-2">Smart <span className="text-emerald-400">Cametti</span></div>
          </div>
          <Card glass className="p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-4">
                {loginMethod === "gmail" ? "📧" : "📱"}
              </div>
              <h2 className="text-white font-bold text-xl mb-2">{t("otpTitle")}</h2>
              <p className="text-gray-400 text-sm">{t("otpDesc")}</p>
              <p className="text-emerald-400 font-semibold text-sm mt-1">{identifier}</p>
              {/* Demo helper */}
              <div className="mt-3 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-2 text-amber-400 text-xs">
                🔔 Demo mode: OTP is <span className="font-black text-amber-300">{sentOtp}</span>
              </div>
            </div>
            <div className="flex gap-2 justify-center mb-6">
              {otpInputs.map((val, i) => (
                <input
                  key={i}
                  ref={el => otpRefs.current[i] = el}
                  value={val}
                  maxLength={1}
                  inputMode="numeric"
                  onChange={e => handleOtpChange(e.target.value, i)}
                  onKeyDown={e => handleOtpKeyDown(e, i)}
                  className="w-11 h-13 rounded-xl bg-white/10 border border-white/20 text-white text-center text-xl font-bold focus:border-emerald-500 outline-none transition"
                  style={{ height: "52px" }}
                />
              ))}
            </div>
            {error && <p className="text-red-400 text-sm text-center mb-4">⚠️ {error}</p>}
            <Button className="w-full" onClick={handleVerifyOtp} disabled={loading}>
              {loading ? t("verifying") : t("verifyBtn")}
            </Button>
            <div className="text-center mt-4">
              {resendTimer > 0
                ? <p className="text-gray-500 text-sm">OTP dobara bhejein: <span className="text-emerald-400 font-bold">{resendTimer}s</span></p>
                : <button onClick={handleResend} className="text-emerald-400 text-sm hover:underline">{t("resendOtp")}</button>
              }
            </div>
            <button onClick={() => { setStep("form"); setError(""); }} className="w-full text-center text-gray-500 text-sm mt-3 hover:text-gray-300 transition">
              ← Wapas jayen
            </button>
          </Card>
        </div>
      </div>
    );
  }

  // Main Form Screen
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050f05] via-[#071407] to-[#020802]" />
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl font-black text-white mb-2">Smart <span className="text-emerald-400">Cametti</span></div>
          <p className="text-gray-400">{isLogin ? t("loginSubtitle") : t("registerSubtitle")}</p>
        </div>
        <Card glass className="p-8">
          <h2 className="text-white font-bold text-xl mb-5">{isLogin ? t("loginTitle") : t("registerTitle")}</h2>

          {/* Login Method Toggle */}
          <div className="flex gap-2 mb-5 bg-white/5 rounded-xl p-1">
            <button
              onClick={() => { setLoginMethod("phone"); setError(""); }}
              className={cn("flex-1 py-2 rounded-lg text-sm font-semibold transition", loginMethod === "phone" ? "bg-emerald-500 text-white" : "text-gray-400 hover:text-white")}
            >
              📱 Phone
            </button>
            <button
              onClick={() => { setLoginMethod("gmail"); setError(""); }}
              className={cn("flex-1 py-2 rounded-lg text-sm font-semibold transition", loginMethod === "gmail" ? "bg-emerald-500 text-white" : "text-gray-400 hover:text-white")}
            >
              📧 Gmail
            </button>
          </div>

          <div className="space-y-4">
            {!isLogin && (
              <div>
                <label className="text-gray-400 text-sm mb-1 block">{t("fullName")}</label>
                <input
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Ahmed Raza"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none"
                />
              </div>
            )}
            {loginMethod === "phone" ? (
              <div>
                <label className="text-gray-400 text-sm mb-1 block">{t("phoneNumber")}</label>
                <input
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+92 300 1234567"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none"
                />
              </div>
            ) : (
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Gmail Address</label>
                <input
                  value={form.gmail}
                  onChange={e => setForm({ ...form, gmail: e.target.value })}
                  placeholder="aapka@gmail.com"
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none"
                />
              </div>
            )}
            <div>
              <label className="text-gray-400 text-sm mb-1 block">{t("password")}</label>
              <input
                type="password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          {isLogin && (
            <div className="text-right mt-2">
              <span className="text-emerald-400 text-sm cursor-pointer hover:underline">{t("forgotPass")}</span>
            </div>
          )}

          {error && <p className="text-red-400 text-sm mt-3">⚠️ {error}</p>}

          <Button className="w-full mt-5" onClick={handleSendOtp} disabled={loading}>
            {loading ? t("waiting") : isLogin ? t("loginBtn") : t("sendOtp")}
          </Button>

          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-500 text-sm">{t("or")}</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <Button variant="secondary" className="w-full" onClick={handleGoogleAuth}>
            {t("googleLogin")}
          </Button>

          {/* Demo hint */}
          {isLogin && (
            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-500 text-xs text-center">
              Demo login: Phone <span className="text-gray-300">+92 301 1234567</span> · Password <span className="text-gray-300">demo123</span>
            </div>
          )}

          <p className="text-center text-gray-400 text-sm mt-5">
            {isLogin ? t("noAccount") : t("haveAccount")}
            <span className="text-emerald-400 cursor-pointer hover:underline" onClick={() => { onNavigate(isLogin ? "register" : "login"); setError(""); }}>
              {isLogin ? t("registerLink") : t("loginLink")}
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
}

function DashboardPage({ onNavigate }) {
  const { t } = useLang();

  const activities = [
    { id: 1, textKey: "act1", time: "2 min ago", emoji: "✅" },
    { id: 2, textKey: "act2", time: "15 min ago", emoji: "👤" },
    { id: 3, textKey: "act3", time: "1 hr ago", emoji: "🔔" },
    { id: 4, textKey: "act4", time: "3 hrs ago", emoji: "🛡️" },
    { id: 5, textKey: "act5", time: "5 hrs ago", emoji: "📎" },
  ];

  return (
    <div className="min-h-screen bg-[#050f05] p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-400 text-sm">{t("greeting")}</p>
            <h1 className="text-white font-black text-2xl">{MOCK_USER.name}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate("notifications")} className="relative w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-300 hover:bg-white/20 transition">
              🔔<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">2</span>
            </button>
            <div onClick={() => onNavigate("profile")} className="cursor-pointer"><Avatar initials={MOCK_USER.avatar} size="md" status="online" /></div>
          </div>
        </div>

        <div className="rounded-3xl p-6 mb-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #065f46, #10b981, #0f766e)" }}>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <p className="text-emerald-100 text-sm mb-1">{t("walletBalance")}</p>
          <div className="text-white font-black text-4xl mb-1">Rs {MOCK_USER.balance.toLocaleString()}</div>
          <p className="text-emerald-200 text-sm">3 {t("activeCommittees")}</p>
          <div className="flex gap-3 mt-5">
            <button onClick={() => onNavigate("wallet")} className="flex-1 bg-white/20 rounded-xl py-2.5 text-white text-sm font-semibold hover:bg-white/30 transition">{t("walletBtn")}</button>
            <button className="flex-1 bg-white/20 rounded-xl py-2.5 text-white text-sm font-semibold hover:bg-white/30 transition">{t("sendBtn")}</button>
            <button className="flex-1 bg-white/20 rounded-xl py-2.5 text-white text-sm font-semibold hover:bg-white/30 transition">{t("receiveBtn")}</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { icon: "➕", labelKey: "create", action: "create" },
            { icon: "🔍", labelKey: "explore", action: "explore" },
            { icon: "💬", label: "Chat", action: "chat" },
            { icon: "📊", label: "Analytics", action: "admin" },
          ].map((a, i) => (
            <button key={i} onClick={() => onNavigate(a.action)} className="bg-[#0d1f0d] border border-[#153215] rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-emerald-500/40 transition text-center">
              <span className="text-2xl">{a.icon}</span>
              <span className="text-gray-400 text-xs font-medium">{a.labelKey ? t(a.labelKey) : a.label}</span>
            </button>
          ))}
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-lg">{t("myCommittees")}</h2>
            <button onClick={() => onNavigate("explore")} className="text-emerald-400 text-sm hover:underline">{t("seeAll")}</button>
          </div>
          <div className="space-y-3">
            {MOCK_COMMITTEES.map(c => (
              <Card key={c.id} hover className="p-5 cursor-pointer" onClick={() => onNavigate("committee-detail")}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: `${c.color}20` }}>{c.emoji}</div>
                    <div>
                      <div className="text-white font-bold">{c.name}</div>
                      <div className="text-gray-400 text-xs">Rs {c.amount.toLocaleString()} / month</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge color={c.paid ? "emerald" : "red"}>{c.paid ? t("paid") : t("pending")}</Badge>
                    <div className="text-gray-400 text-xs mt-1">{t("turnLabel")} {c.currentTurn}/{c.members}</div>
                  </div>
                </div>
                <ProgressBar value={c.currentTurn} max={c.members} color={c.color} />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>{t("myTurnLabel")}: #{c.myTurn}</span>
                  <span>Due: {c.nextDue}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-4">{t("recentActivity")}</h2>
          <Card>
            <div className="divide-y divide-white/5">
              {activities.map(a => (
                <div key={a.id} className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl flex-shrink-0">{a.emoji}</div>
                  <div className="flex-1">
                    <div className="text-white text-sm">{t(a.textKey)}</div>
                    <div className="text-gray-500 text-xs">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ExplorePage({ onNavigate }) {
  const { t } = useLang();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const allCommittees = [
    ...MOCK_COMMITTEES,
    { id: 4, name: "Doctors Society Fund", amount: 25000, members: 5, maxMembers: 10, currentTurn: 1, status: "open", type: "public", color: "#8b5cf6", emoji: "🏥", totalPool: 250000 },
    { id: 5, name: "Teachers Community", amount: 8000, members: 7, maxMembers: 12, currentTurn: 3, status: "open", type: "public", color: "#f59e0b", emoji: "📚", totalPool: 96000 },
  ];

  const filtered = allCommittees.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "all" || (filter === "open" && c.members < c.maxMembers) || (filter === "private" && c.type === "private"))
  );

  return (
    <div className="min-h-screen bg-[#050f05] p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => onNavigate("dashboard")} className="text-gray-400 hover:text-white transition text-xl">←</button>
          <div>
            <h1 className="text-white font-black text-2xl">{t("exploreTitle")}</h1>
            <p className="text-gray-400 text-sm">{t("exploreSubtitle")}</p>
          </div>
        </div>
        <div className="flex gap-3 mb-4">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t("searchPlaceholder")} className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none" />
          <Button onClick={() => onNavigate("create")}>{t("createBtn")}</Button>
        </div>
        <div className="flex gap-2 mb-6">
          {["all", "open", "private"].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={cn("px-4 py-2 rounded-xl text-sm font-medium transition capitalize", filter === f ? "bg-emerald-500 text-white" : "bg-white/10 text-gray-400 hover:bg-white/20")}>
              {f === "all" ? t("all") : f === "open" ? t("open") : t("private")}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(c => (
            <Card key={c.id} hover className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: `${c.color}20` }}>{c.emoji}</div>
                  <div>
                    <div className="text-white font-bold text-lg">{c.name}</div>
                    <Badge color={c.type === "public" ? "blue" : "gray"}>{c.type === "public" ? t("public") : t("private")}</Badge>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-emerald-400 font-bold">Rs {(c.amount / 1000).toFixed(0)}K</div>
                  <div className="text-gray-500 text-xs">{t("monthly")}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-white font-bold">{c.members}/{c.maxMembers}</div>
                  <div className="text-gray-500 text-xs">{t("members")}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-amber-400 font-bold">Rs {(c.totalPool / 1000).toFixed(0)}K</div>
                  <div className="text-gray-500 text-xs">{t("totalPool")}</div>
                </div>
              </div>
              <ProgressBar value={c.members} max={c.maxMembers} color={c.color} />
              <div className="flex gap-3 mt-4">
                <Button variant="outline" className="flex-1" onClick={() => onNavigate("committee-detail")}>{t("details")}</Button>
                {c.members < c.maxMembers && <Button className="flex-1" onClick={() => onNavigate("committee-detail")}>{t("joinBtn")}</Button>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function CreateCommitteePage({ onNavigate }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", amount: "", members: "", type: "public", startDate: "", rules: "" });
  const [step, setStep] = useState(1);
  const [created, setCreated] = useState(false);

  const handleCreate = () => {
    setCreated(true);
    setTimeout(() => onNavigate("dashboard"), 2000);
  };

  if (created) return (
    <div className="min-h-screen bg-[#050f05] flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-6 animate-bounce">🎉</div>
        <h2 className="text-white font-black text-3xl mb-3">{t("created")}</h2>
        <p className="text-gray-400">{t("createdDesc")}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050f05] p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => onNavigate("dashboard")} className="text-gray-400 hover:text-white transition text-xl">←</button>
          <div>
            <h1 className="text-white font-black text-2xl">{t("createTitle")}</h1>
            <p className="text-gray-400 text-sm">{t("stepOf")} {step} {t("of")} 3</p>
          </div>
        </div>
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className={cn("flex-1 h-1.5 rounded-full transition-all", s <= step ? "bg-emerald-500" : "bg-white/10")} />
          ))}
        </div>
        <Card glass className="p-6">
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-white font-bold text-xl">{t("basicDetails")}</h2>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">{t("committeeName")}</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={t("committeeNamePlaceholder")} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">{t("monthlyAmount")}</label>
                  <input value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} type="number" placeholder="10000" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">{t("membersCount")}</label>
                  <input value={form.members} onChange={e => setForm({ ...form, members: e.target.value })} type="number" placeholder="12" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none" />
                </div>
              </div>
              {form.amount && form.members && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="text-emerald-400 font-bold">{t("totalPoolCalc")} Rs {(parseInt(form.amount || 0) * parseInt(form.members || 0)).toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">{t("totalPoolDesc")}</div>
                </div>
              )}
            </div>
          )}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-white font-bold text-xl">{t("settingsTitle")}</h2>
              <div>
                <label className="text-gray-400 text-sm mb-3 block">{t("committeeType")}</label>
                <div className="grid grid-cols-2 gap-3">
                  {["public", "private"].map(tp => (
                    <button key={tp} onClick={() => setForm({ ...form, type: tp })} className={cn("p-4 rounded-xl border transition-all text-center", form.type === tp ? "border-emerald-500 bg-emerald-500/20 text-emerald-400" : "border-white/20 bg-white/5 text-gray-400 hover:border-white/40")}>
                      <div className="text-2xl mb-1">{tp === "public" ? "🌍" : "🔒"}</div>
                      <div className="font-semibold capitalize">{tp === "public" ? t("public") : t("privateTitle")}</div>
                      <div className="text-xs opacity-70 mt-1">{tp === "public" ? t("publicDesc") : t("privateDesc")}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">{t("startDate")}</label>
                <input type="date" value={form.startDate} onChange={e => setForm({ ...form, startDate: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none" />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">{t("turnSystem")}</label>
                <div className="flex gap-3">
                  {[t("autoDraw"), t("manual")].map(s => (
                    <button key={s} className="flex-1 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-300 text-sm hover:border-emerald-500/50 transition">{s}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-white font-bold text-xl">{t("rulesTitle")}</h2>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">{t("rulesLabel")}</label>
                <textarea value={form.rules} onChange={e => setForm({ ...form, rules: e.target.value })} rows={4} placeholder={t("rulesPlaceholder")} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none resize-none" />
              </div>
              <div className="bg-[#0d1f0d] rounded-xl p-4 border border-white/10">
                <div className="text-white font-semibold mb-3">{t("inviteTitle")}</div>
                <div className="flex items-center gap-2 bg-black/30 rounded-xl p-3">
                  <span className="text-gray-400 text-sm flex-1 truncate">https://smartcametti.pk/join/abc123xyz</span>
                  <button className="text-emerald-400 text-sm font-semibold hover:underline">{t("copy")}</button>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-green-500/20 border border-green-500/30 rounded-xl py-2 text-green-400 text-sm font-medium">{t("whatsapp")}</button>
                  <button className="flex-1 bg-blue-500/20 border border-blue-500/30 rounded-xl py-2 text-blue-400 text-sm font-medium">{t("shareQr")}</button>
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-3 mt-6">
            {step > 1 && <Button variant="secondary" className="flex-1" onClick={() => setStep(s => s - 1)}>{t("back")}</Button>}
            {step < 3
              ? <Button className="flex-1" onClick={() => setStep(s => s + 1)}>{t("next")}</Button>
              : <Button className="flex-1" onClick={handleCreate}>{t("createCommittee")}</Button>
            }
          </div>
        </Card>
      </div>
    </div>
  );
}

function CommitteeDetailPage({ onNavigate }) {
  const { t } = useLang();
  const [tab, setTab] = useState("overview");
  const [chatMsg, setChatMsg] = useState("");
  const [messages, setMessages] = useState(MOCK_CHAT);
  const chatRef = useRef(null);
  const [members, setMembers] = useState(MOCK_MEMBERS);
  const [showRemoveModal, setShowRemoveModal] = useState(null);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferTarget, setTransferTarget] = useState(null);
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([
    { id: 1, text: "Payment last date is June 1st. Late payment will incur Rs 500 fine.", time: "2 days ago" },
  ]);
  const c = MOCK_COMMITTEES[0];
  const amIAdmin = members.find(m => m.id === CURRENT_USER_ID)?.isAdmin ?? false;

  const sendMsg = () => {
    if (!chatMsg.trim()) return;
    setMessages(m => [...m, { id: Date.now(), sender: "Me", avatar: "AR", msg: chatMsg, time: "Now", mine: true }]);
    setChatMsg("");
    setTimeout(() => chatRef.current?.scrollTo(0, 9999), 100);
  };

  const removeMember = (memberId) => { setMembers(prev => prev.filter(m => m.id !== memberId)); setShowRemoveModal(null); };
  const transferAdmin = (memberId) => { setMembers(prev => prev.map(m => ({ ...m, isAdmin: m.id === memberId }))); setTransferTarget(null); setShowTransferModal(false); };
  const sendAnnouncement = () => {
    if (!announcement.trim()) return;
    setAnnouncements(prev => [{ id: Date.now(), text: announcement, time: "Just now" }, ...prev]);
    setAnnouncement("");
  };

  const tabs = amIAdmin ? ["overview", "members", "payments", "chat", "admin-panel"] : ["overview", "members", "payments", "chat"];

  return (
    <div className="min-h-screen bg-[#050f05]">
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #065f46, #10b981)" }}>
        <div className="p-4 md:p-6 pt-6 relative z-10">
          <button onClick={() => onNavigate("dashboard")} className="text-white/80 hover:text-white mb-4 flex items-center gap-2 transition">← {t("backBtn").replace("← ", "")}</button>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl">{c.emoji}</div>
            <div>
              <h1 className="text-white font-black text-2xl">{c.name}</h1>
              <div className="flex gap-2 mt-1 flex-wrap">
                <Badge color="emerald">{t("active")}</Badge>
                <Badge color="blue">{t("privateTitle")}</Badge>
                {amIAdmin && <Badge color="amber">👑 Admin</Badge>}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/20 rounded-2xl p-3 text-center">
              <div className="text-white font-black text-xl">Rs {(c.totalPool / 1000).toFixed(0)}K</div>
              <div className="text-white/70 text-xs">{t("totalPool")}</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-3 text-center">
              <div className="text-white font-black text-xl">{c.members}</div>
              <div className="text-white/70 text-xs">{t("members")}</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-3 text-center">
              <div className="text-white font-black text-xl">#{c.myTurn}</div>
              <div className="text-white/70 text-xs">{t("myTurn")}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto border-b border-white/10 px-4 bg-[#071407]">
        {tabs.map(tb => (
          <button key={tb} onClick={() => setTab(tb)} className={cn("px-5 py-4 text-sm font-medium whitespace-nowrap transition border-b-2 capitalize", tab === tb ? "text-emerald-400 border-emerald-400" : "text-gray-400 border-transparent hover:text-white")}>
            {tb === "overview" ? t("overview") : tb === "members" ? t("membersTab") : tb === "payments" ? t("paymentsTab") : tb === "admin-panel" ? t("adminTab") : t("chatTab")}
          </button>
        ))}
      </div>

      <div className="p-4 md:p-6 max-w-4xl mx-auto">
        {tab === "overview" && (
          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4">{t("turnProgress")}</h3>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{t("currentTurn")} #{c.currentTurn}</span>
                <span>{t("totalMonths")} {c.members} {t("months")}</span>
              </div>
              <ProgressBar value={c.currentTurn} max={c.members} />
              <div className="grid grid-cols-6 gap-1.5 mt-4">
                {[...Array(c.members)].map((_, i) => (
                  <div key={i} className={cn("h-10 rounded-xl flex items-center justify-center text-xs font-bold border",
                    i + 1 < c.currentTurn ? "bg-emerald-500/30 border-emerald-500/50 text-emerald-400" :
                      i + 1 === c.currentTurn ? "bg-emerald-500 border-emerald-500 text-white" :
                        i + 1 === c.myTurn ? "bg-blue-500/30 border-blue-500/50 text-blue-400" :
                          "bg-white/5 border-white/10 text-gray-500")}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500" /> {t("completed")}</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500/50" /> {t("myTurnLabel")}</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-white/10" /> {t("upcoming")}</span>
              </div>
            </Card>
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4">{t("nextDueDate")}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-white">{c.nextDue}</div>
                  <div className="text-gray-400 text-sm mt-1">Rs {c.amount.toLocaleString()} {t("due")}</div>
                </div>
                {!c.paid && <Button>{t("payNow")}</Button>}
                {c.paid && <Badge color="emerald">{t("paid")}</Badge>}
              </div>
            </Card>
          </div>
        )}

        {tab === "members" && (
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4">
              <span className="text-2xl">👑</span>
              <div>
                <div className="text-emerald-400 font-bold text-sm">{t("committeeAdmin")}</div>
                <div className="text-gray-300 text-sm">{members.find(m => m.isAdmin)?.name} — {t("adminDesc")}</div>
              </div>
            </div>
            {members.map(m => (
              <Card key={m.id} className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar initials={m.avatar} size="md" status={m.status} />
                    {m.isAdmin && <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center text-xs">👑</div>}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="text-white font-semibold">{m.name}</div>
                      {m.isAdmin && <Badge color="amber">Admin</Badge>}
                    </div>
                    <div className="text-gray-400 text-sm">{t("turnLabel")} #{m.turn}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge color={m.paid ? "emerald" : "red"}>{m.paid ? t("paid") : `⏳ ${t("pending")}`}</Badge>
                    {amIAdmin && !m.isAdmin && (
                      <button onClick={() => setShowRemoveModal(m)} className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/30 transition text-sm">✕</button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
            {amIAdmin && (
              <button onClick={() => setShowTransferModal(true)} className="w-full mt-2 py-3 rounded-2xl border border-dashed border-amber-500/40 text-amber-400 text-sm font-medium hover:bg-amber-500/10 transition">
                {t("transferAdminBtn")}
              </button>
            )}
            {showRemoveModal && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-[#0d1f0d] border border-red-500/30 rounded-3xl p-6 max-w-sm w-full">
                  <div className="text-4xl text-center mb-3">⚠️</div>
                  <h3 className="text-white font-bold text-lg text-center mb-2">{t("removeMemberTitle")}</h3>
                  <p className="text-gray-400 text-sm text-center mb-6"><span className="text-white font-semibold">{showRemoveModal.name}</span> {t("removeMemberDesc")}</p>
                  <div className="flex gap-3">
                    <button onClick={() => setShowRemoveModal(null)} className="flex-1 py-3 rounded-xl bg-white/10 text-gray-300 font-semibold hover:bg-white/20 transition">{t("cancel")}</button>
                    <button onClick={() => removeMember(showRemoveModal.id)} className="flex-1 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">{t("remove")}</button>
                  </div>
                </div>
              </div>
            )}
            {showTransferModal && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-[#0d1f0d] border border-amber-500/30 rounded-3xl p-6 max-w-sm w-full">
                  <div className="text-4xl text-center mb-3">👑</div>
                  <h3 className="text-white font-bold text-lg text-center mb-2">{t("transferAdminTitle")}</h3>
                  <p className="text-gray-400 text-sm text-center mb-5">{t("transferAdminDesc")}</p>
                  <div className="space-y-2 mb-5">
                    {members.filter(m => !m.isAdmin).map(m => (
                      <button key={m.id} onClick={() => setTransferTarget(m)} className={cn("w-full flex items-center gap-3 p-3 rounded-xl border transition", transferTarget?.id === m.id ? "border-amber-500 bg-amber-500/20" : "border-white/10 bg-white/5 hover:border-white/30")}>
                        <Avatar initials={m.avatar} size="sm" />
                        <span className="text-white font-medium">{m.name}</span>
                        {transferTarget?.id === m.id && <span className="ml-auto text-amber-400">✓</span>}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => { setShowTransferModal(false); setTransferTarget(null); }} className="flex-1 py-3 rounded-xl bg-white/10 text-gray-300 font-semibold hover:bg-white/20 transition">{t("cancel")}</button>
                    <button onClick={() => transferTarget && transferAdmin(transferTarget.id)} disabled={!transferTarget} className="flex-1 py-3 rounded-xl bg-amber-500 text-black font-bold hover:bg-amber-400 transition disabled:opacity-40">{t("transfer")}</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "payments" && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {[{ label: t("paid"), val: 4, color: "emerald" }, { label: t("pending"), val: 2, color: "amber" }, { label: t("totalPool"), val: `Rs ${(c.totalPool / 1000).toFixed(0)}K`, color: "blue" }].map((s, i) => (
                <Card key={i} className="p-4 text-center">
                  <div className={cn("font-black text-xl", `text-${s.color}-400`)}>{s.val}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                </Card>
              ))}
            </div>
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4">{t("paymentVerification")}</h3>
              <div className="space-y-3">
                {[{ name: "Zara Malik", amount: 10000, date: "May 12" }, { name: "Hassan Raza", amount: 5000, date: "May 13" }].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                    <Avatar initials={p.name.split(" ").map(w => w[0]).join("")} size="sm" />
                    <div className="flex-1">
                      <div className="text-white text-sm font-semibold">{p.name}</div>
                      <div className="text-gray-400 text-xs">Rs {p.amount.toLocaleString()} — {p.date}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition">{t("verify")}</button>
                      <button className="px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold hover:bg-red-500/30 transition">{t("reject")}</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {tab === "chat" && (
          <div className="flex flex-col h-[calc(100vh-280px)]">
            <div ref={chatRef} className="flex-1 overflow-y-auto space-y-4 pb-4">
              {messages.map(m => (
                <div key={m.id} className={cn("flex gap-3", m.mine ? "flex-row-reverse" : "flex-row")}>
                  <Avatar initials={m.avatar} size="sm" />
                  <div className={cn("max-w-xs rounded-2xl px-4 py-3", m.mine ? "bg-emerald-500 text-white rounded-tr-sm" : "bg-[#0d1f0d] border border-[#153215] text-white rounded-tl-sm")}>
                    {!m.mine && <div className="text-emerald-400 text-xs font-bold mb-1">{m.sender}</div>}
                    <div className="text-sm">{m.msg}</div>
                    <div className={cn("text-xs mt-1", m.mine ? "text-emerald-200" : "text-gray-500")}>{m.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 pt-4 border-t border-white/10">
              <input value={chatMsg} onChange={e => setChatMsg(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMsg()} placeholder={t("messagePlaceholder")} className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 outline-none" />
              <Button onClick={sendMsg}>{t("sendMessage")}</Button>
            </div>
          </div>
        )}

        {tab === "admin-panel" && amIAdmin && (
          <div className="space-y-5">
            <div className="bg-[#0d1f0d] border border-[#153215] rounded-2xl p-5">
              <h3 className="text-white font-bold mb-4">{t("announcement")}</h3>
              <div className="flex gap-3 mb-4">
                <input value={announcement} onChange={e => setAnnouncement(e.target.value)} onKeyDown={e => e.key === "Enter" && sendAnnouncement()} placeholder={t("announcementPlaceholder")} className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:border-emerald-500 outline-none" />
                <Button size="sm" onClick={sendAnnouncement}>{t("sendBtn2")}</Button>
              </div>
              <div className="space-y-2">
                {announcements.map(a => (
                  <div key={a.id} className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                    <span className="text-lg">📢</span>
                    <div className="flex-1">
                      <div className="text-gray-200 text-sm">{a.text}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0d1f0d] border border-[#153215] rounded-2xl p-5">
              <h3 className="text-white font-bold mb-4">{t("memberManagement")}</h3>
              <div className="space-y-2">
                {members.map(m => (
                  <div key={m.id} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                    <div className="relative">
                      <Avatar initials={m.avatar} size="sm" status={m.status} />
                      {m.isAdmin && <div className="absolute -top-1 -right-1 text-xs">👑</div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-medium">{m.name}</span>
                        {m.isAdmin && <Badge color="amber">Admin</Badge>}
                      </div>
                      <div className="text-gray-500 text-xs">{t("turnLabel")} #{m.turn} · {m.paid ? t("paid") : `⏳ ${t("pending")}`}</div>
                    </div>
                    {!m.isAdmin && (
                      <div className="flex gap-1.5">
                        <button onClick={() => { setTransferTarget(m); setShowTransferModal(true); }} className="px-2.5 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium hover:bg-amber-500/30 transition">👑 Admin</button>
                        <button onClick={() => setShowRemoveModal(m)} className="px-2.5 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-500/30 transition">{t("remove")}</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
              <h3 className="text-red-400 font-bold mb-4">{t("dangerZone")}</h3>
              <div className="space-y-3">
                <button className="w-full py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20 transition">{t("lockCommittee")}</button>
                <button className="w-full py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20 transition">{t("dissolveCommittee")}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function WalletPage({ onNavigate }) {
  const { t } = useLang();
  const txns = [
    { type: "credit", desc: "Committee amount received", amount: 120000, date: "Apr 15", icon: "💰" },
    { type: "debit", desc: "Family Gold - May installment", amount: -10000, date: "May 1", icon: "💳" },
    { type: "debit", desc: "Office Circle - May installment", amount: -5000, date: "May 1", icon: "💳" },
    { type: "credit", desc: "Wallet top-up via JazzCash", amount: 20000, date: "May 3", icon: "📲" },
    { type: "debit", desc: "Neighborhood Fund - May", amount: -15000, date: "May 5", icon: "💳" },
  ];

  return (
    <div className="min-h-screen bg-[#050f05] p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => onNavigate("dashboard")} className="text-gray-400 hover:text-white transition text-xl">←</button>
          <h1 className="text-white font-black text-2xl">{t("myWallet")}</h1>
        </div>
        <div className="rounded-3xl p-7 mb-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #065f46, #10b981, #0f766e)" }}>
          <div className="text-emerald-100 text-sm mb-1">{t("availableBalance")}</div>
          <div className="text-white font-black text-5xl mb-4">Rs {MOCK_USER.balance.toLocaleString()}</div>
          <div className="grid grid-cols-3 gap-3">
            {[{ labelKey: "addMoney", icon: "➕" }, { labelKey: "withdraw", icon: "⬇️" }, { labelKey: "history", icon: "📋" }].map((a, i) => (
              <button key={i} className="bg-white/20 rounded-xl py-2.5 text-white text-sm hover:bg-white/30 transition">
                <div>{a.icon}</div>
                <div className="text-xs mt-0.5">{t(a.labelKey)}</div>
              </button>
            ))}
          </div>
        </div>
        <h2 className="text-white font-bold text-lg mb-4">{t("transactions")}</h2>
        <div className="space-y-2">
          {txns.map((tx, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl">{tx.icon}</div>
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">{tx.desc}</div>
                  <div className="text-gray-500 text-xs">{tx.date}</div>
                </div>
                <div className={cn("font-bold text-base", tx.amount > 0 ? "text-emerald-400" : "text-red-400")}>
                  {tx.amount > 0 ? "+" : ""}Rs {Math.abs(tx.amount).toLocaleString()}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotificationsPage({ onNavigate }) {
  const { t } = useLang();
  const notifData = [
    { id: 1, titleKey: "notif1Title", bodyKey: "notif1Body", read: false, time: "1h ago" },
    { id: 2, titleKey: "notif2Title", bodyKey: "notif2Body", read: false, time: "3h ago" },
    { id: 3, titleKey: "notif3Title", bodyKey: "notif3Body", read: true, time: "1d ago" },
    { id: 4, titleKey: "notif4Title", bodyKey: "notif4Body", read: true, time: "2d ago" },
  ];
  const [notifs, setNotifs] = useState(notifData);

  return (
    <div className="min-h-screen bg-[#050f05] p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate("dashboard")} className="text-gray-400 hover:text-white transition text-xl">←</button>
            <h1 className="text-white font-black text-2xl">{t("notificationsTitle")}</h1>
          </div>
          <button className="text-emerald-400 text-sm hover:underline" onClick={() => setNotifs(n => n.map(x => ({ ...x, read: true })))}>{t("markAllRead")}</button>
        </div>
        <div className="space-y-3">
          {notifs.map(n => (
            <Card key={n.id} className={cn("p-4 cursor-pointer transition", !n.read && "border-emerald-500/30")}
              onClick={() => setNotifs(prev => prev.map(x => x.id === n.id ? { ...x, read: true } : x))}>
              <div className="flex items-start gap-4">
                <div className={cn("w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0", !n.read ? "bg-emerald-400" : "bg-transparent")} />
                <div className="flex-1">
                  <div className={cn("font-semibold text-sm", n.read ? "text-gray-400" : "text-white")}>{t(n.titleKey)}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{t(n.bodyKey)}</div>
                  <div className="text-gray-600 text-xs mt-1">{n.time}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfilePage({ onNavigate, onLogout }) {
  const { t, lang, setLang } = useLang();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-[#050f05] p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => onNavigate("dashboard")} className="text-gray-400 hover:text-white transition text-xl">←</button>
          <h1 className="text-white font-black text-2xl">{t("myProfile")}</h1>
        </div>
        <Card glass className="p-6 mb-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-black text-3xl mb-3">{MOCK_USER.avatar}</div>
            <h2 className="text-white font-black text-xl">{MOCK_USER.name}</h2>
            <p className="text-gray-400">{MOCK_USER.phone}</p>
            <p className="text-gray-500 text-sm">Member since {MOCK_USER.joinDate}</p>
            <div className="flex gap-6 mt-4">
              <div className="text-center"><div className="text-white font-bold text-xl">{MOCK_COMMITTEES.length}</div><div className="text-gray-500 text-xs">{t("myCommittees")}</div></div>
              <div className="text-center"><div className="text-emerald-400 font-bold text-xl">Rs 125K</div><div className="text-gray-500 text-xs">{t("totalSaved")}</div></div>
              <div className="text-center"><div className="text-white font-bold text-xl">12</div><div className="text-gray-500 text-xs">Payments</div></div>
            </div>
          </div>
        </Card>
        <div className="space-y-3">
          {[
            { icon: "✏️", labelKey: "editProfile" },
            { icon: "🔒", labelKey: "changePassword" },
            { icon: "📱", labelKey: "verifyPhone" },
            { icon: "🔔", labelKey: "notifSettings" },
          ].map((item, i) => (
            <Card key={i} hover className="p-4 cursor-pointer">
              <div className="flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                <span className="text-white flex-1">{t(item.labelKey)}</span>
                <span className="text-gray-500">›</span>
              </div>
            </Card>
          ))}
          <div className="flex items-center justify-between p-4 bg-[#0d1f0d] border border-[#153215] rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xl">🌙</span>
              <span className="text-white">{t("darkMode")}</span>
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className={cn("w-12 h-6 rounded-full transition-all relative", darkMode ? "bg-emerald-500" : "bg-gray-600")}>
              <div className={cn("absolute top-1 w-4 h-4 rounded-full bg-white transition-all", darkMode ? "left-7" : "left-1")} />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#0d1f0d] border border-[#153215] rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xl">🌐</span>
              <span className="text-white">{t("language")}</span>
            </div>
            <LangSwitcher position="profile" />
          </div>
          <button onClick={onLogout} className="w-full p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 font-semibold hover:bg-red-500/20 transition text-left flex items-center gap-3">
            <span className="text-xl">🚪</span> {t("logout")}
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminPage({ onNavigate }) {
  const { t } = useLang();
  const [tab, setTab] = useState("dashboard");

  const adminStats = [
    { labelKey: "totalUsers", value: "52,341", change: "+234", icon: "👥", color: "#10b981" },
    { labelKey: "activeCommitteesLabel", value: "12,089", change: "+89", icon: "🏦", color: "#3b82f6" },
    { labelKey: "todayRevenue", value: "Rs 2.3M", change: "+12%", icon: "💰", color: "#f59e0b" },
    { labelKey: "pendingVerifications", value: "143", change: "-23", icon: "⏳", color: "#ef4444" },
  ];

  return (
    <div className="min-h-screen bg-[#020802]">
      <div className="flex h-screen">
        <div className="w-56 bg-[#050f05] border-r border-white/10 flex-col hidden md:flex">
          <div className="p-5 border-b border-white/10">
            <div className="text-emerald-400 font-black text-lg">Smart Cametti</div>
            <div className="text-gray-500 text-xs">Admin Panel</div>
          </div>
          <nav className="p-4 space-y-1 flex-1">
            {[
              { icon: "📊", labelKey: "dashboard", id: "dashboard" },
              { icon: "👥", label: "Users", id: "users" },
              { icon: "🏦", label: "Committees", id: "committees" },
              { icon: "💳", label: "Payments", id: "payments" },
              { icon: "📢", label: "Announcements", id: "announce" },
              { icon: "⚙️", label: "Settings", id: "settings" },
            ].map(item => (
              <button key={item.id} onClick={() => setTab(item.id)} className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition", tab === item.id ? "bg-emerald-500/20 text-emerald-400" : "text-gray-400 hover:bg-white/10 hover:text-white")}>
                {item.icon} {item.labelKey ? t(item.labelKey) : item.label}
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-white/10">
            <button onClick={() => onNavigate("dashboard")} className="w-full text-gray-400 text-sm hover:text-white transition">{t("userDashboard")}</button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-white font-black text-2xl">{t("adminDashboard")}</h1>
              <p className="text-gray-400 text-sm">{t("adminSubtitle")}</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge color="emerald">{t("allOperational")}</Badge>
              <Avatar initials="AD" size="md" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {adminStats.map((s, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{s.icon}</span>
                  <span className={cn("text-xs font-medium", s.change.startsWith("+") ? "text-emerald-400" : "text-red-400")}>{s.change}</span>
                </div>
                <div className="text-white font-black text-xl">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1">{t(s.labelKey)}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4">{t("dailyRevenue")}</h3>
              <div className="flex items-end gap-2 h-32">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 65, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all hover:opacity-80" style={{ height: `${h}%` }} />
                ))}
              </div>
            </Card>
            <Card className="p-5">
              <h3 className="text-white font-bold mb-4">{t("paymentMethods")}</h3>
              <div className="space-y-3">
                {[{ method: "JazzCash", pct: 45, color: "#f59e0b" }, { method: "Easypaisa", pct: 35, color: "#10b981" }, { method: "Bank Transfer", pct: 20, color: "#3b82f6" }].map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-300">{m.method}</span><span className="text-white font-bold">{m.pct}%</span></div>
                    <ProgressBar value={m.pct} max={100} color={m.color} />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card>
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-white font-bold">{t("recentUsers")}</h3>
              <input placeholder={t("searchDots")} className="bg-white/10 border border-white/20 rounded-xl px-3 py-1.5 text-white text-sm placeholder-gray-500 focus:border-emerald-500 outline-none w-48" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    {[t("userCol"), t("phoneCol"), t("committeesCol"), t("statusCol"), t("actionsCol")].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-gray-400 text-xs font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Ahmed Raza", phone: "+92-301-xxx", committees: 3, status: "active" },
                    { name: "Sara Khan", phone: "+92-302-xxx", committees: 1, status: "active" },
                    { name: "Kamran Ali", phone: "+92-303-xxx", committees: 2, status: "pending" },
                    { name: "Zara Malik", phone: "+92-311-xxx", committees: 1, status: "suspended" },
                  ].map((u, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="px-4 py-3 text-white text-sm font-medium">{u.name}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm">{u.phone}</td>
                      <td className="px-4 py-3 text-white text-sm">{u.committees}</td>
                      <td className="px-4 py-3">
                        <Badge color={u.status === "active" ? "emerald" : u.status === "pending" ? "amber" : "red"}>
                          {u.status === "active" ? t("active") : u.status === "pending" ? t("pending") : t("suspended")}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button className="text-blue-400 text-xs hover:underline">{t("viewBtn")}</button>
                          <button className="text-red-400 text-xs hover:underline">{t("suspendBtn")}</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lang, setLang] = useState("en");

  const t = (key) => TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS["en"]?.[key] ?? key;

  const navigate = (p) => {
    if (!isLoggedIn && !["home", "login", "register"].includes(p)) { setPage("login"); return; }
    setPage(p);
    window.scrollTo(0, 0);
  };

  const logout = () => { setIsLoggedIn(false); setPage("home"); };
  const showNav = isLoggedIn && !["home", "login", "register"].includes(page);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-[#050f05]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {/* Top Nav */}
        {!showNav ? (
          <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050f05]/80 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <button onClick={() => setPage("home")} className="text-white font-black text-xl">
                Smart <span className="text-emerald-400">Cametti</span>
              </button>
              <div className="hidden md:flex items-center gap-6">
                <button onClick={() => setPage("home")} className="text-gray-400 hover:text-white text-sm transition">{t("home")}</button>
                <button className="text-gray-400 hover:text-white text-sm transition">{t("about")}</button>
                <button className="text-gray-400 hover:text-white text-sm transition">{t("contact")}</button>
              </div>
              <div className="flex items-center gap-3">
                <LangSwitcher />
                <Button variant="ghost" size="sm" onClick={() => setPage("login")}>{t("login")}</Button>
                <Button size="sm" onClick={() => setPage("register")}>{t("register")}</Button>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050f05]/90 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
              <button onClick={() => navigate("dashboard")} className="text-white font-black text-lg">
                Smart <span className="text-emerald-400">Cametti</span>
              </button>
              <div className="hidden md:flex items-center gap-2">
                {[
                  { labelKey: "dashboard", page: "dashboard", icon: "🏠" },
                  { labelKey: "explore", page: "explore", icon: "🔍" },
                  { labelKey: "create", page: "create", icon: "➕" },
                  { labelKey: "wallet", page: "wallet", icon: "💰" },
                  { labelKey: "admin", page: "admin", icon: "⚙️" },
                ].map(item => (
                  <button key={item.page} onClick={() => navigate(item.page)}
                    className={cn("px-3 py-2 rounded-xl text-sm font-medium transition", page === item.page ? "bg-emerald-500/20 text-emerald-400" : "text-gray-400 hover:text-white hover:bg-white/10")}>
                    {t(item.labelKey)}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <LangSwitcher />
                <button onClick={() => navigate("notifications")} className="relative w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gray-300 hover:bg-white/20 transition text-sm">
                  🔔<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">2</span>
                </button>
                <div onClick={() => navigate("profile")} className="cursor-pointer">
                  <Avatar initials={MOCK_USER.avatar} size="sm" status="online" />
                </div>
              </div>
            </div>
          </nav>
        )}

        <div className="pt-16">
          {page === "home" && <HomePage onNavigate={navigate} />}
          {page === "login" && <AuthPage mode="login" onNavigate={navigate} onLogin={() => setIsLoggedIn(true)} />}
          {page === "register" && <AuthPage mode="register" onNavigate={navigate} onLogin={() => setIsLoggedIn(true)} />}
          {page === "dashboard" && <DashboardPage onNavigate={navigate} />}
          {page === "explore" && <ExplorePage onNavigate={navigate} />}
          {page === "create" && <CreateCommitteePage onNavigate={navigate} />}
          {page === "committee-detail" && <CommitteeDetailPage onNavigate={navigate} />}
          {page === "wallet" && <WalletPage onNavigate={navigate} />}
          {page === "notifications" && <NotificationsPage onNavigate={navigate} />}
          {page === "profile" && <ProfilePage onNavigate={navigate} onLogout={logout} />}
          {page === "admin" && <AdminPage onNavigate={navigate} />}
          {page === "chat" && <CommitteeDetailPage onNavigate={navigate} />}
        </div>

        {/* Mobile Bottom Nav */}
        {showNav && (
          <div className="fixed bottom-0 left-0 right-0 bg-[#050f05]/95 backdrop-blur-xl border-t border-white/10 flex md:hidden z-50">
            {[
              { icon: "🏠", labelKey: "home", page: "dashboard" },
              { icon: "🔍", labelKey: "explore", page: "explore" },
              { icon: "➕", labelKey: "create", page: "create" },
              { icon: "💰", labelKey: "wallet", page: "wallet" },
              { icon: "👤", labelKey: "profile", page: "profile" },
            ].map(item => (
              <button key={item.page} onClick={() => navigate(item.page)}
                className={cn("flex-1 flex flex-col items-center gap-1 py-3 transition", page === item.page ? "text-emerald-400" : "text-gray-500")}>
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs">{t(item.labelKey)}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </LangContext.Provider>
  );
}
