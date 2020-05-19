pipeline{
	agent any

	stages{
		stage('build docker image'){
			steps{
				script{
					sh 'docker build -t chrisgungaloo/chart-app:dev .'
				}
			}
		}

		stage('push docker image'){
			steps{
				withDockerRegistry([ credentialsId: "docker-creds" , url: ""]){
					sh 'docker push chrisgungaloo/chart-app:dev'
				}
			}
		}

		stage('SSH Transfer'){
			steps{
			script{
				sh 'ls'

				sshPublisher(
					continueOnError: false, failOnError: true,
					publishers: [
						sshPublisherDesc(
							configName: "docker_host",
							verbose: true,
							transfers: [
								sshTransfer(
									sourceFiles: "**/*",
									removePrefix: "/",
									remoteDirectory: "/home/ec2-user/",
									execCommand: "ls"

								)
							]
						)
					]
				)
			}
		}
		}
	}	
}