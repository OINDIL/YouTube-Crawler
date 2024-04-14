import React, { useEffect, useState } from 'react'
import {useAllContext} from '../Context/AllContextAPI'
import { BiSolidLike,BiSolidComment } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";


const VideosCard = ({ data,index }) => {
  function getLanguageName(isoCode) {
    const languageNames = {
      'aa': 'Afar',
      'ab': 'Abkhazian',
      'af': 'Afrikaans',
      'ak': 'Akan',
      'sq': 'Albanian',
      'am': 'Amharic',
      'ar': 'Arabic',
      'an': 'Aragonese',
      'as': 'Assamese',
      'av': 'Avaric',
      'ae': 'Avestan',
      'ay': 'Aymara',
      'az': 'Azerbaijani',
      'ba': 'Bashkir',
      'bm': 'Bambara',
      'eu': 'Basque',
      'be': 'Belarusian',
      'bn-IN': 'Bengali',
      'bn': 'Bengali',
      'bh': 'Bihari languages',
      'bi': 'Bislama',
      'bs': 'Bosnian',
      'br': 'Breton',
      'bg': 'Bulgarian',
      'my': 'Burmese',
      'ca': 'Catalan; Valencian',
      'ch': 'Chamorro',
      'ce': 'Chechen',
      'zh': 'Chinese',
      'cu': 'Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic',
      'cv': 'Chuvash',
      'kw': 'Cornish',
      'co': 'Corsican',
      'cr': 'Cree',
      'cs': 'Czech',
      'da': 'Danish',
      'dv': 'Divehi; Dhivehi; Maldivian',
      'nl': 'Dutch; Flemish',
      'dz': 'Dzongkha',
      'en': 'English',
      'eo': 'Esperanto',
      'et': 'Estonian',
      'ee': 'Ewe',
      'fo': 'Faroese',
      'fj': 'Fijian',
      'fi': 'Finnish',
      'fr': 'French',
      'fy': 'Western Frisian',
      'ff': 'Fulah',
      'de': 'German',
      'gd': 'Gaelic; Scottish Gaelic',
      'ga': 'Irish',
      'gl': 'Galician',
      'gv': 'Manx',
      'el': 'Greek, Modern (1453-)',
      'gn': 'Guarani',
      'gu': 'Gujarati',
      'ht': 'Haitian; Haitian Creole',
      'ha': 'Hausa',
      'he': 'Hebrew',
      'hz': 'Herero',
      'hi': 'Hindi',
      'ho': 'Hiri Motu',
      'hr': 'Croatian',
      'hu': 'Hungarian',
      'hy': 'Armenian',
      'ig': 'Igbo',
      'is': 'Icelandic',
      'io': 'Ido',
      'ii': 'Sichuan Yi; Nuosu',
      'iu': 'Inuktitut',
      'ie': 'Interlingue; Occidental',
      'ia': 'Interlingua (International Auxiliary Language Association)',
      'id': 'Indonesian',
      'ik': 'Inupiaq',
      'it': 'Italian',
      'jv': 'Javanese',
      'ja': 'Japanese',
      'kl': 'Kalaallisut; Greenlandic',
      'kn': 'Kannada',
      'ks': 'Kashmiri',
      'ka': 'Georgian',
      'kr': 'Kanuri',
      'kk': 'Kazakh',
      'km': 'Central Khmer',
      'ki': 'Kikuyu; Gikuyu',
      'rw': 'Kinyarwanda',
      'ky': 'Kirghiz; Kyrgyz',
      'kv': 'Komi',
      'kg': 'Kongo',
      'ko': 'Korean',
      'kj': 'Kuanyama; Kwanyama',
      'ku': 'Kurdish',
      'lo': 'Lao',
      'la': 'Latin',
      'lv': 'Latvian',
      'li': 'Limburgan; Limburger; Limburgish',
      'ln': 'Lingala',
      'lt': 'Lithuanian',
      'lb': 'Luxembourgish; Letzeburgesch',
      'lu': 'Luba-Katanga',
      'lg': 'Ganda',
      'mk': 'Macedonian',
      'mh': 'Marshallese',
      'ml': 'Malayalam',
      'mi': 'Maori',
      'mr': 'Marathi',
      'ms': 'Malay',
      'mg': 'Malagasy',
      'mt': 'Maltese',
      'mn': 'Mongolian',
      'na': 'Nauru',
      'nv': 'Navajo; Navaho',
      'nr': 'Ndebele, South; South Ndebele',
      'nd': 'Ndebele, North; North Ndebele',
      'ng': 'Ndonga',
      'ne': 'Nepali',
      'nn': 'Norwegian Nynorsk; Nynorsk, Norwegian',
      'nb': 'Bokmål, Norwegian; Norwegian Bokmål',
      'no': 'Norwegian',
      'ny': 'Chichewa; Chewa; Nyanja',
      'oc': 'Occitan (post 1500)',
      'oj': 'Ojibwa',
      'or': 'Oriya',
      'om': 'Oromo',
      'os': 'Ossetian; Ossetic',
      'pa': 'Panjabi; Punjabi',
      'fa': 'Persian',
      'pi': 'Pali',
      'pl': 'Polish',
      'pt': 'Portuguese',
      'ps': 'Pushto; Pashto',
      'qu': 'Quechua',
      'rm': 'Romansh',
      'ro': 'Romanian; Moldavian; Moldovan',
      'rn': 'Rundi',
      'ru': 'Russian',
      'sg': 'Sango',
      'sa': 'Sanskrit',
      'si': 'Sinhala; Sinhalese',
      'sk': 'Slovak',
      'sl': 'Slovenian',
      'se': 'Northern Sami',
      'sm': 'Samoan',
      'sn': 'Shona',
      'sd': 'Sindhi',
      'so': 'Somali',
      'st': 'Sotho, Southern',
      'es': 'Spanish; Castilian',
      'sc': 'Sardinian',
      'sr': 'Serbian',
      'ss': 'Swati',
      'su': 'Sundanese',
      'sw': 'Swahili',
      'sv': 'Swedish',
      'ty': 'Tahitian',
      'ta': 'Tamil',
      'tt': 'Tatar',
      'te': 'Telugu',
      'tg': 'Tajik',
      'tl': 'Tagalog',
      'th': 'Thai',
      'bo': 'Tibetan',
      'ti': 'Tigrinya',
      'to': 'Tonga (Tonga Islands)',
      'tn': 'Tswana',
      'ts': 'Tsonga',
      'tk': 'Turkmen',
      'tr': 'Turkish',
      'tw': 'Twi',
      'ug': 'Uighur; Uyghur',
      'uk': 'Ukrainian',
      'ur': 'Urdu',
      'uz': 'Uzbek',
      've': 'Venda',
      'vi': 'Vietnamese',
      'vo': 'Volapük',
      'cy': 'Welsh',
      'wa': 'Walloon',
      'wo': 'Wolof',
      'xh': 'Xhosa',
      'yi': 'Yiddish',
      'yo': 'Yoruba',
      'za': 'Zhuang; Chuang',
      'zu': 'Zulu'
    };
    if (isoCode in languageNames) {
      return languageNames[isoCode];
    } else {
      return isoCode;
    }
  }
  
  const {formatNumber,hover,setHover,apiKey} = useAllContext();
  const [video, setVideo] = useState([
    {
      title:'Undefined',
      description:'Undefined',
      url:'https://placehold.co/600x400',
      day:0,
      month:0,
      year:0,
      channelTitle:'Undefined',
      tags:[],
      defaultAudioLanguage:'No Data',
      likeCount:0,
      commentCount:0,
      viewCount:0
    }
  ])
  const channelInfo = async (id) => {
    try {
      const URL = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,statistics&key=${apiKey}`
      const data = await fetch(URL, {
        method: 'GET',
        mode: 'cors',
      })
      return data.json()
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    channelInfo(data).then((data) => {
      const {title,description,publishedAt,thumbnails:{high:{url}},channelTitle,tags = ["No Tags"],defaultAudioLanguage = 'No audio mentioned'} = data.items[0].snippet
      const {likeCount,viewCount,commentCount} = data.items[0].statistics 
      const date = new Date(publishedAt)
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
      let day = ("0" + date.getDate()).slice(-2);
      setVideo([
        {
          title,
          description,
          url,
          day,
          month,
          year,
          channelTitle,
          tags,
          defaultAudioLanguage,
          likeCount,
          viewCount,
          commentCount
        }
      ]);
    }).catch((error)=>{
      console.error(error.message)
    })
  }, [data])
  return (
    <div>
      
      <div className={`card ${hover === index ? `shadow-lg` : null}`} style={{width:'18rem'}}
      onMouseEnter={()=>setHover(index)}
      onMouseLeave={()=>setHover(null)}
      >
        <img src={video[0].url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{`${(video[0].title).slice(0,100)}...`}</h5>
          <h6 className="card-subtitle text-body-secondary">{video[0].channelTitle}</h6>
          <p className="card-text">{`${(video[0].description).slice(0,200)}...`}</p>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex align-items-center gap-2"><BiSolidLike/>{formatNumber(video[0].likeCount)}</li>
        <li className="list-group-item d-flex align-items-center gap-2"><BiSolidComment/>{formatNumber(video[0].commentCount)}</li>
        <li className="list-group-item d-flex align-items-center gap-2"><BsGraphUpArrow/>{formatNumber(video[0].viewCount)} views</li>
          <li className="list-group-item"><span className='fw-medium'>Tags Used:</span><span className="text-primary">
          {video[0].tags.map((tag)=>{
            return ` #${tag}`
          })}
          </span>
          </li>
          <li className="list-group-item d-flex align-items-center gap-2"><IoIosInformationCircleOutline/>Joined {video[0].day}-{video[0].month}-{video[0].year}</li>
          <li className="list-group-item d-flex align-items-center gap-2"><IoLanguage/>{getLanguageName(video[0].defaultAudioLanguage)}</li>
        </ul>
        <div className="card-body text-center">
          <a href={`https://www.youtube.com/watch?v=${data}`} className="card-link text-decoration-none text-danger" target='_blank'><FaRegCirclePlay/> Watch video</a>
        </div>
      </div>
    </div>
  )
}

export default VideosCard