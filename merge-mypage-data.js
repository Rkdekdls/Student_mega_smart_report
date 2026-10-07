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
      ["수학Ⅰ·지수함수와 로그함수", 3, 2, 84, 94],
      ["수학Ⅰ·삼각함수", 3, 2, 72, 86],
      ["수학Ⅰ·수열", 3, 2, 80, 92],
      ["수학Ⅱ·함수의 극한과 연속", 3, 2, 78, 90],
      ["수학Ⅱ·미분", 3, 2, 70, 84],
      ["수학Ⅱ·적분", 3, 2, 68, 83],
      ["확률과 통계·경우의 수", 3, 2, 82, 93],
      ["미적분·수열의 극한", 3, 2, 79, 91],
      ["미적분·미분법", 3, 2, 66, 82],
      ["기하·이차곡선", 3, 2, 75, 88]
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
      ["전근대사·선사와 고대 국가", 4, 3, 84, 95],
      ["전근대사·고려의 정치와 사회", 4, 3, 82, 93],
      ["전근대사·조선 전기의 통치", 3, 2, 80, 92],
      ["전근대사·조선 후기의 변화", 3, 2, 76, 89],
      ["근현대사·개항과 근대 개혁", 3, 2, 78, 90],
      ["근현대사·일제 강점과 독립운동", 3, 2, 81, 92]
    ],
    통합사회: [
      ["통합사회1·통합적 관점", 3, 2, 81, 93],
      ["통합사회1·인간, 사회, 환경과 행복", 3, 2, 74, 88],
      ["통합사회1·자연환경과 인간", 3, 2, 70, 85],
      ["통합사회1·문화와 다양성", 3, 2, 72, 86],
      ["통합사회1·생활공간과 사회", 3, 2, 78, 90],
      ["통합사회2·인권보장과 헌법", 4, 3, 80, 92],
      ["통합사회2·사회정의와 불평등", 3, 2, 71, 85],
      ["통합사회2·세계화와 평화", 3, 2, 73, 87]
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

  function andParticle(word) {
    const last = String(word || "").charCodeAt(String(word || "").length - 1);
    if (last < 0xac00 || last > 0xd7a3) return "와";
    return (last - 0xac00) % 28 === 0 ? "와" : "과";
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
    const row = getSubjectRow(exam, name);
    const raw = Number(row?.[2]);
    const currentGrade = Number(row?.[5]);
    if (!Number.isFinite(raw) || !Number.isFinite(currentGrade)) {
      return `<p class="score-rise-empty">이번 시험 성적이 없어 시뮬레이션을 만들 수 없어요.</p>`;
    }

    const targets = getWrongNoteItems(exam, name)
      .filter((item) => item.mine > 50)
      .sort((a, b) => b.mine - a.mine || pointUnits(b.points) - pointUnits(a.points) || a.no - b.no)
      .slice(0, 5)
      .sort((a, b) => a.no - b.no);
    const gainUnits = targets.reduce((sum, item) => sum + pointUnits(item.points), 0);
    const gain = gainUnits / 2;
    const projected = Math.min(subjectMaxScore(name), raw + gain);
    const lead = `<i class="score-rise-icon" aria-hidden="true">📌</i> 친구들이 많이 맞힌 ${targets.length}문항을 보완하면 ${formatExamScore(gain)}점을 더 올릴 수 있어요!`;

    const chips = targets
      .map(
        (item) => `
          <li>
            <button type="button" data-score-target="${item.no}" aria-label="${item.no}번 오답 분석 보기">
              <b>${item.no}번</b>
              <span>${areaLabel(name, item.area)}</span>
              <i class="score-rise-split" aria-hidden="true"></i>
              <span>정답률 ${item.mine}% · ${formatPoint(item.points)}점</span>
            </button>
          </li>`
      )
      .join("");

    return `
      <div class="score-rise">
        <p class="score-rise-lead">${lead}</p>
        <div class="score-rise-flow">
          <article class="score-rise-card">
            <span>현재 점수</span>
            <p><b>${formatExamScore(raw)}</b><span>점</span></p>
          </article>
          <i class="score-rise-arrow" aria-hidden="true"></i>
          <article class="score-rise-card is-gain">
            <span>상승 가능</span>
            <p><b>+${formatExamScore(gain)}</b><span>점 · ${targets.length}문항</span></p>
          </article>
          <i class="score-rise-arrow" aria-hidden="true"></i>
          <article class="score-rise-card is-projected">
            <span>예상 점수</span>
            <p><b>${formatExamScore(projected)}</b><span>점</span></p>
          </article>
        </div>
        ${
          targets.length
            ? `<div class="score-rise-targets">
                <b>대상 문항</b>
                <ul>${chips}</ul>
              </div>`
            : ""
        }
        <p class="score-rise-note">※ 시험에 응시한 MEXX 재원생 기준입니다.</p>
      </div>`;
  }

  const strategyGuideMin = 75;
  const strategyGuideMax = 85;
  const strategyJoins = [
    "도식화하고",
    "구분해 두고",
    "연결한 다음",
    "표로 정리하고",
    "짝으로 묶어 두고",
    "한 줄로 적은 뒤",
    "순서대로 세운 다음",
    "범위만 좁힌 뒤",
    "차이만 남긴 뒤",
    "식으로 옮긴 뒤",
    "옆에 풀어 두고",
    "먼저 고정하고"
  ];
  const strategyCloses = [
    "기준으로 삼아 보세요",
    "앞에 적어 두세요",
    "한 줄로 정리해 보세요",
    "관계로 이어 보세요",
    "먼저 고정해 보세요",
    "흐름으로 읽어 보세요",
    "사례와 맞춰 보세요",
    "정의와 비교해 보세요",
    "조건으로 좁혀 보세요",
    "차이로 갈라 보세요",
    "순서대로 적어 보세요",
    "핵심으로 남겨 보세요"
  ];
  const strategyPurposes = [
    "핵심이 남도록",
    "관계가 이어지게",
    "조건이 빠지지 않게",
    "공통점과 차이가 보이게",
    "문제 조건이 빠지지 않게",
    "앞뒤 관계가 한눈에 보이게",
    "틀린 곳과 맞는 곳이 갈리게",
    "답을 적기 전에 흐름이 이어지도록",
    "이번 문항의 관계를 한 줄로 남긴 뒤",
    "원인과 결과의 흐름을 고정하고 방향을 맞춰",
    "답을 적기 전에 원인과 결과가 서로 이어지게 두고",
    "풀이가 끊기지 않도록 조건과 관계를 앞에 모아 두고",
    "비교하기 전에 핵심만 앞에 두고 나머지 조건은 옆에 적고",
    "틀린 근거와 맞는 근거가 섞이지 않게 둘을 먼저 갈라 두고",
    "비교하기 전에 핵심만 앞에 두고 나머지 조건은 옆에 적어 두고",
    "정의와 사례가 어긋나지 않게 둘을 짝으로 두고 공통 기준을 앞에 남겨",
    "원인에서 결과까지 중간 조건이 빠지지 않게 흐름을 한 줄로 이어 정리해 두고",
    "원인에서 결과까지 중간 조건이 빠지지 않게 전체 흐름을 한 줄로 이어 정리해 두고",
    "원인에서 결과까지 중간 조건이 빠지지 않게 전체 흐름을 한 줄로 빠짐없이 이어 정리해 두고"
  ];

  function guideChars(text) {
    return [...String(text || "")];
  }

  function guideLength(text) {
    return guideChars(text).length;
  }

  function focusPhrase(step, point) {
    let text = String(step || "").trim().replace(/[.。]$/, "");
    text = text.replace(/\s+[가-힣]{1,12}다$/, "");
    text = text.replace(/\s+하나씩$/, "");
    text = text.replace(/(?:\s+(?:나누어|먼저|다르게|서로|한 줄로))+$/, "");
    text = text.replace(/(?:에서|에|을|를|은|는|이|가|과|와)$/, "");
    return text.replace(/\s+/g, " ").trim() || String(point || "").trim();
  }

  function joinClause(phrase, ending) {
    const body = String(phrase || "").trim();
    const tail = String(ending || "").replace(/[.]$/, "");
    if (!body) return tail;
    if (/(?:으로|로|로서|로써|에서|부터|까지|처럼|대로|같이|다)$/.test(body)) return `${body} ${tail}`;
    if (/(?:은|는)$/.test(body)) return `${body} 것을 ${tail}`;
    const last = body.charCodeAt(body.length - 1);
    const particle = last < 0xac00 || last > 0xd7a3 ? "을" : objectParticle(body);
    return `${body}${particle} ${tail}`;
  }

  function corePhrase(core, fallback) {
    let text = String(core || "").trim().replace(/[.。]$/, "");
    text = text.replace(/\s*(?:문항이에요|묻어요)$/, "");
    text = text.replace(/\s*묻는(?:\s+\S+){0,3}$/, "");
    text = text.replace(/인지를$/, "인지").replace(/는지를$/, "는지").replace(/은지를$/, "은지");
    text = text.replace(/^(?:인문|사회|과학|기술|문학)\s*지문(?:이|에서|은)\s*/, "");
    text = text.replace(/(?:을|를)$/, "");
    return text.replace(/\s+/g, " ").trim() || fallback;
  }

  function dropFirstWord(text) {
    const next = String(text || "").replace(/^\S+\s+/, "").trim();
    return next && next !== text ? next : "";
  }

  function endingKey(line) {
    const parts = String(line || "").replace(/[.]$/, "").split(/\s+/).filter(Boolean);
    if (!parts.length) return "";
    const last = parts[parts.length - 1];
    if (parts.length >= 2 && /(?:세요|보세요|두세요|마세요)$/.test(last)) {
      return `${parts[parts.length - 2]} ${last}`;
    }
    return last;
  }

  function taskSteps(item) {
    return item.shortAnswer ? (item.steps || []).filter((step) => !/선지/.test(step)) : item.steps || [];
  }

  function assembleGuide(focus, next, join, close, purpose) {
    const bridge = purpose ? `${purpose} ` : "";
    return `${joinClause(focus, join)}, ${bridge}${joinClause(next, close)}.`.replace(/\s+/g, " ").trim();
  }

  function phraseOptions(text) {
    const options = [];
    let current = String(text || "").trim();
    while (current) {
      options.push(current);
      current = dropFirstWord(current);
    }
    return options.length ? options : [""];
  }

  function fitStrategyGuide(focus, next, join, close, salt) {
    const found = [];
    phraseOptions(focus).forEach((left) => {
      phraseOptions(next).forEach((right) => {
        if (!left || !right) return;
        ["", ...strategyPurposes].forEach((purpose) => {
          const text = assembleGuide(left, right, join, close, purpose);
          const length = guideLength(text);
          if (length < strategyGuideMin || length > strategyGuideMax) return;
          found.push({
            text,
            dropped: guideLength(focus) - guideLength(left) + guideLength(next) - guideLength(right),
            length
          });
        });
      });
    });
    if (!found.length) return assembleGuide(focus, next, join, close, "");
    found.sort((a, b) => a.dropped - b.dropped || Math.abs(a.length - 80) - Math.abs(b.length - 80));
    const pool = found.filter((item) => item.dropped === found[0].dropped);
    return pool[Math.abs(salt) % pool.length].text;
  }

  function buildStrategyGuides(items) {
    const used = new Set();
    return items.map((item, index) => {
      const steps = taskSteps(item);
      const point = item.point || item.area;
      const focus = focusPhrase(steps[0], point);
      const secondStep = steps[1] || "";
      const next = /선지/.test(secondStep) || !secondStep
        ? corePhrase(item.core, point)
        : focusPhrase(secondStep, point);
      let joinAt = index % strategyJoins.length;
      let closeAt = (index + 3) % strategyCloses.length;
      let text = "";
      let guard = 0;
      while (guard < strategyCloses.length) {
        const close = strategyCloses[closeAt];
        const join = strategyJoins[joinAt];
        text = fitStrategyGuide(focus, next === focus ? item.area : next, join, close, index + guard);
        const key = endingKey(text);
        if (!used.has(key) && !/(?:표시|지우|확인|고르)세요/.test(key)) break;
        closeAt = (closeAt + 1) % strategyCloses.length;
        joinAt = (joinAt + 1) % strategyJoins.length;
        guard += 1;
      }
      used.add(endingKey(text));
      return text;
    });
  }

  function getStrategyTaskItems(subject, month) {
    const exam = month || latestTakenMonth();
    const name = subject || "국어";
    return getWrongNoteItems(exam, name)
      .filter((item) => item.mine > 50)
      .slice()
      .sort((a, b) => b.mine - a.mine || b.points - a.points || a.no - b.no)
      .slice(0, 3);
  }

  function renderStrategyTasks(subject, month) {
    const items = getStrategyTaskItems(subject, month);
    if (!items.length) return `<p class="exam-review-empty">이번 시험에서 틀린 문항이 없어요.</p>`;
    const name = subject || "국어";
    const guides = buildStrategyGuides(items);

    return `
      <div class="strategy-task-grid">
        ${items
          .map((item, index) => {
            const tag = item.behavior
              ? `<span class="strategy-task-tag">${item.behavior}</span>`
              : "";
            return `
              <article class="strategy-task-card">
                <div class="strategy-task-head">
                  <em>${String(index + 1).padStart(2, "0")}</em>
                  <strong><span>${item.no}번</span><span class="strategy-task-split" aria-hidden="true"></span><span>${areaLabel(name, item.area)}</span></strong>
                  ${tag}
                  <p>정답률 ${item.mine}% · ${formatPoint(item.points)}점</p>
                </div>
                <div class="strategy-task-guide">
                  <b>보완 전략</b>
                  <p>${guides[index]}</p>
                </div>
              </article>`;
          })
          .join("")}
        <div class="strategy-task-apply">
          <button type="button" class="btn-adm-primary">상담 신청하기</button>
        </div>
      </div>`;
  }

  function getSubjectQuestions(month, subject) {
    return getExamModel(month, subject).questions;
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
      { zone: "선택", major: "확률과 통계", details: ["경우의 수"] },
      { zone: "선택", major: "미적분", details: ["수열의 극한", "미분법"] },
      { zone: "선택", major: "기하", details: ["이차곡선"] }
    ],
    영어: [
      { major: "듣기·말하기", details: ["듣기", "간접말하기"] },
      { major: "읽기·쓰기", details: ["대의파악", "세부정보파악", "어법·어휘", "빈칸추론", "간접쓰기", "장문독해"] }
    ],
    한국사: [
      { major: "전근대사", details: ["선사와 고대 국가", "고려의 정치와 사회", "조선 전기의 통치", "조선 후기의 변화"] },
      { major: "근현대사", details: ["개항과 근대 개혁", "일제 강점과 독립운동"] }
    ],
    통합사회: [
      { major: "통합사회1", details: ["통합적 관점", "인간, 사회, 환경과 행복", "자연환경과 인간", "문화와 다양성", "생활공간과 사회"] },
      { major: "통합사회2", details: ["인권보장과 헌법", "사회정의와 불평등", "세계화와 평화"] }
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
    return { stem, choices, answer, trap, point, core, steps, checks, memos, short };
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
      stem: "다음 글의 요지로 가장 적절한 것은? (잠을 줄이면 기억과 집중이 약해진다는 내용)",
      choices: ["Sleep matters less than extra study time.", "Short sleep can weaken memory and focus.", "Students should avoid all screen use.", "Memory does not depend on rest.", "Focus improves only with more classes."],
      answer: 2,
      trap: 1,
      point: "글의 요지",
      core: "글 전체가 수면 부족이 기억과 집중을 떨어뜨린다는 요지인지를 묻는 대의 파악 문항이에요.",
      steps: ["반복되는 주장 문장을 표시한다", "예시와 주장을 구분한다", "주장을 가장 넓게 말한 선지를 고른다"],
      checks: ["주장 문장을 표시했는지 확인한다", "예를 요지로 고르지 않았는지 확인한다", "정답이 글 전체 주장과 같은지 확인한다"]
    }),
    "읽기·쓰기·세부정보파악": noteItem({
      stem: "다음 행사 안내의 내용과 일치하지 않는 것은? (금요일 신청, 학교 강당, 참가비 없음, 오전 9시)",
      choices: ["신청은 금요일까지이다.", "장소는 학교 강당이다.", "참가비는 없다.", "시작 시각은 오전 9시이다.", "보호자 동반이 필수이다."],
      answer: 5,
      trap: 3,
      point: "세부 정보 불일치",
      core: "안내문에 없는 조건을 고르는 세부 정보 파악 문항이에요. 안내문에는 보호자 동반이 없다.",
      steps: ["시각, 장소, 신청, 비용을 표시한다", "선지를 안내문과 하나씩 대조한다", "안내문에 없는 보호자 동반을 고른다"],
      checks: ["네 가지 정보를 표시했는지 확인한다", "있는 정보를 답으로 고르지 않았는지 확인한다", "정답이 안내문에 없는지 확인한다"]
    }),
    "읽기·쓰기·어법·어휘": noteItem({
      stem: "다음 밑줄 친 부분 중 어법상 틀린 것은? (suggest to go / look forward to seeing)",
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
      stem: "주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은? (지시어가 앞 문단의 사례를 받는 글)",
      choices: ["(A)-(C)-(B)", "(B)-(A)-(C)", "(B)-(C)-(A)", "(C)-(A)-(B)", "(C)-(B)-(A)"],
      answer: 2,
      trap: 1,
      point: "글의 순서",
      core: "지시어와 내용 흐름으로 글의 순서를 정하는 간접 쓰기 문항이에요. 정답 순서는 (B)-(A)-(C)이다.",
      steps: ["각 문단의 첫 지시어를 표시한다", "앞에 올 내용이 없는 문단을 뒤로 보낸다", "연결된 순서 (B)-(A)-(C)를 고른다"],
      checks: ["지시어를 표시했는지 확인한다", "연결이 끊긴 순서를 지웠는지 확인한다", "정답 순서가 지시어와 맞는지 확인한다"]
    }),
    "읽기·쓰기·장문독해": noteItem({
      stem: "장문의 주제로 가장 적절한 것은? (도시 나무가 열과 스트레스를 줄인다는 여러 문단)",
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

  function alt(stem, choices, answer, trap, point, core, action) {
    return noteItem({
      stem,
      choices,
      answer,
      trap,
      point,
      core,
      steps: [action, `${point}${andParticle(point)} 반대인 선지를 지운다`, `${point}${andParticle(point)} 맞는 선지를 고른다`],
      checks: [`${point} 근거를 표시했는지 확인한다`, "반대 선지를 지웠는지 확인한다", "정답 선지가 근거와 같은지 확인한다"]
    });
  }

  function shortAlt(stem, answer, marked, point, core, action) {
    const item = alt(stem, [String(answer), String(marked), "0", "1", "10"], 1, 2, point, core, action);
    item.short = {
      stem,
      answer: String(answer),
      marked: String(marked),
      memos: {
        "개념 부족": `${point} 공식을 헷갈려서 ${marked}이라고 적었다. 정답은 ${answer}이다. 다음엔 공식을 먼저 적고 대입하기.`,
        "해석 오류": `${point}에서 묻는 값을 잘못 읽어 ${marked}이라고 적었다. 정답은 ${answer}이다. 다음엔 구하는 값에 표시하고 계산하기.`,
        "시간 부족": `${point} 계산을 서두르다 ${marked}이라고 적었다. 정답은 ${answer}이다. 다음엔 식을 한 번 더 확인하고 답칸에 쓰기.`
      }
    };
    return item;
  }

  const wrongNoteMore = {
    "독서·인문": [
      alt("윗글은 자유를 구속만의 반대가 아니라 스스로 선택한 책임으로 본다. 윗글의 관점으로 가장 적절한 것은?", ["자유는 어떤 책임도 지지 않는 상태다.", "자유는 타인과 무관한 감정이다.", "자유는 스스로 선택한 일에 대한 책임을 포함한다.", "자유는 법보다 항상 앞선다.", "자유는 선택 이전에 이미 결정되어 있다."], 3, 1, "자유와 책임", "인문 지문이 자유를 무책임이 아니라 선택에 따른 책임으로 보는지 묻는 문항이에요.", "자유의 정의가 나온 문장을 표시한다"),
      alt("윗글은 인식이 경험의 재료를 개념으로 정리할 때 성립한다고 본다. 윗글과 일치하는 것은?", ["경험만 있으면 개념은 필요 없다.", "개념은 경험과 상관없이 완성된다.", "인식은 경험과 개념이 함께할 때 성립한다.", "경험은 인식을 방해한다.", "개념은 감각을 대신하지 못한다."], 3, 2, "경험과 개념", "인문 지문에서 인식이 경험과 개념의 결합으로 성립하는지를 묻는 문항이에요.", "경험과 개념이 함께 나온 문장을 표시한다"),
      alt("윗글은 예술의 가치를 쓸모보다 새로운 감각을 여는 힘에서 찾는다. 윗글의 내용으로 가장 적절한 것은?", ["예술은 실용적 기능이 있을 때만 가치가 있다.", "예술의 가치는 쾌락의 크기와 같다.", "예술은 익숙한 감각을 새롭게 여는 데 가치가 있다.", "예술은 도덕 교훈을 전달해야 완성된다.", "예술 작품은 해석을 허락하지 않는다."], 3, 1, "예술의 가치", "인문 지문이 예술의 가치를 실용이 아니라 새로운 감각에서 찾는지 묻는 문항이에요.", "가치 판단이 드러난 문장을 표시한다"),
      alt("윗글은 언어가 사고를 단순히 옮기는 도구가 아니라 사고의 경계를 만든다고 본다. 윗글과 가까운 것은?", ["언어는 사고와 무관하다.", "사고가 먼저 끝나고 언어는 나중에 붙는다.", "언어는 사고의 내용뿐 아니라 범위에도 영향을 준다.", "모든 언어는 같은 사고 구조를 만든다.", "언어가 바뀌어도 세계 이해는 그대로다."], 3, 2, "언어와 사고", "인문 지문에서 언어가 사고의 경계에 영향을 주는지를 묻는 문항이에요.", "언어와 사고의 관계가 나온 문장을 표시한다")
    ],
    "독서·사회": [
      alt("윗글은 신뢰가 감정의 문제가 아니라 반복된 약속을 지키는 사회적 기반이라고 본다. 윗글과 일치하는 것은?", ["신뢰는 개인 성격으로만 설명된다.", "약속 위반이 늘어도 신뢰는 유지된다.", "신뢰는 약속을 반복해 지키며 쌓이는 사회적 기반이다.", "제도는 신뢰 형성을 막는다.", "신뢰는 계산이 개입하면 사라진다."], 3, 1, "사회적 신뢰", "사회 지문이 신뢰를 약속의 반복으로 쌓이는 기반으로 보는지 묻는 문항이에요.", "신뢰가 쌓이는 조건이 나온 문장을 표시한다"),
      alt("윗글에 따르면 관료제는 업무를 규칙으로 나누어 예측 가능성을 높이지만 경직될 수 있다. 윗글과 가까운 것은?", ["관료제는 담당자의 즉흥 판단을 원칙으로 한다.", "규칙은 예측 가능성을 낮춘다.", "관료제는 예측 가능성을 높이면서도 경직될 수 있다.", "관료제에서는 문서가 필요하지 않다.", "경직은 규칙과 무관하게 생긴다."], 3, 1, "관료제의 특징", "사회 지문에서 관료제의 예측 가능성과 경직을 함께 잡았는지 묻는 문항이에요.", "규칙의 효과와 한계가 나온 문장을 표시한다"),
      alt("윗글은 사회 이동이 개인의 노력만으로 결정되지 않고 제도와 자원의 영향을 받는다고 본다. 윗글과 일치하는 것은?", ["사회 이동은 전적으로 개인 의지의 결과다.", "제도와 자원은 이동 기회와 무관하다.", "사회 이동에는 노력과 함께 제도·자원이 작용한다.", "계층은 세대가 바뀌면 자동으로 사라진다.", "교육은 이동 경로가 될 수 없다."], 3, 1, "사회 이동", "사회 지문이 이동 기회를 개인 노력과 제도·자원의 결합으로 보는지 묻는 문항이에요.", "이동을 가르는 요인이 나온 문장을 표시한다"),
      alt("윗글은 여론이 다수 의견의 합이 아니라 공론장에서 걸러진 판단이라고 본다. 윗글의 내용으로 가장 적절한 것은?", ["목소리가 큰 의견이 곧 여론이다.", "여론은 전문가 없이 만들어지지 않는다.", "여론은 공론장에서 이유가 검토된 판단에 가깝다.", "공론장은 여론 형성을 지연시키기만 한다.", "사적 대화는 공적 판단과 무관하다."], 3, 1, "여론과 공론장", "사회 지문에서 여론을 공론장의 검토를 거친 판단으로 보는지 묻는 문항이에요.", "여론의 정의가 나온 문장을 표시한다")
    ],
    "독서·과학": [
      alt("윗글은 항상성이 상태를 고정하는 것이 아니라 변화를 감지해 되돌리는 과정이라고 설명한다. 윗글과 일치하는 것은?", ["항상성은 외부 변화를 무시한다.", "항상성은 한 번 맞추면 더 조절하지 않는다.", "항상성은 변화를 감지하고 되돌리는 조절이다.", "항상성은 에너지 없이 유지된다.", "감지와 조절은 별개의 현상이다."], 3, 1, "항상성", "과학 지문이 항상성을 고정이 아니라 감지와 되돌림으로 설명하는지 묻는 문항이에요.", "감지와 되돌림이 함께 나온 문장을 표시한다"),
      alt("윗글은 변이가 먼저 생기고, 환경이 그중 일부의 생존을 가른다고 설명한다. 윗글과 일치하는 것은?", ["생물은 필요한 변이를 그때그때 만든다.", "환경은 변이와 무관하다.", "변이가 생긴 뒤 환경이 생존에 유리한 차이를 가른다.", "모든 변이는 같은 비율로 남는다.", "생존 차이는 유전되지 않는다."], 3, 1, "변이와 환경", "과학 지문에서 변이가 환경에 앞서 생기고 환경이 생존을 가르는지 묻는 문항이에요.", "변이와 환경의 순서가 나온 문장을 표시한다"),
      alt("윗글은 빛이 매질이 바뀔 때 속도가 달라져 진행 방향이 꺾인다고 설명한다. 윗글과 일치하는 것은?", ["빛은 어떤 매질에서도 같은 속도로 진행한다.", "굴절은 색이 바뀔 때만 일어난다.", "매질에 따라 속도가 달라지면 빛의 진행 방향이 꺾인다.", "굴절은 빛이 흡수될 때 생긴다.", "진행 방향은 속도와 무관하다."], 3, 1, "빛의 굴절", "과학 지문이 굴절의 원인을 매질에 따른 속도 변화로 보는지 묻는 문항이에요.", "속도와 방향이 연결된 문장을 표시한다"),
      alt("윗글은 세포 호흡이 포도당의 에너지를 한 번에 쓰지 않고 단계적으로 나눈다고 설명한다. 윗글과 일치하는 것은?", ["에너지는 열로만 한 번에 방출된다.", "산소는 세포 호흡과 무관하다.", "세포 호흡은 에너지를 여러 단계로 나누어 쓴다.", "포도당은 호흡에서 분해되지 않는다.", "단계가 늘면 사용 가능한 에너지가 사라진다."], 3, 1, "세포 호흡", "과학 지문에서 에너지가 한 번에 방출되지 않고 단계적으로 쓰이는지를 묻는 문항이에요.", "에너지가 나뉘는 과정이 나온 문장을 표시한다")
    ],
    "독서·기술": [
      alt("윗글은 압축이 정보를 버리기만 하는 것이 아니라 반복을 줄여 저장 공간을 아끼는 방식이라고 설명한다. 윗글과 일치하는 것은?", ["압축하면 원래 정보는 복원할 수 없다.", "반복이 많을수록 압축 효과는 없다.", "압축은 반복을 줄여 같은 정보를 더 작게 저장한다.", "압축은 전송 속도만 바꾸고 크기는 그대로다.", "저장 공간은 압축과 무관하다."], 3, 1, "정보 압축", "기술 지문이 압축을 반복 축소로 설명하는지 묻는 문항이에요.", "반복과 저장 공간이 연결된 문장을 표시한다"),
      alt("윗글은 피드백 제어가 결과를 측정해 다음 입력을 고치는 과정이라고 설명한다. 윗글과 일치하는 것은?", ["제어는 출력과 상관없이 입력을 고정한다.", "측정값이 달라져도 동작은 같다.", "피드백은 측정 결과를 보고 다음 입력을 조정한다.", "피드백은 한 방향으로만 흐른다.", "목표값은 제어에 쓰이지 않는다."], 3, 1, "피드백 제어", "기술 지문에서 측정 결과가 다음 입력을 고치는지를 묻는 문항이에요.", "측정과 입력 조정이 나온 문장을 표시한다"),
      alt("윗글은 배터리 용량이 같아도 출력 전압과 내부 저항에 따라 실제 사용 시간이 달라진다고 설명한다. 윗글과 일치하는 것은?", ["용량이 같으면 사용 시간도 항상 같다.", "내부 저항은 사용 시간과 무관하다.", "같은 용량이라도 전압과 내부 저항에 따라 사용 시간이 달라진다.", "전압이 높으면 용량 표시는 의미가 없다.", "사용 시간은 기기와 상관없이 결정된다."], 3, 1, "배터리 사용 시간", "기술 지문이 용량 외에 전압과 내부 저항을 함께 보는지 묻는 문항이에요.", "사용 시간을 가르는 조건을 표시한다")
    ],
    "문학·현대시": [
      alt("다음 시에서 밝음과 어두움의 대비가 하는 기능으로 가장 적절한 것은?", ["두 이미지는 서로 무관하게 나열된다.", "밝음은 현실 도피, 어두움은 풍자를 담당한다.", "대비가 상실 뒤에도 남은 기대를 또렷하게 한다.", "대비는 운율을 맞추기 위한 장식이다.", "화자는 두 이미지를 같은 의미로 쓴다."], 3, 4, "밝음과 어두움의 대비", "현대시에서 밝음과 어두움의 대비가 상실과 기대를 동시에 보여 주는지 묻는 문항이에요.", "대비되는 시어가 나온 연을 표시한다"),
      alt("다음 시에서 화자의 태도로 가장 적절한 것은?", ["대상을 분석하고 거리를 둔다.", "지나간 일을 담담히 받아들이되 미련을 남긴다.", "미래를 낙관하며 행동을 재촉한다.", "청자에게 도덕적 판단을 요구한다.", "현실의 고통을 과장해 비난한다."], 2, 1, "화자의 태도", "현대시 화자가 체념과 미련을 함께 드러내는지 묻는 문항이에요.", "태도 진술이 드러난 행을 표시한다"),
      alt("다음 시의 ‘빈 의자’에 대한 이해로 가장 적절한 것은?", ["곧 도착할 손님을 기다리는 소재다.", "부재하는 사람을 대신하는 이미지다.", "가구의 가치를 자랑하는 소재다.", "시간의 흐름과 무관한 배경이다.", "화자가 버린 신념을 뜻한다."], 2, 1, "빈 의자의 이미지", "현대시에서 빈 의자가 부재하는 사람을 대신하는 이미지인지 묻는 문항이에요.", "빈 의자가 나온 연과 앞뒤 정서를 표시한다")
    ],
    "문학·현대소설": [
      alt("윗글의 서술자에 대한 설명으로 가장 적절한 것은?", ["이야기 밖의 서술자가 인물의 속마음까지 전한다.", "한 인물의 눈으로만 사건을 제한해 전한다.", "서술자가 독자에게 결말을 미리 알린다.", "서술자는 인물과 같은 시간에 사건에 참여한다.", "서술자는 자신의 판단을 전혀 드러내지 않는다."], 2, 1, "서술자의 시점", "현대소설에서 시점이 한 인물의 인식 범위로 제한되는지를 묻는 문항이에요.", "누가 어디까지 아는지 표시한다"),
      alt("윗글에서 두 인물의 갈등 원인으로 가장 적절한 것은?", ["같은 물건을 서로 가지려 한다.", "약속을 다르게 기억해 서로를 오해한다.", "집안 배경의 차이만으로 다툰다.", "주인공이 일방적으로 관계를 끊는다.", "갈등은 결말에서 갑자기 생긴다."], 2, 3, "인물의 오해", "현대소설에서 갈등이 사실 충돌이 아니라 약속을 다르게 기억한 오해에서 시작되는지 묻는 문항이에요.", "약속을 회상하는 대목을 표시한다"),
      alt("윗글에서 오래된 사진이 하는 기능으로 가장 적절한 것은?", ["배경의 시대를 설명하는 정보다.", "잊힌 관계를 현재의 선택과 연결한다.", "범인을 특정하는 단서다.", "인물의 경제 수준을 보여 준다.", "결말과 무관한 장식이다."], 2, 1, "사진의 기능", "현대소설에서 사진이 과거 관계와 현재 선택을 잇는 소재인지 묻는 문항이에요.", "사진을 보는 장면과 직후 행동을 표시한다"),
      alt("윗글의 결말에 대한 이해로 가장 적절한 것은?", ["오해가 풀리며 관계가 완전히 회복된다.", "화해하지 못한 채 인물만 자리를 떠난다.", "진실을 확인했지만 관계의 회복은 미룬다.", "갈등의 원인은 끝까지 드러나지 않는다.", "주인공이 과거를 부정하며 끝난다."], 3, 1, "결말의 의미", "현대소설 결말이 진실 확인과 관계 회복을 분리하는지 묻는 문항이에요.", "결말에서 확인된 사실과 남은 거리를 표시한다")
    ],
    "문학·고전시가": [
      alt("다음 작품의 주제 의식으로 가장 적절한 것은?", ["자연을 정복해 공업을 일으키자는 다짐이다.", "이별의 정한을 인정하면서도 만남을 기다린다.", "임금에게 정치 개혁을 요구한다.", "농사의 풍년을 기원하는 주술이다.", "유배지의 원망을 직접 토로한다."], 2, 5, "이별과 기다림", "고전시가가 이별의 정한과 재회의 기다림을 함께 담는지 묻는 문항이에요.", "이별과 기다림이 나온 행을 표시한다"),
      alt("다음 작품의 표현 방식으로 가장 적절한 것은?", ["추상적 개념을 정의로 설명한다.", "구체적 자연물을 빌려 마음을 드러낸다.", "대화 없이 연대기 순으로 사건을 전한다.", "통계를 들어 주장을 입증한다.", "반어 없이 대상을 직접 비난한다."], 2, 1, "자연물에 기댄 정서", "고전시가가 자연물에 마음을 실어 정서를 드러내는지 묻는 문항이에요.", "자연물과 정서가 겹친 행을 표시한다"),
      alt("다음 작품의 화자와 청자에 대한 설명으로 가장 적절한 것은?", ["화자는 청자 없이 독백한다.", "청자는 화자를 꾸짖는 반대자다.", "화자는 그리운 임을 청자로 불러 마음을 전한다.", "화자와 청자는 같은 계층의 관리다.", "청자는 후대 독자로 한정된다."], 3, 1, "임이라는 청자", "고전시가에서 화자가 임을 청자로 삼아 정한을 전하는지 묻는 문항이에요.", "부름의 대상이 드러난 행을 표시한다")
    ],
    "문학·고전소설": [
      alt("윗글의 주인공 신분에 대한 설명으로 가장 적절한 것은?", ["처음부터 왕족으로 사건을 주도한다.", "미천한 처지에서 시련을 거쳐 신분이 드러난다.", "중인 상인으로 부를 쌓는 이야기만 한다.", "신분은 사건과 무관하다.", "결말에서도 신분이 밝혀지지 않는다."], 2, 1, "신분의 반전", "고전소설에서 숨겨진 신분이 시련 끝에 드러나는지를 묻는 문항이에요.", "신분 암시가 나온 대목을 표시한다"),
      alt("윗글의 사건 전개에 대한 설명으로 가장 적절한 것은?", ["한 장소에서 대화만으로 끝난다.", "위기, 이별, 재회로 단계가 이어진다.", "결말이 발단보다 앞에 제시된다.", "초자연적 도움 없이 사실만 나열된다.", "악인의 응징이 생략된다."], 2, 4, "위기와 재회", "고전소설의 사건이 위기와 이별 뒤에 재회로 이어지는지를 묻는 문항이에요.", "위기가 시작되는 장면과 재회 장면을 표시한다"),
      alt("윗글의 결말이 강조하는 것으로 가장 적절한 것은?", ["재물의 축적이다.", "권선징악과 신분 질서의 회복이다.", "개인 감정의 승리만 다룬다.", "역사 기록의 정확성이다.", "풍자에 그치고 보상은 없다."], 2, 1, "결말의 교훈", "고전소설 결말이 권선징악과 흐트러진 질서의 회복을 보여 주는지 묻는 문항이에요.", "결말의 보상과 응징을 표시한다")
    ],
    화법: [
      alt("다음은 토론의 입론이다. 입론자의 전략으로 가장 적절한 것은?", ["용어 정의 없이 결론부터 말한다.", "상대 주장을 왜곡해 반박한다.", "핵심 용어를 정의한 뒤 근거를 제시한다.", "청중의 질문을 막는다.", "논제와 다른 사례만 늘어놓는다."], 3, 2, "입론의 전략", "토론 입론에서 용어 정의 뒤에 근거를 붙이는지를 묻는 화법 문항이에요.", "정의 문장과 그 뒤 근거를 표시한다"),
      alt("다음은 발표의 일부이다. 발표자가 한 일로 가장 적절한 것은?", ["청중 수준과 무관하게 용어를 나열한다.", "들을 순서와 오늘 다룰 범위를 먼저 안내한다.", "결론을 숨기고 질문만 받는다.", "자료 출처를 밝히지 않는다.", "앞 내용과 모순된 수치를 제시한다."], 2, 1, "발표의 구성", "발표 도입에서 순서와 범위를 안내하는지를 묻는 화법 문항이에요.", "발표 앞부분의 안내 문장을 표시한다"),
      alt("다음은 협상의 일부이다. 제안자의 방식으로 가장 적절한 것은?", ["상대 조건을 무시한 채 원래 안만 반복한다.", "양보 폭을 숨기고 결정을 재촉한다.", "상대의 조건을 확인한 뒤 수정안을 제시한다.", "합의보다 관계 단절을 목표로 한다.", "근거 없이 최후 통첩만 한다."], 3, 1, "협상의 수정안", "협상에서 상대 조건을 확인한 뒤 수정안을 내는지 묻는 화법 문항이에요.", "상대 조건과 수정안이 나온 발화를 표시한다"),
      alt("다음 대화에서 학생이 교사의 조언을 받아들인 방식으로 가장 적절한 것은?", ["조언과 반대로 주제를 바꾼다.", "조언의 일부만 듣고 근거를 뺀다.", "범위를 좁히라는 조언을 다음 조사 계획에 반영한다.", "질문을 피하고 대화를 끝낸다.", "교사의 예시를 자기 경험인 것처럼 말한다."], 3, 2, "조언의 반영", "대화에서 교사의 조언이 학생의 다음 계획으로 이어지는지를 묻는 화법 문항이에요.", "조언 문장과 학생의 수정 계획을 표시한다")
    ],
    작문: [
      alt("다음 개요를 수정한 방향으로 가장 적절한 것은?", ["상위 항목과 하위 항목의 순서를 바꿨다.", "주제를 벗어난 항목을 빼 항목 수준을 맞췄다.", "근거 항목을 모두 주제로 올렸다.", "예상 독자를 지우고 분량만 늘렸다.", "결론 항목에 새 주장을 숨겼다."], 2, 1, "개요 수정", "작문 개요에서 주제 밖 항목을 빼고 항목 수준을 맞췄는지를 묻는 문항이에요.", "빠진 항목과 남은 항목의 수준을 비교한다"),
      alt("다음 글을 고칠 때 자료를 활용한 방식으로 가장 적절한 것은?", ["출처가 다른 수치를 평균 없이 이어 붙였다.", "주장과 무관한 일화를 결론에 넣었다.", "설문 결과를 주장 뒤의 근거로 배치했다.", "자료를 주장보다 앞에 두고 해석을 뺐다.", "반대 자료를 자기 주장인 것처럼 바꿨다."], 3, 1, "자료 활용", "작문에서 설문 결과를 주장의 근거지에 붙였는지를 묻는 문항이에요.", "자료가 들어간 문단과 주장을 대응한다"),
      alt("다음 글에서 예상 반론을 다룬 방식으로 가장 적절한 것은?", ["반론을 삭제하고 주장만 반복했다.", "반론을 인정한 뒤 한계를 보완하는 문장을 넣었다.", "반론을 주장의 근거로 바꿨다.", "반론의 출처를 지웠다.", "반론보다 강한 단정만 추가했다."], 2, 1, "예상 반론", "작문에서 예상 반론을 인정하고 보완했는지 묻는 문항이에요.", "반론 문장과 바로 뒤 보완 문장을 표시한다")
    ],
    "수학Ⅰ·지수함수와 로그함수": [
      alt("log2(32)의 값은?", ["4", "5", "6", "8", "16"], 2, 1, "로그의 값", "32를 2^5으로 보아 로그 값을 구하는 문항이에요.", "32를 2의 거듭제곱으로 고친다")
    ],
    "수학Ⅰ·삼각함수": [
      alt("cos(π/3)의 값은?", ["1/2", "√3/2", "√2/2", "1", "0"], 1, 2, "특수각의 코사인", "π/3의 코사인과 사인을 구분하는 삼각함수 문항이에요.", "각을 60도로 바꾸고 코사인 값을 고른다")
    ],
    "수학Ⅰ·수열": [
      alt("첫째항이 3, 공비가 2인 등비수열의 제4항은?", ["12", "18", "24", "48", "6"], 3, 1, "등비수열의 일반항", "제4항을 첫째항에 공비를 3번 곱해 구하는 수열 문항이에요.", "a_n = a·r^(n-1)에 n = 4를 대입한다")
    ],
    "수학Ⅱ·함수의 극한과 연속": [
      alt("lim(x→0) (sin x)/x 의 값은?", ["0", "1", "무한대", "존재하지 않는다", "-1"], 2, 1, "삼각함수의 극한", "sin x와 x의 비가 0에서 1로 수렴하는지를 묻는 극한 문항이에요.", "표준 극한 lim (sin x)/x = 1을 적용한다")
    ],
    "수학Ⅱ·미분": [
      alt("f(x) = x^3일 때 f'(2)의 값은?", ["6", "8", "12", "3", "4"], 3, 1, "도함수의 함숫값", "f'(x) = 3x^2에 x = 2를 대입하는 미분 문항이에요.", "도함수 3x^2을 구한 뒤 x = 2를 대입한다")
    ],
    "수학Ⅱ·적분": [
      alt("∫(0부터 2까지) 2x dx의 값은?", ["2", "4", "8", "1", "6"], 2, 1, "정적분", "원시함수 x^2의 구간 차로 정적분을 구하는 문항이에요.", "원시함수 x^2에서 F(2) - F(0)을 계산한다")
    ],
    "확률과 통계·경우의 수": [
      alt("서로 다른 4명 중 2명을 뽑아 위원회를 만드는 경우의 수는? (순서는 고려하지 않는다)", ["4", "6", "8", "12", "24"], 2, 4, "조합", "순서를 고려하지 않는 조합 C(4,2)를 구하는 경우의 수 문항이에요.", "순서 없음이므로 4×3을 2로 나눈다")
    ],
    "확률과 통계·확률": [
      alt("주사위 한 개를 던질 때 짝수가 나올 확률은?", ["1/6", "1/3", "1/2", "2/3", "5/6"], 3, 2, "고전적 확률", "짝수 눈 3개를 전체 6으로 나누는 확률 문항이에요.", "짝수 눈이 3가지임을 세고 6으로 나눈다")
    ],
    "확률과 통계·통계": [
      alt("자료 3, 7, 9의 중앙값은?", ["3", "6", "7", "9", "19"], 3, 2, "중앙값", "자료를 정렬한 뒤 가운데 값을 고르는 통계 문항이에요.", "3, 7, 9에서 가운데 값 7을 고른다")
    ],
    "미적분·수열의 극한": [
      alt("lim(n→∞) (3n^2 + n)/(n^2 + 1)의 값은?", ["1", "2", "3", "0", "무한대"], 3, 1, "최고차항의 계수비", "분자와 분모의 최고차항 계수비 3을 구하는 수열의 극한 문항이에요.", "n^2 항의 계수 3과 1의 비를 구한다")
    ],
    "미적분·미분법": [
      shortAlt("f(x) = x^2 + 1일 때 f'(3)의 값을 구하시오.", "6", "9", "미분계수", "f'(x) = 2x에 x = 3을 대입하는 단답형 미분법 문항이에요.", "도함수 2x를 구한 뒤 x = 3을 대입한다")
    ],
    "미적분·적분법": [
      shortAlt("∫(0부터 3까지) 2x dx의 값을 구하시오.", "9", "6", "정적분", "원시함수 x^2에서 F(3) - F(0)을 구하는 단답형 적분법 문항이에요.", "원시함수 x^2에 위끝 3을 대입한다")
    ],
    "기하·이차곡선": [
      shortAlt("포물선 x^2 = 8y의 초점의 y좌표를 구하시오.", "2", "4", "포물선의 초점", "x^2 = 4py에서 p = 2이므로 초점이 (0, 2)인 단답형 이차곡선 문항이에요.", "4p = 8에서 p를 구한다")
    ],
    "기하·평면벡터": [
      shortAlt("a = (2, 1), b = (1, 4)일 때 a·b의 값을 구하시오.", "6", "8", "벡터의 내적", "2×1과 1×4를 더하는 단답형 평면벡터 문항이에요.", "같은 위치의 성분끼리 곱해 더한다")
    ],
    "기하·공간도형과 공간좌표": [
      shortAlt("한 모서리의 길이가 3인 정육면체의 부피를 구하시오.", "27", "18", "정육면체의 부피", "부피 a^3에 a = 3을 대입하는 단답형 공간도형 문항이에요.", "3×3×3을 계산한다")
    ],
    "듣기·말하기·듣기": [
      alt("다음을 듣고, 여자가 바꾼 약속으로 가장 적절한 것은? (여자: 토요일 대신 일요일 오전에 보자.)", ["토요일 저녁으로 미뤘다.", "약속을 취소했다.", "일요일 오전으로 바꿨다.", "장소만 도서관으로 바꿨다.", "시간을 말하지 않았다."], 3, 1, "약속 시간 변경", "듣기에서 바뀐 요일이 일요일 오전인지를 묻는 문항이에요.", "바뀐 요일과 시간을 적는다"),
      alt("다음을 듣고, 남자가 잃어버린 물건으로 가장 적절한 것은? (남자: 검은 필통을 열람실에 두고 온 것 같아.)", ["빨간 가방", "흰색 이어폰", "검은 필통", "학생증", "우산"], 3, 1, "분실물", "듣기에서 잃어버린 물건이 검은 필통인지를 묻는 문항이에요.", "물건의 색깔과 이름을 적는다"),
      alt("다음을 듣고, 두 사람이 만나기로 한 장소로 가장 적절한 것은? (남자: 과학실 말고 운동장 벤치에서 보자.)", ["과학실", "급식실", "운동장 벤치", "정문", "도서관"], 3, 1, "만남 장소", "듣기에서 최종 장소가 운동장 벤치인지를 묻는 문항이에요.", "수정된 장소를 표시한다"),
      alt("다음을 듣고, 과제 제출 방법으로 가장 적절한 것은? (여자: 출력본 대신 오늘 자정까지 메일로 보내 줘.)", ["내일 아침 출력본으로 낸다.", "교무실에 직접 낸다.", "오늘 자정까지 메일로 보낸다.", "조장만 제출한다.", "제출이 면제되었다."], 3, 1, "과제 제출", "듣기에서 제출 기한과 방법이 오늘 자정 메일인지를 묻는 문항이에요.", "기한과 제출 방법을 적는다"),
      alt("다음을 듣고, 남자가 추천한 길로 가장 적절한 것은? (남자: 공사 중이니 정문 대신 후문으로 돌아가.)", ["정문으로 곧장 간다.", "지하철역에서 내린다.", "후문으로 돌아간다.", "버스를 탄다.", "학교를 쉬어 간다."], 3, 1, "길 안내", "듣기에서 우회 경로가 후문인지를 묻는 문항이에요.", "피해야 할 곳과 대안을 적는다"),
      alt("다음을 듣고, 공연 예매에 대한 내용으로 가장 적절한 것은? (여자: 2층 가운데, 일요일 2시로 잡았어.)", ["1층 왼쪽, 토요일 밤", "공연이 취소되었다.", "2층 가운데, 일요일 2시", "표를 양도하기로 했다.", "장소는 아직 모른다."], 3, 1, "공연 예매", "듣기에서 좌석과 회차가 2층 가운데 일요일 2시인지를 묻는 문항이에요.", "좌석과 회차를 함께 적는다"),
      alt("다음을 듣고, 주문한 음식으로 가장 적절한 것은? (남자: 매운 음식은 빼고 순두부만 두 개 주세요.)", ["매운 라면 두 개", "비빔밥 하나", "순두부 두 개", "김치찌개와 공기밥", "주문을 취소했다."], 3, 1, "주문 내용", "듣기에서 최종 주문이 순두부 두 개인지를 묻는 문항이에요.", "뺀 음식과 시킨 음식을 구분한다"),
      alt("다음을 듣고, 병원 예약 시간으로 가장 적절한 것은? (여자: 수요일 4시는 꽉 차서 목요일 11시로 바꿨어.)", ["수요일 4시", "화요일 11시", "목요일 11시", "금요일 2시", "예약이 취소되었다."], 3, 1, "병원 예약", "듣기에서 확정 시각이 목요일 11시인지를 묻는 문항이에요.", "거절된 시간과 확정 시간을 적는다"),
      alt("다음을 듣고, 동아리 모임에 대한 내용으로 가장 적절한 것은? (남자: 비 오면 운동장 대신 강당에서 5시에 모여.)", ["맑으면 강당에서 모인다.", "4시에 정문에서 모인다.", "비가 오면 강당에서 5시에 모인다.", "모임이 다음 주로 미뤄졌다.", "장소는 반장이 나중에 정한다."], 3, 1, "모임 조건", "듣기에서 비 올 때의 장소와 시간이 강당 5시인지를 묻는 문항이에요.", "조건과 장소, 시간을 함께 적는다"),
      alt("다음을 듣고, 버스가 늦은 이유로 가장 적절한 것은? (여자: 사고가 아니라 앞차 고장 때문에 늦었대.)", ["교통사고 때문이었다.", "기사가 바뀌어서였다.", "앞차 고장 때문이었다.", "학생이 잘못 탔다.", "노선이 폐지되었다."], 3, 1, "지연 이유", "듣기에서 지연 원인이 사고와 구분되는 앞차 고장인지를 묻는 문항이에요.", "부정된 이유와 실제 이유를 적는다"),
      alt("다음을 듣고, 교사가 요구한 것으로 가장 적절한 것은? (남자: 요약 대신 실험 결과 표만 다시 붙여서 제출해.)", ["요약을 두 장으로 늘린다.", "실험을 처음부터 다시 한다.", "실험 결과 표를 다시 붙여 제출한다.", "조원을 바꾼다.", "제출일을 한 주 미룬다."], 3, 1, "수정 요구", "듣기에서 다시 제출할 부분이 실험 결과 표인지를 묻는 문항이에요.", "빼야 할 것과 다시 낼 것을 구분한다"),
      alt("다음을 듣고, 생일 선물로 가장 적절한 것은? (여자: 향수 말고 그 사람이 원하던 이어폰으로 사자.)", ["향수", "책", "이어폰", "지갑", "케이크"], 3, 1, "선물 결정", "듣기에서 최종 선물이 이어폰인지를 묻는 문항이에요.", "거절한 선물과 고른 선물을 적는다"),
      alt("다음을 듣고, 운동 계획으로 가장 적절한 것은? (남자: 이번 주는 달리기 대신 수영을 월·수로 하자.)", ["매일 달리기", "화·목 축구", "월·수 수영", "주말 등산", "운동을 쉰다."], 3, 1, "운동 계획", "듣기에서 종목과 요일이 월·수 수영인지를 묻는 문항이에요.", "바뀐 종목과 요일을 적는다"),
      alt("다음을 듣고, 사진 촬영에 대한 내용으로 가장 적절한 것은? (여자: 실내 조명 말고 창가에서 찍자.)", ["운동장에서 찍는다.", "조명을 더 켜고 찍는다.", "창가에서 찍는다.", "촬영을 취소한다.", "배경을 합성한다."], 3, 1, "촬영 장소", "듣기에서 촬영 위치가 창가인지를 묻는 문항이에요.", "거절한 조명과 선택한 위치를 적는다"),
      alt("다음을 듣고, 남자가 부탁한 일로 가장 적절한 것은? (남자: 짐은 내가 싸고, 너는 내일 차만 빌려 줘.)", ["짐 싸는 일을 도와 달라고 했다.", "오늘 당장 이사를 가자고 했다.", "내일 차를 빌려 달라고 했다.", "창고를 같이 치우자고 했다.", "이사를 미루자고 했다."], 3, 1, "부탁의 범위", "듣기에서 부탁이 짐이 아니라 내일 차를 빌리는 일인지를 묻는 문항이에요.", "각자가 맡은 일을 나누어 적는다"),
      alt("다음을 듣고, 시험 준비에 대한 내용으로 가장 적절한 것은? (여자: 범위는 3단원까지고, 계산 문제는 내가 정리할게.)", ["범위는 1단원뿐이다.", "계산 문제는 빼고 본다.", "범위는 3단원까지이고 계산 정리는 여자가 맡는다.", "내일 모의시험을 본다.", "준비 모임을 취소했다."], 3, 2, "시험 범위", "듣기에서 범위와 역할이 3단원과 여자의 계산 정리인지를 묻는 문항이에요.", "범위와 맡은 사람을 함께 적는다")
    ],
    "듣기·말하기·간접말하기": [
      alt("대화를 듣고, 남자에 대한 여자의 응답으로 가장 적절한 것은? (남자: 우산이 없어서 못 나가겠어.)", ["그럼 도서관에서 기다릴게.", "우산은 이미 네가 썼잖아.", "비는 그쳤다고 했어.", "나는 내일 떠날게.", "우산은 필요 없는 날이야."], 1, 2, "간접 말하기 응답", "상대가 우산이 없다는 말에 이어 같이 있을 방법을 고르는 간접 말하기 문항이에요.", "남자가 못 나가는 이유를 표시한다"),
      alt("대화를 듣고, 여자에 대한 남자의 응답으로 가장 적절한 것은? (여자: 발표 자료 마지막 장이 빠졌어.)", ["그럼 그 장만 다시 넣자.", "자료는 이미 완벽하잖아.", "발표는 어제 끝났어.", "마지막 장은 필요 없다고 했어.", "나는 다른 조야."], 1, 2, "빠진 자료에 대한 응답", "빠진 마지막 장을 보완하자는 응답을 고르는 간접 말하기 문항이에요.", "여자가 지적한 빠진 부분을 표시한다"),
      alt("대화를 듣고, 남자에 대한 여자의 응답으로 가장 적절한 것은? (남자: 오늘 회의가 한 시간 당겨졌대.)", ["그럼 지금 바로 강의실로 가자.", "회의는 내일로 미뤄졌어.", "시간은 그대로라고 했어.", "나는 회의 대상이 아니야.", "장소가 바뀐 건 아니잖아, 그냥 있자."], 1, 5, "시간 변경에 대한 응답", "회의가 앞당겨진 정보에 맞춰 바로 이동하자는 응답을 고르는 문항이에요.", "당겨진 시간을 표시한다")
    ],
    "읽기·쓰기·대의파악": [
      alt("다음 글의 요지로 가장 적절한 것은? (짧은 걷기가 건강에 도움이 된다는 내용)", ["Cities should ban all public transport.", "Small daily walks can improve health.", "Exercise matters only for athletes.", "Rest is more important than movement.", "Health depends only on medicine."], 2, 1, "가벼운 운동의 요지", "글 전체가 짧은 걷기처럼 가벼운 일상 운동이 건강에 도움이 된다는 요지인지를 묻는 문항이에요.", "반복되는 주장 문장을 표시한다"),
      alt("다음 글의 주장으로 가장 적절한 것은? (피드백 뒤 수정이 글을 나아지게 한다는 내용)", ["Students should copy sample essays.", "Revision after feedback improves writing.", "The first draft is usually the best.", "Grammar matters more than ideas.", "Teachers should stop giving comments."], 2, 3, "고쳐쓰기의 주장", "피드백 뒤의 수정이 글을 나아지게 한다는 주장을 묻는 대의 파악 문항이에요.", "피드백과 수정이 함께 나온 문장을 표시한다"),
      alt("다음 글의 요지로 가장 적절한 것은? (선택지를 비교해야 충동 구매를 줄인다는 내용)", ["Prices should never change.", "Comparing options helps people avoid impulse buying.", "Shoppers should buy the first item they see.", "Advertising has no effect on choices.", "Budgets make shopping impossible."], 2, 3, "비교 소비의 요지", "선택지를 비교해야 충동 구매를 줄일 수 있다는 요지를 묻는 문항이에요.", "비교와 충동 구매가 연결된 문장을 표시한다"),
      alt("다음 글의 주장으로 가장 적절한 것은? (역할을 나누면 모둠 활동이 효과적이라는 내용)", ["Group work always wastes time.", "Clear roles make group projects more effective.", "One leader should do every task.", "Friends should avoid working together.", "Grades should ignore participation."], 2, 1, "역할 분담의 주장", "역할을 나누면 모둠 활동이 더 효과적이라는 주장을 묻는 문항이에요.", "역할과 효과가 나온 문장을 표시한다")
    ],
    "읽기·쓰기·세부정보파악": [
      alt("다음 봉사 안내와 일치하지 않는 것은?", ["장소는 강변 공원이다.", "모이는 시각은 오전 9시다.", "장갑은 학교에서 나눠 준다.", "우천 시에는 다음날로 연기된다.", "개인 도시락은 필요 없다."], 5, 3, "봉사 안내의 불일치", "안내문에 없는 도시락 조건을 고르는 세부 정보 문항이에요. 도시락은 개인 지참이다.", "시각, 장소, 준비물, 우천 조건을 표시한다"),
      alt("다음 강연 안내와 일치하는 것은?", ["강연자는 학생회장이다.", "시작은 오후 7시다.", "장소는 중앙 도서관 2층이다.", "신청 없이 입장할 수 있다.", "주제는 진로가 아니라 체육이다."], 3, 4, "강연 안내의 일치", "안내문에 있는 장소가 중앙 도서관 2층인지를 묻는 세부 정보 문항이에요.", "강연자, 시각, 장소, 신청 여부를 대조한다"),
      alt("다음 교환 학생 모집 안내와 일치하지 않는 것은?", ["지원 마감은 4월 10일이다.", "에세이는 영어로 쓴다.", "추천서가 한 부 필요하다.", "성적 기준은 학년 석차 상위 20%다.", "선발되면 항공료를 학교가 전액 부담한다."], 5, 2, "모집 안내의 불일치", "안내문에 없는 항공료 전액 지원을 고르는 세부 정보 문항이에요.", "마감, 에세이, 추천서, 성적, 비용을 하나씩 대조한다")
    ],
    "읽기·쓰기·어법·어휘": [
      alt("다음 밑줄 친 부분 중 어법상 틀린 것은? (enjoys to swim / If I were you)", ["If I were you, I would wait.", "She enjoys to swim in the morning.", "The news was surprising.", "He asked where I lived.", "Neither of the answers is correct."], 2, 4, "enjoy의 어법", "enjoy 뒤에는 to부정사가 아니라 동명사가 온다는 어법 문항이에요.", "각 동사 뒤의 형태를 표시한다"),
      alt("다음 밑줄 친 부분 중 어휘의 쓰임이 적절하지 않은 것은?", ["The result supports the claim.", "Heavy rain delayed the game.", "His absence effected the schedule.", "The teacher explained the rule.", "Prices rose after the holiday."], 3, 1, "affect와 effect", "‘영향을 주다’는 affect이고 effect는 이 문맥에 맞지 않는 어휘 문항이에요.", "밑줄 단어가 문장에서 하는 역할을 표시한다"),
      alt("다음 밑줄 친 부분 중 어법상 틀린 것은? (suggested that he goes / The boy sitting)", ["The boy sitting by the door is my brother.", "She suggested that he goes home.", "I have lived here for ten years.", "What he said was true.", "There were two books on the desk."], 2, 5, "suggest that의 동사", "suggest that절에서는 goes가 아니라 go가 온다는 어법 문항이에요.", "that절 동사의 형태를 규칙과 비교한다")
    ],
    "읽기·쓰기·빈칸추론": [
      alt("다음 빈칸에 들어갈 말로 가장 적절한 것은? The map was outdated, so the team had to ____ the route on site.", ["memorize", "adjust", "erase", "publish", "ignore"], 2, 5, "현장에서의 경로 수정", "오래된 지도 때문에 현장에서 경로를 조정해야 한다는 빈칸 문항이에요.", "원인인 outdated와 결과를 연결한다"),
      alt("다음 빈칸에 들어갈 말로 가장 적절한 것은? A single experiment rarely ____ a theory; repeated results matter more.", ["proves", "names", "draws", "hides", "sells"], 1, 2, "반복 검증", "rarely proves처럼 한 번의 실험만으로 이론이 증명되지 않는다는 빈칸 문항이에요.", "rarely의 방향을 먼저 표시한다"),
      alt("다음 빈칸에 들어갈 말로 가장 적절한 것은? When notes are shared before class, discussion becomes more ____.", ["silent", "focused", "private", "delayed", "random"], 2, 1, "사전 노트와 토론", "수업 전 노트 공유가 토론을 더 집중되게 만든다는 빈칸 문항이에요.", "공유의 결과가 긍정적인지 표시한다")
    ],
    "읽기·쓰기·간접쓰기": [
      alt("주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은? (원인을 말한 뒤 사례와 정리가 오는 글)", ["(A)-(B)-(C)", "(A)-(C)-(B)", "(B)-(C)-(A)", "(C)-(B)-(A)", "(C)-(A)-(B)"], 3, 1, "원인 뒤의 사례", "원인을 말한 (B) 다음에 사례 (C)와 정리 (A)가 오는 간접 쓰기 문항이에요.", "각 문단 첫머리의 지시어를 표시한다"),
      alt("글의 흐름으로 보아 주어진 문장이 들어가기에 가장 적절한 곳은?", ["① 단락의 맨 앞", "② 문제 제기 직후", "③ 사례와 해석 사이", "④ 결론의 뒤", "⑤ 어느 곳에도 맞지 않는다"], 3, 1, "문장 삽입 위치", "주어진 문장이 사례를 해석으로 잇는 자리인지를 묻는 간접 쓰기 문항이에요.", "주어진 문장의 연결어와 앞뒤 내용을 대조한다"),
      alt("다음 글에서 전체 흐름과 관계없는 문장은?", ["도입의 질문", "연구 결과", "같은 결과를 보여 준 다른 사례", "작가의 가족 여행 일화", "결론의 제안"], 4, 2, "무관한 문장", "가족 여행 일화가 연구 결과의 흐름과 끊기는지를 묻는 간접 쓰기 문항이에요.", "앞뒤 문장이 같은 대상을 말하는지 확인한다")
    ],
    "읽기·쓰기·장문독해": [
      alt("장문의 내용과 일치하는 것은?", ["The town saved water by repairing old pipes.", "Residents refused to check their water use.", "The drought ended before any action.", "The city closed every public fountain forever.", "Farmers increased watering during the ban."], 1, 4, "절수 대책", "장문이 노후 수도관 수리로 물을 아낀 과정을 따르는지 묻는 문항이에요.", "문제, 대책, 결과를 문단마다 적는다"),
      alt("장문 속 인물에 대한 설명으로 가장 적절한 것은?", ["She kept the failed design and changed the material.", "She gave up after the first test.", "She copied another team’s report.", "She ignored the user’s complaint.", "She published the plan before testing it."], 1, 2, "설계 수정", "장문의 인물이 실패한 설계를 버리지 않고 재료를 바꿨는지를 묻는 문항이에요.", "실패 이후의 행동을 시간 순으로 표시한다")
    ],
    "전근대사·선사와 고대 국가": [
      alt("다음 유물·유적에 대한 설명으로 가장 적절한 것은? (빗살무늬 토기, 움집)", ["벼농사와 청동 무기가 일반화되었다.", "계급이 뚜렷한 국가 단계였다.", "갈돌과 함께 신석기 시대의 정착 생활을 보여 준다.", "불교 사찰이 함께 만들어졌다.", "과거제로 관리를 뽑았다."], 3, 1, "신석기 생활", "빗살무늬 토기와 움집이 신석기 정착 생활의 자료인지를 묻는 문항이에요.", "유물의 시대를 먼저 적는다"),
      alt("고구려의 성장에 대한 설명으로 가장 적절한 것은?", ["한강 유역으로 남하해 고대 국가의 기반을 넓혔다.", "골품제로 신분을 닫아 두었다.", "과거제를 시행해 문벌을 없앴다.", "훈민정음을 창제했다.", "삼국 간섭으로 왕권이 제한되었다."], 1, 2, "고구려의 팽창", "고구려가 한강 유역 진출로 고대 국가의 힘을 넓혔는지를 묻는 문항이에요.", "시기와 영토 확장을 표시한다")
    ],
    "전근대사·고려의 정치와 사회": [
      alt("광종의 정책으로 가장 적절한 것은?", ["노비안검법과 과거제로 공신 세력을 누르려 했다.", "전시과로 모든 농민에게 토지를 나누었다.", "훈민정음을 반포했다.", "의정부 서사제를 실시했다.", "경국대전을 편찬했다."], 1, 2, "광종의 개혁", "광종이 노비안검법과 과거제로 공신 세력을 견제했는지를 묻는 문항이에요.", "정책의 대상과 목적을 적는다"),
      alt("고려 무신 정권에 대한 설명으로 가장 적절한 것은?", ["문신 중심 정치가 흔들리고 무신이 권력을 잡았다.", "과거제가 폐지되고 왕이 없어졌다.", "몽골에 항복한 직후 바로 끝났다.", "조선 건국과 같은 사건이다.", "농민에게 토지를 균등 지급했다."], 1, 2, "무신 정권", "고려에서 문벌 문신 정치가 무신 집권으로 바뀌었는지를 묻는 문항이에요.", "정변이 일어난 시기와 집권 세력을 적는다")
    ],
    "전근대사·조선 전기의 통치": [
      alt("훈민정음 창제의 취지로 가장 적절한 것은?", ["한문을 폐지하기 위해서였다.", "백성이 쉽게 글을 익히게 하려는 목적이 있었다.", "과거 시험을 없애기 위해서였다.", "불교 경전만 번역하려 했다.", "청나라 문자를 받아들이려 했다."], 2, 1, "훈민정음", "훈민정음이 백성의 문자 생활을 돕기 위해 만들어졌는지를 묻는 문항이에요.", "창제 목적 문장을 표시한다")
    ],
    "전근대사·조선 후기의 변화": [
      alt("조선 후기 상품 화폐 경제에 대한 설명으로 가장 적절한 것은?", ["공인이 정부 수요품을 사서 납품하는 방식이 늘었다.", "물물 교환만 남고 화폐는 사라졌다.", "장시가 모두 금지되었다.", "수공업자가 관청에만 소속되었다.", "농업 생산이 완전히 중단되었다."], 1, 2, "공인과 장시", "조선 후기 공인의 납품과 장시 확대가 상품 화폐 경제의 모습인지를 묻는 문항이에요.", "누가 물건을 어떻게 유통했는지 적는다")
    ],
    "근현대사·개항과 근대 개혁": [
      alt("동학 농민 운동에 대한 설명으로 가장 적절한 것은?", ["폐정 개혁을 요구하며 농민이 봉기했다.", "급진 개화파가 궁궐을 장악했다.", "고종이 대한제국을 선포했다.", "독립협회가 만민 공동회를 열었다.", "의병이 을사늑약에 저항했다."], 1, 2, "동학 농민 운동", "동학 농민 운동이 폐정 개혁을 요구한 농민 봉기인지를 묻는 문항이에요.", "주도 세력과 요구를 적는다"),
      alt("독립 협회에 대한 설명으로 가장 적절한 것은?", ["만민 공동회를 열어 자주 국권과 민권 신장을 주장했다.", "위정척사 세력의 통상 반대 운동이다.", "갑신정변을 주도했다.", "총독부 자문 기구였다.", "농지 개혁법을 제정했다."], 1, 3, "독립 협회", "독립 협회가 만민 공동회를 통해 자주와 민권을 주장했는지를 묻는 문항이에요.", "활동 방식과 주장을 표시한다")
    ],
    "근현대사·일제 강점과 독립운동": [
      alt("3·1 운동에 대한 설명으로 가장 적절한 것은?", ["민족 대표와 학생·시민이 만세 시위로 독립 의사를 알렸다.", "임시 정부가 광복군을 창설한 사건이다.", "광주에서 학생만 참여한 시위다.", "한일 협정이 체결된 해의 사건이다.", "제헌 국회가 헌법을 만든 계기다."], 1, 3, "3·1 운동", "3·1 운동이 각계의 만세 시위로 독립 의사를 보여 준 사건인지를 묻는 문항이에요.", "참여 계층과 요구를 적는다"),
      alt("민족 말살 통치에 대한 설명으로 가장 적절한 것은?", ["황국 신민화와 한글 사용 억제처럼 민족 문화를 지우려 했다.", "토지 조사 사업만 해당한다.", "문화 통치로 언론 자유가 확대되었다.", "독립군 양성을 지원했다.", "광복 이후의 정책이다."], 1, 3, "민족 말살 통치", "일제가 황국 신민화로 민족 문화를 지우려고 했는지를 묻는 문항이에요.", "정책의 대상이 민족 문화인지 표시한다")
    ],
    "근현대사·대한민국의 수립": [
      alt("농지 개혁에 대한 설명으로 가장 적절한 것은?", ["유상 매수·유상 분배로 소작 농민에게 땅을 나누려 했다.", "지주에게 토지를 더 몰아 주었다.", "일제가 시행한 토지 조사 사업이다.", "산업 시설만 민간에 넘겼다.", "6월 민주 항쟁 이후의 정책이다."], 1, 3, "농지 개혁", "농지 개혁이 유상 매수·유상 분배로 소작지를 나누려 한 정책인지를 묻는 문항이에요.", "매수와 분배의 방향을 표시한다")
    ],
    "근현대사·민주화와 경제 성장": [
      alt("5·18 민주화 운동에 대한 설명으로 가장 적절한 것은?", ["신군부의 무력 진압에 맞서 광주 시민이 민주화를 요구했다.", "4·19 혁명의 다른 이름이다.", "한일 국교 정상화에 반대한 시위만 해당한다.", "부마 민주 항쟁과 같은 해의 서울 시위다.", "유신 헌법 제정에 찬성한 운동이다."], 1, 2, "5·18 민주화 운동", "5·18이 신군부 진압에 맞선 광주 시민의 민주화 요구인지를 묻는 문항이에요.", "장소, 탄압 주체, 요구를 함께 적는다")
    ],
    "통합사회1·통합적 관점": [
      alt("지역 소멸을 볼 때 통합적 관점으로 가장 적절한 것은?", ["청년 인구만 세면 충분하다.", "시간적 변화, 산업 공간, 제도, 공동체의 삶을 함께 본다.", "윤리적 책임은 인구 문제와 무관하다.", "수도만 비교하면 원인이 드러난다.", "과거 자료는 현재 판단에 쓸 수 없다."], 2, 1, "지역 소멸의 통합적 관점", "지역 소멸을 인구 숫자만이 아니라 시간·공간·사회·윤리로 겹쳐 보는 문항이에요.", "사례에 네 관점이 어떻게 겹치는지 적는다"),
      alt("기후 위기를 통합적 관점에서 본 설명으로 가장 적절한 것은?", ["기온 그래프만 보면 책임이 정해진다.", "발생의 역사, 피해 지역, 산업 구조, 세대 간 책임을 함께 묻는다.", "윤리 판단은 과학 자료와 같이 쓸 수 없다.", "피해는 모든 지역에 같으므로 공간이 필요 없다.", "미래 세대는 현재 선택과 무관하다."], 2, 1, "기후 위기의 통합적 관점", "기후 위기를 역사, 공간, 산업, 세대 책임으로 함께 보는 문항이에요.", "자료에서 네 관점에 해당하는 정보를 나누어 표시한다")
    ],
    "통합사회1·인간, 사회, 환경과 행복": [
      alt("행복 지표를 해석한 내용으로 가장 적절한 것은?", ["소득 순위가 낮으면 삶의 만족도 다른 조건은 볼 필요가 없다.", "공동체 신뢰와 여가 시간이 소득과 함께 만족도를 가른다.", "환경 만족은 행복 조사에서 빼야 한다.", "안전은 개인 기분이므로 지표가 될 수 없다.", "국가 비교에서는 질적 지표를 쓰지 않는다."], 2, 1, "질적 행복 지표", "행복 비교에서 소득 외에 신뢰와 여가 같은 질적 지표를 함께 보는 문항이에요.", "표에서 소득과 질적 지표를 나누어 표시한다"),
      alt("재난 이후 행복에 대한 설명으로 가장 적절한 것은?", ["시설만 복구되면 삶의 안정은 바로 돌아온다.", "주거 안정, 돌봄, 관계 회복이 함께 이루어져야 한다.", "심리적 충격은 행복과 무관하다.", "공동체 지원은 개인 회복을 늦춘다.", "재난 피해는 소득으로만 측정한다."], 2, 1, "재난과 삶의 안정", "재난 이후 행복을 시설 복구만이 아니라 돌봄과 관계 회복으로 보는 문항이에요.", "복구 항목을 물질과 관계로 나누어 적는다")
    ],
    "통합사회1·자연환경과 인간": [
      alt("해안 침식에 대한 설명으로 가장 적절한 것은?", ["방파제만 세우면 주변 해안 피해는 없다.", "한 구간의 방어가 이웃 해안의 침식을 옮길 수 있다.", "기후와 해안 지형은 무관하다.", "모래 공급은 인간의 구조물과 무관하다.", "침식은 자연 현상이므로 거주 계획과 분리된다."], 2, 1, "해안 침식", "해안 방어가 이웃 구간의 침식을 옮길 수 있는지를 묻는 자연환경 문항이에요.", "구조물의 위치와 침식 이동을 표시한다")
    ],
    "통합사회1·문화와 다양성": [
      alt("문화 다양성에 대한 설명으로 가장 적절한 것은?", ["차이가 있으면 공공 공간에서 빼는 것이 중립이다.", "서로 다른 문화 표현이 공존할 제도가 필요하다.", "다양성은 전통과 충돌하면 포기해야 한다.", "소수 문화는 사적 영역에만 남긴다.", "문화는 국가마다 하나만 존재한다."], 2, 1, "문화 공존", "문화 다양성을 배제가 아니라 공존의 제도로 보는 문항이에요.", "갈등 사례에서 배제와 공존을 나누어 표시한다")
    ],
    "통합사회1·생활공간과 사회": [
      alt("교외화에 대한 설명으로 가장 적절한 것은?", ["도심 기능이 사라지고 인구만 줄어든다.", "주거지가 밖으로 늘며 통근과 상업 기능도 함께 퍼진다.", "교통 발달은 교외화와 무관하다.", "교외는 농업 지역으로만 남는다.", "모든 계층이 같은 거리로 이동한다."], 2, 1, "교외화", "주거지 확대와 통근·상업 기능의 확산이 함께 일어나는 교외화인지를 묻는 문항이에요.", "인구 이동과 기능 이동을 지도에서 표시한다"),
      alt("젠트리피케이션에 대한 설명으로 가장 적절한 것은?", ["임대료가 올라도 기존 주민의 생활은 그대로다.", "상업 활성화 뒤에 임대료가 올라 기존 주민과 상인이 밀려날 수 있다.", "낙후 지역은 투자와 무관하다.", "공공 임대는 이 현상과 관계가 없다.", "골목 상권은 주거와 분리되어 있다."], 2, 1, "젠트리피케이션", "상권 활성화가 임대료 상승과 기존 주민의 밀려남으로 이어질 수 있는지를 묻는 문항이에요.", "활성화의 이익과 밀려남의 비용을 나누어 적는다")
    ],
    "통합사회2·인권보장과 헌법": [
      alt("표현의 자유 제한에 대한 설명으로 가장 적절한 것은?", ["명예훼손은 표현이므로 어떤 제한도 받지 않는다.", "타인의 권리를 침해하는 표현은 법률과 과잉 금지 원칙 안에서 제한될 수 있다.", "표현의 자유는 명령으로 미리 봉쇄할 수 있다.", "제한의 이유는 밝히지 않아도 된다.", "구제 절차는 표현의 자유와 무관하다."], 2, 1, "표현의 자유", "표현의 자유도 타인의 권리를 침해하면 법률과 과잉 금지 원칙 안에서 제한되는지를 묻는 문항이에요.", "제한의 목적과 수단이 비례하는지 적는다"),
      alt("선거권에 대한 설명으로 가장 적절한 것은?", ["재산이 있는 시민에게만 주어진다.", "참정권으로서 법률이 정한 연령과 자격에 따라 보장된다.", "국가가 임의로 특정 지역만 빼도 된다.", "보통 선거는 차등 투표를 뜻한다.", "선거 결과는 사법 심사의 대상이 될 수 없다."], 2, 1, "선거권", "선거권이 법률의 연령과 자격에 따라 보장되는 참정권인지를 묻는 문항이에요.", "자격 제한이 법률에 있는지 확인한다")
    ],
    "통합사회2·사회정의와 불평등": [
      alt("기회의 공정에 대한 설명으로 가장 적절한 것은?", ["출발 조건이 달라도 같은 시험만 보면 기회는 같다.", "불리한 출발을 보정하는 제도가 있어야 기회의 실질이 가까워진다.", "결과의 평등과 기회의 공정은 같은 말이다.", "교육 지원은 공정과 무관하다.", "차별은 개인 노력이 부족해서만 생긴다."], 2, 1, "기회의 공정", "같은 시험만이 아니라 출발선의 차이를 보정해야 실질적 기회가 가까워지는지를 묻는 문항이에요.", "형식적 기회와 실질적 기회를 나누어 적는다")
    ],
    "통합사회2·시장경제와 지속가능발전": [
      alt("공공재에 대한 설명으로 가장 적절한 것은?", ["값을 낸 사람만 혜택을 받으므로 시장이 충분히 공급한다.", "대가를 내지 않은 사람도 혜택을 보아 시장에만 맡기면 공급이 부족해질 수 있다.", "공공재는 한 사람이 쓰면 바로 사라진다.", "국방과 가로등은 사적인 소비재다.", "정부 역할은 공공재와 무관하다."], 2, 1, "공공재", "비배제성 때문에 공공재를 시장에만 맡기면 공급이 부족해질 수 있는지를 묻는 문항이에요.", "누가 값을 내지 않고도 혜택을 보는지 표시한다")
    ],
    "통합사회2·세계화와 평화": [
      alt("난민 보호에 대한 설명으로 가장 적절한 것은?", ["국경 안쪽의 문제이므로 국제 기준은 필요 없다.", "박해의 위험과 국제 인권 기준을 함께 보고 보호를 판단한다.", "출신국 경제 수준만으로 자격을 정한다.", "아동의 권리는 심사에서 빼도 된다.", "보호는 정착 지원과 분리되어 있다."], 2, 1, "난민 보호", "난민 보호를 출신국 사정과 국제 인권 기준을 함께 보고 판단하는 문항이에요.", "박해 위험과 적용할 기준을 나누어 적는다"),
      alt("무역 분쟁에 대한 설명으로 가장 적절한 것은?", ["관세는 국내 산업만 보호하고 상대국 피해는 없다.", "보호 조치의 국내 효과와 상대국·국제 규칙의 제약을 함께 봐야 한다.", "분쟁 해결 절차는 주권을 즉시 없앤다.", "소비자 가격은 관세와 무관하다.", "협정은 분쟁과 관계가 없다."], 2, 1, "무역 분쟁", "관세의 국내 보호 효과와 국제 규칙의 제약을 함께 보는 문항이에요.", "국내 효과와 국제 제약을 표에서 나누어 표시한다")
    ],
    "통합사회2·미래와 지속가능한 삶": [
      alt("플랫폼 노동에 대한 설명으로 가장 적절한 것은?", ["유연한 시간이 있으면 보호 제도는 필요 없다.", "소득 기회와 함께 사회 보험·안전의 공백을 봐야 한다.", "알고리즘은 노동 조건과 무관하다.", "미래 세대의 일자리와는 분리된다.", "기술 변화는 계약 방식에 영향을 주지 않는다."], 2, 1, "플랫폼 노동", "플랫폼 노동의 소득 기회와 사회 보험 공백을 함께 보는 지속가능한 삶 문항이에요.", "기회와 보호 공백을 나누어 적는다")
    ],
    "통합과학1·과학의 기초": [
      alt("다음 실험 설계에 대한 설명으로 가장 적절한 것은?", ["여러 변인을 한꺼번에 바꿔야 원인이 분명해진다.", "비교하려는 변인 하나만 바꾸고 나머지는 같게 유지한다.", "대조군은 결과를 흐리므로 두지 않는다.", "측정 횟수는 한 번이면 충분하다.", "가설은 실험 후에 만들어도 된다."], 2, 1, "변인 통제", "원인을 보려는 변인 외에는 조건을 같게 두는 실험 설계 문항이에요.", "독립 변인과 통제할 변인을 나누어 적는다"),
      alt("단위 환산에 대한 설명으로 가장 적절한 것은?", ["1 km는 100 m이다.", "1 m는 100 cm이다.", "1 kg은 10 g이다.", "1 L는 10 mL이다.", "1 cm는 100 mm이다."], 2, 1, "단위 환산", "1 m = 100 cm처럼 단위 관계를 정확히 고르는 과학의 기초 문항이에요.", "기준 단위와 칸의 개수를 적는다"),
      alt("그래프 해석으로 가장 적절한 것은?", ["기울기가 가팔라지면 변화가 느려진다.", "같은 구간에서 기울기가 클수록 변화 속도가 크다.", "축의 눈금이 달라도 기울기 비교는 그대로 가능하다.", "원점을 지나지 않으면 그래프는 쓸모가 없다.", "점 하나만으로 전체 경향을 확정한다."], 2, 1, "그래프의 기울기", "기울기가 클수록 그 구간의 변화 속도가 큰지를 묻는 문항이에요.", "비교할 구간의 축 눈금을 먼저 확인한다"),
      alt("결론을 내리는 태도로 가장 적절한 것은?", ["가설과 다르면 자료를 가설에 맞게 고친다.", "자료가 가설과 다르면 가설을 수정하거나 실험을 다시 설계한다.", "오차는 결론에 포함하지 않는다.", "한 모듈의 결과로 법칙을 확정한다.", "측정 한계는 보고서에 적지 않는다."], 2, 1, "가설과 자료", "자료가 가설과 다를 때 자료를 고치지 않고 가설이나 설계를 다시 보는 문항이에요.", "가설과 어긋난 자료를 표시한다")
    ],
    "통합과학1·물질과 규칙성": [
      alt("이온 결합에 대한 설명으로 가장 적절한 것은?", ["전자를 공유해 분자를 만든다.", "금속 원자끼리 자유 전자를 공유한다.", "전자를 주고받아 양이온과 음이온이 끌어당긴다.", "결합 후에도 전하의 이동은 없다.", "비금속 원소 사이에서만 일어난다."], 3, 1, "이온 결합", "이온 결합이 전자를 주고받아 생긴 양이온과 음이온의 정전기적 끌림인지를 묻는 문항이에요.", "전자의 이동 방향을 표시한다"),
      alt("같은 족 원소에 대한 설명으로 가장 적절한 것은?", ["전자 껍질 수가 같고 원자가 전자 수가 다르다.", "원자가 전자 수가 같아 화학적 성질이 비슷하다.", "원자 번호가 같아 질량이 같다.", "금속성과 비금속성이 주기와 무관하다.", "아래로 갈수록 원자 반지름이 항상 줄어든다."], 2, 1, "같은 족의 성질", "같은 족은 원자가 전자 수가 같아 화학적 성질이 비슷한지를 묻는 문항이에요.", "족과 주기를 표에서 나누어 표시한다"),
      alt("물의 특성에 대한 설명으로 가장 적절한 것은?", ["얼음이 물보다 밀도가 커서 가라앉는다.", "극성 때문에 여러 이온성 물질을 녹이는 용매가 된다.", "수소 결합은 끓는점과 무관하다.", "물은 어떤 물질도 녹이지 못한다.", "고체일 때 부피가 줄어 밀도가 커진다."], 2, 1, "물의 극성", "물이 극성 분자라 여러 이온성 물질을 녹이는지를 묻는 문항이에요.", "분자 구조와 용해 현상을 연결한다")
    ],
    "통합과학1·시스템과 상호작용": [
      alt("판 경계에 대한 설명으로 가장 적절한 것은?", ["판의 내부에서만 지진이 일어난다.", "판이 만나거나 벌어지는 경계에 화산과 지진이 집중될 수 있다.", "모든 경계에서 판이 같은 방향으로 움직인다.", "맨틀 대류는 판 이동과 무관하다.", "경계의 종류와 지형은 관계가 없다."], 2, 1, "판 경계", "화산과 지진이 판이 만나거나 벌어지는 경계에 모일 수 있는지를 묻는 문항이에요.", "경계의 종류와 그곳의 지형을 표시한다"),
      alt("작용 반작용에 대한 설명으로 가장 적절한 것은?", ["두 힘은 같은 물체에 작용한다.", "한 물체가 다른 물체를 밀면 크기가 같고 방향이 반대인 힘을 동시에 받는다.", "반작용은 작용보다 늦게 생긴다.", "정지한 물체에는 반작용이 없다.", "두 힘의 합이 항상 운동 방향이다."], 2, 1, "작용 반작용", "두 물체 사이에 크기가 같고 방향이 반대인 힘이 동시에 작용하는지를 묻는 문항이에요.", "힘을 받는 물체를 서로 다르게 표시한다"),
      alt("생태계 먹이 관계에 대한 설명으로 가장 적절한 것은?", ["생산자가 줄어도 상위 소비자는 영향이 없다.", "한 개체군의 변화가 먹이 그물의 다른 집단으로 퍼질 수 있다.", "에너지는 상위 단계로 갈수록 모두 전달된다.", "분해자는 물질 순환과 무관하다.", "먹이 관계는 한 방향으로만 영향을 준다."], 2, 1, "먹이 그물", "한 개체군의 변화가 먹이 그물의 다른 집단으로 이어질 수 있는지를 묻는 문항이에요.", "영향을 받는 화살표를 따라 표시한다")
    ],
    "통합과학2·변화와 다양성": [
      alt("화석이 알려 주는 것으로 가장 적절한 것은?", ["당시의 기후와 생물은 알 수 없다.", "과거 생물의 모습과 살던 환경을 추정할 수 있다.", "모든 생물은 화석으로 남는다.", "지층 순서와 화석은 무관하다.", "화석은 현재 생물과 비교할 수 없다."], 2, 1, "화석의 해석", "화석으로 과거 생물과 그 환경을 추정할 수 있는지를 묻는 문항이에요.", "화석의 형태와 발견된 지층을 함께 표시한다"),
      alt("유전적 다양성에 대한 설명으로 가장 적절한 것은?", ["개체 차이가 없으면 환경 변화에 더 잘 견딘다.", "집단 안의 유전적 차이가 줄어들면 환경 변화에 취약해질 수 있다.", "돌연변이는 다양성과 무관하다.", "모든 형질은 환경만으로 결정된다.", "다양성은 멸종 위험과 관계가 없다."], 2, 1, "유전적 다양성", "집단 안 유전적 차이가 줄면 환경 변화에 약해질 수 있는지를 묻는 문항이에요.", "다양성이 줄어든 집단과 환경 변화를 연결한다"),
      alt("산화 환원에 대한 설명으로 가장 적절한 것은?", ["산소가 빠지는 반응만 산화다.", "전자를 잃는 쪽과 얻는 쪽이 함께 일어난다.", "환원은 항상 연소를 뜻한다.", "전자 이동은 전하와 무관하다.", "금속의 부식은 산화 환원이 아니다."], 2, 1, "산화 환원", "전자를 잃는 산화와 얻는 환원이 함께 일어나는지를 묻는 문항이에요.", "전자의 이동 방향을 표시한다")
    ],
    "통합과학2·환경과 에너지": [
      alt("온실 효과에 대한 설명으로 가장 적절한 것은?", ["대기가 없으면 지표면 온도는 그대로다.", "일부 기체가 지구가 방출하는 복사 에너지를 잡아 온도를 높이는 데 관여한다.", "온실 기체는 태양 빛을 모두 반사한다.", "이산화 탄소 증가는 복사 에너지와 무관하다.", "온실 효과 자체는 생명 유지와 전혀 관련이 없다."], 2, 1, "온실 효과", "일부 기체가 지구 복사 에너지를 붙잡아 온도 유지와 상승에 관여하는지를 묻는 문항이에요.", "들어오는 에너지와 나가는 에너지를 나누어 표시한다"),
      alt("전력 수송에 대한 설명으로 가장 적절한 것은?", ["같은 전력이면 전압이 낮을수록 송전 손실이 줄어든다.", "높은 전압으로 보내면 같은 전력에서 전류가 줄어 손실을 낮출 수 있다.", "변압기는 전력 수송과 무관하다.", "전선의 저항은 손실에 영향을 주지 않는다.", "발전소와 가정의 전압은 항상 같다."], 2, 1, "송전 전압", "높은 전압으로 보내 전류를 줄이면 송전 손실을 낮출 수 있는지를 묻는 문항이에요.", "전력, 전압, 전류의 관계를 식으로 적는다"),
      alt("재생 에너지에 대한 설명으로 가장 적절한 것은?", ["날씨와 무관하게 출력이 일정하다.", "자원은 다시 쓸 수 있지만 날씨와 설치 장소의 제약을 함께 봐야 한다.", "생산 과정에서 설비는 필요하지 않다.", "전력망과 연결할 수 없다.", "모든 지역에서 같은 효율이 난다."], 2, 1, "재생 에너지의 제약", "재생 에너지원이 반복해서 쓰이지만 날씨와 입지의 제약이 있는지를 묻는 문항이에요.", "장점과 출력 변동 요인을 나누어 적는다")
    ],
    "통합과학2·과학과 미래사회": [
      alt("인공지능 진단에 대한 설명으로 가장 적절한 것은?", ["학습 자료의 편향은 결과에 남지 않는다.", "학습 자료의 범위와 오류 가능성을 함께 밝혀야 한다.", "의사가 결과를 검토할 필요가 없다.", "같은 모델은 어떤 집단에서도 같은 정확도다.", "개인 정보는 학습과 무관하다."], 2, 1, "인공지능 진단의 한계", "진단 모델이 학습 자료의 범위와 편향에 기대는지를 묻는 문항이에요.", "모델의 입력 자료와 빠질 수 있는 집단을 표시한다"),
      alt("유전자 가위에 대한 설명으로 가장 적절한 것은?", ["원하는 서열만 바꾸므로 다른 영향은 없다.", "표적 서열을 고칠 수 있지만 다른 부위 변화와 윤리 문제를 함께 봐야 한다.", "치료는 즉시 확정된 결과만 만든다.", "생식 세포와 체세포의 문제는 같다.", "규제 없이 모든 수정이 허용된다."], 2, 1, "유전자 가위의 한계", "표적 수정이 가능해도 표적 밖 변화와 윤리 문제를 함께 보는 문항이에요.", "의도한 수정과 확인해야 할 위험을 나누어 적는다"),
      alt("기후 예측 자료에 대한 설명으로 가장 적절한 것은?", ["시나리오가 달라도 결과는 하나로 모인다.", "배출 가정이 달라지면 미래 경로도 달라지므로 가정을 함께 읽어야 한다.", "과거 자료는 모델 검증에 쓸 수 없다.", "불확실성 범위는 표시하지 않아도 된다.", "지역 차이는 전 지구 평균과 항상 같다."], 2, 1, "기후 시나리오", "배출 가정이 달라지면 기후 예측 경로도 달라지는지를 묻는 문항이에요.", "시나리오 이름과 그 배출 가정을 먼저 표시한다")
    ]
  };

  function wrongNotePack(area, slot = 0) {
    const fallback = noteItem({
      stem: "다음 자료에 대한 설명으로 가장 적절한 것은?",
      choices: ["자료의 핵심과 반대된다.", "자료의 일부만 맞아 전체가 틀리다.", "자료의 핵심 조건과 일치한다.", "자료와 다른 대상을 말한다.", "자료의 조건을 빠뜨렸다."],
      answer: 3,
      trap: 1,
      point: "자료의 핵심 조건",
      core: "자료의 핵심 조건과 선지가 같은 방향인지 확인하는 문항이에요.",
      steps: ["자료의 핵심 조건을 표시한다", "조건과 다른 선지를 지운다", "조건과 일치하는 선지를 고른다"],
      checks: ["핵심 조건을 표시했는지 확인한다", "다른 선지를 지웠는지 확인한다", "정답이 조건과 같은지 확인한다"]
    });
    const base = wrongNoteBank[area] || fallback;
    const more = wrongNoteMore[area] || [];
    const list = [base, ...more];
    const index = Math.max(0, Math.min(Number(slot) || 0, list.length - 1));
    return list[index];
  }

  function getWrongNoteItems(month, subject) {
    const questions = getSubjectQuestions(month, subject);
    const lookup = areaLookup(month, subject);

    const slotByNo = new Map();
    const seenInArea = new Map();
    questions.forEach((question) => {
      const used = seenInArea.get(question.area) || 0;
      slotByNo.set(question.no, used);
      seenInArea.set(question.area, used + 1);
    });

    return questions
      .map((question, index) => {
        if (question.correct) return null;
        const area = lookup.get(question.area);
        const pack = wrongNotePack(question.area, slotByNo.get(question.no));
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
          point: pack.point,
          core: pack.core,
          steps: pack.steps,
          checksText: checks,
          memos: useShort ? pack.short.memos : pack.memos
        };
      })
      .filter(Boolean);
  }

  function wrongNoteMemo(item) {
    const memos = item.memos || wrongNotePack(item.area, 0).memos;
    return memos[item.cause] || memos["개념 부족"];
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
