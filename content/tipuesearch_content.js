var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n my\xa0repository :\xa0 mdecp2022 / site-40823139 \n', 'tags': '', 'url': 'About.html'}, {'title': '各週整理', 'text': '', 'tags': '', 'url': '各週整理.html'}, {'title': 'W3.', 'text': '本週核心:了解基本的環境架構及倉儲系統的運作 \n', 'tags': '', 'url': 'W3..html'}, {'title': 'Replit', 'text': 'Replit是一個線上開發集成的服務，簡單來說就是把原本近端的推送轉移至遠端進行，因此只要有倉儲、權限，就能在網路上直接進行課程網頁的改版，而免費使用者擁有500MB的限制。 \n 利用Replit進行遠端改版步驟: \n \n 建立Replit帳號 \n 找到自己課程網頁的倉儲並複製url \n 點選Create，貼上url，Language選python(課程網頁檔案是python寫的) \n 從右側欄位開啟Shell(遠端主機是Linux，要以Linux語法下command) \n 利用git指令將子模組(可視作引擎)抓下來 \n git submodule update --init --recursive \n --init:初始化\xa0 \xa0--recursive:以遞迴方式抓所有東西 \n \n 下載python套件管理工具(因為是在遠端執行) \n pip install flask flask_cors bs4 lxml pelican markdown gevent \n \n 環境設定完成後，按Run執行，並複製網址執行動態網頁 \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': '網頁與倉儲', 'text': '網頁的誕生 \n 一個基本的網頁架構由以下三者構成 \n \n HTML(架構)：網站的主體，用來定義段落、標題、嵌入圖片和影片等等 \n CSS(外觀)：設置版面、文字編排、顏色等 \n JavaScript(動作)：能完成網頁上的互動 \n \n 擁有以上三者就能組成最基本的靜態網頁，由此便能呈現出想呈現的的文字、圖片等，這種把用戶及設計師(UI/UX方)的需求呈現成網頁的技術就屬前端工程!但純粹編輯靜態網頁其實很麻煩(用F12看網頁的code就知道)，因為使用者還欠缺了後台(後端工程)，而有後台的網頁就稱"動態網頁"，也就是這門課用cms.bat的批次檔開啟後的網頁! \n 當利用動態網頁時，你會發現不再需要從純粹的code下手，只要打上想呈現的內容，更新後就會自動把轉換成對應的html檔，這對於經常需要維護的網頁方便許多!然而，加上後端之後，維護成本也勢必高出不少。 \n 網頁與倉儲 \n 課程之初，每個人都需要先創立一個github帳號，並建立個人倉儲，該倉儲將儲存課程網頁的檔案及資料。 \n github是一個協作開發平台，基本上就是一個版次控制工具。最大好處就是採用Git，每次push都能產生一個對應的版次，因此當出現大量麻煩的錯誤時或上級要求回歸前個設計時就能很方便的切換版次!而雲端資料庫不僅能避免掉近端的database損壞，也能達到協同開發的效用(但仍有倉儲commit被洗掉的可能，比如協同者處理分支不當，直接強推，把資料庫蓋掉。) \n Git優缺點 \n \n 能分散式的開發(有master跟branch) \n 能作為證明的歷史紀錄(每次改版的訊息都會留下) \n 效率不錯 \n 免費 免費 免費 \n 一切公開 \n \n \n 資料補充: \n 網站原理 (4)：什麼是靜態網頁？什麼是動態網頁？兩者有什麼差別？ \n 網站原理 (3)：網站是怎麼構成的？ – 淺談網站的3大要素：UI/UX設計師 前端工程師 後端工程師 \n \n \n', 'tags': '', 'url': '網頁與倉儲.html'}, {'title': 'CMD命令提示字元', 'text': '在計算機程式中將大量運用到CMD啟動近端資料夾的引擎，CMD即命令提示字元(command縮寫)，該工具就是所謂的Shell(殼層)。 \n 所謂的Shell是指 「為使用者提供使用者介面」的軟體，為User跟System溝通的橋樑(否則人類沒辦法直接跟電腦溝通)，而我們在Windows開啟檔案時大多是到檔案總管中點擊圖示開啟檔案，這樣的圖形化介面(GUI)能供使用者更直覺的使用(不用記命令)。 \n 不過使用CMD仍有不少好處，如有效率的達到目的、節省電腦資源、到其他環境(比如其他人的電腦)不用花太長時間了解新GUI...。因此高效與易用將成為使用者的抉擇點。而CMD還有以下特點: \n \n 指令不分大小寫 \n 我(使用者)下"命令"電腦做"提示" \n 老東西，很早就出現了，所以相容性不錯，寫法也簡單 \n \n CMD基本指令 \n \n cd current directory的縮寫，能移動指定目的(資料夾、檔案等) 常用:cd .. :回上層資料夾 \n dir Directory的縮寫，能列出該目錄下的資料 常用:dir a :所有底下的資料都顯示(含隱藏的) , dir q:只顯示有所有權的資料 \n \n 資料補充: \n 命令提示字元--CMD那麼好用你不學一下嗎? \n Command Line 超新手入門 \n', 'tags': '', 'url': 'CMD命令提示字元.html'}, {'title': 'W4.', 'text': '本週核心:建立近端可攜系統與了解SSH \n', 'tags': '', 'url': 'W4..html'}, {'title': '可攜環境', 'text': '可攜，如字面上所言，擁有"攜帶性"，以程式層面來講就是把程式碼從A環境拿到B環境仍然可使用。 \n 可攜式的軟體可發現一特點-不用執行安裝檔，也不用把資料建在本地(自己的電腦)，因此不會有工作環境變更後沒辦法使用的問題，不過也沒有一個萬用的程式碼能夠跨越到世界上的所有運算平台，因此在創造可攜程式時需要考慮目標(要移植到哪個環境)。 \n 這門課所使用的portable_python_3.10.6封包就是老師所建立的可攜python環境。由於可攜的特性，可以發現使用者只要擁有一個USB，就能在不同的環境下完成課程網頁的更新，無須再跑到學校電腦做推送。 \n', 'tags': '', 'url': '可攜環境.html'}, {'title': 'SSH', 'text': 'SSH為 Secure Shell的縮寫，SSH的傳輸方式可以想像成寄送包裹似的，你寄出的包裹郵差並不會知道內容物(加密)，而且接收包裹的人必須確定是本人才能收! 透過SSH協定，過程中將會產生兩把鑰匙(一把公鑰及一把私鑰)，公鑰就好比是包裹，上面有寫收件人是誰，而且其他人也都能看到，但取貨仍然需要拿證件(私鑰)才能取。 \n 過去的github在不設定SSH的情況下推送需要輸入密碼才能push，不過在公開環境下輸入密碼想必是危險的事!在2021年8月github也宣布了不再支援這種輸入密碼的推送方式(微軟也做了類似的事)，取而代之的是personal access token(把密碼變成加密過的字串，填密碼時就填那串)。然而token也有外流的可能，利用SSH則可以直接推送，連toke都不用打，更為安全且效率(前提是private key有好好保存沒有亂放)。 \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'W5.', 'text': '本週核心:利用SSH完成課程網頁推送 \n', 'tags': '', 'url': 'W5..html'}, {'title': '如何使用ssh', 'text': '如W4所補充，要使用ssh進行推送需要 \n \n 一對正確的 public key 與 private key (別妄想拿自己的鑰匙開別人的鎖) \n 將公鑰上傳至伺服器，將私鑰登入在近端(自己的電腦) \n \n 想獲得及推送ssh key可直接使用shell抑或是選擇課程所教的putty & puttygen(建議此方法) \n step1. 開啟puttygen，點擊Generate後四處移動滑鼠，完畢後會產生 public key & private key \n step2.在puttygen點選Load載入public key，複製後貼上github的ssh介面以新增ssh key \n \n step3.開啟putty，設定Session(要推送的Host)、Proxy(代理)及Auth(授權，即自己的私鑰)，完成後open(必須) \n \n \n \n \n \n', 'tags': '', 'url': '如何使用ssh.html'}, {'title': 'W6.', 'text': '本週核心:可攜系統建立與抽點程式說明 \n', 'tags': '', 'url': 'W6..html'}, {'title': '抽點程式', 'text': '# Python 的註解分為單行註解與多行, 單行註解可在字串前方放入 #\n\'\'\'多行註解則可以透過三個單引號前後標註字串或文字段落內容, \n也可以使用三個雙引號作為多行註解的標註\n\'\'\'\n# 使用 import 導入 random 模組, 隨後就可以直接引用 random 模組的方法\nimport random\ncp1b = "0761"\n# 宣告 url 變數值為字串, 此字串為取得 cp2022 1a 選課成員名單\nurl = "https://nfu.cycu.org/?semester=1111&courseno=" + cp1b + "&column=True"\n# 利用上述已經宣告的 url 變數字串值, 作為 open() 函式的輸入變數, 可以連結至該網站\n# 連接 url 所代表字串的網站後, 再利用 read() 函式讀取該網站的內容, 即可取得 cp2022 1a 的選課成員學號\n# url 所屬的網站, 乃 69 中的一台虛擬主機 8/10ff-0-1-2, 並利用 Get 從教務主機取回課程註冊成員學號\n# 由於所取回的學號以跳行符號隔開, 因此取回的學號資料行, 再利用 split() 函式, 以 \\n 跳行符號分割後\n# 所對應到 data 的資料型別將會是數列\ndata = open(url).read().split("\\n")\n# 經過檢查 data 數列, 發現最後一個 element 為空字串, 因此利用 [:-1] 去掉數列的最後一個元素, -1 代表數列最後一個元素的索引\n#print(data[:-1])\n# 設定一個變數, 與修課成員學號數列對應\nstud = data[:-1]\n# 使用 random 模組中的 shuffle() 函式, 以隨機的方式排列 stud 數列內容\nrandom.shuffle(stud)\n# 設定 num 與 5 對應, 或將 5 整數值存入 num 變數所對應的記憶體位址\nnum = 5\n# 利用 for 重複迴圈與 range() 變數, 列印出 (利用 print() 函式) 已經隨機排列次序的 stud 數列的最前面 num 個學號值\nfor i in range(num):\n    print(stud[i]) \n 擷取個人靜態網頁 \n from browser import document, html\n\nbrython_div1 = document["brython_div1"]\n"""\nbrython_div1 <= html.BUTTON("hello")\nbrython_div1 <= html.BR()\nbrython_div1 <= html.A("google", href="https://google.com")\n"""\n\nurl = "https://mde.tw/studlist/2022fall/1a.txt"\ndata = open(url).read().split("\\n")\nmdecp2022 = "https://mdecp2022.github.io/site-"\ndata = data[1:-1]\nfor i in data:\n    stud = i.split("\\t")\n    stud_num = stud[0]\n    github_acc = stud[1]\n    #print(stud_num, github_acc)\n    if github_acc == "":\n        github_acc = stud_num\n    site = mdecp2022 + github_acc\n    link = html.A(stud_num, href=site)\n    brython_div1 <= link\n    brython_div1 <= html.BR() \n \n', 'tags': '', 'url': '抽點程式.html'}, {'title': '程式執行', 'text': '程式說明:執行後可隨機取得甲班五個人的網站連結 \n random \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n', 'tags': '', 'url': '程式執行.html'}, {'title': 'W7.', 'text': '本週核心:了解環境設置與編輯方式 \n', 'tags': '', 'url': 'W7..html'}, {'title': '環境設置', 'text': '補充:環境與網路相關配置 \n', 'tags': '', 'url': '環境設置.html'}, {'title': '如何在網頁上執行程式', 'text': '補充:嵌入抽點程式步驟 \n', 'tags': '', 'url': '如何在網頁上執行程式.html'}, {'title': 'W8~W9.', 'text': '考試週 \n', 'tags': '', 'url': 'W8~W9..html'}, {'title': 'W10.', 'text': '本週核心:理解python的使用與延伸 \n', 'tags': '', 'url': 'W10..html'}, {'title': '補充程式', 'text': '程式說明:完成HW前須知的概念 \n compare \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': '補充程式.html'}, {'title': 'HW1', 'text': '備註:在編寫時發現有部分python的module沒辦法在網頁上載入，下面的版本只適用課程網頁上執行 \n 備註2:沒有甲班的json檔，所以暫用乙班名單(甲班考試時代理伺服器(proxy)有問題，有部分人無法應試) \n 程式說明:利用考試結果(json檔)顯示出各學員"學號+成績"，並將沒參與者顯示缺考 \n score&num \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': '題目:修改以下的code，使其顯示出 1,3,7,9 \n a = ""\nfor i in range(1, 10, 1):\n    a + str(i) + ","\nprint(a) \n \n range \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'W11.', 'text': '本週核心:學習python的應用(校慶，本班停課) \n', 'tags': '', 'url': 'W11..html'}, {'title': '利用Brython在網頁畫圖', 'text': '程式說明:執行後可隨機取得甲班五個人的網站連結 \n draw \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': '利用Brython在網頁畫圖.html'}, {'title': 'W12.', 'text': '本週核心:探討及回顧計算機程式課程與程式延伸練習 \n', 'tags': '', 'url': 'W12..html'}, {'title': '缺考名單範例(老師範例)', 'text': '程式說明:了解資料格式後，利用ast與json模組取得所需資料，並列出成績及缺考人 \n w12 ex. \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': '缺考名單範例(老師範例).html'}, {'title': 'HW', 'text': '各週作業內容、心得與討論 \n', 'tags': '', 'url': 'HW.html'}, {'title': 'w13', 'text': '', 'tags': '', 'url': 'w13.html'}, {'title': '溫度轉換程式', 'text': '程式說明:執行後可隨機取得甲班五個人的網站連結 \n temp \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': '溫度轉換程式.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': '物件導向程式', 'text': '\n \n  以下事先在頁面中加入 id="brython_div" 的 div 標註\n之後可利用 Brython 的 document 模組與此 html 標註對應\n \n 說明:利用物件導向的方式撰寫溫度轉換程式的button \n  將直接執行的程式 comment 掉\n<script type="text/python">\nfrom browser import html, document\n# Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\n# 但是在頁面中 Brython 的 print() 將會顯示在 log 而非頁面\nprint(type(user_input_temp))\n# 這裡定義一個 brython_div 變數, 透過 document[] 與頁面中 id="brython_div" 的位置對應\nbrython_div = document["brython_div"]\n# 看能不能直接將變數值字串列在標註 id 為 "brython_div" 的頁面位置\nbrython_div <= user_input_temp\n# 之後若要列出 html, 則需要透過 Brython 的 html 模組\n</script>\n \n 取使用者輸入 \n \n 以下為此程式的source code \n <!-- \n在動態網站頁面中啟用 Brython 執行環境的用法, 請注意動態網站執行所在路徑\n-->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 Brython -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'/downloads/py/\']});\n}\n// ]]></script>\n<!-- 以下事先在頁面中加入 id="brython_div" 的 div 標註\n之後可利用 Brython 的 document 模組與此 html 標註對應\n--></p>\n<div id="brython_div"></div>\n<p><!-- 將直接執行的程式 comment 掉\n<script type="text/python">\nfrom browser import html, document\n# Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\n# 但是在頁面中 Brython 的 print() 將會顯示在 log 而非頁面\nprint(type(user_input_temp))\n# 這裡定義一個 brython_div 變數, 透過 document[] 與頁面中 id="brython_div" 的位置對應\nbrython_div = document["brython_div"]\n# 看能不能直接將變數值字串列在標註 id 為 "brython_div" 的頁面位置\nbrython_div <= user_input_temp\n# 之後若要列出 html, 則需要透過 Brython 的 html 模組\n</script>\n--></p>\n<p><button id="btn1">取使用者輸入</button></p>\n<div id="brython_div"></div>\n<p>\n<script type="text/python">// <![CDATA[\nfrom browser import html, document\n# Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\n#user_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\n# 但是在頁面中 Brython 的 print() 將會顯示在 log 而非頁面\n#print(type(user_input_temp))\n# 這裡定義一個 brython_div 變數, 透過 document[] 與頁面中 id="brython_div" 的位置對應\nbrython_div = document["brython_div"]\n# 看能不能直接將變數值字串列在標註 id 為 "brython_div" 的頁面位置\n#brython_div <= user_input_temp\n# 之後若要列出 html, 則需要透過 Brython 的 html 模組\n# 接下來要設法按下按鈕之後才執行取使用者 input 的流程\n# 首先 comment 掉前面的 input() 與 print(), 同時蓋掉輸出, 並利用事件導向設計一個函式\ndef get_input(env):\n    user_input_temp = input("請輸入攝氏溫度值:")\n    brython_div <= user_input_temp\n# 透過 Brython browser 模組中的 document 物件將 id="btn1" 的物件中的 bind() 方法\n# 讓使用者 click 後會經由瀏覽器中的 event 通知執行 get_input 函式\ndocument["btn1"].bind(\'click\', get_input)\n// ]]></script>\n</p> \n \n \n \n \n', 'tags': '', 'url': '物件導向程式.html'}, {'title': 'w15', 'text': '', 'tags': '', 'url': 'w15.html'}, {'title': 'H2', 'text': '\n \n 為何學習計算機程式需要建立個人倉儲? A:藉由git這個強大的版次管理工具可建立起學生的學習歷程，任何推送及修改一清二楚 \n 全球資訊網能夠提供甚麼功能或有什麼優點? A:全球資訊網(www)可藉由網路獲取其頁面，無須實體傳輸，即可獲得異地資料 \n Replit, stud.cycu.org 與 localhost 分別代表甚麼? A: Replit可進行線上程式開發, stud.cycu.org的功能類似於Replit，不過是自架(因為Replit有空間限制)； localhost就是本地主機，為近端開發使用。 \n https, ssh 到底提供使用者那些功能或優點? A: \n Brython 與 Python 有甚麼差別? A: \n 能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? A: \n 變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼? A: \n \n', 'tags': '', 'url': 'H2.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'Brython.html'}]};