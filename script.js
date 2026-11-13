const ROUTES = {
    yamanote: {
        company: "jreast",
        name: "山手線",
        stations: [
            { kanji: "東京", kana: "とうきょう", patterns: ["toukyou"] },
            { kanji: "神田", kana: "かんだ", patterns: ["kannda", "kanda"] },
            { kanji: "秋葉原", kana: "あきはばら", patterns: ["akihabara"] },
            { kanji: "御徒町", kana: "おかちまち", patterns: ["okachimachi"] },
            { kanji: "上野", kana: "うえの", patterns: ["ueno"] },
            { kanji: "鶯谷", kana: "うぐいすだに", patterns: ["uguisudani"] },
            { kanji: "日暮里", kana: "にっぽり", patterns: ["nippori"] },
            { kanji: "西日暮里", kana: "にしにっぽり", patterns: ["nishinippori"] },
            { kanji: "田端", kana: "たばた", patterns: ["tabata"] },
            { kanji: "駒込", kana: "こまごめ", patterns: ["komagome"] },
            { kanji: "巣鴨", kana: "すがも", patterns: ["sugamo"] },
            { kanji: "大塚", kana: "おおつか", patterns: ["ootsuka"] },
            { kanji: "池袋", kana: "いけぶくろ", patterns: ["ikebukuro"] },
            { kanji: "目白", kana: "めじろ", patterns: ["mejiro"] },
            { kanji: "高田馬場", kana: "たかだのばば", patterns: ["takadanobaba"] },
            { kanji: "新大久保", kana: "しんおおくぼ", patterns: ["shinookubo", "shinnookubo"] },
            { kanji: "新宿", kana: "しんじゅく", patterns: ["shinnjuku", "shinjuku"] },
            { kanji: "代々木", kana: "よよぎ", patterns: ["yoyogi"] },
            { kanji: "原宿", kana: "はらじゅく", patterns: ["harajuku"] },
            { kanji: "渋谷", kana: "しぶや", patterns: ["shibuya"] },
            { kanji: "恵比寿", kana: "えびす", patterns: ["ebisu"] },
            { kanji: "目黒", kana: "めぐろ", patterns: ["meguro"] },
            { kanji: "五反田", kana: "ごたんだ", patterns: ["gotannda", "gotanda"] },
            { kanji: "大崎", kana: "おおさき", patterns: ["oosaki"] },
            { kanji: "品川", kana: "しながわ", patterns: ["shinagawa"] },
            { kanji: "高輪ゲートウェイ", kana: "たかなわげーとうぇい", patterns: ["takanawage-towei", "takanawage-toulei", "takanawage-touxei", "takanawage-towhei", "takanawagateway"] },
            { kanji: "田町", kana: "たまち", patterns: ["tamachi"] },
            { kanji: "浜松町", kana: "はままつちょう", patterns: ["hamamatsuchou"] },
            { kanji: "新橋", kana: "しんばし", patterns: ["shimbashi", "shinbashi"] },
            { kanji: "有楽町", kana: "ゆうらくちょう", patterns: ["yuurakuchou"] }
        ]
    },
    yokosuka_sobu: {
        company: "jreast",
        name: "横須賀線・総武快速線(成田線)",
        stations: [
            { kanji: "久里浜", kana: "くりはま", patterns: ["kurihama"] },
            { kanji: "衣笠", kana: "きぬがさ", patterns: ["kinugasa"] },
            { kanji: "横須賀", kana: "よこすか", patterns: ["yokosuka"] },
            { kanji: "田浦", kana: "たうら", patterns: ["taura"] },
            { kanji: "東逗子", kana: "ひがしずし", patterns: ["higashizushi"] },
            { kanji: "逗子", kana: "ずし", patterns: ["zushi"] },
            { kanji: "鎌倉", kana: "かまくら", patterns: ["kamakura"] },
            { kanji: "北鎌倉", kana: "きたかまくら", patterns: ["kitakamakura"] },
            { kanji: "大船", kana: "おおふな", patterns: ["oofuna"] },
            { kanji: "戸塚", kana: "とつか", patterns: ["totsuka"] },
            { kanji: "東戸塚", kana: "ひがしとつか", patterns: ["higashitotsuka"] },
            { kanji: "保土ヶ谷", kana: "ほどがや", patterns: ["hodogaya"] },
            { kanji: "横浜", kana: "よこはま", patterns: ["yokohama"] },
            { kanji: "武蔵小杉", kana: "むさしこすぎ", patterns: ["musashikosugi"] },
            { kanji: "西大井", kana: "にしおおい", patterns: ["nishiooi"] },
            { kanji: "品川", kana: "しながわ", patterns: ["shinagawa"] },
            { kanji: "新橋", kana: "しんばし", patterns: ["shimbashi", "shinbashi", "simbashi"] },
            { kanji: "東京", kana: "とうきょう", patterns: ["toukyou"] },
            { kanji: "新日本橋", kana: "しんにほんばし", patterns: ["shinnihonbashi", "sinnihonbashi"] },
            { kanji: "馬喰町", kana: "ばくろちょう", patterns: ["bakurochou"] },
            { kanji: "錦糸町", kana: "きんしちょう", patterns: ["kinshichou"] },
            { kanji: "新小岩", kana: "しんこいわ", patterns: ["shinnkoiwa", "shinkoiwa"] },
            { kanji: "市川", kana: "いちかわ", patterns: ["ichikawa"] },
            { kanji: "船橋", kana: "ふなばし", patterns: ["funabashi"] },
            { kanji: "津田沼", kana: "つだぬま", patterns: ["tsudanuma"] },
            { kanji: "稲毛", kana: "いなげ", patterns: ["inage"] },
            { kanji: "千葉", kana: "ちば", patterns: ["chiba", "tiba"] },
            { kanji: "都賀", kana: "つが", patterns: ["tsuga"] },
            { kanji: "四街道", kana: "よつかいどう", patterns: ["yotsukaidou"] },
            { kanji: "物井", kana: "ものい", patterns: ["monoi"] },
            { kanji: "佐倉", kana: "さくら", patterns: ["sakura"] },
            { kanji: "酒々井", kana: "しすい", patterns: ["shisui"] },
            { kanji: "成田", kana: "なりた", patterns: ["narita"] },
            { kanji: "空港第２ビル", kana: "くうこうだいにびる", patterns: ["kuukoudainibiru"] },
            { kanji: "成田空港", kana: "なりたくうこう", patterns: ["naritakuukou"] }
        ]
    },
    chuo_sobu_local: {
        company: "jreast",
        name: "中央・総武線(各駅停車)",
        stations: [
            { kanji: "三鷹", kana: "みたか", patterns: ["mitaka"] },
            { kanji: "吉祥寺", kana: "きちじょうじ", patterns: ["kichijouji"] },
            { kanji: "西荻窪", kana: "にしおぎくぼ", patterns: ["nishiogikubo"] },
            { kanji: "荻窪", kana: "おぎくぼ", patterns: ["ogikubo"] },
            { kanji: "阿佐ヶ谷", kana: "あさがや", patterns: ["asagaya"] },
            { kanji: "高円寺", kana: "こうえんじ", patterns: ["kouenji"] },
            { kanji: "中野", kana: "なかの", patterns: ["nakano"] },
            { kanji: "東中野", kana: "ひがしなかの", patterns: ["higashinakano"] },
            { kanji: "大久保", kana: "おおくぼ", patterns: ["ookubo"] },
            { kanji: "新宿", kana: "しんじゅく", patterns: ["shinnjuku", "shinjuku"] },
            { kanji: "代々木", kana: "よよぎ", patterns: ["yoyogi"] },
            { kanji: "千駄ヶ谷", kana: "せんだがや", patterns: ["senndagaya", "sendagaya"] },
            { kanji: "信濃町", kana: "しなのまち", patterns: ["shinanomachi"] },
            { kanji: "四ツ谷", kana: "よつや", patterns: ["yotsuya"] },
            { kanji: "市ヶ谷", kana: "いちがや", patterns: ["ichigaya"] },
            { kanji: "飯田橋", kana: "いいだばし", patterns: ["iidabashi"] },
            { kanji: "水道橋", kana: "すいどうばし", patterns: ["suidoubashi"] },
            { kanji: "御茶ノ水", kana: "おちゃのみず", patterns: ["ochanomizu"] },
            { kanji: "秋葉原", kana: "あきはばら", patterns: ["akihabara"] },
            { kanji: "浅草橋", kana: "あさくさばし", patterns: ["asakusabashi"] },
            { kanji: "両国", kana: "りょうごく", patterns: ["ryougoku"] },
            { kanji: "錦糸町", kana: "きんしちょう", patterns: ["kinnshichou", "kinshichou"] },
            { kanji: "平井", kana: "ひらい", patterns: ["hirai"] },
            { kanji: "新小岩", kana: "しんこいわ", patterns: ["shinnkoiwa", "shinkoiwa"] },
            { kanji: "小岩", kana: "こいわ", patterns: ["koiwa"] },
            { kanji: "市川", kana: "いちかわ", patterns: ["ichikawa"] },
            { kanji: "本八幡", kana: "もとやわた", patterns: ["motoyawata"] },
            { kanji: "下総中山", kana: "しもうさなかやま", patterns: ["shimousanakayama"] },
            { kanji: "西船橋", kana: "にしふなばし", patterns: ["nishifunabashi"] },
            { kanji: "船橋", kana: "ふなばし", patterns: ["funabashi"] },
            { kanji: "東船橋", kana: "ひがしふなばし", patterns: ["higashifunabashi"] },
            { kanji: "津田沼", kana: "つだぬま", patterns: ["tsudanuma"] },
            { kanji: "幕張本郷", kana: "まくはりほんごう", patterns: ["makuharihonngou", "makuharihongou"] },
            { kanji: "幕張", kana: "まくはり", patterns: ["makuhari"] },
            { kanji: "新検見川", kana: "しんけみがわ", patterns: ["shinnkemigawa", "shinkemigawa"] },
            { kanji: "稲毛", kana: "いなげ", patterns: ["inage"] },
            { kanji: "西千葉", kana: "にしちば", patterns: ["nishichiba"] },
            { kanji: "千葉", kana: "ちば", patterns: ["chiba"] }
        ]
    },
    keihin_tohoku_negishi: {
        company: "jreast",
        name: "京浜東北・根岸線",
        stations: [
            { kanji: "大宮", kana: "おおみや", patterns: ["oomiya"] },
            { kanji: "さいたま新都心", kana: "さいたましんとしん", patterns: ["saitamashinntoshinn"] },
            { kanji: "北浦和", kana: "きたうらわ", patterns: ["kitaurawa"] },
            { kanji: "浦和", kana: "うらわ", patterns: ["urawa"] },
            { kanji: "南浦和", kana: "みなみうらわ", patterns: ["minamiurawa"] },
            { kanji: "蕨", kana: "わらび", patterns: ["warabi"] },
            { kanji: "西川口", kana: "にしかわぐち", patterns: ["nishikawaguchi"] },
            { kanji: "川口", kana: "かわぐち", patterns: ["kawaguchi"] },
            { kanji: "赤羽", kana: "あかばね", patterns: ["akabane"] },
            { kanji: "東十条", kana: "ひがしじゅうじょう", patterns: ["higashijuujou"] },
            { kanji: "王子", kana: "おうじ", patterns: ["ouji"] },
            { kanji: "上中里", kana: "かみなかざと", patterns: ["kaminakazato"] },
            { kanji: "田端", kana: "たばた", patterns: ["tabata"] },
            { kanji: "西日暮里", kana: "にしにっぽり", patterns: ["nishinippori"] },
            { kanji: "日暮里", kana: "にっぽり", patterns: ["nippori"] },
            { kanji: "鶯谷", kana: "うぐいすだに", patterns: ["uguisudani"] },
            { kanji: "上野", kana: "うえの", patterns: ["ueno"] },
            { kanji: "御徒町", kana: "おかちまち", patterns: ["okachimachi"] },
            { kanji: "秋葉原", kana: "あきはばら", patterns: ["akihabara"] },
            { kanji: "神田", kana: "かんだ", patterns: ["kannda", "kanda"] },
            { kanji: "東京", kana: "とうきょう", patterns: ["toukyou"] },
            { kanji: "有楽町", kana: "ゆうらくちょう", patterns: ["yuurakuchou"] },
            { kanji: "新橋", kana: "しんばし", patterns: ["shimbashi", "shinbashi"] },
            { kanji: "浜松町", kana: "はままつちょう", patterns: ["hamamatsuchou"] },
            { kanji: "田町", kana: "たまち", patterns: ["tamachi"] },
            { kanji: "高輪ゲートウェイ", kana: "たかなわげ-とうぇい", patterns: ["takanawage-towei", "takanawage-toulei", "takanawage-touxei", "takanawage-towhei", "takanawagateway"] },
            { kanji: "品川", kana: "しながわ", patterns: ["shinagawa"] },
            { kanji: "大井町", kana: "おおいまち", patterns: ["ooimachi"] },
            { kanji: "大森", kana: "おおもり", patterns: ["oomori"] },
            { kanji: "蒲田", kana: "かまた", patterns: ["kamata"] },
            { kanji: "川崎", kana: "かわさき", patterns: ["kawasaki"] },
            { kanji: "鶴見", kana: "つるみ", patterns: ["tsurumi"] },
            { kanji: "新子安", kana: "しんこやす", patterns: ["shinnkoyasu", "shinkoyasu"] },
            { kanji: "東神奈川", kana: "ひがしかながわ", patterns: ["higashikanagawa"] },
            { kanji: "横浜", kana: "よこはま", patterns: ["yokohama"] },
            { kanji: "桜木町", kana: "さくらぎちょう", patterns: ["sakuragichou"] },
            { kanji: "関内", kana: "かんない", patterns: ["kannnai", "kannai"] },
            { kanji: "石川町", kana: "いしかわちょう", patterns: ["ishikawachou"] },
            { kanji: "山手", kana: "やまて", patterns: ["yamate"] },
            { kanji: "根岸", kana: "ねぎし", patterns: ["negishi"] },
            { kanji: "磯子", kana: "いそご", patterns: ["isogo"] },
            { kanji: "新杉田", kana: "しんすぎた", patterns: ["shinnsugita", "shinsugita"] },
            { kanji: "洋光台", kana: "ようこうだい", patterns: ["youkoudai"] },
            { kanji: "港南台", kana: "こうなんだい", patterns: ["kounanndai", "kounandai"] },
            { kanji: "本郷台", kana: "ほんごうだい", patterns: ["honngoudai", "hongoudai"] },
            { kanji: "大船", kana: "おおふな", patterns: ["oofuna"] }
        ]
    },
    keiyo: {
        company: "jreast",
        name: "京葉線",
        stations: [
            { kanji: "東京", kana: "とうきょう", patterns: ["toukyou"] },
            { kanji: "八丁堀", kana: "はっちょうぼり", patterns: ["hacchoubori"] },
            { kanji: "越中島", kana: "えっちゅうじま", patterns: ["ecchuujima", "etchujima"] },
            { kanji: "潮見", kana: "しおみ", patterns: ["shiomi"] },
            { kanji: "新木場", kana: "しんきば", patterns: ["shinnkiba", "shinkiba"] },
            { kanji: "舞浜", kana: "まいはま", patterns: ["maihama"] },
            { kanji: "新浦安", kana: "しんうらやす", patterns: ["shinnurayasu", "shinurayasu"] },
            { kanji: "市川塩浜", kana: "いちかわしおはま", patterns: ["ichikawashiohama"] },
            { kanji: "二俣新町", kana: "ふたまたしんまち", patterns: ["futamatashinmachi"] },
            { kanji: "南船橋", kana: "みなみふなばし", patterns: ["minamifunabashi"] },
            { kanji: "新習志野", kana: "しんならしの", patterns: ["shinnnarashino", "shinnarashino"] },
            { kanji: "幕張豊砂", kana: "まくはりとよすな", patterns: ["makuharitoyosuna"] },
            { kanji: "海浜幕張", kana: "かいひんまくはり", patterns: ["kaihinnmakuhari", "kaihinmakuhari"] },
            { kanji: "検見川浜", kana: "けみがわはま", patterns: ["kemigawahama"] },
            { kanji: "稲毛海岸", kana: "いなげかいがん", patterns: ["inagekaigann"] },
            { kanji: "千葉みなと", kana: "ちばみなと", patterns: ["chibaminato"] },
            { kanji: "蘇我", kana: "そが", patterns: ["soga"] }
        ]
    },
    narita_main: {
        company: "jreast",
        name: "成田線（本線：千葉〜銚子）",
        stations: [
            { kanji: "千葉", kana: "ちば", patterns: ["chiba", "tiba"] },
            { kanji: "東千葉", kana: "ひがしちば", patterns: ["higashichiba"] },
            { kanji: "都賀", kana: "つが", patterns: ["tsuga"] },
            { kanji: "四街道", kana: "よつかいどう", patterns: ["yotsukaidou"] },
            { kanji: "物井", kana: "ものい", patterns: ["monoi"] },
            { kanji: "佐倉", kana: "さくら", patterns: ["sakura"] },
            { kanji: "酒々井", kana: "しすい", patterns: ["shisui"] },
            { kanji: "成田", kana: "なりた", patterns: ["narita"] },
            { kanji: "久住", kana: "くずみ", patterns: ["kuzumi"] },
            { kanji: "滑河", kana: "なめがわ", patterns: ["namegawa"] },
            { kanji: "下総神崎", kana: "しもうさこうざき", patterns: ["shimousakouzaki", "simousakouzaki"] },
            { kanji: "大戸", kana: "おおと", patterns: ["ooto"] },
            { kanji: "佐原", kana: "さわら", patterns: ["sawara"] },
            { kanji: "香取", kana: "かとり", patterns: ["katori"] },
            { kanji: "水郷", kana: "すいごう", patterns: ["suigou"] },
            { kanji: "小見川", kana: "おみがわ", patterns: ["omigawa"] },
            { kanji: "笹川", kana: "ささがわ", patterns: ["sasagawa"] },
            { kanji: "下総橘", kana: "しもうさたちばな", patterns: ["shimousatachibana"] },
            { kanji: "下総豊里", kana: "しもうさとよさと", patterns: ["shimousatoyosato"] },
            { kanji: "椎柴", kana: "しいしば", patterns: ["shiishiba"] },
            { kanji: "松岸", kana: "まつぎし", patterns: ["matsugishi"] },
            { kanji: "銚子", kana: "ちょうし", patterns: ["choushi"] }
        ]
    },
    narita_abiko: {
        company: "jreast",
        name: "成田線（我孫子支線）",
        stations: [
            { kanji: "我孫子", kana: "あびこ", patterns: ["abiko"] },
            { kanji: "東我孫子", kana: "ひがしあびこ", patterns: ["higashiabiko"] },
            { kanji: "湖北", kana: "こほく", patterns: ["kohoku"] },
            { kanji: "新木", kana: "あらき", patterns: ["araki"] },
            { kanji: "布佐", kana: "ふさ", patterns: ["fusa"] },
            { kanji: "木下", kana: "きおろし", patterns: ["kioroshi"] },
            { kanji: "小林", kana: "こばやし", patterns: ["kobayashi"] },
            { kanji: "安食", kana: "あじき", patterns: ["ajiki"] },
            { kanji: "下総松崎", kana: "しもうさまんざき", patterns: ["shimousamannzaki", "shimousamanzaki"] },
            { kanji: "成田", kana: "なりた", patterns: ["narita"] }
        ]
    },
    sobu_main: {
        company: "jreast",
        name: "総武本線（千葉〜銚子）",
        stations: [
            { kanji: "千葉", kana: "ちば", patterns: ["chiba", "tiba"] },
            { kanji: "東千葉", kana: "ひがしちば", patterns: ["higashichiba"] },
            { kanji: "都賀", kana: "つが", patterns: ["tsuga"] },
            { kanji: "四街道", kana: "よつかいどう", patterns: ["yotsukaidou"] },
            { kanji: "物井", kana: "ものい", patterns: ["monoi"] },
            { kanji: "佐倉", kana: "さくら", patterns: ["sakura"] },
            { kanji: "南酒々井", kana: "みなみしすい", patterns: ["minamishisui"] },
            { kanji: "榎戸", kana: "えのきど", patterns: ["enokido"] },
            { kanji: "八街", kana: "やちまた", patterns: ["yachimata"] },
            { kanji: "日向", kana: "ひゅうが", patterns: ["hyuuga"] },
            { kanji: "成東", kana: "なるとう", patterns: ["narutou"] },
            { kanji: "松尾", kana: "まつお", patterns: ["matsuo"] },
            { kanji: "横芝", kana: "よこしば", patterns: ["yokoshiba"] },
            { kanji: "飯倉", kana: "いいぐら", patterns: ["iigura"] },
            { kanji: "八日市場", kana: "ようかいちば", patterns: ["youkaichiba", "yokaichiba"] },
            { kanji: "干潟", kana: "ひがた", patterns: ["higata"] },
            { kanji: "旭", kana: "あさひ", patterns: ["asahi"] },
            { kanji: "飯岡", kana: "いいおか", patterns: ["iioka"] },
            { kanji: "倉橋", kana: "くらはし", patterns: ["kurahashi"] },
            { kanji: "猿田", kana: "さるだ", patterns: ["saruda"] },
            { kanji: "松岸", kana: "まつぎし", patterns: ["matsugishi"] },
            { kanji: "銚子", kana: "ちょうし", patterns: ["choushi"] }
        ]
    },
    sotobo: {
        company: "jreast",
        name: "外房線",
        stations: [
            { kanji: "千葉", kana: "ちば", patterns: ["chiba", "tiba"] },
            { kanji: "本千葉", kana: "ほんちば", patterns: ["honnchiba", "honchiba"] },
            { kanji: "蘇我", kana: "そが", patterns: ["soga"] },
            { kanji: "鎌取", kana: "かまとり", patterns: ["kamatori"] },
            { kanji: "誉田", kana: "ほんだ", patterns: ["honnda", "honda"] },
            { kanji: "土気", kana: "とけ", patterns: ["toke"] },
            { kanji: "大網", kana: "おおあみ", patterns: ["ooami"] },
            { kanji: "永田", kana: "ながた", patterns: ["nagata"] },
            { kanji: "本納", kana: "ほんのう", patterns: ["honnnou", "honnou"] },
            { kanji: "新茂原", kana: "しんもばら", patterns: ["shimmobara"] },
            { kanji: "茂原", kana: "もばら", patterns: ["mobara"] },
            { kanji: "八積", kana: "やつみ", patterns: ["yatsumi"] },
            { kanji: "上総一ノ宮", kana: "かずさいちのみや", patterns: ["kazusaichinomiya"] },
            { kanji: "東浪見", kana: "とらみ", patterns: ["torami"] },
            { kanji: "太東", kana: "たいとう", patterns: ["taitou"] },
            { kanji: "長者町", kana: "ちょうじゃまち", patterns: ["choujamachi"] },
            { kanji: "三門", kana: "さんかど", patterns: ["sannkado", "sankado"] },
            { kanji: "大原", kana: "おおはら", patterns: ["oohara"] },
            { kanji: "浪花", kana: "なみはな", patterns: ["namihana"] },
            { kanji: "御宿", kana: "おんじゅく", patterns: ["onnjuku", "onjuku"] },
            { kanji: "勝浦", kana: "かつうら", patterns: ["katsuura"] },
            { kanji: "鵜原", kana: "うばら", patterns: ["ubara"] },
            { kanji: "上総興津", kana: "かずさおきつ", patterns: ["kazusaokitsu"] },
            { kanji: "行川アイランド", kana: "なめがわあいらんど", patterns: ["namegawaairanndo", "namegawaairando"] },
            { kanji: "安房小湊", kana: "あわこみなと", patterns: ["awakominato"] },
            { kanji: "安房天津", kana: "あわあまつ", patterns: ["awaamatsu"] },
            { kanji: "安房鴨川", kana: "あわかもがわ", patterns: ["awakamogawa"] }
        ]
    },
    uchibo: {
        company: "jreast",
        name: "内房線",
        stations: [
            { kanji: "蘇我", kana: "そが", patterns: ["soga"] },
            { kanji: "浜野", kana: "はまの", patterns: ["hamano"] },
            { kanji: "八幡宿", kana: "はちまんじゅく", patterns: ["hachimannjuku", "hachimanjuku"] },
            { kanji: "五井", kana: "ごい", patterns: ["goi"] },
            { kanji: "姉ヶ崎", kana: "あねがさき", patterns: ["anegasaki"] },
            { kanji: "長浦", kana: "ながうら", patterns: ["nagaura"] },
            { kanji: "袖ケ浦", kana: "そでがうら", patterns: ["sodegaura"] },
            { kanji: "巌根", kana: "いわね", patterns: ["iwane"] },
            { kanji: "木更津", kana: "きさらづ", patterns: ["kisarazu"] },
            { kanji: "君津", kana: "きみつ", patterns: ["kimitsu"] },
            { kanji: "青堀", kana: "あおほり", patterns: ["aohori"] },
            { kanji: "大貫", kana: "おおぬき", patterns: ["oonuki"] },
            { kanji: "佐貫町", kana: "さぬきまち", patterns: ["sanukimachi"] },
            { kanji: "上総湊", kana: "かずさみなと", patterns: ["kazusaminato"] },
            { kanji: "竹岡", kana: "たけおか", patterns: ["takeoka"] },
            { kanji: "浜金谷", kana: "はまかなや", patterns: ["hamakanaya"] },
            { kanji: "保田", kana: "ほた", patterns: ["hota"] },
            { kanji: "安房勝山", kana: "あわかつやま", patterns: ["awakatsuyama"] },
            { kanji: "岩井", kana: "いわい", patterns: ["iwai"] },
            { kanji: "富浦", kana: "とみうら", patterns: ["tomiura"] },
            { kanji: "那古船形", kana: "なこふながた", patterns: ["nakofunagata"] },
            { kanji: "館山", kana: "たてやま", patterns: ["tateyama"] },
            { kanji: "九重", kana: "ここのえ", patterns: ["kokonoe"] },
            { kanji: "千倉", kana: "ちくら", patterns: ["chikura"] },
            { kanji: "千歳", kana: "ちとせ", patterns: ["chitose"] },
            { kanji: "南三原", kana: "みなみみはら", patterns: ["minamimihara"] },
            { kanji: "和田浦", kana: "わだうら", patterns: ["wadaura"] },
            { kanji: "江見", kana: "えみ", patterns: ["emi"] },
            { kanji: "太海", kana: "ふとみ", patterns: ["futomi"] },
            { kanji: "安房鴨川", kana: "あわかもがわ", patterns: ["awakamogawa"] }
        ]
    },
    tokaido_sanyo: {
        company: "jrwest",
        name: "JR京都線・神戸線",
        stations: [
            { kanji: "京都", kana: "きょうと", patterns: ["kyouto"] },
            { kanji: "高槻", kana: "たかつき", patterns: ["takatsuki"] },
            { kanji: "新大阪", kana: "しんおおさか", patterns: ["shinnoosaka", "shinoosaka"] },
            { kanji: "大阪", kana: "おおさか", patterns: ["oosaka"] },
            { kanji: "尼崎", kana: "あまがさき", patterns: ["amagasaki"] },
            { kanji: "三ノ宮", kana: "さんのみや", patterns: ["sannnomiya", "sannomiya"] },
            { kanji: "姫路", kana: "ひめじ", patterns: ["himeji"] }
        ]
    },
    osaka_loop: {
        company: "jrwest",
        name: "大阪環状線",
        stations: [
            { kanji: "大阪", kana: "おおさか", patterns: ["oosaka"] },
            { kanji: "京橋", kana: "きょうばし", patterns: ["kyoubashi"] },
            { kanji: "鶴橋", kana: "つるはし", patterns: ["tsuruhashi"] },
            { kanji: "天王寺", kana: "てんのうじ", patterns: ["tennnouji", "tennouji"] },
            { kanji: "新今宮", kana: "しんいまみや", patterns: ["shinnimamiya", "shinimamiya"] },
            { kanji: "西九条", kana: "にしくじょう", patterns: ["nishikujou"] }
        ]
    }
};

