pipeline{
    agent any
    stages {
    
        stage('Setup Python Virtual ENV'){
       
      steps  {
            sh '''
            chmod +x ./backend/envsetup.sh
            ./backend/envsetup.sh
            '''}
        }
         stage('Setup react  ENV'){
       
      steps  {
            sh '''
            chmod +x ./frontend/envReact.sh
            ./frontend/envReact.sh
            '''}
        }
        stage('Setup Gunicorn Setup'){
            steps {
                sh '''
                chmod +x ./backend/gunicorn.sh
                ./backend/gunicorn.sh
                '''
            }
        }
        stage('setup NGINX'){
            steps {
                sh '''
                chmod +x ./backend/nginx.sh
                ./backend/nginx.sh
                '''
            }
        }
    }
}
