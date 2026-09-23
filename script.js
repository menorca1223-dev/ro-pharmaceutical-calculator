// ========================================
// RO 製薬計算機
// ========================================

let recipes = {};
let npcData = {};
let materialsData = {};


// ========================================
// スペシャルファーマシー
// ========================================


// ========================================
// トワイライトファーマシー
// ========================================

const twilightPharmacyData = {
    twilight_white_potion: {
        name: "白ポーション",
        outputNote: "1回で200個作成",
        books: ["ポーション製造の書"],
        materials: [
            { name: "乳鉢", quantity: 200 },
            { name: "白ハーブ", quantity: 200 },
            { name: "空のポーション瓶", quantity: 200 }
        ]
    },

    twilight_white_slime_potion: {
        name: "ホワイトスリムポーション",
        outputNote: "1回で200個作成",
        books: ["スリムポーション製造の書"],
        materials: [
            { name: "乳鉢", quantity: 200 },
            { name: "白ポーション", quantity: 200 },
            { name: "魔女の星の砂", quantity: 200 },
            { name: "空の試験管", quantity: 200 }
        ]
    },

    twilight_alcohol: {
        name: "アルコール",
        outputNote: "1回で100個作成",
        books: ["アルコール製造の書"],
        materials: [
            { name: "乳鉢", quantity: 200 },
            { name: "毒キノコの胞子", quantity: 500 },
            { name: "植物の茎", quantity: 500 },
            { name: "透明な布", quantity: 50 },
            { name: "止まらない心臓", quantity: 50 }
        ]
    },

    twilight_alcohol_acid_fire: {
        name: "アルコール100・アシッドボトル50・ファイヤーボトル50",
        outputNote: "1回でアルコール100個・アシッドボトル50個・ファイヤーボトル50個作成",
        books: [
            "アルコール製造の書",
            "ファイアーボトル製造の書",
            "アシッドボトル製造の書"
        ],
        materials: [
            { name: "乳鉢", quantity: 200 },
            { name: "空きビン", quantity: 200 },
            { name: "空の試験管", quantity: 100 },
            { name: "毒キノコの胞子", quantity: 500 },
            { name: "植物の茎", quantity: 500 },
            { name: "透明な布", quantity: 500 },
            { name: "止まらない心臓", quantity: 50 }
        ]
    }
};

const specialPharmacyData = {

    thorn_seed: {
        name: "茨の種",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "遺伝子組み換え植物栽培法",
        materials: [
            { name: "トゲの実", quantity: 10 }
        ]
    },

    vampire_plant_seed: {
        name: "吸血植物の種",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "遺伝子組み換え植物栽培法",
        materials: [
            { name: "食人植物の根", quantity: 10 }
        ]
    },

    bomb_mushroom_spore: {
        name: "爆弾キノコの胞子",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "遺伝子組み換え植物栽培法",
        materials: [
            { name: "きのこの胞子", quantity: 10 },
            { name: "毒キノコの胞子", quantity: 5 },
            { name: "ガンパウダー", quantity: 2 }
        ]
    },

    vitata500: {
        name: "ビタタ500",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "上級ポーション製造マニュアル",
        materials: [
            { name: "空の試験管", quantity: 10 },
            { name: "アルコール", quantity: 1 },
            { name: "白ポーション", quantity: 20 },
            { name: "白ハーブ", quantity: 10 }
        ]
    },

    concentrated_salamine_juice: {
        name: "濃縮サラマインジュース",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "上級ポーション製造マニュアル",
        materials: [
            { name: "空の試験管", quantity: 10 },
            { name: "辛口ソース", quantity: 5 },
            { name: "スピードアップポーション", quantity: 5 },
            { name: "ハイスピードアップポーション", quantity: 5 }
        ]
    },

    cure_free: {
        name: "キュアーフリー",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "上級ポーション製造マニュアル",
        materials: [
            { name: "空の試験管", quantity: 10 },
            { name: "万能薬", quantity: 5 },
            { name: "緑ハーブ", quantity: 20 },
            { name: "マステラの実", quantity: 1 },
            { name: "イグドラシルの葉", quantity: 1 }
        ]
    },

    hp_potion_small: {
        name: "HP増加ポーション(小)",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "スタミナ増進研究書",
        materials: [
            { name: "空きビン", quantity: 10 },
            { name: "辛口ソース", quantity: 1 },
            { name: "化け物のエサ", quantity: 5 },
            { name: "白ハーブ", quantity: 10 }
        ]
    },

    hp_potion_medium: {
        name: "HP増加ポーション(中)",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "スタミナ増進研究書",
        materials: [
            { name: "空きビン", quantity: 10 },
            { name: "辛口ソース", quantity: 1 },
            { name: "白ハーブ", quantity: 10 },
            { name: "黄ハーブ", quantity: 10 }
        ]
    },

    hp_potion_large: {
        name: "HP増加ポーション(大)",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "スタミナ増進研究書",
        materials: [
            { name: "空きビン", quantity: 10 },
            { name: "辛口ソース", quantity: 1 },
            { name: "聖水", quantity: 1 },
            { name: "白ハーブ", quantity: 15 },
            { name: "マステラの実", quantity: 3 }
        ]
    },

    sp_potion_small: {
        name: "SP増加ポーション(小)",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "活力ドリンク製造法",
        materials: [
            { name: "空きビン", quantity: 10 },
            { name: "甘口ソース", quantity: 1 },
            { name: "レモン", quantity: 10 },
            { name: "白ハーブ", quantity: 15 },
            { name: "ブドウ", quantity: 10 }
        ]
    },

    sp_potion_medium: {
        name: "SP増加ポーション(中)",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "活力ドリンク製造法",
        materials: [
            { name: "空きビン", quantity: 10 },
            { name: "甘口ソース", quantity: 1 },
            { name: "青ハーブ", quantity: 10 },
            { name: "ハチ蜜", quantity: 10 }
        ]
    },

    sp_potion_large: {
        name: "SP増加ポーション(大)",
        outputNote: "6個〜12個程度（最低保証は1 + スキルLv×0.5個など）の間で変動",
        book: "活力ドリンク製造法",
        materials: [
            { name: "空きビン", quantity: 10 },
            { name: "甘口ソース", quantity: 1 },
            { name: "青ハーブ", quantity: 15 },
            { name: "ローヤルゼリー", quantity: 10 }
        ]
    }
};

