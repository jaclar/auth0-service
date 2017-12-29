#!/groovy


pipeline {
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
                echo 'deploy step'
            }

        }
    }
}
