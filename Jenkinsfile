#!/groovy


pipeline {
    agent any

    nvm('version': 'v8.9.1') {
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
}
