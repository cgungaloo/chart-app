pipeline{
	agent any

	stages{
		stage('SSH Transfer'){
			steps{
			script{
				sh 'ls'

				sh 'docker build -t chrisgungaloo/chart-app:dev .'
				sh 'docker push chrisgungaloo/chart-app:tagname'

				// sshPublisher(
				// 	publishers: [
				// 		sshPublisherDesc(
				// 			configName: 'docker_host', 
				// 			transfers: [
				// 				sshTransfer(
				// 					cleanRemote: false,
				// 					excludes: '', 
				// 					execCommand: 'sudo docker build -t sample:dev .', 
				// 					execTimeout: 120000, 
				// 					flatten: false, 
				// 					makeEmptyDirs: false, 
				// 					noDefaultExcludes: false, 
				// 					patternSeparator: '[, ]+', 
				// 					remoteDirectory: '/home/ec2-user', 
				// 					remoteDirectorySDF: false, 
				// 					removePrefix: '', 
				// 					sourceFiles: '/chart-app'
				// 					)
				// 				], 
				// 				usePromotionTimestamp: false, 
				// 				useWorkspaceInPromotion: false, 
				// 				verbose: false
				// 				)
				// 		]
				// 		)
			}
		}
		}
	}	
}