const specialPharmacyLocations = {
    "辛口ソース": [
        { map: "アユタヤ", coordinate: "(202, 178)" },
        { map: "コモド", coordinate: "(224, 164)" },
        { map: "ピラミッド前", coordinate: "(115, 123)" },
        { map: "フェイヨン", coordinate: "(205, 119)" }
    ],
    "甘口ソース": [
        { map: "アマツ", coordinate: "(205, 150)" },
        { map: "コモド", coordinate: "(224, 164)" },
        { map: "ピラミッド前", coordinate: "(115, 123)" }
    ],
    "スピードアップポーション": [
    { map: "アルベルタ", coordinate: "(98, 153)" },
    { map: "アルデバラン", coordinate: "(197, 70)" },
    { map: "アマツ", coordinate: "(94, 117)" },
    { map: "アユタヤ", coordinate: "(132, 86)" },
    { map: "コモド", coordinate: "(92, 128)" },
    { map: "アインベフ", coordinate: "(177, 133)" },
    { map: "アインブロック", coordinate: "(82, 199)" },
    { map: "ゲフェン", coordinate: "(43, 85)" },
    { map: "コンロン", coordinate: "(147, 84)" },
    { map: "フィゲル", coordinate: "(92, 165)" },
    { map: "イズルード", coordinate: "(148, 148)" },
    { map: "リヒタルゼン", coordinate: "(323, 300) ※貧困街にいる" },
    { map: "龍之城", coordinate: "(134, 80)" },
    { map: "ピラミッド前", coordinate: "(114, 63)" },
    { map: "ピラミッド前", coordinate: "(91, 128)" },
    { map: "フェイヨン", coordinate: "(159, 96)" },
    { map: "フェイヨン", coordinate: "(143, 85)" },
    { map: "アーチャーの町", coordinate: "(71, 156)" },
    { map: "プロンテラ", coordinate: "(132, 222)" },
    { map: "ウンバラ", coordinate: "(138, 129)" },
    { map: "ルティエ", coordinate: "(120, 131)" },
    { map: "ジュノー", coordinate: "(196, 138)" },
    { map: "ジュノー", coordinate: "(218, 97)" },
    { map: "ラヘル", coordinate: "(83, 76)" },
    { map: "ベインス", coordinate: "(230, 164)" },
    { map: "モスコビア", coordinate: "(222, 176)" },
    { map: "ブラジリス", coordinate: "(252, 257)" },
    { map: "デワタ", coordinate: "(182, 164)" },
    { map: "ポートマラヤ", coordinate: "(299, 167) ※建物内にいる" },
    { map: "イスガルド 氷の城", coordinate: "(186, 222) ※建物内の座標「180,61」にいる" },
    { map: "旧フェイヨン", coordinate: "(79, 124)" },
    { map: "トネリコ村", coordinate: "(140, 210) ※「トネリコ村 室内(ygg_fruit)」にいる" }
],

"ハイスピードアップポーション": [
    { map: "アルベルタ", coordinate: "(98, 153)" },
    { map: "アルデバラン", coordinate: "(197, 70)" },
    { map: "アマツ", coordinate: "(94, 117)" },
    { map: "アユタヤ", coordinate: "(132, 86)" },
    { map: "コモド", coordinate: "(92, 128)" },
    { map: "アインベフ", coordinate: "(177, 133)" },
    { map: "ゲフェン", coordinate: "(43, 85)" },
    { map: "コンロン", coordinate: "(147, 84)" },
    { map: "フィゲル", coordinate: "(92, 165)" },
    { map: "イズルード", coordinate: "(148, 148)" },
    { map: "リヒタルゼン", coordinate: "(195, 190) ※デパート2Fにいる" },
    { map: "リヒタルゼン", coordinate: "(323, 300) ※貧困街にいる" },
    { map: "龍之城", coordinate: "(134, 80)" },
    { map: "ピラミッド前", coordinate: "(114, 63)" },
    { map: "ピラミッド前", coordinate: "(91, 128)" },
    { map: "フェイヨン", coordinate: "(143, 85)" },
    { map: "アーチャーの町", coordinate: "(71, 156)" },
    { map: "プロンテラ", coordinate: "(132, 222)" },
    { map: "ウンバラ", coordinate: "(138, 129)" },
    { map: "ルティエ", coordinate: "(120, 131)" },
    { map: "ジュノー", coordinate: "(196, 138)" },
    { map: "ジュノー", coordinate: "(218, 97)" },
    { map: "ラヘル", coordinate: "(83, 76)" },
    { map: "ベインス", coordinate: "(230, 164)" },
    { map: "モスコビア", coordinate: "(222, 176)" },
    { map: "ブラジリス", coordinate: "(252, 257)" },
    { map: "デワタ", coordinate: "(182, 164)" },
    { map: "ポートマラヤ", coordinate: "(299, 167) ※建物内にいる" },
    { map: "港町ラザーニャ", coordinate: "(332, 276)" },
    { map: "イスガルド 氷の城", coordinate: "(186, 222) ※建物内の座標「180,61」にいる" },
    { map: "トネリコ村", coordinate: "(140, 210) ※「トネリコ村 室内(ygg_fruit)」にいる" }
],
};

const specialPharmacyPurchasePrices = {
    "辛口ソース": {
        price: 700,
        dc10: 532
    },
    "甘口ソース": {
        price: 700,
        dc10: 532
    },
    "スピードアップポーション": {
        price: 800,
        dc10: 608
    },
    "ハイスピードアップポーション": {
        price: 1500,
        dc10: 1140
    }
};

const specialPharmacyBookPrices = {
    "遺伝子組み換え植物栽培法": 100000,
    "上級ポーション製造マニュアル": 100000,
    "ミックスクッキング料理本": 100000,
    "スタミナ増進研究書": 100000,
    "活力ドリンク製造法": 100000
};

// 通常ファーマシーの本の価格
// 本はDC10対象外。作成個数に関係なく1冊のみ購入。
const pharmacyBookPrices = {
    "ポーション製造の書": 100000,
    "アルコール製造の書": 100000,
    "ファイアーボトルの書": 100000,
    "ファイアーボトル製造の書": 100000,
    "アシッドボトルの書": 100000,
    "アシッドボトル製造の書": 100000,
    "プラントボトルの書": 100000,
    "プラントボトル製造の書": 100000,
    "マインボトルの書": 100000,
    "マインボトル製造の書": 100000,
    "コーティング薬製造の書": 100000,
    "コーティング薬の書": 100000,
    "スリムポーション製造の書": 240000
};


// ========================================
// ゼニー表示
// ========================================

function formatZeny(value) {

    if (value === null || value === undefined || value === "") {
        return "";
    }

    const text =
        String(value)
            .replace(/,/g, "")
            .trim();

    const match =
        text.match(/^([\d.]+)(.*)$/);

    if (!match) {
        return value;
    }

    const number =
        Number(match[1]);

    const unit =
        match[2];

    if (Number.isNaN(number)) {
        return value;
    }

    return number.toLocaleString("ja-JP") + unit;
}


function parsePrice(value) {

    if (value === null || value === undefined) {
        return null;
    }

    if (typeof value === "number") {

        if (isNaN(value)) {
            return null;
        }

        return value;
    }

    const cleaned =
        String(value)
            .replace(/,/g, "")
            .replace(/z/gi, "")
            .trim();

    const number =
        Number(cleaned);

    if (isNaN(number)) {
        return null;
    }

    return number;
}


// ========================================
// バイオニックファーマシー NPC購入価格
// ========================================

const bionicPharmacyPurchasePrices = {
    "ビーカー": {
        price: 1000,
        dc10: 1000
    }
};



// ========================================
// ファーマシー製作品の判定
// ========================================

function isPharmacyCraftedItem(itemName) {

    if (!recipes || !recipes.pharmacy) {
        return false;
    }

    return Object.values(recipes.pharmacy).some(recipe =>
        recipe &&
        recipe.name === itemName
    );
}

function getMaterialNpcDisplayName(itemName) {
    if (itemName === "乳鉢") {
        return "ギルド商人";
    }

    return "材料販売商人";
}

function createPharmacyRecipeTooltip(itemName) {

    const pharmacyRecipes =
        recipes && recipes.pharmacy
            ? recipes.pharmacy
            : {};

    const recipe =
        Object.values(pharmacyRecipes).find(
            item => item.name === itemName
        );

    if (!recipe) {
        return "";
    }

    const materialsHtml =
        (recipe.materials || [])
            .map(material => `
                <div>${material.name} × ${material.quantity}</div>
            `)
            .join("");

    return `
        <div class="npc-tooltip pharmacy-recipe-tooltip">

            <div class="npc-tooltip-title">
                ${itemName}
            </div>

            <div class="npc-info">

                <div>
                    <strong>作成情報</strong>
                </div>

                ${
                    recipe.required_book
                        ? `
                            <div>
                                必要な本：${recipe.required_book} × 1
                            </div>
                        `
                        : ""
                }

                <div style="margin-top:8px;">
                    <strong>作成に必要な材料</strong>
                </div>

                <div>
                    ${materialsHtml}
                </div>

            </div>

        </div>
    `;
}


function createPharmacyCraftNotice(itemName) {

    if (!isPharmacyCraftedItem(itemName)) {
        return "";
    }

    return `
        <div class="material-acquisition pharmacy-material-notice">
            別途ファーマシーで作成が必要です。
        </div>
    `;
}


// ========================================
// データ読み込み
// ========================================

Promise.all([

    fetch("data/recipes.json").then(response => {

        if (!response.ok) {
            throw new Error(
                "recipes.json の読み込みに失敗しました"
            );
        }

        return response.json();
    }),

    fetch("data/npcs.json").then(response => {

        if (!response.ok) {
            throw new Error(
                "npcs.json の読み込みに失敗しました"
            );
        }

        return response.json();
    }),

    fetch("data/materials.json").then(response => {

        if (!response.ok) {
            throw new Error(
                "materials.json の読み込みに失敗しました"
            );
        }

        return response.json();
    })

])
.then(([recipeData, npcDataResult, materialsDataResult]) => {

    recipes = recipeData;
    npcData = npcDataResult;
    materialsData = materialsDataResult;

    updateItemList();

})
.catch(error => {

    console.error(error);

    document.getElementById("result").innerHTML = `
        <h2>エラー</h2>
        <p>データを読み込めませんでした。</p>
    `;

});


// ========================================
// 作成個数欄の制御
// ========================================

