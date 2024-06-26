import { FileViewerProps } from '@/utils/types/file-viewer-props.type';
import axios from 'axios';
import mammoth from 'mammoth';
import { useEffect, useState } from 'react';
import Iframe from '../iframe/IFrame';
const Docx: React.FC<FileViewerProps> = ({ file }) => {
  const [html, setHtml] = useState('');
  const docxStyle =
    '<style>html,bodyaddress,blockquote,body,dd,div,dl,dt,fieldset,form,frame,frameset,h1,h2,h3,h4,h5,h6,noframes,ol,p,ul,center,dir,hr,menu,pre {display: block;unicode-bidi: embed;}li {display: bookList-item;bookList-style-type: disc;}head {display: none;}table {display: table;border-collapse:collapse;margin: 0 auto;}img {width: auto;max-width: 100%;}tr {display: table-row;}thead {display: table-header-group;}tbody {display: table-row-group;font-family: verdana,arial,sans-serif;font-size:0.8em;color:#333333;}tfoot {display: table-footer-group;}col {display: table-column;}colgroup {display: table-column-group;}th {border-width: 1px;padding: 0.5em;border-style: solid;border-color: #666666;background-color: #dedede;}td {border-width: 1px;padding: 0.5em;border-style: solid;border-color: #666666;background-color: #ffffff;}caption {display: table-caption;}th {font-weight: bolder;text-align: center;}caption {text-align: center;}body {padding: 0.4cm 0.8cm;}h1 {font-size: 2em;margin: 0.67em 0;}h2 {font-size: 1.5em;margin: 0.75em 0;}h3 {font-size: 1.17em;margin: 0.83em 0;}h4,p,blockquote,ul,fieldset,form,ol,dl,dir,menu {margin: 1.12em 0;}h5 {font-size: 0.83em;margin: 1.5em 0;}h6 {font-size: 0.75em;margin: 1.67em 0;}h1,h2,h3,h4,h5,h6,b,strong {font-weight: bolder;}blockquote {margin-left: 40px;margin-right: 40px;}i,cite,em,var,address {font-style: italic;}pre,tt,code,kbd,samp {font-family: monospace;}pre {white-space: pre;}button,textarea,input,select {display: inline-block;}big {font-size: 1.17em;}small,sub,sup {font-size: 0.83em;}sub {vertical-align: sub;}sup {vertical-align: super;}table {border-spacing: 2px;}thead,tbody,tfoot {vertical-align: middle;}td,th,tr {vertical-align: inherit;}s,strike,del {text-decoration: line-through;}hr {border: 1px inset;}ol {bookList-style-type: decimal;}ol ul,ol ul,ul ol,ul ol,ul ul,ul ul,ol ol,ol ol {margin-top: 0;margin-bottom: 0;}u,ins {text-decoration: underline;}br:before {white-space: pre-line;}center {text-align: center;}:link,:visited {text-decoration: underline;word-break: break-word;}:focus {outline: thin dotted invert;} @media print {h1 {page-break-before: always;}h1,h2,h3,h4,h5,h6 {page-break-after: avoid;}ul,ol,dl {page-break-before: avoid;}}</style>';

  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    const fetchText = async () => {
      try {
        const reader = new FileReader();
        reader.onloadend = () => {
          reader.result && setSrc(reader.result.toString());
        };
        reader.onerror = (err) => {};
        reader.readAsDataURL(file);
      } catch (error) {
        console.error('Error reading text file:', error);
      }
    };

    fetchText();
  }, [file]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'arraybuffer',
      });
      let { value: htmlStr } = await mammoth.convertToHtml({
        arrayBuffer: data,
      });
      htmlStr += docxStyle;
      setHtml(htmlStr);
    };
    fetchData();
  }, [src]);
  return <Iframe url={html} isHtml={true} />;
};

export default Docx;
