pipeline{
	agent any

	stages{
		stage('SSH Transfer'){
			script{
				sshPublisher(
					publishers: [
						sshPublisherDesc(
							configName: 'docker_host', 
							transfers: [
								sshTransfer(
									cleanRemote: false,
									excludes: '', 
									execCommand: 'sudo docker build -t sample:dev .', 
									execTimeout: 120000, 
									flatten: false, 
									makeEmptyDirs: false, 
									noDefaultExcludes: false, 
									patternSeparator: '[, ]+', 
									remoteDirectory: '', 
									remoteDirectorySDF: false, 
									removePrefix: '', 
									sourceFiles: 'chart-app/'
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