const addButton = document.querySelector(".add_note");


const form = document.querySelector('.form');
const input = document.querySelector('.input');


const noteSection = document.querySelector('.note_section');


const exitBtn = document.querySelector('.exit');
/* 
function createNote(){
   
    let note = document.createElement("div");
    note.classList.add("note");

    let titleSection = document.createElement("div");
    titleSection.classList.add("title_section");

    let exitBtn = document.createElement("button");
    exitBtn.classList.add("exit_btn");
    exitBtn.textContent = "back";

    let title = document.createElement("textarea");
    title.classList.add("title_stylings");
    title.setAttribute("wrap","off");
    title.setAttribute("maxlength","40");
    title.setAttribute("placeholder","Title");
    title.setAttribute("rows","1");

    titleSection.append(exitBtn, title);

  


    let content = document.createElement("textarea");
    content.classList.add("content_stylings");


    note.append(titleSection, content);

    noteSection.append(note);


    function exitNote(){
        note.classList.add("note_view");
        title.disabled = true;
        content.classList.add("content_view");
        content.disabled = true;
        exitBtn.classList.add("exit_btn_hidden");
        
    }exitBtn.addEventListener('click', exitNote);
            

   //  note use a conditional if statement that detects if the note is in general view mode
    function editNote(){
        note.classList.remove("note_view");
        title.readOnly = false;
        content.readOnly = false;
        exitBtn.classList.remove("exit_btn_hidden");

    }note.addEventListener('click', editNote);
   //
    
        noteSection.insertAdjacentHTML('beforeend',
            `
            <div class="note">
                <div class="title_section">
                    <button class="exit_btn">
                            back
                    </button>
                    <textarea class="title_stylings" wrap="off" maxlength="40" placeholder="Title" rows="1" ></textarea>
                </div>

                <textarea class="content_stylings" ></textarea>
            </div>
            `
        );
    

        

   

}addButton.addEventListener('click', createNote);
*/


let body = document.querySelector("body");

let keyValueSection = document.querySelector(".key_value_section");

let key = document.querySelector(".key");
let value = document.querySelector(".value");
let dateCreated = document.querySelector(".date_created");

let createBtn = document.querySelector(".create_btn");

/* tag section 
let tagSection = document.querySelector(".tag_section");
let tagModalBtn = document.querySelector(".tag_modal_button");

let tagModalSection = document.querySelector(".add_tag_modal");
let addedTags = document.querySelector(".added_tags");
let tagInput = document.querySelector(".tag_input");
let createNewTagBtn = document.querySelector(".create_new_tag_btn");
let saveTagsToNote = document.querySelector(".save_tags_btn");
*/



let SearchBtn = document.querySelector(".search_btn");

let searchBtnWrap = document.querySelector(".search_btn_wrap");


let addToLocalBtn = document.querySelector(".add_to_local_btn");

let modeBtn= document.querySelector('.mode_switch');

  let darkMode = localStorage.getItem("darkmode");
  let allBtns = document.querySelectorAll('button');

console.log(localStorage);

/* trying to add in custom navigation for arrow keys 

function focusArrowFunc(){
let focusedElement= document.activeElement;

console.log(focusedElement);
   // Check if any element is currently focused
  if (focusedElement=== document.body || focusedElement === null){
     // if No element is focused, find the first tabbable element
    let firstTabElement=  document.querySelector('a[href], button, input, select, textarea, [tabindex="0"]' // query any elements that are focusable or have tabindex=0; );

      if (firstTabElement) {
      firstTabElement.focus();
      console.log(focusedElement);
    }

      if (event.key== 'ArrowDown'){
    event.preventDefault();
    console.log('down arrow key pressed');
    //if()
    document.querySelector("[tabindex='0']").focus();

  }
    

  }
 /* 
  if (event.key== 'ArrowLeft'){
    event.preventDefault();
  const prevElement = focusedElement.previousElementSibling;
        if (prevElement && prevElement.tabIndex !== -1) {
            prevElement.focus();
            event.preventDefault();
        }
    console.log('left arrow key pressed');


  }

        if (event.key== 'ArrowRight'){
    event.preventDefault();
    console.log('right arrow key pressed');
     const nextElement = focusedElement.nextElementSibling;
     if (nextElement && nextElement.tabIndex !== -1) { // Check if it's focusable
            nextElement.focus();
            event.preventDefault(); // Prevent default browser behavior (e.g., scrolling)
        }
 //   document.querySelector("[tabindex='0']").focus();

  }


    if (event.key== 'ArrowUp'){
    event.preventDefault();
    console.log('up arrow key pressed');
    document.querySelector("[tabindex='0']").focus();

  }
      if (event.key== 'ArrowDown'){
    event.preventDefault();
    console.log('down arrow key pressed');
    //if()
    document.querySelector("[tabindex='0']").focus();

  }

 

}document.addEventListener('keydown', focusArrowFunc)

*/
function createNote(){
  keyValueSection.classList.remove("key_value_section_hidden");

  createBtn.classList.add("key_value_section_hidden");
}createBtn.addEventListener('click', createNote)

const searchNotes = document.querySelector(".searchbar");
const searchNotesBackBtn = document.querySelector(".search_back_btn");
const allNotes = document.querySelectorAll(".note_container");
/*
function j(){
allNotes.forEach((noteHeight)=>{
    
   let getTruncatedText = noteHeight.offsetHeight;
      console.log(getTruncatedText);
})
}
window.addEventListener('load', j)
*/
/* 
function SearchAppear(){
 searchNotes.classList.remove("hidden_searchbar");

  SearchBtn.classList.add("key_value_section_hidden");

  searchNotesBackBtn.classList.remove("key_value_section_hidden");
  
}SearchBtn.addEventListener('click', SearchAppear)
*/

function searchIconDisappear(){
  if (searchNotes === document.activeElement){
    searchBtnWrap.classList.add("hidden_class");
  } 
}searchNotes.addEventListener('click', searchIconDisappear)

function searchIconReappear(){
 const searchValue = searchNotes.value.trim();
  if (searchValue === ""){
    searchBtnWrap.classList.remove("hidden_class");
  } else {
    searchBtnWrap.classList.add("hidden_class");
  }
}searchNotes.addEventListener('blur', searchIconReappear)


//allTags=[];