function updateQuantityControl() {

    const category =
        document.getElementById("category");

    const quantityInput =
        document.getElementById("quantity");

    const quantityLabel =
        document.getElementById("quantityLabel");

    if (!category || !quantityInput) {
        return;
    }

    if (
        category.value === "twilight_pharmacy" ||
        category.value === "change_material" ||
        category.value === "mix_cooking"
    ) {

        // 作成個数は使用しないが、表示はグレー・入力不可で統一
        quantityInput.disabled = true;
        quantityInput.value = "";
        quantityInput.style.display = "";
        quantityInput.style.backgroundColor = "#e5e5e5";
        quantityInput.style.color = "#777";
        quantityInput.style.cursor = "not-allowed";

        if (quantityLabel) {
            quantityLabel.style.display = "";
        }

    } else {

        quantityInput.disabled = false;
        quantityInput.style.display = "";
        quantityInput.style.backgroundColor = "";
        quantityInput.style.color = "";
        quantityInput.style.cursor = "";

        if (quantityLabel) {
            quantityLabel.style.display = "";
        }
    }
}

// ========================================
// 完成品一覧
// ========================================

function updateItemList() {

    const itemSelect =
        document.getElementById("item");

    const category =
        document.getElementById("category").value;

    itemSelect.innerHTML = `
        <option value="">-- 選択してください --</option>
    `;

    // スペシャルファーマシー
    if (category === "special_pharmacy") {

        for (const itemId in specialPharmacyData) {

            const item =
                specialPharmacyData[itemId];

            const option =
                document.createElement("option");

            option.value =
                itemId;

            option.textContent =
                item.name;

            itemSelect.appendChild(option);
        }

        return;
    }

    // トワイライトファーマシー
    if (category === "twilight_pharmacy") {

        for (const itemId in twilightPharmacyData) {

            const item =
                twilightPharmacyData[itemId];

            const option =
                document.createElement("option");

            option.value =
                itemId;

            option.textContent =
                item.name;

            itemSelect.appendChild(option);
        }

        return;
    }

    // バイオニックファーマシー
    if (category === "bionic_pharmacy") {

        const bionicRecipes =
            recipes.bionic_pharmacy;

        if (!bionicRecipes) {
            return;
        }

        for (const itemId in bionicRecipes) {

            const recipe =
                bionicRecipes[itemId];

            const option =
                document.createElement("option");

            option.value =
                itemId;

            option.textContent =
                recipe.name;

            itemSelect.appendChild(option);
        }

        return;
    }

    // チェンジマテリアル
    if (category === "change_material") {

        const changeMaterialRecipes =
            recipes.change_material;

        if (!changeMaterialRecipes) {
            return;
        }

        for (const itemId in changeMaterialRecipes) {

            const recipe =
                changeMaterialRecipes[itemId];

            const option =
                document.createElement("option");

            option.value =
                itemId;

            option.textContent =
                recipe.name;

            itemSelect.appendChild(option);
        }

        return;
    }

    // ミックスクッキング
    if (category === "mix_cooking") {

        const mixCookingRecipes =
            recipes.mix_cooking;

        if (!mixCookingRecipes) {
            return;
        }

        for (const itemId in mixCookingRecipes) {

            const recipe =
                mixCookingRecipes[itemId];

            const option =
                document.createElement("option");

            option.value =
                itemId;

            option.textContent =
                recipe.name;

            itemSelect.appendChild(option);
        }

        return;
    }

    const categoryRecipes =
        recipes[category];

    if (!categoryRecipes) {
        return;
    }

    for (const itemId in categoryRecipes) {

        const recipe =
            categoryRecipes[itemId];

        const option =
            document.createElement("option");

        option.value =
            itemId;

        option.textContent =
            recipe.name;

        itemSelect.appendChild(option);
    }
}


// ========================================
// 製薬種類変更
// ========================================

document.getElementById("category").addEventListener(
    "change",
    updateItemList
);

document.getElementById("category").addEventListener(
    "change",
    updateQuantityControl
);



// ========================================
// NPC情報検索
// ========================================

function findNpcInfo(itemName) {

    const results = [];

    const normalizedItemName =
        String(itemName)
            .replace(/壷/g, "壺")
            .replace(/^大きい鍋$/, "大きな鍋");

    const mixPurchaseInfo =
        mixCookingNpcPurchaseData[itemName] ||
        mixCookingNpcPurchaseData[normalizedItemName];

    // ミックスクッキングのNPC販売品
    if (mixPurchaseInfo) {

        results.push({

            town: mixCookingNpcInfo.town,
            location: mixCookingNpcInfo.location,
            npc_name: mixCookingNpcInfo.npc_name,

            price: mixPurchaseInfo.price,
            dc10: mixPurchaseInfo.dc10,

            building_image:
                mixCookingNpcInfo.building_image,

            building_zoom_image:
                mixCookingNpcInfo.building_zoom_image,

            npc_image:
                mixCookingNpcInfo.npc_image
        });
    }

    if (!npcData.vendors) {
        return results;
    }

    npcData.vendors.forEach(vendor => {

        if (!vendor.items) {
            return;
        }

        vendor.items.forEach(item => {

            if (item.name === itemName || item.name === normalizedItemName) {

                results.push({

                    town: vendor.town,
                    location: vendor.location,
                    npc_name: vendor.npc_name,

                    price: item.price,
                    dc10: item.dc10,

                    building_image:
                        vendor.building_image,

                    building_zoom_image:
                        vendor.building_zoom_image,

                    npc_image:
                        vendor.npc_image
                });
            }
        });
    });

    // 乳鉢はアルデバランのギルド商人で販売
    if (itemName === "乳鉢") {
        results.forEach(info => {
            if (info.town === "アルデバラン") {
                info.npc_name = "ギルド商人";
            }
        });
    }

    return results;
}

function createNpcTooltip(itemName) {

    const npcInfo =
        findNpcInfo(itemName);

    if (npcInfo.length === 0) {
        return "";
    }


    // アルケミストギルドの情報を優先
    const info =
        npcInfo.find(x =>
            x.location &&
            x.location.includes("アルケミストギルド")
        ) || npcInfo[0];


    let html = `

        <div class="npc-tooltip">

            <div class="npc-tooltip-title">
                ${itemName}
            </div>

            <div class="npc-info">

                <div>
                    <strong>購入情報</strong>
                </div>

                <div>
                    街：${info.town}
                </div>

                <div>
                    建物：${
                        (info.location || "")
                            .replace(/\s*\(/, "<br>(")
                    }
                </div>

    `;


    // ========================================
    // 建物画像 ＋ NPC情報
    // ========================================

    if (
        info.building_image ||
        info.building_zoom_image ||
        info.npc_name ||
        info.npc_image
    ) {

        html += `

            <div class="purchase-info-layout">

                <div class="building-images">
        `;


        // 全体画像
        if (info.building_image) {

            html += `

                <div class="purchase-image">

                    <img
                        src="${info.building_image}"
                        alt="${info.town} 全体"
                    >

                </div>

            `;
        }


        // ズーム画像
        if (info.building_zoom_image) {

            html += `

                <div class="purchase-image">

                    <img
                        src="${info.building_zoom_image}"
                        alt="${info.town} ズーム"
                    >

                </div>

            `;
        }


        html += `

                </div>

                <div class="npc-details">

                    <div class="npc-details-name">
                        NPC：${info.npc_name || ""}
                    </div>

        `;


        // ========================================
        // NPC画像
        // ========================================

        if (info.npc_image) {

            const npcImageClass =
                info.town === "アルデバラン"
                    ? "aldebaran-npc-image"
                    : "geffen-npc-image";

            html += `

                <div class="npc-image ${npcImageClass}">

                    <img
                        src="${info.npc_image}"
                        alt="${info.npc_name || "NPC"}"
                    >

                </div>

            `;
        }


        html += `

                </div>

            </div>

        `;
    }


    // ========================================
    // 通常価格
    // ========================================

    html += `

        <div>
            通常価格：${formatZeny(info.price)}
        </div>

    `;


    // ========================================
    // DC10価格
    // ========================================

    const dc10DisplayPrice =
        info.dc10 !== null &&
        info.dc10 !== undefined &&
        info.dc10 !== ""
            ? info.dc10
            : info.price;

    html += `

        <div>
            DC10の時の価格：${formatZeny(dc10DisplayPrice)}
        </div>

    `;


    html += `

            </div>

        </div>

    `;


    return html;
}


// ========================================
// 材料を再帰的に表示
// ========================================

