

//defining the app module name "starter" : It is found on the <body> tag of the index.html file
//We are going to define all the controllers in this file
angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('myCtrlSignUp',function($scope, $cordovaSplashscreen, $cordovaSms, $ionicPopup, $location, $state, $timeout){


//---------------Creating Your Custom Alert Box Title-----------------
		$scope.showAlert = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Error Message',
		 template: msg
	   });
	 };

//---------------------------------------------------------------------

		

		$scope.onLogin = function(){

			if($scope.LoginForm.lemail.$invalid  || $scope.LoginForm.lpass.$invalid){
					$scope.showAlert('Your Email Address and Password is Required');
			}
			else{
				if($scope.lemail == "demo@gmail.com" && $scope.lpass == "demo"){

					$location.path('/menu/dashboard');
				}
				else{

					$scope.alert('Either the Email Address or Password is Incorrect');
				}
			}
		}

		$scope.onRegister = function(){

			if($scope.MyForm.firstname.$invalid){
				$scope.showAlert('Your First Name is Not Valid');
			}

			else{
				if($scope.MyForm.lastname.$invalid){

					$scope.showAlert('Your Last Name is Not Valid');
				}
				else{
					if($scope.MyForm.email.$invalid){
						$scope.res = $scope.MyForm.email.$error.email;
						$scope.showAlert('Your Email Address is not Valid');
					}

					else{
						if($scope.res){
							$scope.showAlert('Your Email Address is required');
						}
						else{
							if($scope.MyForm.phone_number.$invalid){
									$scope.showAlert('Your Phone Number is Not Valid');
							}

							else{
								if($scope.MyForm.phone_number.$error.phone_number){
									$scope.showAlert('Your Phone Number is Empty');
								}
								else{
									if($scope.MyForm.pword.$invalid || $scope.MyForm.pword.$error.pword){
											$scope.showAlert('Password is Required')
									}
									else{

										if($scope.pword != $scope.cpword){
											$scope.showAlert('The Password and Confirm Password Field Value Must be the Same');
										}
										else{

											var options = {
												      replaceLineBreaks: false, // true to replace \n by a new line, false by default
												      android: {
												        intent: 'INTENT' // send SMS with the native android SMS messaging
												          //intent: '' // send SMS without open any other app
												          //intent: 'INTENT' // send SMS inside a default SMS app
												      }
												    };

											$cordovaSms
												      .send('3614539048', 'SMS content', options)
												      .then(function() {
												      	//$location.path('/menu/dashboard');
												      	alert('yes');
												        // Success! SMS was sent
												      }, function(error) {
												        // An error occurred
												        alert('no');
												      });

												//$location.path('/menu/dashboard');	
											/*var success = function(){

												
											}*/

											/*var error = function(){

												//
											}*/
											//alert('html');
											//$location.path('dashboard');
											//$cordovaSms.send('3614539048', 'Message Sent', var intent = '', $location.path('/menu/dashboard'), error );
											
										}
									}
								}
							}
						}
					}
				}
			}
			//alert('html');
			//$location.path('/tab/dashboard');
		}



});