function retrieveNotes(){
    testArray = JSON.parse(localStorage.getItem('allNotes'));

    if (testArray == null) {
        
        // If null, creates an empty array

        testArray = [];
    }

   /*
    if (tagObj == null) {
        
        // If null, creates an empty array
tagObj = {
    tagsArr:[]
   };
      
    }
   */

    let notes = { 
        id:  Math.floor(Math.random() * 100000),
        title: key.value,
        body: value.value,
       
    }

    

    console.log(testArray);
    testArray.forEach(noteData => {
   //  tempTags=[];
      
    //tagsArr=[];

      if(notes.tags == null ){
    notes.tags=[];
  }
   tempTags=[
     
   ];
    //tagsObj={};
      //  notes.tags= tagObj;

      
      let noteContainer = document.createElement("div");
          noteContainer.classList.add("note_container");
     /*     noteContainer.tabIndex=0;
          noteContainer.setAttribute('role', 'button');
*/
       
  
      let noteContainerWrap = document.createElement("div");
          noteContainerWrap.classList.add("note_container_preview_wrap");

      let noteDataTitleWrap = document.createElement("div");
          noteDataTitleWrap.classList.add("title_wrap_stylings", 'hidden');
     
      let noteDataSave = document.createElement("button");
          noteDataSave.classList.add("note_data_input_hidden");
          noteDataSave.innerHTML =
          `
          <svg fill="#000000" width="24" height="24" viewBox="0 0 52 52" class="download_icon_stylings" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">

<g data-name="Group 132" id="Group_132">

<path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z"/>

</g>

</svg>
          `
      
      let noteDataTitle = document.createElement("p");
          noteDataTitle.classList.add("title_stylings");
          noteDataTitle.innerHTML = noteData.title;

      let noteDataSelectedWrap = document.createElement("div");

      noteDataSelectedWrap.classList.add("note_data_selected_wrap","selected_btn_hidden");

       // let noteDataSelectedBack= document.createElement("button");


      //  let noteDataSelected = document.createElement("input");
      
      let noteDataCreated = document.createElement("p");
      noteDataCreated.classList.add("date_created", "hidden");
      noteDataCreated.textContent = "Created: " + noteData.createddate;

      let noteDataDownload = document.createElement("button");
      noteDataDownload.classList.add("hidden","download_btn");
      noteDataDownload.innerHTML =
      `
      <svg width="24px" height="24px" class="icon_stylings" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>

      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

      <g id="SVGRepo_iconCarrier"> <path opacity="0.5"  clip-rule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z" /> </g>

      </svg>
      `

      
      let noteDataSaveTitleWrap = document.createElement('div');
          noteDataSaveTitleWrap.classList.add("note_data_save_title_wrap");
          noteDataSaveTitleWrap.append(noteDataSave, noteDataTitle, noteDataDownload) 
      

       /*tag section*/
          
        let  tagSection = document.createElement("div");
             tagSection.classList.add("tag_section");

        let tagModalBtn = document.createElement('button');
            tagModalBtn.textContent = "Add Tag";
            tagModalBtn.classList.add("tag_section", /*'hidden'*/);

  
            tagSection.append(tagModalBtn);

         

        let addTagModal = document.createElement('div');
            addTagModal.classList.add("add_tag_modal", "hidden_class");

 
            let saveTagsWrap = document.createElement('div');
                saveTagsWrap.classList.add("save_tag_wrap");

               let saveTagsBtn = document.createElement('button');
                   saveTagsBtn.textContent = "save";
                   saveTagsBtn.classList.add("save_tags_btn");

            saveTagsWrap.append(saveTagsBtn)

            
            let addedTags = document.createElement('div');
                addedTags.classList.add("added_tags");


        /*
           const entries = Object.entries(noteData.tags);
           console.log(entries);
         */

  

                //  })
                
  

              /*
                let savedTag = document.createElement('span');
                    savedTag.classList.add("tags");
                    savedTag
                    savedTag.textContent = JSON.stringify(noteData.tags);
                    addedTags.append(savedTag);
                    console.log(savedTag);
              */
            
                
          


            let tagInput = document.createElement('input');
                tagInput.classList.add("tag_input");
                tagInput.placeholder= "enter tag";

            let createTagBtn = document.createElement('button');
                createTagBtn.textContent = "+";
                createTagBtn.classList.add("create_new_tag_btn");

              
        addTagModal.append(saveTagsWrap, addedTags, tagInput, createTagBtn)        
        /*end tag section*/

       
    //    noteDataSelected.type = "checkbox";

      /*
        let tagSection = document.createElement("div");
            tagSection.classList.add("add_tag_section");
 
 
            tagArr=[];

            let noteTag = document.createElement("div");
            noteTag.textContent=noteData.tags;

   
  
       let tagModalBtn = document.createElement("button");
             tagModalBtn.classList.add("add_tag_section");
             tagModalBtn.textContent= "add tags";

       //  let tagModalBtn = document.querySelector(".tag_modal_button");
            

        let modalTagSection = document.createElement("div");
          modalTagSection.classList.add("add_tag_section", "hidden");
         

       let tagsToBeAdded = document.createElement("div");

       let tagsInput = document.createElement("input");

       let addTagTo = document.createElement("button");
           addTagTo.textContent="add";

       let saveTags = document.createElement("button");
            saveTags.textContent="save";

      tagSection.append(noteTag);

       modalTagSection.append(tagsToBeAdded, tagsInput, addTagTo, saveTags);

           */
    //  noteDataSelectedWrap.append(noteDataSelected);
      
      noteDataTitleWrap.append(/*noteDataSelectedWrap,*/ noteDataSaveTitleWrap, noteDataCreated, /* tagSection, tagModalBtn, addTagModal */);
      

      let noteDataBodyWrap= document.createElement("div");
          noteDataBodyWrap.classList.add("body_wrap_stylings");

        
      let noteDataBody = document.createElement("div");
          noteDataBody.classList.add("body_stylings", "hidden_text");
          noteDataBody.innerHTML = noteData.htmlMarkup;

        //  let noteDataBodyEmptyDiv= document.createElement("div");
        //  noteDataBody.append(noteDataBodyEmptyDiv);

      let truncText = document.createElement("p");
          truncText.classList.add("truncated_text");
          truncText.textContent =  noteDataBody.textContent.slice(0, 275); /* + ('...')*/ // basic truncation
          //truncText.textContent =  noteDataBody.textContent;

         
    
   


      
      
     

     
  /*
   function truncateNote(){
      if (noteDataBody.textContent.length >= 120) {
        const truncText =  noteDataBody.textContent.slice(0, 120) + "...";
        noteDataBodyWrap.append(truncText)
          
      }
    }
  truncateNote();
  */
 /*
  let allCanvasElements = document.querySelectorAll('canvas');
  console.log(allCanvasElements)

  if(noteDataBody)
   allCanvasElements.forEach((canvass) => {
      canvass.remove();

   });
  */
 // removePreviousCanvas();
 
  if (noteData.drawingHistoryArr == null ) {
        noteData.drawingHistoryArr = [];
        
    }

   let drawingHistory=[];

      if (noteData.sessionDrawingHistory == null) {
        noteData.sessionDrawingHistory = [];

    }
      
      



       
        const drawingCanvas = document.createElement('canvas');
        drawingCanvas.classList.add('canvas_area', 'hidden' /*'hidden'*/);
      //  drawingCanvas.





        const ctx = drawingCanvas.getContext("2d");

       
        /*
        
        let isDrawing= false;
        let lastXPosition= 0;
        let lastYPosition= 0;

        ctx.strokeStyle = "black"; // Line color
        ctx.lineWidth = 2;         // Line thickness

        */

        let isDrawing = false;
        let lastXPosition = 0;
        let lastYPosition = 0;

       
/*
        const visibleCanvas = document.createElement('canvas');
              visibleCanvas.classList.add('visible_canvas', 'hidden');
              visibleCanvas.width = drawingCanvas.width;
              visibleCanvas.height = drawingCanvas.height;

       const visiblectx =  visibleCanvas.getContext('2d');
*/
        ctx.strokeStyle = "black"; // Line color
        ctx.lineWidth = 2;         // Line thickness

        
         ctx.clearRect(0, 0, 0, 0);
       drawingCanvas.width = drawingCanvas.clientWidth;
       drawingCanvas.height = drawingCanvas.clientHeight;

       //console.log(combdh);

/*
        drawingHistoryArr.forEach(stroke =>{
        if(stroke.length > 0){
          ctx.beginPath();
          ctx.moveTo(stroke[0].x, stroke[0].y);
           for (let i = 1; i < stroke.length; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();
        }
        });
        */
    //    let convertedImg= document.createElement('img'); 
      //  convertedImg.src = noteData.canvasDrawing;
     /*
        if (convertedImg.src = ''){
        return;
      } 
     */
     /*  
      convertedImg.onload = function(){
        
        ctx.drawImage(convertedImg, 0, 0);
        };
     */

      let ttLinkWrap= document.createElement('div');
        ttLinkWrap.classList.add('tt_link_wrap', 'tt_link_wrap_hidden'); 

        let ttLinkPreview = document.createElement('a');
            ttLinkPreview.classList.add('hidden');
            ttLinkPreview.href = '';
            ttLinkPreview.textContent = ttLinkPreview.href;

        let ttLinkEdit = document.createElement('button');
            ttLinkEdit.classList.add('hidden');
            ttLinkEdit.setAttribute('contenteditable', 'false');
            ttLinkEdit.textContent='Edit';  

        let ttLinkDelete = document.createElement('button');
            ttLinkDelete.classList.add('hidden');
            ttLinkDelete.setAttribute('contenteditable', 'false');
            ttLinkDelete.textContent='Remove';
         
        

        let ttLinkInput= document.createElement('input');
            ttLinkInput.placeholder='Please enter link'; 
        let ttLinkSave= document.createElement('button');
            ttLinkSave.setAttribute('contenteditable', 'false');
            ttLinkSave.textContent= 'Save';
        let ttLinkSaveEdit= document.createElement('button');
            ttLinkSaveEdit.classList.add('hidden');
            ttLinkSaveEdit.setAttribute('contenteditable', 'false');
            ttLinkSaveEdit.textContent= 'Save edit';    

       ttLinkWrap.append(ttLinkPreview, ttLinkEdit, ttLinkDelete, ttLinkInput, ttLinkSave, ttLinkSaveEdit);
      // noteDataBody.append(ttLinkWrap);

        noteDataBody.append(drawingCanvas); 

     noteDataBodyWrap.append(truncText,noteDataBody);



    

      let noteDataEditWrap = document.createElement('div');  
          noteDataEditWrap.classList.add("note_data_edit_btn_wrap");
           noteDataEditWrap.tabIndex=0;
          noteDataEditWrap.setAttribute('role', 'button');
          /*
          let noteDataEdit = document.createElement("button");
              noteDataEdit.classList.add("edit_btn");
              noteDataEdit.innerHTML=
              `
             <svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 85.333333C276.053333 85.333333 85.333333 276.053333 85.333333 512s190.72 426.666667 426.666667 426.666667 426.666667-190.72 426.666667-426.666667S747.946667 85.333333 512 85.333333m132.266667 216.32c5.973333 0 11.946667 2.133333 17.066666 6.826667l54.186667 54.186667c9.813333 9.386667 9.813333 24.32 0 33.28l-42.666667 42.666666-87.466666-87.466666 42.666666-42.666667c4.266667-4.693333 10.24-6.826667 16.213334-6.826667m-84.053334 74.24l87.893334 87.893334-258.56 258.56H301.653333v-87.893334l258.56-258.56z" fill="" /></svg>
              `;
          
                noteDataEditWrap.append(noteDataEdit)
        */
      let selectOptionsWrapper = document.createElement("div");
          selectOptionsWrapper.classList.add("note_data_input_hidden", "select_options_wrapper");
  
      let noteDeleteBtn = document.createElement("button");
          noteDeleteBtn.textContent = 'delete';
          noteDeleteBtn.classList.add( "note_data_input_hidden");

      let selectBtnBack = document.createElement("button");
          selectBtnBack.textContent = 'deselect';
          

      selectOptionsWrapper.append(selectBtnBack, noteDeleteBtn)


      let toolBar = document.createElement('div');
          //toolBar.classList.add("toolbar");
          toolBar.style.display='none';
          
          toolBar.classList.add('toolbar_stylings');
  
       // let modeToggle//

        let modeToggle= document.createElement('button');
          modeToggle.textContent='text mode';
  
        let bold = document.createElement('button');
            bold.innerHTML=
            `
            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg width="16px" class="icon_stylings" height="16px" viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z"/></svg>
            `
            bold.title='bold';
          
  
        let italic = document.createElement('button');    
            italic.innerHTML= 
            `
            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg  class="icon_stylings" width="16px" height="16px" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z"/></svg>
            `

        let underline = document.createElement('button');       
            underline.innerHTML= 
            `
            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg  class="icon_stylings" width="16px" height="16px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>
            `

        let strikethrough = document.createElement('button');
            strikethrough.innerHTML= 
          `
          <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
          <svg class="icon_stylings" width="16px" height="16px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z"/></svg>
          `

        let orderedlist = document.createElement('button');
           
            orderedlist.innerHTML=
            `

         <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg fill="#000000" class="icon_stylings" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="16px" height="16px" viewBox="0 0 381.304 381.304"
	 xml:space="preserve">
<g>
	<path d="M121.203,37.858c0-7.791,6.319-14.103,14.104-14.103H367.2c7.784,0,14.104,6.312,14.104,14.103
		s-6.312,14.103-14.104,14.103H135.307C127.522,51.961,121.203,45.649,121.203,37.858z M135.307,120.908h150.426
		c7.79,0,14.104-6.315,14.104-14.104c0-7.79-6.313-14.103-14.104-14.103H135.307c-7.785,0-14.104,6.307-14.104,14.103
		C121.203,114.598,127.522,120.908,135.307,120.908z M367.2,269.75H135.307c-7.785,0-14.104,6.312-14.104,14.104
		c0,7.79,6.319,14.103,14.104,14.103H367.2c7.784,0,14.104-6.312,14.104-14.103C381.304,276.062,374.984,269.75,367.2,269.75z
		 M285.727,338.693h-150.42c-7.785,0-14.104,6.307-14.104,14.104c0,7.79,6.319,14.103,14.104,14.103h150.426
		c7.79,0,14.104-6.312,14.104-14.103C299.836,345.005,293.517,338.693,285.727,338.693z M33.866,127.838h22.387V14.405H37.921
		c-0.521,5.925-0.068,10.689-4.696,14.277c-4.631,3.591-14.363,5.382-23.158,5.382H6.871v15.681h26.995V127.838z M25.603,345.147
		l28.115-20.912c9.69-6.655,16.056-12.826,19.109-18.524c3.05-5.697,4.569-11.821,4.569-18.377c0-10.716-3.585-19.357-10.737-25.941
		c-7.161-6.579-16.568-9.865-28.23-9.865c-11.245,0-20.241,3.328-26.982,9.989c-6.75,6.655-10.113,16.691-10.113,30.115H23.02
		c0-8.015,1.416-13.548,4.253-16.621c2.834-3.067,6.721-4.604,11.665-4.604s8.854,1.561,11.741,4.676
		c2.888,3.12,4.327,6.998,4.327,11.632c0,4.628-1.336,8.808-4.02,12.555c-2.675,3.747-10.125,10.071-22.352,18.962
		c-10.453,7.648-24.154,16.964-28.393,23.726L0,364.96h77.632v-19.813H25.603L25.603,345.147z"/>
</g>
</svg>

         
            `

        let unorderedlist = document.createElement('button');
           unorderedlist.textContent = 'unordered list'; 
              unorderedlist.innerHTML=
              `
              <svg class="icon_stylings" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
              </svg>
              `

        let createLinkBtn = document.createElement('button');
            createLinkBtn.textContent = 'create link';  
            createLinkBtn.innerHTML=
            `
             <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
              <svg fill="#000000" class="icon_stylings" width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"/>
              <path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z" />
              <path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z" />
              </svg>
            `
        let fontSize = document.createElement('div');
            
          
        let fontSizeOptions = document.createElement('select');
            fontSizeOptions.classList.add("fontsize_dropdown");

            fontSizeOptions.innerHTML=
            `

            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>  
            <option value="30">30</option>
            <option value="31">31</option>                  

            `;
            // <option value="${size.value}">${size.value}</option>
            fontSize.append(fontSizeOptions);

        let fontOptions= fontSizeOptions.options;


        let undoBtn =  document.createElement('button');
            undoBtn.classList.add("undo_btn");
             undoBtn.innerHTML=
             `
      <svg class="icon_stylings"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>
             `

        let redoBtn =  document.createElement('button');
        redoBtn.classList.add("redo_btn");
        redoBtn.textContent='redo';

        redoBtn.innerHTML=
        `
      <svg class="icon_stylings" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
      </svg>
        `



      /* 
        let textFomattingOptions = document.createElement('button');
            textFomattingOptions.innerHTML=
            `
            <?xml version="1.0" encoding="iso-8859-1"?>
            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              width="16px" height="16px" viewBox="0 0 977.7 977.7" xml:space="preserve"
              >
            <g>
              <path d="M770.7,930.6v-35.301c0-23.398-18-42.898-41.3-44.799c-17.9-1.5-35.8-3.1-53.7-5c-34.5-3.6-72.5-7.4-72.5-50.301L603,131.7
                c136-2,210.5,76.7,250,193.2c6.3,18.7,23.8,31.3,43.5,31.3h36.2c24.9,0,45-20.1,45-45V47.1c0-24.9-20.1-45-45-45H488.9h-0.2H45
                c-24.9,0-45,20.1-45,45v264.1c0,24.9,20.1,45,45,45h36.2c19.7,0,37.2-12.6,43.5-31.3c39.4-116.5,114-195.2,250-193.2l-0.3,663.5
                c0,42.9-38,46.701-72.5,50.301c-17.9,1.9-35.8,3.5-53.7,5c-23.3,1.9-41.3,21.4-41.3,44.799V930.6c0,24.9,20.1,45,45,45h236.8h0.3
                h236.7C750.5,975.6,770.7,955.401,770.7,930.6z"/>
            </g>
            </svg>
            `
      
            textFomattingOptions.classList.add("text_dropdown");
            */

       
         
           let scrollDiv= document.createElement('div');
           scrollDiv.classList.add('scroll_wrapper');

           let alignmentWrapper =  document.createElement('div');
           
         let textFomattingOptionsWrapper = document.createElement('div');
              textFomattingOptionsWrapper.classList.add('alignment_options', 'alignment_hidden');

            textFomattingOptionsWrapper.innerHTML=
            `
            <button id="left_align" class="align_btns">
              <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

              <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->

             <svg class="disable_pointer icon_stylings"  fill="#000000" version="1.1" id="Capa_1" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66.373 66.373" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)">

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <g> <g> <rect y="2.569" width="66.373" height="6"/> <rect x="15.917" y="16.377" width="50.456" height="6"/> <rect y="30.186" width="66.373" height="6"/> <rect x="15.917" y="43.995" width="50.456" height="6"/> <rect y="57.804" width="66.373" height="6"/> </g> </g> </g>

              </svg>
            </button>
            
            <button id="center_align" class="align_btns">
             <?xml version="1.0" encoding="iso-8859-1"?>
             
              <svg class="disable_pointer icon_stylings" fill="#000000" width="16px" height="16px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 66.373 66.373" xml:space="preserve">
              <g>
                <rect y="2.569" width="66.373" height="6"/>
                <rect x="7.959" y="16.502" width="50.456" height="6"/>
                <rect y="30.186" width="66.373" height="6"/>
                <rect x="7.959" y="44.12" width="50.456" height="6"/>
                <rect y="57.803" width="66.373" height="6"/>
              </g>
              </svg>
            </button>

            <button id="right_align" class="align_btns">
              <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

              <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
              <svg class="disable_pointer icon_stylings" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66.373 66.373" xml:space="preserve" 
              width="16px" height="16px">

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <g> <g> <rect y="2.569" width="66.373" height="6"/> <rect x="15.917" y="16.377" width="50.456" height="6"/> <rect y="30.186" width="66.373" height="6"/> <rect x="15.917" y="43.995" width="50.456" height="6"/> <rect y="57.804" width="66.373" height="6"/> </g> </g> </g>

              </svg>
            </button>
            `;

          
            currentAlignmentIcon = document.createElement('button');
            currentAlignmentIcon.classList.add('current_icon');
            currentAlignmentIcon.innerHTML=
            `
              <svg class="disable_pointer icon_stylings"  fill="#000000" version="1.1" id="Capa_1" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66.373 66.373" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)">

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <g> <g> <rect y="2.569" width="66.373" height="6"/> <rect x="15.917" y="16.377" width="50.456" height="6"/> <rect y="30.186" width="66.373" height="6"/> <rect x="15.917" y="43.995" width="50.456" height="6"/> <rect y="57.804" width="66.373" height="6"/> </g> </g> </g>

              </svg>
            `
          
            alignmentWrapper.append(currentAlignmentIcon, textFomattingOptionsWrapper);
          
            let codeblock = document.createElement('button');
                codeblock.textContent= 'codeblock'
            
         
     // textFomattingOptionsWrapper.append(fontSizeOptions);
  
      toolBar.append(/*modeToggle, // hiding mode toggle for now to add undo and redo and eraser functionality*/ bold, italic, underline, strikethrough, orderedlist, unorderedlist, fontSize, createLinkBtn, undoBtn, redoBtn, /*currentAlign,*/ alignmentWrapper /*textFomattingOptionsWrapper, currentAlignmentIcon*/);
  

      scrollDiv.append(toolBar)
    
      
 let previewTitle = document.createElement("p");
          previewTitle.classList.add("title_stylings", 'preview_title');
          previewTitle.textContent = noteDataTitle.textContent;
    
    noteContainerWrap.append(previewTitle, noteDataTitleWrap, noteDataBodyWrap, scrollDiv, noteDataEditWrap, selectOptionsWrapper, ttLinkWrap);
    
    noteContainer.append(noteContainerWrap);

    noteSection.append(noteContainer);

   

    
   // let getTruncatedText = truncText.getBoundingClientRect().height; // run AFTER appending element/elements to DOM;
    //console.log(getTruncatedText);
  
   
 
   
    /*
     let divoffsetHeight = noteContainer.offsetHeight; // run AFTER appending element/elements to DOM;
    console.log(divoffsetHeight);
    */ 
   /*
   if (getTruncatedText > 250){
      truncText.textContent.slice(0,-1);
   }
  */
   
    
 
   
/* 
  function titleCharLimit(event){
   let maxLength = 10;
   let titleLength = noteDataTitle.textContent.length;
  


   if(titleLength >= maxLength){
      event.preventDefault();
    noteDataTitle.textContent = noteDataTitle.textContent.slice(0, maxLength);
   }
  // console.log(titleLength);

  }noteDataTitle.addEventListener('keyup', titleCharLimit) 
   
  */


  
  const searchNotes = document.querySelector(".searchbar");
  const allNotes = document.querySelectorAll(".note_container");

  menuActive=false;
  currentLink = null;// currently tracked link

 function previewLink(){
   if(selection.rangeCount > 0){
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer;
      console.log(element);
 
       const parent = element.parentNode;
       const grandparent = parent.parentNode;

       console.log(element);
       console.log(element.parentNode);
      //  console.log(element.parentNode.href);
       console.log(parent.tagName.toLowerCase());

       if(/*element.parentNode.tagName.toLowerCase()*/ element.parentNode.tagName.toLowerCase() === 'a'){
      // let dataHref = element.parentNode.getAttribute('data-href');
      //  console.log(dataHref);
        let clickedLink = event.target;
          console.log(clickedLink);
          currentLink=clickedLink;
          menuActive=true;
         console.log(menuActive);
          if(menuActive){
        //  if(lastElementClicked && clickedLink === lastElementClicked){
          
        
              noteDataBody.append(ttLinkWrap);
          ttLinkWrap.classList.remove('tt_link_wrap_hidden');
          ttLinkPreview.classList.remove('hidden');
          ttLinkInput.classList.add('hidden');
        // ttLinkSave.classList.add('hidden');
        // ttLinkSaveEdit.classList.remove('hidden');


        
          let clickedLinkHref= clickedLink.href;
      
          ttLinkPreview.textContent = clickedLinkHref;

          ttLinkEdit.classList.remove('hidden');
        
          ttLinkDelete.classList.remove('hidden');

          ttLinkSave.classList.add('hidden');

          ttLinkSaveEdit.classList.add('hidden');

          // make an if statement inside this if statement to set menuActive to false if clicking outside of linkWrap div so linkWrap div won't linger.
            
  
              function editLink(){
                  //noteDataBody.append(ttLinkWrap);

                  ttLinkInput.classList.remove('hidden');
                
                  //ttLinkSave.classList.remove('hidden');
                  ttLinkSaveEdit.classList.remove('hidden');
                  ttLinkDelete.classList.add('hidden');
                  ttLinkEdit.classList.add('hidden');
                  ttLinkPreview.classList.add('hidden');
                      
                ttLinkInput.value = clickedLinkHref;
                ttLinkInput.focus();
                ttLinkInput.select();//select text on focus
              
              }ttLinkEdit.addEventListener('click', editLink)  
                
          

            /* start of editsave function
              function editSave(){
                console.log(element.parentNode.tagName.toLowerCase());
                if (element.parentNode.tagName.toLowerCase() === 'a'/* && clickedLinkHref.textContent === dataHref.textContent *///){
                  //  console.log(element.textContent);

                    /*element.parentNode.remove();
                    
                    let linkWrapper= document.createElement('a');
                    // linkWrapper.classList.add('link');
                    linkWrapper.href = ttLinkInput.value;
                    linkWrapper.textContent=element.textContent;
                    
                    let extractedContents = range.extractContents();

                    linkWrapper.append(extractedContents);
                    range.insertNode(linkWrapper);

                    // range.surroundContents(linkWrapper);

                    ttLinkWrap.classList.add('tt_link_wrap_hidden');
                  // noteDataBody.remove(ttLinkWrap);
                    
                    noteContainerWrap.append(ttLinkWrap)
                    ttLinkInput.value='';
                    noteDataBody.blur();
                    */
               //   clickedLink.href = ttLinkInput.value;
                //  element.parentNode.setAttribute('data-href', ttLinkInput.value);
                  //  clickedLink.href = ttLinkInput.value;
                  
/*
                    noteContainerWrap.append(ttLinkWrap);
                  
                    noteDataBody.blur();
                    console.log(element.parentNode.href);
                    ttLinkInput.innerHTML=''; // set textcontent, not value 
                    clickedLink='';
                    ttLinkEdit.classList.remove('hidden');
                    ttLinkPreview.classList.remove('hidden');
                }
*/

                  // 
          
                /*
                console.log(clickedLink)
                let newLink = document.createElement('a');
                clickedLink.href = ttLinkInput.value;

                ttLinkWrap.classList.add('tt_link_wrap_hidden');
                  // noteDataBody.remove(ttLinkWrap);
                    
                noteContainerWrap.append(ttLinkWrap);
                ttLinkInput.value='';
                noteDataBody.blur();
                console.log(element.parentNode.href);
                */
             // }ttLinkSaveEdit.addEventListener('click', editSave)
           // end of editsave function */
              function enterEditSave(){
                if(event.key === 'Enter'){
                  editSave();
                }
              }ttLinkInput.addEventListener('keydown', enterEditSave)

  //  }
                  // maybe get selection of currently selected link, remove the link it's currently wrapped in, 
                  // and create and wrap a new link around the text and save it using saveEdit button so it doesn't trigger the addLink function?
                  // Or getting the selection and just setting the href to the input instead? sounds easier and more efficient
          }
        //if menuActive is true, make linkwrap div clickable without it disappearing on click
       
      //  lastElementClicked=clickedLink;
       //  console.log(lastElementClicked);

      } else if(element.parentNode.tagName.toLowerCase() !== 'a' && !menuActive || !ttLinkWrap.contains(event.target) ){ // if parent tagname is not matching AND menusActive is false, remove || !event.target.closest(ttLinkWrap) /*!ttLinkWrap.contains(event.target)*/ 
           ttLinkWrap.classList.remove('tt_link_wrap_hidden');
            noteContainerWrap.append(ttLinkWrap);
            menuActive=false;

            console.log(menuActive);
      }

   } else if(ttLinkWrap.contains(event.target)){
      event.preventDefault();
   }
  

    
             
 
 }noteDataBody.addEventListener('click', previewLink)  

  function editSave(){
   // console.log(element.parentNode.tagName.toLowerCase());
    if (!currentLink  /*element.parentNode.tagName.toLowerCase() === 'a'*//* && clickedLinkHref.textContent === dataHref.textContent */)//{
        console.log(element.textContent);

        /*element.parentNode.remove();
        
        let linkWrapper= document.createElement('a');
        // linkWrapper.classList.add('link');
        linkWrapper.href = ttLinkInput.value;
        linkWrapper.textContent=element.textContent;
        
        let extractedContents = range.extractContents();

        linkWrapper.append(extractedContents);
        range.insertNode(linkWrapper);

        // range.surroundContents(linkWrapper);

        ttLinkWrap.classList.add('tt_link_wrap_hidden');
      // noteDataBody.remove(ttLinkWrap);
        
        noteContainerWrap.append(ttLinkWrap)
        ttLinkInput.value='';
        noteDataBody.blur();
        */
      currentLink.href = ttLinkInput.value;
    //  element.parentNode.setAttribute('data-href', ttLinkInput.value);
      //  clickedLink.href = ttLinkInput.value;
      

        noteContainerWrap.append(ttLinkWrap);
      
        noteDataBody.blur();
        //console.log(element.parentNode.href);
        ttLinkInput.innerHTML=''; // set textcontent, not value 
       // clickedLink='';
        ttLinkEdit.classList.remove('hidden');
        ttLinkPreview.classList.remove('hidden');
   // }


          // 
  
        /*
        console.log(clickedLink)
        let newLink = document.createElement('a');
        clickedLink.href = ttLinkInput.value;

        ttLinkWrap.classList.add('tt_link_wrap_hidden');
          // noteDataBody.remove(ttLinkWrap);
            
        noteContainerWrap.append(ttLinkWrap);
        ttLinkInput.value='';
        noteDataBody.blur();
        console.log(element.parentNode.href);
        */
  }ttLinkSaveEdit.addEventListener('click', editSave)

 /*
        function clickablelinkWrap(){
          if(!ttLinkWrap.contains(event.target)){
            menuActive=false;
            console.log('hey')
          }
        
        }ttLinkWrap.addEventListener('click', clickablelinkWrap)  
  
*/
 
   

function alignmentAppear() {
   currentAlignmentIcon.classList.add('active_toolbar_btn');
  textFomattingOptionsWrapper.classList.remove('alignment_hidden');// add if statement that changes backgrouond color of textFomattingOptionsWrapper to match the current mode
//  toolBar.append(currentAlignmentIcon);


 

  const btnPosition = event.target.getBoundingClientRect();
  console.log(btnPosition);

  textFomattingOptionsWrapper.style.bottom= `${34}px`;
  textFomattingOptionsWrapper.style.left= `${btnPosition.left}px`;

}currentAlignmentIcon.addEventListener('click', alignmentAppear)
  // toolBar.addEventListener('scroll', alignmentAppear)


function filterNotes(){
  let searchquery = searchNotes.value.trim().toLowerCase(); //trim() cuts whites space and tolowercase makes search query case insensitive

  //console.log(searchquery);

  
  allNotes.forEach(noteData => {
   // console.log(noteData); // logging out all data in testArray array
        noteData.style.display = 'block';
     //   noteData.note.style.color = "red";
    if (!noteData.textContent.toLowerCase().includes(searchquery)){
        noteData.style.display = 'none';
    }  

    
  

    
  })
  


}searchNotes.addEventListener('input', filterNotes);

function SearchBack(){
  searchNotes.classList.add("hidden_searchbar");
 
   SearchBtn.classList.remove("key_value_section_hidden");
 
   searchNotesBackBtn.classList.add("key_value_section_hidden");
      
   searchNotes.value=""; //set searchbar to empty string 
   
   filterNotes(); // runs function with empty string value from which refreshes results.
 }searchNotesBackBtn.addEventListener('click', SearchBack)


let longPress;
 function noteSelectedAppear(){ 

   if(noteContainer.classList.contains('selected_body_wrap_stylings' )){
    return console.log('Cannot select note while editing'); 
  } 

/*
  if(noteContainer.classList.contains('selected_note_container')){
    return console.log('Cannot select note while editing'); 
  } 
*/
/*
 // noteDataTitle.style.margin = '0rem 0rem 0rem 1rem';
 // noteDataSelected.classList.toggle('selected');
 // noteDataSelected.style.width = '35px';
  noteDataSelectedWrap.classList.remove("selected_btn_hidden");
  noteDeleteBtn.classList.remove("note_data_input_hidden");
  noteDataEdit.classList.add("hidden");
 // noteDataSelectedWrap.classList.remove("selected_btn_wrap");



  selectOptionsWrapper.classList.remove('note_data_input_hidden');
  */
  


longPress = setTimeout(() => {
  noteDataSelectedWrap.classList.remove("selected_btn_hidden");
  noteDeleteBtn.classList.remove("note_data_input_hidden");
  noteDataEditWrap.classList.add("hidden");
  selectOptionsWrapper.classList.remove('note_data_input_hidden');
  console.log("mousedown initiated");
}, 1000);



 }noteDataEditWrap.addEventListener('mousedown', noteSelectedAppear);
 noteDataEditWrap.addEventListener('touchstart', noteSelectedAppear)
  
  function noteDeselected(){ 
 // noteDataSelected.classList.remove("selected");
 // noteDataSelectedWrap.classList.add("selected_btn_hidden");
 clearTimeout(longPress);
  selectOptionsWrapper.classList.add('note_data_input_hidden');
   noteDataEditWrap.classList.remove("hidden");
}selectBtnBack.addEventListener('click', noteDeselected);
noteDataSave.addEventListener('click', noteDeselected);

 /*
 const lpImage = document.querySelector('.lp_img');
let longPress;
function selectionTimer(){
longPress = setTimeout(() => {
  console.log("mousedown initiated");
}, 8000);



}lpImage.addEventListener('mousedown', selectionTimer);

 */

/*
 function noteSelected(){ 
 noteDeleteBtn.classList.toggle("note_data_input_hidden");
  //selectOptionsWrapper.remove("note_data_input_hidden");
}noteDataSelected.addEventListener('dblclick', noteSelected)
*/

function dateAppear(){
 noteDataCreated.classList.remove("hidden");
}noteDataTitle.addEventListener('focus', dateAppear)


function dateDisappear(){
 noteDataCreated.classList.add("hidden");
}noteDataTitle.addEventListener('blur', dateDisappear)



/*
function clearTimer(){
clearTimeout(longPress);



}lpImage.addEventListener('mouseup', clearTimer);
*/
/*
  if (noteContainerWrap.classList.contains("note_container_preview_wrap")) {
    edit();
  } else{
    return
  }

*/

function ensureDiv(){
  if (noteDataBody.firstChild && noteDataBody.firstChild.nodeType === Node.TEXT_NODE){
    let noteDataBodyTextWrap= document.createElement("div");
        noteDataBodyTextWrap.append(noteDataBody.firstChild);
        noteDataBody.prepend(noteDataBodyTextWrap);
  }

}noteDataBody.addEventListener('input', ensureDiv)

 function wipeSessionDrawHistory(){
  noteData.sessionDrawingHistory=[];
  /*
     noteData.sessionDrawingHistory.forEach(sessionHistory =>{
          sessionHistory=[];
        })
  */
 }window.addEventListener('load', wipeSessionDrawHistory)

  function edit(){ 
      noteDataBody.focus();
         testArray = JSON.parse(localStorage.getItem('allNotes'));
     //  console.log(noteDataBody.textContent.length)
  /*
    console.log(combdh);
  
        console.log(noteData.drawingHistoryArr);
    
  let initializedh= [...noteData.drawingHistoryArr];
  console.log(initializedh);
    initializedh.forEach(stroke =>{
        if(stroke.length > 0){
          ctx.beginPath();
          ctx.moveTo(stroke[0].x, stroke[0].y);
           for (let i = 1; i < stroke.length; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();
             
        }
        });
      
*/
      body.classList.add("disable_body_scroll");
      noteContainerWrap.classList.remove("note_container_preview_wrap");
     
      noteContainerWrap.classList.add("note_container_wrap");
      noteDataEditWrap.classList.remove("note_data_edit_btn_wrap");
      noteContainer.classList.add("selected_note_container");
      noteDataDownload.classList.remove("hidden");
      noteDataTitleWrap.classList.add("note_data_title_wrap");
       noteDataTitleWrap.classList.remove('hidden');
      //noteDataCreated.classList.remove("hidden");
      noteDataBodyWrap.classList.add("selected_body_wrap_stylings");
      noteDataBody.classList.add("selected_body_stylings");
      noteDataBody.classList.remove("hidden_text");
      previewTitle.classList.add("hidden");
      truncText.classList.add("hidden_text");
      selectOptionsWrapper.style.display='none';
     // toolBar.classList.remove('note_data_input_hidden');
      toolBar.style.display='flex';

      createBtn.classList.add('key_value_section_hidden');
     
        

      let storedTitleValue = noteDataTitle.innerHTML;
      let storedBodyValue = noteDataBody.innerHTML;
  
     // noteDataTitle.classList.add("note_data_input_hidden");
     // noteDataBody.classList.add("note_data_input_hidden");
  
    noteDataTitle.setAttribute("contenteditable", "true");
    noteDataBody.setAttribute("contenteditable", "true");



     // noteDataTitleInput.classList.remove("note_data_input_hidden");
      noteDataTitle.value = storedTitleValue;
  
  
     // noteDataBodyInput.classList.remove("note_data_input_hidden");
      noteDataBody.value = storedBodyValue;
  
      noteDataSave.classList.add("note_data_input_active");
     
  
     // noteDataEdit.classList.add("note_data_input_hidden");
      
      noteDeleteBtn.classList.add("note_data_input_hidden");

     //  console.log(storedTitleValue);
     //  console.log(storedBodyValue);
   
    // toolBar.classList.remove('note_data_input_hidden');
     
    bold.classList.remove('note_data_input_hidden');
    italic.classList.remove('note_data_input_hidden');
    underline.classList.remove('note_data_input_hidden');
    strikethrough.classList.remove('note_data_input_hidden');

    if (event.key === 'Enter' || event.key === ' '){
      noteDataEditWrap.activeElement.click();
       noteDataBody.focus();
      
          
     //  console.log(noteDataBody.textContent.length)
  

 



      body.classList.add("disable_body_scroll");
      noteContainerWrap.classList.remove("note_container_preview_wrap");
     
      noteContainerWrap.classList.add("note_container_wrap");
      noteDataEditWrap.classList.remove("note_data_edit_btn_wrap");
      noteContainer.classList.add("selected_note_container");
      noteDataDownload.classList.remove("hidden");
      noteDataTitleWrap.classList.add("note_data_title_wrap");
      //noteDataCreated.classList.remove("hidden");
      noteDataBodyWrap.classList.add("selected_body_wrap_stylings");
      noteDataBody.classList.add("selected_body_stylings");
      noteDataBody.classList.remove("hidden_text");
      truncText.classList.add("hidden_text");
      selectOptionsWrapper.style.display='none';
     // toolBar.classList.remove('note_data_input_hidden');
      toolBar.style.display='flex';

      createBtn.classList.add('key_value_section_hidden');
     
        

      let storedTitleValue = noteDataTitle.innerHTML;
      let storedBodyValue = noteDataBody.innerHTML;
  
     // noteDataTitle.classList.add("note_data_input_hidden");
     // noteDataBody.classList.add("note_data_input_hidden");
  
    noteDataTitle.setAttribute("contenteditable", "true");
    noteDataBody.setAttribute("contenteditable", "true");



     // noteDataTitleInput.classList.remove("note_data_input_hidden");
      noteDataTitle.value = storedTitleValue;
  
  
     // noteDataBodyInput.classList.remove("note_data_input_hidden");
      noteDataBody.value = storedBodyValue;
  
      noteDataSave.classList.add("note_data_input_active");
     
  
     // noteDataEdit.classList.add("note_data_input_hidden");
      
      noteDeleteBtn.classList.add("note_data_input_hidden");

     //  console.log(storedTitleValue);
     //  console.log(storedBodyValue);
   
    // toolBar.classList.remove('note_data_input_hidden');
     
    bold.classList.remove('note_data_input_hidden');
    italic.classList.remove('note_data_input_hidden');
    underline.classList.remove('note_data_input_hidden');
    strikethrough.classList.remove('note_data_input_hidden');

    event.preventDefault();
    console.log('enter')
    };
  
  }noteDataEditWrap.addEventListener('click', edit);
 
  

  function tabedit(){ 
      if (event.key === 'Enter' || event.key === ' '){
    //  noteDataEditWrap.activeElement.click();
       noteDataBody.focus();
      
          
     //  console.log(noteDataBody.textContent.length)
  

 



      body.classList.add("disable_body_scroll");
      noteContainerWrap.classList.remove("note_container_preview_wrap");
     
      noteContainerWrap.classList.add("note_container_wrap");
      previewTitle.classList.add("hidden");
      noteDataEditWrap.classList.remove("note_data_edit_btn_wrap");
      noteContainer.classList.add("selected_note_container");
      noteDataDownload.classList.remove("hidden");
      noteDataTitleWrap.classList.add("note_data_title_wrap");
      noteDataTitleWrap.classList.remove("hidden");
      //noteDataCreated.classList.remove("hidden");
      noteDataBodyWrap.classList.add("selected_body_wrap_stylings");
      noteDataBody.classList.add("selected_body_stylings");
      noteDataBody.classList.remove("hidden_text");
      truncText.classList.add("hidden_text");
      selectOptionsWrapper.style.display='none';
     // toolBar.classList.remove('note_data_input_hidden');
      toolBar.style.display='flex';

      createBtn.classList.add('key_value_section_hidden');
     
        

      let storedTitleValue = noteDataTitle.innerHTML;
      let storedBodyValue = noteDataBody.innerHTML;
  
     // noteDataTitle.classList.add("note_data_input_hidden");
     // noteDataBody.classList.add("note_data_input_hidden");
  
    noteDataTitle.setAttribute("contenteditable", "true");
    noteDataBody.setAttribute("contenteditable", "true");



     // noteDataTitleInput.classList.remove("note_data_input_hidden");
      noteDataTitle.value = storedTitleValue;
  
  
     // noteDataBodyInput.classList.remove("note_data_input_hidden");
      noteDataBody.value = storedBodyValue;
  
      noteDataSave.classList.add("note_data_input_active");
     
  
     // noteDataEdit.classList.add("note_data_input_hidden");
      
      noteDeleteBtn.classList.add("note_data_input_hidden");

     //  console.log(storedTitleValue);
     //  console.log(storedBodyValue);
   
    // toolBar.classList.remove('note_data_input_hidden');
     
    bold.classList.remove('note_data_input_hidden');
    italic.classList.remove('note_data_input_hidden');
    underline.classList.remove('note_data_input_hidden');
    strikethrough.classList.remove('note_data_input_hidden');

    event.preventDefault();
    console.log('enter')
    };
  
  }
  noteDataEditWrap.addEventListener('keydown', tabedit);
  
 function handwritingMode(){
    drawingCanvas.classList.toggle('hidden');
    canvasResize();

  }modeToggle.addEventListener('click', handwritingMode);

  function boldFunction(){ 
    noteDataBody.focus();
    document.execCommand('bold', false, null);
    


    const isBoldActive = document.queryCommandState('bold');
   
    
 
    /* 
    switch(isBoldActive) {
      case true:     
          bold.classList.add("active_class");
          console.log("bold class is active");
          break;
      case false:
        bold.classList.remove("active_class"); 
        console.log("bold class is inactive");
        break;
      default:
        return "?";
    }
        */

  }bold.addEventListener('click', boldFunction);
 
  function italicFunction(){ 
    noteDataBody.focus();
    document.execCommand('italic', false, null);
  
    
     const isItalicActive = document.queryCommandState('italic');
   
 
    switch(isItalicActive) {
      case true:     
          italic.classList.add("active_class");
          console.log("italic class is active");
          break;
      case false:
        italic.classList.remove("active_class"); 
        console.log("italic class is inactive");
        break;
      default:
        return "?";
    }


  }italic.addEventListener('click', italicFunction);
 
  function underlineFunction(){ 
    noteDataBody.focus();
    document.execCommand('underline', false, null);
    underline.classList.toggle("active_class");
    
  }underline.addEventListener('click', underlineFunction);
 
  function strikethroughFunction(){ 
    noteDataBody.focus();
    document.execCommand('strikethrough', false, null);
    strikethrough.classList.toggle("active_class");
  }strikethrough.addEventListener('click', strikethroughFunction);

  function orderedlistFunction(){ 
    noteDataBody.focus();
    document.execCommand('insertOrderedList', false, null);
    orderedlist.classList.toggle("active_class");
  }orderedlist.addEventListener('click', orderedlistFunction);

  function unorderedlistFunction(){ 
    noteDataBody.focus();
    document.execCommand('insertUnorderedList', false, null);
    unorderedlist.classList.toggle("active_class");
  }unorderedlist.addEventListener('click', unorderedlistFunction);

  function addLink(){ 
    //noteDataBody.focus();
    /* 
    let url= prompt("Enter url");
    if(url){
      document.execCommand("createLink", false, url);
    }
    */
     if(selection.rangeCount > 0){
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer;
      console.log(element);
       console.log(element.textContent);
 
       const parent = element.parentNode;
      // const grandparent = parent.parentNode;
      
        ttLinkWrap.classList.remove('tt_link_wrap_hidden');
        noteDataBody.append(ttLinkWrap);
          ttLinkInput.classList.remove('hidden');
          ttLinkSave.classList.remove('hidden');

          ttLinkEdit.classList.add('hidden');
          ttLinkDelete.classList.add('hidden');
        ttLinkInput.focus();

       function saveLink(){ 
       
/*
        if(element.parentNode.tagName.toLowerCase() === 'a'){
                console.log('parent element already a link!')
                console.log(element.textContent);
            
                element.parentNode.href = ttLinkInput.value;
                //linkWrapper.textContent=element.textContent;
                
                //let extractedContents = range.extractContents();

              //  linkWrapper.append(extractedContents);
                //range.insertNode(linkWrapper);

                // range.surroundContents(linkWrapper);

                ttLinkWrap.classList.add('tt_link_wrap_hidden');
               // noteDataBody.remove(ttLinkWrap);
                
                noteContainerWrap.append(ttLinkWrap)
                ttLinkInput.value='';
                noteDataBody.blur();
              } else{ */
        let linkWrapper= document.createElement('a');
          //linkWrapper.classList.add('link');
         linkWrapper.href = ttLinkInput.value;
           // linkWrapper.setAttribute('data-href', ttLinkInput.value);

        let extractedContents = range.extractContents();

        linkWrapper.append(extractedContents);
        range.insertNode(linkWrapper);

        // range.surroundContents(linkWrapper);

         ttLinkWrap.classList.add('tt_link_wrap_hidden');
       // noteDataBody.remove(ttLinkWrap);
        
        noteContainerWrap.append(ttLinkWrap)
        ttLinkInput.innerHTML='';
        noteDataBody.blur();
         //     }
        
       }ttLinkSave.addEventListener('click', saveLink);

       function saveLinkEnter(){
              if(event.key === 'Enter'){
                saveLink();
              }
            }ttLinkInput.addEventListener('keydown', saveLinkEnter)


      /*
      if(event.key === 'Enter'){
       
      }
       */
    }

    /*
      if(selection.rangeCount > 0){
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer;
      console.log(element);
       console.log(element.textContent);
 
       const parent = element.parentNode;
      // const grandparent = parent.parentNode;
      
        ttLinkWrap.classList.remove('tt_link_wrap_hidden');

       function saveLink(){ 
         let linkWrapper= document.createElement('a');
         linkWrapper.href= ttLinkInput.textContent;

         //linkWrapper.append(element);
         //noteDataBody.append(linkWrapper);

         range.surroundContents(linkWrapper);

         ttLinkWrap.classList.add('tt_link_wrap_hidden');
       // noteDataBody.remove(ttLinkWrap);
        

       }ttLinkSave.addEventListener('click', saveLink);


       
    }
    */

  }createLinkBtn.addEventListener('click', addLink);
 
  
  function undo(){
    noteDataBody.focus();
    
    document.execCommand('undo', false, null);
  
    
  }undoBtn.addEventListener('click', undo);

  function redo(){
    noteDataBody.focus();
    
    document.execCommand('redo', false, null);
  
    
  }redoBtn.addEventListener('click', redo);


 /*
  function fontSizeFunction(){ 
   
   const selectedFontSize =  fontSizeOptions.value;

   const selection = window.getSelection();
    // const selectedText = selection.toString();
    // console.log(selectedText);
     if (!selection || selection.rangeCount === 0) return;

    const range= selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontSize = selectedFontSize;
    span.appendChild(range.extractContents());
       range.deleteContents();
    range.insertNode(span);
    //selection.removeAllRanges();
  
     let parentSpan = span.parentElement;
    if (parentSpan.tagName === 'SPAN' || 'DIV') {
        parentSpan.innerHTML= span.innerHTML;
      
    }

    
     const range= selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontSize= selectedFontSize;
    span.appendChild(range.extractContents());
    range.insertNode(span);
    selection.removeAllRanges();
    
     

    // strikethrough.classList.toggle("active_class");
  }fontSizeOptions.addEventListener('change', fontSizeFunction);
*
  /* 
  function modalSectionFunction(){ 
   modalTagSection.classList.remove("hidden");
  }tagModalBtn.addEventListener('click', modalSectionFunction);
  */
/* 
  function addTagToLocal(){ 
   const newTag = document.createElement('span');
         newTag.classList.add("tag"); 
         newTag.textContent = tagsInput.value;

         tagArr.push(newTag.textContent);

   tagSection.append(newTag);

   tagsInput.value="";

   console.log(testArray);
  }addTagTo.addEventListener('click', addTagToLocal);
  */
/* 
  function saveTagsToLocal(){
    
  }saveTags.addEventListener('click', saveTagsToLocal);
 */
 
   function TextFormattingFunction(){ 
    let selection = window.getSelection();
   

    if(selection.rangeCount > 0){
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer;
      console.log(element);
 
       const parent = element.parentNode;
       const grandparent = parent.parentNode;



let closestDiv = parent.closest('div');

        switch(event.target.id) {
    case 'left_align':     
      if(element.nodeType === Node.TEXT_NODE && element.parentNode.tagName === 'b' || 'i' || 'u' || 'strike'){
      closestDiv.classList.add('text_align_left');
      
      closestDiv.classList.remove('text_align_center');
      closestDiv.classList.remove('text_align_right');
      closestDiv.classList.remove('text_align_justify');
     
     } else{
        element.classList.add('text_align_left');

        element.classList.remove('text_align_center');
        element.classList.remove('text_align_right');
        element.classList.remove('text_align_justify');
     }
      console.log('text is left aligned');
      //event.target.style.textAlign ='left';
      break;
    case 'center_align':   
    
      if(element.nodeType === Node.TEXT_NODE && element.parentNode.tagName === 'b' || 'i' || 'u' || 'strike'){

     

     

      closestDiv.classList.add('text_align_center');

      closestDiv.classList.remove('text_align_left');
      closestDiv.classList.remove('text_align_right');
      closestDiv.classList.remove('text_align_justify');

     } else {
      element.parentNode.classList.add('text_align_center');

      element.parentNode.classList.remove('text_align_left');
      element.parentNode.classList.remove('text_align_right');
      element.parentNode.classList.remove('text_align_justify');
      

     
     }
      console.log('text is center aligned');
      break;
    case 'right_align':     

      if(element.nodeType=== Node.TEXT_NODE && element.parentNode.tagName === 'b' || 'i' || 'u' || 'strike'){
      closestDiv.classList.add('text_align_right');

      closestDiv.classList.remove('text_align_left');
      closestDiv.classList.remove('text_align_center');
      closestDiv.classList.remove('text_align_justify');
      
     } else{
        element.classList.add('text_align_right');

        element.classList.remove('text_align_left');
        element.classList.remove('text_align_center');
        element.classList.remove('text_align_justify');
     }
      console.log('text is right aligned');
      break;
    default:
      return "?";
  }

      

    }

  

   
 
  }textFomattingOptionsWrapper.addEventListener('click', TextFormattingFunction);

 
  
  //activeNoteAlignment = false;
  function activeAlignment(){
   //  let selection = window.getSelection();
    allAlignmentIcons= document.querySelectorAll('.current_icon');
   let left = document.getElementById('left_align');
   let center = document.getElementById('center_align');
   let right = document.getElementById('right_align');
  // activeNoteAlignment=true;
   if(selection.rangeCount > 0 && !ttLinkWrap.contains(event.target)){
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer;
      console.log(element);
 
      const parent = element.parentNode;
      const grandparent = parent.parentNode;

  
      allAlignmentIcons.forEach((currentIcon)=>{


      let closestDiv = parent.closest('div');
          if(parent.closest('.text_align_left') || !parent.closest('.text_align_left, .text_align_center, .text_align_right')){
            console.log('left-align active');
        //  let left = document.getElementById('left_align');
           /* left.classList.add('active_text_align');
             right.classList.remove('active_text_align');
              center.classList.remove('active_text_align');*/
          // currentIcon.textContent="left-aligned"
            
           // currentIcon.
            currentIcon.innerHTML=
            `
            <svg class="disable_pointer icon_stylings current_alignment"  fill="#000000" version="1.1" id="Capa_1" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66.373 66.373" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)">

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <g> <g> <rect y="2.569" width="66.373" height="6"/> <rect x="15.917" y="16.377" width="50.456" height="6"/> <rect y="30.186" width="66.373" height="6"/> <rect x="15.917" y="43.995" width="50.456" height="6"/> <rect y="57.804" width="66.373" height="6"/> </g> </g> </g>

            </svg>
            `;

          
          } else if(parent.closest('.text_align_center')){
            console.log('center-align active');
        //  let center = document.getElementById('center_align');
           // center.classList.add('active_text_align');
            // left.classList.remove('active_text_align');
            // right.classList.remove('active_text_align');
             
            //  currentIcon.textContent="center-aligned"
              
            //currentIcon
            currentIcon.innerHTML=
            `
          <svg class="disable_pointer icon_stylings current_alignment" fill="#000000" width="16px" height="16px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 66.373 66.373" xml:space="preserve">
                    <g>
                      <rect y="2.569" width="66.373" height="6"/>
                      <rect x="7.959" y="16.502" width="50.456" height="6"/>
                      <rect y="30.186" width="66.373" height="6"/>
                      <rect x="7.959" y="44.12" width="50.456" height="6"/>
                      <rect y="57.803" width="66.373" height="6"/>
                    </g>
          </svg>
            `;
            
          } else if(parent.closest('.text_align_right')){
            console.log('right-align active');
        //  let right = document.getElementById('right_align');
          /*  right.classList.add('active_btns');
             center.classList.remove('active_text_align');
             left.classList.remove('active_text_align');
             */
           // currentIcon
            currentIcon.innerHTML=
            `
            <svg class="disable_pointer icon_stylings current_alignment" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66.373 66.373" xml:space="preserve" 
                  width="16px" height="16px">

                  <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                  <g id="SVGRepo_iconCarrier"> <g> <g> <rect y="2.569" width="66.373" height="6"/> <rect x="15.917" y="16.377" width="50.456" height="6"/> <rect y="30.186" width="66.373" height="6"/> <rect x="15.917" y="43.995" width="50.456" height="6"/> <rect y="57.804" width="66.373" height="6"/> </g> </g> </g>

              </svg>
            `;
          }
          });
      }  else if( event.target === ttLinkWrap){
        console.log("active Alignment function cancelled for this element");
        //stopPropagation();
        return;
   }
  
   
  }noteDataBody.addEventListener('click', activeAlignment);
   textFomattingOptionsWrapper.addEventListener('click', activeAlignment);


   function activeFormatting(){
    if(selection.rangeCount > 0 && !ttLinkWrap.contains(event.target)){
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer;
      console.log(element);
 
       const parent = element.parentNode;
       const grandparent = parent.parentNode;

       console.log(element);
       console.log(element.parentNode);
       console.log(parent.tagName.toLowerCase());


       /*
         if(element.nodeType === Node.TEXT_NODE && parent.tagName.toLowerCase() === 'b'){
        bold.classList.add("active_class");
        
        if(parent.tagName.toLowerCase() === 'b' && grandparent.tagName.toLowerCase() === 'i' || 'u' || 'strike' ){
            bold.classList.add("active_class");
        }
*/

 const isBoldActive = document.queryCommandState('bold');
  const isItalicActive = document.queryCommandState('italic');
   const isUnderlineActive = document.queryCommandState('underline');
    const isStrikethroughActive = document.queryCommandState('strikethrough');
   
      // let closestDiv = parent.closest('div');
      if(isBoldActive){
        bold.classList.add("active_class");
        console.log(isBoldActive);

      }else if(!isBoldActive){
        bold.classList.remove("active_class");
      }

      if(isItalicActive){
        italic.classList.add("active_class");
       
  
      }else if(!isItalicActive){
        italic.classList.remove("active_class");
      }

      if(isUnderlineActive){
        underline.classList.add("active_class");
       
  
      }else if(!isUnderlineActive){
        underline.classList.remove("active_class");
      }

      if(isStrikethroughActive){
        strikethrough.classList.add("active_class");
       
  
      }else if(!isStrikethroughActive){
        strikethrough.classList.remove("active_class");
      }

        
      
    }
   }noteDataBody.addEventListener('click', activeFormatting);
   
   let currentStroke = [];
/* Start of all functions related to canvas*/
    let combdh=[];
   drawingCanvas.addEventListener('mousedown', (e) => {
    isDrawing= true;
    currentStroke=[];
    [lastXPosition, lastYPosition]= [e.offsetX, e.offsetY];
  const x=e.offsetX;
  const y=e.offsetY;
    currentStroke.push({x,y});
    ctx.beginPath();
    ctx.moveTo(x,y);
    console.log(currentStroke);

   });

   drawingCanvas.addEventListener('touchstart', (e) => {
    isDrawing= true;
       event.preventDefault();
    currentStroke=[];
    [lastXPosition, lastYPosition]= [e.offsetX, e.offsetY];
  const x=e.offsetX;
  const y=e.offsetY;
    currentStroke.push({x,y});
    ctx.beginPath();
    ctx.moveTo(x,y);
    console.log(currentStroke);

   });

    drawingCanvas.addEventListener('mousemove', (e)=> {
      if(!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastXPosition, lastYPosition); // Starts path from the last known point
    ctx.lineTo(e.offsetX, e.offsetY); // Draws a line to the current mouse position
    ctx.stroke();

    [lastXPosition, lastYPosition] = [e.offsetX, e.offsetY];

   const x=e.offsetX;
   const y=e.offsetY;
    currentStroke.push({x,y});
    ctx.lineTo(x,y);
    ctx.stroke();
  //  console.log(currentStroke);
   });

       drawingCanvas.addEventListener('touchmove', (e)=> {
      if(!isDrawing) return;
    event.preventDefault();
    ctx.beginPath();
    ctx.moveTo(lastXPosition, lastYPosition); // Starts path from the last known point
    ctx.lineTo(e.offsetX, e.offsetY); // Draws a line to the current mouse position
    ctx.stroke();

    [lastXPosition, lastYPosition] = [e.offsetX, e.offsetY];

   const x=e.offsetX;
   const y=e.offsetY;
    currentStroke.push({x,y});
    ctx.lineTo(x,y);
    ctx.stroke();
  //  console.log(currentStroke);
   });

   
/*
   drawingCanvas.addEventListener("mouseup", () => {
     isDrawing = false;

    testArray = JSON.parse(localStorage.getItem('allNotes'));
    console.log(noteData.canvasDrawing);
   
       
    
    

    //noteData.canvasDrawing='';
     
    let newdataURL = drawingCanvas.toDataURL('image/png');
//drawingCanvas.remove();

    let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    if (testArrayIndex !== findNoteId) {
       //  testArray[testArrayIndex].tempDrawing = dataURL;
        testArray[testArrayIndex].canvasDrawing = newdataURL;

      //  testArray[testArrayIndex].tags = tagArr;
      // console.log("todo changed!"); 
      
    }
    
    localStorage.setItem('allNotes', JSON.stringify(testArray));

    //redrawCanvas()
     console.log(testArray);
     console.log(localStorage);
     console.log(noteData.canvasDrawing);
   //   noteDataBody.append(drawingCanvas);
   
   //saveNote();
    console.log('canvas saved');
});
*/
 
let combie;
  function saveDrawing(){
testArray = JSON.parse(localStorage.getItem('allNotes'));
    isDrawing = false;

   


    
   // console.log(noteData.canvasDrawing);
   
  
       
     drawingHistory.push(currentStroke);
    console.log(drawingHistory);
  //  testArray.push(drawingHistory)
    

 

 let dhArray = noteData.drawingHistoryArr;

 tempSession= noteData.sessionDrawingHistory;
 //console.log(dhArray);
 console.log(drawingHistory)
 //noteData.drawingHistoryArr.push(drawingHistory); 
 
    dhArray.push(...drawingHistory);// using spread (...) with push prevents nesting (forgot that...).  //combinedDrawingHistory =   dhArray.push(drawingHistory);
   tempSession.push(...drawingHistory); //combinedSessionHistory = tempSession.concat(drawingHistory);
    //noteData.drawingHistoryArr.push(drawingHistory); // maybe set up a two step push method like currentStroke => drawingHistory=> drawingHistoryArr. with => meaning push 

 // console.log(combinedDrawingHistory);

    let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    if (testArrayIndex !== findNoteId) {
      //  testArray[testArrayIndex].tempDrawing = dataURL;
      //  testArray[testArrayIndex].canvasDrawing = newdataURL;
        testArray[testArrayIndex].sessionDrawingHistory = tempSession;
        testArray[testArrayIndex].drawingHistoryArr = dhArray; //combinedDrawingHistory;
      
      // console.log("todo changed!"); 
      
    }
    //  drawingHistory=[];


    // maybe restructure the combineddrawinghistory array to push instead of using concat.
    //  or see if trying noteData.drawingHistoryArr.push(drawingHistory); works then clearing the drawhistory after saving from mouseout;
    // Use drawingHistory array as a container to transport things to and from that u have to "clean" after each use. 
    
    
    

  
     console.log(testArray);
     console.log(localStorage);
     console.log(noteData.drawingHistoryArr);
     console.log(noteData.sessionDrawingHistory);
    // console.log(noteData.drawingHistoryArr);
   // // console.log(combinedDrawingHistory);
   //   noteDataBody.append(drawingCanvas);
   
// //  let combdh = [...combinedDrawingHistory];

//console.log(combdh)
//combie= combdh;
//console.log(combie)
//drawingHistory=[];
  // console.log(noteData.canvasDrawing);
  
localStorage.setItem('allNotes', JSON.stringify(testArray));
   ctx.clearRect(0, 0,  drawingCanvas.width,  drawingCanvas.height);
       drawingCanvas.width = drawingCanvas.clientWidth;
       drawingCanvas.height = drawingCanvas.clientHeight;

      

      dhArray.forEach(stroke =>{
        if(stroke.length > 0){
          ctx.beginPath();
          ctx.moveTo(stroke[0].x, stroke[0].y);
           for (let i = 1; i < stroke.length; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();
        }
        });

        /*
         combinedDrawingHistory.forEach(stroke =>{
        if(stroke.length > 0){
          ctx.beginPath();
          ctx.moveTo(stroke[0].x, stroke[0].y);
           for (let i = 1; i < stroke.length; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();
        }
        });
        */
 console.log(noteData.sessionDrawingHistory);
 console.log(noteData.drawingHistoryArr);

       /* 
       let newConvertedImg = document.createElement('img');
       
    newConvertedImg.src = newdataURL;

       
        
      newConvertedImg.onload = function(){
         
            ctx.drawImage(newConvertedImg, 0, 0);
      };
      */
  /*
   let newConvertedImg = document.createElement('img');
        newConvertedImg.src = noteData.canvasDrawing;

         newConvertedImg.onload = function(){
          //  ctx.clearRect(0, 0, 0, 0);
            ctx.drawImage(newConvertedImg, 0, 0);
        };
  */
   //saveNote();
    console.log('canvas saved');
  // redrawCanvas();
  drawingHistory=[];
  console.log(drawingHistory);

  }drawingCanvas.addEventListener("mouseup", saveDrawing);
//  window.addEventListener('resize', saveDrawing)

drawingCanvas.addEventListener("mouseout", () => {
    isDrawing = false; // Stop drawing if mouse leaves the canvas
});


//combdh= combinedDrawingHistory;
let resizeTimer;
function canvasResize(){
  testArray = JSON.parse(localStorage.getItem('allNotes'));
  console.log(testArray);
 
/*
   let dhArray= noteData.drawingHistoryArr;
 console.log(dhArray);
 let combinedDrawingHistory = dhArray.concat(drawingHistory);
  console.log(combinedDrawingHistory);


    let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    if (testArrayIndex !== findNoteId) {
      
     
      testArray[testArrayIndex].drawingHistoryArr = combinedDrawingHistory;
      // testArray[testArrayIndex].tags = tagArr;
      // console.log("todo changed!"); 
      
    }
*/
  clearTimeout(resizeTimer);
 resizeTimer = setTimeout(() => {
          let canvasWidth = drawingCanvas.clientWidth; // display size of canvas width in pixels
   let canvasHeight = drawingCanvas.clientHeight; // display size of canvas height in pixels
       console.log(canvasWidth);
       console.log(canvasHeight);
   let dpr = window.devicePixelRatio || 1;
       console.log(dpr);



   drawingCanvas.width = canvasWidth * dpr;
   drawingCanvas.height = canvasHeight * dpr;

   ctx.scale(dpr,dpr);
   
    redrawCanvas();    
}, 500);

  

   function redrawCanvas(){
  //  testArray = JSON.parse(localStorage.getItem('allNotes'));
  //  testArray = JSON.parse(localStorage.getItem('allNotes'));
        ctx.clearRect(0, 0,  drawingCanvas.width,  drawingCanvas.height);
       drawingCanvas.width = drawingCanvas.clientWidth;
       drawingCanvas.height = drawingCanvas.clientHeight;

  /*
console.log(combdh);
      //console.log(noteData.drawingHistoryArr);

        combdh.forEach(stroke =>{
        if(stroke.length > 0){
          ctx.beginPath();
          ctx.moveTo(stroke[0].x, stroke[0].y);
           for (let i = 1; i < stroke.length; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();
        }
      });
     */   

     testArray = JSON.parse(localStorage.getItem('allNotes'));
     //  console.log(noteDataBody.textContent.length)
   //localStorage.setItem('allNotes', JSON.stringify(testArray));
   // console.log(combdh);
    
        
       // console.log(Array.isArray(noteData.drawingHistoryArr));
   // let newwy=[];
   // let initializeD = newwy.concat(noteData.drawingHistoryArr);
  let initializeD = [...noteData.drawingHistoryArr];
  //console.log(initializeD);
 console.log(noteData.drawingHistoryArr);
    // console.log(combie)
     console.log(testArray)
 //    console.log(combdh);
  //   console.log(Array.isArray(combdh));
 //  console.log(combdh);
testArray = JSON.parse(localStorage.getItem('allNotes'));
//let dhArray= noteData.drawingHistoryArr;

    initializeD.forEach(stroke =>{
        if(stroke.length > 0 /* || stroke.length === 0*/){
          ctx.beginPath();
          ctx.moveTo(stroke[0].x, stroke[0].y);
           for (let i = 1; i < stroke.length; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();
             
        }
        });

        let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    /*
    if (testArrayIndex !== findNoteId) {
      console.log('this notes id is ' + findNoteId);
      //  testArray[testArrayIndex].tempDrawing = dataURL;
      //  testArray[testArrayIndex].canvasDrawing = newdataURL;
     //  console.log(testArray[testArrayIndex].id);
      // console.log(noteData.id)
    }
    */

        
        //this forEach is for the current drawing session(draws all strokes from drawingHistory)
        console.log(drawingHistory);
        shallowArr=[...drawingHistory];
        console.log(shallowArr);
        console.log(noteData.sessionDrawingHistory);

         drawingHistory.forEach(stroke =>{ 
        if(stroke.length > 0){
          ctx.beginPath();
          ctx.moveTo(stroke[0].x, stroke[0].y);
           for (let i = 1; i < stroke.length; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();
             
        }
        });


   
/*
            combie.drawingHistoryArr.forEach(stroke =>{
        if(stroke.length > 0){
          ctx.beginPath();
          ctx.moveTo(stroke[0].x, stroke[0].y);
           for (let i = 1; i < stroke.length; i++) {
                ctx.lineTo(stroke[i].x, stroke[i].y);
            }
            ctx.stroke();
             
        }
        });
*/
   };

   
   }window.addEventListener('resize', canvasResize);
  // noteDataEditWrap.addEventListener('click', canvasResize);
   
  


 
   
   
   
/* End of all functions related to canvas*/

 /*
  alignmentBtns.forEach((alignmentBtn) => {
   function TextFormattingFunction(){ 

          switch(alignmentBtn.id) {
          case 'left_align':     
            console.log('text is left aligned');
            alignmentBtn.style.textAlign= 'left';
            break;
          case 'center_align':     
            console.log('text is center aligned');
             alignmentBtn.style.textAlign= 'center';
            break;
          case 'right_align':     
            console.log('text is right aligned');
            break;
          }

 
  }alignmentBtn.addEventListener('click', TextFormattingFunction);
 
  });

 /* 
function selectNote(){
  
 // noteSelected.classList.remove("note_data_input_hidden");

    if (noteSelected.checked = true){
        noteDeleteBtn.classList.toggle("note_data_input_hidden");
        //noteSelected.classList.toggle("note_data_input_hidden");
        noteSelected.checked = false;
    } else if(noteSelected.checked = false){
      noteDeleteBtn.classList.toggle("note_data_input_hidden");
     // noteSelected.checked = true;
    }
 
    setTimeout(console.log("press and held!", 5000));

}noteSelected.addEventListener('click', selectNote);

*/   

// let pastedImage;
let draggedImage= null;// if image is being dragged in any way, save event.target here. 

/*
function textPasteFunction(){
//  event.preventDefault(); // prevents default pasting event
  //pastedContent= event.clipboardData;
 // console.log(pastedContent);

   
  let clipboardData= event.clipboardData;
  
  //console.log(clipboardData);
  if(clipboardData.types.includes('text/plain')){
 // pastedImage = event.target;
      let plainText = clipboardData.getData('text/plain');
    console.log('', plainText);

    document.execCommand('insertText', false, plainText);
  }
  

 // console.log(event.clipboardData);
  // console.log(window.clipboardData);

  /*
   let pastedImgWrap= document.createElement('div');
      pastedImgWrap.classList.add('pastedimg_wrap');
      pastedImage.classList.add("img_stylings", 'movable_stylings');
      pastedImgWrap.draggable =  true;


       pastedImgWrap.append(pastedImage);
       noteDataBody.append(pastedImgWrap);
  */

//}noteDataBody.addEventListener('paste', textPasteFunction);

 function imgPasteFunction(){
   
 //  setTimeout(() => {
    //const pastedImages = noteDataBody.querySelectorAll('img'); 
     // pastedImages.forEach((pastedImage) => {

      /* 
          let pastedImgWrap= document.createElement('div');
                pastedImgWrap.classList.add('pastedimg_wrap');
                pastedImage.classList.add("img_stylings", 'movable_stylings');
                pastedImgWrap.draggable =  true;
                pastedImage.contentEditable=false;
           



            pastedImgWrap.append(pastedImage);
            noteDataBody.append(pastedImgWrap);
       */
    //  });
   // }, 0)

 event.preventDefault();

    if(selection.rangeCount > 0){
    //     console.log(range);
    const range = selection.getRangeAt(0);
    const element = range.commonAncestorContainer;
    console.log(element);

    const parent = element.parentNode;
    const grandparent = parent.parentNode;

   /*
      // first try code problem: doesn't allow strings
      if (event.clipboardData.files.length){
          let file = event.clipboardData.files[0];
          console.log(event.clipboardData.files.length); //
          if(file.type.startsWith('image/')){

          let reader = new FileReader();

            reader.onload= event =>{
              let newImg= document.createElement('img')
                    newImg.classList.add("img_stylings", 'movable_stylings');
                  newImg.draggable =  true;
                  // newImg.contentEditable=false;
              newImg.src=event.target.result;

            //   let extractedContents = range.extractContents();

        //linkWrapper.append(extractedContents);
        range.insertNode(newImg);
             // noteDataBody.append(newImg)
          }
            
            reader.readAsDataURL(file);
          }else if(file.type.startsWith('text/plain')){
             // newImg.src = '';
           file.getAsString((file)=>{
              let textNode= document.createTextNode(file)
               range.insertNode(textNode);
           })
          }
      }
      */
      /*Notes/Reminders
        DataTransferItem.kind is the kind of data. It is either a 'file' or a 'string' (unicode string).
        DataTransferItem.type is the format of the drag data item (examples text/plain, text/html, and image/png).
      */
      const clipBoardItems= event.clipboardData.items;
      for(const clipboardItem of clipBoardItems){
        if (clipboardItem.kind === 'file' && clipboardItem.type.startsWith('image')){ 
          const file = clipboardItem.getAsFile();
           let reader = new FileReader();

             reader.onload= event =>{
              let newImg= document.createElement('img')
                    newImg.classList.add("img_stylings", 'movable_stylings');
                  newImg.draggable =  true;
                  // newImg.contentEditable=false;
              newImg.src=event.target.result;

            //   let extractedContents = range.extractContents();

        //linkWrapper.append(extractedContents);
        range.insertNode(newImg);
             // noteDataBody.append(newImg)
          }
            reader.readAsDataURL(file);

        } else if(clipboardItem.kind==='string' && clipboardItem.type==='text/plain'){
           clipboardItem.getAsString((text)=>{
              let textNode= document.createTextNode(text)
               range.insertNode(textNode);
           })
        }
      }
      console.log(clipBoardItems);
  
    }
 }noteDataBody.addEventListener('paste', imgPasteFunction);

 function imgDragStart(){
  currentImg= event.target//.src
  console.log(currentImg);
 // event.dataTransfer.setData('URL', currentImg)
  draggedImage= currentImg;
  console.log(draggedImage);


 }noteDataBody.addEventListener('dragstart', imgDragStart);

/*
  function imgDragOver(){
  event.preventDefault();
 // event.dataTransfer.setData('URL', currentImg)


 }noteDataBody.addEventListener('dragover', imgDragOver);
 */

function imgDrop(){
 // event.preventDefault();
 // event.dataTransfer.setData('URL', currentImg)
   if(draggedImage){
      const range = document.caretRangeFromPoint(event.clientX, event.clientY);
        let selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    //  const range = selection.getRangeAt(0);
    //  const element = range.commonAncestorContainer;
    //  console.log(element);
    // range.deleteContents();// deletes selected content (in this case pastedimgwrap)
      range.insertNode(draggedImage)
      draggedImage=null;
      
}

 }noteDataBody.addEventListener('drop', imgDrop);
 

/* functions for pasting/dragging images */
/*
function pasteFunction(){

 // note: when moving image, it leaves behind it's parent div. that's a problem
  setTimeout(() => {
    //let newImage = document.createElement('img');
    //newImage.src= event.target.src;
    const pastedImages = noteDataBody.querySelectorAll('img'); 
      pastedImages.forEach((pastedImage) => {

          let pastedImgWrap= document.createElement('div');
                pastedImgWrap.classList.add('pastedimg_wrap');
                pastedImage.classList.add("img_stylings", 'movable_stylings');
                pastedImgWrap.draggable =  true;
                pastedImage.contentEditable=false;
           



            pastedImgWrap.append(pastedImage);
            noteDataBody.append(pastedImgWrap);
            //imgDrop(pastedImage);
          // return pastedImage;
        
        function imgDragstart(){
          console.log(JSON.stringify(pastedImgWrap.outerHTML))
          event.dataTransfer.setData('text/html', JSON.stringify(pastedImgWrap.outerHTML));
         draggedImage= event.target.parentElement.outerHTML;
         console.log(draggedImage);
          //   console.log('Dragging:', event.target.src);
          //console.log(event.dataTransfer)
        }noteDataBody.addEventListener('dragstart', imgDragstart)
        
        function preventDragover(){
        event.preventDefault();
      //  let draggableImageData= event.dataTransfer.getData('text/html');
       // if(draggableImageData === pastedImgWrap.outerHTML){

       // }
       //  console.log('dragover prevented');
        }noteDataBody.addEventListener('dragover', preventDragover);

      pastedImageParent= pastedImage.parentNode;

        console.log(pastedImageParent);
        function imgDrop(){ 
          event.preventDefault();
         //let selection = window.getSelection();
          
          let imageURL= event.dataTransfer.getData('text/html');
          let stringImg= JSON.stringify(pastedImgWrap.outerHTML);
          console.log(imageURL);
         //if(selection.rangeCount > 0){

           if(draggedImage){       // if(imageURL === stringImg){
 const range = document.caretRangeFromPoint(event.clientX, event.clientY);
                let selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            //  const range = selection.getRangeAt(0);
            //  const element = range.commonAncestorContainer;
            //  console.log(element);
           // range.deleteContents();// deletes selected content (in this case pastedimgwrap)
              range.insertNode(pastedImgWrap)
              draggedImage=null;
              
        }
           

          
          

    
        }noteDataBody.addEventListener('drop', imgDrop)



     
      });
  }, 0);



  /*
  pastedImages.forEach((pastedImage) => {
   
          let pastedImgWrap= document.createElement('div');
                pastedImgWrap.classList.add('pastedimg_wrap');
                pastedImage.classList.add("img_stylings", 'movable_stylings');
                pastedImgWrap.draggable =  true;
                pastedImage.contentEditable=false;
           



            pastedImgWrap.append(pastedImage);
            noteDataBody.append(pastedImgWrap);
            //imgDrop(pastedImage);
          // return pastedImage;
            
        function imgDragstart(){
          console.log(JSON.stringify(pastedImgWrap.outerHTML))
          event.dataTransfer.setData('text/html', JSON.stringify(pastedImgWrap.outerHTML));
          //console.log(event.dataTransfer)
        }noteDataBody.addEventListener('dragstart', imgDragstart)
        
        function preventDragover(){
        event.preventDefault();
       //  console.log('dragover prevented');
        }noteDataBody.addEventListener('dragover', preventDragover);

      pastedImageParent= pastedImage.parentNode;

        console.log(pastedImageParent);
        function imgDrop(){ 
          event.preventDefault();
         //let selection = window.getSelection();
          

         //if(selection.rangeCount > 0){

           

                const range = document.caretRangeFromPoint(event.clientX, event.clientY);
                let selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            //  const range = selection.getRangeAt(0);
            //  const element = range.commonAncestorContainer;
            //  console.log(element);
           // range.deleteContents();// deletes selected content (in this case pastedimgwrap)
              range.insertNode(pastedImgWrap)
              
          //}
          

    
        }noteDataBody.addEventListener('drop', imgDrop)

     
      });
  */

  /*
  setTimeout(() => {
    
    const pastedImages = noteDataBody.querySelectorAll('img'); 
      pastedImages.forEach((pastedImage) => {
   
          let pastedImgWrap= document.createElement('div');
                pastedImgWrap.classList.add('pastedimg_wrap');
                pastedImage.classList.add("img_stylings", 'movable_stylings');
                pastedImgWrap.draggable =  true;
                pastedImage.contentEditable=false;
           



            pastedImgWrap.append(pastedImage);
            noteDataBody.append(pastedImgWrap);
            //imgDrop(pastedImage);
          // return pastedImage;
            
        function imgDragstart(){
          console.log(JSON.stringify(pastedImgWrap.outerHTML))
          event.dataTransfer.setData('text/html', JSON.stringify(pastedImgWrap.outerHTML));
          //console.log(event.dataTransfer)
        }noteDataBody.addEventListener('dragstart', imgDragstart)
        
        function preventDragover(){
        event.preventDefault();
       //  console.log('dragover prevented');
        }noteDataBody.addEventListener('dragover', preventDragover);

      pastedImageParent= pastedImage.parentNode;

        console.log(pastedImageParent);
         function imgDrop(){ 
          event.preventDefault();
 let selection = window.getSelection();
   

    if(selection.rangeCount > 0){
      const range = selection.getRangeAt(0);
    //  const element = range.commonAncestorContainer;
    //  console.log(element);
    range.deleteContents();// deletes selected content (in this case pastedimgwrap)
      range.insertNode(pastedImgWrap)
       
    }
          

    
        }noteDataBody.addEventListener('drop', imgDrop)

     
      });
  }, 0);

  */

  /*
  const pastedImages = noteDataBody.querySelectorAll('img'); 
      pastedImages.forEach((pastedImage) => {
      if (pastedImage ) {
          const pastedImgWrap= document.createElement('div');
                pastedImgWrap.classList.add('pastedimg_wrap');
                pastedImage.classList.add("img_stylings", 'movable_stylings');
                pastedImgWrap.draggable =  true;

           



            pastedImgWrap.append(pastedImage);
            noteDataBody.append(pastedImgWrap);
            //imgDrop(pastedImage);
          // return pastedImage;
            
          }
      });
  }, 0);
  */

  /*
  function preventDragover(){
   event.preventDefault();
  }pastedImage.addEventListener('dragover', preventDragover);
*/
 /*  
function imgDrop(){
              console.log('drop fired');
             if (!recievedImage.parentNode.contains('pastedimg_wrap')){
                pastedImgWrap= document.createElement('div');
                pastedImgWrap.classList.add('pastedimg_wrap');
                pastedImgWrap.draggable =  true;
              
                
                pastedImgWrap.append(pastedImage);
                noteDataBody.append(pastedImgWrap);
                console.log('drop fired');
             }
 }pastedImage.addEventListener('drop', imgDrop)
 */
//}noteDataBody.addEventListener('paste', pasteFunction);

/*
function imgDragstart(){

}

function imgDragover(){
  event.preventDefault();
}
*/

/* end of functions for pasting/dragging images */


// console.log(pastedImage);
/*
 function imgDrop(){
             if (!recievedImage.parentNode.contains('pastedimg_wrap')){
                pastedImgWrap= document.createElement('div');
                pastedImgWrap.classList.add('pastedimg_wrap');
                pastedImgWrap.draggable =  true;
              
                
                pastedImgWrap.append(pastedImage);
                noteDataBody.append(pastedImgWrap);
                console.log('drop fired');
             }
}//recievedImage.addEventListener('drop', imgDrop)

*/
/*
function pasteFunction(){

 
  setTimeout(() => {
   
    const pastedImage = noteDataBody.querySelector('img'); 
    if (pastedImage) {
      pastedImage.classList.add("img_stylings");
    }
  }, 0);

 
}noteDataBody.addEventListener('paste', pasteFunction);

*/



  function saveNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

  // let noteDataTitleSave = noteDataTitle.textContent;   // noteDataTitleInput.value;
  //  let noteDataBodySave = noteDataBody.textContent;
    body.classList.remove("disable_body_scroll");

    noteContainerWrap.classList.add("note_container_preview_wrap");
    noteContainerWrap.classList.remove("note_container_wrap");
    noteContainer.classList.remove("selected_note_container");
    noteDataDownload.classList.add("hidden");
    noteDataTitleWrap.classList.remove("note_data_title_wrap");
     noteDataCreated.classList.add("hidden");
    noteDataBodyWrap.classList.remove("selected_body_wrap_stylings");
    noteDataBody.classList.remove("selected_body_stylings");
     noteDataBody.classList.add("hidden_text");
     truncText.classList.remove("hidden_text");
    noteDataSelectedWrap.classList.add('selected_btn_hidden');
      selectOptionsWrapper.removeAttribute('style')
      selectOptionsWrapper.classList.add('note_data_input_hidden');
     textFomattingOptionsWrapper.classList.add('alignment_hidden');
    toolBar.style.display='none';


    noteDataSave.classList.add("note_data_input_hidden");//button
    noteDataSave.classList.remove("note_data_input_active");

   // noteDeleteBtn.classList.remove("note_data_input_hidden");
  // noteDataTitle.textContent= noteDataTitleSave;
  // noteDataBody.textContent= noteDataBodySave;
    noteDataTitle.classList.remove("note_data_input_hidden");
    noteDataBody.classList.remove("note_data_input_hidden");


  // noteDataTitleInput.classList.remove("note_data_input_active");
    //noteDataBodyInput.classList.remove("note_data_input_active");
    //noteDataTitleInput.classList.add("note_data_input_hidden");
    //noteDataBodyInput.classList.add("note_data_input_hidden");
     noteDataEditWrap.classList.add("note_data_edit_btn_wrap");
   // noteDataEdit.classList.remove("note_data_input_hidden");


    noteDataTitle.setAttribute("contenteditable","false");
    noteDataBody.setAttribute("contenteditable","false");

     


    previewTitle.textContent= noteDataTitle.textContent;
    truncText.textContent =  noteDataBody.textContent.slice(0, 275);

   
    let dataURL = drawingCanvas.toDataURL('image/png');
    drawingCanvas.remove();
   // ttLinkWrap.remove();
   // visibleCanvas.remove();
    /*
    let copiedMarkup = noteData.htmlMarkup;
    console.log(copiedMarkup);
       console.log(copiedMarkup.textContent);
    */
/*
    let dhArray= noteData.drawingHistoryArr;
 console.log(dhArray);
 let combinedDrawingHistory = dhArray.concat(drawingHistory);
  console.log(combinedDrawingHistory);

*/
 //noteContainerWrap.append(ttLinkWrap);
ttLinkWrap.classList.add('tt_link_wrap_hidden');
let dhArray = noteData.drawingHistoryArr;
    let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    if (testArrayIndex !== findNoteId) {
      
      testArray[testArrayIndex].title = noteDataTitle.textContent;
      testArray[testArrayIndex].body = noteDataBody.textContent;
      testArray[testArrayIndex].htmlMarkup = noteDataBody.innerHTML;
      //testArray[testArrayIndex].sessionDrawingHistory = drawingHistory;
      testArray[testArrayIndex].drawingHistoryArr = dhArray;
      // testArray[testArrayIndex].tags = tagArr;
      // console.log("todo changed!"); 
       
    }

    

    //toolBar.classList.add('note_data_input_hidden');
    createBtn.classList.remove('key_value_section_hidden');
    addTagModal.classList.add('hidden_class');
    
    previewTitle.classList.remove("hidden");
    noteDataTitleWrap.classList.add("hidden");
  
    
    localStorage.setItem('allNotes', JSON.stringify(testArray)); // stringify and send data back to storage
    tempTags=[];
    drawingHistory=[];
    console.log(testArray);
    console.log(localStorage);
    console.log(noteDataTitle.textContent);
    console.log(noteDataBody.textContent);
  //  console.log(combinedDrawingHistory);
    console.log(tempTags);
  
  noteDataBody.append(drawingCanvas);

   
  }noteDataSave.addEventListener('click', saveNote);
    

/* 
    function selectNote(){
  let timer = setTimeout(console.log("press and held!", 4000));
  noteSelected.classList.remove("note_data_input_hidden");

    if (noteSelected.checked = true){
        noteDeleteBtn.classList.remove("note_data_input_hidden");
    }

   }noteContainer.addEventListener('click', selectNote);
*/
  function deleteNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

    let findNoteId= noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    if (testArrayIndex !== findNoteId) {
      
        testArray.splice(testArrayIndex, 1);
        noteSection.removeChild(noteContainer);
        localStorage.setItem('allNotes', JSON.stringify(testArray)); 
      
        console.log(localStorage);
        console.log(testArray);
    } 
  }noteDeleteBtn.addEventListener('click', deleteNote);

  function downloadNote(){
  saveNote();
 
 

  const blob = new Blob([noteDataBody.innerHTML], { type: "text/html"});

  const url= URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = `${noteDataTitle.textContent}.html`;
        document.body.appendChild(downloadLink);

        downloadLink.click();

        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);

  }noteDataDownload.addEventListener('click', downloadNote);

/*
function selectionTest(){
      const selection = window.getSelection();
        const selectedText = selection.toString();
      if(selectedText > ''){

      const size = window.getComputedStyle(selection.anchorNode.parentElement, null).getPropertyValue('font-size'); 
      console.log(selectedText);
      console.log(size);

      // const oldOption = fontSizeOptions.options[0];
       const currentsize = document.createElement('option');
       currentsize.value= size;
      currentsize.textContent= size;

      fontSizeOptions.append(currentsize)

       
       if(oldOption){
        oldOption.replaceWith(currentsize);
        fontSizeOptions.selectedIndex=0;
       }

     


      }
    //   changeFontSize(selection);
    }document.addEventListener('selectionchange', selectionTest)
*/

/* noted problem: the font size change function applies to WHOLE div instead of selected text only.
   it's good for applying classes to paragraphs of text, but not for individual text you may want to style in the same div.
   Possible solution: after font size has been chosen, wrap the selected text in a span tag and  
*/
  const selection = window.getSelection();



 
function selectionTest(){
    
        let selectedText = selection.toString();
      if(selectedText > ''){
 
      const size = window.getComputedStyle(selection.anchorNode.parentElement, null).getPropertyValue('font-size'); 
     // console.log(selectedText);
      sizeNum= size.slice(0,-2);
      //console.log(size);
      //console.log(sizeNum);
     // console.log(fontOptions)

        for (let i = 0; i < fontOptions.length; i++) {
            if(fontOptions[i].value === sizeNum ){
              //console.log("found matching value");
              //fontSizeOptions.classList.add("higlighted_font")
            
              fontSizeOptions.value = sizeNum;
            }

        }

     
     


      }
      // sizeChange(selectedText);

    
    
    

    }document.addEventListener('selectionchange', selectionTest)
   // noteDataBody.addEventListener('click', selectionTest)

        

        


 function sizeChange(){
           
      
         
        const anchorNode = selection.anchorNode;
        const parentElement= anchorNode.parentElement;
      //  const parentNode =anchorNode.parentNode;
        const closestDiv = parentElement.closest('div');

      // const oldestChild
        
        
    
        console.log(anchorNode);
      //  console.log(parentElement);

      /* 
        problem cause possibly? After every || is called it creates a span, 
        meaning at minimum 4 extra spans are created in addition to the one that's SUPPOSED to be created. 
        Problem half-fixed but when selecting font sizes and applying them to text within seperate span


      */

        if (selection.rangeCount > 0){
           const selectionRange = selection.getRangeAt(0);

           console.log(selectionRange);

           if(parentElement.tagName !== 'span'){
            const fontWrap = document.createElement('span');
            //fontWrap.classList.add('font_wrap');

           const extractedText = selectionRange.extractContents();

           let selectedFontSize = fontSizeOptions.value;
          fontWrap.style.fontSize = selectedFontSize + "px";
        //  console.log(closestDiv.style.fontSize);

           fontWrap.append(extractedText);

           selectionRange.insertNode(fontWrap);

           if(parentElement.contains(fontWrap)){
            
          fontWrap.style.fontSize = selectedFontSize + "px";

           }
           }  
          


        }
    
    
     /* 

        if(closestDiv ){
          console.log("if statement iterated");
          let fontWrap = document.createElement('span');
          // closest.insertBefore
          parentElement.prepend(fontWrap);
         fontWrap.append(anchorNode);
        
          let selectedFontSize = fontSizeOptions.value;
          fontWrap.style.fontSize = selectedFontSize + "px";
        //  console.log(closestDiv.style.fontSize);
        }
         */   
 }fontSizeOptions.addEventListener('change', sizeChange);
    
    
 function noteModeDark(){
  let allContainer= document.querySelectorAll('.note_container');
    let allToolbar= document.querySelectorAll('.toolbar_stylings');
  let allIcons = document.querySelectorAll('.icon_stylings');
    let allBodyStylings = document.querySelectorAll('.body_stylings');
    let allTitleStylings = document.querySelectorAll('.title_wrap_stylings');
   // let allCurrentAlignmentIcon = document.querySelectorAll('.current_icon');
    let  allTextFomattingOptionsWrapper = document.querySelectorAll('.alignment_options');

    allContainer.forEach(container => {
      container.classList.add('dark_notes');
       
    })

    allToolbar.forEach(toolBarStyling => {
      toolBarStyling.classList.add('dark_notes');
      
    })
    
    allIcons.forEach(icon => {
      icon.classList.add("darkmode_icons");
    })

       allBodyStylings.forEach(bodyStyling => {
       //bodyStyling.classList.add('');
       bodyStyling.classList.add('selected_body_stylings_dark_mode');
    })


        allTitleStylings.forEach(titleStyling => {
       //bodyStyling.classList.add('');
          if(noteContainer.classList.contains('note_container_preview_wrap')){
             titleStyling.classList.remove('note_data_title_wrap_darkmode');
          } else {
             titleStyling.classList.add('note_data_title_wrap_darkmode');
          }
      
    })

      allTextFomattingOptionsWrapper.forEach(TextFomattingOptionsStyling => {
        TextFomattingOptionsStyling.classList.add('alignment_options_darkmode');
         
      
    })

    /*
       allCurrentAlignmentIcon.forEach(currentAlignmentIconStyling => {
        currentAlignmentIconStyling.classList.add('alignment_options_darkmode');
         
      
    })
*/


 }

 darkModeSwitch = noteModeDark;

  function removeNoteModeDark(){
  let allContainer= document.querySelectorAll('.note_container');
    let allToolbar= document.querySelectorAll('.toolbar_stylings');
  let allIcons = document.querySelectorAll('.icon_stylings');
    let allBodyStylings = document.querySelectorAll('.body_stylings');
 let allTitleStylings = document.querySelectorAll('.title_wrap_stylings');
  let  allTextFomattingOptionsWrapper = document.querySelectorAll('.alignment_options');

    allContainer.forEach(container => {
      container.classList.remove('dark_notes');
      
    })

    allToolbar.forEach(toolBarStyling => {
        toolBarStyling.classList.remove('dark_notes');
      })
    
        allIcons.forEach(icon => {
      icon.classList.remove("darkmode_icons");
    })

     allBodyStylings.forEach(bodyStyling => {
       //bodyStyling.classList.add('');
       bodyStyling.classList.remove('selected_body_stylings_dark_mode');
    })

        allTitleStylings.forEach(titleStyling => {
       //bodyStyling.classList.add('');
       titleStyling.classList.remove('note_data_title_wrap_darkmode');
    })

       allTextFomattingOptionsWrapper.forEach(TextFomattingOptionsStyling => {
        TextFomattingOptionsStyling.classList.remove('alignment_options_darkmode');
         
      
    })
    
 }

 removeDarkModeSwitch= removeNoteModeDark;

  function accessModal(){
    addedTags.innerHTML='';
       testArray = JSON.parse(localStorage.getItem('allNotes'))
       console.log(JSON.parse(localStorage.getItem('allNotes'))); 
      addTagModal.classList.remove('hidden_class');

       let findNoteId = noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    if (testArrayIndex !== findNoteId) {

     
           console.log('note id is' + findNoteId);

    }
      
    //  console.log(noteData.tags);



         
             

          noteData.tags.forEach(noteTag => {
            let savedTag = document.createElement('a');
                    savedTag.classList.add("tags");
                 // let stringTags =JSON.stringify(noteData.tags);
                 // let parsedTags =JSON.parse(noteData.tags);
            
                    savedTag.textContent = noteTag.tagName;
                 // savedTag.textContent =parsedTags;
                    addedTags.append(savedTag);
                     console.log(savedTag.textContent);
                 // console.log(noteData.tags);
          })
         //    console.log(savedTag.textContent);
                    console.log(noteData.tags);
      //tagsArr.length=0;
     // console.log(notes.tags); 
    }tagModalBtn.addEventListener('click', accessModal);
    


   
function addTag(){
    // testArray = JSON.parse(localStorage.getItem('allNotes')); 

    console.log(noteData.tags);
    tagsObj={};

  let tag = document.createElement('a');
      tag.classList.add("tags");
  tag.innerHTML = tagInput.value; 
  addedTags.append(tag);
  console.log(tag.textContent);

//  notes.tags = tagObj.tagsArr;
    

// console.log(tagObj.tagsArr);

//tempTags.push(tag.textContent);




tagsObj.tagName = tag.textContent;
console.log(tagsObj);
///notes.tags = t.push(tagsArr);




// notes.tags.push(tagsObj);

tempTags.push(tagsObj);
console.log(tempTags);


  tagInput.value='';
   

  const noteArr = noteData.tags;

  const newArray= noteArr.concat(tempTags);
        console.log(newArray);

    let findNoteId = noteData.id; 

    const testArrayIndex = testArray.findIndex(noteData => noteData.id === findNoteId);



    if (testArrayIndex !== findNoteId) {

     
        testArray[testArrayIndex].tags = newArray;

    }

  
     // console.log(addTagsTogether);
        console.log(notes.tags);
     localStorage.setItem('allNotes', JSON.stringify(testArray)); 
      console.log(JSON.parse(localStorage.getItem('allNotes'))); 
     
   
}createTagBtn.addEventListener('click', addTag);


function exitModal(){


   addTagModal.classList.add('hidden_class');

   //addedTags.innerHTML='';

}saveTagsBtn.addEventListener('click', exitModal);
 
/*

            function sizeChange(){
           
              
        const anchorNode = selection.anchorNode;
        const parentElement= anchorNode.parentElement;
              console.log(selectedText);
              console.log(parentElement);

        let selectedFontSize = fontSizeOptions.value;
            parentElement.style.fontSize = selectedFontSize + "px";
          
                let fontWrap = document.createElement('span');  
               fontWrap.append(parentElement);
            console.log(parentElement.style.fontSize);
      }fontSizeOptions.addEventListener('change', sizeChange);
    

    }document.addEventListener('selectionchange', selectionTest)


*/

/*
   function changeFontSize(selectionText){
      //console.log(selectionText)
      let selectedFont = fontSizeOptions.value + "px";
      selectionText.style.fontSize = selectedFont;
  
}fontSizeOptions.addEventListener('change', changeFontSize)
*/

/* 
function sizeChange(){
  const selectedFontSize = fontSizeOptions.value;
        testFont.style.fontSize = selectedFontSize + "px";
        console.log(testFont.style.fontSize);
}fontSizeOptions.addEventListener('change', sizeChange)

*/

    


})


 function enableDarkMode(){
  body.classList.add('dark_mode');
  modeBtn.classList.add('dark_mode_switch');
 //  searchb.classList.remove('dark_mode_searchbar');
 //noteDataBody.classList.add('selected_body_stylings_dark_mode');
 searchNotes.classList.add('dark_mode_searchbar','dark_mode_search');
  
  darkModeSwitch();

   localStorage.setItem('darkmode', 'enabled');

}


  

 function disableDarkMode(){
  body.classList.remove('dark_mode');
  modeBtn.classList.remove('dark_mode_switch');
   //noteDataBody.classList.remove('selected_body_stylings_dark_mode');
  searchNotes.classList.remove('dark_mode_searchbar','dark_mode_search');
  removeDarkModeSwitch();

   localStorage.setItem('darkmode', 'disabled');
} 

  if (darkMode === "enabled") { // checks if dark mode is enabled
      enableDarkMode();
  }
 
 modeBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode");
  if (darkMode !== 'enabled') {
    enableDarkMode();
    console.log('dark mode is on');
  } else {
    disableDarkMode();
   console.log('dark mode is off');
  }
 });
 