function createMaterialHtml(
    materialName,
    quantity,
    categoryRecipes,
    usedItems = new Set()
) {

    if (usedItems.has(materialName)) {

        return `
            <li>
                ${materialName} × ${quantity}
                <span>（循環参照）</span>
            </li>
        `;
    }


    let subRecipe = null;


    for (const itemId in categoryRecipes) {

        const recipe =
            categoryRecipes[itemId];

        if (recipe.name === materialName) {

            subRecipe = recipe;

            break;
        }
    }


    // 製薬品ではない
    if (!subRecipe) {

        const tooltip =
            createNpcTooltip(materialName);

        return `

            <li>

                <span class="material-item">

                    ${materialName} × ${quantity}

                    ${tooltip}

                </span>${createPharmacyCraftNotice(materialName)}

            </li>

        `;
    }


    // ファーマシーで作成する必要がある製作品の場合も、
    // 「別途ファーマシーで作成が必要です。」を表示する。
    const pharmacyNotice =
        createPharmacyCraftNotice(materialName);


    // 製薬品
    let html = `

        <li>

            <strong class="material-item">
                ${materialName} × ${quantity}
                ${createPharmacyRecipeTooltip(materialName)}
            </strong>

            ${pharmacyNotice}

            <ul>

    `;


    const newUsedItems =
        new Set(usedItems);

    newUsedItems.add(materialName);


    subRecipe.materials.forEach(material => {

        const totalQuantity =
            material.quantity * quantity;

        html += createMaterialHtml(

            material.name,

            totalQuantity,

            categoryRecipes,

            newUsedItems

        );
    });


    html += `

            </ul>

        </li>

    `;


    return html;
}


// ========================================
// 最終的に必要な素材を集計
// ========================================

function collectFinalMaterials(
    materialName,
    quantity,
    categoryRecipes,
    totals = {}
) {

    let subRecipe = null;


    for (const itemId in categoryRecipes) {

        const recipe =
            categoryRecipes[itemId];

        if (recipe.name === materialName) {

            subRecipe = recipe;

            break;
        }
    }


    // 最終素材
    if (!subRecipe) {

        if (!totals[materialName]) {
            totals[materialName] = 0;
        }

        totals[materialName] += quantity;

        return totals;
    }


    // さらに材料を展開
    subRecipe.materials.forEach(material => {

        const totalQuantity =
            material.quantity * quantity;

        collectFinalMaterials(

            material.name,

            totalQuantity,

            categoryRecipes,

            totals

        );
    });


    return totals;
}


// ========================================
// 最終素材HTML
// ========================================

function createFinalMaterialsHtml(totals) {

    let html = "";

    for (const materialName in totals) {

        const tooltip = createNpcTooltip(materialName);
        const materialInfo = materialsData[materialName];

        let acquisitionInfo = "";

        if (materialInfo) {

            if (materialInfo.type === "npc") {

                acquisitionInfo = `
                    <div class="material-acquisition">
                        入手方法：NPC購入
                        <br>
                        ${materialInfo.source}
                        ／ ${materialInfo.npc}
                    </div>
                `;

            } else {

                acquisitionInfo = `
                    <div class="material-acquisition">
                        入手方法：${materialInfo.type}
                    </div>
                `;

            }
        }

        html += `
<li>
    <span class="material-item">
        ${materialName}
        × ${totals[materialName]}
        ${tooltip}
        ${createPharmacyRecipeTooltip(materialName)}
    </span>${createPharmacyCraftNotice(materialName)}
    ${acquisitionInfo}
</li>
        `;
    }

    return html;
}
// ========================================
// 購入費用計算
// ========================================

function calculatePurchaseCost(totals, requiredBook = null) {

    let normalTotal = 0;
    let dc10Total = 0;
    const items = [];

    // ----------------------------------------
    // 本
    // ----------------------------------------

    if (
        requiredBook &&
        pharmacyBookPrices[requiredBook] !== undefined
    ) {

        const bookPrice =
            pharmacyBookPrices[requiredBook];

        items.push({
            name: requiredBook,
            quantity: 1,
            normalPrice: bookPrice,
            dc10Price: bookPrice,
            normalSubtotal: bookPrice,
            dc10Subtotal: bookPrice
        });

        normalTotal += bookPrice;
        dc10Total += bookPrice;
    }

    // ----------------------------------------
    // 最終素材
    // ----------------------------------------

    for (const materialName in totals) {

        const quantity = totals[materialName];
        const npcInfo = findNpcInfo(materialName);

        if (npcInfo.length === 0) {
            continue;
        }

        const normalPrices = npcInfo
            .map(info => parsePrice(info.price))
            .filter(price =>
                price !== null &&
                price >= 0
            );

        const dc10Prices = npcInfo
            .map(info => parsePrice(info.dc10))
            .filter(price =>
                price !== null &&
                price >= 0
            );

        let normalPrice = null;
        let dc10Price = null;

        if (normalPrices.length > 0) {
            normalPrice =
                Math.min(...normalPrices);
        }

        if (dc10Prices.length > 0) {
            dc10Price =
                Math.min(...dc10Prices);
        } else if (normalPrice !== null) {
            // DC10適用なしの場合は通常価格と同額
            dc10Price = normalPrice;
        }

        let normalSubtotal = null;
        let dc10Subtotal = null;

        if (normalPrice !== null) {
            normalSubtotal =
                normalPrice * quantity;

            normalTotal += normalSubtotal;
        }

        if (dc10Price !== null) {
            dc10Subtotal =
                dc10Price * quantity;

            dc10Total += dc10Subtotal;
        }

        items.push({
            name: materialName,
            quantity: quantity,
            normalPrice: normalPrice,
            dc10Price: dc10Price,
            normalSubtotal: normalSubtotal,
            dc10Subtotal: dc10Subtotal
        });
    }

    return {
        items: items,
        normal: normalTotal,
        dc10: dc10Total
    };
}


// ========================================
// 購入合計費用HTML
// ========================================

function calculateBionicPurchaseCost(totals) {

    let normalTotal = 0;
    let dc10Total = 0;
    const items = [];

    for (const materialName in totals) {

        const quantity = totals[materialName];

        // バイオニックファーマシー専用の価格
        const bionicPrice =
            bionicPharmacyPurchasePrices[materialName];

        let normalPrice = null;
        let dc10Price = null;

        if (bionicPrice) {

            normalPrice =
                parsePrice(bionicPrice.price);

            dc10Price =
                parsePrice(bionicPrice.dc10);

            if (dc10Price === null) {
                dc10Price = normalPrice;
            }

        } else {

            // 通常ファーマシー等と同じく、
            // NPCデータに登録されている最終素材も購入対象にする。
            const npcInfo =
                findNpcInfo(materialName);

            if (npcInfo.length === 0) {
                continue;
            }

            const normalPrices =
                npcInfo
                    .map(info => parsePrice(info.price))
                    .filter(price =>
                        price !== null &&
                        price >= 0
                    );

            const dc10Prices =
                npcInfo
                    .map(info => parsePrice(info.dc10))
                    .filter(price =>
                        price !== null &&
                        price >= 0
                    );

            if (normalPrices.length > 0) {
                normalPrice =
                    Math.min(...normalPrices);
            }

            if (dc10Prices.length > 0) {
                dc10Price =
                    Math.min(...dc10Prices);
            } else if (normalPrice !== null) {
                dc10Price = normalPrice;
            }
        }

        if (
            normalPrice === null &&
            dc10Price === null
        ) {
            continue;
        }

        const normalSubtotal =
            normalPrice !== null
                ? normalPrice * quantity
                : null;

        const dc10Subtotal =
            dc10Price !== null
                ? dc10Price * quantity
                : null;

        if (normalSubtotal !== null) {
            normalTotal += normalSubtotal;
        }

        if (dc10Subtotal !== null) {
            dc10Total += dc10Subtotal;
        }

        items.push({
            name: materialName,
            quantity: quantity,
            normalPrice: normalPrice,
            dc10Price: dc10Price,
            normalSubtotal: normalSubtotal,
            dc10Subtotal: dc10Subtotal
        });
    }

    return {
        items: items,
        normal: normalTotal,
        dc10: dc10Total
    };
}

