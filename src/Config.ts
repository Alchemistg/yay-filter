/**
 * Configurations.
 */

/** Variable defined by webpack.config.js. */
declare const __DEBUG__: string;

export const Config = {
    version: '0.2.0',
    url: {
        targetUrl: 'www.youtube.com/watch',
        projectUrl: 'https://github.com/mogproject/yay-filter',
        donationUrl: 'https://www.paypal.me/mogproject/5',
    },
    dom: {
        id: {
            yayFilterLabel: 'yay-filter-label',
            yayFilterContainer: 'yay-filter-container',
            yayFilterStatus: 'yay-filter-status',
            yayFilterInfo: 'yay-filter-info',
        },
        selector: {
            // YouTube selector queries
            ytCommentContainer: 'ytd-comments #header.ytd-item-section-renderer',
            ytCommentTitle: 'ytd-comments #title.ytd-comments-header-renderer',
            ytCommentContents: 'ytd-comments #contents.ytd-item-section-renderer',
            ytCommentThread: 'ytd-comments ytd-comment-thread-renderer',
            ytCommentMain: '#comment',
            ytCommentReplyRoot: '#replies',
            ytCommentReplyContainer: '#replies #loaded-replies',
            ytCommentReplyElement: '#replies #loaded-replies ytd-comment-renderer',
            ytCommentText: '#content-text',
            ytCommentTagName: 'ytd-comment-renderer'.toUpperCase(),
        },
        svg: {
            filterIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>',
        },
    },
    settings: {
        delimiter: ' ',
        defaultPercentageThreshould: 20,
        maxLanguageDetectorCacheSize: 500,
    },
    debug: {
        enabled: __DEBUG__,
    },
    // ['mo', 'Moldavian'],  // deprecated
    // ['sh', 'Serbo-Croatian'],  // deprecated
    languages: [
        ['ab', 'Abkhazian', 'аҧсуа бызшәа'],
        ['aa', 'Afar', 'Afaraf'],
        ['af', 'Afrikaans', 'Afrikaans'],
        ['ak', 'Akan', 'Akan'],
        ['sq', 'Albanian', 'Shqip'],
        ['am', 'Amharic', 'አማርኛ'],
        ['ar', 'Arabic', 'العربية'],
        ['an', 'Aragonese', 'aragonés'],
        ['hy', 'Armenian', 'Հայերեն'],
        ['as', 'Assamese', 'অসমীয়া'],
        ['av', 'Avaric', 'авар мацӀ'],
        ['ae', 'Avestan', 'avesta'],
        ['ay', 'Aymara', 'aymar aru'],
        ['az', 'Azerbaijani', 'azərbaycan dili'],
        ['bm', 'Bambara', 'bamanankan'],
        ['ba', 'Bashkir', 'башҡорт теле'],
        ['eu', 'Basque', 'euskara'],
        ['be', 'Belarusian', 'беларуская мова'],
        ['bn', 'Bengali', 'বাংলা'],
        ['bh', 'Bihari', 'भोजपुरी'],
        ['bi', 'Bislama', 'Bislama'],
        ['bs', 'Bosnian', 'bosanski jezik'],
        ['br', 'Breton', 'brezhoneg'],
        ['bg', 'Bulgarian', 'български език'],
        ['my', 'Burmese', 'ဗမာစာ'],
        ['ca', 'Catalan', 'català'],
        ['ch', 'Chamorro', 'Chamoru'],
        ['ce', 'Chechen', 'нохчийн мотт'],
        ['ny', 'Chichewa', 'chiCheŵa'],
        ['zh', 'Chinese', '中文'],
        ['cu', 'Church Slavic', 'ѩзыкъ словѣньскъ'],
        ['cv', 'Chuvash', 'чӑваш чӗлхи'],
        ['kw', 'Cornish', 'Kernewek'],
        ['co', 'Corsican', 'corsu'],
        ['cr', 'Cree', 'ᓀᐦᐃᔭᐍᐏᐣ'],
        ['hr', 'Croatian', 'hrvatski jezik'],
        ['cs', 'Czech', 'čeština'],
        ['da', 'Danish', 'dansk'],
        ['dv', 'Divehi', 'ދިވެހި'],
        ['nl', 'Dutch', 'Nederlands'],
        ['dz', 'Dzongkha', 'རྫོང་ཁ'],
        ['en', 'English', 'English'],
        ['eo', 'Esperanto', 'Esperanto'],
        ['et', 'Estonian', 'eesti'],
        ['ee', 'Ewe', 'Eʋegbe'],
        ['fo', 'Faroese', 'føroyskt'],
        ['fj', 'Fijian', 'vosa Vakaviti'],
        ['fi', 'Finnish', 'suomi'],
        ['fr', 'French', 'français'],
        ['ff', 'Fulah', 'Fulfulde'],
        ['gv', 'Gaelic (Manx)', 'Gaelg'],
        ['gd', 'Gaelic (Scottish)', 'Gàidhlig'],
        ['gl', 'Galician', 'Galego'],
        ['lg', 'Ganda', 'Luganda'],
        ['ka', 'Georgian', 'ქართული'],
        ['de', 'German', 'Deutsch'],
        ['el', 'Greek', 'ελληνικά'],
        ['gn', 'Guarani', "Avañe'ẽ"],
        ['gu', 'Gujarati', 'ગુજરાતી'],
        ['ht', 'Haitian', 'Kreyòl ayisyen'],
        ['ha', 'Hausa', 'هَوُسَ'],
        ['he', 'Hebrew', 'עברית'],
        ['hz', 'Herero', 'Otjiherero'],
        ['hi', 'Hindi', 'हिन्दी'],
        ['ho', 'Hiri Motu', 'Hiri Motu'],
        ['hu', 'Hungarian', 'magyar'],
        ['is', 'Icelandic', 'Íslenska'],
        ['io', 'Ido', 'Ido'],
        ['ig', 'Igbo', 'Asụsụ Igbo'],
        ['id', 'Indonesian', 'Bahasa Indonesia'],
        ['ia', 'Interlingua', 'Interlingua'],
        ['ie', 'Interlingue', 'Interlingue'],
        ['iu', 'Inuktitut', 'ᐃᓄᒃᑎᑐᑦ'],
        ['ik', 'Inupiak', 'Iñupiaq'],
        ['ga', 'Irish', 'Gaeilge'],
        ['it', 'Italian', 'Italiano'],
        ['ja', 'Japanese', '日本語'],
        ['jv', 'Javanese', 'ꦧꦱꦗꦮ'],
        ['kl', 'Kalaallisut', 'kalaallisut'],
        ['kn', 'Kannada', 'ಕನ್ನಡ'],
        ['kr', 'Kanuri', 'Kanuri'],
        ['ks', 'Kashmiri', 'कश्मीरी'],
        ['kk', 'Kazakh', 'қазақ тілі'],
        ['km', 'Khmer', 'ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ'],
        ['ki', 'Kikuyu', 'Gĩkũyũ'],
        ['rw', 'Kinyarwanda', 'Ikinyarwanda'],
        ['kv', 'Komi', 'коми кыв'],
        ['kg', 'Kongo', 'Kikongo'],
        ['ko', 'Korean', '한국어'],
        ['kj', 'Kuanyama', 'Kuanyama'],
        ['ku', 'Kurdish', 'Kurdî'],
        ['ky', 'Kyrgyz', 'Кыргызча'],
        ['lo', 'Lao', 'ພາສາລາວ'],
        ['la', 'Latin', 'latine'],
        ['lv', 'Latvian', 'latviešu valoda'],
        ['li', 'Limburgan', 'Limburgs'],
        ['ln', 'Lingala', 'Lingála'],
        ['lt', 'Lithuanian', 'lietuvių kalba'],
        ['lu', 'Luba-Katanga', 'Kiluba'],
        ['lb', 'Luxembourgish', 'Lëtzebuergesch'],
        ['mk', 'Macedonian', 'македонски јазик'],
        ['mg', 'Malagasy', 'fiteny malagasy'],
        ['ms', 'Malay', 'Bahasa Melayu'],
        ['ml', 'Malayalam', 'മലയാളം'],
        ['mt', 'Maltese', 'Malti'],
        ['mi', 'Maori', 'te reo Māori'],
        ['mr', 'Marathi', 'मराठी'],
        ['mh', 'Marshallese', 'Kajin M̧ajeļ'],
        ['mn', 'Mongolian', 'Монгол хэл'],
        ['na', 'Nauru', 'Dorerin Naoero'],
        ['nv', 'Navajo', 'Diné bizaad'],
        ['ng', 'Ndonga', 'Owambo'],
        ['ne', 'Nepali', 'नेपाली'],
        ['nd', 'North Ndebele', 'isiNdebele'],
        ['se', 'Northern Sami', 'Davvisámegiella'],
        ['no', 'Norwegian', 'Norsk'],
        ['nb', 'Norwegian bokmål', 'Norsk Bokmål'],
        ['nn', 'Norwegian nynorsk', 'Norsk Nynorsk'],
        ['oc', 'Occitan', 'occitan'],
        ['oj', 'Ojibwe', 'ᐊᓂᔑᓈᐯᒧᐎᓐ'],
        ['or', 'Oriya', 'ଓଡ଼ିଆ'],
        ['om', 'Oromo', 'Afaan Oromoo'],
        ['os', 'Ossetian', 'ирон æвзаг'],
        ['pi', 'Pali', 'पालि'],
        ['ps', 'Pashto', 'پښتو'],
        ['fa', 'Persian', 'فارسی'],
        ['pl', 'Polish', 'język polski'],
        ['pt', 'Portuguese', 'Português'],
        ['pa', 'Punjabi', 'ਪੰਜਾਬੀ'],
        ['qu', 'Quechua', 'Runa Simi'],
        ['ro', 'Romanian', 'Română'],
        ['rm', 'Romansh', 'Rumantsch Grischun'],
        ['rn', 'Rundi', 'Ikirundi'],
        ['ru', 'Russian', 'русский'],
        ['sm', 'Samoan', "gagana fa'a Samoa"],
        ['sg', 'Sango', 'yângâ tî sängö'],
        ['sa', 'Sanskrit', 'संस्कृतम्'],
        ['sc', 'Sardinian', 'sardu'],
        ['sr', 'Serbian', 'српски језик'],
        ['st', 'Sesotho', 'Sesotho'],
        ['sn', 'Shona', 'chiShona'],
        ['ii', 'Sichuan Yi', 'ꆈꌠ꒿'],
        ['sd', 'Sindhi', 'सिन्धी'],
        ['si', 'Sinhala', 'සිංහල'],
        ['sk', 'Slovak', 'Slovenčina'],
        ['sl', 'Slovenian', 'Slovenski jezik'],
        ['so', 'Somali', 'Soomaaliga'],
        ['nr', 'South Ndebele', 'isiNdebele'],
        ['es', 'Spanish', 'Español'],
        ['su', 'Sundanese', 'Basa Sunda'],
        ['sw', 'Swahili', 'Kiswahili'],
        ['ss', 'Swati', 'SiSwati'],
        ['sv', 'Swedish', 'Svenska'],
        ['tl', 'Tagalog', 'Wikang Tagalog'],
        ['ty', 'Tahitian', 'Reo Tahiti'],
        ['tg', 'Tajik', 'тоҷикӣ'],
        ['ta', 'Tamil', 'தமிழ்'],
        ['tt', 'Tatar', 'татар теле'],
        ['te', 'Telugu', 'తెలుగు'],
        ['th', 'Thai', 'ไทย'],
        ['bo', 'Tibetan', 'བོད་ཡིག'],
        ['ti', 'Tigrinya', 'ትግርኛ'],
        ['to', 'Tonga', 'Faka Tonga'],
        ['ts', 'Tsonga', 'Xitsonga'],
        ['tn', 'Tswana', 'Setswana'],
        ['tr', 'Turkish', 'Türkçe'],
        ['tk', 'Turkmen', 'Türkmen'],
        ['tw', 'Twi', 'Twi'],
        ['uk', 'Ukrainian', 'Українська'],
        ['ur', 'Urdu', 'اردو'],
        ['ug', 'Uyghur', 'ئۇيغۇرچە '],
        ['uz', 'Uzbek', 'Oʻzbek'],
        ['ve', 'Venda', 'Tshivenḓa'],
        ['vi', 'Vietnamese', 'Tiếng Việt'],
        ['vo', 'Volapük', 'Volapük'],
        ['wa', 'Walloon', 'Walon'],
        ['cy', 'Welsh', 'Cymraeg'],
        ['fy', 'Western Frisian', 'Frysk'],
        ['wo', 'Wolof', 'Wollof'],
        ['xh', 'Xhosa', 'isiXhosa'],
        ['yi', 'Yiddish', 'ייִדיש'],
        ['yo', 'Yoruba', 'Yorùbá'],
        ['za', 'Zhuang', 'Saɯ cueŋƅ'],
        ['zu', 'Zulu', 'isiZulu'],
    ],
};
