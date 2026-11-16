/**
 * ============================================================================
 * ZATCRAFT — LABORATORIUM KARTU MATERI & CAMPURAN (SMP KELAS 7)
 * ============================================================================
 * Pengembang: Reza A. Maheda, S.Si. & Tim Sains
 * Tema: Clean Light Laboratory & Illustrated Science Cards
 * Model Belajar: Gas diatomik alami (H₂, O₂, N₂, Cl₂) sebagai molekul unsur stabil
 * ============================================================================
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. GENERATOR ILUSTRASI VEKTOR SVG (CRISP & COLORFUL)
  // ==========================================================================
  const SVG_ICONS = {
    // --- ATOM UNSUR ---
    H: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3" opacity="0.6"/>
      <circle cx="32" cy="32" r="10" fill="#e11d48"/>
      <circle cx="56" cy="32" r="4.5" fill="#38bdf8"/>
      <path d="M32 26V38M26 32H38" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

    O: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="15" fill="#e11d48"/>
      <circle cx="27" cy="27" r="4" fill="#ffffff" opacity="0.6"/>
      <circle cx="32" cy="32" r="23" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
    </svg>`,

    C: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="32,8 54,24 44,52 20,52 10,24" fill="#334155" stroke="#0f172a" stroke-width="2"/>
      <polygon points="32,14 46,26 38,46 26,46 18,26" fill="#475569"/>
      <circle cx="26" cy="22" r="2.5" fill="#94a3b8"/>
    </svg>`,

    Fe: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="22" width="36" height="20" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/>
      <polygon points="14,22 22,14 58,14 50,22" fill="#94a3b8"/>
      <polygon points="50,22 58,14 58,34 50,42" fill="#475569"/>
      <line x1="24" y1="28" x2="40" y2="28" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

    Na: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="28" height="28" rx="4" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
      <path d="M18 26L38 18L46 26L26 34Z" fill="#f1f5f9"/>
      <circle cx="42" cy="22" r="2" fill="#38bdf8"/>
    </svg>`,

    Cl: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 12H36V22L46 38C48 42 46 48 40 50H24C18 48 16 42 18 38L28 22V12Z" fill="#a3e635" fill-opacity="0.3" stroke="#65a30d" stroke-width="2"/>
      <circle cx="28" cy="40" r="3" fill="#84cc16"/>
      <circle cx="36" cy="44" r="2" fill="#84cc16"/>
      <circle cx="32" cy="34" r="2.5" fill="#84cc16"/>
    </svg>`,

    N: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="14" fill="#2563eb"/>
      <circle cx="28" cy="28" r="3.5" fill="#93c5fd"/>
      <circle cx="32" cy="32" r="22" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="3 3"/>
    </svg>`,

    Au: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,38 22,22 46,22 52,38" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
      <polygon points="22,22 32,14 56,14 46,22" fill="#fde68a"/>
      <polygon points="46,22 56,14 60,30 52,38" fill="#f59e0b"/>
      <circle cx="30" cy="28" r="1.5" fill="#ffffff"/>
    </svg>`,

    // --- MOLEKUL UNSUR GAS DIATOMIK STABIL ---
    H2: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="32" r="11" fill="#38bdf8"/>
      <circle cx="42" cy="32" r="11" fill="#0284c7"/>
      <circle cx="19" cy="28" r="2.5" fill="#ffffff"/>
      <circle cx="39" cy="28" r="2.5" fill="#ffffff"/>
      <line x1="28" y1="32" x2="36" y2="32" stroke="#ffffff" stroke-width="2.5"/>
    </svg>`,

    O2: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="23" cy="32" r="13" fill="#fb7185"/>
      <circle cx="41" cy="32" r="13" fill="#e11d48"/>
      <circle cx="20" cy="27" r="3" fill="#ffffff" opacity="0.8"/>
      <circle cx="38" cy="27" r="3" fill="#ffffff" opacity="0.8"/>
      <line x1="28" y1="30" x2="36" y2="30" stroke="#ffffff" stroke-width="2"/>
      <line x1="28" y1="34" x2="36" y2="34" stroke="#ffffff" stroke-width="2"/>
    </svg>`,

    N2: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="23" cy="32" r="13" fill="#60a5fa"/>
      <circle cx="41" cy="32" r="13" fill="#1d4ed8"/>
      <circle cx="20" cy="27" r="3" fill="#ffffff" opacity="0.8"/>
      <circle cx="38" cy="27" r="3" fill="#ffffff" opacity="0.8"/>
      <line x1="27" y1="28" x2="37" y2="28" stroke="#ffffff" stroke-width="1.8"/>
      <line x1="27" y1="32" x2="37" y2="32" stroke="#ffffff" stroke-width="1.8"/>
      <line x1="27" y1="36" x2="37" y2="36" stroke="#ffffff" stroke-width="1.8"/>
    </svg>`,

    Cl2: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="23" cy="32" r="13" fill="#bef264"/>
      <circle cx="41" cy="32" r="13" fill="#84cc16"/>
      <circle cx="20" cy="27" r="3" fill="#ffffff" opacity="0.8"/>
      <circle cx="38" cy="27" r="3" fill="#ffffff" opacity="0.8"/>
      <line x1="28" y1="32" x2="36" y2="32" stroke="#4d7c0f" stroke-width="2"/>
    </svg>`,

    // --- MOLEKUL SENYAWA ---
    H2O: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="26" r="14" fill="#0284c7"/>
      <circle cx="16" cy="42" r="9" fill="#38bdf8"/>
      <circle cx="48" cy="42" r="9" fill="#38bdf8"/>
      <circle cx="30" cy="22" r="3" fill="#ffffff" opacity="0.7"/>
    </svg>`,

    NaCl: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="20" width="18" height="18" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
      <rect x="32" y="20" width="18" height="18" rx="3" fill="#84cc16" stroke="#4d7c0f" stroke-width="1.5"/>
      <rect x="14" y="38" width="18" height="18" rx="3" fill="#84cc16" stroke="#4d7c0f" stroke-width="1.5"/>
      <rect x="32" y="38" width="18" height="18" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
      <text x="18" y="33" font-size="9" font-weight="bold" fill="#334155">Na</text>
      <text x="36" y="33" font-size="9" font-weight="bold" fill="#ffffff">Cl</text>
    </svg>`,

    CO2: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="12" fill="#334155"/>
      <circle cx="14" cy="32" r="9" fill="#ef4444"/>
      <circle cx="50" cy="32" r="9" fill="#ef4444"/>
      <line x1="22" y1="30" x2="24" y2="30" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="30" x2="42" y2="30" stroke="#94a3b8" stroke-width="2"/>
    </svg>`,

    Fe2O3: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 46L44 20" stroke="#b45309" stroke-width="7" stroke-linecap="round"/>
      <circle cx="16" cy="48" r="5" fill="#78350f"/>
      <circle cx="46" cy="18" r="4" fill="#d97706"/>
      <circle cx="36" cy="36" r="3" fill="#ea580c"/>
      <circle cx="28" cy="26" r="2.5" fill="#ea580c"/>
    </svg>`,

    CH4: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="32" y1="32" x2="32" y2="12" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="32" y1="32" x2="14" y2="44" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="32" y1="32" x2="50" y2="44" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="32" y1="32" x2="32" y2="52" stroke="#94a3b8" stroke-width="2.5"/>
      <circle cx="32" cy="32" r="12" fill="#334155"/>
      <text x="32" y="36" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">C</text>
      <circle cx="32" cy="12" r="7" fill="#38bdf8"/>
      <text x="32" y="15" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      <circle cx="14" cy="44" r="7" fill="#38bdf8"/>
      <text x="14" y="47" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      <circle cx="50" cy="44" r="7" fill="#38bdf8"/>
      <text x="50" y="47" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      <circle cx="32" cy="52" r="6" fill="#38bdf8"/>
      <text x="32" y="55" font-size="6" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
    </svg>`,

    NH3: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="32" y1="28" x2="16" y2="44" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="32" y1="28" x2="48" y2="44" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="32" y1="28" x2="32" y2="48" stroke="#94a3b8" stroke-width="2.5"/>
      <circle cx="32" cy="26" r="13" fill="#2563eb"/>
      <text x="32" y="30" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">N</text>
      <circle cx="16" cy="44" r="7" fill="#38bdf8"/>
      <text x="16" y="47" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      <circle cx="48" cy="44" r="7" fill="#38bdf8"/>
      <text x="48" y="47" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      <circle cx="32" cy="48" r="7" fill="#38bdf8"/>
      <text x="32" y="51" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
    </svg>`,

    HCl: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="32" r="10" fill="#38bdf8"/>
      <circle cx="42" cy="32" r="14" fill="#16a34a"/>
      <text x="22" y="36" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">H</text>
      <text x="42" y="36" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Cl</text>
      <line x1="31" y1="32" x2="33" y2="32" stroke="#ffffff" stroke-width="2"/>
    </svg>`,

    TEH: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 14C22 14 18 28 20 44C26 44 44 42 44 28C44 20 38 14 32 14Z" fill="#15803d" stroke="#166534" stroke-width="2"/>
      <path d="M22 42C28 34 32 26 34 18" stroke="#86efac" stroke-width="1.5"/>
      <path d="M28 30C32 30 36 26 38 24" stroke="#86efac" stroke-width="1.5"/>
    </svg>`,

    SABUN: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="22" width="28" height="32" rx="6" fill="#c084fc" stroke="#7c3aed" stroke-width="2"/>
      <circle cx="32" cy="36" r="6" fill="#f3e8ff"/>
      <rect x="28" y="14" width="8" height="8" rx="2" fill="#7c3aed"/>
      <path d="M24 16H36" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/>
      <circle cx="48" cy="18" r="4" fill="#a855f7" opacity="0.6"/>
      <circle cx="16" cy="18" r="3" fill="#a855f7" opacity="0.6"/>
    </svg>`,

    AIR_TEH: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#fffbeb" stroke="#b45309" stroke-width="2"/>
      <path d="M20 28H44L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L20 28Z" fill="#d97706" opacity="0.75"/>
      <circle cx="32" cy="40" r="3" fill="#fef3c7" opacity="0.6"/>
    </svg>`,

    AIR_SABUN: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <path d="M20 30H44L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L20 30Z" fill="#c084fc" opacity="0.5"/>
      <circle cx="26" cy="24" r="4" fill="#f3e8ff" stroke="#a855f7" stroke-width="1.5"/>
      <circle cx="34" cy="22" r="5" fill="#f3e8ff" stroke="#a855f7" stroke-width="1.5"/>
      <circle cx="41" cy="25" r="3.5" fill="#f3e8ff" stroke="#a855f7" stroke-width="1.5"/>
    </svg>`,

    // --- BAHAN DASAR CAMPURAN ---
    AIR: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16H42V24H44C46 24 48 26 48 28V50C48 54 44 56 40 56H24C20 56 16 54 16 50V28C16 26 18 24 20 24H22V16Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <path d="M18 34C24 32 28 36 34 34C40 32 44 34 46 34V50C46 53 43 54 40 54H24C21 54 18 53 18 50V34Z" fill="#38bdf8" opacity="0.75"/>
      <circle cx="26" cy="44" r="2.5" fill="#ffffff" opacity="0.8"/>
    </svg>`,

    GARAM: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 36C16 46 48 46 48 36V32H16V36Z" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <ellipse cx="32" cy="32" rx="16" ry="6" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
      <circle cx="28" cy="26" r="1.5" fill="#64748b"/>
      <circle cx="34" cy="24" r="1.5" fill="#64748b"/>
      <circle cx="32" cy="28" r="1.5" fill="#64748b"/>
    </svg>`,

    GULA: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="28" width="16" height="16" rx="2" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="34" y="28" width="16" height="16" rx="2" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="24" y="16" width="16" height="16" rx="2" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <circle cx="30" cy="22" r="2" fill="#38bdf8" opacity="0.5"/>
    </svg>`,

    SUSU_BUBUK: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 20L32 12L42 20V52H22V20Z" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
      <rect x="26" y="28" width="12" height="14" fill="#0284c7" rx="2"/>
      <text x="28" y="38" font-size="7" font-weight="bold" fill="#ffffff">MILK</text>
    </svg>`,

    KELAPA: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="34" r="18" fill="#78350f" stroke="#451a03" stroke-width="2"/>
      <circle cx="32" cy="34" r="13" fill="#ffffff"/>
      <circle cx="32" cy="34" r="8" fill="#fef3c7" opacity="0.6"/>
    </svg>`,

    KOPI_BUBUK: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="26" cy="28" rx="8" ry="6" fill="#451a03"/>
      <path d="M22 28C24 24 28 32 30 28" stroke="#78350f" stroke-width="1.5"/>
      <ellipse cx="40" cy="36" rx="8" ry="6" fill="#451a03"/>
      <path d="M36 36C38 32 42 40 44 36" stroke="#78350f" stroke-width="1.5"/>
      <circle cx="28" cy="42" r="2" fill="#78350f"/>
    </svg>`,

    PASIR: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 48C18 30 46 30 52 48Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
      <circle cx="28" cy="38" r="1.5" fill="#b45309"/>
      <circle cx="36" cy="36" r="1.5" fill="#b45309"/>
      <circle cx="32" cy="42" r="1.5" fill="#b45309"/>
    </svg>`,

    MINYAK: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="10" width="8" height="8" rx="1" fill="#f59e0b"/>
      <path d="M24 18H40L44 26V50C44 53 42 55 39 55H25C22 55 20 53 20 50V26L24 18Z" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <rect x="22" y="28" width="20" height="24" rx="2" fill="#fbbf24"/>
      <circle cx="28" cy="38" r="2" fill="#ffffff" opacity="0.6"/>
    </svg>`,

    // --- HASIL CAMPURAN ---
    AIR_GARAM: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#ecfeff" stroke="#0891b2" stroke-width="2"/>
      <path d="M20 28H44L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L20 28Z" fill="#06b6d4" opacity="0.6"/>
      <line x1="28" y1="36" x2="36" y2="36" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 2"/>
    </svg>`,

    AIR_GULA: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <path d="M20 28H44L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L20 28Z" fill="#4ade80" opacity="0.6"/>
      <circle cx="32" cy="40" r="3" fill="#ffffff" opacity="0.7"/>
    </svg>`,

    SUSU_SEGAR: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#faf5ff" stroke="#7c3aed" stroke-width="2"/>
      <path d="M20 26H44L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L20 26Z" fill="#f8fafc"/>
      <circle cx="28" cy="38" r="4" fill="#ede9fe"/>
      <circle cx="36" cy="42" r="3" fill="#ede9fe"/>
    </svg>`,

    SANTAN: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#faf5ff" stroke="#7c3aed" stroke-width="2"/>
      <path d="M20 26H44L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L20 26Z" fill="#fefce8"/>
      <circle cx="32" cy="38" r="5" fill="#fef08a" opacity="0.6"/>
    </svg>`,

    KOPI_TUBRUK: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
      <path d="M20 26H44L42 46H22L20 26Z" fill="#78350f" opacity="0.9"/>
      <path d="M22 46H42L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L22 46Z" fill="#451a03"/>
    </svg>`,

    AIR_LUMPUR: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
      <path d="M20 28H44L42 46H22L20 28Z" fill="#d97706" opacity="0.75"/>
      <path d="M22 46H42L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L22 46Z" fill="#92400e"/>
    </svg>`,

    MINYAK_AIR: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H46L42 52C42 54 40 56 38 56H26C24 56 22 54 22 52L18 16Z" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <rect x="20" y="26" width="24" height="12" fill="#facc15" opacity="0.9"/>
      <path d="M20 38H44L42 50C42 52 40 54 38 54H26C24 54 22 52 22 50L20 38Z" fill="#38bdf8" opacity="0.75"/>
      <line x1="20" y1="38" x2="44" y2="38" stroke="#d97706" stroke-width="1.5"/>
    </svg>`,
  };

  // ==========================================================================
  // 2. DATABASE KARTU BERSIH (TANPA BOCORAN JAWABAN)
  // ==========================================================================
  const CARDS_DB = {
    // --- LAB 1: ATOM TUNGGAL (DASAR DEK) ---
    H: {
      id: 'H',
      name: 'Hidrogen',
      formula: 'H',
      category: 'unsur',
      kind: 'atom',
      state: 'Gas',
      pts: 10,
      trivia: 'Unsur paling melimpah di alam semesta, bahan bakar utama bintang dan matahari.',
    },
    O: {
      id: 'O',
      name: 'Oksigen',
      formula: 'O',
      category: 'unsur',
      kind: 'atom',
      state: 'Gas',
      pts: 10,
      trivia: 'Gas yang sangat penting bagi pernapasan makhluk hidup dan pembakaran api.',
    },
    C: {
      id: 'C',
      name: 'Karbon',
      formula: 'C',
      category: 'unsur',
      kind: 'atom',
      state: 'Padat',
      pts: 10,
      trivia: 'Dapat berwujud grafit hitam lunak pada pensil hingga intan berlian yang sangat keras.',
    },
    Fe: {
      id: 'Fe',
      name: 'Besi (Ferrum)',
      formula: 'Fe',
      category: 'unsur',
      kind: 'atom',
      state: 'Logam Padat',
      pts: 10,
      trivia: 'Logam kuat penghantar listrik yang menjadi bahan dasar rangka bangunan dan jembatan.',
    },
    Na: {
      id: 'Na',
      name: 'Natrium',
      formula: 'Na',
      category: 'unsur',
      kind: 'atom',
      state: 'Logam Lunak',
      pts: 10,
      trivia: 'Logam perak lunak yang sangat reaktif saat bersentuhan langsung dengan air.',
    },
    Cl: {
      id: 'Cl',
      name: 'Klorin',
      formula: 'Cl',
      category: 'unsur',
      kind: 'atom',
      state: 'Gas',
      pts: 10,
      trivia: 'Gas halogen berbau khas yang banyak dimanfaatkan sebagai pembasmi kuman air.',
    },
    N: {
      id: 'N',
      name: 'Nitrogen',
      formula: 'N',
      category: 'unsur',
      kind: 'atom',
      state: 'Gas',
      pts: 10,
      trivia: 'Mengisi sekitar 78% volume atmosfer bumi, menjaga suhu bumi tetap stabil.',
    },
    Au: {
      id: 'Au',
      name: 'Emas (Aurum)',
      formula: 'Au',
      category: 'unsur',
      kind: 'atom',
      state: 'Logam Mulia',
      pts: 10,
      trivia: 'Logam mulia berkilau kuning cerah yang tidak berkarat meskipun terendam ratusan tahun.',
    },

    // --- LAB 1: MOLEKUL UNSUR GAS DIATOMIK STABIL (HASIL GABUNGAN ATOM SEJENIS) ---
    H2: {
      id: 'H2',
      name: 'Gas Hidrogen',
      formula: 'H₂',
      category: 'unsur',
      kind: 'molekul_unsur',
      state: 'Gas',
      pts: 30,
      trivia: 'Wujud gas hidrogen diatomik stabil yang ada di alam. Sangat ringan dan mudah terbakar.',
    },
    O2: {
      id: 'O2',
      name: 'Gas Oksigen',
      formula: 'O₂',
      category: 'unsur',
      kind: 'molekul_unsur',
      state: 'Gas',
      pts: 30,
      trivia: 'Wujud gas oksigen diatomik stabil di atmosfer yang kita hirup masuk ke paru-paru.',
    },
    N2: {
      id: 'N2',
      name: 'Gas Nitrogen',
      formula: 'N₂',
      category: 'unsur',
      kind: 'molekul_unsur',
      state: 'Gas',
      pts: 30,
      trivia: 'Wujud molekul gas nitrogen diatomik stabil di atmosfer dengan ikatan rangkap tiga.',
    },
    Cl2: {
      id: 'Cl2',
      name: 'Gas Klorin',
      formula: 'Cl₂',
      category: 'unsur',
      kind: 'molekul_unsur',
      state: 'Gas',
      pts: 30,
      trivia: 'Wujud gas halogen diatomik alami berwarna kuning kehijauan yang stabil.',
    },

    // --- LAB 1: MOLEKUL SENYAWA (HASIL GABUNGAN ATOM BEDA JENIS) ---
    H2O: {
      id: 'H2O',
      name: 'Air Murni',
      formula: 'H₂O',
      category: 'senyawa',
      kind: 'molekul_senyawa',
      state: 'Cair',
      pts: 30,
      trivia: 'Cairan penting kehidupan yang tersusun atas ikatan hidrogen dan oksigen.',
    },
    NaCl: {
      id: 'NaCl',
      name: 'Garam Dapur',
      formula: 'NaCl',
      category: 'senyawa',
      kind: 'molekul_senyawa',
      state: 'Padat Kristal',
      pts: 30,
      trivia: 'Kristal putih pemberi rasa gurih pada masakan dan menjaga cairan tubuh manusia.',
    },
    CO2: {
      id: 'CO2',
      name: 'Karbon Dioksida',
      formula: 'CO₂',
      category: 'senyawa',
      kind: 'molekul_senyawa',
      state: 'Gas',
      pts: 30,
      trivia: 'Gas hasil pernapasan makhluk hidup yang diserap tumbuhan hijau untuk fotosintesis.',
    },
    Fe2O3: {
      id: 'Fe2O3',
      name: 'Karat Besi',
      formula: 'Fe₂O₃',
      category: 'senyawa',
      kind: 'molekul_senyawa',
      state: 'Padat',
      pts: 30,
      trivia: 'Lapisan rapuh kemerahan yang muncul saat besi terkena kontak oksigen dan udara lembap.',
    },
    CH4: {
      id: 'CH4',
      name: 'Gas Metana',
      formula: 'CH₄',
      category: 'senyawa',
      kind: 'molekul_senyawa',
      state: 'Gas',
      pts: 35,
      trivia: 'Gas hidrokarbon alami (gas rawa) yang mudah terbakar dan menjadi komponen utama gas alam.',
    },
    NH3: {
      id: 'NH3',
      name: 'Gas Amonia',
      formula: 'NH₃',
      category: 'senyawa',
      kind: 'molekul_senyawa',
      state: 'Gas',
      pts: 35,
      trivia: 'Senyawa berbau menyengat khas yang penting sebagai bahan baku pupuk penyubur tanaman.',
    },
    HCl: {
      id: 'HCl',
      name: 'Asam Klorida',
      formula: 'HCl',
      category: 'senyawa',
      kind: 'molekul_senyawa',
      state: 'Cair / Gas',
      pts: 35,
      trivia: 'Asam lambung alami tubuh manusia yang membantu pencernaan serta digunakan di industri kimia.',
    },

    // --- LAB 2: BAHAN DASAR (DASAR DEK) ---
    AIR: {
      id: 'AIR',
      name: 'Air Pelarut',
      formula: 'Air',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Cair',
      pts: 5,
      trivia: 'Pelarut alami yang mampu melarutkan berbagai jenis zat di alam.',
    },
    GARAM: {
      id: 'GARAM',
      name: 'Garam Dapur',
      formula: 'Garam',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Padat Butir',
      pts: 5,
      trivia: 'Kristal asin dari penguapan air laut di tambak garam pesisir pantai.',
    },
    GULA: {
      id: 'GULA',
      name: 'Gula Pasir',
      formula: 'Gula',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Padat Kristal',
      pts: 5,
      trivia: 'Kristal pemanis alami yang diekstrak dari batang tanaman tebu.',
    },
    SUSU_BUBUK: {
      id: 'SUSU_BUBUK',
      name: 'Bubuk Susu',
      formula: 'Susu Bubuk',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Serbuk Halus',
      pts: 5,
      trivia: 'Serbuk bernutrisi tinggi kalsium yang dihasilkan dari pengeringan susu sapi cair.',
    },
    KELAPA: {
      id: 'KELAPA',
      name: 'Kelapa Parut',
      formula: 'Kelapa',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Padat Lembap',
      pts: 5,
      trivia: 'Parutan daging buah kelapa tua yang kaya akan lemak nabati gurih.',
    },
    KOPI_BUBUK: {
      id: 'KOPI_BUBUK',
      name: 'Bubuk Kopi',
      formula: 'Bubuk Kopi',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Serbuk Kasar',
      pts: 5,
      trivia: 'Gilingan biji kopi panggang beraroma wangi khas nusantara.',
    },
    PASIR: {
      id: 'PASIR',
      name: 'Pasir Tanah',
      formula: 'Pasir',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Padat Butiran',
      pts: 5,
      trivia: 'Pecahan butiran batuan kecil dari aliran sungai dan lereng gunung.',
    },
    MINYAK: {
      id: 'MINYAK',
      name: 'Minyak Goreng',
      formula: 'Minyak',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Cair',
      pts: 5,
      trivia: 'Cairan kental berwarna keemasan hasil olahan buah kelapa sawit.',
    },
    TEH: {
      id: 'TEH',
      name: 'Daun Teh',
      formula: 'Teh',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Padat Daun',
      pts: 5,
      trivia: 'Pucuk daun tanaman teh Camellia sinensis yang kaya antioksidan alami.',
    },
    SABUN: {
      id: 'SABUN',
      name: 'Sabun Cair',
      formula: 'Sabun',
      category: 'bahan',
      kind: 'bahan_dasar',
      state: 'Cair Kental',
      pts: 5,
      trivia: 'Pembersih yang mampu mengikat kotoran lemak dan air secara bersamaan.',
    },

    // --- LAB 2: HASIL CAMPURAN ---
    AIR_GARAM: {
      id: 'AIR_GARAM',
      name: 'Air Garam',
      formula: 'Air + Garam',
      category: 'homogen',
      kind: 'hasil_campuran',
      state: 'Cair Jernih',
      pts: 30,
      trivia: 'Larutan jernih tembus pandang dengan rasa asin yang merata sempurna di setiap tetesnya.',
    },
    AIR_GULA: {
      id: 'AIR_GULA',
      name: 'Larutan Gula / Sirup',
      formula: 'Air + Gula',
      category: 'homogen',
      kind: 'hasil_campuran',
      state: 'Cair Jernih',
      pts: 30,
      trivia: 'Cairan manis bening yang menyatu rata tanpa ada butiran gula tertinggal.',
    },
    AIR_TEH: {
      id: 'AIR_TEH',
      name: 'Larutan Teh',
      formula: 'Air + Teh',
      category: 'homogen',
      kind: 'hasil_campuran',
      state: 'Cair Bening',
      pts: 30,
      trivia: 'Zat warna dan aroma teh larut merata ke dalam air membentuk cairan jernih kecokelatan.',
    },
    SUSU_SEGAR: {
      id: 'SUSU_SEGAR',
      name: 'Susu Segar',
      formula: 'Air + Susu',
      category: 'koloid',
      kind: 'hasil_campuran',
      state: 'Cair Keruh',
      pts: 35,
      trivia: 'Cairan putih pekat stabil yang menghamburkan berkas sinar saat disorot cahaya senter.',
    },
    SANTAN: {
      id: 'SANTAN',
      name: 'Santan Kelapa',
      formula: 'Air + Kelapa',
      category: 'koloid',
      kind: 'hasil_campuran',
      state: 'Cair Gurih',
      pts: 35,
      trivia: 'Emulsi cairan putih gurih yang umum digunakan untuk masakan tradisional nusantara.',
    },
    AIR_SABUN: {
      id: 'AIR_SABUN',
      name: 'Air Sabun (Busa)',
      formula: 'Air + Sabun',
      category: 'koloid',
      kind: 'hasil_campuran',
      state: 'Busa Koloid',
      pts: 35,
      trivia: 'Sistem koloid jenis buih di mana fase gas terdispersi merata di dalam cairan sabun.',
    },
    KOPI_TUBRUK: {
      id: 'KOPI_TUBRUK',
      name: 'Kopi Tubruk',
      formula: 'Air + Kopi',
      category: 'heterogen',
      kind: 'hasil_campuran',
      state: 'Cair Berampas',
      pts: 30,
      trivia: 'Minuman seduh tradisional yang memiliki lapisan endapan serbuk ampas di dasar cangkir.',
    },
    AIR_LUMPUR: {
      id: 'AIR_LUMPUR',
      name: 'Air Lumpur / Keruh',
      formula: 'Air + Pasir',
      category: 'heterogen',
      kind: 'hasil_campuran',
      state: 'Cair Keruh',
      pts: 30,
      trivia: 'Cairan keruh cokelat yang butir-butir tanahnya akan mengendap ke bawah bila didiamkan.',
    },
    MINYAK_AIR: {
      id: 'MINYAK_AIR',
      name: 'Minyak & Air',
      formula: 'Air + Minyak',
      category: 'heterogen',
      kind: 'hasil_campuran',
      state: 'Cair Terpisah',
      pts: 30,
      trivia: 'Dua cairan yang membentuk batas lapisan terpisah jelas dan tidak mau saling melarutkan.',
    },
  };

  // ==========================================================================
  // 3. DATABASE RESEP SINTESIS & RACIK
  // ==========================================================================
  const RECIPES_SENYAWA = [
    // Sintesis Gas Diatomik Stabil (Molekul Unsur)
    {
      id: 'rec_h2',
      ingredients: ['H', 'H'],
      result: 'H2',
      pts: 30,
      title: 'Gas Hidrogen (H₂)',
      desc: 'Dua atom Hidrogen berikatan membentuk molekul gas diatomik (H₂).',
      unlocked: false,
    },
    {
      id: 'rec_o2',
      ingredients: ['O', 'O'],
      result: 'O2',
      pts: 30,
      title: 'Gas Oksigen (O₂)',
      desc: 'Dua atom Oksigen berikatan membentuk molekul gas oksigen (O₂).',
      unlocked: false,
    },
    {
      id: 'rec_n2',
      ingredients: ['N', 'N'],
      result: 'N2',
      pts: 30,
      title: 'Gas Nitrogen (N₂)',
      desc: 'Dua atom Nitrogen berikatan membentuk molekul gas nitrogen (N₂).',
      unlocked: false,
    },
    {
      id: 'rec_cl2',
      ingredients: ['Cl', 'Cl'],
      result: 'Cl2',
      pts: 30,
      title: 'Gas Klorin (Cl₂)',
      desc: 'Dua atom Klorin berikatan membentuk molekul gas klorin (Cl₂).',
      unlocked: false,
    },
    // Sintesis Molekul Senyawa
    {
      id: 'rec_h2o',
      ingredients: ['H', 'O'],
      result: 'H2O',
      pts: 30,
      title: 'Molekul Air (H₂O)',
      desc: 'Hidrogen dan Oksigen bergabung membentuk molekul air (H₂O).',
      unlocked: false,
    },
    {
      id: 'rec_h2o_mol',
      ingredients: ['H2', 'O2'],
      result: 'H2O',
      pts: 35,
      title: 'Reaksi Gas Air (H₂ + O₂)',
      desc: 'Gas Hidrogen dan Oksigen bereaksi membentuk molekul air (H₂O).',
      unlocked: false,
    },
    {
      id: 'rec_nacl',
      ingredients: ['Na', 'Cl'],
      result: 'NaCl',
      pts: 30,
      title: 'Garam Dapur (NaCl)',
      desc: 'Natrium dan Klorin bergabung membentuk kristal garam dapur (NaCl).',
      unlocked: false,
    },
    {
      id: 'rec_nacl_gas',
      ingredients: ['Na', 'Cl2'],
      result: 'NaCl',
      pts: 35,
      title: 'Reaksi Natrium & Gas Klorin',
      desc: 'Logam Natrium bereaksi dengan gas Klorin membentuk garam NaCl.',
      unlocked: false,
    },
    {
      id: 'rec_co2',
      ingredients: ['C', 'O'],
      result: 'CO2',
      pts: 30,
      title: 'Karbon Dioksida (CO₂)',
      desc: 'Karbon dan Oksigen bergabung membentuk gas CO₂.',
      unlocked: false,
    },
    {
      id: 'rec_co2_mol',
      ingredients: ['C', 'O2'],
      result: 'CO2',
      pts: 35,
      title: 'Pembakaran Karbon (C + O₂)',
      desc: 'Karbon dibakar bersama gas Oksigen menghasilkan gas CO₂.',
      unlocked: false,
    },
    {
      id: 'rec_fe2o3',
      ingredients: ['Fe', 'O'],
      result: 'Fe2O3',
      pts: 30,
      title: 'Karat Besi (Fe₂O₃)',
      desc: 'Besi bereaksi dengan gas Oksigen membentuk karat besi (Fe₂O₃).',
      unlocked: false,
    },
    {
      id: 'rec_fe2o3_mol',
      ingredients: ['Fe', 'O2'],
      result: 'Fe2O3',
      pts: 35,
      title: 'Oksidasi Besi (Fe + O₂)',
      desc: 'Besi bereaksi dengan gas Oksigen bebas membentuk karat Fe₂O₃.',
      unlocked: false,
    },
    {
      id: 'rec_ch4',
      ingredients: ['C', 'H'],
      result: 'CH4',
      pts: 35,
      title: 'Gas Metana (CH₄)',
      desc: 'Karbon dan Hidrogen membentuk gas metana alami.',
      unlocked: false,
    },
    {
      id: 'rec_ch4_mol',
      ingredients: ['C', 'H2'],
      result: 'CH4',
      pts: 40,
      title: 'Gas Metana (C + H₂)',
      desc: 'Karbon bereaksi dengan gas Hidrogen membentuk molekul CH₄.',
      unlocked: false,
    },
    {
      id: 'rec_nh3',
      ingredients: ['N', 'H'],
      result: 'NH3',
      pts: 35,
      title: 'Gas Amonia (NH₃)',
      desc: 'Nitrogen dan Hidrogen membentuk gas amonia bahan pupuk.',
      unlocked: false,
    },
    {
      id: 'rec_nh3_mol',
      ingredients: ['N', 'H2'],
      result: 'NH3',
      pts: 40,
      title: 'Gas Amonia (N + H₂)',
      desc: 'Nitrogen bereaksi dengan molekul gas H₂ membentuk NH₃.',
      unlocked: false,
    },
    {
      id: 'rec_hcl',
      ingredients: ['H', 'Cl'],
      result: 'HCl',
      pts: 35,
      title: 'Asam Klorida (HCl)',
      desc: 'Hidrogen dan Klorin membentuk molekul asam klorida.',
      unlocked: false,
    },
    {
      id: 'rec_hcl_mol',
      ingredients: ['H2', 'Cl2'],
      result: 'HCl',
      pts: 40,
      title: 'Reaksi Asam (H₂ + Cl₂)',
      desc: 'Gas Hidrogen dan gas Klorin bereaksi membentuk HCl.',
      unlocked: false,
    },
  ];

  const RECIPES_CAMPURAN = [
    {
      id: 'rec_air_garam',
      ingredients: ['AIR', 'GARAM'],
      result: 'AIR_GARAM',
      pts: 30,
      title: 'Air Garam',
      desc: 'Garam larut sempurna tanpa ada butiran yang tersisa di dalam air.',
      unlocked: false,
    },
    {
      id: 'rec_air_gula',
      ingredients: ['AIR', 'GULA'],
      result: 'AIR_GULA',
      pts: 30,
      title: 'Larutan Gula / Sirup',
      desc: 'Gula pasir menyatu larut sempurna menghasilkan cairan manis bening.',
      unlocked: false,
    },
    {
      id: 'rec_air_teh',
      ingredients: ['AIR', 'TEH'],
      result: 'AIR_TEH',
      pts: 30,
      title: 'Larutan Teh',
      desc: 'Zat warna dan aroma teh larut merata menghasilkan cairan jernih kecokelatan.',
      unlocked: false,
    },
    {
      id: 'rec_susu',
      ingredients: ['AIR', 'SUSU_BUBUK'],
      result: 'SUSU_SEGAR',
      pts: 35,
      title: 'Susu Segar',
      desc: 'Partikel susu tersebar stabil merata dan tampak keruh putih pekat.',
      unlocked: false,
    },
    {
      id: 'rec_santan',
      ingredients: ['AIR', 'KELAPA'],
      result: 'SANTAN',
      pts: 35,
      title: 'Santan Kelapa',
      desc: 'Minyak kelapa dan air membentuk emulsi putih gurih yang stabil.',
      unlocked: false,
    },
    {
      id: 'rec_air_sabun',
      ingredients: ['AIR', 'SABUN'],
      result: 'AIR_SABUN',
      pts: 35,
      title: 'Air Sabun Berbusa',
      desc: 'Cairan sabun membentuk busa koloid stabil bersama air.',
      unlocked: false,
    },
    {
      id: 'rec_kopi',
      ingredients: ['AIR', 'KOPI_BUBUK'],
      result: 'KOPI_TUBRUK',
      pts: 30,
      title: 'Kopi Tubruk',
      desc: 'Tampak butiran serbuk ampas yang mengendap di dasar cangkir.',
      unlocked: false,
    },
    {
      id: 'rec_lumpur',
      ingredients: ['AIR', 'PASIR'],
      result: 'AIR_LUMPUR',
      pts: 30,
      title: 'Air Lumpur',
      desc: 'Butiran pasir dan tanah cepat mengendap ke bawah karena tidak larut.',
      unlocked: false,
    },
    {
      id: 'rec_minyak',
      ingredients: ['AIR', 'MINYAK'],
      result: 'MINYAK_AIR',
      pts: 30,
      title: 'Minyak & Air',
      desc: 'Dua cairan yang tidak saling melarutkan dan membentuk 2 lapisan terpisah.',
      unlocked: false,
    },
  ];

  // ==========================================================================
  // 4. SISTEM AUDIO SINTESIS
  // ==========================================================================
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    resume() {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    play(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
      if (!this.enabled) return;
      this.init();
      this.resume();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    }

    sfxDraw() {
      this.play(340, 'triangle', 0.08, 0.08);
      setTimeout(() => this.play(520, 'sine', 0.1, 0.06), 40);
    }

    sfxDrop() {
      this.play(240, 'sine', 0.08, 0.08);
    }

    sfxCorrect() {
      this.play(523.25, 'sine', 0.14, 0.1);
      setTimeout(() => this.play(659.25, 'sine', 0.14, 0.1), 70);
      setTimeout(() => this.play(783.99, 'sine', 0.22, 0.12), 140);
    }

    sfxWrong() {
      this.play(160, 'sawtooth', 0.2, 0.1);
      setTimeout(() => this.play(130, 'sawtooth', 0.25, 0.12), 80);
    }

    sfxCraft() {
      this.play(440, 'triangle', 0.1, 0.08);
      setTimeout(() => this.play(587.33, 'sine', 0.12, 0.1), 60);
      setTimeout(() => this.play(659.25, 'sine', 0.14, 0.1), 120);
      setTimeout(() => this.play(880, 'sine', 0.3, 0.15), 180);
    }

    sfxLevelUp() {
      [523, 659, 783, 1046].forEach((f, idx) => {
        setTimeout(() => this.play(f, 'sine', 0.25, 0.12), idx * 90);
      });
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }
  }

  // ==========================================================================
  // 5. FX CONFETTI
  // ==========================================================================
  class FxEngine {
    constructor() {
      this.canvas = document.getElementById('fx-canvas');
      this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
      this.particles = [];
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    burst(x, y, count = 28, colors = ['#2563eb', '#10b981', '#f59e0b', '#ec4899']) {
      if (!this.ctx) return;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 3;
        this.particles.push({
          x: x || window.innerWidth / 2,
          y: y || window.innerHeight / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          size: Math.random() * 7 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 10,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
        });
      }
    }

    animate() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2;
        p.rotation += p.vRot;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.ctx.restore();
      }

      requestAnimationFrame(this.animate);
    }
  }

  // ==========================================================================
  // 6. ENGINE UTAMA APLIKASI ZATCRAFT V2.4
  // ==========================================================================
  class ZatCraftApp {
    constructor() {
      this.currentMode = 'unsur_senyawa';

      this.score = 0;
      this.streak = 0;
      this.level = 1;

      this.modeState = {
        unsur_senyawa: {
          deck: [],
          hand: [],
          benchSlots: [null, null],
          tubeCounts: { unsur: 0, senyawa: 0 },
          missionIndex: 0,
          missionProgress: 0,
        },
        campuran: {
          deck: [],
          hand: [],
          benchSlots: [null, null],
          tubeCounts: { homogen: 0, koloid: 0, heterogen: 0 },
          missionIndex: 0,
          missionProgress: 0,
        },
      };

      this.selectedHandCard = null;
      this.sound = new SoundManager();
      this.fx = new FxEngine();

      this.initDom();
      this.initMissionsData();
      this.initEventListeners();

      this.initDeckForMode('unsur_senyawa');
      this.initDeckForMode('campuran');
      this.switchMode('unsur_senyawa');
    }

    initMissionsData() {
      this.missions = {
        unsur_senyawa: [
          {
            title: 'Misi 1: Sintesis Molekul Gas Diatomik',
            desc: 'Gabungkan 2 atom gas sejenis di meja (cth: H+H ➔ H₂, O+O ➔ O₂, atau Cl+Cl ➔ Cl₂).',
            type: 'craft_kind',
            targetKind: 'molekul_unsur',
            target: 1,
            reward: 50,
          },
          {
            title: 'Misi 2: Sintesis Molekul Senyawa (Air H₂O)',
            desc: 'Gabungkan Hidrogen dan Oksigen di meja untuk membuat Air.',
            type: 'craft_card',
            targetCardId: 'H2O',
            target: 1,
            reward: 60,
          },
          {
            title: 'Misi 3: Sintesis Garam Dapur (NaCl)',
            desc: 'Gabungkan Natrium (Na) dan Klorin di Meja Molekul.',
            type: 'craft_card',
            targetCardId: 'NaCl',
            target: 1,
            reward: 60,
          },
          {
            title: 'Misi 4: Klasifikasikan ke Tabung Unsur',
            desc: 'Tarik 3 molekul gas stabil (H₂, O₂, N₂, Cl₂) atau unsur padat (Fe, C, Au) ke Tabung Unsur!',
            type: 'classify_unsur_valid',
            target: 3,
            reward: 80,
          },
        ],
        campuran: [
          {
            title: 'Misi 1: Racik Larutan Homogen',
            desc: 'Campurkan Air dengan Garam atau Gula di Meja Racik.',
            type: 'craft_category',
            targetCategory: 'homogen',
            target: 1,
            reward: 50,
          },
          {
            title: 'Misi 2: Ciptakan Koloid Pertama',
            desc: 'Campurkan Air dengan Bubuk Susu atau Kelapa Parut.',
            type: 'craft_category',
            targetCategory: 'koloid',
            target: 1,
            reward: 60,
          },
          {
            title: 'Misi 3: Buat Campuran Heterogen',
            desc: 'Campurkan Air dengan Bubuk Kopi, Pasir, atau Minyak Goreng.',
            type: 'craft_category',
            targetCategory: 'heterogen',
            target: 1,
            reward: 60,
          },
          {
            title: 'Misi 4: Klasifikasikan Hasil Campuran',
            desc: 'Tarik 3 hasil campuran yang kamu buat ke Beaker Homogen, Koloid, atau Heterogen!',
            type: 'classify_any',
            target: 3,
            reward: 80,
          },
        ],
      };
    }

    initDom() {
      this.dom = {
        btnModeUnsur: document.getElementById('btn-mode-unsur'),
        btnModeCampuran: document.getElementById('btn-mode-campuran'),
        boardUnsurSenyawa: document.getElementById('board-unsur-senyawa'),
        boardCampuran: document.getElementById('board-campuran'),
        playerScore: document.getElementById('player-score'),
        streakCounter: document.getElementById('streak-counter'),
        playerLevel: document.getElementById('player-level'),
        missionBadge: document.getElementById('mission-badge'),
        missionTitle: document.getElementById('mission-title'),
        missionDesc: document.getElementById('mission-desc'),
        missionFill: document.getElementById('mission-fill'),
        missionText: document.getElementById('mission-text'),
        deckCounter: document.getElementById('deck-counter'),
        btnDraw: document.getElementById('btn-draw'),
        handCount: document.getElementById('hand-count'),
        playerHand: document.getElementById('player-hand'),
        toastContainer: document.getElementById('toast-container'),
        soundIcon: document.getElementById('sound-icon'),
        btnSound: document.getElementById('btn-sound'),
        btnRestart: document.getElementById('btn-restart'),
        btnTutorial: document.getElementById('btn-tutorial'),
        btnCodex: document.getElementById('btn-codex'),
        btnLeaderboard: document.getElementById('btn-leaderboard'),
        leaderboardTbody: document.getElementById('leaderboard-tbody'),
        formSaveScore: document.getElementById('form-save-score'),
        inputPlayerName: document.getElementById('input-player-name'),
        btnClearScores: document.getElementById('btn-clear-scores'),
        btnContinueLevel: document.getElementById('btn-continue-level'),
        // Lab 1
        tubeUnsur: document.getElementById('tube-unsur'),
        tubeSenyawa: document.getElementById('tube-senyawa'),
        countUnsur: document.getElementById('count-unsur'),
        countSenyawa: document.getElementById('count-senyawa'),
        slotUnsur0: document.getElementById('slot-unsur-0'),
        slotUnsur1: document.getElementById('slot-unsur-1'),
        btnCraftSenyawa: document.getElementById('btn-craft-senyawa'),
        btnClearUnsur: document.getElementById('btn-clear-unsur'),
        clueTextUnsur: document.getElementById('clue-text-unsur'),
        // Lab 2
        tubeHomogen: document.getElementById('tube-homogen'),
        tubeKoloid: document.getElementById('tube-koloid'),
        tubeHeterogen: document.getElementById('tube-heterogen'),
        countHomogen: document.getElementById('count-homogen'),
        countKoloid: document.getElementById('count-koloid'),
        countHeterogen: document.getElementById('count-heterogen'),
        slotCampuran0: document.getElementById('slot-campuran-0'),
        slotCampuran1: document.getElementById('slot-campuran-1'),
        btnMixCampuran: document.getElementById('btn-mix-campuran'),
        btnClearCampuran: document.getElementById('btn-clear-campuran'),
        clueTextCampuran: document.getElementById('clue-text-campuran'),
      };
    }

    initDeckForMode(mode) {
      const state = this.modeState[mode];
      let rawPool = [];

      if (mode === 'unsur_senyawa') {
        rawPool = [
          'H', 'H', 'H', 'H', 'O', 'O', 'O', 'O',
          'C', 'C', 'Fe', 'Fe', 'Na', 'Na', 'Cl', 'Cl', 'N', 'N', 'Au', 'Au'
        ];
      } else {
        rawPool = [
          'AIR', 'AIR', 'AIR', 'AIR', 'AIR', 'AIR',
          'GARAM', 'GARAM', 'GULA', 'GULA',
          'SUSU_BUBUK', 'SUSU_BUBUK', 'KELAPA', 'KELAPA',
          'KOPI_BUBUK', 'KOPI_BUBUK', 'PASIR', 'PASIR', 'MINYAK', 'MINYAK'
        ];
      }

      state.deck = this.shuffleArray([...rawPool]);
      state.hand = [];
      for (let i = 0; i < 5; i++) {
        this.drawCardForState(state, false);
      }
    }

    shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    drawCardForState(state, playSfx = true) {
      if (state.hand.length >= 7) {
        this.showToast('Tangan penuh! (Maks 7 kartu)', 'error');
        return false;
      }

      if (state.deck.length === 0) {
        this.initDeckForMode(this.currentMode);
        this.showToast('Tumpukan bahan dasar dikocok ulang! 🎴', 'info');
      }

      const cardId = state.deck.pop();
      const cardData = CARDS_DB[cardId];
      if (!cardData) return false;

      const instance = {
        instanceId: 'card_' + Math.random().toString(36).substr(2, 9),
        cardId: cardId,
        ...cardData,
      };

      state.hand.push(instance);
      if (playSfx) this.sound.sfxDraw();
      return true;
    }

    switchMode(newMode) {
      this.currentMode = newMode;
      this.selectedHandCard = null;

      if (newMode === 'unsur_senyawa') {
        this.dom.btnModeUnsur.classList.add('active');
        this.dom.btnModeCampuran.classList.remove('active');
        this.dom.boardUnsurSenyawa.style.display = 'grid';
        this.dom.boardCampuran.style.display = 'none';
        this.dom.missionBadge.textContent = 'MISI LAB 1';
        this.dom.missionBadge.style.background = '#2563eb';
      } else {
        this.dom.btnModeCampuran.classList.add('active');
        this.dom.btnModeUnsur.classList.remove('active');
        this.dom.boardCampuran.style.display = 'grid';
        this.dom.boardUnsurSenyawa.style.display = 'none';
        this.dom.missionBadge.textContent = 'MISI LAB 2';
        this.dom.missionBadge.style.background = '#059669';
      }

      this.updateMissionUI();
      this.renderBenchUI();
      this.renderTubesUI();
      this.renderHandUI();
      this.updateStatsUI();
      this.showToast(newMode === 'unsur_senyawa' ? 'Lab 1: Unsur & Senyawa 🔬' : 'Lab 2: Ragam Campuran 🧪', 'info');
    }

    renderHandUI() {
      const container = this.dom.playerHand;
      const state = this.modeState[this.currentMode];
      if (!container) return;
      container.innerHTML = '';

      state.hand.forEach((item, index) => {
        const cardEl = this.createCardElement(item);
        cardEl.dataset.handIndex = index;

        if (this.selectedHandCard && this.selectedHandCard.instanceId === item.instanceId) {
          cardEl.style.outline = '3px solid #2563eb';
          cardEl.style.transform = 'translateY(-10px) scale(1.05)';
        }

        container.appendChild(cardEl);
      });

      if (this.dom.deckCounter) {
        this.dom.deckCounter.textContent = `${state.deck.length} Kartu`;
      }
      if (this.dom.handCount) {
        this.dom.handCount.textContent = state.hand.length;
      }
      if (this.dom.btnDraw) {
        this.dom.btnDraw.disabled = state.hand.length >= 7;
      }
    }

    createCardElement(card, context = 'hand') {
      const el = document.createElement('div');
      el.className = 'game-card';
      el.id = card.instanceId;
      el.dataset.instanceId = card.instanceId;
      el.dataset.cardId = card.id;
      el.dataset.category = card.category;
      el.dataset.kind = card.kind || 'atom';
      el.draggable = context === 'hand';

      const svgIcon = SVG_ICONS[card.id] || SVG_ICONS.H;
      const stateTag = card.state ? card.state.toUpperCase() : 'ZAT';

      el.innerHTML = `
        <div class="card-top">
          <span class="card-tag">${stateTag}</span>
          <button class="card-info-btn" title="Lihat Fakta Sains" data-id="${card.id}">i</button>
        </div>

        <div class="card-illustration-box">
          ${svgIcon}
        </div>

        <div class="card-body">
          <div class="card-formula">${card.formula}</div>
          <div class="card-name">${card.name}</div>
        </div>

        <div class="card-bottom">
          <span class="card-state-pill">${card.state}</span>
          <span class="card-points-badge">+${card.pts}</span>
        </div>
      `;

      this.attachCardEvents(el, card, context);
      return el;
    }

    attachCardEvents(cardEl, cardData, context = 'hand') {
      const infoBtn = cardEl.querySelector('.card-info-btn');
      if (infoBtn) {
        infoBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openCardDetailModal(cardData.id);
        });
      }

      if (context === 'preview') {
        return;
      }

      if (context === 'bench') {
        cardEl.addEventListener('click', (e) => {
          e.stopPropagation();
          const slotEl = cardEl.closest('.crafting-slot');
          const slotIdx = slotEl ? parseInt(slotEl.dataset.slot, 10) : 0;
          this.returnSlotToHand(slotIdx);
        });
        return;
      }

      cardEl.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', cardData.instanceId);
        cardEl.classList.add('dragging');
      });

      cardEl.addEventListener('dragend', () => {
        cardEl.classList.remove('dragging');
      });

      cardEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.selectedHandCard && this.selectedHandCard.instanceId === cardData.instanceId) {
          this.selectedHandCard = null;
          this.showToast('Pilihan kartu dibatalkan', 'info');
        } else {
          this.selectedHandCard = cardData;
          this.showToast(`Kartu ${cardData.name} dipilih! Ketuk wadah atau meja laboratorium.`, 'info');
        }
        this.renderHandUI();
      });

      this.attachTouchDrag(cardEl, cardData);
    }

    attachTouchDrag(cardEl, cardData) {
      let touchClone = null;

      cardEl.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        const touch = e.touches[0];

        touchClone = cardEl.cloneNode(true);
        touchClone.style.position = 'fixed';
        touchClone.style.pointerEvents = 'none';
        touchClone.style.zIndex = '10001';
        touchClone.style.width = cardEl.offsetWidth + 'px';
        touchClone.style.height = cardEl.offsetHeight + 'px';
        touchClone.style.left = touch.clientX - cardEl.offsetWidth / 2 + 'px';
        touchClone.style.top = touch.clientY - cardEl.offsetHeight / 2 + 'px';
        touchClone.style.opacity = '0.9';
        touchClone.style.transform = 'scale(1.05)';
        document.body.appendChild(touchClone);
        cardEl.classList.add('dragging');
      }, { passive: true });

      cardEl.addEventListener('touchmove', (e) => {
        if (!touchClone) return;
        const touch = e.touches[0];
        touchClone.style.left = touch.clientX - cardEl.offsetWidth / 2 + 'px';
        touchClone.style.top = touch.clientY - cardEl.offsetHeight / 2 + 'px';
      }, { passive: true });

      cardEl.addEventListener('touchend', (e) => {
        if (!touchClone) return;
        const touch = e.changedTouches[0];
        const targetEl = document.elementFromPoint(touch.clientX, touch.clientY);

        touchClone.remove();
        touchClone = null;
        cardEl.classList.remove('dragging');

        if (targetEl) {
          const tube = targetEl.closest('.classification-tube');
          if (tube) {
            const targetType = tube.dataset.targetType;
            this.handleClassification(cardData, targetType, tube);
            return;
          }

          const slot = targetEl.closest('.crafting-slot');
          if (slot) {
            const slotIndex = parseInt(slot.dataset.slot, 10);
            this.placeInCraftingSlot(cardData, slotIndex);
            return;
          }
        }
      });
    }

    // --- KLASIFIKASI KE TABUNG / BEAKER (DENGAN ATURAN GAS DIATOMIK ALAMI) ---
    handleClassification(cardData, targetType, tubeEl) {
      // Aturan 1: Bahan dasar campuran belum dicampur
      if (cardData.category === 'bahan') {
        this.sound.sfxWrong();
        this.showToast('Bahan dasar belum dicampur! Campurkan Air dengan bahan di Meja Racik untuk membuat campuran.', 'error');
        this.shakeElement(tubeEl);
        return;
      }

      // Aturan 2: Gas jarang ditemukan tunggal di alam!
      // Atom gas H, O, N, Cl harus digabung menjadi gas diatomik (H₂, O₂, N₂, Cl₂) terlebih dahulu!
      const DIATOMIC_ATOMS = ['H', 'O', 'N', 'Cl'];
      if (DIATOMIC_ATOMS.includes(cardData.id)) {
        this.sound.sfxWrong();
        this.shakeElement(tubeEl);
        this.showToast(`Atom ${cardData.name} (${cardData.formula}) jarang ditemukan tunggal bebas di alam! Gabungkan dulu di Meja Molekul menjadi molekul gas diatomik (${cardData.id}₂).`, 'error');
        return;
      }

      const isCorrect = cardData.category === targetType;

      if (isCorrect) {
        this.streak += 1;
        const comboBonus = (this.streak - 1) * 5;
        const totalEarned = cardData.pts + comboBonus;
        this.score += totalEarned;

        const state = this.modeState[this.currentMode];
        if (state.tubeCounts[targetType] !== undefined) {
          state.tubeCounts[targetType] += 1;
        }

        this.sound.sfxCorrect();
        const rect = tubeEl.getBoundingClientRect();
        this.fx.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 24);

        let praise = `Benar! ${cardData.name} tepat masuk ke ${targetType.toUpperCase()}! (+${totalEarned} Poin)`;
        if (cardData.kind === 'molekul_unsur') {
          praise = `Tepat sekali! Gas ${cardData.name} (${cardData.formula}) adalah wujud molekul unsur gas yang stabil di alam! (+${totalEarned} Poin)`;
        }
        this.showToast(praise, 'success');
        this.removeCardFromAnywhere(cardData.instanceId);

        this.checkMissionClassification(targetType, cardData.kind);

        if (state.hand.length < 3) {
          setTimeout(() => {
            this.drawCardForState(state, true);
            this.renderHandUI();
          }, 350);
        }
      } else {
        this.streak = 0;
        this.sound.sfxWrong();
        this.shakeElement(tubeEl);

        let correction = `Kurang tepat! Coba pelajari lagi sifat zat ${cardData.name}.`;
        if (cardData.kind === 'molekul_unsur') {
          correction = `Perhatikan: ${cardData.name} tersusun atas atom-atom sejenis, jadi tergolong UNSUR (bukan senyawa)!`;
        }
        this.showToast(correction, 'error');
      }

      this.updateStatsUI();
      this.renderTubesUI();
      this.renderHandUI();
    }

    shakeElement(el) {
      if (!el) return;
      el.classList.add('shake');
      setTimeout(() => el.classList.remove('shake'), 450);
    }

    removeCardFromHand(instanceId) {
      const state = this.modeState[this.currentMode];
      const idx = state.hand.findIndex((c) => c.instanceId === instanceId);
      if (idx !== -1) {
        return state.hand.splice(idx, 1)[0];
      }
      return null;
    }

    removeCardFromAnywhere(instanceId) {
      const state = this.modeState[this.currentMode];
      const hIdx = state.hand.findIndex((c) => c.instanceId === instanceId);
      if (hIdx !== -1) {
        return state.hand.splice(hIdx, 1)[0];
      }
      const bIdx = state.benchSlots.findIndex((c) => c && c.instanceId === instanceId);
      if (bIdx !== -1) {
        const card = state.benchSlots[bIdx];
        state.benchSlots[bIdx] = null;
        this.renderBenchUI();
        this.checkCraftingClues();
        return card;
      }
      return null;
    }

    getActiveCard(instanceId) {
      const state = this.modeState[this.currentMode];
      const fromHand = state.hand.find((c) => c.instanceId === instanceId);
      if (fromHand) return fromHand;
      return state.benchSlots.find((c) => c && c.instanceId === instanceId) || null;
    }

    // --- MEJA GABUNG MOLEKUL & PENCAMPURAN BAHAN ---
    placeInCraftingSlot(cardData, slotIndex) {
      const state = this.modeState[this.currentMode];

      // Jika kartu yang sama persis sudah ada di slot ini, abaikan agar tidak terduplikasi
      if (state.benchSlots[slotIndex] && state.benchSlots[slotIndex].instanceId === cardData.instanceId) {
        this.selectedHandCard = null;
        this.renderHandUI();
        return;
      }

      // Jika di slot target sudah ada kartu lain, kembalikan kartu lama ke tangan
      if (state.benchSlots[slotIndex]) {
        const oldCard = state.benchSlots[slotIndex];
        if (!state.hand.some((c) => c.instanceId === oldCard.instanceId)) {
          state.hand.push(oldCard);
        }
        state.benchSlots[slotIndex] = null;
      }

      // Jika kartu baru ini berasal dari slot lain di meja, kosongkan slot asalnya
      const otherSlot = state.benchSlots.findIndex((c) => c && c.instanceId === cardData.instanceId);
      if (otherSlot !== -1) {
        state.benchSlots[otherSlot] = null;
      } else {
        // Jika dari tangan, keluarkan dari tangan
        this.removeCardFromHand(cardData.instanceId);
      }

      state.benchSlots[slotIndex] = cardData;
      this.selectedHandCard = null;
      this.sound.sfxDrop();
      this.renderBenchUI();
      this.renderHandUI();
      this.checkCraftingClues();
    }

    returnSlotToHand(slotIndex) {
      const state = this.modeState[this.currentMode];
      const card = state.benchSlots[slotIndex];
      if (card) {
        state.benchSlots[slotIndex] = null;
        if (!state.hand.some((c) => c.instanceId === card.instanceId)) {
          state.hand.push(card);
        }
        this.selectedHandCard = null;
        this.sound.sfxDraw();
        this.renderBenchUI();
        this.renderHandUI();
        this.checkCraftingClues();
        this.showToast(`Bahan ${card.name} dikembalikan ke tangan.`, 'info');
      }
    }

    clearBenchToHand() {
      const state = this.modeState[this.currentMode];
      let returned = false;
      state.benchSlots.forEach((c, idx) => {
        if (c) {
          if (!state.hand.some((item) => item.instanceId === c.instanceId)) {
            state.hand.push(c);
          }
          state.benchSlots[idx] = null;
          returned = true;
        }
      });
      if (returned) {
        this.selectedHandCard = null;
        this.sound.sfxDraw();
        this.renderBenchUI();
        this.renderHandUI();
        this.checkCraftingClues();
        this.showToast('Bahan di meja dikembalikan ke tangan.', 'info');
      }
    }

    renderBenchUI() {
      const isUnsur = this.currentMode === 'unsur_senyawa';
      const state = this.modeState[this.currentMode];
      const slots = isUnsur
        ? [this.dom.slotUnsur0, this.dom.slotUnsur1]
        : [this.dom.slotCampuran0, this.dom.slotCampuran1];

      slots.forEach((slot, idx) => {
        if (!slot) return;
        slot.innerHTML = '';
        const card = state.benchSlots[idx];

        if (card) {
          slot.classList.add('has-card');
          const miniCard = this.createCardElement(card, 'bench');
          miniCard.style.cursor = 'pointer';
          miniCard.title = 'Ketuk untuk mengembalikan ke tangan';
          slot.appendChild(miniCard);
        } else {
          slot.classList.remove('has-card');
          const label = isUnsur ? `Bahan ${idx + 1}` : (idx === 0 ? 'Pelarut (Air)' : 'Bahan Dasar');
          const icon = isUnsur ? '⚛️' : (idx === 0 ? '💧' : '🧂');
          slot.innerHTML = `
            <div class="slot-placeholder">
              <span class="slot-icon">${icon}</span>
              <span class="slot-label">${label}</span>
              <small>Tarik ke sini</small>
            </div>`;
        }
      });

      const activeCount = state.benchSlots.filter(Boolean).length;
      if (isUnsur && this.dom.btnCraftSenyawa) {
        this.dom.btnCraftSenyawa.disabled = activeCount < 2;
      }
      if (!isUnsur && this.dom.btnMixCampuran) {
        this.dom.btnMixCampuran.disabled = activeCount < 2;
      }
    }

    checkCraftingClues() {
      const isUnsur = this.currentMode === 'unsur_senyawa';
      const state = this.modeState[this.currentMode];
      const placed = state.benchSlots.filter(Boolean);
      const clueEl = isUnsur ? this.dom.clueTextUnsur : this.dom.clueTextCampuran;
      if (!clueEl) return;

      if (placed.length < 2) {
        clueEl.textContent = isUnsur
          ? 'Gabungkan 2 bahan di meja untuk membentuk molekul unsur gas atau senyawa baru!'
          : 'Campurkan Air dan bahan dasar untuk membuat campuran!';
        return;
      }

      const placedIds = placed.map((c) => c.cardId);
      const recipeList = isUnsur ? RECIPES_SENYAWA : RECIPES_CAMPURAN;
      const recipe = this.findRecipe(placedIds, recipeList);

      if (recipe) {
        const resCard = CARDS_DB[recipe.result];
        clueEl.innerHTML = `🌟 <strong>Siap ${isUnsur ? 'Digabungkan' : 'Dicampur'}:</strong> Menghasilkan <strong>${resCard.name} (${resCard.formula})</strong>!`;
      } else {
        clueEl.textContent = '❓ Belum ditemukan reaksi stabil untuk kedua bahan ini. Coba bahan lain!';
      }
    }

    findRecipe(ingredientIds, recipeList) {
      const sortedInput = [...ingredientIds].sort();

      return recipeList.find((rec) => {
        const sortedRec = [...rec.ingredients].sort();
        if (sortedRec.length !== sortedInput.length) return false;
        return sortedRec.every((val, idx) => val === sortedInput[idx]);
      });
    }

    executeSynthesis() {
      const isUnsur = this.currentMode === 'unsur_senyawa';
      const state = this.modeState[this.currentMode];
      const placed = state.benchSlots.filter(Boolean);
      if (placed.length < 2) return;

      const placedIds = placed.map((c) => c.cardId);
      const recipeList = isUnsur ? RECIPES_SENYAWA : RECIPES_CAMPURAN;
      const recipe = this.findRecipe(placedIds, recipeList);

      if (recipe) {
        recipe.unlocked = true;
        const resInfo = CARDS_DB[recipe.result];
        this.streak += 2;
        const totalPts = recipe.pts + (this.streak * 5);
        this.score += totalPts;

        this.sound.sfxCraft();

        const slotEl = isUnsur ? this.dom.slotUnsur1 : this.dom.slotCampuran1;
        const rect = slotEl.getBoundingClientRect();
        this.fx.burst(rect.left + rect.width / 2, rect.top, 38, ['#0284c7', '#10b981', '#f59e0b', '#7c3aed']);

        state.benchSlots = [null, null];
        this.renderBenchUI();

        const newInstance = {
          instanceId: 'card_' + Math.random().toString(36).substr(2, 9),
          cardId: recipe.result,
          ...resInfo,
        };
        state.hand.push(newInstance);
        this.renderHandUI();

        let successMsg = `✨ Berhasil membuat ${resInfo.name} (+${totalPts} Poin)! Kartu masuk ke tanganmu.`;
        if (resInfo.kind === 'molekul_unsur') {
          successMsg = `✨ Gas Diatomik Alami! Kamu berhasil membuat ${resInfo.name} (${resInfo.formula}) (+${totalPts} Poin)!`;
        }
        this.showToast(successMsg, 'bonus');

        this.checkMissionCraft(recipe.result, resInfo.category, resInfo.kind);
        this.updateStatsUI();
      } else {
        this.sound.sfxWrong();
        const slots = isUnsur
          ? [this.dom.slotUnsur0, this.dom.slotUnsur1]
          : [this.dom.slotCampuran0, this.dom.slotCampuran1];
        slots.forEach((s) => this.shakeElement(s));

        this.showToast('Kedua bahan ini tidak menghasilkan reaksi/campuran baru. Coba bahan lain!', 'error');
      }
    }

    // --- MISSIONS PROGRESSION ---
    checkMissionClassification(category, kind) {
      const state = this.modeState[this.currentMode];
      const missionList = this.missions[this.currentMode];
      const mission = missionList[state.missionIndex];
      if (!mission) return;

      if (mission.type === 'classify_any') {
        state.missionProgress += 1;
        this.checkMissionThreshold(mission, state);
      } else if (mission.type === 'classify_unsur_valid' && category === 'unsur') {
        state.missionProgress += 1;
        this.checkMissionThreshold(mission, state);
      }
    }

    checkMissionCraft(resultId, resultCategory, resultKind) {
      const state = this.modeState[this.currentMode];
      const missionList = this.missions[this.currentMode];
      const mission = missionList[state.missionIndex];
      if (!mission) return;

      if (mission.type === 'craft_card' && mission.targetCardId === resultId) {
        state.missionProgress += 1;
        this.checkMissionThreshold(mission, state);
      } else if (mission.type === 'craft_category' && mission.targetCategory === resultCategory) {
        state.missionProgress += 1;
        this.checkMissionThreshold(mission, state);
      } else if (mission.type === 'craft_kind' && mission.targetKind === resultKind) {
        state.missionProgress += 1;
        this.checkMissionThreshold(mission, state);
      }
    }

    checkMissionThreshold(mission, state) {
      this.updateMissionUI();
      if (state.missionProgress >= mission.target) {
        this.score += mission.reward;
        this.level += 1;
        this.sound.sfxLevelUp();
        this.fx.burst(window.innerWidth / 2, window.innerHeight / 2, 60);

        this.openLevelUpModal(mission);
        state.missionIndex += 1;
        state.missionProgress = 0;

        this.updateStatsUI();
        this.updateMissionUI();
      }
    }

    updateMissionUI() {
      const state = this.modeState[this.currentMode];
      const missionList = this.missions[this.currentMode];
      const mission = missionList[state.missionIndex];

      if (!mission) {
        if (this.dom.missionTitle) this.dom.missionTitle.textContent = '🌟 Misi Laboratorium Selesai!';
        if (this.dom.missionDesc) this.dom.missionDesc.textContent = 'Hebat! Kamu telah menuntaskan seluruh tantangan sintesis & pencampuran.';
        if (this.dom.missionFill) this.dom.missionFill.style.width = '100%';
        if (this.dom.missionText) this.dom.missionText.textContent = 'SELESAI';
        return;
      }

      if (this.dom.missionTitle) this.dom.missionTitle.textContent = mission.title;
      if (this.dom.missionDesc) this.dom.missionDesc.textContent = mission.desc;

      const pct = Math.min(100, Math.round((state.missionProgress / mission.target) * 100));
      if (this.dom.missionFill) this.dom.missionFill.style.width = `${pct}%`;
      if (this.dom.missionText) this.dom.missionText.textContent = `${state.missionProgress} / ${mission.target}`;
    }

    updateStatsUI() {
      if (this.dom.playerScore) this.dom.playerScore.textContent = this.score;
      if (this.dom.streakCounter) this.dom.streakCounter.textContent = `${this.streak}x`;
      if (this.dom.playerLevel) this.dom.playerLevel.textContent = this.level;
    }

    renderTubesUI() {
      const counts1 = this.modeState.unsur_senyawa.tubeCounts;
      if (this.dom.countUnsur) this.dom.countUnsur.textContent = `${counts1.unsur} Terkumpul`;
      if (this.dom.countSenyawa) this.dom.countSenyawa.textContent = `${counts1.senyawa} Terkumpul`;

      const counts2 = this.modeState.campuran.tubeCounts;
      if (this.dom.countHomogen) this.dom.countHomogen.textContent = `${counts2.homogen} Terkumpul`;
      if (this.dom.countKoloid) this.dom.countKoloid.textContent = `${counts2.koloid} Terkumpul`;
      if (this.dom.countHeterogen) this.dom.countHeterogen.textContent = `${counts2.heterogen} Terkumpul`;
    }

    // --- EVENT LISTENERS ---
    initEventListeners() {
      if (this.dom.btnModeUnsur) {
        this.dom.btnModeUnsur.addEventListener('click', () => this.switchMode('unsur_senyawa'));
      }
      if (this.dom.btnModeCampuran) {
        this.dom.btnModeCampuran.addEventListener('click', () => this.switchMode('campuran'));
      }

      const allTubes = [
        this.dom.tubeUnsur, this.dom.tubeSenyawa,
        this.dom.tubeHomogen, this.dom.tubeKoloid, this.dom.tubeHeterogen,
      ];

      allTubes.forEach((tube) => {
        if (!tube) return;
        const targetType = tube.dataset.targetType;

        tube.addEventListener('dragover', (e) => {
          e.preventDefault();
          tube.classList.add('drag-over');
        });

        tube.addEventListener('dragleave', () => {
          tube.classList.remove('drag-over');
        });

        tube.addEventListener('drop', (e) => {
          e.preventDefault();
          tube.classList.remove('drag-over');
          const instanceId = e.dataTransfer.getData('text/plain');
          const cardData = this.getActiveCard(instanceId);
          if (cardData) this.handleClassification(cardData, targetType, tube);
        });

        tube.addEventListener('click', () => {
          if (this.selectedHandCard) {
            this.handleClassification(this.selectedHandCard, targetType, tube);
            this.selectedHandCard = null;
            this.renderHandUI();
          }
        });
      });

      const slots = [
        { el: this.dom.slotUnsur0, idx: 0 },
        { el: this.dom.slotUnsur1, idx: 1 },
        { el: this.dom.slotCampuran0, idx: 0 },
        { el: this.dom.slotCampuran1, idx: 1 },
      ];

      slots.forEach(({ el, idx }) => {
        if (!el) return;

        el.addEventListener('dragover', (e) => {
          e.preventDefault();
          el.classList.add('drag-over');
        });

        el.addEventListener('dragleave', () => {
          el.classList.remove('drag-over');
        });

        el.addEventListener('drop', (e) => {
          e.preventDefault();
          el.classList.remove('drag-over');
          const instanceId = e.dataTransfer.getData('text/plain');
          const cardData = this.getActiveCard(instanceId);
          if (cardData) this.placeInCraftingSlot(cardData, idx);
        });

        el.addEventListener('click', (e) => {
          // Hanya tangani klik jika mengenai slot/placeholder (bukan kartu di dalam slot)
          if (this.selectedHandCard) {
            this.placeInCraftingSlot(this.selectedHandCard, idx);
          } else {
            this.returnSlotToHand(idx);
          }
        });
      });

      if (this.dom.btnDraw) {
        this.dom.btnDraw.addEventListener('click', () => {
          const state = this.modeState[this.currentMode];
          if (this.drawCardForState(state, true)) {
            this.renderHandUI();
          }
        });
      }

      if (this.dom.btnCraftSenyawa) {
        this.dom.btnCraftSenyawa.addEventListener('click', () => this.executeSynthesis());
      }

      if (this.dom.btnMixCampuran) {
        this.dom.btnMixCampuran.addEventListener('click', () => this.executeSynthesis());
      }

      if (this.dom.btnClearUnsur) {
        this.dom.btnClearUnsur.addEventListener('click', () => this.clearBenchToHand());
      }

      if (this.dom.btnClearCampuran) {
        this.dom.btnClearCampuran.addEventListener('click', () => this.clearBenchToHand());
      }

      if (this.dom.btnSound) {
        this.dom.btnSound.addEventListener('click', () => {
          const isEnabled = this.sound.toggle();
          this.dom.soundIcon.textContent = isEnabled ? '🔊' : '🔇';
          this.showToast(isEnabled ? 'Suara Diaktifkan' : 'Suara Dimatikan', 'info');
        });
      }

      if (this.dom.btnRestart) {
        this.dom.btnRestart.addEventListener('click', () => {
          if (confirm('Mulai ulang kartu di laboratorium ini?')) {
            this.initDeckForMode(this.currentMode);
            this.renderHandUI();
            this.showToast('Dek berhasil direset.', 'info');
          }
        });
      }

      this.initModals();
    }

    getHandCard(instanceId) {
      const state = this.modeState[this.currentMode];
      return state.hand.find((c) => c.instanceId === instanceId);
    }

    // --- MODALS SYSTEM ---
    initModals() {
      document.querySelectorAll('[data-close]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const modalId = btn.getAttribute('data-close');
          const modal = document.getElementById(modalId);
          if (modal) modal.classList.remove('active');
        });
      });

      if (this.dom.btnTutorial) {
        this.dom.btnTutorial.addEventListener('click', () => {
          document.getElementById('modal-tutorial').classList.add('active');
        });
      }

      if (this.dom.btnCodex) {
        this.dom.btnCodex.addEventListener('click', () => {
          this.renderCodexUI();
          document.getElementById('modal-codex').classList.add('active');
        });
      }

      if (this.dom.btnLeaderboard) {
        this.dom.btnLeaderboard.addEventListener('click', () => {
          this.renderLeaderboard();
          document.getElementById('modal-leaderboard').classList.add('active');
        });
      }

      if (this.dom.btnContinueLevel) {
        this.dom.btnContinueLevel.addEventListener('click', () => {
          document.getElementById('modal-levelup').classList.remove('active');
        });
      }

      document.querySelectorAll('.codex-tabs .tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.codex-tabs .tab-btn').forEach((b) => b.classList.remove('active'));
          document.querySelectorAll('.codex-content .tab-panel').forEach((p) => p.classList.remove('active'));

          btn.classList.add('active');
          const panel = document.getElementById(`tab-${btn.dataset.tab}`);
          if (panel) panel.classList.add('active');
        });
      });

      if (this.dom.formSaveScore) {
        this.dom.formSaveScore.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = this.dom.inputPlayerName.value.trim();
          if (name) {
            this.saveScore(name);
            this.dom.inputPlayerName.value = '';
          }
        });
      }

      if (this.dom.btnClearScores) {
        this.dom.btnClearScores.addEventListener('click', () => {
          if (confirm('Hapus seluruh riwayat peringkat di peramban ini?')) {
            localStorage.removeItem('zatcraft_leaderboard');
            this.renderLeaderboard();
            this.showToast('Data peringkat direset.', 'info');
          }
        });
      }
    }

    openCardDetailModal(cardId) {
      const card = CARDS_DB[cardId];
      if (!card) return;

      const modal = document.getElementById('modal-card-detail');
      const badge = document.getElementById('detail-category-badge');
      const title = document.getElementById('detail-title');
      const formula = document.getElementById('detail-formula');
      const state = document.getElementById('detail-state');
      const trivia = document.getElementById('detail-trivia');
      const preview = document.getElementById('detail-card-preview');

      badge.className = 'tube-badge';
      badge.textContent = card.state ? card.state.toUpperCase() : 'ZAT';

      title.textContent = card.name;
      formula.textContent = `Simbol / Rumus: ${card.formula}`;
      state.textContent = card.state;
      trivia.textContent = card.trivia;

      preview.innerHTML = '';
      const dummy = { instanceId: 'preview_card', ...card };
      const cardEl = this.createCardElement(dummy, 'preview');
      cardEl.style.transform = 'none';
      cardEl.style.pointerEvents = 'none';
      preview.appendChild(cardEl);

      modal.classList.add('active');
    }

    openLevelUpModal(mission) {
      const modal = document.getElementById('modal-levelup');
      const title = document.getElementById('levelup-title');
      const desc = document.getElementById('levelup-desc');
      const reward = document.getElementById('levelup-reward-text');

      title.textContent = `Selamat! Naik ke Level ${this.level} 🌟`;
      desc.textContent = `Kamu telah menyelesaikan "${mission.title}" dengan sempurna!`;
      reward.textContent = `+${mission.reward} Poin Bonus & Misi Baru Dibuka!`;

      modal.classList.add('active');
    }

    renderCodexUI() {
      const unlSenyawa = RECIPES_SENYAWA.filter((r) => r.unlocked).length;
      const unlCampuran = RECIPES_CAMPURAN.filter((r) => r.unlocked).length;
      const totalUnlocked = unlSenyawa + unlCampuran;
      const totalRecipes = RECIPES_SENYAWA.length + RECIPES_CAMPURAN.length;

      const unlEl = document.getElementById('codex-unlocked-count');
      const cardsEl = document.getElementById('cards-discovered-count');
      if (unlEl) unlEl.textContent = `${totalUnlocked} / ${totalRecipes}`;
      if (cardsEl) cardsEl.textContent = `${Object.keys(CARDS_DB).length} Kartu`;

      const contSenyawa = document.getElementById('recipe-list-senyawa');
      if (contSenyawa) {
        contSenyawa.innerHTML = '';
        RECIPES_SENYAWA.forEach((r) => {
          const item = document.createElement('div');
          item.className = `recipe-card ${r.unlocked ? '' : 'locked'}`;
          const ing = r.ingredients.map((id) => CARDS_DB[id]?.name || id).join(' + ');
          const res = CARDS_DB[r.result];

          item.innerHTML = `
            <div>
              <div class="recipe-ingredients">
                <span>${r.unlocked ? '🔓' : '🔒'}</span>
                <span>${r.unlocked ? ing : '??? + ???'}</span>
              </div>
              <p style="font-size: 0.78rem; color: #64748b; margin-top: 3px;">
                ${r.unlocked ? r.desc : 'Resep ini belum kamu temukan di Meja Molekul.'}
              </p>
            </div>
            <div class="recipe-yield">
              ${r.unlocked ? `👉 ${res.name} (${res.formula})` : '???'}
            </div>
          `;
          contSenyawa.appendChild(item);
        });
      }

      const contCampuran = document.getElementById('recipe-list-campuran');
      if (contCampuran) {
        contCampuran.innerHTML = '';
        RECIPES_CAMPURAN.forEach((r) => {
          const item = document.createElement('div');
          item.className = `recipe-card ${r.unlocked ? '' : 'locked'}`;
          const ing = r.ingredients.map((id) => CARDS_DB[id]?.name || id).join(' + ');
          const res = CARDS_DB[r.result];

          item.innerHTML = `
            <div>
              <div class="recipe-ingredients">
                <span>${r.unlocked ? '🔓' : '🔒'}</span>
                <span>${r.unlocked ? ing : '??? + ???'}</span>
              </div>
              <p style="font-size: 0.78rem; color: #64748b; margin-top: 3px;">
                ${r.unlocked ? r.desc : 'Resep ini belum kamu racik di Meja Campuran.'}
              </p>
            </div>
            <div class="recipe-yield">
              ${r.unlocked ? `👉 ${res.name} (${res.formula})` : '???'}
            </div>
          `;
          contCampuran.appendChild(item);
        });
      }
    }

    getStoredScores() {
      const data = localStorage.getItem('zatcraft_leaderboard');
      if (data) {
        try {
          return JSON.parse(data);
        } catch (e) {
          return [];
        }
      }
      return [
        { name: 'Ahmad Fathoni (7A)', score: 320, level: 4, date: '16/11/2026' },
        { name: 'Naila Azzahra (7B)', score: 260, level: 3, date: '16/11/2026' },
        { name: 'Rafi Al-Ghifari (7C)', score: 190, level: 2, date: '16/11/2026' },
      ];
    }

    saveScore(name) {
      const scores = this.getStoredScores();
      scores.push({
        name: name,
        score: this.score,
        level: this.level,
        date: new Date().toLocaleDateString('id-ID'),
      });

      scores.sort((a, b) => b.score - a.score);
      const top10 = scores.slice(0, 10);
      localStorage.setItem('zatcraft_leaderboard', JSON.stringify(top10));
      this.renderLeaderboard();
      this.showToast(`Skor untuk ${name} berhasil disimpan! 🏆`, 'success');
    }

    renderLeaderboard() {
      const tbody = this.dom.leaderboardTbody;
      if (!tbody) return;
      tbody.innerHTML = '';

      const scores = this.getStoredScores();
      scores.forEach((entry, idx) => {
        const row = document.createElement('tr');
        let medal = `#${idx + 1}`;
        if (idx === 0) medal = '🥇 #1';
        if (idx === 1) medal = '🥈 #2';
        if (idx === 2) medal = '🥉 #3';

        row.innerHTML = `
          <td><strong>${medal}</strong></td>
          <td>${entry.name}</td>
          <td><strong style="color: #d97706;">${entry.score}</strong></td>
          <td>Lv. ${entry.level}</td>
          <td><small style="color: #94a3b8;">${entry.date}</small></td>
        `;
        tbody.appendChild(row);
      });
    }

    showToast(message, type = 'info') {
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;

      let icon = 'ℹ️';
      if (type === 'success') icon = '✅';
      if (type === 'error') icon = '❌';
      if (type === 'bonus') icon = '🌟';

      toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
      this.dom.toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }
  }

  // --- BOOTSTRAP ---
  window.addEventListener('DOMContentLoaded', () => {
    window.zatCraft = new ZatCraftApp();
  });
})();
