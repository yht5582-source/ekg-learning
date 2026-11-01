// 示範病例與考題。心電圖取自 PTB-XL（CC BY 4.0）；數值為本站由訊號中位數心搏與放大圖量測，取整數。臨床情境為本站設計。
// 步驟欄位：t 解說、leads 要標亮的導程、strip 標亮節律條、marks 節律條上的量尺 [起秒, 迄秒, 文字]
const demoStepNames=['校正與品質','心率與規則性','P 波與房室關係','間期與心軸','12 導程與 ST–T','整合與比較'];
const demos=[
{ptb:13413,title:'運動前的體檢',who:'18 歲男性',story:'準備加入校隊，做運動前篩檢。無症狀、無家族猝死史。',label:'NORM 正常 ECG',dx:'竇性心律（輕度竇性不整），正常 12 導程心電圖',
steps:[
{t:'校正波為 10 mm/mV、紙速 25 mm/s，基線穩定。先看 aVR：P、QRS、T 都向下，這是肢導程沒有接反的快速檢查。',leads:['aVR']},
{t:'10 秒內數到 11 個 QRS，×6 ≈ 66/min。R–R 在 0.74–0.94 秒之間緩慢變化，不是突然提早，符合輕度竇性不整；年輕人常見。',strip:1,marks:[[.355,1.29,'R–R 0.93 s']]},
{t:'II 導程 P 波向上、aVR 向下，表示激動來自竇房結。每個 P 後面都有 QRS，每個 QRS 前面都有 P，PR 固定。',leads:['II','aVR'],strip:1},
{t:'PR 約 190 ms（<200 ms，接近上限）；QRS 約 70–80 ms；QT 約 350 ms，以 R–R 0.9 秒校正 QTc 約 370 ms（Bazett）。I、aVF 皆正向，心軸約 +80°，瘦高的年輕人偏垂直屬常見。',strip:1,marks:[[.1425,.3375,'PR'],[.3375,.41,'QRS'],[.3375,.69,'QT']]},
{t:'V1、V2 為 rS，V3 起 R 波大於 S 波，R 波進展正常。沒有病理性 Q 波，ST 在基線。T 波在 aVR 向下屬正常，V1、aVL 偏平，其餘直立。V3、V4 電壓偏高在年輕人很常見，不等於左心室肥大。',leads:['V1','V2','V3','V4','V5','V6']},
{t:'把各步驟串起來：竇性、規則性可接受、間期正常、心軸正常、沒有缺血或肥厚證據。沒有舊圖也可以下結論，因為沒有需要比較的異常。'}],
report:'竇性心律，心率約 66–70/min，輕度竇性不整；PR 190 ms、QRS 80 ms、QTc 370 ms；心軸約 +80°；無病理性 Q 波或 ST–T 異常。',
next:['與症狀及家族史一起評估：運動中暈厥、胸痛或早發猝死家族史，仍需進一步檢查。','無症狀時不需因這張圖追加檢查。'],
trap:'正常靜止 ECG 不能排除冠心病、間歇性心律不整或所有遺傳性心臟病。',source:'normal-sinus-rhythm-ecg-library/'},

{ptb:20406,title:'斷斷續續的心悸',who:'58 歲男性',story:'一週來間歇心悸，現在血壓 128/76、血氧正常，無胸痛。',label:'AFIB 心房顫動',dx:'心房顫動，心室反應約 66/min',
steps:[
{t:'校正與導程正常，整體雜訊少。特別留意 V1 基線連續的細小起伏；它分布在每個心搏之間，正是下一步要判斷的心房活動，不要直接當成雜訊略過。',leads:['V1']},
{t:'11 個 QRS，×6 ≈ 66/min。R–R 約 0.6–1.6 秒且毫無規律（節律條上長短相鄰的兩段可比較）。因為不規則，要用 10 秒計數法，不能用 300 ÷ 大格數。',strip:1,marks:[[3.34,4.9,'1.56 s'],[4.9,5.54,'0.64 s']]},
{t:'II 導程找不到一致的 P 波；V1 可見不規則顫動波，頻率約 400–500/min。沒有 P 波，自然也沒有 PR 可量。「不規則」加「沒有一致 P 波」兩者同時成立才判 AF。',leads:['II','V1'],strip:1},
{t:'QRS 窄（<100 ms），代表沿正常傳導系統下傳。QT 約 310 ms，AF 時 QT 隨 R–R 變化，要平均多個心搏再校正，不能只量一跳。I、aVF 正向，心軸約 +30°。',strip:1},
{t:'胸前 R 波在 V4–V5 轉換；沒有病理性 Q 波或明顯的 ST 偏移，T 波直立。',leads:['V1','V2','V3','V4','V5','V6']},
{t:'血行動力學穩定、心室率不快，所以焦點不是緊急電擊，而是發作時間、中風風險與找原因。'}],
report:'心房顫動，平均心室率約 66/min，R–R 0.6–1.6 秒；QRS 窄；心軸約 +30°；無急性缺血變化。',
next:['確認發作時間與血栓風險（CHA₂DS₂-VA／VASc），決定抗凝。','找誘因：甲狀腺功能、電解質、感染、酒精、睡眠呼吸中止、結構性心臟病。','複律與否依症狀、發作時間與抗凝狀態決定。'],
trap:'原始報告寫「心房顫動／撲動」：不等比傳導的心房撲動也會不規則，但有規律的 F 波；MAT 則有 ≥3 種形態的 P 波。',source:'atrial-fibrillation-ecg-library/'},

{ptb:3375,title:'三天前的胸痛',who:'61 歲男性',story:'三天前胸痛約兩小時後自行緩解，未就醫；今天因活動時喘來門診，目前無胸痛。',label:'ASMI＋ALMI 前中膈／前側壁心肌梗塞，Stadium II；另標註 QWAVE、INVT',dx:'前壁（前中膈至前側壁）心肌梗塞，演變中：Q 波、殘存 ST 抬高與 T 波倒置並存',
steps:[
{t:'校正正常。肢導程有輕微高頻雜訊，但不影響判讀。胸前導程看起來明顯異常時，先確認不是電極位置造成：這張從 V1 到 V6 的變化連續，不像單一電極貼錯。',leads:['V1','V2','V3','V4','V5','V6']},
{t:'17 個 QRS，×6 ≈ 102/min；R–R 0.59–0.62 秒，很規則。竇性頻脈本身就是線索：喘、心衰竭、疼痛或低血容都要想。',strip:1,marks:[[.71,1.33,'R–R 0.61 s']]},
{t:'II 導程 P 波向上，1:1 下傳，竇性。沒有房室傳導阻滯；前壁梗塞若出現新的高度阻滯，預後較差，一定要看這一步。',leads:['II'],strip:1},
{t:'PR 約 150 ms；QRS 窄，約 80–90 ms；QT 約 300 ms，QTc 約 385 ms。I 正向、aVF 小幅正向，心軸約 +20°。',strip:1,marks:[[.525,.68,'PR'],[.68,.98,'QT']]},
{t:'三件事同時出現：① V1–V3 呈 QS，V4 只剩極小 r 波；② ST 仍抬高且呈凸面，J 點後 60 ms 約 V2 2.9 mm、V3 1.7 mm、V4 1.2 mm；③ T 波倒置見於 I、aVL、V3–V6。範圍涵蓋左前降支供應區。',leads:['V1','V2','V3','V4','V5','V6','I','aVL']},
{t:'Q 波加殘存 ST 抬高加 T 倒置，符合「梗塞已數小時以上、正在演變」，與三天前胸痛的情境相符。原始報告也寫「可能為近期，建議緊急心臟科評估」。無法只憑這張圖定出確切時間。'}],
report:'竇性頻脈約 100/min；PR 150 ms、QRS 窄；V1–V3 QS、V4 r 波極小，V2–V4 凸面 ST 抬高，I、aVL、V3–V6 T 波倒置，符合演變中的前壁心肌梗塞。',
next:['立即比較舊圖、連續肌鈣蛋白，並緊急會診心臟科。','心臟超音波看壁運動、心室功能、機械併發症與心尖血栓。','若胸痛復發、ST 動態變化或血行動力學不穩，即啟動緊急再灌流評估。'],
trap:'Q 波伴 ST 持續抬高數週以上，要想到左心室室壁瘤；沒有舊圖時不能假設是舊變化。V1–V3 R 波消失也可由電極位置、LBBB 或 LVH 造成，需核對。',source:'anterior-myocardial-infarction-ecg-library/'},

{ptb:19428,title:'電腦說下壁損傷',who:'24 歲女性',story:'數年來反覆「突然開始、突然停止」的心悸。今天無症狀，機器報告寫「下壁心肌損傷、高側壁缺血可能」。',label:'WPW 預激症候群（另標註 ABQRS 異常 QRS）',dx:'預激（WPW 型態），下壁假性 Q 波與繼發性 T 波變化',
steps:[
{t:'校正與基線都良好。先別被機器報告帶著走：判讀順序不變，P 波與 PR 還沒看之前，不要先下「心肌損傷」的結論。',strip:1},
{t:'10 個 QRS，×6 ≈ 60/min；R–R 0.92–1.08 秒，規則。24 歲、無胸痛，與「下壁心肌損傷」的臨床機率明顯不符。',strip:1,marks:[[.845,1.82,'R–R 0.98 s']]},
{t:'每個 QRS 前都有 P 波，但 P 波非常靠近 QRS，P 與 QRS 之間幾乎沒有平坦的 PR 段，這是關鍵線索。',leads:['II'],strip:1},
{t:'PR 約 100 ms（<120 ms）。放大 V4、V5：R 波起點緩慢上升（delta 波），整個 QRS 約 100 ms。心軸偏左（I 正向、aVF 接近等電位）。預激時心軸與 QRS 都受旁路影響，不能照一般標準解讀。',leads:['V4','V5'],strip:1,marks:[[1.7,1.795,'PR'],[1.795,1.89,'QRS']]},
{t:'III、aVF 起始向下，是負向 delta 波，形狀像 Q 波，也就是機器判為下壁損傷的原因。I、aVL、V1、V2 的 T 波倒置，則是去極化順序異常造成的繼發變化。',leads:['III','aVF','I','aVL','V1','V2']},
{t:'短 PR＋delta 波＋相應的繼發 ST–T 變化＝預激。加上陣發性心悸病史，應考慮 WPW 症候群；這不是心肌梗塞，也不要因這張圖啟動缺血流程。'}],
report:'竇性心律約 60/min；PR 約 100 ms，QRS 約 100 ms 並見 delta 波；III、aVF 負向 delta 波呈假性 Q 波；I、aVL、V1–V2 繼發性 T 倒置；符合預激（WPW 型態）。',
next:['轉介心臟電生理科評估旁路風險，討論電燒。','若有心悸發作，盡量取得發作時的 12 導程。','告知病人：日後若發生心房顫動，不應使用 AV 結阻斷藥物。'],
trap:'電腦判讀常把負向 delta 波判為梗塞。預激也會掩蓋真正的缺血或束支阻滯，所以有症狀時仍要配合臨床與檢驗，不要反向一律排除。',source:'pre-excitation-syndromes-ecg-library/'},

{ptb:1370,title:'爬樓梯會喘的年輕人',who:'27 歲女性',story:'半年來爬樓梯會喘，偶爾胸悶；血壓尚未測量。沒有舊心電圖可比較。',label:'LVH 左心室肥大（共識標註來源之一亦含 ISC_）',dx:'左心室肥大電壓標準陽性，合併側壁再極化異常（strain 型態）',
steps:[
{t:'校正正常。II 節律條在約 0.95 秒與 2.6 秒有細小尖刺，與心搏沒有固定關係，是雜訊，不是節律器尖波。V5、V6 與 V2、V3 波形很高，在紙上互相重疊，測量時要看清楚是哪個導程。',strip:1,leads:['V2','V3','V5','V6']},
{t:'11 個 QRS，×6 ≈ 66/min；R–R 0.88–0.91 秒，規則。',strip:1,marks:[[.31,1.21,'R–R 0.90 s']]},
{t:'II 導程 P 波向上，1:1 下傳，PR 固定，竇性。',leads:['II'],strip:1},
{t:'PR 約 190 ms；QRS 約 80–90 ms，不寬，可以先排除束支阻滯造成的高電壓。QT 約 360 ms，QTc 約 380 ms。I 正向、aVF 小幅正向，心軸約 +10°。',strip:1,marks:[[.99,1.175,'PR'],[1.175,1.26,'QRS'],[1.175,1.535,'QT']]},
{t:'電壓：S(V1) 1.6 mV＋R(V5) 2.1 mV＝3.7 mV，達 Sokolow–Lyon ≥3.5 mV；R(aVL) 0.86＋S(V3) 1.65＝2.5 mV，達 Cornell 女性 >2.0 mV。再極化：V5、V6 的 T 波不對稱倒置（V5 約 2.6 mm），這是單純高電壓不會有的表現。',leads:['V1','V3','V5','V6','aVL']},
{t:'年輕人單看胸前電壓容易偽陽性，但這裡有兩組標準陽性加上側壁 T 倒置，加上有症狀，就不能只當成體型造成。ECG 只能提出懷疑，肥厚的確認與病因要靠影像。'}],
report:'竇性心律約 66/min；PR 190 ms、QRS 不寬、QTc 380 ms；符合 Sokolow–Lyon 與 Cornell 電壓標準；V5–V6 T 波倒置；符合左心室肥大合併 strain 型態。',
next:['量血壓（雙上肢）並聽診心雜音。','安排心臟超音波：肥厚型心肌病變、主動脈瓣狹窄或主動脈窄縮、高血壓性心臟病。','詢問猝死家族史；確認前先避免劇烈運動。'],
trap:'電壓標準敏感度低、在年輕或瘦的人又容易偽陽性。側壁 T 倒置的鑑別也包括缺血與心肌病變，有胸痛時要先排除急性冠心症。',source:'left-ventricular-hypertrophy-lvh-ecg-library/'},

{ptb:2218,title:'節律器門診追蹤',who:'78 歲男性',story:'多年前植入節律器，今天例行追蹤，沒有暈厥或胸痛。實習同學問：II、III、aVF、V3、V4 ST 抬高，要不要叫心導管？',label:'PACE 節律器節律',dx:'心室起搏節律，尖波後皆有寬 QRS；ST–T 為起搏造成的繼發變化',
steps:[
{t:'先看病人背景，再看圖：這張圖尖波很明顯，V1 最清楚。本站紀錄經降頻至 250 Hz，尖波高度僅供參考。尖波細小時可能被機器濾掉，看不到不代表沒有起搏。',leads:['V1'],strip:1},
{t:'14 個 QRS，×6 ≈ 84/min；尖波間距約 0.64–0.78 秒，略有變化。這張圖不足以判斷間距變化的原因，需配合節律器設定解讀。',strip:1,marks:[[.65,1.4,'尖波間距 0.75 s']]},
{t:'II、V1 在尖波前看不到明確而一致的 P 波，所以這張圖無法確定心房活動與起搏模式（例如 VVI 或追蹤心房的 DDD）。寫「無法判定」比猜測更正確。',leads:['II','V1'],strip:1},
{t:'每個尖波後都緊接寬 QRS（約 150–160 ms），表示這段紀錄中有心室夾獲（capture）。II、III、aVF 主波向下，為上方心軸，寬 QRS 來自心室直接被起搏。PR 與 QT 在起搏節律中的意義有限。',leads:['II','III','aVF'],strip:1,marks:[[.65,.805,'QRS']]},
{t:'下壁與左胸導程主波向下，符合右心室心尖起搏常見型態（導線實際位置仍需看病歷或影像）。主波向下的導程 ST 抬高、T 波直立，方向與 QRS 相反（discordant）——這是預期的繼發變化，不是急性損傷。',leads:['II','III','aVF','V3','V4','V5','V6']},
{t:'回答實習同學：無胸痛、ST 抬高與 QRS 主波方向相反，符合起搏節律，不需因這張圖啟動心導管。原始報告也寫「節律器功能看似正常，異常波形使進一步判讀受限」。'}],
report:'心室起搏節律，約 84/min；每個尖波後皆有寬 QRS（約 150–160 ms）；上方心軸；ST–T 與 QRS 方向相反，符合繼發性變化；心房活動無法判定。',
next:['例行節律器程控：感知、閾值、電池與導線參數。','有胸痛時比較舊圖，留意與 QRS 同向的 ST 偏移（modified Sgarbossa 的概念可參考，但起搏節律的證據較有限）。'],
trap:'單張 ECG 只能看這 10 秒。尖波後沒有 QRS＝夾獲失敗；該出現尖波卻沒出現，或尖波不該出現時出現＝感知問題。沒有發生不代表沒有問題，要靠程控。',source:'pacemaker-rhythms-normal-patterns/'}
];