/* 
   function addTagsFunction(){
      let newTag = document.createElement('div');
      newTag.classList.add("tag");
      newTag.textContent = tagsInput.value;

      newTagsSection.append(newTag);

      tagsInput.value="";

      tagsArray=[];
      console.log(tagsArray);

      tagsArray.push(newTag.textContent);


   // notes.tags = newTag.textContent;


     // saveTagsFunction(newTag);
      
      console.log("tag added to section!");
  }addTag.addEventListener('click', addTagsFunction);
   */  
 

    
   

 localStorage.setItem('allNotes', JSON.stringify(testArray));
};

retrieveNotes();




function addToLocal(){

    let testArray = JSON.parse(localStorage.getItem('allNotes')); 

    if (testArray == null) {
        
        // If null, creates an empty array

        testArray = [];
    }
   
    

  
   
   //className.titleClass = noteDataTitle.className;
    /* the notes object stores the two values */
    let notes = { 
        id:  Math.floor(Math.random() * 100000),
        title: key.value,
        body: value.value,
       // createddate: dateCreated.value,
    }



 // EXPAND ON THE ADD FUNCTION BY DETECTING IF AN IMG HAS BEEN ADDED, AND IF SO CONVERT IT INTO A BASE 64STRING(I THINK?), AND SETTING IT TO AN PROPERTY CALLED "NOTE-IMAGES"
 // A POSSIBLE SOLUTION MIGHT BE TO CREATE AN ARRAY FOR IMGS IN THE NOTES OBJECT, (BETTER TO ASSUME SOMEONE'LL HAVE MULTIPLE IMGS INSTEAD OF ONE).  

 // MAKE A "CANVAS MODE" AS WELL FOR DRAWING CAPACITY.

 // localStorage.setItem('note', JSON.stringify(notes)); 

 // might wanna change the 'note' key to 'last_added_note' because it saves the data of the last added note.;
 



   let noteContainer = document.createElement("div");
    noteContainer.classList.add("note_container");


   
   let selectedBtnTitleWrap = document.createElement("div");
   selectedBtnTitleWrap.classList.add("selected_btn_wrap");    

   /* 
   let noteSelected = document.createElement("input");
    noteSelected.type = 'checkbox';
    noteSelected.classList.add("note_data_input_hidden");
*/

   



    /*
      let noteDataTitle = document.createElement("textarea");
    noteDataTitle.classList.add("title_stylings");
    noteDataTitle.setAttribute("wrap","off");
    noteDataTitle.setAttribute("maxlength","40");
    noteDataTitle.setAttribute("placeholder","Title");
    noteDataTitle.setAttribute("rows","1");
    noteDataTitle.innerHTML = notes.title;

    */
    let noteDataTitle = document.createElement("p");
    noteDataTitle.classList.add("title_stylings");
    noteDataTitle.innerHTML = notes.title;
   
    // noteDataTitle.innerHTML = notes.title;




    let noteDataCreatedDate = document.createElement("p");
    noteDataCreatedDate.classList.add("date_created");

    let noteDataCreatedDateWrap = document.createElement("div");
 
    current = {
  
          month:'long',
          day: 'numeric',
          year:'numeric',
          hour:'numeric',
          minute:'numeric'
      
      
          // dateStyle: 'long'  || note: dateStyle is a catch-all for weekday, month, day, etc. It will overide other individual styles.
          
      
        };


    let getCurrentDate = new Date(); 
    let formattedCurrentDate =  new Intl.DateTimeFormat("en-US", current).format(getCurrentDate);
        console.log(formattedCurrentDate);

        noteDataCreatedDate.textContent = formattedCurrentDate;
        console.log(noteDataCreatedDate.textContent);

        noteDataCreatedDate.value = notes.createddate;
      
        noteDataCreatedDateWrap.append(noteDataCreatedDate);

  /* 
    let tagSection = document.createElement('div');
    tagSection.classList.add('tag_section');

    tagSection.innerHTML=
    `
      <button class="add_tag">
          Add Tag
       </button>
    `;

 */






    selectedBtnTitleWrap.append(/*noteSelected,*/ noteDataTitle, noteDataCreatedDateWrap);
 

    


    let noteDataBodyWrap= document.createElement("div");
        noteDataBodyWrap.classList.add("body_wrap_stylings");

    let noteDataBody = document.createElement("p");
        noteDataBody.classList.add("body_stylings");
        //  noteDataBody.setAttribute("contenteditable","true");
        noteDataBody.innerHTML = notes.body;
      
        markup = noteDataBody.innerHTML;
    noteDataBodyWrap.append(noteDataBody)

      let  noteDataTitleInput = document.createElement("input");
        // noteDataTitleInput.textContent = notes.title;
           noteDataTitleInput.type = "text";
           noteDataTitleInput.classList.add("note_data_input_hidden");
/*
        let  tagSection = document.createElement("div");
             tagSection.classList.add("tag_section");

        let tagModalBtn = document.createElement('button');
            tagModalBtn.textContent = "Add Tag";
            tagModalBtn.classList.add("tag_section");

  
            tagSection.append(tagModalBtn);

          noteTitleSection.append(tagSection);

        let addTagModal = document.createElement('div');
            addTagModal.classList.add("add_tag_modal");

        let addTagModalInput

        /*end tag  section*/

      let noteDataBodyInput = document.createElement("input");
       // noteDataBodyInput.textContent = notes.body;
          noteDataBodyInput.type = "text";
          noteDataBodyInput.classList.add("note_data_input_hidden");

      let noteDataEdit = document.createElement("button");
          noteDataEdit.classList.add("edit_btn");
          noteDataEdit.textContent = "Edit";

      let noteDeleteBtn = document.createElement("button");
          noteDeleteBtn.textContent = 'Delete Note';
         

    /*
    let toolBar = document.createElement('div');
    toolBar.classList.add('note_data_input_hidden');
 
    let bold = document.createElement('button');
    bold.textContent= "𝐁";
  

    let italic = document.createElement('button');    
        italic.textContent= "I";

    let underline = document.createElement('button');       
        underline.textContent= "U";

    let strikethrough = document.createElement('button');
        strikethrough.textContent= "S";
    

    toolBar.append(bold, italic, underline, strikethrough);
    */
   let noteDataSave = document.createElement("button");
    noteDataSave.classList.add("note_data_input_hidden");
    noteDataSave.textContent = "Save";

    noteContainer.append(selectedBtnTitleWrap, noteDataBodyWrap, noteDataTitleInput,  noteDataBodyInput, /*toolBar,*/ noteDataEdit, noteDeleteBtn, noteDataSave);

    noteSection.append(noteContainer);

    
  
    console.log(localStorage);

    key.value = "";
    value.value = "";
   // dateCreated.value="";

    notes.htmlMarkup = markup;
    notes.createddate = formattedCurrentDate;

      
    tagsArr=[];
  

   notes.tags = tagsArr;
   
    

    //notes.tags= allTags;

    testArray.push(notes);
   

    localStorage.setItem('allNotes', JSON.stringify(testArray));
    
  
    console.log(JSON.parse(localStorage.getItem('allNotes'))); // gets 'allNotes' key, parses it, and logs it out.


    console.log(noteDataTitle.textContent);
    console.log(noteDataBody.textContent);
    console.log(noteDataCreatedDate.textContent);
 
/* 
   // saving text formatting progress notes completion: 1/4.

   // test 1-can save formatted text to localstorage
   // test2 - create a random array
    let randomDiv = document.createElement('div');
    randomDiv.classList.add('example') 
   //   randomHTML.classList.add('example');

  let childElement = document.createElement('p'); 
  childElement.setAttribute("contenteditable","true");

    childElement.classList.add('blah'); 

    childElement.textContent = childElement.innerHTML;

  let saveRandomButton = document.createElement('button'); 
  saveRandomButton.textContent='saveRandom';


  let boldRandom = document.createElement('button'); 
  boldRandom.textContent='B';
  
  randomDiv.append(childElement, saveRandomButton, boldRandom);

  function boldRandomFunction(){ 


  
    document.execCommand('bold', false, null);
    // const boldText = document.createElement('b');

    boldRandom.classList.toggle("active_class");
    
  

  }boldRandom.addEventListener('click', boldRandomFunction);

  noteSection.append(randomDiv);


    localStorage.setItem('example', JSON.stringify(randomDiv.innerHTML));

    console.log(localStorage.getItem('example'));

    function saverandom(){
      JSON.parse(localStorage.getItem('example')); // parse storage beforehand
  
     
      
      localStorage.setItem('example', JSON.stringify(randomDiv.innerHTML)); // stringify and send data back to storage
      console.log(localStorage);
  
    }saveRandomButton.addEventListener('click', saverandom);
    */
    const searchNotes = document.querySelector(".searchbar");
    const allNotes = document.querySelectorAll(".note_container");

 
   
    function filterNotes(){
      let searchquery = searchNotes.value.trim().toLowerCase(); //trim() cuts whites space and tolowercase makes search queary case insensitive
    
      //console.log(searchquery);
    
      
      allNotes.forEach(noteData => {
       // console.log(noteData); // logging out all data in testArray array
            noteData.style.display = 'block';
        if (!noteData.textContent.toLowerCase().includes(searchquery)){
            noteData.style.display = 'none';
        }  
      })
      
    
    
    }searchNotes.addEventListener('input', filterNotes);
    

    function edit(){ 

        /*
        let storedTitleValue =  noteDataTitle.innerHTML;
        let storedBodyValue =  noteDataBody.innerHTML;
       
        let findNoteId= notes.id; 
    
        const testArrayIndex = testArray.findIndex(notes => notes.id === findNoteId);
    
      
    
        if (testArrayIndex !== findNoteId) {
           
            testArray[testArrayIndex].title = noteDataTitle.textContent;
            testArray[testArrayIndex].body = noteDataBody.textContent;
           // console.log("todo changed!"); 
        }
          */
       

       
          

        let storedTitleValue = noteDataTitle.innerHTML;
        let storedBodyValue = noteDataBody.innerHTML;
    
       // noteDataTitle.classList.add("note_data_input_hidden");
      //  noteDataBody.classList.add("note_data_input_hidden");
    
      noteDataTitle.setAttribute("contenteditable","true");
      noteDataBody.setAttribute("contenteditable","true");


       // noteDataTitleInput.classList.remove("note_data_input_hidden");
        noteDataTitle.value = storedTitleValue;
    
    
       // noteDataBodyInput.classList.remove("note_data_input_hidden");
        noteDataBody.value = storedBodyValue;
    
        noteDataSave.classList.add("note_data_input_active");
       
    
        noteDataEdit.classList.add("note_data_input_hidden");
        
        noteDeleteBtn.classList.remove("note_data_input_hidden");

       //  console.log(storedTitleValue);
       //  console.log(storedBodyValue);
     
      // toolBar.classList.remove('note_data_input_hidden');

    //  toolBar.classList.remove('note_data_input_hidden');
 
  
       
    }noteDataEdit.addEventListener('click', edit);
    
    

    /*
    function boldFunction(){ 
      noteDataBody.focus();
      document.execCommand('bold', false, null);
      bold.classList.toggle("active_class");
  
    }bold.addEventListener('click', boldFunction);
   
    function italicFunction(){ 
      noteDataBody.focus();
      document.execCommand('italic', false, null);
      italic.classList.toggle("active_class");
      
    }italic.addEventListener('click', italicFunction);
   
    function underlineFunction(){ 
      noteDataBody.focus();
      document.execCommand('underline', false, null);
      underline.classList.toggle("active_class");
      
    }underline.addEventListener('click', underlineFunction);
   
    function strikethroughFunction(){ 
      noteDataBody.focus();
      document.execCommand('strikethrough', false, null);
      strikethrough.classList.toggle("active_class");
    }strikethrough.addEventListener('click', strikethroughFunction);
   
     */
/* 
    function addTag(){
      notes.tags = tagInput.textContent;

      let tag= document.createElement('div');
      tag.textContent= tagInput.innerHTML;
      addedTags.append(tag);
      localStorage.setItem('allTags', JSON.stringify(allTags));
     console.log(JSON.parse(localStorage.getItem('allTags'))); 
    }createNewTagBtn.addEventListener('click', addTag);
 */

   


function saveNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

   // let noteDataTitleSave = noteDataTitle.textContent;   // noteDataTitleInput.value;
   // let noteDataBodySave = noteDataBody.textContent;

    noteDataSave.classList.add("note_data_input_hidden");//button
    noteDataSave.classList.remove("note_data_input_active");

    //noteDataTitle.textContent= noteDataTitleSave;
    //noteDataBody.textContent= noteDataBodySave;

    noteDataTitle.classList.remove("note_data_input_hidden");
    noteDataBody.classList.remove("note_data_input_hidden");


   // noteDataTitleInput.classList.remove("note_data_input_active");
    //noteDataBodyInput.classList.remove("note_data_input_active");
    //noteDataTitleInput.classList.add("note_data_input_hidden");
    //noteDataBodyInput.classList.add("note_data_input_hidden");
    
    noteDataEdit.classList.remove("note_data_input_hidden");


    noteDataTitle.setAttribute("contenteditable","false");
    noteDataBody.setAttribute("contenteditable","false");
    
    let findNoteId= notes.id; 

    const testArrayIndex = testArray.findIndex(notes => notes.id === findNoteId);

  

    if (testArrayIndex !== findNoteId) {
       
        testArray[testArrayIndex].title = noteDataTitle.textContent;
        testArray[testArrayIndex].body = noteDataBody.textContent;
        testArray[testArrayIndex].htmlMarkup = noteDataBody.innerHTML;
       // console.log("todo changed!"); 
    }

    

    
    localStorage.setItem('allNotes', JSON.stringify(testArray)); // stringify and send data back to storage
   
    // localStorage.setItem('example', JSON.stringify(randomDiv.innerHTML));
    console.log(testArray);
    console.log(localStorage);
    console.log(noteDataTitle.textContent);
    console.log(noteDataBody.textContent);


    toolBar.classList.add('note_data_input_hidden');
 
    
    


}noteDataSave.addEventListener('click', saveNote);
   


