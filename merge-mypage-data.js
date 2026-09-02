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
          ["수학", "공통수학1", 4, 88, 68.2, "A", 2, 284],
          ["영어", "공통영어1", 4, 94, 72.1, "A", 1, 284],
          ["사회", "통합사회1", 3, 86, 70.5, "B", 2, 284],
          ["과학", "통합과학1", 3, 90, 69.8, "A", 1, 284]
        ]
      },
      {
        title: "1학년 2학기",
        rows: [
          ["국어", "공통국어2", 4, 90, 73.2, "A", 2, 284],
          ["수학", "공통수학2", 4, 85, 67.5, "A", 2, 284],
          ["영어", "공통영어2", 4, 91, 71.8, "A", 1, 284],
          ["사회", "통합사회2", 3, 83, 69.4, "B", 3, 284],
          ["과학", "통합과학2", 3, 88, 68.9, "A", 2, 284]
        ]
      }
    ],
    2: [
      {
        title: "2학년 1학기",
        rows: [
          ["국어", "문학1", 4, 89, 71.3, "A", 2, 276],
          ["수학", "수학Ⅰ", 4, 86, 65.8, "A", 3, 276],
          ["영어", "영어Ⅰ", 4, 93, 70.4, "A", 1, 276],
          ["사회", "사회·문화", 3, 84, 68.7, "B", 2, 276],
          ["과학", "물리학Ⅰ", 3, 87, 66.2, "A", 2, 276]
        ]
      },
      {
        title: "2학년 2학기",
        rows: [
          ["국어", "문학2", 4, 87, 70.1, "A", 2, 276],
          ["수학", "수학Ⅱ", 4, 83, 64.9, "A", 3, 276],
          ["영어", "영어Ⅱ", 4, 90, 69.6, "A", 2, 276],
          ["사회", "정치와법", 3, 82, 67.8, "B", 3, 276],
          ["과학", "화학Ⅰ", 3, 85, 65.5, "A", 2, 276]
        ]
      }
    ],
    3: [
      {
        title: "3학년 1학기",
        rows: [
          ["국어", "화법과작문", 4, 91, 72.8, "A", 2, 268],
          ["수학", "미적분", 4, 84, 63.5, "A", 3, 268],
          ["영어", "영어Ⅰ", 4, 92, 71.2, "A", 1, 268],
          ["사회", "생활과윤리", 3, 88, 69.1, "A", 2, 268],
          ["과학", "화학Ⅱ", 3, 86, 64.7, "A", 2, 268]
        ]
      },
      {
        title: "3학년 2학기",
        rows: [
          ["국어", "독서", 4, 89, 71.6, "A", 2, 268],
          ["수학", "확률과통계", 4, 82, 62.8, "A", 3, 268],
          ["영어", "영어Ⅱ", 4, 90, 70.3, "A", 2, 268],
          ["사회", "윤리와사상", 3, 86, 68.4, "B", 2, 268],
          ["과학", "생명과학Ⅱ", 3, 84, 63.9, "A", 3, 268]
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
    9: "평가원",
    10: "전대실모"
  };

  const mockSamples = {
    3: [
      ["국어", "국어", 84, 125, 88, 2],
      ["수학", "수학", 88, 130, 92, 2],
      ["영어", "영어", 89, "-", "-", 2],
      ["한국사", "한국사", 46, "-", "-", 1],
      ["탐구", "통합사회", 42, 64, 90, 3],
      ["탐구", "통합과학", 45, 68, 93, 2]
    ],
    4: [
      ["국어", "국어", 87, 129, 90, 2],
      ["수학", "수학", 90, 133, 94, 1],
      ["영어", "영어", 88, "-", "-", 2],
      ["한국사", "한국사", 47, "-", "-", 1],
      ["탐구", "통합사회", 43, 65, 91, 2],
      ["탐구", "통합과학", 46, 69, 95, 1]
    ],
    5: [
      ["국어", "국어", 85, 127, 89, 2],
      ["수학", "수학", 91, 134, 95, 1],
      ["영어", "영어", 90, "-", "-", 1],
      ["한국사", "한국사", 47, "-", "-", 1],
      ["탐구", "통합사회", 44, 66, 92, 2],
      ["탐구", "통합과학", 48, 71, 96, 1]
    ],
    6: [
      ["국어", "국어", 86, 128, 91, 2],
      ["수학", "수학", 92, 135, 96, 1],
      ["영어", "영어", 91, "-", "-", 1],
      ["한국사", "한국사", 48, "-", "-", 1],
      ["탐구", "통합사회", 44, 67, 94, 2],
      ["탐구", "통합과학", 47, 70, 97, 1]
    ],
    7: [
      ["국어", "국어", 83, 124, 87, 3],
      ["수학", "수학", 89, 132, 93, 2],
      ["영어", "영어", 87, "-", "-", 2],
      ["한국사", "한국사", 45, "-", "-", 1],
      ["탐구", "통합사회", 41, 63, 89, 3],
      ["탐구", "통합과학", 44, 67, 92, 2]
    ],
    8: [
      ["국어", "국어", 88, 131, 92, 2],
      ["수학", "수학", 93, 136, 97, 1],
      ["영어", "영어", 92, "-", "-", 1],
      ["한국사", "한국사", 48, "-", "-", 1],
      ["탐구", "통합사회", 45, 68, 93, 2],
      ["탐구", "통합과학", 49, 72, 98, 1]
    ],
    9: [
      ["국어", "국어", 84, 126, 88, 2],
      ["수학", "수학", 90, 134, 95, 1],
      ["영어", "영어", 89, "-", "-", 2],
      ["한국사", "한국사", 46, "-", "-", 1],
      ["탐구", "통합사회", 43, 66, 91, 2],
      ["탐구", "통합과학", 46, 69, 94, 2]
    ],
    10: [
      ["국어", "국어", 87, 130, 91, 2],
      ["수학", "수학", 94, 137, 98, 1],
      ["영어", "영어", 93, "-", "-", 1],
      ["한국사", "한국사", 49, "-", "-", 1],
      ["탐구", "통합사회", 46, 69, 95, 1],
      ["탐구", "통합과학", 50, 73, 99, 1]
    ]
  };

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

  function schoolTrendSeries(subject) {
    const courses = schoolCourseRows();
    const matched =
      !subject || subject === "전교과"
        ? courses
        : subject === "주요교과"
          ? courses.filter((row) => schoolMajorSubjects.includes(row.subject))
          : courses.filter((row) => row.subject === subject);
    const semesterTitles = [];
    courses.forEach((row) => {
      if (!semesterTitles.includes(row.title)) semesterTitles.push(row.title);
    });
    return {
      series: semesterTitles.map((title) => ({
        label: title,
        full: title,
        score: schoolWeightedRank(matched.filter((row) => row.title === title))
      }))
    };
  }

  function renderSchoolTrendChart(subject) {
    const { series } = schoolTrendSeries(subject || "전교과");
    return renderSchoolTrend(series, subject || "전교과");
  }

  function renderSchoolTrend(series, subject) {
    const width = 400;
    const height = 200;
    const yMin = 1;
    const yMax = 9;
    const coords = series.map((item, index) => {
      const x = ((index + 0.5) / series.length) * width;
      const y = ((Number(item.score) - yMin) / (yMax - yMin)) * height;
      return { ...item, x, y };
    });
    const line = coords
      .map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(1)},${point.y.toFixed(1)}`)
      .join(" ");
    const last = coords[coords.length - 1];
    const first = coords[0];
    const area = `${line} L${last.x.toFixed(1)},${height} L${first.x.toFixed(1)},${height} Z`;

    return `
      <div class="school-trend-box">
        <div class="trend-mini-chart is-full" role="img" aria-label="${subject || "전교과"} 학기별 등급 추이">
          <div class="trend-mini-y" aria-hidden="true"><span>1.00</span><span>3.00</span><span>5.00</span><span>7.00</span><span>9.00</span></div>
          <div class="trend-mini-plot">
            <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" class="trend-mini-svg" aria-hidden="true">
              <path class="trend-mini-area" d="${area}"></path>
              <path class="trend-mini-line" d="${line}" fill="none"></path>
            </svg>
            <div class="trend-mini-points">
              ${coords
                .map(
                  (point) =>
                    `<i style="left:${((point.x / width) * 100).toFixed(2)}%;top:${((point.y / height) * 100).toFixed(2)}%" title="${point.full} ${formatSchoolRank(point.score)}등급"><b>${formatSchoolRank(point.score)}</b></i>`
                )
                .join("")}
            </div>
          </div>
          <div class="trend-mini-x" aria-hidden="true">
            ${series.map((item) => `<span>${item.label}</span>`).join("")}
          </div>
        </div>
      </div>`;
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
          <article class="exam-summary-card">
            <span>전교과 평균</span>
            <strong>${formatSchoolRank(allRank)}<small>등급</small></strong>
          </article>
          <article class="exam-summary-card">
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
      </section>
      <section class="school-analysis-block">
        <div class="diag-result-head">
          <h2 class="diag-section-title">학기별 등급 추이</h2>
        </div>
        <div class="content-tabs" role="tablist" aria-label="학기별 등급 추이 과목">
          <button type="button" class="content-tab active" data-school-trend-subject="전교과" role="tab" aria-selected="true">전교과</button>
          <button type="button" class="content-tab" data-school-trend-subject="주요교과" role="tab" aria-selected="false">주요교과</button>
          <button type="button" class="content-tab" data-school-trend-subject="국어" role="tab" aria-selected="false">국어</button>
          <button type="button" class="content-tab" data-school-trend-subject="영어" role="tab" aria-selected="false">영어</button>
          <button type="button" class="content-tab" data-school-trend-subject="수학" role="tab" aria-selected="false">수학</button>
          <button type="button" class="content-tab" data-school-trend-subject="사회" role="tab" aria-selected="false">사회</button>
          <button type="button" class="content-tab" data-school-trend-subject="과학" role="tab" aria-selected="false">과학</button>
        </div>
        <div data-school-trend-chart>${renderSchoolTrendChart("전교과")}</div>
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
    9: "2026. 09. 02",
    10: "2026. 10. 14"
  };

  function mockAveragePercentile(month) {
    const values = (mockSamples[month] || [])
      .map((row) => row[4])
      .filter((value) => typeof value === "number");

    if (!values.length) return "-";
    return (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1);
  }

  function renderTakenExams({ withScore = true } = {}) {
    const months = Object.keys(mockMeta);

    return `
      <div class="taken-exam-grid">
        ${months
          .map((month, index) => {
            const name = mockMeta[month];
            const foot = withScore
              ? `<span class="taken-exam-foot">
                  <b>${mockAveragePercentile(month)}<small>점</small></b>
                </span>`
              : "";
            return `
              <article class="taken-exam-cell${index === 0 ? " active" : ""}" data-taken-exam="${month}" aria-selected="${index === 0 ? "true" : "false"}">
                <time datetime="2026-${String(month).padStart(2, "0")}">${mockExamDates[month]}</time>
                <strong>${month}월 ${name}</strong>
                ${foot}
              </article>`;
          })
          .join("")}
      </div>`;
  }

  function compareScores(mine) {
    const value = Number(mine);
    if (!Number.isFinite(value)) return { mine: "-", avg: "-", top: "-" };
    return {
      mine: Number.isInteger(value) ? value : Number(value.toFixed(1)),
      avg: Math.max(0, Math.round(value * 0.87)),
      top: Math.min(100, Math.round(value * 1.04))
    };
  }

  function getPercentileGroups(month) {
    const rows = mockSamples[month] || [];
    const pick = (name) => {
      const row = rows.find((item) => item[1] === name);
      return typeof row?.[4] === "number" ? row[4] : null;
    };

    const korean = pick("국어");
    const math = pick("수학");
    const social = pick("통합사회");
    const science = pick("통합과학");
    const values = [korean, math, social, science].filter((value) => value != null);
    const overall = values.length
      ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1))
      : 0;

    return {
      overall,
      groups: [
        { name: "국수탐 평균", highlight: true, ...compareScores(overall) },
        { name: "국어", ...compareScores(korean) },
        { name: "수학", ...compareScores(math) },
        { name: "통합사회", ...compareScores(social) },
        { name: "통합과학", ...compareScores(science) }
      ]
    };
  }

  function renderPercentileReport(month) {
    const data = getPercentileGroups(month);
    const bar = (cls, value) => `
      <span class="pct-bar ${cls}" style="--v:${typeof value === "number" ? value : 0}">
        <b>${value}</b>
        <i></i>
      </span>`;

    return `
      <div class="pct-meta pct-meta--legend">
        <div class="pct-legend" aria-label="백분위 비교 범례">
          <span class="is-mine">나</span>
          <span class="is-avg">평균</span>
          <span class="is-top">상위 30%</span>
        </div>
      </div>
      <div class="pct-chart" role="img" aria-label="과목별 백분위 비교">
        <div class="pct-y" aria-hidden="true"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
        ${data.groups
          .map(
            (group) => `
          <div class="pct-group${group.highlight ? " is-overall" : ""}">
            <div class="pct-bars">
              ${bar("is-mine", group.mine)}
              ${bar("is-avg", group.avg)}
              ${bar("is-top", group.top)}
            </div>
            <em>${group.name}</em>
          </div>`
          )
          .join("")}
      </div>`;
  }

  function getTrendItems(subject) {
    const months = Object.keys(mockMeta);
    return months.map((month) => {
      let score;
      if (!subject) {
        score = Number(mockAveragePercentile(month));
      } else {
        const row = getSubjectRow(month, subject);
        score = typeof row?.[4] === "number" ? row[4] : Number(row?.[2] || 0);
      }
      return {
        label: `${month}월 ${mockMeta[month]}`,
        score
      };
    });
  }

  function renderTrendChart({ showTitle = false, variant = "mini", items } = {}) {
    const series = items || getTrendItems();
    const width = 400;
    const height = 200;
    const isFull = variant === "full";
    const isSubject = variant === "subject";
    const showValues = isFull || isSubject;
    const coords = series.map((item, index) => {
      const x = ((index + 0.5) / series.length) * width;
      const y = height - (Number(item.score) / 100) * height;
      return { ...item, x, y };
    });
    const line = coords
      .map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(1)},${point.y.toFixed(1)}`)
      .join(" ");
    const last = coords[coords.length - 1];
    const first = coords[0];
    const area = `${line} L${last.x.toFixed(1)},${height} L${first.x.toFixed(1)},${height} Z`;

    return `
      ${showTitle ? `<div class="pct-meta"><strong class="trend-mini-title">백분위</strong></div>` : ""}
      <div class="trend-mini-chart${isFull ? " is-full" : ""}${isSubject ? " is-subject" : ""}" role="img" aria-label="응시 시험 성적 추이">
        <div class="trend-mini-y" aria-hidden="true"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
        <div class="trend-mini-plot">
          <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" class="trend-mini-svg" aria-hidden="true">
            <path class="trend-mini-area" d="${area}"></path>
            <path class="trend-mini-line" d="${line}" fill="none"></path>
          </svg>
          <div class="trend-mini-points">
            ${coords
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
    return renderTrendChart({ showTitle: true, variant: "mini" });
  }

  function renderTrendFull() {
    return renderTrendChart({ showTitle: false, variant: "full" });
  }

  function renderTrendSubject(subject) {
    const isOverall = !subject || subject === "전체" || subject === "국수탐";
    return renderTrendChart({
      showTitle: false,
      variant: "full",
      items: getTrendItems(isOverall ? null : subject)
    });
  }

  function formatExamScore(value) {
    if (value == null || value === "-") return "-";
    const n = Number(value);
    if (!Number.isFinite(n)) return "-";
    return Number.isInteger(n) ? String(n) : n.toFixed(1);
  }

  function numericCell(row, index) {
    const value = row?.[index];
    return typeof value === "number" ? value : null;
  }

  function renderTrendExamTable() {
    const months = Object.keys(mockMeta);
    const body = months
      .map((month) => {
        const korean = numericCell(getSubjectRow(month, "국어"), 4);
        const math = numericCell(getSubjectRow(month, "수학"), 4);
        const social = numericCell(getSubjectRow(month, "통합사회"), 4);
        const science = numericCell(getSubjectRow(month, "통합과학"), 4);
        const englishGrade = getSubjectRow(month, "영어")?.[5] ?? "-";
        const historyGrade = getSubjectRow(month, "한국사")?.[5] ?? "-";
        const inquiry =
          social != null && science != null ? Number(((social + science) / 2).toFixed(1)) : null;
        const sum =
          korean != null && math != null && inquiry != null
            ? Number((korean + math + inquiry).toFixed(1))
            : null;
        const avg = sum != null ? Number((sum / 3).toFixed(1)) : null;

        return `
          <tr>
            <th>${mockExamDates[month] || "-"}</th>
            <th>${month}월 ${mockMeta[month]}</th>
            <td>${formatExamScore(korean)}</td>
            <td>${formatExamScore(math)}</td>
            <td>${formatExamScore(inquiry)}</td>
            <td class="is-strong">${formatExamScore(sum)}</td>
            <td class="is-strong">${formatExamScore(avg)}</td>
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
              <th rowspan="2" class="diag-col-label">응시일</th>
              <th rowspan="2" class="diag-col-label">시험명</th>
              <th colspan="5" class="cat-stress">백분위 기준</th>
              <th colspan="2" class="cat-motive">등급 기준</th>
            </tr>
            <tr>
              <th class="cat-stress">국어</th>
              <th class="cat-stress">수학</th>
              <th class="cat-stress">탐구 평균</th>
              <th class="cat-stress">국수탐 합</th>
              <th class="cat-stress">국수탐 평균</th>
              <th class="cat-motive">영어</th>
              <th class="cat-motive">한국사</th>
            </tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </div>`;
  }

  function accuracyOf(row) {
    const name = row[1];
    const raw = Number(row[2]);
    const percentile = row[4];
    let mine;

    if (typeof percentile === "number") {
      mine = Math.max(0, Math.min(100, Math.round(percentile * 0.93)));
    } else if (name === "한국사") {
      mine = Math.max(0, Math.min(100, Math.round(raw * 2)));
    } else {
      mine = Math.max(0, Math.min(100, raw));
    }

    return {
      mine,
      avg: Math.max(0, Math.round(mine * 0.87)),
      top: Math.min(100, Math.round(mine * 1.08))
    };
  }

  function renderAccuracyCompare(month) {
    const rows = mockSamples[month] || [];
    const order = ["국어", "수학", "영어", "한국사", "통합사회", "통합과학"];
    const subjects = order
      .map((name) => {
        const row = rows.find((item) => item[1] === name);
        return row ? { name, ...accuracyOf(row) } : null;
      })
      .filter(Boolean);

    const line = (cls, label, value) => `
      <div class="acc-row ${cls}">
        <b>${label}</b>
        <span class="acc-track"><i style="width:${value}%"></i></span>
        <em>${value}%</em>
      </div>`;

    return `
      <div class="acc-grid">
        ${subjects
          .map(
            (subject) => `
          <article class="acc-card">
            <h3>${subject.name}</h3>
            ${line("is-mine", "나", subject.mine)}
            ${line("is-avg", "평균", subject.avg)}
            ${line("is-top", "상위 30%", subject.top)}
          </article>`
          )
          .join("")}
      </div>`;
  }

  const weaknessByMonth = {
    3: { area: "국어 독서", wrong: 3, lost: 8 },
    4: { area: "통합과학 시스템", wrong: 4, lost: 10 },
    5: { area: "영어 빈칸 추론", wrong: 3, lost: 8 },
    6: { area: "국어 독서", wrong: 4, lost: 10 },
    7: { area: "국어 독서", wrong: 3, lost: 8 },
    8: { area: "통합과학 변화와 다양성", wrong: 3, lost: 7 },
    9: { area: "국어 독서", wrong: 4, lost: 10 },
    10: { area: "수학 미적분", wrong: 3, lost: 8 }
  };

  function formatPoint(value) {
    const n = Math.abs(Number(value));
    if (!Number.isFinite(n)) return "-";
    return Number.isInteger(n) ? String(n) : n.toFixed(1);
  }

  function subjectPercentile(month, name) {
    const row = (mockSamples[month] || []).find((item) => item[1] === name);
    return typeof row?.[4] === "number" ? row[4] : null;
  }

  function previousExamMonth(month) {
    const months = Object.keys(mockMeta);
    const index = months.indexOf(String(month));
    return index > 0 ? months[index - 1] : null;
  }

  function renderScoreSummary(month) {
    const names = ["국어", "수학", "통합사회", "통합과학"];
    const prev = previousExamMonth(month);
    const scores = names
      .map((name) => ({ name, value: subjectPercentile(month, name) }))
      .filter((item) => item.value != null);

    const strongest = [...scores].sort((a, b) => b.value - a.value)[0];
    const weakest = [...scores].sort((a, b) => a.value - b.value)[0];

    const currentAvg = Number(mockAveragePercentile(month));
    let changeText = "첫 응시 시험 결과예요.";
    if (String(month) === "3") {
      changeText = "직전 시험보다 3.8점 올랐어요.";
    } else if (prev) {
      const diff = Number((currentAvg - Number(mockAveragePercentile(prev))).toFixed(1));
      changeText = `직전 시험보다 ${formatPoint(diff)}점 ${diff >= 0 ? "올랐어요." : "낮아졌어요."}`;
    }

    const accuracy = averageAccuracy(month);
    let positionText = "비교할 정답률이 없어요.";
    if (accuracy) {
      const gap = accuracy.mine - accuracy.avg;
      if (gap === 0) positionText = "평균과 같아요.";
      else positionText = `평균보다 ${formatPoint(gap)}% ${gap > 0 ? "높아요." : "낮아요."}`;
    }

    const cards = [
      { type: "change", label: "성적 변화", title: "국수탐 평균", text: changeText },
      { type: "position", label: "성적 위치", title: "전체 정답률", text: positionText },
      {
        type: "strength",
        label: "강점 과목",
        title: strongest?.name || "-",
        text: strongest
          ? `백분위 ${formatPoint(strongest.value)}점으로 가장 높아요.`
          : "비교할 과목 성적이 없어요."
      },
      {
        type: "weak",
        label: "약점 과목",
        title: weakest?.name || "-",
        text: weakest
          ? `백분위 ${formatPoint(weakest.value)}점으로 가장 낮아요.`
          : "비교할 과목 성적이 없어요."
      }
    ];

    return `
      <div class="summary-grid">
        ${cards
          .map(
            (card) => `
          <article class="summary-card is-${card.type}">
            <span>${card.label}</span>
            <strong>${card.title}</strong>
            <p>${card.text}</p>
          </article>`
          )
          .join("")}
      </div>`;
  }

  function getSubjectRow(month, name) {
    return (mockSamples[month] || []).find((item) => item[1] === name) || null;
  }

  const subjectOrder = ["국어", "수학", "영어", "한국사", "통합사회", "통합과학"];

  function subjectChangeHtml(month, subject) {
    const row = getSubjectRow(month, subject);
    if (!row) return `<span class="is-same">—</span>`;

    const prev = previousExamMonth(month);
    if (String(month) === "3") {
      return `<span class="is-up">▲ 2</span>`;
    }
    if (!prev) return `<span class="is-same">—</span>`;

    const prevRow = getSubjectRow(prev, subject);
    if (!prevRow) return `<span class="is-same">—</span>`;

    const current = typeof row[4] === "number" ? row[4] : Number(row[2]);
    const before = typeof prevRow[4] === "number" ? prevRow[4] : Number(prevRow[2]);
    const diff = Number(current) - Number(before);
    if (!Number.isFinite(diff)) return `<span class="is-same">—</span>`;
    if (diff > 0) return `<span class="is-up">▲ ${formatPoint(diff)}</span>`;
    if (diff < 0) return `<span class="is-down">▼ ${formatPoint(diff)}</span>`;
    return `<span class="is-same">■ 0</span>`;
  }

  function subjectOverviewCells(month, subject) {
    const row = getSubjectRow(month, subject);
    if (!row) return null;

    return {
      area: row[0],
      name: row[1],
      raw: row[2],
      standard: row[3] === "-" || row[3] == null ? "-" : row[3],
      percentile: typeof row[4] === "number" ? row[4] : "-",
      grade: row[5],
      change: subjectChangeHtml(month, subject)
    };
  }

  function renderSubjectOverview(month, subject) {
    const isOverall = !subject || subject === "전체";
    const names = isOverall ? subjectOrder : [subject];
    const rows = names
      .map((name) => {
        const item = subjectOverviewCells(month, name);
        if (!item) return "";
        return `
          <tr>
            <th>${item.area}</th>
            <td>${item.name}</td>
            <td>${item.raw}</td>
            <td>${item.standard}</td>
            <td>${item.percentile}</td>
            <td>${item.grade}</td>
            <td>${item.change}</td>
          </tr>`;
      })
      .join("");

    if (!rows) return "";

    return `
      <div class="diag-table-scroll subject-overview">
        <table class="diag-table diag-table-define">
          <thead>
            <tr>
              <th>영역</th>
              <th>과목</th>
              <th>원점수</th>
              <th>표준점수</th>
              <th>백분위</th>
              <th>등급</th>
              <th>직전 시험 대비</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  const subjectAreaMap = {
    국어: [
      ["독서·인문", 5, 4, 61, 78],
      ["독서·사회", 5, 3, 64, 80],
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
      ["수와 연산", 3, 3, 82, 94],
      ["방정식", 3, 3, 78, 91],
      ["부등식", 3, 2, 73, 87],
      ["함수", 3, 3, 76, 90],
      ["도형과 측정", 3, 2, 68, 84],
      ["확률", 3, 3, 72, 87],
      ["통계", 3, 2, 70, 85],
      ["규칙성", 3, 2, 69, 84],
      ["문제 해결", 3, 2, 65, 81],
      ["추론", 3, 2, 67, 83]
    ],
    영어: [
      ["듣기", 5, 5, 88, 97],
      ["목적·심경", 4, 4, 84, 94],
      ["대의 파악", 5, 4, 81, 92],
      ["세부 정보", 4, 4, 79, 90],
      ["어법", 4, 3, 72, 86],
      ["어휘", 5, 4, 74, 87],
      ["빈칸 추론", 5, 4, 70, 85],
      ["순서·삽입", 4, 3, 68, 83],
      ["요약문", 4, 3, 73, 86],
      ["장문 독해", 5, 4, 76, 88]
    ],
    한국사: [
      ["선사·고대", 2, 2, 86, 96],
      ["고려", 2, 2, 83, 94],
      ["조선 전기", 2, 2, 82, 93],
      ["조선 후기", 2, 2, 80, 92],
      ["개항기", 2, 2, 78, 90],
      ["일제강점기", 2, 2, 81, 92],
      ["대한민국 수립", 2, 2, 79, 91],
      ["민주주의 발전", 2, 2, 76, 88],
      ["경제·사회 변화", 2, 2, 77, 89],
      ["자료 해석", 2, 2, 74, 87]
    ],
    통합사회: [
      ["통합적 관점", 3, 3, 81, 93],
      ["인간과 공동체", 3, 3, 76, 89],
      ["문화와 다양성", 3, 2, 72, 86],
      ["생활공간과 사회", 3, 2, 70, 85],
      ["인권과 헌법", 3, 3, 78, 90],
      ["시장과 경제", 3, 2, 69, 84],
      ["사회 정의", 3, 2, 73, 87],
      ["세계화와 평화", 3, 2, 68, 83],
      ["환경과 지속가능성", 3, 3, 75, 88],
      ["미래와 변화", 3, 2, 67, 82]
    ],
    통합과학: [
      ["물질의 규칙성", 3, 3, 77, 90],
      ["자연의 구성 물질", 3, 2, 73, 87],
      ["역학적 시스템", 3, 3, 75, 89],
      ["지구 시스템", 3, 2, 72, 86],
      ["생명 시스템", 3, 3, 76, 90],
      ["화학 변화", 3, 2, 69, 84],
      ["생물 다양성", 3, 2, 67, 82],
      ["생태계와 환경", 3, 2, 70, 85],
      ["에너지 전환", 3, 2, 68, 83],
      ["과학과 미래 사회", 3, 2, 66, 81]
    ]
  };

  const subjectActionMap = {
    국어: ["정보 확인", "조건 해석", "관계 파악", "추론", "비판·평가"],
    수학: ["개념 확인", "조건 해석", "관계 파악", "수식화", "계산", "경우 분류", "추론"],
    영어: ["정보 확인", "맥락 파악", "관계 파악", "추론", "어휘 적용"],
    한국사: ["정보 확인", "시대 판단", "자료 해석", "관계 파악", "추론"],
    통합사회: ["개념 확인", "자료 해석", "관계 파악", "비판·평가", "추론"],
    통합과학: ["개념 확인", "자료 해석", "관계 파악", "계산", "추론"]
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

  function averageAccuracy(month) {
    const rows = mockSamples[month] || [];
    if (!rows.length) return null;
    const accs = rows.map(accuracyOf);
    const avgOf = (key) => Math.round(accs.reduce((sum, item) => sum + item[key], 0) / accs.length);
    return { mine: avgOf("mine"), avg: avgOf("avg"), top: avgOf("top") };
  }

  function renderSubjectAccuracy(month, subject) {
    const scores =
      !subject || subject === "전체"
        ? averageAccuracy(month)
        : (() => {
            const row = getSubjectRow(month, subject);
            return row ? accuracyOf(row) : null;
          })();
    if (!scores) return "";

    const { mine, avg, top } = scores;
    const bar = (cls, value, label) => `
      <div class="pct-group">
        <div class="pct-bars">
          <span class="pct-bar ${cls}" style="--v:${value}">
            <b>${value}%</b>
            <i></i>
          </span>
        </div>
        <em>${label}</em>
      </div>`;

    return `
      ${subjectAccuracyLegend("정답률 비교 범례")}
      <div class="pct-chart pct-chart--triple" role="img" aria-label="${!subject || subject === "전체" ? "전체" : subject} 정답률 비교">
        <div class="pct-y" aria-hidden="true"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
        ${bar("is-mine", mine, "나")}
        ${bar("is-avg", avg, "평균")}
        ${bar("is-top", top, "상위 30%")}
      </div>`;
  }

  function getSubjectAreaRows(month, subject) {
    const base = subjectAreaMap[subject] || [];
    const examIndex = Math.max(0, Object.keys(mockMeta).indexOf(String(month)));

    return base.map(([area, total, correct, average, top], areaIndex) => {
      if (examIndex === 0) {
        return {
          area,
          total,
          correct,
          avg: average,
          top,
          mine: Math.round((correct / total) * 100)
        };
      }

      const adjustedTotal = Math.max(1, total - ((examIndex + areaIndex) % 2));
      const adjustedRate = Math.max(
        0,
        Math.min(1, correct / total + (examIndex - 2) * 0.035 + ((areaIndex % 3) - 1) * 0.025)
      );
      const adjustedCorrect = Math.min(adjustedTotal, Math.max(0, Math.round(adjustedTotal * adjustedRate)));

      return {
        area,
        total: adjustedTotal,
        correct: adjustedCorrect,
        avg: average,
        top,
        mine: Math.round((adjustedCorrect / adjustedTotal) * 100)
      };
    });
  }

  function objectParticle(word) {
    const last = word.charCodeAt(word.length - 1);
    if (last < 0xac00 || last > 0xd7a3) return "를";
    return (last - 0xac00) % 28 === 0 ? "를" : "을";
  }

  function subjectParticle(word) {
    const last = word.charCodeAt(word.length - 1);
    if (last < 0xac00 || last > 0xd7a3) return "가";
    return (last - 0xac00) % 28 === 0 ? "가" : "이";
  }

  function renderStrategySummary(subject, month) {
    const exam = month || "3";
    const name = subject && subject !== "전체" ? subject : "국어";
    const weakest = [...getSubjectAreaRows(exam, name)].sort(
      (a, b) => a.mine - a.avg - (b.mine - b.avg) || a.mine - b.mine
    )[0];
    const focus = weakest?.area || name;

    return `
      <strong>지금은 <em>${focus}</em>${objectParticle(focus)} 먼저 보완할 때예요.</strong>
      <p>선택한 시험의 ${name} 정답률을 평균과 비교하고, 반복 오답을 함께 분석했습니다.</p>`;
  }

  const strategySubjects = ["국어", "영어", "한국사", "수학", "통합사회", "통합과학"];
  const strategyTags = ["우선 보완", "개념 점검", "유형 훈련", "실전 점검", "유지 훈련", "균형 유지"];
  const strategyShares = [26, 22, 18, 14, 12, 8];

  function strategyTagTier(tag) {
    if (tag.includes("보완")) return "is-reach";
    if (tag.includes("점검")) return "is-fit";
    return "is-safe";
  }

  function weakestArea(month, name) {
    return [...getSubjectAreaRows(month, name)].sort(
      (a, b) => a.mine - a.avg - (b.mine - b.avg) || a.mine - b.mine
    )[0];
  }

  function getAreaRanks(month, subject) {
    return [...getSubjectAreaRows(month, subject)]
      .map((area) => ({
        name: area.area,
        area: area.area,
        subjectName: subject,
        mine: area.mine,
        gap: area.mine - area.avg,
        overall: area.mine
      }))
      .sort((a, b) => a.gap - b.gap || a.mine - b.mine)
      .slice(0, 6);
  }

  function getStrategyRanks(month, subject) {
    if (subject && subject !== "전체") return getAreaRanks(month, subject);

    return strategySubjects
      .map((name) => {
        const area = weakestArea(month, name);
        const row = getSubjectRow(month, name);
        const overall = row ? accuracyOf(row).mine : 100;
        const gap = area ? area.mine - area.avg : 0;
        return {
          name,
          area: area?.area || name,
          subjectName: name,
          mine: area?.mine ?? 0,
          gap,
          overall
        };
      })
      .sort((a, b) => {
        if (a.name === "한국사") return 1;
        if (b.name === "한국사") return -1;
        return a.overall - b.overall || a.gap - b.gap;
      });
  }

  function strategyPriorityText(item) {
    const diff = Math.abs(item.gap);
    const prefix = item.name === item.area ? "" : `${item.area} `;
    if (item.gap < -1) {
      return `${prefix}정답률이 평균보다 ${diff}% 낮아요.`;
    }
    if (item.gap > 1) {
      return `${prefix}정답률이 평균보다 ${diff}% 높아요.`;
    }
    return `${prefix}정답률이 평균과 비슷해요.`;
  }

  function renderStrategyPriority(month, subject) {
    const ranks = getStrategyRanks(month, subject);
    return `
      <ol class="strategy-priority-list">
        ${ranks
          .map(
            (item, index) => `
              <li>
                <em>${index + 1}</em>
                <b>${item.name}</b>
                <p>${strategyPriorityText(item)}</p>
                <span class="adm-tier ${strategyTagTier(strategyTags[index])}">${strategyTags[index]}</span>
              </li>`
          )
          .join("")}
      </ol>`;
  }

  function renderStrategyRatio(month, subject) {
    const ranks = getStrategyRanks(month, subject);
    return `
      <div class="strategy-ratio-list">
        ${ranks
          .map((item, index) => {
            const share = strategyShares[index];
            return `
              <div class="strategy-ratio-row">
                <span>${item.name}</span>
                <span class="acc-track"><i style="width:${(share / strategyShares[0]) * 100}%"></i></span>
                <em>${share}%</em>
              </div>`;
          })
          .join("")}
      </div>`;
  }

  function getStrategyTaskItems(subject, month) {
    return getAreaRanks(month || "3", subject || "국어").slice(0, 3);
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
    const questions = [];
    const actions = subjectActionMap[subject] || ["오답 문항"];

    getSubjectAreaRows(month, subject).forEach((item) => {
      for (let index = 0; index < item.total; index += 1) {
        const no = questions.length + 1;
        questions.push({
          no,
          area: item.area,
          correct: index < item.correct,
          action: actions[(no + index) % actions.length]
        });
      }
    });

    return questions;
  }

  function subjectMaxScore(subject) {
    return subject === "한국사" || subject === "통합사회" || subject === "통합과학" ? 50 : 100;
  }

  function renderExamSummary(month, subject) {
    const questions = getSubjectQuestions(month, subject);
    const row = getSubjectRow(month, subject);
    if (!questions.length || !row) return "";

    const total = questions.length;
    const correct = questions.filter((question) => question.correct).length;
    const wrong = total - correct;
    const correctScore = Number(row[2]) || 0;
    const wrongScore = Math.max(0, subjectMaxScore(subject) - correctScore);

    const cards = [
      { label: "전체 문항", value: total, unit: "개" },
      { label: "정답 문항", value: correct, unit: "개" },
      { label: "오답·미응답", value: wrong, unit: "개" },
      { label: "정답 점수 합계", value: correctScore, unit: "점", type: "is-correct" },
      { label: "오답 점수 합계", value: wrongScore, unit: "점", type: "is-wrong" }
    ];

    return `
      <div class="exam-summary-grid">
        ${cards
          .map(
            (card) => `
          <article class="exam-summary-card${card.type ? ` ${card.type}` : ""}">
            <span>${card.label}</span>
            <strong>${card.value}<small>${card.unit}</small></strong>
          </article>`
          )
          .join("")}
      </div>`;
  }

  const reviewTags = ["최우선", "우선", "점검"];

  function reviewTagTier(tag) {
    if (tag === "최우선") return "is-reach";
    if (tag === "우선") return "is-fit";
    return "is-safe";
  }

  function getExamReviewItems(month, subject) {
    const areas = getSubjectAreaRows(month, subject);
    const row = getSubjectRow(month, subject);
    const totalWrong = areas.reduce((sum, area) => sum + Math.max(0, area.total - area.correct), 0);
    const lostTotal = Math.max(0, subjectMaxScore(subject) - (Number(row?.[2]) || 0));

    return areas
      .map((area) => {
        const wrong = Math.max(0, area.total - area.correct);
        const lost = totalWrong ? Math.round((wrong / totalWrong) * lostTotal) : 0;
        return { name: area.area, total: area.total, wrong, lost, rate: area.mine };
      })
      .filter((item) => item.wrong > 0)
      .sort((a, b) => b.lost - a.lost || b.wrong - a.wrong || a.rate - b.rate)
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
                <b>${item.name}</b>
                <p>${item.total}문항 중 ${item.wrong}문항 오답</p>
                <span class="adm-tier ${reviewTagTier(tag)}">${tag}</span>
              </li>`;
          })
          .join("")}
      </ol>`;
  }

  function renderExamCauses(month, subject) {
    const questions = getSubjectQuestions(month, subject).filter((question) => !question.correct);
    const causes = ["개념 부족", "해석 오류", "시간 부족"];
    const counts = Object.fromEntries(causes.map((name) => [name, 0]));

    questions.forEach((question, index) => {
      counts[causes[index % causes.length]] += 1;
    });

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

  const koreanContentSchema = [
    { zone: "공통", major: "독서", details: ["인문", "사회", "과학", "기술", "예술", "독서이론", "융합"] },
    { zone: "공통", major: "문학", details: ["현대시", "현대소설", "고전시가", "고전소설", "수필", "극", "갈래복합"] },
    { zone: "선택", major: "화법과 작문", details: ["화법", "작문"] },
    { zone: "선택", major: "언어와 매체", details: ["언어", "매체"] }
  ];
  const behaviorTypes = ["사실적 이해", "추론적 이해", "비판적 이해", "창의적 이해", "어휘", "어법"];

  function groupWrongQuestions(questions, keyOf) {
    const groups = new Map();
    questions.forEach((question, index) => {
      if (question.correct) return;
      const name = keyOf(question, index);
      if (!groups.has(name)) groups.set(name, []);
      groups.get(name).push(question.no);
    });
    return [...groups.entries()]
      .map(([name, nos]) => ({ name, nos }))
      .sort((a, b) => b.nos.length - a.nos.length || a.name.localeCompare(b.name, "ko"));
  }

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

  function typeRateCell(value, kind) {
    const text = formatTypeRate(value);
    if (text === "-") return `<td class="is-rate is-${kind}">-</td>`;
    const pct = Math.max(0, Math.min(100, Number(value)));
    return `<td class="is-rate is-${kind}" style="--rate:${pct}">${text}</td>`;
  }

  function typeMetricCells(metric) {
    if (!metric.asked) {
      return `
        <td>0</td>
        <td>-</td>
        <td class="is-rate is-mine">-</td>
        <td class="is-rate is-avg">-</td>
        <td class="is-rate is-top">-</td>
        <td>-</td>`;
    }

    const gapClass = metric.gap > 0.05 ? "is-up" : metric.gap < -0.05 ? "is-down" : "is-same";
    const gapText = `${metric.gap > 0 ? "+" : ""}${metric.gap.toFixed(1)}%`;
    return `
      <td>${metric.asked}</td>
      <td>${metric.correct}</td>
      ${typeRateCell(metric.mine, "mine")}
      ${typeRateCell(metric.avg, "avg")}
      ${typeRateCell(metric.top, "top")}
      <td class="${gapClass}">${gapText}</td>`;
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
    if (subject === "국어") {
      return koreanContentSchema.flatMap((block) =>
        block.details.map((detail) => ({
          zone: block.zone,
          major: block.major,
          detail,
          metric: typeMetricFromArea(lookup.get(`${block.major}·${detail}`) || lookup.get(detail))
        }))
      );
    }

    return getSubjectAreaRows(month, subject).map((row) => ({
      zone: "공통",
      major: subject,
      detail: String(row.area).includes("·") ? String(row.area).split("·").pop() : row.area,
      metric: typeMetricFromArea(row)
    }));
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

  function renderTypeSectionRows(section, rows, extraKeys, detailColspan = 1) {
    const extraSpans = extraKeys.map((key) => groupSpans(rows, key));
    const spanAttr = detailColspan > 1 ? ` colspan="${detailColspan}"` : "";

    return rows
      .map((row, index) => {
        const heads = [];
        if (index === 0) {
          heads.push(`<th rowspan="${rows.length}">${section}</th>`);
        }
        extraKeys.forEach((key, keyIndex) => {
          const span = extraSpans[keyIndex][index];
          if (span) heads.push(`<th rowspan="${span}">${row[key] || ""}</th>`);
        });
        return `<tr>${heads.join("")}<td class="diag-subfactor"${spanAttr}>${row.detail}</td>${typeMetricCells(row.metric)}</tr>`;
      })
      .join("");
  }

  function getTypeAnalysisSections(month, subject) {
    const lookup = areaLookup(month, subject);
    const areas = getSubjectAreaRows(month, subject);
    const questions = getSubjectQuestions(month, subject);
    const areaMap = new Map(areas.map((area) => [area.area, area]));

    const contentRows = contentTypeRows(month, subject, lookup);
    const behaviorRows = behaviorTypes.map((detail, index) => {
      const list = questions.filter((_, questionIndex) => questionIndex % behaviorTypes.length === index);
      return { zone: "", major: "", detail, metric: typeMetricFromQuestions(list, areaMap) };
    });

    return { contentRows, behaviorRows };
  }

  function renderTypeTable(body) {
    return `
      <div class="diag-table-scroll">
        <table class="diag-table diag-table-define diag-table-type">
          <thead>
            <tr>
              <th rowspan="2" class="diag-col-label">구분</th>
              <th colspan="3" class="diag-col-group">분류</th>
              <th colspan="2" class="diag-col-group">문항 수</th>
              <th colspan="3" class="diag-col-group">정답률</th>
              <th rowspan="2" class="diag-col-label">나-평균 GAP</th>
            </tr>
            <tr>
              <th>영역</th>
              <th>대분류</th>
              <th>세부분류</th>
              <th>출제</th>
              <th>정답</th>
              <th>나</th>
              <th>평균</th>
              <th>상위 30%</th>
            </tr>
          </thead>
          <tbody>
            ${body}
          </tbody>
        </table>
      </div>`;
  }

  function renderTypeAnalysis(month, subject) {
    const { contentRows, behaviorRows } = getTypeAnalysisSections(month, subject);
    return renderTypeTable(`
      ${renderTypeSectionRows("내용 영역", contentRows, ["zone", "major"])}
      ${renderTypeSectionRows("행동 영역", behaviorRows, [], 3)}
    `);
  }

  function renderItemAnalysis(month, subject) {
    const questions = getSubjectQuestions(month, subject);
    const lookup = areaLookup(month, subject);
    if (!questions.length) return "";

    const rows = questions
      .map((question, index) => {
        const area = lookup.get(question.area);
        const answer = ((question.no * 3 + index) % 5) + 1;
        const marked = question.correct ? answer : (answer % 5) + 1;
        const points = question.no % 5 === 0 ? 3 : 2;
        const behavior = behaviorTypes[index % behaviorTypes.length];
        const resultClass = question.correct ? "is-up" : "is-down";
        const resultText = question.correct ? "정답" : "오답";
        return `
          <tr>
            <td class="diag-subfactor">${question.no}번</td>
            <td class="${resultClass}">${resultText}</td>
            <td>${marked}</td>
            <td>${answer}</td>
            <td>${points}점</td>
            <td>${question.area}</td>
            <td>${behavior}</td>
            ${typeRateCell(area?.avg, "avg")}
            ${typeRateCell(area?.top, "top")}
          </tr>`;
      })
      .join("");

    return `
      <div class="diag-table-scroll">
        <table class="diag-table diag-table-define diag-table-type diag-table-item">
          <colgroup>
            <col>
            <col>
            <col class="col-mark">
            <col class="col-mark">
            <col>
            <col>
            <col>
            <col class="col-rate">
            <col class="col-rate">
          </colgroup>
          <thead>
            <tr>
              <th rowspan="2" class="diag-col-label">번호</th>
              <th rowspan="2" class="diag-col-label">결과</th>
              <th rowspan="2" class="diag-col-label">마킹한 답</th>
              <th rowspan="2" class="diag-col-label">정답</th>
              <th rowspan="2" class="diag-col-label">배점</th>
              <th rowspan="2" class="diag-col-label">내용 영역</th>
              <th rowspan="2" class="diag-col-label">행동 영역</th>
              <th colspan="2" class="diag-col-group">정답률</th>
            </tr>
            <tr>
              <th>전체</th>
              <th>상위 30%</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>`;
  }

  const noteCauses = ["개념 부족", "해석 오류", "시간 부족"];
  const noteStatuses = ["미복습", "복습 중", "복습 완료"];

  function wrongNoteStem(subject, area) {
    if (subject !== "국어") return "다음 중 가장 적절한 것은?";
    if (String(area).startsWith("문학")) return "다음 작품에 대한 설명으로 가장 적절한 것은?";
    if (String(area).startsWith("화법") || String(area).startsWith("작문") || String(area).startsWith("언어")) {
      return "다음 내용을 바탕으로 한 설명으로 가장 적절한 것은?";
    }
    return "윗글을 바탕으로 <보기>의 관점을 이해한 내용으로 가장 적절한 것은?";
  }

  function choiceCircle(n) {
    return ["①", "②", "③", "④", "⑤"][Number(n) - 1] || String(n);
  }

  function wrongNoteChoices(subject, area) {
    if (subject === "국어" && String(area).startsWith("독서")) {
      return [
        "인간의 본성은 태어날 때부터 고정되어 있다.",
        "사회적 관계는 본성 형성과 무관하다.",
        "인간의 본성은 사회적 관계와 무관하다.",
        "본성은 개인 내부에서만 완성된다.",
        "인간의 본성은 관계 속에서 형성된다."
      ];
    }
    return [
      "보기와 지문의 핵심이 같다.",
      "보기의 주장이 지문과 어긋난다.",
      "지문의 사례가 보기를 반박한다.",
      "보기의 조건을 지문에 적용할 수 없다.",
      "지문의 근거가 보기의 결론을 뒷받침한다."
    ];
  }

  function choiceLine(n, texts) {
    return `${choiceCircle(n)} ${texts[Number(n) - 1] || ""}`.trim();
  }

  function wrongNoteCore(subject) {
    if (subject !== "국어") return "문항이 묻는 핵심 조건을 확인한 뒤, 선지와 근거를 하나씩 대응해 검증하는 문항이에요.";
    return "발문에서 요구한 판단 기준을 지문의 근거와 선지에 대응해 확인하는 문항이에요.";
  }

  function wrongNoteSteps(subject) {
    if (subject !== "국어") {
      return ["문제에서 요구하는 조건을 표시한다", "관련 개념·자료를 정리한다", "각 선지를 조건과 비교해 검증한다"];
    }
    return ["발문에서 판단 기준을 표시한다", "기준과 직접 연결된 지문 문장을 찾는다", "각 선지를 근거와 비교해 검증한다"];
  }

  function wrongNoteChecks(subject) {
    if (subject !== "국어") {
      return ["조건을 빠짐없이 확인했는지 본다", "근거가 되는 자료를 표시했는지 본다", "선지와 근거가 대응되는지 본다"];
    }
    return ["조건을 구분했는지 확인한다", "근거가 되는 문장을 표시했는지 확인한다", "선지와 근거가 대응되는지 확인한다"];
  }

  function getWrongNoteItems(month, subject) {
    const questions = getSubjectQuestions(month, subject);
    const lookup = areaLookup(month, subject);

    return questions
      .map((question, index) => {
        if (question.correct) return null;
        const area = lookup.get(question.area);
        const answer = ((question.no * 3 + index) % 5) + 1;
        const marked = (answer % 5) + 1;
        const choices = wrongNoteChoices(subject, question.area);
        return {
          no: question.no,
          subject,
          exam: `${month}월 ${mockMeta[month] || ""}`.trim(),
          area: question.area,
          behavior: behaviorTypes[index % behaviorTypes.length],
          marked,
          answer,
          markedLabel: choiceLine(marked, choices),
          answerLabel: choiceLine(answer, choices),
          points: question.no % 5 === 0 ? 3 : 2,
          avg: area?.avg ?? 0,
          cause: noteCauses[index % noteCauses.length],
          status: noteStatuses[index % noteStatuses.length],
          stem: wrongNoteStem(subject, question.area),
          core: wrongNoteCore(subject),
          steps: wrongNoteSteps(subject),
          checks: wrongNoteChecks(subject)
        };
      })
      .filter(Boolean);
  }

  function wrongNoteMemo(item) {
    const marked = choiceCircle(item.marked);
    const answer = choiceCircle(item.answer);
    if (item.cause === "해석 오류") {
      return `선지를 반대로 이해해서 ${marked}번을 골랐다. 지문에 답이 그대로 있었는데 괜히 내 생각대로 해석했다. 다음엔 지문에서 근거부터 제대로 찾고 고르기.`;
    }
    if (item.cause === "시간 부족") {
      return `앞에서 시간 끌다가 ${marked}번을 급하게 찍었다. ${answer}번인 건 느낌은 있었는데 확인할 시간이 없었다. 다음엔 발문이랑 선지부터 보고 지문 읽기.`;
    }
    return `개념이 헷갈려서 ${marked}번을 감으로 골랐다. 지문에 설명이 있었는데 제대로 안 보고 넘겼다. 다음엔 모르는 말 나오면 지문에서 찾아보고 고르기.`;
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
                  <b>${item.area}</b>
                  <p>정답률 ${item.avg}% · ${item.points}점</p>
                  <span class="adm-tier ${noteStatusClass(item.status)}">${item.status}</span>
                </li>`
                )
                .join("")}
            </ol>
          </div>
        </section>
        <section class="trend-mini-block">
          <div class="diag-result-head">
            <h2 class="diag-section-title">오답 복기</h2>
          </div>
          <div class="wrong-note-box">
            <div class="wrong-note-kicker">
              <strong>${current.subject} ${current.no}번</strong>
              <em class="adm-tier ${noteStatusClass(current.status)}">${current.status}</em>
            </div>
            <div class="exam-summary-grid wrong-note-meta">
              <article class="exam-summary-card"><span>정답률</span><strong class="is-text">${current.avg}%</strong></article>
              <article class="exam-summary-card"><span>배점</span><strong class="is-text">${current.points}점</strong></article>
              <article class="exam-summary-card"><span>내용 영역</span><strong class="is-text">${current.area}</strong></article>
              <article class="exam-summary-card"><span>행동 영역</span><strong class="is-text">${current.behavior}</strong></article>
              <article class="exam-summary-card"><span>오답 원인</span><strong class="is-text">${current.cause}</strong></article>
            </div>
            <div class="wrong-note-block">
              <h3>문제 내용</h3>
              <div class="wrong-note-stem">
                <p class="wrong-note-q">${current.stem}</p>
                <p class="wrong-note-mine">내 답: ${current.markedLabel}</p>
                <p class="wrong-note-key">정답: ${current.answerLabel}</p>
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
                ${current.checks
                  .map(
                    (check, index) => `
                  <li>
                    <label>
                      <input type="checkbox"${index === 0 ? " checked" : ""}>
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
    const months = Object.keys(mockMeta);
    const byArea = new Map();
    const byAction = new Map();
    let total = 0;
    let wrong = 0;

    months.forEach((month) => {
      getSubjectQuestions(month, subject).forEach((question) => {
        total += 1;
        if (!question.correct) wrong += 1;
        bumpCount(byArea, question.area, !question.correct);
        bumpCount(byAction, question.action, !question.correct);
      });
    });

    const rate = total ? Math.round((wrong / total) * 100) : 0;
    const weakArea = weakestGroup(byArea);
    const weakAction = weakestGroup(byAction);
    const areaGroups = groupCumulativeWrongs(subject, (question) => question.area);
    const actionGroups = groupCumulativeWrongs(subject, (question) => question.action);

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
          </div>
          ${renderExamShareChart(subject)}
        </section>
        <div class="score-overview wrong-area-overview cumulative-wrong-lists">
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
          <section class="trend-mini-block wrong-area-block">
            <div class="diag-result-head">
              <h2 class="diag-section-title">행동 영역 오답</h2>
            </div>
            <article class="summary-card">
              <span>우선 보완</span>
              <strong>${weakAction?.name || "-"}</strong>
              <p>오답률 ${weakAction ? weakAction.rate : 0}%로 가장 높아요.</p>
            </article>
            ${renderWrongGroupList(actionGroups)}
          </section>
        </div>
      </section>`;
  }

  function getExamShareItems(subject) {
    return Object.keys(mockMeta).map((month) => {
      const questions = getSubjectQuestions(month, subject);
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
        <div class="pct-meta pct-meta--legend">
          <div class="pct-legend exam-share-legend" aria-label="정답 오답 범례">
            <span class="is-correct">정답</span>
            <span class="is-wrong">오답</span>
          </div>
        </div>
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
    return [...groups.values()]
      .filter((group) => group.wrong > 0)
      .sort((a, b) => b.wrong - a.wrong || a.name.localeCompare(b.name, "ko"))
      .slice(0, 5);
  }

  function renderContentWrongs(month, subject) {
    return renderWrongGroupList(groupWrongQuestions(getSubjectQuestions(month, subject), (question) => question.area));
  }

  function renderBehaviorWrongs(month, subject) {
    return renderWrongGroupList(
      groupWrongQuestions(
        getSubjectQuestions(month, subject),
        (_, index) => behaviorTypes[index % behaviorTypes.length]
      )
    );
  }

  function renderSubjectResultSummary(month, subject) {
    const questions = getSubjectQuestions(month, subject);
    const areas = getSubjectAreaRows(month, subject);
    if (!questions.length) return "";

    const totalCorrect = questions.filter((question) => question.correct).length;
    const overallRate = Math.round((totalCorrect / questions.length) * 100);
    const ranked = [...areas].sort((a, b) => b.mine - a.mine || a.avg - b.avg);
    const strongest = ranked[0];
    const weakest = ranked[ranked.length - 1];
    const wrong = questions.filter((question) => !question.correct);
    const causeNames = ["개념 부족", "해석 오류", "시간 부족"];
    const causeCounts = Object.fromEntries(causeNames.map((name) => [name, 0]));
    wrong.forEach((_, index) => {
      causeCounts[causeNames[index % causeNames.length]] += 1;
    });
    const topCause = causeNames
      .map((name) => ({ name, count: causeCounts[name] }))
      .sort((a, b) => b.count - a.count)[0];
    const overallTitle =
      overallRate >= 80 ? "전체적으로 안정적이에요" : overallRate >= 65 ? "기본 성취를 잘 쌓고 있어요" : "핵심 개념부터 점검해 보세요";

    const cards = [
      {
        type: "overall",
        label: "전체 성취",
        title: overallTitle,
        text: `전체 ${questions.length}문항 중 ${totalCorrect}문항을 맞혀 정답률은 ${overallRate}%예요.`
      },
      {
        type: "strength",
        label: "강점 영역",
        title: strongest ? `${strongest.area}에 강해요` : "-",
        text: strongest
          ? `${strongest.total}문항 중 ${strongest.correct}문항을 맞혀 정답률은 ${strongest.mine}%예요.`
          : "비교할 영역이 없어요."
      },
      {
        type: "weak",
        label: "약점 영역",
        title: weakest ? `${weakest.area}${objectParticle(weakest.area)} 보완해 보세요` : "-",
        text: weakest
          ? `${weakest.total}문항 중 ${Math.max(0, weakest.total - weakest.correct)}문항을 틀려 정답률은 ${weakest.mine}%예요.`
          : "비교할 영역이 없어요."
      },
      {
        type: "cause",
        label: "오답 원인",
        title: wrong.length && topCause?.count ? `${topCause.name}${subjectParticle(topCause.name)} 가장 많아요` : "틀린 문항이 없어요",
        text: wrong.length && topCause?.count
          ? `오답 ${wrong.length}문항 중 ${topCause.count}문항이에요.`
          : "이번 시험에서 틀린 문항이 없어요."
      }
    ];

    return `
      <div class="summary-grid">
        ${cards
          .map(
            (card) => `
          <article class="summary-card is-${card.type}">
            <span>${card.label}</span>
            <strong>${card.title}</strong>
            <p>${card.text}</p>
          </article>`
          )
          .join("")}
      </div>`;
  }

  function renderSubjectQuestions(month, subject) {
    const questions = getSubjectQuestions(month, subject);
    if (!questions.length) return "";

    return `
      <div class="question-strip" role="list" aria-label="${subject} 정오 현황">
        ${questions
          .map(
            (question) => `
          <span class="question-cell${question.correct ? "" : " is-wrong"}" role="listitem" title="${question.area} · ${question.correct ? "정답" : "오답"}">${question.no}</span>`
          )
          .join("")}
      </div>`;
  }

  window.MegaReportData = {
    mockMeta,
    mockSamples,
    renderPercentileReport,
    renderAccuracyCompare,
    renderScoreSummary,
    renderSubjectOverview,
    renderSubjectAccuracy,
    renderSubjectAreas,
    renderSubjectQuestions,
    renderSubjectResultSummary,
    renderExamSummary,
    renderExamReview,
    renderExamCauses,
    renderTypeAnalysis,
    renderItemAnalysis,
    renderWrongNote,
    renderCumulativeWrong,
    renderContentWrongs,
    renderBehaviorWrongs,
    renderTrendFull,
    renderTrendSubject,
    renderTrendExamTable,
    renderSchoolAnalysis,
    renderSchoolTrendChart,
    renderStrategySummary,
    renderStrategyPriority,
    renderStrategyRatio,
    renderStrategyTasks
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
      const kind = el.dataset.takenExams;
      el.innerHTML = renderTakenExams({
        withScore: !kind
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

    document.querySelectorAll("[data-accuracy-compare]").forEach((el) => {
      el.innerHTML = renderAccuracyCompare("3");
    });

    document.querySelectorAll("[data-score-summary]").forEach((el) => {
      el.innerHTML = renderScoreSummary("3");
    });

    document.querySelectorAll("[data-subject-overview]").forEach((el) => {
      el.innerHTML = renderSubjectOverview("3", "전체");
    });

    document.querySelectorAll("[data-subject-accuracy]").forEach((el) => {
      el.innerHTML = renderSubjectAccuracy("3", "전체");
    });

    document.querySelectorAll("[data-subject-questions]").forEach((el) => {
      el.innerHTML = renderSubjectQuestions("3", "국어");
    });

    document.querySelectorAll("[data-subject-result]").forEach((el) => {
      el.innerHTML = renderSubjectResultSummary("3", "국어");
    });

    document.querySelectorAll("[data-exam-summary]").forEach((el) => {
      el.innerHTML = renderExamSummary("3", "국어");
    });

    document.querySelectorAll("[data-exam-review]").forEach((el) => {
      el.innerHTML = renderExamReview("3", "국어");
    });

    document.querySelectorAll("[data-exam-causes]").forEach((el) => {
      el.innerHTML = renderExamCauses("3", "국어");
    });

    document.querySelectorAll("[data-type-analysis]").forEach((el) => {
      el.innerHTML = renderTypeAnalysis("3", "국어");
    });

    document.querySelectorAll("[data-item-analysis]").forEach((el) => {
      el.innerHTML = renderItemAnalysis("3", "국어");
    });

    document.querySelectorAll("[data-wrong-note]").forEach((el) => {
      el.innerHTML = renderWrongNote("3", "국어");
    });

    document.querySelectorAll("[data-content-wrongs]").forEach((el) => {
      el.innerHTML = renderContentWrongs("3", "국어");
    });

    document.querySelectorAll("[data-behavior-wrongs]").forEach((el) => {
      el.innerHTML = renderBehaviorWrongs("3", "국어");
    });

    document.querySelectorAll("[data-strategy-summary]").forEach((el) => {
      el.innerHTML = renderStrategySummary("국어", "3");
    });

    document.querySelectorAll("[data-strategy-priority]").forEach((el) => {
      el.innerHTML = renderStrategyPriority("3", "국어");
    });

    document.querySelectorAll("[data-strategy-ratio]").forEach((el) => {
      el.innerHTML = renderStrategyRatio("3", "국어");
    });

    document.querySelectorAll("[data-strategy-tasks]").forEach((el) => {
      el.innerHTML = renderStrategyTasks("국어", "3");
    });
  }

  initMypageSamples();
})();
