"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3138],{8768:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return u}});var a,i=n(87462),o=n(63366),s=(n(15007),n(64983)),r=n(91515),p=["components"],d={},c=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),l={_frontmatter:d},m=r.Z;function u(e){var t=e.components,n=(0,o.Z)(e,p);return(0,s.mdx)(m,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"quickstart-for-adobe-document-generation-api-net"},"Quickstart for Adobe Document Generation API (.NET)"),(0,s.mdx)("p",null,"To get started using Adobe Document Generation API, let's walk through a simple scenario - using a Word document as a template for dynamic receipt generation in PDF. In this guide, we will walk you through the complete process for creating a program that will accomplish this task. "),(0,s.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.mdx)("p",null,"To complete this guide, you will need:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download"},".NET Core: version 2.1 or above")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".Net SDK")),(0,s.mdx)("li",{parentName:"ul"},"A build tool: Either Visual Studio or .NET Core CLI."),(0,s.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,s.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,s.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,s.mdx)("p",null,"1) To begin, open your browser to ",(0,s.mdx)("a",{parentName:"p",href:"https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api"},"https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/5530d/shot1.webp 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0c8fb/shot1.webp 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dd4a7/shot1.png 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0f09e/shot1.png 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,s.mdx)("p",null,'3) Change the "Choose language" setting to ".Net". '),(0,s.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,s.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"995px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/171d62160ca17effdf2bba13363243dd/5530d/shot2.webp 320w","/pdfservices-api-documentation/static/171d62160ca17effdf2bba13363243dd/0c8fb/shot2.webp 640w","/pdfservices-api-documentation/static/171d62160ca17effdf2bba13363243dd/71700/shot2.webp 995w"],sizes:"(max-width: 995px) 100vw, 995px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/171d62160ca17effdf2bba13363243dd/dd4a7/shot2.png 320w","/pdfservices-api-documentation/static/171d62160ca17effdf2bba13363243dd/0f09e/shot2.png 640w","/pdfservices-api-documentation/static/171d62160ca17effdf2bba13363243dd/aa4b8/shot2.png 995w"],sizes:"(max-width: 995px) 100vw, 995px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/171d62160ca17effdf2bba13363243dd/aa4b8/shot2.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"6) After your credentials are created, they are automatically downloaded:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"612px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/5530d/shot3.webp 320w","/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/d408e/shot3.webp 612w"],sizes:"(max-width: 612px) 100vw, 612px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/dd4a7/shot3.png 320w","/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/dbf98/shot3.png 612w"],sizes:"(max-width: 612px) 100vw, 612px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/dbf98/shot3.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,s.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-.NetSamples.zip. If you unzip that archive, you will find a README file, your private key, and a folder of samples:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"902px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/5530d/shot5.webp 320w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/0c8fb/shot5.webp 640w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/2096f/shot5.webp 902w"],sizes:"(max-width: 902px) 100vw, 902px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/dd4a7/shot5.png 320w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/0f09e/shot5.png 640w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/8d021/shot5.png 902w"],sizes:"(max-width: 902px) 100vw, 902px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/8d021/shot5.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"2) We need two things from this download. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,s.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file. You can find this in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"adobe-DC.PDFServicesSDK.NET.Samples")," folder, inside any of the sample subdirectories, so for example, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"CombinePDF")," folder."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/5530d/shot6.webp 320w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/0c8fb/shot6.webp 640w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/94b1e/shot6.webp 1280w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/7ef82/shot6.webp 1664w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/dd4a7/shot6.png 320w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/0f09e/shot6.png 640w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/bbbf7/shot6.png 1280w","/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/7bd25/shot6.png 1664w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/1e8f48fa3ebc2fcba1ee0ac057c084e6/bbbf7/shot6.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Note that that private key is ",(0,s.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,s.mdx)("p",null,"3) Take these two files and place them in a new directory."),(0,s.mdx)("p",null,"4) In your new directory, create a new file, ",(0,s.mdx)("inlineCode",{parentName:"p"},"ExtractTextInfoFromPDF.csproj"),". This file will declare our requirements as well as help define the application we're creating."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk">\n\n    <PropertyGroup>\n        <OutputType>Exe</OutputType>\n        <TargetFramework>netcoreapp3.1</TargetFramework>\n    </PropertyGroup>\n\n    <ItemGroup>\n        <PackageReference Include="log4net" Version="2.0.12" />\n        <PackageReference Include="Adobe.PDFServicesSDK" Version="2.2.1" />\n    </ItemGroup>\n\n    <ItemGroup>\n        <None Update="pdfservices-api-credentials.json">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n        <None Update="private.key">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n        <None Update="log4net.config">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n    </ItemGroup>\n\n</Project>\n')),(0,s.mdx)("p",null,"Our application will take a Word document, ",(0,s.mdx)("inlineCode",{parentName:"p"},"receiptTemplate.docx")," (downloadable from ",(0,s.mdx)("a",{parentName:"p",href:"/pdfservices-api-documentation/receiptTemplate.docx"},"here"),"), and combine it with data in a JSON file, ",(0,s.mdx)("inlineCode",{parentName:"p"},"receipt.json")," (downloadable from ",(0,s.mdx)("a",{parentName:"p",href:"/pdfservices-api-documentation/receipt.json"},"here"),"), to be sent to the Document Services API and generate a receipt PDF."),(0,s.mdx)("p",null,"5) In your editor, open the directory where you previously copied the credentials and created the ",(0,s.mdx)("inlineCode",{parentName:"p"},"csproj")," file. Create a new file, ",(0,s.mdx)("inlineCode",{parentName:"p"},"Program.cs"),". "),(0,s.mdx)("p",null,"Now you're ready to begin coding."),(0,s.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,s.mdx)("p",null,"1) Let's start by looking at the Word template. If you open the document in Microsoft Word, you'll notice multiple tokens throughout the document (called out by the use of ",(0,s.mdx)("inlineCode",{parentName:"p"},"{{")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"}}"),")."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"109.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/5530d/shot10.webp 320w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/0c8fb/shot10.webp 640w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/94b1e/shot10.webp 1280w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/708fc/shot10.webp 1359w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/dd4a7/shot10.png 320w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/0f09e/shot10.png 640w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/bbbf7/shot10.png 1280w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/14c08/shot10.png 1359w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/bbbf7/shot10.png",alt:"Example of tokens",title:"Example of tokens",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"When the Document Generation API is used, these tokens are replaced with the JSON data sent to the API. These tokens support simple replacements, for example, ",(0,s.mdx)("inlineCode",{parentName:"p"},"{{Customer.Name}}"),' will be replaced by a customer\'s name passed in JSON. You can also have dynamic tables. In the Word template, the table uses invoice items as a way to dynamically render whatever items were ordered. Conditions can also be used to hide or show content as you can see two conditions at the end of the document. Finally, basic math can be also be dynamically applied, as seen in the "Grand Total". '),(0,s.mdx)("p",null,"2) Next, let's look at our sample data: "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "author": "Gary Lee",\n  "Company": {\n    "Name": "Projected",\n    "Address": "19718 Mandrake Way",\n    "PhoneNumber": "+1-100000098"\n  },\n  "Invoice": {\n    "Date": "January 15, 2021",\n    "Number": 123,\n    "Items": [\n      {\n        "item": "Gloves",\n        "description": "Microwave gloves",\n        "UnitPrice": 5,\n        "Quantity": 2,\n        "Total": 10\n      },\n      {\n        "item": "Bowls",\n        "description": "Microwave bowls",\n        "UnitPrice": 10,\n        "Quantity": 2,\n        "Total": 20\n      }\n    ]\n  },\n  "Customer": {\n    "Name": "Collins Candy",\n    "Address": "315 Dunning Way",\n    "PhoneNumber": "+1-200000046",\n    "Email": "cc@abcdef.co.dw"\n  },\n  "Tax": 5,\n  "Shipping": 5,\n  "clause": {\n    "overseas": "The shipment might take 5-10 more than informed."\n  },\n  "paymentMethod": "Cash"\n}\n')),(0,s.mdx)("p",null,"Notice how the tokens in the Word document match up with values in our JSON. While our example will use a hard coded set of data in a file, production applications can get their data from anywhere. Now let's get into our code."),(0,s.mdx)("p",null,"3) We'll begin by including our required dependencies:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},"using System.IO;\nusing System;\nusing System.Collections.Generic;\nusing log4net.Repository;\nusing log4net.Config;\nusing log4net;\nusing System.Reflection;\nusing Adobe.PDFServicesSDK;\nusing Adobe.PDFServicesSDK.auth;\nusing Adobe.PDFServicesSDK.pdfops;\nusing Adobe.PDFServicesSDK.io;\nusing Adobe.PDFServicesSDK.exception;\nusing Adobe.PDFServicesSDK.options.documentmerge;\nusing Newtonsoft.Json.Linq;\n")),(0,s.mdx)("p",null,"4) Now let's define our main class and ",(0,s.mdx)("inlineCode",{parentName:"p"},"Main")," method:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},"namespace GeneratePDF\n{\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n        }\n    }\n}\n")),(0,s.mdx)("p",null,"5) Inside our class, we'll begin by defining our input Word, JSON and output filenames. If the output file already exists, it will be deleted:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},'String input = "receiptTemplate.docx";\n\nString output = "/generatedReceipt.pdf";\nif(File.Exists(Directory.GetCurrentDirectory() + output))\n{\n    File.Delete(Directory.GetCurrentDirectory() + output);\n}\n\nstring json = File.ReadAllText("receipt.json");\nJObject data = JObject.Parse(json);\n')),(0,s.mdx)("p",null,"These lines are hard coded but in a real application would typically be dynamic."),(0,s.mdx)("p",null,"6) Next, we setup the SDK to use our credentials."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},'// Initial setup, create credentials instance.\nCredentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n    .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n    .Build();\n\n// Create an ExecutionContext using credentials and create a new operation instance.\nExecutionContext executionContext = ExecutionContext.Create(credentials);\n')),(0,s.mdx)("p",null,"This code both points to the credentials downloaded previously as well as sets up an execution context object that will be used later."),(0,s.mdx)("p",null,"7) Now, let's create the operation:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},"DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(data, OutputFormat.PDF);\nDocumentMergeOperation documentMergeOperation = DocumentMergeOperation.CreateNew(documentMergeOptions);\n\n// Provide an input FileRef for the operation.\nFileRef sourceFileRef = FileRef.CreateFromLocalFile(input);\ndocumentMergeOperation.SetInput(sourceFileRef);\n")),(0,s.mdx)("p",null,"This set of code defines what we're doing (a document merge operation, the SDK's way of describing Document Generation), points to our local JSON file and specifies the output is a PDF. It also points to the Word file used as a template."),(0,s.mdx)("p",null,"8) The next code block executes the operation:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},"// Execute the operation.\nFileRef result = documentMergeOperation.Execute(executionContext);\n\n// Save the result to the specified location.\nresult.SaveAs(Directory.GetCurrentDirectory() + output);\n")),(0,s.mdx)("p",null,"This code runs the document generation process and then stores the result PDF document to the file system. "),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1097px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3ba6fd7f4873f4af950745ff57fdc955/5530d/shot9.webp 320w","/pdfservices-api-documentation/static/3ba6fd7f4873f4af950745ff57fdc955/0c8fb/shot9.webp 640w","/pdfservices-api-documentation/static/3ba6fd7f4873f4af950745ff57fdc955/9186d/shot9.webp 1097w"],sizes:"(max-width: 1097px) 100vw, 1097px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3ba6fd7f4873f4af950745ff57fdc955/dd4a7/shot9.png 320w","/pdfservices-api-documentation/static/3ba6fd7f4873f4af950745ff57fdc955/0f09e/shot9.png 640w","/pdfservices-api-documentation/static/3ba6fd7f4873f4af950745ff57fdc955/c37c4/shot9.png 1097w"],sizes:"(max-width: 1097px) 100vw, 1097px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3ba6fd7f4873f4af950745ff57fdc955/c37c4/shot9.png",alt:"Example running at the command line",title:"Example running at the command line",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Here's the complete application (",(0,s.mdx)("inlineCode",{parentName:"p"},"Program.cs"),"):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-csharp"},'using System.IO;\nusing System;\nusing System.Collections.Generic;\nusing log4net.Repository;\nusing log4net.Config;\nusing log4net;\nusing System.Reflection;\nusing Adobe.PDFServicesSDK;\nusing Adobe.PDFServicesSDK.auth;\nusing Adobe.PDFServicesSDK.pdfops;\nusing Adobe.PDFServicesSDK.io;\nusing Adobe.PDFServicesSDK.exception;\nusing Adobe.PDFServicesSDK.options.documentmerge;\nusing Newtonsoft.Json.Linq;\n\nnamespace GeneratePDF\n{\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            // Configure the logging.\n            ConfigureLogging();\n            try\n            {\n\n                String input = "receiptTemplate.docx";\n\n                String output = "/generatedReceipt.pdf";\n                if(File.Exists(Directory.GetCurrentDirectory() + output))\n                {\n                    File.Delete(Directory.GetCurrentDirectory() + output);\n                }\n\n                string json = File.ReadAllText("receipt.json");\n                JObject data = JObject.Parse(json);\n\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                    .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                    .Build();\n\n                // Create an ExecutionContext using credentials and create a new operation instance.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n\n                DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(data, OutputFormat.PDF);\n                DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.CreateNew(documentMergeOptions);\n \n                // Provide an input FileRef for the operation.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(input);\n                documentMergeOperation.SetInput(sourceFileRef);\n                \n                // Execute the operation.\n                FileRef result = documentMergeOperation.Execute(executionContext);\n\n                // Save the result to the specified location.\n                result.SaveAs(Directory.GetCurrentDirectory() + output);\n                \n                Console.Write("All Done.\\n");\n\n                \n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (ServiceApiException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (SDKException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (IOException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (Exception ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n        }\n\n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n    }\n}\n')),(0,s.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,s.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/document-generation-api/"},"review the documentation")," for many other examples and reach out on our ",(0,s.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-document-generation-api-quickstarts-dotnet-index-md-d4e2273013c231776fd7.js.map