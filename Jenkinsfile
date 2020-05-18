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
				script{
					sh 'docker push chrisgungaloo/chart-app:tagname'
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
									execCommand: 'sudo docker pull chrisgungaloo/chart-app:dev', 
									execTimeout: 120000, 
									flatten: false, 
									makeEmptyDirs: false, 
									noDefaultExcludes: false, 
									patternSeparator: '[, ]+', 
									remoteDirectory: '/home/ec2-user', 
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