/* 
function selectNote(){
  
 // noteSelected.classList.remove("note_data_input_hidden");

    if (noteSelected.checked = true){
        noteDeleteBtn.classList.toggle("note_data_input_hidden");
        noteSelected.classList.toggle("note_data_input_hidden");
    }
 
    setTimeout(console.log("press and held!", 5000));

}noteContainer.addEventListener('mousedown', selectNote);
*/

function deleteNote(){
    testArray = JSON.parse(localStorage.getItem('allNotes')); // parse storage beforehand

    let findNoteId= notes.id; 

    const testArrayIndex = testArray.findIndex(notes => notes.id === findNoteId);

    if (testArrayIndex !== findNoteId) {
       
        testArray.splice(testArrayIndex, 1);
        noteSection.removeChild(noteContainer);
        localStorage.setItem('allNotes', JSON.stringify(testArray)); 
       
        console.log(localStorage);
        console.log(testArray);
    } 
  }noteDeleteBtn.addEventListener('click', deleteNote);

  createBtn.classList.remove("key_value_section_hidden");

  keyValueSection.classList.add("key_value_section_hidden");
  
      //noteSection.remove(noteContainer);
      //noteContainer.remove();
      noteSection.innerHTML='';// clears all old content. including newly unstyled note.
      retrieveNotes();// refreshes and updates data
}addToLocalBtn.addEventListener('click', addToLocal);
 
