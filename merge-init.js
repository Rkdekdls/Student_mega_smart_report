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
  const qnaPanel = document.querySelector('.panel[data-panel="qna"]');
  const insightPanel = document.querySelector('.panel[data-panel="insight"]');
  const qnaHome = qnaPanel?.querySelector("[data-qna-home]");
  const qnaDetail = qnaPanel?.querySelector("[data-qna-detail]");
  const qnaThread = qnaPanel?.querySelector("[data-qna-thread]");
  const qnaForm = qnaPanel?.querySelector("[data-qna-form]");
  const qnaAskForm = qnaPanel?.querySelector("[data-qna-ask-form]");
  const qnaTabs = qnaPanel ? [...qnaPanel.querySelectorAll(".content-tab[data-qna]")] : [];
  const qnaDetailTabs = qnaPanel ? [...qnaPanel.querySelectorAll(".content-tab[data-qna-detail]")] : [];
  const insightTabs = insightPanel ? [...insightPanel.querySelectorAll(".content-tab[data-insight]")] : [];
  const qnaConsultants = {
    "1": {
      photo: "img/consultant/1.png",
      code: "CONSULTANT 01",
      org: "MEGA 대입컨설팅센터",
      title: "최상위권 자연계 전문 컨설턴트",
      focus: "중3부터 N수까지 · 자연계 전문",
      intro: "최상위권 자연계 학생의 성적 구조와 정시 지원전략을 함께 설계합니다.",
      highlight: "최상위권 정시 · 학생부 평가 및 교정",
      profile: [
        "최상위권·중3부터 N수까지·자연계 전문",
        "학습 및 정신교육 전문가",
        "정시 배치표·설명회 자문단 기획 및 제작 총괄",
        "메가스터디 직영학원 입시 교육 다수",
        "학생부 평가 및 교정 전문가",
        "서울대학교 물리학과 졸업",
        "입시전략연구소 대표 선임연구원"
      ],
      questions: [
        {
          id: "p1-1",
          tags: ["SKY", "답변 완료"],
          title: "국어 강점 학생은 연고대 중 어디가 유리한가요?",
          excerpt: "국어 백분위는 높지만 수학이 상대적으로 약합니다. 연세대와 고려대 중 어느 쪽을 우선 검토해야 하나요?",
          date: "2026. 04. 07",
          views: 271,
          answer: "국어가 강해도 자연계에서는 수학이 배치의 중심입니다. 연세대는 수학 표준점수의 영향이 큰 편이라, 지금처럼 수학이 상대적으로 약하면 연세대를 우선 카드로 두기는 부담스럽습니다. 고려대는 국어 강점이 조금 더 살아나는 경우가 있어, 같은 점수대라면 고려대를 적정으로 먼저 검토하는 편이 낫습니다.\n\n다만 탐구가 평범한 수준이면 두 대학 모두 한 칸 아래로 여유를 두는 것이 안전합니다. 최근 3회 모의고사에서 수학 백분위가 안정되는지를 먼저 보시고, 수학이 회복되면 연세대를 소신으로 올리고 고려대를 적정에 두는 식으로 조정하세요.",
          answerDate: "2026. 04. 08"
        },
        {
          id: "p1-2",
          tags: ["SKY", "답변 완료"],
          title: "수학이 강한 자연계 학생은 서울대 지원에서 어떤 점을 봐야 하나요?",
          excerpt: "수학 표준점수는 높은 편이지만 국어와 탐구는 상대적으로 평범합니다. 서울대 자연계 지원 가능성을 판단할 때 무엇부터 확인해야 하나요?",
          date: "2026. 03. 18",
          views: 352,
          answer: "서울대 자연계는 수학이 좋아도 국어·탐구가 받쳐 주지 않으면 합격선에서 밀리는 경우가 많습니다. 지금처럼 수학만 두드러지고 나머지 과목이 평범하다면, 서울대는 가능성 확인용 소신으로 보되 메인 카드로 두기는 이릅니다. 먼저 최근 3회 성적에서 과목별 백분위 편차와 과탐 조합, 그리고 가·나군에 넣을 안정 대학을 같이 적어 보세요.\n\n판단 순서는 단순합니다. 국어와 탐구가 서울대 자연계 하단을 넘는지 보고, 넘지 않으면 연고대 적정을 먼저 확보한 뒤 서울대를 가군 소신 1장으로만 남기세요. 수학 강점은 살리되, 한 과목 한 과목의 구멍부터 메우는 쪽이 합격 확률을 올립니다.",
          answerDate: "2026. 03. 19"
        },
        {
          id: "p1-3",
          tags: ["서성한", "답변 완료"],
          title: "모의고사별 성적 편차가 큰데 적정 지원선을 어떻게 정하나요?",
          excerpt: "잘 본 시험과 못 본 시험의 차이가 커서 어느 성적을 기준으로 대학을 정해야 할지 어렵습니다.",
          date: "2026. 03. 15",
          views: 214,
          answer: "잘 본 시험과 못 본 시험을 그대로 평균 내면 지원선이 한쪽으로 기울기 쉽습니다. 최근 3~4회 가운데 유난히 높거나 낮은 1회를 제외한 중앙값을 적정선으로 두는 것이 좋습니다. 상승 추세라면 최근 2회에 조금 더 무게를 두되, 하락 중이라면 낮은 쪽을 안정 카드의 기준으로 삼으세요.\n\n실무적으로는 최고점 1회는 소신, 중앙값은 적정, 최저점 근처는 안정에 반영하면 됩니다. 편차가 큰 해에는 대학을 한 칸씩 내려 안정 비중을 늘리는 편이 후회가 적습니다. 서성한권도 같은 방식으로 세 칸을 나눠 보시면 기준이 흔들리지 않습니다.",
          answerDate: "2026. 03. 16"
        }
      ]
    },
    "2": {
      photo: "img/consultant/2.png",
      code: "CONSULTANT 02",
      org: "MEGA 대입컨설팅센터",
      title: "메디컬 전략 전문 컨설턴트",
      focus: "의치한약수 · 수시·정시 병행",
      intro: "의약학 계열 지원에 필요한 성적 구조와 전형 조합을 함께 설계합니다.",
      highlight: "의치한약수 · 면접·서류 전략",
      profile: [
        "의치한약수 입시 전략 전문",
        "수시 서류·면접 컨설팅 다수",
        "정시 의약학 배치 분석",
        "메가스터디 의대 입시 설명회 진행",
        "학생부종합 기록 설계 자문",
        "연세대학교 생명시스템 졸업",
        "입시전략연구소 메디컬 연구원"
      ],
      questions: [
        {
          id: "p2-1",
          tags: ["의대", "답변 완료"],
          title: "과탐 조합이 의대 지원에 얼마나 영향을 주나요?",
          excerpt: "화학Ⅰ·생명Ⅰ 조합인데 서울권 의대 정시 지원이 가능한지, 과목 선택이 불리하게 작용하는지가 궁금합니다.",
          date: "2026. 04. 02",
          views: 418,
          answer: "화학Ⅰ·생명Ⅰ 조합이 서울권 의대 지원 자체를 막지는 않습니다. 다만 일부 대학은 Ⅱ과목 가산이나 변환표준에서 I+I 조합이 불리하게 잡히므로, ‘지원 가능 여부’와 ‘같은 점수대의 유불리’를 나눠 보셔야 합니다. 지금 성적이 안정적이라면 과목을 급하게 바꾸기보다, 목표 대학의 변환표 기준으로 점수 위치를 다시 적어 보는 것이 먼저입니다.\n\n조합을 바꿀지는 남은 학습 여력으로 판단하세요. Ⅱ과목을 새로 올리는 데 성적이 흔들릴 수 있으면, 현재 조합을 유지하고 지원 대학만 재배치하는 편이 안전합니다. 서울권 중 가산이 적은 곳과 변환이 유리한 곳을 나눠 적으시면 선택 폭이 분명해집니다.",
          answerDate: "2026. 04. 03"
        },
        {
          id: "p2-2",
          tags: ["치대", "답변 완료"],
          title: "수시 의대와 정시 치대를 함께 보는 게 맞을까요?",
          excerpt: "내신은 1등급 초반이고 모의고사는 흔들립니다. 수시 의대와 정시 치대를 병행할 때 우선순위를 어떻게 잡아야 하나요?",
          date: "2026. 03. 21",
          views: 296,
          answer: "내신 1등급 초반이면 수시에서 의대 카드를 비워 두기는 아깝습니다. 다만 모의고사가 흔들리는 해에는 정시 의대만 믿고 가기 어려우니, 수시 의대와 정시 치대를 역할이 다르게 가져가는 병행이 맞습니다. 수시는 ‘합격 가능성 있는 의대’를 남기는 자리이고, 정시 치대는 성적 변동을 받아 주는 안전판으로 보시면 됩니다.\n\n수시 6장을 의대 소신으로만 채우면 전부 미끄러질 수 있습니다. 의대 3~4장, 치대·약대 적정 2장 정도로 나눠 두시고, 정시는 치대를 안정·적정에 두는 구성이 현실적입니다. 모의고사가 회복되면 정시 의대를 다시 올리면 되고, 지금은 빈 합격 카드를 만드는 것이 우선입니다.",
          answerDate: "2026. 03. 22"
        },
        {
          id: "p2-3",
          tags: ["약대", "답변 완료"],
          title: "면접 비중이 큰 의약학 전형은 언제부터 준비해야 하나요?",
          excerpt: "서류는 어느 정도 채워졌는데 면접 준비가 늦어질까 걱정입니다. 수시 의약학 면접은 어느 시점부터 잡는 게 맞나요?",
          date: "2026. 03. 12",
          views: 231,
          answer: "서류가 어느 정도 정리된 상태라면, 면접은 ‘언제 시작하느냐’보다 ‘무엇을 먼저 고정하느냐’가 중요합니다. 6월 이후에는 생기부에서 반복되는 활동과 약점을 뽑아 예상 질문 목록을 만들어 두세요. 본격적인 구술 연습은 9월 모의고사 이후에도 충분하지만, 질문 목록이 없으면 그때 가서 내용이 빈약해집니다.\n\n면접 비중이 큰 전형은 서류로 올려 놓고 면접에서 뒤집히는 경우가 있습니다. 주 1회, 15~20분만이라도 답변을 소리 내어 말해 보시고, 의학 윤리 일반론보다 본인 기록에 근거한 답부터 다듬는 것이 좋습니다. 전형이 MMI인지 서류 기반인지만 구분해 두시면 준비 방향이 달라집니다.",
          answerDate: "2026. 03. 13"
        }
      ]
    },
    "3": {
      photo: "img/consultant/3.png",
      code: "CONSULTANT 03",
      org: "MEGA 대입컨설팅센터",
      title: "맞춤 입시전략 전문 컨설턴트",
      focus: "학생 유형별 전형 설계",
      intro: "성적 위치와 강약점을 기준으로 수시·정시 지원 범위를 함께 정리합니다.",
      highlight: "전형 조합 · 지원 카드 설계",
      profile: [
        "수시·정시 맞춤 전략 설계",
        "학생 유형별 지원 카드 분석",
        "대학별 전형 요강 해석",
        "메가스터디 진학 설명회 진행",
        "학생부·정시 병행 컨설팅",
        "고려대학교 경영학과 졸업",
        "입시전략연구소 전략기획 연구원"
      ],
      questions: [
        {
          id: "p3-1",
          tags: ["수시", "답변 완료"],
          title: "교과와 종합을 몇 장씩 넣는 게 안정적일까요?",
          excerpt: "내신 2등급 초반, 모의고사는 2~3등급입니다. 교과와 종합 비율을 어떻게 나눠야 할지 고민입니다.",
          date: "2026. 04. 11",
          views: 187,
          answer: "내신 2등급 초반이면 교과가 주력이 되는 성적대입니다. 다만 종합을 아예 빼면, 교과 컷에서 아슬아슬할 때 기댈 카드가 없어집니다. 생기부에 전공 관련 기록이 어느 정도 있으면 종합 1~2장은 남겨 두는 것이 좋습니다. 모의고사가 2~3등급이면 정시 보완이 약하니, 수시에서 교과 비중을 더 가져가는 편이 안전합니다.\n\n6장 기준으로는 교과 4·종합 2, 또는 교과 3·종합 2·논술 1을 먼저 그려 보세요. 교과 성적이 대학별 컷 바로 아래라면 교과를 한 장 줄이고 논술이나 종합으로 옮기는 조정도 가능합니다. 지금은 비율을 고정하기보다, 목표 대학의 교과 컷과 본인 기록 밀도를 대조한 뒤 장수를 확정하시면 됩니다.",
          answerDate: "2026. 04. 12"
        },
        {
          id: "p3-2",
          tags: ["정시", "답변 완료"],
          title: "가나다군을 안정·적정·소신으로 어떻게 나눠야 하나요?",
          excerpt: "목표 대학은 중상위권인데 군별 배치를 잡을 때 성적 변동을 어느 정도까지 반영해야 하나요?",
          date: "2026. 03. 29",
          views: 241,
          answer: "중상위권은 군 배치를 기계적으로 ‘가 안정·나 적정·다 소신’으로 나누기보다, 본인 성적 편차부터 보는 것이 맞습니다. 최근 2~3회 평균에서 ±1등급 안이면 그 폭만 변동으로 보시고, 그 이상 출렁이는 점수는 소신에 넣지 않는 것이 좋습니다. 목표 대학이 중상위권이라면 안정 카드를 두 장 확보하는 구성이 후회가 적습니다.\n\n예를 들어 가군 안정, 나군 적정, 다군 소신 대신, 가·나군을 안정·적정으로 두고 다군만 소신으로 가져가도 됩니다. 성적 변동이 큰 해에는 소신을 욕심내지 말고 적정선을 한 칸 낮추세요. 군별 역할은 ‘합격 한 장은 반드시 남긴다’는 기준으로 나누시면 됩니다.",
          answerDate: "2026. 03. 30"
        },
        {
          id: "p3-3",
          tags: ["학생부", "답변 완료"],
          title: "논술과 종합을 같이 넣으면 카드가 너무 분산되나요?",
          excerpt: "교과는 애매하고 논술 성향은 있는 편입니다. 종합과 논술을 함께 쓸 때 원서 배분을 어떻게 하면 좋을까요?",
          date: "2026. 03. 16",
          views: 198,
          answer: "교과가 애매하고 논술 성향이 있다면, 논술과 종합을 같이 쓰는 것은 분산이 아니라 서로 다른 전형으로 빈칸을 메우는 구성입니다. 다만 논술을 3장 이상 넣으면 지문 연습과 대학별 유형 대응에 시간이 빠져, 종합 서류와 교과 준비까지 함께 무너지기 쉽습니다. 논술 2·종합 3·교과 1 정도가 현실적인 출발점입니다.\n\n논술 장수는 모의 논술 결과를 본 뒤에 확정하세요. 점수가 나오면 논술을 한 장 늘리고, 나오지 않으면 종합이나 교과로 되돌리면 됩니다. 지금은 유형만 보고 장수를 늘리기보다, 준비 시간을 나눌 수 있는 범위 안에서 카드를 배치하는 것이 섬세한 운영입니다.",
          answerDate: "2026. 03. 17"
        }
      ]
    },
    "4": {
      photo: "img/consultant/4.png",
      code: "CONSULTANT 04",
      org: "MEGA 대입컨설팅센터",
      title: "중상위권 진로 전문 컨설턴트",
      focus: "진로 연계 · 중상위권 지원",
      intro: "성적대에 맞는 학과 방향과 실현 가능한 지원 전략을 함께 설계합니다.",
      highlight: "진로 탐색 · 중상위권 정시·수시",
      profile: [
        "중상위권 진학 전략 전문",
        "진로·학과 매칭 컨설팅",
        "지역거점국립대·주요사립 분석",
        "메가스터디 진로 특강 진행",
        "학생부 기록과 학과 적합성 자문",
        "성균관대학교 사회학과 졸업",
        "입시전략연구소 진로연구 연구원"
      ],
      questions: [
        {
          id: "p4-1",
          tags: ["진로", "답변 완료"],
          title: "성적이 애매할 때 학과를 먼저 정해야 할까요?",
          excerpt: "인문·사회 쪽이 관심이 있는데 성적대가 넓습니다. 대학을 먼저 볼지, 학과를 먼저 볼지 고민입니다.",
          date: "2026. 04. 05",
          views: 163,
          answer: "성적대가 넓을수록 대학 이름부터 고르면 학과가 계속 흔들립니다. 인문·사회 안에서도 경영, 미디어, 행정은 필요한 교과와 활동 증거가 다르니, 관심 학과를 먼저 2개 축으로 묶어 보세요. 그다음에야 각 축에 맞는 대학이 성적 밴드별로 정리됩니다.\n\n지금은 ‘어느 대학’보다 ‘어떤 일을 하고 싶은지’를 한 문장으로 적어 보시는 것이 좋습니다. 그 문장에 가까운 학과를 남기고, 성적 상단은 소신 학과, 중단은 적정, 하단은 안정 학과로 맞추면 지원표가 단순해집니다. 대학은 그 표 위에 올리는 자리입니다.",
          answerDate: "2026. 04. 06"
        },
        {
          id: "p4-2",
          tags: ["정시", "답변 완료"],
          title: "중상위권에서 취업 연계 학과를 어떻게 고르면 되나요?",
          excerpt: "경영·미디어·행정 사이에서 고민 중입니다. 성적과 진로를 같이 볼 때 어떤 기준으로 좁혀야 하나요?",
          date: "2026. 03. 14",
          views: 209,
          answer: "취업이 잘된다는 이유만으로 고르면, 입학 후 전공 적성이 맞지 않아 중도 이탈하는 경우가 있습니다. 경영은 수학·사회 교과와 정량적 활동, 미디어는 콘텐츠·탐구 기록, 행정은 사회 교과와 공공 관련 활동이 있는 학생에게 설명이 됩니다. 본인 생기부에 이미 쌓인 증거를 기준으로 1지망을 정하는 것이 맞습니다.\n\n1지망은 적성과 기록이 겹치는 학과로 두고, 취업 연계가 좋은 학과는 성적대에 맞는 안정·적정에 배치하세요. 세 개를 동시에 1순위로 두면 원서가 흩어집니다. 중상위권에서는 ‘잘 갈 수 있는 학과’와 ‘가고 싶은 학과’를 한 장씩 나누는 구성이 현실적입니다.",
          answerDate: "2026. 03. 15"
        },
        {
          id: "p4-3",
          tags: ["수시", "답변 완료"],
          title: "지역거점국립대와 수도권 사립 중 어디를 우선해야 하나요?",
          excerpt: "성적대가 비슷해서 캠퍼스 생활과 취업을 같이 보고 싶습니다. 중상위권에서 우선순위를 어떻게 잡으면 될까요?",
          date: "2026. 03. 08",
          views: 176,
          answer: "성적대가 비슷하면 대학 브랜드만 놓고 고르기 어렵습니다. 거점국립대는 학비·장학금과 캠퍼스 생활에서 이점이 있고, 수도권 사립은 인턴과 취업 네트워크 접근이 빠른 편입니다. 우선순위는 ‘어느 쪽이 더 좋아 보이는가’가 아니라, 희망 학과의 교육과정과 본인 생활 여건이 어디에 맞는지입니다.\n\n희망 학과가 강한 쪽을 적정 이상으로 두고, 다른 한쪽은 안정 카드로 섞으세요. 예를 들어 행정·사회 계열이 목표면 거점국립대의 해당 학과를 먼저 보고, 미디어·경영처럼 산업 접근이 중요하면 수도권 비중을 높이는 식입니다. 중상위권에서는 한 축을 주력으로 정해야 원서가 흔들리지 않습니다.",
          answerDate: "2026. 03. 09"
        }
      ]
    }
  };
  const qnaMyQuestions = [
    {
      id: "m1",
      consultantId: "2",
      tags: ["의치한", "답변 대기"],
      title: "의대 소신 지원과 SKY 적정 지원을 어떻게 배치해야 하나요?",
      body: "의대는 소신으로 넣고 싶고, SKY 자연계는 적정으로 두고 싶습니다. 수시와 정시를 함께 볼 때 원서 장수를 어떻게 나누는 게 맞을까요?",
      date: "2026. 04. 11",
      views: 86
    },
    {
      id: "m2",
      consultantId: "1",
      tags: ["SKY", "답변 완료"],
      title: "정시 가군에서 서울대를 소신으로 넣는 게 맞을까요?",
      body: "수학은 강한데 국어와 탐구가 조금 아쉽습니다. 가군에 서울대를 소신으로 넣고 나·다군을 안정으로 갈지, 서울대를 빼는 게 나을지 고민입니다.",
      date: "2026. 04. 03",
      views: 142,
      answer: "수학이 강해도 서울대 자연계는 국어·탐구가 받쳐 주지 않으면 가군 소신으로도 부담이 됩니다. 다만 빼 버리면 나중에 성적이 올랐을 때 넣을 자리가 없으니, 가군 소신 1장으로 남기는 편이 맞습니다. 대신 나군에는 연고대 적정을 반드시 두고, 다군은 합격이 가능한 안정으로 채우세요.\n\n핵심은 서울대를 ‘희망’이 아니라 ‘남는 한 장’으로 취급하는 것입니다. 국어와 탐구가 최근 3회에서 회복되는지를 보고, 회복되지 않으면 나·다군의 안정 비중을 더 늘리세요. 가군을 비우는 것보다, 소신 한 장을 관리하는 쪽이 전략적으로 덜 위험합니다.",
      answerDate: "2026. 04. 04"
    },
    {
      id: "m3",
      consultantId: "3",
      tags: ["2028 대입", "답변 완료"],
      title: "8월 평가원 이후 목표대학을 낮춰야 할까요?",
      body: "6월보다 8월 성적이 내려갔습니다. 목표 대학을 바로 낮춰야 하는지, 9월까지 보고 결정해도 되는지 알고 싶습니다.",
      date: "2026. 03. 20",
      views: 118,
      answer: "8월 한 회로 목표 대학을 바로 내리면, 9월에 회복됐을 때 다시 올리기 어려워집니다. 6월보다 내려간 것은 분명한 신호이니 무시하면 안 되지만, 지금은 상단만 한 칸 낮춰 두고 하단 안정·적정은 유지하는 조정이 맞습니다. 목표 자체를 바꾸기보다 소신 카드의 대학 선을 조정한다고 생각하세요.\n\n9월 평가원 이후 같은 방향이면 그때 목표를 확정하면 됩니다. 반대로 회복되면 상단을 다시 올리면 되고, 내려간 상태를 기준선으로 고정할 필요는 없습니다. 한 달 성적으로 진학 지도를 바꾸지 말고, 최근 2회의 방향만 반영하는 것이 섬세한 운영입니다.",
      answerDate: "2026. 03. 21"
    },
    {
      id: "m4",
      consultantId: "4",
      tags: ["진로", "답변 완료"],
      title: "인문계 중상위권에서 복수전공을 보고 학과를 골라도 될까요?",
      body: "경영을 메인으로 두고 미디어나 행정 복수전공을 생각하고 있습니다. 중상위권 성적에서 이런 선택이 실제 진로에 도움이 될까요?",
      date: "2026. 03. 22",
      views: 97,
      answer: "복수전공을 염두에 두고 학과를 고르는 것은 가능합니다. 다만 입학 후 실제로 복수전공을 하는 비율과 허용 범위는 대학마다 다르고, 1전공 커리큘럼이 약하면 복수전공으로 만회하기 어렵습니다. 경영이 메인으로 맞다면 그 대학 경영학과의 수업·취업 구조가 먼저이고, 미디어·행정은 그 위에서 가능한지를 보는 순서입니다.\n\n중상위권에서는 1전공이 성적대에 맞는 경영을 우선 배치하고, 복수전공 가능 여부·경쟁 과목을 확인한 뒤 보조 전공을 고르세요. 처음부터 두 개를 동시에 목표로 두면 대학 선택이 흔들립니다. 진로를 넓히고 싶다면, 우선 잘 졸업할 수 있는 1전공을 고르는 것이 더 안전한 길입니다.",
      answerDate: "2026. 03. 23"
    }
  ];
  let currentQnaQuestions = [];
  let currentQnaConsultantId = "";
  let qnaThreadFrom = "";

  const labels = {
    home: "김메가 학생, 오늘도 파이팅🙌",
    scores: "성적 분석",
    analysis: "오답 분석",
    admission: "대학 진단",
    insight: "입시 인사이트",
    qna: "입시 전문가 Q&A"
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

    if (panelName === "home") {
      pageTitle.innerHTML = '김메가 학생, 오늘도 파이팅<span class="page-title-emoji">🙌</span>';
      return;
    }

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

  function activateQnaTab(name) {
    qnaTabs.forEach((tab) => {
      const isActive = tab.dataset.qna === name;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    qnaPanel?.querySelectorAll(".content-tab-panel[data-qna]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.qna === name);
    });
  }

  function activateQnaDetailTab(name) {
    qnaDetailTabs.forEach((tab) => {
      const isActive = tab.dataset.qnaDetail === name;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    qnaDetail?.querySelectorAll(".content-tab-panel[data-qna-detail]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.qnaDetail === name);
    });
  }

  function activateInsightTab(name) {
    insightTabs.forEach((tab) => {
      const isActive = tab.dataset.insight === name;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    insightPanel?.querySelectorAll(".content-tab-panel[data-insight]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.insight === name);
    });
  }

  function resetInsightView() {
    activateInsightTab("briefing");
  }

  const insightFirstItems = [
    {
      id: "054",
      category: "입시상식",
      title: "2027 논술전형 지원전략",
      date: "2026. 09. 04",
      views: 590,
      photo: "img/insight/1.png"
    },
    {
      id: "053",
      category: "입시상식",
      title: "나만 모르는 선택과목 고르는 법",
      date: "2026. 08. 28",
      views: 474,
      photo: "img/insight/2.png"
    },
    {
      id: "052",
      category: "고교생활",
      title: "내신 공부 별별 Q&A",
      date: "2026. 08. 21",
      views: 388,
      photo: "img/insight/3.png"
    },
    {
      id: "049",
      category: "입시상식",
      title: "2027학년도 논술전형은?",
      date: "2026. 07. 24",
      views: 1366,
      photo: "img/insight/4.png"
    },
    {
      id: "048",
      category: "입시상식",
      title: "2027학년도 학생부 교과전형은?",
      date: "2026. 07. 16",
      views: 634,
      photo: "img/insight/5.png"
    },
    {
      id: "047",
      category: "입시상식",
      title: "2027학년도 학생부 종합전형은?",
      date: "2026. 07. 10",
      views: 816,
      photo: "img/insight/6.png"
    },
    {
      id: "046",
      category: "입시상식",
      title: "2027학년도, 연세대학교는?",
      date: "2026. 07. 03",
      views: 1504,
      photo: "img/insight/7.png"
    },
    {
      id: "032",
      category: "입시용어",
      title: "알쏭달쏭 입시 신조어!",
      date: "2026. 01. 02",
      views: 1021,
      photo: "img/insight/8.png"
    }
  ];

  const insightReportItems = [
    {
      year: "2028",
      category: "지원전략",
      title: "내신 5등급제 시대, 대입의 Key는 결국 수능인 이유",
      date: "2026. 04. 28",
      views: 4809
    },
    {
      year: "2028",
      category: "지원전략",
      title: "학생부종합전형 자유전공학부, 오해와 진실 완벽 정리",
      date: "2026. 04. 16",
      views: 3797
    },
    {
      year: "2028",
      category: "의치한",
      title: "2027~2031 의대 정원 분석, 지역별 증원 인원은?",
      date: "2026. 04. 02",
      views: 7917
    },
    {
      year: "2027",
      category: "핫이슈",
      title: "[수시] 2028 내신 5등급제 실측 분석, 나의 내신 등급 위치는?",
      date: "2026. 03. 23",
      views: 7303
    },
    {
      year: "2027",
      category: "핫이슈",
      title: "학교폭력조치사항 의무 반영, 그 결과는?",
      date: "2026. 03. 20",
      views: 4827
    },
    {
      year: "2028",
      category: "핫이슈",
      title: "2028 대입, 주요 대학의 방향성은?",
      date: "2026. 03. 06",
      views: 5544
    },
    {
      year: "2027",
      category: "지원전략",
      title: "표준점수, 백분위, 등급 이해하기",
      date: "2026. 02. 20",
      views: 12491
    },
    {
      year: "2027",
      category: "의치한",
      title: "2027학년도부터 서울 제외 32개 의대에서 정원 단계적 증원",
      date: "2026. 02. 11",
      views: 8280
    }
  ];

  const insightNewsItems = [
    {
      year: "2027",
      category: "의치한",
      title: "[수시] [2027수시경쟁률] 전국 39개 의대 20.95대1 '하락'.. 성대 115.29대1 '의대 최고 경쟁률' 기록",
      date: "2026. 09. 15",
      views: 5412
    },
    {
      year: "2027",
      category: "핫이슈",
      title: "[수시] [2027수시경쟁률] 전국 44개교 논술 48.07대1 '역대 최고'.. '개편 전 막차' 수요 집중",
      date: "2026. 09. 14",
      views: 4454
    },
    {
      year: "2027",
      category: "핫이슈",
      title: "[2027 9월모평 가채점 배치표] 대구진협 서울대/연대 의예 297점 '최고', 성대/한양대 의예 이어서",
      date: "2026. 09. 07",
      views: 10515
    },
    {
      year: "2027",
      category: "지원전략",
      title: "[수시] [2027수시] '막판 점검' 의약계열 논술 3년간 경쟁률.. 치대 '하락세', 한의대 '상승'",
      date: "2026. 09. 04",
      views: 4887
    },
    {
      year: "2027",
      category: "핫이슈",
      title: "[2027대입잣대] 지난해 SKY 중도탈락 2012명 '4년내 최저'.. '2026의대원복' 영향 분석",
      date: "2026. 08. 31",
      views: 10134
    },
    {
      year: "2028",
      category: "핫이슈",
      title: "2028 대기고 계약학과 '13개교 19개학과 체제'.. 부산대 '한화그룹 첫 계약학과' 신설",
      date: "2026. 08. 14",
      views: 12582
    },
    {
      year: "2027",
      category: "핫이슈",
      title: "경찰대 2027경쟁률 91.6대1 '상승'.. '사관학교 상위권 수요 흡수했나' 분석",
      date: "2026. 08. 12",
      views: 6396
    },
    {
      year: "2027",
      category: "지원전략",
      title: "[수시] 서울대 고려대 등 11개 상위대학 입학처가 공개한 2027 면접 대비법.. '학생부 속 지문' 점검",
      date: "2026. 08. 11",
      views: 2880
    }
  ];

  const insightBriefingItems = [
    {
      grades: ["전 학년"],
      title: "9월 모의고사 LIVE 설명회",
      eventDate: "2026-09-02",
      registered: "2026-08-20",
      location: "메가스터디 온라인",
      speakers: "남윤곤 소장,국어 강민철,수학 현우진,영어 조정석,지리 이기상,역사·통사 이다지,윤리 김종익,사회문화 윤성훈,물리학 배기범,화학 고석용,생명과학 백호,지구과학 오지훈,통합과학 장풍",
      subtitle: "9월 모의고사 전 영역 분석 및 대입 전략",
      body: "과목별 총평부터 수능까지 학습 방향 & 대입 전략을 9월 모의고사 이후 가장 빠르게 LIVE로 전달해드립니다!",
      photo: "img/briefing/1.png"
    },
    {
      grades: ["고2", "고1"],
      title: "최상위권 수시 전략 설명회",
      eventDate: "2026-07-12",
      registered: "2026-06-28",
      location: "서울 대치 MEXX 학원",
      speakers: "장혁진 입시컨설턴트,목표달성 장학생&큐브 마스터",
      subtitle: "의대 합격 선배의 수시 전략",
      body: "고1-2 맞춤 입시 전략 & 의대 수시 합격 선배들이 직접 알려주는 생기부 관리법과 학습법을 공개합니다!",
      photo: "img/briefing/2.png"
    },
    {
      grades: ["전 학년"],
      title: "6월 모의고사 LIVE 설명회",
      eventDate: "2026-06-04",
      registered: "2026-05-22",
      location: "메가스터디 온라인",
      speakers: "남윤곤 소장,국어 강민철,수학 현우진,영어 조정석,지리 이기상,역사·통사 이다지,윤리 김종익,사회문화 윤성훈,물리학 배기범,화학 고석용,생명과학 백호,지구과학 오지훈,통합과학 장풍",
      subtitle: "6월 모의고사 전 영역 분석 및 대입 전략",
      body: "믿고 보는 라인업! 과목별 분석부터 앞으로의 학습 방향과 대입전략까지, 메가스터디 1타 선생님들이 학년별 포인트를 라이브로 정리해드립니다!",
      photo: "img/briefing/3.png"
    },
    {
      grades: ["전 학년"],
      title: "3월 학력평가 LIVE 설명회",
      eventDate: "2026-03-24",
      registered: "2026-03-12",
      location: "메가스터디 온라인",
      speakers: "남윤곤 소장,국어 강민철,수학 현우진,영어 조정석,통합사회 이다지,통합과학 장풍",
      subtitle: "3월 학평 전 영역 분석 및 입시 전략 가이드",
      body: "3월 학평 영역별 분석부터 학습 방향, 학년별 대입 전략까지 한 번에 정리해 드립니다!",
      photo: "img/briefing/4.png"
    }
  ];

  function insightReportCategoryClass(category) {
    if (category === "의치한") return "is-safe";
    if (category === "핫이슈") return "is-reach";
    return "is-fit";
  }

  function formatBriefingSpeakers(speakers) {
    const parts = String(speakers).split(/\s*,\s*/).filter(Boolean);
    const lines = [];
    for (let i = 0; i < parts.length; i += 7) {
      lines.push(parts.slice(i, i + 7).join(","));
    }
    return lines.join("<br>");
  }

  function insightBriefingGradeClass(grade) {
    if (grade === "고1") return "is-reach";
    if (grade === "고2") return "is-safe";
    if (grade === "고3") return "is-fit";
    return "is-fit";
  }

  function renderInsightFirst() {
    const list = insightPanel?.querySelector("[data-insight-first-list]");
    if (!list) return;
    const filter = insightPanel?.querySelector("[data-insight-first-filter]")?.value || "all";
    const sort = insightPanel?.querySelector("[data-insight-first-sort]")?.value || "latest";
    const items = insightFirstItems
      .filter((item) => filter === "all" || item.category === filter)
      .slice()
      .sort((a, b) => {
        if (sort === "views") return b.views - a.views;
        return parseQnaDate(b.date) - parseQnaDate(a.date);
      });
    if (!items.length) {
      list.innerHTML = `<div class="content-empty"><p>해당하는 자료가 없습니다.</p></div>`;
      return;
    }
    list.innerHTML = items.map((item) => `
      <article class="summary-card insight-card">
        <img class="insight-card-thumb" src="${item.photo}" alt="${item.title}">
        <div class="insight-card-body">
          <div class="qna-question-tags">
            <span class="adm-tier ${item.category === "고교생활" ? "is-fit" : item.category === "입시용어" ? "is-reach" : "is-safe"}">${item.category}</span>
          </div>
          <strong>${item.title}</strong>
          <p class="qna-question-meta">등록일 ${item.date} · 조회 ${item.views}회</p>
        </div>
      </article>
    `).join("");
  }

  function renderInsightTextCards(listAttr, filterAttr, sortAttr, source) {
    const list = insightPanel?.querySelector(listAttr);
    if (!list) return;
    const filter = insightPanel?.querySelector(filterAttr)?.value || "all";
    const sort = insightPanel?.querySelector(sortAttr)?.value || "latest";
    const items = source
      .filter((item) => filter === "all" || item.category === filter)
      .slice()
      .sort((a, b) => {
        if (sort === "views") return b.views - a.views;
        return parseQnaDate(b.date) - parseQnaDate(a.date);
      });
    if (!items.length) {
      list.innerHTML = `<div class="content-empty"><p>해당하는 자료가 없습니다.</p></div>`;
      return;
    }
    list.innerHTML = items.map((item) => `
      <article class="summary-card insight-card is-text">
        <div class="insight-card-body">
          <div class="qna-question-tags">
            <span class="adm-tier is-year">${item.year}학년도</span>
            <span class="adm-tier ${insightReportCategoryClass(item.category)}">${item.category}</span>
          </div>
          <strong>${item.title}</strong>
          <div class="insight-card-foot">
            <p class="qna-question-meta">등록일 ${item.date} · 조회 ${item.views}회</p>
            <button type="button" class="btn-adm-primary">자세히 보기</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  function renderInsightReport() {
    renderInsightTextCards("[data-insight-report-list]", "[data-insight-report-filter]", "[data-insight-report-sort]", insightReportItems);
  }

  function renderInsightNews() {
    renderInsightTextCards("[data-insight-news-list]", "[data-insight-news-filter]", "[data-insight-news-sort]", insightNewsItems);
  }

  function renderInsightBriefing() {
    const list = insightPanel?.querySelector("[data-insight-briefing-list]");
    if (!list) return;
    const filter = insightPanel?.querySelector("[data-insight-briefing-filter]")?.value || "all";
    const sort = insightPanel?.querySelector("[data-insight-briefing-sort]")?.value || "latest";
    const items = insightBriefingItems
      .filter((item) => filter === "all" || item.grades.includes(filter))
      .slice()
      .sort((a, b) => {
        if (sort === "soon") return parseQnaDate(a.eventDate) - parseQnaDate(b.eventDate);
        return parseQnaDate(b.registered) - parseQnaDate(a.registered);
      });
    if (!items.length) {
      list.innerHTML = `<div class="content-empty"><p>해당하는 자료가 없습니다.</p></div>`;
      return;
    }
    list.innerHTML = items.map((item) => `
      <article class="summary-card insight-briefing-card">
        <div class="insight-briefing-media">
          <img class="insight-briefing-thumb" src="${item.photo}" alt="${item.title}">
        </div>
        <div class="insight-briefing-body">
          <div class="qna-question-tags">
            ${item.grades.map((grade) => `<span class="adm-tier ${insightBriefingGradeClass(grade)}">${grade}</span>`).join("")}
          </div>
          <strong>${item.title}</strong>
          <p class="qna-question-meta">${item.eventDate} | ${item.location}</p>
          <p class="insight-briefing-speakers">${formatBriefingSpeakers(item.speakers)}</p>
          <em class="insight-briefing-sub">${item.subtitle}</em>
          <p class="insight-briefing-copy">${item.body}</p>
          <button type="button" class="btn-adm-primary">자세히 보기</button>
        </div>
      </article>
    `).join("");
  }

  function parseQnaDate(value) {
    const parts = String(value).match(/\d+/g) || [];
    const [year, month, day] = parts.map(Number);
    return new Date(year || 0, (month || 1) - 1, day || 1).getTime();
  }

  function qnaTagClass(tag) {
    if (tag === "답변 완료") return "is-safe";
    if (tag === "답변 대기") return "is-reach";
    return "is-fit";
  }

  function renderMyQuestionCard(item) {
    const consultant = qnaConsultants[item.consultantId];
    if (!consultant) return "";
    const waiting = (item.tags || []).includes("답변 대기");
    const tags = (item.tags || []).map((tag) => {
      return `<span class="adm-tier ${qnaTagClass(tag)}">${tag}</span>`;
    }).join("");
    return `
      <article class="summary-card qna-mine-card" data-qna-kind="mine" data-qna-id="${item.id}">
        <div class="qna-mine-main">
          <div class="qna-mine-copy">
            <div class="qna-mine-consultant">
              <img class="qna-mine-avatar" src="${consultant.photo}" alt="">
              <div>
                <strong>${consultant.title}</strong>
                <p>${consultant.focus}</p>
              </div>
            </div>
            <div class="qna-question-tags">${tags}</div>
            <strong>Q. ${item.title}</strong>
            <p class="qna-question-meta">작성일 ${item.date} · 조회 ${item.views}회</p>
          </div>
          <button type="button" class="btn-adm-primary">${waiting ? "질문 보기" : "답변 보기"}</button>
        </div>
      </article>
    `;
  }

  function renderMyQuestions(list, consultantId) {
    if (!list) return;
    const sort = list.closest(".content-tab-panel")?.querySelector("select");
    const questions = qnaMyQuestions
      .filter((item) => !consultantId || item.consultantId === consultantId)
      .slice()
      .sort((a, b) => {
        if (sort?.value === "views") return (b.views || 0) - (a.views || 0);
        return parseQnaDate(b.date) - parseQnaDate(a.date);
      });

    if (!questions.length) {
      list.innerHTML = `<div class="content-empty"><p>아직 등록된 질문이 없습니다.</p></div>`;
      return;
    }

    list.innerHTML = questions.map(renderMyQuestionCard).join("");
  }

  function renderHomeMyQuestions() {
    renderMyQuestions(qnaHome?.querySelector("[data-qna-mine-list]"));
  }

  function renderDetailMyQuestions() {
    renderMyQuestions(qnaDetail?.querySelector("[data-qna-detail-mine]"));
  }

  function renderConsultantQuestions() {
    const list = qnaDetail?.querySelector("[data-qna-questions]");
    const sort = qnaDetail?.querySelector("[data-qna-sort]");
    if (!list) return;

    const questions = currentQnaQuestions.slice();
    questions.sort((a, b) => {
      if (sort?.value === "views") return (b.views || 0) - (a.views || 0);
      return parseQnaDate(b.date) - parseQnaDate(a.date);
    });

    list.innerHTML = questions.map((item) => {
      const tags = (item.tags || []).map((tag) => {
        return `<span class="adm-tier ${qnaTagClass(tag)}">${tag}</span>`;
      }).join("");
      return `
        <article class="summary-card qna-question-card" data-qna-kind="public" data-qna-id="${item.id}">
          <div class="qna-question-tags">${tags}</div>
          <div class="qna-question-main">
            <div class="qna-question-copy">
              <strong>Q. ${item.title}</strong>
              <p>${item.excerpt}</p>
              <p class="qna-question-meta">등록일 ${item.date} · 조회 ${item.views}회</p>
            </div>
            <button type="button" class="btn-adm-primary">답변 보기</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function fillConsultantDetail(data) {
    const photo = qnaDetail?.querySelector("[data-qna-photo]");
    const code = qnaDetail?.querySelector("[data-qna-code]");
    const title = qnaDetail?.querySelector("[data-qna-title]");
    const focus = qnaDetail?.querySelector("[data-qna-focus]");
    const intro = qnaDetail?.querySelector("[data-qna-intro]");
    const highlight = qnaDetail?.querySelector("[data-qna-highlight]");
    const profile = qnaDetail?.querySelector("[data-qna-profile]");
    const sort = qnaDetail?.querySelector("[data-qna-sort]");

    if (photo) {
      photo.src = data.photo;
      photo.alt = data.title;
    }
    if (code) code.textContent = data.org || "";
    if (title) title.textContent = data.title;
    if (focus) focus.textContent = data.focus || "";
    if (intro) intro.textContent = data.intro;
    if (highlight) {
      const parts = String(data.highlight || "")
        .split(" · ")
        .map((part) => part.replace(/^#\s*/, "").trim())
        .filter(Boolean);
      highlight.textContent = parts.map((part) => `# ${part}`).join("  ");
    }
    if (profile) {
      profile.replaceChildren(
        ...data.profile.map((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          return li;
        })
      );
    }
    if (sort) sort.value = "latest";
    currentQnaQuestions = data.questions.slice();
    renderConsultantQuestions();
    renderDetailMyQuestions();
  }

  function qnaTagsHtml(tags) {
    return (tags || []).map((tag) => `<span class="adm-tier ${qnaTagClass(tag)}">${tag}</span>`).join("");
  }

  function findPublicQuestion(id) {
    return Object.entries(qnaConsultants).reduce((found, [consultantId, data]) => {
      if (found) return found;
      const item = (data.questions || []).find((question) => question.id === id);
      return item ? { item, consultantId, consultant: data } : null;
    }, null);
  }

  function qnaParagraphs(text) {
    return String(text || "")
      .replace(/\\n/g, "\n")
      .split(/\n+/)
      .flatMap((block) => block.split(/(?<=다\.|요\.|까\.|죠\.)\s+/))
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => `<p>${part}</p>`)
      .join("");
  }

  function fillQnaThread(item, consultant, dateLabel) {
    const questionBox = qnaThread?.querySelector("[data-qna-thread-question]");
    const answerBox = qnaThread?.querySelector("[data-qna-thread-answer]");
    if (!questionBox || !answerBox || !consultant) return;

    const waiting = (item.tags || []).includes("답변 대기") || !item.answer;
    const body = item.body || item.excerpt || "";
    questionBox.innerHTML = `
      <div class="qna-question-tags">${qnaTagsHtml(item.tags)}</div>
      <strong>Q. ${item.title}</strong>
      <div class="qna-thread-copy">
        <p>${body}</p>
      </div>
      <p class="qna-question-meta">${dateLabel} ${item.date} · 조회 ${item.views}회</p>
    `;

    if (waiting) {
      answerBox.innerHTML = `<div class="content-empty"><p>아직 답변이 등록되지 않았습니다.</p></div>`;
      return;
    }

    answerBox.innerHTML = `
      <article class="summary-card qna-thread-card">
        <div class="qna-mine-consultant">
          <img class="qna-mine-avatar" src="${consultant.photo}" alt="">
          <div>
            <strong>${consultant.title}</strong>
            <p>${consultant.focus}</p>
          </div>
        </div>
        <div class="qna-thread-copy">
          ${qnaParagraphs(item.answer)}
        </div>
        <p class="qna-question-meta">답변일 ${item.answerDate || item.date}</p>
      </article>
    `;
  }

  function closeQnaThread() {
    if (!qnaThread) return;
    qnaThread.setAttribute("hidden", "");
    if (qnaThreadFrom === "home-mine") {
      qnaHome?.removeAttribute("hidden");
      activateQnaTab("mine");
    } else if (qnaThreadFrom === "detail-mine") {
      qnaDetail?.removeAttribute("hidden");
      activateQnaDetailTab("mine");
    } else if (qnaThreadFrom === "detail-public") {
      qnaDetail?.removeAttribute("hidden");
      activateQnaDetailTab("public");
    } else {
      qnaHome?.removeAttribute("hidden");
    }
    qnaThreadFrom = "";
  }

  function openQnaThread(kind, id) {
    if (!qnaThread || !id) return;
    let found = null;
    let dateLabel = "등록일";

    if (kind === "mine") {
      const item = qnaMyQuestions.find((question) => question.id === id);
      const consultant = item ? qnaConsultants[item.consultantId] : null;
      if (!item || !consultant) return;
      found = { item, consultant };
      dateLabel = "작성일";
      qnaThreadFrom = qnaDetail?.hasAttribute("hidden") ? "home-mine" : "detail-mine";
    } else {
      found = findPublicQuestion(id);
      if (!found) return;
      qnaThreadFrom = "detail-public";
    }

    fillQnaThread(found.item, found.consultant, dateLabel);
    qnaHome?.setAttribute("hidden", "");
    qnaDetail?.setAttribute("hidden", "");
    qnaThread.removeAttribute("hidden");
    qnaForm?.setAttribute("hidden", "");
    scrollToMainTop();
  }

  function closeQnaAskForm() {
    if (!qnaForm) return;
    qnaForm.setAttribute("hidden", "");
    qnaDetail?.removeAttribute("hidden");
    activateQnaDetailTab("public");
    scrollToMainTop();
  }

  function openQnaAskForm() {
    const data = qnaConsultants[currentQnaConsultantId];
    if (!data || !qnaForm) return;

    const photo = qnaForm.querySelector("[data-qna-form-photo]");
    const name = qnaForm.querySelector("[data-qna-form-name]");
    const focus = qnaForm.querySelector("[data-qna-form-focus]");
    if (photo) {
      photo.src = data.photo;
      photo.alt = data.title;
    }
    if (name) name.textContent = data.title;
    if (focus) focus.textContent = data.highlight || data.focus || "";
    qnaAskForm?.reset();

    qnaHome?.setAttribute("hidden", "");
    qnaDetail?.setAttribute("hidden", "");
    qnaThread?.setAttribute("hidden", "");
    qnaForm.removeAttribute("hidden");
    scrollToMainTop();
  }

  function closeConsultantDetail() {
    qnaHome?.removeAttribute("hidden");
    qnaDetail?.setAttribute("hidden", "");
    qnaThread?.setAttribute("hidden", "");
    qnaForm?.setAttribute("hidden", "");
    activateQnaDetailTab("public");
    currentQnaQuestions = [];
    currentQnaConsultantId = "";
    qnaThreadFrom = "";
  }

  function openConsultantDetail(id) {
    const data = qnaConsultants[id];
    if (!data || !qnaDetail) return;
    currentQnaConsultantId = id;
    fillConsultantDetail(data);
    qnaHome?.setAttribute("hidden", "");
    qnaDetail.removeAttribute("hidden");
    qnaThread?.setAttribute("hidden", "");
    qnaForm?.setAttribute("hidden", "");
    activateQnaDetailTab("public");
    scrollToMainTop();
  }

  function resetQnaView() {
    closeConsultantDetail();
    activateQnaTab("consultants");
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
      window.AdmissionRegular?.initCustomSelects(wrongNote);
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

  function syncWrongNoteStatusUI(no, status) {
    const className = window.MegaReportData?.noteStatusClass?.(status) || "is-reach";
    const badge = analysisPanel?.querySelector(`[data-wrong-list-status="${no}"]`);
    if (badge) {
      badge.className = `adm-tier ${className}`;
      badge.textContent = status;
    }

    const statusSelect = analysisPanel?.querySelector("select[data-wrong-status]");
    if (!statusSelect) return;

    if (statusSelect.value !== status) {
      statusSelect.value = status;
    }

    const wrap = statusSelect.closest(".adm-custom-select");
    const label = wrap?.querySelector(".adm-custom-select-label");
    if (label) label.textContent = status;

    wrap?.querySelectorAll(".adm-custom-select-option").forEach((item) => {
      const selected = item.dataset.value === status;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-selected", selected ? "true" : "false");
    });
  }

  function activateTakenExam(root, month) {
    const selectAll =
      (root === analysisPanel && selectedNoteScope === "all") ||
      (root === scoresPanel && selectedScoreScope === "all");
    root?.querySelectorAll("[data-taken-exam]").forEach((cell) => {
      const isUpcoming = cell.classList.contains("is-upcoming");
      const isActive = !isUpcoming && (selectAll || cell.dataset.takenExam === String(month));
      cell.classList.toggle("active", isActive);
      cell.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function bindTakenExamPicker(root, onSelect) {
    if (!root) return;

    root.querySelectorAll("[data-taken-exam]").forEach((cell) => {
      cell.addEventListener("click", () => {
        if (cell.classList.contains("is-upcoming") || cell.getAttribute("aria-disabled") === "true") return;
        keepWindowScroll(() => {
          const month = cell.dataset.takenExam;
          activateTakenExam(root, month);
          onSelect?.(month);
        });
      });
    });
  }

  function defaultExamMonth() {
    return window.MegaReportData?.latestTakenMonth?.() || "6";
  }

  let selectedSubject = "국어";
  let selectedExamMonth = defaultExamMonth();
  let selectedStrategySubject = "국어";
  let selectedScoreScope = "selected";
  let selectedTrendSubject = "국수탐";

  function resetMypageView() {
    activateMypageTab("mock");
    activateSchoolGrade("1");
    activateMockMonth("3");
  }

  function resetRegularAdmissionView() {
    const month = defaultExamMonth();
    activateTakenExam(regularPanel, month);
    activateRegularMonth(month);
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
    selectedExamMonth = defaultExamMonth();
    selectedStrategySubject = "국어";
    selectedTrendSubject = "국수탐";
    activateScoreScope("selected");
    activateTakenExam(scoresPanel, selectedExamMonth);
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

  function parseExamDate(value) {
    const parts = String(value).match(/\d+/g) || [];
    const [year, month, day] = parts.map(Number);
    const date = new Date(year || 0, (month || 1) - 1, day || 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  function homeAsOfDate() {
    const asOf = window.MegaReportData?.reportAsOf;
    return asOf ? parseExamDate(asOf) : new Date(new Date().setHours(0, 0, 0, 0));
  }

  function formatHomeDday(value) {
    const target = parseExamDate(value);
    const today = homeAsOfDate();
    const diff = Math.round((target.getTime() - today.getTime()) / 86400000);
    if (diff > 0) return `D-${diff}`;
    if (diff === 0) return "D-DAY";
    return `D+${Math.abs(diff)}`;
  }

  function examDateValue(date) {
    const parts = String(date).match(/\d+/g) || [];
    const [year, month, day] = parts.map(Number);
    return new Date(year || 0, (month || 1) - 1, day || 1).setHours(0, 0, 0, 0);
  }

  function examDateIso(date) {
    const parts = String(date).match(/\d+/g) || [];
    const [year, month, day] = parts.map(Number);
    return `${year}-${String(month || 1).padStart(2, "0")}-${String(day || 1).padStart(2, "0")}`;
  }

  function renderHomeExams() {
    const list = document.querySelector("[data-home-exam-list]");
    const exams = window.MegaReportData?.upcomingExams || [];
    if (!list) return;

    const today = homeAsOfDate().getTime();
    const upcoming = exams
      .slice()
      .filter((exam) => examDateValue(exam.date) >= today)
      .sort((a, b) => examDateValue(a.date) - examDateValue(b.date))
      .slice(0, 3);

    list.innerHTML = upcoming.map((exam, index) => {
      const iso = examDateIso(exam.date);
      return `
        <article class="taken-exam-cell${index === 0 ? " active" : ""}">
          <time datetime="${iso}">${exam.date}</time>
          <strong>${exam.month}월 ${exam.name}</strong>
          <span class="taken-exam-foot"><b data-home-dday="${iso}"></b></span>
        </article>
      `;
    }).join("");
  }

  function refreshHomeDday() {
    document.querySelectorAll("[data-home-dday]").forEach((el) => {
      el.textContent = formatHomeDday(el.dataset.homeDday);
    });
  }

  function renderHomePreviews() {
    const insightBox = document.querySelector("[data-home-insight-preview]");
    const report = insightReportItems
      .slice()
      .sort((a, b) => parseQnaDate(b.date) - parseQnaDate(a.date))[0];
    if (insightBox && report) {
      insightBox.innerHTML = `
        <div class="qna-question-tags">
          <span class="adm-tier is-year">${report.year}학년도</span>
          <span class="adm-tier ${insightReportCategoryClass(report.category)}">${report.category}</span>
        </div>
        <strong>${report.title}</strong>
        <time>${report.date}</time>
      `;
    }

    const qnaBox = document.querySelector("[data-home-qna-preview]");
    const question = (qnaConsultants["1"]?.questions || [])
      .slice()
      .sort((a, b) => parseQnaDate(b.date) - parseQnaDate(a.date))[0];
    if (qnaBox && question) {
      const tags = (question.tags || [])
        .map((tag) => `<span class="adm-tier ${qnaTagClass(tag)}">${tag}</span>`)
        .join("");
      qnaBox.innerHTML = `
        <div class="qna-question-tags">${tags}</div>
        <strong>Q. ${question.title}</strong>
        <p>${question.excerpt}</p>
        <time>${question.date}</time>
      `;
    }
  }

  function openLatestScores() {
    activate("scores");
    selectedExamMonth = defaultExamMonth();
    selectedWrongNo = null;
    activateTakenExam(scoresPanel, selectedExamMonth);
    activateTakenExam(analysisPanel, selectedExamMonth);
    refreshStrategySubject();
    refreshAnalysisSummary();
    closeMenus();
    scrollToMainTop();
  }

  function openHome() {
    activate("home");
    closeMenus();
    scrollToMainTop();
  }

  function activate(panelName, subName) {
    resetMypageView();
    resetRegularAdmissionView();
    resetEarlyAdmissionView();
    resetScoreAnalysisView();
    resetAnalysisView();
    resetQnaView();
    resetInsightView();
    tabs.forEach((tab) => tab.classList.toggle("active", panelName !== "home" && tab.dataset.panel === panelName));
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

  document.querySelector("[data-open-home]")?.addEventListener("click", () => openHome());
  document.querySelector("[data-home-to-insight]")?.addEventListener("click", () => {
    activate("insight");
    closeMenus();
    scrollToMainTop();
  });
  document.querySelector("[data-home-to-qna]")?.addEventListener("click", () => {
    activate("qna");
    closeMenus();
    scrollToMainTop();
  });
  renderHomeExams();
  refreshHomeDday();
  renderHomePreviews();

  contentTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => activateMypageTab(tab.dataset.mypage));
    });
  });

  qnaTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => activateQnaTab(tab.dataset.qna));
    });
  });

  insightTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => activateInsightTab(tab.dataset.insight));
    });
  });

  renderInsightFirst();
  renderInsightReport();
  renderInsightNews();
  renderInsightBriefing();
  window.AdmissionRegular?.initCustomSelects(insightPanel);
  window.AdmissionRegular?.initCustomSelects(qnaPanel);
  insightPanel?.querySelector("[data-insight-first-filter]")?.addEventListener("change", () => {
    renderInsightFirst();
  });
  insightPanel?.querySelector("[data-insight-first-sort]")?.addEventListener("change", () => {
    renderInsightFirst();
  });
  insightPanel?.querySelector("[data-insight-report-filter]")?.addEventListener("change", () => {
    renderInsightReport();
  });
  insightPanel?.querySelector("[data-insight-report-sort]")?.addEventListener("change", () => {
    renderInsightReport();
  });
  insightPanel?.querySelector("[data-insight-news-filter]")?.addEventListener("change", () => {
    renderInsightNews();
  });
  insightPanel?.querySelector("[data-insight-news-sort]")?.addEventListener("change", () => {
    renderInsightNews();
  });
  insightPanel?.querySelector("[data-insight-briefing-filter]")?.addEventListener("change", () => {
    renderInsightBriefing();
  });
  insightPanel?.querySelector("[data-insight-briefing-sort]")?.addEventListener("change", () => {
    renderInsightBriefing();
  });

  qnaDetailTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      keepWindowScroll(() => activateQnaDetailTab(tab.dataset.qnaDetail));
    });
  });

  qnaPanel?.querySelector(".qna-consultant-grid")?.addEventListener("click", (event) => {
    const button = event.target.closest(".qna-consultant-card .btn-adm-primary");
    if (!button) return;
    const card = button.closest(".qna-consultant-card");
    if (!card) return;
    openConsultantDetail(card.dataset.consultantId);
  });

  qnaPanel?.querySelector("[data-qna-sort]")?.addEventListener("change", () => {
    renderConsultantQuestions();
  });

  qnaPanel?.querySelector("[data-qna-detail-mine-sort]")?.addEventListener("change", () => {
    renderDetailMyQuestions();
  });

  qnaPanel?.querySelector("[data-qna-back]")?.addEventListener("click", () => {
    resetQnaView();
  });

  qnaPanel?.querySelector("[data-qna-ask]")?.addEventListener("click", () => {
    openQnaAskForm();
  });

  qnaPanel?.querySelector("[data-qna-form-cancel]")?.addEventListener("click", () => {
    closeQnaAskForm();
  });

  qnaAskForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!currentQnaConsultantId) return;
    const formData = new FormData(qnaAskForm);
    const title = String(formData.get("title") || "").trim();
    const body = String(formData.get("body") || "").trim();
    const group = String(formData.get("group") || "").trim();
    if (!title || !body) return;

    qnaMyQuestions.unshift({
      id: `m${Date.now()}`,
      consultantId: currentQnaConsultantId,
      tags: [group || "질문", "답변 대기"],
      title,
      body,
      date: "2026. 04. 18",
      views: 0
    });
    renderHomeMyQuestions();
    renderDetailMyQuestions();
    closeQnaAskForm();
    activateQnaDetailTab("mine");
    scrollToMainTop();
  });

  qnaPanel?.querySelector("[data-qna-thread-back]")?.addEventListener("click", () => {
    closeQnaThread();
  });

  qnaPanel?.addEventListener("click", (event) => {
    const openBtn = event.target.closest("[data-qna-id] .btn-adm-primary");
    if (!openBtn) return;
    const card = openBtn.closest("[data-qna-id]");
    if (!card) return;
    openQnaThread(card.dataset.qnaKind, card.dataset.qnaId);
  });

  renderHomeMyQuestions();

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
      const no =
        selectedWrongNo ??
        Number(analysisPanel.querySelector("li.is-active[data-wrong-note-no]")?.dataset.wrongNoteNo);
      if (Number.isFinite(no)) {
        window.MegaReportData?.setWrongNoteState?.(selectedExamMonth, selectedSubject, no, {
          cause: cause.dataset.wrongCause
        });
        refreshAnalysisSummary();
        if (selectedSubject === selectedStrategySubject) refreshStrategySubject();
      }
    });
  });

  analysisPanel?.addEventListener("change", (event) => {
    const statusSelect = event.target.closest("select[data-wrong-status]");
    if (statusSelect) {
      const status = statusSelect.value;
      const no =
        selectedWrongNo ??
        Number(analysisPanel.querySelector("li.is-active[data-wrong-note-no]")?.dataset.wrongNoteNo);
      if (!Number.isFinite(no) || !status) return;
      selectedWrongNo = no;
      window.MegaReportData?.setWrongNoteStatus?.(selectedExamMonth, selectedSubject, no, status);
      syncWrongNoteStatusUI(no, status);
      return;
    }

    const input = event.target.closest(".wrong-note-checks input[data-wrong-check]");
    if (!input) return;

    const no =
      selectedWrongNo ??
      Number(analysisPanel.querySelector("li.is-active[data-wrong-note-no]")?.dataset.wrongNoteNo);
    if (!Number.isFinite(no)) return;

    selectedWrongNo = no;
    const checks = [...analysisPanel.querySelectorAll(".wrong-note-checks input[data-wrong-check]")].map(
      (el) => el.checked
    );
    const state = window.MegaReportData?.setWrongNoteChecks?.(selectedExamMonth, selectedSubject, no, checks);
    if (state?.status) syncWrongNoteStatusUI(no, state.status);
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
    refreshStrategySubject();
  });

  window.AdmissionRegular?.initCustomSelects(scoresPanel);
  window.AdmissionRegular?.initCustomSelects(regularPanel);
  window.AdmissionRegular?.initCustomSelects(analysisPanel);

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
    서울대학교: {
      학생부교과: { 지역균형전형: ["전기·정보공학부", "경영학과"] }
    },
    연세대학교: {
      학생부교과: { 추천형: ["전기전자공학부", "경영학과"] }
    },
    고려대학교: {
      학생부교과: { 학교추천전형: ["기계공학부", "경영학과"] }
    },
    성균관대학교: {
      학생부교과: { 학교장추천전형: ["소프트웨어학과", "경영학과"] }
    },
    한양대학교: {
      학생부교과: { "학생부교과(추천)": ["기계공학부", "컴퓨터소프트웨어학부"] }
    },
    서강대학교: {
      학생부교과: { 고교장추천: ["컴퓨터공학과", "경영학부"] }
    },
    중앙대학교: {
      학생부교과: { "학생부교과(지역균형)": ["경영학부", "소프트웨어학부"] }
    },
    경희대학교: {
      학생부교과: { 지역균형전형: ["화학공학과", "경영학과"] }
    }
  };
  const EARLY_TARGET_DEFAULTS = {
    e1: { university: "고려대학교", category: "학생부교과", type: "학교추천전형", major: "기계공학부", cutoff: 93.5 },
    e2: { university: "한양대학교", category: "학생부교과", type: "학생부교과(추천)", major: "기계공학부", cutoff: 90.8 },
    e3: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e4: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e5: { university: "", category: "", type: "", major: "", cutoff: 0 },
    e6: { university: "", category: "", type: "", major: "", cutoff: 0 }
  };
  const EARLY_LIST_ROWS = [
    { id: 1, region: "서울", university: "서울대학교", category: "교과", type: "지역균형전형", major: "전기·정보공학부", quota: 16, rate: 6.2, myScore: "89.1", cutoff: "92.4", diff: -3.3, csat: "3개 합 7", csatMet: "충족", track: "자연", tier: { label: "상향", className: "is-reach" }, gradeMin: 1.10, gradeMax: 1.48 },
    { id: 2, region: "서울", university: "연세대학교", category: "교과", type: "추천형", major: "전기전자공학부", quota: 20, rate: 5.8, myScore: "842", cutoff: "850.5", diff: -8.5, csat: "3개 합 7", csatMet: "충족", track: "자연", tier: { label: "상향", className: "is-reach" }, gradeMin: 1.22, gradeMax: 1.62 },
    { id: 3, region: "서울", university: "고려대학교", category: "교과", type: "학교추천전형", major: "기계공학부", quota: 18, rate: 8.4, myScore: "89.1", cutoff: "92.4", diff: -3.3, csat: "3개 합 7", csatMet: "충족", track: "자연", tier: { label: "상향", className: "is-reach" }, gradeMin: 1.40, gradeMax: 1.82 },
    { id: 4, region: "서울", university: "성균관대학교", category: "교과", type: "학교장추천전형", major: "소프트웨어학과", quota: 25, rate: 7.6, myScore: "842", cutoff: "850.5", diff: -8.5, csat: "3개 합 7", csatMet: "충족", track: "자연", tier: { label: "적정", className: "is-fit" }, gradeMin: 1.72, gradeMax: 2.18 },
    { id: 5, region: "서울", university: "한양대학교", category: "교과", type: "학생부교과(추천)", major: "기계공학부", quota: 22, rate: 9.1, myScore: "89.1", cutoff: "90.8", diff: -1.7, csat: "3개 합 7", csatMet: "충족", track: "자연", tier: { label: "적정", className: "is-fit" }, gradeMin: 1.68, gradeMax: 2.12 },
    { id: 6, region: "서울", university: "서강대학교", category: "교과", type: "고교장추천", major: "컴퓨터공학과", quota: 24, rate: 8.2, myScore: "89.1", cutoff: "90.0", diff: -0.9, csat: "3개 합 7", csatMet: "충족", track: "자연", tier: { label: "적정", className: "is-fit" }, gradeMin: 1.85, gradeMax: 2.22 },
    { id: 7, region: "서울", university: "중앙대학교", category: "교과", type: "학생부교과(지역균형)", major: "경영학부", quota: 26, rate: 8.2, myScore: "701.5", cutoff: "698.2", diff: 3.3, csat: "3개 합 7", csatMet: "충족", track: "인문", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.12, gradeMax: 2.58 },
    { id: 8, region: "서울", university: "경희대학교", category: "교과", type: "지역균형전형", major: "화학공학과", quota: 20, rate: 7.4, myScore: "86.5", cutoff: "88.0", diff: -1.5, csat: "2개 합 5", csatMet: "충족", track: "자연", tier: { label: "안정", className: "is-safe" }, gradeMin: 2.08, gradeMax: 2.50 }
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
    if (!Number.isFinite(raw) || raw <= 0) return window.MegaReportData?.schoolOverallGrade?.() ?? 2.02;
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

  function earlyCsatMet(text) {
    if (!text || text === "없음") return "해당없음";
    const match = String(text).match(/(\d+)개\s*합\s*(\d+)/);
    if (!match) return "해당없음";
    const count = Number(match[1]);
    const limit = Number(match[2]);
    const rows = window.MegaReportData?.mockSamples?.["6"] || [];
    const gradeOf = (name) => {
      const grade = rows.find((row) => row[1] === name)?.[5];
      return typeof grade === "number" ? grade : null;
    };
    const inquiry = [gradeOf("통합사회"), gradeOf("통합과학")].filter((grade) => grade != null);
    const grades = [gradeOf("국어"), gradeOf("수학"), gradeOf("영어"), inquiry.length ? Math.min(...inquiry) : null]
      .filter((grade) => grade != null)
      .sort((a, b) => a - b);
    if (grades.length < count) return "미충족";
    const sum = grades.slice(0, count).reduce((total, grade) => total + grade, 0);
    return sum <= limit ? "충족" : "미충족";
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
            <td class="adm-csat-plain">${earlyCsatMet(row.csat)}</td>`
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
  activate("home");
})();
