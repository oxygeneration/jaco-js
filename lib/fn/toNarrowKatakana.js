"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var replace_1 = require("./replace");
var replaceFromMap_1 = require("./replaceFromMap");
var toKatakana_1 = require("./toKatakana");
/**
 * 半角カタカナに変換する
 *
 * @version 0.6.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param fromHiragana ひらがなも変換する
 */
function default_1(str) {
    var fromHiragana = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // ひらがなを一旦全角カタカナに変換する
    if (fromHiragana) {
        str = toKatakana_1.default(str);
    }
    // 濁点の変換 (全角濁点2種類対応)
    str = replace_1.default(str, /\u309B|\u3099/g, "\uFF9E");
    // 半濁点の変換 (全角半濁点2種類対応)
    str = replace_1.default(str, /\u309C|\u309A/g, "\uFF9F");
    // カタカナの変換
    str = replaceFromMap_1.default(str, {
        ァ: 'ｧ', ィ: 'ｨ', ゥ: 'ｩ', ェ: 'ｪ', ォ: 'ｫ', ャ: 'ｬ',
        ュ: 'ｭ', ョ: 'ｮ', ッ: 'ｯ',
        ヵ: 'ｶ', ヶ: 'ｹ',
        ヮ: 'ﾜ',
        ー: 'ｰ',
        ア: 'ｱ', イ: 'ｲ', ウ: 'ｳ', エ: 'ｴ', オ: 'ｵ',
        カ: 'ｶ', キ: 'ｷ', ク: 'ｸ', ケ: 'ｹ', コ: 'ｺ',
        サ: 'ｻ', シ: 'ｼ', ス: 'ｽ', セ: 'ｾ', ソ: 'ｿ',
        タ: 'ﾀ', チ: 'ﾁ', ツ: 'ﾂ', テ: 'ﾃ', ト: 'ﾄ',
        ナ: 'ﾅ', ニ: 'ﾆ', ヌ: 'ﾇ', ネ: 'ﾈ', ノ: 'ﾉ',
        ハ: 'ﾊ', ヒ: 'ﾋ', フ: 'ﾌ', ヘ: 'ﾍ', ホ: 'ﾎ',
        マ: 'ﾏ', ミ: 'ﾐ', ム: 'ﾑ', メ: 'ﾒ', モ: 'ﾓ',
        ヤ: 'ﾔ', ユ: 'ﾕ', ヨ: 'ﾖ',
        ラ: 'ﾗ', リ: 'ﾘ', ル: 'ﾙ', レ: 'ﾚ', ロ: 'ﾛ',
        ワ: 'ﾜ', ン: 'ﾝ', ヰ: 'ｲ', ヱ: 'ｴ', ヲ: 'ｦ',
        ガ: 'ｶﾞ', ギ: 'ｷﾞ', グ: 'ｸﾞ', ゲ: 'ｹﾞ', ゴ: 'ｺﾞ',
        ザ: 'ｻﾞ', ジ: 'ｼﾞ', ズ: 'ｽﾞ', ゼ: 'ｾﾞ', ゾ: 'ｿﾞ',
        ダ: 'ﾀﾞ', ヂ: 'ﾁﾞ', ヅ: 'ﾂﾞ', デ: 'ﾃﾞ', ド: 'ﾄﾞ',
        バ: 'ﾊﾞ', ビ: 'ﾋﾞ', ブ: 'ﾌﾞ', ベ: 'ﾍﾞ', ボ: 'ﾎﾞ',
        パ: 'ﾊﾟ', ピ: 'ﾋﾟ', プ: 'ﾌﾟ', ペ: 'ﾍﾟ', ポ: 'ﾎﾟ',
        ヷ: 'ﾜﾞ', ヸ: 'ｲﾞ', ヴ: 'ｳﾞ', ヹ: 'ｴﾞ', ヺ: 'ｦﾞ'
    });
    return str;
}
exports.default = default_1;