/*
 function accessModal(){
      tagModalSection.classList.remove('hidden_class');

      console.log('bleh');
    }tagModalBtn.addEventListener('click', accessModal);
    */
   /*  
function addTag(){
    

  let tag = document.createElement('span');
  tag.innerHTML = tagInput.value; 
  addedTags.append(tag);
  console.log(tag.textContent);
  
  allTags.push(tag.textContent);
    notes.tags = tag.textContent;
  localStorage.setItem('allTags', JSON.stringify(allTags));

  console.log(JSON.parse(localStorage.getItem('allTags'))); 
  tagInput.value='';
//   saveTagsToNoteFunct();
}createNewTagBtn.addEventListener('click', addTag);
*/
 
    
    
    /* 
     function saveTagsFunction(newTag){
   
      
       
      tagSection.append(newTag);
      
      //newTagsSection.remove(newTag);
      console.log("tag saved to section!");
    }saveTags.addEventListener('click', saveTagsFunction);
     
    */




//localStorage.clear();
 



 /* //test stuff for font size 
const testDropdown = document.querySelector('.test_dropdown');

 
const testFont = document.querySelector('.test_Font');

function sizeChange(){
  const selectedFontSize = testDropdown.value;
        testFont.style.fontSize= selectedFontSize + "px";
        console.log(testFont.style.fontSize);
}testDropdown.addEventListener('change', sizeChange)
*/

