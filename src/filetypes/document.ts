// Documents have an additional property
// "documentType" which denotes one of
// "document", "spreadsheet", "presentation",
// and may grow to include other common
// document types.

const document = [
  {
    "ext": ["abw"],
    "mimetype": ["application/x-abiword"],
    "kind": ["AbiWord document"],
    "documentType": "document"
  },
  {
    "ext": ["doc"],
    "mimetype": ["application/msword"],
    "kind": ["Microsoft Word Document"],
    "documentType": "document"
  },
  {
    "ext": ["dochtml"],
    "kind": ["Microsoft Word HTML Document"],
    "documentType": "document"
  },
  {
    "ext": ["docm"],
    "kind": ["Microsoft Word Macro-Enabled Document"],
    "documentType": "document"
  },
  {
    "ext": ["docmhtml"],
    "kind": ["Microsoft Word MIME HTML Document"],
    "documentType": "document"
  },
  {
    "ext": ["docx"],
    "kind": ["Microsoft Word Document"],
    "documentType": "document"
  },
  {
    "ext": ["docx"],
    "mimetype": ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    "kind": ["Microsoft Word (OpenXML)"],
    "documentType": "document"
  },
  {
    "ext": ["dot"],
    "kind": ["Microsoft Word 97-2003 Template"],
    "documentType": "document template"
  },
  {
    "ext": ["dothtml"],
    "kind": ["Microsoft Word HTML Template"],
    "documentType": "document template"
  },
  {
    "ext": ["dotm"],
    "kind": ["Microsoft Word Macro-Enabled Template"],
    "documentType": "document template"
  },
  {
    "ext": ["dotx"],
    "kind": ["Microsoft Word Template"],
    "documentType": "document template"
  },
  {
    "ext": ["dotx"],
    "kind": ["Office Open XML Text Document template"],
    "documentType": "document template"
  },
  {
    "ext": ["email"],
    "kind": ["Email Message"]
  },
  {
    "ext": ["eml"],
    "kind": ["Outlook Express Stationery Template"],
    "documentType": "email template"
  },
  {
    "ext": ["fodt"],
    "kind": ["LibreOffice OpenDocument Flat XML Document"],
    "documentType": "document"
  },
  {
    "ext": ["numbers"],
    "kind": ["Numbers Numbers spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["odp"],
    "mimetype": ["application/vnd.oasis.opendocument.presentation"],
    "kind": ["OpenDocument Presentation"],
    "documentType": "presentation"
  },
  {
    "ext": ["ods"],
    "mimetype": ["application/vnd.oasis.opendocument.spreadsheet"],
    "kind": ["OpenDocument Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["odt"],
    "mimetype": ["application/vnd.oasis.opendocument.text"],
    "kind": ["OpenDocument Document"],
    "documentType": "document"
  },
  {
    "ext": ["pages"],
    "kind": ["Pages Document"],
    "documentType": "document"
  },
  {
    "ext": ["pdf"],
    "mimetype": ["application/pdf"],
    "kind": ["Adobe PDF Document"],
    "documentType": "document"
  },
  {
    "ext": ["ppsx"],
    "kind": ["Microsoft Office Auto-Play Presentation"],
    "documentType": "presentation"
  },
  {
    "ext": ["ppt"],
    "mimetype": ["application/vnd.ms-powerpoint"],
    "kind": ["Microsoft PowerPoint Presentation"],
    "documentType": "presentation"
  },
  {
    "ext": ["pptx"],
    "mimetype": ["application/vnd.openxmlformats-officedocument.presentationml.presentation"],
    "kind": ["Microsoft PowerPoint Presentation (OpenXML)"],
    "documentType": "presentation"
  },
  {
    "ext": ["stc"],
    "kind": ["OpenOffice.org XML Spreadsheet template"],
    "documentType": "spreadsheet template"
  },
  {
    "ext": ["std"],
    "kind": ["OpenOffice.org XML Drawing template"],
    "documentType": "drawing template"
  },
  {
    "ext": ["sti"],
    "kind": ["OpenOffice.org XML Presentation template"],
    "documentType": "presentation template"
  },
  {
    "ext": ["stw"],
    "kind": ["OpenOffice.org XML Text Document Template"],
    "documentType": "document template"
  },
  {
    "ext": ["sxc"],
    "kind": ["OpenOffice.org XML Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["sxd"],
    "kind": ["OpenOffice.org XML Drawing"]
  },
  {
    "ext": ["sxg"],
    "kind": ["OpenOffice.org XML master Document"],
    "documentType": "document"
  },
  {
    "ext": ["sxi"],
    "kind": ["OpenOffice.org XML Presentation"],
    "documentType": "presentation"
  },
  {
    "ext": ["sxw"],
    "kind": ["OpenOffice.org XML text Document"],
    "documentType": "document"
  },
  {
    "ext": ["uos"],
    "kind": ["Uniform Office Format Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["vdw"],
    "kind": ["Microsoft Visio web drawing"],
    "documentType": "drawing"
  },
  {
    "ext": ["vdx"],
    "kind": ["Microsoft Visio XML drawing"],
    "documentType": "drawing"
  },
  {
    "ext": ["vsd"],
    "kind": ["Microsoft Visio Drawing (Binary)"],
    "documentType": "drawing"
  },
  {
    "ext": ["vsd"],
    "mimetype": ["application/vnd.visio"],
    "kind": ["Microsoft Visio Drawing"],
    "documentType": "drawing"
  },
  {
    "ext": ["vsdm"],
    "kind": ["Microsoft Visio Drawing (Macro-Enabled)"],
    "documentType": "drawing"
  },
  {
    "ext": ["vsdx"],
    "kind": ["Microsoft Visio Drawing"],
    "documentType": "drawing"
  },
  {
    "ext": ["vstm"],
    "kind": ["Microsoft Visio Template (Macro-enabled)"],
    "documentType": "drawing template"
  },
  {
    "ext": ["vstx"],
    "kind": ["Microsoft Visio Drawing Template"],
    "documentType": "drawing template"
  },
  {
    "ext": ["wk1"],
    "kind": ["Lotus Symphony 1.1+ Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["wk3"],
    "kind": ["Lotus 1-2-3 Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["wks"],
    "kind": ["Microsoft Works Spreadsheet", "Lotus 1-2-3 Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["xlr"],
    "kind": ["Microsoft Works Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["xls"],
    "kind": ["Microsoft Excel Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["xls"],
    "mimetype": ["application/vnd.ms-excel"],
    "kind": ["Microsoft Excel"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["xlsb"],
    "kind": ["Microsoft Excel Binary Spreadsheet (BIFF12)"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["xlsm"],
    "kind": ["Microsoft Excel Macro-Enabled Spreadsheet"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["xlsx"],
    "kind": ["Microsoft Excel Spreadsheet (XML)"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["xlsx"],
    "mimetype": ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
    "kind": ["Microsoft Excel Spreadsheet (OpenXML)"],
    "documentType": "spreadsheet"
  },
  {
    "ext": ["xlt"],
    "kind": ["Microsoft Excel Spreadsheet Template"],
    "documentType": "spreadsheet template"
  },
  {
    "ext": ["xlw"],
    "kind": ["Microsoft Excel Workbook"],
    "documentType": "spreadsheet"
  },
];

export default document;
