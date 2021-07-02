(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7054],{5333:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return m}});var i,r=t(2122),o=t(9756),a=(t(5007),t(4983)),c=t(9536),s=["components"],l={},p=(i="CodeBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),d={_frontmatter:l},u=c.Z;function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.mdx)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"linearize-pdfs"},"Linearize PDFs"),(0,a.mdx)("p",null,"Linearizing a PDF creates a web-optimized PDF file which supports\nincremental access in network environments."),(0,a.mdx)(p,{slots:"heading, code",repeat:"3",languages:"Java, .NET, NodeJS",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"sample"},"Sample"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.linearizepdf.LinearizePDF\n \n     public class LinearizePDF {\n       // Initialize the logger.\n       private static final Logger LOGGER = LoggerFactory.getLogger(LinearizePDF.class);\n    \n       public static void main(String[] args) {\n    \n           try {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                       .fromFile("pdfservices-api-credentials.json")\n                       .build();\n    \n               // Create an ExecutionContext using credentials and create a new operation instance.\n               ExecutionContext executionContext = ExecutionContext.create(credentials);\n               LinearizePDFOperation linearizePDFOperation = LinearizePDFOperation.createNew();\n    \n               // Set operation input from a source file.\n               FileRef source = FileRef.createFromLocalFile("src/main/resources/linearizePDFInput.pdf");\n               linearizePDFOperation.setInput(source);\n    \n               // Execute the operation\n               FileRef result = linearizePDFOperation.execute(executionContext);\n    \n               // Save the result at the specified location\n               result.saveAs("output/linearizePDFOutput.pdf");\n    \n           } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n               LOGGER.error("Exception encountered while executing operation", ex);\n           }\n       }\n     }\n')),(0,a.mdx)("h4",{id:"sample-1"},"Sample"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd LinearizePDF/\n// dotnet run LinearizePDF.csproj\n\n namespace LinearizePDF\n {\n   class Program\n   {\n       private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n       static void Main()\n       {\n           //Configure the logging\n           ConfigureLogging();\n           try\n           {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                               .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                               .Build();\n\n               // Create an ExecutionContext using credentials and create a new operation instance.\n               ExecutionContext executionContext = ExecutionContext.Create(credentials);\n               LinearizePDFOperation linearizePDFOperation = LinearizePDFOperation.CreateNew();\n\n               // Set operation input from a source file.\n               FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"linearizePDFInput.pdf");\n               linearizePDFOperation.SetInput(sourceFileRef);\n\n               // Execute the operation.\n               FileRef result = linearizePDFOperation.Execute(executionContext);\n\n               // Save the result to the specified location.\n               result.SaveAs(Directory.GetCurrentDirectory() + "/output/linearizePDFOutput.pdf");\n           }\n           catch (ServiceUsageException ex)\n           {\n               log.Error("Exception encountered while executing operation", ex);\n           }\n           // Catch more errors here . . .\n       }\n\n       static void ConfigureLogging()\n       {\n           ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n           XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n       }\n   }\n }\n')),(0,a.mdx)("h4",{id:"sample-2"},"Sample"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/linearizepdf/linearize-pdf.js\n\n   const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n  \n   try {\n     // Initial setup, create credentials instance.\n     const credentials =  PDFServicesSdk.Credentials\n         .serviceAccountCredentialsBuilder()\n         .fromFile(\"pdfservices-api-credentials.json\")\n         .build();\n  \n     // Create an ExecutionContext using credentials and create a new operation instance.\n     const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n         linearizePDF = PDFServicesSdk.LinearizePDF,\n         linearizePDFOperation = linearizePDF.Operation.createNew();\n  \n     // Set operation input from a source file.\n     const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/linearizePDFInput.pdf');\n     linearizePDFOperation.setInput(input);\n  \n     // Execute the operation and Save the result to the specified location.\n     linearizePDFOperation.execute(executionContext)\n         .then(result => result.saveAsFile('output/linearizePDFOutput.pdf'))\n         .catch(err => {\n             if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                 || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                 console.log('Exception encountered while executing operation', err);\n             } else {\n                 console.log('Exception encountered while executing operation', err);\n             }\n         });\n   } catch (err) {\n     console.log('Exception encountered while executing operation', err);\n   }\n")),(0,a.mdx)("p",null,"The REST API example can be found ",(0,a.mdx)("a",{parentName:"p",href:"https://documentcloud.adobe.com/document-services/index.html#post-linearizePDF"},"here")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-pdf-services-api-howtos-linearize-pdf-md-81d3d6b717b629a8d58d.js.map