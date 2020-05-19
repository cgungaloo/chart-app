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
					publishers: [
						sshPublisherDesc(
							configName: 'docker_host', 
							transfers: [
								sshTransfer(
									cleanRemote: false,
									excludes: '', 
									execCommand: 'sudo docker -v', 
									execTimeout: 120000, 
									flatten: false, 
									makeEmptyDirs: false, 
									noDefaultExcludes: false, 
									patternSeparator: '[, ]+', 
									remoteDirectory: '/home/docker_admin_cg', 
									remoteDirectorySDF: false, 
									removePrefix: '', 
									sourceFiles: ''
									)
								], 
								usePromotionTimestamp: false, 
								useWorkspaceInPromotion: false, 
								verbose: false
								)
						]
						)
			}
		}
		}
	}	
}