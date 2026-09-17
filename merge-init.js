(() => {
  const tabs = [...document.querySelectorAll(".nav-link")];
  const panels = [...document.querySelectorAll(".panel")];
  const pageTitle = document.querySelector("#pageTitle");
  const dropdownLinks = [...document.querySelectorAll(".nav-dropdown-link")];
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebarClose = document.querySelector(".sidebar-close");
  const sidebarDim = document.querySelector("[data-sidebar-dim]");
  const sidebarCollapse = document.querySelector(".sidebar-collapse");
  const mypageButtons = [...document.querySelectorAll(".btn-mypage")];
  const mypagePanel = document.querySelector('.panel[data-panel="mypage"]');
  const regularPanel = document.querySelector('.sub-panel[data-admission="regular"]');
  const earlyPanel = document.querySelector('.sub-panel[data-admission="early"]');
  const scoresPanel = document.querySelector('.panel[data-panel="scores"]');
  const analysisPanel = document.querySelector('.panel[data-panel="analysis"]');
  const contentTabs = mypagePanel ? [...mypagePanel.querySelectorAll(".content-tab[data-mypage]")] : [];
  const schoolGradeChips = mypagePanel ? [...mypagePanel.querySelectorAll(".month-chip[data-school-grade]")] : [];
  const mockMonthChips = mypagePanel ? [...mypagePanel.querySelectorAll(".month-chip[data-mock-month]")] : [];
  const regularMonthTabs = regularPanel ? [...regularPanel.querySelectorAll(".content-tab[data-regular-month]")] : [];
  const admissionViewTabs = earlyPanel ? [...earlyPanel.querySelectorAll(".content-tab[data-admission-view]")] : [];

  const labels = {
    scores: "성적 분석",
    analysis: "오답 분석",
    admission: "합격 예측",
    insight: "입시 인사이트",
    qna: "입시 전문가 Q&A",
    diagnostic: "학습종합진단검사"
  };

  const subMap = {
    admission: { attr: "data-admission", fallback: "regular" }
  };

  function getActiveSubLink(attr, fallback) {
    return (
      dropdownLinks.find((link) => link.classList.contains("active") && link.hasAttribute(attr) && !link.disabled) ||
      dropdownLinks.find((link) => link.getAttribute(attr) === fallback && !link.disabled)
    );
  }

  function activateSub(attr, name) {
    dropdownLinks.forEach((link) => {
      if (!link.hasAttribute(attr)) return;
      link.classList.toggle("active", link.getAttribute(attr) === name);
    });

    document.querySelectorAll(`.sub-panel[${attr}]`).forEach((panel) => {
      panel.classList.toggle("active", panel.getAttribute(attr) === name);
    });
  }

  function setPageTitle(panelName, subName) {
    if (!pageTitle) return;

    const sub = subMap[panelName];
    if (sub) {
      const name = subName || getActiveSubLink(sub.attr, sub.fallback)?.getAttribute(sub.attr) || sub.fallback;
      const link = dropdownLinks.find((el) => el.getAttribute(sub.attr) === name);
      pageTitle.textContent = link?.textContent.trim() || labels[panelName] || "";
      return;
    }

    pageTitle.textContent = labels[panelName] || "";
  }

  function setSidebarOpen(open) {
    document.body.classList.toggle("is-sidebar-open", open);
    sidebarToggle?.setAttribute("aria-expanded", open ? "true" : "false");
    sidebarToggle?.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  }

  function setSidebarCollapsed(collapsed) {
    document.body.classList.toggle("is-sidebar-collapsed", collapsed);
    sidebarCollapse?.setAttribute("aria-expanded", collapsed ? "false" : "true");
    sidebarCollapse?.setAttribute("aria-label", collapsed ? "메뉴 펼치기" : "메뉴 접기");
  }

  function closeMenus() {
    setSidebarOpen(false);
    if (document.activeElement instanceof HTMLElement && document.activeElement.closest(".global-header, .sidebar-toggle")) {
      document.activeElement.blur();
    }
  }

  function scrollToMainTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.addEventListener("pageshow", () => {
    scrollToMainTop();
  });

  function keepWindowScroll(run) {
    const y = window.scrollY;
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    run();
    const restore = () => {
      html.scrollTop = y;
      document.body.scrollTop = y;
      window.scrollTo(0, y);
    };
    restore();
    requestAnimationFrame(() => {
      restore();
      html.style.scrollBehavior = prevBehavior;
    });
  }

  document.addEventListener("mousedown", (event) => {
    if (event.target.closest(".content-tab, .month-chip, [data-taken-exam], [data-wrong-cause]")) {
      event.preventDefault();
    }
  });

  function activateMypageTab(name) {
    contentTabs.forEach((tab) => {
      const isActive = tab.dataset.mypage === name;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    document.querySelectorAll(".content-tab-panel[data-mypage]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.mypage === name);
    });
  }

  function activateSchoolGrade(grade) {
    schoolGradeChips.forEach((chip) => {
      const isActive = chip.dataset.schoolGrade === grade;
      chip.classList.toggle("active", isActive);
      chip.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    document.querySelectorAll(".school-grade-panel[data-school-grade]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.schoolGrade === grade);
    });
  }

  function activateMockMonth(month) {
    mockMonthChips.forEach((chip) => {
      const isActive = chip.dataset.mockMonth === month;
      chip.classList.toggle("active", isActive);
      chip.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    document.querySelectorAll(".mock-month-panel[data-mock-month]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.mockMonth === month);
    });
  }

  function activateRegularMonth(month) {
    regularMonthTabs.forEach((tab) => {
      const isActive = tab.dataset.regularMonth === month;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    document.querySelectorAll(".regular-month-panel[data-regular-month]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.regularMonth === month);
    });
  }

  function activateAdmissionView(view) {
    admissionViewTabs.forEach((tab) => {
      const isActive = tab.dataset.admissionView === view;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    earlyPanel?.querySelectorAll(".content-tab-panel[data-admission-view]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.admissionView === view);
    });
  }

  let selectedWrongNo = null;
  let selectedNoteScope = "selected";

  function activateNoteScope(scope) {
    selectedNoteScope = scope;

    analysisPanel?.querySelectorAll("[data-note-scope]").forEach((chip) => {
      const isActive = chip.dataset.noteScope === scope;
      chip.classList.toggle("active", isActive);
      chip.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    activateTakenExam(analysisPanel, selectedExamMonth);
    syncNoteScopeView();
  }

  function activateAnalysisSubject(name) {
    selectedSubject = name;
    selectedWrongNo = null;

    document.querySelectorAll("[data-analysis-subject]").forEach((el) => {
      const isActive = el.dataset.analysisSubject === name;
      el.classList.toggle("active", isActive);
      if (el.getAttribute("role") === "tab") {
        el.setAttribute("aria-selected", isActive ? "true" : "false");
      }
    });

    refreshAnalysisSummary();
  }

  function refreshAnalysisSummary() {
    const month = selectedExamMonth;
    const subject = selectedSubject;

    const wrongNote = analysisPanel?.querySelector("[data-wrong-note]");
    if (wrongNote) {
      wrongNote.innerHTML = window.MegaReportData?.renderWrongNote?.(month, subject, selectedWrongNo) || "";
    }

    syncNoteScopeView();
  }

  function syncNoteScopeView() {
    const isAll = selectedNoteScope === "all";
    const note = analysisPanel?.querySelector("[data-wrong-note]");
    const all = analysisPanel?.querySelector("[data-wrong-note-all]");
    if (note) note.hidden = isAll;
    if (!all) return;
    all.hidden = !isAll;
    if (isAll) {
      all.innerHTML = window.MegaReportData?.renderCumulativeWrong?.(selectedSubject) || "";
    }
  }

  function activateTakenExam(root, month) {
    const selectAll =
      (root === analysisPanel && selectedNoteScope === "all") ||
      (root === scoresPanel && selectedScoreScope === "all");
    root?.querySelectorAll("[data-taken-exam]").forEach((cell) => {
      const isActive = selectAll || cell.dataset.takenExam === String(month);
      cell.classList.toggle("active", isActive);
      cell.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function bindTakenExamPicker(root, onSelect) {
    if (!root) return;

    root.querySelectorAll("[data-taken-exam]").forEach((cell) => {
      cell.addEventListener("click", () => {
        keepWindowScroll(() => {
          const month = cell.dataset.takenExam;
          activateTakenExam(root, month);
          onSelect?.(month);
        });
      });
    });
  }

  let selectedSubject = "국어";
  let selectedExamMonth = "3";
  let selectedStrategySubject = "국어";
  let selectedScoreScope = "selected";
  let selectedTrendSubject = "국수탐";

  function resetMypageView() {
    activateMypageTab("mock");
    activateSchoolGrade("1");
    activateMockMonth("3");
  }

  function resetRegularAdmissionView() {
    activateTakenExam(regularPanel, "3");
    activateRegularMonth("3");
    window.AdmissionRegular?.resetAll();
  }

  function resetEarlyAdmissionView() {
    activateAdmissionView("precise");
  }

  function refreshScoreSubjectTabs() {
    scoresPanel?.querySelectorAll("[data-score-subject]").forEach((tab) => {
      const isActive = tab.dataset.scoreSubject === selectedStrategySubject;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function activateScoreSubject(name) {
    selectedStrategySubject = name;
    refreshScoreSubjectTabs();
    refreshStrategySubject();
  }

  function activateScoreScope(scope) {
    selectedScoreScope = scope;

    scoresPanel?.querySelectorAll(".month-chip[data-score-scope]").forEach((chip) => {
      const isActive = chip.dataset.scoreScope === scope;
      chip.classList.toggle("active", isActive);
      chip.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    scoresPanel?.querySelectorAll(".content-tab-panel[data-score-scope]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.scoreScope === scope);
    });

    activateTakenExam(scoresPanel, selectedExamMonth);
    refreshStrategySubject();
  }

  function refreshTrendSubject() {
    const target = scoresPanel?.querySelector("[data-trend-subject-chart]");
    if (target) {
      target.innerHTML = window.MegaReportData?.renderTrendSubject?.(selectedTrendSubject) || "";
    }

    scoresPanel?.querySelectorAll("[data-trend-subject]").forEach((tab) => {
      const isActive = tab.dataset.trendSubject === selectedTrendSubject;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function refreshStrategySubject() {
    refreshScoreSubjectTabs();

    const report = scoresPanel?.querySelector("[data-score-report]");
    if (report) {
      report.innerHTML =
        window.MegaReportData?.renderSubjectReport?.(selectedExamMonth, selectedStrategySubject) || "";
    }

    const summary = scoresPanel?.querySelector("[data-strategy-summary]");
    if (summary) {
      summary.innerHTML =
        window.MegaReportData?.renderStrategySummary?.(selectedStrategySubject, selectedExamMonth) || "";
    }

    const tasks = scoresPanel?.querySelector("[data-strategy-tasks]");
    if (tasks) {
      tasks.innerHTML =
        window.MegaReportData?.renderStrategyTasks?.(selectedStrategySubject, selectedExamMonth) || "";
    }

    const examReview = scoresPanel?.querySelector("[data-exam-review]");
    if (examReview) {
      examReview.innerHTML =
        window.MegaReportData?.renderExamReview?.(selectedExamMonth, selectedStrategySubject) || "";
    }

    const examCauses = scoresPanel?.querySelector("[data-exam-causes]");
    if (examCauses) {
      examCauses.innerHTML =
        window.MegaReportData?.renderExamCauses?.(selectedExamMonth, selectedStrategySubject) || "";
    }

    const typeAnalysis = scoresPanel?.querySelector("[data-type-analysis]");
    if (typeAnalysis) {
      typeAnalysis.innerHTML =
        window.MegaReportData?.renderTypeAnalysis?.(selectedExamMonth, selectedStrategySubject) || "";
    }
  }

  function resetScoreAnalysisView() {
    selectedSubject = "국어";
    selectedExamMonth = "3";
    selectedStrategySubject = "국어";
    selectedTrendSubject = "국수탐";
    activateScoreScope("selected");
    activateTakenExam(scoresPanel, "3");
    refreshStrategySubject();
    refreshTrendSubject();
  }

  function resetAnalysisView() {
    activateAnalysisSubject("국어");
    activateNoteScope("selected");
    activateTakenExam(analysisPanel, selectedExamMonth);
  }

  function openMypage() {
    resetMypageView();
    tabs.forEach((tab) => tab.classList.remove("active"));
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === "mypage"));
    if (pageTitle) pageTitle.textContent = "마이페이지";
    closeMenus();
    scrollToMainTop();
  }

  function activate(panelName, subName) {
    resetMypageView();
    resetRegularAdmissionView();
    resetEarlyAdmissionView();
    resetScoreAnalysisView();
    resetAnalysisView();
    tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.panel === panelName));
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === panelName));

    const sub = subMap[panelName];
    if (sub) {
      const name = subName || getActiveSubLink(sub.attr, sub.fallback)?.getAttribute(sub.attr) || sub.fallback;
      activateSub(sub.attr, name);
      setPageTitle(panelName, name);
      return;
    }

    setPageTitle(panelName);
  }

  sidebarToggle?.addEventListener("click", () => {
    setSidebarOpen(!document.body.classList.contains("is-sidebar-open"));
  });

  sidebarClose?.addEventListener("click", () => closeMenus());
  sidebarDim?.addEventListener("click", () => closeMenus());

  sidebarCollapse?.addEventListener("click", () => {
    setSidebarCollapsed(!document.body.classList.contains("is-sidebar-collapsed"));
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const sub = subMap[tab.dataset.panel];
      activate(tab.dataset.panel, sub?.fallback);
      closeMenus();
      scrollToMainTop();
    });
  });

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      if (link.disabled || link.classList.contains("is-disabled")) return;
      const panelName = link.dataset.panel;
      const sub = subMap[panelName];

      if (!sub) {
        activate(panelName);
        closeMenus();
        scrollToMainTop();
        return;
      }

      const name = link.getAttribute(sub.attr);
      activate(panelName, name);
      closeMenus();
      scrollToMainTop();
    });
  });

  mypageButtons.forEach((button) => {
    button.addEventListener("click", () => openMypage());
  });

  contentTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => activateMypageTab(tab.dataset.mypage));
    });
  });

  schoolGradeChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      keepWindowScroll(() => activateSchoolGrade(chip.dataset.schoolGrade));
    });
  });

  mockMonthChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      keepWindowScroll(() => activateMockMonth(chip.dataset.mockMonth));
    });
  });

  regularMonthTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => {
        activateRegularMonth(tab.dataset.regularMonth);
        window.AdmissionRegular?.onMonthChange(tab.dataset.regularMonth);
      });
    });
  });

  admissionViewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => activateAdmissionView(tab.dataset.admissionView));
    });
  });

  analysisPanel?.querySelectorAll("[data-note-scope]").forEach((chip) => {
    chip.addEventListener("click", () => {
      keepWindowScroll(() => activateNoteScope(chip.dataset.noteScope));
    });
  });

  analysisPanel?.querySelectorAll(".content-tab[data-analysis-subject]").forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => activateAnalysisSubject(tab.dataset.analysisSubject));
    });
  });

  analysisPanel?.addEventListener("click", (event) => {
    const pick = event.target.closest("[data-wrong-note-no]");
    if (pick) {
      selectedWrongNo = Number(pick.dataset.wrongNoteNo);
      refreshAnalysisSummary();
      return;
    }

    const cause = event.target.closest("[data-wrong-cause]");
    if (!cause) return;
    keepWindowScroll(() => {
      cause.parentElement?.querySelectorAll("[data-wrong-cause]").forEach((button) => {
        button.classList.toggle("active", button === cause);
      });
    });
  });

  bindTakenExamPicker(scoresPanel, (month) => {
    selectedExamMonth = month;
    selectedWrongNo = null;
    activateTakenExam(analysisPanel, month);
    refreshStrategySubject();
    refreshAnalysisSummary();
  });
  bindTakenExamPicker(regularPanel, (month) => {
    activateRegularMonth(month);
    window.AdmissionRegular?.onMonthChange(month);
  });
  bindTakenExamPicker(analysisPanel, (month) => {
    selectedExamMonth = month;
    selectedWrongNo = null;
    activateTakenExam(scoresPanel, month);
    refreshAnalysisSummary();
  });

  window.AdmissionRegular?.initCustomSelects(scoresPanel);
  window.AdmissionRegular?.initCustomSelects(regularPanel);

  scoresPanel?.querySelectorAll("[data-score-subject]").forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => activateScoreSubject(tab.dataset.scoreSubject));
    });
  });

  scoresPanel?.querySelectorAll("[data-trend-subject]").forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => {
        selectedTrendSubject = tab.dataset.trendSubject;
        refreshTrendSubject();
      });
    });
  });

  scoresPanel?.querySelectorAll(".month-chip[data-score-scope]").forEach((chip) => {
    chip.addEventListener("click", () => {
      keepWindowScroll(() => activateScoreScope(chip.dataset.scoreScope));
    });
  });

  const EARLY_MY_SCORE = 89.1;
  const EARLY_TARGET_KEYS = ["e1", "e2", "e3", "e4", "e5", "e6"];
  const EARLY_SELECT_LABELS = {
    univ: "대학 선택",
    category: "전형유형 선택",
    type: "전형명 선택",
    major: "모집단위 선택"
  };
  const EARLY_UNIVERSITIES = {
    고려대학교: {
      학생부교과: { 학교추천전형: ["자연계열", "인문계열"] }
    },
    성균관대학교: {
      학생부교과: { 학교장추천전형: ["자연계열", "인문계열"] }
    },
    건국대학교: {
      학생부교과: { KU지역균형: ["기계·로봇·자동차공학부", "경영학과"] }
    },
    인하대학교: {
      학생부교과: { 학생부교과: ["기계공학과", "컴퓨터공학과"] }
    },
    단국대학교: {
      학생부교과: { DKU학생부교과: ["기계공학과", "경영학부"] }
    },
    한양대학교: {
      학생부교과: { "학생부교과(추천)": ["기계공학부", "컴퓨터소프트웨어학부"] }
    },
    중앙대학교: {
      학생부교과: { "학생부교과(지역균형)": ["경영학부", "소프트웨어학부"] }
    },
    경희대학교: {
      학생부교과: { 지역균형전형: ["공과계열", "경영학과"] }
    }
  };
  const EARLY_TARGET_DEFAULTS = {
    e1: { university: "고려대학교", category: "학생부교과", type: "학교추천전형", major: "자연계열", cutoff: 93.5 },
    e2: { university: "한양대학교", category: "학생부교과", type: "학생부교과(추천)", major: "기계공학부", cutoff: 90.8 },
    e3: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e4: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e5: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e6: { university: "", category: "", type: "", major: "", cutoff: 0 }
  };
  const EARLY_LIST_ROWS = [
    { id: 1, region: "서울", university: "고려대학교", category: "교과", type: "학교추천전형", major: "자연계열", quota: 18, rate: 8.4, myScore: "89.1", cutoff: "92.4", diff: -3.3, csat: "3개 합 7", csatMet: "미충족", track: "자연", tier: { label: "상향", className: "is-reach" }, gradeMin: 1.28, gradeMax: 1.72 },
    { id: 2, region: "서울", university: "성균관대학교", category: "교과", type: "학교장추천전형", major: "자연계열", quota: 25, rate: 10.7, myScore: "842", cutoff: "850.5", diff: -8.5, csat: "3개 합 7", csatMet: "미충족", track: "자연", tier: { label: "상향", className: "is-reach" }, gradeMin: 1.35, gradeMax: 1.85 },
    { id: 3, region: "서울", university: "건국대학교", category: "교과", type: "KU지역균형", major: "기계·로봇·자동차공학부", quota: 32, rate: 12.3, myScore: "704.8", cutoff: "700", diff: 4.8, csat: "없음", csatMet: "해당없음", track: "자연", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.45, gradeMax: 2.90 },
    { id: 4, region: "인천·경기", university: "인하대학교", category: "교과", type: "학생부교과", major: "기계공학과", quota: 29, rate: 9.8, myScore: "1,007.5", cutoff: "1,000", diff: 7.5, csat: "3개 합 7", csatMet: "충족", track: "자연", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.55, gradeMax: 3.10 },
    { id: 5, region: "인천·경기", university: "단국대학교", category: "교과", type: "DKU학생부교과", major: "기계공학과", quota: 24, rate: 7.6, myScore: "817.2", cutoff: "800", diff: 17.2, csat: "없음", csatMet: "해당없음", track: "자연", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.70, gradeMax: 3.25 },
    { id: 6, region: "서울", university: "한양대학교", category: "교과", type: "학생부교과(추천)", major: "기계공학부", quota: 22, rate: 9.1, myScore: "89.1", cutoff: "90.8", diff: -1.7, csat: "3개 합 7", csatMet: "충족", track: "자연", tier: { label: "적정", className: "is-fit" }, gradeMin: 1.62, gradeMax: 2.05 },
    { id: 7, region: "서울", university: "중앙대학교", category: "교과", type: "학생부교과(지역균형)", major: "경영학부", quota: 26, rate: 8.2, myScore: "701.5", cutoff: "698.2", diff: 3.3, csat: "3개 합 7", csatMet: "미충족", track: "인문", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.40, gradeMax: 2.88 },
    { id: 8, region: "서울", university: "경희대학교", category: "교과", type: "지역균형전형", major: "공과계열", quota: 20, rate: 7.4, myScore: "86.5", cutoff: "88.0", diff: -1.5, csat: "2개 합 5", csatMet: "충족", track: "자연", tier: { label: "적정", className: "is-fit" }, gradeMin: 1.90, gradeMax: 2.50 }
  ];
  const EARLY_GRADE_SCALE = { min: 1, max: 4.5 };

  function emptyEarlyTarget() {
    return { university: "", category: "", type: "", major: "", cutoff: 0 };
  }

  function earlyTargetGradeRange(target) {
    const row = EARLY_LIST_ROWS.find(
      (item) =>
        item.university === target.university &&
        item.type === target.type &&
        item.major === target.major
    );
    if (row) return { min: row.gradeMin, max: row.gradeMax };
    return { min: 2, max: 2.5 };
  }

  function cloneEarlyTargets() {
    return EARLY_TARGET_KEYS.reduce((targets, key) => {
      targets[key] = { ...EARLY_TARGET_DEFAULTS[key] };
      return targets;
    }, {});
  }

  function earlyGroupLabel(category) {
    if (String(category).includes("교과")) return "교과";
    if (String(category).includes("종합")) return "종합";
    return "종합";
  }

  function earlyTier(myScore, cutoff) {
    const diff = myScore - cutoff;
    if (diff < -3) return { label: "상향", className: "is-reach" };
    if (diff < 3) return { label: "적정", className: "is-fit" };
    return { label: "안정", className: "is-safe" };
  }

  function earlyGradeTier(myGrade, gradeMin, gradeMax) {
    if (myGrade <= gradeMin) return { label: "안정", className: "is-safe" };
    if (myGrade <= gradeMax) return { label: "적정", className: "is-fit" };
    return { label: "상향", className: "is-reach" };
  }

  function readEarlySimpleGrade() {
    const input = earlyPanel?.querySelector("[data-early-simple-grade]");
    const raw = Number.parseFloat(input?.value);
    if (!Number.isFinite(raw) || raw <= 0) return 2.31;
    return Math.round(raw * 100) / 100;
  }

  function earlyFormatGrade(value) {
    return Number(value).toFixed(2);
  }

  function earlyFormatGradeRange(min, max) {
    return `${earlyFormatGrade(min)}~${earlyFormatGrade(max)}`;
  }

  function earlyFormatGradeDiff(diff) {
    const rounded = Math.round(diff * 100) / 100;
    if (rounded > 0) return `+${rounded.toFixed(2)}`;
    return rounded.toFixed(2);
  }

  function earlyGradeToRatio(grade) {
    const { min, max } = EARLY_GRADE_SCALE;
    return Math.min(1, Math.max(0, (grade - min) / (max - min)));
  }

  function earlyGradeDistMarkup(myGrade, gradeMin, gradeMax) {
    const start = earlyGradeToRatio(gradeMin);
    const end = earlyGradeToRatio(gradeMax);
    const me = earlyGradeToRatio(myGrade);
    const width = Math.max(end - start, 0.08);
    return `
      <div class="adm-grade-dist" style="--me:${me}; --range-start:${start}; --range-width:${width};" aria-label="내 등급 ${earlyFormatGrade(myGrade)}">
        <span class="adm-grade-dist-me">나</span>
        <span class="adm-grade-dist-pin" aria-hidden="true"></span>
        <div class="adm-grade-dist-track">
          <i class="adm-grade-dist-range"></i>
        </div>
      </div>`;
  }

  function fillEarlySelect(select, options, selected, blankLabel) {
    if (!select) return;
    const values = [""].concat(options);
    select.innerHTML = values
      .map((option) => {
        const label = option || blankLabel;
        return `<option value="${option}"${option === selected ? " selected" : ""}>${label}</option>`;
      })
      .join("");
  }

  function earlyUnivEntry(university) {
    return EARLY_UNIVERSITIES[university] || {};
  }

  let earlyTargets = cloneEarlyTargets();
  const earlyFavoritesByView = {
    precise: new Set(),
    simple: new Set()
  };
  const earlyModal = document.querySelector("#admEarlyTargetModal");
  const earlyDetailModal = document.querySelector("#admEarlyDetailModal");
  const earlyListPanels = earlyPanel
    ? [...earlyPanel.querySelectorAll(".content-tab-panel[data-admission-view]")]
    : [];

  function earlyFavoritesFor(root) {
    const view = root?.dataset.admissionView === "simple" ? "simple" : "precise";
    return earlyFavoritesByView[view];
  }

  function earlyFormatDiff(diff) {
    const rounded = Math.round(diff * 10) / 10;
    const formatted = rounded.toFixed(1);
    if (rounded > 0) return `+${formatted}`;
    return formatted;
  }

  function earlyFormatRate(rate) {
    const rounded = Math.round(rate * 10) / 10;
    return `${rounded.toFixed(1)} : 1`;
  }

  function renderEarlyList() {
    earlyListPanels.forEach(renderEarlyListFor);
  }

  function renderEarlyListFor(root) {
    const tbodies = [...root.querySelectorAll("[data-early-list-body]")];
    if (!tbodies.length) return;

    const category = root.querySelector("[data-early-category-filter]")?.value || "all";
    const track = root.querySelector("[data-early-track-filter]")?.value || "all";
    const tierFilter = root.querySelector("[data-early-tier-filter]")?.value || "all";
    const listTab = root.querySelector("[data-early-list-tab].active")?.dataset.earlyListTab || "all";
    const search = root.querySelector("[data-early-search]")?.value.trim().toLowerCase() || "";
    const favorites = earlyFavoritesFor(root);
    const myGrade = readEarlySimpleGrade();

    tbodies.forEach((tbody) => {
      const isSimple = root.dataset.admissionView === "simple" || tbody.hasAttribute("data-early-list-simple");
      const filtered = EARLY_LIST_ROWS.filter((row) => {
        const tier = isSimple ? earlyGradeTier(myGrade, row.gradeMin, row.gradeMax) : row.tier;
        if (listTab === "fav" && !favorites.has(row.id)) return false;
        if (category !== "all" && row.category !== category) return false;
        if (track !== "all" && row.track !== track) return false;
        if (tierFilter !== "all" && tier.className !== tierFilter) return false;
        if (search) {
          const haystack = `${row.university} ${row.major} ${row.type} ${row.category}`.toLowerCase();
          if (!haystack.includes(search)) return false;
        }
        return true;
      });

      tbody.innerHTML = filtered
        .map((row) => {
          const saved = favorites.has(row.id);
          const tier = isSimple ? earlyGradeTier(myGrade, row.gradeMin, row.gradeMax) : row.tier;
          const scoreCell = isSimple
            ? `<td class="adm-grade-dist-cell">${earlyGradeDistMarkup(myGrade, row.gradeMin, row.gradeMax)}</td>
            <td class="adm-grade-range-cell"><strong>${earlyFormatGradeRange(row.gradeMin, row.gradeMax)}</strong></td>
            <td class="adm-csat-plain">${row.csat}</td>
            <td class="adm-csat-plain">${row.csatMet}</td>`
            : `<td><strong>${row.myScore}</strong></td>
            <td><strong>${row.cutoff}</strong></td>
            <td class="${row.diff >= 0 ? "is-up" : "is-down"}">${earlyFormatDiff(row.diff)}</td>`;
          return `
          <tr>
            <td class="adm-list-uni">${row.university}</td>
            <td>${row.type}</td>
            <td>${row.track}</td>
            <td>${row.major}</td>
            <td>${row.quota}명</td>
            <td>${earlyFormatRate(row.rate)}</td>
            ${scoreCell}
            <td><span class="adm-tier ${tier.className}">${tier.label}</span></td>
            <td>
              <button type="button" class="adm-fav-btn${saved ? " is-active" : ""}" data-early-fav-toggle="${row.id}">
                ${saved ? "저장됨" : "저장"}
              </button>
            </td>
          </tr>`;
        })
        .join("");
    });
  }

  function renderEarlyTargetCards() {
    earlyPanel?.querySelectorAll("[data-early-target-cards]").forEach((el) => {
      el.innerHTML = earlyTargetCardsMarkup(true);
    });
  }

  function earlyTargetCardsMarkup(isSimple) {
    const myGrade = isSimple ? readEarlySimpleGrade() : null;
    return EARLY_TARGET_KEYS.map((key) => {
      const target = earlyTargets[key];
      if (!target.university) {
        return `<button type="button" class="adm-target-card is-empty" data-early-open-target aria-label="모집단위 추가">+</button>`;
      }
      const gradeRange = isSimple ? earlyTargetGradeRange(target) : null;
      const tier = isSimple
        ? earlyGradeTier(myGrade, gradeRange.min, gradeRange.max)
        : earlyTier(EARLY_MY_SCORE, target.cutoff);
      const myLabel = isSimple ? "내 등급" : "내 환산점수";
      const cutoffLabel = isSimple ? "지원가능 등급" : "지원가능 점수";
      const myValue = isSimple ? earlyFormatGrade(myGrade) : EARLY_MY_SCORE;
      const cutoffValue = isSimple ? earlyFormatGradeRange(gradeRange.min, gradeRange.max) : target.cutoff;
      return `
        <article class="adm-target-card" data-early-open-target>
          <div class="adm-target-card-top">
            <span class="adm-target-group">${earlyGroupLabel(target.category)}</span>
            <h3 class="adm-target-univ">${target.university}</h3>
            <span class="adm-tier ${tier.className}">${tier.label}</span>
          </div>
          <p class="adm-target-meta">${target.type} · ${target.major}</p>
          <div class="adm-target-scores">
            <div class="adm-score-box is-mine">
              <span class="adm-score-label">${myLabel}</span>
              <strong class="adm-score-value">${myValue}</strong>
            </div>
            <div class="adm-score-box is-cutoff">
              <span class="adm-score-label">${cutoffLabel}</span>
              <strong class="adm-score-value">${cutoffValue}</strong>
            </div>
          </div>
        </article>`;
    }).join("");
  }

  function fillEarlyTargetModal(targets) {
    const universities = Object.keys(EARLY_UNIVERSITIES);
    EARLY_TARGET_KEYS.forEach((key) => {
      const target = targets[key];
      const univSelect = earlyModal?.querySelector(`[data-early-target-field="${key}-univ"]`);
      const categorySelect = earlyModal?.querySelector(`[data-early-target-field="${key}-category"]`);
      const typeSelect = earlyModal?.querySelector(`[data-early-target-field="${key}-type"]`);
      const majorSelect = earlyModal?.querySelector(`[data-early-target-field="${key}-major"]`);
      const univData = earlyUnivEntry(target.university);
      const categories = Object.keys(univData);
      const types = target.category ? Object.keys(univData[target.category] || {}) : [];
      const majors = target.category && target.type ? univData[target.category]?.[target.type] || [] : [];

      fillEarlySelect(univSelect, universities, target.university || "", EARLY_SELECT_LABELS.univ);
      fillEarlySelect(categorySelect, categories, target.category || "", EARLY_SELECT_LABELS.category);
      fillEarlySelect(typeSelect, types, target.type || "", EARLY_SELECT_LABELS.type);
      fillEarlySelect(majorSelect, majors, target.major || "", EARLY_SELECT_LABELS.major);

      if (univSelect) {
        univSelect.onchange = () => {
          const univ = univSelect.value;
          const nextCategories = Object.keys(earlyUnivEntry(univ));
          fillEarlySelect(categorySelect, nextCategories, "", EARLY_SELECT_LABELS.category);
          fillEarlySelect(typeSelect, [], "", EARLY_SELECT_LABELS.type);
          fillEarlySelect(majorSelect, [], "", EARLY_SELECT_LABELS.major);
        };
      }

      if (categorySelect) {
        categorySelect.onchange = () => {
          const univ = univSelect.value;
          const category = categorySelect.value;
          const nextTypes = univ && category ? Object.keys(earlyUnivEntry(univ)[category] || {}) : [];
          fillEarlySelect(typeSelect, nextTypes, "", EARLY_SELECT_LABELS.type);
          fillEarlySelect(majorSelect, [], "", EARLY_SELECT_LABELS.major);
        };
      }

      if (typeSelect) {
        typeSelect.onchange = () => {
          const univ = univSelect.value;
          const category = categorySelect.value;
          const type = typeSelect.value;
          const nextMajors = univ && category && type ? earlyUnivEntry(univ)[category]?.[type] || [] : [];
          fillEarlySelect(majorSelect, nextMajors, "", EARLY_SELECT_LABELS.major);
        };
      }
    });
  }

  function setEarlyModalOpen(open) {
    if (!earlyModal) return;
    earlyModal.hidden = !open;
    updateEarlyBodyModalState();
  }

  function updateEarlyBodyModalState() {
    const regularOpen = !document.querySelector("#admTargetModal")?.hidden;
    const detailOpen = !document.querySelector("#admDetailModal")?.hidden;
    const earlyOpen = Boolean(earlyModal && !earlyModal.hidden);
    const earlyDetailOpen = Boolean(earlyDetailModal && !earlyDetailModal.hidden);
    document.body.classList.toggle("adm-modal-open", regularOpen || detailOpen || earlyOpen || earlyDetailOpen);
  }

  function fillEarlyDetailModal(rowId, isSimple) {
    const row = EARLY_LIST_ROWS.find((item) => item.id === rowId);
    if (!row || !earlyDetailModal) return;
    const myGrade = isSimple ? readEarlySimpleGrade() : null;
    const tier = isSimple ? earlyGradeTier(myGrade, row.gradeMin, row.gradeMax) : row.tier;
    const diffValue = isSimple ? row.gradeMax - myGrade : row.diff;
    const diff = isSimple ? earlyFormatGradeDiff(diffValue) : earlyFormatDiff(row.diff);
    const diffClass = diffValue >= 0 ? "is-up" : "is-down";
    const myLabel = isSimple ? "내 등급" : "내 환산점수";
    const cutoffLabel = isSimple ? "지원가능 등급" : "지원가능 점수";
    const myValue = isSimple ? earlyFormatGrade(myGrade) : row.myScore;
    const cutoffValue = isSimple ? earlyFormatGradeRange(row.gradeMin, row.gradeMax) : row.cutoff;
    const diffLabel = isSimple ? "등급 차이" : "점수 차이";
    earlyDetailModal.querySelector("[data-early-detail-my-label]").textContent = myLabel;
    earlyDetailModal.querySelector("[data-early-detail-cutoff-label]").textContent = cutoffLabel;
    earlyDetailModal.querySelector("[data-early-detail-badges]").innerHTML = `
      <span class="adm-detail-badge is-group">${row.category}</span>
      <span class="adm-detail-badge is-tier ${tier.className}">${tier.label}</span>`;
    earlyDetailModal.querySelector("[data-early-detail-title]").textContent = `${row.university} ${row.major}`;
    earlyDetailModal.querySelector("[data-early-detail-scores]").innerHTML = `
      <div class="adm-detail-score-box">
        <span class="adm-detail-score-label">${myLabel}</span>
        <strong class="adm-detail-score-value">${myValue}</strong>
      </div>
      <div class="adm-detail-score-box">
        <span class="adm-detail-score-label">${cutoffLabel}</span>
        <strong class="adm-detail-score-value">${cutoffValue}</strong>
      </div>
      <div class="adm-detail-score-box">
        <span class="adm-detail-score-label">${diffLabel}</span>
        <strong class="adm-detail-score-value adm-detail-diff-value ${diffClass}">${diff}</strong>
      </div>`;
    earlyDetailModal.querySelector("[data-early-detail-result-body]").innerHTML = `
      <tr>
        <td>${row.category}</td>
        <td>${row.type}</td>
        <td>${row.track}</td>
        <td><strong>${myValue}</strong></td>
        <td><strong>${cutoffValue}</strong></td>
        <td class="adm-detail-diff ${diffClass}">${diff}</td>
        <td><span class="adm-detail-badge is-tier ${tier.className}">${tier.label}</span></td>
      </tr>`;
  }

  function openEarlyDetailModal(rowId, isSimple) {
    fillEarlyDetailModal(rowId, isSimple);
    if (!earlyDetailModal) return;
    earlyDetailModal.hidden = false;
    updateEarlyBodyModalState();
  }

  function closeEarlyDetailModal() {
    if (!earlyDetailModal) return;
    earlyDetailModal.hidden = true;
    updateEarlyBodyModalState();
  }

  function openEarlyTargetModal() {
    fillEarlyTargetModal(earlyTargets);
    setEarlyModalOpen(true);
  }

  function closeEarlyTargetModal() {
    setEarlyModalOpen(false);
  }

  function saveEarlyTargetModal() {
    EARLY_TARGET_KEYS.forEach((key) => {
      const university = earlyModal.querySelector(`[data-early-target-field="${key}-univ"]`)?.value;
      const category = earlyModal.querySelector(`[data-early-target-field="${key}-category"]`)?.value;
      const type = earlyModal.querySelector(`[data-early-target-field="${key}-type"]`)?.value;
      const major = earlyModal.querySelector(`[data-early-target-field="${key}-major"]`)?.value;
      const preset = EARLY_TARGET_DEFAULTS[key];
      earlyTargets[key] =
        university && category && type && major
          ? {
              university,
              category,
              type,
              major,
              cutoff: preset.cutoff || 88.0
            }
          : emptyEarlyTarget();
    });
    renderEarlyTargetCards();
    closeEarlyTargetModal();
  }

  function fillEarlySharedFilters() {
    const options = window.AdmissionRegular?.TRACK_OPTIONS;
    if (!options?.length) return;
    earlyPanel?.querySelectorAll("[data-early-track-filter]").forEach((select) => {
      select.innerHTML = options
        .map((option) => `<option value="${option.value}">${option.label}</option>`)
        .join("");
    });
  }

  renderEarlyTargetCards();
  fillEarlySharedFilters();
  renderEarlyList();
  window.AdmissionRegular?.initCustomSelects(earlyPanel);
  window.AdmissionRegular?.initCustomSelects(earlyModal);
  earlyPanel?.querySelectorAll("[data-early-target-cards]").forEach((el) => {
    el.addEventListener("click", (event) => {
      if (!event.target.closest("[data-early-open-target]")) return;
      openEarlyTargetModal();
    });
  });
  earlyModal?.querySelectorAll("[data-early-modal-close]").forEach((button) => {
    button.addEventListener("click", closeEarlyTargetModal);
  });
  earlyModal?.querySelector("[data-early-target-reset]")?.addEventListener("click", () => {
    fillEarlyTargetModal(cloneEarlyTargets());
  });
  earlyModal?.querySelector("[data-early-target-save]")?.addEventListener("click", saveEarlyTargetModal);

  earlyListPanels.forEach((root) => {
    root.querySelectorAll("[data-early-list-tab]").forEach((tab) => {
      tab.addEventListener("click", () => {
        keepWindowScroll(() => {
          root.querySelectorAll("[data-early-list-tab]").forEach((el) => {
            const isActive = el === tab;
            el.classList.toggle("active", isActive);
            el.setAttribute("aria-selected", isActive ? "true" : "false");
          });
          renderEarlyListFor(root);
        });
      });
    });

    const searchInput = root.querySelector("[data-early-search]");
    const runSearch = () => renderEarlyListFor(root);
    root.querySelector("[data-early-search-submit]")?.addEventListener("click", runSearch);
    searchInput?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        runSearch();
      }
    });
    root.querySelector("[data-early-category-filter]")?.addEventListener("change", () => renderEarlyListFor(root));
    root.querySelector("[data-early-track-filter]")?.addEventListener("change", () => renderEarlyListFor(root));
    root.querySelector("[data-early-tier-filter]")?.addEventListener("change", () => renderEarlyListFor(root));
    root.querySelectorAll("[data-early-list-body]").forEach((tbody) => {
      tbody.addEventListener("click", (event) => {
        const button = event.target.closest("[data-early-fav-toggle]");
        if (!button) return;
        const id = Number(button.dataset.earlyFavToggle);
        const favorites = earlyFavoritesFor(root);
        if (favorites.has(id)) favorites.delete(id);
        else favorites.add(id);
        renderEarlyListFor(root);
      });
    });
  });
  earlyDetailModal?.querySelectorAll("[data-early-detail-close]").forEach((button) => {
    button.addEventListener("click", closeEarlyDetailModal);
  });

  const earlySimpleGrade = earlyPanel?.querySelector("[data-early-simple-grade]");
  earlySimpleGrade?.addEventListener("input", () => {
    const cleaned = earlySimpleGrade.value.replace(/[^\d.]/g, "");
    const firstDot = cleaned.indexOf(".");
    const normalized =
      firstDot === -1
        ? cleaned
        : `${cleaned.slice(0, firstDot)}.${cleaned.slice(firstDot + 1).replace(/\./g, "")}`;
    const [whole, fraction = ""] = normalized.split(".");
    earlySimpleGrade.value = firstDot === -1 ? whole : `${whole}.${fraction.slice(0, 2)}`;
  });
  earlySimpleGrade?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    earlyPanel?.querySelector("[data-early-simple-submit]")?.click();
  });
  earlyPanel?.querySelector("[data-early-simple-submit]")?.addEventListener("click", () => {
    renderEarlyList();
    renderEarlyTargetCards();
  });

  Object.values(subMap).forEach(({ attr, fallback }) => activateSub(attr, fallback));
  activate("scores");
})();
