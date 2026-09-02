(() => {
  const tabs = [...document.querySelectorAll(".nav-link")];
  const panels = [...document.querySelectorAll(".panel")];
  const pageTitle = document.querySelector("#pageTitle");
  const dropdownLinks = [...document.querySelectorAll(".nav-dropdown-link")];
  const navZone = document.querySelector(".header-nav-zone");
  const megaCols = [...document.querySelectorAll(".nav-mega-col")];
  const megaTitles = [...document.querySelectorAll(".nav-mega-title")];
  const mypageButtons = [...document.querySelectorAll(".btn-mypage")];
  const mypagePanel = document.querySelector('.panel[data-panel="mypage"]');
  const regularPanel = document.querySelector('.sub-panel[data-admission="regular"]');
  const earlyPanel = document.querySelector('.sub-panel[data-admission="early"]');
  const scoresMockPanel = document.querySelector('.sub-panel[data-scores="mock"]');
  const scoresSchoolPanel = document.querySelector('.sub-panel[data-scores="school"]');
  const analysisPanel = document.querySelector('.panel[data-panel="analysis"]');
  const contentTabs = mypagePanel ? [...mypagePanel.querySelectorAll(".content-tab[data-mypage]")] : [];
  const schoolGradeChips = mypagePanel ? [...mypagePanel.querySelectorAll(".month-chip[data-school-grade]")] : [];
  const mockMonthChips = mypagePanel ? [...mypagePanel.querySelectorAll(".month-chip[data-mock-month]")] : [];
  const regularMonthTabs = regularPanel ? [...regularPanel.querySelectorAll(".content-tab[data-regular-month]")] : [];
  const scoreViewTabs = scoresMockPanel ? [...scoresMockPanel.querySelectorAll(".content-tab[data-score-view]")] : [];
  const admissionViewTabs = earlyPanel ? [...earlyPanel.querySelectorAll(".content-tab[data-admission-view]")] : [];
  const questionViewTabs = analysisPanel ? [...analysisPanel.querySelectorAll(".content-tab[data-question-view]")] : [];

  const labels = {
    scores: "성적 분석",
    analysis: "문항분석 및 오답노트",
    admission: "합격 예측",
    diagnostic: "학습종합진단검사"
  };

  const subMap = {
    scores: { attr: "data-scores", fallback: "mock" },
    analysis: { attr: "data-analysis-view", fallback: "summary" },
    admission: { attr: "data-admission", fallback: "regular" },
    diagnostic: { attr: "data-diagnostic", fallback: "guide" }
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

  function closeMenus() {
    navZone?.classList.add("is-closed");
    megaCols.forEach((col) => col.classList.remove("is-highlighted"));
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  function highlightMegaCol(panelName) {
    megaCols.forEach((col) => {
      col.classList.toggle("is-highlighted", col.dataset.panel === panelName);
    });
  }

  function scrollToMainTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

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

  function activateScoreView(view) {
    scoreViewTabs.forEach((tab) => {
      const isActive = tab.dataset.scoreView === view;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    scoresMockPanel?.querySelectorAll(".content-tab-panel[data-score-view]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.scoreView === view);
    });

    activateTakenExam(scoresMockPanel, selectedExamMonth);
    if (view === "exam") refreshExamOverview();
    if (view === "strategy") refreshStrategySubject();
  }

  let selectedAnalysisView = "summary";

  function activateAnalysisView(view) {
    selectedAnalysisView = view;

    dropdownLinks.forEach((link) => {
      if (!link.hasAttribute("data-analysis-view")) return;
      link.classList.toggle("active", link.dataset.analysisView === view);
    });

    analysisPanel?.querySelectorAll(".content-tab-panel[data-analysis-view]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.analysisView === view);
    });

    activateTakenExam(analysisPanel, selectedExamMonth);
    syncNoteScopeView();
  }

  function activateQuestionView(view) {
    questionViewTabs.forEach((tab) => {
      const isActive = tab.dataset.questionView === view;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    analysisPanel?.querySelectorAll(".content-tab-panel[data-question-view]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.questionView === view);
    });
  }

  let selectedWrongNo = null;
  let selectedNoteScope = "selected";

  function isAnalysisNotesView() {
    return selectedAnalysisView === "notes";
  }

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

    const summary = analysisPanel?.querySelector("[data-exam-summary]");
    if (summary) {
      summary.innerHTML = window.MegaReportData?.renderExamSummary?.(month, subject) || "";
    }

    const result = analysisPanel?.querySelector("[data-subject-result]");
    if (result) {
      result.innerHTML = window.MegaReportData?.renderSubjectResultSummary?.(month, subject) || "";
    }

    const review = analysisPanel?.querySelector("[data-exam-review]");
    if (review) {
      review.innerHTML = window.MegaReportData?.renderExamReview?.(month, subject) || "";
    }

    const causes = analysisPanel?.querySelector("[data-exam-causes]");
    if (causes) {
      causes.innerHTML = window.MegaReportData?.renderExamCauses?.(month, subject) || "";
    }

    const questions = analysisPanel?.querySelector("[data-subject-questions]");
    if (questions) {
      questions.innerHTML = window.MegaReportData?.renderSubjectQuestions?.(month, subject) || "";
    }

    const typeAnalysis = analysisPanel?.querySelector("[data-type-analysis]");
    if (typeAnalysis) {
      typeAnalysis.innerHTML = window.MegaReportData?.renderTypeAnalysis?.(month, subject) || "";
    }

    const itemAnalysis = analysisPanel?.querySelector("[data-item-analysis]");
    if (itemAnalysis) {
      itemAnalysis.innerHTML = window.MegaReportData?.renderItemAnalysis?.(month, subject) || "";
    }

    const contentWrongs = analysisPanel?.querySelector("[data-content-wrongs]");
    if (contentWrongs) {
      contentWrongs.innerHTML = window.MegaReportData?.renderContentWrongs?.(month, subject) || "";
    }

    const behaviorWrongs = analysisPanel?.querySelector("[data-behavior-wrongs]");
    if (behaviorWrongs) {
      behaviorWrongs.innerHTML = window.MegaReportData?.renderBehaviorWrongs?.(month, subject) || "";
    }

    const wrongNote = analysisPanel?.querySelector("[data-wrong-note]");
    if (wrongNote) {
      wrongNote.innerHTML = window.MegaReportData?.renderWrongNote?.(month, subject, selectedWrongNo) || "";
    }

    syncNoteScopeView();
  }

  function syncNoteScopeView() {
    const isAll = selectedNoteScope === "all" && isAnalysisNotesView();
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
    const selectAll = root === analysisPanel && selectedNoteScope === "all" && isAnalysisNotesView();
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
        const month = cell.dataset.takenExam;
        activateTakenExam(root, month);
        onSelect?.(month);
      });
    });
  }

  let selectedSubject = "국어";
  let selectedExamMonth = "3";
  let selectedTrendSubject = "국수탐";
  let selectedStrategySubject = "국어";
  let selectedSchoolTrendSubject = "전교과";

  function refreshExamOverview() {
    const overview = scoresMockPanel?.querySelector("[data-subject-overview]");
    if (overview) {
      overview.innerHTML = window.MegaReportData?.renderSubjectOverview?.(selectedExamMonth, "전체") || "";
    }

    const accuracy = scoresMockPanel?.querySelector("[data-subject-accuracy]");
    if (accuracy) {
      accuracy.innerHTML = window.MegaReportData?.renderSubjectAccuracy?.(selectedExamMonth, "전체") || "";
    }
  }

  function refreshPercentileReport(month) {
    if (month) selectedExamMonth = String(month);
    const target = scoresMockPanel?.querySelector("[data-percentile-report]");
    if (target) target.innerHTML = window.MegaReportData?.renderPercentileReport?.(month) || "";

    const accuracy = scoresMockPanel?.querySelector("[data-accuracy-compare]");
    if (accuracy) accuracy.innerHTML = window.MegaReportData?.renderAccuracyCompare?.(month) || "";

    const summary = scoresMockPanel?.querySelector("[data-score-summary]");
    if (summary) summary.innerHTML = window.MegaReportData?.renderScoreSummary?.(month) || "";
    refreshExamOverview();
  }

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

  function refreshSchoolTrend() {
    const target = scoresSchoolPanel?.querySelector("[data-school-trend-chart]");
    if (target) {
      target.innerHTML = window.MegaReportData?.renderSchoolTrendChart?.(selectedSchoolTrendSubject) || "";
    }

    scoresSchoolPanel?.querySelectorAll("[data-school-trend-subject]").forEach((tab) => {
      const isActive = tab.dataset.schoolTrendSubject === selectedSchoolTrendSubject;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function refreshTrendSubject() {
    const target = scoresMockPanel?.querySelector("[data-trend-subject-chart]");
    if (target) {
      target.innerHTML = window.MegaReportData?.renderTrendSubject?.(selectedTrendSubject) || "";
    }

    scoresMockPanel?.querySelectorAll("[data-trend-subject]").forEach((tab) => {
      const isActive = tab.dataset.trendSubject === selectedTrendSubject;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function refreshStrategySubject() {
    scoresMockPanel?.querySelectorAll("[data-strategy-subject]").forEach((tab) => {
      const isActive = tab.dataset.strategySubject === selectedStrategySubject;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    const summary = scoresMockPanel?.querySelector("[data-strategy-summary]");
    if (summary) {
      summary.innerHTML =
        window.MegaReportData?.renderStrategySummary?.(selectedStrategySubject, selectedExamMonth) || "";
    }

    const priority = scoresMockPanel?.querySelector("[data-strategy-priority]");
    if (priority) {
      priority.innerHTML =
        window.MegaReportData?.renderStrategyPriority?.(selectedExamMonth, selectedStrategySubject) || "";
    }

    const ratio = scoresMockPanel?.querySelector("[data-strategy-ratio]");
    if (ratio) {
      ratio.innerHTML =
        window.MegaReportData?.renderStrategyRatio?.(selectedExamMonth, selectedStrategySubject) || "";
    }

    const tasks = scoresMockPanel?.querySelector("[data-strategy-tasks]");
    if (tasks) {
      tasks.innerHTML =
        window.MegaReportData?.renderStrategyTasks?.(selectedStrategySubject, selectedExamMonth) || "";
    }
  }

  function resetScoreAnalysisView() {
    selectedSubject = "국어";
    selectedExamMonth = "3";
    selectedTrendSubject = "국수탐";
    selectedStrategySubject = "국어";
    activateScoreView("exam");
    activateTakenExam(scoresMockPanel, "3");
    refreshPercentileReport("3");
    refreshTrendSubject();
    refreshStrategySubject();
  }

  function resetAnalysisView() {
    activateAnalysisView("summary");
    activateQuestionView("type");
    activateAnalysisSubject("국어");
    activateNoteScope("selected");
    activateTakenExam(analysisPanel, selectedExamMonth);
  }

  function openMypage() {
    resetMypageView();
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
      if (panelName === "analysis") activateAnalysisView(name);
      setPageTitle(panelName, name);
      return;
    }

    setPageTitle(panelName);
  }

  if (navZone) {
    navZone.addEventListener("mouseenter", () => {
      navZone.classList.remove("is-closed");
    });

    navZone.addEventListener("mouseleave", () => {
      megaCols.forEach((col) => col.classList.remove("is-highlighted"));
      if (document.activeElement instanceof HTMLElement && navZone.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("mouseenter", () => {
      highlightMegaCol(tab.dataset.panel);
    });

    tab.addEventListener("click", () => {
      activate(tab.dataset.panel);
      scrollToMainTop();
    });
  });

  megaTitles.forEach((title) => {
    title.addEventListener("click", () => {
      activate(title.dataset.panel);
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
      activateMypageTab(tab.dataset.mypage);
      scrollToMainTop();
    });
  });

  schoolGradeChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activateSchoolGrade(chip.dataset.schoolGrade);
      scrollToMainTop();
    });
  });

  mockMonthChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activateMockMonth(chip.dataset.mockMonth);
      scrollToMainTop();
    });
  });

  regularMonthTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateRegularMonth(tab.dataset.regularMonth);
      window.AdmissionRegular?.onMonthChange(tab.dataset.regularMonth);
      scrollToMainTop();
    });
  });

  scoreViewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateScoreView(tab.dataset.scoreView);
      scrollToMainTop();
    });
  });

  admissionViewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateAdmissionView(tab.dataset.admissionView);
      scrollToMainTop();
    });
  });

  questionViewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateQuestionView(tab.dataset.questionView);
      scrollToMainTop();
    });
  });

  analysisPanel?.querySelectorAll("[data-note-scope]").forEach((chip) => {
    chip.addEventListener("click", () => {
      activateNoteScope(chip.dataset.noteScope);
    });
  });

  analysisPanel?.querySelectorAll(".content-tab[data-analysis-subject]").forEach((tab) => {
    tab.addEventListener("click", () => {
      activateAnalysisSubject(tab.dataset.analysisSubject);
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
    cause.parentElement?.querySelectorAll("[data-wrong-cause]").forEach((button) => {
      button.classList.toggle("active", button === cause);
    });
  });

  bindTakenExamPicker(scoresMockPanel, (month) => {
    selectedExamMonth = month;
    selectedWrongNo = null;
    activateTakenExam(analysisPanel, month);
    refreshPercentileReport(month);
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
    activateTakenExam(scoresMockPanel, month);
    refreshAnalysisSummary();
  });

  window.AdmissionRegular?.initCustomSelects(scoresMockPanel);
  window.AdmissionRegular?.initCustomSelects(regularPanel);

  scoresSchoolPanel?.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-school-trend-subject]");
    if (!tab || !scoresSchoolPanel.contains(tab)) return;
    selectedSchoolTrendSubject = tab.dataset.schoolTrendSubject;
    refreshSchoolTrend();
  });

  scoresMockPanel?.querySelectorAll("[data-trend-subject]").forEach((tab) => {
    tab.addEventListener("click", () => {
      selectedTrendSubject = tab.dataset.trendSubject;
      refreshTrendSubject();
    });
  });

  scoresMockPanel?.querySelectorAll("[data-strategy-subject]").forEach((tab) => {
    tab.addEventListener("click", () => {
      selectedStrategySubject = tab.dataset.strategySubject;
      refreshStrategySubject();
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
      학생부종합: { 계열적합전형: ["기계공학부", "경영학과"], 학업우수형: ["경영학과", "컴퓨터학과"] }
    },
    한양대학교: {
      학생부교과: { 추천형: ["기계공학부", "컴퓨터소프트웨어학부"] },
      학생부종합: { 일반전형: ["컴퓨터소프트웨어학부", "기계공학부"] }
    },
    연세대학교: {
      학생부종합: { 활동우수형: ["경영학과", "컴퓨터과학과"] }
    },
    성균관대학교: {
      학생부종합: { 학과모집: ["소프트웨어학과", "경영학과"] }
    },
    중앙대학교: {
      학생부교과: { 교과전형: ["소프트웨어학부", "경영학부"] }
    },
    경희대학교: {
      학생부종합: { 네오르네상스전형: ["컴퓨터공학과", "경영학과"] }
    }
  };
  const EARLY_TARGET_DEFAULTS = {
    e1: { university: "고려대학교", category: "학생부종합", type: "계열적합전형", major: "기계공학부", cutoff: 93.5 },
    e2: { university: "한양대학교", category: "학생부교과", type: "추천형", major: "기계공학부", cutoff: 90.8 },
    e3: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e4: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e5: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e6: { university: "", category: "", type: "", major: "", cutoff: 0 }
  };
  const EARLY_LIST_ROWS = [
    { id: 1, region: "서울", university: "고려대학교", category: "종합", type: "계열적합전형", major: "기계공학부", quota: 18, rate: 8.4, myScore: "89.1", cutoff: "92.4", diff: -3.3, csat: "none", track: "자연", tier: { label: "상향", className: "is-reach" }, gradeMin: 1.28, gradeMax: 1.72 },
    { id: 2, region: "서울", university: "성균관대학교", category: "종합", type: "탐구형", major: "기계공학부", quota: 25, rate: 10.7, myScore: "842", cutoff: "850.5", diff: -8.5, csat: "met", track: "자연", tier: { label: "상향", className: "is-reach" }, gradeMin: 1.35, gradeMax: 1.85 },
    { id: 3, region: "서울", university: "건국대학교", category: "종합", type: "KU자기추천", major: "기계항공공학부", quota: 32, rate: 12.3, myScore: "704.8", cutoff: "700", diff: 4.8, csat: "fail", track: "자연", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.45, gradeMax: 2.90 },
    { id: 4, region: "인천·경기", university: "인하대학교", category: "종합", type: "인하미래인재", major: "기계공학과", quota: 29, rate: 9.8, myScore: "1,007.5", cutoff: "1,000", diff: 7.5, csat: "met", track: "자연", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.55, gradeMax: 3.10 },
    { id: 5, region: "인천·경기", university: "단국대학교", category: "종합", type: "DKU인재", major: "기계공학과", quota: 24, rate: 7.6, myScore: "817.2", cutoff: "800", diff: 17.2, csat: "none", track: "자연", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.70, gradeMax: 3.25 },
    { id: 6, region: "서울", university: "한양대학교", category: "교과", type: "추천형", major: "기계공학부", quota: 22, rate: 9.1, myScore: "89.1", cutoff: "90.8", diff: -1.7, csat: "met", track: "자연", tier: { label: "적정", className: "is-fit" }, gradeMin: 1.62, gradeMax: 2.05 },
    { id: 7, region: "서울", university: "중앙대학교", category: "교과", type: "교과전형", major: "경영학부", quota: 26, rate: 8.2, myScore: "701.5", cutoff: "698.2", diff: 3.3, csat: "fail", track: "인문", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.40, gradeMax: 2.88 },
    { id: 8, region: "서울", university: "경희대학교", category: "종합", type: "네오르네상스전형", major: "컴퓨터공학과", quota: 20, rate: 7.4, myScore: "86.5", cutoff: "88.0", diff: -1.5, csat: "none", track: "자연", tier: { label: "적정", className: "is-fit" }, gradeMin: 1.90, gradeMax: 2.50 }
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
    const tbody = root.querySelector("[data-early-list-body]");
    if (!tbody) return;

    const isSimple = root.dataset.admissionView === "simple";
    const myGrade = isSimple ? readEarlySimpleGrade() : null;
    const category = root.querySelector("[data-early-category-filter]")?.value || "all";
    const track = root.querySelector("[data-early-track-filter]")?.value || "all";
    const tierFilter = root.querySelector("[data-early-tier-filter]")?.value || "all";
    const listTab = root.querySelector("[data-early-list-tab].active")?.dataset.earlyListTab || "all";
    const search = root.querySelector("[data-early-search]")?.value.trim().toLowerCase() || "";

    const favorites = earlyFavoritesFor(root);
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
            <td class="adm-csat-plain">${row.csat === "none" ? "없음" : "있음"}</td>`
          : `<td><strong>${row.myScore}</strong></td>
            <td><strong>${row.cutoff}</strong></td>
            <td class="${row.diff >= 0 ? "is-up" : "is-down"}">${earlyFormatDiff(row.diff)}</td>`;
        const detailCell = isSimple
          ? ""
          : `<td>
              <button type="button" class="adm-detail-btn" data-early-detail-open="${row.id}">상세</button>
            </td>`;
        return `
          <tr>
            <td>${row.category}</td>
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
            ${detailCell}
          </tr>`;
      })
      .join("");
  }

  function renderEarlyTargetCards() {
    earlyPanel?.querySelectorAll("[data-early-target-cards]").forEach((el) => {
      const isSimple = el.closest("[data-admission-view]")?.dataset.admissionView === "simple";
      el.innerHTML = earlyTargetCardsMarkup(isSimple);
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
        root.querySelectorAll("[data-early-list-tab]").forEach((el) => {
          const isActive = el === tab;
          el.classList.toggle("active", isActive);
          el.setAttribute("aria-selected", isActive ? "true" : "false");
        });
        renderEarlyListFor(root);
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
    root.querySelector("[data-early-list-body]")?.addEventListener("click", (event) => {
      const detailButton = event.target.closest("[data-early-detail-open]");
      if (detailButton) {
        openEarlyDetailModal(Number(detailButton.dataset.earlyDetailOpen), root.dataset.admissionView === "simple");
        return;
      }

      const button = event.target.closest("[data-early-fav-toggle]");
      if (!button) return;
      const id = Number(button.dataset.earlyFavToggle);
      const favorites = earlyFavoritesFor(root);
      if (favorites.has(id)) favorites.delete(id);
      else favorites.add(id);
      renderEarlyListFor(root);
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
    const simpleRoot = earlyPanel.querySelector('[data-admission-view="simple"]');
    if (simpleRoot) renderEarlyListFor(simpleRoot);
    renderEarlyTargetCards();
  });

  Object.values(subMap).forEach(({ attr, fallback }) => activateSub(attr, fallback));
  activate("scores", "mock");
})();
