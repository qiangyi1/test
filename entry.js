

 let dashboard
 function onDashboardLoad(payload) {
     console.log("Do something when the dashboard is fully loaded.");
 }

 function onError(payload) {
     console.log("Do something when the dashboard fails loading");
 }

 function embedDashboard(obj) {
     var containerDiv = document.getElementById("embeddingContainer");
     var options = {
         // replace this dummy url with the one generated via embedding API
         url: obj.url,
         container: containerDiv,
         parameters: {
             country: "United States"
         },
         scrolling: "no",
         height: "700px",
         width: "1000px",
         locale: "en-US",
         footerPaddingEnabled: true
     };
     dashboard = QuickSightEmbedding.embedDashboard(options);
     dashboard.on("error", onError);
     dashboard.on("load", onDashboardLoad);
 }

 function onCountryChange(obj) {
     dashboard.setParameters({country: obj.value});
 }

  function getEmbedDashboardUrl() {
	 //window.fetch = require('node-fetch');
     //const AWS = require('aws-sdk');
     function errorCallback(){
        console.log(123)
    }
    function   getEmbedUrlCallback(){
        console.log(123)
    } 
    var paramsData = {
 	    IdentityPoolId: "us-east-1:ff16daae-9dda-4e45-a95c-9fa8c5b939f7"
    };

// set the Amazon Cognito region
 AWS.config.region = 'us-east-1';
// // initialize the Credentials object with our parameters
 AWS.config.credentials = new AWS.CognitoIdentityCredentials(paramsData);
 AWS.config.credentials.get(function(err,data) {
    if ( !err ) {
         var cognitoSyncClient = new AWS.CognitoSync();
 cognitoSyncClient.listDatasets({
     IdentityId: AWS.config.credentials.identityId,
     IdentityPoolId: "us-east-1:ff16daae-9dda-4e45-a95c-9fa8c5b939f7"
     // IdentityPoolId: "us-east-1:76b239eb-08cc-4712-ad0c-70eb09823cfa"
 }, function(err, data) {
     if ( !err ) {
        let temdata=AWS.config.credentials;
        var params = {
            IdentityPoolId: 'us-east-1:ff16daae-9dda-4e45-a95c-9fa8c5b939f7', /* required */
            IdentityId: temdata._identityId,
            TokenDuration: '5000000',
            Logins:{}
          };
          var cognitoidentity = new AWS.CognitoIdentity();
          //params.Logins['cognitoDeveloperProvidedName'] = 'Dhamodharan.Subramanian@harman.com'; 
          cognitoidentity.getOpenIdTokenForDeveloperIdentity(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
          });

      
   }
     else{      
         generateEmbedUrlForRegisteredUser(722436621188,'4ffc8fc5-2261-4d00-8b85-024d0399aa5c',data,'arn:aws:iam::722436621188:user/quicksigth_testuser','arn:aws:iam::722436621188:role/quicksightembed','12121',getEmbedUrlCallback,errorCallback);  
     }
 });
    //generateEmbedUrlForRegisteredUser(722436621188,'4ffc8fc5-2261-4d00-8b85-024d0399aa5c',temdata.sessionToken,'arn:aws:iam::722436621188:user/quicksigth_testuser','arn:aws:iam::722436621188:role/Cognito_jblwebportalAuth_Role',temdata.params.RoleSessionName,getEmbedUrlCallback,errorCallback);  
   }
 })

//  var cognitoSyncClient = new AWS.CognitoSync();
//  cognitoSyncClient.listDatasets({
//      IdentityId: AWS.config.credentials.identityId,
//      IdentityPoolId: "us-east-1:ff16daae-9dda-4e45-a95c-9fa8c5b939f7"
//      // IdentityPoolId: "us-east-1:76b239eb-08cc-4712-ad0c-70eb09823cfa"
//  }, function(err, data) {
//      if ( !err ) {
//          debugger;
//          var cognitoidentity = new AWS.CognitoIdentity();
//          var params = {
//              AllowUnauthenticatedIdentities: true, /* required */
//              IdentityPoolName: 'jblwebportal', /* required */
//              OpenIdConnectProviderARNs:['arn:aws:iam::722436621188:oidc-provider/cognito-idp.us-east-1.amazonaws.com/us-east-1_HiWhDwBfC']
//            };
//            cognitoidentity.createIdentityPool(params, function(err, data) {
//              if (err) console.log(err, err.stack); // an error occurred
//              else     console.log(data);           // successful response
//            });

      
//    }
//      else{      
//          generateEmbedUrlForRegisteredUser(722436621188,'4ffc8fc5-2261-4d00-8b85-024d0399aa5c',data,'arn:aws:iam::722436621188:user/quicksigth_testuser','arn:aws:iam::722436621188:role/quicksightembed','12121',getEmbedUrlCallback,errorCallback);  
//      }
//  });
// AWS.config.credentials.get(function(err,data) {
// 	if (err) {
// 		console.log("Error: "+err);
// 		return;
// 	}
// 	console.log("Cognito Identity Id: " + AWS.config.credentials.identityId);