/*

 const testBtn = document.querySelector(".test_btn");


 const testObject = document.querySelector(".object");


 function appear(){

  let held = setTimeout(() =>{
    console.log("held for 2 seconds");
  }, 2000);


  function appear(){

     
     
  }testBtn.addEventListener('mousedown', appear);
  

 
   
}testBtn.addEventListener('mousedown', appear);





*/
/*
const testArea = document.querySelector('.test_area');

let canvas = document.createElement('canvas');
canvas.classList.add('canvas_stylings');

const ctx = canvas.getContext('2d');

const imageContainer= document.createElement('div');
imageContainer.classList.add( 'resize_wrap');
const image = document.createElement('img')
image.src= 'shoe.jpg';
image.classList.add('img_stylings', 'img_resize_class');



const handlesWrapper = document.createElement('div');
handlesWrapper.classList.add('handle_wrap');


imageContainer.append(image);


testArea.append(imageContainer);



//  rect= image.getBoundingClientRect();

//console.log(imgWidth,imgHeight);
//console.log(imgCenter);
//console.log(rect);

let rect;


 setTimeout(() => {
 rect = imageContainer.getBoundingClientRect();
 console.log(rect);
 // }, 0);
//console.log(compHeight);
// console.log(rect);
let aspectRatio= image.width/image.height;
console.log(aspectRatio);

 const ResizingHandles=[
    { id: 1, left: 0 +'px', top: 0 + 'px'}, 
    //{ id: 2, left: image.width / 2 +'px', top: `${0}px`}, 
    { id: 3, right: 0 +'px', top: `${0}px`}, // top end
   // { id: 4, left: 0 +'px', top: image.height / 2 +"px"},
   // { id: 5, right: 0 +'px', top: `${image.height / 2}px`}, // middle end
    { id: 6, left: 0 +'px', bottom: `${0}px`}, 
   // { id: 7, left: image.width / 2 +'px', bottom: `${0}px`}, 
    { id: 8, right: 0 +'px', bottom: `${0}px`}, // top end
    // bottom
  ]

 let resizingImg = false;
 let activeHandle = null; 
 let InitialMousePositionX,InitialMousePositionY;

  ResizingHandles.forEach( resizingHandle => {
      const handle = document.createElement('div');
handle.classList.add('handle_stylings');

handle.style.left= resizingHandle.left;
handle.style.right= resizingHandle.right;
handle.style.top= resizingHandle.top;
handle.style.bottom= resizingHandle.bottom;

imageContainer.append(handle);
 handle.addEventListener('mousedown', (handleData) =>{
    resizingImg= true;
    console.log('handler clicked!');

    InitialMousePositionX= handleData.clientX;
    InitialMousePositionY=handleData.clientY;

    originalWidth= image.offsetWidth;
    originalHeight= image.offsetHeight;

  

    console.log(originalWidth + ' width');
    console.log(originalHeight + ' height');
    console.log(InitialMousePositionX);
    console.log(InitialMousePositionY);

    
   document.addEventListener('mousemove', (handleData) => {
        if(!resizingImg) return;

    const differenceX = handleData.clientX - InitialMousePositionX;
    const differenceY = handleData.clientY - InitialMousePositionY;    

    if(handle.classList.contains('handle_stylings')){
      imageContainer.style.width= (originalWidth + differenceX) + 'px';
      imageContainer.style.height= (originalHeight + differenceY) + 'px';

      imageContainer.style.maxWidth = '100%';
    }
   });

    document.addEventListener('mouseup', () => {
      resizingImg= false;
      //activeHandle=null;
   });   

   
    });//handle.addEventListener('mousedown',  handleEvent)

    
    
  });


  }, 0);
  
//  } document.addEventListener('mousemove', resizingFunction);



 
/*
const topLeft = document.createElement('div');
topLeft.classList.add('handle_stylings');

topLeft.style.left= 0+'px';
topLeft.style.top= `${image.height}px`;
 */