let currentStations = [];
let currentRouteKey = "";
let currentRouteName = "";
let gameMode = "normal"; // "normal" または "hard"
let gameStatus = "select";
let currentIdx = -1;
let prevIdx = -1;
let typedSoFar = "";
let activeTargetPattern = "";
let score = 0;
let count = 0;
let timeLeft = 45;
let timerId = null;

document.addEventListener("DOMContentLoaded", () => {
    const startOverlay = document.getElementById("start-overlay");
    const modeSelectOverlay = document.getElementById("mode-select-overlay");
    const settingsOverlay = document.getElementById("settings-overlay");
    const resultOverlay = document.getElementById("result-overlay");
    const recordsOverlay = document.getElementById("records-overlay");
    const readyCover = document.getElementById("ready-cover");
    const selectGuide = document.getElementById("select-guide");
    const companyMenu = document.getElementById("company-menu");
    const jreastMenu = document.getElementById("jreast-menu");
    const jrwestMenu = document.getElementById("jrwest-menu");
    const recordsListEl = document.getElementById("records-list");
    const selectedRouteTitleEl = document.getElementById("selected-route-title");
    
    const decisionSound = document.getElementById("decision-sound");
    const errorSound = document.getElementById("error-sound");

    const openSettingsBtn = document.getElementById("open-settings-btn");
    const closeSettingsBtn = document.getElementById("close-settings-btn");
    const backToSelectBtn = document.getElementById("back-to-select-btn");
    const openRecordsBtn = document.getElementById("open-records-btn");
    const closeRecordsBtn = document.getElementById("close-records-btn");

    const routeNameEl = document.getElementById("route-name");
    const timeEl = document.getElementById("time");
    const scoreEl = document.getElementById("score");
    const countEl = document.getElementById("count");
    const kanjiEl = document.getElementById("kanji");
    const kanaEl = document.getElementById("kana");
    const typingBox = document.getElementById("typing-box");
    const typedEl = document.getElementById("typed");
    const untypedEl = document.getElementById("untyped");
    const resultText = document.getElementById("result-text");

    function addFlexiblePatterns() {
        const pairs = [
            ["shi", "si"],
            ["chi", "ti"],
            ["tsu", "tu"],
            ["fu", "hu"],
            ["ji", "zi"],
            ["sha", "sya"],
            ["shu", "syu"],
            ["sho", "syo"],
            ["cha", "tya"],
            ["chu", "tyu"],
            ["cho", "tyo"],
            ["ja", "zya"],
            ["ju", "zyu"],
            ["jo", "zyo"],
            ["jya", "zya"],
            ["jyu", "zyu"],
            ["jyo", "zyo"],
            ["ja", "jya"],
            ["ju", "jyu"],
            ["jo", "jyo"],
            ["cya", "tya"],
            ["cyu", "tyu"],
            ["cyo", "tyo"],
            ["ou", "oh"],
            ["oh", "ou"],
            ["we", "ule"],
            ["we", "uxe"],
            ["we", "whe"]
        ];

        Object.values(ROUTES).forEach(route => {
            route.stations.forEach(st => {
                const normalizedBase = st.patterns.map(p => {
                    return p.replace(/(?<!n)n(?=[bcdfghjklmpqrstvwxz])/g, "nn");
                });

                normalizedBase.sort((a, b) => (b.includes("nn") ? 1 : 0) - (a.includes("nn") ? 1 : 0));

                const generatedSet = new Set(normalizedBase);

                normalizedBase.forEach(p => {
                    let queue = [p];
                    let visited = new Set();

                    while (queue.length > 0) {
                        let cur = queue.shift();
                        if (visited.has(cur)) continue;
                        visited.add(cur);
                        generatedSet.add(cur);

                        const singleN = cur.replace(/nn(?=[bcdfghjklmpqrstvwxz])/g, "n");
                        if (singleN !== cur && !visited.has(singleN)) {
                            queue.push(singleN);
                        }

                        pairs.forEach(([a, b]) => {
                            if (cur.includes(a)) {
                                const nextA = cur.replaceAll(a, b);
                                if (!visited.has(nextA)) queue.push(nextA);
                            }
                            if (cur.includes(b)) {
                                const nextB = cur.replaceAll(b, a);
                                if (!visited.has(nextB)) queue.push(nextB);
                            }
                        });
                    }
                });

                st.patterns = Array.from(generatedSet);
            });
        });
    }
    addFlexiblePatterns();

    function updateRecordsDisplay() {
        recordsListEl.innerHTML = "";
        const allKeys = ["all", "jreast_all", "jrwest_all", ...Object.keys(ROUTES)];
        const labels = {
            all: "🌏 全国（全路線）",
            jreast_all: "🟢 JR東日本 すべて",
            jrwest_all: "🔵 JR西日本 すべて"
        };
        Object.keys(ROUTES).forEach(k => {
            labels[k] = ROUTES[k].name;
        });

        allKeys.forEach(key => {
            // 通常モード記録
            const savedNormal = localStorage.getItem("typing_record_" + key);
            let sNormal = 0, cNormal = 0;
            if (savedNormal) {
                const data = JSON.parse(savedNormal);
                sNormal = data.score;
                cNormal = data.count;
            }

            const liNormal = document.createElement("li");
            liNormal.className = "record-item";
            liNormal.innerHTML = `<span>${labels[key]} (通常)</span><span class="record-score">${sNormal}点 (${cNormal}駅)</span>`;
            recordsListEl.appendChild(liNormal);

            // ハードモード記録
            const savedHard = localStorage.getItem("typing_record_hard_" + key);
            let sHard = 0, cHard = 0;
            if (savedHard) {
                const data = JSON.parse(savedHard);
                sHard = data.score;
                cHard = data.count;
            }

            const liHard = document.createElement("li");
            liHard.className = "record-item";
            liHard.style.color = "#fca5a5";
            liHard.innerHTML = `<span>${labels[key]} 🔥(ハード)</span><span class="record-score">${sHard}点 (${cHard}駅)</span>`;
            recordsListEl.appendChild(liHard);
        });
    }

    function saveRecord(routeKey, finalScore, finalCount, mode) {
        const storageKey = (mode === "hard") ? ("typing_record_hard_" + routeKey) : ("typing_record_" + routeKey);
        const saved = localStorage.getItem(storageKey);
        let bestScore = finalScore;
        let bestCount = finalCount;

        if (saved) {
            const data = JSON.parse(saved);
            if (data.score > finalScore) {
                bestScore = data.score;
                bestCount = data.count;
            }
        }

        localStorage.setItem(storageKey, JSON.stringify({ score: bestScore, count: bestCount }));
        updateRecordsDisplay();
    }

    updateRecordsDisplay();

    function playDecisionSound() {
        if (decisionSound) {
            decisionSound.currentTime = 0;
            decisionSound.play().catch(() => {});
        }
    }

    function playErrorSound() {
        if (errorSound) {
            errorSound.currentTime = 0;
            errorSound.play().catch(() => {});
        }
    }

    openRecordsBtn.addEventListener("click", () => {
        playDecisionSound();
        updateRecordsDisplay();
        recordsOverlay.classList.remove("hidden");
    });

    closeRecordsBtn.addEventListener("click", () => {
        playDecisionSound();
        recordsOverlay.classList.add("hidden");
    });

    openSettingsBtn.addEventListener("click", () => {
        playDecisionSound();
        settingsOverlay.classList.remove("hidden");
    });

    closeSettingsBtn.addEventListener("click", () => {
        playDecisionSound();
        settingsOverlay.classList.add("hidden");
    });

    backToSelectBtn.addEventListener("click", () => {
        playDecisionSound();
        settingsOverlay.classList.add("hidden");
        showRouteSelect();
    });

    document.querySelectorAll("[data-company]").forEach(btn => {
        btn.addEventListener("click", () => {
            playDecisionSound();
            const company = btn.getAttribute("data-company");
            companyMenu.classList.add("hidden");
            if (company === 'jreast') {
                selectGuide.textContent = "JR東日本：路線を選んでください";
                jreastMenu.classList.remove("hidden");
            } else if (company === 'jrwest') {
                selectGuide.textContent = "JR西日本：路線を選んでください";
                jrwestMenu.classList.remove("hidden");
            }
        });
    });

    document.getElementById("back-jreast").addEventListener("click", () => {
        playDecisionSound();
        backToCompany();
    });
    document.getElementById("back-jrwest").addEventListener("click", () => {
        playDecisionSound();
        backToCompany();
    });

    document.getElementById("restart-btn").addEventListener("click", () => {
        playDecisionSound();
        showRouteSelect();
    });

    document.getElementById("retry-btn").addEventListener("click", () => {
        playDecisionSound();
        prepareRoute(currentRouteKey, gameMode);
    });

    // モード選択画面の戻るボタン
    document.getElementById("mode-back-btn").addEventListener("click", () => {
        playDecisionSound();
        modeSelectOverlay.classList.add("hidden");
        startOverlay.classList.remove("hidden");
    });

    // 通常モードボタン
    document.getElementById("mode-normal-btn").addEventListener("click", () => {
        playDecisionSound();
        modeSelectOverlay.classList.add("hidden");
        prepareRoute(currentRouteKey, "normal");
    });

    // ハードモードボタン
    document.getElementById("mode-hard-btn").addEventListener("click", () => {
        playDecisionSound();
        modeSelectOverlay.classList.add("hidden");
        prepareRoute(currentRouteKey, "hard");
    });

    function backToCompany() {
        jreastMenu.classList.add("hidden");
        jrwestMenu.classList.add("hidden");
        selectGuide.textContent = "会社・エリアを選んでください";
        companyMenu.classList.remove("hidden");
    }

    function showRouteSelect() {
        resultOverlay.classList.add("hidden");
        settingsOverlay.classList.add("hidden");
        recordsOverlay.classList.add("hidden");
        modeSelectOverlay.classList.add("hidden");
        startOverlay.classList.remove("hidden");
        readyCover.classList.add("hidden");
        backToCompany();
        gameStatus = "select";
        clearInterval(timerId);
        updateRecordsDisplay();
    }

    // 路線ボタンをクリックしたら、すぐにゲーム開始せずモード選択画面を表示
    document.querySelectorAll("[data-route]").forEach(btn => {
        btn.addEventListener("click", () => {
            playDecisionSound();
            currentRouteKey = btn.getAttribute("data-route");
            
            // 路線名の取得
            if (currentRouteKey === 'all') currentRouteName = "全国（全路線）";
            else if (currentRouteKey === 'jreast_all') currentRouteName = "JR東日本 すべて";
            else if (currentRouteKey === 'jrwest_all') currentRouteName = "JR西日本 すべて";
            else if (ROUTES[currentRouteKey]) currentRouteName = ROUTES[currentRouteKey].name;

            selectedRouteTitleEl.textContent = currentRouteName;
            startOverlay.classList.add("hidden");
            modeSelectOverlay.classList.remove("hidden");
        });
    });

    function prepareRoute(routeKey, mode) {
        gameMode = mode;
        currentStations = [];

        if (routeKey === 'all') {
            Object.values(ROUTES).forEach(r => currentStations.push(...r.stations));
            currentRouteName = "全国（全路線）";
        } else if (routeKey === 'jreast_all') {
            Object.values(ROUTES).filter(r => r.company === 'jreast').forEach(r => currentStations.push(...r.stations));
            currentRouteName = "JR東日本 すべて";
        } else if (routeKey === 'jrwest_all') {
            Object.values(ROUTES).filter(r => r.company === 'jrwest').forEach(r => currentStations.push(...r.stations));
            currentRouteName = "JR西日本 すべて";
        } else {
            if (ROUTES[routeKey]) {
                currentStations = [...ROUTES[routeKey].stations];
                currentRouteName = ROUTES[routeKey].name;
            }
        }

        if (currentStations.length === 0) return;

        routeNameEl.textContent = currentRouteName + (gameMode === "hard" ? " 🔥(ハード)" : "");
        gameStatus = "ready";
        score = 0;
        count = 0;
        timeLeft = 45;
        prevIdx = -1;

        startOverlay.classList.add("hidden");
        resultOverlay.classList.add("hidden");
        settingsOverlay.classList.add("hidden");
        recordsOverlay.classList.add("hidden");
        modeSelectOverlay.classList.add("hidden");

        updateHud();
        loadRandomStation();

        readyCover.classList.remove("hidden");
    }

    function startActualGame() {
        playDecisionSound();
        gameStatus = "playing";
        readyCover.classList.add("hidden");
        loadRandomStation();

        clearInterval(timerId);
        timerId = setInterval(() => {
            timeLeft--;
            updateHud();
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function loadRandomStation() {
        if (currentStations.length > 1) {
            do {
                currentIdx = Math.floor(Math.random() * currentStations.length);
            } while (currentIdx === prevIdx);
        } else {
            currentIdx = 0;
        }
        prevIdx = currentIdx;

        typedSoFar = "";
        
        const st = currentStations[currentIdx];
        kanjiEl.textContent = st.kanji;
        
        // ハードモードの場合は読み方とローマ字の入力例を非表示（空文字）にする
        if (gameMode === "hard") {
            kanaEl.textContent = "";
        } else {
            kanaEl.textContent = st.kana;
        }

        activeTargetPattern = st.patterns[0];
        updateTypingText();
    }

    function updateTypingText() {
        if (gameMode === "hard") {
            // ハードモードでは打った文字も未入力の文字も一切非表示
            typedEl.textContent = "";
            untypedEl.textContent = "";
        } else {
            typedEl.textContent = typedSoFar;
            untypedEl.textContent = activeTargetPattern.slice(typedSoFar.length);
        }
    }

    function updateHud() {
        timeEl.textContent = timeLeft;
        scoreEl.textContent = score;
        countEl.textContent = count;
    }

    function endGame() {
        gameStatus = "select";
        clearInterval(timerId);
        readyCover.classList.add("hidden");

        saveRecord(currentRouteKey, score, count, gameMode);

        resultText.textContent = `${gameMode === "hard" ? "🔥【ハード】" : ""} スコア: ${score} 点 / 通過駅数: ${count} 駅`;
        resultOverlay.classList.remove("hidden");
    }

    window.addEventListener("keydown", (e) => {
        if (gameStatus === "ready") {
            if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                startActualGame();
            }
            return;
        }

        if (gameStatus === "playing") {
            if (e.ctrlKey || e.altKey || e.metaKey || e.key.length !== 1) return;

            const st = currentStations[currentIdx];
            const key = e.key.toLowerCase();
            const nextTyped = typedSoFar + key;

            const matchingPatterns = st.patterns.filter(p => p.startsWith(nextTyped));
            const possiblePatterns = st.patterns.filter(p => p.startsWith(typedSoFar));

            if (matchingPatterns.length > 0) {
                playDecisionSound();

                typedSoFar = nextTyped;
                score += 10;

                if (matchingPatterns.some(p => p === typedSoFar)) {
                    count++;
                    score += 50;
                    loadRandomStation();
                } else {
                    if (!matchingPatterns.includes(activeTargetPattern)) {
                        activeTargetPattern = matchingPatterns[0];
                    }
                    updateTypingText();
                }
                updateHud();
            } else {
                const couldBePrefix = possiblePatterns.some(p => p.startsWith(nextTyped));

                if (couldBePrefix) {
                    playDecisionSound();
                    typedSoFar = nextTyped;
                    score += 5;
                    updateHud();
                } else {
                    playErrorSound();

                    score = Math.max(0, score - 5);
                    updateHud();
                    typingBox.classList.remove("shake");
                    void typingBox.offsetWidth;
                    typingBox.classList.add("shake");
                }
            }
            return;
        }
    });
});