// // 	// Other service clients will automatically use the Cognito Credentials provider
// // 	// configured in the JavaScript SDK.
// 	var cognitoSyncClient = new AWS.CognitoSync();
// 	cognitoSyncClient.listDatasets({
// 		IdentityId: AWS.config.credentials.identityId,
//         IdentityPoolId: "us-east-1:ff16daae-9dda-4e45-a95c-9fa8c5b939f7"
// 		// IdentityPoolId: "us-east-1:76b239eb-08cc-4712-ad0c-70eb09823cfa"
// 	}, function(err, data) {
// 		if ( !err ) {
//             var cognitoidentity = new AWS.CognitoIdentity();
//             var params = {
//                 AllowUnauthenticatedIdentities: true, /* required */
//                 IdentityPoolName: 'jblwebportal', /* required */
//                 OpenIdConnectProviderARNs:['arn:aws:iam::722436621188:oidc-provider/cognito-idp.us-east-1.amazonaws.com/us-east-1_HiWhDwBfC']
//               };
//               cognitoidentity.createIdentityPool(params, function(err, data) {
//                 if (err) console.log(err, err.stack); // an error occurred
//                 else     console.log(data);           // successful response
//               });

         
//       }
//         else{      
//             generateEmbedUrlForRegisteredUser(722436621188,'4ffc8fc5-2261-4d00-8b85-024d0399aa5c',data,'arn:aws:iam::722436621188:user/quicksigth_testuser','arn:aws:iam::722436621188:role/quicksightembed','12121',getEmbedUrlCallback,errorCallback);  
//         }
// 	});
// })

//     let temdata=AWS.config.credentials;
// generateEmbedUrlForRegisteredUser(722436621188,'4ffc8fc5-2261-4d00-8b85-024d0399aa5c',temdata.sessionToken,'arn:aws:iam::722436621188:user/quicksigth_testuser','arn:aws:iam::722436621188:role/Cognito_jblwebportalAuth_Role',temdata.params.RoleSessionName,getEmbedUrlCallback,errorCallback); 
// }); 
        // successful respons
    function generateEmbedUrlForRegisteredUser(
        accountId,
        dashboardId,
        openIdToken, // Cognito-based token
        userArn, // registered user arn
        roleArn, // IAM user role to use for embedding
        sessionName, // Session name for the roleArn assume role
        getEmbedUrlCallback, // GetEmbedUrl success callback method
        errorCallback // GetEmbedUrl error callback method
        ) {
        const stsClient = new AWS.STS();
        let stsParams = {
            RoleSessionName: sessionName,
            WebIdentityToken: openIdToken,
            RoleArn: roleArn
        }
    
        stsClient.assumeRoleWithWebIdentity(stsParams, function(err, data) {
            if (err) {
                console.log('Error assuming role');
                console.log(err, err.stack);
                errorCallback(err);
            } else {
                const getDashboardParams = {
                    "AwsAccountId": accountId,
                    "ExperienceConfiguration": {
                        "Dashboard": {
                            "InitialDashboardId": dashboardId
                        }
                    },
                    "UserArn": userArn,
                    "SessionLifetimeInMinutes": 600
                };
    
                const quicksightGetDashboard = new AWS.QuickSight({
                    region: process.env.AWS_REGION,
                    credentials: {
                        accessKeyId: data.Credentials.AccessKeyId,
                        secretAccessKey: data.Credentials.SecretAccessKey,
                        sessionToken: data.Credentials.SessionToken,
                        expiration: data.Credentials.Expiration
                    }
                });
    
                quicksightGetDashboard.generateEmbedUrlForRegisteredUser(getDashboardParams, function(err, data) {
                    if (err) {
                        console.log(err, err.stack);
                        errorCallback(err);
                    } else {
                        const result = {
                            "statusCode": 200,
                            "headers": {
                                "Access-Control-Allow-Origin": "*", // Use your website domain to secure access to GetEmbedUrl API
                                "Access-Control-Allow-Headers": "Content-Type"
                            },
                            "body": JSON.stringify(data),
                            "isBase64Encoded": false
                        }
                        embedDashboard(result);
                    }
                });
            }
        });
    }
  }
  



