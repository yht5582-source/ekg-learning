# EKG 判讀學習室

心電圖判讀學習網站：病例練習、疾病與型態圖鑑、動態演變（含心肌梗塞 6 階段監視器動畫）、判讀指南與教學資源。

線上版：https://yht5582-source.github.io/ekg-learning/

- 純靜態網站：`index.html` + `style.css` + `catalog.js` + `app.js`，無建置步驟。
- 學習紀錄僅存於瀏覽器 localStorage。
- 波形為原創教學示意，非病人紀錄；教育用途，不能取代完整 12 導程心電圖及臨床評估。

## 版本

- v1.1（2026-10-23）：修正 SVG 圖樣 id 重複、STEMI 波形斷層、動畫固定 4 階段、心房撲動鋸齒方向、手機橫向溢出；新增心肌梗塞 6 階段監視器動畫、P‧QRS‧T 標示、分頁連結、鍵盤作答。
- v1.2（2026-10-23）：病例 8 → 22 題，新增「缺血與 ST–T」分類；新增波形：Mobitz II、PVC、WPW（delta 波）、高血鈣短 QT、心包膜炎（PR 壓低＋凹面 ST）；VF 波形改為不規則。
- v1.3（2026-10-23）：教學資源改為 6 張卡片（LITFL、Wave-Maven、Utah、Dr. Smith、ECG Weekly、PTB-XL），標示最適合用途與取得方式。
- v1.4（2026-10-23）：新增「真實 12 導程」12 題（病例共 34 題），心電圖取自 PTB-XL；以 SVG 繪製標準 3×4 排列＋II 導程節律條。

## 資料來源與授權

`data/ptbxl/*.json` 取自 PTB-XL v1.0.3（Wagner P, Strodthoff N, Bousseljot R-D, et al. *PTB-XL, a large publicly available electrocardiography dataset.* Sci Data 2020;7:154；PhysioNet, Goldberger AL, et al. Circulation 2000;101:e215），授權 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。
本站的修改：500 Hz → 250 Hz 降頻、二階段中位數濾波去除基線漂移、以 0.01 mV 整數差分編碼。所選紀錄皆為人工驗證、無雜訊標記；解說文字為本站撰寫。
