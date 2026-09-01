(() => {
  const SUBJECT_WEIGHTS = {
    국어: 1.2,
    수학: 1.3,
    영어: 0.8,
    한국사: 0.5,
    통합사회: 1.0,
    통합과학: 1.0
  };

  const TARGET_OPTIONS = {
    ga: {
      group: "가군",
      key: "ga",
      universities: {
        서울대학교: {
          types: {
            일반전형: ["의예과", "컴퓨터공학부", "경제학부"]
          }
        },
        연세대학교: {
          types: {
            일반전형: ["의예과", "경영학과", "전기전자공학부"]
          }
        }
      },
      default: { university: "서울대학교", type: "일반전형", major: "의예과", cutoff: 413.2 }
    },
    na: {
      group: "나군",
      key: "na",
      universities: {
        고려대학교: {
          types: {
            일반전형: ["경영대학", "전기전자공학부", "의예과"]
          }
        },
        성균관대학교: {
          types: {
            일반전형: ["글로벌경영학과", "소프트웨어학과", "의예과"]
          }
        }
      },
      default: { university: "고려대학교", type: "일반전형", major: "경영대학", cutoff: 398.5 }
    },
    da: {
      group: "다군",
      key: "da",
      universities: {
        경북대학교: {
          types: {
            일반전형: ["소프트웨어학부", "경영학부", "기계공학부"]
          }
        },
        부산대학교: {
          types: {
            일반전형: ["컴퓨터공학과", "경제학부", "기계공학부"]
          }
        }
      },
      default: { university: "경북대학교", type: "일반전형", major: "소프트웨어학부", cutoff: 392.1 }
    }
  };

  const REGION_OPTIONS = [
    { value: "all", label: "지역 전체" },
    { value: "서울", label: "서울" },
    { value: "인천·경기", label: "인천·경기" },
    { value: "강원", label: "강원" },
    { value: "대전·세종·충남", label: "대전·세종·충남" },
    { value: "충북", label: "충북" },
    { value: "광주·전남", label: "광주·전남" },
    { value: "전북", label: "전북" },
    { value: "대구·경북", label: "대구·경북" },
    { value: "부산·울산·경남", label: "부산·울산·경남" },
    { value: "제주", label: "제주" }
  ];

  const SIM_SUBJECT_ORDER = ["국어", "수학", "영어", "한국사", "통합사회", "통합과학"];

  const UNIVERSITY_LIST = [
    { id: 1, group: "가군", region: "강원", university: "강원대학교", type: "일반전형", track: "자연", major: "컴퓨터공학", quota: 28, rate: 3.8, subjects: "국·수·영·탐(2)", metric: "백분위", cutoff: 395.3 },
    { id: 2, group: "가군", region: "강원", university: "강원대학교", type: "일반전형", track: "인문", major: "경영학부", quota: 32, rate: 4.1, subjects: "국·수·영·탐(2)", metric: "표준점수", cutoff: 388.6 },
    { id: 3, group: "나군", region: "대구·경북", university: "경북대학교", type: "일반전형", track: "자연", major: "전기공학과", quota: 24, rate: 3.5, subjects: "국·수·영·탐(2)", metric: "표준+백분위", cutoff: 391.4 },
    { id: 4, group: "나군", region: "부산·울산·경남", university: "부산대학교", type: "일반전형", track: "자연", major: "기계공학부", quota: 30, rate: 3.2, subjects: "국·수·영·탐(2)", metric: "백분위", cutoff: 386.2 },
    { id: 5, group: "다군", region: "광주·전남", university: "전남대학교", type: "일반전형", track: "자연", major: "소프트웨어공학과", quota: 26, rate: 2.9, subjects: "국·수·영·탐(2)", metric: "백분위", cutoff: 382.5 },
    { id: 6, group: "다군", region: "충북", university: "충북대학교", type: "일반전형", track: "인문", major: "경제학부", quota: 22, rate: 3.0, subjects: "국·수·영·탐(2)", metric: "표준점수", cutoff: 379.8 },
    { id: 7, group: "가군", region: "제주", university: "제주대학교", type: "일반전형", track: "자연", major: "컴퓨터공학과", quota: 20, rate: 2.6, subjects: "국·수·영·탐(2)", metric: "백분위", cutoff: 375.4 },
    { id: 8, group: "나군", region: "부산·울산·경남", university: "경상국립대학교", type: "일반전형", track: "인문", major: "국어국문학과", quota: 18, rate: 2.4, subjects: "국·수·영·탐(2)", metric: "표준점수", cutoff: 372.1 }
  ];

  const panelStates = new Map();
  let activeMonth = "3";
  let activePanel = null;
  let modalPanel = null;

  const modal = document.getElementById("admTargetModal");
  const detailModal = document.getElementById("admDetailModal");

  function getScoresFromMonth(month) {
    const rows = window.MegaReportData?.mockSamples?.[month] || [];
    const scores = {};
    rows.forEach((row) => {
      scores[row[1]] = Number(row[2]);
    });
    return scores;
  }

  function getSubjects(month) {
    return Object.keys(getScoresFromMonth(month));
  }

  function calcConvertedScore(scores, adjustments = {}) {
    let total = 0;
    Object.entries(scores).forEach(([subject, raw]) => {
      const adjusted = raw + (adjustments[subject] || 0);
      const weight = SUBJECT_WEIGHTS[subject] || 1;
      total += adjusted * weight;
    });
    return Math.round(total * 10) / 10;
  }

  function getTier(myScore, cutoff) {
    const diff = myScore - cutoff;
    if (diff < -3) return { label: "상향", className: "is-reach" };
    if (diff < 3) return { label: "적정", className: "is-fit" };
    return { label: "안정", className: "is-safe" };
  }

  function formatDiff(diff) {
    const rounded = Math.round(diff * 10) / 10;
    const formatted = rounded.toFixed(1);
    if (rounded > 0) return `+${formatted}`;
    return formatted;
  }

  function formatRate(rate) {
    const rounded = Math.round(rate * 10) / 10;
    return `${rounded.toFixed(1)} : 1`;
  }

  function cloneTargets() {
    return {
      ga: { ...TARGET_OPTIONS.ga.default },
      na: { ...TARGET_OPTIONS.na.default },
      da: { ...TARGET_OPTIONS.da.default }
    };
  }

  function createDefaultState(month) {
    const scores = getScoresFromMonth(month);
    const adjustments = {};
    getSubjects(month).forEach((subject) => {
      adjustments[subject] = 0;
    });

    return {
      month,
      scores,
      adjustments,
      targets: cloneTargets(),
      analyzed: false,
      viewMode: "original",
      simSigns: {},
      favorites: new Set(),
      listFilter: { listTab: "all", search: "" }
    };
  }

  function getState(month) {
    if (!panelStates.has(month)) {
      panelStates.set(month, createDefaultState(month));
    }
    return panelStates.get(month);
  }

  function getActiveState() {
    return getState(activeMonth);
  }

  function hasAdjustments(state) {
    return Object.values(state.adjustments).some((value) => value !== 0);
  }

  function getAdjustmentSummary(state) {
    return Object.entries(state.adjustments)
      .filter(([, value]) => value !== 0)
      .map(([subject, value]) => `${subject} ${value > 0 ? "+" : ""}${value}`)
      .join(", ");
  }

  function getDisplayScore(state) {
    const useSim = state.viewMode === "simulation";
    return calcConvertedScore(state.scores, useSim ? state.adjustments : {});
  }

  function buildListRows(state, myScore) {
    return UNIVERSITY_LIST.map((item) => {
      const diff = Math.round((myScore - item.cutoff) * 10) / 10;
      const tier = getTier(myScore, item.cutoff);
      return { ...item, myScore, diff, tier };
    });
  }

  function buildPanelUi(panel) {
    const month = panel.dataset.regularMonth;
    panel.insertAdjacentHTML(
      "beforeend",
      `
      <div class="adm-toolbar">
        <div class="adm-actions">
          <button type="button" class="btn-adm-outline" data-adm-open-target>목표 모집단위 설정</button>
          <button type="button" class="btn-adm-primary" data-adm-analyze>분석하기</button>
        </div>
      </div>

      <section class="adm-sim-panel" data-adm-sim-controls hidden>
        <h2 class="diag-section-title">점수 시뮬레이션</h2>
        <div class="adm-sim-grid" data-adm-sim-grid></div>
        <div class="adm-sim-foot adm-actions">
          <button type="button" class="btn-adm-outline" data-adm-sim-reset>점수 초기화</button>
          <button type="button" class="btn-adm-primary" data-adm-sim-apply>시뮬레이션하기</button>
        </div>
      </section>

      <section class="adm-result" data-adm-result hidden>
        <div class="adm-target-head">
          <h2 class="diag-section-title">목표 모집단위</h2>
        </div>
        <div class="adm-target-cards" data-adm-target-cards></div>

        <h2 class="diag-section-title">모집단위별 지원 가능점수</h2>

        <div class="content-tabs adm-list-tabs" role="tablist" aria-label="모집단위 목록">
          <button type="button" class="content-tab active" data-adm-list-tab="all" role="tab" aria-selected="true">전체 모집단위</button>
          <button type="button" class="content-tab" data-adm-list-tab="fav" role="tab" aria-selected="false">관심 모집단위</button>
        </div>

        <div class="adm-filter-row">
          <div class="adm-search-wrap">
            <input type="text" class="adm-search" placeholder="대학·모집단위 검색" data-adm-search autocomplete="off">
            <button type="button" class="adm-search-btn" data-adm-search-submit aria-label="검색">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="5.75" fill="none" stroke="currentColor" stroke-width="2.25"></circle>
                <path d="M15.2 15.2 19 19" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"></path>
              </svg>
            </button>
          </div>
          <select class="adm-select adm-select--inline" data-adm-region-filter aria-label="지역">
            ${REGION_OPTIONS.map((region) => `<option value="${region.value}">${region.label}</option>`).join("")}
          </select>
          <select class="adm-select adm-select--inline" data-adm-group-filter aria-label="모집 군">
            <option value="all">군 전체</option>
            <option value="가군">가군</option>
            <option value="나군">나군</option>
            <option value="다군">다군</option>
          </select>
          <select class="adm-select adm-select--inline" data-adm-track-filter aria-label="계열">
            <option value="all">계열 전체</option>
            <option value="인문">인문</option>
            <option value="자연">자연</option>
            <option value="예체능">예체능</option>
          </select>
          <select class="adm-select adm-select--inline" data-adm-tier-filter aria-label="지원 구간">
            <option value="all">지원 구간 전체</option>
            <option value="is-safe">안정</option>
            <option value="is-fit">적정</option>
            <option value="is-reach">상향</option>
          </select>
        </div>

        <div class="diag-table-scroll">
          <table class="diag-table adm-list-table">
            <thead>
              <tr>
                <th>군</th>
                <th>대학</th>
                <th>전형명</th>
                <th>계열</th>
                <th>모집단위</th>
                <th>모집인원</th>
                <th>전년도 경쟁률</th>
                <th>수능 반영영역</th>
                <th>활용지표</th>
                <th>내 환산점수</th>
                <th>지원가능점수</th>
                <th>차이</th>
                <th>지원 구간</th>
                <th>관심</th>
                <th>관련 상세</th>
              </tr>
            </thead>
            <tbody data-adm-list-body></tbody>
          </table>
        </div>
      </section>`
    );

    const state = getState(month);
    activePanel = panel;
    bindPanelEvents(panel, state);
    initCustomSelects(panel);
    updateSimControlsVisibility(panel, state);
    renderSimGrid(panel, state);
    renderPanel(panel, state);
  }

  function bindPanelEvents(panel, state) {
    const month = panel.dataset.regularMonth;

    panel.querySelector("[data-adm-analyze]")?.addEventListener("click", () => {
      state.analyzed = true;
      state.viewMode = "original";
      updateSimControlsVisibility(panel, state);
      renderPanel(panel, state);
    });

    panel.querySelector("[data-adm-sim-apply]")?.addEventListener("click", () => {
      state.viewMode = "simulation";
      renderPanel(panel, state);
    });

    panel.querySelector("[data-adm-sim-reset]")?.addEventListener("click", () => {
      SIM_SUBJECT_ORDER.forEach((subject) => {
        if (subject in state.scores) {
          state.adjustments[subject] = 0;
          state.simSigns[subject] = "+";
        }
      });
      state.viewMode = "original";
      renderSimGrid(panel, state);
      renderPanel(panel, state);
    });

    panel.querySelectorAll("[data-adm-open-target]").forEach((button) => {
      button.addEventListener("click", () => openTargetModal(panel, state));
    });

    panel.querySelectorAll("[data-adm-list-tab]").forEach((tab) => {
      tab.addEventListener("click", () => {
        state.listFilter.listTab = tab.dataset.admListTab;
        panel.querySelectorAll("[data-adm-list-tab]").forEach((el) => {
          const isActive = el.dataset.admListTab === state.listFilter.listTab;
          el.classList.toggle("active", isActive);
          el.setAttribute("aria-selected", isActive ? "true" : "false");
        });
        renderList(panel, state);
      });
    });

    const searchInput = panel.querySelector("[data-adm-search]");
    const runSearch = () => {
      state.listFilter.search = searchInput?.value.trim().toLowerCase() || "";
      renderList(panel, state);
    };

    panel.querySelector("[data-adm-search-submit]")?.addEventListener("click", runSearch);
    searchInput?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        runSearch();
      }
    });

    panel.querySelector("[data-adm-region-filter]")?.addEventListener("change", () => renderList(panel, state));
    panel.querySelector("[data-adm-group-filter]")?.addEventListener("change", () => renderList(panel, state));
    panel.querySelector("[data-adm-track-filter]")?.addEventListener("change", () => renderList(panel, state));
    panel.querySelector("[data-adm-tier-filter]")?.addEventListener("change", () => renderList(panel, state));

    panel.querySelector("[data-adm-list-body]")?.addEventListener("click", (event) => {
      const detailButton = event.target.closest("[data-adm-detail-open]");
      if (detailButton) {
        openDetailModal(panel, state, Number(detailButton.dataset.admDetailOpen));
        return;
      }

      const button = event.target.closest("[data-adm-fav-toggle]");
      if (!button) return;
      const id = Number(button.dataset.admFavToggle);
      if (state.favorites.has(id)) state.favorites.delete(id);
      else state.favorites.add(id);
      renderList(panel, state);
    });
  }

  function clampSubjectDelta(state, subject, delta) {
    const min = -state.scores[subject];
    const max = 100 - state.scores[subject];
    return Math.max(min, Math.min(max, Math.round(delta)));
  }

  function getSimSign(state, subject, delta) {
    if (delta < 0) return "-";
    if (delta > 0) return "+";
    return state.simSigns[subject] || "+";
  }

  function parseAmountInput(value) {
    const trimmed = String(value).replace(/[^\d]/g, "");
    if (!trimmed) return 0;
    const parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function composeDelta(sign, amount) {
    const value = Math.max(0, Math.round(amount));
    return sign === "-" ? -value : value;
  }

  function getSimAmount(state, subject, input) {
    const fromInput = parseAmountInput(input?.value || "");
    if (fromInput > 0) return fromInput;
    return Math.abs(state.adjustments[subject] || 0);
  }

  function applySimAdjustment(panel, state, subject, sign, amount, rerenderPanel = true) {
    state.simSigns[subject] = sign;
    state.adjustments[subject] = clampSubjectDelta(state, subject, composeDelta(sign, amount));
    renderSimGrid(panel, state);
    if (rerenderPanel && state.analyzed && state.viewMode === "simulation") {
      renderPanel(panel, state);
    }
  }

  function renderSimGrid(panel, state) {
    const grid = panel.querySelector("[data-adm-sim-grid]");
    if (!grid) return;

    grid.innerHTML = SIM_SUBJECT_ORDER.filter((subject) => subject in state.scores)
      .map((subject) => {
        const original = state.scores[subject];
        const delta = state.adjustments[subject];
        const sign = getSimSign(state, subject, delta);
        const amount = Math.abs(delta);
        const current = original + delta;

        return `
          <article class="adm-sim-item" data-adm-sim-subject="${subject}">
            <div class="adm-sim-label">${subject}</div>
            <div class="adm-sim-body">
              <div class="adm-sim-col">
                <span class="adm-sim-col-label">원점수</span>
                <span class="adm-sim-original">${original}</span>
              </div>
              <div class="adm-sim-col adm-sim-col--adjust">
                <div class="adm-sim-adjust-wrap">
                  <div class="adm-sim-sign-group" role="group" aria-label="${subject} 조정 방향">
                    <button
                      type="button"
                      class="adm-sim-sign${sign === "-" ? " is-active" : ""}"
                      data-adm-sim-sign="-"
                      data-adm-subject="${subject}"
                      aria-label="${subject} 감점"
                      aria-pressed="${sign === "-" ? "true" : "false"}"
                    >−</button>
                    <button
                      type="button"
                      class="adm-sim-sign${sign === "+" ? " is-active" : ""}"
                      data-adm-sim-sign="+"
                      data-adm-subject="${subject}"
                      aria-label="${subject} 가점"
                      aria-pressed="${sign === "+" ? "true" : "false"}"
                    >+</button>
                  </div>
                  <input
                    type="text"
                    class="adm-sim-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    value="${amount || ""}"
                    placeholder="0"
                    aria-label="${subject} 조정 점수"
                    data-adm-sim-input="${subject}"
                  >
                </div>
              </div>
              <div class="adm-sim-col">
                <span class="adm-sim-col-label">조정점수</span>
                <span class="adm-sim-result" data-adm-sim-result="${subject}">${current}</span>
              </div>
            </div>
          </article>`;
      })
      .join("");

    grid.querySelectorAll("[data-adm-sim-sign]").forEach((button) => {
      button.addEventListener("mousedown", (event) => {
        event.preventDefault();
      });

      button.addEventListener("click", () => {
        const subject = button.dataset.admSubject;
        const sign = button.dataset.admSimSign;
        const input = grid.querySelector(`[data-adm-sim-input="${subject}"]`);
        const amount = getSimAmount(state, subject, input);
        applySimAdjustment(panel, state, subject, sign, amount);
      });
    });

    grid.querySelectorAll("[data-adm-sim-input]").forEach((input) => {
      const subject = input.dataset.admSimInput;
      const item = input.closest(".adm-sim-item");
      const resultEl = grid.querySelector(`[data-adm-sim-result="${subject}"]`);
      const original = state.scores[subject];

      function getSelectedSign() {
        return item.querySelector(".adm-sim-sign.is-active")?.dataset.admSimSign || "+";
      }

      function previewDelta() {
        const delta = clampSubjectDelta(state, subject, composeDelta(getSelectedSign(), parseAmountInput(input.value)));
        resultEl.textContent = original + delta;
      }

      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^\d]/g, "");
        previewDelta();
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          input.blur();
        }
      });

      input.addEventListener("blur", () => {
        applySimAdjustment(panel, state, subject, getSelectedSign(), parseAmountInput(input.value));
      });
    });
  }

  function updateSimControlsVisibility(panel, state) {
    const controls = panel.querySelector("[data-adm-sim-controls]");
    if (controls) controls.hidden = !state.analyzed;
  }

  function renderTargetCards(panel, state, myScore, originalScore) {
    const container = panel.querySelector("[data-adm-target-cards]");
    if (!container) return;

    const keys = ["ga", "na", "da"];
    container.innerHTML = keys
      .map((key) => {
        const target = state.targets[key];
        const tier = getTier(myScore, target.cutoff);
        const originalTier = getTier(originalScore, target.cutoff);
        const tierChanged = tier.label !== originalTier.label && state.viewMode === "simulation";
        const scoreChanged = myScore !== originalScore && state.viewMode === "simulation";

        return `
          <article class="adm-target-card">
            <div class="adm-target-card-top">
              <span class="adm-target-group">${TARGET_OPTIONS[key].group}</span>
              <h3 class="adm-target-univ">${target.university}</h3>
              <span class="adm-tier ${tier.className}">${tier.label}</span>
            </div>
            ${tierChanged ? `<p class="adm-tier-change">${originalTier.label} → ${tier.label}</p>` : ""}
            <p class="adm-target-meta">${target.type} · ${target.major}</p>
            <div class="adm-target-scores">
              <div class="adm-score-box is-mine">
                <span class="adm-score-label">내 환산점수</span>
                <strong class="adm-score-value">
                  ${myScore}
                  ${scoreChanged ? `<em>${formatDiff(myScore - originalScore)}</em>` : ""}
                </strong>
              </div>
              <div class="adm-score-box is-cutoff">
                <span class="adm-score-label">지원가능점수</span>
                <strong class="adm-score-value">${target.cutoff}</strong>
              </div>
            </div>
          </article>`;
      })
      .join("");
  }

  function renderList(panel, state) {
    const tbody = panel.querySelector("[data-adm-list-body]");
    if (!tbody) return;

    const originalScore = calcConvertedScore(state.scores);
    const myScore = getDisplayScore(state);
    const rows = buildListRows(state, myScore);
    const search = state.listFilter.search || "";
    const track = panel.querySelector("[data-adm-track-filter]")?.value || "all";
    const tierFilter = panel.querySelector("[data-adm-tier-filter]")?.value || "all";
    const group = panel.querySelector("[data-adm-group-filter]")?.value || "all";
    const region = panel.querySelector("[data-adm-region-filter]")?.value || "all";

    const filtered = rows.filter((row) => {
      if (state.listFilter.listTab === "fav" && !state.favorites.has(row.id)) return false;
      if (region !== "all" && row.region !== region) return false;
      if (group !== "all" && row.group !== group) return false;
      if (track !== "all" && row.track !== track) return false;
      if (tierFilter !== "all" && row.tier.className !== tierFilter) return false;
      if (search) {
        const haystack = `${row.university} ${row.major} ${row.type}`.toLowerCase();
        if (!haystack.includes(search)) return false;
      }
      return true;
    });

    tbody.innerHTML = filtered
      .map((row) => {
        const originalRow = buildListRows(state, originalScore).find((item) => item.id === row.id);
        const tierChanged =
          state.viewMode === "simulation" && originalRow && originalRow.tier.label !== row.tier.label;
        const scoreChanged = state.viewMode === "simulation" && originalRow && originalRow.myScore !== row.myScore;

        return `
          <tr class="${tierChanged ? "is-tier-changed" : ""}">
            <td>${row.group}</td>
            <td class="adm-list-uni">${row.university}</td>
            <td>${row.type}</td>
            <td>${row.track}</td>
            <td>${row.major}</td>
            <td>${row.quota}명</td>
            <td>${formatRate(row.rate)}</td>
            <td>${row.subjects}</td>
            <td>${row.metric}</td>
            <td>
              <strong>${row.myScore}</strong>
              ${scoreChanged ? `<em>${formatDiff(row.myScore - originalRow.myScore)}</em>` : ""}
            </td>
            <td><strong>${row.cutoff}</strong></td>
            <td>${formatDiff(row.diff)}</td>
            <td><span class="adm-tier ${row.tier.className}">${row.tier.label}</span></td>
            <td>
              <button type="button" class="adm-fav-btn${state.favorites.has(row.id) ? " is-active" : ""}" data-adm-fav-toggle="${row.id}">
                ${state.favorites.has(row.id) ? "저장됨" : "저장"}
              </button>
            </td>
            <td>
              <button type="button" class="adm-detail-btn" data-adm-detail-open="${row.id}">상세</button>
            </td>
          </tr>`;
      })
      .join("");
  }

  function renderPanel(panel, state) {
    const result = panel.querySelector("[data-adm-result]");
    const originalScore = calcConvertedScore(state.scores);
    const myScore = getDisplayScore(state);

    if (!state.analyzed) {
      result.hidden = true;
      updateSimControlsVisibility(panel, state);
      return;
    }

    result.hidden = false;
    updateSimControlsVisibility(panel, state);

    renderTargetCards(panel, state, myScore, originalScore);
    renderList(panel, state);
  }

  function fillSelect(select, options, selected) {
    select.innerHTML = options.map((option) => `<option value="${option}"${option === selected ? " selected" : ""}>${option}</option>`).join("");
  }

  function fillTargetModalForm(targets) {
    ["ga", "na", "da"].forEach((key) => {
      const config = TARGET_OPTIONS[key];
      const target = targets[key];
      const univSelect = modal.querySelector(`[data-target-field="${key}-univ"]`);
      const typeSelect = modal.querySelector(`[data-target-field="${key}-type"]`);
      const majorSelect = modal.querySelector(`[data-target-field="${key}-major"]`);

      const universities = Object.keys(config.universities);
      fillSelect(univSelect, universities, target.university);

      const types = Object.keys(config.universities[target.university]?.types || {});
      fillSelect(typeSelect, types, target.type);

      const majors = config.universities[target.university]?.types[target.type] || [];
      fillSelect(majorSelect, majors, target.major);

      univSelect.onchange = () => {
        const univ = univSelect.value;
        const typeKeys = Object.keys(config.universities[univ].types);
        fillSelect(typeSelect, typeKeys, typeKeys[0]);
        const majorList = config.universities[univ].types[typeKeys[0]];
        fillSelect(majorSelect, majorList, majorList[0]);
      };

      typeSelect.onchange = () => {
        const univ = univSelect.value;
        const majorList = config.universities[univ].types[typeSelect.value] || [];
        fillSelect(majorSelect, majorList, majorList[0]);
      };
    });
  }

  function updateBodyModalState() {
    const isOpen = (modal && !modal.hidden) || (detailModal && !detailModal.hidden);
    document.body.classList.toggle("adm-modal-open", isOpen);
  }

  function renderDetailTierBadge(tier) {
    return `<span class="adm-detail-badge is-tier ${tier.className}">${tier.label}</span>`;
  }

  function fillDetailModal(panel, state, rowId) {
    const myScore = getDisplayScore(state);
    const row = buildListRows(state, myScore).find((item) => item.id === rowId);
    if (!row || !detailModal) return;

    const diff = formatDiff(row.diff);

    detailModal.querySelector("[data-adm-detail-badges]").innerHTML = `
      <span class="adm-detail-badge is-group">${row.group}</span>
      ${renderDetailTierBadge(row.tier)}`;
    detailModal.querySelector("[data-adm-detail-title]").textContent = `${row.university} ${row.major}`;

    detailModal.querySelector("[data-adm-detail-scores]").innerHTML = `
      <div class="adm-detail-score-box">
        <span class="adm-detail-score-label">내 환산점수</span>
        <strong class="adm-detail-score-value">${row.myScore}</strong>
      </div>
      <div class="adm-detail-score-box">
        <span class="adm-detail-score-label">지원가능점수</span>
        <strong class="adm-detail-score-value">${row.cutoff}</strong>
      </div>
      <div class="adm-detail-score-box">
        <span class="adm-detail-score-label">점수 차이</span>
        <strong class="adm-detail-score-value adm-detail-diff-value">${diff}</strong>
      </div>`;

    detailModal.querySelector("[data-adm-detail-result-body]").innerHTML = `
      <tr>
        <td>${row.group}</td>
        <td>${row.type}</td>
        <td>${row.track}</td>
        <td>${row.metric}</td>
        <td><strong>${row.myScore}</strong></td>
        <td><strong>${row.cutoff}</strong></td>
        <td class="adm-detail-diff">${diff}</td>
        <td>${renderDetailTierBadge(row.tier)}</td>
      </tr>`;
  }

  function openDetailModal(panel, state, rowId) {
    fillDetailModal(panel, state, rowId);
    detailModal.hidden = false;
    updateBodyModalState();
  }

  function closeDetailModal() {
    if (!detailModal) return;
    detailModal.hidden = true;
    updateBodyModalState();
  }

  function openTargetModal(panel, state) {
    modalPanel = panel;
    modal.hidden = false;
    updateBodyModalState();
    fillTargetModalForm(state.targets);
  }

  function resetTargetModalForm() {
    fillTargetModalForm(cloneTargets());
  }

  function closeTargetModal() {
    modal.hidden = true;
    modalPanel = null;
    updateBodyModalState();
  }

  function saveTargetModal() {
    if (!modalPanel) return;
    const state = getState(modalPanel.dataset.regularMonth);

    ["ga", "na", "da"].forEach((key) => {
      const config = TARGET_OPTIONS[key];
      state.targets[key] = {
        ...state.targets[key],
        university: modal.querySelector(`[data-target-field="${key}-univ"]`).value,
        type: modal.querySelector(`[data-target-field="${key}-type"]`).value,
        major: modal.querySelector(`[data-target-field="${key}-major"]`).value,
        cutoff: config.default.cutoff
      };
    });

    closeTargetModal();
    if (state.analyzed) renderPanel(modalPanel, state);
  }

  function resetPanelState(month) {
    panelStates.set(month, createDefaultState(month));
    const panel = document.querySelector(`.regular-month-panel[data-regular-month="${month}"]`);
    if (!panel) return;
    updateSimControlsVisibility(panel, getState(month));
    renderSimGrid(panel, getState(month));
    renderPanel(panel, getState(month));
  }

  function initCustomSelects(root = document) {
    if (!initCustomSelects.outsideClickBound) {
      document.addEventListener("click", () => {
        document.querySelectorAll(".adm-custom-select.is-open").forEach((element) => {
          element._closeCustomSelect?.();
        });
      });
      initCustomSelects.outsideClickBound = true;
    }

    root.querySelectorAll("select.adm-select:not([data-custom-enhanced])").forEach((select) => {
      select.dataset.customEnhanced = "true";

      const wrap = document.createElement("div");
      wrap.className = "adm-custom-select";
      if (select.classList.contains("adm-select--inline")) {
        select.classList.remove("adm-select--inline");
        wrap.classList.add("adm-select--inline");
      }

      select.parentNode.insertBefore(wrap, select);
      wrap.appendChild(select);

      select.classList.add("adm-select-native");
      select.tabIndex = -1;
      select.setAttribute("aria-hidden", "true");

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "adm-select adm-custom-select-trigger";
      trigger.setAttribute("aria-haspopup", "listbox");
      trigger.setAttribute("aria-expanded", "false");

      const ariaLabel = select.getAttribute("aria-label");
      if (ariaLabel) trigger.setAttribute("aria-label", ariaLabel);

      const label = document.createElement("span");
      label.className = "adm-custom-select-label";

      const menu = document.createElement("ul");
      menu.className = "adm-custom-select-menu";
      menu.setAttribute("role", "listbox");
      menu.hidden = true;

      wrap.insertBefore(trigger, select);
      wrap.appendChild(menu);
      trigger.appendChild(label);

      let isOpen = false;

      function closeMenu() {
        isOpen = false;
        menu.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
        wrap.classList.remove("is-open");
      }

      function openMenu() {
        document.querySelectorAll(".adm-custom-select.is-open").forEach((element) => {
          if (element !== wrap) element._closeCustomSelect?.();
        });
        isOpen = true;
        menu.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
        wrap.classList.add("is-open");
      }

      wrap._closeCustomSelect = closeMenu;

      function syncLabel() {
        const option = select.options[select.selectedIndex];
        label.textContent = option?.textContent || "";
      }

      function buildMenu() {
        menu.innerHTML = "";
        [...select.options].forEach((option) => {
          const item = document.createElement("li");
          const isSelected = option.value === select.value;

          item.className = `adm-custom-select-option${isSelected ? " is-selected" : ""}`;
          item.dataset.value = option.value;
          item.textContent = option.textContent;
          item.setAttribute("role", "option");
          item.setAttribute("aria-selected", isSelected ? "true" : "false");

          item.addEventListener("mousedown", (event) => {
            event.preventDefault();
          });

          item.addEventListener("click", () => {
            select.value = option.value;
            buildMenu();
            closeMenu();
            select.dispatchEvent(new Event("change", { bubbles: true }));
          });

          menu.appendChild(item);
        });
        syncLabel();
      }

      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        if (isOpen) closeMenu();
        else openMenu();
      });

      new MutationObserver(() => buildMenu()).observe(select, { childList: true });

      buildMenu();
    });
  }

  function init() {
    document.querySelectorAll(".regular-month-panel").forEach((panel) => {
      buildPanelUi(panel);
    });

    activeMonth = document.querySelector(".regular-month-panel.active")?.dataset.regularMonth || "3";
    activePanel = document.querySelector(`.regular-month-panel[data-regular-month="${activeMonth}"]`);

    modal?.querySelectorAll("[data-adm-modal-close]").forEach((button) => {
      button.addEventListener("click", closeTargetModal);
    });
    modal?.querySelector("[data-adm-target-reset]")?.addEventListener("click", resetTargetModalForm);
    modal?.querySelector("[data-adm-target-save]")?.addEventListener("click", saveTargetModal);
    if (modal) initCustomSelects(modal);

    detailModal?.querySelectorAll("[data-adm-detail-close]").forEach((button) => {
      button.addEventListener("click", closeDetailModal);
    });
  }

  window.AdmissionRegular = {
    resetAll() {
      panelStates.clear();
      document.querySelectorAll(".regular-month-panel").forEach((panel) => {
        const month = panel.dataset.regularMonth;
        panelStates.set(month, createDefaultState(month));
        updateSimControlsVisibility(panel, getState(month));
        renderSimGrid(panel, getState(month));
        renderPanel(panel, getState(month));
      });
      activeMonth = "3";
      activePanel = document.querySelector('.regular-month-panel[data-regular-month="3"]');
    },
    onMonthChange(month) {
      activeMonth = month;
      activePanel = document.querySelector(`.regular-month-panel[data-regular-month="${month}"]`);
    },
    resetPanelState,
    initCustomSelects
  };

  init();
})();
