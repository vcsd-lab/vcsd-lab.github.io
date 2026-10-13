# VCSDL 實驗室網站維護指南

本儲存庫為 VCSDL 實驗室官方網站的原始碼，使用 [Hugo](https://gohugo.io/) / [HugoBlox](https://hugoblox.com/) 產生靜態網頁，並透過 GitHub Actions 部署到 GitHub Pages。

- 正式網站：https://vcsd-lab.github.io/
- 原始碼：https://github.com/vcsd-lab/vcsd-lab.github.io
- 自動部署設定：[`.github/workflows/hugo.yml`](.github/workflows/hugo.yml)

> **給下一任網管：** 日常維護以「建立分支 → 修改內容 → Docker 本機預覽 → 正式建置 → Pull Request → 合併至 `main`」為原則。**不要為了更新頁面內容而直接推送到 `main`。**

## 1. 網站架構與常用檔案

| 路徑 | 用途 |
| --- | --- |
| `content/` | 網站內容，主要以 Markdown 編輯 |
| `content/students/_index.md` | 學生名單（繁體中文） |
| `content/students/_index.en.md` | 學生名單（英文） |
| `content/alumni/_index.md` | 畢業生名單（繁體中文） |
| `content/alumni/_index.en.md` | 畢業生名單（英文） |
| `config/_default/hugo.yaml` | 網站 URL、語言等 Hugo 設定 |
| `config/_default/params.yaml` | HugoBlox 網站外觀及功能設定 |
| `config/_default/module.yaml`、`go.mod` | Hugo Modules / HugoBlox 依賴 |
| `package.json`、`package-lock.json` | Node.js 套件設定與鎖定版本 |
| `.github/workflows/hugo.yml` | GitHub Actions 建置與部署 |
| `Dockerfile.local` | 本機 Docker 預覽、建置環境 |

網站預設語言為繁體中文 (`zh-hant`)，另提供英文 (`en`)。編輯學生或畢業生名單時，**應同步維護中英文兩份內容**。

## 2. 每次更新網站的流程

### 2.1 取得最新程式碼並建立分支

以下指令都在專案根目錄執行：

```bash
git clone https://github.com/vcsd-lab/vcsd-lab.github.io.git
cd vcsd-lab.github.io

git switch main
git pull --ff-only origin main
git switch -c update-students-alumni-YYYY
```

已有尚未提交的修改時，**不要貿然 `git restore` 或 `git reset --hard`**；可以直接從目前的 `main` 建立新分支，工作目錄內尚未提交的修改通常會保留。若與更新 `main` 產生衝突，先備份或 stash，再處理。

分支名稱請依工作內容命名，例如 `update-students-alumni-2026`、`fix-publications-format`。一個 PR 盡量只處理一組相關變更。

### 2.2 編輯內容

- 學生年級異動：編輯 `content/students/_index.md` 和 `_index.en.md`，確認年級標題、名單和前一間學校資料正確。
- 畢業生異動：從 Students 移除已畢業者，加入 `content/alumni/` 的中英文表格；避免人員重複出現。
- 就業／升學資訊：以已確認資料為準；未知欄位保持空白，不要猜測。
- 其他內容：在 `content/` 找到對應頁面，盡量遵循現有 Markdown 與 YAML front matter 格式。

**編輯表格時**，檢查每列欄位數量一致（Alumni 表格包含姓名、就學年度、畢業大學、畢業後動向四欄），不要遺漏 `|`。繁體中文與英文公司名稱、年度、人名應互相對照。注意：既有資料中的「就學年度」欄位應遵循原網站定義，不要自行假定是入學或畢業年度。

修改後檢查：

```bash
git status
git diff --check
git diff
```

## 3. 使用 Docker 在遠端主機預覽網站

這是建議給網管的方式：**不必在主機安裝 Hugo、Node.js 或 Go**，只需安裝 Docker，其他工具由 Container 提供。

### 3.1 環境版本

此文件編寫時，`.github/workflows/hugo.yml` 使用：

| 元件 | 版本／設定 |
| --- | --- |
| Hugo | `0.152.2`、Extended |
| Node.js | 20 |
| Node 安裝指令（CI） | `npm install` |
| CI 正式建置指令 | `hugo --minify` |
| GitHub Pages 部署 | 推送至 `main` 後觸發 |

本機 Docker 使用 `npm ci`（依 `package-lock.json` 安裝），較適合可重現的驗證。`package.json` 雖宣告 pnpm，但現有 CI 使用 npm；若未來調整套件管理器，請一併更新 CI、Docker 和本文。

**更新 Hugo 或 Node.js 時，請同步確認 `Dockerfile.local` 和 GitHub Actions 版本。**

### 3.2 建立 Docker image

在遠端主機（例如 `vcsdl4`）的專案根目錄：

```bash
docker build -f Dockerfile.local -t vcsd-hugo:0.152.2 .
docker run --rm vcsd-hugo:0.152.2 hugo version
```

確認輸出含 `v0.152.2` 和 `extended`。首次執行需要下載 image、npm 及 Go Modules 依賴，主機需能連線到相應套件來源。

### 3.3 啟動 Hugo 開發伺服器

```bash
docker run --rm -it \
  --name vcsd-hugo-dev \
  -p 127.0.0.1:1313:1313 \
  -v "$PWD:/site" \
  -v vcsd_node_modules:/site/node_modules \
  -v vcsd_hugo_cache:/root/.cache/hugo_cache \
  -w /site \
  vcsd-hugo:0.152.2 \
  sh -c 'npm ci && hugo server --bind 0.0.0.0 --disableFastRender'
```

維持此 terminal 執行；停止時按 `Ctrl+C`。使用 bind mount，修改本機 Markdown 後 Hugo 可以重新產生預覽內容。

這裡把 Docker 的 1313 port **只綁定至遠端主機的 loopback 位址**。Hugo 開發伺服器不應直接對網際網路開放。

### 3.4 Windows 連到遠端主機（SSH Tunnel）

在**自己的 Windows PowerShell**（不是遠端 SSH terminal）開啟另一個視窗：

```powershell
ssh -N -L 1313:127.0.0.1:1313 <username>@<server>
```

例如主機別名為 `vcsdl4` 時，將 `<username>` 換成自己的 SSH 帳號、`<server>` 換成 `vcsdl4`。保持此 PowerShell 視窗開啟。

然後在自己的電腦開啟：

- http://localhost:1313/
- http://localhost:1313/students/
- http://localhost:1313/alumni/

英文版可透過網頁的語言切換功能檢查（英文內容一般位於 `/en/` 下）。

**重點：** 這個 `localhost` 是 Windows 自己的位址，SSH 會將它轉送至遠端主機的 `127.0.0.1:1313`，再由 Docker 映射到 Hugo Container。沒有必要將 1313 port 公開到整個實驗室網路。

### 3.5 預覽檢查清單

- [ ] 中文 Students 頁：年級標題、姓名、學歷正確
- [ ] 英文 Students 頁：年級及內容與中文一致
- [ ] 畢業學生已從 Students 移至 Alumni，沒有重複或漏列
- [ ] 中文與英文 Alumni 表格內容一致；公司、年度與學歷正確
- [ ] 站內導覽、語言切換及連結正常
- [ ] 桌面與手機畫面排版正常，沒有表格錯位或 CSS 遺失

## 4. 在 Docker 內測試正式建置

確認預覽內容後，於遠端主機的專案根目錄執行：

```bash
docker run --rm -it \
  -v "$PWD:/site" \
  -v vcsd_node_modules:/site/node_modules \
  -v vcsd_hugo_cache:/root/.cache/hugo_cache \
  -w /site \
  vcsd-hugo:0.152.2 \
  sh -c 'npm ci && hugo --minify'
```

這會產生 `public/`，與 GitHub Actions 目前的 **Hugo 建置命令**一致；成功執行只能證明建置成功，仍要另外目視檢查頁面。`public/`、`node_modules/` 和 `resources/` 已被 `.gitignore` 排除，**不要提交編譯產物**。

如果 Docker 在 bind mount 目錄產生 root 擁有的檔案、導致日後權限問題，請先確認檔案歸屬後再調整權限；不要直接對整個 repo 執行不必要的遞迴 `chmod`。

## 5. Commit、Push、Pull Request 與部署

```bash
git diff --check
git status
# 確認只包含此次修改；以下範例用於更新學生及畢業生內容與文件：
git add content/students content/alumni README.md Dockerfile.local
git diff --cached --stat
git diff --cached
git commit -m "feat: update student year levels and alumni information"
git push -u origin update-students-alumni-YYYY
```

請按實際分支名稱調整 push 指令與 commit message。到 GitHub 建立 Pull Request：

- **Base**：`main`
- **Compare**：本次更新分支
- **PR 標題**：說明這次更新的內容
- **PR 內文**：摘要修改、列出中文／英文頁面、說明本機預覽及 `hugo --minify` 的測試結果

請先檢查 PR 的 Files changed，並確認沒有把帳密、機敏資訊或不相關檔案加入。Review 後合併到 `main`。

**目前的 GitHub Actions 只在 `push` 到 `main` 時觸發**，不會在 PR 開立時自動檢查建置。因此，建立 PR 前請先完成上述 Docker 測試。合併後到 repo 的 **Actions** 分頁確認部署成功，再打開正式網站確認更新已上線。

## 6. 常見問題

| 問題 | 檢查方向 |
| --- | --- |
| Windows `localhost:1313` 連不到 | SSH Tunnel 是否持續開啟、Docker 容器是否正在執行、遠端 1313 是否監聽 |
| SSH 顯示 `channel ... connect failed` | 遠端主機的 `127.0.0.1:1313` 沒有服務或無法連線 |
| Hugo build 失敗 | 先看最上游的錯誤訊息；檢查 Hugo/Go/Node 版本、Go Modules 與 npm 依賴 |
| 網頁有內容但樣式異常 | 檢查 Node/Tailwind 資源處理及瀏覽器 Network/Console |
| 中英文內容不一致 | 同時檢查 `_index.md` 與 `_index.en.md` |
| 合併後正式網站未更新 | 檢查 GitHub Actions `Deploy Hugo site` 執行結果及 Pages 設定 |

## 7. 網管交接提醒

- 預先確認下一任維護者有 repository 的必要權限，以及可使用 Docker 的開發環境。
- 實驗室內容每學年應至少盤點學生年級、畢業生、公司／升學資訊和聯絡方式。
- 盡量讓每次內容更新經過 PR，以便日後追蹤更動原因及回復版本。
- 修改 CI、Hugo 版本、主題或套件依賴時，應視為獨立工作，先做完整建置及頁面檢查。
- SSH 主機名稱、帳號、內部 IP 與個人金鑰不應硬編碼在這份公開 README。

---

維護時若遇到新問題，請將已驗證的排除方式補充到 README，讓下次接手的人不必重新摸索。