//imageContainer.append(topLeft);

//function getSpecs(){
//const imgWidth= image.width;
//const imgHeight= image.height;

//const imgCenter= imgWidth / 2;
//const imgCenter2= imgHeight /2;

//note: need 2 coordinates for each handle, its x and y. 8 handles in total


//console.log(imgWidth,imgHeight);
//console.log(imgCenter);




//}window.addEventListener('load', getSpecs)


/*

function getSpecs(){
//const imgWidth= image.width;
//const imgHeight= image.height;

//const imgCenter= imgWidth / 2;
//const imgCenter2= imgHeight /2;

//note: need 2 coordinates for each handle, its x and y. 8 handles in total

const rect= image.getBoundingClientRect();

const topLeft = document.createElement('div');
topLeft.classList.add('handle_stylings');

topLeft.style.left= `${rect.left}px`;
topLeft.style.top= `${rect.top}px`;

imageContainer.append(topLeft);

//console.log(imgWidth,imgHeight);
//console.log(imgCenter);

console.log(rect);
}window.addEventListener('resize', getSpecs)



function drawHandles(){
  const ResizingHandles=[

  ]



}image.addEventListener('click', drawHandles)

/*
function resizeCanvas(){

  drawImg();



}window.addEventListener('resize', drawImg)

function drawImg(){

  

 // image.width = window.innerWidth;

// canvas.width = image.naturalWidth;
// canvas.height = image.naturalHeight;

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

 

 
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  

  let centerX= canvas.width ;
  let centerY= canvas.height;

  console.log(centerX, centerY);

  drawHandles();

}window.addEventListener('load', drawImg)

function drawHandles(){


  

  const handles=[
    { x: canvas.width -10, y: canvas.height - 10, width: 20, height: 20, color: "black"},
    { x: canvas.width - 20, y:  canvas.height - 75, width: 20, height: 20, color: "black"},
    { x: 10, y: 10, width: 20, height: 20, color: "red"},
    { x: 10, y: 10, width: 20, height: 20, color: "red"},
  ]

  

  handles.forEach(handle =>{
      ctx.fillStyle= handle.color;
      ctx.fillRect(handle.x, handle.y, handle.width, handle.height);
  })
  


}
  */

