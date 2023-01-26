pipeline {
   agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:latest'
    }
  }

   tools {nodejs "NodeJsWithCypress"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }

   stages {
        stage('e2e Tests') {
            steps {
                sh 'npm ci'
                sh 'npm run runAllTestCases'
            }

        }
   }
}