(() => {
  const schoolHead = `
    <thead>
      <tr>
        <th>교과</th>
        <th>과목</th>
        <th>학점</th>
        <th>원점수</th>
        <th>과목평균</th>
        <th>성취도</th>
        <th>석차등급</th>
        <th>수강자수</th>
      </tr>
    </thead>`;

  const mockHead = `
    <thead>
      <tr>
        <th>영역</th>
        <th>과목</th>
        <th>원점수</th>
        <th>표준점수</th>
        <th>백분위</th>
        <th>등급</th>
      </tr>
    </thead>`;

  const schoolSamples = {
    1: [
      {
        title: "1학년 1학기",
        rows: [
          ["국어", "공통국어1", 4, 92, 74.6, "A", 1, 284],
          ["수학", "공통수학1", 4, 88, 68.2, "B", 2, 284],
          ["영어", "공통영어1", 4, 94, 72.1, "A", 1, 284],
          ["사회", "통합사회1", 3, 86, 70.5, "B", 2, 284],
          ["과학", "통합과학1", 3, 90, 69.8, "A", 1, 284]
        ]
      },
      {
        title: "1학년 2학기",
        rows: [
          ["국어", "공통국어2", 4, 90, 73.2, "A", 2, 284],
          ["수학", "공통수학2", 4, 85, 67.5, "B", 2, 284],
          ["영어", "공통영어2", 4, 91, 71.8, "A", 1, 284],
          ["사회", "통합사회2", 3, 83, 69.4, "B", 3, 284],
          ["과학", "통합과학2", 3, 88, 68.9, "B", 2, 284]
        ]
      }
    ],
    2: [
      {
        title: "2학년 1학기",
        rows: [
          ["국어", "문학1", 4, 89, 71.3, "B", 2, 276],
          ["수학", "수학Ⅰ", 4, 86, 65.8, "B", 3, 276],
          ["영어", "영어Ⅰ", 4, 93, 70.4, "A", 1, 276],
          ["사회", "사회·문화", 3, 84, 68.7, "B", 2, 276],
          ["과학", "물리학Ⅰ", 3, 87, 66.2, "B", 2, 276]
        ]
      },
      {
        title: "2학년 2학기",
        rows: [
          ["국어", "문학2", 4, 87, 70.1, "B", 2, 276],
          ["수학", "수학Ⅱ", 4, 83, 64.9, "B", 3, 276],
          ["영어", "영어Ⅱ", 4, 90, 69.6, "A", 2, 276],
          ["사회", "정치와법", 3, 82, 67.8, "B", 3, 276],
          ["과학", "화학Ⅰ", 3, 85, 65.5, "B", 2, 276]
        ]
      }
    ],
    3: [
      {
        title: "3학년 1학기",
        rows: [
          ["국어", "화법과작문", 4, 91, 72.8, "A", 2, 268],
          ["수학", "미적분", 4, 84, 63.5, "B", 3, 268],
          ["영어", "영어Ⅰ", 4, 92, 71.2, "A", 1, 268],
          ["사회", "생활과윤리", 3, 88, 69.1, "B", 2, 268],
          ["과학", "화학Ⅱ", 3, 86, 64.7, "B", 2, 268]
        ]
      },
      {
        title: "3학년 2학기",
        rows: [
          ["국어", "독서", 4, 89, 71.6, "B", 2, 268],
          ["수학", "확률과통계", 4, 82, 62.8, "B", 3, 268],
          ["영어", "영어Ⅱ", 4, 90, 70.3, "A", 2, 268],
          ["사회", "윤리와사상", 3, 86, 68.4, "B", 2, 268],
          ["과학", "생명과학Ⅱ", 3, 84, 63.9, "B", 3, 268]
        ]
      }
    ]
  };

  const mockMeta = {
    3: "메대프",
    4: "전대실모",
    5: "메대프",
    6: "평가원",
    7: "전대실모",
    8: "전대실모",
    9: "평가원"
  };

  const blankMockRows = [
    ["국어", "국어", "-", "-", "-", "-"],
    ["수학", "수학", "-", "-", "-", "-"],
    ["영어", "영어", "-", "-", "-", "-"],
    ["탐구", "통합사회", "-", "-", "-", "-"],
    ["탐구", "통합과학", "-", "-", "-", "-"],
    ["한국사", "한국사", "-", "-", "-", "-"]
  ];

  const mockSamples = {
    3: [
      ["국어", "국어", 84, 125, 88, 3],
      ["수학", "수학", 88, 130, 92, 2],
      ["영어", "영어", 89, "-", "-", 2],
      ["탐구", "통합사회", 42, 64, 90, 2],
      ["탐구", "통합과학", 45, 68, 93, 2],
      ["한국사", "한국사", 43, "-", "-", 1]
    ],
    4: [
      ["국어", "국어", 87, 129, 90, 2],
      ["수학", "수학", 90, 133, 94, 2],
      ["영어", "영어", 88, "-", "-", 2],
      ["탐구", "통합사회", 43, 65, 91, 2],
      ["탐구", "통합과학", 45, 69, 95, 2],
      ["한국사", "한국사", 44, "-", "-", 1]
    ],
    5: [
      ["국어", "국어", 85, 127, 89, 2],
      ["수학", "수학", 91, 134, 95, 2],
      ["영어", "영어", 90, "-", "-", 1],
      ["탐구", "통합사회", 44, 66, 92, 2],
      ["탐구", "통합과학", 45, 71, 96, 1],
      ["한국사", "한국사", 44, "-", "-", 1]
    ],
    6: [
      ["국어", "국어", 86, 128, 91, 2],
      ["수학", "수학", 92, 135, 96, 1],
      ["영어", "영어", 91, "-", "-", 1],
      ["탐구", "통합사회", 44, 67, 94, 2],
      ["탐구", "통합과학", 45, 70, 97, 1],
      ["한국사", "한국사", 44, "-", "-", 1]
    ],
    7: blankMockRows,
    8: blankMockRows,
    9: blankMockRows
  };

  const upcomingExamMonths = new Set(["7", "8", "9"]);

  function isTakenExam(month) {
    return !upcomingExamMonths.has(String(month));
  }

  function latestTakenMonth() {
    const months = Object.keys(mockMeta).filter((month) => isTakenExam(month));
    return months[months.length - 1] || "6";
  }

  function schoolRowsHtml(rows) {
    return rows
      .map(
        (row) =>
          `<tr>
            <th>${row[0]}</th>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td>${row[3]}</td>
            <td>${row[4]}</td>
            <td>${row[5]}</td>
            <td>${row[6]}</td>
            <td>${row[7]}</td>
          </tr>`
      )
      .join("");
  }

  function mockRowsHtml(rows) {
    return rows
      .map(
        (row) =>
          `<tr>
            <th>${row[0]}</th>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td>${row[3]}</td>
            <td>${row[4]}</td>
            <td>${row[5]}</td>
          </tr>`
      )
      .join("");
  }

  function renderSchoolGrade(grade) {
    const semesters = schoolSamples[grade];
    if (!semesters) return "";

    return semesters
      .map(
        (semester) =>
          `<h2 class="diag-section-title">${semester.title}</h2>
          <div class="diag-table-scroll">
            <table class="diag-table diag-table-define">
              ${schoolHead}
              <tbody>${schoolRowsHtml(semester.rows)}</tbody>
            </table>
          </div>`
      )
      .join("");
  }

  const schoolMajorSubjects = ["국어", "수학", "영어", "사회", "과학"];
  const schoolComboDefs = [
    { key: "all", label: "전교과", subjects: null },
    { key: "kemss", label: "국영수사과", subjects: schoolMajorSubjects },
    { key: "kems", label: "국영수사", subjects: ["국어", "영어", "수학", "사회"] },
    { key: "kemsc", label: "국영수과", subjects: ["국어", "영어", "수학", "과학"] }
  ];

  function schoolCourseRows() {
    const items = [];
    [1, 2, 3].forEach((grade) => {
      (schoolSamples[grade] || []).forEach((semester, index) => {
        semester.rows.forEach((row) => {
          items.push({
            grade,
            semester: index + 1,
            title: semester.title,
            subject: row[0],
            credit: Number(row[2]) || 0,
            rank: Number(row[6]) || 0
          });
        });
      });
    });
    return items;
  }

  function schoolWeightedRank(rows) {
    const credits = rows.reduce((sum, row) => sum + row.credit, 0);
    if (!credits) return 0;
    return rows.reduce((sum, row) => sum + row.rank * row.credit, 0) / credits;
  }

  function formatSchoolRank(value) {
    return Number(value).toFixed(2);
  }

  function schoolMatchCombo(row, subjects) {
    return !subjects || subjects.includes(row.subject);
  }

  function renderSchoolAnalysis() {
    const courses = schoolCourseRows();
    if (!courses.length) return "";

    const allRank = schoolWeightedRank(courses);
    const majorRank = schoolWeightedRank(courses.filter((row) => schoolMajorSubjects.includes(row.subject)));
    const courseCount = courses.length;
    const creditTotal = courses.reduce((sum, row) => sum + row.credit, 0);

    const comboRows = schoolComboDefs.map((combo) => {
      const matched = courses.filter((row) => schoolMatchCombo(row, combo.subjects));
      const byGrade = [1, 2, 3].map((grade) => schoolWeightedRank(matched.filter((row) => row.grade === grade)));
      return {
        ...combo,
        grades: byGrade,
        overall: schoolWeightedRank(matched)
      };
    });
    return `
      <section class="school-analysis-block">
        <div class="diag-result-head">
          <h2 class="diag-section-title">내신 현황</h2>
        </div>
        <div class="exam-summary-grid school-gpa-kpis">
          <article class="exam-summary-card is-correct">
            <span>전교과 평균</span>
            <strong>${formatSchoolRank(allRank)}<small>등급</small></strong>
          </article>
          <article class="exam-summary-card is-wrong">
            <span>주요교과 평균</span>
            <strong>${formatSchoolRank(majorRank)}<small>등급</small></strong>
          </article>
          <article class="exam-summary-card">
            <span>분석 과목 수</span>
            <strong>${courseCount}<small>과목</small></strong>
          </article>
          <article class="exam-summary-card">
            <span>총 이수 학점</span>
            <strong>${creditTotal}<small>학점</small></strong>
          </article>
        </div>
      </section>
      <section class="school-analysis-block">
        <div class="diag-result-head">
          <h2 class="diag-section-title">교과 조합별 비교</h2>
        </div>
        <div class="diag-table-scroll">
          <table class="diag-table diag-table-define school-combo-table">
            <thead>
              <tr>
                <th>교과 조합</th>
                <th>전 학년</th>
                <th>1학년</th>
                <th>2학년</th>
                <th>3학년</th>
              </tr>
            </thead>
            <tbody>
              ${comboRows
                .map(
                  (row) => `
                    <tr>
                      <th>${row.label}</th>
                      <td>${formatSchoolRank(row.overall)}</td>
                      ${row.grades.map((value) => `<td>${formatSchoolRank(value)}</td>`).join("")}
                    </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>`;
  }

  function renderMockMonth(month, { withReportSuffix = false } = {}) {
    const rows = mockSamples[month];
    const title = mockMeta[month];
    if (!rows || !title) return "";

    const heading = withReportSuffix ? "성적표" : title;

    return `
      <h2 class="diag-section-title">${heading}</h2>
      <div class="diag-table-scroll">
        <table class="diag-table diag-table-define">
          ${mockHead}
          <tbody>${mockRowsHtml(rows)}</tbody>
        </table>
      </div>`;
  }

  const mockExamDates = {
    3: "2026. 03. 26",
    4: "2026. 04. 15",
    5: "2026. 05. 14",
    6: "2026. 06. 04",
    7: "2026. 07. 09",
    8: "2026. 08. 13",
    9: "2026. 09. 02"
  };

  const upcomingExams = [
    { month: "7", name: "전대실모", date: "2026. 07. 09" },
    { month: "8", name: "전대실모", date: "2026. 08. 13" },
    { month: "9", name: "평가원", date: "2026. 09. 02" }
  ];

  const reportAsOf = "2026. 06. 05";

  function mockAveragePercentile(month) {
    const values = (mockSamples[month] || [])
      .map((row) => row[4])
      .filter((value) => typeof value === "number");

    if (!values.length) return "-";
    return (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1);
  }

  function renderTakenExams({ withScore = true } = {}) {
    const months = Object.keys(mockMeta);
    const upcomingMonths = upcomingExamMonths;
    const latestMonth = latestTakenMonth();

    return `
      <div class="taken-exam-grid">
        ${months
          .map((month) => {
            const name = mockMeta[month];
            const isUpcoming = upcomingMonths.has(String(month));
            const statusLabel = isUpcoming ? "미응시" : "응시 완료";
            const isActive = month === latestMonth;
            const statusBadge = isUpcoming
              ? ""
              : `<span class="taken-exam-badge is-done" title="${statusLabel}" aria-label="${statusLabel}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
            const foot = withScore
              ? `<span class="taken-exam-foot">
                  <b>${mockAveragePercentile(month)}<small>점</small></b>
                </span>`
              : "";
            return `
              <article
                class="taken-exam-cell${isActive ? " active" : ""}${isUpcoming ? " is-upcoming" : ""}"
                data-taken-exam="${month}"
                aria-selected="${isActive ? "true" : "false"}"
                aria-disabled="${isUpcoming ? "true" : "false"}"
                ${isUpcoming ? 'tabindex="-1"' : ""}
              >
                ${statusBadge}
                <time datetime="2026-${String(month).padStart(2, "0")}">${mockExamDates[month]}</time>
                <strong>${month}월 ${name}</strong>
                ${foot}
              </article>`;
          })
          .join("")}
      </div>`;
  }

  function numericCell(row, index) {
    const value = row?.[index];
    return typeof value === "number" ? value : null;
  }

  function getKstExamScores(month) {
    const korean = numericCell(getSubjectRow(month, "국어"), 4);
    const math = numericCell(getSubjectRow(month, "수학"), 4);
    const social = numericCell(getSubjectRow(month, "통합사회"), 4);
    const science = numericCell(getSubjectRow(month, "통합과학"), 4);
    const inquiry =
      social != null && science != null ? Number(((social + science) / 2).toFixed(1)) : null;
    const values = [korean, math, inquiry].filter((value) => value != null);
    const sum =
      values.length === 3 ? Number(values.reduce((total, value) => total + value, 0).toFixed(1)) : null;
    return { korean, math, social, science, inquiry, sum };
  }

  function getTrendItems(subject) {
    const months = Object.keys(mockMeta);
    return months.map((month) => {
      const label = `${month}월 ${mockMeta[month]}`;
      if (!isTakenExam(month)) return { label, score: null };

      let score;
      if (subject === "국수탐") {
        score = getKstExamScores(month).sum;
      } else if (!subject) {
        const average = mockAveragePercentile(month);
        score = average === "-" ? null : Number(average);
      } else {
        const row = getSubjectRow(month, subject);
        score = typeof row?.[4] === "number" ? row[4] : row?.[2];
        score = typeof score === "number" ? score : null;
      }
      return {
        label,
        score: score == null || score === "-" || !Number.isFinite(Number(score)) ? null : Number(score)
      };
    });
  }

  function renderTrendChart({ showTitle = false, variant = "mini", items, yMax = 100 } = {}) {
    const series = items || getTrendItems();
    const width = 400;
    const height = 200;
    const showValues = variant === "full" || variant === "subject";
    const yLabels =
      yMax === 300 ? ["300", "225", "150", "75", "0"] : ["100", "75", "50", "25", "0"];
    const coords = series.map((item, index) => {
      const x = ((index + 0.5) / series.length) * width;
      const score = Number(item.score);
      const hasScore = item.score != null && Number.isFinite(score);
      const y = hasScore ? height - (score / yMax) * height : null;
      return { ...item, score: hasScore ? score : null, x, y, hasScore };
    });
    const plotted = coords.filter((point) => point.hasScore);
    const line = plotted
      .map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(1)},${point.y.toFixed(1)}`)
      .join(" ");
    const last = plotted[plotted.length - 1];
    const first = plotted[0];
    const area = last && first ? `${line} L${last.x.toFixed(1)},${height} L${first.x.toFixed(1)},${height} Z` : "";

    return `
      ${showTitle ? `<div class="pct-meta"><strong class="trend-mini-title">백분위</strong></div>` : ""}
      <div class="trend-mini-chart${showValues ? " is-full" : ""}" role="img" aria-label="응시 시험 성적 추이">
        <div class="trend-mini-y" aria-hidden="true">${yLabels.map((label) => `<span>${label}</span>`).join("")}</div>
        <div class="trend-mini-plot">
          <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" class="trend-mini-svg" aria-hidden="true">
            <path class="trend-mini-area" d="${area}"></path>
            <path class="trend-mini-line" d="${line}" fill="none"></path>
          </svg>
          <div class="trend-mini-points">
            ${coords
              .filter((point) => point.hasScore)
              .map(
                (point) =>
                  `<i style="left:${((point.x / width) * 100).toFixed(2)}%;top:${((point.y / height) * 100).toFixed(2)}%" title="${point.score}점">${showValues ? `<b>${point.score}</b>` : ""}</i>`
              )
              .join("")}
          </div>
        </div>
        <div class="trend-mini-x" aria-hidden="true">
          ${series.map((item) => `<span>${item.label}</span>`).join("")}
        </div>
      </div>`;
  }

  function renderTrendMini() {
    return renderTrendChart({ showTitle: true });
  }

  function renderTrendSubject(subject) {
    const isSum = !subject || subject === "전체" || subject === "국수탐";
    return renderTrendChart({
      showTitle: false,
      variant: "full",
      yMax: isSum ? 300 : 100,
      items: getTrendItems(isSum ? "국수탐" : subject)
    });
  }

  function formatExamScore(value) {
    if (value == null || value === "-") return "-";
    const n = Number(value);
    if (!Number.isFinite(n)) return "-";
    return Number.isInteger(n) ? String(n) : n.toFixed(1);
  }

  function renderTrendExamTable() {
    const months = Object.keys(mockMeta);
    const body = months
      .map((month) => {
        const { korean, math, social, science, sum } = getKstExamScores(month);
        const englishGrade = getSubjectRow(month, "영어")?.[5] ?? "-";
        const historyGrade = getSubjectRow(month, "한국사")?.[5] ?? "-";

        return `
          <tr>
            <th>${month}월 ${mockMeta[month]}</th>
            <td>${formatExamScore(korean)}</td>
            <td>${formatExamScore(math)}</td>
            <td>${formatExamScore(social)}</td>
            <td>${formatExamScore(science)}</td>
            <td>${formatExamScore(sum)}</td>
            <td>${englishGrade}</td>
            <td>${historyGrade}</td>
          </tr>`;
      })
      .join("");

    return `
      <div class="diag-table-scroll">
        <table class="diag-table diag-table-score diag-table-exam">
          <thead>
            <tr>
              <th rowspan="2" class="diag-col-label">시험명</th>
              <th colspan="5" class="cat-stress">백분위 기준</th>
              <th colspan="2" class="cat-motive">등급 기준</th>
            </tr>
            <tr>
              <th class="cat-stress">국어</th>
              <th class="cat-stress">수학</th>
              <th class="cat-stress">통합사회</th>
              <th class="cat-stress">통합과학</th>
              <th class="cat-stress">국수탐(2) 합</th>
              <th class="cat-motive">영어</th>
              <th class="cat-motive">한국사</th>
            </tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </div>`;
  }

  function getSubjectRow(month, name) {
    return (mockSamples[month] || []).find((item) => item[1] === name) || null;
  }

  function renderSubjectReport(month, subject) {
    const row = getSubjectRow(month, subject || "국어");
    const rows = row ? [row] : [];

    return `
      <div class="diag-table-scroll">
        <table class="diag-table diag-table-define">
          ${mockHead}
          <tbody>${mockRowsHtml(rows)}</tbody>
        </table>
      </div>`;
  }

  const subjectAreaMap = {
    국어: [
      ["독서·인문", 5, 5, 61, 78],
      ["독서·사회", 5, 2, 64, 80],
      ["독서·과학", 5, 3, 58, 76],
      ["독서·기술", 4, 3, 62, 79],
      ["문학·현대시", 4, 4, 79, 91],
      ["문학·현대소설", 5, 4, 76, 89],
      ["문학·고전시가", 4, 4, 74, 88],
      ["문학·고전소설", 4, 3, 72, 87],
      ["화법", 5, 5, 84, 94],
      ["작문", 4, 4, 81, 92]
    ],
    수학: [
      ["수학Ⅰ·지수함수와 로그함수", 2, 2, 84, 94],
      ["수학Ⅰ·삼각함수", 2, 1, 72, 86],
      ["수학Ⅰ·수열", 2, 2, 80, 92],
      ["수학Ⅱ·함수의 극한과 연속", 2, 2, 78, 90],
      ["수학Ⅱ·미분", 2, 1, 70, 84],
      ["수학Ⅱ·적분", 2, 1, 68, 83],
      ["확률과 통계·경우의 수", 2, 2, 82, 93],
      ["확률과 통계·확률", 2, 1, 74, 87],
      ["확률과 통계·통계", 2, 2, 76, 89],
      ["미적분·수열의 극한", 2, 2, 79, 91],
      ["미적분·미분법", 2, 1, 66, 82],
      ["미적분·적분법", 2, 1, 64, 80],
      ["기하·이차곡선", 2, 2, 75, 88],
      ["기하·평면벡터", 2, 1, 69, 84],
      ["기하·공간도형과 공간좌표", 2, 1, 62, 79]
    ],
    영어: [
      ["듣기·말하기·듣기", 17, 15, 88, 96],
      ["듣기·말하기·간접말하기", 4, 3, 82, 93],
      ["읽기·쓰기·대의파악", 5, 4, 80, 92],
      ["읽기·쓰기·세부정보파악", 4, 3, 78, 90],
      ["읽기·쓰기·어법·어휘", 4, 2, 72, 86],
      ["읽기·쓰기·빈칸추론", 4, 2, 70, 85],
      ["읽기·쓰기·간접쓰기", 4, 3, 74, 87],
      ["읽기·쓰기·장문독해", 3, 2, 76, 88]
    ],
    한국사: [
      ["전근대사·선사와 고대 국가", 3, 2, 84, 95],
      ["전근대사·고려의 정치와 사회", 3, 3, 82, 93],
      ["전근대사·조선 전기의 통치", 2, 2, 80, 92],
      ["전근대사·조선 후기의 변화", 2, 1, 76, 89],
      ["근현대사·개항과 근대 개혁", 3, 2, 78, 90],
      ["근현대사·일제 강점과 독립운동", 3, 2, 81, 92],
      ["근현대사·대한민국의 수립", 2, 2, 79, 91],
      ["근현대사·민주화와 경제 성장", 2, 1, 74, 87]
    ],
    통합사회: [
      ["통합사회1·통합적 관점", 3, 3, 81, 93],
      ["통합사회1·인간, 사회, 환경과 행복", 3, 2, 74, 88],
      ["통합사회1·자연환경과 인간", 2, 1, 70, 85],
      ["통합사회1·문화와 다양성", 2, 1, 72, 86],
      ["통합사회1·생활공간과 사회", 3, 2, 78, 90],
      ["통합사회2·인권보장과 헌법", 3, 3, 80, 92],
      ["통합사회2·사회정의와 불평등", 2, 1, 71, 85],
      ["통합사회2·시장경제와 지속가능발전", 2, 1, 68, 83],
      ["통합사회2·세계화와 평화", 3, 2, 73, 87],
      ["통합사회2·미래와 지속가능한 삶", 2, 1, 69, 84]
    ],
    통합과학: [
      ["통합과학1·과학의 기초", 5, 4, 80, 92],
      ["통합과학1·물질과 규칙성", 4, 3, 76, 89],
      ["통합과학1·시스템과 상호작용", 4, 2, 70, 84],
      ["통합과학2·변화와 다양성", 4, 3, 74, 87],
      ["통합과학2·환경과 에너지", 4, 2, 68, 83],
      ["통합과학2·과학과 미래사회", 4, 2, 66, 81]
    ]
  };

  function subjectAccuracyLegend(label) {
    return `
      <div class="pct-meta pct-meta--legend">
        <div class="pct-legend" aria-label="${label}">
          <span class="is-mine">나</span>
          <span class="is-avg">평균</span>
          <span class="is-top">상위 30%</span>
        </div>
      </div>`;
  }

  function subjectMaxScore(subject) {
    return subject === "한국사" || subject === "통합사회" || subject === "통합과학" ? 50 : 100;
  }

  const subjectPointMix = {
    국어: { 2: 35, 3: 10 },
    수학: { 2: 6, 3: 8, 4: 16 },
    영어: { 2: 35, 3: 10 },
    한국사: { 2: 10, 3: 10 },
    통합사회: { 1.5: 6, 2: 13, 2.5: 6 },
    통합과학: { 1.5: 6, 2: 13, 2.5: 6 }
  };

  function behaviorLabels(subject) {
    return behaviorSchema[subject] || [];
  }

  function pointUnits(point) {
    return Math.round(Number(point) * 2);
  }

  function formatPoint(point) {
    const units = pointUnits(point);
    return units % 2 === 0 ? String(units / 2) : (units / 2).toFixed(1);
  }

  function buildPointGrid(areas, subject) {
    const mix = subjectPointMix[subject] || {};
    const bag = [];
    Object.keys(mix)
      .sort((a, b) => Number(a) - Number(b))
      .forEach((point) => {
        for (let count = 0; count < mix[point]; count += 1) bag.push(Number(point));
      });
    const rows = areas.map(() => []);
    let start = 0;
    while (bag.length) {
      let placed = false;
      for (let turn = 0; turn < areas.length; turn += 1) {
        const areaIndex = (start + turn) % areas.length;
        if (rows[areaIndex].length >= areas[areaIndex].total) continue;
        rows[areaIndex].push(bag.shift());
        start = areaIndex + 1;
        placed = true;
        break;
      }
      if (!placed) break;
    }
    return rows;
  }

  function popcount(mask) {
    let count = 0;
    let value = mask;
    while (value) {
      count += value & 1;
      value >>= 1;
    }
    return count;
  }

  function chooseWrongSet(questions, lost) {
    const target = pointUnits(lost);
    if (!target) return new Set();
    const areaIndex = new Map();
    questions.forEach((question) => {
      if (!areaIndex.has(question.area)) areaIndex.set(question.area, areaIndex.size);
    });
    const masks = 1 << areaIndex.size;
    const key = (sum, mask) => sum * masks + mask;
    const size = (target + 1) * masks;
    const seen = new Uint8Array(size);
    const overlap = new Int16Array(size);
    const shorts = new Int16Array(size);
    const prevSum = new Int16Array(size);
    const prevMask = new Int32Array(size);
    const prevIndex = new Int16Array(size);
    seen[0] = 1;

    questions.forEach((question, index) => {
      const unit = pointUnits(question.point);
      if (!unit || unit > target) return;
      const bit = 1 << areaIndex.get(question.area);
      const gain = question.preferred ? 1 : 0;
      const shortGain = question.shortAnswer ? 1 : 0;
      const seenPrev = seen.slice();
      const overlapPrev = overlap.slice();
      const shortsPrev = shorts.slice();
      for (let sum = 0; sum <= target - unit; sum += 1) {
        for (let mask = 0; mask < masks; mask += 1) {
          const from = key(sum, mask);
          if (!seenPrev[from]) continue;
          const to = key(sum + unit, mask | bit);
          const nextOverlap = overlapPrev[from] + gain;
          const nextShort = shortsPrev[from] + shortGain;
          if (seen[to] && (overlap[to] > nextOverlap || (overlap[to] === nextOverlap && shorts[to] >= nextShort))) continue;
          seen[to] = 1;
          overlap[to] = nextOverlap;
          shorts[to] = nextShort;
          prevSum[to] = sum;
          prevMask[to] = mask;
          prevIndex[to] = index;
        }
      }
    });

    let bestMask = -1;
    let bestScore = -1;
    for (let mask = 0; mask < masks; mask += 1) {
      const id = key(target, mask);
      if (!seen[id]) continue;
      const areas = popcount(mask);
      const score = Math.min(areas, 3) * 1000 + overlap[id] * 20 + shorts[id] * 5 + areas;
      if (score > bestScore) {
        bestScore = score;
        bestMask = mask;
      }
    }
    if (bestMask < 0) return new Set();

    const picks = new Set();
    let sum = target;
    let mask = bestMask;
    while (sum !== 0 || mask !== 0) {
      const id = key(sum, mask);
      picks.add(prevIndex[id]);
      const nextSum = prevSum[id];
      const nextMask = prevMask[id];
      if (nextSum === sum && nextMask === mask) break;
      sum = nextSum;
      mask = nextMask;
      if (picks.size > questions.length) break;
    }
    return picks;
  }

  function spreadWrongBehaviors(questions, labels) {
    const wrongs = questions.filter((question) => !question.correct);
    if (labels.length < 3 || wrongs.length < 3) return;
    if (new Set(wrongs.map((question) => question.action)).size >= 3) return;
    wrongs.forEach((question, index) => {
      question.action = labels[index % labels.length];
    });
  }

  const examModelCache = new Map();

  function buildExamModel(month, subject) {
    if (!isTakenExam(month)) return { areas: [], questions: [] };
    const base = subjectAreaMap[subject] || [];
    const maxScore = subjectMaxScore(subject);
    const raw = Number(getSubjectRow(month, subject)?.[2]);
    const lost = Number.isFinite(raw) ? Math.max(0, maxScore - raw) : 0;
    const areas = base.map(([area, total, correct, average, top]) => ({
      area,
      total,
      baseCorrect: correct,
      avg: average,
      top
    }));
    const pointGrid = buildPointGrid(areas, subject);
    const slots = [];
    areas.forEach((area, areaIndex) => {
      pointGrid[areaIndex].forEach((point, index) => {
        const shortAnswer = subject === "수학" && slots.length >= 21;
        slots.push({
          area: area.area,
          point,
          shortAnswer,
          preferred: index >= area.baseCorrect || shortAnswer
        });
      });
    });
    const wrongSet = chooseWrongSet(slots, lost);
    const types = behaviorLabels(subject);
    const questions = slots.map((slot, index) => ({
      no: index + 1,
      area: slot.area,
      correct: !wrongSet.has(index),
      points: slot.point,
      shortAnswer: Boolean(slot.shortAnswer),
      action: types[index % types.length] || "오답 문항"
    }));
    spreadWrongBehaviors(questions, types);
    const areaRows = areas.map((area) => {
      const list = questions.filter((question) => question.area === area.area);
      const correct = list.filter((question) => question.correct).length;
      return {
        area: area.area,
        total: area.total,
        correct,
        avg: area.avg,
        top: area.top,
        mine: area.total ? Math.round((correct / area.total) * 100) : 0
      };
    });
    return { areas: areaRows, questions };
  }

  function getExamModel(month, subject) {
    const key = `${month}|${subject}`;
    if (!examModelCache.has(key)) examModelCache.set(key, buildExamModel(month, subject));
    return examModelCache.get(key);
  }

  function getSubjectAreaRows(month, subject) {
    return getExamModel(month, subject).areas;
  }

  function objectParticle(word) {
    const last = word.charCodeAt(word.length - 1);
    if (last < 0xac00 || last > 0xd7a3) return "를";
    return (last - 0xac00) % 28 === 0 ? "를" : "을";
  }

  function areaLabel(subject, area) {
    const blocks = contentSchemas[subject] || [];
    for (const block of blocks) {
      for (const detail of block.details) {
        if (area === `${block.major}·${detail}` || area === detail) return detail;
      }
    }
    return String(area || "");
  }

  function renderStrategySummary(subject, month) {
    const exam = month || latestTakenMonth();
    const name = subject && subject !== "전체" ? subject : "국어";
    const focus = areaLabel(name, getExamReviewItems(exam, name)[0]?.name || name);

    return `
      <strong>지금은 <em>${focus}</em>${objectParticle(focus)} 먼저 보완할 때예요.</strong>
      <p>이번 시험에서 틀린 문항을 바탕으로 학습 과제·복습 우선 순위·오답 원인을 정리했습니다.</p>`;
  }

  function getStrategyTaskItems(subject, month) {
    const exam = month || latestTakenMonth();
    const name = subject || "국어";
    const top = getExamReviewItems(exam, name)[0];
    if (!top) return [];
    const label = areaLabel(name, top.name);
    const item = { area: label, name: label, subjectName: name };
    return [item, item, item];
  }

  function strategyTaskCopy(item, index) {
    const verbs = ["오답 복기", "개념 정리", "실전 확인"];
    const texts = [
      "틀린 문항의 근거를 표시한 뒤 다시 풀어보세요.",
      "필요한 개념과 조건을 짧게 정리해 보세요.",
      "제한 시간 안에 같은 유형 문항을 풀어 확인해 보세요."
    ];
    if (!item) return { title: "-", text: "" };
    return {
      title: `${item.area} ${verbs[index] || verbs[0]}`,
      text: texts[index] || texts[0]
    };
  }

  function renderStrategyTasks(subject, month) {
    const items = getStrategyTaskItems(subject, month);
    return `
      <div class="strategy-task-grid">
        ${items
          .map((item, index) => {
            const copy = strategyTaskCopy(item, index);
            return `
              <article class="summary-card">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <strong>${copy.title}</strong>
                <p>${copy.text}</p>
              </article>`;
          })
          .join("")}
      </div>`;
  }

  function renderSubjectAreas(month, subject) {
    const items = getSubjectAreaRows(month, subject);
    if (!items.length) return "";

    const row = (item) => `
      <article class="area-rate-row" aria-label="${item.area}: 나 ${item.mine}%, 전체 평균 ${item.avg}%, 상위 30% ${item.top}%">
        <div class="area-rate-name">
          <b>${item.area}</b>
          <span>${item.correct}/${item.total}</span>
        </div>
        <div class="area-rate-bars">
          <span class="acc-track is-mine"><i style="width:${item.mine}%"></i></span>
          <span class="acc-track is-avg"><i style="width:${item.avg}%"></i></span>
          <span class="acc-track is-top"><i style="width:${item.top}%"></i></span>
        </div>
        <em>${item.mine}%</em>
      </article>`;

    const mid = Math.ceil(items.length / 2);

    return `
      ${subjectAccuracyLegend("영역별 정답률 범례")}
      <div class="area-rate-grid">
        <div class="area-rate-col">${items.slice(0, mid).map(row).join("")}</div>
        <div class="area-rate-col">${items.slice(mid).map(row).join("")}</div>
      </div>`;
  }

  function getSubjectQuestions(month, subject) {
    return getExamModel(month, subject).questions;
  }

  const reviewTags = ["최우선", "우선", "점검"];

  function reviewTagTier(tag) {
    if (tag === "최우선") return "is-reach";
    if (tag === "우선") return "is-fit";
    return "is-safe";
  }

  function getExamReviewItems(month, subject) {
    const areas = getSubjectAreaRows(month, subject);
    const wrongByArea = new Map();
    getWrongNoteItems(month, subject).forEach((item) => {
      wrongByArea.set(item.area, (wrongByArea.get(item.area) || 0) + 1);
    });

    return areas
      .map((area, index) => ({
        name: area.area,
        total: area.total,
        wrong: wrongByArea.get(area.area) || 0,
        rate: area.mine,
        index
      }))
      .filter((item) => item.wrong > 0)
      .sort((a, b) => b.wrong - a.wrong || a.rate - b.rate || a.index - b.index)
      .slice(0, 3);
  }

  function renderExamReview(month, subject) {
    const items = getExamReviewItems(month, subject);
    if (!items.length) {
      return `<p class="exam-review-empty">이번 시험에서 틀린 문항이 없어요.</p>`;
    }

    return `
      <ol class="strategy-priority-list">
        ${items
          .map((item, index) => {
            const tag = reviewTags[index];
            return `
              <li>
                <em>${index + 1}</em>
                <b>${areaLabel(subject, item.name)}</b>
                <p>${item.total}문항 중 ${item.wrong}문항 오답</p>
                <span class="adm-tier ${reviewTagTier(tag)}">${tag}</span>
              </li>`;
          })
          .join("")}
      </ol>`;
  }

  function renderExamCauses(month, subject) {
    const counts = Object.fromEntries(noteCauses.map((name) => [name, 0]));
    getWrongNoteItems(month, subject).forEach((item) => {
      if (counts[item.cause] == null) counts[item.cause] = 0;
      counts[item.cause] += 1;
    });
    const causes = noteCauses;

    const ranks = causes.map((name) => ({ name, count: counts[name] }));
    const max = Math.max(...ranks.map((item) => item.count), 1);

    return `
      <div class="strategy-ratio-list">
        ${ranks
          .map(
            (item) => `
              <div class="strategy-ratio-row">
                <span>${item.name}</span>
                <span class="acc-track"><i style="width:${Math.round((item.count / max) * 100)}%"></i></span>
                <em>${item.count}</em>
              </div>`
          )
          .join("")}
      </div>`;
  }

  const contentSchemas = {
    국어: [
      { zone: "공통", major: "독서", details: ["인문", "사회", "과학", "기술", "예술", "독서이론", "융합"] },
      { zone: "공통", major: "문학", details: ["현대시", "현대소설", "고전시가", "고전소설", "수필", "극", "갈래복합"] },
      { zone: "선택", major: "화법과 작문", details: ["화법", "작문"] },
      { zone: "선택", major: "언어와 매체", details: ["언어", "매체"] }
    ],
    수학: [
      { zone: "공통", major: "수학Ⅰ", details: ["지수함수와 로그함수", "삼각함수", "수열"] },
      { zone: "공통", major: "수학Ⅱ", details: ["함수의 극한과 연속", "미분", "적분"] },
      { zone: "선택", major: "확률과 통계", details: ["경우의 수", "확률", "통계"] },
      { zone: "선택", major: "미적분", details: ["수열의 극한", "미분법", "적분법"] },
      { zone: "선택", major: "기하", details: ["이차곡선", "평면벡터", "공간도형과 공간좌표"] }
    ],
    영어: [
      { major: "듣기·말하기", details: ["듣기", "간접말하기"] },
      { major: "읽기·쓰기", details: ["대의파악", "세부정보파악", "어법·어휘", "빈칸추론", "간접쓰기", "장문독해"] }
    ],
    한국사: [
      { major: "전근대사", details: ["선사와 고대 국가", "고려의 정치와 사회", "조선 전기의 통치", "조선 후기의 변화"] },
      { major: "근현대사", details: ["개항과 근대 개혁", "일제 강점과 독립운동", "대한민국의 수립", "민주화와 경제 성장"] }
    ],
    통합사회: [
      { major: "통합사회1", details: ["통합적 관점", "인간, 사회, 환경과 행복", "자연환경과 인간", "문화와 다양성", "생활공간과 사회"] },
      { major: "통합사회2", details: ["인권보장과 헌법", "사회정의와 불평등", "시장경제와 지속가능발전", "세계화와 평화", "미래와 지속가능한 삶"] }
    ],
    통합과학: [
      { major: "통합과학1", details: ["과학의 기초", "물질과 규칙성", "시스템과 상호작용"] },
      { major: "통합과학2", details: ["변화와 다양성", "환경과 에너지", "과학과 미래사회"] }
    ]
  };

  const behaviorSchema = {
    국어: ["사실적 이해", "추론적 이해", "비판적 이해", "창의적 이해", "어휘", "어법"],
    수학: ["계산영역", "이해력", "문제해결", "추론"],
    영어: ["어휘/어법", "사실적 이해", "적용", "종합적 이해", "추론적 이해"],
    한국사: ["사실 확인", "시대 판단", "자료 해석", "인과 파악", "역사 평가"],
    통합사회: ["개념 적용", "자료 분석", "관점 비교", "가치 판단", "대안 모색"],
    통합과학: ["개념 이해", "자료 해석", "모형 적용", "규칙 추론", "시스템 설명"]
  };

  function renderWrongGroupList(groups) {
    if (!groups.length) {
      return `
      <div class="wrong-group-box">
        <p class="exam-review-empty">틀린 문항이 없어요.</p>
      </div>`;
    }

    const wrongCount = (group) => group.wrong ?? group.nos.length;
    const wrongRate = (group) => (group.asked ? Math.round((wrongCount(group) / group.asked) * 100) : null);
    const max = Math.max(...groups.map(wrongCount), 1);
    return `
      <div class="wrong-group-box">
        ${groups
          .map((group) => {
            const wrong = wrongCount(group);
            const rate = wrongRate(group);
            const detail =
              group.asked != null
                ? `<span>출제 ${group.asked} · 오답 ${wrong}</span>`
                : `<span>해당 문항</span>${group.nos.map((no) => `<i>${String(no).includes("번") ? no : `${no}번`}</i>`).join("")}`;
            return `
          <article class="wrong-group-item">
            <div class="wrong-group-head">
              <b>${group.name}</b>
              <em>${rate != null ? `${rate}%` : wrong}</em>
            </div>
            <span class="acc-track"><i style="width:${rate != null ? rate : Math.round((wrong / max) * 100)}%"></i></span>
            <div class="wrong-group-qs">
              ${detail}
            </div>
          </article>`;
          })
          .join("")}
      </div>`;
  }

  function emptyTypeMetric() {
    return { asked: 0, correct: 0, mine: null, avg: null, top: null, gap: null };
  }

  function typeMetricFromArea(row) {
    if (!row || !row.total) return emptyTypeMetric();
    return {
      asked: row.total,
      correct: row.correct,
      mine: row.mine,
      avg: row.avg,
      top: row.top,
      gap: row.mine - row.avg
    };
  }

  function typeMetricFromQuestions(list, areaMap) {
    if (!list.length) return emptyTypeMetric();
    const correct = list.filter((question) => question.correct).length;
    const mine = (correct / list.length) * 100;
    const avg = list.reduce((sum, question) => sum + (areaMap.get(question.area)?.avg || 0), 0) / list.length;
    const top = list.reduce((sum, question) => sum + (areaMap.get(question.area)?.top || 0), 0) / list.length;
    return {
      asked: list.length,
      correct,
      mine,
      avg,
      top,
      gap: mine - avg
    };
  }

  function formatTypeRate(value) {
    return value == null || Number.isNaN(Number(value)) ? "-" : `${Number(value).toFixed(1)}%`;
  }

  const cumulCats = ["cat-stress", "cat-motive", "cat-strategy"];

  function cumulCat(index) {
    return cumulCats[index % cumulCats.length];
  }

  function cumulMetricCells(metric, withBar = true) {
    if (!metric?.asked) {
      return `<td class="cumul-metric">-</td><td class="cumul-metric">-</td><td class="cumul-metric${withBar ? " is-rate is-mine" : ""}">-</td>`;
    }
    const rate = formatTypeRate(metric.mine);
    if (!withBar) {
      return `<td class="cumul-metric">${metric.asked}</td><td class="cumul-metric">${metric.correct}</td><td class="cumul-metric">${rate}</td>`;
    }
    const pct = Math.max(0, Math.min(100, Number(metric.mine)));
    return `<td class="cumul-metric">${metric.asked}</td><td class="cumul-metric">${metric.correct}</td><td class="cumul-metric is-rate is-mine" style="--rate:${pct}">${rate}</td>`;
  }

  function sumTypeMetrics(metrics) {
    const asked = metrics.reduce((sum, item) => sum + (item?.asked || 0), 0);
    const correct = metrics.reduce((sum, item) => sum + (item?.correct || 0), 0);
    if (!asked) return emptyTypeMetric();
    return {
      asked,
      correct,
      mine: (correct / asked) * 100,
      avg: null,
      top: null,
      gap: null
    };
  }

  function areaLookup(month, subject) {
    const map = new Map();
    getSubjectAreaRows(month, subject).forEach((row) => {
      map.set(row.area, row);
      const parts = String(row.area).split("·");
      map.set(parts[parts.length - 1], row);
    });
    return map;
  }

  function contentTypeRows(month, subject, lookup) {
    return (contentSchemas[subject] || []).flatMap((block) =>
      block.details.map((detail) => ({
        zone: block.zone || "",
        major: block.major,
        detail,
        metric: typeMetricFromArea(lookup.get(`${block.major}·${detail}`) || lookup.get(detail))
      }))
    );
  }

  function groupSpans(rows, key) {
    const spans = rows.map(() => 0);
    let index = 0;
    while (index < rows.length) {
      let end = index + 1;
      while (end < rows.length && rows[end][key] === rows[index][key]) end += 1;
      spans[index] = end - index;
      index = end;
    }
    return spans;
  }

  function getTypeAnalysisSections(month, subject) {
    const lookup = areaLookup(month, subject);
    const areas = getSubjectAreaRows(month, subject);
    const questions = getSubjectQuestions(month, subject);
    const areaMap = new Map(areas.map((area) => [area.area, area]));

    const types = behaviorLabels(subject);
    const contentRows = contentTypeRows(month, subject, lookup);
    const behaviorRows = types.map((detail) => {
      const list = questions.filter((question) => question.action === detail);
      return { zone: "", major: "", detail, metric: typeMetricFromQuestions(list, areaMap) };
    });

    return { contentRows, behaviorRows };
  }

  function pivotTypeRows(rowsByMonth, months) {
    return (rowsByMonth[0] || []).map((row, index) => ({
      zone: row.zone,
      major: row.major,
      detail: row.detail,
      isTotal: row.isTotal,
      metricsByMonth: Object.fromEntries(
        months.map((month, monthIndex) => [month, rowsByMonth[monthIndex][index]?.metric || emptyTypeMetric()])
      )
    }));
  }

  function getCumulContentRows(subject) {
    const months = Object.keys(mockMeta);
    const rowsByMonth = months.map((month) => {
      const rows = getTypeAnalysisSections(month, subject).contentRows;
      return [
        {
          zone: "공통",
          major: "총계",
          detail: "",
          isTotal: true,
          metric: sumTypeMetrics(rows.map((row) => row.metric))
        },
        ...rows
      ];
    });
    return pivotTypeRows(rowsByMonth, months);
  }

  function getCumulBehaviorRows(subject) {
    const months = Object.keys(mockMeta);
    return pivotTypeRows(
      months.map((month) => getTypeAnalysisSections(month, subject).behaviorRows),
      months
    );
  }

  function renderCumulRows(section, rows, months, extraKeys, detailColspan = 1) {
    const extraSpans = extraKeys.map((key) => groupSpans(rows, key));
    const spanAttr = detailColspan > 1 ? ` colspan="${detailColspan}"` : "";

    return rows
      .map((row, index) => {
        const heads = [];
        if (index === 0) {
          const sectionLabel = section.endsWith("영역") ? section.slice(0, -2) : section;
          heads.push(`<th class="is-vert is-section" rowspan="${rows.length}">${sectionLabel}</th>`);
        }
        extraKeys.forEach((key, keyIndex) => {
          const span = extraSpans[keyIndex][index];
          if (span) {
            heads.push(`<th class="is-vert" rowspan="${span}">${row[key] || ""}</th>`);
          }
        });
        const cells = months.map((month) => cumulMetricCells(row.metricsByMonth[month])).join("");
        return `<tr>${heads.join("")}<th class="diag-subfactor"${spanAttr}>${row.detail}</th>${cells}</tr>`;
      })
      .join("");
  }

  function renderCumulTotalRow(row, months, labelCols) {
    if (!row) return "";
    const cells = months.map((month) => cumulMetricCells(row.metricsByMonth[month], false)).join("");
    return `<tr class="is-total-row"><th class="diag-col-label is-total" colspan="${labelCols}">총계</th>${cells}</tr>`;
  }

  function renderTypeAnalysis(month, subject) {
    const name = subject || "국어";
    const months = Object.keys(mockMeta);
    const contentRows = getCumulContentRows(name);
    const totalRow = contentRows.find((row) => row.isTotal);
    const bodyRows = contentRows.filter((row) => !row.isTotal);
    const behaviorRows = getCumulBehaviorRows(name);
    const labelCols = 3;
    const monthHeads = months.map((item, index) => `<th colspan="3" class="${cumulCat(index)}">${item}월</th>`).join("");
    const subHeads = months.map(() => `<th class="cumul-metric">출제</th><th class="cumul-metric">정답</th><th class="cumul-metric is-rate-head">정답률</th>`).join("");

    return `
      <div class="diag-table-scroll">
        <table class="diag-table diag-table-score diag-table-cumul">
          <colgroup>
            <col class="cumul-col-zone">
            <col class="cumul-col-major">
            <col class="cumul-col-detail">
          </colgroup>
          <thead>
            <tr>
              <th rowspan="2" class="diag-col-label">구분</th>
              <th rowspan="2" class="diag-col-label">대분류</th>
              <th rowspan="2" class="diag-col-label">세부분류</th>
              ${monthHeads}
            </tr>
            <tr>
              ${subHeads}
            </tr>
          </thead>
          <tbody>
            ${renderCumulTotalRow(totalRow, months, labelCols)}
            ${renderCumulRows("내용영역", bodyRows, months, ["major"])}
            ${behaviorRows.length ? renderCumulRows("행동영역", behaviorRows, months, [], labelCols - 1) : ""}
          </tbody>
        </table>
      </div>`;
  }

  const noteCauses = ["개념 부족", "해석 오류", "시간 부족"];
  const noteStatuses = ["복습 전", "복습 중", "복습 완료"];
  const wrongNoteState = Object.create(null);

  function wrongNoteKey(month, subject, no) {
    return `${month}|${subject}|${no}`;
  }

  function getWrongNoteState(month, subject, no) {
    return wrongNoteState[wrongNoteKey(month, subject, no)] || null;
  }

  function setWrongNoteState(month, subject, no, patch) {
    const key = wrongNoteKey(month, subject, no);
    wrongNoteState[key] = { ...(wrongNoteState[key] || {}), ...patch };
    return wrongNoteState[key];
  }

  function setWrongNoteStatus(month, subject, no, status) {
    if (!noteStatuses.includes(status)) return null;
    return setWrongNoteState(month, subject, no, { status, statusManual: true });
  }

  function setWrongNoteChecks(month, subject, no, checks, { suggestStatus = true } = {}) {
    const patch = { checks: checks.map(Boolean) };
    if (suggestStatus) {
      const done = patch.checks.filter(Boolean).length;
      if (done <= 0) patch.status = "복습 전";
      else if (done >= patch.checks.length) patch.status = "복습 완료";
      else patch.status = "복습 중";
      patch.statusManual = false;
    }
    return setWrongNoteState(month, subject, no, patch);
  }

  function choiceCircle(n) {
    return ["①", "②", "③", "④", "⑤"][Number(n) - 1] || String(n);
  }

  function choiceLine(n, texts) {
    return `${choiceCircle(n)} ${texts[Number(n) - 1] || ""}`.trim();
  }

  function noteItem({ stem, choices, answer, trap, point, core, steps, checks, short }) {
    const trapText = choices[trap - 1];
    const answerText = choices[answer - 1];
    const memos = {
      "개념 부족": `${point} 개념이 헷갈려서 「${trapText}」를 골랐다. 정답은 「${answerText}」이다. 다음엔 개념 정의와 조건을 먼저 확인하고 고르기.`,
      "해석 오류": `${point} 자료의 방향을 반대로 읽어서 「${trapText}」로 골랐다. 정답은 「${answerText}」이다. 다음엔 근거에 표시하고 선지와 한 줄씩 대조하기.`,
      "시간 부족": `${point} 마지막에 시간이 모자라 「${trapText}」를 급히 골랐다. 정답은 「${answerText}」이다. 다음엔 발문과 조건부터 보고 근거를 확인하기.`
    };
    return { stem, choices, answer, trap, core, steps, checks, memos, short };
  }

  const wrongNoteBank = {
    "독서·인문": noteItem({
      stem: "윗글은 도덕적 판단이 타인과의 관계 속에서 형성된다고 본다. 이 관점에 대한 이해로 가장 적절한 것은?",
      choices: ["도덕 판단은 타고난 기질로 결정된다.", "타인과의 관계는 도덕 판단과 무관하다.", "도덕 판단은 개인의 계산만으로 끝난다.", "사회 규범은 도덕 판단의 근거가 될 수 없다.", "도덕 판단은 타인과의 관계 속에서 형성된다."],
      answer: 5,
      trap: 1,
      point: "인문 지문의 관점",
      core: "인문 지문이 제시한 ‘관계 속에서 형성되는 도덕 판단’을 선지와 같은 방향인지 묻는 문항이에요.",
      steps: ["지문에서 관점이 드러난 문장에 표시한다", "관점과 반대인 선지를 지운다", "같은 방향을 말한 선지를 정답으로 고른다"],
      checks: ["관점 문장을 표시했는지 확인한다", "반대 선지를 지웠는지 확인한다", "정답 선지가 관점과 같은 말인지 확인한다"]
    }),
    "독서·사회": noteItem({
      stem: "윗글에 따르면 사회 제도는 개인의 선택을 제약하면서도 협력의 비용을 줄인다. 윗글의 내용과 가장 가까운 것은?",
      choices: ["제도는 개인의 선택에 영향을 주지 않는다.", "제도는 협력 비용을 늘리기 위해 만든다.", "제도는 선택을 제약하지만 협력 비용은 줄인다.", "협력은 제도 없이도 항상 비용이 없다.", "제도는 선택과 협력 모두와 무관하다."],
      answer: 3,
      trap: 2,
      point: "사회 지문의 제도 기능",
      core: "사회 지문에서 제도의 두 기능, 선택 제약과 협력 비용 감소를 함께 잡았는지 묻는 문항이에요.",
      steps: ["제도의 기능이 나온 문장을 둘 다 표시한다", "기능 하나만 말하거나 반대로 말한 선지를 지운다", "두 기능을 모두 담은 선지를 고른다"],
      checks: ["기능 문장 두 곳을 표시했는지 확인한다", "한쪽만 말한 선지를 남기지 않았는지 확인한다", "정답이 두 기능을 모두 담았는지 확인한다"]
    }),
    "독서·과학": noteItem({
      stem: "윗글은 효소가 반응의 활성화 에너지를 낮춰 반응 속도를 높인다고 설명한다. 윗글의 내용과 일치하는 것은?",
      choices: ["효소는 활성화 에너지를 높인다.", "효소는 반응 속도를 낮춘다.", "효소는 활성화 에너지를 낮춰 속도를 높인다.", "효소는 반응 자체에는 관여하지 않는다.", "활성화 에너지와 반응 속도는 무관하다."],
      answer: 3,
      trap: 1,
      point: "과학 지문의 효소 작용",
      core: "과학 지문의 인과, 활성화 에너지 감소가 반응 속도 증가로 이어지는지를 묻는 문항이에요.",
      steps: ["원인과 결과가 적힌 문장을 표시한다", "에너지를 높인다고 한 선지를 지운다", "원인과 결과가 모두 맞는 선지를 고른다"],
      checks: ["원인 문장을 표시했는지 확인한다", "방향이 반대인 선지를 지웠는지 확인한다", "정답의 인과가 지문과 같은지 확인한다"]
    }),
    "독서·기술": noteItem({
      stem: "윗글은 센서가 물리 신호를 전기 신호로 바꾼 뒤 처리 장치가 판정한다고 설명한다. 윗글과 일치하는 것은?",
      choices: ["센서는 전기 신호를 물리 신호로 되돌린다.", "판정은 센서 없이 처리 장치가 먼저 한다.", "센서는 물리 신호를 전기 신호로 바꾼다.", "처리 장치는 신호 변환에만 쓰인다.", "물리 신호는 판정에 쓰이지 않는다."],
      answer: 3,
      trap: 1,
      point: "기술 지문의 신호 변환",
      core: "기술 지문에서 센서의 변환 방향이 물리 신호에서 전기 신호로 가는지를 묻는 문항이에요.",
      steps: ["변환 방향이 적힌 문장을 표시한다", "방향이 뒤집힌 선지를 지운다", "변환 주체와 방향이 맞는 선지를 고른다"],
      checks: ["변환 방향 문장을 표시했는지 확인한다", "앞뒤를 바꾼 선지를 지웠는지 확인한다", "정답이 센서의 역할을 맞혔는지 확인한다"]
    }),
    "문학·현대시": noteItem({
      stem: "다음 시의 ‘창밖에 남은 불빛’에 대한 설명으로 가장 적절한 것은?",
      choices: ["화자가 떠난 공간을 선명히 비추는 희망이다.", "사라져 가는 관계의 흔적을 비추는 이미지다.", "미래 계획을 구체적으로 보여주는 소재다.", "자연 정복을 다짐하는 상징이다.", "청중에게 행동을 지시하는 말이다."],
      answer: 2,
      trap: 1,
      point: "현대시 이미지",
      core: "현대시에서 불빛이 희망이 아니라 사라져 가는 관계의 흔적인지를 묻는 문항이에요.",
      steps: ["이미지가 나온 연을 표시한다", "화자의 정서와 반대인 선지를 지운다", "정서와 맞는 이미지 해석을 고른다"],
      checks: ["해당 연을 표시했는지 확인한다", "정서와 어긋난 해석을 지웠는지 확인한다", "정답이 시의 정서와 같은지 확인한다"]
    }),
    "문학·현대소설": noteItem({
      stem: "윗글에서 주인공이 편지를 보내지 않은 이유로 가장 적절한 것은?",
      choices: ["주소를 몰라서 보낼 수 없었다.", "상대가 이미 답을 보내 필요가 없었다.", "말이 관계를 더 멀어지게 할까 두려웠다.", "편지지가 없어 다른 방법을 택했다.", "주인공은 처음부터 화해할 뜻이 없었다."],
      answer: 3,
      trap: 5,
      point: "현대소설 인물의 심리",
      core: "현대소설에서 편지를 멈춘 행위가 단념이 아니라 관계에 대한 두려움인지를 묻는 문항이에요.",
      steps: ["편지를 망설이는 대목을 표시한다", "상황 설명과 다른 선지를 지운다", "심리 원인과 맞는 선지를 고른다"],
      checks: ["망설임 대목을 표시했는지 확인한다", "사실과 다른 선지를 지웠는지 확인한다", "정답이 인물의 심리와 같은지 확인한다"]
    }),
    "문학·고전시가": noteItem({
      stem: "다음 시조의 ‘님’에 대한 이해로 가장 적절한 것은?",
      choices: ["화자가 정복하려는 자연물이다.", "이별 상황에서 그리움의 대상이다.", "청중에게 교훈을 주는 스승이다.", "풍년을 기원하는 농사 신이다.", "조정의 정책을 비판하는 대상이다."],
      answer: 2,
      trap: 3,
      point: "고전시가의 님",
      core: "고전시가에서 ‘님’이 교훈의 스승이 아니라 이별과 그리움의 대상인지를 묻는 문항이에요.",
      steps: ["님과 이별이 함께 나온 행을 표시한다", "주제와 다른 선지를 지운다", "그리움의 대상으로 읽히는 선지를 고른다"],
      checks: ["이별 행을 표시했는지 확인한다", "주제가 다른 선지를 지웠는지 확인한다", "정답이 화자의 정서와 같은지 확인한다"]
    }),
    "문학·고전소설": noteItem({
      stem: "윗글의 공간 이동에 대한 설명으로 가장 적절한 것은?",
      choices: ["공간 이동은 배경 장식일 뿐 사건과 무관하다.", "집에서 길로의 이동이 시련의 시작을 보여 준다.", "이동 후에도 인물의 처지는 변하지 않는다.", "모든 공간은 같은 계층의 생활을 보여 준다.", "공간은 결말에서만 의미를 가진다."],
      answer: 2,
      trap: 1,
      point: "고전소설의 공간 이동",
      core: "고전소설에서 집에서 길로의 이동이 시련의 시작이라는 사건 기능을 묻어요.",
      steps: ["공간이 바뀌는 대목을 표시한다", "그 직후 사건을 확인한다", "이동의 기능과 맞는 선지를 고른다"],
      checks: ["공간 전환 대목을 표시했는지 확인한다", "직후 사건을 봤는지 확인한다", "정답이 이동의 기능을 맞혔는지 확인한다"]
    }),
    화법: noteItem({
      stem: "다음은 동아리 회의의 일부이다. 사회자의 역할로 가장 적절한 것은?",
      choices: ["한 의견만 끝까지 밀고 나간다.", "발언 순서를 정리하고 쟁점을 확인한다.", "결정 전에 회의를 끝낸다.", "참여자의 발언을 막는다.", "쟁점과 무관한 주제로 바꾼다."],
      answer: 2,
      trap: 1,
      point: "화법 사회자의 역할",
      core: "회의 담화에서 사회자가 발언 순서와 쟁점을 정리하는지를 묻는 문항이에요.",
      steps: ["사회자 발화에 표시한다", "진행과 반대인 선지를 지운다", "순서 정리와 쟁점 확인이 있는 선지를 고른다"],
      checks: ["사회자 발화를 표시했는지 확인한다", "진행을 방해하는 선지를 지웠는지 확인한다", "정답이 실제 역할과 같은지 확인한다"]
    }),
    작문: noteItem({
      stem: "다음 초고를 고친 내용으로 가장 적절한 것은?",
      choices: ["근거의 출처를 빼 문장을 줄였다.", "주장과 무관한 사례를 앞에 추가했다.", "주장 뒤에 수치 근거를 붙여 뒷받침을 보강했다.", "결론을 지우고 사례만 남겼다.", "예상 반론을 주장인 것처럼 바꿨다."],
      answer: 3,
      trap: 1,
      point: "작문 고쳐쓰기",
      core: "작문에서 주장 뒤에 수치 근거를 붙여 뒷받침을 보강했는지를 묻는 문항이에요.",
      steps: ["초고의 주장 문장을 표시한다", "고친 글에서 추가된 근거를 찾는다", "보강 내용과 맞는 선지를 고른다"],
      checks: ["주장 문장을 표시했는지 확인한다", "추가된 근거를 찾았는지 확인한다", "정답이 보강 내용과 같은지 확인한다"]
    }),
    "수학Ⅰ·지수함수와 로그함수": noteItem({
      stem: "2^x = 8일 때 x의 값은?",
      choices: ["2", "3", "4", "6", "8"],
      answer: 2,
      trap: 1,
      point: "지수방정식",
      core: "8을 2^3으로 고쳐 지수를 비교하는 지수방정식 문항이에요.",
      steps: ["8을 2의 거듭제곱으로 고친다", "밑이 같으므로 지수끼리 비교한다", "x = 3을 고른다"],
      checks: ["8 = 2^3으로 고쳤는지 확인한다", "밑을 같게 맞췄는지 확인한다", "지수 비교로 x를 구했는지 확인한다"]
    }),
    "수학Ⅰ·삼각함수": noteItem({
      stem: "sin(π/6)의 값은?",
      choices: ["1/2", "√2/2", "√3/2", "1", "0"],
      answer: 1,
      trap: 3,
      point: "특수각의 사인",
      core: "π/6과 π/3의 사인 값을 구분하는 삼각함수 문항이에요.",
      steps: ["각을 30도로 바꾼다", "30도와 60도의 사인 값을 구분한다", "1/2을 고른다"],
      checks: ["각 변환을 했는지 확인한다", "30도와 60도를 바꿨는지 확인한다", "특수각 값을 맞췄는지 확인한다"]
    }),
    "수학Ⅰ·수열": noteItem({
      stem: "첫째항이 2, 공차가 3인 등차수열의 제5항은?",
      choices: ["11", "14", "15", "17", "20"],
      answer: 2,
      trap: 4,
      point: "등차수열의 일반항",
      core: "제5항을 첫째항에 공차를 4번 더해 구하는 수열 문항이에요.",
      steps: ["일반항 a_n = a + (n-1)d를 적는다", "n = 5, d = 3을 대입한다", "2 + 12 = 14를 고른다"],
      checks: ["(n-1)번 더했는지 확인한다", "공차를 n번 더하지 않았는지 확인한다", "계산 결과가 14인지 확인한다"]
    }),
    "수학Ⅱ·함수의 극한과 연속": noteItem({
      stem: "lim(x→1) (x^2 - 1)/(x - 1)의 값은?",
      choices: ["0", "1", "2", "존재하지 않는다", "무한대"],
      answer: 3,
      trap: 4,
      point: "인수분해 후 극한",
      core: "0/0꼴을 인수분해해 연속인 식으로 바꾼 뒤 극한을 구하는 문항이에요.",
      steps: ["분자를 (x-1)(x+1)로 인수분해한다", "x ≠ 1에서 약분한다", "x = 1을 대입해 2를 구한다"],
      checks: ["인수분해를 했는지 확인한다", "약분 조건을 봤는지 확인한다", "대입 결과가 2인지 확인한다"]
    }),
    "수학Ⅱ·미분": noteItem({
      stem: "f(x) = x^2일 때 f'(2)의 값은?",
      choices: ["2", "4", "8", "1", "0"],
      answer: 2,
      trap: 1,
      point: "거듭제곱의 미분",
      core: "도함수 2x에 x = 2를 대입하는 미분 문항이에요.",
      steps: ["f'(x) = 2x를 구한다", "x = 2를 대입한다", "4를 고른다"],
      checks: ["도함수를 먼저 구했는지 확인한다", "원래 식에 대입하지 않았는지 확인한다", "대입 결과가 4인지 확인한다"]
    }),
    "수학Ⅱ·적분": noteItem({
      stem: "∫(0부터 1까지) 2x dx의 값은?",
      choices: ["1", "2", "1/2", "4", "0"],
      answer: 1,
      trap: 2,
      point: "정적분 계산",
      core: "원시함수 x^2의 구간 함숫값 차로 정적분을 구하는 문항이에요.",
      steps: ["원시함수 x^2을 구한다", "F(1) - F(0)을 계산한다", "1을 고른다"],
      checks: ["원시함수를 구했는지 확인한다", "위끝과 아래끝을 뺐는지 확인한다", "계산 결과가 1인지 확인한다"]
    }),
    "확률과 통계·경우의 수": noteItem({
      stem: "서로 다른 책 3권을 일렬로 나열하는 경우의 수는?",
      choices: ["3", "6", "9", "27", "1"],
      answer: 2,
      trap: 1,
      point: "순열",
      core: "서로 다른 3개의 순열 3!을 구하는 경우의 수 문항이에요.",
      steps: ["순서가 있으면 순열임을 표시한다", "3! = 6을 계산한다", "6을 고른다"],
      checks: ["순서를 고려했는지 확인한다", "3을 그대로 고르지 않았는지 확인한다", "3! 계산이 6인지 확인한다"]
    }),
    "확률과 통계·확률": noteItem({
      stem: "동전 2개를 동시에 던질 때 둘 다 앞면이 나올 확률은?",
      choices: ["1/2", "1/4", "1/3", "1/8", "3/4"],
      answer: 2,
      trap: 1,
      point: "독립시행의 확률",
      core: "각 동전의 확률 1/2를 곱하는 독립 확률 문항이에요.",
      steps: ["전체 경우 4가지를 적는다", "둘 다 앞인 경우 1가지를 표시한다", "1/4를 고른다"],
      checks: ["경우의 수를 적었는지 확인한다", "한 개만의 확률을 쓰지 않았는지 확인한다", "결과가 1/4인지 확인한다"]
    }),
    "확률과 통계·통계": noteItem({
      stem: "자료 2, 4, 6의 평균은?",
      choices: ["3", "4", "5", "6", "12"],
      answer: 2,
      trap: 3,
      point: "평균",
      core: "자료의 합을 개수로 나누는 평균 문항이에요.",
      steps: ["합 12를 구한다", "개수 3으로 나눈다", "4를 고른다"],
      checks: ["합을 구했는지 확인한다", "개수로 나눴는지 확인한다", "결과가 4인지 확인한다"]
    }),
    "미적분·수열의 극한": noteItem({
      stem: "lim(n→∞) (2n + 1)/(n + 1)의 값은?",
      choices: ["1", "2", "1/2", "0", "무한대"],
      answer: 2,
      trap: 1,
      point: "유리식 수열의 극한",
      core: "최고차항의 계수비로 수열의 극한을 구하는 문항이에요.",
      steps: ["분자와 분모의 최고차항을 표시한다", "계수비 2/1을 구한다", "2를 고른다"],
      checks: ["최고차항을 표시했는지 확인한다", "상수항으로 극한을 구하지 않았는지 확인한다", "계수비가 2인지 확인한다"]
    }),
    "미적분·미분법": noteItem({
      stem: "f(x) = x^3일 때 f'(1)의 값은?",
      choices: ["1", "2", "3", "6", "9"],
      answer: 3,
      trap: 1,
      point: "도함수의 함숫값",
      core: "f'(x) = 3x^2에 x = 1을 대입하는 미분법 문항이에요.",
      steps: ["f'(x) = 3x^2을 구한다", "x = 1을 대입한다", "3을 고른다"],
      checks: ["도함수를 구했는지 확인한다", "x = 1을 대입했는지 확인한다", "결과가 3인지 확인한다"],
      short: {
        stem: "f(x) = x^3일 때 f'(1)의 값을 구하시오.",
        answer: "3",
        marked: "6",
        memos: {
          "개념 부족": "도함수 3x^2 대신 x^3을 한 번 더 미분한 식으로 착각해서 6을 적었다. 정답은 3이다. 다음엔 도함수를 한 번만 구하고 대입하기.",
          "해석 오류": "f'(1)을 f(1)로 읽고 계산하다 식을 잘못 세워 6을 적었다. 정답은 3이다. 다음엔 함숫값인지 미분계수인지 발문에서 먼저 표시하기.",
          "시간 부족": "3x^2에 대입하다 급해서 6을 적었다. 정답은 3이다. 다음엔 대입 전에 식을 한 줄로 다시 적기."
        }
      }
    }),
    "미적분·적분법": noteItem({
      stem: "∫(0부터 2까지) x dx의 값은?",
      choices: ["1", "2", "4", "8", "0"],
      answer: 2,
      trap: 3,
      point: "정적분",
      core: "원시함수 x^2/2의 구간 차로 넓이를 구하는 적분법 문항이에요.",
      steps: ["원시함수 x^2/2를 구한다", "F(2) - F(0)을 계산한다", "2를 고른다"],
      checks: ["원시함수를 구했는지 확인한다", "위끝 제곱만 답으로 쓰지 않았는지 확인한다", "결과가 2인지 확인한다"],
      short: {
        stem: "∫(0부터 2까지) x dx의 값을 구하시오.",
        answer: "2",
        marked: "4",
        memos: {
          "개념 부족": "원시함수로 나누지 않고 위끝의 제곱 4를 적었다. 정답은 2이다. 다음엔 원시함수를 구한 뒤 구간 차를 계산하기.",
          "해석 오류": "적분 구간을 0부터 4까지로 잘못 읽어 4를 적었다. 정답은 2이다. 다음엔 위끝과 아래끝에 동그라미를 치고 대입하기.",
          "시간 부족": "F(2)를 구하다 급해서 4를 적었다. 정답은 2이다. 다음엔 약분을 끝낸 뒤에 답칸에 적기."
        }
      }
    }),
    "기하·이차곡선": noteItem({
      stem: "포물선 y^2 = 4x의 초점의 x좌표는?",
      choices: ["1", "2", "4", "1/2", "0"],
      answer: 1,
      trap: 2,
      point: "포물선의 초점",
      core: "y^2 = 4px에서 p = 1이므로 초점이 (1, 0)인 이차곡선 문항이에요.",
      steps: ["4p = 4에서 p = 1을 구한다", "초점이 (p, 0)임을 적는다", "x좌표 1을 고른다"],
      checks: ["4p = 4를 풀었는지 확인한다", "초점을 (2p, 0)으로 쓰지 않았는지 확인한다", "x좌표가 1인지 확인한다"],
      short: {
        stem: "포물선 y^2 = 4x의 초점의 x좌표를 구하시오.",
        answer: "1",
        marked: "2",
        memos: {
          "개념 부족": "초점을 (2p, 0)으로 기억해서 2를 적었다. 정답은 1이다. 다음엔 y^2 = 4px에서 p를 먼저 구하기.",
          "해석 오류": "4를 초점 좌표로 읽고 계산하다 2를 적었다. 정답은 1이다. 다음엔 4p = 4인지 식 옆에 표시하기.",
          "시간 부족": "p를 구하다 급해서 2를 적었다. 정답은 1이다. 다음엔 초점 (p, 0)을 적고 나서 답칸에 쓰기."
        }
      }
    }),
    "기하·평면벡터": noteItem({
      stem: "벡터 a = (1, 2), b = (3, 0)일 때 a·b의 값은?",
      choices: ["1", "2", "3", "5", "6"],
      answer: 3,
      trap: 5,
      point: "벡터의 내적",
      core: "성분의 곱을 더하는 평면벡터 내적 문항이에요.",
      steps: ["1×3과 2×0을 적는다", "3 + 0을 계산한다", "3을 고른다"],
      checks: ["성분끼리 곱했는지 확인한다", "성분을 모두 더하지 않았는지 확인한다", "합이 3인지 확인한다"],
      short: {
        stem: "a = (1, 2), b = (3, 0)일 때 a·b의 값을 구하시오.",
        answer: "3",
        marked: "6",
        memos: {
          "개념 부족": "성분을 모두 더해서 6을 적었다. 정답은 3이다. 다음엔 같은 위치의 성분만 곱해서 더하기.",
          "해석 오류": "b의 0을 빼고 1×3×2로 계산해서 6을 적었다. 정답은 3이다. 다음엔 성분 아래에 곱을 따로 적기.",
          "시간 부족": "1×3만 하다 급해서 6을 적었다. 정답은 3이다. 다음엔 두 곱을 다 적은 뒤 답칸에 쓰기."
        }
      }
    }),
    "기하·공간도형과 공간좌표": noteItem({
      stem: "한 모서리의 길이가 2인 정육면체의 부피는?",
      choices: ["4", "6", "8", "12", "16"],
      answer: 3,
      trap: 4,
      point: "정육면체의 부피",
      core: "부피 a^3을 쓰는 공간도형 문항이에요.",
      steps: ["부피 공식이 a^3임을 적는다", "2^3을 계산한다", "8을 고른다"],
      checks: ["세제곱인지 확인한다", "겉넓이를 구하지 않았는지 확인한다", "결과가 8인지 확인한다"],
      short: {
        stem: "한 모서리의 길이가 2인 정육면체의 부피를 구하시오.",
        answer: "8",
        marked: "12",
        memos: {
          "개념 부족": "겉넓이 식으로 착각해서 12를 적었다. 정답은 8이다. 다음엔 부피는 a^3인지 식부터 적기.",
          "해석 오류": "모서리 개수 12를 부피로 적었다. 정답은 8이다. 다음엔 묻는 것이 부피인지 발문에 표시하기.",
          "시간 부족": "2^3을 계산하다 급해서 12를 적었다. 정답은 8이다. 다음엔 2×2×2를 세 번 적고 답칸에 쓰기."
        }
      }
    }),
    "듣기·말하기·듣기": noteItem({
      stem: "다음을 듣고, 남자가 여자에게 제안한 것으로 가장 적절한 것은? (남자: 발표 전에 도서관에서 자료를 같이 보자.)",
      choices: ["카페에서 만나자고 했다.", "발표를 미루자고 했다.", "도서관에서 자료를 함께 보자고 했다.", "자료를 혼자 준비하라고 했다.", "회의 장소를 바꾸자고 했다."],
      answer: 3,
      trap: 1,
      point: "듣기 제안",
      core: "대화에서 남자가 제안한 장소와 활동이 도서관에서 자료를 함께 보는 것인지를 묻는 듣기 문항이에요.",
      steps: ["제안 문장의 장소와 활동을 적는다", "장소가 다른 선지를 지운다", "도서관과 자료 확인이 있는 선지를 고른다"],
      checks: ["장소와 활동을 적었는지 확인한다", "다른 장소를 지웠는지 확인한다", "정답이 대화의 제안과 같은지 확인한다"]
    }),
    "듣기·말하기·간접말하기": noteItem({
      stem: "대화를 듣고, 여자에 대한 남자의 응답으로 가장 적절한 것은? (여자: 내일 오전에 회의가 있다고 했어.)",
      choices: ["그럼 오늘 오후에 자료를 마무리하자.", "회의는 이미 끝났잖아.", "자료는 필요 없다고 했어.", "오전이 아니라 밤이라고 했어.", "나는 회의에 안 가기로 했어."],
      answer: 1,
      trap: 2,
      point: "간접 말하기 응답",
      core: "상대 발화의 시각 정보를 받아 다음에 할 말을 고르는 간접 말하기 문항이에요.",
      steps: ["여자의 핵심 정보인 내일 오전을 표시한다", "그 정보와 모순인 응답을 지운다", "이어서 할 일로 자연스러운 응답을 고른다"],
      checks: ["핵심 정보를 표시했는지 확인한다", "모순된 응답을 지웠는지 확인한다", "정답이 대화의 다음 말로 자연스러운지 확인한다"]
    }),
    "읽기·쓰기·대의파악": noteItem({
      stem: "다음 글의 요지로 가장 적절한 것은?",
      choices: ["Sleep matters less than extra study time.", "Short sleep can weaken memory and focus.", "Students should avoid all screen use.", "Memory does not depend on rest.", "Focus improves only with more classes."],
      answer: 2,
      trap: 1,
      point: "글의 요지",
      core: "글 전체가 수면 부족이 기억과 집중을 떨어뜨린다는 요지인지를 묻는 대의 파악 문항이에요.",
      steps: ["반복되는 주장 문장을 표시한다", "예시와 주장을 구분한다", "주장을 가장 넓게 말한 선지를 고른다"],
      checks: ["주장 문장을 표시했는지 확인한다", "예를 요지로 고르지 않았는지 확인한다", "정답이 글 전체 주장과 같은지 확인한다"]
    }),
    "읽기·쓰기·세부정보파악": noteItem({
      stem: "다음 안내문의 내용과 일치하지 않는 것은?",
      choices: ["신청은 금요일까지이다.", "장소는 학교 강당이다.", "참가비는 없다.", "시작 시각은 오전 9시이다.", "보호자 동반이 필수이다."],
      answer: 5,
      trap: 3,
      point: "세부 정보 불일치",
      core: "안내문에 없는 조건을 고르는 세부 정보 파악 문항이에요. 안내문에는 보호자 동반이 없다.",
      steps: ["시각, 장소, 신청, 비용을 표시한다", "선지를 안내문과 하나씩 대조한다", "안내문에 없는 보호자 동반을 고른다"],
      checks: ["네 가지 정보를 표시했는지 확인한다", "있는 정보를 답으로 고르지 않았는지 확인한다", "정답이 안내문에 없는지 확인한다"]
    }),
    "읽기·쓰기·어법·어휘": noteItem({
      stem: "다음 밑줄 친 부분 중 어법상 틀린 것은?",
      choices: ["The book which I bought was useful.", "She suggested to go home early.", "He made me laugh.", "I look forward to seeing you.", "There is a student who knows the answer."],
      answer: 2,
      trap: 4,
      point: "suggest의 어법",
      core: "suggest 뒤에는 to부정사 대신 동명사나 that절이 온다는 어법 문항이에요.",
      steps: ["각 밑줄의 동사 형태를 표시한다", "suggest 뒤 형태를 규칙과 비교한다", "to go가 틀린 선지를 고른다"],
      checks: ["동사 형태를 표시했는지 확인한다", "look forward to 뒤 동명사를 틀렸다고 보지 않았는지 확인한다", "suggest 뒤가 to부정사인지 확인한다"]
    }),
    "읽기·쓰기·빈칸추론": noteItem({
      stem: "다음 빈칸에 들어갈 말로 가장 적절한 것은? Practice matters, but without feedback learners often repeat the same ____.",
      choices: ["success", "mistake", "schedule", "prize", "silence"],
      answer: 2,
      trap: 1,
      point: "빈칸의 논리 방향",
      core: "피드백이 없으면 같은 실수가 반복된다는 빈칸 추론 문항이에요.",
      steps: ["빈칸 앞의 대조 연결어를 표시한다", "부정적인 결과를 예측한다", "mistake를 고른다"],
      checks: ["대조 연결어를 표시했는지 확인한다", "긍정적 단어로 채우지 않았는지 확인한다", "정답이 문장 논리와 같은지 확인한다"]
    }),
    "읽기·쓰기·간접쓰기": noteItem({
      stem: "주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?",
      choices: ["(A)-(C)-(B)", "(B)-(A)-(C)", "(B)-(C)-(A)", "(C)-(A)-(B)", "(C)-(B)-(A)"],
      answer: 2,
      trap: 1,
      point: "글의 순서",
      core: "지시어와 내용 흐름으로 글의 순서를 정하는 간접 쓰기 문항이에요. 정답 순서는 (B)-(A)-(C)이다.",
      steps: ["각 문단의 첫 지시어를 표시한다", "앞에 올 내용이 없는 문단을 뒤로 보낸다", "연결된 순서 (B)-(A)-(C)를 고른다"],
      checks: ["지시어를 표시했는지 확인한다", "연결이 끊긴 순서를 지웠는지 확인한다", "정답 순서가 지시어와 맞는지 확인한다"]
    }),
    "읽기·쓰기·장문독해": noteItem({
      stem: "장문의 주제로 가장 적절한 것은?",
      choices: ["How city trees reduce heat and stress.", "Why cities should remove all parks.", "How to build taller office towers.", "Why traffic lights waste fuel.", "How rivers replace public transport."],
      answer: 1,
      trap: 2,
      point: "장문의 주제",
      core: "여러 문단이 도시 나무가 열과 스트레스를 줄인다는 한 주제로 모이는지를 묻는 장문 독해 문항이에요.",
      steps: ["문단마다 핵심 명사를 적는다", "반복되는 대상을 찾는다", "그 대상을 주제로 말한 선지를 고른다"],
      checks: ["문단 핵심을 적었는지 확인한다", "한 문단의 예를 주제로 보지 않았는지 확인한다", "정답이 반복 대상과 같은지 확인한다"]
    }),
    "전근대사·선사와 고대 국가": noteItem({
      stem: "다음 유물이 출토된 나라의 사회 모습으로 가장 적절한 것은? (세형 동검, 고인돌)",
      choices: ["팔관회를 열어 외국 상인을 맞이했다.", "지배층이 청동 무기를 통해 권위를 보였다.", "과거제로 관리를 선발했다.", "훈민정음을 창제했다.", "대한제국을 선포했다."],
      answer: 2,
      trap: 1,
      point: "청동기 시대 사회",
      core: "세형 동검과 고인돌이 청동기 시대 지배층의 권위를 보여 주는지 묻는 한국사 문항이에요.",
      steps: ["유물의 시대를 먼저 적는다", "다른 시대 선지를 지운다", "청동기 지배층의 권위와 맞는 선지를 고른다"],
      checks: ["유물 시대를 적었는지 확인한다", "다른 시대 사실을 지웠는지 확인한다", "정답이 그 시대의 사회 모습인지 확인한다"]
    }),
    "전근대사·고려의 정치와 사회": noteItem({
      stem: "다음 정책의 목적으로 가장 적절한 것은? (전시과)",
      choices: ["문벌을 없애고 과거만 남기려 했다.", "관리에게 수조권을 주어 보수 체계를 마련하려 했다.", "농민에게 토지 사유를 금지하려 했다.", "왜구를 막기 위해 성을 쌓으려 했다.", "공노비 문서를 불태우려 했다."],
      answer: 2,
      trap: 3,
      point: "전시과",
      core: "전시과가 관리에게 수조권을 나누어 보수를 준 제도인지를 묻는 고려 정치 문항이에요.",
      steps: ["전시과가 누구에게 무엇을 주는지 적는다", "목적과 다른 선지를 지운다", "수조권과 보수 체계가 있는 선지를 고른다"],
      checks: ["지급 대상을 적었는지 확인한다", "다른 왕조의 정책을 지웠는지 확인한다", "정답이 전시과 목적과 같은지 확인한다"]
    }),
    "전근대사·조선 전기의 통치": noteItem({
      stem: "경국대전에 대한 설명으로 가장 적절한 것은?",
      choices: ["훈민정음 창제 원리를 정리한 책이다.", "조선의 기본 법전으로 통치 체제를 성문화했다.", "임진왜란의 전투 기록을 모은 책이다.", "실학자의 토지 개혁안이다.", "대한제국의 헌법이다."],
      answer: 2,
      trap: 1,
      point: "경국대전",
      core: "경국대전이 조선의 통치 체제를 성문화한 기본 법전인지를 묻는 문항이에요.",
      steps: ["경국대전의 성격을 한 줄로 적는다", "다른 책과 섞인 선지를 지운다", "기본 법전이라는 선지를 고른다"],
      checks: ["책의 성격을 적었는지 확인한다", "훈민정음과 혼동하지 않았는지 확인한다", "정답이 법전이라는 점과 같은지 확인한다"]
    }),
    "전근대사·조선 후기의 변화": noteItem({
      stem: "조선 후기 광작에 대한 설명으로 가장 적절한 것은?",
      choices: ["농민이 경작지를 넓혀 상품 작물 재배가 늘었다.", "국가가 토지를 모두 균등 분배했다.", "수취 체제가 완전히 사라졌다.", "농업 대신 수공업이 금지되었다.", "과거제가 폐지되었다."],
      answer: 1,
      trap: 2,
      point: "광작",
      core: "광작이 농민의 경작 확대와 상품 작물 재배로 이어졌는지를 묻는 조선 후기 문항이에요.",
      steps: ["광작의 주체와 결과를 적는다", "국가 주도 분배로 쓴 선지를 지운다", "경작 확대와 상품 작물이 있는 선지를 고른다"],
      checks: ["주체를 농민으로 봤는지 확인한다", "균등 분배와 혼동하지 않았는지 확인한다", "정답이 상품 작물로 연결되는지 확인한다"]
    }),
    "근현대사·개항과 근대 개혁": noteItem({
      stem: "갑신정변에 대한 설명으로 가장 적절한 것은?",
      choices: ["위정척사 세력이 통상 수교를 거부한 운동이다.", "급진 개화파가 근대적 개혁을 추진한 정변이다.", "농민군이 폐정 개혁을 요구한 봉기다.", "고종이 대한제국을 선포한 사건이다.", "의병이 일본군과 싸운 첫 전투이다."],
      answer: 2,
      trap: 3,
      point: "갑신정변",
      core: "갑신정변이 급진 개화파의 근대 개혁 시도인지를 묻는 개항기 문항이에요.",
      steps: ["사건의 주도 세력을 적는다", "농민 봉기나 의병과 섞인 선지를 지운다", "급진 개화파의 개혁이라는 선지를 고른다"],
      checks: ["주도 세력을 적었는지 확인한다", "동학 농민 운동과 구분했는지 확인한다", "정답이 개화파의 정변인지 확인한다"]
    }),
    "근현대사·일제 강점과 독립운동": noteItem({
      stem: "대한민국 임시 정부에 대한 설명으로 가장 적절한 것은?",
      choices: ["국내에서 총독부 자문 기구로 설치되었다.", "3·1 운동 이후 민주 공화제를 표방하며 수립되었다.", "독립군 활동을 금지하는 기구였다.", "을사늑약 체결을 승인한 정부였다.", "광복 이후에만 존재했다."],
      answer: 2,
      trap: 5,
      point: "대한민국 임시 정부",
      core: "임시 정부가 3·1 운동 이후 민주 공화제를 표방하며 세워졌는지를 묻는 문항이에요.",
      steps: ["수립 시점과 정치 체제를 적는다", "시점이나 성격이 다른 선지를 지운다", "3·1 운동 이후와 민주 공화제가 있는 선지를 고른다"],
      checks: ["수립 시점을 적었는지 확인한다", "광복 이후와 혼동하지 않았는지 확인한다", "정답이 민주 공화제와 같은지 확인한다"]
    }),
    "근현대사·대한민국의 수립": noteItem({
      stem: "제헌 국회에 대한 설명으로 가장 적절한 것은?",
      choices: ["조선 왕실의 자문 기구였다.", "헌법을 제정하고 정부 수립의 바탕을 마련했다.", "일제 총독부를 계승한 기구였다.", "농지 개혁만 담당하고 해산했다.", "6월 민주 항쟁 이후 구성되었다."],
      answer: 2,
      trap: 4,
      point: "제헌 국회",
      core: "제헌 국회가 헌법을 제정해 정부 수립의 바탕을 만들었는지를 묻는 문항이에요.",
      steps: ["제헌 국회의 핵심 활동을 적는다", "다른 시기 기구와 섞인 선지를 지운다", "헌법 제정과 정부 수립이 있는 선지를 고른다"],
      checks: ["핵심 활동을 적었는지 확인한다", "농지 개혁만으로 보지 않았는지 확인한다", "정답이 헌법 제정과 같은지 확인한다"]
    }),
    "근현대사·민주화와 경제 성장": noteItem({
      stem: "4·19 혁명에 대한 설명으로 가장 적절한 것은?",
      choices: ["3·1 운동의 다른 이름이다.", "부정 선거에 항의해 자유당 정권의 퇴진을 이끌었다.", "군부가 국회를 해산한 사건이다.", "한일 국교 정상화를 요구한 시위이다.", "유신 헌법 제정에 찬성한 운동이다."],
      answer: 2,
      trap: 3,
      point: "4·19 혁명",
      core: "4·19 혁명이 부정 선거에 저항해 자유당 정권 퇴진으로 이어졌는지를 묻는 문항이에요.",
      steps: ["원인인 부정 선거를 표시한다", "결과인 정권 퇴진을 표시한다", "원인과 결과가 맞는 선지를 고른다"],
      checks: ["원인을 표시했는지 확인한다", "5·16과 혼동하지 않았는지 확인한다", "정답이 자유당 퇴진과 같은지 확인한다"]
    }),
    "통합사회1·통합적 관점": noteItem({
      stem: "다음 현상을 시간적·공간적·사회적·윤리적 관점으로 함께 봐야 하는 이유로 가장 적절한 것은?",
      choices: ["하나의 관점만으로 현상의 원인과 책임이 모두 드러나기 때문이다.", "여러 관점을 겹치면 원인, 영향, 책임을 함께 볼 수 있기 때문이다.", "관점을 나누면 자료 해석이 불가능하기 때문이다.", "윤리적 관점은 사실 판단에 쓰일 수 없기 때문이다.", "공간적 관점은 사회 현상과 무관하기 때문이다."],
      answer: 2,
      trap: 1,
      point: "통합적 관점",
      core: "한 현상을 시간, 공간, 사회, 윤리 관점으로 겹쳐 보아야 하는지를 묻는 통합사회 문항이에요.",
      steps: ["사례에 적용할 관점 네 가지를 적는다", "한 관점만 충분하다고 한 선지를 지운다", "여러 관점의 필요를 말한 선지를 고른다"],
      checks: ["네 관점을 적었는지 확인한다", "한 관점만 고르지 않았는지 확인한다", "정답이 통합의 이유와 같은지 확인한다"]
    }),
    "통합사회1·인간, 사회, 환경과 행복": noteItem({
      stem: "행복의 조건에 대한 설명으로 가장 적절한 것은?",
      choices: ["소득이 늘면 행복은 항상 같은 비율로 늘다.", "안전, 관계, 건강 같은 질적 조건도 행복에 영향을 준다.", "행복은 개인 심리와 무관하다.", "환경 문제는 행복과 관련이 없다.", "사회 제도와 행복은 분리되어 있다."],
      answer: 2,
      trap: 1,
      point: "행복의 조건",
      core: "행복을 소득만이 아니라 안전, 관계, 건강 같은 질적 조건으로 보는 문항이에요.",
      steps: ["자료의 행복 지표를 적는다", "소득만 말한 선지를 비교한다", "질적 조건이 포함된 선지를 고른다"],
      checks: ["지표를 적었는지 확인한다", "소득 비례만으로 보지 않았는지 확인한다", "정답에 질적 조건이 있는지 확인한다"]
    }),
    "통합사회1·자연환경과 인간": noteItem({
      stem: "열대 우림 개발에 대한 설명으로 가장 적절한 것은?",
      choices: ["개발은 생물 다양성과 탄소 저장에 영향이 없다.", "단기 이득이 있어도 생태계 서비스 손실을 함께 봐야 한다.", "기후와 인간 생활은 무관하다.", "열대 우림은 재생이 필요 없는 자원이다.", "환경 문제는 지역 사회와 분리된다."],
      answer: 2,
      trap: 1,
      point: "자연환경과 인간",
      core: "열대 우림 개발의 단기 이득과 생태계 서비스 손실을 함께 보는 문항이에요.",
      steps: ["개발의 이득과 손실을 각각 표시한다", "손실을 없다고 한 선지를 지운다", "둘을 함께 보자는 선지를 고른다"],
      checks: ["이득과 손실을 표시했는지 확인한다", "한쪽만 본 선지를 지웠는지 확인한다", "정답이 생태계 서비스를 언급하는지 확인한다"]
    }),
    "통합사회1·문화와 다양성": noteItem({
      stem: "문화 상대주의에 대한 설명으로 가장 적절한 것은?",
      choices: ["모든 문화를 자기 기준으로만 평가해야 한다.", "문화의 맥락을 이해하고 차이를 존중하는 태도다.", "보편 윤리를 전혀 고려하지 말아야 한다.", "다른 문화와의 교류를 금지하는 입장이다.", "문화는 변하지 않는 실체다."],
      answer: 2,
      trap: 3,
      point: "문화 상대주의",
      core: "문화 상대주의가 맥락을 이해하고 차이를 존중하는 태도인지를 묻는 문항이에요.",
      steps: ["문화 상대주의의 정의를 적는다", "자문화 중심주의와 구분한다", "존중과 맥락이 있는 선지를 고른다"],
      checks: ["정의를 적었는지 확인한다", "보편 윤리 포기로 오해하지 않았는지 확인한다", "정답이 차이 존중과 같은지 확인한다"]
    }),
    "통합사회1·생활공간과 사회": noteItem({
      stem: "도시 공간 분화에 대한 설명으로 가장 적절한 것은?",
      choices: ["주거, 상업, 공업 기능이 한곳에만 몰린다.", "지대와 접근성에 따라 기능 지역이 나뉜다.", "교통은 공간 구조와 무관하다.", "교외화는 도시의 기능을 없앤다.", "모든 시민이 같은 생활권을 쓴다."],
      answer: 2,
      trap: 1,
      point: "도시 공간 구조",
      core: "지대와 접근성에 따라 도시 기능 지역이 나뉘는지를 묻는 생활공간 문항이에요.",
      steps: ["지도에서 기능 지역을 표시한다", "분화의 요인인 지대와 접근성을 적는다", "두 요인이 있는 선지를 고른다"],
      checks: ["기능 지역을 표시했는지 확인한다", "한곳에 몰린다고만 보지 않았는지 확인한다", "정답에 지대와 접근성이 있는지 확인한다"]
    }),
    "통합사회2·인권보장과 헌법": noteItem({
      stem: "기본권 제한에 대한 설명으로 가장 적절한 것은?",
      choices: ["기본권은 어떤 이유로도 제한할 수 없다.", "법률로 제한하더라도 과잉 금지 원칙을 지켜야 한다.", "국가 안전은 기본권보다 항상 우선한다.", "기본권 제한은 명령으로만 가능하다.", "침해된 기본권은 구제할 수 없다."],
      answer: 2,
      trap: 3,
      point: "기본권 제한",
      core: "기본권을 법률로 제한할 때도 과잉 금지 원칙이 적용되는지를 묻는 헌법 문항이에요.",
      steps: ["제한의 근거가 법률인지 확인한다", "과잉 금지의 네 요건을 적는다", "원칙을 지킨다는 선지를 고른다"],
      checks: ["법률 근거를 확인했는지 본다", "국가 안전 우선으로 단정하지 않았는지 확인한다", "정답이 과잉 금지 원칙과 같은지 확인한다"]
    }),
    "통합사회2·사회정의와 불평등": noteItem({
      stem: "다음 제도의 취지로 가장 적절한 것은? (누진 소득세)",
      choices: ["모든 소득에 같은 세율을 적용하려 한다.", "부담 능력에 따라 세 부담의 형평을 높이려 한다.", "저소득층의 세 부담만 늘리려 한다.", "소득 재분배와는 무관하다.", "간접세만으로 재정을 마련하려 한다."],
      answer: 2,
      trap: 1,
      point: "누진 소득세",
      core: "누진 소득세가 부담 능력에 맞춰 형평을 높이려는 제도인지를 묻는 문항이에요.",
      steps: ["누진의 뜻을 세율과 소득으로 적는다", "비례세와 구분한다", "부담 능력과 형평이 있는 선지를 고른다"],
      checks: ["세율 구조를 적었는지 확인한다", "같은 세율과 혼동하지 않았는지 확인한다", "정답이 형평과 같은지 확인한다"]
    }),
    "통합사회2·시장경제와 지속가능발전": noteItem({
      stem: "외부 효과에 대한 설명으로 가장 적절한 것은?",
      choices: ["거래 당사자만 비용과 편익을 가진다.", "제3자에게 의도하지 않은 비용이나 편익이 돌아간다.", "시장은 외부 효과를 항상 스스로 해결한다.", "환경 오염은 외부 효과가 아니다.", "외부 효과는 정부 개입과 무관하다."],
      answer: 2,
      trap: 1,
      point: "외부 효과",
      core: "시장 거래의 비용이나 편익이 제3자에게 미치는 외부 효과를 묻는 문항이에요.",
      steps: ["거래 당사자와 제3자를 구분한다", "제3자에게 가는 비용을 표시한다", "그 정의와 맞는 선지를 고른다"],
      checks: ["당사자와 제3자를 나눴는지 확인한다", "당사자만의 비용으로 보지 않았는지 확인한다", "정답이 외부 효과 정의와 같은지 확인한다"]
    }),
    "통합사회2·세계화와 평화": noteItem({
      stem: "국제 분쟁을 다루는 태도로 가장 적절한 것은?",
      choices: ["자국 이익만 기준으로 판단한다.", "역사적 맥락과 국제 규범을 함께 고려한다.", "상대 지역의 자료는 보지 않는다.", "평화 원칙은 주권과 충돌하면 버린다.", "분쟁 지역 주민의 권리는 제외한다."],
      answer: 2,
      trap: 1,
      point: "세계화와 평화",
      core: "국제 분쟁을 자국 이익만이 아니라 역사적 맥락과 국제 규범으로 보는 문항이에요.",
      steps: ["자료의 주장과 국제 규범을 각각 표시한다", "한쪽 기준만 쓴 선지를 지운다", "맥락과 규범을 함께 말한 선지를 고른다"],
      checks: ["두 기준을 표시했는지 확인한다", "자국 이익만 고르지 않았는지 확인한다", "정답이 두 기준을 담았는지 확인한다"]
    }),
    "통합사회2·미래와 지속가능한 삶": noteItem({
      stem: "지속가능발전에 대한 설명으로 가장 적절한 것은?",
      choices: ["현재 세대의 소비만 극대화하면 된다.", "경제, 사회, 환경을 미래 세대와 함께 고려해야 한다.", "환경 보전은 경제 성장 이후에만 가능하다.", "미래 세대의 선택은 고려 대상이 아니다.", "기술 발전은 지속가능성과 무관하다."],
      answer: 2,
      trap: 1,
      point: "지속가능발전",
      core: "경제, 사회, 환경을 현재와 미래 세대가 함께 고려하는지를 묻는 문항이에요.",
      steps: ["세 영역과 세대 조건을 적는다", "현재 소비만 말한 선지를 지운다", "세 영역과 미래 세대가 있는 선지를 고른다"],
      checks: ["세 영역을 적었는지 확인한다", "현재 세대만 보지 않았는지 확인한다", "정답이 미래 세대를 포함하는지 확인한다"]
    }),
    "통합과학1·과학의 기초": noteItem({
      stem: "다음 측정에 대한 설명으로 가장 적절한 것은?",
      choices: ["눈금의 최소 단위보다 더 정밀한 값을 그대로 읽는다.", "유효숫자를 고려해 측정 한계 안의 값으로 나타낸다.", "단위는 계산 후에 아무 때나 붙여도 된다.", "반복 측정은 오차를 키운다.", "영점 조절은 측정값과 무관하다."],
      answer: 2,
      trap: 1,
      point: "측정과 유효숫자",
      core: "측정값이 기구의 한계 안에서 유효숫자로 표현되는지를 묻는 과학의 기초 문항이에요.",
      steps: ["기구의 최소 눈금을 확인한다", "읽은 값의 유효숫자를 표시한다", "한계 안의 표현을 말한 선지를 고른다"],
      checks: ["최소 눈금을 확인했는지 본다", "눈금보다 정밀하게 읽지 않았는지 확인한다", "정답이 유효숫자를 언급하는지 확인한다"]
    }),
    "통합과학1·물질과 규칙성": noteItem({
      stem: "같은 주기에서 원자 번호가 커질 때 원자의 성질로 가장 적절한 것은?",
      choices: ["원자 반지름이 대체로 커진다.", "원자가 전자 수가 줄어든다.", "같은 주기에서는 전자 껍질 수가 같다.", "핵 전하가 줄어든다.", "원소의 족이 모두 같아진다."],
      answer: 3,
      trap: 1,
      point: "주기율표의 주기성",
      core: "같은 주기에서는 전자 껍질 수가 같고 핵 전하가 커져 반지름이 대체로 줄어드는지를 묻는 문항이에요.",
      steps: ["주기와 족을 표시한다", "껍질 수가 같은지 확인한다", "껍질 수가 같다는 선지를 고른다"],
      checks: ["주기와 족을 표시했는지 확인한다", "반지름이 커진다고 단정하지 않았는지 확인한다", "정답이 껍질 수와 같은지 확인한다"]
    }),
    "통합과학1·시스템과 상호작용": noteItem({
      stem: "다음 중력 자료에 대한 설명으로 가장 적절한 것은?",
      choices: ["거리만 가까워도 힘은 항상 줄어든다.", "두 물체의 질량 곱에 비례하고 거리 제곱에 반비례한다.", "중력은 접촉한 물체 사이에만 작용한다.", "지구에서는 질량과 무관하게 같은 힘이 작용한다.", "중력 상수는 물체마다 다르다."],
      answer: 2,
      trap: 1,
      point: "중력의 상호 작용",
      core: "만유인력이 질량 곱에 비례하고 거리 제곱에 반비례하는지를 묻는 시스템 문항이에요.",
      steps: ["힘의 식에서 분자와 분모를 표시한다", "질량과 거리의 효과를 각각 적는다", "비례와 반비례가 맞는 선지를 고른다"],
      checks: ["식을 표시했는지 확인한다", "거리 효과를 반대로 보지 않았는지 확인한다", "정답이 제곱 반비례와 같은지 확인한다"]
    }),
    "통합과학2·변화와 다양성": noteItem({
      stem: "자연선택에 대한 설명으로 가장 적절한 것은?",
      choices: ["개체는 필요한 형질을 즉시 만들어 낸다.", "환경에 유리한 형질을 가진 개체가 더 많이 남는다.", "모든 변이는 생존에 같은 영향을 준다.", "유전은 자연선택과 무관하다.", "환경이 바뀌어도 유리한 형질은 항상 같다."],
      answer: 2,
      trap: 1,
      point: "자연선택",
      core: "환경에 유리한 변이를 가진 개체가 더 많이 살아남아 다음 세대로 이어지는지를 묻는 문항이에요.",
      steps: ["변이와 환경의 관계를 표시한다", "개체가 형질을 의도적으로 만든다는 선지를 지운다", "생존과 번식의 차이를 말한 선지를 고른다"],
      checks: ["변이와 환경을 표시했는지 확인한다", "용불용설과 섞지 않았는지 확인한다", "정답이 유리한 형질의 생존과 같은지 확인한다"]
    }),
    "통합과학2·환경과 에너지": noteItem({
      stem: "발전 과정에서 에너지 전환에 대한 설명으로 가장 적절한 것은?",
      choices: ["전기 에너지는 다른 에너지로 바뀌지 않는다.", "에너지는 형태가 바뀌며 일부가 열로 흩어진다.", "전환 과정에서 에너지 총량은 항상 늘어난다.", "열에너지는 모두 전기로 되돌릴 수 있다.", "발전은 에너지 전환 없이 이루어진다."],
      answer: 2,
      trap: 3,
      point: "에너지 전환",
      core: "에너지가 형태를 바꾸며 일부가 열로 흩어지는지를 묻는 환경과 에너지 문항이에요.",
      steps: ["처음 에너지와 나중 에너지를 적는다", "흩어진 열을 표시한다", "전환과 손실이 있는 선지를 고른다"],
      checks: ["처음과 나중을 적었는지 확인한다", "총량이 늘어난다고 보지 않았는지 확인한다", "정답이 열로 흩어짐을 말했는지 확인한다"]
    }),
    "통합과학2·과학과 미래사회": noteItem({
      stem: "감염병 예측 모형에 대한 설명으로 가장 적절한 것은?",
      choices: ["모형은 자료 없이도 확정된 미래를 알려 준다.", "가정과 자료를 밝혀 예측의 한계를 함께 보아야 한다.", "한 번의 예측은 조건을 바꿔도 결과가 같다.", "모형은 정책 판단에 쓰일 수 없다.", "불확실한 변수는 제외해도 결과가 같다."],
      answer: 2,
      trap: 1,
      point: "과학 모형의 한계",
      core: "감염병 예측이 가정과 자료에 기대므로 한계를 함께 보아야 하는지를 묻는 문항이에요.",
      steps: ["모형의 가정과 입력 자료를 표시한다", "확정된 미래라고 한 선지를 지운다", "가정과 한계를 함께 말한 선지를 고른다"],
      checks: ["가정과 자료를 표시했는지 확인한다", "예측을 확정 사실로 보지 않았는지 확인한다", "정답이 한계를 포함하는지 확인한다"]
    })
  };

  function wrongNotePack(area) {
    return (
      wrongNoteBank[area] ||
      noteItem({
        stem: "다음 자료에 대한 설명으로 가장 적절한 것은?",
        choices: ["자료의 핵심과 반대된다.", "자료의 일부만 맞아 전체가 틀리다.", "자료의 핵심 조건과 일치한다.", "자료와 다른 대상을 말한다.", "자료의 조건을 빠뜨렸다."],
        answer: 3,
        trap: 1,
        point: "자료의 핵심 조건",
        core: "자료의 핵심 조건과 선지가 같은 방향인지 확인하는 문항이에요.",
        steps: ["자료의 핵심 조건을 표시한다", "조건과 다른 선지를 지운다", "조건과 일치하는 선지를 고른다"],
        checks: ["핵심 조건을 표시했는지 확인한다", "다른 선지를 지웠는지 확인한다", "정답이 조건과 같은지 확인한다"]
      })
    );
  }

  function getWrongNoteItems(month, subject) {
    const questions = getSubjectQuestions(month, subject);
    const lookup = areaLookup(month, subject);

    return questions
      .map((question, index) => {
        if (question.correct) return null;
        const area = lookup.get(question.area);
        const pack = wrongNotePack(question.area);
        const useShort = Boolean(question.shortAnswer && pack.short);
        const answer = useShort ? pack.short.answer : pack.answer;
        const marked = useShort ? pack.short.marked : pack.trap;
        const choices = pack.choices;
        const checks = pack.checks;
        const saved = getWrongNoteState(month, subject, question.no);
        const defaultStatus = noteStatuses[index % noteStatuses.length];
        const status = saved?.status || defaultStatus;
        const defaultChecks =
          status === "복습 완료"
            ? checks.map(() => true)
            : status === "복습 중"
              ? checks.map((_, checkIndex) => checkIndex === 0)
              : checks.map(() => false);
        return {
          no: question.no,
          subject,
          exam: `${month}월 ${mockMeta[month] || ""}`.trim(),
          area: question.area,
          behavior: question.action,
          marked,
          answer,
          shortAnswer: Boolean(question.shortAnswer),
          markedLabel: useShort ? String(marked) : choiceLine(marked, choices),
          answerLabel: useShort ? String(answer) : choiceLine(answer, choices),
          points: question.points,
          mine: area?.mine ?? 0,
          cause: saved?.cause || noteCauses[index % noteCauses.length],
          status,
          checks: Array.isArray(saved?.checks) ? saved.checks : defaultChecks,
          stem: useShort ? pack.short.stem : pack.stem,
          core: pack.core,
          steps: pack.steps,
          checksText: checks
        };
      })
      .filter(Boolean);
  }

  function wrongNoteMemo(item) {
    const pack = wrongNotePack(item.area);
    if (item.shortAnswer && pack.short) {
      return pack.short.memos[item.cause] || pack.short.memos["개념 부족"];
    }
    return pack.memos[item.cause] || pack.memos["개념 부족"];
  }

  function noteStatusClass(status) {
    if (status === "복습 중") return "is-fit";
    if (status === "복습 완료") return "is-safe";
    return "is-reach";
  }

  function renderWrongNote(month, subject, selectedNo) {
    const items = getWrongNoteItems(month, subject);
    if (!items.length) {
      return `<div class="content-empty"><p>틀린 문항이 없어요.</p></div>`;
    }

    const current = items.find((item) => item.no === Number(selectedNo)) || items[0];
    const memo = wrongNoteMemo(current);

    return `
      <div class="score-overview wrong-note-overview">
        <section class="percentile-block">
          <div class="diag-result-head">
            <h2 class="diag-section-title">오답 문제</h2>
          </div>
          <div class="wrong-note-list">
            <ol class="strategy-priority-list">
              ${items
                .map(
                  (item) => `
                <li class="${item.no === current.no ? "is-active" : ""}" data-wrong-note-no="${item.no}">
                  <em>${item.no}</em>
                  <b>${areaLabel(subject, item.area)}</b>
                  <p>정답률 ${item.mine}% · ${formatPoint(item.points)}점${item.shortAnswer ? " · 단답형" : ""}</p>
                  <span class="adm-tier ${noteStatusClass(item.status)}" data-wrong-list-status="${item.no}">${item.status}</span>
                </li>`
                )
                .join("")}
            </ol>
          </div>
        </section>
        <section class="trend-mini-block">
          <div class="diag-result-head">
            <h2 class="diag-section-title">오답 복기</h2>
            <select class="adm-select adm-select--inline" data-wrong-status aria-label="복습 상태">
              ${noteStatuses
                .map(
                  (status) =>
                    `<option value="${status}"${status === current.status ? " selected" : ""}>${status}</option>`
                )
                .join("")}
            </select>
          </div>
          <div class="wrong-note-box">
            <div class="wrong-note-kicker">
              <strong>${current.subject} ${current.no}번${current.shortAnswer ? " · 단답형" : ""}</strong>
            </div>
            <div class="exam-summary-grid wrong-note-meta${behaviorLabels(subject).length ? "" : " is-content-only"}">
              <article class="exam-summary-card"><span>정답률</span><strong class="is-text">${current.mine}%</strong></article>
              <article class="exam-summary-card"><span>배점</span><strong class="is-text">${formatPoint(current.points)}점</strong></article>
              <article class="exam-summary-card"><span>내용 영역</span><strong class="is-text">${areaLabel(subject, current.area)}</strong></article>
              ${
                behaviorLabels(subject).length
                  ? `<article class="exam-summary-card"><span>행동 영역</span><strong class="is-text">${current.behavior}</strong></article>`
                  : ""
              }
              <article class="exam-summary-card"><span>오답 원인</span><strong class="is-text">${current.cause}</strong></article>
            </div>
            <div class="wrong-note-block">
              <h3>문제 내용</h3>
              <div class="wrong-note-stem">
                <p class="wrong-note-q">${current.stem}</p>
                <p class="wrong-note-mine">내 답 : ${current.markedLabel}</p>
                <p class="wrong-note-key">정답 : ${current.answerLabel}</p>
              </div>
            </div>
            <div class="wrong-note-block">
              <h3>출제 핵심</h3>
              <p>${current.core}</p>
            </div>
            <div class="wrong-note-block">
              <h3>풀이 순서</h3>
              <ol class="strategy-priority-list wrong-note-steps">
                ${current.steps
                  .map(
                    (step, index) => `
                  <li>
                    <em>${index + 1}</em>
                    <b>${step}</b>
                  </li>`
                  )
                  .join("")}
              </ol>
            </div>
            <div class="wrong-note-block">
              <h3>풀이 체크포인트</h3>
              <ul class="wrong-note-checks">
                ${current.checksText
                  .map(
                    (check, index) => `
                  <li>
                    <label>
                      <input type="checkbox" data-wrong-check="${index}"${current.checks[index] ? " checked" : ""}>
                      <i></i>
                      <span>${check}</span>
                    </label>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="wrong-note-block">
              <h3>오답 원인</h3>
              <div class="wrong-note-causes">
                ${noteCauses
                  .map(
                    (cause) => `
                  <button type="button" class="content-tab${cause === current.cause ? " active" : ""}" data-wrong-cause="${cause}">${cause}</button>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="wrong-note-block">
              <h3>복기 메모</h3>
              <textarea class="wrong-note-memo" rows="4">${memo}</textarea>
            </div>
            <div class="adm-toolbar">
              <button type="button" class="btn-adm-primary">저장하기</button>
            </div>
          </div>
        </section>
      </div>`;
  }

  function bumpCount(map, key, isWrong) {
    const cur = map.get(key) || { name: key, wrong: 0, total: 0 };
    cur.total += 1;
    if (isWrong) cur.wrong += 1;
    map.set(key, cur);
  }

  function weakestGroup(map) {
    return [...map.values()]
      .map((item) => ({
        ...item,
        rate: item.total ? Math.round((item.wrong / item.total) * 100) : 0
      }))
      .sort((a, b) => b.rate - a.rate || b.wrong - a.wrong || a.name.localeCompare(b.name, "ko"))[0];
  }

  function renderCumulativeWrong(subject) {
    const months = Object.keys(mockMeta).filter((month) => isTakenExam(month));
    const byArea = new Map();
    const byAction = new Map();
    let total = 0;
    let wrong = 0;

    months.forEach((month) => {
      getSubjectQuestions(month, subject).forEach((question) => {
        total += 1;
        if (!question.correct) wrong += 1;
        bumpCount(byArea, areaLabel(subject, question.area), !question.correct);
        bumpCount(byAction, question.action, !question.correct);
      });
    });

    const rate = total ? Math.round((wrong / total) * 100) : 0;
    const hasBehavior = behaviorLabels(subject).length > 0;
    const weakArea = weakestGroup(byArea);
    const weakAction = hasBehavior ? weakestGroup(byAction) : null;
    const areaGroups = groupCumulativeWrongs(subject, (question) => areaLabel(subject, question.area));
    const actionGroups = hasBehavior ? groupCumulativeWrongs(subject, (question) => question.action) : [];

    return `
      <section class="cumulative-wrong-block">
        <div class="diag-result-head">
          <h2 class="diag-section-title">오답 개요</h2>
        </div>
        <div class="exam-summary-grid cumulative-wrong-kpis">
          <article class="exam-summary-card"><span>분석 시험</span><strong>${months.length}<small>회차</small></strong></article>
          <article class="exam-summary-card"><span>분석 문항</span><strong>${total}<small>문항</small></strong></article>
          <article class="exam-summary-card"><span>누적 오답</span><strong>${wrong}<small>문항</small></strong></article>
          <article class="exam-summary-card"><span>누적 오답률</span><strong>${rate}<small>%</small></strong></article>
        </div>
        <section class="cumulative-wrong-share">
          <div class="diag-result-head">
            <h2 class="diag-section-title">정답 및 오답 비중</h2>
            <div class="diag-chart-legend exam-share-legend" aria-label="정답 오답 범례">
              <span class="diag-legend-item"><i class="diag-dot is-correct"></i>정답</span>
              <span class="diag-legend-item"><i class="diag-dot is-wrong"></i>오답</span>
            </div>
          </div>
          ${renderExamShareChart(subject)}
        </section>
        <div class="score-overview wrong-area-overview cumulative-wrong-lists${hasBehavior ? "" : " is-content-only"}">
          <section class="percentile-block wrong-area-block">
            <div class="diag-result-head">
              <h2 class="diag-section-title">내용 영역 오답</h2>
            </div>
            <article class="summary-card">
              <span>우선 보완</span>
              <strong>${weakArea?.name || "-"}</strong>
              <p>오답률 ${weakArea ? weakArea.rate : 0}%로 가장 높아요.</p>
            </article>
            ${renderWrongGroupList(areaGroups)}
          </section>
          ${
            hasBehavior
              ? `<section class="trend-mini-block wrong-area-block">
            <div class="diag-result-head">
              <h2 class="diag-section-title">행동 영역 오답</h2>
            </div>
            <article class="summary-card">
              <span>우선 보완</span>
              <strong>${weakAction?.name || "-"}</strong>
              <p>오답률 ${weakAction ? weakAction.rate : 0}%로 가장 높아요.</p>
            </article>
            ${renderWrongGroupList(actionGroups)}
          </section>`
              : ""
          }
        </div>
      </section>`;
  }

  function getExamShareItems(subject) {
    return Object.keys(mockMeta).map((month) => {
      const questions = isTakenExam(month) ? getSubjectQuestions(month, subject) : [];
      const asked = questions.length;
      const correct = questions.filter((question) => question.correct).length;
      const wrong = Math.max(0, asked - correct);
      const correctRate = asked ? Math.round((correct / asked) * 100) : 0;
      const wrongRate = asked ? Math.max(0, 100 - correctRate) : 0;
      return {
        month,
        name: `${month}월 ${mockMeta[month]}`,
        asked,
        correct,
        wrong,
        correctRate,
        wrongRate
      };
    });
  }

  function examShareSeg(cls, rate) {
    if (!rate) return "";
    return `<span class="${cls}" style="height:${rate}%">${rate}%</span>`;
  }

  function renderExamShareChart(subject) {
    const items = getExamShareItems(subject);
    if (!items.length) {
      return `
      <div class="exam-share-box">
        <p class="exam-review-empty">응시 시험이 없어요.</p>
      </div>`;
    }

    return `
      <div class="exam-share-box">
        <div class="exam-share-chart" role="img" aria-label="정답 및 오답 비중">
          ${items
            .map(
              (item) => `
            <div class="exam-share-col" title="출제 ${item.asked} · 정답 ${item.correct} · 오답 ${item.wrong}">
              <div class="exam-share-bar">
                ${examShareSeg("is-wrong", item.wrongRate)}
                ${examShareSeg("is-correct", item.correctRate)}
              </div>
              <em>${item.name}</em>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  }

  function groupCumulativeWrongs(subject, keyOf) {
    const groups = new Map();
    Object.keys(mockMeta).forEach((month) => {
      if (!isTakenExam(month)) return;
      getSubjectQuestions(month, subject).forEach((question, index) => {
        const name = keyOf(question, index);
        const cur = groups.get(name) || { name, nos: [], asked: 0, wrong: 0 };
        cur.asked += 1;
        if (!question.correct) {
          cur.wrong += 1;
          cur.nos.push(`${month}월 ${question.no}번`);
        }
        groups.set(name, cur);
      });
    });
    const rateOf = (group) => (group.asked ? Math.round((group.wrong / group.asked) * 100) : 0);
    return [...groups.values()]
      .filter((group) => group.wrong > 0)
      .sort((a, b) => rateOf(b) - rateOf(a) || b.wrong - a.wrong || a.name.localeCompare(b.name, "ko"))
      .slice(0, 5);
  }

  function schoolOverallGrade() {
    return Math.round(schoolWeightedRank(schoolCourseRows()) * 100) / 100;
  }

  window.MegaReportData = {
    mockMeta,
    mockSamples,
    schoolOverallGrade,
    mockExamDates,
    upcomingExams,
    reportAsOf,
    latestTakenMonth,
    noteStatuses,
    noteStatusClass,
    renderSubjectAreas,
    renderExamReview,
    renderExamCauses,
    renderTypeAnalysis,
    renderWrongNote,
    renderCumulativeWrong,
    renderTrendExamTable,
    renderTrendSubject,
    renderSchoolAnalysis,
    renderStrategySummary,
    renderStrategyTasks,
    renderSubjectReport,
    getWrongNoteState,
    setWrongNoteStatus,
    setWrongNoteChecks,
    setWrongNoteState
  };

  function initMypageSamples() {
    document.querySelectorAll("[data-school-render]").forEach((el) => {
      el.innerHTML = renderSchoolGrade(el.dataset.schoolRender);
    });

    document.querySelectorAll("[data-school-analysis]").forEach((el) => {
      el.innerHTML = renderSchoolAnalysis();
    });

    document.querySelectorAll("[data-mock-render]").forEach((el) => {
      el.innerHTML = renderMockMonth(el.dataset.mockRender);
    });

    document.querySelectorAll("[data-regular-render]").forEach((el) => {
      el.innerHTML = renderMockMonth(el.dataset.regularRender, { withReportSuffix: true });
    });

    document.querySelectorAll("[data-taken-exams]").forEach((el) => {
      el.innerHTML = renderTakenExams({
        withScore: false
      });
    });

    document.querySelectorAll("[data-trend-mini]").forEach((el) => {
      el.innerHTML = renderTrendMini();
    });

    document.querySelectorAll("[data-trend-exam-table]").forEach((el) => {
      el.innerHTML = renderTrendExamTable();
    });

    document.querySelectorAll("[data-trend-subject-chart]").forEach((el) => {
      el.innerHTML = renderTrendSubject("국수탐");
    });

    const openingMonth = latestTakenMonth();

    document.querySelectorAll("[data-exam-review]").forEach((el) => {
      el.innerHTML = renderExamReview(openingMonth, "국어");
    });

    document.querySelectorAll("[data-exam-causes]").forEach((el) => {
      el.innerHTML = renderExamCauses(openingMonth, "국어");
    });

    document.querySelectorAll("[data-type-analysis]").forEach((el) => {
      el.innerHTML = renderTypeAnalysis(openingMonth, "국어");
    });

    document.querySelectorAll("[data-wrong-note]").forEach((el) => {
      el.innerHTML = renderWrongNote(openingMonth, "국어");
    });

    document.querySelectorAll("[data-score-report]").forEach((el) => {
      el.innerHTML = renderSubjectReport(openingMonth, "국어");
    });

    document.querySelectorAll("[data-strategy-summary]").forEach((el) => {
      el.innerHTML = renderStrategySummary("국어", openingMonth);
    });

    document.querySelectorAll("[data-strategy-tasks]").forEach((el) => {
      el.innerHTML = renderStrategyTasks("국어", openingMonth);
    });
  }

  initMypageSamples();
})();
