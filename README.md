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

- v1.5（2026-10-23）：新增「Dr. Smith 病例」6 題與「LITFL 圖例」5 題（病例共 45 題），使用原文心電圖圖片並逐題標示作者與授權。
- v1.6（2026-10-23）：動態演變新增 6 個主題（Wellens、心包膜炎 Spodick 4 期、三環抗憂鬱劑中毒 aVR、Takotsubo、低體溫 J 波、Brugada 發燒誘發），共 11 個主題；波形產生器加入參數化心搏模型與導程標示。
- v1.7（2026-10-23）：示意波形改用標準心電圖格線（1 mm 正方小格、5 mm 粗格，25 mm/s、10 mm/mV），格線對齊基線並加上 1 mV 校正波；監視器格線加亮。

## 資料來源與授權

`data/ptbxl/*.json` 取自 PTB-XL v1.0.3（Wagner P, Strodthoff N, Bousseljot R-D, et al. *PTB-XL, a large publicly available electrocardiography dataset.* Sci Data 2020;7:154；PhysioNet, Goldberger AL, et al. Circulation 2000;101:e215），授權 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。
本站的修改：500 Hz → 250 Hz 降頻、二階段中位數濾波去除基線漂移、以 0.01 mV 整數差分編碼。所選紀錄皆為人工驗證、無雜訊標記；解說文字為本站撰寫。

`img/smith/*.jpg` 取自 [Dr. Smith’s ECG Blog](https://drsmithsecgblog.com/)，授權 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)；各題標示原文作者、標題、日期與連結。圖片內容未修改，其中 3 張原為 PNG，僅轉存為 JPEG 以減少檔案大小。

`img/litfl/*` 取自 [LITFL ECG Library](https://litfl.com/ecg-library/)，授權 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)；圖片未修改，仍依原授權（含相同方式分享）提供。所選圖片所在頁面均未標示第三方來源。LITFL 題目的臨床情境為本站設計。

中文情境、題目與解說為本站改寫。本站為非營利教學用途；上述圖片不可用於商業用途。