function createPurchaseCostHtml(purchaseCost) {

    if (purchaseCost.items.length === 0) {

        return `

            <div class="purchase-cost">

                <h3>
                    購入合計費用
                </h3>

                <p>
                    NPCで購入できる素材はありません。
                </p>

            </div>

        `;
    }

    let rows = "";

    purchaseCost.items.forEach(item => {

        const npcInfoList =
            findNpcInfo(item.name);

        const npcInfo =
            npcInfoList.length > 0
                ? npcInfoList[0]
                : null;

        const tooltip =
            npcInfo
                ? createNpcTooltip(item.name)
                : "";

        let acquisitionInfo = "";

        if (npcInfo) {
            acquisitionInfo = `
                <div class="material-acquisition">
                    <div>入手方法：NPC購入</div>
                    <div>
                        ${npcInfo.town}
                        ／ ${npcInfo.npc_name}
                    </div>
                </div>
            `;
        }

        rows += `

            <tr>

                <td>
                    <span class="material-item">
                        ${item.name}
                        ${tooltip}
                    </span>
                    ${acquisitionInfo}
                </td>

                <td>
                    ${item.quantity}
                </td>

                <td>
                    ${
                        item.normalSubtotal !== null
                            ? item.normalSubtotal.toLocaleString() + "z"
                            : "-"
                    }
                </td>

                <td>
                    ${
                        item.dc10Subtotal !== null
                            ? item.dc10Subtotal.toLocaleString() + "z"
                            : "-"
                    }
                </td>

            </tr>

        `;
    });


    return `

        <div class="purchase-cost">

            <h3>
                購入合計費用
            </h3>

            <table class="purchase-table">

                <thead>

                    <tr>

                        <th>商品名</th>

                        <th>個数</th>

                        <th>通常価格</th>

                        <th>DC10価格</th>

                    </tr>

                </thead>

                <tbody>

                    ${rows}

                </tbody>

                <tfoot>

                    <tr>

                        <th colspan="2">
                            購入合計金額
                        </th>

                        <th>
                            ${purchaseCost.normal.toLocaleString()}z
                        </th>

                        <th>
                            ${purchaseCost.dc10.toLocaleString()}z
                        </th>

                    </tr>

                </tfoot>

            </table>

        </div>

    `;
}

// ========================================
// スペシャルファーマシー表示
// ========================================


function createTwilightPharmacyHtml(itemId, quantity) {

    const data = twilightPharmacyData[itemId];

    if (!data) {
        return `
            <h2>トワイライトファーマシー</h2>
            <p>項目を選択してください。</p>
        `;
    }

    const bookRows = data.books.map(book => `
        <tr>
            <td>${book}</td>
            <td>1</td>
        </tr>
    `).join("");

    const materialRows = data.materials.map(material => `
        <tr>
            <td>${material.name}</td>
            <td>${material.quantity * quantity}</td>
        </tr>
    `).join("");

    return `
        <h2>${data.name}</h2>

        <h3>前提条件</h3>
        <ul>
            <li><span class="twilight-requirement">ファーマシーLv10</span></li>
            <li><span class="twilight-requirement">ソウルリンカーの「魂」効果状態</span></li>
        </ul>

        <h3>完成品</h3>
        <p>${data.outputNote}</p>

        <h3>必要な本</h3>
        <table class="special-pharmacy-table">
            <tbody>
                ${bookRows}
            </tbody>
        </table>

        <h3>材料</h3>
        <table class="special-pharmacy-table">
            <tbody>
                ${materialRows}
            </tbody>
        </table>

        ${createTwilightPharmacyPurchaseCostHtml(data, quantity)}
    `;
}

// ========================================
// スペシャルファーマシー購入費用
// ========================================