// 考題：單選、選項順序固定（A–D 正解各 5 題），方便出題者對答案。
// ptb 真實紀錄；type/rate 本站示意波形；img 外部圖例；三者皆無則為純文字題。
const examRecords={12542:'AFIB 心房顫動',2739:'AFLT 心房撲動（2:1 傳導）',6727:'1AVB 第一度房室傳導阻滯',19260:'LAFB 左前分支阻滯',4757:'CRBBB 完全右束支阻滯',20966:'CLBBB 完全左束支阻滯，並標註 AFIB、VES',13326:'IMI 下壁心肌梗塞（Stadium II–III）'};
const exam=[
{dom:'節律與計算',ptb:12542,stem:'83 歲女性，例行心電圖。下方 II 節律條為 10 秒紀錄。最符合的判讀是？',opts:['竇性緩脈，約 48/min','心房顫動合併緩慢心室反應，約 48/min','完全房室傳導阻滯，約 30/min','2:1 房室傳導阻滯，約 96/min'],correct:1,why:'節律條共 8 個 QRS，×6 ≈ 48/min。R–R 約 0.93–1.63 秒且不規則，也沒有一致的 P 波，符合 AF。竇性緩脈要有一致的 P 波；完全阻滯的逸搏心律通常規則。',ref:'atrial-fibrillation-ecg-library/'},
{dom:'節律與計算',ptb:2739,stem:'89 歲男性，心悸。規則的快速心律。最符合的判讀是？',opts:['心房撲動 2:1 傳導','竇性心搏過速','心房顫動','單形性心室頻脈'],correct:0,why:'R–R 固定約 0.41 秒，心室率約 147/min，QRS 不寬。II、III、aVF 的基線連續起伏、沒有平坦的等電位線，心房約 295/min、每 2 次下傳 1 次。規則、固定在接近 150/min 的窄 QRS 頻脈，要主動找 F 波。',ref:'atrial-flutter-ecg-library/'},
{dom:'傳導阻滯',type:'chb',rate:35,stem:'80 歲，突發暈眩。心房約 90/min，心室約 35/min。最符合的判讀是？',opts:['第一度房室傳導阻滯','Mobitz I（Wenckebach）','完全房室傳導阻滯','竇性緩脈'],correct:2,why:'P 波與 QRS 各自規則，PR 不斷改變、彼此沒有傳導關係，心房率大於心室率，符合完全房室傳導阻滯。',ref:'av-block-3rd-degree-complete-heart-block/'},
{dom:'傳導阻滯',type:'mobitz2',rate:72,stem:'76 歲，有束支阻滯病史，近一週兩次暈厥，目前血壓穩定。這段節律的 PR 固定，P 波準時卻偶爾沒有下傳。最適當的處置方向是？',opts:['門診追蹤，半年後重做 ECG','持續監測、備好經皮起搏，評估永久節律器','開始 β 阻斷劑控制心率','確定是良性，不需特別處理'],correct:1,why:'這是 Mobitz II，阻滯多在 His–Purkinje 系統以下，可能突然進展為完全阻滯。有症狀時應監測並評估節律器；atropine 對結下阻滯常無效。β 阻斷劑會加重傳導問題。',ref:'av-block-2nd-degree-mobitz-ii-hay-block/'},
{dom:'傳導阻滯',ptb:6727,stem:'28 歲女性，無症狀。請量 II 節律條的 PR 間期，最接近哪一項？',opts:['約 100 ms，預激','約 160 ms，正常','約 200 ms，正常上限','約 250 ms，第一度房室傳導阻滯'],correct:3,why:'P 波起點到 QRS 起點約 6 小格（每小格 40 ms），約 250 ms，超過 200 ms。每個 P 都下傳、PR 固定，沒有漏搏，符合第一度房室傳導阻滯。',ref:'first-degree-heart-block-ecg-library/'},
{dom:'12 導程判讀',ptb:19260,stem:'84 歲女性。QRS 未明顯增寬，I、aVL 正向，II、III、aVF 以深 S 波為主。最符合的判讀是？',opts:['左前分支阻滯','左後分支阻滯','完全左束支阻滯','下壁陳舊心肌梗塞'],correct:0,why:'心軸約 −50°；aVL 呈 qR，II、III、aVF 呈 rS，符合左前分支阻滯。下壁梗塞通常是 III、aVF 的 Q 或 QS（起始向下），不是以小 r 波開始。左後分支阻滯則為右軸偏移。',ref:'left-anterior-fascicular-block-lafb-ecg-library/'},
{dom:'12 導程判讀',ptb:4757,stem:'68 歲男性，例行檢查。請看 V1 與 V6。最符合的判讀是？',opts:['完全左束支阻滯','WPW 預激','完全右束支阻滯','後壁心肌梗塞'],correct:2,why:'V1 呈 rSR′，T 波倒置；V5、V6 可見 S 波；QRS ≥120 ms，符合完全右束支阻滯。本例心軸約 −30°，屬邊緣性左軸偏移。V1 高 R 波的鑑別包括右心室肥大與後壁梗塞，但它們不會同時造成這樣的 rSR′ 與 QRS 增寬。',ref:'right-bundle-branch-block-rbbb-ecg-library/'},
{dom:'12 導程判讀',ptb:20966,stem:'84 歲男性，心悸。節律不規則，平均約 112/min，QRS 寬。最符合的判讀是？',opts:['心房顫動合併左束支阻滯（另有心室早期收縮）','單形性心室頻脈','竇性心律合併左束支阻滯','預激心房顫動'],correct:0,why:'R–R 約 0.40–0.68 秒且不規則，看不到一致的 P 波。多數 QRS 形態一致，呈典型 LBBB（V1–V3 深 S、I 與 V6 寬 R）。VT 多半規則；預激 AF 通常更快、QRS 形態隨心搏變化。不確定時仍應先按危險診斷處理。',ref:'left-bundle-branch-block-lbbb-ecg-library/'},
{dom:'缺血與 ST–T',ptb:13326,stem:'68 歲女性，例行追蹤，目前無胸痛。請看 II、III、aVF。這些變化最可能代表哪個區域的心肌梗塞？',opts:['前中膈','側壁','下壁','無法定位，屬正常變異'],correct:2,why:'III、aVF 起始向下、呈 QS 型，相鄰導程一致，指向下壁，ST 未抬高，符合資料庫標註的亞急性至陳舊下壁梗塞。單獨 III 的小 Q 波可正常，要看相鄰導程。本例肢導程電壓低，判讀時要放大細看。',ref:'q-wave-ecg-library/'},
{dom:'缺血與 ST–T',stem:'55 歲女性，持續胸痛。依第四版心肌梗塞通用定義（無左心室肥大或 LBBB），V2–V3 新出現的 J 點 ST 抬高，判定急性缺血的門檻是？',opts:['≥0.5 mm','≥1 mm','≥2 mm','≥1.5 mm'],correct:3,why:'V2–V3 的門檻依性別與年齡不同：女性 ≥1.5 mm；男性 ≥40 歲 ≥2 mm；男性 <40 歲 ≥2.5 mm。其他導程為相鄰兩導程 ≥1 mm。未達門檻不代表沒有冠狀動脈阻塞。',href:'https://doi.org/10.1161/CIR.0000000000000617',hrefName:'Fourth Universal Definition of MI (2018)'},
{dom:'缺血與 ST–T',stem:'下壁 STEMI，ST 抬高 III > II，血壓 85/50，肺音清澈，頸靜脈怒張。下一步最適當的是？',opts:['舌下硝化甘油止痛','做右胸導程 V4R、謹慎輸液，避免硝化甘油，並啟動再灌流','靜脈注射 furosemide','等第二次肌鈣蛋白結果再決定'],correct:1,why:'低血壓、肺音清澈與頸靜脈怒張提示右心室梗塞。右心室依賴前負荷，硝化甘油與利尿劑可造成血壓驟降。V4R ST 抬高支持診斷（通用定義門檻 ≥0.5 mm；男性 <30 歲 ≥1 mm）；STEMI 不應等待肌鈣蛋白。',ref:'right-ventricular-infarction-ecg-library/'},
{dom:'缺血與 ST–T',stem:'胸痛病人呈 LBBB。下列哪一項屬於 modified Sgarbossa 準則，提示急性冠狀動脈阻塞？',opts:['QRS 時間 ≥120 ms','LBBB 為新出現','至少一個導程有與 QRS 同向、≥1 mm 的 ST 抬高','V5、V6 T 波倒置'],correct:2,why:'準則為三項任一：① 同向 ST 抬高 ≥1 mm；② V1–V3 同向 ST 壓低 ≥1 mm；③ 過度反向，ST／S 比值 ≤ −0.25。LBBB 是新或舊，本身不是可靠的判斷依據。',href:'https://doi.org/10.1016/j.annemergmed.2012.07.119',hrefName:'Smith SW, et al. Ann Emerg Med 2012'},
{dom:'缺血與 ST–T',img:'img/litfl/wellens-a.jpg',imgCredit:'Wellens Syndrome，Mike Cadogan、Robert Buttner，LITFL，CC BY-NC-SA 4.0',imgUrl:'https://litfl.com/wellens-syndrome-ecg-library/',stem:'52 歲，兩天來反覆胸痛，現在不痛，第一次肌鈣蛋白正常。ECG 如下（情境為本站設計）。最適當的安排是？',opts:['運動心電圖找缺血','盡快冠狀動脈攝影','一週後心臟科門診','肌鈣蛋白正常，可以出院'],correct:1,why:'V2–V3 雙相 T 波，加上胸痛已緩解，符合 Wellens 型態，提示左前降支近端嚴重狹窄、血管曾阻塞再通。運動試驗可能誘發大範圍梗塞，應避免；肌鈣蛋白正常也不能排除。',ref:'wellens-syndrome-ecg-library/'},
{dom:'缺血與 ST–T',type:'peri',rate:95,stem:'32 歲，感冒後胸痛，躺下加劇、前傾減輕。下列哪一項最支持急性心包膜炎，而不是 STEMI？',opts:['廣泛凹面 ST 抬高與 PR 壓低，除 aVR、V1 外沒有對側壓低','ST 凸面抬高並與 T 波融合','相鄰導程出現新的病理性 Q 波','III ST 抬高合併 aVL ST 壓低'],correct:0,why:'心包膜炎的 ST 抬高廣泛且不依血管分布，呈凹面，常合併 PR 壓低。其餘三項都指向缺血：凸面 ST、新的 Q 波、對側壓低。',ref:'pericarditis-ecg-library/'},
{dom:'電解質與藥物',type:'hyper',rate:65,stem:'血液透析病人漏洗兩次，全身無力，ECG 見尖 T 波與較寬 QRS。第一個應給的藥物是？',opts:['靜脈鈣劑（calcium gluconate 或 calcium chloride）','Insulin 加葡萄糖','口服鉀離子結合劑','等血鉀報告確認後再處理'],correct:0,why:'有 ECG 變化時先用靜脈鈣穩定心肌細胞膜，作用快但不降血鉀；隨後以 insulin＋葡萄糖等把鉀移入細胞，再安排透析移除。ECG 異常時不必等報告。',ref:'hyperkalaemia-ecg-library/'},
{dom:'電解質與藥物',type:'hypo',rate:70,stem:'慢性腎病病人連日腹瀉，併用利尿劑，覺得心悸。觀察 T 波之後的波形，最符合的是？',opts:['高血鉀','高血鈣','急性心包膜炎','低血鉀（並應一起檢查血鎂）'],correct:3,why:'T 波變平、其後有明顯 U 波，符合低血鉀。T–U 融合時容易把 QU 誤量成 QT。低血鎂常同時存在，且未矯正時鉀不易補上來。',ref:'hypokalaemia-ecg-library/'},
{dom:'電解質與藥物',stem:'QT 440 ms，R–R 0.81 秒。依 Bazett 公式，QTc 最接近？',opts:['356 ms','440 ms','543 ms','489 ms'],correct:3,why:'QTc = QT ÷ √RR = 440 ÷ 0.9 ≈ 489 ms。常見錯誤是忘了開根號（543 ms）或用乘的（356 ms）。心率快時 Bazett 會高估，可另用 Fridericia 比較。',ref:'qt-interval-ecg-library/'},
{dom:'電解質與藥物',type:'tdp',rate:220,stem:'透析病人使用延長 QT 的藥物，血鎂偏低，反覆短暫暈厥，監視器如下；此刻摸得到脈搏。第一線藥物是？',opts:['Amiodarone','Adenosine','Procainamide','硫酸鎂 2 g IV'],correct:3,why:'這是尖端扭轉型 VT。硫酸鎂是第一線，同時停用延長 QT 的藥物並矯正鉀與鎂。Amiodarone、procainamide 會進一步延長 QT。失去脈搏則依 ACLS 電擊。',ref:'polymorphic-vt-and-torsades-de-pointes-tdp/'},
{dom:'急症處置',stem:'22 歲，已知 WPW，心悸。不規則寬 QRS 頻脈約 190/min，血壓 118/70、意識清楚。藥物選擇最適當的是？',opts:['Diltiazem','Procainamide 或 ibutilide（不穩定時同步電擊）','Adenosine','Digoxin'],correct:1,why:'這是預激心房顫動。AV 結阻斷藥物（β 阻斷劑、非 DHP 鈣離子阻斷劑、digoxin、adenosine）以及靜脈 amiodarone，可能使旁路傳導加速而變成 VF。血行動力學不穩時直接同步電擊。實際用藥依院內可得性與心臟科建議。',ref:'pre-excitation-syndromes-ecg-library/'},
{dom:'急症處置',type:'vt',rate:170,stem:'既往心肌梗塞，突發規則寬 QRS 頻脈，血壓 78/40、意識混亂，摸得到脈搏。下一步是？',opts:['Adenosine 6 mg IV push','Amiodarone 緩慢靜脈輸注，觀察反應','立即同步電擊','非同步電擊'],correct:2,why:'有脈搏但灌流不足的 VT，應立即同步電擊，不應等待藥物。非同步電擊用於無脈搏 VT／VF（或無法同步時）。Adenosine 不適用於不穩定的寬 QRS 頻脈。',ref:'ventricular-tachycardia-monomorphic-ecg-library/'}
];
