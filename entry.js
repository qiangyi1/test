
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
	window.fetch = require('node-fetch');
    const AWS = require('aws-sdk');
    generateEmbedUrlForRegisteredUser();
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