function createTwilightPharmacyPurchaseCostHtml(data, quantity) {
    const items = [];
    let normalTotal = 0;
    let dc10Total = 0;

    data.books.forEach(bookName => {
        const npcInfo = findNpcInfo(bookName);
        const prices = npcInfo.map(info => parsePrice(info.price)).filter(price => price !== null && price >= 0);
        const price = prices.length > 0 ? Math.min(...prices) : null;
        if (price === null) return;
        items.push({ name: bookName, quantity: 1, normalSubtotal: price, dc10Subtotal: price });
        normalTotal += price;
        dc10Total += price;
    });

    data.materials.forEach(material => {
        const materialQuantity = material.quantity * quantity;
        const npcInfo = findNpcInfo(material.name);
        const normalPrices = npcInfo.map(info => parsePrice(info.price)).filter(price => price !== null && price >= 0);
        const dc10Prices = npcInfo.map(info => parsePrice(info.dc10)).filter(price => price !== null && price >= 0);
        const normalPrice = normalPrices.length > 0 ? Math.min(...normalPrices) : null;
        const dc10Price = dc10Prices.length > 0 ? Math.min(...dc10Prices) : normalPrice;
        if (normalPrice === null && dc10Price === null) return;
        const normalSubtotal = normalPrice !== null ? normalPrice * materialQuantity : null;
        const dc10Subtotal = dc10Price !== null ? dc10Price * materialQuantity : null;
        if (normalSubtotal !== null) normalTotal += normalSubtotal;
        if (dc10Subtotal !== null) dc10Total += dc10Subtotal;
        items.push({ name: material.name, quantity: materialQuantity, normalSubtotal, dc10Subtotal });
    });

    if (items.length === 0) {
        return `<div class="purchase-cost"><h3>購入合計費用</h3><p>購入価格情報が登録されている素材はありません。</p></div>`;
    }

    const rows = items.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.normalSubtotal !== null ? item.normalSubtotal.toLocaleString() + "z" : "-"}</td>
            <td>${item.dc10Subtotal !== null ? item.dc10Subtotal.toLocaleString() + "z" : "-"}</td>
        </tr>
    `).join("");

    return `
        <div class="purchase-cost">
            <h3>購入合計費用</h3>
            <table class="purchase-table">
                <thead><tr><th>商品名</th><th>個数</th><th>通常価格</th><th>DC10価格</th></tr></thead>
                <tbody>${rows}</tbody>
                <tfoot><tr><th colspan="2">購入合計金額</th><th>${normalTotal.toLocaleString()}z</th><th>${dc10Total.toLocaleString()}z</th></tr></tfoot>
            </table>
        </div>
    `;
}


function createSpecialPharmacyPurchaseCostHtml(data, quantity) {

    const items = [];

    let normalTotal = 0;
    let dc10Total = 0;

    // ----------------------------------------
    // 本
    // ----------------------------------------

    const bookPrice =
        specialPharmacyBookPrices[data.book];

    if (bookPrice !== undefined) {

        items.push({
            name: data.book,
            quantity: 1,
            normalPrice: bookPrice,
            dc10Price: bookPrice,
            normalSubtotal: bookPrice,
            dc10Subtotal: bookPrice
        });

        normalTotal += bookPrice;
        dc10Total += bookPrice;
    }

    // ----------------------------------------
    // 材料
    // ----------------------------------------

    data.materials.forEach(material => {

        const materialQuantity =
            material.quantity * quantity;

        // スペシャルファーマシー専用価格を優先
        const specialPrice =
            specialPharmacyPurchasePrices[material.name];

        let normalPrice = null;
        let dc10Price = null;

        if (specialPrice) {

            normalPrice =
                parsePrice(specialPrice.price);

            dc10Price =
                parsePrice(specialPrice.dc10);

        } else {

            // 通常NPCデータから価格を取得
            const npcInfo =
                findNpcInfo(material.name);

            const normalPrices = npcInfo
                .map(info => parsePrice(info.price))
                .filter(price =>
                    price !== null &&
                    price >= 0
                );

            const dc10Prices = npcInfo
                .map(info => parsePrice(info.dc10))
                .filter(price =>
                    price !== null &&
                    price >= 0
                );

            if (normalPrices.length > 0) {
                normalPrice =
                    Math.min(...normalPrices);
            }

            if (dc10Prices.length > 0) {
                dc10Price =
                    Math.min(...dc10Prices);
            }
        }

        // 購入できる価格情報があるものだけ表示
        if (
            normalPrice === null &&
            dc10Price === null
        ) {
            return;
        }

        const normalSubtotal =
            normalPrice !== null
                ? normalPrice * materialQuantity
                : null;

        const dc10Subtotal =
            dc10Price !== null
                ? dc10Price * materialQuantity
                : null;

        if (normalSubtotal !== null) {
            normalTotal += normalSubtotal;
        }

        if (dc10Subtotal !== null) {
            dc10Total += dc10Subtotal;
        }

        items.push({
            name: material.name,
            quantity: materialQuantity,
            normalPrice: normalPrice,
            dc10Price: dc10Price,
            normalSubtotal: normalSubtotal,
            dc10Subtotal: dc10Subtotal
        });
    });

    if (items.length === 0) {

        return `
            <div class="purchase-cost">
                <h3>購入合計費用</h3>
                <p>
                    購入価格情報が登録されている素材はありません。
                </p>
            </div>
        `;
    }

    let rows = "";

    items.forEach(item => {

        rows += `
            <tr>
                <td>${item.name}</td>

                <td>${item.quantity}</td>

                <td>
                    ${
                        item.normalSubtotal !== null
                            ? item.normalSubtotal.toLocaleString() + "z"
                            : "-"
                    }
                </td>

                <td>
                    ${
                        item.dc10Subtotal !== null
                            ? item.dc10Subtotal.toLocaleString() + "z"
                            : "-"
                    }
                </td>
            </tr>
        `;
    });

    return `
        <div class="purchase-cost">

            <h3>購入合計費用</h3>

            <table class="purchase-table">

                <thead>
                    <tr>
                        <th>商品名</th>
                        <th>個数</th>
                        <th>通常価格</th>
                        <th>DC10価格</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>

                <tfoot>
                    <tr>
                        <th colspan="2">
                            購入合計金額
                        </th>

                        <th>
                            ${normalTotal.toLocaleString()}z
                        </th>

                        <th>
                            ${
                                items.some(
                                    item =>
                                        item.dc10Subtotal !== null
                                )
                                    ? dc10Total.toLocaleString() + "z"
                                    : "-"
                            }
                        </th>
                    </tr>
                </tfoot>

            </table>

        </div>
    `;
}




// ========================================
// チェンジマテリアル
// ========================================

function createBionicPharmacyHtml(itemId, quantity) {

    const data =
        recipes.bionic_pharmacy[itemId];

    if (!data) {
        return `
            <h2>必要アイテム</h2>
            <p>完成品を選択してください。</p>
        `;
    }

    // 既存ファーマシー製作品も材料として展開する。
    const combinedRecipes = {
        ...(recipes.pharmacy || {}),
        ...(recipes.bionic_pharmacy || {})
    };

    let materialHtml = "";

    data.materials.forEach(material => {

        const totalQuantity =
            material.quantity * quantity;

        materialHtml +=
            createMaterialHtml(
                material.name,
                totalQuantity,
                combinedRecipes
            );
    });

    const finalMaterials =
        collectFinalMaterials(
            data.name,
            quantity,
            combinedRecipes
        );

    const finalMaterialsHtml =
        createFinalMaterialsHtml(finalMaterials);

    const purchaseCost =
        calculateBionicPurchaseCost(finalMaterials);

    const purchaseCostHtml =
        createPurchaseCostHtml(purchaseCost);

    return `
        <h2>${data.name} × ${quantity}</h2>

        <h3>材料</h3>

        <table class="special-pharmacy-table">
            <tbody>
                ${data.materials.map(material => `
                    <tr>
                        <td>
                            <span class="material-item">
                                ${material.name} ${material.quantity * quantity}個
                                ${createNpcTooltip(material.name)}
                            </span>${createPharmacyCraftNotice(material.name)}
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>

        <div class="final-materials">

            <hr>

            <h3>最終的に必要な素材</h3>

            <ul>
                ${finalMaterialsHtml}
            </ul>

            ${purchaseCostHtml}

        </div>
    `;
}


function createChangeMaterialHtml(itemId) {

    const data =
        recipes.change_material[itemId];

    if (!data) {
        return `
            <h2>必要アイテム</h2>
            <p>完成品を選択してください。</p>
        `;
    }

    const materialRows =
        data.materials.map(material => {

            const text =
                String(material).trim();

            const match =
                text.match(/^(.+?)\s*([0-9]+)個/);

            const materialName =
                match ? match[1].trim() : text;

            const acquisitionInfo =
                mixCookingNpcPurchaseData[materialName]
                    ? `
                        <div class="material-acquisition">
                            入手方法：NPC購入
                            <br>
                            アルデバラン ／ 材料販売商人
                        </div>
                    `
                    : "";

            const tooltip =
                createNpcTooltip(materialName);

            return `
                <tr>
                    <td>
                        <span class="material-item">
                            ${text}
                            ${tooltip}
                        </span>
                        ${acquisitionInfo}
                    </td>
                </tr>
            `;
        }).join("");

    return `
        <h2>${data.name}</h2>

        <h3>完成品</h3>
        <p>${data.name}</p>

        <h3>必要材料</h3>
        <table class="special-pharmacy-table">
            <tbody>
                ${materialRows}
            </tbody>
        </table>
    `;
}



// ========================================
// ミックスクッキング：NPC購入情報
// ========================================

const mixCookingNpcPurchaseData = {
    "飼育ポット": { price: 5000, dc10: 3800 },
    "イグドラシルの露": { price: 20000, dc10: 15200 },
    "生命の種子": { price: 60000, dc10: 45600 },
    "ごった煮の壺": { price: 600, dc10: 456 },
    "ごった煮の壷": { price: 600, dc10: 456 },
    "料理用鉄串": { price: 300, dc10: 228 },
    "黒炭": { price: 300, dc10: 228 },
    "大きな鍋": { price: 500, dc10: 380 },
    "大きい鍋": { price: 500, dc10: 380 },
    "素麺": { price: 500, dc10: 380 },
    "冷たい出汁": { price: 400, dc10: 304 },
    "投擲用ビン": { price: 300, dc10: 228 }
};

const mixCookingNpcImage =
    "images/npcs/Aldebarancounter_Under_the_right_stairs_left.png";

const mixCookingNpcInfo = {
    town: "アルデバラン",
    location: "アルケミストギルド (座標: 53,65) 付近建物内",
    npc_name: "材料販売商人",
    building_image: "images/buildings/Aldebaran.png",
    building_zoom_image: "images/buildings/Aldebaran_zoom.png",
    npc_image: mixCookingNpcImage
};


function createMixCookingPurchaseCostHtml(materials) {

    const rows = [];
    let normalTotal = 0;
    let dc10Total = 0;

    materials.forEach(material => {

        const normalizedMaterialName =
            material.name
                .replace(/壷/g, "壺")
                .replace(/^大きい鍋$/, "大きな鍋");

        const purchaseInfo =
            mixCookingNpcPurchaseData[material.name] ||
            mixCookingNpcPurchaseData[normalizedMaterialName];

        if (!purchaseInfo) {
            return;
        }

        rows.push({
            name: material.name,
            quantity: material.quantity,
            normalPrice: purchaseInfo.price,
            dc10Price: purchaseInfo.dc10
        });

        normalTotal +=
            purchaseInfo.price * material.quantity;

        dc10Total +=
            purchaseInfo.dc10 * material.quantity;
    });

    if (rows.length === 0) {
        return "";
    }

    const rowHtml = rows.map(row => {

        const tooltip =
            createNpcTooltip(row.name);

        return `
            <tr>
                <td>
                    <span class="material-item">
                        ${row.name}
                        ${tooltip}
                    </span>
                    <div class="material-acquisition">
                        <div>入手方法：NPC購入</div>
                        <div>アルデバラン ／ 材料販売商人</div>
                    </div>
                </td>
                <td>${row.quantity}</td>
                <td>${row.normalPrice.toLocaleString()}z</td>
                <td>${row.dc10Price.toLocaleString()}z</td>
            </tr>
        `;
    }).join("");

    return `
        <div class="purchase-cost">

            <h3>NPC購入情報</h3>

            <div class="purchase-info-layout">
                <div class="npc-details">
                    <div class="npc-details-name">
                        NPC：${mixCookingNpcInfo.npc_name}
                    </div>
                    <div class="npc-image aldebaran-npc-image">
                        <img
                            src="${mixCookingNpcImage}"
                            alt="アルデバラン NPC"
                        >
                    </div>
                </div>
            </div>

            <table class="purchase-table">
                <thead>
                    <tr>
                        <th>商品名</th>
                        <th>個数</th>
                        <th>通常価格</th>
                        <th>DC10価格</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowHtml}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="2">購入合計金額</th>
                        <th>${normalTotal.toLocaleString()}z</th>
                        <th>${dc10Total.toLocaleString()}z</th>
                    </tr>
                </tfoot>
            </table>

        </div>
    `;
}

// ========================================
// ミックスクッキング
// ========================================


function createMixCookingNpcTooltip(itemName) {

    // 「壷／壺」の表記揺れにも対応
    const normalizedName =
        itemName.replace(/壷/g, "壺");

    const priceInfo =
        mixCookingNpcPurchaseData[normalizedName] ||
        mixCookingNpcPurchaseData[itemName];

    if (!priceInfo) {
        return "";
    }

    const info =
        mixCookingNpcInfo;

    const dc10Price =
        priceInfo.dc10 !== null &&
        priceInfo.dc10 !== undefined &&
        priceInfo.dc10 !== ""
            ? priceInfo.dc10
            : priceInfo.price;

    return `
        <div class="npc-tooltip">

            <div class="npc-tooltip-title">
                ${itemName}
            </div>

            <div class="npc-info">

                <div>
                    <strong>購入情報</strong>
                </div>

                <div>
                    街：${info.town}
                </div>

                <div>
                    建物：${info.location}
                </div>

                <div class="purchase-info-layout">

                    <div class="building-images">

                        <div class="purchase-image">
                            <img
                                src="${info.building_image}"
                                alt="${info.town} 全体"
                            >
                        </div>

                        <div class="purchase-image">
                            <img
                                src="${info.building_zoom_image}"
                                alt="${info.town} ズーム"
                            >
                        </div>

                    </div>

                    <div class="npc-details">

                        <div class="npc-details-name">
                            NPC：${info.npc_name}
                        </div>

                        <div class="npc-image aldebaran-npc-image">
                            <img
                                src="${info.npc_image}"
                                alt="${info.npc_name}"
                            >
                        </div>

                    </div>

                </div>

                <div>
                    通常価格：${formatZeny(priceInfo.price)}
                </div>

                <div>
                    DC10の時の価格：${formatZeny(dc10Price)}
                </div>

            </div>

        </div>
    `;
}


function createMixCookingHtml(itemId) {

    const data =
        recipes.mix_cooking[itemId];

    if (!data) {
        return `
            <h2>必要アイテム</h2>
            <p>完成品を選択してください。</p>
        `;
    }

    const bookHtml =
        data.book
            ? `
                <h3>必要な本</h3>
                <table class="special-pharmacy-table">
                    <tbody>
                        <tr>
                            <td>
                                ${data.book}
                                <div class="material-acquisition">
                                    1冊を手元に所持しておく必要があります。
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `
            : "";

    const materialRows =
        data.materials.map(material => {

            const text = String(material).trim();

            const match =
                text.match(/^(.+?)\s*([0-9]+)個/);

            const materialName =
                match ? match[1].trim() : text;

            const normalizedMaterialName =
                materialName
                    .replace(/壷/g, "壺")
                    .replace(/^大きい鍋$/, "大きな鍋");

            const isNpcPurchase =
                !!(
                    mixCookingNpcPurchaseData[materialName] ||
                    mixCookingNpcPurchaseData[normalizedMaterialName]
                );

            if (isNpcPurchase) {

                const tooltip =
                    createNpcTooltip(materialName);

                return `
                    <tr>
                        <td>
                            <span class="material-item">
                                ${text}
                                ${tooltip}
                            </span>
                            <div class="material-acquisition">
                                <div>入手方法：NPC購入</div>
                                <div>アルデバラン ／ 材料販売商人</div>
                            </div>
                        </td>
                    </tr>
                `;
            }

            return `
                <tr>
                    <td>${text}</td>
                </tr>
            `;
        }).join("");

    const purchaseMaterials =
        data.materials
            .map(material => {

                const text = String(material).trim();

                const match =
                    text.match(/^(.+?)\s*([0-9]+)個/);

                if (!match) {
                    return null;
                }

                return {
                    name: match[1].trim(),
                    quantity: Number(match[2])
                };
            })
            .filter(material => material !== null);

    // ミックスクッキングもファーマシーと同じように、
    // 中間製品をさらに展開して「最終的に必要な素材」を表示する。
    //
    // 例：
    // 白ポーション ×1
    //   ↓
    // 乳鉢 ×1
    // 白ハーブ ×1
    // 空のポーション瓶 ×1
    const finalMaterials = {};

    purchaseMaterials.forEach(material => {

        collectFinalMaterials(
            material.name,
            material.quantity,
            recipes.pharmacy,
            finalMaterials
        );
    });

    const finalMaterialsHtml =
        createFinalMaterialsHtml(finalMaterials);

    const finalPurchaseMaterials =
        Object.keys(finalMaterials).map(name => ({
            name: name,
            quantity: finalMaterials[name]
        }));

    return `
        <h2>${data.name}</h2>

        ${bookHtml}

        <h3>材料</h3>
        <table class="special-pharmacy-table">
            <tbody>
                ${materialRows}
            </tbody>
        </table>

        <div class="final-materials">

            <hr>

            <h3>最終的に必要な素材</h3>

            <ul>
                ${finalMaterialsHtml}
            </ul>

            ${createMixCookingPurchaseCostHtml(finalPurchaseMaterials)}

        </div>
    `;
}

function createSpecialPharmacyHtml(itemId, quantity) {

    const data = specialPharmacyData[itemId];

    if (!data) {
        return `
            <h2>スペシャルファーマシー</h2>
            <p>項目を選択してください。</p>
        `;
    }

    // ファーマシーと同じ表示構成
    // 完成品タイトル
    // → 必要な本
    // → 材料
    // → 最終的に必要な素材
    // → 購入合計費用

    const bookHtml = `
        <h3>必要な本</h3>

        <table class="special-pharmacy-table">
            <tbody>
                <tr>
                    <td>
                        ${data.book} 1個
                        <div class="material-acquisition">
                            1冊を手元に所持しておく必要があります。
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    `;

    const materialRows =
        data.materials.map(material => {

            const totalQuantity =
                material.quantity * quantity;

            const tooltip =
                createNpcTooltip(material.name);

            const npcInfoList =
                findNpcInfo(material.name);

            const npcInfo =
                npcInfoList.length > 0
                    ? npcInfoList[0]
                    : null;

            let acquisitionInfo = "";

            if (npcInfo) {
                acquisitionInfo = `
                    <div class="material-acquisition">
                        <div>入手方法：NPC購入</div>
                        <div>
                            ${npcInfo.town}
                            ／ ${npcInfo.npc_name}
                        </div>
                    </div>
                `;
            }

            return `
                <tr>
                    <td>
                        <span class="material-item">
                            ${material.name} ${totalQuantity}個
                            ${tooltip}
                        </span>${createPharmacyCraftNotice(material.name)}
                        ${acquisitionInfo}
                    </td>
                </tr>
            `;
        }).join("");

    const finalMaterials = {};

    data.materials.forEach(material => {

        if (!finalMaterials[material.name]) {
            finalMaterials[material.name] = 0;
        }

        finalMaterials[material.name] +=
            material.quantity * quantity;
    });

    const finalMaterialsHtml =
        createFinalMaterialsHtml(finalMaterials);

    const purchaseMaterials =
        Object.keys(finalMaterials).map(name => ({
            name: name,
            quantity: finalMaterials[name]
        }));

    const purchaseCostHtml =
        createSpecialPharmacyPurchaseCostHtml(
            data,
            quantity
        );

    return `
        <h2>${data.name}</h2>

        <div class="special-pharmacy-skill-note">スキルレベルやステータスで出来る個数は違います。</div>

        ${bookHtml}

        <h3>材料</h3>

        <table class="special-pharmacy-table">
            <tbody>
                ${materialRows}
            </tbody>
        </table>

        <div class="final-materials">

            <hr>

            <h3>最終的に必要な素材</h3>

            <ul>
                ${finalMaterialsHtml}
            </ul>

            ${purchaseCostHtml}

        </div>
    `;
}

function createSpecialPharmacyPurchaseCostHtml(data, quantity) {

    const items = [];

    let normalTotal = 0;
    let dc10Total = 0;

    // ----------------------------------------
    // 本
    // ----------------------------------------

    const bookPrice =
        specialPharmacyBookPrices[data.book];

    if (bookPrice !== undefined) {

        items.push({
            name: data.book,
            quantity: 1,
            normalPrice: bookPrice,
            dc10Price: bookPrice,
            normalSubtotal: bookPrice,
            dc10Subtotal: bookPrice
        });

        normalTotal += bookPrice;
        dc10Total += bookPrice;
    }

    // ----------------------------------------
    // 材料
    // ----------------------------------------

    data.materials.forEach(material => {

        const materialQuantity =
            material.quantity * quantity;

        // スペシャルファーマシー専用価格を優先
        const specialPrice =
            specialPharmacyPurchasePrices[material.name];

        let normalPrice = null;
        let dc10Price = null;

        if (specialPrice) {

            normalPrice =
                parsePrice(specialPrice.price);

            dc10Price =
                parsePrice(specialPrice.dc10);

        } else {

            // 通常NPCデータから価格を取得
            const npcInfo =
                findNpcInfo(material.name);

            const normalPrices = npcInfo
                .map(info => parsePrice(info.price))
                .filter(price =>
                    price !== null &&
                    price >= 0
                );

            const dc10Prices = npcInfo
                .map(info => parsePrice(info.dc10))
                .filter(price =>
                    price !== null &&
                    price >= 0
                );

            if (normalPrices.length > 0) {
                normalPrice =
                    Math.min(...normalPrices);
            }

            if (dc10Prices.length > 0) {
                dc10Price =
                    Math.min(...dc10Prices);
            }
        }

        // 購入できる価格情報があるものだけ表示
        if (
            normalPrice === null &&
            dc10Price === null
        ) {
            return;
        }

        const normalSubtotal =
            normalPrice !== null
                ? normalPrice * materialQuantity
                : null;

        const dc10Subtotal =
            dc10Price !== null
                ? dc10Price * materialQuantity
                : null;

        if (normalSubtotal !== null) {
            normalTotal += normalSubtotal;
        }

        if (dc10Subtotal !== null) {
            dc10Total += dc10Subtotal;
        }

        items.push({
            name: material.name,
            quantity: materialQuantity,
            normalPrice: normalPrice,
            dc10Price: dc10Price,
            normalSubtotal: normalSubtotal,
            dc10Subtotal: dc10Subtotal
        });
    });

    if (items.length === 0) {

        return `
            <div class="purchase-cost">
                <h3>購入合計費用</h3>
                <p>
                    購入価格情報が登録されている素材はありません。
                </p>
            </div>
        `;
    }

    let rows = "";

    items.forEach(item => {

        rows += `
            <tr>
                <td>${item.name}</td>

                <td>${item.quantity}</td>

                <td>
                    ${
                        item.normalSubtotal !== null
                            ? item.normalSubtotal.toLocaleString() + "z"
                            : "-"
                    }
                </td>

                <td>
                    ${
                        item.dc10Subtotal !== null
                            ? item.dc10Subtotal.toLocaleString() + "z"
                            : "-"
                    }
                </td>
            </tr>
        `;
    });

    return `
        <div class="purchase-cost">

            <h3>購入合計費用</h3>

            <table class="purchase-table">

                <thead>
                    <tr>
                        <th>商品名</th>
                        <th>個数</th>
                        <th>通常価格</th>
                        <th>DC10価格</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>

                <tfoot>
                    <tr>
                        <th colspan="2">
                            購入合計金額
                        </th>

                        <th>
                            ${normalTotal.toLocaleString()}z
                        </th>

                        <th>
                            ${
                                items.some(
                                    item =>
                                        item.dc10Subtotal !== null
                                )
                                    ? dc10Total.toLocaleString() + "z"
                                    : "-"
                            }
                        </th>
                    </tr>
                </tfoot>

            </table>

        </div>
    `;
}


// ========================================
// 計算ボタン
// ========================================

document.getElementById("calculateButton").addEventListener(
    "click",
    function () {

        const category =
            document.getElementById("category").value;


        const itemId =
            document.getElementById("item").value;


        const result =
            document.getElementById("result");

        // トワイライトファーマシーは作成個数を入力しない。
        // 常に「1回分」として計算する。
        const quantity =
            category === "twilight_pharmacy"
                ? 1
                : Number(
                    document.getElementById("quantity").value
                );


        // ----------------------------------------
        // 完成品未選択
        // ----------------------------------------

        if (!itemId) {

            result.innerHTML = `

                <h2>必要アイテム</h2>

                <p>
                    完成品を選択してください。
                </p>

            `;

            return;
        }


        // ----------------------------------------
        // 個数チェック
        // ----------------------------------------

        if (
            category !== "twilight_pharmacy" &&
            category !== "change_material" &&
            category !== "mix_cooking" &&
            (!quantity || quantity < 1)
        ) {

            result.innerHTML = `

                <h2>必要アイテム</h2>

                <p>
                    作成個数を1以上で入力してください。
                </p>

            `;

            return;
        }


        // ----------------------------------------
        // スペシャルファーマシー
        // ----------------------------------------

        if (category === "special_pharmacy") {

            result.innerHTML = createSpecialPharmacyHtml(
                itemId,
                quantity
            );

            return;
        }

        // ----------------------------------------
        // バイオニックファーマシー
        // ----------------------------------------

        if (category === "bionic_pharmacy") {

            result.innerHTML =
                createBionicPharmacyHtml(
                    itemId,
                    quantity
                );

            return;
        }


        // ----------------------------------------
        // チェンジマテリアル
        // ----------------------------------------

        if (category === "change_material") {

            result.innerHTML =
                createChangeMaterialHtml(itemId);

            return;
        }

        // ----------------------------------------
        // ミックスクッキング
        // ----------------------------------------

        if (category === "mix_cooking") {

            result.innerHTML =
                createMixCookingHtml(itemId);

            return;
        }

        // ----------------------------------------
        // トワイライトファーマシー
        // ----------------------------------------

        if (category === "twilight_pharmacy") {

            result.innerHTML = createTwilightPharmacyHtml(
                itemId,
                quantity
            );

            return;
        }


        const categoryRecipes =
            recipes[category];


        const recipe =
            categoryRecipes[itemId];


        // ----------------------------------------
        // 必要アイテム
        // ----------------------------------------

        let materialHtml = "";


        recipe.materials.forEach(material => {

            const totalQuantity =
                material.quantity * quantity;


            materialHtml +=
                createMaterialHtml(

                    material.name,

                    totalQuantity,

                    categoryRecipes

                );
        });


        // ----------------------------------------
        // 最終素材
        // ----------------------------------------

        const finalMaterials =
            collectFinalMaterials(

                recipe.name,

                quantity,

                categoryRecipes

            );


        const finalMaterialsHtml =
            createFinalMaterialsHtml(
                finalMaterials
            );


        // ----------------------------------------
        // 購入費用
        // ----------------------------------------

        const purchaseCost =
            calculatePurchaseCost(
                finalMaterials,
                recipe.required_book
            );


        const purchaseCostHtml =
            createPurchaseCostHtml(
                purchaseCost
            );


        // ----------------------------------------
        // 結果表示
        // ----------------------------------------

        // 通常ファーマシーはミックスクッキングと同じ表示構成にする。
        // 完成品タイトル
        // → 必要な本
        // → 材料
        // → 最終的に必要な素材
        // → 購入費用
        if (category === "pharmacy") {

            const bookHtml =
                recipe.required_book
                    ? `
                        <h3>必要な本</h3>
                        <table class="special-pharmacy-table">
                            <tbody>
                                <tr>
                                    <td>
                                        ${recipe.required_book} 1個
                                        <div class="material-acquisition">
                                            1冊を手元に所持しておく必要があります。
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    `
                    : "";

            const pharmacyMaterialRows =
                recipe.materials.map(material => {

                    const totalQuantity =
                        material.quantity * quantity;

                    const tooltip =
                        createNpcTooltip(material.name);

                    const materialInfo =
                        materialsData[material.name];

                    // 材料として別のファーマシー製作品を使う場合は、
                    // その材料を別途作成する必要があることを表示する。
                    const isPharmacySubRecipe =
                        Object.values(recipes.pharmacy || {})
                            .some(subRecipe =>
                                subRecipe.name === material.name
                            );

                    let acquisitionInfo = "";

                    if (
                        materialInfo &&
                        materialInfo.type === "npc"
                    ) {
                        acquisitionInfo = `
                            <div class="material-acquisition">
                                <div>入手方法：NPC購入</div>
                                <div>
                                    ${materialInfo.source}
                                    ／ ${materialInfo.npc}
                                </div>
                            </div>
                        `;
                    }


                    return `
                        <tr>
                            <td>
                                <span class="material-item">
                                    ${material.name} ${totalQuantity}個
                                    ${tooltip}
                                    ${createPharmacyRecipeTooltip(material.name)}
                                </span>${createPharmacyCraftNotice(material.name)}
                                ${acquisitionInfo}
                            </td>
                        </tr>
                    `;
                }).join("");

            result.innerHTML = `
                <h2>${recipe.name} × ${quantity}</h2>

                ${bookHtml}

                <h3>材料</h3>
                <table class="special-pharmacy-table">
                    <tbody>
                        ${pharmacyMaterialRows}
                    </tbody>
                </table>

                <div class="final-materials">

                    <hr>

                    <h3>最終的に必要な素材</h3>

                    <ul>
                        ${finalMaterialsHtml}
                    </ul>

                    ${purchaseCostHtml}

                </div>
            `;

            return;
        }

        // その他の製薬種類は従来表示を維持。
        result.innerHTML = `

            <h2>
                ${recipe.name} × ${quantity}
            </h2>

            <h3>
                必要アイテム
            </h3>

            <ul>
                ${
                    recipe.required_book
                        ? `
                            <li>
                                <strong>
                                    ${recipe.required_book} × 1
                                </strong>
                                <div class="material-acquisition">
                                    1冊を手元に所持しておく必要があります。
                                </div>
                            </li>
                        `
                        : ""
                }

                ${materialHtml}
            </ul>

            <div class="final-materials">

                <hr>

                <h3>
                    最終的に必要な素材
                </h3>

                <ul>
                    ${finalMaterialsHtml}
                </ul>

                ${purchaseCostHtml}

            </div>

        `;
    }
);

// 初期表示時の作成個数欄を制御
updateQuantityControl();


// 初期表示
updateItemList();
updateQuantityControl();
