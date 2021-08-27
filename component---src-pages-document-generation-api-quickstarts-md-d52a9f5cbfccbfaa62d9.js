(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5199],{92465:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return g}});var o=t(22122),r=t(19756),i=(t(15007),t(64983)),a=t(99536),c=["components"],s={},u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},p=u("InlineAlert"),d=u("CodeBlock"),l={_frontmatter:s},m=a.Z;function g(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.mdx)(m,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"quickstarts"},"Quickstarts"),(0,i.mdx)("p",null,"Use Document Generation API to merge JSON data into Word based document\ntemplates and produce high fidelity PDF and Word documents from any\napplication."),(0,i.mdx)("h2",{id:"how-it-works"},"How It Works"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Use MS Word Add-In to design document templates")),(0,i.mdx)("p",null,(0,i.mdx)("img",{parentName:"p",src:"/pdfservices-api-documentation/508d74f50d6ab35962a0cedc8e10dea4/design_document_templates.gif",alt:"image"})),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Prepare your JSON data")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n    "Client" : {\n      "Name" : "Some Corp Inc",\n      "Address" : "Somewhere Street"\n    }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Create Data Driven Word and PDF documents using Document Generation\nAPI")),(0,i.mdx)("p",null,"There are two ways to access Document Generation API:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Use cloud based ",(0,i.mdx)("a",{parentName:"li",href:"https://www.adobe.com/go/dcsdk_APIdocs#post-documentGeneration"},"REST\nAPI"),"."),(0,i.mdx)("li",{parentName:"ul"},"Or, directly use our offering through ",(0,i.mdx)("a",{parentName:"li",href:"../pdf-services-api"},"PDFServices\nSDK"),".")),(0,i.mdx)(p,{slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"To get started with PDFServices SDK, refer ",(0,i.mdx)("a",{parentName:"p",href:"../pdf-services-api"},"Quickstarts Section")),(0,i.mdx)("p",null,"The samples below illustrate how to merge Word based document template\nwith the JSON data to generate the output document in the Word or PDF\nformat."),(0,i.mdx)("h3",{id:"generate-word-document"},"Generate Word document"),(0,i.mdx)(d,{slots:"heading, code",repeat:"3",languages:"Java, .NET, NodeJS",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"sample"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.documentmerge.MergeDocumentToDOCX\n \n   package com.adobe.pdfservices.operation.samples.documentmerge;\n \n   public class MergeDocumentToDOCX {\n \n      // Initialize the logger.\n      private static final Logger LOGGER = LoggerFactory.getLogger(MergeDocumentToDOCX.class);\n \n      public static void main(String[] args) {\n \n          try {\n \n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n \n            // Setup input data for the document merge process.\n            JSONObject jsonDataForMerge = new JSONObject("{\\"customerName\\": \\"Kane Miller\\",\\"customerVisits\\": 100}");\n \n            // Create an ExecutionContext using credentials.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n \n            // Create a new DocumentMergeOptions instance.\n            DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.DOCX);\n \n            // Create a new DocumentMergeOperation instance with the DocumentMergeOptions instance.\n            DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.createNew(documentMergeOptions);\n \n            // Set the operation input document template from a source file.\n            FileRef documentTemplate = FileRef.createFromLocalFile("src/main/resources/documentMergeTemplate.docx");\n            documentMergeOperation.setInput(documentTemplate);\n \n            // Execute the operation.\n            FileRef result = documentMergeOperation.execute(executionContext);\n \n            // Save the result to the specified location.\n            result.saveAs("output/documentMergeOutput.docx");\n \n          } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n              LOGGER.error("Exception encountered while executing operation", ex);\n          }\n      }\n   }\n     \n')),(0,i.mdx)("h4",{id:"sample-1"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd MergeDocumentToDocx/\n// dotnet run MergeDocumentToDOCX.csproj\n\n  namespace MergeDocumentToDOCX\n   {\n       class Program\n       {\n           private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n  \n           static void Main()\n           {\n               //Configure the logging.\n               ConfigureLogging();\n               try\n               {\n                   // Initial setup, create credentials instance.\n                   Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                            .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                            .Build();\n  \n                   // Create an ExecutionContext using credentials.\n                   ExecutionContext executionContext = ExecutionContext.Create(credentials);\n  \n                   // Setup input data for the document merge process.\n                   JObject jsonDataForMerge = JObject.Parse("{\\"customerName\\": \\"Kane Miller\\",\\"customerVisits\\": 100}");\n  \n                   // Create a new DocumentMerge Options instance.\n                   DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.DOCX);\n  \n                   // Create a new DocumentMerge Operation instance with the DocumentMerge Options instance.\n                   DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.CreateNew(documentMergeOptions);\n  \n                   // Set the operation input document template from a source file.\n                   documentMergeOperation.SetInput(FileRef.CreateFromLocalFile(@"documentMergeTemplate.docx"));\n  \n                   // Execute the operation.\n                   FileRef result = documentMergeOperation.Execute(executionContext);\n  \n                   // Save the result to the specified location.\n                   result.SaveAs(Directory.GetCurrentDirectory() + "/output/DocumentMergeOutput.docx");\n               }\n               catch (ServiceUsageException ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n               catch (ServiceApiException ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n               catch (SDKException ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n               catch (IOException ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n               catch (Exception ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n           }\n  \n           static void ConfigureLogging()\n           {\n               ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n               XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n           }\n       }\n   }\n')),(0,i.mdx)("h4",{id:"sample-2"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/documentmerge/merge-document-to-docx.js\n\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n try {\n   // Initial setup, create credentials instance.\n   const credentials =  PDFServicesSdk.Credentials\n       .serviceAccountCredentialsBuilder()\n       .fromFile(\"pdfservices-api-credentials.json\")\n       .build();\n\n   // Setup input data for the document merge process.\n   const jsonString = \"{\\\"customerName\\\": \\\"Kane Miller\\\", \\\"customerVisits\\\": 100}\",\n       jsonDataForMerge = JSON.parse(jsonString);\n\n   // Create an ExecutionContext using credentials.\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n\n   // Create a new DocumentMerge options instance.\n   const documentMerge = PDFServicesSdk.DocumentMerge,\n       documentMergeOptions = documentMerge.options,\n       options = new documentMergeOptions.DocumentMergeOptions(jsonDataForMerge, documentMergeOptions.OutputFormat.DOCX);\n\n   // Create a new operation instance using the options instance.\n   const documentMergeOperation = documentMerge.Operation.createNew(options);\n\n   // Set operation input document template from a source file.\n   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/documentMergeTemplate.docx');\n   documentMergeOperation.setInput(input);\n\n   // Execute the operation and Save the result to the specified location.\n   documentMergeOperation.execute(executionContext)\n       .then(result => result.saveAsFile('output/documentMergeOutput.docx'))\n       .catch(err => {\n           if(err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n }\n catch (err) {\n     console.log('Exception encountered while executing operation', err);\n }\n")),(0,i.mdx)("h3",{id:"generate-pdf-document"},"Generate PDF document"),(0,i.mdx)(d,{slots:"heading, code",repeat:"3",languages:"Java, .NET, NodeJS",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"sample-3"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.documentmerge.MergeDocumentToPDF\n \n    public class MergeDocumentToPDF {\n   \n      // Initialize the logger.\n      private static final Logger LOGGER = LoggerFactory.getLogger(MergeDocumentToPDF.class);\n   \n      public static void main(String[] args) {\n   \n            try {\n   \n              // Initial setup, create credentials instance.\n              Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                      .fromFile("pdfservices-api-credentials.json")\n                      .build();\n   \n              // Setup input data for the document merge process.\n              String content = new String(Files.readAllBytes(Paths.get("src/main/resources/salesOrder.json")));\n              JSONObject jsonDataForMerge = new JSONObject(content);\n   \n              // Create an ExecutionContext using credentials.\n              ExecutionContext executionContext = ExecutionContext.create(credentials);\n   \n              //Create a new DocumentMergeOptions instance.\n              DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.PDF);\n   \n              // Create a new DocumentMergeOperation instance with the DocumentMergeOptions instance.\n              DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.createNew(documentMergeOptions);\n   \n              // Set the operation input document template from a source file.\n              FileRef documentTemplate = FileRef.createFromLocalFile("src/main/resources/salesOrderTemplate.docx");\n              documentMergeOperation.setInput(documentTemplate);\n   \n              // Execute the operation.\n              FileRef result = documentMergeOperation.execute(executionContext);\n   \n              // Save the result to the specified location.\n              result.saveAs("output/salesOrderOutput.pdf");\n   \n            } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n                LOGGER.error("Exception encountered while executing operation", ex);\n            }\n        }\n     }\n     \n')),(0,i.mdx)("h4",{id:"sample-4"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd MergeDocumentToPDF/\n// dotnet run MergeDocumentToPDF.csproj\n\n  namespace MergeDocumentToPDF\n   {\n       class Program\n       {\n           private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n  \n           static void Main()\n           {\n               //Configure the logging.\n               ConfigureLogging();\n               try\n               {\n                   // Initial setup, create credentials instance.\n                   Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                 .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                 .Build();\n  \n                   // Create an ExecutionContext using credentials.\n                   ExecutionContext executionContext = ExecutionContext.Create(credentials);\n  \n                   // Setup input data for the document merge process.\n                   var content = File.ReadAllText(@"salesOrder.json");\n                   JObject jsonDataForMerge = JObject.Parse(content);\n  \n                   // Create a new DocumentMerge Options instance.\n                   DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.PDF);\n  \n                   // Create a new DocumentMerge Operation instance with the DocumentMerge Options instance.\n                   DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.CreateNew(documentMergeOptions);\n  \n                   // Set the operation input document template from a source file.\n                   documentMergeOperation.SetInput(FileRef.CreateFromLocalFile(@"salesOrderTemplate.docx"));\n  \n                   // Execute the operation.\n                   FileRef result = documentMergeOperation.Execute(executionContext);\n  \n                   // Save the result to the specified location.\n                   result.SaveAs(Directory.GetCurrentDirectory() + "/output/salesOrderOutput.pdf");\n               }\n               catch (ServiceUsageException ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n               catch (ServiceApiException ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n               catch (SDKException ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n               catch (IOException ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n               catch (Exception ex)\n               {\n                   log.Error("Exception encountered while executing operation", ex);\n               }\n           }\n  \n           static void ConfigureLogging()\n           {\n               ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n               XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n           }\n       }\n   }\n')),(0,i.mdx)("h4",{id:"sample-5"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/documentmerge/merge-document-to-docx.js\n\n  const PDFServicesSdk = require('@adobe/pdfservices-node-sdk'),\n      fs = require('fs');\n \n  try {\n    // Initial setup, create credentials instance.\n    const credentials =  PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n \n    // Setup input data for the document merge process.\n    const jsonString = fs.readFileSync('resources/salesOrder.json'),\n        jsonDataForMerge = JSON.parse(jsonString);\n \n    // Create an ExecutionContext using credentials.\n    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n \n    // Create a new DocumentMerge options instance.\n    const documentMerge = PDFServicesSdk.DocumentMerge,\n        documentMergeOptions = documentMerge.options,\n        options = new documentMergeOptions.DocumentMergeOptions(jsonDataForMerge, documentMergeOptions.OutputFormat.PDF);\n \n    // Create a new operation instance using the options instance.\n    const documentMergeOperation = documentMerge.Operation.createNew(options)\n \n    // Set operation input document template from a source file.\n    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/salesOrderTemplate.docx');\n    documentMergeOperation.setInput(input);\n \n    // Execute the operation and Save the result to the specified location.\n    documentMergeOperation.execute(executionContext)\n        .then(result => result.saveAsFile('output/salesOrderOutput.pdf'))\n        .catch(err => {\n            if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n  } catch (err) {\n      console.log('Exception encountered while executing operation', err);\n  }\n  \n")),(0,i.mdx)("p",null,"As a result of the Document Generation API, template tags are replaced\nwith the input JSON data."),(0,i.mdx)("p",null,(0,i.mdx)("img",{parentName:"p",src:"/pdfservices-api-documentation/6adba199630ad0021dc74536d6a0e329/generate_document.gif",alt:"image"})),(0,i.mdx)("h2",{id:"api-limitations"},"API Limitations"),(0,i.mdx)("p",null,"The Document Generation API has the following limitations:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Document template size limit"),": Maximum supported document\ntemplate file size is 100MB."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Input JSON size limit"),": Maximum supported input JSON size is\n10MB.")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-document-generation-api-quickstarts-md-d52a9f5cbfccbfaa62d9.js.map