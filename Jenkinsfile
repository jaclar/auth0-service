#!/groovy


pipeline {
    environment {
        AWS_ACCESS_KEY_ID     = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    }

    agent any
    // this tool will be used for all stages/steps except over-written
    tools {nodejs "node8"}
    stages {
        stage('POC') {
            steps {
                echo "Hello world! I am node ${env.NODE_NAME}"
            }
        }
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
            steps {
                sh "/usr/bin/packer build -var 'build_number=${env.BUILD_NUMBER}' packer/ami.json"
            }
        }
    }
}
