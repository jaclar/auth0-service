#!/groovy
@Library('a-deploy') _

pipeline {
    environment {
        AWS_ACCESS_KEY_ID     = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    }

    agent any
    // this tool will be used for all stages/steps except over-written
    tools {nodejs "node8"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npm test'

            }
        }
        stage('Deploy') {
            awsDeploy 'lars-service', 'us-east-2', '[lars] auth0 service'
        }
    }
}
