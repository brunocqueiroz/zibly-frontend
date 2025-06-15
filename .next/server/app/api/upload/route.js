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
exports.id = "app/api/upload/route";
exports.ids = ["app/api/upload/route"];
exports.modules = {

/***/ "(rsc)/./app/api/upload/route.ts":
/*!*********************************!*\
  !*** ./app/api/upload/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/s3-request-presigner */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+s3-request-presigner@3.828.0/node_modules/@aws-sdk/s3-request-presigner/dist-es/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_aws_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/aws-config */ \"(rsc)/./lib/aws-config.ts\");\n\n\n\n\nasync function POST(request) {\n    try {\n        const { fileName, fileType } = await request.json();\n        // Get AWS configuration from CLI setup\n        const s3Client = await (0,_lib_aws_config__WEBPACK_IMPORTED_MODULE_3__.getS3Client)();\n        const bucketName = await (0,_lib_aws_config__WEBPACK_IMPORTED_MODULE_3__.getBucketName)();\n        const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.PutObjectCommand({\n            Bucket: bucketName,\n            Key: `uploads/${Date.now()}-${fileName}`,\n            ContentType: fileType\n        });\n        const signedUrl = await (0,_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__.getSignedUrl)(s3Client, command, {\n            expiresIn: 3600\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            uploadUrl: signedUrl,\n            key: `uploads/${Date.now()}-${fileName}`\n        });\n    } catch (error) {\n        console.error('Error generating signed URL:', error);\n        // Provide helpful error message for AWS configuration issues\n        if (error instanceof Error && error.message.includes('AWS configuration failed')) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: 'AWS not configured. Please run \"aws configure\" to set up your credentials.'\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: 'Failed to generate upload URL'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0Q7QUFDTztBQUNMO0FBQ007QUFFdkQsZUFBZUssS0FBS0MsT0FBb0I7SUFDN0MsSUFBSTtRQUNGLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixRQUFRRyxJQUFJO1FBRWpELHVDQUF1QztRQUN2QyxNQUFNQyxXQUFXLE1BQU1QLDREQUFXQTtRQUNsQyxNQUFNUSxhQUFhLE1BQU1QLDhEQUFhQTtRQUV0QyxNQUFNUSxVQUFVLElBQUlaLGdFQUFnQkEsQ0FBQztZQUNuQ2EsUUFBUUY7WUFDUkcsS0FBSyxDQUFDLFFBQVEsRUFBRUMsS0FBS0MsR0FBRyxHQUFHLENBQUMsRUFBRVQsVUFBVTtZQUN4Q1UsYUFBYVQ7UUFDZjtRQUVBLE1BQU1VLFlBQVksTUFBTWpCLDJFQUFZQSxDQUFDUyxVQUFVRSxTQUFTO1lBQUVPLFdBQVc7UUFBSztRQUUxRSxPQUFPakIscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUN2QlcsV0FBV0Y7WUFDWEcsS0FBSyxDQUFDLFFBQVEsRUFBRU4sS0FBS0MsR0FBRyxHQUFHLENBQUMsRUFBRVQsVUFBVTtRQUMxQztJQUNGLEVBQUUsT0FBT2UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUU5Qyw2REFBNkQ7UUFDN0QsSUFBSUEsaUJBQWlCRSxTQUFTRixNQUFNRyxPQUFPLENBQUNDLFFBQVEsQ0FBQyw2QkFBNkI7WUFDaEYsT0FBT3hCLHFEQUFZQSxDQUFDTyxJQUFJLENBQ3RCO2dCQUFFYSxPQUFPO1lBQTZFLEdBQ3RGO2dCQUFFSyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPekIscURBQVlBLENBQUNPLElBQUksQ0FDdEI7WUFBRWEsT0FBTztRQUFnQyxHQUN6QztZQUFFSyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2JydW5vL3ppYmx5LWZyb250ZW5kL2FwcC9hcGkvdXBsb2FkL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFB1dE9iamVjdENvbW1hbmQgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtczMnO1xuaW1wb3J0IHsgZ2V0U2lnbmVkVXJsIH0gZnJvbSAnQGF3cy1zZGsvczMtcmVxdWVzdC1wcmVzaWduZXInO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGdldFMzQ2xpZW50LCBnZXRCdWNrZXROYW1lIH0gZnJvbSAnQC9saWIvYXdzLWNvbmZpZyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBmaWxlTmFtZSwgZmlsZVR5cGUgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIFxuICAgIC8vIEdldCBBV1MgY29uZmlndXJhdGlvbiBmcm9tIENMSSBzZXR1cFxuICAgIGNvbnN0IHMzQ2xpZW50ID0gYXdhaXQgZ2V0UzNDbGllbnQoKTtcbiAgICBjb25zdCBidWNrZXROYW1lID0gYXdhaXQgZ2V0QnVja2V0TmFtZSgpO1xuICAgIFxuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgUHV0T2JqZWN0Q29tbWFuZCh7XG4gICAgICBCdWNrZXQ6IGJ1Y2tldE5hbWUsXG4gICAgICBLZXk6IGB1cGxvYWRzLyR7RGF0ZS5ub3coKX0tJHtmaWxlTmFtZX1gLFxuICAgICAgQ29udGVudFR5cGU6IGZpbGVUeXBlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2lnbmVkVXJsID0gYXdhaXQgZ2V0U2lnbmVkVXJsKHMzQ2xpZW50LCBjb21tYW5kLCB7IGV4cGlyZXNJbjogMzYwMCB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxuICAgICAgdXBsb2FkVXJsOiBzaWduZWRVcmwsXG4gICAgICBrZXk6IGB1cGxvYWRzLyR7RGF0ZS5ub3coKX0tJHtmaWxlTmFtZX1gXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBzaWduZWQgVVJMOicsIGVycm9yKTtcbiAgICBcbiAgICAvLyBQcm92aWRlIGhlbHBmdWwgZXJyb3IgbWVzc2FnZSBmb3IgQVdTIGNvbmZpZ3VyYXRpb24gaXNzdWVzXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQVdTIGNvbmZpZ3VyYXRpb24gZmFpbGVkJykpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ0FXUyBub3QgY29uZmlndXJlZC4gUGxlYXNlIHJ1biBcImF3cyBjb25maWd1cmVcIiB0byBzZXQgdXAgeW91ciBjcmVkZW50aWFscy4nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBnZW5lcmF0ZSB1cGxvYWQgVVJMJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiUHV0T2JqZWN0Q29tbWFuZCIsImdldFNpZ25lZFVybCIsIk5leHRSZXNwb25zZSIsImdldFMzQ2xpZW50IiwiZ2V0QnVja2V0TmFtZSIsIlBPU1QiLCJyZXF1ZXN0IiwiZmlsZU5hbWUiLCJmaWxlVHlwZSIsImpzb24iLCJzM0NsaWVudCIsImJ1Y2tldE5hbWUiLCJjb21tYW5kIiwiQnVja2V0IiwiS2V5IiwiRGF0ZSIsIm5vdyIsIkNvbnRlbnRUeXBlIiwic2lnbmVkVXJsIiwiZXhwaXJlc0luIiwidXBsb2FkVXJsIiwia2V5IiwiZXJyb3IiLCJjb25zb2xlIiwiRXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/aws-config.ts":
/*!***************************!*\
  !*** ./lib/aws-config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAWSConfig: () => (/* binding */ getAWSConfig),\n/* harmony export */   getBucketName: () => (/* binding */ getBucketName),\n/* harmony export */   getRegion: () => (/* binding */ getRegion),\n/* harmony export */   getS3Client: () => (/* binding */ getS3Client),\n/* harmony export */   initializeAWS: () => (/* binding */ initializeAWS),\n/* harmony export */   testAWSConnection: () => (/* binding */ testAWSConnection)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_credential_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/credential-providers */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+credential-providers@3.828.0/node_modules/@aws-sdk/credential-providers/dist-es/fromIni.js\");\n/* harmony import */ var _aws_sdk_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/shared-ini-file-loader */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+shared-ini-file-loader@3.374.0/node_modules/@aws-sdk/shared-ini-file-loader/dist-es/index.js\");\n\n\n\nlet awsConfig = null;\nasync function getAWSConfig() {\n    if (awsConfig) {\n        return awsConfig;\n    }\n    try {\n        // Check if we're in production/deployment environment (has env vars)\n        const isProduction = process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY;\n        let region;\n        let bucketName;\n        let s3Client;\n        if (isProduction) {\n            // Production: Use environment variables (Vercel, etc.)\n            region = process.env.AWS_REGION || 'us-east-1';\n            bucketName = process.env.AWS_S3_BUCKET_NAME || 'zibly-frontend-prod';\n            s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n                region,\n                credentials: {\n                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n                }\n            });\n            console.log(`AWS configured for production with region: ${region}, bucket: ${bucketName}`);\n        } else {\n            // Development: Use AWS CLI configuration\n            const sharedConfig = await (0,_aws_sdk_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.loadSharedConfigFiles)();\n            const profile = process.env.AWS_PROFILE || 'default';\n            region = sharedConfig.configFile?.[profile]?.region || sharedConfig.credentialsFile?.[profile]?.region || 'us-east-1';\n            bucketName = sharedConfig.configFile?.[profile]?.s3_bucket || process.env.AWS_S3_BUCKET_NAME || 'zibly-frontend-prod';\n            s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n                region,\n                credentials: (0,_aws_sdk_credential_providers__WEBPACK_IMPORTED_MODULE_2__.fromIni)({\n                    profile\n                })\n            });\n            console.log(`AWS configured for development with profile: ${profile}, region: ${region}, bucket: ${bucketName}`);\n        }\n        awsConfig = {\n            region,\n            bucketName,\n            s3Client\n        };\n        return awsConfig;\n    } catch (error) {\n        console.error('Failed to load AWS configuration:', error);\n        if (process.env.AWS_ACCESS_KEY_ID) {\n            throw new Error(`AWS configuration failed in production. Check your environment variables: ${error}`);\n        } else {\n            throw new Error(`AWS configuration failed. Please run 'aws configure' to set up your credentials: ${error}`);\n        }\n    }\n}\nasync function getS3Client() {\n    const config = await getAWSConfig();\n    return config.s3Client;\n}\nasync function getBucketName() {\n    const config = await getAWSConfig();\n    return config.bucketName;\n}\nasync function getRegion() {\n    const config = await getAWSConfig();\n    return config.region;\n}\n// Test AWS configuration\nasync function testAWSConnection() {\n    try {\n        const s3Client = await getS3Client();\n        const bucketName = await getBucketName();\n        // Try to list objects in the bucket (this will fail if bucket doesn't exist or no permissions)\n        const { ListObjectsV2Command } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\", 23));\n        await s3Client.send(new ListObjectsV2Command({\n            Bucket: bucketName,\n            MaxKeys: 1\n        }));\n        console.log('AWS S3 connection successful');\n        return true;\n    } catch (error) {\n        console.warn('AWS S3 connection test failed:', error);\n        return false;\n    }\n}\n// Setup function to verify AWS configuration on app startup\nasync function initializeAWS() {\n    try {\n        await getAWSConfig();\n        const isConnected = await testAWSConnection();\n        if (!isConnected) {\n            console.warn('AWS S3 connection test failed. File uploads may not work properly.');\n        }\n    } catch (error) {\n        console.error('AWS initialization failed:', error);\n        console.log('To fix this, run: aws configure');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87SUFDVDtBQUNGO0FBRUEsNERBQTREO0FBQ3JELGVBQWVZO0lBQ3BCLElBQUk7UUFDRixNQUFNbEM7UUFDTixNQUFNbUMsY0FBYyxNQUFNUDtRQUUxQixJQUFJLENBQUNPLGFBQWE7WUFDaEJyQixRQUFRbUIsSUFBSSxDQUFDO1FBQ2Y7SUFDRixFQUFFLE9BQU9YLE9BQU87UUFDZFIsUUFBUVEsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUNSLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnVuby96aWJseS1mcm9udGVuZC9saWIvYXdzLWNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTM0NsaWVudCB9IGZyb20gJ0Bhd3Mtc2RrL2NsaWVudC1zMydcbmltcG9ydCB7IGZyb21JbmkgfSBmcm9tICdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycydcbmltcG9ydCB7IGxvYWRTaGFyZWRDb25maWdGaWxlcyB9IGZyb20gJ0Bhd3Mtc2RrL3NoYXJlZC1pbmktZmlsZS1sb2FkZXInXG5cbmludGVyZmFjZSBBV1NDb25maWcge1xuICByZWdpb246IHN0cmluZ1xuICBidWNrZXROYW1lOiBzdHJpbmdcbiAgczNDbGllbnQ6IFMzQ2xpZW50XG59XG5cbmxldCBhd3NDb25maWc6IEFXU0NvbmZpZyB8IG51bGwgPSBudWxsXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBV1NDb25maWcoKTogUHJvbWlzZTxBV1NDb25maWc+IHtcbiAgaWYgKGF3c0NvbmZpZykge1xuICAgIHJldHVybiBhd3NDb25maWdcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UncmUgaW4gcHJvZHVjdGlvbi9kZXBsb3ltZW50IGVudmlyb25tZW50IChoYXMgZW52IHZhcnMpXG4gICAgY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQgJiYgcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZXG5cbiAgICBsZXQgcmVnaW9uOiBzdHJpbmdcbiAgICBsZXQgYnVja2V0TmFtZTogc3RyaW5nXG4gICAgbGV0IHMzQ2xpZW50OiBTM0NsaWVudFxuXG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gUHJvZHVjdGlvbjogVXNlIGVudmlyb25tZW50IHZhcmlhYmxlcyAoVmVyY2VsLCBldGMuKVxuICAgICAgcmVnaW9uID0gcHJvY2Vzcy5lbnYuQVdTX1JFR0lPTiB8fCAndXMtZWFzdC0xJ1xuICAgICAgYnVja2V0TmFtZSA9IHByb2Nlc3MuZW52LkFXU19TM19CVUNLRVRfTkFNRSB8fCAnemlibHktZnJvbnRlbmQtcHJvZCdcbiAgICAgIFxuICAgICAgczNDbGllbnQgPSBuZXcgUzNDbGllbnQoe1xuICAgICAgICByZWdpb24sXG4gICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52LkFXU19BQ0NFU1NfS0VZX0lEISxcbiAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSEsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBjb25zb2xlLmxvZyhgQVdTIGNvbmZpZ3VyZWQgZm9yIHByb2R1Y3Rpb24gd2l0aCByZWdpb246ICR7cmVnaW9ufSwgYnVja2V0OiAke2J1Y2tldE5hbWV9YClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGV2ZWxvcG1lbnQ6IFVzZSBBV1MgQ0xJIGNvbmZpZ3VyYXRpb25cbiAgICAgIGNvbnN0IHNoYXJlZENvbmZpZyA9IGF3YWl0IGxvYWRTaGFyZWRDb25maWdGaWxlcygpXG4gICAgICBjb25zdCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuQVdTX1BST0ZJTEUgfHwgJ2RlZmF1bHQnXG4gICAgICBcbiAgICAgIHJlZ2lvbiA9IHNoYXJlZENvbmZpZy5jb25maWdGaWxlPy5bcHJvZmlsZV0/LnJlZ2lvbiB8fCBcbiAgICAgICAgICAgICAgIHNoYXJlZENvbmZpZy5jcmVkZW50aWFsc0ZpbGU/Lltwcm9maWxlXT8ucmVnaW9uIHx8IFxuICAgICAgICAgICAgICAgJ3VzLWVhc3QtMSdcblxuICAgICAgYnVja2V0TmFtZSA9IHNoYXJlZENvbmZpZy5jb25maWdGaWxlPy5bcHJvZmlsZV0/LnMzX2J1Y2tldCB8fCBcbiAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BV1NfUzNfQlVDS0VUX05BTUUgfHxcbiAgICAgICAgICAgICAgICAgICAnemlibHktZnJvbnRlbmQtcHJvZCdcblxuICAgICAgczNDbGllbnQgPSBuZXcgUzNDbGllbnQoe1xuICAgICAgICByZWdpb24sXG4gICAgICAgIGNyZWRlbnRpYWxzOiBmcm9tSW5pKHsgcHJvZmlsZSB9KVxuICAgICAgfSlcblxuICAgICAgY29uc29sZS5sb2coYEFXUyBjb25maWd1cmVkIGZvciBkZXZlbG9wbWVudCB3aXRoIHByb2ZpbGU6ICR7cHJvZmlsZX0sIHJlZ2lvbjogJHtyZWdpb259LCBidWNrZXQ6ICR7YnVja2V0TmFtZX1gKVxuICAgIH1cblxuICAgIGF3c0NvbmZpZyA9IHtcbiAgICAgIHJlZ2lvbixcbiAgICAgIGJ1Y2tldE5hbWUsXG4gICAgICBzM0NsaWVudFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYXdzQ29uZmlnXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgQVdTIGNvbmZpZ3VyYXRpb246JywgZXJyb3IpXG4gICAgXG4gICAgaWYgKHByb2Nlc3MuZW52LkFXU19BQ0NFU1NfS0VZX0lEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFXUyBjb25maWd1cmF0aW9uIGZhaWxlZCBpbiBwcm9kdWN0aW9uLiBDaGVjayB5b3VyIGVudmlyb25tZW50IHZhcmlhYmxlczogJHtlcnJvcn1gKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFXUyBjb25maWd1cmF0aW9uIGZhaWxlZC4gUGxlYXNlIHJ1biAnYXdzIGNvbmZpZ3VyZScgdG8gc2V0IHVwIHlvdXIgY3JlZGVudGlhbHM6ICR7ZXJyb3J9YClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFMzQ2xpZW50KCk6IFByb21pc2U8UzNDbGllbnQ+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0QVdTQ29uZmlnKClcbiAgcmV0dXJuIGNvbmZpZy5zM0NsaWVudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnVja2V0TmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRBV1NDb25maWcoKVxuICByZXR1cm4gY29uZmlnLmJ1Y2tldE5hbWVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRBV1NDb25maWcoKVxuICByZXR1cm4gY29uZmlnLnJlZ2lvblxufVxuXG4vLyBUZXN0IEFXUyBjb25maWd1cmF0aW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdEFXU0Nvbm5lY3Rpb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgczNDbGllbnQgPSBhd2FpdCBnZXRTM0NsaWVudCgpXG4gICAgY29uc3QgYnVja2V0TmFtZSA9IGF3YWl0IGdldEJ1Y2tldE5hbWUoKVxuICAgIFxuICAgIC8vIFRyeSB0byBsaXN0IG9iamVjdHMgaW4gdGhlIGJ1Y2tldCAodGhpcyB3aWxsIGZhaWwgaWYgYnVja2V0IGRvZXNuJ3QgZXhpc3Qgb3Igbm8gcGVybWlzc2lvbnMpXG4gICAgY29uc3QgeyBMaXN0T2JqZWN0c1YyQ29tbWFuZCB9ID0gYXdhaXQgaW1wb3J0KCdAYXdzLXNkay9jbGllbnQtczMnKVxuICAgIGF3YWl0IHMzQ2xpZW50LnNlbmQobmV3IExpc3RPYmplY3RzVjJDb21tYW5kKHtcbiAgICAgIEJ1Y2tldDogYnVja2V0TmFtZSxcbiAgICAgIE1heEtleXM6IDFcbiAgICB9KSlcbiAgICBcbiAgICBjb25zb2xlLmxvZygnQVdTIFMzIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bCcpXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oJ0FXUyBTMyBjb25uZWN0aW9uIHRlc3QgZmFpbGVkOicsIGVycm9yKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFNldHVwIGZ1bmN0aW9uIHRvIHZlcmlmeSBBV1MgY29uZmlndXJhdGlvbiBvbiBhcHAgc3RhcnR1cFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVBV1MoKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZ2V0QVdTQ29uZmlnKClcbiAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGF3YWl0IHRlc3RBV1NDb25uZWN0aW9uKClcbiAgICBcbiAgICBpZiAoIWlzQ29ubmVjdGVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0FXUyBTMyBjb25uZWN0aW9uIHRlc3QgZmFpbGVkLiBGaWxlIHVwbG9hZHMgbWF5IG5vdCB3b3JrIHByb3Blcmx5LicpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FXUyBpbml0aWFsaXphdGlvbiBmYWlsZWQ6JywgZXJyb3IpXG4gICAgY29uc29sZS5sb2coJ1RvIGZpeCB0aGlzLCBydW46IGF3cyBjb25maWd1cmUnKVxuICB9XG59ICJdLCJuYW1lcyI6WyJTM0NsaWVudCIsImZyb21JbmkiLCJsb2FkU2hhcmVkQ29uZmlnRmlsZXMiLCJhd3NDb25maWciLCJnZXRBV1NDb25maWciLCJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiQVdTX0FDQ0VTU19LRVlfSUQiLCJBV1NfU0VDUkVUX0FDQ0VTU19LRVkiLCJyZWdpb24iLCJidWNrZXROYW1lIiwiczNDbGllbnQiLCJBV1NfUkVHSU9OIiwiQVdTX1MzX0JVQ0tFVF9OQU1FIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSIsImNvbnNvbGUiLCJsb2ciLCJzaGFyZWRDb25maWciLCJwcm9maWxlIiwiQVdTX1BST0ZJTEUiLCJjb25maWdGaWxlIiwiY3JlZGVudGlhbHNGaWxlIiwiczNfYnVja2V0IiwiZXJyb3IiLCJFcnJvciIsImdldFMzQ2xpZW50IiwiY29uZmlnIiwiZ2V0QnVja2V0TmFtZSIsImdldFJlZ2lvbiIsInRlc3RBV1NDb25uZWN0aW9uIiwiTGlzdE9iamVjdHNWMkNvbW1hbmQiLCJzZW5kIiwiQnVja2V0IiwiTWF4S2V5cyIsIndhcm4iLCJpbml0aWFsaXplQVdTIiwiaXNDb25uZWN0ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/aws-config.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fbruno%2Fzibly-frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbruno%2Fzibly-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fbruno%2Fzibly-frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbruno%2Fzibly-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_bruno_zibly_frontend_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/upload/route.ts */ \"(rsc)/./app/api/upload/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/upload/route\",\n        pathname: \"/api/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/upload/route\"\n    },\n    resolvedPagePath: \"/Users/bruno/zibly-frontend/app/api/upload/route.ts\",\n    nextConfigOutput,\n    userland: _Users_bruno_zibly_frontend_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfcmVhY3QtZG9tQDE5LjEuMF9yZWFjdEAxOS4xLjBfX3JlYWN0QDE5LjEuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmJydW5vJTJGemlibHktZnJvbnRlbmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYnJ1bm8lMkZ6aWJseS1mcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDRztBQUNoRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2JydW5vL3ppYmx5LWZyb250ZW5kL2FwcC9hcGkvdXBsb2FkL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91cGxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91cGxvYWRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VwbG9hZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9icnVuby96aWJseS1mcm9udGVuZC9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fbruno%2Fzibly-frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbruno%2Fzibly-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@aws-sdk+core@3.826.0","vendor-chunks/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/@smithy+types@4.3.1","vendor-chunks/@smithy+core@3.5.3","vendor-chunks/@smithy+smithy-client@4.4.3","vendor-chunks/@smithy+util-stream@4.2.2","vendor-chunks/@aws-sdk+middleware-sdk-s3@3.826.0","vendor-chunks/@smithy+shared-ini-file-loader@4.0.4","vendor-chunks/@smithy+shared-ini-file-loader@1.1.0","vendor-chunks/@smithy+signature-v4@5.1.2","vendor-chunks/@smithy+node-http-handler@4.0.6","vendor-chunks/@smithy+middleware-endpoint@4.1.11","vendor-chunks/@smithy+protocol-http@5.1.2","vendor-chunks/@aws-sdk+credential-provider-ini@3.828.0","vendor-chunks/@smithy+property-provider@4.0.4","vendor-chunks/@smithy+node-config-provider@4.1.3","vendor-chunks/@smithy+fetch-http-handler@5.0.4","vendor-chunks/@smithy+util-utf8@4.0.0","vendor-chunks/@smithy+util-config-provider@4.0.0","vendor-chunks/@smithy+middleware-serde@4.0.8","vendor-chunks/@aws-sdk+s3-request-presigner@3.828.0","vendor-chunks/@smithy+util-uri-escape@4.0.0","vendor-chunks/@smithy+util-middleware@4.0.4","vendor-chunks/@smithy+util-base64@4.0.0","vendor-chunks/@aws-sdk+signature-v4-multi-region@3.826.0","vendor-chunks/@smithy+middleware-stack@4.0.4","vendor-chunks/@smithy+util-hex-encoding@4.0.0","vendor-chunks/@smithy+util-buffer-from@4.0.0","vendor-chunks/@smithy+url-parser@4.0.4","vendor-chunks/@smithy+querystring-parser@4.0.4","vendor-chunks/@smithy+querystring-builder@4.0.4","vendor-chunks/@smithy+is-array-buffer@4.0.0","vendor-chunks/@aws-sdk+util-format-url@3.821.0","vendor-chunks/@aws-sdk+util-arn-parser@3.804.0","vendor-chunks/@aws-sdk+shared-ini-file-loader@3.374.0","vendor-chunks/@aws-sdk+credential-providers@3.828.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fbruno%2Fzibly-frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbruno%2Fzibly-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();