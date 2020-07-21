  
const viewConfiguration = {
    defaultViewMode: "FIT_PAGE",
    embedMode:"FULL_WINDOW",
    showPageControls:true,
    dockPageControls:true,
    showAnnotationsTools:true,
    showLeftHandPanel:false,
    showDownloadPDF:true,
    showPrintPDF:true,
    enableFormFilling:false
};

// the dafault PDF to render
const fileDetails = {
  fileURL:"https://a-nisa.github.io/PDFViewer/arms-gb-shaw.pdf",
  fileName:"arms-gb-shaw.pdf"
}

let init = () => {
  // setup event handlers for each button
  document.getElementById("full-window-button").onclick = () => {
    setViewMode('FULL_WINDOW');
    // revert back to full window style for the body and div elements
    document.getElementsByTagName('body').style = "margin: 0px";
    document.getElementById('adobe-dc-pdf-view').style = "";
  };
  document.getElementById("inline-button").onclick = () => {
    setViewMode('IN_LINE');
    // revert back to inline style for the body and div elements
    document.getElementsByTagName('body').style = "margin: 0px";
    document.getElementById('adobe-dc-pdf-view').style = "";
  };
  document.getElementById("sized-button").onclick = () => {
    setViewMode('SIZED_CONTAINER');
    // revert to sized container style
    document.getElementsByTagName('body').style = "margin:100px 0 0 200px";
    document.getElementById('adobe-dc-pdf-view').style = "height: 476px; width: 600px; border: 1px solid #dadada; display:inline-block;";
  };

  // call previewFile for the 1st time when sdk is ready
  document.addEventListener("adobe_dc_view_sdk.ready" , () => {
    previewFile(fileDetails);
  });
};


/*
 *  Set up new view mode by setting viewConfiguration object's embedMode property
 *  Also calls previewFile() to render PDF freshly
 */
let setViewMode = (newEmbedMode) => {
  if(newEmbedMode){
    viewConfiguration.embedMode = newEmbedMode;
  }
  previewFile(fileDetails);
};

/*
 * Constructs and calls preview file with specified url
 * Also registers a callback with each Adobe event and sends that
 * event's data to Google Analytics. 
 */
let previewFile = function(fileDetails){
  let adobeDCView = new AdobeDC.View({
    clientId:"07d2235e9e4c4ac8bcbbd2454421bcca",
    divId:"adobe-dc-pdf-view",
  });

  adobeDCView.previewFile({
    content:{
      location:{
        url:fileDetails.fileURL,
      },
    },
    metaData:{
      fileName:fileDetails.fileName,
    }
  }, viewConfiguration);

  adobeDCView.registerCallback(
    AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
    (event) => {                // the callback for all Adobe Events
      switch(event.type){
        case "DOCUMENT_OPEN":           // send relevant ones to ga
          ga("send", "event", {
            eventCategory: "Adobe DC View SDK",
            eventAction: "Document Open",
            eventLabel:`event.data.fileName`
          });
          break;
        case "PAGE_VIEW":
           ga("send", "event", {
                  eventCategory: "Adobe DC View SDK", 
                  eventAction: "Page View",
                  eventLabel:`${event.data.pageNumber} of ${event.data.fileName}` 
              });
          break;
        case "DOCUMENT_DOWNLOAD":
          ga("send", "event", {
                eventCategory: "Adobe DC View SDK", 
                eventAction: "Document Download",
                eventLabel: event.data.fileName
          });
          break;
        case "TEXT_COPY":
          ga("send", "event",{
                eventCategory: "Adobe DC View SDK", 
                eventAction: "Text Copy",
                eventLabel:`${event.data.copiedText} from ${event.data.fileName}`
          });
          break;
        default:                
      }
    },
    {
      enablePDFAnalytics:true,   
      enableFilePreviewEvents:true
    });  
};


