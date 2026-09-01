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
  const scoresMockPanel = document.querySelector('.sub-panel[data-scores="mock"]');
  const analysisPanel = document.querySelector('.panel[data-panel="analysis"]');
  const contentTabs = mypagePanel ? [...mypagePanel.querySelectorAll(".content-tab[data-mypage]")] : [];
  const schoolGradeChips = mypagePanel ? [...mypagePanel.querySelectorAll(".month-chip[data-school-grade]")] : [];
  const mockMonthChips = mypagePanel ? [...mypagePanel.querySelectorAll(".month-chip[data-mock-month]")] : [];
  const regularMonthTabs = regularPanel ? [...regularPanel.querySelectorAll(".content-tab[data-regular-month]")] : [];
  const scoreViewTabs = scoresMockPanel ? [...scoresMockPanel.querySelectorAll(".content-tab[data-score-view]")] : [];
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
    if (view === "subject") refreshSubjectOverview();
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
  let selectedTrendSubject = "전체";
  let selectedStrategySubject = "전체";

  function refreshSubjectOverview() {
    const overview = scoresMockPanel?.querySelector("[data-subject-overview]");
    if (overview) {
      overview.innerHTML = window.MegaReportData?.renderSubjectOverview?.(selectedExamMonth, selectedSubject) || "";
    }

    const accuracy = scoresMockPanel?.querySelector("[data-subject-accuracy]");
    if (accuracy) {
      accuracy.innerHTML = window.MegaReportData?.renderSubjectAccuracy?.(selectedExamMonth, selectedSubject) || "";
    }

    const areas = scoresMockPanel?.querySelector("[data-subject-areas]");
    if (areas) {
      areas.innerHTML = window.MegaReportData?.renderSubjectAreas?.(selectedExamMonth, selectedSubject) || "";
    }

    const questions = scoresMockPanel?.querySelector("[data-subject-questions]");
    if (questions) {
      questions.innerHTML = window.MegaReportData?.renderSubjectQuestions?.(selectedExamMonth, selectedSubject) || "";
    }

    const result = scoresMockPanel?.querySelector("[data-subject-result]");
    if (result) {
      result.innerHTML = window.MegaReportData?.renderSubjectResultSummary?.(selectedExamMonth, selectedSubject) || "";
    }

    scoresMockPanel?.querySelectorAll("[data-subject-chip]").forEach((chip) => {
      const isActive = chip.dataset.subjectChip === selectedSubject;
      chip.classList.toggle("active", isActive);
      chip.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function refreshPercentileReport(month) {
    if (month) selectedExamMonth = String(month);
    const target = scoresMockPanel?.querySelector("[data-percentile-report]");
    if (target) target.innerHTML = window.MegaReportData?.renderPercentileReport?.(month) || "";

    const accuracy = scoresMockPanel?.querySelector("[data-accuracy-compare]");
    if (accuracy) accuracy.innerHTML = window.MegaReportData?.renderAccuracyCompare?.(month) || "";

    const summary = scoresMockPanel?.querySelector("[data-score-summary]");
    if (summary) summary.innerHTML = window.MegaReportData?.renderScoreSummary?.(month) || "";
    refreshSubjectOverview();
  }

  function resetMypageView() {
    activateMypageTab("school");
    activateSchoolGrade("1");
    activateMockMonth("3");
  }

  function resetRegularAdmissionView() {
    activateTakenExam(regularPanel, "3");
    activateRegularMonth("3");
    window.AdmissionRegular?.resetAll();
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
    selectedTrendSubject = "전체";
    selectedStrategySubject = "전체";
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

  questionViewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateQuestionView(tab.dataset.questionView);
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

  scoresMockPanel?.querySelectorAll("[data-open-score]").forEach((button) => {
    button.addEventListener("click", () => {
      activateScoreView(button.dataset.openScore);
      scrollToMainTop();
    });
  });

  scoresMockPanel?.querySelectorAll("[data-open-analysis]").forEach((button) => {
    button.addEventListener("click", () => {
      const month = selectedExamMonth;
      const subject = selectedSubject;
      activate("analysis", button.dataset.openAnalysis || "questions");
      selectedExamMonth = month;
      activateTakenExam(analysisPanel, month);
      activateTakenExam(scoresMockPanel, month);
      activateAnalysisSubject(subject);
      scrollToMainTop();
    });
  });

  scoresMockPanel?.querySelectorAll("[data-subject-chip]").forEach((chip) => {
    chip.addEventListener("click", () => {
      selectedSubject = chip.dataset.subjectChip;
      refreshSubjectOverview();
    });
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

  Object.values(subMap).forEach(({ attr, fallback }) => activateSub(attr, fallback));
  activate("admission", "regular");
})();
