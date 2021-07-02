(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[231],{7048:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return x}});var o,r=t(2122),a=t(9756),i=(t(5007),t(4983)),p=t(9536),c=["components"],s={},l=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),d={_frontmatter:s},u=p.Z;function x(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.mdx)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"export-pdf"},"Export PDF"),(0,i.mdx)("h2",{id:"export-a-pdf"},"Export a PDF"),(0,i.mdx)("p",null,"The sample below converts a PDF file into a number of ",(0,i.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/pdfservices-java-sdk-samples/apidocs/latest/com/adobe/platform/operation/pdfops/options/exportpdf/ExportPDFTargetFormat.html"},"supported\nformats"),"\nsuch as:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Microsoft Office file formats"),(0,i.mdx)("li",{parentName:"ul"},"Text files"),(0,i.mdx)("li",{parentName:"ul"},"Images")),(0,i.mdx)(l,{slots:"heading, code",repeat:"3",languages:"Java, .NET, NodeJS",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"sample"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.exportpdf.ExportPDFToDOCX\n\npublic class ExportPDFToDOCX {\n\n   // Initialize the logger.\n   private static final Logger LOGGER = LoggerFactory.getLogger(ExportPDFToDOCX.class);\n\n   public static void main(String[] args) {\n\n     try {\n       // Initial setup, create credentials instance.\n       Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n           .fromFile("pdfservices-api-credentials.json")\n           .build();\n       //Create an ExecutionContext using credentials and create a new operation instance.\n       ExecutionContext executionContext = ExecutionContext.create(credentials);\n       ExportPDFOperation exportPdfOperation = ExportPDFOperation.createNew(ExportPDFTargetFormat.DOCX);\n\n       // Set operation input from a local PDF file\n       FileRef sourceFileRef = FileRef.createFromLocalFile("src/main/resources/exportPDFInput.pdf");\n       exportPdfOperation.setInput(sourceFileRef);\n\n       // Execute the operation.\n       FileRef result = exportPdfOperation.execute(executionContext);\n\n       // Save the result to the specified location.\n       result.saveAs("output/exportPdfOutput.docx");\n\n     } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n       LOGGER.error("Exception encountered while executing operation", ex);\n     }\n   }\n }\n  \n')),(0,i.mdx)("h4",{id:"sample-1"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd ExportPDFToDocx/\n// dotnet run ExportPDFToDocx.csproj\n\n namespace ExportPDFToDocx\n  {\n    class Program\n    {\n      private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n      static void Main()\n      {\n        //Configure the logging\n        ConfigureLogging();\n        try\n        {\n          // Initial setup, create credentials instance.\n          Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                  .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                  .Build();\n \n          //Create an ExecutionContext using credentials and create a new operation instance.\n          ExecutionContext executionContext = ExecutionContext.Create(credentials);\n          ExportPDFOperation exportPdfOperation = ExportPDFOperation.CreateNew(ExportPDFTargetFormat.DOCX);\n \n          // Set operation input from a local PDF file\n          FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"exportPdfInput.pdf");\n          exportPdfOperation.SetInput(sourceFileRef);\n \n          // Execute the operation.\n          FileRef result = exportPdfOperation.Execute(executionContext);\n \n          // Save the result to the specified location.\n          result.SaveAs(Directory.GetCurrentDirectory() + "/output/exportPdfOutput.docx");\n        }\n        catch (ServiceUsageException ex)\n        {\n          log.Error("Exception encountered while executing operation", ex);\n        }\n        // Catch more errors here. . .\n      }\n \n      static void ConfigureLogging()\n      {\n        ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n        XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n      }\n    }\n  }\n')),(0,i.mdx)("h4",{id:"sample-2"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/exportpdf/export-pdf-to-docx.js\n\nconst PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n try {\n   // Initial setup, create credentials instance.\n   const credentials =  PDFServicesSdk.Credentials\n       .serviceAccountCredentialsBuilder()\n       .fromFile(\"pdfservices-api-credentials.json\")\n       .build();\n\n   //Create an ExecutionContext using credentials and create a new operation instance.\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n       exportPDF = PDFServicesSdk.ExportPDF,\n       exportPdfOperation = exportPDF.Operation.createNew(exportPDF.SupportedTargetFormats.DOCX);\n\n   // Set operation input from a source file\n   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/exportPDFInput.pdf');\n   exportPdfOperation.setInput(input);\n\n   // Execute the operation and Save the result to the specified location.\n   exportPdfOperation.execute(executionContext)\n       .then(result => result.saveAsFile('output/exportPdfOutput.docx'))\n       .catch(err => {\n           if(err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n } catch (err) {\n   console.log('Exception encountered while executing operation', err);\n }\n")),(0,i.mdx)("p",null,"The REST API example can be found ",(0,i.mdx)("a",{parentName:"p",href:"https://documentcloud.adobe.com/document-services/index.html#post-exportPDF"},"here")),(0,i.mdx)("h2",{id:"export-a-pdf-to-images"},"Export a PDF to images"),(0,i.mdx)("p",null,'The sample below converts a PDF file to one or more jpeg or png images.\nExporting to an image produces a zip archive containing one image per\npage. Each image file name ends with\n"',"_","\\<unpadded","_","page","_","index","_","number",">",'". For example, a PDF file with 15\npages will generate 15 image files. The first file\'s name ends with\n"',"_",'1" and the last file\'s name ends with "',"_",'15".'),(0,i.mdx)(l,{slots:"heading, code",repeat:"3",languages:"Java, .NET, NodeJS",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"sample-3"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.exportpdf.ExportPDFToJPEG\n\n package com.adobe.pdfservices.operation.samples.exportpdf;\n\n\n public class ExportPDFToJPEG {\n\n   // Initialize the logger.\n   private static final Logger LOGGER = LoggerFactory.getLogger(ExportPDFToJPEG.class);\n\n   public static void main(String[] args) {\n     try {\n\n       // Initial setup, create credentials instance.\n       Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n           .fromFile("pdfservices-api-credentials.json")\n           .build();\n\n       //Create an ExecutionContext using credentials and create a new operation instance.\n       ExecutionContext executionContext = ExecutionContext.create(credentials);\n       ExportPDFOperation exportPdfOperation = ExportPDFOperation.createNew(ExportPDFTargetFormat.JPEG);\n\n       // Set operation input from a source file.\n       FileRef sourceFileRef = FileRef.createFromLocalFile("src/main/resources/exportPDFToImageInput.pdf");\n       exportPdfOperation.setInput(sourceFileRef);\n\n       // Execute the operation.\n       FileRef result = exportPdfOperation.execute(executionContext);\n\n       // Save the result to the specified location.\n       result.saveAs("output/exportPDFToJPEG.zip");\n\n     } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n       LOGGER.error("Exception encountered while executing operation", ex);\n     }\n   }\n }\n  \n')),(0,i.mdx)("h4",{id:"sample-4"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd ExportPDFToImage/\n// dotnet run ExportPDFToImage.csproj\n\n namespace ExportPDFToImage\n  {\n    class Program\n    {\n      private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n      static void Main()\n      {\n        //Configure the logging\n        ConfigureLogging();\n        try\n        {\n          // Initial setup, create credentials instance.\n          Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                  .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                  .Build();\n \n          //Create an ExecutionContext using credentials and create a new operation instance.\n          ExecutionContext executionContext = ExecutionContext.Create(credentials);\n          ExportPDFOperation exportPdfOperation = ExportPDFOperation.CreateNew(ExportPDFTargetFormat.JPEG);\n \n          // Set operation input from a source file.\n          FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"exportPdfToImageInput.pdf");\n          exportPdfOperation.SetInput(sourceFileRef);\n \n          // Execute the operation.\n          FileRef result = exportPdfOperation.Execute(executionContext);\n \n          // Save the result to the specified location.\n          result.SaveAs(Directory.GetCurrentDirectory() + "/output/exportPdfToImageOutput.zip");\n        }\n        catch (ServiceUsageException ex)\n        {\n          log.Error("Exception encountered while executing operation", ex);\n        }\n        // Catch more errors here. . .\n      }\n \n      static void ConfigureLogging()\n      {\n        ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n        XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n      }\n    }\n  }\n')),(0,i.mdx)("h4",{id:"sample-5"},"Sample"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/exportpdf/export-pdf-to-jpeg.js\n\n// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n try {\n   // Initial setup, create credentials instance.\n   const credentials =  PDFServicesSdk.Credentials\n       .serviceAccountCredentialsBuilder()\n       .fromFile(\"pdfservices-api-credentials.json\")\n       .build();\n\n   //Create an ExecutionContext using credentials and create a new operation instance.\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n       exportPDF = PDFServicesSdk.ExportPDF,\n       exportPdfOperation = exportPDF.Operation.createNew(exportPDF.SupportedTargetFormats.JPEG);\n\n   // Set operation input from a source file\n   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/exportPDFToImageInput.pdf');\n   exportPdfOperation.setInput(input);\n\n   // Execute the operation and Save the result to the specified location.\n   exportPdfOperation.execute(executionContext)\n       .then(result => result.saveAsFile('output/exportPDFToJPEG.zip'))\n       .catch(err => {\n           if(err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n } catch (err) {\n   console.log('Exception encountered while executing operation', err);\n }\n")),(0,i.mdx)("p",null,"The REST API example can be found ",(0,i.mdx)("a",{parentName:"p",href:"https://documentcloud.adobe.com/document-services/index.html#post-exportPDF"},"here")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-pdf-services-api-howtos-export-pdf-md-58741508a8c482b1c4dd.js.map