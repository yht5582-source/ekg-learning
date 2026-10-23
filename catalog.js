/* 原創繁體中文摘要；各條目提供教學來源。ECG型態不等同病因確診。 */
const categories=['基礎與正常變異','竇性與心房心律','房室交界與上心室頻脈','心室心律與急救','房室傳導阻滯','束支與分支阻滯','缺血與心肌梗塞','心腔與結構疾病','遺傳與預激疾病','電解質與全身疾病','藥物與毒物','節律器與技術問題'];
const raw=`0|正常竇性心律 NSR|成人通常 60–100/min；每個 QRS 前有一致 P 波，PR 固定，II 導程 P 波正向、aVR 負向。|單一導程無法確認所有正常條件；正常 ECG 不排除心臟病。|依年齡、症狀及既往 ECG 評估。|normal-sinus-rhythm-ecg-library/
0|竇性心律不整 Sinus arrhythmia|P 波形態一致，P–P 間期隨呼吸逐漸改變。|與 AF 不同，仍可找到規律形態的 P 波。|多為生理現象；若暈厥需另找原因。|sinus-arrhythmia-ecg-library/
0|早期再極化 Early repolarisation|J 點切跡或鈍化，常有凹面向上 ST 上升及較大 T 波。|不能單憑凹形 ST 排除急性缺血；早期再極化型態不等於症候群。|比較舊圖與症狀；胸痛時依急性冠症候群流程。|benign-early-repolarisation-ecg-library/
0|運動員相關 ECG 變化|可有竇性緩脈、第一度 AV 延遲及孤立高電壓。|側壁 T 倒置、明顯 ST 壓低、病理 Q 波不能一概視為運動適應。|依運動員專用判讀標準、家族史與症狀轉介評估。|ecg-library/
0|兒童與青少年 ECG|心率、心軸及間期有年齡差異；幼兒右室優勢，青少年可有右胸導程 T 倒置。|不可直接套成人肥大、心率或 T 波標準。|使用年齡別正常值；先天病需影像與兒童心臟評估。|paediatric-ecg-interpretation-ecg-library/
0|左軸／右軸偏移|依 I、aVF 與 II 導程極性判斷，再估計額面 QRS 心軸。|心軸偏移是線索，可見於傳導、肥大、正常變異或導程錯接。|先查接線、年齡、QRS 寬度及臨床背景。|ecg-axis-interpretation/
0|低電壓 QRS|全部肢體導程峰對峰振幅 <5 mm，或全部胸前導程 <10 mm（10 mm/mV）。|不是心包積液的專一診斷；肥胖、肺氣腫及浸潤疾病亦可見。|核對增益；配合超音波及臨床線索。|low-qrs-voltage-ecg-library/
0|R 波進展不良|胸前導程 R 波從 V1 到 V4 未如預期增高。|不等於陳舊前壁梗塞；電極位置、肥大及正常變異都可能。|重核胸前電極並比較舊圖。|poor-r-wave-progression-ecg-library/
1|竇性心搏過緩|竇性 P 波伴心率 <60/min（成人）。|運動、睡眠、藥物與病理性竇房結障礙均可能。|先判斷症狀、灌流及可逆原因。|sinus-bradycardia-ecg-library/
1|竇性心搏過速|竇性 P 波，成人心率 >100/min，通常逐漸起止。|不要只控制數字而忽略感染、低血容量、缺氧、疼痛等原因。|搜尋誘因；與突然起止的再入性頻脈比較。|sinus-tachycardia-ecg-library/
1|竇性停頓／竇房結功能不全|缺少預期 P 波，可能出現逸搏；可有快慢交替。|單張 ECG 不能判定症狀是否由停頓造成；需排除藥物及高血鉀。|建立症狀與心律相關性，考慮長時間監測。|sinus-node-dysfunction-sick-sinus-syndrome/
1|竇房傳出阻滯 SA exit block|第二型可見停頓接近基礎 P–P 的整數倍；第一型可有群聚心搏。|表面 ECG 看不到竇房結放電，與竇性停頓有時難區分。|延長節律帶並檢視症狀與藥物。|sinoatrial-exit-block-ecg-library/
1|心房早期收縮 PAC|提前出現形態不同的 P 波；QRS 常窄，也可差異傳導。|P 波可藏在 T 波內；未下傳 PAC 可能假似 AV block。|找提前 P 波與其後停頓，必要時延長記錄。|premature-atrial-complex-pac/
1|未下傳 PAC|提早的異位 P 波後無 QRS，常使 T 波外觀變形。|不是每個缺失 QRS 都是 Mobitz II。|比較 P 波時間與形態，確認是否真正準時出現。|premature-atrial-complex-pac/
1|心房顫動 AF|R–R 完全不規則，無一致可辨的 P 波，可能有細顫動基線。|雜訊、頻繁 PAC、MAT 也可能不規則；合併 AV block 時 AF 心室率可規則。|先看穩定度，再評估心率／節律及中風風險。|atrial-fibrillation-ecg-library/
1|心房撲動 Atrial flutter|連續規則 F 波，典型下壁導程鋸齒狀；2:1 傳導心室率常約150/min。|2:1 撲動波可藏在 QRS/T；不一定看得到典型鋸齒。|查看 II、III、aVF、V1 與長節律帶。|atrial-flutter-ecg-library/
1|局灶性心房頻脈 AT|異常但一致的 P 波，心房快速且常規則，P 波間可有等電位線。|僅靠表面 ECG 不一定能確定來源或機轉。|觀察起止、P 波軸與房室關係。|atrial-tachycardia-ecg-library/
1|多源性心房頻脈 MAT|心率 >100/min，同一導程至少3種 P 波形態，PR 與 P–P 不一。|與 AF 不同，仍有可辨 P 波與等電位間隔。|搜尋肺部疾病、缺氧及電解質異常。|multifocal-atrial-tachycardia-mat-ecg-library/
1|遊走性心房節律 WAP|至少3種 P 波形態而心率 <100/min。|與 MAT 的主要差異在速率；不是 AF。|依症狀與臨床背景判斷意義。|ecg-library/
2|房室結再入頻脈 AVNRT|規則窄 QRS 頻脈；P 波可藏於 QRS，V1 可見假性 r′，下壁假性 S。|不見 P 波並不能單獨確診 AVNRT。|先確認穩定度；確切機轉有時需電生理檢查。|avnrt-for-two/
2|房室折返頻脈 AVRT|順向型通常規則窄 QRS，QRS 後可見逆傳 P；逆向型可為寬 QRS。|靜息 ECG 沒有 delta 波也可能有隱匿旁路。|與 AVNRT、AT、VT 鑑別，必要時電生理評估。|atrioventricular-re-entry-tachycardia-avrt/
2|交界逸搏／加速性交界節律|P 波缺如、逆向或位於 QRS 前後；QRS 通常窄。逸搏約40–60/min，加速型約60–100/min。|不能把每個看不到 P 波的心律都稱為交界節律。|排查竇房結抑制、藥物、缺血及術後狀況。|junctional-escape-rhythm-ecg-library/
2|交界性頻脈|交界性形態伴心率 >100/min，可有房室分離。|與 AVNRT 機轉不同，術後或藥物毒性可能相關。|評估病史及房室關係，必要時專科會診。|accelerated-junctional-rhythm-ajr/
2|交界早期收縮 PJC|提前窄 QRS，前面無正常 P，可能有逆傳 P 波。|需排除藏於 T 波的 PAC。|仔細比對心房活動與耦合間期。|premature-junctional-complex-pjc/
2|Ashman 現象／差異傳導|長 R–R 後接短 R–R，提前心搏呈束支阻滯型態，常見於 AF。|寬搏不一定是 PVC；也不能因此忽略 VT。|比較長短週期、QRS 型態及房室關係。|ashman-phenomenon/
3|心室早期收縮 PVC|提前寬 QRS，通常無前置相關 P 波，ST–T 常與主波相反。|代償停頓常見但非必須；頻繁 PVC 需評估負荷與結構。|注意症狀、成對／連發、多形性與心臟超音波。|premature-ventricular-complex-pvc-ecg-library/
3|單形性心室頻脈 VT|連續寬 QRS 快速心律，形態大致一致；房室分離、捕獲或融合搏支持 VT。|血壓穩定不能排除 VT；寬 QRS 頻脈應優先考慮 VT。|先確認脈搏及穩定度，啟動相應急救流程。|ventricular-tachycardia-monomorphic-ecg-library/
3|多形性心室頻脈|QRS 形態與軸持續變化的心室快速心律。|不是所有多形性 VT 都是 torsades；須看發作前 QT。|立即評估急救需求及缺血、電解質原因。|polymorphic-vt-and-torsades-de-pointes-tdp/
3|尖端扭轉型 VT Torsades|長 QT 背景下出現軸向扭轉的多形性 VT，常由停頓後誘發。|必須檢視發作前 QT；不能僅憑扭轉外觀判定病因。|急救監測並檢視 K、Mg 與 QT 延長藥物。|polymorphic-vt-and-torsades-de-pointes-tdp/
3|雙向性心室頻脈|QRS 軸或形態逐搏交替。|可見於 digoxin 毒性或 CPVT，並非單一病因專屬。|核對藥物、運動誘因與家族史。|bidirectional-ventricular-tachycardia-bvt-ecg-library/
3|加速性心室自主節律 AIVR|寬 QRS 的心室節律，常約50–110/min，可有房室分離。|可見於再灌流但不是成功再灌流的充分證據。|評估灌流與原因，避免只因寬 QRS 就視為快速 VT。|accelerated-idioventricular-rhythm-aivr/
3|心室逸搏|緩慢寬 QRS 節律，常約20–40/min，作為上游起搏失效時的替代節律。|可能伴完全 AV block；須追蹤獨立 P 波。|評估灌流及緊急節律支持需求。|idioventricular-rhythm-ecg-library/
3|心室顫動 VF|混亂波形，無可辨的連續 QRS。|先結合病人狀態；動作偽影可能假似 VF。|無反應、無正常呼吸且無脈搏時啟動急救與去顫流程。|ventricular-fibrillation-vf-ecg-library/
3|心室撲動|極快速近正弦波，QRS 與 T 難分。|可迅速惡化；須與嚴重高血鉀正弦波及偽影區分。|立即確認循環狀態並依急救流程處理。|ventricular-flutter-ecg-library/
3|心靜止 Asystole|幾乎無可辨心室電活動。|先排除導線脫落、低增益與細 VF；不是可去顫節律。|核對多導程與脈搏，依非可去顫急救流程。|ecg-library/
3|無脈電氣活動 PEA|監視器有組織電活動，但臨床無脈搏。|ECG 單獨不能診斷 PEA；必須確認無循環。|急救並搜尋可逆原因；不能只看心電圖認為有心跳。|ecg-library/
3|束支型／右室流出道 VT|束支型可呈 RBBB 加偏軸、QRS 相對較窄；RVOT 常 LBBB 型與下軸。|形態只是定位線索；不能直接判為良性或自行用藥。|由專科排除結構病與安排電生理評估。|ecg-library/
4|第一度 AV block|PR >200 ms，P 波皆下傳，PR 通常固定。|不是漏搏；長 PR 不一定代表三分支病變。|評估症狀、藥物及其他傳導異常。|first-degree-heart-block-ecg-library/
4|第二度 AV block：Mobitz I|典型 PR 逐漸延長後漏掉 QRS，之後 PR 重置較短。|非典型 Wenckebach 可能不明顯；先排除未下傳 PAC。|檢視完整週期與症狀。|av-block-2nd-degree-mobitz-i-wenckebach-phenomenon/
4|第二度 AV block：Mobitz II|規則 P 波、下傳搏 PR 固定，突然出現未下傳 P 波。|2:1 傳導單靠短圖通常無法分為 I 或 II 型。|有進展風險，需及時專科評估與監測。|av-block-2nd-degree-mobitz-ii-hay-block/
4|2:1 AV block|每2個 P 波只有1個 QRS。|不能只因 PR 固定就標成 Mobitz II。|延長 ECG、比較 QRS 與其他傳導資訊，評估阻滯位置。|av-block-2nd-degree-fixed-ratio-blocks/
4|高度 AV block|至少連續2個 P 波未下傳，仍有部分房室傳導。|與完全阻滯需用長節律帶區分。|密切監測並評估節律支持。|av-block-2nd-degree-high-grade-av-block/
4|第三度／完全 AV block|心房與心室獨立活動，無房室傳導，心室由逸搏維持。|房室分離本身也可見於 VT 或交界節律，不必然是完全阻滯。|確認 P–P、R–R 與 PR 變化，立即評估灌流。|av-block-3rd-degree-complete-heart-block/
4|房室分離 AV dissociation|P 波與 QRS 無固定關係。|這是電生理現象，不是完全 AV block 的同義詞。|比較心房／心室速率與捕獲搏來辨別原因。|av-dissociation-ecg-library/
5|右束支阻滯 RBBB|成人 QRS ≥120 ms；V1–V2 終末 R′，I、V6 寬終末 S。|可能伴次發 ST–T 改變；新出現且有胸痛需評估缺血等病因。|比舊圖、症狀與結構檢查。|right-bundle-branch-block-rbbb-ecg-library/
5|左束支阻滯 LBBB|QRS ≥120 ms；側壁寬 R，V1 常深 S，ST–T 多與 QRS 反向。|新 LBBB 本身不等於 STEMI；亦不能排除冠脈阻塞。|胸痛時評估 Sgarbossa／修正版條件與整體臨床。|left-bundle-branch-block-lbbb-ecg-library/
5|左前分支阻滯 LAFB|左軸偏移，下壁 rS、I/aVL qR，QRS 常未達完整束支寬度。|先排除下壁梗塞與其他左軸原因。|結合形態與臨床確認。|left-anterior-fascicular-block-lafb-ecg-library/
5|左後分支阻滯 LPFB|右軸偏移，I/aVL rS、下壁 qR。|少見；需排除 RVH、肺部疾病及正常右軸。|不可只憑右軸就診斷。|left-posterior-fascicular-block-lpfb-ecg-library/
5|雙分支阻滯|常見 RBBB 合併 LAFB 或 LPFB。|合併暈厥時需注意間歇性高度 AV block。|比較舊圖並安排節律監測及專科評估。|bifascicular-block-ecg-library/
5|交替束支阻滯／三分支問題|不同時間出現 RBBB 與 LBBB 提示廣泛傳導系統病變。|RBBB＋LAFB＋長 PR 不足以證明三分支均受損，PR 延長可能在 AV 結。|交替束支型態需及時專科評估。|trifascicular-block-ecg-library/
5|非特異性心室內傳導延遲|QRS 增寬，但不符合典型 RBBB/LBBB。|可能由心肌病、高血鉀、藥物或其他原因。|結合電解質、用藥與心臟影像。|intraventricular-conduction-delay-qrs-widening/
6|前壁／前中隔 STEMI 型態|相鄰胸前導程 ST 上升，可伴超急性 T 波與反向變化。|V2–V3 閾值依年齡性別不同；未達閾值仍可能冠脈閉塞。|胸痛／缺血症狀時緊急評估再灌流需求。|anterior-myocardial-infarction-ecg-library/
6|下壁 STEMI 型態|II、III、aVF 的區域 ST 上升，可伴 aVL 反向 ST 壓低。|不能只憑 III > II 就完全確定責任血管。|評估右室與後壁導程、緩脈及 AV block。|inferior-stemi-ecg-library/
6|側壁／高側壁 STEMI 型態|I、aVL、V5–V6 區域 ST 上升，可有下壁反向變化。|高側壁變化可能很細微，需觀察相鄰導程與動態。|與症狀、舊圖及連續 ECG 整合。|lateral-stemi-ecg-library/
6|後壁心肌梗塞|V1–V3 水平 ST 壓低、較高 R 波與正向 T 可是後壁變化的鏡像。|前胸 ST 壓低不一定只是「非 ST 上升缺血」。|加做 V7–V9 並評估急性閉塞。|posterior-myocardial-infarction-ecg-library/
6|右室心肌梗塞|常合併下壁梗塞，右側導程尤其 V4R ST 上升支持。|標準12導程可能漏掉；右側 ST 變化可較早消退。|及早加做右側導程，結合血壓及超音波。|right-ventricular-infarction-ecg-library/
6|心內膜下缺血／NSTEMI 線索|可見水平或下斜 ST 壓低、動態 T 倒置，也可能 ECG 正常。|NSTEMI 需要肌鈣蛋白動態與缺血證據；ECG 不能單獨確診。|連續 ECG、心肌標記與症狀風險整合。|myocardial-ischaemia-ecg-library/
6|廣泛 ST 壓低伴 aVR 上升|提示廣泛心內膜下缺血或氧供需失衡。|不能直接等同左主幹完全閉塞；多支病變、休克等亦可見。|緊急評估血流動力、缺血原因與冠脈需求。|left-main-coronary-artery-occlusion/
6|超急性 T 波／早期閉塞線索|區域性寬基底、飽滿 T 波，相對 QRS 比例過大，可有反向變化。|與高血鉀常見的較狹尖 T 波比較；外觀有重疊。|短間隔重做 ECG，切勿等典型 ST 上升才處理疑似閉塞。|ecg-library/
6|de Winter 型態|胸前 J 點上斜 ST 壓低，接高而對稱 T 波，可伴 aVR 上升。|可能是急性冠脈閉塞，不能因無典型 ST 上升低估。|緊急心臟科與再灌流評估。|de-winter-t-wave-ecg-library/
6|Wellens 型態|胸痛緩解時 V2–V3 可見雙相或深對稱 T 倒置，常延伸至其他胸導程。|需結合近期胸痛；多種疾病可模仿，不能僅看 T 倒置定案。|疑似高風險冠脈病變時避免一般運動壓力測試，及時專科評估。|wellens-syndrome-ecg-library/
6|LBBB／心室起搏下的缺血|與 QRS 同向 ST 上升、V1–V3 同向 ST 壓低或過度反向上升可支持閉塞。|修正版 Sgarbossa 看 ST/S 比例；陰性不排除閉塞。|完整量測並結合症狀、超音波與連續 ECG。|sgarbossa-criteria-ecg-library/
6|陳舊心肌梗塞／病理 Q 波|符合導程與大小條件的 Q 波可提示既往梗塞。|Q 波也可見於肥厚、預激及導程問題；無 Q 波不排除舊梗塞。|比較舊圖與影像，不單靠 Q 波判定病史。|ecg-library/
6|左心室瘤型態|既往梗塞後持續 ST 上升，可伴成熟 Q 波。|新胸痛仍需排除再次缺血；不能只因有 Q 波判為舊病。|舊圖與心臟超音波最有幫助。|left-ventricular-aneursym-ecg-library/
7|左心房異常／擴大線索|II 導程寬切跡 P，V1 P 波終末負向部分增大。|ECG 指標不等於解剖性擴大。|超音波確認心房大小及瓣膜問題。|left-atrial-enlargement-ecg-library/
7|右心房異常／擴大線索|下壁導程高尖 P 波，常用 II >2.5 mm 作線索。|受體型、肺病與導程影響，不能單獨確診。|配合超音波及肺部病史。|right-atrial-enlargement-ecg-library/
7|雙心房異常|同時有右房高尖與左房寬大／終末負向 P 波特徵。|需確認量測及電極位置。|影像確認結構。|biatrial-enlargement-ecg-library/
7|左心室肥厚 LVH|電壓增高，可有側壁 ST 壓低與不對稱 T 倒置（strain）。|電壓標準受年齡、體型影響；ECG 敏感度有限。|超音波評估壁厚與原因。|left-ventricular-hypertrophy-lvh-ecg-library/
7|右心室肥厚／負荷|右軸、V1 優勢 R、右胸導程 strain 可支持。|RBBB、後壁梗塞、預激也可能造成 V1 高 R。|結合肺高壓、先天病及超音波。|right-ventricular-hypertrophy-rvh-ecg-library/
7|雙心室肥厚|可能同時存在左右心室高電壓／偏軸線索，亦可能互相抵消。|ECG 無法可靠排除或精確定量雙心室肥厚。|需心臟影像。|biventricular-hypertrophy-ecg-library/
7|肥厚型心肌病 HCM|可有高電壓、深窄 Q 波、巨大 T 倒置，心尖型尤其可顯著。|ECG 不能確診 HCM，也不能區分所有肥厚原因。|超音波／CMR，並評估家族史及暈厥。|hypertrophic-cardiomyopathy-hcm-ecg-library/
7|擴張型／浸潤性心肌病|可有 LBBB、非特異 ST–T、心律不整；浸潤病可能低電壓與壁厚不相稱。|型態非專一，正常電壓不能排除心肌澱粉樣變性。|超音波、CMR 及病因檢查。|ecg-library/
7|致心律不整性右室心肌病 ARVC|可見右胸 T 倒置、終末活化延遲，少數 epsilon 波及心室心律不整。|epsilon 波敏感度低，須排除偽影與年齡變異。|依整合診斷標準、CMR、家族及遺傳資訊。|arrhythmogenic-right-ventricular-cardiomyopathy-arvc/
7|急性心包膜炎|常見廣泛 ST 上升與 PR 壓低，aVR 可反向。|尿毒性心包膜炎可沒有典型 ECG；局部變化須鑑別缺血。|結合胸痛、摩擦音、發炎指標及超音波。|pericarditis-ecg-library/
7|心肌炎|可有非特異 ST–T、ST 上升、AV block 或心室心律不整。|ECG 不能排除或確診心肌炎。|結合肌鈣蛋白、超音波、CMR 與臨床嚴重度。|myocarditis-ecg-library/
7|心包積液／心包填塞線索|低電壓、心搏過速、電氣交替可提示大量積液。|電氣交替不一定是積液；心包填塞須臨床與超音波診斷。|低血壓或休克需立即床邊超音波。|electrical-alternans-ecg-library/
7|Takotsubo 心肌病|可有 ST 上升、廣泛 T 倒置及 QT 延長。|無法由 ECG 可靠區分急性冠脈事件。|依急性胸痛評估，配合冠脈與心臟影像。|takotsubo-cardiomyopathy-ecg-library/
8|WPW 預激型態|短 PR、delta 波及寬 QRS，繼發 ST–T 變化。|預激型態與有相關心律不整的 WPW 症候群需區分。|評估症狀、旁路風險與電生理轉介。|pre-excitation-syndromes-ecg-library/
8|預激合併 AF|極快且不規則的寬 QRS，形態可逐搏變化。|是危險心律；不可當成一般 AF 使用單純 AV 結阻斷策略。|立即專科／急救評估，依穩定度處理。|atrial-fibrillation-in-pre-excitation/
8|Brugada 型態／症候群|右胸 V1–V2 type 1 呈穹頂型 ST 上升後 T 倒置，可由發燒誘發。|鞍背型不等於確診；須排除藥物、電解質等類似型態。|結合暈厥、家族史及專科標準；必要時高位右胸導程。|brugada-syndrome-ecg-library/
8|先天長 QT 症候群|重複 QTc 延長或特徵性 T 波型態可提示。|藥物、低 K/Mg/Ca、心率與量測誤差須先評估；單一 QTc 不足以完整判定。|手動確認 QT，整合症狀、家族史與遺傳評估。|qt-interval-ecg-library/
8|短 QT 症候群|持續顯著短 QTc、較短 ST 與高尖 T 可提示。|高血鈣等可造成後天短 QT；不能只看單張 ECG 診斷。|排除後天原因並整合家族史與心律事件。|short-qt-syndrome-ecg-library/
8|CPVT|休息 ECG 常正常，運動或情緒壓力誘發雙向或多形性 VT。|正常靜息 ECG 無法排除。|有運動性暈厥／家族猝死需專科監督下評估。|bidirectional-ventricular-tachycardia-bvt-ecg-library/
9|高血鉀|可有尖 T、P 變小、PR 延長與 QRS 增寬，嚴重時正弦波。|變化不必依序出現；正常 ECG 不能排除嚴重高血鉀，不能由波形反推精確 K。|立即抽驗 K、監測及依臨床嚴重度處理；透析病人特別注意漏洗。|hyperkalaemia-ecg-library/
9|低血鉀|T 變平、ST 壓低、U 波顯著，T–U 融合可使 QU 看似 QT 延長。|不要把 U 波末端當成 T 波末端直接量 QT。|核對 K、Mg、用藥及心律風險。|hypokalaemia-ecg-library/
9|低血鈣|ST 延長造成 QT 延長。|QT 延長原因很多，不能由 ECG 單獨判定 Ca。|測離子鈣或適當解讀總鈣，並核對其他電解質。|hypocalcaemia-ecg-library/
9|高血鈣|ST 縮短，QT 可明顯縮短。|並非每位高血鈣均有短 QT；短 QT 也有其他原因。|抽血確認並整合臨床。|hypercalcaemia-ecg-library/
9|低血鎂／高血鎂|低 Mg 增加長 QT／心室心律不整風險；嚴重高 Mg 可抑制傳導。|ECG 無專一性，常與 K、Ca 異常並存。|透析與補鎂病人核對 Mg、K、Ca 及腎功能。|ecg-library/
9|低體溫|緩脈、間期延長、J（Osborn）波，伴顫抖偽影。|J 波也可有其他原因，不是低體溫專屬。|量核心體溫並整合暴露史。|hypothermia-ecg-library/
9|肺栓塞／急性右室負荷|可能竇性頻脈、右胸 T 倒置、RBBB 或 S1Q3T3。|S1Q3T3 不敏感也不專一；正常 ECG 不能排除 PE。|依臨床機率、D-dimer／影像流程。|ecg-changes-in-pulmonary-embolism/
9|慢性肺病／肺高壓|可見右軸、P pulmonale、低電壓及右室負荷特徵。|不能由 ECG 診斷 COPD 或量化肺動脈壓。|結合肺功能及超音波。|ecg-in-chronic-obstructive-pulmonary-disease/
9|顱內急症／神經性 ST–T|可有深且廣泛 T 倒置、QT 延長及心律不整。|不能直接診斷顱內出血；也需評估心肌損傷。|按神經症狀與心臟證據安排檢查。|raised-intracranial-pressure-ecg-library/
9|甲狀腺功能異常|亢進可竇速或 AF；低下可緩脈、低電壓及 QT 延長。|皆非特異 ECG 表現。|配合 TSH／游離 T4 及臨床。|ecg-library/
10|Digoxin 藥物效應|下凹勺狀 ST 壓低、QT 縮短及 PR 延長可見。|藥物效應不等於中毒，也不必然是缺血。|核對用藥及症狀，必要時濃度、腎功能與電解質。|digoxin-effect-ecg-library/
10|Digoxin 毒性|可同時增加異位自動性並抑制 AV 傳導，出現 AT 伴阻滯或雙向 VT。|多種節律都可能；單一 ECG 不能排除中毒。|腎功能惡化、交互作用與電解質須一併評估。|digoxin-toxicity-ecg-library/
10|鈉通道阻斷藥物毒性|QRS 增寬、aVR 終末 R 變大、右向終末軸可見於 TCA 等毒性。|高血鉀、束支病變也可寬 QRS。|結合暴露史並聯繫毒物／急救團隊。|tricyclic-overdose-sodium-channel-blocker-toxicity/
10|藥物性 QT 延長|延後再極化與 QTc 延長，可能誘發 torsades。|風險取決於藥物組合、心率、K/Mg、腎功能及其他因素。|檢查所有處方與交互作用，手動核對 QT。|qt-interval-ecg-library/
10|β 阻斷劑／鈣離子阻斷劑毒性|緩脈、PR 延長、AV block；部分藥物亦可寬 QRS 或長 QT。|單靠 ECG 無法分辨藥物種類與毒性劑量。|結合血壓、血糖、服藥史及毒物評估。|ecg-library/
11|心房／心室／雙腔起搏|可見起搏尖波後接 P 或 QRS；心室起搏常有寬 QRS。|尖波可能被濾波或雙極起搏而不明顯；傳導系統起搏可較窄。|核對裝置型式、模式與前次圖。|pacemaker-rhythms-normal-patterns/
11|起搏未奪獲 Failure to capture|可見尖波，但後面未出現預期 P／QRS。|假融合或尖波偽影可造成混淆。|評估病人、電解質、導線及裝置，必要時緊急支持。|pacemaker-malfunction-ecg-library/
11|起搏輸出不足／過度感知|在應起搏時沒有尖波；過度感知可能抑制輸出。|需求型起搏遇自發心律本來就可能不放電。|需結合設定與裝置檢查判斷。|pacemaker-malfunction-ecg-library/
11|感知不足 Undersensing|起搏尖波與自身 P/QRS 時序不協調，似乎未感知原有電活動。|不能只看一個尖波位置就確診；需核對模式。|裝置程式檢查與長節律帶。|pacemaker-malfunction-ecg-library/
11|節律器介導頻脈 PMT|常為規則的心室起搏頻脈，可能接近追蹤上限。|也可能是追蹤心房頻脈或其他起搏演算法反應。|由裝置紀錄確認機轉與調整。|pacemaker-malfunction-ecg-library/
11|肢體導程反接|例如右／左手反接可使 I 的 P/QRS/T 倒置、aVR 異常正向，而胸導程進展保留。|可假似右位心或缺血。|先檢查電極並重做 ECG。|ecg-limb-lead-reversal-ecg-library/
11|胸前電極錯位|V1/V2 過高可造成假性中隔 Q 波、rSr′ 或 T 變化。|不能把接線誤差當成新梗塞或 Brugada。|依解剖定位重貼並重做。|ecg-lead-positioning/
11|右位心 Dextrocardia|I 導程負向、aVR 正向，左胸導程 R 波進展反向。|與手部反接不同，胸前導程也異常。|確認解剖位置並適當改用右胸記錄。|dextrocardia-ecg-library/
11|震顫／動作／電氣偽影|基線波動可能假似 flutter、VT 或 VF；正常 QRS 有時仍穿行其間。|不能因疑似偽影而忽略真正不穩定心律。|先看病人、脈搏及多導程，再修正電極與干擾。|ecg-motion-artefacts-ecg-library/`;
const catalog=raw.split('\n').map((line,i)=>{let [cat,name,features,pitfall,next,path]=line.split('|');return {id:i,cat:categories[+cat],name,features,pitfall,next,url:'https://litfl.com/'+path}});

// 深層連結只保留已核對項目，其餘導向官方主題索引。
const verifiedPaths=new Set(['ecg-library/','hyperkalaemia-ecg-library/','hypokalaemia-ecg-library/','hypocalcaemia-ecg-library/','hypercalcaemia-ecg-library/','atrial-fibrillation-ecg-library/','atrial-flutter-ecg-library/','first-degree-heart-block-ecg-library/','av-block-3rd-degree-complete-heart-block/','ventricular-tachycardia-monomorphic-ecg-library/','inferior-stemi-ecg-library/','brugada-syndrome-ecg-library/','polymorphic-vt-and-torsades-de-pointes-tdp/','myocardial-ischaemia-ecg-library/']);
for(const c of catalog){if(!verifiedPaths.has(c.url.replace('https://litfl.com/',''))){c.url='https://litfl.com/ecg-library/';c.indexOnly=true}}
