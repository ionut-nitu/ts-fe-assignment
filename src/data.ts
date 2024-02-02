
export interface MockDataFields {
   heading: string;
   question: string;
   text: string;
}
export interface MockData {
   id:string;
   fields: MockDataFields;
   uiDisplayInfo: {
      mainFields: string[];
   }
   createdAt: string;
   lastModifiedAt: string;
}

export default [
  {
     "id":"7ijk5lh",
     "fields":{
        "heading":"<h2 class=\"h2\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">General info</span></h2>",
        "text":"<p class=\"editor-paragraph\" dir=\"ltr\"><b><strong class=\"editor-text-bold\" style=\"white-space: pre-wrap;\">Lorem Ipsum</strong></b><span style=\"white-space: pre-wrap;\">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span></p>",
        "question":"<p class=\"editor-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">What is lorem ipsum?</span></p>"
     },
     "uiDisplayInfo":{
        "mainFields":[
           "heading",
           "text"
        ]
     },
     "createdAt":"2024-01-24T10:15:36.207386+00:00",
     "lastModifiedAt":"2024-01-24T10:15:36.207386+00:00"
  },
  {
     "id":"2df465",
     "fields":{
        "heading":"<h2 class=\"h2\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">How to use lorem ipsum?</span></h2>",
        "text":"<p class=\"editor-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></p>",
        "question":"<p class=\"editor-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">When and why do we use it?</span></p>"
     },
     "uiDisplayInfo":{
        "mainFields":[
           "heading",
           "text"
        ]
     },
     "createdAt":"2024-01-24T10:25:04.320262+00:00",
     "lastModifiedAt":"2024-01-24T10:25:04.320262+00:00"
  },
  {
     "id":"cff94a",
     "fields":{
        "heading":"<h2 class=\"h2\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Lorem ipsum origins</span></h2>",
        "text":"<p class=\"editor-paragraph\" dir=\"ltr\" style=\"text-align: justify;\"><span style=\"white-space: pre-wrap;\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</span></p><p class=\"editor-paragraph\" dir=\"ltr\" style=\"text-align: justify;\"><span style=\"white-space: pre-wrap;\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span></p>",
        "question":"<p class=\"editor-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Where does it come from?</span></p>"
     },
     "uiDisplayInfo":{
        "mainFields":[
           "heading",
           "text"
        ]
     },
     "createdAt":"2024-01-24T10:26:47.610153+00:00",
     "lastModifiedAt":"2024-01-24T10:26:47.610153+00:00"
  }
] as MockData[]