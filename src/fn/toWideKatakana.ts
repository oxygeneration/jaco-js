import replaceFromMap from './replaceFromMap';

/**
 * 全角カタカナに変換する
 *
 * @version 0.2.0
 * @since 0.1.0
 * @param str 対象の文字列
 */
export default function (str: string): string {
	// カタカナ・濁点・半濁点の変換
	return replaceFromMap(str, {
		ｶﾞ: 'ガ', ｷﾞ: 'ギ', ｸﾞ: 'グ', ｹﾞ: 'ゲ', ｺﾞ: 'ゴ',
		ｻﾞ: 'ザ', ｼﾞ: 'ジ', ｽﾞ: 'ズ', ｾﾞ: 'ゼ', ｿﾞ: 'ゾ',
		ﾀﾞ: 'ダ', ﾁﾞ: 'ヂ', ﾂﾞ: 'ヅ', ﾃﾞ: 'デ', ﾄﾞ: 'ド',
		ﾊﾞ: 'バ', ﾋﾞ: 'ビ', ﾌﾞ: 'ブ', ﾍﾞ: 'ベ', ﾎﾞ: 'ボ',
		ﾊﾟ: 'パ', ﾋﾟ: 'ピ', ﾌﾟ: 'プ', ﾍﾟ: 'ペ', ﾎﾟ: 'ポ',
		ﾜﾞ: 'ヷ', ｲﾞ: 'ヸ', ｳﾞ: 'ヴ', ｴﾞ: 'ヹ', ｦﾞ: 'ヺ',
		ﾞ: '゛', ﾟ: '゜',
		ｧ: 'ァ', ｨ: 'ィ', ｩ: 'ゥ', ｪ: 'ェ', ｫ: 'ォ',
		ｬ: 'ャ', ｭ: 'ュ', ｮ: 'ョ',
		ｯ: 'ッ', ｰ: 'ー',
		ｱ: 'ア', ｲ: 'イ', ｳ: 'ウ', ｴ: 'エ', ｵ: 'オ',
		ｶ: 'カ', ｷ: 'キ', ｸ: 'ク', ｹ: 'ケ', ｺ: 'コ',
		ｻ: 'サ', ｼ: 'シ', ｽ: 'ス', ｾ: 'セ', ｿ: 'ソ',
		ﾀ: 'タ', ﾁ: 'チ', ﾂ: 'ツ', ﾃ: 'テ', ﾄ: 'ト',
		ﾅ: 'ナ', ﾆ: 'ニ', ﾇ: 'ヌ', ﾈ: 'ネ', ﾉ: 'ノ',
		ﾊ: 'ハ', ﾋ: 'ヒ', ﾌ: 'フ', ﾍ: 'ヘ', ﾎ: 'ホ',
		ﾏ: 'マ', ﾐ: 'ミ', ﾑ: 'ム', ﾒ: 'メ', ﾓ: 'モ',
		ﾔ: 'ヤ', ﾕ: 'ユ', ﾖ: 'ヨ',
		ﾗ: 'ラ', ﾘ: 'リ', ﾙ: 'ル', ﾚ: 'レ', ﾛ: 'ロ',
		ﾜ: 'ワ', ｦ: 'ヲ', ﾝ: 'ン',
	});
}
