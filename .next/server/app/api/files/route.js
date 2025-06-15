/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/files/route";
exports.ids = ["app/api/files/route"];
exports.modules = {

/***/ "(rsc)/./app/api/files/route.ts":
/*!********************************!*\
  !*** ./app/api/files/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_aws_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/aws-config */ \"(rsc)/./lib/aws-config.ts\");\n\n\n\n// GET - List files\nasync function GET() {\n    try {\n        const s3Client = await (0,_lib_aws_config__WEBPACK_IMPORTED_MODULE_2__.getS3Client)();\n        const bucketName = await (0,_lib_aws_config__WEBPACK_IMPORTED_MODULE_2__.getBucketName)();\n        const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.ListObjectsV2Command({\n            Bucket: bucketName,\n            Prefix: 'uploads/'\n        });\n        const response = await s3Client.send(command);\n        const region = await (0,_lib_aws_config__WEBPACK_IMPORTED_MODULE_2__.getRegion)();\n        const files = response.Contents?.map((obj)=>({\n                key: obj.Key,\n                lastModified: obj.LastModified,\n                size: obj.Size,\n                url: `https://${bucketName}.s3.${region}.amazonaws.com/${obj.Key}`\n            })) || [];\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            files\n        });\n    } catch (error) {\n        console.error('Error listing files:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: 'Failed to list files'\n        }, {\n            status: 500\n        });\n    }\n}\n// DELETE - Delete a file\nasync function DELETE(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const key = searchParams.get('key');\n        if (!key) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: 'File key is required'\n            }, {\n                status: 400\n            });\n        }\n        const s3Client = await (0,_lib_aws_config__WEBPACK_IMPORTED_MODULE_2__.getS3Client)();\n        const bucketName = await (0,_lib_aws_config__WEBPACK_IMPORTED_MODULE_2__.getBucketName)();\n        const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.DeleteObjectCommand({\n            Bucket: bucketName,\n            Key: key\n        });\n        await s3Client.send(command);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error('Error deleting file:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: 'Failed to delete file'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ZpbGVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErRTtBQUN2QjtBQUNpQjtBQUV6RSxtQkFBbUI7QUFDWixlQUFlTTtJQUNwQixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNSiw0REFBV0E7UUFDbEMsTUFBTUssYUFBYSxNQUFNSiw4REFBYUE7UUFFdEMsTUFBTUssVUFBVSxJQUFJVCxvRUFBb0JBLENBQUM7WUFDdkNVLFFBQVFGO1lBQ1JHLFFBQVE7UUFDVjtRQUVBLE1BQU1DLFdBQVcsTUFBTUwsU0FBU00sSUFBSSxDQUFDSjtRQUVyQyxNQUFNSyxTQUFTLE1BQU1ULDBEQUFTQTtRQUM5QixNQUFNVSxRQUFRSCxTQUFTSSxRQUFRLEVBQUVDLElBQUlDLENBQUFBLE1BQVE7Z0JBQzNDQyxLQUFLRCxJQUFJRSxHQUFHO2dCQUNaQyxjQUFjSCxJQUFJSSxZQUFZO2dCQUM5QkMsTUFBTUwsSUFBSU0sSUFBSTtnQkFDZEMsS0FBSyxDQUFDLFFBQVEsRUFBRWpCLFdBQVcsSUFBSSxFQUFFTSxPQUFPLGVBQWUsRUFBRUksSUFBSUUsR0FBRyxFQUFFO1lBQ3BFLE9BQU8sRUFBRTtRQUVULE9BQU9sQixxREFBWUEsQ0FBQ3dCLElBQUksQ0FBQztZQUFFWDtRQUFNO0lBQ25DLEVBQUUsT0FBT1ksT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPekIscURBQVlBLENBQUN3QixJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBdUIsR0FDaEM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0Y7QUFFQSx5QkFBeUI7QUFDbEIsZUFBZUMsT0FBT0MsT0FBb0I7SUFDL0MsSUFBSTtRQUNGLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsUUFBUU4sR0FBRztRQUM1QyxNQUFNTixNQUFNYSxhQUFhRSxHQUFHLENBQUM7UUFFN0IsSUFBSSxDQUFDZixLQUFLO1lBQ1IsT0FBT2pCLHFEQUFZQSxDQUFDd0IsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUF1QixHQUNoQztnQkFBRUUsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTXRCLFdBQVcsTUFBTUosNERBQVdBO1FBQ2xDLE1BQU1LLGFBQWEsTUFBTUosOERBQWFBO1FBRXRDLE1BQU1LLFVBQVUsSUFBSVIsbUVBQW1CQSxDQUFDO1lBQ3RDUyxRQUFRRjtZQUNSWSxLQUFLRDtRQUNQO1FBRUEsTUFBTVosU0FBU00sSUFBSSxDQUFDSjtRQUVwQixPQUFPUCxxREFBWUEsQ0FBQ3dCLElBQUksQ0FBQztZQUFFUyxTQUFTO1FBQUs7SUFDM0MsRUFBRSxPQUFPUixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU96QixxREFBWUEsQ0FBQ3dCLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFRSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2JydW5vL3ppYmx5LWZyb250ZW5kL2FwcC9hcGkvZmlsZXMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdE9iamVjdHNWMkNvbW1hbmQsIERlbGV0ZU9iamVjdENvbW1hbmQgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtczMnO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGdldFMzQ2xpZW50LCBnZXRCdWNrZXROYW1lLCBnZXRSZWdpb24gfSBmcm9tICdAL2xpYi9hd3MtY29uZmlnJztcblxuLy8gR0VUIC0gTGlzdCBmaWxlc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzM0NsaWVudCA9IGF3YWl0IGdldFMzQ2xpZW50KCk7XG4gICAgY29uc3QgYnVja2V0TmFtZSA9IGF3YWl0IGdldEJ1Y2tldE5hbWUoKTtcbiAgICBcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IExpc3RPYmplY3RzVjJDb21tYW5kKHtcbiAgICAgIEJ1Y2tldDogYnVja2V0TmFtZSxcbiAgICAgIFByZWZpeDogJ3VwbG9hZHMvJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgczNDbGllbnQuc2VuZChjb21tYW5kKTtcbiAgICBcbiAgICBjb25zdCByZWdpb24gPSBhd2FpdCBnZXRSZWdpb24oKTtcbiAgICBjb25zdCBmaWxlcyA9IHJlc3BvbnNlLkNvbnRlbnRzPy5tYXAob2JqID0+ICh7XG4gICAgICBrZXk6IG9iai5LZXksXG4gICAgICBsYXN0TW9kaWZpZWQ6IG9iai5MYXN0TW9kaWZpZWQsXG4gICAgICBzaXplOiBvYmouU2l6ZSxcbiAgICAgIHVybDogYGh0dHBzOi8vJHtidWNrZXROYW1lfS5zMy4ke3JlZ2lvbn0uYW1hem9uYXdzLmNvbS8ke29iai5LZXl9YFxuICAgIH0pKSB8fCBbXTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGZpbGVzIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxpc3RpbmcgZmlsZXM6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gbGlzdCBmaWxlcycgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cblxuLy8gREVMRVRFIC0gRGVsZXRlIGEgZmlsZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBjb25zdCBrZXkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdrZXknKTtcbiAgICBcbiAgICBpZiAoIWtleSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnRmlsZSBrZXkgaXMgcmVxdWlyZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBzM0NsaWVudCA9IGF3YWl0IGdldFMzQ2xpZW50KCk7XG4gICAgY29uc3QgYnVja2V0TmFtZSA9IGF3YWl0IGdldEJ1Y2tldE5hbWUoKTtcblxuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgRGVsZXRlT2JqZWN0Q29tbWFuZCh7XG4gICAgICBCdWNrZXQ6IGJ1Y2tldE5hbWUsXG4gICAgICBLZXk6IGtleSxcbiAgICB9KTtcblxuICAgIGF3YWl0IHMzQ2xpZW50LnNlbmQoY29tbWFuZCk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gZGVsZXRlIGZpbGUnIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59ICJdLCJuYW1lcyI6WyJMaXN0T2JqZWN0c1YyQ29tbWFuZCIsIkRlbGV0ZU9iamVjdENvbW1hbmQiLCJOZXh0UmVzcG9uc2UiLCJnZXRTM0NsaWVudCIsImdldEJ1Y2tldE5hbWUiLCJnZXRSZWdpb24iLCJHRVQiLCJzM0NsaWVudCIsImJ1Y2tldE5hbWUiLCJjb21tYW5kIiwiQnVja2V0IiwiUHJlZml4IiwicmVzcG9uc2UiLCJzZW5kIiwicmVnaW9uIiwiZmlsZXMiLCJDb250ZW50cyIsIm1hcCIsIm9iaiIsImtleSIsIktleSIsImxhc3RNb2RpZmllZCIsIkxhc3RNb2RpZmllZCIsInNpemUiLCJTaXplIiwidXJsIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsIkRFTEVURSIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJnZXQiLCJzdWNjZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/files/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/aws-config.ts":
/*!***************************!*\
  !*** ./lib/aws-config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAWSConfig: () => (/* binding */ getAWSConfig),\n/* harmony export */   getBucketName: () => (/* binding */ getBucketName),\n/* harmony export */   getRegion: () => (/* binding */ getRegion),\n/* harmony export */   getS3Client: () => (/* binding */ getS3Client),\n/* harmony export */   initializeAWS: () => (/* binding */ initializeAWS),\n/* harmony export */   testAWSConnection: () => (/* binding */ testAWSConnection)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_credential_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/credential-providers */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+credential-providers@3.828.0/node_modules/@aws-sdk/credential-providers/dist-es/fromIni.js\");\n/* harmony import */ var _aws_sdk_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/shared-ini-file-loader */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+shared-ini-file-loader@3.374.0/node_modules/@aws-sdk/shared-ini-file-loader/dist-es/index.js\");\n\n\n\nlet awsConfig = null;\nasync function getAWSConfig() {\n    if (awsConfig) {\n        return awsConfig;\n    }\n    try {\n        // Check if we're in production/deployment environment (has env vars)\n        const isProduction = process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY;\n        let region;\n        let bucketName;\n        let s3Client;\n        if (isProduction) {\n            // Production: Use environment variables (Vercel, etc.)\n            region = process.env.AWS_REGION || 'us-east-1';\n            bucketName = process.env.AWS_S3_BUCKET_NAME || 'zibly-frontend-prod';\n            s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n                region,\n                credentials: {\n                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n                }\n            });\n            console.log(`AWS configured for production with region: ${region}, bucket: ${bucketName}`);\n        } else {\n            // Development: Use AWS CLI configuration\n            const sharedConfig = await (0,_aws_sdk_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.loadSharedConfigFiles)();\n            const profile = process.env.AWS_PROFILE || 'default';\n            region = sharedConfig.configFile?.[profile]?.region || sharedConfig.credentialsFile?.[profile]?.region || 'us-east-1';\n            bucketName = sharedConfig.configFile?.[profile]?.s3_bucket || process.env.AWS_S3_BUCKET_NAME || 'zibly-frontend-prod';\n            s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n                region,\n                credentials: (0,_aws_sdk_credential_providers__WEBPACK_IMPORTED_MODULE_2__.fromIni)({\n                    profile\n                })\n            });\n            console.log(`AWS configured for development with profile: ${profile}, region: ${region}, bucket: ${bucketName}`);\n        }\n        awsConfig = {\n            region,\n            bucketName,\n            s3Client\n        };\n        return awsConfig;\n    } catch (error) {\n        console.error('Failed to load AWS configuration:', error);\n        if (process.env.AWS_ACCESS_KEY_ID) {\n            throw new Error(`AWS configuration failed in production. Check your environment variables: ${error}`);\n        } else {\n            throw new Error(`AWS configuration failed. Please run 'aws configure' to set up your credentials: ${error}`);\n        }\n    }\n}\nasync function getS3Client() {\n    const config = await getAWSConfig();\n    return config.s3Client;\n}\nasync function getBucketName() {\n    const config = await getAWSConfig();\n    return config.bucketName;\n}\nasync function getRegion() {\n    const config = await getAWSConfig();\n    return config.region;\n}\n// Test AWS configuration\nasync function testAWSConnection() {\n    try {\n        const s3Client = await getS3Client();\n        const bucketName = await getBucketName();\n        // Try to list objects in the bucket (this will fail if bucket doesn't exist or no permissions)\n        const { ListObjectsV2Command } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\", 23));\n        await s3Client.send(new ListObjectsV2Command({\n            Bucket: bucketName,\n            MaxKeys: 1\n        }));\n        console.log('AWS S3 connection successful');\n        return true;\n    } catch (error) {\n        console.warn('AWS S3 connection test failed:', error);\n        return false;\n    }\n}\n// Setup function to verify AWS configuration on app startup\nasync function initializeAWS() {\n    try {\n        await getAWSConfig();\n        const isConnected = await testAWSConnection();\n        if (!isConnected) {\n            console.warn('AWS S3 connection test failed. File uploads may not work properly.');\n        }\n    } catch (error) {\n        console.error('AWS initialization failed:', error);\n        console.log('To fix this, run: aws configure');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87SUFDVDtBQUNGO0FBRUEsNERBQTREO0FBQ3JELGVBQWVZO0lBQ3BCLElBQUk7UUFDRixNQUFNbEM7UUFDTixNQUFNbUMsY0FBYyxNQUFNUDtRQUUxQixJQUFJLENBQUNPLGFBQWE7WUFDaEJyQixRQUFRbUIsSUFBSSxDQUFDO1FBQ2Y7SUFDRixFQUFFLE9BQU9YLE9BQU87UUFDZFIsUUFBUVEsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUNSLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnVuby96aWJseS1mcm9udGVuZC9saWIvYXdzLWNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTM0NsaWVudCB9IGZyb20gJ0Bhd3Mtc2RrL2NsaWVudC1zMydcbmltcG9ydCB7IGZyb21JbmkgfSBmcm9tICdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycydcbmltcG9ydCB7IGxvYWRTaGFyZWRDb25maWdGaWxlcyB9IGZyb20gJ0Bhd3Mtc2RrL3NoYXJlZC1pbmktZmlsZS1sb2FkZXInXG5cbmludGVyZmFjZSBBV1NDb25maWcge1xuICByZWdpb246IHN0cmluZ1xuICBidWNrZXROYW1lOiBzdHJpbmdcbiAgczNDbGllbnQ6IFMzQ2xpZW50XG59XG5cbmxldCBhd3NDb25maWc6IEFXU0NvbmZpZyB8IG51bGwgPSBudWxsXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBV1NDb25maWcoKTogUHJvbWlzZTxBV1NDb25maWc+IHtcbiAgaWYgKGF3c0NvbmZpZykge1xuICAgIHJldHVybiBhd3NDb25maWdcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UncmUgaW4gcHJvZHVjdGlvbi9kZXBsb3ltZW50IGVudmlyb25tZW50IChoYXMgZW52IHZhcnMpXG4gICAgY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQgJiYgcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZXG5cbiAgICBsZXQgcmVnaW9uOiBzdHJpbmdcbiAgICBsZXQgYnVja2V0TmFtZTogc3RyaW5nXG4gICAgbGV0IHMzQ2xpZW50OiBTM0NsaWVudFxuXG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gUHJvZHVjdGlvbjogVXNlIGVudmlyb25tZW50IHZhcmlhYmxlcyAoVmVyY2VsLCBldGMuKVxuICAgICAgcmVnaW9uID0gcHJvY2Vzcy5lbnYuQVdTX1JFR0lPTiB8fCAndXMtZWFzdC0xJ1xuICAgICAgYnVja2V0TmFtZSA9IHByb2Nlc3MuZW52LkFXU19TM19CVUNLRVRfTkFNRSB8fCAnemlibHktZnJvbnRlbmQtcHJvZCdcbiAgICAgIFxuICAgICAgczNDbGllbnQgPSBuZXcgUzNDbGllbnQoe1xuICAgICAgICByZWdpb24sXG4gICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52LkFXU19BQ0NFU1NfS0VZX0lEISxcbiAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSEsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBjb25zb2xlLmxvZyhgQVdTIGNvbmZpZ3VyZWQgZm9yIHByb2R1Y3Rpb24gd2l0aCByZWdpb246ICR7cmVnaW9ufSwgYnVja2V0OiAke2J1Y2tldE5hbWV9YClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGV2ZWxvcG1lbnQ6IFVzZSBBV1MgQ0xJIGNvbmZpZ3VyYXRpb25cbiAgICAgIGNvbnN0IHNoYXJlZENvbmZpZyA9IGF3YWl0IGxvYWRTaGFyZWRDb25maWdGaWxlcygpXG4gICAgICBjb25zdCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuQVdTX1BST0ZJTEUgfHwgJ2RlZmF1bHQnXG4gICAgICBcbiAgICAgIHJlZ2lvbiA9IHNoYXJlZENvbmZpZy5jb25maWdGaWxlPy5bcHJvZmlsZV0/LnJlZ2lvbiB8fCBcbiAgICAgICAgICAgICAgIHNoYXJlZENvbmZpZy5jcmVkZW50aWFsc0ZpbGU/Lltwcm9maWxlXT8ucmVnaW9uIHx8IFxuICAgICAgICAgICAgICAgJ3VzLWVhc3QtMSdcblxuICAgICAgYnVja2V0TmFtZSA9IHNoYXJlZENvbmZpZy5jb25maWdGaWxlPy5bcHJvZmlsZV0/LnMzX2J1Y2tldCB8fCBcbiAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BV1NfUzNfQlVDS0VUX05BTUUgfHxcbiAgICAgICAgICAgICAgICAgICAnemlibHktZnJvbnRlbmQtcHJvZCdcblxuICAgICAgczNDbGllbnQgPSBuZXcgUzNDbGllbnQoe1xuICAgICAgICByZWdpb24sXG4gICAgICAgIGNyZWRlbnRpYWxzOiBmcm9tSW5pKHsgcHJvZmlsZSB9KVxuICAgICAgfSlcblxuICAgICAgY29uc29sZS5sb2coYEFXUyBjb25maWd1cmVkIGZvciBkZXZlbG9wbWVudCB3aXRoIHByb2ZpbGU6ICR7cHJvZmlsZX0sIHJlZ2lvbjogJHtyZWdpb259LCBidWNrZXQ6ICR7YnVja2V0TmFtZX1gKVxuICAgIH1cblxuICAgIGF3c0NvbmZpZyA9IHtcbiAgICAgIHJlZ2lvbixcbiAgICAgIGJ1Y2tldE5hbWUsXG4gICAgICBzM0NsaWVudFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYXdzQ29uZmlnXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgQVdTIGNvbmZpZ3VyYXRpb246JywgZXJyb3IpXG4gICAgXG4gICAgaWYgKHByb2Nlc3MuZW52LkFXU19BQ0NFU1NfS0VZX0lEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFXUyBjb25maWd1cmF0aW9uIGZhaWxlZCBpbiBwcm9kdWN0aW9uLiBDaGVjayB5b3VyIGVudmlyb25tZW50IHZhcmlhYmxlczogJHtlcnJvcn1gKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFXUyBjb25maWd1cmF0aW9uIGZhaWxlZC4gUGxlYXNlIHJ1biAnYXdzIGNvbmZpZ3VyZScgdG8gc2V0IHVwIHlvdXIgY3JlZGVudGlhbHM6ICR7ZXJyb3J9YClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFMzQ2xpZW50KCk6IFByb21pc2U8UzNDbGllbnQ+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0QVdTQ29uZmlnKClcbiAgcmV0dXJuIGNvbmZpZy5zM0NsaWVudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnVja2V0TmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRBV1NDb25maWcoKVxuICByZXR1cm4gY29uZmlnLmJ1Y2tldE5hbWVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRBV1NDb25maWcoKVxuICByZXR1cm4gY29uZmlnLnJlZ2lvblxufVxuXG4vLyBUZXN0IEFXUyBjb25maWd1cmF0aW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdEFXU0Nvbm5lY3Rpb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgczNDbGllbnQgPSBhd2FpdCBnZXRTM0NsaWVudCgpXG4gICAgY29uc3QgYnVja2V0TmFtZSA9IGF3YWl0IGdldEJ1Y2tldE5hbWUoKVxuICAgIFxuICAgIC8vIFRyeSB0byBsaXN0IG9iamVjdHMgaW4gdGhlIGJ1Y2tldCAodGhpcyB3aWxsIGZhaWwgaWYgYnVja2V0IGRvZXNuJ3QgZXhpc3Qgb3Igbm8gcGVybWlzc2lvbnMpXG4gICAgY29uc3QgeyBMaXN0T2JqZWN0c1YyQ29tbWFuZCB9ID0gYXdhaXQgaW1wb3J0KCdAYXdzLXNkay9jbGllbnQtczMnKVxuICAgIGF3YWl0IHMzQ2xpZW50LnNlbmQobmV3IExpc3RPYmplY3RzVjJDb21tYW5kKHtcbiAgICAgIEJ1Y2tldDogYnVja2V0TmFtZSxcbiAgICAgIE1heEtleXM6IDFcbiAgICB9KSlcbiAgICBcbiAgICBjb25zb2xlLmxvZygnQVdTIFMzIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bCcpXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oJ0FXUyBTMyBjb25uZWN0aW9uIHRlc3QgZmFpbGVkOicsIGVycm9yKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFNldHVwIGZ1bmN0aW9uIHRvIHZlcmlmeSBBV1MgY29uZmlndXJhdGlvbiBvbiBhcHAgc3RhcnR1cFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVBV1MoKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZ2V0QVdTQ29uZmlnKClcbiAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGF3YWl0IHRlc3RBV1NDb25uZWN0aW9uKClcbiAgICBcbiAgICBpZiAoIWlzQ29ubmVjdGVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0FXUyBTMyBjb25uZWN0aW9uIHRlc3QgZmFpbGVkLiBGaWxlIHVwbG9hZHMgbWF5IG5vdCB3b3JrIHByb3Blcmx5LicpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FXUyBpbml0aWFsaXphdGlvbiBmYWlsZWQ6JywgZXJyb3IpXG4gICAgY29uc29sZS5sb2coJ1RvIGZpeCB0aGlzLCBydW46IGF3cyBjb25maWd1cmUnKVxuICB9XG59ICJdLCJuYW1lcyI6WyJTM0NsaWVudCIsImZyb21JbmkiLCJsb2FkU2hhcmVkQ29uZmlnRmlsZXMiLCJhd3NDb25maWciLCJnZXRBV1NDb25maWciLCJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiQVdTX0FDQ0VTU19LRVlfSUQiLCJBV1NfU0VDUkVUX0FDQ0VTU19LRVkiLCJyZWdpb24iLCJidWNrZXROYW1lIiwiczNDbGllbnQiLCJBV1NfUkVHSU9OIiwiQVdTX1MzX0JVQ0tFVF9OQU1FIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSIsImNvbnNvbGUiLCJsb2ciLCJzaGFyZWRDb25maWciLCJwcm9maWxlIiwiQVdTX1BST0ZJTEUiLCJjb25maWdGaWxlIiwiY3JlZGVudGlhbHNGaWxlIiwiczNfYnVja2V0IiwiZXJyb3IiLCJFcnJvciIsImdldFMzQ2xpZW50IiwiY29uZmlnIiwiZ2V0QnVja2V0TmFtZSIsImdldFJlZ2lvbiIsInRlc3RBV1NDb25uZWN0aW9uIiwiTGlzdE9iamVjdHNWMkNvbW1hbmQiLCJzZW5kIiwiQnVja2V0IiwiTWF4S2V5cyIsIndhcm4iLCJpbml0aWFsaXplQVdTIiwiaXNDb25uZWN0ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/aws-config.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fbruno%2Fzibly-frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbruno%2Fzibly-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fbruno%2Fzibly-frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbruno%2Fzibly-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_bruno_zibly_frontend_app_api_files_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/files/route.ts */ \"(rsc)/./app/api/files/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/files/route\",\n        pathname: \"/api/files\",\n        filename: \"route\",\n        bundlePath: \"app/api/files/route\"\n    },\n    resolvedPagePath: \"/Users/bruno/zibly-frontend/app/api/files/route.ts\",\n    nextConfigOutput,\n    userland: _Users_bruno_zibly_frontend_app_api_files_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfcmVhY3QtZG9tQDE5LjEuMF9yZWFjdEAxOS4xLjBfX3JlYWN0QDE5LjEuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmaWxlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZmlsZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmaWxlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmJydW5vJTJGemlibHktZnJvbnRlbmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYnJ1bm8lMkZ6aWJseS1mcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2JydW5vL3ppYmx5LWZyb250ZW5kL2FwcC9hcGkvZmlsZXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2ZpbGVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZmlsZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2ZpbGVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2JydW5vL3ppYmx5LWZyb250ZW5kL2FwcC9hcGkvZmlsZXMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fbruno%2Fzibly-frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbruno%2Fzibly-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@aws-sdk+core@3.826.0","vendor-chunks/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/@smithy+types@4.3.1","vendor-chunks/@smithy+shared-ini-file-loader@4.0.4","vendor-chunks/@smithy+shared-ini-file-loader@1.1.0","vendor-chunks/@aws-sdk+credential-provider-ini@3.828.0","vendor-chunks/@smithy+property-provider@4.0.4","vendor-chunks/@aws-sdk+shared-ini-file-loader@3.374.0","vendor-chunks/@aws-sdk+credential-providers@3.828.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fbruno%2Fzibly-frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbruno%2Fzibly-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();